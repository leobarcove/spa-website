'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { MdClose } from 'react-icons/md'
import { BiLoader } from 'react-icons/bi'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'fullscreen'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  loading?: boolean
  className?: string
  overlayClassName?: string
  contentClassName?: string
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  loading = false,
  className = '',
  overlayClassName = '',
  contentClassName = ''
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  // Handle focus management
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement
      
      // Focus the modal
      modalRef.current?.focus()
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Add aria-hidden to main content
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.setAttribute('aria-hidden', 'true')
      }
    } else {
      // Restore focus to previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
      
      // Restore body scroll
      document.body.style.overflow = ''
      
      // Remove aria-hidden from main content
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.removeAttribute('aria-hidden')
      }
    }

    return () => {
      document.body.style.overflow = ''
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.removeAttribute('aria-hidden')
      }
    }
  }, [isOpen])

  // Handle click outside
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  // Handle focus trap
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      if (!focusableElements || focusableElements.length === 0) return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }
  }

  if (!isOpen) return null

  const modalContent = (
    <div 
      className={`${styles.modalOverlay} ${styles[size]} ${overlayClassName}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div 
        ref={modalRef}
        className={`${styles.modalContent} ${className}`}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Loading Overlay */}
        {loading && (
          <div className={styles.loadingOverlay}>
            <BiLoader className={styles.loadingSpinner} />
            <span className={styles.loadingText}>Loading...</span>
          </div>
        )}

        {/* Header */}
        {(title || showCloseButton) && (
          <div className={styles.modalHeader}>
            {title && (
              <h2 id="modal-title" className={styles.modalTitle}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                <MdClose />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className={`${styles.modalBody} ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  )

  // Use portal to render modal at document root
  return createPortal(modalContent, document.body)
}

// Confirmation Modal Variant
interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'danger' | 'warning'
  loading?: boolean
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
  loading = false
}: ConfirmationModalProps) {
  const handleConfirm = () => {
    onConfirm()
    if (!loading) {
      onClose()
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="small"
      loading={loading}
      closeOnOverlayClick={!loading}
      closeOnEscape={!loading}
    >
      <div className={styles.confirmationContent}>
        <p className={styles.confirmationMessage}>{message}</p>
        <div className={styles.confirmationActions}>
          <button
            className={`${styles.cancelButton} ${styles.button}`}
            onClick={onClose}
            disabled={loading}
            type="button"
          >
            {cancelText}
          </button>
          <button
            className={`${styles.confirmButton} ${styles.button} ${styles[variant]}`}
            onClick={handleConfirm}
            disabled={loading}
            type="button"
          >
            {loading ? (
              <>
                <BiLoader className={styles.buttonSpinner} />
                Processing...
              </>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </Modal>
  )
}

// Image Modal Variant
interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
}

export function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  title
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="large"
      className={styles.imageModal}
    >
      <div className={styles.imageContainer}>
        <img
          src={src}
          alt={alt}
          className={styles.modalImage}
        />
      </div>
    </Modal>
  )
}