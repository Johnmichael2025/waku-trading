'use server';

import { ActionStateResponse } from "@/models/action-state-response.model";
import prisma from "../lib/prisma";
import { TradingAccount } from "@/models/trading-account.model";

export async function createTradingAccount(previousState: ActionStateResponse, formData: FormData) {
  const name = formData.get('account-name') as string;
  const currency = formData.get('currency') as string;
  const userId = formData.get('user-id') as string;

  try {
    const account = await prisma.tradingAccount.create({
      data: {
        name,
        currency,
        balance: 0,
        credit: 0,
        server: 'Live Server',
        leverage: '1:100',
        user: {
          connect: {
            id: +userId
          }
        }
      },
    });
    return { success: true, message: 'Account created successfully', data: account as unknown as TradingAccount};
  } catch (err) {
    console.log(err, 'err signing up');
    return { success: false, message:  (err as {message: string}).message, data: null };
  }
}