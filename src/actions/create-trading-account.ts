'use server';

import { Resend } from 'resend';
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

import { ActionStateResponse } from "@/models/action-state-response.model";
import prisma from "../lib/prisma";
import { TradingAccount } from "@/models/trading-account.model";
import EmailTemplate from '@/components/EmailTemplate';
import moment from 'moment';

export async function createTradingAccount(previousState: ActionStateResponse, formData: FormData) {
  const tradingAccountName = formData.get('account-name') as string;
  const currency = formData.get('currency') as string;
  const userId = formData.get('user-id') as string;
  const email = formData.get('user-email') as string;
  const userName = formData.get('user-name') as string;

  try {
    const account = await prisma.tradingAccount.create({
      data: {
        name: tradingAccountName,
        currency,
        balance: 0,
        credit: 0,
        server: 'Live Server',
        leverage: '1:100',
        dateCreated: moment().format("MM-DD-YYYY HH:mm"),
        user: {
          connect: {
            id: +userId
          }
        }
      },
    });
    const emailMessage = `${userName} has created a trading account`;
    const { error } = await resend.emails.send({
      from: 'admin@alfabourse.com',
      to: ['admin@alfabourse.com'],
      subject: 'Trading account created',
      react: EmailTemplate({ name: userName, message: emailMessage, email }),
    });
    if (error) {
      console.log(error, 'error');
      return { success: false, message: 'There was an error sending an email.', data: null };
    }
    return { success: true, message: 'Account created successfully', data: account as unknown as TradingAccount };
  } catch (err) {
    console.log(err, 'err creating trading account');
    return { success: false, message: (err as { message: string }).message, data: null };
  }
}