import prisma from "@/lib/prisma";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { email: string } }) {
  const email = params.email;

  try {
    let user: User | null = null;
    user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        tradingAccounts: true
      }
    });
    return NextResponse.json(user);
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json(null);
  }
}
