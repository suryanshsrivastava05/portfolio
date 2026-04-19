'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface KineticTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
}

export default function KineticText({ text, tag: Tag = 'h2', className = '' }: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const heading = containerRef.current.querySelector('[data-kinetic]');
      if (!heading) return;

      // Split text into words and characters
      const words = text.split(' ');
      heading.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="kinetic-word inline-block">${word
              .split('')
              .map((char) => `<span class="kinetic-char inline-block">${char}</span>`)
              .join('')}</span></span>`
        )
        .join('<span class="inline-block">&nbsp;</span>');

      const chars = heading.querySelectorAll('.kinetic-char');

      gsap.fromTo(
        chars,
        { y: '110%', opacity: 0, rotateX: -80 },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} style={{ perspective: '600px' }}>
      <Tag
        data-kinetic
        className={`font-[family-name:var(--font-display)] font-bold ${className}`}
        style={{ fontSize: Tag === 'h2' ? 'var(--fs-h2)' : Tag === 'h3' ? 'var(--fs-h3)' : 'var(--fs-h1)' }}
      >
        {text}
      </Tag>
    </div>
  );
}
