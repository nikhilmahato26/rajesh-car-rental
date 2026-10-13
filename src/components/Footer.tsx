import React from 'react';
import { Phone, Mail, MapPin, Car, Clock, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, vehicles } from '../data/fleetData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col">
            <a href="#" className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="brand-icon-box">
                <Car size={26} strokeWidth={2.2} />
              </div>
              <div className="brand-text-col">
                <span className="brand-title" style={{ color: '#FFF' }}>RAJESH TIWARI</span>
                <span className="brand-subtitle">CAR RENTAL</span>
              </div>
            </a>
            <p className="footer-desc">
              Your trusted car rental partner in Raipur, Chhattisgarh. Offering well-maintained sedans, family cars, premium MPVs, and group travel options with round-the-clock booking assistance.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 130, 22, 0.15)', padding: '6px 14px', borderRadius: '6px', color: '#FFA44D', fontSize: '0.85rem', fontWeight: 700 }}>
              <Clock size={16} />
              <span>24 X 7 Availability</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero" className="footer-link">
                  <ChevronRight size={14} color="var(--primary-orange)" />
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="footer-link">
                  <ChevronRight size={14} color="var(--primary-orange)" />
                  Vehicle Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="footer-link">
                  <ChevronRight size={14} color="var(--primary-orange)" />
                  Book / Enquire
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  <ChevronRight size={14} color="var(--primary-orange)" />
                  Services &amp; Routes
                </a>
              </li>
              <li>
                <a href="#why-us" className="footer-link">
                  <ChevronRight size={14} color="var(--primary-orange)" />
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  <ChevronRight size={14} color="var(--primary-orange)" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Vehicle Fleet */}
          <div className="footer-col">
            <h4>Our Fleet</h4>
            <ul className="footer-links-list">
              {vehicles.map((v) => (
                <li key={v.id}>
                  <a href={`#vehicle-${v.id}`} className="footer-link">
                    <ChevronRight size={14} color="var(--primary-orange)" />
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Contact Details</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <div>
                    <a href={`tel:${BUSINESS_INFO.primaryPhone}`} style={{ fontWeight: 700, color: '#FFF' }}>
                      {BUSINESS_INFO.primaryPhoneDisplay}
                    </a>{' '}
                    <span style={{ fontSize: '0.78rem', color: '#FFA44D' }}>(Primary)</span>
                  </div>
                  {BUSINESS_INFO.alternatePhones.map((phone) => (
                    <div key={phone.number}>
                      <a href={`tel:${phone.number}`}>
                        {phone.display}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <div>
                    <a href={`mailto:${BUSINESS_INFO.primaryEmail}`}>
                      {BUSINESS_INFO.primaryEmail}
                    </a>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '2px' }}>
                    Poster Email:{' '}
                    <a href={`mailto:${BUSINESS_INFO.posterEmail}`} style={{ color: '#AAA' }}>
                      {BUSINESS_INFO.posterEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Raipur, Chhattisgarh.
          </div>
          <div>
            Slogan: <strong style={{ color: '#DDD' }}>{BUSINESS_INFO.slogan}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
