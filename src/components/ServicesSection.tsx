import React from 'react';
import { Plane, Compass, Navigation, Users, Sparkles, Building2 } from 'lucide-react';
import { POPULAR_ROUTES } from '../data/fleetData';

export const ServicesSection: React.FC = () => {
  const icons = [
    <Plane size={24} key="plane" />,
    <Compass size={24} key="compass" />,
    <Navigation size={24} key="navigation" />,
    <Building2 size={24} key="building" />,
    <Sparkles size={24} key="sparkles" />,
    <Users size={24} key="users" />,
  ];

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span>TRAVEL SOLUTIONS</span>
          </div>
          <h2 id="services-heading" className="section-title">SERVICES &amp; POPULAR ROUTES</h2>
          <p className="section-desc">
            Tailored car rental and chauffeur services across Raipur and throughout Chhattisgarh.
          </p>
        </div>

        <div className="routes-grid">
          {POPULAR_ROUTES.map((route, index) => (
            <article key={route.title} className="route-card">
              <div className="route-icon-box">
                {icons[index % icons.length]}
              </div>
              <h3 className="route-title">{route.title}</h3>
              <div className="route-sub">{route.subtitle}</div>
              <p className="route-desc">{route.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
