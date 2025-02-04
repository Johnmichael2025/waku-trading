import Transactions from "@/components/client-portal/Transactions";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { getTradingAccounts } from "@/utils/get-trading-accounts";
import React from "react";

const getTransactions = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/transactions`
  );
  return await res.json();
};
export default async function page() {
  const transactions = (await getTransactions()) as Transaction[];
  const tradingAccounts = (await getTradingAccounts()) as TradingAccount[];

  return (
    <Transactions
      transactions={transactions}
      tradingAccounts={tradingAccounts}
    />
  );
}
