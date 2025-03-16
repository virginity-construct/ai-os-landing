import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'AI OS – The Self-Improving AI That Builds Businesses',
  description: 'Autonomous AI agents cut dev teams by 90%. Join the future of business building.',
  keywords: 'AI OS, autonomous AI, business automation, AI agents, development automation',
  openGraph: {
    title: 'AI OS – The Self-Improving AI That Builds Businesses',
    description: 'Autonomous AI agents cut dev teams by 90%. Join the future of business building.',
    url: 'https://ai-os.com',
    siteName: 'AI OS',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'AI OS - Autonomous Business Building',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI OS – The Self-Improving AI That Builds Businesses',
    description: 'Autonomous AI agents cut dev teams by 90%. Join the future of business building.',
    images: ['/og.png'],
    creator: '@aios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://ai-os.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
