import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import GiftCardsSection from '@/components/GiftCards/GiftCardsSection'

export const metadata = {
  title: 'Spa Gift Cards | Sharon Spa',
  description:
    'Give the gift of relaxation with Sharon Spa gift cards. Perfect for birthdays, anniversaries, or any special occasion. Available in various amounts.',
  keywords:
    'spa gift cards Malaysia, spa vouchers, wellness gift certificates, luxury spa gifts',
  openGraph: {
    title: 'Spa Gift Cards | Sharon Spa',
    description:
      'Give the gift of relaxation with Sharon Spa gift cards. Perfect for any special occasion.',
    url: 'https://sharon-spa.com/gift-cards',
    siteName: 'Sharon Spa',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa Gift Cards | Sharon Spa',
    description: 'Give the gift of relaxation with Sharon Spa gift cards.',
  },
  alternates: {
    canonical: 'https://sharon-spa.com/gift-cards',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GiftCardsPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <GiftCardsSection />
      </div>
      <Footer />
    </main>
  )
}
