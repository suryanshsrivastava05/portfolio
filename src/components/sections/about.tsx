'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingAvatar from '@/components/physics/floating-avatar';
import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillPills = [
  'Video Editing', 'Motion Graphics', 'Color Grading', 'Premiere Pro', 'After Effects', 'DaVinci Resolve',
];

const experience = [
  { role: 'Freelance', company: 'Independent', year: '2025' },
  { role: 'Lead Video Editor', company: 'Creative Studio', year: '2024' },
  { role: 'Motion Designer', company: 'Agency XYZ', year: '2023' },
  { role: 'Content Creator', company: 'Media House', year: '2021' },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.fromTo(
        containerRef.current.querySelectorAll('.about-animate'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="about" className="section">
      <div ref={containerRef} className="section-container">
        {/* Section badge */}
        <div className="text-center mb-4 about-animate">
          <span className="badge badge-available">Expert Video Editor</span>
        </div>

        {/* Section title */}
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-16 about-animate"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Suryansh Srivastava, Your Editor
        </h2>

        {/* Main card */}
        <div className="card p-8 md:p-12 about-animate">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Left: Avatar */}
            <div>
              <FloatingAvatar />
              <div className="text-center mt-6">
                <span className="badge badge-available">Available for work</span>
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-text-muted uppercase tracking-wider mb-2">Hello I am Suryansh Srivastava</h3>
                <p className="text-lg font-semibold text-foreground font-[family-name:var(--font-display)]">
                  Video Editor & Motion Designer Based in India.
                </p>
              </div>

              <p className="text-text-muted leading-relaxed">
                I&apos;m Suryansh Srivastava, a dedicated Video Editor & Motion Designer. I specialize in creative storytelling with seamless post-production execution to craft exceptional visual experiences.
              </p>

              <MagneticButton href="/contact" variant="outline" className="text-sm">
                Connect with me <ArrowRight size={14} />
              </MagneticButton>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skillPills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs font-medium bg-surface border border-border text-text-muted hover:border-accent/30 hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Experience timeline - compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {experience.map((exp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-surface/50 border border-border">
                    <p className="text-xs text-accent font-semibold mb-1">{exp.role}</p>
                    <p className="text-xs text-text-muted">{exp.company}</p>
                    <p className="text-xs text-text-muted mt-1">{exp.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
