import Image from 'next/image'
import Link from 'next/link'
import { MdStar, MdGroups, MdEco, MdSelfImprovement } from 'react-icons/md'
import { GiLeafSwirl } from 'react-icons/gi'
import styles from './AboutSection.module.scss'

const features = [
  {
    id: 1,
    icon: <MdStar />,
    title: 'Award-Winning Excellence',
    description: 'Recognized as Malaysia\'s premier spa destination'
  },
  {
    id: 2,
    icon: <MdGroups />,
    title: 'Expert Therapists',
    description: 'Certified professionals with over 10 years experience'
  },
  {
    id: 3,
    icon: <MdEco />,
    title: 'Natural Products',
    description: 'Organic ingredients sourced from Malaysian rainforests'
  },
  {
    id: 4,
    icon: <MdSelfImprovement />,
    title: 'Holistic Approach',
    description: 'Complete wellness for body, mind, and spirit'
  }
]

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Serenity Spa</h2>
          <p className={styles.subtitle}>
            Where ancient Malaysian healing traditions meet modern luxury
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3 className={styles.sectionTitle}>
              A Sanctuary of Wellness Since 2008
            </h3>
            <p className={styles.description}>
              Nestled in the heart of Kuala Lumpur, Serenity Spa has been a beacon of tranquility 
              for over 15 years. Our journey began with a simple vision: to create a space where 
              the healing traditions of Malaysia could flourish alongside modern wellness practices.
            </p>
            <p className={styles.description}>
              Today, we stand as Malaysia's most awarded luxury spa, having served over 50,000 
              satisfied clients from around the world. Our commitment to excellence, authenticity, 
              and personalized care remains at the heart of everything we do.
            </p>

            <div className={styles.mission}>
              <h3>Our Mission</h3>
              <p>
                To provide transformative wellness experiences that honor Malaysian heritage 
                while embracing innovation, creating lasting positive impacts on our clients' 
                health and happiness.
              </p>
            </div>

            <div className={styles.features}>
              {features.map((feature) => (
                <div key={feature.id} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.aboutImage}>
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Serenity Spa interior showcasing traditional Malaysian design"
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className={styles.imageBadge}>
              <h4>15+ Years</h4>
              <p>of Excellence</p>
            </div>
          </div>
        </div>


        <div className={styles.cta}>
          <h3>Begin Your Wellness Journey</h3>
          <p>Experience the perfect blend of tradition and luxury at Serenity Spa</p>
          <div className={styles.ctaButtons}>
            <Link href="/booking" className={styles.primaryBtn}>
              Book Visit
            </Link>
            <Link href="/virtual-tour" className={styles.secondaryBtn}>
              Virtual Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}