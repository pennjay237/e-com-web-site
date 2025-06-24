import "./NewArrivals.css"

function NewArrivals() {
  return (
    <section className="new-arrivals section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Featured</span>
          </div>
          <h2 className="section-title">New Arrival</h2>
        </div>

        <div className="arrivals-grid">
          <div className="arrival-card large">
            <div className="arrival-image">
              <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/ps5-slim-goedkope-playstation_large%201%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL3BzNS1zbGltLWdvZWRrb3BlLXBsYXlzdGF0aW9uX2xhcmdlIDEgKDEpLnBuZyIsImlhdCI6MTc1MDYwNjAzOSwiZXhwIjoxNzgyMTQyMDM5fQ.RUV1xvF3ot4YAD9zNBSTfCKuJviSELXcBh4WW1-SDc0" alt="PlayStation 5" />
            </div>
            <div className="arrival-content">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="#" className="shop-link">
                Shop Now
              </a>
            </div>
          </div>

          <div className="arrival-card medium">
            <div className="arrival-image">
              <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/attractive-woman-wearing-hat-posing-black-background%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL2F0dHJhY3RpdmUtd29tYW4td2VhcmluZy1oYXQtcG9zaW5nLWJsYWNrLWJhY2tncm91bmQgMS5wbmciLCJpYXQiOjE3NTA2MDYyMDAsImV4cCI6MTc4MjE0MjIwMH0.olqc13fju8SmDT0A20UwTqK7sRrXL8FiGSbS3ZAu2OU" alt="Women's Collections" />
            </div>
            <div className="arrival-content">
              <h3>Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <a href="#" className="shop-link">
                Shop Now
              </a>
            </div>
          </div>
          <div className="new-grid">
            
          <div className="arrival-card small">
            <div className="arrival-image">
              <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20707.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDcwNy5wbmciLCJpYXQiOjE3NTA2MDYyNzMsImV4cCI6MTc4MjE0MjI3M30.PFej3IbA2ep4PyRIuWcfV2YuDSW0uZPHFX5PglaBwsQ" alt="Speakers" />
            </div>
            <div className="arrival-content">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <a href="#" className="shop-link">
                Shop Now
              </a>
            </div>
          </div>

          <div className="arrival-card small">
            <div className="arrival-image">
              <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Frame%20706.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ZyYW1lIDcwNi5wbmciLCJpYXQiOjE3NTA2MDYyMzMsImV4cCI6MTc4MjE0MjIzM30.kgZ5sX8htovUfKob8ejXI2JSkV0SyNuapp_Xb3ObWyw" alt="Perfume" />
            </div>
            <div className="arrival-content">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <a href="#" className="shop-link">
                Shop Now
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
