'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Happy clients', value: '100+' },
  { label: 'Revenue added', value: '$250m' },
  { label: 'Average Rating', value: '4.8' },
];

const testimonials = [
  {
    name: 'Will Smith',
    company: 'Harper Education',
    quote: 'The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity.',
  },
  {
    name: 'Ikta Sollork',
    company: 'PARAL CEO',
    quote: 'Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand.',
  },
  {
    name: 'Liloch',
    company: 'AIO Founder',
    quote: 'Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement.',
  },
  {
    name: 'Diane Swag',
    company: 'Swag Studio',
    quote: 'A game-changing experience! The design process was smooth, collaborative, and resulted in a brand presence we\'re proud of.',
  },
];

function AnimatedStat({ target, label }: { target: string; label: string }) {
  const [value, setValue] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isNumeric = /[\d.]+/.test(target);
  const numValue = parseFloat(target.replace(/[^0-9.]/g, ''));
  const prefix = target.match(/^[^0-9]*/)?.[0] || '';
  const suffix = target.match(/[^0-9.]*$/)?.[0] || '';

  const startCount = useCallback(() => {
    if (!isNumeric) { setValue(target); return; }
    const duration = 2000;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      const current = eased * numValue;
      setValue(prefix + (numValue % 1 === 0 ? Math.floor(current).toString() : current.toFixed(1)) + suffix);
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(target);
    };
    requestAnimationFrame(animate);
  }, [target, isNumeric, numValue, prefix, suffix]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) { setStarted(true); startCount(); }
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startCount]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-black font-[family-name:var(--font-display)] gradient-text tabular-nums mb-1">
        {value}
      </p>
      <p className="text-text-muted text-sm">{label}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="section">
      <div className="section-container">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">Happy Clients</span>
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-4"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Clients Love Me
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-lg mx-auto">
          Trusted by 100+ happy clients, adding $250M+ in revenue.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} target={stat.value} label={stat.label} />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <MagneticButton href="/projects" variant="primary">
            See All Projects <ArrowRight size={14} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Contact Now
          </MagneticButton>
        </div>
      </div>

      {/* Testimonial Cards Carousel */}
      <div ref={scrollRef} className="overflow-x-auto pb-6" style={{ scrollSnapType: 'x mandatory' }}>
        <div className="flex gap-6 px-[max(1rem,calc((100vw-1280px)/2+1rem))]" style={{ width: 'max-content' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="w-[320px] flex-shrink-0 card p-8 relative"
              style={{ scrollSnapAlign: 'start' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote size={28} className="text-accent/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center text-white text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
