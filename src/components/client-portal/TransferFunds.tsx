import { createTransaction } from "@/actions/transaction";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { UserContext } from "@/providers/context";
import { Button, Chip, Input, Select, SelectItem } from "@heroui/react";
import React, { useActionState, useContext, useEffect, useState } from "react";

type TransferFundsProps = {
  tradingAccounts: TradingAccount[];
  userId: number;
};

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function TransferFunds({
  tradingAccounts,
  userId,
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

  useEffect(() => {
    if (state.success) {
      addTransaction(state.data as unknown as Transaction);
    }
  }, [state, addTransaction]);

  return (
    <>
      <h3>Transfering funds between your trading accounts</h3>
      <p className="my-4 w-[400px]">
        Transfered funds will immediately be converted and credited to your
        trading account.
      </p>
      <h3 className="mt-4 mb-4">Transfer funds</h3>

      <form action={formAction}>
        <input type="hidden" name="user-id" value={userId} />
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
              disabledKeys={[selectedToAccount]}
              value={selectedFromAccount}
              onChange={(e) => setSelectedFromAccount(e.target.value)}
              name="trading-account-id"
              isRequired
              className="w-[400px]"
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
            <h3 className="text-default-500 text-small">To trading account</h3>
            <Select
              disabledKeys={[selectedFromAccount]}
              value={selectedToAccount}
              onChange={(e) => setSelectedToAccount(e.target.value)}
              name="to-trading-account-id"
              isRequired
              className="w-[400px]"
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
              required
              name="amount"
              className="w-[400px]"
              label="Amount"
              description="Please enter the amount in USD"
              type="text"
            />
          </div>
          <div className="flex flex-row gap-6">
            <div>
              <Chip
                onClick={() => onChangeAmount("250")}
                className="p-4 cursor-pointer min-w-[100px] text-center"
                color="primary"
              >
                250
              </Chip>
            </div>
            <div>
              <Chip
                onClick={() => onChangeAmount("500")}
                className="p-4 cursor-pointer min-w-[100px] text-center"
                color="primary"
              >
                500
              </Chip>
            </div>
            <div>
              <Chip
                onClick={() => onChangeAmount("1000")}
                className="p-4 cursor-pointer min-w-[100px] text-center"
                color="primary"
              >
                1000
              </Chip>
            </div>
          </div>
          <div>
            <Button
              isLoading={pending}
              type="submit"
              className="min-w-[400px]"
              color="default"
            >
              Transfer funds
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
