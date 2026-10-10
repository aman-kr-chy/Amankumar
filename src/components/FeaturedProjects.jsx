import React from 'react';
import { ArrowUpRight, Code2, ExternalLink, Activity, Sparkles, Terminal } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
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
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      preview: {
        title: 'NeuralFlow Orchestrator',
        command: 'agent.run_pipeline("deep-research", stream=True)',
        status: 'Active • 4 Subagents connected'
      }
    },
    {
      id: 'pulsecraft',
      title: 'PulseCraft Analytics',
      role: 'FULL-STACK LEAD',
      year: '2025',
      tagline: 'Real-time telemetry and user journey analytics for modern web applications with privacy-first event tracking.',
      stats: [
        { num: '1.2M+', label: 'Events / Day' },
        { num: '99.4%', label: 'CSAT Score' },
        { num: '14ms', label: 'Ingestion Time' }
      ],
      tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Chart.js'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      preview: {
        title: 'Live Telemetry Dashboard',
        command: 'SELECT count(*) FROM user_events WHERE status = 200;',
        status: 'Streaming 1,420 rps'
      }
    },
    {
      id: 'auramarket',
      title: 'Aura 3D Interactive',
      role: 'CREATIVE ENGINEER',
      year: '2025',
      tagline: 'Award-winning e-commerce showcase featuring real-time 3D product customization, custom shaders, and frictionless checkout.',
      stats: [
        { num: '3.8x', label: 'Conversion Lift' },
        { num: '60 FPS', label: 'Canvas Rendering' },
        { num: '98/100', label: 'Lighthouse Score' }
      ],
      tech: ['Three.js', 'React', 'WebGL', 'GLSL', 'Stripe', 'Tailwind'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      preview: {
        title: 'WebGL Viewport',
        command: 'renderScene(camera, controls, bloomPass);',
        status: 'Shader pipeline optimized'
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
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                    <span>Visit Live Project</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project-outline">
                    <Code2 size={16} />
                    <span>Source Code</span>
                  </a>
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
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-project-outline"
            style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
          >
            <Code2 size={18} />
            <span>Explore all repositories & open-source on GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
