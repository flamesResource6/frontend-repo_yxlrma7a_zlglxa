const COLORS = { yellow: '#feec03', navy: '#00003d' };

export default function BigCTA({ onCTAClick }) {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-[#f6f6fb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: COLORS.navy }}>
          Start Sourcing Smarter
        </h2>
        <p className="mt-3 text-[#00003d]/80">GoSource AI — Smarter Sourcing, Made Simple.</p>
        <div className="mt-8">
          <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" style={{ background: COLORS.yellow, color: '#111', boxShadow: '0 8px 24px rgba(254, 236, 3, 0.3)' }}>
            Try GoSource AI
          </button>
        </div>
      </div>
    </section>
  );
}
