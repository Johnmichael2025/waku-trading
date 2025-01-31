"use client";
import { Tabs, Tab } from "@heroui/react";
import React, { useContext } from "react";
import Deposit from "@/components/client-portal/Deposit";
import TransferFunds from "@/components/client-portal/TransferFunds";
import Withdraw from "@/components/client-portal/Withdraw";
import { UserContext } from "@/providers/context";
import Link from "next/link";

export default function Dashboard() {
  const { user, tradingAccounts } = useContext(UserContext);

  return (
    <>
      {user && (
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[60%]">
            <Tabs color="primary" variant="bordered" aria-label="Options">
              <Tab key="deposit" title="Deposit">
                <Deposit user={user} tradingAccounts={tradingAccounts} />
              </Tab>
              <Tab key="transfer-funds" title="Transfer funds">
                <TransferFunds user={user} tradingAccounts={tradingAccounts} />
              </Tab>
              <Tab key="withdraw" title="Withdraw">
                <Withdraw user={user} tradingAccounts={tradingAccounts} />
              </Tab>
            </Tabs>
          </div>
          <div className="flex-1 w-[40%]">
            <div className="flex bg-gray-200 justify-between p-4 rounded-sm">
              <div>
                <strong>Amount</strong>: 0.00 USD
              </div>
              <div>
                <Link className="text-blue-500" href="/client-portal/trading">
                  View trading accounts
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
