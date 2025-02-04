"use client";
import Transactions from "@/components/client-portal/Transactions";
import { UserContext } from "@/providers/context";
import React, { useContext } from "react";

export default function ClientDashboard() {
  const { tradingAccounts, transactions } = useContext(UserContext);
  return (
    <>
      <div className="flex justify-between">
        <span>
          <strong>Total transactions</strong>: {transactions.length}
        </span>
        <span>
          <strong>Total balance</strong>: 0.00 USD
        </span>
      </div>
      <Transactions tradingAccounts={tradingAccounts} transactions={transactions} />
    </>
  );
}
