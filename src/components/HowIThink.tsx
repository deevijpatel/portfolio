import React, { useState } from 'react';
import { HOW_I_THINK } from '../data/portfolioData';
import { Lightbulb, ChevronRight } from 'lucide-react';
import { playUiSound } from '../utils/sound';

export const HowIThink: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  return (
    <section id="thinking" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] tracking-widest uppercase mb-2">
              <span>03</span>
              <span className="w-6 h-px bg-[#ff4b3e]" />
              <span>Mental Models &amp; Approach</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              HOW I THINK
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-md">
            Four operating principles that govern how I evaluate business problems, diagnose constraints, and drive execution.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOW_I_THINK.map((item, idx) => {
            const isExpanded = activePrinciple === idx;
            return (
              <div
                key={item.number}
                onClick={() => {
                  playUiSound('tick');
                  setActivePrinciple(isExpanded ? null : idx);
                }}
                className={`p-8 rounded-sm border transition-all cursor-pointer group ${
                  isExpanded
                    ? 'bg-[#141414] border-[#ff4b3e]'
                    : 'bg-[#0e0e0e] border-white/10 hover:border-white/25 hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl text-neutral-600 group-hover:text-white transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1 group-hover:text-[#ff4b3e] transition-colors">
                    <span>{isExpanded ? 'Collapse' : 'Expand Focus'}</span>
                    <ChevronRight size={12} className={`transition-transform duration-200 ${isExpanded ? 'rotate-90 text-[#ff4b3e]' : ''}`} />
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-2">
                  {item.title}
                </h3>

                <blockquote className="text-base text-neutral-300 font-sans font-medium border-l-2 border-[#ff4b3e] pl-3 my-3 italic">
                  "{item.statement}"
                </blockquote>

                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mt-4">
                  {item.elaboration}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
