import React from 'react';
import { Phone, PhoneCall, MapPin, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export const ContactBar: React.FC = () => {
  return (
    <section className="contact-bar-section" aria-label="Business Direct Contacts">
      <div className="container">
        <div className="contact-bar-card">
          {/* Primary Phone */}
          <div className="contact-item-box">
            <div className="contact-icon-bubble">
              <Phone size={22} />
            </div>
            <div>
              <div className="contact-meta-label">Primary Booking Phone</div>
              <div className="contact-meta-value">
                <a href={`tel:${BUSINESS_INFO.primaryPhone}`}>
                  {BUSINESS_INFO.primaryPhoneDisplay}
                </a>
              </div>
              <div className="contact-meta-sub">24x7 Direct Calling</div>
            </div>
          </div>

          {/* Alternate 1 */}
          <div className="contact-item-box">
            <div className="contact-icon-bubble">
              <PhoneCall size={22} />
            </div>
            <div>
              <div className="contact-meta-label">Alternate Booking</div>
              <div className="contact-meta-value">
                <a href={`tel:${BUSINESS_INFO.alternatePhones[0].number}`}>
                  {BUSINESS_INFO.alternatePhones[0].display}
                </a>
              </div>
              <div className="contact-meta-sub">Poster Contact Line</div>
            </div>
          </div>

          {/* Alternate 2 */}
          <div className="contact-item-box">
            <div className="contact-icon-bubble">
              <PhoneCall size={22} />
            </div>
            <div>
              <div className="contact-meta-label">Alternate Booking</div>
              <div className="contact-meta-value">
                <a href={`tel:${BUSINESS_INFO.alternatePhones[1].number}`}>
                  {BUSINESS_INFO.alternatePhones[1].display}
                </a>
              </div>
              <div className="contact-meta-sub">Booking Assistance</div>
            </div>
          </div>

          {/* Location */}
          <div className="contact-item-box">
            <div className="contact-icon-bubble">
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-meta-label">Business Location</div>
              <div className="contact-meta-value">
                Raipur, Chhattisgarh
              </div>
              <div className="contact-meta-sub">Near Ashok Ratan, Vidhan Sabha Rd</div>
            </div>
          </div>

          {/* Primary Email + Secondary Poster Email */}
          <div className="contact-item-box">
            <div className="contact-icon-bubble">
              <Mail size={22} />
            </div>
            <div>
              <div className="contact-meta-label">Official Email</div>
              <div className="contact-meta-value" style={{ fontSize: '0.88rem' }}>
                <a href={`mailto:${BUSINESS_INFO.primaryEmail}`}>
                  {BUSINESS_INFO.primaryEmail}
                </a>
              </div>
              <div className="contact-meta-sub">
                Poster Email: <a href={`mailto:${BUSINESS_INFO.posterEmail}`} style={{ textDecoration: 'underline' }}>{BUSINESS_INFO.posterEmail}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
