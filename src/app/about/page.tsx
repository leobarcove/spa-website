import Header from '@/components/Header/Header'
import AboutSection from '@/components/About/AboutSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'About Us | Serenity Spa Malaysia | Traditional Wellness Sanctuary',
  description: 'Learn about Serenity Spa Malaysia, Kuala Lumpur\'s premier wellness sanctuary. Discover our story, philosophy, and commitment to traditional healing and modern luxury.',
  keywords: 'about serenity spa, spa philosophy Malaysia, wellness sanctuary KL, traditional healing, spa story, luxury spa experience',
  openGraph: {
    title: 'About Us | Serenity Spa Malaysia | Traditional Wellness Sanctuary',
    description: 'Learn about Serenity Spa Malaysia, Kuala Lumpur\'s premier wellness sanctuary. Discover our story, philosophy, and commitment to traditional healing.',
    url: 'https://serenityspa.my/about',
    siteName: 'Serenity Spa Malaysia',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'About Serenity Spa Malaysia - Our Story',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Serenity Spa Malaysia | Traditional Wellness Sanctuary',
    description: 'Learn about Serenity Spa Malaysia, Kuala Lumpur\'s premier wellness sanctuary. Discover our story, philosophy, and commitment to traditional healing.',
    images: ['https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  alternates: {
    canonical: 'https://serenityspa.my/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}