'use client';

import { Film, MonitorPlay, Wand2, Palette } from 'lucide-react';
import MagneticButton from '@/components/ui/magnetic-button';

const mainServices = [
  {
    title: 'Web Development',
    description: 'Building fast, scalable, and responsive web applications using modern technologies like React, Next.js, and Node.js.',
    icon: MonitorPlay,
    color: '#6c63ff',
  },
  {
    title: 'UI/UX Design',
    description: "Creating intuitive and visually stunning user interfaces that provide seamless and engaging user experiences.",
    icon: Palette,
    color: '#ff6584',
  },
  {
    title: 'Performance Optimization',
    description: "Improving website speed, accessibility, and SEO to ensure maximum reach and conversion rates.",
    icon: Wand2,
    color: '#00f5d4',
  },
  {
    title: 'Interactive Experiences',
    description: 'Developing immersive digital experiences with WebGL, Framer Motion, and GSAP animations.',
    icon: Film,
    color: '#6c63ff',
  },
];

const additionalServicesLeft = ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];
const additionalServicesRight = ['Figma', 'Responsive Design', 'SEO Optimization', 'Web Accessibility'];

export default function ServicesSection() {
  return (
    <section id="services" className="section relative z-10 py-24">
      <div className="section-container">
        {/* Badge */}
        <div className="text-center mb-4">
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
