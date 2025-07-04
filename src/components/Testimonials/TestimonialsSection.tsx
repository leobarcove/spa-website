import Image from 'next/image'
import { MdStar, MdStarHalf, MdVerified } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './TestimonialsSection.module.scss'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    location: 'Georgetown, Penang',
    rating: 5,
    review:
      'Absolutely divine experience! The traditional Malaysian massage was incredibly relaxing and the therapists are truly skilled. I feel completely rejuvenated.',
    service: 'Traditional Massage',
    image: '/images/avatars/asian-woman-2.jpg',
    verified: true,
  },
  {
    id: 2,
    name: 'Lisa Wong',
    location: 'Gurney, Penang',
    rating: 5,
    review:
      'The Royal Malaysian Ritual is a must-try! From the herbal preparation to the gold-infused massage, every moment was pure bliss. Worth every ringgit.',
    service: 'Royal Ritual',
    image: '/images/avatars/asian-woman-1.jpg',
    verified: true,
  },
  {
    id: 3,
    name: 'James Lee',
    location: 'Tanjung Bungah, Penang',
    rating: 5,
    review:
      'Been visiting for 3 years now and the quality never disappoints. The aromatherapy session is my monthly ritual for stress relief. Highly recommend!',
    service: 'Aromatherapy',
    image: '/images/avatars/james-lee-avatar.jpg',
    verified: true,
  },
]

const overallStats = {
  averageRating: 4.9,
  totalReviews: 2847,
  recommendationRate: 98,
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<MdStar key={i} className={styles.reviewStar} />)
    }
  }
  return <div className={styles.reviewRating}>{stars}</div>
}

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Client Experiences</h2>
          <p className={styles.subtitle}>
            Hear from our valued clients about their transformative spa journeys
          </p>

          <div className={styles.overallStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {overallStats.averageRating}
              </div>
              <StarRating rating={overallStats.averageRating} />
              <div className={styles.statLabel}>Average Rating</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {overallStats.totalReviews.toLocaleString()}
              </div>
              <div className={styles.statLabel}>Total Reviews</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {overallStats.recommendationRate}%
              </div>
              <div className={styles.statLabel}>Recommend Us</div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>

              <div className={styles.reviewContent}>
                <StarRating rating={testimonial.rating} />
                <p className={styles.reviewText}>
                  &quot;{testimonial.review}&quot;
                </p>
                <div className={styles.serviceTag}>{testimonial.service}</div>
              </div>

              <div className={styles.clientInfo}>
                <div className={styles.clientImage}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className={styles.clientDetails}>
                  <div className={styles.clientName}>
                    {testimonial.name}
                    {testimonial.verified && (
                      <MdVerified className={styles.verifiedIcon} />
                    )}
                  </div>
                  <div className={styles.clientLocation}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3>Share Your Experience</h3>
          <p>We'd love to hear about your visit to Sharon Spa</p>
          <div className={styles.ctaButtons}>
            <a href="/testimonials" className={styles.reviewBtn}>
              View All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
