import React from 'react';
import { siteConfig } from '../config/siteConfig';

const About = () => {
  return (
    <section id="about" className="bg-light">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Developer Workspace" 
              className="about-img"
            />
          </div>
          
          <div className="about-content">
            <span className="portfolio-category">About Me</span>
            <h2>Hi, I'm {siteConfig.developer.name}</h2>
            <p>
              I am a {siteConfig.developer.role} and the founder of {siteConfig.agencyName}. I specialize in building high-performance, beautiful, and scalable web solutions for businesses of all sizes.
            </p>
            <p>
              My approach focuses on clean code, intuitive user experiences, and measurable business outcomes. Whether you need a simple landing page or a complex web application, I bring technical expertise and creative problem-solving to every project.
            </p>
            
            <div className="skills-wrap">
              {siteConfig.developer.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            <div className="hero-actions mt-3">
              <a href={siteConfig.developer.portfolio} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View My Full Resume
              </a>
              <a href={siteConfig.developer.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
