import { createTransaction } from "@/actions/transaction";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { User } from "@/models/user.model";
import { UserContext } from "@/providers/context";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import React, { useActionState, useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

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
  const { addTransaction } = useContext(UserContext);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      addTransaction(state.data as unknown as Transaction);
    }
  }, [state, addTransaction]);

  return (
    <>
      <h3>Withdrawing from trading account</h3>
      <p className="my-4 w-[400px]">
        Total deductions request from one of your trading accounts by selecting
        an account from the list choosing a payment account and defining the
        desired withdrawal amount.
      </p>
      <h3 className="mt-4 mb-4">Total deductions request</h3>

      <form action={formAction}>
        <input type="hidden" name="user-id" value={user?.id} />
        <input type="hidden" name="user-name" value={`${user.firstName} ${user.lastName}`} />
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
              name="trading-account-id"
              className="w-[400px]"
              label="Select trading account"
            >
              {tradingAccounts.map((account) => (
                <SelectItem key={account.id} textValue={account.name}>
                  <p className="font-bold">{account.name}</p>
                  <p>Amount: {account.balance}</p>
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Amount</h3>
            <Input
              name="amount"
              className="w-[400px]"
              label="Amount"
              description="Please enter the amount in USD"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Withdrawal type</h3>
            <Select
              name="withdrawal-type"
              className="w-[400px]"
              label="Select trading account"
            >
              <SelectItem key="Credit Card">Credit card</SelectItem>
              <SelectItem key="Crypto">Crypto</SelectItem>
              <SelectItem key="Wire">Wire</SelectItem>
            </Select>
          </div>
          <div className="bg-green w-[400px] rounded-md p-4">
            <p className="text-white text-sm">
              Note: Total withdrawal request will be reviewed by our operator
              within 24 hours.
            </p>
          </div>
          <div>
            <Button
              isLoading={pending}
              type="submit"
              className="min-w-[400px]"
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
