"use client"
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2 } from "lucide-react"
import "./Categories.css"

function Categories() {
  const categories = [
    { id: 1, name: "Phones", icon: Smartphone },
    { id: 2, name: "Computers", icon: Monitor },
    { id: 3, name: "SmartWatch", icon: Watch },
    { id: 4, name: "Camera", icon: Camera, active: true },
    { id: 5, name: "HeadPhones", icon: Headphones },
    { id: 6, name: "Gaming", icon: Gamepad2 },
  ]

  return (
    <section className="categories section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Categories</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-title">Browse By Category</h2>
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

        <div className="categories-grid">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.id} className={`category-card ${category.active ? "active" : ""}`}>
                <IconComponent size={56} />
                <span className="category-name">{category.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
