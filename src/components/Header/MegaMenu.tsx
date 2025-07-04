'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  GiLeafSwirl,
  GiLotusFlower,
  GiBodyBalance,
  GiBamboo,
} from 'react-icons/gi'
import { BiSpa, BiTime } from 'react-icons/bi'
import { MdSpa, MdFaceRetouchingNatural, MdArrowForward } from 'react-icons/md'
import styles from './MegaMenu.module.scss'

interface ServiceCategory {
  id: string
  name: string
  description: string
  href: string
  icon: React.ReactNode
  services: ServiceItem[]
}

interface ServiceItem {
  id: number
  name: string
  price: string
  duration: string
  href: string
  popular?: boolean
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'massage',
    name: 'Massage Therapies',
    description:
      'Traditional and modern massage techniques for deep relaxation',
    href: '/services/massage',
    icon: <GiLeafSwirl />,
    services: [
      {
        id: 1,
        name: 'Traditional Malaysian Massage',
        price: 'RM 180',
        duration: '90 min',
        href: '/services/1',
        popular: true,
      },
      {
        id: 4,
        name: 'Hot Stone Therapy',
        price: 'RM 280',
        duration: '90 min',
        href: '/services/4',
      },
      {
        id: 5,
        name: 'Deep Tissue Massage',
        price: 'RM 220',
        duration: '75 min',
        href: '/services/5',
      },
      {
        id: 6,
        name: 'Couples Massage',
        price: 'RM 380',
        duration: '90 min',
        href: '/services/6',
      },
    ],
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy',
    description: 'Essential oil treatments for mind and body wellness',
    href: '/services/aromatherapy',
    icon: <GiLotusFlower />,
    services: [
      {
        id: 2,
        name: 'Aromatherapy Wellness Journey',
        price: 'RM 220',
        duration: '75 min',
        href: '/services/2',
      },
      {
        id: 7,
        name: 'Essential Oil Massage',
        price: 'RM 200',
        duration: '60 min',
        href: '/services/7',
      },
      {
        id: 8,
        name: 'Aromatherapy Facial',
        price: 'RM 180',
        duration: '60 min',
        href: '/services/8',
      },
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury Rituals',
    description: 'Premium treatments for the ultimate spa experience',
    href: '/services/luxury',
    icon: <MdSpa />,
    services: [
      {
        id: 3,
        name: 'Royal Malaysian Ritual',
        price: 'RM 580',
        duration: '150 min',
        href: '/services/3',
        popular: true,
      },
      {
        id: 9,
        name: 'Gold Leaf Facial',
        price: 'RM 380',
        duration: '90 min',
        href: '/services/9',
      },
      {
        id: 10,
        name: 'Platinum Package',
        price: 'RM 800',
        duration: '180 min',
        href: '/services/10',
      },
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness & Beauty',
    description: 'Holistic treatments for beauty and wellbeing',
    href: '/services/wellness',
    icon: <MdFaceRetouchingNatural />,
    services: [
      {
        id: 11,
        name: 'Facial Rejuvenation',
        price: 'RM 160',
        duration: '60 min',
        href: '/services/11',
      },
      {
        id: 12,
        name: 'Body Scrub & Wrap',
        price: 'RM 180',
        duration: '75 min',
        href: '/services/12',
      },
      {
        id: 13,
        name: 'Detox Treatment',
        price: 'RM 220',
        duration: '90 min',
        href: '/services/13',
      },
    ],
  },
]

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('massage')

  if (!isOpen) return null

  return (
    <div className={styles.megaMenu} onMouseLeave={onClose}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Categories Navigation */}
          <div className={styles.categories}>
            <h3 className={styles.categoriesTitle}>Service Categories</h3>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryItem} ${
                  activeCategory === category.id ? styles.active : ''
                }`}
                onMouseEnter={() => setActiveCategory(category.id)}
                onClick={onClose}
              >
                <Link href={category.href} className={styles.categoryLink}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <div className={styles.categoryInfo}>
                    <span className={styles.categoryName}>{category.name}</span>
                    <span className={styles.categoryDesc}>
                      {category.description}
                    </span>
                  </div>
                </Link>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className={styles.services}>
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`${styles.servicesList} ${
                  activeCategory === category.id ? styles.active : ''
                }`}
              >
                <div className={styles.servicesHeader}>
                  <h4 className={styles.servicesTitle}>{category.name}</h4>
                  <Link href={category.href} className={styles.viewAllLink}>
                    View All <MdArrowForward />
                  </Link>
                </div>

                <div className={styles.servicesGrid}>
                  {category.services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className={`${styles.serviceItem} ${
                        service.popular ? styles.popular : ''
                      }`}
                      onClick={onClose}
                    >
                      <div className={styles.serviceContent}>
                        <div className={styles.serviceHeader}>
                          <h5 className={styles.serviceName}>{service.name}</h5>
                          {service.popular && (
                            <span className={styles.popularBadge}>Popular</span>
                          )}
                        </div>
                        <div className={styles.serviceMeta}>
                          <span className={styles.servicePrice}>
                            {service.price}
                          </span>
                          <span className={styles.serviceDuration}>
                            <BiTime /> {service.duration}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Service */}
          <div className={styles.featured}>
            <div className={styles.featuredImage}>
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Royal Malaysian Ritual - Premium luxury spa treatment"
                width={300}
                height={200}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>Featured</span>
              <h4 className={styles.featuredTitle}>Royal Malaysian Ritual</h4>
              <p className={styles.featuredDesc}>
                Our signature treatment combining traditional Malaysian healing
                with luxury amenities.
              </p>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredPrice}>RM 580</span>
                <span className={styles.featuredDuration}>150 minutes</span>
              </div>
              <Link
                href="/services/3"
                className={styles.featuredButton}
                onClick={onClose}
              >
                Book Experience
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <Link
            href="/booking"
            className={styles.quickActionBtn}
            onClick={onClose}
          >
            <BiSpa />
            Book Appointment
          </Link>
          <Link
            href="/services"
            className={styles.quickActionBtn}
            onClick={onClose}
          >
            <GiBamboo />
            All Services
          </Link>
          <Link
            href="/contact"
            className={styles.quickActionBtn}
            onClick={onClose}
          >
            <MdFaceRetouchingNatural />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
