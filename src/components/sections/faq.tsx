'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  { q: 'What services do you offer?', a: 'I specialize in web design, branding, UI/UX, and full-stack development, creating modern, user-friendly experiences tailored to your needs.' },
  { q: 'How do I start working with you?', a: 'Simply reach out through the contact page or book a call. We\'ll discuss your project, goals, and timeline to create a tailored plan.' },
  { q: 'What design tools do you use?', a: 'I primarily use Figma for design, along with VS Code for development. For animations, I use GSAP, Framer Motion, and Three.js.' },
  { q: 'How long does a project take?', a: 'Timelines vary by scope. A landing page typically takes 2–3 weeks, while a full web application can take 6–12 weeks.' },
  { q: 'Do you provide revisions?', a: 'Yes! I offer multiple rounds of revisions to ensure the final product exceeds your expectations. Your satisfaction is my priority.' },
  { q: 'What industries do you work with?', a: 'I work across all industries including tech, fintech, healthcare, education, e-commerce, and creative agencies.' },
  { q: 'Do you offer development services?', a: 'Absolutely. I offer end-to-end development from frontend to backend, including API integration, database design, and deployment.' },
  { q: 'What is your pricing structure?', a: 'Pricing depends on project scope. I offer both fixed-price and hourly arrangements. Contact me for a detailed quote.' },
  { q: 'Can you redesign my existing website?', a: 'Yes, I specialize in redesigns that modernize your brand while improving performance and user experience.' },
];

const featuredReview = {
  name: 'Ryan Harper',
  company: 'Harper Education',
  quote: 'Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement.',
};

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string>('faq-0');

  return (
    <section id="faq" className="section">
      <div className="section-container">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">FAQ Section</span>
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-4"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Questions, Answers
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-lg mx-auto">
          Get quick answers to your most pressing questions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 max-w-5xl mx-auto">
          {/* FAQ Accordion */}
          <div>
            <Accordion.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
            >
              {faqs.map((faq, i) => (
                <Accordion.Item key={i} value={`faq-${i}`} className="border-b border-border">
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="flex items-center justify-between w-full py-5 text-left group"
                      data-cursor="hover"
                    >
                      <span className="text-sm font-semibold text-foreground pr-4 group-hover:text-accent transition-colors">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-text-muted flex-shrink-0 transition-transform duration-300 ${
                          openItem === `faq-${i}` ? 'rotate-180' : ''
                        }`}
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <AnimatePresence>
                    {openItem === `faq-${i}` && (
                      <Accordion.Content forceMount>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-text-muted text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      </Accordion.Content>
                    )}
                  </AnimatePresence>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          {/* Featured Review Card */}
          <div className="hidden lg:block">
            <div className="card p-8 sticky top-32">
              <Quote size={28} className="text-accent/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {featuredReview.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center text-white text-xs font-bold">
                  {featuredReview.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{featuredReview.name}</p>
                  <p className="text-xs text-text-muted">{featuredReview.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
