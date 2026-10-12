import React, { useState } from 'react';
import { vehicles } from '../data/fleetData';
import type { Vehicle } from '../types';
import { VehicleCard } from './VehicleCard';
import { Car } from 'lucide-react';

interface FleetSectionProps {
  onEnquireVehicle: (vehicle: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onEnquireVehicle }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Sedan', 'Family Vehicle', 'Premium MPV', 'Group Travel'];

  const filteredVehicles = selectedFilter === 'All'
    ? vehicles
    : vehicles.filter((v) => v.category === selectedFilter);

  return (
    <section id="fleet" className="section section-bg-light" aria-labelledby="fleet-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Car size={15} />
            <span>OUR VEHICLE FLEET</span>
          </div>
          <h2 id="fleet-heading" className="section-title">CHOOSE YOUR RIDE</h2>
          <p className="section-desc">
            Explore the available vehicles and contact us for rental rates, availability, and booking details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="fleet-tabs" role="tablist" aria-label="Vehicle Categories">
          {categories.map((cat) => {
            const count = cat === 'All'
              ? vehicles.length
              : vehicles.filter((v) => v.category === cat).length;

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedFilter === cat}
                className={`fleet-tab-btn ${selectedFilter === cat ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat)}
                type="button"
              >
                <span>{cat}</span>
                <span className="fleet-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="fleet-grid">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onEnquire={onEnquireVehicle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
