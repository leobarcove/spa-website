'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdCheck, MdChevronRight } from 'react-icons/md'
import Calendar from '@/components/ui/Calendar'
import TimeSlotPicker from '@/components/ui/TimeSlotPicker'
import BookingSummary from './BookingSummary'
import Modal from '@/components/ui/Modal'
import styles from './BookingSection.module.scss'

type BookingStep = 'service' | 'datetime' | 'details' | 'summary'

interface Service {
  id: number
  title: string
  description: string
  price: string
  duration: string
  image: string
  alt: string
  category: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Traditional Malaysian Massage',
    description: 'Ancient healing techniques with aromatic oils',
    price: 'RM 180',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Traditional Malaysian massage therapy with aromatic oils',
    category: 'Massage'
  },
  {
    id: 2,
    title: 'Aromatherapy Wellness Journey',
    description: 'Premium essential oils for complete rejuvenation',
    price: 'RM 220',
    duration: '75 minutes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Aromatherapy wellness journey with essential oils',
    category: 'Wellness'
  },
  {
    id: 3,
    title: 'Royal Malaysian Ritual',
    description: 'Signature luxury treatment with gold-infused oils',
    price: 'RM 580',
    duration: '150 minutes',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Royal Malaysian ritual luxury spa treatment',
    category: 'Signature'
  },
  {
    id: 4,
    title: 'Hot Stone Therapy',
    description: 'Heated volcanic stones for deep relaxation',
    price: 'RM 280',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Hot stone therapy with heated volcanic stones',
    category: 'Therapy'
  },
  {
    id: 5,
    title: 'Facial Rejuvenation',
    description: 'Anti-aging treatment with natural ingredients',
    price: 'RM 250',
    duration: '60 minutes',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Facial rejuvenation treatment with natural ingredients',
    category: 'Facial'
  },
  {
    id: 6,
    title: 'Body Scrub & Wrap',
    description: 'Exfoliation and hydration for glowing skin',
    price: 'RM 200',
    duration: '75 minutes',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: 'Body scrub and wrap treatment for glowing skin',
    category: 'Body Treatment'
  }
]

const categories = ['All', 'Massage', 'Wellness', 'Signature', 'Therapy', 'Facial', 'Body Treatment']

export default function BookingSection() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Component mounted
  useEffect(() => {
    // Analytics can be added here if needed
  }, [])

  const steps = [
    { id: 'service', label: 'Service', number: 1 },
    { id: 'datetime', label: 'Date & Time', number: 2 },
    { id: 'details', label: 'Details', number: 3 },
    { id: 'summary', label: 'Confirm', number: 4 }
  ]

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(s => s.category === selectedCategory)

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
  }

  const handleNextStep = () => {
    if (currentStep === 'service' && selectedService) {
      setCurrentStep('datetime')
    } else if (currentStep === 'datetime' && selectedDate && selectedTime) {
      setCurrentStep('details')
    } else if (currentStep === 'details' && customerInfo.name && customerInfo.email && customerInfo.phone) {
      setCurrentStep('summary')
    }
  }

  const handleEditStep = (step: 'service' | 'datetime' | 'details') => {
    setCurrentStep(step)
  }

  const handleConfirmBooking = async () => {
    // Simulate booking confirmation
    console.log('Booking confirmed:', {
      service: selectedService,
      appointment: { date: selectedDate, time: selectedTime },
      customer: customerInfo
    })
    
    // In a real app, you would make an API call here
    // await bookingAPI.createBooking(bookingData)
    
    // Show success modal
    setShowSuccessModal(true)
  }

  const handlePreviousStep = () => {
    if (currentStep === 'datetime') setCurrentStep('service')
    else if (currentStep === 'details') setCurrentStep('datetime')
    else if (currentStep === 'summary') setCurrentStep('details')
  }

  const isStepComplete = (step: BookingStep) => {
    switch (step) {
      case 'service': return selectedService !== null
      case 'datetime': return selectedDate !== '' && selectedTime !== ''
      case 'details': return customerInfo.name !== '' && customerInfo.email !== '' && customerInfo.phone !== ''
      default: return false
    }
  }

  const getCurrentStepIndex = () => {
    return steps.findIndex(s => s.id === currentStep)
  }

  return (
    <section className={styles.booking}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Book Your Appointment</h1>
          <p className={styles.subtitle}>
            Experience luxury and wellness in just a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className={styles.progress}>
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`${styles.progressStep} ${
                index <= getCurrentStepIndex() ? styles.active : ''
              } ${isStepComplete(step.id as BookingStep) ? styles.complete : ''}`}
            >
              <div className={styles.stepNumber}>
                {isStepComplete(step.id as BookingStep) ? <MdCheck /> : step.number}
              </div>
              <span className={styles.stepLabel}>{step.label}</span>
              {index < steps.length - 1 && <div className={styles.stepLine} />}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className={styles.content}>
          {/* Service Selection Step */}
          {currentStep === 'service' && (
            <div className={styles.serviceStep}>
              <h2>Choose Your Service</h2>
              
              {/* Category Filter */}
              <div className={styles.categoryFilter}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Services Grid */}
              <div className={styles.servicesGrid}>
                {filteredServices.map((service) => (
                  <div 
                    key={service.id} 
                    className={`${styles.serviceCard} ${selectedService?.id === service.id ? styles.selected : ''}`}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div className={styles.serviceImage}>
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={300}
                        height={200}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        quality={80}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {selectedService?.id === service.id && (
                        <div className={styles.selectedOverlay}>
                          <MdCheck />
                        </div>
                      )}
                    </div>
                    <div className={styles.serviceInfo}>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className={styles.serviceMeta}>
                        <span className={styles.price}>{service.price}</span>
                        <span className={styles.duration}>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Date & Time Selection Step */}
          {currentStep === 'datetime' && (
            <div className={styles.datetimeStep}>
              <h2>Select Date & Time</h2>
              
              <div className={styles.datetimeGrid}>
                <div className={styles.dateSection}>
                  <h3>Choose Date</h3>
                  <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    minDate={new Date().toISOString().split('T')[0]}
                    maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 3, new Date().getDate()).toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.timeSection}>
                  <TimeSlotPicker
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onTimeSelect={(time) => setSelectedTime(time || '')}
                    serviceDuration={selectedService ? parseInt(selectedService.duration.split(' ')[0]) : 90}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Customer Details Step */}
          {currentStep === 'details' && (
            <div className={styles.detailsStep}>
              <h2>Your Information</h2>
              
              <form className={styles.detailsForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      placeholder="+60 12-345 6789"
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="notes">Special Requests (Optional)</label>
                    <textarea
                      id="notes"
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      placeholder="Any special requests or health conditions we should know about..."
                      rows={3}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Summary Step */}
          {currentStep === 'summary' && selectedService && (
            <BookingSummary
              bookingData={{
                service: {
                  id: selectedService.id,
                  title: selectedService.title,
                  description: selectedService.description,
                  price: selectedService.price,
                  duration: selectedService.duration,
                  image: selectedService.image,
                  category: selectedService.category
                },
                appointment: {
                  date: selectedDate,
                  time: selectedTime
                },
                customer: {
                  name: customerInfo.name,
                  email: customerInfo.email,
                  phone: customerInfo.phone,
                  notes: customerInfo.notes
                }
              }}
              onEdit={handleEditStep}
              onConfirm={handleConfirmBooking}
            />
          )}
        </div>

        {/* Navigation Buttons - Only show for non-summary steps */}
        {currentStep !== 'summary' && (
          <div className={styles.navigation}>
            {currentStep !== 'service' && (
              <button 
                className={styles.backBtn}
                onClick={handlePreviousStep}
              >
                Back
              </button>
            )}
            
            <div className={styles.navRight}>
              <button 
                className={styles.nextBtn}
                onClick={handleNextStep}
                disabled={!isStepComplete(currentStep)}
              >
                Next
                <MdChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Success Modal */}
        <Modal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          size="small"
          closeOnOverlayClick={false}
          closeOnEscape={false}
        >
          <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              margin: '0 auto var(--space-4)', 
              background: 'var(--color-success)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MdCheck style={{ fontSize: '40px', color: 'white' }} />
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-2xl)', 
              marginBottom: 'var(--space-3)',
              color: 'var(--color-primary)'
            }}>
              Booking Confirmed!
            </h2>
            <p style={{ 
              fontSize: 'var(--text-lg)', 
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-6)',
              lineHeight: '1.6'
            }}>
              Thank you for booking with Sharon Spa. We will contact you soon to confirm your appointment details.
            </p>
            <p style={{ 
              fontSize: 'var(--text-base)', 
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-6)'
            }}>
              A confirmation email has been sent to <strong>{customerInfo.email}</strong>
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center' }}>
              <Link
                href="/"
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  background: 'var(--color-neutral-100)',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  display: 'inline-block'
                }}
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  // Reset form
                  setCurrentStep('service')
                  setSelectedService(null)
                  setSelectedDate('')
                  setSelectedTime('')
                  setCustomerInfo({ name: '', email: '', phone: '', notes: '' })
                  setShowSuccessModal(false)
                }}
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  background: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Book Another
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}