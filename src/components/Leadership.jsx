import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between">
      {/* Red Glowing Dot on Timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] border-2 border-[#0a0a0a] shadow-[0_0_14px_rgba(255,42,42,0.9)] z-10" />

      {/* Left Slot (Even: Card, Odd: Spacer on Desktop) */}
      <div className="w-full md:w-[45%] pl-12 md:pl-0 md:order-1">
        {isEven ? (
          <div
            data-aos="fade-right"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300 md:text-right"
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono font-semibold mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl font-black text-white hover:text-red-500 transition-colors mb-1">
              {item.title}
            </h3>
            <p className="font-mono uppercase text-xs text-red-400 tracking-wider mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Spacer for Center Gap */}
      <div className="hidden md:block md:w-[10%] md:order-2" />

      {/* Right Slot (Odd: Card, Even: Spacer on Desktop) */}
      <div className="w-full md:w-[45%] pl-12 md:pl-0 md:order-3">
        {!isEven ? (
          <div
            data-aos="fade-left"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300 md:text-left"
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono font-semibold mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl font-black text-white hover:text-red-500 transition-colors mb-1">
              {item.title}
            </h3>
            <p className="font-mono uppercase text-xs text-red-400 tracking-wider mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </div>
  )
}

export default function Leadership() {
  if (!leadershipList || leadershipList.length === 0) return null

  return (
    <section className="bg-[#0a0a0a] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pt-28 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Torn-Paper SVG Divider (flows red into dark) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Collaborative initiatives, hackathons, and technical contributions
            outside of everyday coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

