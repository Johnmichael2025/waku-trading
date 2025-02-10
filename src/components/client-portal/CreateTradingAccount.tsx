"use client";
import { createTradingAccount } from "@/actions/create-trading-account";
import { CURRENCY } from "@/enums/currency.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { User } from "@/models/user.model";
import { UserContext } from "@/providers/context";
import { Alert, Button, Input, Select, SelectItem } from "@heroui/react";
import React, { useActionState, useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const currencyList = [
  {
    key: CURRENCY.USD,
    label: CURRENCY.USD,
  },
  {
    key: CURRENCY.EURO,
    label: CURRENCY.EURO,
  },
  {
    key: CURRENCY.CRYPTO,
    label: CURRENCY.CRYPTO,
  },
  {
    key: CURRENCY.WIRE,
    label: CURRENCY.WIRE,
  },
];

const initialState = {
  success: false,
  message: "",
  data: null,
};

type CreateTradingAccountProps = {
  user: User;
  accountsLength: number;
};
export default function CreateTradingAccount({
  user,
  accountsLength,
}: CreateTradingAccountProps) {
  const [state, formAction, pending] = useActionState(
    createTradingAccount,
    initialState
  );
  const { addTradingAccount } = useContext(UserContext);
  useEffect(() => {
    if (state.success) {
      addTradingAccount(state.data as TradingAccount);
      toast.success(state.message);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [addTradingAccount, state]);

  return (
    <>
      <h3>Creating a commercial account</h3>
      {accountsLength < 2 ? (
        <Alert color="primary" className="my-4 w-full md:w-[400px]">
          For maximum flexibility you can produce to 2 live trading accounts.
        </Alert>
      ) : (
        <Alert color="warning" className="my-4 w-full md:w-[400px]">
          You have reached a maximum of 2 live trading accounts.
        </Alert>
      )}
      <h3 className="mt-4 mb-4">Trading account details</h3>

      <form action={formAction}>
        <input type="hidden" value={user.id} name="user-id" />
        <input type="hidden" value={user.email} name="user-email" />
        <input type="hidden" value={`${user.firstName} ${user.lastName}`} name="user-name" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              Trading account name
            </h3>
            <Input
              isRequired
              className="w-full md:w-[400px]"
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
              className="w-full md:w-[400px]"
              label="Select trading account"
            >
              {currencyList.map((currency) => (
                <SelectItem key={currency.key} value="USD">
                  {currency.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="mt-4">
            <Button
              isLoading={pending}
              isDisabled={accountsLength >= 2}
              type="submit"
              className="w-full md:w-auto md:min-w-[400px]"
              color="default"
            >
              Set up account
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
