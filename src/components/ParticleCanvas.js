import React, { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // canvas.style.background = "black";

    let animationFrameId;
    const speed = 5;
    const period = 1000;

    const clearCanvas = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    function Particle(x, y, speed, color) {
      this.x = x;
      this.y = y;
      this.speed = { ...speed };
      this.color = color;

      this.update = function () {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        this.x += this.speed.x;
        this.y += this.speed.y;
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        const ang = Math.atan2(this.speed.y, this.speed.x);
        const mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
        const options = [ang + Math.PI / 4, ang - Math.PI / 4];
        const chosen = Math.floor(Math.random() * options.length);
        if (Math.random() < 0.05) {
          this.speed.x = Math.cos(options[chosen]) * mag;
          this.speed.y = Math.sin(options[chosen]) * mag;
        }
      };
    }

    const pulse = () => {
      const h = Math.random() * (210 - 150) + 150;
      for (let i = 0; i < 56; i++) {
        const angle = (i / 8) * 2 * Math.PI;
        const speedObj = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed,
        };
        particles.current.push(
          new Particle(canvas.width / 2, canvas.height / 2, speedObj, `hsl(${h}, 100%, 50%)`)
        );
      }
      setTimeout(pulse, period);
    };

    const gameMove = () => {
      animationFrameId = requestAnimationFrame(gameMove);
      clearCanvas();
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.update();
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles.current.splice(i, 1);
        }
      }
    };

    pulse();
    gameMove();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ParticleCanvas;
