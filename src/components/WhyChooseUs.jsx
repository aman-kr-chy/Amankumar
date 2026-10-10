import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    "Business-focused development tailored to your goals.",
    "Mobile-first design for perfect viewing on all devices.",
    "Clean, efficient, and maintainable codebase.",
    "Clear and transparent communication throughout.",
    "Custom functionality designed for your specific needs.",
    "Ongoing support and maintenance after delivery."
  ];

  return (
    <section>
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Why Choose Us</h2>
            <p className="mb-3" style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
              We don't just write code; we build digital solutions that solve real business problems. Our approach combines technical excellence with a deep understanding of user experience.
            </p>
            
            <ul style={{ display: 'grid', gap: '1rem' }}>
              {reasons.map((reason, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--secondary)' }}>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-image-wrap">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team Collaboration" 
              className="about-img"
              style={{ transform: 'perspective(1000px) rotateY(5deg)', transition: 'var(--transition)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
