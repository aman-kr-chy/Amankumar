import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.description.trim()) newErrors.description = 'Tell us about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const text = `Hi! I'm interested in starting a project.\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget || 'Not specified'}\n\nProject Details:\n${formData.description}`;
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedText}`, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const MAPS_URL = 'https://www.google.com/maps/place/Vadodara,+Gujarat/@22.3218045,72.8612371,54809m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc8ab91a3ddab:0xac39d3bfe1473fb8!8m2!3d22.3001515!4d73.2105012!16zL20vMDJrZnhr?entry=ttu';

  const infoItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Vadodara, Gujarat, India',
      href: MAPS_URL
    },
    {
      icon: <Clock size={18} />,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Ambient glow */}
      <div className="contact-glow-top" />
      <div className="contact-glow-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="contact-header">
          <span className="section-label dark-label">✦ Get In Touch</span>
          <h2 className="contact-headline">
            Ready to Build Something <span className="contact-headline-accent">Amazing?</span>
          </h2>
          <p className="contact-subheadline">
            Tell us about your project and we'll get back to you within 24 hours with a free strategy proposal.
          </p>
        </div>

        {/* Main grid */}
        <div className="contact-main-grid">

          {/* Left – Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="cform-row">
                <div className="cform-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`cform-input${errors.name ? ' cform-input--error' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="cform-error">{errors.name}</span>}
                </div>
                <div className="cform-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`cform-input${errors.email ? ' cform-input--error' : ''}`}
                    placeholder="Email Address"
                  />
                  {errors.email && <span className="cform-error">{errors.email}</span>}
                </div>
              </div>

              <div className="cform-row">
                <div className="cform-group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="cform-input"
                    placeholder="Company (optional)"
                  />
                </div>
                <div className="cform-group">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="cform-input cform-select"
                  >
                    <option value="">Project Budget</option>
                    <option value="Under ₹25K">Under ₹25,000</option>
                    <option value="₹25K–₹75K">₹25,000 – ₹75,000</option>
                    <option value="₹75K–₹1.5L">₹75,000 – ₹1,50,000</option>
                    <option value="₹1.5L+">₹1,50,000+</option>
                  </select>
                </div>
              </div>

              <div className="cform-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`cform-input cform-select${errors.service ? ' cform-input--error' : ''}`}
                >
                  <option value="">What service do you need?</option>
                  <option value="New Website Design">New Website Design</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="E-commerce Store">E-commerce Store</option>
                  <option value="Custom Web App">Custom Web Application</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Maintenance & Support">Maintenance &amp; Support</option>
                </select>
                {errors.service && <span className="cform-error">{errors.service}</span>}
              </div>

              <div className="cform-group">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`cform-input cform-textarea${errors.description ? ' cform-input--error' : ''}`}
                  placeholder="Tell us about your project..."
                />
                {errors.description && <span className="cform-error">{errors.description}</span>}
              </div>

              <button type="submit" className="cform-submit-btn">
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>Send Message <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>

          {/* Right – Info card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-sub">We're here to help you grow your digital presence.</p>

            <div className="contact-info-list">
              {infoItems.map((item, i) => (
                <div className="contact-info-item" key={i}>
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value contact-info-link">
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-wa-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Google Maps Embed */}
            <div className="contact-map-wrap">
              <iframe
                title="Vadodara, Gujarat Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117840.34!2d73.2105012!3d22.3001515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C+Gujarat!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '12px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                <MapPin size={13} /> Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
