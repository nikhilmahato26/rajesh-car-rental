import { useState } from 'react';
import { vehicles, BUSINESS_INFO } from '../data/fleetData';
import type { BookingFormData } from '../types';
import { Phone, MessageSquare, Calendar, Clock, CheckCircle2, Car, Shield, Send } from 'lucide-react';

interface BookingSectionProps {
  initialVehicleId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialVehicleId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    vehicleId: initialVehicleId || 'innova-crysta',
    serviceType: 'Outstation Trip',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: 'Raipur, Chhattisgarh',
    dropLocation: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectedVehicleObj = vehicles.find((v) => v.id === formData.vehicleId) || vehicles[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      alert('Please enter your phone number so we can confirm your booking.');
      return;
    }

    const messageLines = [
      `*New Booking Enquiry - Rajesh Tiwari Car Rental*`,
      `----------------------------------------`,
      `*Name:* ${formData.fullName || 'Customer'}`,
      `*Phone:* ${formData.phone}`,
      `*Vehicle:* ${selectedVehicleObj.name} (${selectedVehicleObj.category})`,
      `*Service Type:* ${formData.serviceType}`,
      `*Pickup Date:* ${formData.pickupDate || 'Flexible / ASAP'}`,
      `*Pickup Time:* ${formData.pickupTime || 'Flexible'}`,
      `*Pickup Location:* ${formData.pickupLocation}`,
      formData.dropLocation ? `*Destination:* ${formData.dropLocation}` : '',
      formData.notes ? `*Special Request:* ${formData.notes}` : '',
      `----------------------------------------`,
      `_Sent from website booking enquiry form_`,
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/917746055014?text=${encodeURIComponent(fullMessage)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      alert('Please enter your contact phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section booking-section" aria-labelledby="booking-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Calendar size={15} />
            <span>RENTAL ENQUIRIES</span>
          </div>
          <h2 id="booking-heading" className="section-title">BOOK YOUR VEHICLE</h2>
          <p className="section-desc">
            Fill in your trip requirements or connect instantly with Rajesh Tiwari Car Rental in Raipur for fast rate quotes and vehicle confirmation.
          </p>
        </div>

        <div className="booking-wrapper">
          {/* Info Side Column */}
          <div className="booking-info-pane">
            <div className="booking-info-top">
              <h3>Fast, Hassle-Free Car Rental in Raipur</h3>
              <p>
                Whether it is an airport pickup, city commute, family outstation trip, or group tour, our fleet is ready 24×7 to ensure your journey is safe and comfortable.
              </p>

              <div className="booking-feature-list">
                <div className="booking-feature-item">
                  <div className="booking-feature-icon">
                    <Clock size={18} />
                  </div>
                  <div className="booking-feature-text">
                    <h4>24 X 7 Booking Assistance</h4>
                    <p>Round-the-clock support as stated on our business poster.</p>
                  </div>
                </div>

                <div className="booking-feature-item">
                  <div className="booking-feature-icon">
                    <Car size={18} />
                  </div>
                  <div className="booking-feature-text">
                    <h4>5 Fleet Options</h4>
                    <p>Dzire, Ertiga, Innova Crysta, Force Urbania &amp; Tempo Traveller.</p>
                  </div>
                </div>

                <div className="booking-feature-item">
                  <div className="booking-feature-icon">
                    <Shield size={18} />
                  </div>
                  <div className="booking-feature-text">
                    <h4>Local &amp; Outstation</h4>
                    <p>Serving Raipur, Bilaspur, Durg, Bastar, and beyond.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-quick-call">
              <div>
                <span style={{ fontSize: '0.78rem', color: '#BBB', display: 'block' }}>Prefer to speak directly?</span>
                <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>{BUSINESS_INFO.primaryPhoneDisplay}</strong>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="btn btn-primary btn-sm"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Form Side Column */}
          <div className="booking-form-pane">
            {submitted && (
              <div className="toast-notice">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Thank you! Your enquiry has been initiated.</strong>
                  <div style={{ fontSize: '0.84rem' }}>
                    Our representative will get in touch with you shortly, or feel free to call us at {BUSINESS_INFO.primaryPhoneDisplay}.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit}>
              <div className="form-grid">
                {/* Full Name */}
                <div>
                  <label className="form-label" htmlFor="booking-name">Your Full Name</label>
                  <input
                    type="text"
                    id="booking-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Verma"
                    className="form-control"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="form-label" htmlFor="booking-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="form-control"
                  />
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="form-label" htmlFor="booking-vehicle">Select Vehicle *</label>
                  <select
                    id="booking-vehicle"
                    name="vehicleId"
                    value={formData.vehicleId}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Travel Type */}
                <div>
                  <label className="form-label" htmlFor="booking-service">Trip Type</label>
                  <select
                    id="booking-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="Outstation Trip">Outstation Trip (Across Chhattisgarh)</option>
                    <option value="Raipur Local City Ride">Raipur Local City Ride</option>
                    <option value="Raipur Airport Transfer">Airport Transfer (Swami Vivekananda Airport)</option>
                    <option value="Wedding / Event Transit">Wedding / Event Transit</option>
                    <option value="Corporate / Group Travel">Corporate / Group Travel</option>
                  </select>
                </div>

                {/* Pickup Date */}
                <div>
                  <label className="form-label" htmlFor="booking-date">Pickup Date</label>
                  <input
                    type="date"
                    id="booking-date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                {/* Pickup Time */}
                <div>
                  <label className="form-label" htmlFor="booking-time">Approx. Time</label>
                  <input
                    type="time"
                    id="booking-time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="form-label" htmlFor="booking-pickup">Pickup Address / Area</label>
                  <input
                    type="text"
                    id="booking-pickup"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. Vidhan Sabha Road, Raipur"
                    className="form-control"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="form-label" htmlFor="booking-destination">Destination / Drop Location</label>
                  <input
                    type="text"
                    id="booking-destination"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. Bilaspur / Bhilai / Raipur Airport"
                    className="form-control"
                  />
                </div>

                {/* Notes */}
                <div className="form-group-full">
                  <label className="form-label" htmlFor="booking-notes">Additional Trip Details (Optional)</label>
                  <textarea
                    id="booking-notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Number of passengers, luggage, multi-day itinerary..."
                    className="form-control"
                  />
                </div>
              </div>

              {/* Form Buttons */}
              <div className="form-buttons-row">
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  title="Send formatted booking enquiry to WhatsApp"
                >
                  <MessageSquare size={18} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCallbackSubmit}
                  className="btn btn-outline-charcoal"
                >
                  <Send size={16} />
                  <span>Request Callback</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
