'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function LiquidBlob() {
  const blobRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // Animate turbulence for morphing
      const turbulence = blobRef.current?.querySelector('feTurbulence');
      if (!turbulence) return;

      gsap.to(turbulence, {
        attr: { baseFrequency: '0.015 0.02' },
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: blobRef }
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg
        ref={blobRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="800"
        height="800"
        viewBox="0 0 800 800"
        style={{
          filter: 'blur(60px)',
          opacity: 0.4,
          mixBlendMode: 'screen',
        }}
      >
        <defs>
          <filter id="blob-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.015"
              numOctaves="3"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="80"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <radialGradient id="blob-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6c63ff">
              <animate
                attributeName="stop-color"
                values="#6c63ff;#00f5d4;#6c63ff"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <ellipse
          cx="400"
          cy="400"
          rx="250"
          ry="200"
          fill="url(#blob-gradient)"
          filter="url(#blob-filter)"
        />
      </svg>
    </div>
  );
}
