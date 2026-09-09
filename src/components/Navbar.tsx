import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { toggleSound, isSoundEnabled, playUiSound } from '../utils/sound';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'work', 'proof', 'thinking', 'fit', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playUiSound('pop');
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'How I Think', href: '#thinking', id: 'thinking' },
    { label: 'Value Add', href: '#fit', id: 'fit' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    playUiSound('click');
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      {/* Subtle Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff4b3e] via-[#ff7e5f] to-[#ff4b3e] origin-left pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-white/20 flex items-center justify-center font-display text-lg tracking-wider text-white group-hover:border-[#ff4b3e] transition-colors">
            DP
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-mono font-semibold tracking-wider text-white group-hover:text-[#ff4b3e] transition-colors">
              DEEVIJ PATEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-1 text-xs font-mono tracking-wide rounded-full transition-all ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle audio tactile switch */}
          <button
            onClick={handleSoundToggle}
            type="button"
            title={soundOn ? 'Mute tactile UI sounds' : 'Enable subtle UI feedback'}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Toggle audio feedback"
          >
            {soundOn ? <Volume2 size={14} className="text-[#ff4b3e]" /> : <VolumeX size={14} />}
          </button>

          {/* Primary Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onContactClick) onContactClick();
              handleNavClick('#contact');
            }}
            className="flex items-center gap-1.5 bg-[#f4f4f1] text-[#080808] hover:bg-white px-4 py-2 rounded-sm text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-150 hover:shadow-lg hover:shadow-white/10"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleSoundToggle}
            type="button"
            className="p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle audio"
          >
            {soundOn ? <Volume2 size={16} className="text-[#ff4b3e]" /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={() => {
              playUiSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`py-2 px-3 text-sm font-mono tracking-wider rounded transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-white/10 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#f4f4f1] text-[#080808] py-2.5 rounded text-xs font-mono font-bold uppercase tracking-wider"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
