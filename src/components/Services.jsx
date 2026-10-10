import React from 'react';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We deliver custom digital solutions tailored to the unique needs of your industry.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <a href="#contact" className="service-link">
                  Explore Service <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
