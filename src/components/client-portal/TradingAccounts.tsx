import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@heroui/react";

export default function TradingAccounts() {
  return (
    <>
      <h3 className="text-medium">Trading Accounts</h3>
      <div className="mt-4">
        <Button className="min-w-[300px]" color="primary">
          Create Trading account
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {[1, 2].map((account) => (
          <Card
            key={account}
            className="max-w-[400px] bg-green text-white p-4 mt-6"
          >
            <CardHeader className="flex gap-3 rounded-sm">
              <h3>Test Account</h3>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span className="text-sm font-light">Sign in</span>
                  <span className="text-sm font-medium">2180389</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-light">Total balance</span>
                  <span className="text-sm font-medium">0.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-light">Credit</span>
                  <span className="text-sm font-medium">0.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-light">Leverage</span>
                  <span className="text-sm font-medium">1:100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-light">Server</span>
                  <span className="text-sm font-medium">iTE Live</span>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button className="min-w-[350px]" color="default">
                Deposit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
