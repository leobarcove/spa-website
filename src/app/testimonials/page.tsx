import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TestimonialsPageSection from '@/components/Testimonials/TestimonialsPageSection'

export const metadata = {
  title: 'Client Testimonials | Serenity Spa Malaysia',
  description: 'Read what our valued clients say about their Serenity Spa experience. Discover authentic reviews and testimonials from our satisfied customers in Malaysia.',
  keywords: 'spa testimonials Malaysia, customer reviews Serenity Spa, luxury spa feedback, client experiences wellness spa',
  openGraph: {
    title: 'Client Testimonials | Serenity Spa Malaysia',
    description: 'Read what our valued clients say about their Serenity Spa experience. Discover authentic reviews and testimonials.',
    url: 'https://serenityspa.my/testimonials',
    siteName: 'Serenity Spa Malaysia',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Serenity Spa Malaysia',
    description: 'Read what our valued clients say about their Serenity Spa experience.',
  },
  alternates: {
    canonical: 'https://serenityspa.my/testimonials',
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