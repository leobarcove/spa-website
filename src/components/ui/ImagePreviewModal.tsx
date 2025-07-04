'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { MdClose, MdZoomIn, MdZoomOut, MdZoomOutMap } from 'react-icons/md'
import styles from './ImagePreviewModal.module.scss'

interface ImagePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
}

export default function ImagePreviewModal({
  isOpen,
  onClose,
  src,
  alt,
  title,
}: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const minZoom = 0.5
  const maxZoom = 3
  const zoomStep = 0.25

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn()
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut()
      } else if (e.key === '0') {
        handleResetZoom()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyboard)
      document.body.style.overflow = 'hidden'
      // Reset zoom and position when modal opens
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + zoomStep, maxZoom))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - zoomStep, minZoom))
  }

  const handleResetZoom = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -zoomStep : zoomStep
    setZoom((prev) => Math.max(minZoom, Math.min(maxZoom, prev + delta)))
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <MdClose />
        </button>

        {/* Zoom Controls */}
        <div className={styles.zoomControls}>
          <button
            className={styles.zoomButton}
            onClick={handleZoomOut}
            disabled={zoom <= minZoom}
            aria-label="Zoom out"
            title="Zoom out (-)"
          >
            <MdZoomOut />
          </button>
          <span className={styles.zoomLevel}>{Math.round(zoom * 100)}%</span>
          <button
            className={styles.zoomButton}
            onClick={handleZoomIn}
            disabled={zoom >= maxZoom}
            aria-label="Zoom in"
            title="Zoom in (+)"
          >
            <MdZoomIn />
          </button>
          <button
            className={styles.zoomButton}
            onClick={handleResetZoom}
            aria-label="Reset zoom"
            title="Reset zoom (0)"
          >
            <MdZoomOutMap />
          </button>
        </div>

        {title && <h3 className={styles.title}>{title}</h3>}
        <div
          ref={imageContainerRef}
          className={styles.imageContainer}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          style={{
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              transition: isDragging ? 'none' : 'transform 0.2s ease',
              transformOrigin: 'center',
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
              priority
              draggable={false}
              unoptimized
            />
          </div>
        </div>
        <p className={styles.caption}>
          {alt}
          <span className={styles.zoomHint}>
            Use mouse wheel to zoom • Drag to pan when zoomed
          </span>
        </p>
      </div>
    </div>
  )
}
