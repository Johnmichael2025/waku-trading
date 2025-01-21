import { Button, Input, Select, SelectItem } from "@heroui/react";
import React from "react";

export default function Withdraw() {
  return (
    <>
      <h3>Withdrawing from trading account</h3>
      <p className="my-4">
        Total deductions request from one of your trading accounts by selecting an 
        account from the list choosing a payment account and defining the desired withdrawal amount.
      </p>
      <h3 className="mt-4 mb-4">Total deductions request</h3>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-default-500 text-small">
            From trading account
          </h3>
          <Select className="w-[350px]" label="Select trading account">
            <SelectItem>Test</SelectItem>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-default-500 text-small">Amount</h3>
          <Input
            className="w-[350px]"
            label="Amount"
            description="Please enter the amount in USD"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-default-500 text-small">
            Withdrawal type
          </h3>
          <Select className="w-[350px]" label="Select trading account">
            <SelectItem>Credit card</SelectItem>
            <SelectItem>Crypto</SelectItem>
            <SelectItem>Wire</SelectItem>
          </Select>
        </div>
        <div className="bg-green w-[350px] rounded-md p-4">
          <p className="text-white text-sm">Note: Total withdrawal request will be reviewed by our operator within 24 hours.</p>
        </div>
        {/* <div className="flex flex-row gap-6">
          <div>
            <Chip className="p-4 cursor-pointer min-w-[100px] text-center" color="primary">
              250
            </Chip>
          </div>
          <div>
            <Chip className="p-4 cursor-pointer min-w-[100px] text-center" color="primary">
              500
            </Chip>
          </div>
          <div>
            <Chip className="p-4 cursor-pointer min-w-[100px] text-center" color="primary">
              1000
            </Chip>
          </div>
        </div> */}
        <div className="mt-4">
          <Button className="min-w-[350px]" color="primary">Trading Account</Button>
        </div>
        <div>
          <Button className="min-w-[350px]" color="default">Deposit</Button>
        </div>
      </div>
    </>
  );
}
