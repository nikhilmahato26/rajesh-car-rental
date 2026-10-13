import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Menu, X, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

interface HeaderProps {
  onOpenBookingModal: (vehicleId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-badge">24 X 7 Booking</span>
            <span className="top-bar-item">
              <MapPin size={14} />
              {BUSINESS_INFO.address}
            </span>
            <a href={`mailto:${BUSINESS_INFO.primaryEmail}`} className="top-bar-item">
              <Mail size={14} />
              {BUSINESS_INFO.primaryEmail}
            </a>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item" style={{ color: '#AAA' }}>
              <Clock size={14} />
              Round-the-Clock Support
            </span>
            <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="top-bar-link">
              <Phone size={14} />
              {BUSINESS_INFO.primaryPhoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo Wordmark */}
          <a href="#" className="brand-logo" aria-label="Rajesh Tiwari Car Rental Homepage">
            <div className="brand-icon-box">
              <Car size={26} strokeWidth={2.2} />
            </div>
            <div className="brand-text-col">
              <span className="brand-title">RAJESH TIWARI</span>
              <span className="brand-subtitle">CAR RENTAL</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li><a href="#hero" className="nav-link">Home</a></li>
              <li><a href="#fleet" className="nav-link">Vehicle Fleet</a></li>
              <li><a href="#booking" className="nav-link">Book Now</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#why-us" className="nav-link">Why Choose Us</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <a
              href={`https://wa.me/917746055014?text=${encodeURIComponent(
                'Hello Rajesh Tiwari Car Rental, I would like to enquire about vehicle rental in Raipur.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="btn btn-primary btn-sm"
              type="button"
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              type="button"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-text-col">
                <span className="brand-title" style={{ fontSize: '1.1rem' }}>RAJESH TIWARI</span>
                <span className="brand-subtitle" style={{ fontSize: '0.75rem' }}>CAR RENTAL</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-drawer-links">
              <li>
                <a href="#hero" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  Vehicle Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  Book / Enquire
                </a>
              </li>
              <li>
                <a href="#services" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
                  Contact & Location
                </a>
              </li>
            </ul>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="btn btn-primary" style={{ width: '100%' }}>
                <Phone size={16} />
                Call {BUSINESS_INFO.primaryPhoneDisplay}
              </a>
              <a
                href={`https://wa.me/917746055014?text=${encodeURIComponent(
                  'Hello Rajesh Tiwari Car Rental, I would like to book a car in Raipur.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
