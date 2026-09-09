import React from 'react';
import { ABOUT_NARRATIVE } from '../data/portfolioData';
import { Target, Compass, Terminal, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] tracking-widest uppercase mb-2">
              <span>05</span>
              <span className="w-6 h-px bg-[#ff4b3e]" />
              <span>Personal Context</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              ABOUT DEEVIJ
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-md">
            Finance-trained, operations-tested, and actively building at the intersection of numbers and technology.
          </p>
        </motion.div>

        {/* Narrative & Traits layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <blockquote className="text-xl sm:text-2xl font-sans font-medium text-white border-l-2 border-[#ff4b3e] pl-4 py-1 leading-snug">
              "{ABOUT_NARRATIVE.quote}"
            </blockquote>

            <div className="space-y-4 text-base font-sans text-neutral-300 leading-relaxed">
              {ABOUT_NARRATIVE.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
              <div className="px-3.5 py-2 rounded bg-neutral-900 border border-white/10 text-neutral-300">
                <span className="text-[#ff4b3e] font-bold mr-1.5">Academic Anchor:</span>
                Masters' Union (Tech &amp; Business)
              </div>
              <div className="px-3.5 py-2 rounded bg-neutral-900 border border-white/10 text-neutral-300">
                <span className="text-[#ff4b3e] font-bold mr-1.5">Focus:</span>
                Finance / Founder's Office / Strategy &amp; Ops
              </div>
            </div>
          </motion.div>

          {/* Traits & Pillars Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-[#101010] border border-white/10 p-7 sm:p-8 rounded-sm space-y-6"
          >
            <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-widest">
              Core Operating DNA
            </div>

            <div className="space-y-5">
              {ABOUT_NARRATIVE.traits.map((trait, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white uppercase">
                    <span className="w-1.5 h-1.5 bg-[#ff4b3e] rounded-full" />
                    <span>{trait.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-neutral-400 leading-relaxed pl-3.5">
                    {trait.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] font-mono text-neutral-500 border-t border-white/10 flex items-center justify-between">
              <span>PRAGMATIC EXECUTION</span>
              <span>NO CORPORATE FLUFF</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
