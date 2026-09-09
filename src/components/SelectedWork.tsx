import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ArrowRight, Layers, BarChart3, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { playUiSound } from '../utils/sound';

export const SelectedWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Product')) return <Layers size={14} className="text-[#ff4b3e]" />;
    if (category.includes('Finance')) return <BarChart3 size={14} className="text-[#ff4b3e]" />;
    if (category.includes('Operations')) return <Users size={14} className="text-[#ff4b3e]" />;
    return <BookOpen size={14} className="text-[#ff4b3e]" />;
  };

  const getCtaLabel = (id: string) => {
    if (id === 'receiptwise') return 'Explore ReceiptWise';
    if (id === 'tresvista') return 'Inspect PE Portfolio Operations';
    if (id === '32bytes') return 'View Operations Framework';
    if (id === 'research') return 'Read the Research';
    return 'Explore Case Study';
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] tracking-widest uppercase mb-2">
              <span>01</span>
              <span className="w-6 h-px bg-[#ff4b3e]" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              EVIDENCE OF CAPABILITY
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-md">
            Four focused case studies demonstrating product initiative, financial analysis, operational execution, and empirical research.
          </p>
        </motion.div>

        {/* 4 Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SELECTED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#0f0f0f] border border-white/10 rounded-sm p-7 sm:p-9 flex flex-col justify-between hover:border-white/25 transition-all duration-300 group hover:shadow-2xl hover:shadow-black"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-neutral-300">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <span className="font-display text-3xl text-neutral-500 group-hover:text-white transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  {project.companyOrProduct}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3 group-hover:text-[#ff4b3e] transition-colors">
                  {project.title}
                </h3>

                {/* Positioning / Card Copy */}
                <p className="text-base text-neutral-300 font-sans font-medium mb-6 leading-snug">
                  "{project.cardCopy}"
                </p>

                {/* Key Metrics / Highlights Strip */}
                {project.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-4 my-4 border-y border-white/10 bg-black/30 px-3 rounded">
                    {project.stats.map((st, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase truncate">{st.label}</span>
                        <span className="font-mono text-sm sm:text-base font-bold text-white truncate mt-0.5">{st.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    playUiSound('open');
                    setActiveProject(project);
                  }}
                  type="button"
                  className="flex-1 flex items-center justify-between bg-neutral-900 border border-white/15 hover:border-[#ff4b3e] hover:bg-neutral-800 text-white px-4 py-3 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider transition-all group/btn cursor-pointer"
                >
                  <span>{getCtaLabel(project.id)}</span>
                  <ArrowRight size={14} className="text-[#ff4b3e] group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-900 border border-white/15 hover:border-white/40 text-neutral-300 hover:text-white rounded-sm transition-colors"
                    title="Open live website"
                    aria-label={`Open ${project.title} live website`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
