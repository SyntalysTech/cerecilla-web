import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/chat/ChatBot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cerecilla - Comparador de Tarifas de Luz, Gas, Telefonía y Más',
  description: 'Encuentra las mejores tarifas de luz, gas, telefonía, fibra y seguros. Servicio gratuito y personalizado para optimizar tus facturas.',
  keywords: 'comparador tarifas, luz, gas, telefonía, fibra, seguros, ahorro energético',
  authors: [{ name: 'Cerecilla S.L.' }],
  icons: {
    icon: '/assets/img/favicon.png',
    apple: '/assets/img/favicon.png',
  },
  openGraph: {
    title: 'Cerecilla - Tu Comparador de Tarifas Gratuito',
    description: 'Ahorra en tus facturas de luz, gas, telefonía y más con nuestro servicio de comparación gratuito.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
