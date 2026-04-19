import type { Metadata } from 'next';
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import CustomCursor from '@/components/ui/custom-cursor';
import ScrollProgress from '@/components/ui/scroll-progress';

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suryansh Srivastava — Creative Developer',
  description: 'Crafting immersive digital experiences with code, design, and a touch of magic.',
  keywords: ['creative developer', 'frontend developer', 'react', 'nextjs', 'portfolio', 'ui/ux'],
  authors: [{ name: 'Suryansh Srivastava' }],
  openGraph: {
    title: 'Suryansh Srivastava — Creative Developer',
    description: 'Crafting immersive digital experiences with code, design, and a touch of magic.',
    url: 'https://suryanshsrivastava.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Suryansh Srivastava',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Providers>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
