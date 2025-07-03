'use client'

import styles from './PrivacySection.module.scss'

export default function PrivacySection() {
  return (
    <section className={styles.privacy}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Your privacy and personal data protection are our top priorities
          </p>
          <div className={styles.lastUpdated}>
            Last updated: July 3, 2025
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Serenity Spa Malaysia (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <div className={styles.subsection}>
              <h3>2.1 Personal Information</h3>
              <ul>
                <li>Name, email address, and phone number</li>
                <li>Date of birth and gender (for age-appropriate services)</li>
                <li>Emergency contact information</li>
                <li>Payment and billing information</li>
                <li>Health information relevant to spa treatments</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>2.2 Automatically Collected Information</h3>
              <ul>
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location data (with your consent)</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>2.3 Health Information</h3>
              <ul>
                <li>Medical conditions and allergies</li>
                <li>Pregnancy status and related considerations</li>
                <li>Current medications that may affect treatments</li>
                <li>Previous spa treatment history and preferences</li>
                <li>Special accommodation requirements</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <div className={styles.subsection}>
              <h3>3.1 Service Provision</h3>
              <ul>
                <li>Processing and managing your bookings</li>
                <li>Providing personalized spa treatments</li>
                <li>Communicating about appointments and services</li>
                <li>Ensuring your safety during treatments</li>
                <li>Processing payments and handling billing</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>3.2 Communication and Marketing</h3>
              <ul>
                <li>Sending appointment confirmations and reminders</li>
                <li>Providing updates about new services and promotions</li>
                <li>Responding to your inquiries and feedback</li>
                <li>Conducting customer satisfaction surveys</li>
                <li>Sending personalized recommendations</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>3.3 Business Operations</h3>
              <ul>
                <li>Improving our services and customer experience</li>
                <li>Analyzing website usage and performance</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Protecting against fraud and security threats</li>
                <li>Maintaining business records and analytics</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Information Sharing and Disclosure</h2>
            <div className={styles.subsection}>
              <h3>4.1 We Do Not Sell Your Information</h3>
              <p>
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>
            
            <div className={styles.subsection}>
              <h3>4.2 Limited Sharing</h3>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In case of business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>5. Data Security</h2>
            <div className={styles.subsection}>
              <h3>5.1 Security Measures</h3>
              <ul>
                <li>SSL encryption for all data transmission</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and monitoring</li>
                <li>Employee training on data protection</li>
                <li>Physical security measures at our facilities</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>5.2 Data Retention</h3>
              <ul>
                <li>Personal information is retained only as long as necessary</li>
                <li>Health records are kept according to legal requirements</li>
                <li>Inactive accounts may be archived or deleted</li>
                <li>You can request deletion of your data at any time</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights and Choices</h2>
            <div className={styles.subsection}>
              <h3>6.1 Access and Control</h3>
              <ul>
                <li>Access your personal information we hold</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>6.2 Cookie Management</h3>
              <ul>
                <li>Control cookie preferences through browser settings</li>
                <li>Opt-out of analytics tracking</li>
                <li>Disable non-essential cookies</li>
                <li>Clear existing cookies from your device</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>7. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be processed and stored in countries other than Malaysia. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Data Protection Officer</strong></p>
              <p><strong>Serenity Spa Malaysia</strong></p>
              <p>📍 Kuala Lumpur, Malaysia</p>
              <p>📞 +60 3-2161 0000</p>
              <p>✉️ privacy@serenityspa.my</p>
              <p>✉️ info@serenityspa.my</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>11. Legal Basis for Processing (GDPR)</h2>
            <p>
              For users in the European Union, we process your personal data based on:
            </p>
            <ul>
              <li><strong>Contract:</strong> To provide spa services you&apos;ve booked</li>
              <li><strong>Consent:</strong> For marketing communications and optional features</li>
              <li><strong>Legitimate Interest:</strong> For business operations and security</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}