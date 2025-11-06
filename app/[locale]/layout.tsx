import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

// Optimized font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://musicismedicinebypeak.com'),
  title: 'Music Is Medicine – N2O & Alan Parsons for Brain Cancer',
  description: 'A charity music project by N2O and Alan Parsons supporting the Brain Tumour Foundation of Canada through hope, healing, and powerful songs.',
  keywords: ['Music is Medicine', 'N2O', 'Alan Parsons', 'Brain Cancer Research', 'Brain Tumour Foundation of Canada', 'Charity Music', 'PEAK Financial Group', 'Robert Frances'],
  authors: [{ name: 'PEAK Financial Group' }],
  openGraph: {
    title: 'Music Is Medicine – N2O & Alan Parsons for Brain Cancer',
    description: 'A charity music project by N2O and Alan Parsons supporting the Brain Tumour Foundation of Canada through hope, healing, and powerful songs.',
    url: 'https://musicismedicinebypeak.com',
    siteName: 'Music is Medicine',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Music is Medicine featuring N2O and Alan Parsons',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music Is Medicine – N2O & Alan Parsons for Brain Cancer',
    description: 'A charity music project by N2O and Alan Parsons supporting the Brain Tumour Foundation of Canada.',
    images: ['/images/twitter-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Fetch messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon-music-is-medicine.png" />
        <link rel="apple-touch-icon" href="/favicon-music-is-medicine.png" />
        <meta name="theme-color" content="#0077B6" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HDJH3JH');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HDJH3JH"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
