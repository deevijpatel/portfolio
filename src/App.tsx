import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofPoints } from './components/ProofPoints';
import { SelectedWork } from './components/SelectedWork';
import { HowIThink } from './components/HowIThink';
import { FoundersOfficeFit } from './components/FoundersOfficeFit';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f1] font-sans selection:bg-[#ff4b3e] selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Christoph Nagel-inspired kinetic word window and rapid 30s proof bar */}
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onConnect={() => scrollToSection('contact')}
        />

        {/* Selected Work — 4 Core Evidence Projects (ReceiptWise, TresVista, 32bytes, Research) */}
        <SelectedWork />

        {/* Verified Proof Points Strip ($20B+ AUM, 6+ Funds, 50+ SPVs, 63 Obs, 7 Companies) */}
        <ProofPoints />

        {/* How I Think — 4 Core Mental Models */}
        <HowIThink />

        {/* Where I Can Add Value — Founder's Office & Operator Fit */}
        <FoundersOfficeFit />

        {/* About Deevij — Personal Context & Narrative */}
        <AboutSection />

        {/* Contact Section — Direct CTA, Email, LinkedIn & Note Composer */}
        <ContactSection />
      </main>

      {/* Minimal Footer with IST Time and Quick Navigation */}
      <Footer />
    </div>
  );
}
