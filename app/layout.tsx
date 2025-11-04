import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Music Is Medicine – N2O & Alan Parsons for Brain Cancer',
  description: 'A charity music project by N2O and Alan Parsons supporting the Brain Tumour Foundation of Canada through hope, healing, and powerful songs.',
  keywords: ['Music is Medicine', 'N2O', 'Alan Parsons', 'Brain Cancer Research', 'Brain Tumour Foundation of Canada', 'Charity Music', 'PEAK Financial Group', 'Robert Frances'],
  authors: [{ name: 'PEAK Financial Group' }],
  openGraph: {
    title: 'Music Is Medicine – N2O & Alan Parsons for Brain Cancer',
    description: 'A charity music project by N2O and Alan Parsons supporting the Brain Tumour Foundation of Canada through hope, healing, and powerful songs.',
    url: 'https://musicismedicine.ca',
    siteName: 'Music is Medicine',
    images: [
      {
        url: '/images/og-image.jpg',
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
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-music-is-medicine.png" />
        <link rel="apple-touch-icon" href="/favicon-music-is-medicine.png" />
        <meta name="theme-color" content="#0077B6" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
