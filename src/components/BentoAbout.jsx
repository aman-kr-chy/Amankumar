import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Award, 
  Clock, 
  CheckCircle, 
  Zap, 
  Workflow, 
  Compass, 
  Target 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const BentoAbout = () => {
  const processSteps = [
    { num: '01', title: 'DISCOVER & SCOPE', desc: 'Understanding core objectives, target users, and technical requirements.' },
    { num: '02', title: 'DESIGN & PROTOTYPE', desc: 'Crafting editorial wireframes, design systems, and responsive flows in Figma.' },
    { num: '03', title: 'ENGINEER & CODE', desc: 'Building high-performance full-stack architectures with clean code.' },
    { num: '04', title: 'OPTIMIZE & POLISH', desc: 'Rigorous testing, SEO audits, Lighthouse 95+ scores, and micro-interactions.' },
    { num: '05', title: 'LAUNCH & SCALE', desc: 'Production deployment with zero-downtime, analytics, and ongoing support.' }
  ];

  const pillars = [
    'VISUAL HIERARCHY',
    'RADICAL SIMPLICITY',
    'BLAZING PERFORMANCE',
    'TYPOGRAPHIC DISCIPLINE',
    'RESILIENT ARCHITECTURE',
    'ACCESSIBILITY FOR ALL'
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--canvas-bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="section-label">ABOUT & PHILOSOPHY</span>
          <h2 className="section-title-serif">
            Crafting with purpose, <em>building to scale.</em>
          </h2>
          <p className="section-subtitle">
            A blend of engineering precision and design sensibility. Here is what drives how I work.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Avatar / Profile */}
          <div className="bento-card bento-avatar-card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Large Photo at Top */}
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1',
              background: 'linear-gradient(135deg, #1a1c22 0%, #2d1f14 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img
                src="/avatar.jpg"
                alt={siteConfig.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Gradient overlay at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                pointerEvents: 'none',
              }} />
              {/* Status badge floating */}
              <div style={{
                position: 'absolute', top: '0.85rem', left: '0.85rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                padding: '0.35rem 0.75rem', borderRadius: '999px',
                fontSize: '0.75rem', fontWeight: 600, color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 0 3px rgba(16,185,129,0.25)' }} />
                Available for Work
              </div>
            </div>

            {/* Info below photo */}
            <div style={{ padding: '1.4rem 1.6rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {siteConfig.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-orange)', fontWeight: 600, marginBottom: '0.75rem' }}>
                {siteConfig.role}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                <MapPin size={14} color="#FF5522" />
                <span>{siteConfig.contact.location}</span>
              </div>

              <div style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <span className="handwritten-note" style={{ fontSize: '1.1rem' }}>
                  always building ✨
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Philosophy */}
          <div className="bento-card bento-philosophy-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Compass size={20} color="#FF5522" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  MY PHILOSOPHY
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', fontWeight: 400, lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                "I don't just build for the sake of code. I focus on solving real human problems and crafting software people genuinely love using."
              </h3>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Great software lives at the intersection of aesthetic poise, robust engineering, and strategic empathy. Every button, API response, and layout decision should serve a distinct purpose — making technology feel effortless and memorable.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)', background: '#F4F2EC', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
                <Zap size={14} color="#FF5522" /> High Velocity
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)', background: '#F4F2EC', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
                <Target size={14} color="#FF5522" /> Pixel Perfection
              </span>
            </div>
          </div>

          {/* Card 3: Design Pillars */}
          <div className="bento-card bento-pillars-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Workflow size={20} color="#FF5522" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  CORE PRINCIPLES
                </span>
              </div>

              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                The Guiding Standard
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Foundational rules that dictate every interface, API contract, and line of code that leaves my desk.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {pillars.map((pillar, idx) => (
                <span key={idx} style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.76rem', 
                  fontWeight: 600, 
                  background: '#FFFFFF', 
                  border: '1px solid rgba(0,0,0,0.08)', 
                  padding: '0.45rem 0.95rem', 
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--text-primary)'
                }}>
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Stats Card */}
          <div className="bento-card bento-stats-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Award size={20} color="#059669" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: '#065F46' }}>
                  PROVEN TRACK RECORD
                </span>
              </div>

              <div style={{ fontSize: '3.6rem', fontFamily: 'var(--font-serif)', fontWeight: 400, color: '#064E3B', lineHeight: 1 }}>
                {siteConfig.stats.projectsShipped}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#065F46', marginTop: '0.5rem' }}>
                Projects Shipped Worldwide
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid rgba(16, 185, 129, 0.2)', paddingTop: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#064E3B' }}>{siteConfig.stats.clientSatisfaction}</div>
                <div style={{ fontSize: '0.75rem', color: '#047857', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Client Satisfaction</div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#064E3B' }}>{siteConfig.stats.yearsExperience}</div>
                <div style={{ fontSize: '0.75rem', color: '#047857', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Card 5: 5-Stage Process Stepper */}
          <div className="bento-card bento-process-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-orange)' }}>
                  HOW WE WORK TOGETHER
                </span>
                <h4 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  The 5-Stage Engineering Workflow
                </h4>
              </div>
              <span className="handwritten-note">
                predictable, transparent, agile →
              </span>
            </div>

            <div className="process-stepper-track">
              {processSteps.map((step, idx) => (
                <div key={idx} className="process-step-item">
                  <div className="step-num">{step.num} // STEP</div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoAbout;
