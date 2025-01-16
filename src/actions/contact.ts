import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export async function contact(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'johnnymicheal021@gmail.com',
      subject: 'Contact Customer Service',
      html: '<p>Test</p>'
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