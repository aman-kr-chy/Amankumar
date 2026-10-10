import React, { useRef, useState, useEffect } from 'react';
import { 
  PenTool, 
  Eraser, 
  RotateCcw, 
  Trash2, 
  Square, 
  Circle as CircleIcon, 
  Download, 
  Sparkles,
  ArrowDownRight
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const PILL_WORDS = ['Design', 'Build', 'Create', 'Code', 'Launch', 'Ship'];

const Hero = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen'); // 'pen', 'eraser', 'rect', 'circle'
  const [color, setColor] = useState('#121316');
  const [lineWidth, setLineWidth] = useState(3);
  const [history, setHistory] = useState([]);
  const startPosRef = useRef({ x: 0, y: 0 });
  const snapshotRef = useRef(null);

  // Cycling pill word
  const [wordIdx, setWordIdx] = useState(0);
  const [pillAnim, setPillAnim] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPillAnim(true);
      setTimeout(() => {
        setWordIdx(prev => (prev + 1) % PILL_WORDS.length);
        setPillAnim(false);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Colors palette matching the design
  const colors = [
    { label: 'Black', hex: '#121316' },
    { label: 'Orange', hex: '#FF5522' },
    { label: 'Blue', hex: '#3B82F6' },
    { label: 'Green', hex: '#10B981' },
    { label: 'Purple', hex: '#8B5CF6' }
  ];

  // Set up high-DPI canvas and initial welcoming doodle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      drawWelcomeDoodle(ctx, rect.width, rect.height);
      saveState();
    };

    const drawWelcomeDoodle = (context, width, height) => {
      context.clearRect(0, 0, width, height);

      // Welcoming doodle text & fun sketch
      context.save();
      context.font = '24px "Caveat", cursive, sans-serif';
      context.fillStyle = '#FF5522';
      context.fillText('Hey there! 👋 Try sketching your ideas here...', 45, 60);

      // Cute playful arrow
      context.beginPath();
      context.strokeStyle = '#FF5522';
      context.lineWidth = 2.5;
      context.lineCap = 'round';
      context.moveTo(45, 80);
      context.bezierCurveTo(80, 95, 120, 105, 160, 100);
      context.stroke();

      // Arrow head
      context.beginPath();
      context.moveTo(150, 90);
      context.lineTo(162, 100);
      context.lineTo(152, 110);
      context.stroke();

      // Small lightbulb or spark doodle
      context.beginPath();
      context.strokeStyle = '#3B82F6';
      context.lineWidth = 2;
      context.arc(width - 80, 70, 18, 0, Math.PI * 2);
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#10B981';
      context.arc(width - 74, 66, 4, 0, Math.PI * 2);
      context.fillStyle = '#10B981';
      context.fill();

      context.font = '16px "JetBrains Mono", monospace';
      context.fillStyle = '#8E9099';
      context.fillText('// canvas ready', width - 170, 115);
      context.restore();
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => [...prev.slice(-15), imageData]);
  };

  const undo = () => {
    if (history.length <= 1) return;
    const newHistory = [...history];
    newHistory.pop(); // Remove current
    const previous = newHistory[newHistory.length - 1];
    setHistory(newHistory);

    const canvas = canvasRef.current;
    if (!canvas || !previous) return;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(previous, 0, 0);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    saveState();
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    const { x, y } = getCoordinates(e);
    startPosRef.current = { x, y };
    setIsDrawing(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    snapshotRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
    ctx.lineWidth = tool === 'eraser' ? lineWidth * 4 : lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'pen' || tool === 'eraser') {
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === 'rect') {
      ctx.putImageData(snapshotRef.current, 0, 0);
      const width = x - startPosRef.current.x;
      const height = y - startPosRef.current.y;
      ctx.strokeRect(startPosRef.current.x, startPosRef.current.y, width, height);
    } else if (tool === 'circle') {
      ctx.putImageData(snapshotRef.current, 0, 0);
      const radius = Math.sqrt(
        Math.pow(x - startPosRef.current.x, 2) + Math.pow(y - startPosRef.current.y, 2)
      );
      ctx.beginPath();
      ctx.arc(startPosRef.current.x, startPosRef.current.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow"></div>

      <div className="container">
        <div className="hero-header-content">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <span className="section-label">
              <Sparkles size={14} /> AI & Full-Stack Developer
            </span>
          </div>

          <h1 className="hero-headline">
            I{' '}
            <span
              className="hero-badge-pill"
              style={{
                display: 'inline-block',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease',
                transform: pillAnim ? 'translateY(-12px) scale(0.9)' : 'translateY(0) scale(1)',
                opacity: pillAnim ? 0 : 1,
                minWidth: '130px',
                textAlign: 'center',
              }}
            >
              {PILL_WORDS[wordIdx]}
            </span>{' '}
            ideas into reality
          </h1>

          <p className="hero-subheadline">
            <strong>Full-Stack & AI developer</strong> building intelligent products, scalable software, and high-impact digital experiences. I turn concepts into real-world solutions through clean code, design precision, and curiosity.
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span className="handwritten-note">
              think it, sketch it, build it <ArrowDownRight size={22} style={{ transform: 'translateY(2px)' }} />
            </span>
          </div>
        </div>

        {/* INTERACTIVE LIVE DRAWING WHITEBOARD */}
        <div className="whiteboard-wrapper">
          <div className="whiteboard-toolbar">
            <div className="toolbar-group">
              <button 
                className={`tool-btn ${tool === 'pen' ? 'active' : ''}`}
                onClick={() => setTool('pen')}
                title="Pen / Brush"
              >
                <PenTool size={16} />
              </button>
              <button 
                className={`tool-btn ${tool === 'rect' ? 'active' : ''}`}
                onClick={() => setTool('rect')}
                title="Rectangle"
              >
                <Square size={16} />
              </button>
              <button 
                className={`tool-btn ${tool === 'circle' ? 'active' : ''}`}
                onClick={() => setTool('circle')}
                title="Circle"
              >
                <CircleIcon size={16} />
              </button>
              <button 
                className={`tool-btn ${tool === 'eraser' ? 'active' : ''}`}
                onClick={() => setTool('eraser')}
                title="Eraser"
              >
                <Eraser size={16} />
              </button>
            </div>

            {/* Color Palette */}
            <div className="toolbar-group">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  className={`color-dot ${color === c.hex && tool !== 'eraser' ? 'active' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => {
                    setColor(c.hex);
                    if (tool === 'eraser') setTool('pen');
                  }}
                  title={c.label}
                />
              ))}
            </div>

            {/* Stroke Thickness */}
            <div className="toolbar-group">
              {[2, 4, 8].map((size) => (
                <button
                  key={size}
                  className={`stroke-btn ${lineWidth === size ? 'active' : ''}`}
                  onClick={() => setLineWidth(size)}
                >
                  {size === 2 ? 'Fine' : size === 4 ? 'Medium' : 'Bold'}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="toolbar-group">
              <button className="tool-btn" onClick={undo} title="Undo">
                <RotateCcw size={16} />
              </button>
              <button className="tool-btn" onClick={clearCanvas} title="Clear Canvas">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <div className="canvas-container">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
            <div className="whiteboard-overlay-hint">
              <span className="handwritten-note" style={{ fontSize: '1.25rem', opacity: 0.85 }}>
                canvas is live ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
