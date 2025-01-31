"use server";
import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import prisma from "../lib/prisma";
import moment from "moment";
import { ActionStateResponse } from "@/models/action-state-response.model";
import { Resend } from 'resend';
import EmailTemplate from "@/components/EmailTemplate";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const sendEmail = async (transactionType: TRANSACTION_TYPE, amount: string, name: string, email: string, accountId: string, toAccountId?: string | undefined) => {
  try {
    let message = '';
    switch (transactionType) {
      case TRANSACTION_TYPE.DEPOSIT:
        message = `${name} is requesting to deposit an amount of ${amount} USD to account ${accountId}`;
        break;
      case TRANSACTION_TYPE.WITHDRAW:
        message = `${name} is requesting to withdraw an amount of ${amount} USD from account ${accountId}`;
        break;
      case TRANSACTION_TYPE.TRANSFER_FUNDS:
        message = `${name} is requesting to transfer an amount of ${amount} USD from account ${accountId} to account ${toAccountId}`;
        break;
    }
    const { error } = await resend.emails.send({
      from: 'admin@alfabourse.com',
      to: ['jovenlin28@gmail.com'],
      subject: 'Transaction created',
      react: EmailTemplate({ name, message, email }),
    });

    if (error) {
      console.log(error, 'error');
      return { success: false, message: 'There was an error sending an email.' };
    }
    return { success: true, message: 'Email sent successfully.' };
  } catch (err) {
    console.log(err);
    return { success: false, message: (err as { message: string }).message };
  }
}
export async function createTransaction(previousState: ActionStateResponse, formData: FormData) {
  const amount = formData.get('amount') as string;
  const accountId = formData.get('trading-account-id') as string;
  const transactionType = formData.get('transaction-type') as string;
  const userId = formData.get('user-id') as string;
  const userName = formData.get('user-name') as string;
  const userEmail = formData.get('user-email') as string;
  const toAccountId = (formData.get('to-trading-account-id') || "") as string;

  try {
    const transaction = await prisma.transaction.create({
      data: {
        status: TRANSACTION_STATUS.PENDING,
        transactionType,
        withdrawalType: transactionType === TRANSACTION_TYPE.WITHDRAW ? formData.get('withdrawal-type') as string : null,
        amount: +amount,
        user: {
          connect: {
            id: +userId
          }
        },
        tradingAccount: {
          connect: {
            id: +accountId
          }
        },
        dateCreated: moment().format("MM-DD-YYYY HH:mm"),
        transferToAccountId: transactionType === TRANSACTION_TYPE.TRANSFER_FUNDS ? +toAccountId : undefined
      },
    });
    let message: string = '';
    switch (transactionType) {
      case TRANSACTION_TYPE.DEPOSIT:
        message = `An amount of ${amount} USD has been successfully deposited to account ${accountId}`;
        break;
      case TRANSACTION_TYPE.WITHDRAW:
        message = `An amount of ${amount} USD has been successfully withdraw from account ${accountId}`;
        break;
      case TRANSACTION_TYPE.TRANSFER_FUNDS:
        message = `An amount of ${amount} USD has been successfully transferred from account ${accountId} to account ${toAccountId}`;
        break;
    }
    await sendEmail(transactionType as TRANSACTION_TYPE, amount, userName, userEmail, accountId, toAccountId);
    return { success: true, message, data: transaction };
  } catch (err) {
    console.log(err, 'err deposit');
    return { success: false, message: (err as { message: string }).message, data: null };
  }
}