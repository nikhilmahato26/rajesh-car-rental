import React from 'react';
import { Phone, Zap, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export const SloganBanner: React.FC = () => {
  return (
    <aside className="slogan-strip" aria-label="Brand Slogan Banner">
      <div className="container slogan-inner">
        <div className="slogan-text-box">
          <span className="slogan-badge">
            <Zap size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            OUR MOTTO
          </span>
          <div className="slogan-phrase">
            <span>RENT FAST,</span> CAR EASY — <span>24 X 7</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', color: '#CCC', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={16} color="var(--primary-orange)" />
            Instant Booking Support in Raipur
          </span>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="btn btn-primary btn-sm"
          >
            <Phone size={15} />
            <span>Call {BUSINESS_INFO.primaryPhoneDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
