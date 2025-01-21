"use client";
import TradingAccounts from "@/components/client-portal/TradingAccounts";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import React from "react";

export default function page() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="trading-account" title="Trading Accounts">
          <TradingAccounts />
        </Tab>
        <Tab key="history" title="History">
          Test
        </Tab>
        <Tab key="create-account" title="Create Trading account">
          Create Trading Account
        </Tab>
      </Tabs>
    </div>
  );
}
