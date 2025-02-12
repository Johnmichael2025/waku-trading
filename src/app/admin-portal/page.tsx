import DashboardCardItem from "@/components/admin-portal/DashboardCardItem";
import prisma from "@/lib/prisma";
import React from "react";
import DashboardPieChart from "../../components/admin-portal/DashboardPieChart";
import { Transaction } from "@/models/transaction.model";
import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import Transactions from "@/components/client-portal/Transactions";
import { TradingAccount } from "@/models/trading-account.model";
import moment from "moment";

const getTransactions = async () => {
  try {
    return await prisma.transaction.findMany();
  } catch (err) {
    console.log(err, "err");
    return [];
  }
};

const getTradingAccounts = async () => {
  try {
    return await prisma.tradingAccount.findMany();
  } catch (err) {
    console.log(err, "err");
    return [];
  }
};

const getUsersCount = async () => {
  try {
    return await prisma.user.count();
  } catch (err) {
    console.log(err, "err");
    return 0;
  }
};

const structureTransactionsStatusCount = (transactions: Transaction[]) => {
  return transactions.reduce(
    (acc, curr) => {
      switch (curr.status) {
        case TRANSACTION_STATUS.PENDING:
          acc.pending += 1;
          break;
        case TRANSACTION_STATUS.COMPLETED:
          acc.completed += 1;
          break;
        case TRANSACTION_STATUS.REJECTED:
          acc.rejected += 1;
          break;
      }
      return acc;
    },
    {
      pending: 0,
      rejected: 0,
      completed: 0,
    }
  );
};
export default async function page() {
  const transactions = (await getTransactions()) as unknown as Transaction[];
  const tradingAccounts =
    (await getTradingAccounts()) as unknown as TradingAccount[];
  const usersCount = await getUsersCount();
  const transactionsStatusCount =
    structureTransactionsStatusCount(transactions);
  const transactionsDataChart = [
    {
      id: 0,
      value: transactionsStatusCount.pending,
      label: "Pending",
      color: "#2563EB",
    },
    {
      id: 1,
      value: transactionsStatusCount.completed,
      label: "Completed",
      color: "#b5e7a0",
    },
    {
      id: 2,
      value: transactionsStatusCount.rejected,
      label: "Rejected",
      color: "#c94c4c",
    },
  ];
  const recentTransactions = transactions.filter((transaction) => {
    return moment().format("MM-DD-YYYY") === moment(transaction.dateCreated).format("MM-DD-YYYY");
  });

  return (
    <div className="pb-[60px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grids-cols-3 md:gap-6">
        <DashboardCardItem
          title="Transactions"
          count={transactions.length}
          image="transactions.png"
          link="/admin-portal/transactions"
        />
        <DashboardCardItem
          title="Trading Accounts"
          count={tradingAccounts.length}
          image="trading-accounts.png"
          link="/admin-portal/trading-accounts"
        />
        <DashboardCardItem
          title="Users"
          count={usersCount}
          image="profile.png"
          link="/admin-portal/users"
        />
        <DashboardPieChart
          title="Transactions Status"
          data={transactionsDataChart}
        />
      </div>
      <div className="rounded-2xl mt-5 border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <h4 className="text-sm text-gray-500 dark:text-gray-400">
          Recent Transactions
        </h4>
        <Transactions
          tradingAccounts={tradingAccounts}
          transactions={recentTransactions}
          hideTitle
        />
      </div>
    </div>
  );
}
