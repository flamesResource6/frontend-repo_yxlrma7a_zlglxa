import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import SurfaceFeed from './components/SurfaceFeed';
import Multimodal from './components/Multimodal';
import Engine from './components/Engine';
import Roadmap from './components/Roadmap';
import Proof from './components/Proof';
import BigCTA from './components/BigCTA';
import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [ctaClicked, setCtaClicked] = useState(false);

  const handleCTAClick = () => {
    setCtaClicked(true);
    const cta = document.getElementById('cta');
    if (cta) cta.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => alert("Thanks! We'll get you early access."), 250);
  };

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-[#f6f6fb] text-[#00003d]">
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1"
        style={{ scaleX, transformOrigin: '0% 50%', background: '#feec03' }}
      />

      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 rounded-xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55 shadow-sm" style={{ borderColor: '#d5d5d5' }}>
            <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-sm" style={{ background: '#feec03' }} />
                <span className="text-sm font-semibold tracking-wide" style={{ color: '#00003d' }}>GoSource</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#00003d' }}>
                <a href="#engine" className="hover:opacity-80">AI</a>
                <a href="#feed" className="hover:opacity-80">Solutions</a>
                <a href="#proof" className="hover:opacity-80">Proof</a>
                <a href="#roadmap" className="hover:opacity-80">Roadmap</a>
              </nav>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(254,236,3,0.35)' }}
                whileTap={{ y: 0 }}
                onClick={handleCTAClick}
                className="rounded-md px-4 py-2 text-sm font-semibold shadow-sm"
                style={{ background: '#feec03', color: '#111' }}
              >
                Try Free
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28">
        <Hero onCTAClick={handleCTAClick} />
        <ValueProps />
        <SurfaceFeed />
        <Multimodal />
        <Engine />
        <Roadmap />
        <Proof />
        <BigCTA onCTAClick={handleCTAClick} />
      </main>

      <footer className="py-12 text-center text-xs text-[#00003d]/60">
        © {new Date().getFullYear()} GoSource. All rights reserved.
      </footer>
    </div>
  );
}
