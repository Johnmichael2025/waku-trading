import prisma from "@/lib/prisma";
import { TradingAccount } from "@/models/trading-account.model";

export const getTradingAccounts = async () => {
  try {
    const accounts = await prisma.tradingAccount.findMany();
    return accounts as unknown as TradingAccount[];
  } catch (err) {
    console.log(err, 'err');
    return [];
  }
};