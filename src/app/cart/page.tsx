import Header from '@/components/Header/Header'
import CartSection from '@/components/Cart/CartSection'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Shopping Cart | Sharon Spa | Checkout',
  description:
    'Review your selected spa products and proceed to checkout. Premium massage oils, aromatherapy products and wellness items.',
  keywords:
    'shopping cart, spa products checkout, buy massage oils, aromatherapy purchase',
  openGraph: {
    title: 'Shopping Cart | Sharon Spa',
    description: 'Review your selected spa products and proceed to checkout.',
    url: 'https://sharon-spa.com/cart',
    siteName: 'Sharon Spa',
    locale: 'en_MY',
    type: 'website',
  },
}

export default function CartPage() {
  return (
    <main>
      <Header />
      <CartSection />
      <Footer />
    </main>
  )
}
