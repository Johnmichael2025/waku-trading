"use client";
import { createTransaction } from "@/actions/transaction";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { UserContext } from "@/providers/context";
import { Button, Chip, Input, Select, SelectItem } from "@heroui/react";
import React, { useActionState, useContext, useEffect, useState } from "react";

type DepositProps = {
  tradingAccounts: TradingAccount[]
  userId: number
};

const initialState = {
  success: false,
  message: '',
  data: null
}
export default function Deposit({ tradingAccounts, userId }: DepositProps) {
  const [state, formAction, pending] = useActionState(createTransaction, initialState)
  const [selectedAmount, setSelectedAmount] = useState("");
  const { addTransaction } = useContext(UserContext);

  const onChangeAmount = (amount: string) => {
    setSelectedAmount(amount);
  };

  useEffect(() => {
    if (state.success) {
      addTransaction(state.data as unknown as Transaction)
    }
  }, [state, addTransaction])

  return (
    <>
      <h3>Depositing to your trading account</h3>
      <p className="my-4 w-[400px]">
        Simply deposit to one of your trading accounts by selecting it from the
        list choosing a payment method and defining the desired deposit amount.
      </p>
      <h3 className="mt-4 mb-4">New deposit</h3>

      <form action={formAction}>
        <input type="hidden" name="user-id" value={userId} />
        <input type="hidden" name="transaction-type" value={TRANSACTION_TYPE.DEPOSIT} />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              Select trading account
            </h3>
            <Select
              isRequired
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
            <Button isLoading={pending} type="submit" className="min-w-[400px]" color="default">
              Deposit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
