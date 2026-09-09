import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { PROOF_POINTS } from '../data/portfolioData';

export const ProofPoints: React.FC = () => {
  return (
    <section id="proof" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] tracking-widest uppercase mb-2">
              <span>02</span>
              <span className="w-6 h-px bg-[#ff4b3e]" />
              <span>Verified Proof Points</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              EVIDENCE OVER CLAIMS
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded border border-white/10 max-w-md">
            <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
            <span>Quantitative facts derived from verified institutional and published work.</span>
          </div>
        </motion.div>

        {/* Proof Point Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {PROOF_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#101010] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#141414] transition-colors group"
            >
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                  <span>METRIC // 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ff4b3e] transition-colors" />
                </div>
                <div className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight group-hover:text-[#ff4b3e] transition-colors">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-neutral-200 mt-2">
                  {item.label}
                </div>
                <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                  {item.sublabel}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                <Info size={11} className="text-[#ff4b3e]" />
                <span className="truncate">{item.verificationSource}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs font-mono text-neutral-400">
            * Portfolio financial figures represent institutional portfolio context supported during CFO Office Services.
          </p>
        </div>
      </div>
    </section>
  );
};
