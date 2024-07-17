import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carlos Polgar advocacia',
  description:
    'Carlos Polgar é um renomado advogado especializado em heteroidentificação e direito do trabalho, trazendo vasta experiência e conhecimento para suas áreas de atuação'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
