import styles from './LoadingSkeleton.module.scss'

interface LoadingSkeletonProps {
  width?: string | number
  height?: string | number
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  lines?: number
}

export default function LoadingSkeleton({
  width = '100%',
  height = '1rem',
  className = '',
  variant = 'rectangular',
  lines = 1
}: LoadingSkeletonProps) {
  if (variant === 'text' && lines > 1) {
    return (
      <div className={`${styles.textContainer} ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${styles.skeleton} ${styles.text}`}
            style={{
              width: index === lines - 1 ? '75%' : '100%',
              height
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${styles.skeleton} ${styles[variant]} ${className}`}
      style={{ width, height }}
    />
  )
}