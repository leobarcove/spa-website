import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import CheckoutSection from '@/components/Checkout/CheckoutSection'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Checkout | Sharon Spa',
  description: 'Complete your order with secure bank transfer payment',
}

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <CheckoutSection />
      <Footer />
    </>
  )
}
