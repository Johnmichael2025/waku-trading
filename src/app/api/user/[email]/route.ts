import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: Promise<{ email: string }>}) {
  const email = (await params).email;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        tradingAccounts: true,
        transactions: {
          orderBy: {
            dateCreated: 'desc'
          },
          include: {
            tradingAccount: true
          }
        }
      }
    });
    return NextResponse.json(user);
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json(null);
  }
}
