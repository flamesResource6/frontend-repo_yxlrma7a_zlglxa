const COLORS = { yellow: '#feec03', navy: '#00003d' };

export default function Roadmap() {
  const steps = [
    { label: 'v2', desc: 'Surface Feed + Pricing API' },
    { label: 'v3', desc: 'Multimodal Inputs + Spec Parser' },
    { label: 'v5', desc: 'Orchestrated Logistics + QC' },
    { label: 'v6', desc: 'End-to-end Procurement OS' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f6f6fb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: COLORS.navy }}>Roadmap</h2>
        <div className="mt-8 relative">
          <div className="absolute left-0 right-0 top-6 h-1 bg-[#d5d5d5]" />
          <div className="relative grid grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={s.label} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center font-bold" style={{ background: COLORS.yellow }}>
                  {s.label}
                </div>
                <p className="mt-3 text-sm text-[#00003d]/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
