'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useCursorStore } from '@/stores/use-cursor-store';
import { lerp } from '@/lib/utils';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const cursorType = useCursorStore((s) => s.type);
  const isVisible = useCursorStore((s) => s.isVisible);

  const animate = useCallback(() => {
    // Smooth follow with different lerp rates
    dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.35);
    dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.35);
    ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
    ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  // Set up magnetic effects on interactive elements
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const setCursor = useCursorStore.getState().setType;

    const handleEnter = () => setCursor('hover');
    const handleLeave = () => setCursor('default');
    const handleTextEnter = () => setCursor('text');

    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor="hover"], [role="button"]'
    );
    const textElements = document.querySelectorAll(
      'input, textarea, [data-cursor="text"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleTextEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleTextEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  const dotSize = cursorType === 'hover' ? 0 : cursorType === 'text' ? 2 : 6;
  const ringSize = cursorType === 'hover' ? 60 : cursorType === 'text' ? 4 : 36;
  const ringBorderWidth = cursorType === 'hover' ? 2 : cursorType === 'text' ? 0 : 1;
  const ringBg = cursorType === 'hover' ? 'rgba(108, 99, 255, 0.1)' : 'transparent';

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
          borderRadius: '50%',
          background: cursorType === 'text' ? 'var(--accent)' : '#fff',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s, margin 0.3s cubic-bezier(0.16,1,0.3,1)',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          borderRadius: '50%',
          border: `${ringBorderWidth}px solid rgba(108, 99, 255, ${cursorType === 'hover' ? 0.6 : 0.3})`,
          background: ringBg,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s, border 0.3s, background 0.3s, margin 0.4s cubic-bezier(0.16,1,0.3,1)',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
