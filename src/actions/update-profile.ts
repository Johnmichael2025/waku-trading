"use server";
import prisma from "@/lib/prisma";
import { ActionStateResponse } from "@/models/action-state-response.model";

export async function updateProfile(previousState: ActionStateResponse, formData: FormData) {
  const id = formData.get('user-id') as string;
  const gender = formData.get('gender') as string;
  const language = formData.get('language') as string;
  const country = formData.get('country') as string;
  const address = formData.get('address') as string;
  const city = formData.get('city') as string;
  const postalCode = formData.get('postal-code') as string;
  const identificationNumber = formData.get('identification-number') as string;
  const countrySpecificID = formData.get('country-specific-identifier') as string;

  try {
    const user = await prisma.user.update({
      where: {
        id: +id
      },
      data: {
        gender,
        language,
        country,
        address,
        city,
        postalCode,
        identificationNumber,
        countrySpecificID
      },
    });
    return { success: true, message: 'Profile has been updated successfully.', data: user };
  } catch (err) {
    console.log(err, 'err updating profile');
    return { success: false, message:  (err as {message: string}).message, data: null };
  }
}