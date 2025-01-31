"use client";
import Transactions from "@/components/client-portal/Transactions";
import { UserContext } from "@/providers/context";
import React, { useContext } from "react";

export default function Dashboard() {
  const { tradingAccounts } = useContext(UserContext);
  return (
    <>
      <div className="flex justify-end">
        <span>
          <strong>Total balance</strong>: 0.00 USD
        </span>
      </div>
      <Transactions tradingAccounts={tradingAccounts} />
    </>
  );
}
