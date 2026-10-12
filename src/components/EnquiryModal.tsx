import React, { useState } from 'react';
import { X, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import type { Vehicle } from '../types';
import { vehicles, BUSINESS_INFO } from '../data/fleetData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: Vehicle | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedVehicle,
}) => {
  if (!isOpen) return null;

  const currentVehicle = selectedVehicle || vehicles[0];
  const [vehicleId, setVehicleId] = useState(currentVehicle.id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const activeVehicle = vehicles.find((v) => v.id === vehicleId) || currentVehicle;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert('Please enter your phone number to receive booking confirmation.');
      return;
    }

    const message = [
      `*Vehicle Booking Enquiry - Rajesh Tiwari Car Rental*`,
      `----------------------------------------`,
      `*Vehicle:* ${activeVehicle.name} (${activeVehicle.category})`,
      `*Name:* ${name || 'Customer'}`,
      `*Phone:* ${phone}`,
      `*Date:* ${date || 'Flexible / ASAP'}`,
      `*Pickup Location:* Raipur, Chhattisgarh`,
      destination ? `*Destination:* ${destination}` : '',
      `----------------------------------------`,
      `Please provide the rental rate and availability details.`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/918878999911?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Vehicle Rental Enquiry</h3>
            <span style={{ fontSize: '0.84rem', color: 'var(--charcoal-muted)' }}>
              Rajesh Tiwari Car Rental • Raipur (24 X 7)
            </span>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Active vehicle preview banner */}
          <div className="modal-car-preview">
            <img
              src={activeVehicle.image}
              alt={activeVehicle.name}
              className="modal-car-img"
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--charcoal)' }}>
                {activeVehicle.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary-orange)', fontWeight: 700 }}>
                {activeVehicle.category}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#666', marginTop: '2px' }}>
                Contact for Rates &amp; Availability
              </div>
            </div>
          </div>

          {isSuccess && (
            <div className="toast-notice">
              <CheckCircle2 size={18} />
              <span>Enquiry generated! Our Raipur team will contact you shortly.</span>
            </div>
          )}

          <form onSubmit={handleWhatsAppSend}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label" htmlFor="modal-vehicle-select">Vehicle Selection</label>
                <select
                  id="modal-vehicle-select"
                  className="form-control"
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="modal-name">Your Name</label>
                <input
                  type="text"
                  id="modal-name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label" htmlFor="modal-phone">Contact Number *</label>
                <input
                  type="tel"
                  id="modal-phone"
                  required
                  className="form-control"
                  placeholder="e.g. +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label" htmlFor="modal-date">Travel Date</label>
                  <input
                    type="date"
                    id="modal-date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="modal-dest">Destination</label>
                  <input
                    type="text"
                    id="modal-dest"
                    className="form-control"
                    placeholder="Raipur Local / Outstation"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ flex: 1 }}
                >
                  <MessageSquare size={16} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <Phone size={16} />
                  <span>Call {BUSINESS_INFO.primaryPhoneDisplay}</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
