import React, { useRef, useEffect } from 'react';

export default function SectionParticles({ type = 'stars', isDarkMode }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const isVisible = { current: true };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
    }, { threshold: 0.01 });

    observer.observe(canvas);

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : 600;
      initParticles();
    };

    let resizeTimeout;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    // Set colors based on mode
    const primaryColor = isDarkMode ? 'rgba(45, 212, 191, ' : 'rgba(0, 0, 0, '; // Teal vs Black
    const secondaryColor = isDarkMode ? 'rgba(6, 182, 212, ' : 'rgba(15, 23, 42, '; // Cyan vs Slate

    // Particle Factory
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;

        if (type === 'bubbles') {
          this.size = Math.random() * 15 + 6;
          this.speedY = -(Math.random() * 0.6 + 0.2);
          this.speedX = (Math.random() - 0.5) * 0.3;
          this.y = canvas.height + Math.random() * 20;
          this.wobbleSpeed = Math.random() * 0.02 + 0.01;
          this.wobbleRange = Math.random() * 1.5 + 0.5;
        } else if (type === 'rain') {
          this.size = Math.random() * 1.2 + 0.4;
          this.length = Math.random() * 10 + 3;
          this.speedY = Math.random() * 5 + 4;
          this.speedX = 0;
        } else if (type === 'cubes') {
          this.size = Math.random() * 15 + 6;
          this.speedY = (Math.random() - 0.5) * 0.4;
          this.speedX = (Math.random() - 0.5) * 0.4;
        } else if (type === 'stars') {
          this.size = Math.random() * 4 + 1.5;
          this.twinkle = Math.random() > 0.5;
        }
      }

      update() {
        if (type === 'bubbles') {
          this.y += this.speedY;
          this.angle += this.wobbleSpeed;
          this.x += this.speedX + Math.sin(this.angle) * this.wobbleRange * 0.1;

          if (mouseRef.current.active) {
            const dx = this.x - mouseRef.current.x;
            const dy = this.y - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 80) {
              const force = (80 - dist) / 80;
              this.x += (dx / dist) * force * 2.5;
              this.y += (dy / dist) * force * 2.5;
            }
          }

          if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
            this.reset();
          }
        } else if (type === 'rain') {
          this.y += this.speedY;
          this.x += this.speedX;
          if (this.y > canvas.height + 20) {
            this.reset();
            this.y = -20;
          }
        } else if (type === 'cubes') {
          this.x += this.speedX;
          this.y += this.speedY;
          this.angle += this.spin;
          
          if (this.x < -30 || this.x > canvas.width + 30 || this.y < -30 || this.y > canvas.height + 30) {
            this.reset();
          }
        } else if (type === 'stars') {
          if (this.twinkle) {
            this.opacity += this.fadeSpeed;
            if (this.opacity > 0.8 || this.opacity < 0.1) {
              this.fadeSpeed = -this.fadeSpeed;
            }
          }
          if (mouseRef.current.active) {
            const dx = (mouseRef.current.x - canvas.width / 2) * 0.005;
            const dy = (mouseRef.current.y - canvas.height / 2) * 0.005;
            this.x -= dx * 0.15;
            this.y -= dy * 0.15;
          }
          this.x += this.speedX * 0.15;
          this.y += this.speedY * 0.15;
          
          if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
          }
        } else {
          this.x += this.speedX;
          this.y += this.speedY;
          
          if (type === 'nodes' && mouseRef.current.active) {
            const dx = this.x - mouseRef.current.x;
            const dy = this.y - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 100) {
              const force = (100 - dist) / 100;
              this.x -= (dx / dist) * force * 0.15;
              this.y -= (dy / dist) * force * 0.15;
            }
          }

          if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
          }
        }
      }

      draw() {
        ctx.save();
        if (type === 'bubbles') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor + '0.06)';
          ctx.strokeStyle = primaryColor + '0.2)';
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.15, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.fill();
        } else if (type === 'rain') {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.speedX * 1.5, this.y + this.length);
          ctx.strokeStyle = secondaryColor + '0.2)';
          ctx.lineWidth = this.size;
          ctx.stroke();
        } else if (type === 'cubes') {
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.strokeStyle = primaryColor + '0.12)';
          ctx.fillStyle = secondaryColor + '0.02)';
          ctx.lineWidth = 1;
          ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (type === 'stars') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = isDarkMode ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(0, 0, 0, ${this.opacity})`;
          ctx.fill();
        } else if (type === 'nebula') {
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 6);
          grad.addColorStop(0, secondaryColor + '0.05)');
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor + '0.4)';
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const initParticles = () => {
      const isMobile = window.innerWidth < 768;
      // DYNAMIC PARTICLE COUNT SCALING FOR PERFORMANCE (reduces count on mobile devices by 60%!)
      let count = isMobile ? 35 : 100;
      if (type === 'stars') count = isMobile ? 65 : 180;
      if (type === 'rain') count = isMobile ? 120 : 350;
      if (type === 'nebula') count = isMobile ? 8 : 18;
      if (type === 'cubes') count = isMobile ? 12 : 30;

      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    resizeCanvas();

    const drawConnections = () => {
      if (type !== 'nodes') return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 90) {
            const alpha = (90 - dist) / 90 * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = primaryColor + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      // PAUSES COMPUTATIONS & DRAWINGS ENTIRELY WHEN SECTION IS NOT IN TAB OR IN VIEWPORT
      if (isVisible.current && document.visibilityState === 'visible') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          p.update();
          p.draw();
        });

        drawConnections();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [type, isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: isDarkMode ? 'screen' : 'multiply' }}
    />
  );
}
