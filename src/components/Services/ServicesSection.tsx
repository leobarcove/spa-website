import Link from 'next/link'
import Image from 'next/image'
import { GiLeafSwirl, GiLotusFlower, GiBodyBalance } from 'react-icons/gi'
import { BiSpa } from 'react-icons/bi'
import { MdSpa, MdFaceRetouchingNatural } from 'react-icons/md'
import styles from './ServicesSection.module.scss'

interface Service {
  id: number
  title: string
  description: string
  price: string
  duration: string
  image: string
  alt: string
  icon: React.ReactNode
  popular?: boolean
}

const services: Service[] = [
  {
    id: 1,
    title: 'Traditional Malaysian Massage',
    description: 'Ancient healing techniques with gentle pressure and aromatic oils for deep relaxation.',
    price: 'RM 180',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional Malaysian massage therapy with aromatic oils in serene spa setting',
    icon: <GiLeafSwirl />,
    popular: true
  },
  {
    id: 2,
    title: 'Aromatherapy Wellness Journey',
    description: 'Premium essential oils selected for complete sensory rejuvenation and wellness.',
    price: 'RM 220',
    duration: '75 minutes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Aromatherapy wellness journey with premium essential oils and relaxing spa environment',
    icon: <GiLotusFlower />
  },
  {
    id: 3,
    title: 'Royal Malaysian Ritual',
    description: 'Signature herbs, royal milk bath, and gold-infused massage for ultimate luxury.',
    price: 'RM 580',
    duration: '150 minutes',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Royal Malaysian ritual luxury spa treatment with gold-infused oils and traditional herbs',
    icon: <MdSpa />
  },
  {
    id: 4,
    title: 'Hot Stone Therapy',
    description: 'Heated volcanic stones melt away tension and restore your body\'s energy balance.',
    price: 'RM 280',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hot stone therapy treatment with heated volcanic stones for deep muscle relaxation',
    icon: <GiBodyBalance />
  }
]

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Signature Services</h2>
          <p className={styles.subtitle}>
            Discover treatments designed to restore balance and harmony to your body and mind
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={service.popular}
                  quality={85}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
              </div>

              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                
                <div className={styles.serviceFooter}>
                  <div className={styles.serviceMeta}>
                    <span className={styles.price}>{service.price}</span>
                    <span className={styles.duration}>{service.duration}</span>
                  </div>
                  
                  <Link 
                    href={`/services/${service.id}`} 
                    className={styles.bookBtn}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3>Experience True Wellness</h3>
          <p>Book your appointment today and begin your journey to tranquility</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className={styles.primaryBtn}>
              Book Appointment
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}