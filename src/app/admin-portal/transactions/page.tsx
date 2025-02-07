import Transactions from "@/components/client-portal/Transactions";
import prisma from "@/lib/prisma";
import { Transaction } from "@/models/transaction.model";
import { getTradingAccounts } from "@/utils/get-trading-accounts";
import React from "react";

const getTransactions = async () => {
  try {
    const transactions = await prisma.transaction.findMany({
      include: {
        tradingAccount: true,
      },
      orderBy: {
        dateCreated: 'desc'
      },
    });
    return transactions as unknown as Transaction[];
  } catch (err) {
    console.log(err, "err");
    return [];
  }
};
export default async function page() {
  const transactions = await getTransactions();
  const tradingAccounts = await getTradingAccounts();

  return (
    <>
      <Transactions
        transactions={transactions}
        tradingAccounts={tradingAccounts}
      />
      
    </>
  );
}
