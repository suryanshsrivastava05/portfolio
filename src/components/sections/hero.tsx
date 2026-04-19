'use client';

import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center px-6 md:px-24">
      <div className="max-w-3xl pt-20">
        <div className="mb-6">
          <span className="badge badge-available">
            Creative Developer
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] font-bold text-foreground mb-6 text-5xl md:text-7xl leading-[1.1] tracking-tight">
          Crafting immersive digital experiences with code, design, and a touch of magic.
        </h1>

        <p className="text-text-muted text-lg md:text-xl mb-10 max-w-lg">
          I help brands build beautiful, functional, and user-centric web applications.
        </p>

        {/* CTA Buttons - Fixed Overlap Bug */}
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-50">
          <MagneticButton href="/projects" variant="primary" className="w-full sm:w-auto justify-center">
            <span>See All Projects</span>
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline" className="w-full sm:w-auto justify-center">
            <span>Contact Now</span>
            <MessageSquare size={16} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
