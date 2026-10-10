import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    service: '',
    budget: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.description.trim()) newErrors.description = "Project description is required";
    if (!formData.service) newErrors.service = "Please select a required service";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Build WhatsApp message
      const text = `Hi, I'm interested in starting a project!
      
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.businessName || 'N/A'} (${formData.businessType || 'N/A'})
Service: ${formData.service}
Budget: ${formData.budget || 'Not specified'}

Project Description:
${formData.description}`;

      // Encode and open WhatsApp link
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedText}`, '_blank');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Start a Project</h2>
          <p className="section-subtitle">Ready to transform your online presence? Tell us about your project, and we'll get back to you with a free consultation and quote.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="mb-4" style={{ color: '#cbd5e1' }}>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Phone / WhatsApp</h4>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#cbd5e1' }}>{siteConfig.contact.phone}</a>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Email</h4>
                <a href={`mailto:${siteConfig.contact.email}`} style={{ color: '#cbd5e1' }}>{siteConfig.contact.email}</a>
              </div>
            </div>
            
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Location</h4>
                <p style={{ color: '#cbd5e1' }}>{siteConfig.contact.address}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="form-control"
                    placeholder="John Doe"
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="form-control"
                    placeholder="john@example.com"
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Business Name</label>
                  <input 
                    type="text" 
                    name="businessName" 
                    value={formData.businessName} 
                    onChange={handleChange} 
                    className="form-control"
                    placeholder="Acme Corp"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Industry / Type</label>
                  <select 
                    name="businessType" 
                    value={formData.businessType} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    <option value="">Select Industry</option>
                    <option value="corporate">Corporate / B2B</option>
                    <option value="ecommerce">E-commerce / Retail</option>
                    <option value="restaurant">Restaurant / Hospitality</option>
                    <option value="education">Education</option>
                    <option value="health">Healthcare / Fitness</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Required Service *</label>
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    <option value="">Select a Service</option>
                    <option value="New Website Design">New Website Design</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value="Custom Web App">Custom Web Application</option>
                    <option value="Maintenance">Maintenance & Support</option>
                  </select>
                  {errors.service && <div className="form-error">{errors.service}</div>}
                </div>
                
                <div className="form-group">
                  <label className="form-label">Estimated Budget</label>
                  <select 
                    name="budget" 
                    value={formData.budget} 
                    onChange={handleChange} 
                    className="form-control"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="<$1000">Less than $1,000</option>
                    <option value="$1000-$3000">$1,000 - $3,000</option>
                    <option value="$3000-$5000">$3,000 - $5,000</option>
                    <option value="$5000+">$5,000+</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Project Description *</label>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  className="form-control"
                  placeholder="Tell us about your project goals, features you need, and any other details..."
                ></textarea>
                {errors.description && <div className="form-error">{errors.description}</div>}
              </div>
              
              <p className="text-light mb-3" style={{ fontSize: '0.875rem' }}>
                Note: Clicking submit will open your WhatsApp application to send this inquiry directly to our team.
              </p>
              
              <button type="submit" className="btn btn-primary">
                Send Inquiry via WhatsApp <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
