import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/fleetData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section" aria-labelledby="faqs-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <HelpCircle size={15} />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 id="faqs-heading" className="section-title">COMMON QUESTIONS</h2>
          <p className="section-desc">
            Find answers to commonly asked questions about renting a car with Rajesh Tiwari Car Rental in Raipur.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--primary-orange)" /> : <ChevronDown size={20} />}
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
