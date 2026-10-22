import React, { useState, useEffect, useRef } from 'react';

const PHASES = [
  {
    phase: 'PHASE 1',
    label: 'PLANNING',
    desc: 'Client Meeting\n& Requirements',
    color: '#E53935',
    shadowColor: 'rgba(229,57,53,0.45)',
  },
  {
    phase: 'PHASE 2',
    label: 'DESIGN',
    desc: 'Wireframe Layout\n& Style Guide',
    color: '#F59E0B',
    shadowColor: 'rgba(245,158,11,0.45)',
  },
  {
    phase: 'PHASE 3',
    label: 'DEVELOPMENT',
    desc: 'Coding\nLayout & More',
    color: '#2563EB',
    shadowColor: 'rgba(37,99,235,0.45)',
  },
  {
    phase: 'PHASE 4',
    label: 'LAUNCH',
    desc: 'Design Quality\nTesting',
    color: '#16A34A',
    shadowColor: 'rgba(22,163,74,0.45)',
  },
  {
    phase: 'PHASE 5',
    label: 'MAINTENANCE',
    desc: 'Ongoing Support\n& Updates',
    color: '#15803D',
    shadowColor: 'rgba(21,128,61,0.45)',
  },
];

const ProcessSection = () => {
  const [revealed, setRevealed] = useState([]);
  const [activePhase, setActivePhase] = useState(null);
  const sectionRef = useRef(null);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRevealed.current) {
          hasRevealed.current = true;
          PHASES.forEach((_, i) => {
            setTimeout(() => {
              setRevealed(prev => [...prev, i]);
            }, i * 280);
          });
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="phases-section">
      <div className="container">

        {/* Header */}
        <div className="phases-header">
          <span className="section-label">OUR PROCESS</span>
          <h2 className="phases-title">
            Website Development <span className="phases-accent">Lifecycle</span>
          </h2>
          <p className="phases-subtitle">
            A proven phase-by-phase process from idea to a live, high-converting product.
          </p>
        </div>

        {/* Circles row */}
        <div className="phases-row">
          {PHASES.map((p, idx) => {
            const isVisible = revealed.includes(idx);
            const isActive = activePhase === idx;
            return (
              <div
                key={idx}
                className={`phase-item${isVisible ? ' phase-item--visible' : ''}`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                {/* Phase label above */}
                <div className="phase-label-wrap">
                  <span className="phase-bracket phase-bracket--left" style={{ borderColor: p.color }}>┌</span>
                  <span className="phase-label-text" style={{ color: p.color }}>{p.phase}</span>
                  <span className="phase-bracket phase-bracket--right" style={{ borderColor: p.color }}>┐</span>
                </div>

                {/* Circle */}
                <div
                  className={`phase-circle${isActive ? ' phase-circle--active' : ''}`}
                  style={{
                    background: p.color,
                    boxShadow: isActive ? `0 16px 48px ${p.shadowColor}` : `0 8px 28px ${p.shadowColor}`,
                  }}
                  onMouseEnter={() => setActivePhase(idx)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <span className="phase-circle-text">{p.label}</span>
                </div>

                {/* Description below */}
                <div className="phase-desc">
                  {p.desc.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
