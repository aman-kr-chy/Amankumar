import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const faqs = [
    {
      q: "What kind of projects do you build?",
      a: "I build end-to-end web applications, AI-integrated SaaS products, interactive landing pages, custom digital tools, and scalable backend APIs. Whether you need a 0-to-1 prototype or a high-performance production redesign, I handle design through to deployment."
    },
    {
      q: "Are you available for contract, freelance, or full-time roles?",
      a: "Yes! I am currently available for select freelance contracts, high-impact consulting, and exciting full-time opportunities with forward-thinking teams building ambitious technology."
    },
    {
      q: "How long does a typical project take from idea to launch?",
      a: "A standard high-converting landing page or web experience typically takes 1 to 2 weeks. A comprehensive full-stack MVP or custom AI SaaS platform typically ranges from 3 to 6 weeks, depending on complexity and third-party integrations."
    },
    {
      q: "Do you collaborate with early-stage founders?",
      a: "Absolutely. I love working with founders to transform rough ideas into polished, investor-ready MVPs that validate product-market fit quickly without compromising on code quality or aesthetics."
    },
    {
      q: "What is your development stack and approach to performance?",
      a: "My core stack centers around React 19, Next.js, Node.js, TypeScript, Python, and PostgreSQL/MongoDB. I enforce strict performance standards: sub-second page loads, Lighthouse scores above 95, semantic HTML, and fluid 60fps animations."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section" style={{ background: 'var(--canvas-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title-serif">
            Frequently Asked <em>Questions.</em>
          </h2>
          <p className="section-subtitle">
            Answers to common queries regarding availability, capabilities, workflows, and collaboration.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-trigger" 
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className="faq-icon">
                    <Plus size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-body">
                    <p>{faq.a}</p>
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

export default FAQSection;
