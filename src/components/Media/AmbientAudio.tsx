'use client'

import { useState, useRef, useEffect } from 'react'
import { MdVolumeOff, MdVolumeUp, MdMusicNote, MdPlayArrow, MdPause } from 'react-icons/md'
import styles from './AmbientAudio.module.scss'

interface AmbientAudioProps {
  audioSrc: string
  volume?: number
  autoPlay?: boolean
  loop?: boolean
  className?: string
  showControls?: boolean
  title?: string
}

export default function AmbientAudio({
  audioSrc,
  volume = 0.3,
  autoPlay = false,
  loop = true,
  className = '',
  showControls = true,
  title = 'Ambient Spa Music'
}: AmbientAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentVolume, setCurrentVolume] = useState(volume)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedData = () => {
      console.log('Audio loaded successfully')
      setIsLoaded(true)
      audio.volume = volume
    }

    const handleCanPlay = () => {
      console.log('Audio can play')
      setIsLoaded(true)
    }

    const handleError = (e: Event) => {
      console.error('Audio loading error:', e)
    }

    const handlePlay = () => {
      console.log('Audio play event')
      setIsPlaying(true)
    }
    
    const handlePause = () => {
      console.log('Audio pause event')
      setIsPlaying(false)
    }
    
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('error', handleError)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [volume])

  // Handle user interaction requirement for autoplay
  useEffect(() => {
    if (userInteracted && autoPlay && isLoaded) {
      const audio = audioRef.current
      if (audio && !isPlaying) {
        audio.play().catch(console.error)
      }
    }
  }, [userInteracted, autoPlay, isLoaded, isPlaying])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    setUserInteracted(true)

    if (isPlaying) {
      audio.pause()
      console.log('Audio paused')
    } else {
      audio.play()
        .then(() => {
          console.log('Audio playing successfully')
        })
        .catch((error) => {
          console.error('Audio play failed:', error)
        })
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    setUserInteracted(true)
    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = parseFloat(e.target.value)
    audio.volume = newVolume
    setCurrentVolume(newVolume)
    setUserInteracted(true)
  }

  // Enable user interaction on any click
  const handleUserInteraction = () => {
    setUserInteracted(true)
  }

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction, { once: true })
    return () => {
      document.removeEventListener('click', handleUserInteraction)
    }
  }, [])

  if (!showControls) {
    return (
      <audio
        ref={audioRef}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        preload="metadata"
        className="sr-only"
      >
        <source src={audioSrc} type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
    )
  }

  return (
    <div className={`${styles.ambientAudio} ${className}`}>
      <audio
        ref={audioRef}
        loop={loop}
        muted={isMuted}
        preload="auto"
        crossOrigin="anonymous"
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc} type="audio/mp3" />
        <p>Your browser does not support the audio element.</p>
      </audio>

      <div className={styles.controls}>
        <div className={styles.info}>
          <MdMusicNote className={styles.icon} />
          <span className={styles.title}>{title}</span>
        </div>

        <div className={styles.playControls}>
          <button
            className={`${styles.controlBtn} ${styles.playBtn}`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
          >
            {isPlaying ? <MdPause /> : <MdPlayArrow />}
          </button>

          <button
            className={styles.controlBtn}
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
          </button>

          <div className={styles.volumeControl}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={currentVolume}
              onChange={handleVolumeChange}
              disabled={isMuted}
              className={styles.volumeSlider}
              aria-label="Volume control"
            />
          </div>
        </div>
      </div>

      {!userInteracted && autoPlay && (
        <div className={styles.interactionPrompt}>
          <p>Click anywhere to enable ambient sounds</p>
        </div>
      )}
    </div>
  )
}