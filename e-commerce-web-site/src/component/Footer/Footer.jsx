"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import "./Footer.css"

function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Exclusive</h3>
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <Send size={16} />
              </button>
            </form>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <address>
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </address>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="footer-section">
            <h4>Account</h4>
            <ul>
              <li>
                <Link to="/account">My Account</Link>
              </li>
              <li>
                <Link to="/login">Login / Register</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Link</h4>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Download App</h4>
            <p>Save $3 with App New User Only</p>
            <div className="app-downloads">
              <div className="qr-code">
                <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Qr%20Code.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL1FyIENvZGUucG5nIiwiaWF0IjoxNzUwNjA4NzM0LCJleHAiOjE3ODIxNDQ3MzR9.UxZ_6BfuwRLVloAh3UgPaXPMXjLUvnPUWmPmRCGcGAk" alt="QR Code" />
              </div>
              <div className="app-buttons">
                <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/GooglePlay.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0dvb2dsZVBsYXkucG5nIiwiaWF0IjoxNzUwNjA4Nzg0LCJleHAiOjE3ODIxNDQ3ODR9.n_pjOptsiVwKaH9bF-oOw7d9Now-Uws5FJEyMv-_YM8" alt="Google Play" />
                <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/download-appstore.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL2Rvd25sb2FkLWFwcHN0b3JlLnBuZyIsImlhdCI6MTc1MDYwODgwOSwiZXhwIjoxNzgyMTQ0ODA5fQ.DLZP9e_Tm2hrAoyPI9TojwmbfQzP7CR2V8pIBnvdc1c" alt="App Store" />
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
