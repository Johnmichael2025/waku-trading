import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export async function contact(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'admin@alfabourse.com',
      to: ['admin@alfabourse.com'],
      subject: 'Contact Customer Service',
      react: EmailTemplate({ name, message, email }),
    });
    console.log(data, 'data');
    if (error) {
      console.log(error, 'error');
      return { success: false, message: 'There was an error sending an email.' };
    }
    return { success: true, message: 'Email sent successfully.' };
  } catch (err) {
    console.log(err);
    return { success: false, message: (err as {message: string}).message };
  }
}