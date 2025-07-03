'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MdSchedule, MdAttachMoney, MdArrowForward } from 'react-icons/md'
import styles from './page.module.scss'

const massageServices = [
  {
    id: '1',
    title: 'Traditional Malaysian Massage',
    description: 'Authentic Malaysian therapeutic massage using traditional techniques passed down through generations.',
    price: 'RM 180',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: ['Relieves muscle tension', 'Improves circulation', 'Reduces stress']
  },
  {
    id: '4',
    title: 'Hot Stone Therapy',
    description: 'Heated volcanic stones melt away tension and restore your body\'s energy balance.',
    price: 'RM 200',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: ['Deep muscle relaxation', 'Pain relief', 'Improved flexibility']
  },
  {
    id: '5',
    title: 'Deep Tissue Massage',
    description: 'Intensive massage targeting deep muscle layers to release chronic tension and knots.',
    price: 'RM 190',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: ['Releases chronic tension', 'Improves posture', 'Reduces inflammation']
  },
  {
    id: '6',
    title: 'Couples Massage',
    description: 'Romantic massage experience for two in our private couples suite with premium amenities.',
    price: 'RM 360',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: ['Shared relaxation', 'Romantic bonding', 'Stress relief together']
  }
]

export default function MassagePage() {
  return (
    <main className={styles.massagePage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <nav className={styles.breadcrumb}>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>Massage Therapy</span>
          </nav>
          
          <h1 className={styles.title}>Massage Therapy</h1>
          <p className={styles.subtitle}>
            Experience the healing power of touch with our range of therapeutic massage treatments, 
            from traditional Malaysian techniques to modern wellness therapies.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {massageServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Link href={`/services/${service.id}`} className={styles.overlay}>
                  <MdArrowForward />
                </Link>
              </div>
              
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <div className={styles.serviceBenefits}>
                  {service.benefits.map((benefit, index) => (
                    <span key={index} className={styles.benefit}>{benefit}</span>
                  ))}
                </div>
                
                <div className={styles.serviceFooter}>
                  <div className={styles.serviceDetails}>
                    <div className={styles.detail}>
                      <MdSchedule />
                      <span>{service.duration}</span>
                    </div>
                    <div className={styles.detail}>
                      <MdAttachMoney />
                      <span>{service.price}</span>
                    </div>
                  </div>
                  
                  <div className={styles.serviceActions}>
                    <Link href={`/services/${service.id}`} className={styles.detailsBtn}>
                      View Details
                    </Link>
                    <Link href="/booking" className={styles.bookBtn}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Relax?</h2>
            <p>Book your massage therapy session today and experience the difference our skilled therapists can make.</p>
            <div className={styles.ctaButtons}>
              <Link href="/booking" className={styles.primaryBtn}>
                Book Your Massage
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}