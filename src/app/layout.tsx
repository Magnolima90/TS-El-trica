import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { company, siteUrl } from '../data/company';
import { getLocalBusinessSchema } from '../lib/schema';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const title = 'TS Elétrica | Soluções Elétricas em Fortaleza';
const description =
  'TS Elétrica - Soluções Elétricas em Fortaleza, CE. Instalações, manutenção e atendimento elétrico emergencial 24h. Solicite seu orçamento.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${company.companyName}`,
  },
  description,
  authors: [{ name: company.companyName }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  verification: { google: 'QWIitKt3QNU56osoFhkqn5B_sSip2dZS2XtysH62xhs' },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title,
    description,
    siteName: company.companyName,
    url: siteUrl,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: 'TS Elétrica - Soluções Elétricas em Fortaleza' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: `${siteUrl}/og-image.png`, alt: 'TS Elétrica - Soluções Elétricas em Fortaleza' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#facc15',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
