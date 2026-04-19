'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    pro: { title: 'Skilled Professional', desc: 'Gain access to top-tier talent with years of experience, ensuring flawless execution.' },
    con: { title: 'Amateur Designer', desc: 'Lack of experience may result in design inconsistencies and overlooked details.' },
  },
  {
    pro: { title: 'Future-Ready Designs', desc: 'Crafting modern, scalable designs that grow with your business and stay ahead of trends.' },
    con: { title: 'Outdated Concepts', desc: "Stale designs that don't reflect current trends or your evolving brand narrative." },
  },
  {
    pro: { title: 'Client-Centric Collaboration', desc: 'Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.' },
    con: { title: 'Detached Communication', desc: 'Lack of collaboration and poor feedback loops can result in misaligned outcomes.' },
  },
  {
    pro: { title: 'Timely Project Tracking', desc: 'Stay informed with regular progress updates and timely deliverables.' },
    con: { title: 'Unstructured & Unreliable Work', desc: 'Inconsistent timelines and last-minute changes can compromise quality.' },
  },
];

export default function ComparisonSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="comparison" className="section">
      <div ref={containerRef} className="section-container">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="badge badge-available">Why choose me</span>
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-bold text-center mb-4"
          style={{ fontSize: 'var(--fs-h2)' }}
        >
          Why me as Design Partner
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-lg mx-auto">
          Why Partner with Me for the Design Excellence
        </p>

        <div className="space-y-6 max-w-5xl mx-auto">
          {comparisons.map((comp, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Professional */}
              <div className="card p-6 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-glow/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-accent-glow" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-[family-name:var(--font-display)] mb-2 text-foreground">
                      {comp.pro.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {comp.pro.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Amateur */}
              <div className="card p-6 opacity-60 hover:opacity-80 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X size={16} className="text-accent-secondary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-[family-name:var(--font-display)] mb-2 text-foreground">
                      {comp.con.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {comp.con.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
