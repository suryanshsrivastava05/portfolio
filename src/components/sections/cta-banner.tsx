'use client';

import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section id="cta-banner" className="section relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-glow/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 section-container">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">Let&apos;s Connect</span>
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-12"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Let&apos;s Grow Together
        </h2>

        {/* Pricing Cards - 2 columns like Polo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <div className="card p-8 hover:border-accent/30 transition-all duration-500">
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-2 text-foreground">
              Web Development
            </h3>
            <p className="text-2xl font-black gradient-text font-[family-name:var(--font-display)] mb-4">
              Starting from $999
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Building fast, scalable, and responsive web applications from the ground up.
            </p>
          </div>

          <div className="card p-8 hover:border-accent/30 transition-all duration-500">
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-2 text-foreground">
              UI/UX Design
            </h3>
            <p className="text-2xl font-black gradient-text font-[family-name:var(--font-display)] mb-4">
              Starting from $499
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Creating intuitive and visually stunning user interfaces that convert.
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/projects" variant="primary">
            See All Projects <ArrowRight size={14} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Get Started Now <ArrowRight size={14} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
