import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu'
import Footer from '../../components/footer'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <Menu />

      <div className="main_content">
        <section className="not-found-section">
          <div className="container">
            <div className="not-found-card">
              <p className="not-found-label">Page not found</p>
              <h1 className="not-found-code">
                4<span className="gold_color_text">0</span>4
              </h1>
              <p className="not-found-message">
                The page you are looking for does not exist or may have been moved.
              </p>
              <div className="not-found-actions">
                <Link to="/" className="common_outline_btn">
                  Back to Home
                </Link>
                <Link to="/how-to-buy" className="common_btn">
                  How to Buy MEDC
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
