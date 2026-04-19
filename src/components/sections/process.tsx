'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Palette, Code2, Package } from 'lucide-react';
import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: "Let's Get In Touch",
    description: 'Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.',
    step: 'Step 1',
    icon: MessageSquare,
    color: '#6c63ff',
  },
  {
    number: '2',
    title: 'Grab Your Assets',
    description: "Share your raw footage, scripts, and unique vision, and I'll create a structured narrative that perfectly aligns with your goals.",
    step: 'Step 2',
    icon: Palette,
    color: '#ff6584',
  },
  {
    number: '3',
    title: 'Post-Production',
    description: 'I expertly edit, color grade, and add motion graphics to transform your raw assets into a powerful, engaging video.',
    step: 'Step 3',
    icon: Code2,
    color: '#00f5d4',
  },
  {
    number: '4',
    title: 'Final Render & Handover',
    description: 'Receive a fully polished, high-quality video tailored for your specific platforms with ongoing support for revisions.',
    step: 'Step 4',
    icon: Package,
    color: '#6c63ff',
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.process-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.1,
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="process" className="section">
      <div ref={containerRef} className="section-container">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">How it works</span>
        </div>

        {/* Title */}
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-4"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Process Is Everything
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-lg mx-auto">
          Simple, streamlined process is what gets you results
        </p>

        {/* Process cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-card card p-8 relative group hover:border-accent/20 transition-all duration-500"
            >
              {/* Number */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-6"
                style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}30` }}
              >
                {step.number}
              </div>

              <h3 className="text-base font-bold font-[family-name:var(--font-display)] mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <span className="text-xs text-text-muted/50 font-[family-name:var(--font-mono)]">
                {step.step}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <h3 className="text-base font-bold font-[family-name:var(--font-display)] mb-2">
            I am with you in every step
          </h3>
          <p className="text-text-muted text-sm mb-8">alongside you at each step for seamless experience</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/projects" variant="primary">
              See All Projects <ArrowRight size={14} />
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline">
              Contact Now
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
