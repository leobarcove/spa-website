'use client'

import { useState } from 'react'
import {
  MdShoppingCart,
  MdFavorite,
  MdInfo,
  MdLocalShipping,
  MdVerified,
  MdRefresh,
} from 'react-icons/md'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import styles from './ProductsSection.module.scss'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  benefits: string[]
  image: string
  category: string
  inStock: boolean
  size: string
  featured?: boolean
}

const products: Product[] = [
  {
    id: 'castor-massage-oil',
    name: 'Premium Castor Massage Oil',
    price: 89,
    originalPrice: 120,
    description:
      'Pure cold-pressed castor oil infused with traditional Malaysian herbs for deep muscle relaxation and skin nourishment.',
    benefits: [
      'Deep muscle relaxation',
      'Improves circulation',
      'Natural skin moisturizer',
      'Anti-inflammatory properties',
    ],
    image: '/images/products/castor-massage-oil.jpg',
    category: 'Massage Oils',
    inStock: true,
    size: '250ml',
    featured: true,
  },
  {
    id: 'lavender-aroma-oil',
    name: 'Lavender Aromatherapy Oil',
    price: 65,
    description:
      'Pure lavender essential oil from French Provence, perfect for stress relief and promoting deep, restful sleep.',
    benefits: [
      'Reduces stress and anxiety',
      'Promotes better sleep',
      'Calms the mind',
      'Natural relaxation',
    ],
    image: '/images/products/lavender-aroma-oil.jpg',
    category: 'Aromatherapy',
    inStock: true,
    size: '30ml',
  },
  {
    id: 'eucalyptus-blend',
    name: 'Eucalyptus Wellness Blend',
    price: 75,
    description:
      'Invigorating eucalyptus blend with peppermint and tea tree oil for respiratory wellness and mental clarity.',
    benefits: [
      'Clears respiratory pathways',
      'Boosts mental clarity',
      'Natural decongestant',
      'Energizing properties',
    ],
    image: '/images/products/eucalyptus-blend.jpg',
    category: 'Aromatherapy',
    inStock: true,
    size: '30ml',
  },
  {
    id: 'coconut-body-oil',
    name: 'Virgin Coconut Body Oil',
    price: 55,
    description:
      'Premium virgin coconut oil infused with frangipani and jasmine for ultimate skin hydration and a tropical spa experience.',
    benefits: [
      'Deep skin hydration',
      'Anti-aging properties',
      'Natural sunscreen',
      'Tropical fragrance',
    ],
    image: '/images/products/coconut-body-oil.jpg',
    category: 'Body Care',
    inStock: true,
    size: '200ml',
  },
  {
    id: 'lemongrass-massage-oil',
    name: 'Lemongrass Therapeutic Oil',
    price: 70,
    description:
      'Traditional Malaysian lemongrass oil with ginger and turmeric for pain relief and muscle recovery.',
    benefits: [
      'Natural pain relief',
      'Muscle recovery',
      'Anti-inflammatory',
      'Traditional healing',
    ],
    image: '/images/products/lemongrass-massage-oil.jpg',
    category: 'Massage Oils',
    inStock: true,
    size: '250ml',
  },
  {
    id: 'ylang-ylang-blend',
    name: 'Ylang Ylang Romance Blend',
    price: 85,
    description:
      'Exotic ylang ylang essential oil blended with rose and sandalwood for romantic aromatherapy sessions.',
    benefits: [
      'Aphrodisiac properties',
      'Mood enhancement',
      'Stress relief',
      'Romantic ambiance',
    ],
    image: '/images/products/ylang-ylang-blend.jpg',
    category: 'Aromatherapy',
    inStock: false,
    size: '30ml',
  },
]

const categories = ['All', 'Massage Oils', 'Aromatherapy', 'Body Care']

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showProductModal, setShowProductModal] = useState<Product | null>(null)
  const { addToCart, getTotalItems } = useCart()
  const router = useRouter()

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size,
    })
    // Show success notification (you can add a toast notification here)
    alert(`${product.name} added to cart!`)
  }

  const cartItemCount = getTotalItems()

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.title}>Premium Spa Products</h1>
          <p className={styles.subtitle}>
            Take home the luxury of Sharon Spa with our curated collection of
            premium oils and wellness products
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Products Banner */}
        <div className={styles.featuredBanner}>
          <h2>Featured Products</h2>
          <p>Hand-selected premium products from our spa collection</p>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {product.featured && (
                <div className={styles.featuredBadge}>Featured</div>
              )}
              {!product.inStock && (
                <div className={styles.outOfStockBadge}>Out of Stock</div>
              )}

              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className={styles.productInfo}>
                <div className={styles.category}>{product.category}</div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.size}>{product.size}</p>

                <div className={styles.priceSection}>
                  <span className={styles.price}>RM{product.price}</span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>
                      RM{product.originalPrice}
                    </span>
                  )}
                </div>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.benefits}>
                  <h4>Benefits:</h4>
                  <ul>
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actions}>
                  <button
                    className={`${styles.addToCartBtn} ${
                      !product.inStock ? styles.disabled : ''
                    }`}
                    onClick={() => product.inStock && handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <MdShoppingCart />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button
                    className={styles.infoBtn}
                    onClick={() => setShowProductModal(product)}
                  >
                    <MdInfo />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <MdLocalShipping className={styles.infoIcon} />
              <h3>Free Delivery</h3>
              <p>Free delivery for orders above RM150 within Klang Valley</p>
            </div>
            <div className={styles.infoCard}>
              <MdVerified className={styles.infoIcon} />
              <h3>100% Natural</h3>
              <p>All our products are made from premium natural ingredients</p>
            </div>
            <div className={styles.infoCard}>
              <MdRefresh className={styles.infoIcon} />
              <h3>Easy Returns</h3>
              <p>30-day return policy for unopened products</p>
            </div>
          </div>
        </div>

        {/* Product Detail Modal */}
        {showProductModal && (
          <div
            className={styles.modalOverlay}
            onClick={() => setShowProductModal(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setShowProductModal(null)}
              >
                ×
              </button>

              <div className={styles.modalBody}>
                <div className={styles.modalImage}>
                  <Image
                    src={showProductModal.image}
                    alt={showProductModal.name}
                    fill
                    className={styles.productImage}
                  />
                </div>

                <div className={styles.modalInfo}>
                  <div className={styles.category}>
                    {showProductModal.category}
                  </div>
                  <h2>{showProductModal.name}</h2>
                  <p className={styles.size}>{showProductModal.size}</p>

                  <div className={styles.priceSection}>
                    <span className={styles.price}>
                      RM{showProductModal.price}
                    </span>
                    {showProductModal.originalPrice && (
                      <span className={styles.originalPrice}>
                        RM{showProductModal.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className={styles.description}>
                    {showProductModal.description}
                  </p>

                  <div className={styles.benefitsDetail}>
                    <h3>Benefits & Features</h3>
                    <ul>
                      {showProductModal.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.modalActions}>
                    <button
                      className={`${styles.addToCartBtn} ${
                        !showProductModal.inStock ? styles.disabled : ''
                      }`}
                      onClick={() => {
                        if (showProductModal.inStock) {
                          handleAddToCart(showProductModal)
                          setShowProductModal(null)
                        }
                      }}
                      disabled={!showProductModal.inStock}
                    >
                      <MdShoppingCart />
                      {showProductModal.inStock
                        ? 'Add to Cart'
                        : 'Out of Stock'}
                    </button>

                    <button
                      className={styles.continueBtn}
                      onClick={() => setShowProductModal(null)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
