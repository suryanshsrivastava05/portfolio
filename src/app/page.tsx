import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProcessSection from '@/components/sections/process';
import ServicesSection from '@/components/sections/services';
import ProjectsGrid from '@/components/sections/projects-grid';
import ComparisonSection from '@/components/sections/comparison';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import CtaBanner from '@/components/sections/cta-banner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <ProjectsGrid />
      <ComparisonSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
