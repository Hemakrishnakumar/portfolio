import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
//   secure: true, // SSL
  auth: {
    user: process.env.NODE_MAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  pool: true,   // reuse connections
});