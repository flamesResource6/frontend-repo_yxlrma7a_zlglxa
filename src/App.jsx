import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import SurfaceFeed from './components/SurfaceFeed';
import Multimodal from './components/Multimodal';
import Engine from './components/Engine';
import Roadmap from './components/Roadmap';
import Proof from './components/Proof';
import BigCTA from './components/BigCTA';
import { useState } from 'react';

export default function App() {
  const [ctaClicked, setCtaClicked] = useState(false);

  const handleCTAClick = () => {
    setCtaClicked(true);
    // Placeholder: open signup modal or navigate
    alert('Thanks! We\'ll get you early access.');
  };

  return (
    <div className="min-h-screen bg-[#f6f6fb]">
      {/* Top nav placeholder */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm" style={{ background: '#feec03' }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: '#00003d' }}>GoSource</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm" style={{ color: '#00003d' }}>
            <a href="#" className="hover:opacity-80">AI</a>
            <a href="#" className="hover:opacity-80">Solutions</a>
            <a href="#" className="hover:opacity-80">Pricing</a>
          </div>
          <button onClick={handleCTAClick} className="rounded-md px-4 py-2 text-sm font-semibold shadow-sm" style={{ background: '#feec03', color: '#111' }}>Try Free</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onCTAClick={handleCTAClick} />
        <ValueProps />
        <SurfaceFeed />
        <Multimodal />
        <Engine />
        <Roadmap />
        <Proof />
        <BigCTA onCTAClick={handleCTAClick} />
      </main>

      <footer className="py-10 text-center text-xs text-[#00003d]/60">
        © {new Date().getFullYear()} GoSource. All rights reserved.
      </footer>
    </div>
  );
}
