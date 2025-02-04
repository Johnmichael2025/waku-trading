import TradingAccounts from "@/components/admin-portal/TradingAccounts";
import { TradingAccount } from "@/models/trading-account.model";
import { getTradingAccounts } from "@/utils/get-trading-accounts";
import React from "react";

export default async function page() {
  const tradingAccounts = (await getTradingAccounts()) as TradingAccount[];
  return (
    <>
      <TradingAccounts accounts={tradingAccounts} />
    </>
  );
}
