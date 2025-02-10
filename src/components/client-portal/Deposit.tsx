"use client";
import { createTransaction } from "@/actions/transaction";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { User } from "@/models/user.model";
import { UserContext } from "@/providers/context";
import { Alert, Button, Chip, Input, Select, SelectItem } from "@heroui/react";
import { useSearchParams } from "next/navigation";
import React, { useActionState, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type DepositProps = {
  tradingAccounts: TradingAccount[];
  user: User;
};

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function Deposit({ tradingAccounts, user }: DepositProps) {
  const [state, formAction, pending] = useActionState(
    createTransaction,
    initialState
  );
  const [selectedAmount, setSelectedAmount] = useState("");
  const { addTransaction } = useContext(UserContext);
  const searchParams = useSearchParams();
  const defaultAccountId =
    searchParams?.get("transactionType") === TRANSACTION_TYPE.DEPOSIT
      ? searchParams?.get("accountId")
      : "";

  const onChangeAmount = (amount: string) => {
    setSelectedAmount(amount);
  };

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      addTransaction(state.data as unknown as Transaction);
    }
  }, [state, addTransaction]);

  return (
    <>
      <h3>Depositing to your trading account</h3>
      <Alert color="primary" className="my-4 w-full md:w-[400px]">
        Simply deposit to one of your trading accounts by selecting it from the
        list choosing a payment method and defining the desired deposit amount.
      </Alert>
      <h3 className="mt-4 mb-4">New deposit</h3>

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
          value={TRANSACTION_TYPE.DEPOSIT}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              Select trading account
            </h3>
            <Select
              defaultSelectedKeys={defaultAccountId ? [defaultAccountId] : ""}
              isRequired
              name="trading-account-id"
              className="w-full md:w-[400px]"
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
              isLoading={pending}
              type="submit"
              className="w-full md:w-auto md:min-w-[400px]"
              color="default"
            >
              Deposit
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
