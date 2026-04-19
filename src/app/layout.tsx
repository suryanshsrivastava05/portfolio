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
  title: {
    default: 'Suryansh Srivastava — Video Editor & Motion Designer',
    template: '%s | Suryansh Srivastava',
  },
  description:
    'Physics-driven portfolio showcasing video editing, motion graphics, post-production, and digital experiences that defy gravity.',
  keywords: ['video editor', 'motion designer', 'portfolio', 'creative', 'post-production', 'filmmaking'],
  authors: [{ name: 'Suryansh Srivastava' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Suryansh Srivastava',
  },
  robots: {
    index: true,
    follow: true,
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
