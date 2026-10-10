import React, { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ExternalLink, Code2 } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Explore some of our recent work. We take pride in building high-quality, impactful websites.</p>
        </div>

        <div className="portfolio-filters">
          {projectCategories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center mt-4">
            <p className="text-light">No projects found in this category.</p>
          </div>
        ) : (
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-img-wrap">
                  <img src={project.image} alt={project.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <button className="btn btn-primary" onClick={() => openModal(project)}>
                      View Details
                    </button>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Portfolio;
