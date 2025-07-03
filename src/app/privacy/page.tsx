import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import PrivacySection from '@/components/Legal/PrivacySection'

export const metadata = {
  title: 'Privacy Policy | Serenity Spa Malaysia',
  description: 'Learn how Serenity Spa Malaysia protects your privacy and personal data. Read our comprehensive privacy policy outlining data collection, usage, and security measures.',
  keywords: 'privacy policy spa, data protection Malaysia, personal information security, spa privacy terms',
  openGraph: {
    title: 'Privacy Policy | Serenity Spa Malaysia',
    description: 'Learn how Serenity Spa Malaysia protects your privacy and personal data. Read our comprehensive privacy policy.',
    url: 'https://serenityspa.my/privacy',
    siteName: 'Serenity Spa Malaysia',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Serenity Spa Malaysia',
    description: 'Learn how Serenity Spa Malaysia protects your privacy and personal data.',
  },
  alternates: {
    canonical: 'https://serenityspa.my/privacy',
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