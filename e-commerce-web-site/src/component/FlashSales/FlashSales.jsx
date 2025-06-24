"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, Eye } from "lucide-react"
import { useApp } from "../../context/AppContext"
import "./FlashSales.css"

function FlashSales() {
  const { dispatch } = useApp()
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  })

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20611.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYxMS5wbmciLCJpYXQiOjE3NTA2MDA4NzUsImV4cCI6MTc4MjEzNjg3NX0.i07c8Ak7kFgttz2n1pafdCvCpmprLB-cGHhQLQ4jBzQ",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20612.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYxMi5wbmciLCJpYXQiOjE3NTA2MDEwMzYsImV4cCI6MTc4MjEzNzAzNn0.U2Ck6_B6tprhutTcvWYiseIBzb65Wj4piA-M8mQNrhg",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviews: 99,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20613.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYxMy5wbmciLCJpYXQiOjE3NTA2MDA5OTQsImV4cCI6MTc4MjEzNjk5NH0.YqWX2LXmqajlrnUmCKibItyEcriC82lBjPrty8WxfUs",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4,
      reviews: 99,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20614.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYxNC5wbmciLCJpYXQiOjE3NTA2MDExNDIsImV4cCI6MTc4MjEzNzE0Mn0.Y_gJnfbySjSut2AOLhr4ki--wccFsH4mlZeFJt4Y4jg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
  }

  return (
    <section className="flash-sales section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Today's</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">Flash Sales</h2>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-label">Days</span>
                <span className="countdown-number">{String(timeLeft.days).padStart(2, "0")}</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-label">Hours</span>
                <span className="countdown-number">{String(timeLeft.hours).padStart(2, "0")}</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-label">Minutes</span>
                <span className="countdown-number">{String(timeLeft.minutes).padStart(2, "0")}</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-label">Seconds</span>
                <span className="countdown-number">{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="nav-arrows">
              <button className="nav-arrow">
                <ChevronLeft size={24} />
              </button>
              <button className="nav-arrow">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-badge">-{product.discount}%</div>
                <div className="product-actions">
                  <button onClick={() => addToWishlist(product)} className="action-btn">
                    <Heart size={16} />
                  </button>
                  <button className="action-btn">
                    <Eye size={16} />
                  </button>
                </div>
                <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                  Add To Cart
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  <span className="original-price">${product.originalPrice}</span>
                </div>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < product.rating ? "filled" : ""}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="reviews">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="btn btn-primary view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  )
}

export default FlashSales
