'use client';

import Link from 'next/link';

const footerLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Profile', href: '/#about' },
  { name: 'Reviews', href: '/#testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-auto">
      {/* Gradient top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--accent), var(--accent-glow), var(--accent), transparent)',
        }}
      />

      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-text-muted hover:text-foreground transition-colors duration-300"
                data-cursor="hover"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Credits */}
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>© {new Date().getFullYear()} Suryansh</span>
            <span className="text-border">•</span>
            <span>Made with ❤ and physics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
