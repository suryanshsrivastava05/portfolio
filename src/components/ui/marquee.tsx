'use client';

import { useRef } from 'react';

const marqueeItems = [
  '"Absolutely mind-blowing work" — TechCrunch',
  '★★★★★ Client Satisfaction',
  'Featured on Awwwards',
  '"Best portfolio of 2025" — CSS Design Awards',
  'Available for freelance work',
  '100+ Projects Delivered',
  '"The future of web design" — Smashing Magazine',
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-5 border-y border-border group"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
        style={{ width: 'max-content' }}
      >
        {/* Duplicate for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-8 text-sm text-text-muted font-[family-name:var(--font-mono)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
