'use client'

import Link from 'next/link'
import Image from 'next/image'
import { GiLeafSwirl, GiBamboo } from 'react-icons/gi'
import { BiSpa } from 'react-icons/bi'
import { MdStar } from 'react-icons/md'
import AmbientAudio from '@/components/Media/AmbientAudio'
import { mediaAssets } from '@/lib/media'
import styles from './Hero.module.scss'

const features = [
  {
    id: 1,
    icon: <GiLeafSwirl />,
    text: 'Malaysian Heritage'
  },
  {
    id: 2,
    icon: <BiSpa />,
    text: 'Expert Therapists'
  }
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <div className={styles.backgroundContainer}>
        <video 
          className={styles.heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          poster={mediaAssets.images.heroPoster}
          preload="auto"
          aria-label="Background video showing spa ambiance"
        >
          <source src="/videos/spa-hero-ambient.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.backgroundOverlay}></div>
      </div>

      {/* Ambient Audio Control */}
      <AmbientAudio
        audioSrc={mediaAssets.audio.spaAmbient}
        volume={0.3}
        autoPlay={false}
        loop={true}
        title="Relaxing Spa Sounds"
        showControls={true}
      />

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <MdStar />
            Award-Winning Spa
          </div>
          
          <h1 className={styles.mainTitle}>
            Discover Pure <span>Tranquility</span> in Malaysia's Premier Spa
          </h1>
          
          <p className={styles.subtitle}>
            Experience authentic Malaysian healing traditions combined with modern luxury. 
            Your journey to complete wellness begins here.
          </p>
          
          <div className={styles.features}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <Link href="/booking" className={styles.primaryBtn}>
              Book Experience
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              View Services
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50k+</span>
              <span className={styles.statLabel}>Clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.9</span>
              <span className={styles.statLabel}>Rating</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.heroImage}>
            <Image 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury spa treatment room with serene ambiance"
              width={1000}
              height={600}
              priority
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className={styles.floatingCard}>
            <h3>Limited Offer</h3>
            <p>Royal Spa Package</p>
            <div className={styles.offer}>
              <span className={styles.originalPrice}>RM 680</span>
              <span className={styles.discountPrice}>RM 480</span>
            </div>
            <span className={styles.savings}>Save 30%</span>
          </div>
        </div>
      </div>
    </section>
  )
}