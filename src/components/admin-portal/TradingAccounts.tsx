"use client";
import { TradingAccount } from "@/models/trading-account.model";
import {
  Button,
  DateRangePicker,
  DateValue,
  RangeValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import TradingAccountForm from "./TradingAccountForm";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "balance",
    label: "Balance",
  },
  {
    key: "user",
    label: "User"
  },
  {
    key: "credit",
    label: "Credit",
  },
  {
    key: "currency",
    label: "Currency",
  },
  {
    key: "server",
    label: "Server",
  },
  {
    key: "leverage",
    label: "Leverage",
  },
  {
    key: "dateCreated",
    label: "Date Created",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

type TradingAccountsProps = {
  accounts: TradingAccount[];
};
export default function TradingAccounts({ accounts }: TradingAccountsProps) {
  const [filteredTradingAccounts, setFilteredTradingAccounts] =
    useState<TradingAccount[]>(accounts);
  const [selectedDateRange, setSelectedDateRange] =
    useState<RangeValue<DateValue> | null>(null);

  const onChangeDateRange = (rangeValue: RangeValue<DateValue> | null) => {
    setSelectedDateRange(rangeValue);
  };

  const resetFilters = () => {
    setSelectedDateRange(null);
  };
  const [tradingAccountToUpdate, setTradingAccountToUpdate] =
    useState<TradingAccount | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    let _filteredTradingAccounts = [...accounts];

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
      _filteredTradingAccounts = _filteredTradingAccounts.filter(
        (tradingAccount) => {
          return moment(
            moment(tradingAccount.dateCreated).format("MM-DD-YYYY")
          ).isBetween(from, to);
        }
      );
    }
    setFilteredTradingAccounts(_filteredTradingAccounts);
  }, [accounts, selectedDateRange]);

  const onOpenModal = (tradingAccount: TradingAccount) => {
    setTradingAccountToUpdate(tradingAccount);
    onOpen();
  };

  return (
    <>
      {accounts.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src="/client-portal/no-data.png"
            width={200}
            height={200}
            alt="No Data"
          />
          <p className="font-light text-gray-500">No accounts yet.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-end gap-4 my-6">
            {/* <div className="flex-1">
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
                <SelectItem key={TradingAccount_STATUS.PENDING}>
                  {TradingAccount_STATUS.PENDING}
                </SelectItem>
                <SelectItem key={TradingAccount_STATUS.REJECTED}>
                  {TradingAccount_STATUS.REJECTED}
                </SelectItem>
                <SelectItem key={TradingAccount_STATUS.COMPLETED}>
                  {TradingAccount_STATUS.COMPLETED}
                </SelectItem>
              </Select>
            </div> */}
            {/* <div className="flex-1">
              <Select
                selectedKeys={[selectedTradingAccountType]}
                onChange={(e) => setSelectedTradingAccountType(e.target.value)}
                label="TradingAccount Type"
              >
                <SelectItem key={TradingAccount_TYPE.DEPOSIT}>
                  {TradingAccount_TYPE.DEPOSIT}
                </SelectItem>
                <SelectItem key={TradingAccount_TYPE.WITHDRAW}>
                  {TradingAccount_TYPE.WITHDRAW}
                </SelectItem>
                <SelectItem key={TradingAccount_TYPE.TRANSFER_FUNDS}>
                  {TradingAccount_TYPE.TRANSFER_FUNDS}
                </SelectItem>
              </Select>
            </div> */}
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
            <h3 className="font-semibold text-medium">Trading Accounts</h3>
            <Button onPress={resetFilters} size="sm">
              Reset filters
            </Button>
          </div>

          <Table aria-labelledby="TradingAccounts" className="mt-4">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={filteredTradingAccounts}>
              {(account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.id}</TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.balance}</TableCell>
                  <TableCell>{`${account.user?.firstName} ${account.user?.lastName}`}</TableCell>
                  <TableCell>{account.credit}</TableCell>
                  <TableCell>{account.currency}</TableCell>
                  <TableCell>{account.server}</TableCell>
                  <TableCell>{account.leverage}</TableCell>
                  <TableCell>
                    {moment(account.dateCreated).format("MMMM DD, YYYY")}
                  </TableCell>
                  <TableCell>
                    <span className="cursor-pointer" onClick={() => onOpenModal(account)}>
                      <EditIcon />
                    </span>
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
                Update Trading Account
              </ModalHeader>
              <ModalBody>
                <TradingAccountForm account={tradingAccountToUpdate as TradingAccount} onCloseModal={onClose} />
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-end">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
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
