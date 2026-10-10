import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      title: "Starter Website",
      price: "Custom",
      subtitle: "Perfect for small businesses starting out.",
      features: [
        { name: "Up to 5 Pages", included: true },
        { name: "Responsive Mobile Design", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Contact Form Integration", included: true },
        { name: "Custom Animations", included: false },
        { name: "E-commerce Functionality", included: false }
      ]
    },
    {
      title: "Business Website",
      price: "Custom",
      subtitle: "Ideal for growing companies needing more power.",
      featured: true,
      features: [
        { name: "Up to 10 Pages", included: true },
        { name: "Responsive Mobile Design", included: true },
        { name: "Advanced SEO & Analytics", included: true },
        { name: "CMS Integration", included: true },
        { name: "Custom Animations", included: true },
        { name: "E-commerce Functionality", included: false }
      ]
    },
    {
      title: "Custom Web App",
      price: "Custom",
      subtitle: "For complex platforms and specific requirements.",
      features: [
        { name: "Unlimited Pages", included: true },
        { name: "Responsive Mobile Design", included: true },
        { name: "Advanced SEO & Analytics", included: true },
        { name: "Custom Backend Logic", included: true },
        { name: "Custom Animations", included: true },
        { name: "E-commerce Functionality", included: true }
      ]
    }
  ];

  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">We offer scalable solutions tailored to your needs. All prices depend on final project scope and requirements.</p>
        </div>
        
        <div className="pricing-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`pricing-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && <div className="pricing-badge">Popular</div>}
              
              <h3 className="pricing-title">{pkg.title}</h3>
              <div className="pricing-price">
                {pkg.price} <span>/ project</span>
              </div>
              <p className="text-light mb-3">{pkg.subtitle}</p>
              
              <ul className="pricing-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    {feature.included ? <Check size={20} className="feature-check" /> : <X size={20} className="feature-x" />}
                    <span style={{ color: feature.included ? 'inherit' : 'var(--text-light)' }}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                Request a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
