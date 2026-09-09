import React, { useState } from 'react';
import { 
  X, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Building2, 
  BookOpen, 
  ShieldAlert, 
  Sliders, 
  GitBranch, 
  FileText 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy } from '../types';
import { playUiSound } from '../utils/sound';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Interactive state for specific project features
  const [researchTab, setResearchTab] = useState<'question' | 'data' | 'method' | 'analysis' | 'finding' | 'takeaway'>('question');
  const [activeTresVistaTier, setActiveTresVistaTier] = useState<number>(0);
  const [active32bytesStep, setActive32bytesStep] = useState<number>(0);
  const [activeReceiptDecision, setActiveReceiptDecision] = useState<number>(0);

  const handleClose = () => {
    playUiSound('click');
    onClose();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-5xl bg-[#0e0e0e] border border-white/15 rounded-sm shadow-2xl my-auto overflow-hidden text-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#ff4b3e] font-bold tracking-widest uppercase">
              CASE STUDY // {project.number}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={handleClose}
              type="button"
              className="p-1.5 rounded-sm hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close case study"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[85vh] overflow-y-auto px-6 sm:px-10 py-8 space-y-10">
          
          {/* Title & Positioning */}
          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              {project.companyOrProduct}
            </div>
            <h1 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight mt-1">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-sans text-[#ff4b3e] font-medium mt-2">
              "{project.positioning}"
            </p>
          </div>

          {/* Stats strip if present */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
              {project.stats.map((st, i) => (
                <div key={i} className="bg-[#141414] p-4">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{st.label}</div>
                  <div className="font-mono text-2xl font-bold text-white mt-0.5">{st.value}</div>
                  <div className="text-xs text-neutral-400 mt-1">{st.context}</div>
                </div>
              ))}
            </div>
          )}

          {/* SECTION 01 & 02: Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div>
              <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">01 // Overview</div>
              <h3 className="font-display text-xl text-white uppercase mb-2">What is this?</h3>
              <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                {project.sections.overview}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">02 // The Problem</div>
              <h3 className="font-display text-xl text-white uppercase mb-2">The Core Challenge</h3>
              <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                {project.sections.problem}
              </p>
            </div>
          </div>

          {/* SECTION 03: My Role */}
          <div className="pt-6 border-t border-white/10 bg-neutral-900/40 p-6 rounded-sm border border-white/5">
            <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">03 // My Role</div>
            <h3 className="font-display text-xl text-white uppercase mb-2">Personal Scope &amp; Contribution</h3>
            <p className="text-sm font-sans text-neutral-200 leading-relaxed">
              {project.sections.role}
            </p>
          </div>

          {/* DEDICATED INTERACTIVE CASE STUDY EXPERIENCE */}
          {project.interactiveType === 'research' && (
            <div className="pt-6 border-t border-white/10 bg-[#121212] p-6 rounded-sm border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#ff4b3e]" />
                  <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                    Interactive Empirical Case Study: Question → Data → Method → Analysis → Finding → Takeaway
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                  Scopus Indexed
                </span>
              </div>

              {/* Step Navigation */}
              <div className="flex flex-wrap gap-1 p-1 bg-black rounded border border-white/10 mb-6">
                {(['question', 'data', 'method', 'analysis', 'finding', 'takeaway'] as const).map((step, idx) => (
                  <button
                    key={step}
                    onClick={() => {
                      playUiSound('tick');
                      setResearchTab(step);
                    }}
                    type="button"
                    className={`flex-1 py-1.5 px-3 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                      researchTab === step
                        ? 'bg-[#ff4b3e] text-white font-bold shadow'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    0{idx + 1} {step}
                  </button>
                ))}
              </div>

              {/* Step Content */}
              <div className="min-h-[160px] bg-neutral-900/90 p-5 rounded border border-white/10 font-sans">
                {researchTab === 'question' && (
                  <div>
                    <h4 className="font-mono text-sm text-white font-bold mb-2">Primary Research Question</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      "Does environmental/green accounting practice exert a statistically significant impact on corporate profitability (measured via ROA and ROCE) among Indian crude oil &amp; natural gas majors?"
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 bg-black/50 border border-white/5 rounded">
                        <span className="text-neutral-500 block">Independent Variable</span>
                        <span className="text-[#ff4b3e] font-bold">Green Accounting Disclosure Index</span>
                      </div>
                      <div className="p-3 bg-black/50 border border-white/5 rounded">
                        <span className="text-neutral-500 block">Dependent Variables</span>
                        <span className="text-white font-bold">ROA (Assets) &amp; ROCE (Capital Employed)</span>
                      </div>
                    </div>
                  </div>
                )}

                {researchTab === 'data' && (
                  <div>
                    <h4 className="font-mono text-sm text-white font-bold mb-2">Dataset &amp; Sample Design</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Constructed a balanced panel dataset spanning <strong>2014 to 2022 (9 fiscal years)</strong> across <strong>7 top Indian crude oil &amp; gas majors</strong> (e.g. ONGC, Oil India, GAIL, etc.), totaling <strong>63 firm-year observations</strong>.
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs font-mono">
                      <span className="px-3 py-1.5 bg-black border border-white/10 rounded">7 Companies</span>
                      <span className="px-3 py-1.5 bg-black border border-white/10 rounded">9 Fiscal Years</span>
                      <span className="px-3 py-1.5 bg-[#ff4b3e]/20 text-[#ff4b3e] border border-[#ff4b3e]/30 rounded">63 Total Observations</span>
                    </div>
                  </div>
                )}

                {researchTab === 'method' && (
                  <div>
                    <h4 className="font-mono text-sm text-white font-bold mb-2">Econometric Methodology</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                      Utilized EViews 9.0 statistical software to perform sequential econometric testing:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      <li className="p-2 bg-black border border-white/5 rounded flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ff4b3e] rounded-full" />
                        Jarque-Bera Normality Test
                      </li>
                      <li className="p-2 bg-black border border-white/5 rounded flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ff4b3e] rounded-full" />
                        Hausman Specification Test
                      </li>
                      <li className="p-2 bg-black border border-white/5 rounded flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ff4b3e] rounded-full" />
                        Random Effects Panel Regression
                      </li>
                      <li className="p-2 bg-black border border-white/5 rounded flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ff4b3e] rounded-full" />
                        Ordinary Least Squares (OLS)
                      </li>
                    </ul>
                  </div>
                )}

                {researchTab === 'analysis' && (
                  <div>
                    <h4 className="font-mono text-sm text-white font-bold mb-2">Correlation vs. Regression Analysis</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                      <div className="p-3 bg-black/60 border border-emerald-500/20 rounded">
                        <span className="text-emerald-400 block font-bold mb-1">Raw Pearson Correlation</span>
                        <p className="text-neutral-300 font-sans">
                          Revealed positive directional correlation coefficients between green disclosure scores and profitability metrics.
                        </p>
                      </div>
                      <div className="p-3 bg-black/60 border border-[#ff4b3e]/30 rounded">
                        <span className="text-[#ff4b3e] block font-bold mb-1">Econometric Panel Regression</span>
                        <p className="text-neutral-300 font-sans">
                          Regression coefficients showed p &gt; 0.05, establishing lack of statistical significance under rigorous econometric controls.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {researchTab === 'finding' && (
                  <div>
                    <h4 className="font-mono text-sm text-white font-bold mb-2">Core Empirical Finding</h4>
                    <p className="text-sm text-neutral-200 leading-relaxed bg-black/40 p-3 rounded border-l-2 border-[#ff4b3e]">
                      "While green accounting practices demonstrate positive association with firm profitability indicators, econometric panel regression confirmed that environmental accounting does <strong>not have a statistically significant causal impact</strong> on ROA or ROCE in the short to medium term."
                    </p>
                  </div>
                )}

                {researchTab === 'takeaway' && (
                  <div>
                    <h4 className="font-mono text-sm text-white font-bold mb-2">Executive Takeaway for Decision Makers</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Firms should adopt environmental accounting as a regulatory compliance, risk mitigation, and long-term stakeholder trust mechanism — rather than relying on it to boost immediate quarterly margin performance. This separates empirical truth from ESG marketing narratives.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {project.interactiveType === 'tresvista' && (
            <div className="pt-6 border-t border-white/10 bg-[#121212] p-6 rounded-sm border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-[#ff4b3e]" />
                  <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                    Portfolio Structure Navigator ($20B+ AUM Context)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">Click tiers to inspect operations</span>
              </div>

              {/* Hierarchy Visualizer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {[
                  { level: "$20B+ Portfolio", sub: "Master PE Mandate", details: "Institutional portfolio governance, high-level reporting coordination, and executive cash visibility." },
                  { level: "6+ PE Funds", sub: "Fund-Level Workbooks", details: "Capital call schedules, fund expense allocations, investor capital account maintenance, and audit support." },
                  { level: "4 Holding Cos", sub: "Intermediate HoldCos", details: "Intercompany loan schedules, debt covenants, consolidation workbooks, and tax holding mechanics." },
                  { level: "50+ SPVs", sub: "Asset-Level Entities", details: "Detailed bank reconciliations, vendor invoice tracking, entity financial statements, and local compliance." }
                ].map((tier, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playUiSound('tick');
                      setActiveTresVistaTier(idx);
                    }}
                    type="button"
                    className={`p-3 text-left rounded transition-all border ${
                      activeTresVistaTier === idx
                        ? 'bg-[#ff4b3e]/15 border-[#ff4b3e] text-white'
                        : 'bg-black/50 border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase text-neutral-500">Tier 0{idx + 1}</div>
                    <div className="font-mono text-sm font-bold text-white mt-0.5">{tier.level}</div>
                    <div className="text-[11px] text-neutral-400">{tier.sub}</div>
                  </button>
                ))}
              </div>

              <div className="p-4 bg-black/60 rounded border border-white/10 text-xs font-mono text-neutral-300">
                <span className="text-[#ff4b3e] font-bold">Operational Workflow: </span>
                {[
                  "Coordinated multi-entity portfolio reporting, verifying consolidations across intermediate holding companies and individual operating assets.",
                  "Prepared and stress-tested financial workbooks, tracking budget allocations against actual drawdowns for institutional funds.",
                  "Maintained strict intercompany loan and fee schedules across intermediate holding entities to prevent reconciliation variances.",
                  "Reconciled entity-level financial statements, ensuring transaction records for 50+ special purpose vehicles were audit-ready."
                ][activeTresVistaTier]}
              </div>
            </div>
          )}

          {project.interactiveType === '32bytes' && (
            <div className="pt-6 border-t border-white/10 bg-[#121212] p-6 rounded-sm border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GitBranch size={16} className="text-[#ff4b3e]" />
                  <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                    Operational Execution Architecture (Challenge → Approach → Execution → Learning)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {[
                  { step: "Challenge", label: "Expectations & Timelines", content: "Clients demand speed without sacrificing quality; ambiguous requirement briefs often threaten project deadlines." },
                  { step: "Approach", label: "Process Architecture", content: "Engineered transparent scope definitions, milestone matrices, and unambiguous accountability checklists." },
                  { step: "Execution", label: "Coordination & Flow", content: "Maintained daily delivery cadences between client reps and internal operational units to eliminate bottlenecks." },
                  { step: "Learning", label: "Systemic Reliability", content: "Predictable communication cadences resolve 90% of friction before it impacts delivery or customer trust." }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playUiSound('tick');
                      setActive32bytesStep(idx);
                    }}
                    type="button"
                    className={`p-3 text-left rounded transition-all border ${
                      active32bytesStep === idx
                        ? 'bg-[#ff4b3e]/15 border-[#ff4b3e] text-white'
                        : 'bg-black/50 border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase text-[#ff4b3e]">Phase 0{idx + 1}</div>
                    <div className="font-mono text-sm font-bold text-white mt-0.5">{item.step}</div>
                    <div className="text-[11px] text-neutral-400">{item.label}</div>
                  </button>
                ))}
              </div>

              <div className="p-4 bg-black/60 rounded border border-white/10 text-xs font-mono text-neutral-300">
                <span className="text-[#ff4b3e] font-bold">Insight: </span>
                {[
                  "Managing operations requires treating stakeholder expectations as an operational variable, not an afterthought.",
                  "A standardized process removes emotional friction and replaces guesswork with clear checklists.",
                  "Disciplined daily checkpoints surface blockers early when they are cheap to solve.",
                  "Operations is the bridge that converts high-level intent into repeatable execution."
                ][active32bytesStep]}
              </div>
            </div>
          )}

          {project.interactiveType === 'receiptwise' && (
            <div className="pt-6 border-t border-white/10 bg-[#121212] p-6 rounded-sm border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sliders size={16} className="text-[#ff4b3e]" />
                  <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                    Key Product Decisions &amp; Architecture
                  </span>
                </div>
                <a
                  href="https://receiptwise-expense-hub.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff4b3e] hover:underline"
                >
                  <span>Launch receiptwise-expense-hub.ai.studio</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {[
                  { title: "Zero-Friction Intake", desc: "Why prioritize rapid capture? Most expense logging fails because manual forms require too many mandatory fields up front." },
                  { title: "Automated Tagging Schema", desc: "Pre-structured categories mapped directly to standard accounting line items (OpEx, COGS, Tax-deductible travel)." },
                  { title: "Instant Burn Visibility", desc: "Bridging raw receipt uploads directly into monthly run-rate metrics so operators see instant financial impact." }
                ].map((dec, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playUiSound('tick');
                      setActiveReceiptDecision(idx);
                    }}
                    type="button"
                    className={`p-3 text-left rounded border transition-all ${
                      activeReceiptDecision === idx
                        ? 'bg-[#ff4b3e]/15 border-[#ff4b3e] text-white'
                        : 'bg-black/50 border-white/10 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-[#ff4b3e] uppercase">Decision 0{idx + 1}</div>
                    <div className="font-mono text-sm font-bold text-white mt-1">{dec.title}</div>
                    <div className="text-xs text-neutral-400 mt-2 font-sans">{dec.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 04 & 05: Approach & Output */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">04 // Approach</div>
              <h3 className="font-display text-xl text-white uppercase mb-3">How the problem was tackled</h3>
              <ul className="space-y-2.5">
                {project.sections.approach.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b3e] mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">05 // Output</div>
              <h3 className="font-display text-xl text-white uppercase mb-3">What was produced</h3>
              <ul className="space-y-2.5">
                {project.sections.output.map((out, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-300">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECTION 06: What I Learned */}
          <div className="pt-6 border-t border-white/10">
            <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">06 // What I Learned</div>
            <h3 className="font-display text-xl text-white uppercase mb-3">Refinements to my thinking</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.sections.learned.map((learn, i) => (
                <div key={i} className="p-4 bg-neutral-900/60 border border-white/5 rounded-sm">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">Takeaway 0{i + 1}</div>
                  <p className="text-xs sm:text-sm font-sans text-neutral-200">{learn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 07: Evidence & Verified Metrics */}
          <div className="pt-6 border-t border-white/10 pb-4">
            <div className="text-xs font-mono text-[#ff4b3e] uppercase tracking-wider mb-2">07 // Evidence</div>
            <h3 className="font-display text-xl text-white uppercase mb-3">Verified documentation &amp; links</h3>
            <div className="flex flex-wrap gap-3">
              {project.sections.evidence.verifiedMetrics?.map((metric, i) => (
                <div key={i} className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-sm text-xs font-mono">
                  <span className="text-neutral-500 mr-2">{metric.label}:</span>
                  <span className="text-white font-bold">{metric.value}</span>
                  <span className="text-neutral-500 ml-2 text-[10px]">({metric.note})</span>
                </div>
              ))}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ff4b3e] text-white hover:bg-[#e03d31] rounded-sm text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <span>Explore Live Project</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 border-t border-white/10 bg-[#121212] flex justify-end">
          <button
            onClick={handleClose}
            type="button"
            className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
