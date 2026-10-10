import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Navbar = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <header className="navbar-dock-wrapper">
      <nav className="navbar-dock" aria-label="Main Navigation">
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

        <a href="#contact" className="nav-cta-btn">
          <Mail size={15} />
          <span>Let's Talk</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
