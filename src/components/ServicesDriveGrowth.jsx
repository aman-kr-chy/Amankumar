import React, { useState } from 'react';
import {
  Globe, Smartphone, TrendingUp, Bot,
  Layers, Cloud, Palette, BarChart3,
  Package, ShoppingCart
} from 'lucide-react';

const services = [
  { icon: null, title: 'Website Development', desc: 'High-performance websites, landing pages, and e-commerce with Next.js & React.', tags: ['Next.js', 'React', 'E-commerce'], hot: false },
  { icon: null, title: 'Mobile App Development', desc: 'Native & cross-platform apps from consumer to enterprise-grade solutions.', tags: ['React Native', 'Flutter', 'iOS/Android'], hot: false },
  { icon: null, title: 'Digital Marketing', desc: 'SEO, paid ads, social media strategy driving measurable ROI for your business.', tags: ['SEO', 'Google Ads', 'Meta'], hot: false },
  { icon: null, title: 'Agentic AI Solutions', desc: 'Autonomous AI agents, MCP workflows, voice AI, and intelligent automation.', tags: ['GPT-5', 'Claude 4.6', 'MCP'], hot: true },
  { icon: null, title: 'SaaS Product Development', desc: 'End-to-end SaaS platforms with billing, dashboards, analytics, and multi-tenancy.', tags: ['Stripe', 'Multi-tenant', 'Analytics'], hot: false },
  { icon: null, title: 'Cloud & DevOps', desc: 'AWS/GCP infrastructure, CI/CD pipelines, Docker/K8s, and serverless architectures.', tags: ['AWS', 'Docker', 'Kubernetes'], hot: false },
  { icon: null, title: 'UI/UX Design', desc: 'Research-driven design systems, wireframing, prototyping, and accessibility audits.', tags: ['Figma', 'Design Systems', 'A11y'], hot: false },
  { icon: null, title: 'Conversion Rate Optimization', desc: 'A/B testing, heatmaps, funnel optimization, and data-driven growth strategy.', tags: ['Analytics', 'A/B Testing', 'Growth'], hot: false },
  { icon: null, title: 'Enterprise Software Development', desc: 'Custom ERP, CRM, internal tools, and system integrations built for scale.', tags: ['ERP/CRM', 'Integrations', 'IoT'], hot: false },
  { icon: null, title: 'E-commerce Development', desc: 'Custom online stores, Shopify and WooCommerce builds that convert visitors into orders.', tags: ['Shopify', 'WooCommerce', 'D2C'], hot: false },
];

const ICON_MAP = [Globe, Smartphone, TrendingUp, Bot, Layers, Cloud, Palette, BarChart3, Package, ShoppingCart];

const ServicesDriveGrowth = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="services" className="sdg-section">

      <div className="sdg-grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="sdg-header">
          <span className="section-label">SERVICES</span>
          <h2 className="sdg-title">Services That Drive <span className="sdg-accent">Growth</span></h2>
          <p className="sdg-subtitle">From concept to launch and beyond â€” we handle every aspect of your digital product with precision and passion.</p>
        </div>
        <div className="sdg-grid">
          {services.map((svc, idx) => {
            const IconComp = ICON_MAP[idx];
            return (
              <div
                key={idx}
                className={`sdg-card${hoveredIdx === idx ? ' sdg-card--hovered' : ''}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {svc.hot && <div className="sdg-hot-badge"><span className="sdg-hot-dot" />Hot</div>}
                <div className="sdg-card-icon"><IconComp size={22} /></div>
                <h3 className="sdg-card-title">{svc.title}</h3>
                <p className="sdg-card-desc">{svc.desc}</p>
                <div className="sdg-tags">{svc.tags.map((tag, tIdx) => (<span key={tIdx} className="sdg-tag">{tag}</span>))}</div>
                <a href="#contact" className="sdg-learn-more">Learn More <span aria-hidden="true">â†’</span></a>
                <div className="sdg-card-glow" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesDriveGrowth;
