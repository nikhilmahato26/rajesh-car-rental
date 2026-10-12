import React from 'react';
import { Phone, Calendar, Car, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-pattern-overlay" />
      <div className="container">
        <div className="hero-grid">
          {/* Hero Content Column */}
          <div className="hero-content">
            <div className="hero-eyebrow-badge">
              <span className="dot" />
              <span>{BUSINESS_INFO.eyebrow}</span>
            </div>

            <h1 className="hero-heading">
              YOUR JOURNEY,<br />OUR DRIVE.
            </h1>

            <p className="hero-supporting-text">
              Book a vehicle for your next journey with Rajesh Tiwari Car Rental in Raipur. Choose from sedan, family car, premium MPV, and group travel options.
            </p>

            <div className="hero-cta-group">
              <button
                onClick={onOpenBookingModal}
                className="btn btn-primary btn-lg"
                type="button"
                id="hero-book-btn"
              >
                <Calendar size={18} />
                <span>Book a Vehicle</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="btn btn-outline-white btn-lg"
                id="hero-call-btn"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Hero Highlights */}
            <div className="hero-highlights-container">
              <div className="hero-highlight-item">
                <div className="hero-highlight-icon-box">
                  <Car size={20} />
                </div>
                <div>
                  <div className="hero-highlight-title">Multiple Vehicle Options</div>
                  <div className="hero-highlight-sub">Sedan, MPV & Group Fleet</div>
                </div>
              </div>

              <div className="hero-highlight-item">
                <div className="hero-highlight-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="hero-highlight-title">Booking Enquiries</div>
                  <div className="hero-highlight-sub">Prompt Rates & Assistance</div>
                </div>
              </div>

              <div className="hero-highlight-item">
                <div className="hero-highlight-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="hero-highlight-title">24×7 Availability</div>
                  <div className="hero-highlight-sub">As Stated On Poster</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="hero-visual-wrap">
            <div className="hero-image-card">
              <img
                src="/images/hero-innova.jpg"
                alt="Toyota Innova Crysta luxury MPV by Rajesh Tiwari Car Rental in Raipur, Chhattisgarh"
                loading="eager"
                width={800}
                height={450}
              />
              <div className="hero-floating-badge">
                <div className="hero-floating-info">
                  <span className="hero-floating-tag">Premium MPV</span>
                  <div>
                    <div className="hero-floating-name">Toyota Innova Crysta</div>
                    <span style={{ fontSize: '0.78rem', color: '#BBB' }}>Available in Raipur</span>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="hero-floating-call"
                  aria-label="Direct Call for Booking"
                >
                  <Phone size={14} />
                  <span>Call 24x7</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
