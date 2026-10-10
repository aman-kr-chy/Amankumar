import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={`modal-overlay ${project ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <img src={project.fullImage || project.image} alt={project.title} className="modal-img" />
        
        <div className="modal-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="portfolio-category">{project.category}</span>
              <h2 className="section-title mb-1" style={{ fontSize: '2rem' }}>{project.title}</h2>
              {project.isDemo && <span className="tech-badge mb-2" style={{ background: '#fef3c7', color: '#d97706', display: 'inline-block' }}>Concept Demo</span>}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={e => e.preventDefault()}>
                Live Demo <ExternalLink size={16} />
              </a>
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" onClick={e => e.preventDefault()}>
                Source <Code2 size={16} />
              </a>
            </div>
          </div>

          <div className="modal-header">
            <h3>Project Overview</h3>
            <p className="mt-1" style={{ color: 'var(--text-light)' }}>{project.description}</p>
          </div>

          <div className="modal-features">
            <h3>Key Features</h3>
            <ul className="mt-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="mb-2">Technologies Used</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge" style={{ background: 'var(--primary)', color: 'white' }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
