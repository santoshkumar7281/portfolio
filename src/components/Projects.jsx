import { projects } from '../data/portfolioData'

function ProjectCard({ project, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:border-red-500/30 hover:scale-[1.01] transition-all duration-300 relative group flex flex-col justify-between"
    >
      <div>
        {/* Top Header: Badge & Number */}
        <div className="flex items-center justify-between gap-4 mb-6">
          {project.badge ? (
            <span className="inline-block px-3.5 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono font-semibold">
              {project.badge}
            </span>
          ) : (
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white/70 text-xs font-mono font-semibold">
              Project
            </span>
          )}
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 font-bold">
            {project.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-red-400 transition-colors mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techTags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-white/80 font-mono text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm hover:scale-105 transition-all shadow-md"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub Repository</span>
          </a>
        )}

        {project.links?.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demonstration`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs md:text-sm hover:bg-white/20 transition-all"
          >
            <span>Live Demo</span>
            <svg
              className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono text-xs cursor-default">
            Demo Coming Soon
          </span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  if (!projects || projects.length === 0) return null

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pt-28 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top Torn-Paper SVG Divider (transitions white Services into dark Projects) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Selected Projects
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto font-medium">
            Real-world applications showcasing full-stack development, API
            integration, and practical software design.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

