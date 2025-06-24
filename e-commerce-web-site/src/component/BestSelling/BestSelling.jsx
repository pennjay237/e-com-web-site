"use client"
import { Heart, Eye } from "lucide-react"
import { useApp } from "../../context/AppContext"
import "./BestSelling.css"

function BestSelling() {
  const { dispatch } = useApp()

  const products = [
    {
      id: 5,
      name: "The north coat",
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20605.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwNS5wbmciLCJpYXQiOjE3NTA2MDMwMTEsImV4cCI6MTc4MjEzOTAxMX0.XYns5M4sDmjim-0zaE9pW-xiHXjSuDizGj9KgbLAk5U",
    },
    {
      id: 6,
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 65,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20606.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwNi5wbmciLCJpYXQiOjE3NTA2MDMwNjYsImV4cCI6MTc4MjEzOTA2Nn0.WAnQ4sDIMI0U0sUZT1Eu5eBhRrF5OQZC5qjIt8bqA94",
    },
    {
      id: 7,
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4,
      reviews: 65,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20610.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYxMC5wbmciLCJpYXQiOjE3NTA2MDMwOTYsImV4cCI6MTc4MjEzOTA5Nn0.mPpNXvaO8v_XpsMYcGbBMD3PHQmD3FGRB0MFMbuK2R8",
    },
    {
      id: 8,
      name: "Small BookShelf",
      price: 360,
      rating: 5,
      reviews: 65,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/table.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL3RhYmxlLnBuZyIsImlhdCI6MTc1MDYwMzEzNCwiZXhwIjoxNzgyMTM5MTM0fQ.ZmLxUmjlYF2h5VMpMHc-28yjI0ElUyHyLjZS8orL7pc",
    },
  ]

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
  }

  return (
    <section className="best-selling section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>This Month</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">Best Selling Products</h2>
            <button className="btn btn-primary view-all-btn">View All</button>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
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
                  {product.originalPrice && <span className="original-price">${product.originalPrice}</span>}
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
      </div>
    </section>
  )
}

export default BestSelling
