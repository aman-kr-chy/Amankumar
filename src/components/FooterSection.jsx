import React, { useState, useEffect, useRef } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const PHASES = [
  { phase: 'PHASE 1', label: 'PLANNING',     desc: 'Client Meeting\n& Requirements', color: '#E53935', shadow: 'rgba(229,57,53,0.4)'   },
  { phase: 'PHASE 2', label: 'DESIGN',        desc: 'Wireframe Layout\n& Style Guide',  color: '#F59E0B', shadow: 'rgba(245,158,11,0.4)' },
  { phase: 'PHASE 3', label: 'DEVELOPMENT',   desc: 'Coding\nLayout & More',            color: '#2563EB', shadow: 'rgba(37,99,235,0.4)'   },
  { phase: 'PHASE 4', label: 'LAUNCH',        desc: 'Design Quality\nTesting',          color: '#16A34A', shadow: 'rgba(22,163,74,0.4)'   },
  { phase: 'PHASE 5', label: 'MAINTENANCE',   desc: 'Ongoing Support\n& Updates',       color: '#15803D', shadow: 'rgba(21,128,61,0.4)'   },
];

const FooterSection = () => {
  const verbs = ['Design', 'Build', 'Shape', 'Launch', 'Scale'];
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState([]);
  const [activePhase, setActivePhase] = useState(null);
  const circlesRef = useRef(null);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerbIndex((prev) => (prev + 1) % verbs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [verbs.length]);

  // Trigger one-by-one reveal on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRevealed.current) {
          hasRevealed.current = true;
          PHASES.forEach((_, i) => {
            setTimeout(() => setRevealed(prev => [...prev, i]), i * 260);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (circlesRef.current) observer.observe(circlesRef.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="footer" className="footer-cta-wrapper">
      <div className="container">

        {/* ── HOW WE WORK — Overlapping Circles ── */}
        <div ref={circlesRef} className="footer-phases-block">
          <div className="footer-phases-header">
            <div>
              <span className="ps-eyebrow">HOW WE WORK TOGETHER</span>
              <h2 className="footer-workflow-title">
                The <span style={{ color: 'var(--accent-orange)' }}>5</span>‑Stage Engineering Workflow
              </h2>
            </div>
            <p className="footer-workflow-tagline">predictable, transparent, agile →</p>
          </div>

          {/* Circles row */}
          <div className="footer-phases-row">
            {PHASES.map((p, idx) => {
              const isVisible = revealed.includes(idx);
              const isActive = activePhase === idx;
              return (
                <div
                  key={idx}
                  className={`fphase-item${isVisible ? ' fphase-item--visible' : ''}`}
                  style={{ '--fphase-z': PHASES.length - idx }}
                >
                  {/* Phase label */}
                  <div className="fphase-label" style={{ color: p.color }}>
                    <span className="fphase-bracket" style={{ borderColor: p.color }}>┌</span>
                    {p.phase}
                    <span className="fphase-bracket" style={{ borderColor: p.color }}>┐</span>
                  </div>

                  {/* Circle */}
                  <div
                    className={`fphase-circle${isActive ? ' fphase-circle--active' : ''}`}
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${p.color}dd, ${p.color})`,
                      boxShadow: isActive
                        ? `0 20px 50px ${p.shadow}, inset 0 -4px 20px rgba(0,0,0,0.2)`
                        : `0 8px 24px ${p.shadow}, inset 0 -4px 12px rgba(0,0,0,0.15)`,
                    }}
                    onMouseEnter={() => setActivePhase(idx)}
                    onMouseLeave={() => setActivePhase(null)}
                  >
                    <span className="fphase-circle-text">{p.label}</span>
                  </div>

                  {/* Description */}
                  <p className="fphase-desc">
                    {p.desc.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <h2 className="footer-hero-headline">
            Let's <span className="rotating-verb">{verbs[currentVerbIndex]}</span> incredible work together.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--dark-text-muted)', margin: '0 auto 3rem', maxWidth: '640px' }}>
            Have a project in mind, an exciting role, or just want to discuss software and AI? My inbox is always open.
          </p>
          <div className="footer-action-pills">
            <a href={`mailto:${siteConfig.contact.email}`} className="footer-main-btn">
              <Mail size={18} /><span>Send Me an Email</span>
            </a>
            <button onClick={copyEmail} className="footer-copy-btn">
              {copied ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-copy-btn">
              <span>Connect on LinkedIn</span><ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom-bar">
          <div className="footer-brand-inline">
            <img src="/aw-logo.png" alt="AmanWebsiteBuilder" className="footer-inline-logo" />
            <span>© {new Date().getFullYear()} <strong style={{ background: 'linear-gradient(110deg,#0066ff,#00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AmanWebsiteBuilder</strong>. Designed &amp; Engineered with precision.</span>
          </div>
          <div className="footer-social-links">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="footer-social-link"><span>GitHub</span><ArrowUpRight size={14} /></a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link"><span>LinkedIn</span><ArrowUpRight size={14} /></a>
            <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="footer-social-link"><span>Twitter / X</span><ArrowUpRight size={14} /></a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link"><span>Instagram</span><ArrowUpRight size={14} /></a>
            <button onClick={scrollToTop} className="footer-social-link" style={{ cursor: 'pointer' }} title="Back to top">
              <span>Top</span><ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
