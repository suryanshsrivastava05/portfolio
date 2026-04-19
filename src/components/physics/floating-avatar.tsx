'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Code2, PenTool, Globe, Palette, Layers, Cpu } from 'lucide-react';

const orbitIcons = [
  { Icon: Code2, delay: 0, radius: 90, color: '#6c63ff' },
  { Icon: PenTool, delay: 1.5, radius: 90, color: '#ff6584' },
  { Icon: Globe, delay: 3, radius: 90, color: '#00f5d4' },
  { Icon: Palette, delay: 4.5, radius: 120, color: '#6c63ff' },
  { Icon: Layers, delay: 6, radius: 120, color: '#ff6584' },
  { Icon: Cpu, delay: 7.5, radius: 120, color: '#00f5d4' },
];

export default function FloatingAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!avatarRef.current) return;

      // Floating bob animation
      gsap.to(avatarRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current || !avatarRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        gsap.to(avatarRef.current, {
          rotateY: x * 10,
          rotateX: -y * 10,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-48 h-48 md:w-64 md:h-64 mx-auto" style={{ perspective: '800px' }}>
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full animate-pulse-glow" />

      {/* Avatar */}
      <div
        ref={avatarRef}
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30"
        style={{ willChange: 'transform' }}
      >
        {/* Profile photo */}
        <img
          src="/projects/profile.jpg"
          alt="Suryansh Srivastava"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orbiting Icons */}
      {orbitIcons.map(({ Icon, delay, radius, color }, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            animation: `orbit ${12 + i * 2}s linear infinite`,
            animationDelay: `${-delay}s`,
            ['--orbit-radius' as string]: `${radius}px`,
          }}
        >
          <div
            className="flex items-center justify-center w-9 h-9 rounded-full glass"
            style={{ boxShadow: `0 0 12px ${color}33` }}
          >
            <Icon size={16} style={{ color }} />
          </div>
        </div>
      ))}
    </div>
  );
}
