import Header from '@/components/Header/Header'
import ServicesSection from '@/components/Services/ServicesSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Spa Services | Traditional Malaysian Massage & Wellness Treatments',
  description:
    'Discover our luxury spa services including traditional Malaysian massage, aromatherapy, hot stone therapy, and royal wellness rituals. Expert therapists in Georgetown, Penang.',
  keywords:
    'spa services Penang, traditional massage Georgetown, aromatherapy treatments, hot stone therapy, royal ritual, wellness services, spa treatments Penang',
  openGraph: {
    title: 'Spa Services | Traditional Malaysian Massage & Wellness Treatments',
    description:
      'Discover our luxury spa services including traditional Malaysian massage, aromatherapy, hot stone therapy, and royal wellness rituals.',
    url: 'https://sharon-spa.com/services',
    siteName: 'Sharon Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxury Spa Services - Sharon Spa',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa Services | Traditional Malaysian Massage & Wellness Treatments',
    description:
      'Discover our luxury spa services including traditional Malaysian massage, aromatherapy, hot stone therapy, and royal wellness rituals.',
    images: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
    ],
  },
  alternates: {
    canonical: 'https://sharon-spa.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
