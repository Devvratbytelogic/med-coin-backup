import { useEffect, useRef } from "react";
const DPR =
  typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

function resizeCanvas(canvas, ctx) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * DPR;
  canvas.height = height * DPR;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
// import { resizeCanvas, DPR } from "./canvasUtils";

export default function HeroWaveBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const DOT_GAP = 28;
  const ROWS = 40;
  const COLOR = "#f5c542";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dots = [];
    let time = 0;
    let width = 0;
    let height = 0;

    const createGrid = () => {
      dots = [];
      const cols = Math.ceil(width / DOT_GAP);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * DOT_GAP,
            y: r * DOT_GAP,
            depth: r / ROWS,
          });
        }
      }
    };

    const handleResize = () => {
      resizeCanvas(canvas, ctx);
      width = canvas.width / DPR;
      height = canvas.height / DPR;
      createGrid();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const wave =
          Math.sin((dot.x + time) * 0.015) * 20 +
          Math.cos((dot.y + time) * 0.02) * 20;

        const size = 1.2 + dot.depth * 1.5;
        const alpha = 0.4 + dot.depth * 0.7;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = COLOR;

        ctx.beginPath();
        ctx.arc(
          dot.x,
          height * 0.55 + dot.y + wave,
          size,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-wave-canvas hero-wave" />;
}


// import { useEffect, useRef } from "react";
// import { resizeCanvas, DPR } from "./canvasUtils";

export function GoldenTrailCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const nodes = useRef([]);

  const NODE_COUNT = 120;
  const CONNECTION_DIST = 160;
  const MOUSE_DIST = 200;

  const initNodes = (w, h) => {
    nodes.current = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;

    const handleResize = () => {
      resizeCanvas(canvas, ctx);
      width = canvas.width / DPR;
      height = canvas.height / DPR;
      initNodes(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.current.length; i++) {
        const n = nodes.current[i];

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = mouse.current.x - n.x;
        const dy = mouse.current.y - n.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_DIST) {
          n.x += dx * 0.01;
          n.y += dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(243,186,47,0.6)";
        ctx.fill();

        for (let j = i + 1; j < nodes.current.length; j++) {
          const n2 = nodes.current[j];
          const d = Math.hypot(n.x - n2.x, n.y - n2.y);

          if (d < CONNECTION_DIST) {
            ctx.strokeStyle = `rgba(243,186,47,${
              (1 - d / CONNECTION_DIST) * 0.25
            })`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-wave-canvas d-none d-md-block" />;
}
