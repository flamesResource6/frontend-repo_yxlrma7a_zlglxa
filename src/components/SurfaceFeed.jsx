import { Heart, ThumbsDown, Images } from 'lucide-react';

const COLORS = {
  yellow: '#feec03',
  navy: '#00003d',
};

export default function SurfaceFeed() {
  return (
    <section id="feed" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f6f6fb] px-3 py-1 text-xs font-medium text-[#00003d]">
            The New Surface Feed
          </div>
          <h2 className="mt-4 text-[22px] sm:text-3xl font-bold" style={{ color: COLORS.navy }}>
            Swipe. Discover. Source.
          </h2>
          <p className="mt-3 text-[#00003d]/80">
            A TikTok-like feed for surfaces, tailored to your project.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#00003d]/80">
            <li className="flex items-center gap-2"><Heart className="h-4 w-4" style={{ color: COLORS.yellow }} /> Like & Dislike signals train recommendations</li>
            <li className="flex items-center gap-2"><Images className="h-4 w-4" style={{ color: COLORS.yellow }} /> Swipe for details and see matched galleries</li>
            <li className="flex items-center gap-2"><ThumbsDown className="h-4 w-4" style={{ color: COLORS.yellow }} /> Alternatives auto-suggested when specs conflict</li>
          </ul>
        </div>
        <div className="rounded-2xl border overflow-hidden bg-[#f6f6fb] aspect-[4/3]" style={{ borderColor: '#d5d5d5' }}>
          <img src="/surface-feed.png" alt="Surface Feed UI" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
