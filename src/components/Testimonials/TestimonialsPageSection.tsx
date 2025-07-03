'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './TestimonialsPageSection.module.scss'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  date: string
  service: string
  comment: string
  avatar?: string
  verified: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Lim",
    location: "Kuala Lumpur",
    rating: 5,
    date: "2025-06-28",
    service: "Royal Malaysian Ritual",
    comment: "Absolutely divine experience! The Royal Malaysian Ritual exceeded all my expectations. The therapists were incredibly skilled and the ambiance was perfect. I felt completely rejuvenated after the treatment. Will definitely be returning soon!",
    avatar: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: 2,
    name: "Ahmad Rahman",
    location: "Petaling Jaya",
    rating: 5,
    date: "2025-06-25",
    service: "Traditional Malaysian Massage",
    comment: "Outstanding service from start to finish. The traditional massage was expertly performed and really helped with my back tension. The facilities are world-class and the staff is incredibly professional.",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: 3,
    name: "Michelle Tan",
    location: "Mont Kiara",
    rating: 5,
    date: "2025-06-22",
    service: "Aromatherapy Wellness Journey",
    comment: "This was exactly what I needed! The aromatherapy journey was so relaxing and therapeutic. The essential oils were heavenly and I loved every minute of it. Serenity Spa truly lives up to its name.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: 4,
    name: "David Wong",
    location: "KLCC",
    rating: 4.5,
    date: "2025-06-20",
    service: "Hot Stone Therapy",
    comment: "Fantastic hot stone therapy session. The therapist was very knowledgeable and made sure I was comfortable throughout. The only minor issue was the waiting area could be a bit quieter, but overall an excellent experience.",
    avatar: "https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Bangsar",
    rating: 5,
    date: "2025-06-18",
    service: "Gold Leaf Facial",
    comment: "Luxurious beyond words! The gold leaf facial was an indulgent treat that left my skin glowing. The attention to detail and premium products used made this worth every penny. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: 6,
    name: "James Lee",
    location: "Subang Jaya",
    rating: 5,
    date: "2025-06-15",
    service: "Deep Tissue Massage",
    comment: "Best deep tissue massage I've ever had! The therapist really knew how to work out all the knots and tension. Perfect pressure and technique. Already booked my next appointment.",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true
  }
]

const renderStars = (rating: number) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<MdStar key={`full-${i}`} className={styles.starFull} />)
  }
  
  if (hasHalfStar) {
    stars.push(<MdStarHalf key="half" className={styles.starHalf} />)
  }
  
  const remainingStars = 5 - Math.ceil(rating)
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<MdStarOutline key={`empty-${i}`} className={styles.starEmpty} />)
  }
  
  return stars
}

export default function TestimonialsPageSection() {
  const [filter, setFilter] = useState<'all' | 5 | 4>('all')
  
  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'all') return true
    if (filter === 5) return testimonial.rating === 5
    if (filter === 4) return testimonial.rating >= 4 && testimonial.rating < 5
    return true
  })
  
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Client Testimonials</h1>
          <p className={styles.subtitle}>
            Discover what our valued clients say about their Serenity Spa experience
          </p>
          
          <div className={styles.statsContainer}>
            <div className={styles.averageRating}>
              <div className={styles.ratingNumber}>{averageRating.toFixed(1)}</div>
              <div className={styles.stars}>
                {renderStars(averageRating)}
              </div>
              <div className={styles.reviewCount}>Based on {testimonials.length} reviews</div>
            </div>
          </div>
        </div>

        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Reviews
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 5 ? styles.active : ''}`}
            onClick={() => setFilter(5)}
          >
            5 Stars
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 4 ? styles.active : ''}`}
            onClick={() => setFilter(4)}
          >
            4+ Stars
          </button>
        </div>

        <div className={styles.reviewsGrid}>
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.customerInfo}>
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className={styles.avatar}
                    />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div className={styles.customerDetails}>
                    <h3 className={styles.customerName}>
                      {testimonial.name}
                      {testimonial.verified && (
                        <span className={styles.verified}>✓</span>
                      )}
                    </h3>
                    <p className={styles.customerLocation}>{testimonial.location}</p>
                  </div>
                </div>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className={styles.serviceInfo}>
                <span className={styles.service}>{testimonial.service}</span>
                <span className={styles.date}>
                  {new Date(testimonial.date).toLocaleDateString('en-MY', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <div className={styles.reviewContent}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.comment}>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Share Your Experience</h2>
            <p className={styles.ctaText}>
              We&apos;d love to hear about your visit to Serenity Spa. Your feedback helps us continue providing exceptional service.
            </p>
            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryBtn}
                onClick={() => window.open('https://www.google.com/search?q=Serenity+Spa+Malaysia+reviews', '_blank')}
              >
                Write a Review
              </button>
              <button 
                className={styles.secondaryBtn}
                onClick={() => window.location.href = '/booking'}
              >
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}