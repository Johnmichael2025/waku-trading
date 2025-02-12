"use client";
import React, { useEffect, useState } from "react";
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
  RangeValue,
  DateValue,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

import clsx from "clsx";
import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Transaction } from "@/models/transaction.model";
import Image from "next/image";
import moment from "moment";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { axiosInstance } from "@/lib/axios-instance";
import { useSession } from "next-auth/react";
import { ADMINS } from "@/constants/admins.constant";

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

type ModalAction = "approve" | "reject" | null;

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
    key: "Withdrawal Type",
    label: "Withdrawal Type",
  },
  {
    key: "Date Created",
    label: "Date Created",
  },
  {
    key: "Status",
    label: "Status",
  },
  {
    key: "Actions",
    label: "Actions",
  },
];

type TransactionsProps = {
  tradingAccounts: TradingAccount[];
  transactions: Transaction[];
  hideTitle?: boolean;
};
export default function Transactions({
  tradingAccounts,
  transactions,
  hideTitle,
}: TransactionsProps) {
  const session = useSession();
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >(
    transactions.map((t) => {
      t.transferToAccount = tradingAccounts.find(
        (account) => account.id === t.transferToAccountId
      );
      return t;
    })
  );
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDateRange, setSelectedDateRange] =
    useState<RangeValue<DateValue> | null>(null);
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalAction, setModalAction] = useState<ModalAction>(null);
  const [transactionToUpdate, setTransactionToUpdate] =
    useState<Transaction | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
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

    if (selectedTransactionType) {
      _filteredTransactions = _filteredTransactions.filter((transaction) => {
        return transaction.transactionType === selectedTransactionType;
      });
    }

    if (selectedDateRange) {
      let from: string;
      let to: string;
      if (selectedDateRange?.start) {
        const { month, day, year } = selectedDateRange.start;
        from = moment(`${month}/${day}/${year}`).format("MM-DD-YYYY");
      }
      if (selectedDateRange?.end) {
        const { month, day, year } = selectedDateRange.end;
        to = moment(`${month}/${day}/${year}`).format("MM-DD-YYYY");
      }
      _filteredTransactions = _filteredTransactions.filter((transaction) => {
        return moment(
          moment(transaction.dateCreated).format("MM-DD-YYYY")
        ).isBetween(from, to);
      });
    }
    setFilteredTransactions(_filteredTransactions);
  }, [
    selectedAccountId,
    selectedTransactionType,
    selectedDateRange,
    selectedStatus,
    transactions,
  ]);

  const resetFilters = () => {
    setSelectedAccountId("");
    setSelectedStatus("");
    setSelectedTransactionType("");
    setSelectedDateRange(null);
    setFilteredTransactions(transactions);
  };

  const onChangeDateRange = (rangeValue: RangeValue<DateValue> | null) => {
    setSelectedDateRange(rangeValue);
  };

  const onOpenModal = (actionType: ModalAction, transaction: Transaction) => {
    setModalAction(actionType);
    setTransactionToUpdate(transaction);
    onOpen();
  };

  const updateTransaction = async (
    action: ModalAction,
    transaction: Transaction,
    closeModal: () => void
  ) => {
    setIsProcessing(true);
    try {
      const res = await axiosInstance.post("/api/transactions", {
        action,
        transaction,
      });
      console.log(res, "res");
    } catch (err) {
      console.log(err, "err");
    } finally {
      closeModal();
      setIsProcessing(false);
    }
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
          <div className="flex flex-col md:flex-row justify-end gap-4 my-6">
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
              <Select
                selectedKeys={[selectedTransactionType]}
                onChange={(e) => setSelectedTransactionType(e.target.value)}
                label="Transaction Type"
              >
                <SelectItem key={TRANSACTION_TYPE.DEPOSIT}>
                  {TRANSACTION_TYPE.DEPOSIT}
                </SelectItem>
                <SelectItem key={TRANSACTION_TYPE.WITHDRAW}>
                  {TRANSACTION_TYPE.WITHDRAW}
                </SelectItem>
                <SelectItem key={TRANSACTION_TYPE.TRANSFER_FUNDS}>
                  {TRANSACTION_TYPE.TRANSFER_FUNDS}
                </SelectItem>
              </Select>
            </div>
            <div className="flex-1">
              <DateRangePicker
                value={selectedDateRange}
                onChange={onChangeDateRange}
                className="max-w-xs"
                label="Date Range"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            {!hideTitle && (
              <h3 className="font-semibold text-medium">
                General Transactions
              </h3>
            )}

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
                  <TableCell>
                    {transaction.withdrawalType
                      ? transaction.withdrawalType
                      : "N/A"}
                  </TableCell>
                  <TableCell>
                    {moment(transaction.dateCreated).format("MMMM DD, YYYY")}
                  </TableCell>
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

                  <TableCell>
                    {ADMINS.includes(session?.data?.user?.email || "") && (
                      <div className="flex gap-2">
                        <Button
                          onPress={() => onOpenModal("approve", transaction)}
                          variant="bordered"
                          className="mr-4"
                          size="sm"
                          color="success"
                        >
                          Approve
                        </Button>
                        <Button
                          onPress={() => onOpenModal("reject", transaction)}
                          variant="bordered"
                          size="sm"
                          color="danger"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalAction === "approve" ? "Approve" : "Reject"} Transaction
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to{" "}
                  {modalAction === "approve" ? "Approve" : "Reject"} the
                  transaction?
                </p>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-between">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    isLoading={isProcessing}
                    color="primary"
                    onPress={() => {
                      updateTransaction(
                        modalAction,
                        transactionToUpdate as Transaction,
                        onClose
                      );
                    }}
                  >
                    Confirm
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
