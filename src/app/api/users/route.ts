import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    console.log(err, 'err');
    return NextResponse.json([]);
  }
}
