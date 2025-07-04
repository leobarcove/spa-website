'use client'

import { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styles from './Calendar.module.scss'

interface CalendarProps {
  selectedDate: string
  onDateSelect: (date: string) => void
  minDate?: string
  maxDate?: string
}

export default function Calendar({ selectedDate, onDateSelect, minDate, maxDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to midnight
  
  // Parse dates properly to avoid timezone issues
  const parseDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number)
    return new Date(year, month - 1, day)
  }
  
  const selectedDateObj = selectedDate ? parseDate(selectedDate) : null
  const minDateObj = minDate ? parseDate(minDate) : today
  const maxDateObj = maxDate ? parseDate(maxDate) : new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isDateDisabled = (date: Date) => {
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const minOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate())
    const maxOnly = new Date(maxDateObj.getFullYear(), maxDateObj.getMonth(), maxDateObj.getDate())
    return dateOnly < minOnly || dateOnly > maxOnly
  }

  const isDateSelected = (date: Date) => {
    if (!selectedDateObj) return false
    return date.getFullYear() === selectedDateObj.getFullYear() &&
           date.getMonth() === selectedDateObj.getMonth() &&
           date.getDate() === selectedDateObj.getDate()
  }

  const isToday = (date: Date) => {
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate()
  }

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (!isDateDisabled(date)) {
      // Format date as YYYY-MM-DD in local timezone
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const dayStr = String(day).padStart(2, '0')
      onDateSelect(`${year}-${month}-${dayStr}`)
    }
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className={styles.emptyDay} />
      )
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const disabled = isDateDisabled(date)
      const selected = isDateSelected(date)
      const todayClass = isToday(date)

      days.push(
        <button
          key={day}
          className={`${styles.dayButton} ${
            disabled ? styles.disabled : ''
          } ${selected ? styles.selected : ''} ${
            todayClass ? styles.today : ''
          }`}
          onClick={() => handleDateClick(day)}
          disabled={disabled}
          type="button"
        >
          {day}
        </button>
      )
    }

    return days
  }

  const canGoToPrevMonth = () => {
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    const prevMonthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0)
    return prevMonthEnd >= minDateObj
  }

  const canGoToNextMonth = () => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    return nextMonth <= maxDateObj
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => navigateMonth('prev')}
          disabled={!canGoToPrevMonth()}
        >
          <MdChevronLeft />
        </button>
        
        <h3 className={styles.monthYear}>
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        
        <button
          type="button"
          className={styles.navButton}
          onClick={() => navigateMonth('next')}
          disabled={!canGoToNextMonth()}
        >
          <MdChevronRight />
        </button>
      </div>

      <div className={styles.weekDays}>
        {dayNames.map(day => (
          <div key={day} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>

      <div className={styles.daysGrid}>
        {renderCalendarDays()}
      </div>
    </div>
  )
}