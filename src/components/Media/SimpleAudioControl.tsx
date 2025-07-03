'use client'

import { useState, useRef, useEffect } from 'react'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { mediaAssets } from '@/lib/media'
import styles from './SimpleAudioControl.module.scss'

interface SimpleAudioControlProps {
  className?: string
  position?: 'bottom-left' | 'bottom-right' | 'top-right'
}

export default function SimpleAudioControl({ 
  className = '', 
  position = 'bottom-left' 
}: SimpleAudioControlProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set volume programmatically
    audio.volume = 0.2

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    setUserInteracted(true)

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(console.error)
    }
  }

  return (
    <div className={`${styles.audioControl} ${styles[position]} ${className}`}>
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        <source src={mediaAssets.audio.spaAmbient} type="audio/mpeg" />
      </audio>

      <button
        className={styles.controlBtn}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
        title={isPlaying ? 'Pause ambient sounds' : 'Play ambient sounds'}
      >
        {isPlaying ? <MdVolumeUp /> : <MdVolumeOff />}
        <span className={styles.tooltip}>
          {isPlaying ? 'Pause ambient sounds' : 'Play ambient sounds'}
        </span>
      </button>
    </div>
  )
}