import { ChevronRight, Apple } from "lucide-react"
import "./Hero.css"

function Hero() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ]

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <aside className="sidebar">
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <span>{category}</span>
                  {(index === 0 || index === 1) && <ChevronRight size={16} />}
                </li>
              ))}
            </ul>
          </aside>

          <div className="hero-banner">
            <div className="banner-content">
              <div className="banner-text">
                <div className="brand-info">
                  <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/1200px-Apple_gray_logo%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlLzEyMDBweC1BcHBsZV9ncmF5X2xvZ28gMS5wbmciLCJpYXQiOjE3NTA2MDc5NjcsImV4cCI6MTc4MjE0Mzk2N30.GQkLww6qh2pGxjxKC-OuiTHLDo5v7k22XA5RT0Q0yv8" alt="Apple logo" />
                  <span>iPhone 14 Series</span>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <a href="#" className="shop-link">
                  Shop Now →
                </a>
              </div>
              <div className="banner-image">
                <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/hero_endframe__cvklg0xk3w6e_large%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL2hlcm9fZW5kZnJhbWVfX2N2a2xnMHhrM3c2ZV9sYXJnZSAyLnBuZyIsImlhdCI6MTc1MDU5OTkyMSwiZXhwIjoxNzgyMTM1OTIxfQ.LKO7kGqGCbu9yyhZtLFoRYC6zbXIDEClQcik4DrY-bE" alt="iPhone 14" />
              </div>
            </div>
            <div className="banner-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
