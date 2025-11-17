import { motion } from 'framer-motion';

const COLORS = { yellow: '#feec03', navy: '#00003d' };

export default function Roadmap() {
  const steps = [
    { label: 'v2', desc: 'Surface Feed + Pricing API' },
    { label: 'v3', desc: 'Multimodal Inputs + Spec Parser' },
    { label: 'v5', desc: 'Orchestrated Logistics + QC' },
    { label: 'v6', desc: 'End-to-end Procurement OS' },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-[#f6f6fb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[22px] sm:text-3xl font-bold" style={{ color: COLORS.navy }}>Roadmap</h2>
        <div className="mt-8 relative">
          <div className="absolute left-0 right-0 top-6 h-[2px] bg-[#d5d5d5]" />
          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="mx-auto h-12 w-12 rounded-full flex items-center justify-center font-bold"
                  style={{ background: COLORS.yellow }}
                >
                  {s.label}
                </motion.div>
                <p className="mt-3 text-sm text-[#00003d]/80">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
