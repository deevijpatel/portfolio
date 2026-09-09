import React from 'react';
import { FOUNDERS_OFFICE_FIT } from '../data/portfolioData';
import { Compass, BarChart3, Cpu, TrendingUp, Layers, CheckCircle } from 'lucide-react';

export const FoundersOfficeFit: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Compass':
        return <Compass size={20} className="text-[#ff4b3e]" />;
      case 'BarChart3':
        return <BarChart3 size={20} className="text-[#ff4b3e]" />;
      case 'Cpu':
        return <Cpu size={20} className="text-[#ff4b3e]" />;
      case 'TrendingUp':
        return <TrendingUp size={20} className="text-[#ff4b3e]" />;
      case 'Layers':
        return <Layers size={20} className="text-[#ff4b3e]" />;
      default:
        return <CheckCircle size={20} className="text-[#ff4b3e]" />;
    }
  };

  return (
    <section id="fit" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] tracking-widest uppercase mb-2">
              <span>04</span>
              <span className="w-6 h-px bg-[#ff4b3e]" />
              <span>Founder's Office &amp; Operator Scope</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              WHERE I CAN ADD VALUE
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-md">
            Communicating versatility across strategy, finance, operations, expansion, and digital prototyping without unverified claims.
          </p>
        </div>

        {/* 5 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDERS_OFFICE_FIT.map((area, idx) => (
            <div
              key={area.id}
              className={`bg-[#111111] border border-white/10 p-7 rounded-sm hover:border-white/25 transition-all group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded bg-black/60 border border-white/10 group-hover:border-[#ff4b3e]/40 transition-colors">
                    {getIcon(area.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    DOMAIN 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-2">
                  {area.title}
                </h3>
                <p className="text-sm font-mono text-[#ff4b3e] mb-4">
                  {area.shortDesc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {area.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-sans text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-1.5 shrink-0 group-hover:bg-[#ff4b3e] transition-colors" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 text-[10px] font-mono text-neutral-500 flex items-center justify-between">
                <span>VERIFIABLE APPLICABILITY</span>
                <span className="text-neutral-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
