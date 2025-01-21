"use client";
import { useSession } from "next-auth/react";
import {Tabs, Tab} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import Deposit from "@/components/client-portal/Deposit";
import TransferFunds from "@/components/client-portal/TransferFunds";
import Withdraw from "@/components/client-portal/Withdraw";
import { UserContext } from "@/providers/context";

export default function Dashboard() {
  const session = useSession();
  const status = session?.status;
  const router = useRouter();
  const user = useContext(UserContext);
  console.log(user, 'user context');

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="deposit" title="Deposit">
          <Deposit />
        </Tab>
        <Tab key="transfer-funds" title="Transfer funds">
          <TransferFunds />
        </Tab>
        <Tab key="withdraw" title="Withdraw">
          <Withdraw />
        </Tab>
      </Tabs>
    </div>
  );
}
