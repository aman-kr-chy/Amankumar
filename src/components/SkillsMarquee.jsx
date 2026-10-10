import React from 'react';

/* ─── SVG Brand Logos ─────────────────────────────────── */
const ReactLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const NextLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5L9 8.5v7H7.5v-9h1.75l7 9H14z" fill="currentColor"/>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 1.85L2.57 7.28v9.44L12 22.15l9.43-5.43V7.28L12 1.85zm0 2.31l7.43 4.28v8.55L12 21.27l-7.43-4.28V8.44L12 4.16z" fill="#539E43"/>
    <path d="M12 6.5l-4 2.3v4.6l4 2.3 4-2.3V8.8L12 6.5zm0 1.8l2.4 1.38v2.76L12 13.82l-2.4-1.38V9.68L12 8.3z" fill="#539E43"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2C9.79 2 8 3.4 8 5.1v1.4h4v.5H6.5C4.6 7 3 8.7 3 11s1.6 4 3.5 4H8v-1.6c0-1.7 1.79-3.1 4-3.1s4 1.4 4 3.1v4.5C16 19.6 14.21 21 12 21s-4-1.4-4-3.1V17H6.5C4.6 17 3 15.3 3 13" fill="none"/>
    <path d="M11.66 2C9.57 2 8 3.23 8 4.7v3.3h3.66v.6H6.34C4.5 8.6 3 10.17 3 12s1.5 3.4 3.34 3.4H8v-1.9c0-1.47 1.57-2.7 3.66-2.7 2.1 0 3.67 1.23 3.67 2.7V18.3C15.33 19.77 13.76 21 11.66 21S8 19.77 8 18.3V17H6.34C4.5 17 3 15.43 3 13.6" fill="none"/>
    <rect x="8" y="2" width="8" height="9" rx="2" fill="#3776AB"/>
    <rect x="8" y="13" width="8" height="9" rx="2" fill="#FFD43B"/>
    <circle cx="10.5" cy="5" r="1" fill="white"/>
    <circle cx="13.5" cy="19" r="1" fill="#3776AB"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <rect width="24" height="24" rx="3" fill="#3178C6"/>
    <path d="M13.5 13v5.5h-2V13H9V11h7v2h-2.5zM18.5 15.5c0 .83.67 1.5 1.5 1.5.55 0 1-.25 1.25-.65l1.5.87C22.25 17.95 21.2 18.5 20 18.5c-2 0-3.5-1.34-3.5-3.5s1.5-3.5 3.5-3.5c1.2 0 2.25.55 2.75 1.28l-1.5.87C20.5 13.25 20 13 19.5 13c-.83 0-1.5.67-1.5 1.5v1z" fill="white"/>
  </svg>
);

const MongoLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2C9.5 2 7.5 5 7.5 9c0 2.5 1 4.7 2.5 6l1 .8V22h2v-4.2l1-.8c1.5-1.3 2.5-3.5 2.5-6C16.5 5 14.5 2 12 2zm0 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#47A248"/>
  </svg>
);

const PostgresLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3c1.7 0 3.2.8 4.2 2H7.8C8.8 5.8 10.3 5 12 5zm-5 4h10l-1 8H8L7 9zm5 10c-1.7 0-3.2-.8-4.2-2h8.4c-1 1.2-2.5 2-4.2 2z" fill="#336791"/>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M22.5 9.3c-.3-.2-1-.5-2-.4-.2-1.4-1-2.6-2.1-3.4l-.4-.3-.3.4c-.5.8-.8 1.8-.7 2.8.1.6.3 1.2.6 1.7-.3.2-.9.4-1.7.4H2.1c-.1 1.7.4 3.3 1.4 4.6 1.1 1.4 2.7 2.1 4.7 2.1 4.4 0 7.7-2 9.3-5.6.6 0 1.9.1 2.6-1.3l.1-.2-.8-.8zM6 10.5H5V12h1v-1.5zm1.5 0H6V12h1.5v-1.5zm1.5 0H7.5V12H9v-1.5zm1.5 0H9V12h1.5v-1.5zm0-1.5H9V10.5h1.5V9zm1.5 0H10.5V10.5H12V9zm-6 0H4.5V10.5H6V9zm1.5 0H6V10.5H7.5V9zm1.5 0H7.5V10.5H9V9zm3 1.5H10.5V12H12v-1.5z" fill="#2496ED"/>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M8 2C6.3 2 5 3.3 5 5s1.3 3 3 3h3V2H8z" fill="#F24E1E"/>
    <path d="M11 2h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3V2z" fill="#FF7262"/>
    <path d="M11 8H8c-1.7 0-3 1.3-3 3s1.3 3 3 3h3V8z" fill="#A259FF"/>
    <path d="M11 14H8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3v-3z" fill="#0ACF83"/>
    <path d="M14 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" fill="#1ABCFE"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M23.1 10.9L13.1.9a3 3 0 00-4.2 0L6.7 3.1l2.6 2.6a2 2 0 012.5 2.5l2.5 2.5a2 2 0 012.1 3.3 2 2 0 01-3.3-2.1L10.7 9.5v6.3a2 2 0 11-2-2V9.3a2 2 0 01-1.1-2.6L5.1 4.2.9 8.4a3 3 0 000 4.2l10 10a3 3 0 004.2 0l8-8a3 3 0 000-4.2l.1.5z" fill="#F05032"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.51 12 7 12z" fill="#38BDF8"/>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
    <path d="M6.8 11.4l-1.5 4.4H4l-1.5-4.4h1.2l.9 2.9.9-2.9H6.8zm2.2 0v4.4H8V11.4h1zm3.5 1.3c0-.4-.3-.7-.8-.7-.6 0-.9.4-.9.9v.2c0 .6.3 1 .9 1 .5 0 .8-.3.8-.7h1c0 1-.7 1.6-1.8 1.6-1.1 0-1.9-.7-1.9-1.9v-.2c0-1.2.8-1.9 1.9-1.9 1.1 0 1.8.7 1.8 1.7h-1zm7-1.3l1 3 1-3h1.1l-1.5 4.4h-1.2l-1.5-4.4H19.5z" fill="#FF9900"/>
    <path d="M3 17.5c3.3 1.5 7 2.5 9 2.5 4 0 9.5-1.5 12-3.5-.5 2-4.5 5.5-12 5.5-4 0-7.5-2-9-4.5z" fill="#FF9900"/>
  </svg>
);

const GraphQLLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l6.7 3.8-6.7 3.9L5.3 8.1 12 4.3zM4 9.4l7 4v7.3L4 16.7V9.4zm9 11.3v-7.3l7-4v7.3L13 20.7z" fill="#E10098"/>
  </svg>
);

const ViteLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M21.7 4.5l-9.4 16.8-1.5-.8L20.2 4l1.5.5z" fill="#BD34FE"/>
    <path d="M13.3 4.5L2.3 12.9l1 1.3 10-7.9V4.5z" fill="#FF3E00"/>
    <path d="M13 4h-1.7l-8.7 8.6 1 1.3L13 5.5V4z" fill="#FF7400"/>
  </svg>
);

const RedisLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M22 8.6l-9.5 4.4-2.2-1L22 8.6zm-11.7 5.5l-2.1-.9 11.8-4.5v2l-9.7 3.4z" fill="#D82C20"/>
    <path d="M2.5 11.8L12 7.4l9.5 4.4L12 16.2l-9.5-4.4zm9.5-5.4L3.6 10.9l8.4 3.9 8.4-3.9-8.4-3.9z" fill="#D82C20"/>
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
    <path d="M7 17.5c.3.6.9 1 1.6 1 .7 0 1.1-.4 1.1-.8 0-.6-.4-.8-1.2-1.1L8 16.3C6.8 15.8 6 15.2 6 13.7c0-1.4 1-2.4 2.6-2.4 1.1 0 1.9.4 2.5 1.4l-1.4.9c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1L9.4 15c1.3.6 2.1 1.2 2.1 2.7 0 1.6-1.2 2.6-2.9 2.6-1.6 0-2.7-.8-3.2-1.8l1.6-1zm6.2.2c.4.7 1 1.1 1.8 1.1.8 0 1.2-.4 1.2-1V11.5h1.8V18c0 1.7-1 2.5-2.6 2.5-1.4 0-2.2-.7-2.7-1.5l1.5-.8z" fill="#000"/>
  </svg>
);

/* ─── Tech Logo Data ─────────────────────────────────── */
const techItems = [
  { name: 'React',       logo: <ReactLogo />,      color: '#61DAFB' },
  { name: 'Next.js',     logo: <NextLogo />,        color: '#FFFFFF' },
  { name: 'TypeScript',  logo: <TypeScriptLogo />,  color: '#3178C6' },
  { name: 'JavaScript',  logo: <JavaScriptLogo />,  color: '#F7DF1E' },
  { name: 'Node.js',     logo: <NodeLogo />,        color: '#539E43' },
  { name: 'Python',      logo: <PythonLogo />,      color: '#3776AB' },
  { name: 'MongoDB',     logo: <MongoLogo />,       color: '#47A248' },
  { name: 'PostgreSQL',  logo: <PostgresLogo />,    color: '#336791' },
  { name: 'Docker',      logo: <DockerLogo />,      color: '#2496ED' },
  { name: 'AWS',         logo: <AWSLogo />,         color: '#FF9900' },
  { name: 'Figma',       logo: <FigmaLogo />,       color: '#A259FF' },
  { name: 'TailwindCSS', logo: <TailwindLogo />,    color: '#38BDF8' },
  { name: 'Git',         logo: <GitLogo />,         color: '#F05032' },
  { name: 'GraphQL',     logo: <GraphQLLogo />,     color: '#E10098' },
  { name: 'Vite',        logo: <ViteLogo />,        color: '#BD34FE' },
  { name: 'Redis',       logo: <RedisLogo />,       color: '#D82C20' },
];

const SkillsMarquee = () => {
  // Duplicate for seamless loop
  const doubled = [...techItems, ...techItems];

  return (
    <div
      aria-label="Technologies I use"
      style={{
        overflow: 'hidden',
        padding: '1.25rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          width: 'max-content',
          animation: 'marquee-slide 36s linear infinite',
        }}
      >
        {doubled.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: '#FAFAFA',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: '999px',
              padding: '0.45rem 1rem 0.45rem 0.65rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = item.color;
              e.currentTarget.style.boxShadow = `0 0 0 2px ${item.color}22`;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', width: 28, justifyContent: 'center' }}>
              {item.logo}
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#121316',
              letterSpacing: '-0.01em',
            }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
