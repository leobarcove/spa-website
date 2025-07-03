import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ServicesSection from '@/components/Services/ServicesSection'
import TestimonialsSection from '@/components/Testimonials/TestimonialsSection'
import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Serenity Spa Malaysia | Luxury Wellness & Traditional Healing',
  description: 'Experience Malaysia\'s premier luxury spa with traditional healing treatments, aromatherapy, and wellness services in the heart of Kuala Lumpur. Book your tranquil escape today.',
  keywords: 'spa Malaysia, luxury spa KL, traditional massage, aromatherapy, wellness retreat, Kuala Lumpur spa, relaxation therapy',
  openGraph: {
    title: 'Serenity Spa Malaysia | Luxury Wellness & Traditional Healing',
    description: 'Experience Malaysia\'s premier luxury spa with traditional healing treatments, aromatherapy, and wellness services in the heart of Kuala Lumpur.',
    url: 'https://serenityspa.my',
    siteName: 'Serenity Spa Malaysia',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Serenity Spa Malaysia - Luxury Wellness Sanctuary',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serenity Spa Malaysia | Luxury Wellness & Traditional Healing',
    description: 'Experience Malaysia\'s premier luxury spa with traditional healing treatments, aromatherapy, and wellness services in the heart of Kuala Lumpur.',
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  alternates: {
    canonical: 'https://serenityspa.my',
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