'use client';

import dynamic from 'next/dynamic';
import LiquidBlob from '@/components/physics/liquid-blob';
import Marquee from '@/components/ui/marquee';
import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const ParticleConstellation = dynamic(
  () => import('@/components/physics/particle-constellation'),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background layers */}
      <ParticleConstellation />
      <LiquidBlob />

      {/* Content */}
      <div className="relative z-10 section-container flex-1 flex items-center pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center w-full">
          {/* Left: Text content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="badge badge-available">
                Creative Developer
              </span>
            </div>

            <h1
              className="font-[family-name:var(--font-display)] font-bold text-foreground mb-6 leading-[1.1]"
              style={{ fontSize: 'var(--fs-display)' }}
            >
              Crafting immersive digital experiences with code, design, and a touch of magic.
            </h1>

            <p className="text-text-muted text-lg mb-10 max-w-lg">
              I help brands build beautiful, functional, and user-centric web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <MagneticButton href="/projects" variant="primary" className="w-full sm:w-auto text-center justify-center">
                <span>See All Projects</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline" className="w-full sm:w-auto text-center justify-center">
                <span>Contact Now</span>
                <MessageSquare size={16} />
              </MagneticButton>
            </div>
          </div>

          {/* Right: Testimonial mini-cards */}
          <div className="hidden lg:flex flex-col gap-4 max-w-xs xl:max-w-sm">
            <div className="glass rounded-2xl p-5 relative overflow-hidden">
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                &ldquo; Working with him was a game changer! &rdquo;
              </p>
              <p className="text-xs text-accent font-semibold">— Client A</p>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent/10 blur-xl" />
            </div>
            <div className="glass rounded-2xl p-5 relative overflow-hidden">
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                &ldquo; We increased our conversions by 200% &rdquo;
              </p>
              <p className="text-xs text-accent-secondary font-semibold">— Client B</p>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent-secondary/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-auto">
        <Marquee />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
