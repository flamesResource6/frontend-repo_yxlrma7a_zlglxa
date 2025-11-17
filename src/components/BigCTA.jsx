import { motion } from 'framer-motion';

const COLORS = { yellow: '#feec03', navy: '#00003d' };

export default function BigCTA({ onCTAClick }) {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-[#f6f6fb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold"
          style={{ color: COLORS.navy }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Start Sourcing Smarter
        </motion.h2>
        <motion.p
          className="mt-3 text-[#00003d]/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          GoSource AI — Smarter Sourcing, Made Simple.
        </motion.p>
        <div className="mt-8">
          <motion.button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: COLORS.yellow, color: '#111' }}
            whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(254,236,3,0.35)' }}
            whileTap={{ y: 0 }}
          >
            Try GoSource AI
          </motion.button>
        </div>
      </div>
    </section>
  );
}
