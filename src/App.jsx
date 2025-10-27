import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-white/60">
      <p>
        © {new Date().getFullYear()} insane boy — Built with passion for programming and designing.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
