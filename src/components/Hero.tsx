import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_DATA } from '../data/portfolioData';
import { playUiSound } from '../utils/sound';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % HERO_DATA.kineticWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-subtle bg-radial-fade overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Narrative, Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Top Status & Discipline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 mb-6 backdrop-blur-sm self-start"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff4b3e] animate-ping" />
              <span className="text-xs font-mono text-neutral-300 tracking-wider uppercase">
                {HERO_DATA.tagline}
              </span>
            </motion.div>

            {/* Large Name Display */}
            <div className="mb-4">
              <span className="block text-xs sm:text-sm font-mono tracking-[0.25em] text-neutral-400 uppercase">
                Portfolio 2026 // Deevij Patel
              </span>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase mt-1 leading-[0.9]">
                DEEVIJ PATEL
              </h1>
            </div>

            {/* Dynamic Rotating Kinetic Focus Window */}
            <div className="my-5 sm:my-7 flex items-baseline flex-wrap gap-x-4 gap-y-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-400 tracking-tight font-sans">
                Operating at the intersection of
              </span>
              <div className="relative inline-block h-10 sm:h-12 md:h-14 overflow-hidden align-middle min-w-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={HERO_DATA.kineticWords[currentWordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-wide text-[#ff4b3e]"
                  >
                    {HERO_DATA.kineticWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Core Headline from PRD */}
            <div className="max-w-2xl mb-7">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-100 leading-snug tracking-tight">
                "{HERO_DATA.headline}"
              </p>
              <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
                {HERO_DATA.supportingCopy}
              </p>
            </div>

            {/* Primary Action Buttons & Verification Anchor */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  playUiSound('click');
                  onExploreWork();
                }}
                type="button"
                className="flex items-center gap-2 bg-[#ff4b3e] text-white hover:bg-[#e03d31] px-6 py-3.5 rounded-sm font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-lg shadow-[#ff4b3e]/20 group cursor-pointer"
              >
                <span>{HERO_DATA.primaryCTA}</span>
                <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  playUiSound('click');
                  onConnect();
                }}
                type="button"
                className="flex items-center gap-2 bg-neutral-900 border border-white/20 hover:border-white/40 text-white px-6 py-3.5 rounded-sm font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all hover:bg-neutral-800 cursor-pointer"
              >
                <span>{HERO_DATA.secondaryCTA}</span>
                <ArrowUpRight size={15} />
              </motion.button>

              <div className="flex items-center gap-2 sm:ml-2 border-l border-white/10 pl-4 py-1">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={HERO_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="Deevij Patel on LinkedIn"
                >
                  <Linkedin size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${HERO_DATA.email}`}
                  className="p-2.5 rounded-sm bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="Send Email to Deevij Patel"
                >
                  <Mail size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Contrast Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="relative w-full max-w-sm sm:max-w-md group"
            >
              {/* High-contrast ambient backlight halo with gentle breathing glow */}
              <motion.div
                animate={{ opacity: [0.55, 0.85, 0.55] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff4b3e]/40 via-white/20 to-[#ff4b3e]/15 rounded-sm blur-lg"
              />

              {/* Outer Architectural Container with high contrast border */}
              <div className="relative p-2.5 bg-neutral-900/95 border-2 border-white/25 hover:border-white/40 rounded-sm shadow-2xl shadow-black transition-all duration-300">
                {/* Viewfinder Technical Corner Accents */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#ff4b3e] z-20" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#ff4b3e] z-20" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#ff4b3e] z-20" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#ff4b3e] z-20" />

                {/* Profile Photo Container */}
                <div className="relative overflow-hidden rounded-[2px] bg-neutral-950 border border-white/15 aspect-[3/4]">
                  <img
                    src="/P1185306.JPG"
                    alt="Deevij Patel - Finance, Founder's Office & Operations"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_12%] filter brightness-[1.03] contrast-[1.06] group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Top-left subtle status badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/20 rounded-sm flex items-center gap-1.5 shadow-lg z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-neutral-200 uppercase">
                      Active // New Delhi
                    </span>
                  </div>

                  {/* High-contrast floating bottom caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-neutral-950/95 backdrop-blur-md border border-white/25 rounded-sm shadow-2xl flex items-center justify-between z-10">
                    <div>
                      <div className="text-xs font-mono font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                        <span>Deevij Patel</span>
                        <ShieldCheck size={13} className="text-[#ff4b3e]" />
                      </div>
                      <div className="text-[10px] font-mono text-neutral-300 tracking-wide mt-0.5">
                        Finance • Founder's Office • Ops
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#ff4b3e] font-bold block">
                        Verified
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400">
                        MU '25
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Rapid 30-Second Verification Bar (PRD Section 1 & 26) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="border-l-2 border-[#ff4b3e] pl-3">
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">$20B+ AUM</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">TresVista PE Portfolio</div>
          </div>
          <div className="border-l-2 border-white/30 pl-3">
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">ReceiptWise</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Independent Product Build</div>
          </div>
          <div className="border-l-2 border-white/30 pl-3">
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">Scopus Journal</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Published Econometrics (YMER)</div>
          </div>
          <div className="border-l-2 border-white/30 pl-3">
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">Masters’ Union</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Tech &amp; Business Mgmt</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
