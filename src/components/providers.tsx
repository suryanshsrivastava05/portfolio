'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/use-theme-store';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const setReducedMotion = useThemeStore((s) => s.setReducedMotion);

  useEffect(() => {
    // Check for reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [setReducedMotion]);

  return <>{children}</>;
}
