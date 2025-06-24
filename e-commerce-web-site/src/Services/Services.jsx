import { Truck, Headphones, ShieldCheck } from "lucide-react"
import "./Services.css"

function Services() {
  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ]

  return (
    <section className="services section">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <div className="icon-wrapper">
                    <IconComponent size={40} />
                  </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
