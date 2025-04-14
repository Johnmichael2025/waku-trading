import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const accounts = await prisma.tradingAccount.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        user: true
      }
    });
    return NextResponse.json(accounts);
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json([]);
  }
}
