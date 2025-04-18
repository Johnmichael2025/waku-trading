"use client";
import { Tabs, Tab } from "@heroui/react";
import React, { useContext, useEffect, useState } from "react";
import Deposit from "@/components/client-portal/Deposit";
import TransferFunds from "@/components/client-portal/TransferFunds";
import Withdraw from "@/components/client-portal/Withdraw";
import { UserContext } from "@/providers/context";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { formatPrice } from "@/utils/format-price";

export default function Dashboard() {
  const { user, tradingAccounts } = useContext(UserContext);
  const searchParams = useSearchParams();
  const defaultTab =
    searchParams?.get("transactionType") || TRANSACTION_TYPE.DEPOSIT;
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
        <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
          <div className="flex flex-col w-full md:w-[60%]">
            <Tabs
              defaultSelectedKey={defaultTab}
              color="primary"
              variant="bordered"
              aria-label="Options"
            >
              <Tab
                key={TRANSACTION_TYPE.DEPOSIT}
                title={TRANSACTION_TYPE.DEPOSIT}
              >
                <Deposit user={user} tradingAccounts={tradingAccounts} />
              </Tab>
              <Tab
                key={TRANSACTION_TYPE.TRANSFER_FUNDS}
                title={TRANSACTION_TYPE.TRANSFER_FUNDS}
              >
                <TransferFunds user={user} tradingAccounts={tradingAccounts} />
              </Tab>
              <Tab
                key={TRANSACTION_TYPE.WITHDRAW}
                title={TRANSACTION_TYPE.WITHDRAW}
              >
                <Withdraw user={user} tradingAccounts={tradingAccounts} />
              </Tab>
            </Tabs>
          </div>
          <div className="flex-1 w-full md:w-[40%]">
            <div className="flex bg-gray-200 justify-between p-4 rounded-sm">
              <div>
                <strong>Total balance</strong>: {formatPrice(totalBalance)}
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
