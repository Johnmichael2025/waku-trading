import { createTransaction } from "@/actions/transaction";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { User } from "@/models/user.model";
import { UserContext } from "@/providers/context";
import { formatPrice } from "@/utils/format-price";
import { Alert, Button, Input, Select, SelectItem } from "@heroui/react";
import { useSearchParams } from "next/navigation";
import React, { useActionState, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type WithdrawProps = {
  tradingAccounts: TradingAccount[];
  user: User;
};
const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function Withdraw({ tradingAccounts, user }: WithdrawProps) {
  const [state, formAction, pending] = useActionState(
    createTransaction,
    initialState
  );
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState<TradingAccount | null>(
    null
  );
  const { addTransaction } = useContext(UserContext);
  const searchParams = useSearchParams();
  const defaultAccountId =
    searchParams?.get("transactionType") === TRANSACTION_TYPE.WITHDRAW
      ? searchParams?.get("accountId")
      : "";

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      addTransaction(state.data as unknown as Transaction);
    }
  }, [state, addTransaction]);

  const onChangeAccount = (id: number) => {
    const account = tradingAccounts.find(
      (account) => account.id === id
    ) as TradingAccount;
    setSelectedAccount(account);
  };

  return (
    <>
      <h3>Withdrawing from trading account</h3>
      <Alert color="primary" className="my-4 w-full md:w-[400px]">
        Total deductions request from one of your trading accounts by selecting
        an account from the list choosing a payment account and defining the
        desired withdrawal amount.
      </Alert>
      <h3 className="mt-4 mb-4">Total deductions request</h3>

      <form action={formAction}>
        <input type="hidden" name="user-id" value={user?.id} />
        <input
          type="hidden"
          name="user-name"
          value={`${user.firstName} ${user.lastName}`}
        />
        <input type="hidden" name="user-email" value={user?.email} />
        <input
          type="hidden"
          name="transaction-type"
          value={TRANSACTION_TYPE.WITHDRAW}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              From trading account
            </h3>
            <Select
              errorMessage="The selected trading account has an insufficient balance to make a withdrawal"
              isInvalid={!!selectedAccount && selectedAccount.balance < +amount}
              onChange={(e) => onChangeAccount(+e.target.value)}
              defaultSelectedKeys={defaultAccountId ? [defaultAccountId] : ""}
              isRequired
              name="trading-account-id"
              className="w-full md:w-[400px]"
              label="Select trading account"
            >
              {tradingAccounts.map((account) => (
                <SelectItem
                  key={account.id}
                  textValue={`${account.name} - ${formatPrice(
                    account.balance
                  )}`}
                >
                  <p className="font-bold">{account.name}</p>
                  <p>Amount: {account.balance}</p>
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Amount</h3>
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              isRequired
              name="amount"
              className="w-full md:w-[400px]"
              label="Amount"
              description="Please enter the amount in USD"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Withdrawal type</h3>
            <Select
              isRequired
              name="withdrawal-type"
              className="w-full md:w-[400px]"
              label="Select trading account"
            >
              <SelectItem key="Credit Card">Credit card</SelectItem>
              <SelectItem key="Crypto">Crypto</SelectItem>
              <SelectItem key="Wire">Wire</SelectItem>
            </Select>
          </div>
          <div className="bg-green w-full md:w-[400px] rounded-md p-4">
            <p className="text-white text-sm">
              Note: Total withdrawal request will be reviewed by our operator
              within 24 hours.
            </p>
          </div>
          <div>
            <Button
              isDisabled={
                !!selectedAccount && selectedAccount.balance < +amount
              }
              isLoading={pending}
              type="submit"
              className="w-full md:w-auto md:min-w-[400px]"
              color="default"
            >
              Withdraw
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
