import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projects-data';
import MagneticButton from '@/components/ui/magnetic-button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full mt-20">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 section-container pb-12 z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-6 text-sm" data-cursor="hover">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="mb-4">
            <span className="badge badge-available">{project.category}</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl text-foreground max-w-4xl leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            
            {/* Left: Description */}
            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-6">About the Project</h2>
              <p className="text-text-muted text-lg leading-relaxed mb-12">
                {project.description}
              </p>

              {/* Videos Gallery */}
              {project.videos && project.videos.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-8">Video Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.videos.map((video, idx) => (
                      <div key={idx} className="card overflow-hidden rounded-2xl aspect-[9/16] relative bg-black/50">
                        <video 
                          src={video}
                          controls
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Gallery */}
              {project.images && project.images.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-8">Visual Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="card overflow-hidden rounded-2xl aspect-[4/5] md:aspect-square relative group">
                        <Image
                          src={img}
                          alt={`${project.title} gallery image ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Metadata Sidebar */}
            <div className="space-y-8">
              <div className="card p-8 sticky top-32">
                <div className="mb-8 border-b border-border pb-6">
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">Client</h4>
                  <p className="font-semibold text-foreground">{project.client}</p>
                </div>
                
                <div className="mb-8 border-b border-border pb-6">
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-2 font-[family-name:var(--font-mono)]">Year</h4>
                  <p className="font-semibold text-foreground">{project.date}</p>
                </div>

                <div>
                  <h4 className="text-xs text-text-muted uppercase tracking-wider mb-4 font-[family-name:var(--font-mono)]">Services</h4>
                  <ul className="space-y-3">
                    {project.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Project / CTA */}
      <section className="section py-24 border-t border-border bg-surface/30">
        <div className="section-container text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-5xl mb-8">
            Ready to start your next project?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact" variant="primary">
              Let&apos;s Work Together <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="/projects" variant="outline">
              View More Projects
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
