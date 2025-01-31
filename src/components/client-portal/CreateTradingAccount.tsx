"use client";
import { createTradingAccount } from "@/actions/create-trading-account";
import { TradingAccount } from "@/models/trading-account.model";
import { UserContext } from "@/providers/context";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import React, { useContext, useState } from "react";

const currencyList = [
  {
    key: "USD",
    label: "USD",
  },
  {
    key: "Crypto",
    label: "Crypto",
  },
  {
    key: "Wire",
    label: "Wire",
  },
];

type CreateTradingAccountProps = {
  userId: number;
};
export default function CreateTradingAccount({
  userId,
}: CreateTradingAccountProps) {
  const handleCreateAccount = createTradingAccount.bind(null, userId);
  const [processing, setProcessing] = useState(false);
  const {addTradingAccount} = useContext(UserContext);

  const onCreateAccount = (form: FormData) => {
    setProcessing(true);
    handleCreateAccount(form).then(res => {
      setProcessing(false);
      if (res.success) {
        addTradingAccount(res.data as unknown as TradingAccount);
        // router.push("/client-portal/trading");
      }
    });
  };
  return (
    <>
      <h3>Creating a commercial account</h3>
      <p className="my-4">
        For maximum flexibility you can produce to 2 live trading accounts.
      </p>
      <h3 className="mt-4 mb-4">Trading account details</h3>

      <form action={onCreateAccount}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              Trading account name
            </h3>
            <Input
              required
              className="w-[350px]"
              label="Name your commercial account"
              type="text"
              name="account-name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Currency</h3>
            <Select
              name="currency"
              isRequired
              className="w-[350px]"
              label="Select trading account"
            >
              {currencyList.map((currency) => (
                <SelectItem key={currency.key} value="USD">
                  {currency.label}
                </SelectItem>
              ))}

              {/* <SelectItem value="Crypto">Crypto</SelectItem>
              <SelectItem value="Wire">Wire</SelectItem> */}
            </Select>
          </div>

          <div className="mt-4">
            <Button
              isLoading={processing}
              type="submit"
              className="min-w-[350px]"
              color="default"
            >
              Set up account
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
