import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something insane</h2>
              <p className="mt-3 text-white/70 max-w-prose">
                Tell me about your idea — product, brand, or experiment. I can help design it, build it, or both.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="mailto:hello@insaneboy.dev"
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black px-4 py-2 font-semibold transition"
                >
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-2 font-semibold transition"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-2 font-semibold transition"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70">What are we building?</label>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  placeholder="A brief about your project, timeline, and budget."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black px-5 py-2.5 font-semibold transition"
              >
                Send message
              </button>
              <p className="text-xs text-white/50">This demo form doesn’t send yet — reach me via email for a quick response.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
