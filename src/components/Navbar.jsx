import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-bold tracking-tight text-xl">
            insane <span className="text-cyan-400">boy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <a
                href="mailto:hello@insaneboy.dev"
                className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden p-2 text-white/90 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="mailto:hello@insaneboy.dev" className="text-white/80 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
