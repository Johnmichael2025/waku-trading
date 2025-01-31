"use client";
import { axiosInstance } from "@/lib/axios-instance";
import { User } from "@/models/user.model";
import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect, useState } from "react";
import { UserContext } from "./context";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import { Spinner } from "@heroui/react";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const addTradingAccount = (account: TradingAccount) => {
    setState((prev) => {
      return {
        ...prev,
        tradingAccounts: [...prev.tradingAccounts, account],
      };
    });
  };

  const addTransaction = (transaction: Transaction) => {
    setState((prev) => {
      const _transaction = {
        ...transaction,
        tradingAccount: prev.tradingAccounts.find(
          (account) => account.id === transaction.tradingAccountId
        ),
      } as Transaction;
      return {
        ...prev,
        transactions: [...prev.transactions, _transaction],
      };
    });
  };

  const _initState = {
    user: null as User | null,
    tradingAccounts: [] as TradingAccount[],
    transactions: [] as Transaction[],
    addTradingAccount: addTradingAccount,
    addTransaction: addTransaction,
  };

  const [state, setState] = useState(_initState);
  const session = useSession();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const email = session.data?.user?.email;
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { data } = (await axiosInstance.get(`/api/user/${email}`)) as {
          data: User;
        };
        setState((prev) => {
          return {
            ...prev,
            user: data,
            tradingAccounts: data.tradingAccounts,
            transactions: data.transactions,
          };
        });
      } catch (err) {
        console.log("Error fetching user", err);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchUser();
    }
  }, [session.data?.user?.email]);

  return (
    <UserContext.Provider value={state}>
      {loading ? (
        <div className="md:ml-[270px] md:pt-[150px] p-10">
          <div className="flex justify-center items-center">
            <Spinner color="warning" label="Loading..." />
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </UserContext.Provider>
  );
};
