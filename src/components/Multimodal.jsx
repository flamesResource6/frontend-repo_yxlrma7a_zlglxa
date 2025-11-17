import { Mic, FileText, Image, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = {
  yellow: '#feec03',
  navy: '#00003d',
};

const chips = [
  { label: 'Voice', icon: Mic },
  { label: 'Text', icon: MessageSquare },
  { label: 'Images', icon: Image },
  { label: 'Files', icon: FileText },
];

const chipVar = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function Multimodal() {
  return (
    <section className="py-16 sm:py-24 bg-[#f6f6fb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[22px] sm:text-3xl font-bold" style={{ color: COLORS.navy }}>Multimodal AI Inputs</h2>
        <p className="mt-3 text-[#00003d]/80 max-w-2xl leading-relaxed">Send a photo. Upload a schedule. Ask a question. AI handles the rest.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {chips.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              variants={chipVar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm"
              style={{ borderColor: '#d5d5d5' }}
              whileHover={{ scale: 1.04 }}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: COLORS.yellow }}>
                <Icon className="h-3.5 w-3.5 text-black" />
              </span>
              <span className="font-medium text-[#00003d]">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
