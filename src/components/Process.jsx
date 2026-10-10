import React from 'react';
import { Target, PenTool, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Target size={32} />,
      title: "Discovery & Requirements",
      desc: "We start by understanding your business, goals, target audience, and specific project requirements to create a solid strategy."
    },
    {
      number: "02",
      icon: <PenTool size={32} />,
      title: "UI/UX Design",
      desc: "Our designers craft beautiful, intuitive wireframes and high-fidelity mockups for your approval before development begins."
    },
    {
      number: "03",
      icon: <Code size={32} />,
      title: "Development & Testing",
      desc: "We write clean, efficient code and rigorously test across devices and browsers to ensure everything works perfectly."
    },
    {
      number: "04",
      icon: <Rocket size={32} />,
      title: "Launch & Handover",
      desc: "After final approval, we deploy your website to live servers, configure domains, and hand over all necessary credentials."
    }
  ];

  return (
    <section className="bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">A proven, transparent approach to bringing your digital vision to life, on time and on budget.</p>
        </div>
        
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="process-number">{step.number}</div>
              <div className="mb-2" style={{ color: 'var(--primary)' }}>
                {step.icon}
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
