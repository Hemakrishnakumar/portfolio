import { transporter } from '@/lib/transporter';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';


const EMAIL = process.env.NODE_MAIL_USER;
const EMAIL_RECEIVER = process.env.CONTACT_EMAIL;


export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();// Create reusable transporter
    
    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${EMAIL}>`,
      to: EMAIL_RECEIVER, // your email to receive messages
      subject: `${name} wants to contact you.`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message is being sent' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
