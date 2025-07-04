'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'
import { useCart } from '@/contexts/CartContext'
import styles from './Header.module.scss'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Sharon</span>
            <span className={styles.logoSubtext}>Spa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navDesktop}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.navLink}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button, Cart & Mobile Menu Toggle */}
          <div className={styles.actions}>
            <Link href="/cart" className={styles.cartBtn}>
              <MdShoppingCart />
              {cartItemCount > 0 && (
                <span className={styles.cartBadge}>{cartItemCount}</span>
              )}
            </Link>
            
            <Link href="/booking" className={styles.bookingBtn}>
              Book Now
            </Link>
            
            <button
              className={styles.mobileMenuBtn}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${styles.navMobile} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.navLinkMobile}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/cart"
            className={styles.navLinkMobile}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </Link>
          <Link
            href="/booking"
            className={styles.bookingBtnMobile}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  )
}