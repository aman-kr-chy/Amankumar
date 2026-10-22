import React from 'react';
import { ArrowUpRight, Activity, Terminal, Lock, Clock } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'bihms',
      title: 'BIHMS — College Management System',
      role: 'LEAD FULL-STACK ARCHITECT',
      year: '2026',
      tagline: 'Comprehensive educational portal & college management system for Bihar Institute of Health & Management Studies — powering student admissions, course syllabus, DRCC verification, and campus operations.',
      stats: [
        { num: '10K+', label: 'Students Enrolled' },
        { num: '99.9%', label: 'System Uptime' },
        { num: '<180ms', label: 'Response Latency' }
      ],
      tech: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
      liveUrl: 'https://bihms.in',
      isClosed: false,
      image: '/bihms-preview.png',
      preview: {
        title: 'bihms.in :: College Portal',
        command: 'system.sync_admissions(portal="bihms.in", status="verified")',
        status: 'Live on Production • bihms.in'
      }
    },
    {
      id: 'fitplanet',
      title: 'Fit Planet — Gym & Fitness Training Web App',
      role: 'FULL-STACK LEAD & UI DESIGNER',
      year: '2026',
      tagline: 'High-energy fitness club platform featuring membership plans, expert coach directories, modern training facility showcases, and seamless onboarding flows.',
      stats: [
        { num: '2.5k+', label: 'Active Members' },
        { num: '99.9%', label: 'Platform Uptime' },
        { num: '<150ms', label: 'Load Latency' }
      ],
      tech: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Node.js'],
      liveUrl: 'https://gym01-atn9.vercel.app/',
      isClosed: false,
      image: '/gym-preview.png',
      preview: {
        title: 'fitplanet :: Training Ground',
        command: 'member.joinPlan(tier="elite-athlete", gym="FitPlanet")',
        status: 'Live on Vercel • gym01-atn9.vercel.app'
      }
    },
    {
      id: 'aurum-restaurant',
      title: 'AURUM — Fine Dining & Table Reservation System',
      role: 'FULL-STACK LEAD & UI ARCHITECT',
      year: '2026',
      tagline: 'High-conversion digital presence for a Michelin-starred fine dining establishment, featuring real-time table reservations, interactive multi-course menu, and private dining booking.',
      stats: [
        { num: '+140%', label: 'Online Bookings' },
        { num: '4.9 ★', label: 'Guest Rating' },
        { num: '<200ms', label: 'Instant Confirmation' }
      ],
      tech: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Node.js'],
      liveUrl: null,
      isClosed: true,
      closedLabel: 'Link Closed (Private Client)',
      image: '/restaurant-preview.jpg',
      preview: {
        title: 'aurum.com :: Guest Concierge',
        command: 'concierge.bookTable(guests=2, slot="19:30", confirmed=True)',
        status: 'Client Deployment • Private Access'
      }
    },
    {
      id: 'neuralflow',
      title: 'NeuralFlow Studio',
      role: 'FOUNDER & ARCHITECT',
      year: '2026',
      tagline: 'Autonomous AI workspace & multi-agent pipeline engine designed for research teams and high-velocity creators.',
      stats: [
        { num: '45k+', label: 'Monthly Runs' },
        { num: '99.9%', label: 'Uptime' },
        { num: '<250ms', label: 'Inference Latency' }
      ],
      tech: ['React 19', 'Next.js', 'Python', 'FastAPI', 'OpenAI', 'Tailwind'],
      liveUrl: null,
      isClosed: true,
      closedLabel: 'Coming Soon',
      preview: {
        title: 'NeuralFlow Orchestrator',
        command: 'agent.run_pipeline("deep-research", stream=True)',
        status: 'Active • 4 Subagents connected'
      }
    }
  ];

  return (
    <section id="projects" className="dark-section-wrapper">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <span className="section-label dark-label">PORTFOLIO</span>
          <h2 className="section-title-serif dark-text">
            Products & Startups <em>I've Built.</em>
          </h2>
          <p className="section-subtitle dark-sub">
            Real software shipped to production, combining technical depth, thoughtful interfaces, and robust systems architecture.
          </p>
        </div>

        <div className="projects-showcase-list">
          {projects.map((proj) => (
            <div key={proj.id} className="featured-project-card">
              <div className="project-details">
                <div className="project-meta-pills">
                  <span className="meta-pill badge-role">{proj.role}</span>
                  <span className="meta-pill badge-year">{proj.year}</span>
                </div>

                <h3 className="project-name">{proj.title}</h3>
                <p className="project-tagline">{proj.tagline}</p>

                <div className="project-stats-grid">
                  {proj.stats.map((st, sIdx) => (
                    <div key={sIdx} className="stat-item">
                      <div className="stat-num">{st.num}</div>
                      <div className="stat-label">{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className="card-tags" style={{ marginBottom: '0.5rem' }}>
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="card-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {proj.isClosed || !proj.liveUrl ? (
                    <button
                      disabled
                      className="btn-project-primary"
                      style={{
                        opacity: 0.65,
                        cursor: 'not-allowed',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255, 255, 255, 0.12)',
                        color: '#9CA3AF',
                        pointerEvents: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                      title="This project link is currently closed / private"
                    >
                      {proj.closedLabel === 'Coming Soon' ? <Clock size={15} /> : <Lock size={15} />}
                      <span>{proj.closedLabel || 'Coming Soon'}</span>
                    </button>
                  ) : (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                      <span>Visit Live Project</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Interactive Mockup Visual */}
              <div className="project-preview-mockup">
                <div className="mockup-header-bar">
                  <span className="mockup-dot" style={{ background: '#FF5F56' }}></span>
                  <span className="mockup-dot" style={{ background: '#FFBD2E' }}></span>
                  <span className="mockup-dot" style={{ background: '#27C93F' }}></span>
                  <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#6B7280' }}>
                    {proj.preview.title}
                  </span>
                </div>

                {proj.image ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '260px', overflow: 'hidden' }}>
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: 'top center',
                        display: 'block'
                      }} 
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '0.75rem 1rem',
                      background: 'linear-gradient(to top, rgba(11,12,16,0.92) 0%, rgba(11,12,16,0.5) 70%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
                        <Activity size={14} color="#10B981" />
                        <span style={{ color: '#E5E7EB', fontWeight: 600 }}>{proj.preview.status}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FF774D' }}>
                        SSL Encrypted 🔒
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mockup-screen-area">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Terminal size={16} color="#FF5522" />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#9CA3AF' }}>
                        terminal :: production-env
                      </span>
                    </div>

                    <div style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.88rem', 
                      color: '#34D399', 
                      background: '#0B0C10', 
                      padding: '0.85rem 1rem', 
                      borderRadius: '8px', 
                      marginBottom: '1rem',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}>
                      $ {proj.preview.command}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#9CA3AF' }}>
                        <Activity size={14} color="#10B981" />
                        <span>{proj.preview.status}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FF774D' }}>
                        SSL Encrypted 🔒
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
