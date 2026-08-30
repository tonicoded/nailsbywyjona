import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './premium.css';
import { RevealController } from '@/components/reveal-controller';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nailsbywyjona.nl'),
  title: { default: 'Nagelsalon Sneek | Nails By Wyjona', template: '%s | Nails By Wyjona' },
  description: 'Nails By Wyjona opent binnenkort in Sneek voor persoonlijke gelnagels, gelpolish, French nails en nail art in een rustige salon aan huis.',
  applicationName: 'Nails By Wyjona',
  keywords: ['nagelsalon Sneek', 'gelnagels Sneek', 'nagelstudio Sneek', 'nail art Sneek', 'gelpolish Sneek', 'French nails Sneek', 'nagelstyliste Sneek', 'nagelsalon aan huis Sneek'],
  authors: [{ name: 'Nails By Wyjona', url: 'https://nailsbywyjona.nl' }],
  creator: 'Nails By Wyjona',
  publisher: 'Nails By Wyjona',
  category: 'beauty',
  alternates: { canonical: '/', languages: { 'nl-NL': '/' } },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  other: { 'geo.region': 'NL-FR', 'geo.placename': 'Sneek', 'geo.position': '53.0337;5.6589', ICBM: '53.0337, 5.6589' },
  openGraph: {
    title: 'Nails By Wyjona | Binnenkort in Sneek',
    description: 'Persoonlijke gelnagels en nail art in Sneek. Bekijk alvast de kennismakingsprijzen.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Nails By Wyjona',
    url: 'https://nailsbywyjona.nl',
    images: [{ url: '/og.png', width: 1733, height: 909, alt: 'Nails By Wyjona — Gelnagels & Nail Art in Sneek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nails By Wyjona | Binnenkort in Sneek',
    description: 'Persoonlijke gelnagels en nail art in Sneek. Bekijk alvast de kennismakingsprijzen.',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BeautySalon', '@id': 'https://nailsbywyjona.nl/#salon',
          name: 'Nails By Wyjona', url: 'https://nailsbywyjona.nl', image: 'https://nailsbywyjona.nl/og.png',
          description: 'Binnenkort geopende nagelsalon aan huis in Sneek voor gelnagels, gelpolish, French nails en nail art.',
          priceRange: '€€', sameAs: ['https://www.instagram.com/nailsbywyjona/'],
          address: { '@type': 'PostalAddress', streetAddress: 'Monnikmolen 41', postalCode: '8608 XX', addressLocality: 'Sneek', addressRegion: 'Friesland', addressCountry: 'NL' },
          areaServed: [{ '@type': 'City', name: 'Sneek' }, { '@type': 'AdministrativeArea', name: 'Súdwest-Fryslân' }],
          founder: { '@type': 'Person', name: 'Wyjona' },
          hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Kennismakingsprijzen nagelbehandelingen', itemListElement: [
            { '@type': 'Offer', name: 'Nieuwe set gelnagels', price: '39.00', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Gelnagels bijwerken', price: '34.00', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: 'Gelpolish op natuurlijke nagel', price: '27.00', priceCurrency: 'EUR' }
          ] }
        }).replace(/</g, '\\u003c') }} />
        <RevealController />
        {children}
      </body>
    </html>
  );
}
