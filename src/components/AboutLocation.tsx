import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export const AboutLocation: React.FC = () => {
  return (
    <section id="contact" className="section location-section" aria-labelledby="location-heading">
      <div className="container">
        <div className="location-grid">
          {/* Left Column: Business Location & Details */}
          <div className="location-info-card">
            <div className="section-eyebrow" style={{ marginBottom: '10px' }}>
              <MapPin size={15} />
              <span>BUSINESS HEADQUARTERS</span>
            </div>
            <h2 id="location-heading" className="section-title" style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
              VISIT OR REACH OUT
            </h2>

            <p style={{ color: 'var(--charcoal-muted)', fontSize: '1rem', lineHeight: '1.65' }}>
              Rajesh Tiwari Car Rental is situated on Vidhan Sabha Road in Raipur. We are readily available to arrange local pickups, airport drops, and outstation journeys.
            </p>

            {/* Exact address per poster */}
            <div className="location-address-box">
              <h4>Registered Address</h4>
              <p>{BUSINESS_INFO.address}</p>
            </div>

            <div className="location-details-list">
              <div className="location-detail-row">
                <Clock size={18} color="var(--primary-orange)" />
                <strong>Availability:</strong>
                <span>{BUSINESS_INFO.availability} (Round-the-clock booking)</span>
              </div>

              <div className="location-detail-row">
                <Mail size={18} color="var(--primary-orange)" />
                <strong>Primary Email:</strong>
                <a href={`mailto:${BUSINESS_INFO.primaryEmail}`} style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>
                  {BUSINESS_INFO.primaryEmail}
                </a>
              </div>

              <div className="location-detail-row">
                <Mail size={18} color="#888" />
                <strong>Poster Email:</strong>
                <a href={`mailto:${BUSINESS_INFO.posterEmail}`} style={{ color: 'var(--charcoal-muted)' }}>
                  {BUSINESS_INFO.posterEmail} <span style={{ fontSize: '0.75rem', color: '#888' }}>(Secondary Contact)</span>
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="btn btn-primary"
              >
                <Phone size={16} />
                <span>Call Primary: {BUSINESS_INFO.primaryPhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${encodeURIComponent(
                  'Hello Rajesh Tiwari Car Rental, I have an enquiry about renting a vehicle in Raipur.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Promotional Reference Card honoring the poster */}
          <div className="poster-banner-card">
            <span className="poster-badge">OFFICIAL BUSINESS DETAILS</span>
            <h3>RENT FAST, CAR EASY</h3>
            <p>
              Dedicated car rental fleet in Raipur, Chhattisgarh. Contact our team across all published booking hotlines for instant reservations.
            </p>

            <div className="poster-numbers-box">
              <div className="poster-number-item">
                <span className="poster-number-label">Primary Hotline</span>
                <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="poster-number-link">
                  {BUSINESS_INFO.primaryPhoneDisplay}
                </a>
              </div>

              {BUSINESS_INFO.alternatePhones.map((phone, idx) => (
                <div className="poster-number-item" key={phone.number}>
                  <span className="poster-number-label">Booking Line {idx + 2} (Poster)</span>
                  <a href={`tel:${phone.number}`} className="poster-number-link">
                    {phone.display}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              <ShieldCheck size={18} />
              <span>24 X 7 Verified Car Rental Service in Raipur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
