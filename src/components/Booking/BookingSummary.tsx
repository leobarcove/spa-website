'use client'

import { useState } from 'react'
import {
  MdCheck,
  MdEdit,
  MdLocationOn,
  MdSchedule,
  MdPerson,
  MdSpa,
} from 'react-icons/md'
import { BiLoader } from 'react-icons/bi'
import { ConfirmationModal } from '@/components/ui/Modal'
import { useModal } from '@/hooks/useModal'
import styles from './BookingSummary.module.scss'

interface BookingData {
  service: {
    id: number
    title: string
    description: string
    price: string
    duration: string
    image: string
    category: string
  }
  appointment: {
    date: string
    time: string
  }
  customer: {
    name: string
    email: string
    phone: string
    notes?: string
  }
}

interface BookingSummaryProps {
  bookingData: BookingData
  onEdit: (step: 'service' | 'datetime' | 'details') => void
  onConfirm: () => Promise<void>
  isSubmitting?: boolean
}

export default function BookingSummary({
  bookingData,
  onEdit,
  onConfirm,
  isSubmitting = false,
}: BookingSummaryProps) {
  const [isConfirming, setIsConfirming] = useState(false)
  const confirmationModal = useModal()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-MY', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
  }

  const handleConfirmBooking = async () => {
    setIsConfirming(true)
    try {
      await onConfirm()
      confirmationModal.closeModal()
    } catch (error) {
      console.error('Booking confirmation failed:', error)
    } finally {
      setIsConfirming(false)
    }
  }

  const getTotalPrice = () => {
    // Extract numeric value from price string (e.g., "RM 180" -> 180)
    const basePrice = parseInt(bookingData.service.price.replace(/[^\d]/g, ''))
    // For now, just return base price. In real app, could add taxes, fees, etc.
    return `RM ${basePrice}`
  }

  const getEstimatedEndTime = () => {
    const [startHours, startMinutes] = bookingData.appointment.time
      .split(':')
      .map(Number)
    const durationMinutes = parseInt(bookingData.service.duration.split(' ')[0])

    const totalMinutes = startHours * 60 + startMinutes + durationMinutes
    const endHours = Math.floor(totalMinutes / 60)
    const endMins = totalMinutes % 60

    return formatTime(
      `${endHours.toString().padStart(2, '0')}:${endMins
        .toString()
        .padStart(2, '0')}`
    )
  }

  return (
    <div className={styles.bookingSummary}>
      <div className={styles.header}>
        <h2 className={styles.title}>Review Your Booking</h2>
        <p className={styles.subtitle}>
          Please review all details before confirming your appointment
        </p>
      </div>

      <div className={styles.summaryGrid}>
        {/* Service Details Card */}
        <div className={styles.summaryCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <MdSpa />
            </div>
            <h3>Service Details</h3>
            <button
              className={styles.editBtn}
              onClick={() => onEdit('service')}
              aria-label="Edit service selection"
            >
              <MdEdit />
            </button>
          </div>

          <div className={styles.serviceInfo}>
            <img
              src={bookingData.service.image}
              alt={bookingData.service.title}
              className={styles.serviceImage}
            />
            <div className={styles.serviceDetails}>
              <h4 className={styles.serviceName}>
                {bookingData.service.title}
              </h4>
              <p className={styles.serviceDescription}>
                {bookingData.service.description}
              </p>
              <div className={styles.serviceMeta}>
                <span className={styles.duration}>
                  <MdSchedule />
                  {bookingData.service.duration}
                </span>
                <span className={styles.category}>
                  {bookingData.service.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Details Card */}
        <div className={styles.summaryCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <MdSchedule />
            </div>
            <h3>Appointment</h3>
            <button
              className={styles.editBtn}
              onClick={() => onEdit('datetime')}
              aria-label="Edit date and time"
            >
              <MdEdit />
            </button>
          </div>

          <div className={styles.appointmentInfo}>
            <div className={styles.appointmentItem}>
              <strong className={styles.date}>
                {formatDate(bookingData.appointment.date)}
              </strong>
            </div>

            <div className={styles.timeSlot}>
              <div className={styles.timeRange}>
                <span className={styles.startTime}>
                  {formatTime(bookingData.appointment.time)}
                </span>
                <span className={styles.timeSeparator}>—</span>
                <span className={styles.endTime}>{getEstimatedEndTime()}</span>
              </div>
              <span className={styles.timezone}>Malaysia Time (GMT+8)</span>
            </div>

            <div className={styles.locationInfo}>
              <MdLocationOn />
              <div>
                <strong>Sharon Spa</strong>
                <p>Georgetown, Pulau Pinang</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Details Card */}
        <div className={styles.summaryCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <MdPerson />
            </div>
            <h3>Contact Information</h3>
            <button
              className={styles.editBtn}
              onClick={() => onEdit('details')}
              aria-label="Edit customer details"
            >
              <MdEdit />
            </button>
          </div>

          <div className={styles.customerInfo}>
            <div className={styles.customerItem}>
              <span className={styles.label}>Name:</span>
              <span className={styles.value}>{bookingData.customer.name}</span>
            </div>

            <div className={styles.customerItem}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{bookingData.customer.email}</span>
            </div>

            <div className={styles.customerItem}>
              <span className={styles.label}>Phone:</span>
              <span className={styles.value}>{bookingData.customer.phone}</span>
            </div>

            {bookingData.customer.notes && (
              <div className={styles.customerNotes}>
                <span className={styles.label}>Special Requests:</span>
                <p className={styles.notesText}>{bookingData.customer.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className={styles.pricingSummary}>
        <div className={styles.pricingHeader}>
          <h3>Pricing Summary</h3>
        </div>

        <div className={styles.pricingDetails}>
          <div className={styles.pricingItem}>
            <span>{bookingData.service.title}</span>
            <span>{bookingData.service.price}</span>
          </div>

          <div className={styles.pricingItem}>
            <span>Service Charge</span>
            <span>Included</span>
          </div>

          <div className={styles.pricingDivider}></div>

          <div className={styles.pricingTotal}>
            <span>Total Amount</span>&nbsp;
            <span className={styles.totalPrice}>{getTotalPrice()}</span>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className={styles.importantNotes}>
        <h4>Important Information</h4>
        <ul>
          <li>Please arrive 15 minutes before your appointment time</li>
          <li>Cancellation must be made at least 24 hours in advance</li>
          <li>
            A confirmation email will be sent to your registered email address
          </li>
          <li>
            For any changes, please contact us at least 4 hours before your
            appointment
          </li>
        </ul>
      </div>

      {/* Terms Agreement */}
      <div className={styles.termsAgreement}>
        <label className={styles.checkbox}>
          <input type="checkbox" required />
          <span className={styles.checkmark}></span>I agree to the{' '}
          <a href="/terms" target="_blank">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="/privacy" target="_blank">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Confirmation Button */}
      <div className={styles.confirmationActions}>
        <button
          className={styles.confirmButton}
          onClick={confirmationModal.openModal}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <BiLoader className={styles.spinner} />
              Processing...
            </>
          ) : (
            <>
              <MdCheck />
              Confirm Booking
            </>
          )}
        </button>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmationModal.isOpen}
        onClose={confirmationModal.closeModal}
        onConfirm={handleConfirmBooking}
        title="Confirm Your Booking"
        message={`Are you sure you want to book ${
          bookingData.service.title
        } on ${formatDate(bookingData.appointment.date)} at ${formatTime(
          bookingData.appointment.time
        )}?`}
        confirmText="Yes, Book Now"
        cancelText="Review Again"
        variant="default"
        loading={isConfirming}
      />
    </div>
  )
}
