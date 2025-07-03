import Link from 'next/link'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import styles from './Footer.module.scss'

const businessHours = {
  weekdays: 'Monday - Friday: 10:00 AM - 9:00 PM',
  saturday: 'Saturday: 9:00 AM - 9:00 PM', 
  sunday: 'Sunday: 9:00 AM - 8:00 PM'
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Serenity Spa</h3>
            <p className={styles.tagline}>Malaysia's Premier Wellness Sanctuary</p>
            <p className={styles.description}>
              Experience the perfect blend of traditional Malaysian healing 
              and modern luxury spa treatments.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/testimonials">Reviews</Link></li>
              <li><Link href="/booking">Book Online</Link></li>
              <li><Link href="/gift-cards">Gift Cards</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Business Hours</h4>
            <ul className={styles.hours}>
              <li>{businessHours.weekdays}</li>
              <li>{businessHours.saturday}</li>
              <li>{businessHours.sunday}</li>
              <li className={styles.highlight}>Public Holidays: 10:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contact Information</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MdLocationOn />
                <div>
                  <p>123 Spa Street, Bukit Bintang</p>
                  <p>Kuala Lumpur 50200, Malaysia</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MdPhone />
                <p>+60 3-2161 0000</p>
              </div>
              <div className={styles.contactItem}>
                <MdEmail />
                <p>info@serenityspa.my</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 Serenity Spa Malaysia. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}