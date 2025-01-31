"use client";
import CreateTradingAccount from "@/components/client-portal/CreateTradingAccount";
import TradingAccounts from "@/components/client-portal/TradingAccounts";
import Transactions from "@/components/client-portal/Transactions";
import { TRADING_TABS } from "@/enums/trading-tabs.enum";
import { UserContext } from "@/providers/context";
import { Tabs, Tab } from "@heroui/react";
import React, { useContext, useState } from "react";

export default function Trading() {
  const { user, tradingAccounts } = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState(TRADING_TABS.TRADING_ACCOUNTS);

  return (
    <>
      {user && (
        <div>
          <div className="flex justify-end">
            <span className="relative top-8">
              <strong>Total balance</strong>: 0.00 USD
            </span>
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
              <Transactions tradingAccounts={tradingAccounts} />
            </Tab>
            <Tab
              key={TRADING_TABS.CREATE_ACCOUNT}
              title="Create Trading account"
            >
              <CreateTradingAccount userId={user.id} />
            </Tab>
          </Tabs>
        </div>
      )}
    </>
  );
}
