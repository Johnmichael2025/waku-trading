'use server';

import prisma from "../lib/prisma";
import bcrypt from 'bcrypt';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    });
    if (!user) {
      throw new Error('User does not exist.');
    }
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      throw new Error('Password is incorrect.');
    }
    return { success: true, message: 'Login success.' };
  } catch (err) {
    console.log(err);
    return { success: false, message: (err as {message: string}).message };
  }
}