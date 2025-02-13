'use server';

import { ActionStateResponse } from "@/models/action-state-response.model";
import prisma from "../lib/prisma";
import { TradingAccount } from "@/models/trading-account.model";
import { revalidatePath } from "next/cache";

export async function updateTradingAccount(previousState: ActionStateResponse, formData: FormData) {
  const name = formData.get('account-name') as string;
  const accountId = formData.get('account-id') as string;
  const balance = formData.get('balance') as string;
  const currency = formData.get('currency') as string;

  try {
    const account = await prisma.tradingAccount.update({
      where: {
        id: +accountId
      },
      data: {
        name,
        balance: +balance,
        currency,
      },
    });
    revalidatePath("/admin-portal/trading-accounts");
    return { success: true, message: 'Trading account has been successfully updated', data: account as unknown as TradingAccount };
  } catch (err) {
    console.log(err, 'err updated trading account');
    return { success: false, message: (err as { message: string }).message, data: null };
  }
}