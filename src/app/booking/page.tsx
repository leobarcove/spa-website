import Header from '@/components/Header/Header'
import BookingSection from '@/components/Booking/BookingSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Book Appointment | Sharon Spa | Online Booking',
  description:
    'Book your luxury spa treatment online. Choose from our premium services including traditional Malaysian massage, aromatherapy, and wellness treatments. Easy online scheduling available.',
  keywords:
    'book spa appointment, online booking Malaysia, spa reservation KL, schedule massage, wellness booking',
  openGraph: {
    title: 'Book Appointment | Sharon Spa',
    description:
      'Book your luxury spa treatment online. Choose from our premium services and schedule your perfect wellness experience.',
    url: 'https://sharon-spa.com/booking',
    siteName: 'Sharon Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Book Your Spa Appointment Online - Sharon Spa',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Appointment | Sharon Spa',
    description:
      'Book your luxury spa treatment online. Choose from our premium services and schedule your perfect wellness experience.',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
    ],
  },
  alternates: {
    canonical: 'https://sharon-spa.com/booking',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BookingPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '120px' }}>
        <BookingSection />
      </div>
      <Footer />
    </main>
  )
}
