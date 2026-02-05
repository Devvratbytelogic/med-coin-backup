import React, { useEffect, useRef } from 'react';

const DPR =
  typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

const HeroWaveBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  /* 🔧 Tuned constants - reduced grid on mobile to prevent hang */
  const COLOR = '#f5c542';
  const FOCAL_LENGTH = 900;
  const WAVE_STRENGTH = 60;
  const SPEED = 0.05;
  const HORIZON_Y = 0.68;

  const getGridConfig = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return { DOT_GAP: 35, COLS: 100, ROWS: 100 };
    }
    return { DOT_GAP: 35, COLS: 200, ROWS: 300 };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dots = [];
    let time = 0;
    let gridConfig = getGridConfig();

    const initGrid = () => {
      gridConfig = getGridConfig();
      const { DOT_GAP, COLS, ROWS } = gridConfig;
      dots = [];
      const startX = -(COLS * DOT_GAP) / 2;
      const startZ = 0;

      for (let z = 0; z < ROWS; z++) {
        for (let x = 0; x < COLS; x++) {
          dots.push({
            x: startX + x * DOT_GAP,
            z: z * DOT_GAP,
            baseY: height * HORIZON_Y,
          });
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initGrid();
    };

    const animate = () => {
      /* Background */
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const { ROWS, DOT_GAP } = gridConfig;
      const maxZ = ROWS * DOT_GAP;

      for (const dot of dots) {
        const wave =
          Math.sin(dot.x * 0.004 + time) * WAVE_STRENGTH +
          Math.cos(dot.z * 0.003 + time * 0.8) * WAVE_STRENGTH;

        const y = dot.baseY + wave;

        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + dot.z);
        const sx = cx + dot.x * scale;
        const sy = cy + y * scale;

        if (sy > height + 60 || sx < -60 || sx > width + 60) continue;

        /* Fog / depth fade */
        const depthFade = 1 - dot.z / maxZ;
        const alpha = Math.max(0.08, depthFade * scale * 1.4);

        const size = Math.max(0.4, 2.6 * scale);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = COLOR;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      time += SPEED;
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-wave-canvas"
      aria-hidden="true"
    />
  );
};

export default HeroWaveBackground;
