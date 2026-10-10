import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  // Empty array as per requirement: "Create a testimonial component that can display genuine client feedback once available. Do not invent real client testimonials"
  const testimonials = [];

  return (
    <section className="bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Feedback</h2>
          <p className="section-subtitle">What our clients say about working with us.</p>
        </div>
        
        {testimonials.length === 0 ? (
          <div className="text-center" style={{ padding: '3rem', background: 'var(--bg-main)', borderRadius: 'var(--radius)', border: '1px dashed var(--border)' }}>
            <Quote size={40} style={{ color: 'var(--border)', margin: '0 auto 1rem' }} />
            <h3 className="mb-1" style={{ color: 'var(--text-light)' }}>Client Testimonials Coming Soon</h3>
            <p className="text-light">We are collecting feedback from our recent projects and will update this section soon.</p>
          </div>
        ) : (
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card" style={{ background: 'var(--bg-main)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
                {/* Structure ready for future data */}
                <Quote size={32} style={{ color: 'var(--primary)', opacity: 0.2, marginBottom: '1rem' }} />
                <p className="mb-3" style={{ fontStyle: 'italic' }}>"{testimonial.text}"</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
