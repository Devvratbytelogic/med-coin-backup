import React, { useEffect, useRef } from "react";

const ParticleAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        const particleCount = 200;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.8;
        };

        class Particle {
            constructor() {
                this.reset();
                this.life = Math.random() * this.maxLife;
            }

            reset() {
                this.x = canvas.width / 2;
                this.y = canvas.height / 2;
                this.size = Math.random() * 2 + 0.5;
                this.maxLife = 100 + Math.random() * 100;
                this.life = 0;
                this.angle = Math.random() * Math.PI * 2;
                this.orbitRadiusX = 250 + Math.random() * 150;
                this.orbitRadiusY = 60 + Math.random() * 40;
                this.speedX = 0.02 + Math.random() * 0.01;
                this.color = `rgba(243, 186, 47, ${0.3 + Math.random() * 0.7})`;
            }

            update(time) {
                this.angle += this.speedX;

                const targetX =
                    canvas.width / 2 + Math.cos(this.angle) * this.orbitRadiusX;

                const targetY =
                    canvas.height / 2 +
                    Math.sin(this.angle * 0.5) * this.orbitRadiusY +
                    Math.sin(time / 1000) * 10;

                this.x = targetX + (Math.random() - 0.5) * 10;
                this.y = targetY + (Math.random() - 0.5) * 10;

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

                if (this.size > 2) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "#F3BA2F";
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            );

            gradient.addColorStop(0, "rgba(243, 186, 47, 0.05)");
            gradient.addColorStop(1, "rgba(11, 14, 17, 0)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.update(time);
                p.draw(ctx);
            });

            const flareAngle = time * 0.001;
            const flareX =
                canvas.width / 2 + Math.cos(flareAngle * 2) * 300;

            const flareY =
                canvas.height / 2 + Math.sin(flareAngle) * 80;

            const flareGradient = ctx.createRadialGradient(
                flareX,
                flareY,
                0,
                flareX,
                flareY,
                40
            );
            flareGradient.addColorStop(1, "rgba(243, 186, 47, 0)");

            ctx.fillStyle = flareGradient;
            ctx.beginPath();
            ctx.arc(flareX, flareY, 40, 0, Math.PI * 2);
            ctx.fill();

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate(0);

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="canvas_layer"
            />
        </>
    );
};

export default ParticleAnimation;
