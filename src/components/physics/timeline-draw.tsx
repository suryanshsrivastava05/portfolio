'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2025',
    title: 'Senior Creative Developer',
    company: 'Freelance',
    description: 'Leading high-impact projects for global brands with physics-driven interfaces.',
  },
  {
    year: '2024',
    title: 'Lead Frontend Engineer',
    company: 'TechCorp',
    description: 'Built design systems and interactive experiences for 10M+ users.',
  },
  {
    year: '2023',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    description: 'Designed and shipped 20+ production web applications with modern stacks.',
  },
  {
    year: '2021',
    title: 'UI/UX Designer & Developer',
    company: 'DesignStudio',
    description: 'Crafted user experiences and brought them to life with code and motion.',
  },
];

export default function TimelineDraw() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate the SVG line drawing
      if (lineRef.current) {
        const lineLength = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: lineLength,
          strokeDashoffset: lineLength,
        });

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1.5,
          },
        });
      }

      // Animate milestone nodes
      const nodes = containerRef.current.querySelectorAll('.timeline-node');
      nodes.forEach((node, i) => {
        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: node,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.1,
          }
        );
      });

      // Animate content cards
      const cards = containerRef.current.querySelectorAll('.timeline-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative py-8">
      {/* Central SVG line */}
      <svg
        className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2"
        width="2"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        <line
          ref={lineRef}
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="url(#timeline-gradient)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6c63ff" />
            <stop offset="100%" stopColor="#00f5d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Milestones */}
      <div className="space-y-16">
        {milestones.map((milestone, i) => (
          <div key={i} className="relative flex items-start gap-8 pl-16 md:pl-0">
            {/* Node */}
            <div
              className="timeline-node absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background"
              style={{ boxShadow: '0 0 15px rgba(108, 99, 255, 0.5)' }}
            />

            {/* Card */}
            <div
              className={`timeline-card card p-6 w-full md:w-[calc(50%-3rem)] ${
                i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}
            >
              <span className="badge badge-available mb-3 text-xs">{milestone.year}</span>
              <h4 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-1">
                {milestone.title}
              </h4>
              <p className="text-accent text-sm mb-2">{milestone.company}</p>
              <p className="text-text-muted text-sm leading-relaxed">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
