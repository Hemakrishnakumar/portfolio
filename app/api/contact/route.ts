import { transporter } from '@/lib/transporter';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const EMAIL = process.env.NODE_MAIL_USER;
const EMAIL_RECEIVER = process.env.CONTACT_EMAIL;

const RATE_LIMIT = 3;
const WINDOW = 60 * 1000;
const ipRequests = new Map<string, { count: number; firstRequest: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry) {
    ipRequests.set(ip, { count: 1, firstRequest: now });
    return true;
  }
  if (now - entry.firstRequest < WINDOW) {
    if (entry.count >= RATE_LIMIT) {
      return false;
    }
    entry.count++;
    return true;
  }
  ipRequests.set(ip, { count: 1, firstRequest: now });
  return true;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try later.' },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    // 1. Mail to YOU
    const mailOptionsToOwner = {
      from: `"Portfolio Contact" <${EMAIL}>`,
      to: EMAIL_RECEIVER,
      subject: `${name} wants to contact you.`,
      // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptionsToOwner);

    // Respond immediately after your mail is sent
    const response = NextResponse.json({ success: true, message: 'Message sent successfully' });

    // 2. Fire-and-forget auto-reply (no blocking)
    (async () => {
      try {
        const mailOptionsToClient = {
          from: `"Recruiteme.in" <${EMAIL}>`,
          to: email,
          subject: `Thanks for reaching out, ${name}!`,
          text: `Hi ${name},\n\nThank you for contacting us. We will get back to you within 1–3 business days.\n\nBest regards,\nRecruiteme Team`,
          html: `
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for contacting us. We have received your message and will get back to you within <strong>1–3 business days</strong>.</p>
            <p>Best regards,<br/>Recruiteme Team</p>
          `,
          replyTo: EMAIL_RECEIVER, // so replies come back to you
        };

        await transporter.sendMail(mailOptionsToClient);
      } catch (err) {
        console.error('Auto-reply sending failed:', err);
      }
    })();

    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
