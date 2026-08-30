import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nails-by-wyjona.anthonyvvza.chatgpt.site'),
  title: 'Nails By Wyjona | Gelnagels & Nail Art in Sneek',
  description: 'Persoonlijke gelnagels en nail art in een rustige salon aan huis in Sneek.',
  openGraph: {
    title: 'Nails By Wyjona',
    description: 'Gelnagels & Nail Art in Sneek',
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: '/og.png', width: 1733, height: 909, alt: 'Nails By Wyjona — Gelnagels & Nail Art in Sneek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nails By Wyjona',
    description: 'Gelnagels & Nail Art in Sneek',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
