import React from 'react';
import { Phone, MessageSquare, Calendar, Car } from 'lucide-react';
import type { Vehicle } from '../types';
import { BUSINESS_INFO } from '../data/fleetData';

interface VehicleCardProps {
  vehicle: Vehicle;
  onEnquire: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onEnquire }) => {
  const whatsappUrl = `https://wa.me/917746055014?text=${encodeURIComponent(
    `Hello Rajesh Tiwari Car Rental, I would like to enquire about the ${vehicle.name} (${vehicle.category}) for rental in Raipur.`
  )}`;

  return (
    <article className="vehicle-card" id={`vehicle-${vehicle.id}`}>
      {/* Vehicle Image Container */}
      <div className="vehicle-image-wrapper">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} - ${vehicle.category} rental in Raipur, Chhattisgarh`}
          className="vehicle-img"
          loading="lazy"
          width={400}
          height={300}
        />
        <div className="vehicle-category-badge">{vehicle.category}</div>
        <div className="vehicle-status-badge">Raipur Fleet</div>
      </div>

      {/* Vehicle Card Body */}
      <div className="vehicle-card-body">
        <h3 className="vehicle-name">{vehicle.name}</h3>
        <div className="vehicle-category-sub">
          <Car size={15} />
          <span>{vehicle.category}</span>
        </div>

        <p className="vehicle-desc">{vehicle.description}</p>

        {/* Required label: Contact for Rates & Availability */}
        <div className="vehicle-rates-label-box">
          <span className="vehicle-rates-label">Contact for Rates &amp; Availability</span>
          <span className="vehicle-247-tag">24×7</span>
        </div>

        {/* Action Buttons */}
        <div className="vehicle-actions-row">
          <button
            onClick={() => onEnquire(vehicle)}
            className="btn btn-primary"
            type="button"
            aria-label={`Enquire about ${vehicle.name}`}
          >
            <Calendar size={15} />
            <span>Enquire Now</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="btn btn-outline-charcoal"
            aria-label={`Call to book ${vehicle.name}`}
          >
            <Phone size={15} />
            <span>Call Now</span>
          </a>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp vehicle-whatsapp-btn"
          aria-label={`WhatsApp enquiry for ${vehicle.name}`}
        >
          <MessageSquare size={16} />
          <span>WhatsApp Enquiry</span>
        </a>
      </div>
    </article>
  );
};
