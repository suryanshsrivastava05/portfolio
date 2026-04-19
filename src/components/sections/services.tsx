'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Film, MonitorPlay, Wand2, Palette } from 'lucide-react';
import MagneticButton from '@/components/ui/magnetic-button';

gsap.registerPlugin(ScrollTrigger);

const mainServices = [
  {
    title: 'Video Editing',
    description: 'Crafting breathtaking, fast-paced edits that boost engagement, retention, and growth, perfectly aligned with your brand.',
    icon: Film,
    color: '#6c63ff',
  },
  {
    title: 'Motion Graphics',
    description: "Designing bold, engaging, and dynamic motion graphics that elevate your content and captivate your audience.",
    icon: MonitorPlay,
    color: '#ff6584',
  },
  {
    title: 'Color Grading',
    description: "Enhancing the visual mood of your footage with professional, cinematic color grading to tell a better story.",
    icon: Wand2,
    color: '#00f5d4',
  },
  {
    title: 'Social Media Design',
    description: 'Creating high-converting thumbnails, carousel posts, and promotional flyers for events and digital campaigns.',
    icon: Palette,
    color: '#6c63ff',
  },
];

const additionalServicesLeft = ['Short-Form Reels', 'YouTube Editing', 'Event Promos', 'Documentaries'];
const additionalServicesRight = ['Logo Animations', 'Sound Design', 'VFX', 'Social Media Strategy', 'Thumbnails', 'Optimization'];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.service-animate');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.08,
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="services" className="section">
      <div ref={containerRef} className="section-container">
        {/* Badge */}
        <div className="text-center mb-4 service-animate">
          <span className="badge badge-available">Design services</span>
        </div>

        {/* Title */}
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-4 service-animate"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Design Services
        </h2>
        <p className="text-text-muted text-center mb-6 max-w-lg mx-auto service-animate">
          Explore a suite of design services to elevate your brand.
        </p>
        <div className="text-center mb-12 service-animate">
          <MagneticButton href="/contact" variant="primary" className="text-sm">
            Contact Now
          </MagneticButton>
        </div>

        {/* Service cards bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {mainServices.map((service) => (
            <div
              key={service.title}
              className="service-animate card p-8 group hover:border-accent/20 transition-all duration-500"
              data-cursor="hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${service.color}12`, border: `1px solid ${service.color}25` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 service-animate">
          <div className="card p-6">
            <div className="flex flex-wrap gap-2">
              {additionalServicesLeft.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full text-xs bg-surface border border-border text-text-muted">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <div className="flex flex-wrap gap-2">
              {additionalServicesRight.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full text-xs bg-surface border border-border text-text-muted">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
