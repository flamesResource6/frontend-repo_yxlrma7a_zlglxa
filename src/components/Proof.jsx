import { motion } from 'framer-motion';

const COLORS = { yellow: '#feec03', navy: '#00003d' };

const stats = [
  { label: 'Time to first quote', value: 'Minutes, not days' },
  { label: 'AI sourced revenue', value: '$XM+' },
  { label: 'Adoption of alternatives', value: 'Up to 45%' },
  { label: 'Repeat purchases', value: '70%+' },
];

export default function Proof() {
  return (
    <section id="proof" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[22px] sm:text-3xl font-bold" style={{ color: COLORS.navy }}>Proof & Case Studies</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border bg-[#f6f6fb] p-5 sm:p-6 text-center"
              style={{ borderColor: '#d5d5d5' }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-base sm:text-lg font-semibold" style={{ color: COLORS.navy }}>{s.value}</div>
              <div className="mt-2 text-xs text-[#00003d]/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
