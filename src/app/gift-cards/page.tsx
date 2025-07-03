import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import GiftCardsSection from '@/components/GiftCards/GiftCardsSection'

export const metadata = {
  title: 'Spa Gift Cards | Serenity Spa Malaysia',
  description: 'Give the gift of relaxation with Serenity Spa Malaysia gift cards. Perfect for birthdays, anniversaries, or any special occasion. Available in various amounts.',
  keywords: 'spa gift cards Malaysia, spa vouchers, wellness gift certificates, luxury spa gifts',
  openGraph: {
    title: 'Spa Gift Cards | Serenity Spa Malaysia',
    description: 'Give the gift of relaxation with Serenity Spa Malaysia gift cards. Perfect for any special occasion.',
    url: 'https://serenityspa.my/gift-cards',
    siteName: 'Serenity Spa Malaysia',
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa Gift Cards | Serenity Spa Malaysia',
    description: 'Give the gift of relaxation with Serenity Spa Malaysia gift cards.',
  },
  alternates: {
    canonical: 'https://serenityspa.my/gift-cards',
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