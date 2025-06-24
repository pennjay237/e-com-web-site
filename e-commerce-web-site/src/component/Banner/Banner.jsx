import "./Banner.css"

function Banner() {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-card">
          <div className="banner-content">
            <div className="banner-text">
              <p className="banner-subtitle">Categories</p>
              <h2 className="banner-title">Enhance Your Music Experience</h2>
              <div className="banner-countdown">
                <div className="countdown-circle">
                  <span className="countdown-number">23</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-circle">
                  <span className="countdown-number">05</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-circle">
                  <span className="countdown-number">59</span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-circle">
                  <span className="countdown-number">35</span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
              <button className="btn btn-success banner-btn">Buy Now!</button>
            </div>
            <div className="banner-image">
              <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/JBL_BOOMBOX_2_HERO_020_x1%20(1)%201%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0pCTF9CT09NQk9YXzJfSEVST18wMjBfeDEgKDEpIDEgKDEpLnBuZyIsImlhdCI6MTc1MDYwMzY5MywiZXhwIjoxNzgyMTM5NjkzfQ.GlYJQpe9EIGKt4msJrneQaEqI1kHKXQl40XiHwxLHuk" alt="JBL Speaker" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
