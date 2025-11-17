import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const COLORS = {
  yellow: '#feec03', // Pantone 803c
  navy: '#00003d',   // Pantone 2765c
  white: '#f6f6fb',  // Pantone 663c
  gray: '#d5d5d5',   // Pantone 428c
};

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated blueprint overlay (subtle) */}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply">
        <div className="w-full h-full blueprint-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-[#00003d] shadow-sm">
              <span className="h-2 w-2 rounded-full" style={{ background: COLORS.yellow }} />
              GoSource AI — Smarter Sourcing, Made Simple
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: COLORS.navy }}>
              Meet Your AI Sourcing Copilot.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#00003d]/80 max-w-2xl">
              From spec to delivery — instantly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm sm:text-base font-semibold shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" style={{ background: COLORS.yellow, color: '#111', boxShadow: '0 8px 24px rgba(254, 236, 3, 0.3)' }}>
                Try GoSource AI Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade for text readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f6fb] to-transparent" />
    </section>
  );
}
