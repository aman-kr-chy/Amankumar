import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const InterestsAndInspiration = () => {
  const interests = [
    { label: 'Table Tennis', icon: '🏓', theme: 'pill-yellow' },
    { label: 'Cricket & Sports', icon: '🏏', theme: 'pill-orange' },
    { label: 'Gaming & Simulation', icon: '🎮', theme: 'pill-green' },
    { label: 'Design & 3D Web', icon: '🎨', theme: 'pill-purple' },
    { label: 'Sci-Fi & Astronomy', icon: '🌌', theme: 'pill-blue' },
    { label: 'Specialty Coffee', icon: '☕', theme: 'pill-yellow' },
    { label: 'Exploring Tech', icon: '🚀', theme: 'pill-orange' },
    { label: 'Synthwave & Beats', icon: '🎧', theme: 'pill-pink' }
  ];

  const thinkers = [
    {
      name: 'Steve Jobs',
      role: 'FOUNDER & VISIONARY',
      quote: '"Design is not just what it looks like and feels like. Design is how it works."',
      focus: 'Product Empathy & Simplicity'
    },
    {
      name: 'Nikola Tesla',
      role: 'INVENTOR & ELECTRICAL PIONEER',
      quote: '"The present is theirs; the future, for which I really worked, is mine."',
      focus: 'Unbounded Curiosity'
    },
    {
      name: 'Richard Feynman',
      role: 'THEORETICAL PHYSICIST',
      quote: '"What I cannot create, I do not understand."',
      focus: 'First Principles Thinking'
    },
    {
      name: 'Alan Turing',
      role: 'FATHER OF COMPUTER SCIENCE',
      quote: '"Sometimes it is the people no one imagines anything of who do the things that no one can imagine."',
      focus: 'Algorithmic Mastery'
    }
  ];

  return (
    <section className="section" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        {/* Interests Part */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="section-label">WHEN I'M NOT CODING</span>
              <h2 className="section-title-serif">
                Things I <em>enjoy.</em>
              </h2>
            </div>
            <span className="handwritten-note">
              staying curious outside the screen ✦
            </span>
          </div>

          <div className="interests-cloud">
            {interests.map((item, idx) => (
              <div key={idx} className={`interest-pill ${item.theme}`}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hall of Inspiration Part */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="section-label">INSPIRATION</span>
            <h2 className="section-title-serif">
              People who make me <em>want to build.</em>
            </h2>
            <p className="section-subtitle">
              From science and computer theory to product craftsmanship, these are the thinkers whose vision shapes my engineering philosophy.
            </p>
          </div>

          <div className="inspiration-grid">
            {thinkers.map((thinker, idx) => (
              <div key={idx} className="inspiration-card">
                <div>
                  <div className="thinker-role">{thinker.role}</div>
                  <h4 className="thinker-name">{thinker.name}</h4>
                  <p className="thinker-quote">{thinker.quote}</p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)' }}>
                  ✦ {thinker.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsAndInspiration;
