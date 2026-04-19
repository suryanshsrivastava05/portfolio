'use client';

import { useRef, useEffect, useState } from 'react';

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Three.js', color: '#049EF4' },
  { name: 'GSAP', color: '#88CE02' },
  { name: 'Supabase', color: '#3FCF8E' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Framer', color: '#BB4B96' },
  { name: 'Git', color: '#F05032' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'Vercel', color: '#ffffff' },
];

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  skill: typeof skills[0];
  mass: number;
}

export default function SkillBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, pressed: false });
  const rafRef = useRef(0);
  const [dims, setDims] = useState({ w: 800, h: 400 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const w = parent.clientWidth;
    const h = 400;
    canvas.width = w * (window.devicePixelRatio || 1);
    canvas.height = h * (window.devicePixelRatio || 1);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    setDims({ w, h });

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

    // Create bubbles
    const bubbles: Bubble[] = skills.map((skill) => {
      const radius = skill.name.length * 4 + 18;
      return {
        x: Math.random() * (w - radius * 2) + radius,
        y: -radius - Math.random() * 200,
        vx: (Math.random() - 0.5) * 2,
        vy: 0,
        radius,
        skill,
        mass: radius,
      };
    });
    bubblesRef.current = bubbles;

    const gravity = 0.25;
    const friction = 0.99;
    const bounce = 0.7;

    function resolveCollision(a: Bubble, b: Bubble) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const minDist = a.radius + b.radius;

      if (dist < minDist && dist > 0) {
        const nx = dx / dist;
        const ny = dy / dist;
        const overlap = minDist - dist;

        // Separate
        const totalMass = a.mass + b.mass;
        a.x -= (overlap * b.mass / totalMass) * nx;
        a.y -= (overlap * b.mass / totalMass) * ny;
        b.x += (overlap * a.mass / totalMass) * nx;
        b.y += (overlap * a.mass / totalMass) * ny;

        // Bounce
        const dvx = a.vx - b.vx;
        const dvy = a.vy - b.vy;
        const dvn = dvx * nx + dvy * ny;

        if (dvn > 0) {
          const impulse = (2 * dvn) / totalMass;
          a.vx -= impulse * b.mass * nx * bounce;
          a.vy -= impulse * b.mass * ny * bounce;
          b.vx += impulse * a.mass * nx * bounce;
          b.vy += impulse * a.mass * ny * bounce;
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.fillStyle = '#13131a';
      ctx.fillRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const bubble of bubbles) {
        // Gravity
        bubble.vy += gravity;

        // Mouse repulsion
        const dmx = bubble.x - mx;
        const dmy = bubble.y - my;
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
        if (mouseDist < 150 && mouseDist > 0) {
          const force = (150 - mouseDist) / 150;
          const pushForce = mouseRef.current.pressed ? 8 : 2;
          bubble.vx += (dmx / mouseDist) * force * pushForce;
          bubble.vy += (dmy / mouseDist) * force * pushForce;
        }

        // Apply velocity
        bubble.vx *= friction;
        bubble.vy *= friction;
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        // Wall collisions
        if (bubble.x - bubble.radius < 0) {
          bubble.x = bubble.radius;
          bubble.vx *= -bounce;
        }
        if (bubble.x + bubble.radius > w) {
          bubble.x = w - bubble.radius;
          bubble.vx *= -bounce;
        }
        if (bubble.y - bubble.radius < 0) {
          bubble.y = bubble.radius;
          bubble.vy *= -bounce;
        }
        if (bubble.y + bubble.radius > h) {
          bubble.y = h - bubble.radius;
          bubble.vy *= -bounce;
        }
      }

      // Bubble-bubble collisions
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          resolveCollision(bubbles[i], bubbles[j]);
        }
      }

      // Draw bubbles
      for (const bubble of bubbles) {
        const { x, y, radius, skill } = bubble;

        // Circle fill
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${skill.color}18`;
        ctx.fill();
        ctx.strokeStyle = `${skill.color}55`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.font = `600 ${Math.max(10, radius * 0.42)}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = skill.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, x, y);
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const handleMouseDown = () => { mouseRef.current.pressed = true; };
    const handleMouseUp = () => { mouseRef.current.pressed = false; };
    const handleMouseLeave = () => { mouseRef.current.x = -1000; mouseRef.current.y = -1000; };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const nw = parent.clientWidth;
      canvas.width = nw * (window.devicePixelRatio || 1);
      canvas.style.width = nw + 'px';
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      setDims({ w: nw, h });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border">
      <canvas
        ref={canvasRef}
        style={{ width: dims.w, height: dims.h, cursor: 'none', display: 'block' }}
      />
    </div>
  );
}
