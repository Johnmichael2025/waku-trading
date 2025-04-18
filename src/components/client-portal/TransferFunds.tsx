import { createTransaction } from "@/actions/transaction";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { User } from "@/models/user.model";
import { UserContext } from "@/providers/context";
import { formatPrice } from "@/utils/format-price";
import { Alert, Button, Chip, Input, Select, SelectItem } from "@heroui/react";
import React, {
  useActionState,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";

type TransferFundsProps = {
  tradingAccounts: TradingAccount[];
  user: User;
};

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function TransferFunds({
  tradingAccounts,
  user,
}: TransferFundsProps) {
  const [state, formAction, pending] = useActionState(
    createTransaction,
    initialState
  );
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedFromAccount, setSelectedFromAccount] = useState("");
  const [selectedToAccount, setSelectedToAccount] = useState("");
  const { addTransaction } = useContext(UserContext);

  const onChangeAmount = (amount: string) => {
    setSelectedAmount(amount);
  };

  const isValidAmount = useCallback(() => {
    const account = tradingAccounts.find(
      (account) => account.id === +selectedFromAccount
    );
    return !!account && account.balance < +selectedAmount;
  }, [selectedAmount, selectedFromAccount, tradingAccounts]);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      addTransaction(state.data as unknown as Transaction);
    }
  }, [state, addTransaction]);

  return (
    <>
      <h3>Transfering funds between your trading accounts</h3>
      <Alert color="primary" className="my-4 w-full md:w-[400px]">
        Transfered funds will immediately be converted and credited to your
        trading account.
      </Alert>
      <h3 className="mt-4 mb-4">Transfer funds</h3>

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
          value={TRANSACTION_TYPE.TRANSFER_FUNDS}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              From trading account
            </h3>
            <Select
              errorMessage="The selected trading account has an insufficient balance to make a transfer to another account"
              isInvalid={isValidAmount()}
              disabledKeys={[selectedToAccount]}
              value={selectedFromAccount}
              onChange={(e) => setSelectedFromAccount(e.target.value)}
              name="trading-account-id"
              isRequired
              className="w-full md:w-[400px]"
              label="Select"
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
            <h3 className="text-default-500 text-small">To trading account</h3>
            <Select
              disabledKeys={[selectedFromAccount]}
              value={selectedToAccount}
              onChange={(e) => setSelectedToAccount(e.target.value)}
              name="to-trading-account-id"
              isRequired
              className="w-full md:w-[400px]"
              label="Select"
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
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              isRequired
              name="amount"
              className="w-full md:w-[400px]"
              label="Amount"
              description="Please enter the amount in USD"
              type="number"
            />
          </div>
          <div className="flex flex-row items-center justify-center md:items-start md:justify-start gap-6">
            <div>
              <Chip
                onClick={() => onChangeAmount("250")}
                className="p-4 cursor-pointer min-w-[90px] text-center"
                color="primary"
              >
                250
              </Chip>
            </div>
            <div>
              <Chip
                onClick={() => onChangeAmount("500")}
                className="p-4 cursor-pointer min-w-[90px] text-center"
                color="primary"
              >
                500
              </Chip>
            </div>
            <div>
              <Chip
                onClick={() => onChangeAmount("1000")}
                className="p-4 cursor-pointer min-w-[90px] text-center"
                color="primary"
              >
                1000
              </Chip>
            </div>
          </div>
          <div>
            <Button
              isDisabled={isValidAmount()}
              isLoading={pending}
              type="submit"
              className="w-full md:w-auto md:min-w-[400px]"
              color="default"
            >
              Transfer funds
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
