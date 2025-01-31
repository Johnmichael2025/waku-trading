"use client";
import CreateTradingAccount from "@/components/client-portal/CreateTradingAccount";
import TradingAccounts from "@/components/client-portal/TradingAccounts";
import Transactions from "@/components/client-portal/Transactions";
import { UserContext } from "@/providers/context";
import { Tabs, Tab } from "@heroui/react";
import React, { useContext } from "react";

export default function Trading() {
  const { user, tradingAccounts } = useContext(UserContext);

  return (
    <>
      {user && (
        <div>
          <div className="flex justify-end">
            <span className="relative top-8">
              <strong>Total balance</strong>: 0.00 USD
            </span>
          </div>
          <Tabs aria-label="Options">
            <Tab key="trading-account" title="Trading Accounts">
              <TradingAccounts accounts={tradingAccounts} />
            </Tab>
            <Tab key="history" title="History">
              <Transactions tradingAccounts={tradingAccounts} />
            </Tab>
            <Tab key="create-account" title="Create Trading account">
              <CreateTradingAccount userId={user.id} />
            </Tab>
          </Tabs>
        </div>
      )}
    </>
  );
}
