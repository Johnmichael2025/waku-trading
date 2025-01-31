/* eslint-disable @typescript-eslint/no-unused-vars */
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { User } from "@/models/user.model";
import { createContext } from "react";

export const UserContext = createContext({
  user: null as User | null,
  tradingAccounts: [] as TradingAccount[],
  transactions: [] as Transaction[],
  addTradingAccount: (account: TradingAccount) => {},
  addTransaction: (transaction: Transaction) => {}
});
