'use server';

import prisma from "../lib/prisma";
import bcrypt from 'bcrypt';

export async function signup(formData: FormData) {
  const email = formData.get('email') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const phone = formData.get('phone') as string;
  const country = formData.get('country') as string;
  const password = formData.get('password') as string;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    });
    if (user) {
      throw new Error('Email address already exists.');
    }
    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
        country,
        password: hashedPassword
      },
    });
    return { success: true, message: 'Signup successful. Please verify your email.' };
  } catch (err) {
    console.log(err, 'err signing up');
    return { success: false, message:  (err as {message: string}).message };
  }
}