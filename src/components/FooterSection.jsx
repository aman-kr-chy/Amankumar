import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const FooterSection = () => {
  const verbs = ['Design', 'Build', 'Shape', 'Launch', 'Scale'];
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerbIndex((prev) => (prev + 1) % verbs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [verbs.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer-cta-wrapper">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <h2 className="footer-hero-headline">
            Let's <span className="rotating-verb">{verbs[currentVerbIndex]}</span> incredible work together.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--dark-text-muted)', marginBottom: '3rem', maxWidth: '640px', margin: '0 auto 3rem' }}>
            Have a project in mind, an exciting role, or just want to discuss software and AI? My inbox is always open.
          </p>

          <div className="footer-action-pills">
            <a href={`mailto:${siteConfig.contact.email}`} className="footer-main-btn">
              <Mail size={18} />
              <span>Send Me an Email</span>
            </a>

            <button onClick={copyEmail} className="footer-copy-btn">
              {copied ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>

            <a 
              href={siteConfig.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-copy-btn"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-brand-inline">
            <img src="/aw-logo.png" alt="AmanWebsiteBuilder" className="footer-inline-logo" />
            <span>© {new Date().getFullYear()} <strong style={{ background: 'linear-gradient(110deg,#0066ff,#00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AmanWebsiteBuilder</strong>. Designed &amp; Engineered with precision.</span>
          </div>

          <div className="footer-social-links">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
            <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>Twitter / X</span>
              <ArrowUpRight size={14} />
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>Instagram</span>
              <ArrowUpRight size={14} />
            </a>
            <button onClick={scrollToTop} className="footer-social-link" style={{ cursor: 'pointer' }} title="Back to top">
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
