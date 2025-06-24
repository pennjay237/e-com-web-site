"use client"
import { Heart, Eye } from "lucide-react"
import { useApp } from "../../context/AppContext"
import "./Products.css"

function Products() {
  const { dispatch } = useApp()

  const products = [
    {
      id: 9,
      name: "Breed Dry Dog Food",
      price: 100,
      rating: 3,
      reviews: 35,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20604.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwNC5wbmciLCJpYXQiOjE3NTA2MDU2NDAsImV4cCI6MTc4MjE0MTY0MH0.J85w_7d-5Y86S1eL8lfzeZRhWESGyx2v60T9OYZ0_fI",
    },
    {
      id: 10,
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviews: 95,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20604%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwNCAoMSkucG5nIiwiaWF0IjoxNzUwNjA1NjE5LCJleHAiOjE3ODIxNDE2MTl9.1D5RuI3KMilz2ynHNqi_fZy9ZADSaUNgOXAmxYcHLEA",
    },
    {
      id: 11,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20604%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwNCAoMikucG5nIiwiaWF0IjoxNzUwNjA1NTk5LCJleHAiOjE3ODIxNDE1OTl9.vMV2QBDojyP16Wq_ykSenEpCIuV3gDG5bPKLLe2QHuE",
    },
    {
      id: 12,
      name: "Curology Product Set",
      price: 500,
      rating: 4,
      reviews: 145,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/curology-j7pKVQrTUsM-unsplash%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL2N1cm9sb2d5LWo3cEtWUXJUVXNNLXVuc3BsYXNoIDEucG5nIiwiaWF0IjoxNzUwNjA1NTU0LCJleHAiOjE3ODIxNDE1NTR9.4MkSQlmBO45JP9hEZMdVn5xrEgV2ihf_OBb8-ySTnQM",
    },
    {
      id: 13,
      name: "Kids Electric Car",
      price: 960,
      rating: 5,
      reviews: 65,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20608%20(3).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwOCAoMykucG5nIiwiaWF0IjoxNzUwNjA1NTEzLCJleHAiOjE3ODIxNDE1MTN9.M947URZ_oRsFW1wqjFThfPiDQMyXdfp5z3p9huNwH2I",
      colors: ["#fb1314", "#db4444"],
    },
    {
      id: 14,
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      rating: 5,
      reviews: 35,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20608%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwOCAoMSkucG5nIiwiaWF0IjoxNzUwNjA1NDY4LCJleHAiOjE3ODIxNDE0Njh9.SoZvzo842bZfDs8nU6i4pwS1wJMjEAu_9RJ0S-V6-bQ",
      colors: ["#eeff61", "#db4444"],
    },
    {
      id: 15,
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      rating: 4,
      reviews: 55,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20608%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwOCAoMikucG5nIiwiaWF0IjoxNzUwNjA1NDM3LCJleHAiOjE3ODIxNDE0Mzd9.075rw3ZiBp8mmtE5sTfZbSZQzHZ5qktfrqq8Lfzv5fA",
      colors: ["#000", "#db4444"],
    },
    {
      id: 16,
      name: "Quilted Satin Jacket",
      price: 660,
      rating: 4,
      reviews: 55,
      image: "https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20608%20(3).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDYwOCAoMykucG5nIiwiaWF0IjoxNzUwNjA1MzYzLCJleHAiOjE3ODIxNDEzNjN9.nBA5Ybds5AzoNiltU4xzWGUTapaOxYQTwnlQkTQODBo",
      colors: ["#184a48", "#db4444"],
    },
  ]

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
  }

  return (
    <section className="products section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Our Products</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">Explore Our Products</h2>
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
                {product.colors && (
                  <div className="product-colors">
                    {product.colors.map((color, index) => (
                      <div key={index} className="color-option" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                )}
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

export default Products
