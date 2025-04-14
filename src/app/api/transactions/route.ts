import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum";
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum";
import prisma from "@/lib/prisma";
import { Transaction } from "@/models/transaction.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const transactions = await prisma.transaction.findMany({
      include: {
        tradingAccount: true
      }
    });
    return NextResponse.json(transactions);
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const action = payload.action as "approve" | "reject";
  const transaction = payload.transaction as Transaction;
  const transactionStatus = action === "approve" ? TRANSACTION_STATUS.COMPLETED : TRANSACTION_STATUS.REJECTED;

  try {
    await prisma.transaction.update({
      where: {
        id: transaction.id
      },
      data: {
        status: transactionStatus
      }
    });
    if (action === "approve") {
      let amount: number = 0;
      if (transaction.transactionType === TRANSACTION_TYPE.DEPOSIT) {
        amount = transaction.amount;
      } else if (transaction.transactionType === TRANSACTION_TYPE.WITHDRAW) {
        amount = -transaction.amount;
      } else if (transaction.transactionType === TRANSACTION_TYPE.TRANSFER_FUNDS) {
        amount = -transaction.amount;
        if (transaction.transferToAccount) {
          await prisma.tradingAccount.update({
            where: {
              id: transaction.transferToAccountId
            },
            data: {
              balance: transaction.transferToAccount.balance + transaction.amount
            }
          });
        }
      }
      await prisma.tradingAccount.update({
        where: {
          id: transaction.tradingAccount.id
        },
        data: {
          balance: transaction.tradingAccount.balance + amount
        }
      });
    }
    revalidatePath("/admin-portal/transactions");
    return NextResponse.json(
      { message: "Transaction has been successfully updated" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json(
      { message: "There was an error updating the transaction." },
      { status: 500 }
    );
  }
}
