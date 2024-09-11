// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import '../styles/global.scss';
import { ButtonMidiaScreen } from '@/components/contentMidia/ContentMidia';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carlos Pontes advocacia',
  description:
    'Carlos Pontes é um renomado advogado especializado em heteroidentificação e direito do trabalho, trazendo vasta experiência e conhecimento para suas áreas de atuação',
  icons: {
    icon: ['favicon.ico']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <link rel="icon" href="/assets/favicon.ico" />
        <Header />
        <main>{children}</main>
        <ButtonMidiaScreen />
        <Footer />
      </body>
    </html>
  );
}
