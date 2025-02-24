import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Default metadata configuration
export const metadata: Metadata = {
  title: {
    default: "DigiEvolve Hub | Digital Transformation & Training Solutions",
    template: "%s | DigiEvolve Hub"
  },
  description: "Empowering excellence through comprehensive digital transformation, training, and consulting solutions.",
  keywords: ["digital transformation", "training", "consulting", "data analytics", "AI", "machine learning"],
  authors: [{ name: "DigiEvolve Hub" }],
  creator: "DigiEvolve Hub",
  metadataBase: new URL('https://your-domain.com'),
  
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/logo.png',
        type: 'image/png',
        sizes: '16x16',
      }
    ],
    apple: [
      {
        url: '/images/logo.png',
        type: 'image/png',
        sizes: '180x180',
      }
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/images/logo.png',
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'DigiEvolve Hub',
    title: 'DigiEvolve Hub | Digital Transformation & Training Solutions',
    description: 'Empowering excellence through comprehensive digital transformation, training, and consulting solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiEvolve Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiEvolve Hub | Digital Transformation & Training Solutions',
    description: 'Empowering excellence through comprehensive digital transformation, training, and consulting solutions.',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/logo.png" sizes="180x180" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}