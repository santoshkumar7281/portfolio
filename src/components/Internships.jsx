import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs uppercase text-white/40 tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono uppercase tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-4 leading-snug">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mt-1">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-wider font-mono text-white/60 mb-2 font-bold">
            Skills Gained:
          </p>
          <ul className="space-y-1.5">
            {intern.skills.map((skill, i) => (
              <li
                key={i}
                className="text-sm text-white/90 flex items-start gap-2"
              >
                <span className="text-red-300 font-bold">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="border-t border-white/10 pt-6 mt-6">
        <p className="text-xs uppercase tracking-wider font-mono text-white/60 mb-3 font-bold">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white font-mono text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Torn-Paper SVG Divider (flows dark section into red) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star Bottom-Left */}
      <svg
        className="absolute bottom-12 left-8 text-black opacity-20 animate-pulse pointer-events-none w-10 h-10 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto font-medium">
            Hands-on industry experience building scalable systems and mastering
            full-stack technologies.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 ${
            internshipsList.length === 1
              ? 'max-w-2xl mx-auto'
              : internshipsList.length === 2
                ? 'md:grid-cols-2 max-w-4xl mx-auto'
                : 'lg:grid-cols-3'
          } gap-6 md:gap-8`}
        >
          {internshipsList.map((intern, index) => (
            <InternshipCard key={index} intern={intern} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

