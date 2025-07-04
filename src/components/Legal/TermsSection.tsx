'use client'

import styles from './TermsSection.module.scss'

export default function TermsSection() {
  return (
    <section className={styles.terms}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Please read these terms carefully before using our services
          </p>
          <div className={styles.lastUpdated}>Last updated: July 3, 2025</div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By booking an appointment or using any services at Sharon Spa
              Malaysia, you agree to be bound by these Terms and Conditions. If
              you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Booking and Reservations</h2>
            <div className={styles.subsection}>
              <h3>2.1 Booking Requirements</h3>
              <ul>
                <li>
                  All bookings must be made by individuals 18 years or older
                </li>
                <li>
                  Valid contact information is required for all reservations
                </li>
                <li>Booking confirmation will be sent via email or SMS</li>
                <li>Advance booking is recommended to ensure availability</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>2.2 Payment Terms</h3>
              <ul>
                <li>
                  Full payment is required at the time of service unless
                  otherwise arranged
                </li>
                <li>We accept cash, credit cards, and digital payments</li>
                <li>
                  Gift certificates and promotional codes have specific terms
                  and expiry dates
                </li>
                <li>Prices are subject to change without prior notice</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Cancellation and Rescheduling</h2>
            <div className={styles.subsection}>
              <h3>3.1 Cancellation Policy</h3>
              <ul>
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>
                  Late cancellations (less than 24 hours) may incur a 50% charge
                </li>
                <li>No-shows will be charged the full service amount</li>
                <li>
                  Emergency cancellations will be reviewed on a case-by-case
                  basis
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>3.2 Rescheduling</h3>
              <ul>
                <li>
                  Appointments can be rescheduled up to 4 hours before the
                  scheduled time
                </li>
                <li>Rescheduling is subject to availability</li>
                <li>Multiple reschedules may require rebooking</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Health and Safety</h2>
            <div className={styles.subsection}>
              <h3>4.1 Health Disclosure</h3>
              <ul>
                <li>
                  Clients must disclose any health conditions, allergies, or
                  medications
                </li>
                <li>
                  Pregnant clients must inform us and may have restricted
                  service options
                </li>
                <li>
                  We reserve the right to refuse service if health conditions
                  pose risks
                </li>
                <li>
                  Medical clearance may be required for certain treatments
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>4.2 Safety Protocols</h3>
              <ul>
                <li>All equipment and facilities are regularly sanitized</li>
                <li>Please arrive 15 minutes early for health screening</li>
                <li>Follow all staff instructions during treatments</li>
                <li>Report any discomfort or adverse reactions immediately</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>5. Client Conduct</h2>
            <div className={styles.subsection}>
              <h3>5.1 Expected Behavior</h3>
              <ul>
                <li>
                  Maintain respectful behavior towards staff and other clients
                </li>
                <li>Arrive on time for scheduled appointments</li>
                <li>Follow spa etiquette and dress code requirements</li>
                <li>Keep personal belongings secure</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>5.2 Prohibited Activities</h3>
              <ul>
                <li>Use of mobile phones in treatment areas</li>
                <li>Consumption of outside food and beverages</li>
                <li>Disruptive behavior or inappropriate conduct</li>
                <li>Solicitation or commercial activities</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>6. Liability and Insurance</h2>
            <div className={styles.subsection}>
              <h3>6.1 Limitation of Liability</h3>
              <ul>
                <li>Services are provided at your own risk</li>
                <li>We are not liable for pre-existing health conditions</li>
                <li>Liability is limited to the cost of services received</li>
                <li>We maintain comprehensive insurance coverage</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>6.2 Personal Property</h3>
              <ul>
                <li>
                  Sharon Spa is not responsible for lost or stolen personal
                  items
                </li>
                <li>Secure storage is available for valuables</li>
                <li>Report any missing items immediately to staff</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>7. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please refer to our{' '}
              <a href="/privacy" className={styles.link}>
                Privacy Policy
              </a>{' '}
              for detailed information about how we collect, use, and protect
              your personal information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property</h2>
            <p>
              All content, including but not limited to text, images, logos, and
              treatment descriptions, is the intellectual property of Sharon Spa
              Malaysia and is protected by copyright laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on our website and will take effect immediately
              upon posting. Continued use of our services constitutes acceptance
              of modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please
              contact us:
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Sharon Spa</strong>
              </p>
              <p>📍 Georgetown, Pulau Pinang</p>
              <p>📞 601112914118</p>
              <p>✉️ info@sharonspa.my</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
