import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "The cost of a website depends entirely on its complexity, features, and the time required to build it. A simple 5-page business site will cost significantly less than a custom e-commerce platform. Contact us with your requirements for a free, accurate quote."
    },
    {
      question: "How long does development take?",
      answer: "A standard informational website typically takes 2-4 weeks from discovery to launch. More complex web applications or e-commerce sites can take 8-12 weeks. We always provide a clear timeline before starting any work."
    },
    {
      question: "Will my website work on mobile devices?",
      answer: "Absolutely. Every website we build is 100% responsive, meaning it will look and function perfectly on smartphones, tablets, and desktop computers."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes! We can take your existing website and completely overhaul its design, user experience, and codebase to bring it up to modern standards and improve its performance."
    },
    {
      question: "Can you add booking or e-commerce features?",
      answer: "Yes, we specialize in adding custom functionality like scheduling systems, secure payment gateways, user portals, and full e-commerce capabilities to new or existing sites."
    },
    {
      question: "Do you provide maintenance after launch?",
      answer: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and continues to perform optimally over time."
    },
    {
      question: "How can I start a project?",
      answer: "Simply fill out the contact form below or reach out to us via email or WhatsApp. We'll schedule a brief discovery call to discuss your goals and provide a custom proposal."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about our web development process, pricing, and services.</p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${activeIndex === idx ? 'active' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(idx)}
                aria-expanded={activeIndex === idx}
              >
                {faq.question}
                <ChevronDown className="faq-icon" size={20} />
              </button>
              <div className="faq-answer">
                <p className="pt-2 pb-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
