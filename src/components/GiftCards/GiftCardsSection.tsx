'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MdStar, MdCardGiftcard, MdSchedule, MdVerified, MdEmail, MdPrint } from 'react-icons/md'
import styles from './GiftCardsSection.module.scss'

interface GiftCard {
  id: string
  name: string
  amount: number
  description: string
  validity: string
  popular?: boolean
}

const giftCardOptions: GiftCard[] = [
  {
    id: 'signature-50',
    name: 'Signature Experience',
    amount: 150,
    description: 'Perfect for trying our signature treatments including traditional Malaysian massage or aromatherapy sessions.',
    validity: '12 months'
  },
  {
    id: 'luxury-ritual',
    name: 'Luxury Ritual Package',
    amount: 280,
    description: 'Indulgent package featuring our Royal Malaysian Ritual with premium treatments and spa amenities.',
    validity: '12 months',
    popular: true
  },
  {
    id: 'couples-retreat',
    name: 'Couples Retreat',
    amount: 450,
    description: 'Romantic spa experience for two including couples massage, private suite, and refreshments.',
    validity: '12 months'
  },
  {
    id: 'wellness-journey',
    name: 'Complete Wellness Journey',
    amount: 380,
    description: 'Full day spa experience with multiple treatments, access to all facilities, and healthy spa cuisine.',
    validity: '12 months',
    popular: true
  }
]

export default function GiftCardsSection() {
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null)
  const [customAmount, setCustomAmount] = useState<number>(100)
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'print'>('email')
  const [recipientInfo, setRecipientInfo] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: ''
  })

  const handlePurchase = () => {
    const giftCard = selectedCard || {
      id: 'custom',
      name: 'Custom Amount',
      amount: customAmount,
      description: 'Flexible gift card for any spa services',
      validity: '12 months'
    }

    console.log('Gift card purchase:', {
      giftCard,
      deliveryMethod,
      recipientInfo
    })

    // In a real app, this would integrate with payment processing
    alert('Gift card purchase initiated! You will be redirected to payment.')
  }

  return (
    <section className={styles.giftCards}>
      <div className={styles.container}>
        <div className={styles.header}>
          <MdCardGiftcard className={styles.headerIcon} />
          <h1 className={styles.title}>Spa Gift Cards</h1>
          <p className={styles.subtitle}>
            Give the gift of relaxation and wellness with our luxury spa experiences
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.giftCardOptions}>
            <h2 className={styles.sectionTitle}>Choose Your Gift Card</h2>
            
            <div className={styles.cardsGrid}>
              {giftCardOptions.map((card) => (
                <div 
                  key={card.id}
                  className={`${styles.giftCardOption} ${selectedCard?.id === card.id ? styles.selected : ''}`}
                  onClick={() => setSelectedCard(card)}
                >
                  {card.popular && (
                    <div className={styles.popularBadge}>
                      <MdStar /> Most Popular
                    </div>
                  )}
                  
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardName}>{card.name}</h3>
                    <div className={styles.cardAmount}>RM {card.amount}</div>
                  </div>
                  
                  <p className={styles.cardDescription}>{card.description}</p>
                  
                  <div className={styles.cardFooter}>
                    <div className={styles.validity}>
                      <MdSchedule />
                      Valid for {card.validity}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Custom Amount Option */}
              <div 
                className={`${styles.giftCardOption} ${styles.customOption} ${!selectedCard ? styles.selected : ''}`}
                onClick={() => setSelectedCard(null)}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardName}>Custom Amount</h3>
                  <div className={styles.customAmountInput}>
                    <span>RM</span>
                    <input
                      type="number"
                      min="50"
                      max="1000"
                      step="10"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(Number(e.target.value))}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
                
                <p className={styles.cardDescription}>
                  Choose any amount between RM 50 - RM 1,000 for maximum flexibility
                </p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.validity}>
                    <MdSchedule />
                    Valid for 12 months
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.giftCardForm}>
            <h2 className={styles.sectionTitle}>Gift Card Details</h2>
            
            <div className={styles.deliveryOptions}>
              <h3>Delivery Method</h3>
              <div className={styles.deliveryButtons}>
                <button
                  className={`${styles.deliveryBtn} ${deliveryMethod === 'email' ? styles.active : ''}`}
                  onClick={() => setDeliveryMethod('email')}
                >
                  <MdEmail />
                  Email Delivery
                </button>
                <button
                  className={`${styles.deliveryBtn} ${deliveryMethod === 'print' ? styles.active : ''}`}
                  onClick={() => setDeliveryMethod('print')}
                >
                  <MdPrint />
                  Print at Home
                </button>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="recipientName">Recipient Name *</label>
                <input
                  type="text"
                  id="recipientName"
                  value={recipientInfo.recipientName}
                  onChange={(e) => setRecipientInfo({...recipientInfo, recipientName: e.target.value})}
                  required
                />
              </div>

              {deliveryMethod === 'email' && (
                <div className={styles.formGroup}>
                  <label htmlFor="recipientEmail">Recipient Email *</label>
                  <input
                    type="email"
                    id="recipientEmail"
                    value={recipientInfo.recipientEmail}
                    onChange={(e) => setRecipientInfo({...recipientInfo, recipientEmail: e.target.value})}
                    required
                  />
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="senderName">Your Name *</label>
                <input
                  type="text"
                  id="senderName"
                  value={recipientInfo.senderName}
                  onChange={(e) => setRecipientInfo({...recipientInfo, senderName: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Personal Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={recipientInfo.message}
                  onChange={(e) => setRecipientInfo({...recipientInfo, message: e.target.value})}
                  placeholder="Add a personal message to make this gift extra special..."
                />
              </div>
            </form>

            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Gift Card:</span>
                <strong>
                  {selectedCard ? selectedCard.name : 'Custom Amount'}
                </strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Amount:</span>
                <strong>RM {selectedCard ? selectedCard.amount : customAmount}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Delivery:</span>
                <strong>
                  {deliveryMethod === 'email' ? 'Email Delivery' : 'Print at Home'}
                </strong>
              </div>
            </div>

            <button 
              className={styles.purchaseBtn}
              onClick={handlePurchase}
              disabled={!recipientInfo.recipientName || !recipientInfo.senderName || (deliveryMethod === 'email' && !recipientInfo.recipientEmail)}
            >
              <MdCardGiftcard />
              Purchase Gift Card - RM {selectedCard ? selectedCard.amount : customAmount}
            </button>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <MdVerified className={styles.featureIcon} />
            <h3>No Expiry Worries</h3>
            <p>All gift cards are valid for 12 months from purchase date</p>
          </div>
          <div className={styles.feature}>
            <MdEmail className={styles.featureIcon} />
            <h3>Instant Delivery</h3>
            <p>Email delivery within minutes or print immediately at home</p>
          </div>
          <div className={styles.feature}>
            <MdCardGiftcard className={styles.featureIcon} />
            <h3>Flexible Usage</h3>
            <p>Use towards any spa service or treatment</p>
          </div>
        </div>

        <div className={styles.terms}>
          <h3>Terms & Conditions</h3>
          <ul>
            <li>Gift cards are valid for 12 months from the date of purchase</li>
            <li>Gift cards cannot be redeemed for cash or refunded</li>
            <li>Gift cards can be used towards any spa service or treatment</li>
            <li>Partial redemption is allowed, remaining balance can be used for future visits</li>
            <li>Gift cards are non-transferable after redemption</li>
            <li>Advance booking is recommended to ensure availability</li>
          </ul>
        </div>
      </div>
    </section>
  )
}