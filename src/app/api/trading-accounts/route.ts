import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accounts = await prisma.tradingAccount.findMany();
    return NextResponse.json(accounts);
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json([]);
  }
}
