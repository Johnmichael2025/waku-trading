"use server";

import { ActionStateResponse } from '@/models/action-state-response.model';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
export async function changePassword(previousState: ActionStateResponse, formData: FormData) {
  const email = formData.get('email') as string;
  const currentPassword = formData.get('current-password') as string;
  const newPassword = formData.get('new-password') as string;
  const repeatNewPassword = formData.get('repeat-new-password') as string;
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  if (newPassword !== repeatNewPassword) {
    return { success: false, message: 'Password does not match.', data: null };
  }

  if (newPassword === currentPassword) {
    return { success: false, message: 'You have entered a new password same as your old password.', data: null };
  }
  
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    });
    const isPasswordExist = bcrypt.compareSync(currentPassword, user?.password as string);
    if (!isPasswordExist) {
      throw new Error('You have entered an invalid password.');
    }
  
    await prisma.user.update({
      where: {
        email
      },
      data: {
        password: hashedNewPassword
      },
    });
    return { success: true, message: 'Password has been updated successfully.', data: null };
  } catch (err) {
    console.log(err);
    return { success: false, message: (err as {message: string}).message, data: null };
  }
}