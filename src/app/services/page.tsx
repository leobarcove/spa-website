import Header from '@/components/Header/Header'
import ServicesSection from '@/components/Services/ServicesSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Spa Services | Traditional Malaysian Massage & Wellness Treatments',
  description: 'Discover our luxury spa services including traditional Malaysian massage, aromatherapy, hot stone therapy, and royal wellness rituals. Expert therapists in Kuala Lumpur.',
  keywords: 'spa services Malaysia, traditional massage KL, aromatherapy treatments, hot stone therapy, royal ritual, wellness services, spa treatments',
  openGraph: {
    title: 'Spa Services | Traditional Malaysian Massage & Wellness Treatments',
    description: 'Discover our luxury spa services including traditional Malaysian massage, aromatherapy, hot stone therapy, and royal wellness rituals.',
    url: 'https://serenityspa.my/services',
    siteName: 'Serenity Spa Malaysia',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxury Spa Services - Serenity Spa Malaysia',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa Services | Traditional Malaysian Massage & Wellness Treatments',
    description: 'Discover our luxury spa services including traditional Malaysian massage, aromatherapy, hot stone therapy, and royal wellness rituals.',
    images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  alternates: {
    canonical: 'https://serenityspa.my/services',
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