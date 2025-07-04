'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdSchedule,
  MdDirections,
  MdCheck,
  MdPayment,
  MdAccountBalance,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { BiTime, BiCar, BiTrain } from 'react-icons/bi'
import ClickToCall from '@/components/ui/ClickToCall'
import Modal from '@/components/ui/Modal'
import Image from 'next/image'
import styles from './ContactSection.module.scss'

const businessHours = [
  { day: 'Monday - Friday', hours: '10:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 8:00 PM' },
  { day: 'Public Holidays', hours: '10:00 AM - 6:00 PM' },
]

const contactInfo = {
  address: '181 Tingkat 1, Lot B, Lebuh Melaka',
  city: '10400 Georgetown, Pulau Pinang',
  phone: '601112914118',
  whatsapp: '601112914118',
  email: 'info@sharonsparelax.my',
}

const paymentInfo = {
  bankName: 'OCBC Bank',
  accountName: 'SHARON SPA RELAX ENTERPRISE',
  accountNumber: '7301347929',
}

const transportOptions = [
  {
    icon: <BiTrain />,
    title: 'CAT Bus',
    description: 'Free bus service nearby',
  },
  {
    icon: <BiCar />,
    title: 'Parking',
    description: 'Street parking available',
  },
  {
    icon: <MdDirections />,
    title: 'Landmarks',
    description: 'Near Fort Cornwallis',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)

    // Show success modal
    setShowSuccessModal(true)
  }

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Visit Our Sanctuary</h2>
          <p className={styles.subtitle}>
            Experience tranquility in the heart of Georgetown, Penang. Find your
            perfect appointment time in our heritage location.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>

            <div className={styles.infoGroup}>
              <div className={styles.infoItem}>
                <MdLocationOn className={styles.infoIcon} />
                <div>
                  <h4>Address</h4>
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.city}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MdPhone className={styles.infoIcon} />
                <div>
                  <h4>Phone</h4>
                  <p>
                    <ClickToCall
                      phoneNumber={contactInfo.phone}
                      variant="link"
                      showIcon={false}
                    />
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MdEmail className={styles.infoIcon} />
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className={styles.paymentSection}>
              <h3>Payment Information</h3>
              <div className={styles.paymentGrid}>
                <div className={styles.bankDetails}>
                  <div className={styles.infoItem}>
                    <MdAccountBalance className={styles.infoIcon} />
                    <div>
                      <h4>Bank Transfer</h4>
                      <p>
                        <strong>{paymentInfo.bankName}</strong>
                      </p>
                      <p>{paymentInfo.accountName}</p>
                      <p>Account: {paymentInfo.accountNumber}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.qrCode}>
                  <div className={styles.infoItem}>
                    <MdPayment className={styles.infoIcon} />
                    <div>
                      <h4>QR Payment</h4>
                      <div className={styles.qrCodeImage}>
                        <Image
                          src="/images/tngo_qrcode.jpg"
                          alt="DuitNow QR Code for Sharon Spa Enterprise"
                          width={200}
                          height={200}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '200px',
                            borderRadius: '8px',
                          }}
                        />
                      </div>
                      <p>
                        <small>Scan to pay via DuitNow</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className={styles.bookingForm}>
            <h3>Book Your Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+60 12-345 6789"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select service</option>
                    <option value="traditional-massage">
                      Traditional Massage
                    </option>
                    <option value="aromatherapy">Aromatherapy</option>
                    <option value="hot-stone">Hot Stone</option>
                    <option value="royal-ritual">Royal Ritual</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="time">Time</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                  >
                    <option value="">Select time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any special requests or health conditions..."
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Book Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <MdSchedule />
            </div>
            <h4 className={styles.infoCardTitle}>Business Hours</h4>
            <div className={styles.infoCardText}>
              <p>Mon-Fri: 10AM - 9PM</p>
              <p>Sat: 9AM - 9PM</p>
              <p>Sun: 9AM - 8PM</p>
            </div>
          </div>

          {transportOptions.map((option, index) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.infoCardIcon}>{option.icon}</div>
              <h4 className={styles.infoCardTitle}>{option.title}</h4>
              <p className={styles.infoCardText}>{option.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <h3>Need Immediate Assistance?</h3>
          <p>Our team is ready to help you plan your perfect spa experience</p>
          <div className={styles.quickActionButtons}>
            <Link href="/booking" className={styles.primaryBtn}>
              Book Online
            </Link>
            <ClickToCall phoneNumber={contactInfo.phone} />
          </div>
        </div>

        {/* Success Modal */}
        <Modal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          size="small"
          closeOnOverlayClick={false}
          closeOnEscape={false}
        >
          <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto var(--space-4)',
                background: 'var(--color-success)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MdCheck style={{ fontSize: '40px', color: 'white' }} />
            </div>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                marginBottom: 'var(--space-3)',
                color: 'var(--color-primary)',
              }}
            >
              Request Received!
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-6)',
                lineHeight: '1.6',
              }}
            >
              Thank you for your appointment request. We will contact you soon
              to confirm your booking details.
            </p>
            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-6)',
              }}
            >
              You will receive a confirmation at{' '}
              <strong>{formData.email}</strong>
            </p>
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  // Reset form
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    date: '',
                    time: '',
                    message: '',
                  })
                }}
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  background: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                OK
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}
