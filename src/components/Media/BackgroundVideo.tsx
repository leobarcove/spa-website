'use client'

import { useState, useRef, useEffect } from 'react'
import { MdVolumeOff, MdVolumeUp, MdPause, MdPlayArrow } from 'react-icons/md'
import styles from './BackgroundVideo.module.scss'

interface BackgroundVideoProps {
  videoSrc: string
  posterSrc?: string
  className?: string
  enableAudio?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
}

export default function BackgroundVideo({
  videoSrc,
  posterSrc,
  className = '',
  enableAudio = false,
  autoPlay = true,
  loop = true,
  muted = true
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      if (autoPlay) {
        video.play().catch(console.error)
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [autoPlay])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch(console.error)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className={`${styles.backgroundVideo} ${className}`}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        poster={posterSrc}
        preload="metadata"
        aria-label="Background video showing spa atmosphere"
      >
        <source src={videoSrc} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>

      {/* Video Controls */}
      {isLoaded && (
        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <MdPause /> : <MdPlayArrow />}
          </button>

          {enableAudio && (
            <button
              className={styles.controlBtn}
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
            </button>
          )}
        </div>
      )}

      {/* Loading State */}
      {!isLoaded && (
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
    </div>
  )
}