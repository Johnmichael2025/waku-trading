import TradingAccounts from "@/components/admin-portal/TradingAccounts";
import { getTradingAccounts } from "@/utils/get-trading-accounts";
import React from "react";

export default async function page() {
  const tradingAccounts = await getTradingAccounts();

  return (
    <>
      <TradingAccounts accounts={tradingAccounts} />
    </>
  );
}
