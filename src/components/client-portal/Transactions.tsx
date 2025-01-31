"use client";
import { UserContext } from "@/providers/context";
import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SelectItem,
  Select,
  DateRangePicker,
  Button,
} from "@heroui/react";

import clsx from "clsx";
import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import Image from "next/image";

const getBGClass = (status: TRANSACTION_STATUS) => {
  switch (status) {
    case TRANSACTION_STATUS.PENDING:
      return "bg-blue-600";
    case TRANSACTION_STATUS.COMPLETED:
      return "bg-teal-500";
    case TRANSACTION_STATUS.REJECTED:
      return "bg-red-500";
  }
};

const columns = [
  {
    key: "Transaction Type",
    label: "Transaction Type",
  },
  {
    key: "Amount",
    label: "Amount",
  },
  {
    key: "Trading Account",
    label: "Trading Account",
  },
  {
    key: "Date Created",
    label: "Date Created",
  },
  {
    key: "Status",
    label: "Status",
  },
];

type TransactionsProps = {
  tradingAccounts: TradingAccount[];
};
export default function Transactions({ tradingAccounts }: TransactionsProps) {
  const { transactions } = useContext(UserContext);
  const [filteredTransactions, setFilteredTransactions] =
    useState<Transaction[]>(transactions);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    let _filteredTransactions = [...transactions];
    if (selectedAccountId) {
      _filteredTransactions = _filteredTransactions.filter((transaction) => {
        return transaction.tradingAccount.id === +selectedAccountId;
      });
    }
    if (selectedStatus) {
      _filteredTransactions = _filteredTransactions.filter((transaction) => {
        return transaction.status === selectedStatus;
      });
    }
    setFilteredTransactions(_filteredTransactions);
  }, [selectedAccountId, selectedStatus, transactions]);

  const resetFilters = () => {
    setSelectedAccountId("");
    setSelectedStatus("");
    setFilteredTransactions(transactions);
  };

  return (
    <>
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src="/client-portal/no-data.png"
            width={200}
            height={200}
            alt="No Data"
          />
          <p className="font-light text-gray-500">No transactions yet.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-end gap-4 my-6">
            <div className="flex-1">
              <Select
                selectedKeys={[selectedAccountId]}
                onChange={(e) => setSelectedAccountId(e.target.value)}
                label="Trading account"
              >
                {tradingAccounts.map((account) => (
                  <SelectItem key={account.id} textValue={account.name}>
                    <p className="font-bold">{account.name}</p>
                    <p>Amount: {account.balance}</p>
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex-1">
              <Select
                selectedKeys={[selectedStatus]}
                onChange={(e) => setSelectedStatus(e.target.value)}
                label="Trade status"
              >
                <SelectItem key={TRANSACTION_STATUS.PENDING}>
                  {TRANSACTION_STATUS.PENDING}
                </SelectItem>
                <SelectItem key={TRANSACTION_STATUS.REJECTED}>
                  {TRANSACTION_STATUS.REJECTED}
                </SelectItem>
                <SelectItem key={TRANSACTION_STATUS.COMPLETED}>
                  {TRANSACTION_STATUS.COMPLETED}
                </SelectItem>
              </Select>
            </div>
            <div className="flex-1">
              <DateRangePicker className="max-w-xs" label="From" />
            </div>
            <div className="flex-1">
              <DateRangePicker className="max-w-xs" label="To" />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <h3 className="font-semibold text-medium">General Transactions</h3>
            <Button onPress={resetFilters} size="sm">
              Reset filters
            </Button>
          </div>

          <Table aria-labelledby="Transactions" className="mt-4">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={filteredTransactions}>
              {(transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.transactionType}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.tradingAccount?.name}</TableCell>
                  <TableCell>{transaction.dateCreated}</TableCell>
                  <TableCell>
                    <span
                      className={clsx(
                        "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium  text-white",
                        getBGClass(transaction.status)
                      )}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
}
