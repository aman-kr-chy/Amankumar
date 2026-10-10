import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/logo.png" alt="Logo" className="footer-logo" onError={(e) => e.target.style.display = 'none'} />
              {siteConfig.agencyBrand}<span>.</span>
            </div>
            <p className="footer-desc">
              We build high-performance, beautiful, and scalable web solutions that help businesses establish a powerful online presence.
            </p>
            <div className="social-links">
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Business Websites</a></li>
              <li><a href="#services">E-commerce Stores</a></li>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
              <li><a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>{siteConfig.contact.phone}</a></li>
              <li><a href="#contact">Get a Quote</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteConfig.agencyName}. All rights reserved.</p>
        </div>
      </div>

      <div 
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </div>
    </footer>
  );
};

export default Footer;
