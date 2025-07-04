'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MdContentCopy, MdCheckCircle, MdInfo, MdTimer } from 'react-icons/md'
import { useCart } from '@/contexts/CartContext'
import styles from './CheckoutSection.module.scss'

interface BankDetails {
  bankName: string
  accountName: string
  accountNumber: string
  swiftCode: string
}

const bankDetails: BankDetails = {
  bankName: 'Maybank',
  accountName: 'Sharon Spa Relax Enterprise',
  accountNumber: '512345678901',
  swiftCode: 'MBBEMYKL',
}

export default function CheckoutSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [orderNumber, setOrderNumber] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const { items, getTotalPrice, clearCart } = useCart()
  const router = useRouter()

  useEffect(() => {
    // Generate order number
    const generateOrderNumber = () => {
      const date = new Date()
      const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '')
      const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase()
      return `SSR${dateStr}${randomStr}`
    }
    setOrderNumber(generateOrderNumber())
    setIsLoading(false)
  }, [])

  // Ensure getTotalPrice is available before calling it
  const subtotal = typeof getTotalPrice === 'function' ? getTotalPrice() : 0
  const shipping = subtotal > 150 ? 0 : 15
  const tax = subtotal * 0.06
  const total = subtotal + shipping + tax

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  if (isLoading) {
    return (
      <section className={styles.checkoutSection}>
        <div className={styles.container}>
          <div className={styles.emptyCart}>
            <h2>Loading...</h2>
          </div>
        </div>
      </section>
    )
  }

  if (!items || items.length === 0) {
    return (
      <section className={styles.checkoutSection}>
        <div className={styles.container}>
          <div className={styles.emptyCart}>
            <h2>Your cart is empty</h2>
            <p>Please add items to your cart before checking out.</p>
            <button
              onClick={() => router.push('/products')}
              className={styles.shopBtn}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.checkoutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.checkoutGrid}>
          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.orderNumber}>
              Order Number: <strong>{orderNumber}</strong>
            </div>

            <div className={styles.orderItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.orderItem}>
                  <div>
                    <h4>{item.name}</h4>
                    <p className={styles.itemDetails}>
                      {item.size} • Qty: {item.quantity}
                    </p>
                  </div>
                  <span className={styles.itemPrice}>
                    RM{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.orderTotals}>
              <div className={styles.totalRow}>
                <span>Subtotal</span>
                <span>RM{subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? 'FREE' : `RM${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className={styles.totalRow}>
                <span>SST (6%)</span>
                <span>RM{tax.toFixed(2)}</span>
              </div>
              <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                <span>Total</span>
                <span>RM{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className={styles.paymentSection}>
            <h2>Payment Instructions</h2>

            <div className={styles.paymentMethod}>
              <h3>Bank Transfer Details</h3>
              <p className={styles.instruction}>
                Please transfer the exact amount to the following bank account:
              </p>

              <div className={styles.bankDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Bank Name:</span>
                  <div className={styles.valueGroup}>
                    <span className={styles.value}>{bankDetails.bankName}</span>
                    <button
                      className={styles.copyBtn}
                      onClick={() =>
                        copyToClipboard(bankDetails.bankName, 'bank')
                      }
                    >
                      {copiedField === 'bank' ? (
                        <MdCheckCircle />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.label}>Account Name:</span>
                  <div className={styles.valueGroup}>
                    <span className={styles.value}>
                      {bankDetails.accountName}
                    </span>
                    <button
                      className={styles.copyBtn}
                      onClick={() =>
                        copyToClipboard(bankDetails.accountName, 'name')
                      }
                    >
                      {copiedField === 'name' ? (
                        <MdCheckCircle />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.label}>Account Number:</span>
                  <div className={styles.valueGroup}>
                    <span className={styles.value}>
                      {bankDetails.accountNumber}
                    </span>
                    <button
                      className={styles.copyBtn}
                      onClick={() =>
                        copyToClipboard(bankDetails.accountNumber, 'account')
                      }
                    >
                      {copiedField === 'account' ? (
                        <MdCheckCircle />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.label}>SWIFT Code:</span>
                  <div className={styles.valueGroup}>
                    <span className={styles.value}>
                      {bankDetails.swiftCode}
                    </span>
                    <button
                      className={styles.copyBtn}
                      onClick={() =>
                        copyToClipboard(bankDetails.swiftCode, 'swift')
                      }
                    >
                      {copiedField === 'swift' ? (
                        <MdCheckCircle />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.label}>Amount to Pay:</span>
                  <div className={styles.valueGroup}>
                    <span className={`${styles.value} ${styles.amount}`}>
                      RM{total.toFixed(2)}
                    </span>
                    <button
                      className={styles.copyBtn}
                      onClick={() =>
                        copyToClipboard(total.toFixed(2), 'amount')
                      }
                    >
                      {copiedField === 'amount' ? (
                        <MdCheckCircle />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.label}>Reference:</span>
                  <div className={styles.valueGroup}>
                    <span className={styles.value}>{orderNumber}</span>
                    <button
                      className={styles.copyBtn}
                      onClick={() => copyToClipboard(orderNumber, 'reference')}
                    >
                      {copiedField === 'reference' ? (
                        <MdCheckCircle />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.importantNotes}>
                <h4>
                  <MdInfo /> Important Notes:
                </h4>
                <ul>
                  <li>
                    Please use your order number <strong>{orderNumber}</strong>{' '}
                    as the payment reference
                  </li>
                  <li>
                    Transfer the exact amount to avoid delays in processing
                  </li>
                  <li>Keep your payment receipt for verification</li>
                  <li>
                    Orders will be processed within 1-2 business days after
                    payment confirmation
                  </li>
                </ul>
              </div>

              <div className={styles.timeNotice}>
                <MdTimer />
                <p>
                  Please complete payment within <strong>24 hours</strong> to
                  secure your order
                </p>
              </div>
            </div>

            <div className={styles.nextSteps}>
              <h3>After Payment:</h3>
              <ol>
                <li>Take a screenshot or photo of your payment receipt</li>
                <li>
                  Send the receipt via WhatsApp to <strong>601112914118</strong>
                </li>
                <li>
                  Include your order number <strong>{orderNumber}</strong> in
                  the message
                </li>
                <li>
                  You will receive a confirmation within 2-4 hours during
                  business hours
                </li>
              </ol>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.confirmBtn}
                onClick={() => {
                  alert(
                    'Order placed successfully! Please proceed with bank transfer.'
                  )
                  clearCart()
                  router.push('/')
                }}
              >
                I've Made the Payment
              </button>
              <button className={styles.backBtn} onClick={() => router.back()}>
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
