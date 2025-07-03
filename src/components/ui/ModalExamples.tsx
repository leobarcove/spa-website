'use client'

import { useState } from 'react'
import Modal, { ConfirmationModal, ImageModal } from './Modal'
import { useModal, useConfirmationModal } from '@/hooks/useModal'
import styles from './ModalExamples.module.scss'

// This component demonstrates various modal usage patterns
export default function ModalExamples() {
  const basicModal = useModal()
  const imageModal = useModal()
  
  const confirmationModal = useConfirmationModal({
    onConfirm: async () => {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Action confirmed!')
    },
    onCancel: () => {
      console.log('Action cancelled')
    }
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <div className={styles.examples}>
      <h2>Modal Examples</h2>
      
      <div className={styles.buttonGrid}>
        {/* Basic Modal */}
        <button 
          className={styles.exampleButton}
          onClick={basicModal.openModal}
        >
          Open Basic Modal
        </button>

        {/* Confirmation Modal */}
        <button 
          className={styles.exampleButton}
          onClick={confirmationModal.openModal}
        >
          Open Confirmation Modal
        </button>

        {/* Image Modal */}
        <button 
          className={styles.exampleButton}
          onClick={imageModal.openModal}
        >
          Open Image Modal
        </button>
      </div>

      {/* Basic Modal */}
      <Modal
        isOpen={basicModal.isOpen}
        onClose={basicModal.closeModal}
        title="Contact Us"
        size="medium"
      >
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="How can we help you?"
              rows={4}
              required
            />
          </div>

          <div className={styles.formActions}>
            <button 
              type="button" 
              className={styles.cancelButton}
              onClick={basicModal.closeModal}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.submitButton}
              onClick={(e) => {
                e.preventDefault()
                console.log('Form submitted:', formData)
                basicModal.closeModal()
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </Modal>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmationModal.isOpen}
        onClose={confirmationModal.closeModal}
        onConfirm={confirmationModal.confirm}
        title="Confirm Action"
        message="Are you sure you want to proceed? This action cannot be undone."
        confirmText="Yes, Proceed"
        cancelText="Cancel"
        variant="danger"
        loading={confirmationModal.isLoading}
      />

      {/* Image Modal */}
      <ImageModal
        isOpen={imageModal.isOpen}
        onClose={imageModal.closeModal}
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Luxury spa interior with serene ambiance"
        title="Spa Gallery"
      />
    </div>
  )
}

// Booking Confirmation Modal (Spa-specific example)
interface BookingConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  bookingDetails: {
    service: string
    date: string
    time: string
    price: string
  } | null
}

export function BookingConfirmationModal({
  isOpen,
  onClose,
  bookingDetails
}: BookingConfirmationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleConfirmBooking = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Booking confirmed:', bookingDetails)
      onClose()
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!bookingDetails) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Your Booking"
      size="medium"
      loading={isSubmitting}
      closeOnOverlayClick={!isSubmitting}
      closeOnEscape={!isSubmitting}
    >
      <div className={styles.bookingDetails}>
        <div className={styles.bookingHeader}>
          <h3>Booking Summary</h3>
        </div>

        <div className={styles.bookingInfo}>
          <div className={styles.bookingItem}>
            <span className={styles.label}>Service:</span>
            <span className={styles.value}>{bookingDetails.service}</span>
          </div>

          <div className={styles.bookingItem}>
            <span className={styles.label}>Date:</span>
            <span className={styles.value}>{bookingDetails.date}</span>
          </div>

          <div className={styles.bookingItem}>
            <span className={styles.label}>Time:</span>
            <span className={styles.value}>{bookingDetails.time}</span>
          </div>

          <div className={styles.bookingItem}>
            <span className={styles.label}>Price:</span>
            <span className={styles.value}>{bookingDetails.price}</span>
          </div>
        </div>

        <div className={styles.bookingNotes}>
          <p><strong>Please note:</strong></p>
          <ul>
            <li>Please arrive 15 minutes before your appointment</li>
            <li>Cancellation must be made 24 hours in advance</li>
            <li>A confirmation email will be sent to your registered email</li>
          </ul>
        </div>

        <div className={styles.bookingActions}>
          <button 
            className={styles.cancelButton}
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button 
            className={styles.confirmButton}
            onClick={handleConfirmBooking}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Booking'}
          </button>
        </div>
      </div>
    </Modal>
  )
}