"use client";
import { User } from "@/models/user.model";
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
} from "@heroui/react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    key: "email",
    label: "Email",
  },
  {
    key: "phone",
    label: "Phone Number",
  },
  {
    key: "country",
    label: "Country",
  },
  {
    key: "language",
    label: "Language",
  },
  {
    key: "dateCreated",
    label: "Date Created",
  },
];

type UsersProps = {
  users: User[];
};
export default function Users({ users }: UsersProps) {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [selectedDateRange, setSelectedDateRange] =
    useState<RangeValue<DateValue> | null>(null);

  const onChangeDateRange = (rangeValue: RangeValue<DateValue> | null) => {
    setSelectedDateRange(rangeValue);
  };

  const resetFilters = () => {
    setSelectedDateRange(null);
  };

  useEffect(() => {
    let _filteredUsers = [...users];

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
      _filteredUsers = _filteredUsers.filter((user) => {
        return moment(moment(user.dateCreated).format("MM-DD-YYYY")).isBetween(
          from,
          to
        );
      });
    }
    setFilteredUsers(_filteredUsers);
  }, [users, selectedDateRange]);

  return (
    <>
      {users.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src="/client-portal/no-data.png"
            width={200}
            height={200}
            alt="No Data"
          />
          <p className="font-light text-gray-500">No users yet.</p>
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
                {Users.map((account) => (
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
                <SelectItem key={User_STATUS.PENDING}>
                  {User_STATUS.PENDING}
                </SelectItem>
                <SelectItem key={User_STATUS.REJECTED}>
                  {User_STATUS.REJECTED}
                </SelectItem>
                <SelectItem key={User_STATUS.COMPLETED}>
                  {User_STATUS.COMPLETED}
                </SelectItem>
              </Select>
            </div> */}
            {/* <div className="flex-1">
              <Select
                selectedKeys={[selectedUserType]}
                onChange={(e) => setSelectedUserType(e.target.value)}
                label="User Type"
              >
                <SelectItem key={User_TYPE.DEPOSIT}>
                  {User_TYPE.DEPOSIT}
                </SelectItem>
                <SelectItem key={User_TYPE.WITHDRAW}>
                  {User_TYPE.WITHDRAW}
                </SelectItem>
                <SelectItem key={User_TYPE.TRANSFER_FUNDS}>
                  {User_TYPE.TRANSFER_FUNDS}
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
            <h3 className="font-semibold text-medium">Users</h3>
            <Button onPress={resetFilters} size="sm">
              Reset filters
            </Button>
          </div>

          <Table aria-labelledby="Users" className="mt-4">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={filteredUsers}>
              {(user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>{user.language}</TableCell>
                  <TableCell>
                    {moment(user.dateCreated).format("MMMM DD, YYYY")}
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
