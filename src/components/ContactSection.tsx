import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { playUiSound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');

  const handleCopyEmail = () => {
    playUiSound('pop');
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    playUiSound('click');
    const subject = encodeURIComponent(`Founder's Office Inquiry — ${senderOrg || senderName || 'Connect'}`);
    const body = encodeURIComponent(`Hi Deevij,\n\n${message}\n\nBest,\n${senderName}${senderOrg ? ` (${senderOrg})` : ''}`);
    window.location.href = `mailto:${HERO_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090909] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff4b3e] tracking-widest uppercase mb-2">
            <span>06</span>
            <span className="w-6 h-px bg-[#ff4b3e]" />
            <span>Direct Channel</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[0.95]">
            HAVE AN INTERESTING PROBLEM?<br />
            <span className="text-[#ff4b3e]">LET'S TALK.</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-neutral-300 font-sans max-w-2xl">
            I'm interested in opportunities across Founder’s Office, Strategy, Operations and Business Expansion.
          </p>
        </div>

        {/* Contact Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Direct Links & Verified Contacts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#111111] border border-white/10 p-7 rounded-sm space-y-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Direct Contact Points
              </div>

              {/* Email Block */}
              <div className="p-4 bg-black/60 rounded border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Primary Email</div>
                  <div className="font-mono text-sm sm:text-base font-bold text-white select-all">
                    {HERO_DATA.email}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${HERO_DATA.email}`}
                    className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#ff4b3e] hover:bg-[#e03d31] text-white text-xs font-mono font-bold transition-colors"
                  >
                    <span>Mail</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* LinkedIn Block */}
              <div className="p-4 bg-black/60 rounded border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Professional Network</div>
                  <div className="font-mono text-sm sm:text-base font-bold text-white">
                    linkedin.com/in/deevij-patel
                  </div>
                </div>

                <a
                  href={HERO_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded bg-neutral-900 border border-white/20 hover:border-white/40 text-white text-xs font-mono font-bold transition-colors"
                >
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Status Note */}
              <div className="flex items-start gap-3 p-4 bg-neutral-900/50 rounded border border-white/5 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0 animate-pulse" />
                <div>
                  <span className="text-white font-bold block">Active Availability</span>
                  Currently in Gurugram / Delhi NCR; open to discussing full-time opportunities and strategic operator challenges.
                </div>
              </div>
            </div>
          </div>

          {/* Rapid Message Composer */}
          <div className="lg:col-span-6 bg-[#111111] border border-white/10 p-7 rounded-sm">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={16} className="text-[#ff4b3e]" />
              <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                Send a Direct Note
              </span>
            </div>

            <form onSubmit={handleSendDraft} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-black/60 border border-white/15 rounded px-3 py-2 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff4b3e]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                    Company / Fund / Project
                  </label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="e.g. Stealth Startup / Venture"
                    className="w-full bg-black/60 border border-white/15 rounded px-3 py-2 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff4b3e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                  Message / Problem to solve
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role, current operational bottleneck, or business problem you're tackling..."
                  className="w-full bg-black/60 border border-white/15 rounded px-3 py-2 text-xs font-sans text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff4b3e] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#ff4b3e] hover:bg-[#e03d31] text-white font-mono text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#ff4b3e]/20"
              >
                <span>Draft Email to Deevij</span>
                <Send size={13} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
