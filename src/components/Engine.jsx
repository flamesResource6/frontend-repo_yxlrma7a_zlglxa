import { Workflow, Brain, ScrollText, Truck, BadgeDollarSign } from 'lucide-react';

const COLORS = {
  yellow: '#feec03',
  navy: '#00003d',
};

const points = [
  { icon: Brain, text: 'Trained on real job-site data' },
  { icon: ScrollText, text: 'Understands specs' },
  { icon: Workflow, text: 'Suggests alternatives' },
  { icon: Truck, text: 'Orchestrates vendors & logistics' },
  { icon: BadgeDollarSign, text: 'Exclusive member pricing' },
];

export default function Engine() {
  return (
    <section id="engine" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div>
          <h2 className="text-[22px] sm:text-3xl font-bold" style={{ color: COLORS.navy }}>The AI Procurement Engine</h2>
          <ul className="mt-6 space-y-3 text-sm text-[#00003d]/85">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: COLORS.yellow }}>
                  <Icon className="h-4 w-4 text-black" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border p-6 bg-[#f6f6fb] text-sm text-[#00003d]/80 min-h-[220px]" style={{ borderColor: '#d5d5d5' }}>
          Large product imagery can live here: surfaces, slabs, plans.
        </div>
      </div>
    </section>
  );
}
