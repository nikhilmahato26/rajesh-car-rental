import React from 'react';
import { Clock, ShieldCheck, UserCheck, MessageSquare, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Clock size={28} />,
      title: '24 X 7 Booking Assistance',
      desc: 'As highlighted on our poster, our contact lines are open round-the-clock to manage your planned or urgent travel needs.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Well-Maintained Fleet',
      desc: 'Clean, sanitized, and regularly serviced Dzire, Ertiga, Innova Crysta, Urbania, and Tempo Travellers.',
    },
    {
      icon: <UserCheck size={28} />,
      title: 'Experienced Drivers',
      desc: 'Courteous chauffeurs with deep knowledge of Raipur city routes and Chhattisgarh state highways.',
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'Direct WhatsApp Booking',
      desc: 'Skip long sign-up forms. Connect directly on WhatsApp with our team to discuss dates, routes, and custom rates.',
    },
  ];

  return (
    <section id="why-us" className="section section-bg-light" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Award size={15} />
            <span>THE RAJESH TIWARI PROMISE</span>
          </div>
          <h2 id="why-heading" className="section-title">WHY RENT WITH US</h2>
          <p className="section-desc">
            We focus on dependable service, comfortable vehicles, and clear communication for every journey you take.
          </p>
        </div>

        <div className="why-grid">
          {points.map((pt) => (
            <div key={pt.title} className="why-card">
              <div className="why-icon">{pt.icon}</div>
              <h3 className="why-card-title">{pt.title}</h3>
              <p className="why-card-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
