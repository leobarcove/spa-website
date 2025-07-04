import Header from '@/components/Header/Header'
import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Contact Us | Sharon Spa | Location & Booking Info',
  description:
    'Contact Sharon Spa in Georgetown, Penang. Find our location, business hours, phone number, and booking information. Visit our luxury wellness sanctuary today.',
  keywords:
    'contact spa Penang, spa location Georgetown, Penang spa, spa phone number, spa address Penang, spa business hours',
  openGraph: {
    title: 'Contact Us | Sharon Spa | Location & Booking Info',
    description:
      'Contact Sharon Spa in Georgetown, Penang. Find our location, business hours, phone number, and booking information.',
    url: 'https://sharon-spa.com/contact',
    siteName: 'Sharon Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Contact Sharon Spa - Location & Info',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Sharon Spa | Location & Booking Info',
    description:
      'Contact Sharon Spa in Georgetown, Penang. Find our location, business hours, phone number, and booking information.',
    images: [
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
    ],
  },
  alternates: {
    canonical: 'https://sharon-spa.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div>
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
