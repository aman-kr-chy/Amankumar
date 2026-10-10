import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Bot, Code2, Rocket, Palette, Sparkles, Cpu, Layers, Flame } from 'lucide-react';

const capabilities = [
  {
    num: '01', icon: <Bot size={22} />,
    title: 'AI & Machine Learning',
    desc: 'Building intelligent workflows, LLM-powered agents, computer vision, and predictive engines integrated seamlessly into web apps.',
    tags: ['OpenAI', 'Python', 'LangChain', 'Vector DB', 'Neural Nets'],
  },
  {
    num: '02', icon: <Code2 size={22} />,
    title: 'Full-Stack Web Development',
    desc: 'Architecting fast, resilient, scalable applications from zero to deployment using modern JavaScript/TypeScript, React, Node, and SQL.',
    tags: ['React 19', 'Next.js', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    num: '03', icon: <Rocket size={22} />,
    title: 'Startup & SaaS Building',
    desc: 'Helping founders go from idea to validated launch. Building MVPs that load in milliseconds, convert users, and scale gracefully.',
    tags: ['MVP Launch', 'Stripe', 'Supabase', 'Analytics', 'Conversion'],
  },
  {
    num: '04', icon: <Palette size={22} />,
    title: 'UI/UX & Design Systems',
    desc: 'Crafting editorial, visually stunning digital interfaces with rigorous typography, atomic design tokens, and flawless responsiveness.',
    tags: ['Figma', 'Design Systems', 'Micro-copy', 'Accessibility'],
  },
  {
    num: '05', icon: <Sparkles size={22} />,
    title: 'Creative Engineering & 3D',
    desc: 'Pushing the web past static grids with WebGL, canvas animations, tactile feedback, and interactive storytelling.',
    tags: ['HTML5 Canvas', 'Three.js', 'Interactive', 'Motion'],
  },
  {
    num: '06', icon: <Cpu size={22} />,
    title: 'Automation & Cloud APIs',
    desc: 'Building robust backend pipelines, serverless functions, background queue processors, and custom webhook integrations.',
    tags: ['REST APIs', 'GraphQL', 'AWS', 'Webhooks', 'Docker'],
  },
  {
    num: '07', icon: <Layers size={22} />,
    title: 'High-Converting Web Pages',
    desc: 'Landing pages and portfolios designed with psychology, clear visual hierarchy, and relentless attention to speed and SEO.',
    tags: ['Core Web Vitals', 'SEO', 'Conversion Rate', 'Responsive'],
  },
  {
    num: '08', icon: <Flame size={22} />,
    title: 'Fluid Motion & Interactions',
    desc: 'Micro-interactions that make software feel tactile and alive. Physics-based springs, smooth choreography, and delight.',
    tags: ['CSS Physics', 'Gestures', 'Smooth Scroll', 'Delight'],
  },
];

const CARD_W = 260;
const CARD_GAP = 20;
const UNIT = CARD_W + CARD_GAP;
const SPEED = 35;

const WhatIBuild = () => {
  const wrapperRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [, forceRender] = useState(0);
  const [containerW, setContainerW] = useState(1200);

  const items = [...capabilities, ...capabilities, ...capabilities];
  const totalW = capabilities.length * UNIT;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => setContainerW(el.offsetWidth);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    let animId;
    let lastTs = null;

    const step = (ts) => {
      if (lastTs === null) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (!pausedRef.current) {
        offsetRef.current += (SPEED * dt) / 1000;
        if (offsetRef.current >= totalW) offsetRef.current -= totalW;
        forceRender(n => n + 1);
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [totalW]);

  const getCardTransform = useCallback((idx) => {
    const cardX = idx * UNIT - offsetRef.current;
    const centerX = containerW / 2 - CARD_W / 2;
    const dist = cardX - centerX;
    // Normalize: -1 (far left) to +1 (far right)
    const norm = Math.max(-1.5, Math.min(1.5, dist / (containerW * 0.45)));

    // Cards on LEFT rotate AWAY (positive rotateY = face turns right = card faces away to left)
    // Cards on RIGHT rotate TOWARD us (negative rotateY = face turns left = card faces toward from right)
    // This creates the "curved screen" effect: cards wrap around a cylinder
    const rotateY = norm * 55;
    const translateZ = -Math.abs(norm) * 200;
    const scale = 1 - Math.abs(norm) * 0.12;
    const opacity = 1 - Math.abs(norm) * 0.4;

    return {
      left: cardX,
      transform: `perspective(1000px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity: Math.max(0, opacity),
      zIndex: Math.round((1 - Math.abs(norm)) * 100),
    };
  }, [containerW]);

  return (
    <section id="what-i-build" style={{ background: 'var(--canvas-bg)', padding: '5rem 0 0', overflow: 'hidden' }}>
      {/* Header */}
      <div className="container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <span className="section-label">WHAT I BUILD</span>
        <h2 className="section-title-serif">
          From ideas to <em>real products.</em>
        </h2>
        <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          A comprehensive look at the capabilities and solutions I build for founders, startups, and innovative teams.
        </p>
      </div>

      {/* 3D Curved Card Belt */}
      <div
        ref={wrapperRef}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        style={{
          position: 'relative',
          width: '100%',
          height: '420px',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dark background behind the cards area */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          top: '60px', bottom: 0,
          background: '#0a0a0b',
          borderRadius: '0',
        }} />
        {/* Gradient transition from canvas bg to dark */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          top: 0, height: '80px',
          background: 'linear-gradient(to bottom, var(--canvas-bg) 0%, #0a0a0b 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        {/* Cards */}
        {items.map((item, idx) => {
          const cardX = idx * UNIT - offsetRef.current;
          // Skip far off-screen cards
          if (cardX < -CARD_W * 3 || cardX > containerW + CARD_W * 3) return null;

          const { left, transform, opacity, zIndex } = getCardTransform(idx);

          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                top: '50px',
                left: `${left}px`,
                width: `${CARD_W}px`,
                height: '350px',
                transform,
                opacity,
                zIndex,
                transformOrigin: 'center center',
                background: '#16171d',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '1.5rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#FFFFFF',
                boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                boxSizing: 'border-box',
                cursor: 'default',
              }}
            >
              {/* Number */}
              <span style={{
                position: 'absolute', top: '1rem', right: '1rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.2)',
              }}>
                {item.num}
              </span>

              <div>
                {/* Icon */}
                <div style={{
                  width: '38px', height: '38px',
                  background: 'rgba(255,85,34,0.12)',
                  border: '1px solid rgba(255,85,34,0.25)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#FF5522', marginBottom: '1rem',
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem', fontWeight: 400,
                  color: '#FFFFFF', marginBottom: '0.6rem', lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '1rem' }}>
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.2rem 0.55rem', borderRadius: '999px', color: '#D1D5DB',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* Edge fade overlays — match reference mask gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, var(--canvas-bg) 0%, transparent 12%, transparent 88%, var(--canvas-bg) 100%)',
          zIndex: 200, pointerEvents: 'none',
        }} />
      </div>

      {/* Dark bottom padding area */}
      <div style={{ background: '#0a0a0b', height: '40px' }} />
    </section>
  );
};

export default WhatIBuild;
