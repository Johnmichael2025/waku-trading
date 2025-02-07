"use client";
import CreateTradingAccount from "@/components/client-portal/CreateTradingAccount";
import TradingAccounts from "@/components/client-portal/TradingAccounts";
import Transactions from "@/components/client-portal/Transactions";
import { TRADING_TABS } from "@/enums/trading-tabs.enum";
import { UserContext } from "@/providers/context";
import { formatPrice } from "@/utils/format-price";
import { Tabs, Tab } from "@heroui/react";
import React, { useContext, useEffect, useState } from "react";

export default function Trading() {
  const { user, tradingAccounts, transactions } = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState(TRADING_TABS.TRADING_ACCOUNTS);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const total = tradingAccounts.reduce((acc, account) => {
      return acc + account.balance;
    }, 0);
    setTotalBalance(total);
  }, [tradingAccounts]);

  return (
    <>
      {user && (
        <div>
          <div className="float-end">
            <div className="bg-gray-200 p-4 relative text-center w-[250px]">
              <strong>Total balance</strong>: {formatPrice(totalBalance)}
            </div>
          </div>
          <Tabs
            color="primary"
            variant="bordered"
            selectedKey={selectedTab}
            onSelectionChange={(tab) => setSelectedTab(tab as TRADING_TABS)}
            aria-label="Options"
          >
            <Tab key={TRADING_TABS.TRADING_ACCOUNTS} title="Trading Accounts">
              <TradingAccounts
                onAddAccount={() => setSelectedTab(TRADING_TABS.CREATE_ACCOUNT)}
                accounts={tradingAccounts}
              />
            </Tab>
            <Tab key={TRADING_TABS.HISTORY} title="History">
              <Transactions
                transactions={transactions}
                tradingAccounts={tradingAccounts}
              />
            </Tab>
            <Tab
              key={TRADING_TABS.CREATE_ACCOUNT}
              title="Create Trading account"
            >
              <CreateTradingAccount
                user={user}
                accountsLength={tradingAccounts.length}
              />
            </Tab>
          </Tabs>
        </div>
      )}
    </>
  );
}
