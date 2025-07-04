import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TermsSection from '@/components/Legal/TermsSection'

export const metadata = {
  title: 'Terms & Conditions | Sharon Spa',
  description:
    'Read the terms and conditions for using Sharon Spa services. Understand our booking policies, cancellation terms, and service guidelines.',
  keywords:
    'spa terms conditions, booking policy, cancellation policy, spa guidelines Malaysia',
  openGraph: {
    title: 'Terms & Conditions | Sharon Spa',
    description:
      'Read the terms and conditions for using Sharon Spa services. Understand our booking policies, cancellation terms, and service guidelines.',
    url: 'https://sharon-spa.com/terms',
    siteName: 'Sharon Spa',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Sharon Spa',
    description: 'Read the terms and conditions for using Sharon Spa services.',
  },
  alternates: {
    canonical: 'https://sharon-spa.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <TermsSection />
      </div>
      <Footer />
    </main>
  )
}
