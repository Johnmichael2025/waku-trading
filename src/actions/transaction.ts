"use server";
import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import prisma from "../lib/prisma";
import moment from "moment";
import { ActionStateResponse } from "@/models/action-state-response.model";

export async function createTransaction(previousState: ActionStateResponse, formData: FormData) {
  const amount = formData.get('amount') as string;
  const accountId = formData.get('trading-account-id') as string;
  const transactionType = formData.get('transaction-type') as string;
  const userId = formData.get('user-id') as string;
  const toAccountId = formData.get('to-trading-account-id') || "";

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
    return { success: true, message: `${amount} has been successfully deposit to the selected account`, data: transaction };
  } catch (err) {
    console.log(err, 'err deposit');
    return { success: false, message: (err as { message: string }).message, data: null };
  }
}