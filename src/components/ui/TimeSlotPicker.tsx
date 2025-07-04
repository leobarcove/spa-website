'use client'

import { useState, useEffect } from 'react'
import { BiTime, BiCheck } from 'react-icons/bi'
import { MdInfo } from 'react-icons/md'
import styles from './TimeSlotPicker.module.scss'

interface TimeSlot {
  time: string
  available: boolean
  bookedSlots?: number
  maxSlots?: number
}

interface TimeSlotPickerProps {
  selectedDate: string | null
  selectedTime: string | null
  onTimeSelect: (time: string | null) => void
  serviceDuration?: number // in minutes
  className?: string
}

export default function TimeSlotPicker({
  selectedDate,
  selectedTime,
  onTimeSelect,
  serviceDuration = 90,
  className = ''
}: TimeSlotPickerProps) {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState<'morning' | 'afternoon' | 'evening'>('morning')

  // Generate time slots based on spa operating hours
  useEffect(() => {
    if (!selectedDate) {
      setTimeSlots([])
      return
    }

    const generateTimeSlots = (): TimeSlot[] => {
      const slots: TimeSlot[] = []
      const today = new Date()
      const selectedDateObj = new Date(selectedDate)
      const isToday = selectedDateObj.toDateString() === today.toDateString()
      const currentHour = today.getHours()
      const currentMinutes = today.getMinutes()
      
      // Spa operating hours: 9:00 AM - 9:00 PM
      const startHour = 9
      const endHour = 21
      const slotDuration = 30 // 30-minute slots
      
      for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += slotDuration) {
          const timeString = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
          
          // Check if slot is in the past (for today only)
          let isPastSlot = false
          if (isToday) {
            const slotHour = hour
            const slotMinutes = minutes
            isPastSlot = (slotHour < currentHour) || (slotHour === currentHour && slotMinutes <= currentMinutes)
          }
          
          // Simulate availability (in real app, this would come from API)
          const availability = getSlotAvailability(selectedDate, timeString, isPastSlot)
          
          slots.push({
            time: timeString,
            available: availability.available,
            bookedSlots: availability.bookedSlots,
            maxSlots: availability.maxSlots
          })
        }
      }
      
      return slots
    }

    setTimeSlots(generateTimeSlots())
  }, [selectedDate, serviceDuration])

  // Simulate slot availability (in real app, this would be an API call)
  const getSlotAvailability = (date: string, time: string, isPastSlot: boolean) => {
    if (isPastSlot) {
      return { available: false, bookedSlots: 2, maxSlots: 2 }
    }
    
    // Simulate different availability based on time and date
    const random = Math.random()
    const maxSlots = 2 // Most spas have 2-3 therapists per time slot
    
    // Peak hours (11 AM - 2 PM and 6 PM - 8 PM) are busier
    const hour = parseInt(time.split(':')[0])
    const isPeakHour = (hour >= 11 && hour <= 14) || (hour >= 18 && hour <= 20)
    
    let bookedSlots = 0
    if (isPeakHour) {
      bookedSlots = random < 0.7 ? Math.floor(random * maxSlots) : maxSlots
    } else {
      bookedSlots = random < 0.4 ? Math.floor(random * maxSlots) : 0
    }
    
    return {
      available: bookedSlots < maxSlots,
      bookedSlots,
      maxSlots
    }
  }

  const formatTimeDisplay = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`
  }

  const getTimePeriod = (time: string): 'morning' | 'afternoon' | 'evening' => {
    const hour = parseInt(time.split(':')[0])
    if (hour < 12) return 'morning'
    if (hour < 17) return 'afternoon'
    return 'evening'
  }

  const filteredSlots = timeSlots.filter(slot => getTimePeriod(slot.time) === selectedPeriod)

  const getSlotStatusClass = (slot: TimeSlot) => {
    if (!slot.available) return styles.unavailable
    if (slot.bookedSlots === (slot.maxSlots || 2) - 1) return styles.almostFull
    return ''
  }

  const getAvailabilityText = (slot: TimeSlot) => {
    if (!slot.available) return 'Fully booked'
    const remaining = (slot.maxSlots || 2) - (slot.bookedSlots || 0)
    if (remaining === 1) return 'Last spot'
    return `${remaining} spots available`
  }

  if (!selectedDate) {
    return (
      <div className={`${styles.timeSlotPicker} ${className}`}>
        <div className={styles.emptyState}>
          <BiTime className={styles.emptyIcon} />
          <p>Please select a date first</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.timeSlotPicker} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Available Time Slots</h3>
        <div className={styles.info}>
          <MdInfo />
          <span>Service duration: {serviceDuration} minutes</span>
        </div>
      </div>

      {/* Period Filter */}
      <div className={styles.periodFilter}>
        {[
          { id: 'morning' as const, label: 'Morning', time: '9:00 AM - 12:00 PM' },
          { id: 'afternoon' as const, label: 'Afternoon', time: '12:00 PM - 5:00 PM' },
          { id: 'evening' as const, label: 'Evening', time: '5:00 PM - 9:00 PM' }
        ].map((period) => (
          <button
            key={period.id}
            className={`${styles.periodBtn} ${selectedPeriod === period.id ? styles.active : ''}`}
            onClick={() => setSelectedPeriod(period.id)}
          >
            <span className={styles.periodLabel}>{period.label}</span>
            <span className={styles.periodTime}>{period.time}</span>
          </button>
        ))}
      </div>

      {/* Time Slots Grid */}
      <div className={styles.slotsContainer}>
        {filteredSlots.length > 0 ? (
          <div className={styles.slotsGrid}>
            {filteredSlots.map((slot) => (
              <button
                key={slot.time}
                className={`
                  ${styles.timeSlot} 
                  ${selectedTime === slot.time ? styles.selected : ''} 
                  ${getSlotStatusClass(slot)}
                `}
                onClick={() => slot.available ? onTimeSelect(slot.time) : null}
                disabled={!slot.available}
                title={getAvailabilityText(slot)}
              >
                {selectedTime === slot.time && slot.available && (
                  <BiCheck className={styles.selectedIcon} />
                )}
                <div className={styles.slotTime}>
                  {formatTimeDisplay(slot.time)}
                </div>
                <div className={styles.slotStatus}>
                  {slot.available ? (
                    <span className={styles.availability}>
                      {getAvailabilityText(slot)}
                    </span>
                  ) : (
                    <span className={styles.unavailableText}>Fully booked</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className={styles.noSlots}>
            <p>No available slots for {selectedPeriod}</p>
            <span>Try selecting a different time period</span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.available}`}></div>
          <span>Available</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.almostFull}`}></div>
          <span>Last spot</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.unavailable}`}></div>
          <span>Fully booked</span>
        </div>
      </div>
    </div>
  )
}