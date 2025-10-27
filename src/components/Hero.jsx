import Spline from '@splinetool/react-spline';
import { Code, PenTool, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              Insane Boy • Programmer & Designer
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              I build playful tech experiences
              <span className="block text-cyan-400">that look good and ship fast.</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              I blend clean code with bold visual design. From interactive web apps to brand systems — I bring ideas to life with style and precision.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black px-5 py-3 font-semibold transition shadow-lg shadow-cyan-500/20"
              >
                See Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-semibold transition"
              >
                Let’s Collaborate
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-cyan-500/20 p-2 text-cyan-300">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Programming</p>
                    <p className="text-white/60 text-sm">React, TypeScript, FastAPI</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-fuchsia-500/20 p-2 text-fuchsia-300">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Designing</p>
                    <p className="text-white/60 text-sm">UI/UX, Motion, Branding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[560px] xl:h-[640px]">
            {/* Empty column keeps the 3D scene visible and gives layout balance */}
          </div>
        </div>
      </div>
    </section>
  );
}
