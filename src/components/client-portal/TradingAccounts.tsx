import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import { TradingAccount } from "@/models/trading-account.model";
import Link from "next/link";
import Image from "next/image";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import { formatPrice } from "@/utils/format-price";

type TradingAccountsProps = {
  accounts: TradingAccount[];
  onAddAccount: () => void;
};
export default function TradingAccounts({
  accounts,
  onAddAccount,
}: TradingAccountsProps) {
  return (
    <>
      <h3 className="text-medium mt-4">Trading Accounts</h3>
      <div className="mt-4">
        <Button
          onPress={onAddAccount}
          className="min-w-[300px]"
          color="primary"
        >
          Create trading account
        </Button>
      </div>
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
        <div className="flex flex-row flex-wrap gap-4">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="max-w-[400px] bg-green text-white p-4 mt-6"
            >
              <CardHeader className="flex gap-3 rounded-sm">
                <h3>{account.name}</h3>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-light">Sign in</span>
                    <span className="text-sm font-medium">{account.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-light">Total balance</span>
                    <span className="text-sm font-medium">
                      {formatPrice(account.balance)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-light">Credit</span>
                    <span className="text-sm font-medium">
                      {formatPrice(account.balance)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-light">Leverage</span>
                    <span className="text-sm font-medium">
                      {account.leverage}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-light">Server</span>
                    <span className="text-sm font-medium">iTE Live</span>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col gap-4">
                  <Link
                    href={`/client-portal?accountId=${account.id}&transactionType=${TRANSACTION_TYPE.DEPOSIT}`}
                  >
                    <Button className="min-w-[350px]" color="default">
                      Deposit
                    </Button>
                  </Link>
                  <Link
                    href={`/client-portal?accountId=${account.id}&transactionType=${TRANSACTION_TYPE.WITHDRAW}`}
                  >
                    <Button className="min-w-[350px]" color="primary">
                      Withdraw
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
