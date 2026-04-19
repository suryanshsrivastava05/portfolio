'use client';

import { useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '@/components/ui/magnetic-button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Coding Pro — App Store Creatives',
    slug: 'coding-pro',
    category: 'App Design',
    description: 'Designed App Store listing creatives and marketing materials for a coding education app with 88K+ ratings.',
    image: '/projects/coding-pro.jpg',
    tags: ['App Design', 'Marketing', 'UI/UX'],
  },
  {
    title: 'Clue.dicode — OSINT Puzzle Game',
    slug: 'clue-dicode',
    category: 'App Design',
    description: 'Brand identity and app mockup design for an OSINT-based puzzle game available on Google Play Store.',
    image: '/projects/clue-dicode.jpg',
    tags: ['Branding', '3D Mockup', 'App Design'],
  },
  {
    title: 'Club 17 & Forest Club — Social Media',
    slug: 'club17',
    category: 'Graphic Design',
    description: 'Complete social media design system for a nightclub brand — event flyers, food posts, DJ promos, and reels.',
    image: '/projects/club17-bollywood.png',
    tags: ['Social Media', 'Branding', 'Motion'],
  },
  {
    title: 'Carousel Post Designs',
    slug: 'carousel-designs',
    category: 'Graphic Design',
    description: 'Engaging multi-slide carousel designs for Instagram and social media marketing campaigns.',
    image: '/projects/carousel-post.jpg',
    tags: ['Carousel', 'Social Media', 'Content'],
  },
];

export default function ProjectsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.project-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.1,
          }
        );
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => { card.style.transition = ''; }, 500);
  }, []);

  return (
    <section id="projects" className="section">
      <div ref={containerRef} className="section-container">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">Recent Projects</span>
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-4"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Recent Designs
        </h2>
        <p className="text-text-muted text-center mb-6 max-w-lg mx-auto">
          Showcase of some of my recent sleek designs and projects
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <MagneticButton href="/projects" variant="primary" className="text-sm">
            See All Projects <ArrowRight size={14} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline" className="text-sm">
            Contact Now
          </MagneticButton>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card block"
              data-cursor="hover"
            >
              <div
                className="card overflow-hidden group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div className="h-56 md:h-64 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                      <ExternalLink size={16} className="text-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-[family-name:var(--font-mono)] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mt-2 mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs bg-surface border border-border text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
