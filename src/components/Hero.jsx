import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = {
  yellow: '#feec03',
  navy: '#00003d',
  white: '#f6f6fb',
  gray: '#d5d5d5',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onCTAClick }) {
  return (
    <section id="home" className="relative w-full h-[72vh] min-h-[520px] overflow-hidden">
      {/* Spline 3D Cover with gentle parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Gradient mask for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f6f6fb] via-[#f6f6fb]/80 to-transparent" />

      {/* Subtle blueprint overlay */}
      <motion.div className="pointer-events-none absolute inset-0 mix-blend-multiply">
        <div className="w-full h-full blueprint-grid opacity-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-10">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-[11px] font-medium text-[#00003d] shadow-sm ring-1" style={{ borderColor: COLORS.gray }}>
              <span className="h-2 w-2 rounded-full" style={{ background: COLORS.yellow }} />
              GoSource AI — Smarter Sourcing, Made Simple
            </div>

            <h1 className="mt-4 text-[34px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]" style={{ color: COLORS.navy }}>
              Meet Your AI Sourcing Copilot.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#00003d]/80 max-w-2xl">
              From spec to delivery — instantly.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(254,236,3,0.35)' }}
                whileTap={{ y: 0 }}
                onClick={onCTAClick}
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm sm:text-base font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ background: COLORS.yellow, color: '#111' }}
              >
                Try GoSource AI Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
