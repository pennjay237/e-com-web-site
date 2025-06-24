"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react"
import { useApp } from "../../context/AppContext"
import "./Header.css"

function Header() {
  const { state } = useApp()
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="/">ShopNow</Link>
          </p>
          <div className="language-selector">
            <span>English</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              Exclusive
            </Link>

            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/signup">Sign Up</Link>
            </nav>

            <div className="header-actions">
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                  <Search size={20} />
                </button>
              </form>

              <div className="action-buttons">
                <Link to="/wishlist" className="action-btn">
                  <Heart size={20} />
                  {state.wishlist.length > 0 && <span className="badge">{state.wishlist.length}</span>}
                </Link>
                <Link to="/cart" className="action-btn">
                  <ShoppingCart size={20} />
                  {state.cart.length > 0 && <span className="badge">{state.cart.length}</span>}
                </Link>
                <Link to={state.isAuthenticated ? "/account" : "/login"} className="action-btn">
                  <User size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
