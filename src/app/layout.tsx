import type { Metadata } from 'next'
import '@/styles/globals.scss'
import ServiceWorkerRegistration from '@/components/PWA/ServiceWorkerRegistration'
import InstallPrompt from '@/components/PWA/InstallPrompt'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: {
    default: 'Sharon Spa | Luxury Wellness & Beauty Treatments in Penang',
    template: '%s | Sharon Spa',
  },
  description:
    "Experience ultimate relaxation at Penang's premier luxury spa. Expert therapists, premium treatments, and serene ambiance in the heart of Georgetown's UNESCO Heritage zone.",
  keywords: [
    'spa Penang',
    'luxury spa Georgetown',
    'wellness Penang',
    'massage Pulau Pinang',
    'beauty treatments',
    'Georgetown spa',
    'relaxation',
    'therapeutic massage',
    'heritage spa',
  ],
  authors: [{ name: 'Sharon Spa' }],
  creator: 'Sharon Spa Relax Enterprise',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://sharon-spa.com',
    siteName: 'Sharon Spa',
    title: 'Sharon Spa | Luxury Wellness & Beauty Treatments in Penang',
    description:
      "Experience ultimate relaxation at Penang's premier luxury spa. Expert therapists, premium treatments, and serene ambiance in Georgetown.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Sharon Spa - Luxury Wellness Experience in Penang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharon Spa | Luxury Wellness & Beauty Treatments',
    description:
      "Experience ultimate relaxation at Malaysia's premier luxury spa.",
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
    ],
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
  alternates: {
    canonical: 'https://sharon-spa.com',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a2e1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sharon Spa" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Spa',
              name: 'Sharon Spa',
              alternateName: 'Sharon Spa Penang',
              description:
                "Penang's premier luxury spa offering traditional healing treatments, aromatherapy, and wellness services in Georgetown.",
              url: 'https://sharon-spa.com',
              logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
              image: [
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
                'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
                'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
              ],
              telephone: '601112914118',
              email: 'info@sharon-spa.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '181 Tingkat 1, Lot B, Lebuh Melaka',
                addressLocality: 'Georgetown',
                postalCode: '10400',
                addressCountry: 'MY',
                addressRegion: 'Pulau Pinang',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '5.4141',
                longitude: '100.3288',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '10:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '09:00',
                  closes: '20:00',
                },
              ],
              priceRange: 'RM180-RM580',
              currenciesAccepted: 'MYR',
              paymentAccepted: 'Cash, Credit Card, Debit Card',
              amenityFeature: [
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Valet Parking',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Air Conditioning',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'WiFi',
                  value: true,
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Spa Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Traditional Malaysian Massage',
                      description:
                        'Ancient healing techniques with aromatic oils',
                    },
                    price: '180',
                    priceCurrency: 'MYR',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Aromatherapy Wellness Journey',
                      description:
                        'Premium essential oils for complete rejuvenation',
                    },
                    price: '220',
                    priceCurrency: 'MYR',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Royal Malaysian Ritual',
                      description:
                        'Signature luxury treatment with gold-infused oils',
                    },
                    price: '580',
                    priceCurrency: 'MYR',
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '127',
              },
              review: [
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Sarah Chen',
                  },
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                  },
                  reviewBody:
                    'Absolutely incredible experience! The traditional Malaysian massage was exactly what I needed after a stressful week.',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <CartProvider>
          <ServiceWorkerRegistration />
          <InstallPrompt />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
