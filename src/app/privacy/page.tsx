import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import PrivacySection from '@/components/Legal/PrivacySection'

export const metadata = {
  title: 'Privacy Policy | Sharon Spa',
  description:
    'Learn how Sharon Spa protects your privacy and personal data. Read our comprehensive privacy policy outlining data collection, usage, and security measures.',
  keywords:
    'privacy policy spa, data protection Malaysia, personal information security, spa privacy terms',
  openGraph: {
    title: 'Privacy Policy | Sharon Spa',
    description:
      'Learn how Sharon Spa protects your privacy and personal data. Read our comprehensive privacy policy.',
    url: 'https://sharonspa.my/privacy',
    siteName: 'Sharon Spa',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Sharon Spa',
    description:
      'Learn how Sharon Spa protects your privacy and personal data.',
  },
  alternates: {
    canonical: 'https://sharonspa.my/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <PrivacySection />
      </div>
      <Footer />
    </main>
  )
}
