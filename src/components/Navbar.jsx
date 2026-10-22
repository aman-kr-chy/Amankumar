import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Navbar = () => {
  const [imgFailed, setImgFailed] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleLogoClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-dock-wrapper">
      <nav className="navbar-dock" aria-label="Main Navigation">

        {/* Brand Logo - Left Side */}
        <div
          className={`nav-brand-logo${logoHovered ? ' nav-brand-logo--hovered' : ''}`}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          aria-label="Go to top"
        >
          {ripples.map(r => (
            <span
              key={r.id}
              className="nav-brand-ripple"
              style={{ left: r.x, top: r.y }}
            />
          ))}
          <div className="nav-brand-logo-wrap">
            <img src="/aw-logo.png" alt="AmanWebsiteBuilder Logo" className="nav-brand-logo-img" />
          </div>
          <div className="nav-brand-text-wrap">
            <span className="nav-brand-name">AmanWebsiteBuilder</span>
            <span className="nav-brand-tagline">Crafting Digital Experiences</span>
          </div>
        </div>

        <div className="nav-profile">
          <div className="nav-avatar-wrap">
            {!imgFailed ? (
              <img
                src="/avatar.jpg"
                alt={siteConfig.name}
                className="nav-avatar-img"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                background: 'linear-gradient(135deg, #FF5522, #FF8A65)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                fontFamily: 'var(--font-sans)'
              }}>
                {siteConfig.name.split(' ').map(n => n[0]).join('').slice(0,2)}
              </div>
            )}
          </div>
          <div className="nav-status-badge">
            <span className="status-dot"></span>
            <span>{siteConfig.status}</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home" className="nav-link-item">Home</a></li>
          <li><a href="#what-i-build" className="nav-link-item">What I Build</a></li>
          <li><a href="#projects" className="nav-link-item">Work</a></li>
          <li><a href="#tools" className="nav-link-item">Tools</a></li>
          <li><a href="#about" className="nav-link-item">About</a></li>
          <li><a href="#faq" className="nav-link-item">FAQ</a></li>
        </ul>

        <button type="button" className="nav-cta-btn" onClick={handleContactClick}>
          <Mail size={15} />
          <span>Book Consultation</span>
        </button>

      </nav>
    </header>
  );
};

export default Navbar;
