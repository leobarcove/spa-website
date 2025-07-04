import Header from '@/components/Header/Header'
import ProductsSection from '@/components/Products/ProductsSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Spa Products | Sharon Spa | Premium Oils & Wellness',
  description:
    'Discover our premium collection of spa products including castor massage oil, aromatherapy oils, and wellness products. Take home the luxury of Sharon Spa.',
  keywords:
    'spa products Malaysia, castor oil, aromatherapy oils, massage oils, wellness products, premium spa products KL',
  openGraph: {
    title: 'Spa Products | Sharon Spa | Premium Oils & Wellness',
    description:
      'Discover our premium collection of spa products including castor massage oil, aromatherapy oils, and wellness products.',
    url: 'https://sharonspa.my/products',
    siteName: 'Sharon Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Premium Spa Products - Sharon Spa',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa Products | Sharon Spa | Premium Oils & Wellness',
    description:
      'Discover our premium collection of spa products including castor massage oil, aromatherapy oils, and wellness products.',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
    ],
  },
  alternates: {
    canonical: 'https://sharonspa.my/products',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <ProductsSection />
      <Footer />
    </main>
  )
}
