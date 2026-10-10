import React from 'react';
import { MonitorSmartphone, Zap, Search, Headphones } from 'lucide-react';

const TrustValue = () => {
  const values = [
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Modern & Responsive",
      desc: "Websites that look perfect on any device, from mobile phones to large desktop screens."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Loading",
      desc: "Optimized for speed to ensure a smooth user experience and reduce bounce rates."
    },
    {
      icon: <Search size={32} />,
      title: "SEO Friendly",
      desc: "Built with search engine best practices so your customers can find you easily."
    },
    {
      icon: <Headphones size={32} />,
      title: "Reliable Support",
      desc: "Clear communication and dedicated support throughout your project and beyond."
    }
  ];

  return (
    <section className="trust-value">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle">We don't just build websites; we create digital experiences that deliver real value to your business.</p>
        </div>
        
        <div className="value-grid">
          {values.map((val, idx) => (
            <div key={idx} className="value-card">
              <div className="value-icon">
                {val.icon}
              </div>
              <h3 className="mb-2">{val.title}</h3>
              <p className="text-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustValue;
