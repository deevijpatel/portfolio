import React, { useState, useEffect } from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { playUiSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
        setIstTime(`${formatted} IST`);
      } catch {
        setIstTime('NEW DELHI // IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playUiSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-white/10 text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and positioning */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-neutral-900 border border-white/20 flex items-center justify-center font-display text-sm text-white">
            DP
          </div>
          <div>
            <span className="text-white font-semibold">DEEVIJ PATEL</span>
            <span className="mx-2 text-neutral-600">/</span>
            <span className="text-neutral-500">Finance × Strategy × Operations</span>
          </div>
        </div>

        {/* Center: Live Local Time indicator */}
        <div className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-400">Gurugram / New Delhi:</span>
          <span className="text-white font-bold">{istTime}</span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            href={HERO_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${HERO_DATA.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors pl-2 border-l border-white/10"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
