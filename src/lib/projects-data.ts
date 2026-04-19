export interface Project {
  title: string;
  category: string;
  description: string;
  client: string;
  date: string;
  services: string[];
  heroImage: string;
  images?: string[];
  videos?: string[];
}

export const projectsData: Record<string, Project> = {
  'e-commerce-platform': {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-stack e-commerce platform built with Next.js, Stripe, and Supabase. Features include real-time inventory, secure checkout, and an admin dashboard.',
    client: 'Retail Co.',
    date: '2024',
    services: ['Frontend Development', 'Backend Development', 'UI/UX Design'],
    heroImage: '/projects/app-design.jpg',
    images: []
  },
  'saas-dashboard': {
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application',
    description: 'A high-performance analytics dashboard for a SaaS company. Built with React, Tailwind CSS, and Recharts to visualize complex data sets in real-time.',
    client: 'Tech Startup',
    date: '2023',
    services: ['React Development', 'Data Visualization', 'UI Design'],
    heroImage: '/projects/coding-pro.jpg',
    images: []
  },
  'marketing-website': {
    title: 'Corporate Marketing Website',
    category: 'Web Design',
    description: 'A modern, fast, and SEO-optimized marketing website built with Astro and Framer Motion for smooth, engaging animations.',
    client: 'Global Agency',
    date: '2023',
    services: ['Web Design', 'SEO Optimization', 'Animation'],
    heroImage: '/projects/clue-dicode.jpg',
    images: []
  },
  'mobile-app-ui': {
    title: 'Fintech App UI',
    category: 'UI/UX Design',
    description: 'Complete UI/UX overhaul for a fintech mobile application, focusing on accessibility, dark mode, and a seamless user experience.',
    client: 'Fintech Inc.',
    date: '2024',
    services: ['UI/UX Design', 'Prototyping', 'Design System'],
    heroImage: '/projects/carousel-post.jpg',
    images: []
  }
};
