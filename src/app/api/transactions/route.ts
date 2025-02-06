import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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
