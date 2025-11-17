import { Search, Receipt, Image, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = {
  yellow: '#feec03',
  navy: '#00003d',
  white: '#f6f6fb',
  gray: '#d5d5d5',
};

const items = [
  { title: 'Real-time Pricing', icon: Receipt, desc: 'Live quotes from vetted suppliers, tuned to your specs.' },
  { title: 'Visual Discovery Engine', icon: Image, desc: 'Explore surfaces visually — see finishes, textures, and matches.' },
  { title: 'Spec & Plan Understanding', icon: Search, desc: 'Parse drawings, schedules, and PDFs with multimodal AI.' },
  { title: 'Managed Fulfillment', icon: Package, desc: 'We orchestrate vendors, QC, logistics, and delivery.' },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24 bg-[#f6f6fb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[22px] sm:text-3xl font-bold" style={{ color: COLORS.navy }}>Why GoSource</h2>
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map(({ title, icon: Icon, desc }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border bg-white p-5 sm:p-6 shadow-sm transition-all hover:shadow-md"
              style={{ borderColor: COLORS.gray }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: COLORS.yellow }}>
                <Icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold" style={{ color: COLORS.navy }}>{title}</h3>
              <p className="mt-2 text-sm text-[#00003d]/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
