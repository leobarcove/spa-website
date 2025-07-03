'use client'

import { MdPhone } from 'react-icons/md'
import styles from './ClickToCall.module.scss'

interface ClickToCallProps {
  phoneNumber: string
  displayNumber?: string
  className?: string
  variant?: 'button' | 'link'
  showIcon?: boolean
}

export default function ClickToCall({
  phoneNumber,
  displayNumber,
  className = '',
  variant = 'button',
  showIcon = true
}: ClickToCallProps) {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const display = displayNumber || phoneNumber

  if (variant === 'link') {
    return (
      <a 
        href={`tel:${phoneNumber}`}
        className={`${styles.callLink} ${className}`}
      >
        {showIcon && <MdPhone />}
        {display}
      </a>
    )
  }

  return (
    <button 
      onClick={handleCall}
      className={`${styles.callButton} ${className}`}
      type="button"
    >
      {showIcon && <MdPhone />}
      Call Now
    </button>
  )
}