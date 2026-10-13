import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/917746055014?text=${encodeURIComponent(
    'Hello Rajesh Tiwari Car Rental, I would like to book a vehicle in Raipur.'
  )}`;

  return (
    <>
      {/* Desktop Floating Actions Bar */}
      <aside className="floating-actions-bar" aria-label="Quick Connect Actions">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={20} />
          <span>WhatsApp Us</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="floating-btn floating-btn-call"
          aria-label="Call Helpline Now"
        >
          <Phone size={20} />
          <span>Call 24×7</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Bar */}
      <div className="mobile-bottom-bar" aria-label="Mobile Quick Booking Bar">
        <div className="mobile-bottom-bar-inner">
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="btn btn-primary"
            style={{ width: '100%', padding: '10px 14px', fontSize: '0.9rem' }}
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', padding: '10px 14px', fontSize: '0.9rem' }}
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
