'use client';

import FloatingAvatar from '@/components/physics/floating-avatar';
import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight } from 'lucide-react';

const skillPills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js',
];

const experience = [
  { role: 'Senior Developer', company: 'Tech Corp', year: '2024' },
  { role: 'Frontend Engineer', company: 'Digital Agency', year: '2022' },
  { role: 'Web Developer', company: 'Startup Inc', year: '2020' },
  { role: 'UI/UX Designer', company: 'Creative Studio', year: '2019' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section relative z-10 py-24">
      <div className="section-container">
        {/* Section badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">Creative Developer</span>
        </div>

        {/* Section title */}
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-16 about-animate"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Suryansh Srivastava, Your Developer
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
                  Creative Developer Based in India.
                </p>
              </div>

              <p className="text-text-muted leading-relaxed">
                Passionate about building beautiful, functional, and user-centric web applications. With a background in both design and development, I bridge the gap between aesthetics and performance.
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
