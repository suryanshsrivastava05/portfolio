'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Users, DollarSign, Star, Clock } from 'lucide-react';

const stats = [
  { label: 'Happy Clients', value: 100, suffix: '+', icon: Users, color: '#6c63ff' },
  { label: 'Revenue Generated', value: 250, suffix: 'M+', prefix: '$', icon: DollarSign, color: '#00f5d4' },
  { label: 'Avg. Rating', value: 4.8, suffix: '', decimals: 1, icon: Star, color: '#ff6584' },
  { label: 'Years Experience', value: 5, suffix: '+', icon: Clock, color: '#6c63ff' },
];

function CountUp({ end, decimals = 0, prefix = '', suffix = '' }: {
  end: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const startCount = useCallback(() => {
    const duration = 2000;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          startCount();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startCount]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="section">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-8 text-center group hover:border-accent/30 transition-all duration-500">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <p className="text-4xl md:text-5xl font-black font-[family-name:var(--font-display)] mb-2 gradient-text">
                <CountUp end={stat.value} decimals={stat.decimals || 0} prefix={stat.prefix || ''} suffix={stat.suffix} />
              </p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
