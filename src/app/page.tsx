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
    url: 'https://sharonsparelax.my',
    siteName: 'Sharon Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
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
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
    ],
  },
  alternates: {
    canonical: 'https://sharonsparelax.my',
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
