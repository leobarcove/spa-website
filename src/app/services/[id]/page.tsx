'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MdSchedule, MdAttachMoney, MdStar, MdChevronLeft, MdCheck } from 'react-icons/md'
import styles from './page.module.scss'

interface ServiceDetail {
  id: string
  title: string
  category: string
  price: string
  duration: string
  description: string
  longDescription: string
  image: string
  benefits: string[]
  includes: string[]
  suitableFor: string[]
  notSuitableFor: string[]
  preparation: string[]
  aftercare: string[]
}

const serviceDetails: Record<string, ServiceDetail> = {
  '1': {
    id: '1',
    title: 'Traditional Malaysian Massage',
    category: 'Massage Therapy',
    price: 'RM 180',
    duration: '90 minutes',
    description: 'Authentic Malaysian therapeutic massage using traditional techniques passed down through generations.',
    longDescription: 'Experience the authentic healing power of traditional Malaysian massage, a therapeutic practice that has been refined over centuries. Our skilled therapists use time-honored techniques combining gentle pressure, rhythmic strokes, and ancient wisdom to restore balance to your body and mind. This treatment incorporates indigenous Malaysian healing principles and locally sourced therapeutic oils.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Relieves muscle tension and stiffness',
      'Improves blood circulation',
      'Reduces stress and anxiety',
      'Enhances flexibility and mobility',
      'Promotes deep relaxation',
      'Balances energy flow'
    ],
    includes: [
      '90-minute traditional massage session',
      'Consultation with certified therapist',
      'Premium Malaysian herbal oils',
      'Hot towel treatment',
      'Relaxation tea ceremony',
      'Access to relaxation lounge'
    ],
    suitableFor: [
      'Those seeking authentic cultural experience',
      'People with muscle tension',
      'Stress relief seekers',
      'First-time spa visitors',
      'Anyone interested in traditional healing'
    ],
    notSuitableFor: [
      'Pregnant women (first trimester)',
      'Recent surgery patients',
      'Severe medical conditions',
      'Open wounds or skin infections'
    ],
    preparation: [
      'Arrive 15 minutes early for consultation',
      'Avoid heavy meals 2 hours before treatment',
      'Stay hydrated throughout the day',
      'Inform therapist of any medical conditions',
      'Remove jewelry and contact lenses'
    ],
    aftercare: [
      'Drink plenty of water to flush toxins',
      'Avoid strenuous activities for 24 hours',
      'Take a warm bath with Epsom salts',
      'Get adequate rest and sleep',
      'Avoid alcohol and caffeine'
    ]
  },
  '2': {
    id: '2',
    title: 'Aromatherapy Wellness Journey',
    category: 'Aromatherapy',
    price: 'RM 220',
    duration: '120 minutes',
    description: 'Immersive aromatherapy experience combining essential oils, massage, and wellness rituals.',
    longDescription: 'Embark on a transformative wellness journey that engages all your senses through the power of aromatherapy. This comprehensive treatment combines carefully selected essential oils with therapeutic massage techniques, breathing exercises, and mindfulness practices. Each session is customized based on your individual needs and desired outcomes.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Balances emotions and mood',
      'Reduces anxiety and stress',
      'Improves sleep quality',
      'Enhances mental clarity',
      'Boosts immune system',
      'Promotes hormonal balance'
    ],
    includes: [
      '120-minute wellness journey',
      'Personalized essential oil blend',
      'Full body aromatherapy massage',
      'Guided breathing and meditation',
      'Aromatherapy diffusion session',
      'Take-home essential oil sample'
    ],
    suitableFor: [
      'Stress management seekers',
      'Those with sleep issues',
      'Emotional balance needs',
      'Aromatherapy enthusiasts',
      'Wellness-focused individuals'
    ],
    notSuitableFor: [
      'Severe allergies to essential oils',
      'Pregnancy complications',
      'Respiratory conditions',
      'Recent chemotherapy patients'
    ],
    preparation: [
      'Complete detailed wellness questionnaire',
      'Avoid strong fragrances before arrival',
      'Discuss any allergies with therapist',
      'Wear comfortable, loose clothing',
      'Set intention for your wellness journey'
    ],
    aftercare: [
      'Continue using your personalized oil blend',
      'Practice recommended breathing techniques',
      'Maintain regular sleep schedule',
      'Stay mindful of emotional responses',
      'Book follow-up session for optimal results'
    ]
  },
  '3': {
    id: '3',
    title: 'Royal Malaysian Ritual',
    category: 'Luxury Ritual',
    price: 'RM 380',
    duration: '180 minutes',
    description: 'Ultimate luxury spa experience inspired by ancient Malaysian royal traditions.',
    longDescription: 'Indulge in the ultimate luxury with our signature Royal Malaysian Ritual, a ceremonial treatment inspired by the pampering traditions of Malaysian royalty. This three-hour journey combines multiple therapeutic modalities including traditional massage, body scrub, facial treatment, and royal bath ceremony using gold-infused products and rare Malaysian ingredients.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Complete physical and mental rejuvenation',
      'Deeply nourished and radiant skin',
      'Enhanced sense of well-being',
      'Improved circulation and lymphatic drainage',
      'Stress relief and mental clarity',
      'Luxurious cultural experience'
    ],
    includes: [
      '180-minute royal treatment ceremony',
      'Welcome ritual with traditional tea',
      'Full body gold scrub exfoliation',
      'Royal massage with premium oils',
      'Rejuvenating facial treatment',
      'Royal bath ceremony',
      'Healthy royal cuisine lunch',
      'Exclusive royal treatment suite'
    ],
    suitableFor: [
      'Special occasion celebrations',
      'Luxury experience seekers',
      'Cultural enthusiasts',
      'Those needing complete rejuvenation',
      'Anniversary or honeymoon couples'
    ],
    notSuitableFor: [
      'Time-constrained schedules',
      'Budget-conscious visitors',
      'Claustrophobic individuals',
      'Those preferring simple treatments'
    ],
    preparation: [
      'Book well in advance due to popularity',
      'Clear your entire day for relaxation',
      'Arrive 30 minutes early for ceremonial welcome',
      'Discuss dietary restrictions for royal cuisine',
      'Prepare for a transformative experience'
    ],
    aftercare: [
      'Extend relaxation at home with provided oils',
      'Maintain skincare routine with royal products',
      'Continue hydration with recommended teas',
      'Journal about your royal experience',
      'Schedule quarterly royal rituals for ongoing benefits'
    ]
  }
}

// Add more services as needed
const additionalServices = {
  '4': { ...serviceDetails['1'], id: '4', title: 'Hot Stone Therapy', price: 'RM 200' },
  '5': { ...serviceDetails['1'], id: '5', title: 'Deep Tissue Massage', price: 'RM 190' },
  '6': { ...serviceDetails['1'], id: '6', title: 'Couples Massage', price: 'RM 360' },
  '7': { ...serviceDetails['2'], id: '7', title: 'Essential Oil Massage', price: 'RM 170' },
  '8': { ...serviceDetails['2'], id: '8', title: 'Aromatherapy Facial', price: 'RM 160' },
  '9': { ...serviceDetails['3'], id: '9', title: 'Gold Leaf Facial', price: 'RM 280' },
  '10': { ...serviceDetails['3'], id: '10', title: 'Platinum Package', price: 'RM 450' },
  '11': { ...serviceDetails['2'], id: '11', title: 'Facial Rejuvenation', price: 'RM 150' },
  '12': { ...serviceDetails['1'], id: '12', title: 'Body Scrub & Wrap', price: 'RM 140' },
  '13': { ...serviceDetails['2'], id: '13', title: 'Detox Treatment', price: 'RM 180' }
}

const allServices = { ...serviceDetails, ...additionalServices }

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = allServices[params.id as keyof typeof allServices]

  if (!service) {
    notFound()
  }

  return (
    <main className={styles.serviceDetail}>
      <div className={styles.container}>
        {/* Back Navigation */}
        <div className={styles.backNav}>
          <Link href="/services" className={styles.backLink}>
            <MdChevronLeft />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.category}>{service.category}</div>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.description}>{service.description}</p>
            
            <div className={styles.serviceDetails}>
              <div className={styles.detail}>
                <MdSchedule />
                <span>{service.duration}</span>
              </div>
              <div className={styles.detail}>
                <MdAttachMoney />
                <span>{service.price}</span>
              </div>
              <div className={styles.detail}>
                <MdStar />
                <span>4.9/5 Rating</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <Link href="/booking" className={styles.primaryBtn}>
                Book This Treatment
              </Link>
              <button className={styles.secondaryBtn}>
                Call to Inquire
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className={styles.content}>
          {/* Description */}
          <section className={styles.section}>
            <h2>About This Treatment</h2>
            <p>{service.longDescription}</p>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <h2>Treatment Benefits</h2>
            <div className={styles.benefitsList}>
              {service.benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <MdCheck />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className={styles.section}>
            <h2>What's Included</h2>
            <div className={styles.includesList}>
              {service.includes.map((item, index) => (
                <div key={index} className={styles.includeItem}>
                  <MdCheck />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Suitability */}
          <div className={styles.suitabilityGrid}>
            <section className={styles.suitabilitySection}>
              <h3>Perfect For</h3>
              <ul>
                {service.suitableFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.suitabilitySection}>
              <h3>Not Recommended For</h3>
              <ul>
                {service.notSuitableFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Preparation & Aftercare */}
          <div className={styles.careGrid}>
            <section className={styles.careSection}>
              <h3>Before Your Treatment</h3>
              <ul>
                {service.preparation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.careSection}>
              <h3>After Your Treatment</h3>
              <ul>
                {service.aftercare.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Experience {service.title}?</h2>
            <p>Book your appointment today and discover the transformative power of our treatments.</p>
            <div className={styles.ctaButtons}>
              <Link href="/booking" className={styles.primaryBtn}>
                Book Now - {service.price}
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                Explore More Treatments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}