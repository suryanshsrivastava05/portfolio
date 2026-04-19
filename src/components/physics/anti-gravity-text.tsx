'use client';

import { useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AntiGravityText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  const addCharRef = useCallback((el: HTMLSpanElement | null, index: number) => {
    if (el) charsRef.current[index] = el;
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const chars = charsRef.current.filter(Boolean);

      // Initial reveal animation
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.06,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.5,
        }
      );

      // Floating animation for each character
      chars.forEach((char, i) => {
        gsap.to(char, {
          y: `random(-15, 15)`,
          x: `random(-5, 5)`,
          rotation: `random(-3, 3)`,
          duration: `random(3, 5)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.1,
        });
      });

      // Mouse interaction
      const handleMouseMove = (e: MouseEvent) => {
        mousePos.current = { x: e.clientX, y: e.clientY };

        chars.forEach((char) => {
          if (!char) return;
          const rect = char.getBoundingClientRect();
          const charCenterX = rect.left + rect.width / 2;
          const charCenterY = rect.top + rect.height / 2;
          const dx = charCenterX - mousePos.current.x;
          const dy = charCenterY - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 30;
            const angle = Math.atan2(dy, dx);
            gsap.to(char, {
              x: `+=${Math.cos(angle) * force}`,
              y: `+=${Math.sin(angle) * force}`,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    },
    { scope: containerRef }
  );

  const letters = text.split('');

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-1 md:gap-2" style={{ perspective: '600px' }}>
      {letters.map((letter, i) => (
        <span
          key={i}
          ref={(el) => addCharRef(el, i)}
          className="inline-block text-foreground font-[family-name:var(--font-display)] font-black"
          style={{
            fontSize: 'var(--fs-display)',
            willChange: 'transform',
            textShadow: '0 0 30px rgba(108, 99, 255, 0.3)',
            lineHeight: 1.1,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
}
