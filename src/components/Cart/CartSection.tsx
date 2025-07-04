'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MdAdd, MdRemove, MdDelete, MdShoppingCart } from 'react-icons/md'
import { useCart } from '@/contexts/CartContext'
import styles from './CartSection.module.scss'

export default function CartSection() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const router = useRouter()

  const handleApplyPromo = () => {
    // Simple promo code logic
    if (promoCode.toUpperCase() === 'RELAX20') {
      setDiscount(0.2) // 20% discount
    } else if (promoCode.toUpperCase() === 'FIRST10') {
      setDiscount(0.1) // 10% discount
    } else {
      setDiscount(0)
      alert('Invalid promo code')
    }
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 150 ? 0 : 15 // Free shipping over RM150
  const discountAmount = subtotal * discount
  const total = subtotal - discountAmount + shipping

  if (items.length === 0) {
    return (
      <section className={styles.cartSection}>
        <div className={styles.container}>
          <div className={styles.emptyCart}>
            <MdShoppingCart className={styles.emptyIcon} />
            <h2>Your cart is empty</h2>
            <p>Discover our premium spa products to enhance your wellness journey</p>
            <Link href="/products" className={styles.shopBtn}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.cartSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shopping Cart</h1>
        
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            <div className={styles.itemsHeader}>
              <h3>Your Items ({items.length})</h3>
              <button onClick={clearCart} className={styles.clearBtn}>
                Clear Cart
              </button>
            </div>

            {items.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                </div>
                
                <div className={styles.itemDetails}>
                  <h4>{item.name}</h4>
                  <p className={styles.size}>{item.size}</p>
                  <p className={styles.price}>RM{item.price}</p>
                </div>

                <div className={styles.quantity}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className={styles.quantityBtn}
                  >
                    <MdRemove />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className={styles.quantityBtn}
                  >
                    <MdAdd />
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  <p>RM{(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeBtn}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3>Order Summary</h3>
            
            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>RM{subtotal.toFixed(2)}</span>
              </div>
              
              {discount > 0 && (
                <div className={styles.summaryRow}>
                  <span>Discount ({discount * 100}%)</span>
                  <span className={styles.discount}>-RM{discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `RM${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className={styles.promoSection}>
                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className={styles.promoInput}
                />
                <button onClick={handleApplyPromo} className={styles.promoBtn}>
                  Apply
                </button>
              </div>
              
              <div className={styles.totalRow}>
                <span>Total</span>
                <span>RM{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className={styles.checkoutBtn}
              onClick={() => router.push('/checkout')}
            >
              Proceed to Checkout
            </button>

            <Link href="/products" className={styles.continueBtn}>
              Continue Shopping
            </Link>

            <div className={styles.policies}>
              <p>✓ Free shipping on orders over RM150</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}