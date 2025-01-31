'use server';

import prisma from "../lib/prisma";

export async function createTradingAccount(userId: number, formData: FormData) {
  const name = formData.get('account-name') as string;
  const currency = formData.get('currency') as string;

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
            id: userId
          }
        }
      },
    });
    return { success: true, message: 'Account created successfully', data: account};
  } catch (err) {
    console.log(err, 'err signing up');
    return { success: false, message:  (err as {message: string}).message };
  }
}