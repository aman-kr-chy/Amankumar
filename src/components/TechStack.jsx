import React from 'react';
import { Cpu, Code, Palette, CheckCircle2 } from 'lucide-react';

/* ─── Inline SVG Brand Logos ─────────────────────────── */
const L = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.3" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  Next: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <circle cx="12" cy="12" r="10" fill="#000"/>
      <path d="M7 8h2v8H7zm4 0h2l4 5.5V8h2v8h-2l-4-5.5V16h-2z" fill="#fff"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <rect width="24" height="24" rx="3" fill="#3178C6"/>
      <path d="M13.2 13v5H11.4V13H9V11.3h7V13H13.2zM17 15.4c.3.4.8.7 1.4.7s1-.3 1-.7c0-.5-.4-.7-1.2-1L17.7 14c-1-.4-1.7-.9-1.7-2.1 0-1.2.9-2 2.4-2 1 0 1.8.4 2.3 1.1l-1.1.8c-.3-.4-.7-.6-1.2-.6-.5 0-.8.2-.8.6s.3.6 1 .9l.5.2c1.2.5 1.9 1 1.9 2.3 0 1.4-1 2.3-2.7 2.3-1.5 0-2.5-.7-3-1.7L17 15.4z" fill="white"/>
    </svg>
  ),
  Node: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.3 3.7v7.4L12 19.2l-6.3-3.8V8L12 4.3zm0 2.2L7 9.4v5l5 2.8 5-2.8v-5L12 6.5zm0 1.8l3.5 2v4L12 16l-3.5-1.7v-4L12 8.3z" fill="#539E43"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2.5C9.5 2.5 8 3.7 8 5v2h4v1H6.5C5 8 4 9.3 4 11s1 3 2.5 3H8v-1.5c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5V18c0 1.3-1.5 2.5-4 2.5S8 19.3 8 18v-1h4v-1H6.5C5 16 4 14.7 4 13" fill="none"/>
      <rect x="7" y="2" width="10" height="9" rx="2.5" fill="#3776AB"/>
      <rect x="7" y="13" width="10" height="9" rx="2.5" fill="#FFD43B"/>
      <circle cx="10" cy="5" r="1.2" fill="white"/>
      <circle cx="14" cy="19" r="1.2" fill="#3776AB"/>
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M22.3 9.8a5.8 5.8 0 00-.4-4.7 6 6 0 00-6.5-2.9A6 6 0 009.8 1a6 6 0 00-5.7 4.1 6 6 0 00-4 2.9 6 6 0 00.7 7 5.8 5.8 0 00.4 4.7 6 6 0 006.5 2.9 6 6 0 005.6 1.3 6 6 0 005.7-4.2 6 6 0 004-2.9 6 6 0 00-.7-7zm-9.3 13a4.5 4.5 0 01-2.9-1l.1-.1 4.8-2.8a.8.8 0 00.4-.7v-6.8l2 1.2v5.5a4.5 4.5 0 01-4.4 3.7zM3.8 16.8a4.5 4.5 0 01-.5-3l.1.1 4.8 2.8a.8.8 0 00.8 0l5.9-3.4v2.4l-4.9 2.8a4.5 4.5 0 01-6.2-1.7zm-.8-10.4A4.5 4.5 0 015.3 4.3v5.6a.8.8 0 00.4.7l5.8 3.4-2 1.2-4.8-2.8a4.5 4.5 0 01-.7-6zm16.5 3.8l-5.9-3.4 2-1.2 4.9 2.8a4.5 4.5 0 01-.7 6.2v-5.6a.8.8 0 00-.3-.8zm2-3l-.1-.1-4.8-2.8a.8.8 0 00-.8 0L9.9 7.7V5.3l4.9-2.8a4.5 4.5 0 016.7 4.7zm-12.6 4.2L7 10.2V7.5l2 1.2 2 1.2v2.4l-2 1.1z" fill="#10A37F"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2C9.2 2 7 5.5 7 9.5c0 2.8 1.2 5.3 3 6.8l1 .8V22h2v-4.9l1-.8c1.8-1.5 3-4 3-6.8C17 5.5 14.8 2 12 2zm0 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#47A248"/>
    </svg>
  ),
  Postgres: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <ellipse cx="12" cy="5.5" rx="7" ry="3.5" fill="#336791"/>
      <path d="M5 5.5v7c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5v-7c0 1.9-3.1 3.5-7 3.5S5 7.4 5 5.5z" fill="#336791" opacity=".8"/>
      <path d="M5 12.5v4c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5v-4c0 1.9-3.1 3.5-7 3.5S5 14.4 5 12.5z" fill="#336791" opacity=".6"/>
    </svg>
  ),
  Prisma: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M2 20.5L10 2l10 16.5H2zm8-13l-5.5 9.5h11L10 7.5z" fill="#2D3748"/>
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M3 12L12 3l9 9-9 9-9-9zm9-5.5L5.5 12 12 18.5 18.5 12 12 6.5z" fill="#3ECF8E"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 6C9.3 6 7.7 7.3 7 10c1-1.3 2.2-1.8 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.51 12 7 12z" fill="#38BDF8"/>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M8 2C6.3 2 5 3.3 5 5s1.3 3 3 3h3V2H8z" fill="#F24E1E"/>
      <path d="M11 2h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3V2z" fill="#FF7262"/>
      <path d="M11 8H8c-1.7 0-3 1.3-3 3s1.3 3 3 3h3V8z" fill="#A259FF"/>
      <path d="M11 14H8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3v-3z" fill="#0ACF83"/>
      <circle cx="14" cy="11" r="3" fill="#1ABCFE"/>
    </svg>
  ),
  ThreeJS: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2L2 20h20L12 2zm0 4l6.5 12h-13L12 6z" fill="#000000"/>
      <path d="M12 9l4 7H8l4-7z" fill="#555"/>
    </svg>
  ),
  Graphql: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l6.7 3.8-6.7 3.9L5.3 8.1 12 4.3zM4 9.4l7 4v7.3L4 16.7V9.4zm9 11.3v-7.3l7-4v7.3L13 20.7z" fill="#E10098"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M13.5 9.5h2v2h-2zM11 9.5h2v2h-2zM8.5 9.5h2v2h-2zM6 9.5h2v2H6zM8.5 7h2v2h-2zM11 7h2v2h-2zM13.5 7h2v2h-2z" fill="#2496ED"/>
      <path d="M21.5 10.5c-.3-.2-1-.4-1.9-.4-.2-1.3-.9-2.4-2-3.1l-.4-.2-.3.4c-.5.7-.7 1.7-.6 2.5.1.5.2 1.1.6 1.5-.3.2-.9.4-1.6.4H2.1c-.1 1.5.3 3 1.3 4.2 1 1.3 2.5 2 4.4 2 4.1 0 7.2-1.9 8.7-5.3.6 0 1.8.1 2.4-1.2l.1-.2-.5-.6z" fill="#2496ED"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M6.8 11.4l-1.5 4.5H4l-1.5-4.5h1.2l.9 3 .9-3H6.8zm2.2 0v4.5H8v-4.5h1zm2.5 1.2c0-.4-.3-.6-.7-.6-.5 0-.9.4-.9.9v.2c0 .5.3.9.9.9.4 0 .7-.2.7-.6h1c0 .9-.7 1.5-1.7 1.5-1 0-1.8-.7-1.8-1.8v-.2c0-1.1.8-1.8 1.8-1.8 1 0 1.7.6 1.7 1.5h-1z" fill="#FF9900"/>
      <path d="M2.5 17c3.3 1.4 6.8 2.2 9.5 2.2 4 0 9.5-1.5 12-3.5-.5 2-4.5 5.3-12 5.3-4 0-7.5-2-9.5-4z" fill="#FF9900"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M23.1 10.9L13.1.9a3 3 0 00-4.2 0L6.7 3.1l2.6 2.6a2 2 0 012.5 2.5l2.5 2.5a2 2 0 012.1 3.3 2 2 0 01-3.3-2.1L10.7 9.5v6.3a2 2 0 11-2-2V9.3a2 2 0 01-1.1-2.6L5.1 4.2.9 8.4a3 3 0 000 4.2l10 10a3 3 0 004.2 0l8-8a3 3 0 000-4.2l.1.5z" fill="#F05032"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M21 3L12 21l-2-4.5L21 3z" fill="#BD34FE"/>
      <path d="M3 3l9 6-7 9L3 3z" fill="#FF7262" opacity=".9"/>
      <path d="M12 9l-2 5.5 2-1.5 2 1.5L12 9z" fill="#FFD62E"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm14.8 4H6.2l.2 2h11.2l-.6 7-5 1.5-5-1.5-.3-3.5h2l.15 1.8 3.15.8 3.15-.8.3-3.3H6.4L6 6z" fill="#1572B6"/>
    </svg>
  ),
  WCAG: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <circle cx="12" cy="5" r="2" fill="#3B82F6"/>
      <path d="M12 8c-2.5 0-4.5 1.3-4.5 3L6 22h2l1-5h6l1 5h2L16.5 11c0-1.7-2-3-4.5-3zm-1.5 6l.5-4h2l.5 4h-3z" fill="#3B82F6"/>
    </svg>
  ),
  LangChain: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M7 8a3 3 0 100 6 3 3 0 000-6zm10 0a3 3 0 100 6 3 3 0 000-6z" fill="#10A37F"/>
      <path d="M10 11h4" stroke="#10A37F" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Pinecone: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2L8 9h8L12 2zm0 5.5L10.3 9h3.4L12 7.5z" fill="#00B4D8"/>
      <path d="M9 10l-5 10h16L15 10H9zm3 2l3.5 6h-7L12 12z" fill="#0077B6"/>
    </svg>
  ),
  Websocket: (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#FF6B35"/>
    </svg>
  ),
};

/* ─── Marquee items with logo + name ─────────────────── */
const marqueeTools = [
  { name: 'React 19',    logo: L.React,    color: '#61DAFB' },
  { name: 'Next.js 15',  logo: L.Next,     color: '#AAAAAA' },
  { name: 'TypeScript',  logo: L.TypeScript,color: '#3178C6' },
  { name: 'Node.js',     logo: L.Node,     color: '#539E43' },
  { name: 'Python',      logo: L.Python,   color: '#3776AB' },
  { name: 'MongoDB',     logo: L.MongoDB,  color: '#47A248' },
  { name: 'PostgreSQL',  logo: L.Postgres, color: '#336791' },
  { name: 'TailwindCSS', logo: L.Tailwind, color: '#38BDF8' },
  { name: 'Figma',       logo: L.Figma,    color: '#A259FF' },
  { name: 'Docker',      logo: L.Docker,   color: '#2496ED' },
  { name: 'AWS',         logo: L.AWS,      color: '#FF9900' },
  { name: 'Git',         logo: L.Git,      color: '#F05032' },
  { name: 'Vite',        logo: L.Vite,     color: '#BD34FE' },
  { name: 'GraphQL',     logo: L.Graphql,  color: '#E10098' },
  { name: 'Three.js',    logo: L.ThreeJS,  color: '#888888' },
  { name: 'OpenAI API',  logo: L.OpenAI,   color: '#10A37F' },
];

/* ─── Category skill chips with logos ────────────────── */
const categories = [
  {
    icon: <Cpu size={22} />,
    title: 'AI & Intelligent Systems',
    desc: 'Developing autonomous workflows, natural language understanding, neural architectures, and real-time inference pipelines.',
    skills: [
      { label: 'Python & FastAPI',                   logo: L.Python    },
      { label: 'OpenAI & Anthropic APIs',            logo: L.OpenAI    },
      { label: 'LangChain & AI Agents',              logo: L.LangChain },
      { label: 'Vector Embeddings & Pinecone',       logo: L.Pinecone  },
      { label: 'Model Fine-Tuning & Prompt Craft',   logo: L.OpenAI    },
      { label: 'Computer Vision & NLP',              logo: L.Python    },
    ]
  },
  {
    icon: <Code size={22} />,
    title: 'Full-Stack Development',
    desc: 'Building modular, testable, and blazing fast web applications with reactive client states and scalable server architectures.',
    skills: [
      { label: 'React 19 & Next.js App Router',      logo: L.React     },
      { label: 'Node.js & Express.js',               logo: L.Node      },
      { label: 'TypeScript & ESNext',                logo: L.TypeScript },
      { label: 'PostgreSQL, Prisma & Supabase',      logo: L.Postgres  },
      { label: 'MongoDB & Mongoose',                 logo: L.MongoDB   },
      { label: 'REST, GraphQL & WebSockets',         logo: L.Graphql   },
    ]
  },
  {
    icon: <Palette size={22} />,
    title: 'Design Systems & Experience',
    desc: 'Translating complex product requirements into intuitive, elegant user interfaces with micro-interactions and accessibility.',
    skills: [
      { label: 'Figma to Production Code',           logo: L.Figma     },
      { label: 'TailwindCSS & Vanilla CSS',          logo: L.Tailwind  },
      { label: 'Fluid Typography & Responsive Grids',logo: L.CSS       },
      { label: 'Three.js & Canvas 2D Graphics',      logo: L.ThreeJS   },
      { label: 'Lighthouse 100 Performance',         logo: L.Vite      },
      { label: 'WCAG AA Accessibility Standards',    logo: L.WCAG      },
    ]
  },
];

/* ─── Component ──────────────────────────────────────── */
const TechStack = () => {
  const doubled = [...marqueeTools, ...marqueeTools];

  return (
    <section id="tools" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="section-label">TECH STACK</span>
          <h2 className="section-title-serif">
            Tools I use to <em>build things.</em>
          </h2>
          <p className="section-subtitle">
            A battle-tested stack selected for developer velocity, runtime efficiency, and exceptional end-user experience.
          </p>
        </div>

        {/* ── Logo Marquee Strip ── */}
        <div style={{
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '3.5rem',
          background: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '1rem 0',
        }}>
          <div style={{
            display: 'flex',
            gap: '0.65rem',
            width: 'max-content',
            animation: 'marquee-slide 38s linear infinite',
          }}>
            {doubled.map((tool, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem 0.4rem 0.6rem',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '999px',
                  background: '#FAFAFA',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = tool.color;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${tool.color}22`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>{tool.logo}</span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#111',
                }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3 Category Cards ── */}
        <div className="tech-cards-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="tech-category-card">
              <div className="tech-cat-header">
                <div className="tech-cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <p>{cat.desc}</p>

              <div className="tech-chips-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{skill.logo}</span>
                    <span>{skill.label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
