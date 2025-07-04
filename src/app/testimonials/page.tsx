import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TestimonialsPageSection from '@/components/Testimonials/TestimonialsPageSection'

export const metadata = {
  title: 'Client Testimonials | Sharon Spa',
  description:
    'Read what our valued clients say about their Sharon Spa experience. Discover authentic reviews and testimonials from our satisfied customers in Malaysia.',
  keywords:
    'spa testimonials Malaysia, customer reviews Sharon Spa, luxury spa feedback, client experiences wellness spa',
  openGraph: {
    title: 'Client Testimonials | Sharon Spa',
    description:
      'Read what our valued clients say about their Sharon Spa experience. Discover authentic reviews and testimonials.',
    url: 'https://sharon-spa.com/testimonials',
    siteName: 'Sharon Spa',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Sharon Spa',
    description:
      'Read what our valued clients say about their Sharon Spa experience.',
  },
  alternates: {
    canonical: 'https://sharon-spa.com/testimonials',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TestimonialsPage() {
  return (
    <main>
      <Header />
      <TestimonialsPageSection />
      <Footer />
    </main>
  )
}
