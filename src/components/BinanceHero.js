import React, { useEffect, useRef } from "react";
import '../stylesheet/binance.css';

export default function BinanceHero() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        const particleCount = 90;

        const resize = () => {
            const rect = container.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        class Particle {
            constructor() {
                this.reset();
                this.life = Math.random() * this.maxLife;
            }

            reset() {
                const w = container.getBoundingClientRect().width;
                const h = container.getBoundingClientRect().height;
                this.x = w / 2;
                this.y = h / 2;
                this.size = Math.random() * 1.5 + 0.3;
                this.maxLife = 80 + Math.random() * 60;
                this.life = 0;
                this.angle = Math.random() * Math.PI * 2;
                this.orbitRadiusX = w * 0.35 + Math.random() * w * 0.15;
                this.orbitRadiusY = h * 0.25 + Math.random() * h * 0.15;
                this.speedX = 0.02 + Math.random() * 0.015;
                this.color = `rgba(240, 185, 11, ${0.3 + Math.random() * 0.7})`;
            }

            update(time) {
                const w = container.getBoundingClientRect().width;
                const h = container.getBoundingClientRect().height;
                this.angle += this.speedX;

                const targetX = w / 2 + Math.cos(this.angle) * this.orbitRadiusX;
                const targetY =
                    h / 2 +
                    Math.sin(this.angle * 0.5) * this.orbitRadiusY +
                    Math.sin(time / 1000) * 4;

                this.x = targetX + (Math.random() - 0.5) * 4;
                this.y = targetY + (Math.random() - 0.5) * 4;

                this.life++;
                if (this.life >= this.maxLife) {
                    this.reset();
                }
            }

            draw(ctx) {
                const opacity = 1 - this.life / this.maxLife;
                ctx.fillStyle = this.color.replace(
                    /[^,]+(?=\))/,
                    opacity.toString()
                );

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                if (this.size > 1.2) {
                    ctx.shadowBlur = 6;
                    // ctx.shadowColor = "#F0B90B";
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = (time) => {
            const w = container.getBoundingClientRect().width;
            const h = container.getBoundingClientRect().height;
            ctx.clearRect(0, 0, w, h);

            particles.forEach((p) => {
                p.update(time);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate(0);

        const resizeObserver = new ResizeObserver(() => {
            resize();
            init();
        });
        resizeObserver.observe(container);

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="powered_by powered_by_with_particles">
                <canvas
                    ref={canvasRef}
                    className="powered_by_particle_canvas"
                />
                <div className="powered_by_img">
                    <img
                        src="/images/binance.png"
                        alt="Binance"
                        className="img-fluid img_contain"
                    />
                </div>
                <div className="powered_by_content">
                    <p className="powered_by_name">BINANCE SMART CHAIN</p>
                </div>
            </div>
        </>
    );
}
