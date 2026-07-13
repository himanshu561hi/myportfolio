import React, { useEffect, useRef } from 'react';

export const AnimatedNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false }); // alpha false optimizes performance for solid background
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Responsive Dimensions
    const setDimensions = () => {
      // Use devicePixelRatio for sharp rendering on high-DPI displays like MacBooks
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    
    setDimensions();

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', setDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * (window.innerWidth || 1000);
        this.y = Math.random() * (window.innerHeight || 1000);
        // Very slow movement speed
        this.vx = (Math.random() - 0.5) * 0.6; 
        this.vy = (Math.random() - 0.5) * 0.6;
      }

      update() {
        // Move particle continuously
        this.x += this.vx;
        this.y += this.vy;

        // Bounce smoothly off edges
        if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;

        // Smooth mouse attraction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Attract towards mouse
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // Force is stronger when closer, but overall very soft
          const force = (mouse.radius - distance) / mouse.radius;
          
          this.x += forceDirectionX * force * 1.2;
          this.y += forceDirectionY * force * 1.2;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#666666';
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = 160; // Around 140-180
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      // Draw background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Update particles
      particles.forEach(p => p.update());
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Opacity decreases linearly with distance
            const opacity = 1 - (distance / 120);
            ctx.beginPath();
            // Using rgba(100,100,100, opacity * 0.18) based on user specs
            ctx.strokeStyle = `rgba(100, 100, 100, ${opacity * 0.18})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        // Draw the particle nodes on top of the lines
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-auto"
    />
  );
};
