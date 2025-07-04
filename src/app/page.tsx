import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ServicesSection from '@/components/Services/ServicesSection'
import TestimonialsSection from '@/components/Testimonials/TestimonialsSection'
import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Sharon Spa | Luxury Wellness & Traditional Healing in Penang',
  description:
    "Experience Penang's premier luxury spa with traditional healing treatments, aromatherapy, and wellness services in the UNESCO Heritage zone of Georgetown. Book your tranquil escape today.",
  keywords:
    'spa Penang, luxury spa Georgetown, traditional massage Penang, aromatherapy, wellness retreat, Pulau Pinang spa, relaxation therapy, heritage spa',
  openGraph: {
    title: 'Sharon Spa | Luxury Wellness & Traditional Healing in Penang',
    description:
      "Experience Penang's premier luxury spa with traditional healing treatments, aromatherapy, and wellness services in the UNESCO Heritage zone of Georgetown.",
    url: 'https://sharon-spa.com',
    siteName: 'Sharon Spa',
    images: [
      {
        url: 'https://sharon-spa.com/images/hero/hero-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Sharon Spa - Luxury Wellness Sanctuary in Georgetown, Penang',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharon Spa | Luxury Wellness & Traditional Healing in Penang',
    description:
      "Experience Penang's premier luxury spa with traditional healing treatments, aromatherapy, and wellness services in the UNESCO Heritage zone of Georgetown.",
    images: ['https://sharon-spa.comages/hero/hero-main.jpg'],
  },
  alternates: {
    canonical: 'https://sharon-spa.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
