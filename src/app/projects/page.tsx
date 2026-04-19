import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of app design, graphic design, social media, and video production work.',
};

const projects = [
  { title: 'Coding Pro — App Store Creatives', slug: 'coding-pro', category: 'App Design', description: 'App Store listing creatives and marketing materials for a coding education app.', image: '/projects/coding-pro.jpg', tags: ['App Design', 'Marketing'] },
  { title: 'Clue.dicode — OSINT Puzzle Game', slug: 'clue-dicode', category: 'App Design', description: 'Brand identity and app mockup design for an OSINT-based puzzle game.', image: '/projects/clue-dicode.jpg', tags: ['Branding', '3D Mockup'] },
  { title: 'Club 17 & Forest Club', slug: 'club17', category: 'Social Media', description: 'Complete social media design system — event flyers, food posts, DJ promos, and reels.', image: '/projects/club17-bollywood.png', tags: ['Social Media', 'Branding'] },
  { title: 'Carousel Post Designs', slug: 'carousel-designs', category: 'Graphic Design', description: 'Multi-slide carousel designs for Instagram marketing campaigns.', image: '/projects/carousel-post.jpg', tags: ['Carousel', 'Content'] },
  { title: 'Club 17 — Event Promos', slug: 'club17-events', category: 'Graphic Design', description: 'DJ night and event promotion designs for nightclub branding.', image: '/projects/club17-dj.jpg', tags: ['Events', 'Nightlife'] },
  { title: 'Food & Menu Design', slug: 'food-design', category: 'Graphic Design', description: 'Appetizing food photography posts and menu card designs.', image: '/projects/club17-food.jpg', tags: ['Food', 'Photography'] },
  { title: 'Video Production & Motion', slug: 'video-production', category: 'Video', description: 'AI-powered videos, logo animations, short-form content, and club trailers.', image: '/projects/club17-ig.jpg', tags: ['Video', 'Motion'] },
  { title: 'App UI/UX Design', slug: 'app-uiux', category: 'App Design', description: 'Mobile app interface design and user experience architecture.', image: '/projects/app-design.jpg', tags: ['UI/UX', 'Mobile'] },
];

export default function ProjectsPage() {
  return (
    <section className="section pt-32">
      <div className="section-container">
        <div className="text-center mb-4">
          <span className="badge badge-available">Portfolio</span>
        </div>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-center mb-4" style={{ fontSize: 'var(--fs-h1)' }}>
          All Projects
        </h1>
        <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
          A collection of work spanning app design, graphic design, social media, and video production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.slug} href={`/projects/${p.slug}`} className="card overflow-hidden group" data-cursor="hover">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs text-accent font-[family-name:var(--font-mono)] uppercase tracking-wider">{p.category}</span>
                <h3 className="text-base font-bold font-[family-name:var(--font-display)] mt-2 mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-text-muted text-sm">{p.description}</p>
                <div className="flex gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-surface border border-border text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
