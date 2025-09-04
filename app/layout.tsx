import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hemakrishna - Full Stack Developer',
  description: 'Personal portfolio of Hemakrishna kumar, a skilled Full Stack Developer specializing in React, Next.js, node, express and modern web technologies.',
  keywords: 'full stack developer, react, node, javascript, express, mern, nextjs, typescript, portfolio, web development',
  authors: [{ name: 'Hemakrishna' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Hemakrishna - Full Stack Developer',
    description: 'Personal portfolio showcasing modern web development expertise',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hemakrishna - Full Stack Developer',
    description: 'Personal portfolio showcasing modern web development expertise',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </head>
      <body className={`${roboto.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}