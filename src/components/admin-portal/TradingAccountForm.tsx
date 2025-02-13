import { updateTradingAccount } from "@/actions/update-trading-account";
import { CURRENCY } from "@/enums/currency.enum";
import { TradingAccount } from "@/models/trading-account.model";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import React, { useActionState, useEffect } from "react";
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

type TradingAccountFormProps = {
  account: TradingAccount
  onCloseModal: () => void
};

const initialState = {
  success: false,
  message: "",
  data: null,
};
export default function TradingAccountForm({
  account,
  onCloseModal
}: TradingAccountFormProps) {
  const [state, formAction, pending] = useActionState(
    updateTradingAccount,
    initialState
  );

  useEffect(() => {
    console.log(state, 'state');
    if (state.success) {
      toast.success(state.message);
      onCloseModal();
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [onCloseModal, state]);

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="account-id" value={account.id} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">
              Trading account name
            </h3>
            <Input
              defaultValue={account.name}
              isRequired
              className="w-full md:w-[400px]"
              label="Trading account name"
              type="text"
              name="account-name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Balance</h3>
            <Input
              defaultValue={account.balance.toString()}
              isRequired
              name="balance"
              className="w-full"
              label="Balance"
              description="Please enter the balance in USD"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-500 text-small">Currency</h3>
            <Select
              defaultSelectedKeys={[account.currency]}
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
              type="submit"
              className="w-full"
              color="default"
            >
              Update
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
