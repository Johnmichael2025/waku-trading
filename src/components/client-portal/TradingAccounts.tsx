import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import { TradingAccount } from "@/models/trading-account.model";
import Link from "next/link";

type TradingAccountsProps = {
  accounts: TradingAccount[];
};
export default function TradingAccounts({ accounts }: TradingAccountsProps) {
  return (
    <>
      <h3 className="text-medium mt-4">Trading Accounts</h3>
      {/* <div className="mt-4">
        <Button className="min-w-[300px]" color="primary">
          Create Trading account
        </Button>
      </div> */}
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
                    {account.balance} USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-light">Credit</span>
                  <span className="text-sm font-medium">
                    {account.credit} USD
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
              <Link href="/client-portal">
                <Button className="min-w-[350px]" color="default">
                  Deposit
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
