import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TermsSection from '@/components/Legal/TermsSection'

export const metadata = {
  title: 'Terms & Conditions | Serenity Spa Malaysia',
  description: 'Read the terms and conditions for using Serenity Spa Malaysia services. Understand our booking policies, cancellation terms, and service guidelines.',
  keywords: 'spa terms conditions, booking policy, cancellation policy, spa guidelines Malaysia',
  openGraph: {
    title: 'Terms & Conditions | Serenity Spa Malaysia',
    description: 'Read the terms and conditions for using Serenity Spa Malaysia services. Understand our booking policies, cancellation terms, and service guidelines.',
    url: 'https://serenityspa.my/terms',
    siteName: 'Serenity Spa Malaysia',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Serenity Spa Malaysia',
    description: 'Read the terms and conditions for using Serenity Spa Malaysia services.',
  },
  alternates: {
    canonical: 'https://serenityspa.my/terms',
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