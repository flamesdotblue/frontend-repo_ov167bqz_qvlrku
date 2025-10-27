import { ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI Kit',
    description: 'A playful, modern component library with motion-first interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Collab Board',
    description: 'Draw, brainstorm, and co-create with friends in the browser.',
    tags: ['FastAPI', 'WebSockets', 'Canvas'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Portfolio',
    description: 'Immersive web portfolio that blends 3D scenes with crisp typography.',
    tags: ['Spline', 'Vite', 'Accessibility'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-0 opacity-30 bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A mix of code and craft. I love building products that feel alive and purposeful.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            Get a quote
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-white/70 bg-white/5 border border-white/10 rounded-md px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black px-3 py-2 text-sm font-semibold transition"
                >
                  <Globe className="h-4 w-4" /> Live
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-3 py-2 text-sm font-semibold transition"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <span className="ml-auto text-white/60 group-hover:text-white/80 transition">
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
