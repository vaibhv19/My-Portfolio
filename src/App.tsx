/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-bg text-brand-text-p selection:bg-brand-accent/30 selection:text-white">
        <Navbar />
        
        <main className="max-w-[800px] mx-auto px-6 lg:px-10 pt-[100px] pb-12 flex flex-col gap-12">
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: About */}
          <section id="about" className="flex flex-col gap-4">
            <h2 className="text-[12px] uppercase tracking-[1.5px] text-brand-accent font-semibold px-2">About</h2>
            <About />
          </section>

          {/* Section 3: Projects */}
          <section id="projects" className="flex flex-col gap-4">
            <h2 className="text-[12px] uppercase tracking-[1.5px] text-brand-accent font-semibold px-2">Featured Projects</h2>
            <Projects />
          </section>

          {/* Section 4: Skills */}
          <section id="skills" className="flex flex-col gap-4">
            <h2 className="text-[12px] uppercase tracking-[1.5px] text-brand-accent font-semibold px-2">Technical Expertise</h2>
            <Skills />
          </section>
        </main>

        {/* Full-width Contact Section at bottom */}
        <section id="contact" className="max-w-[700px] mx-auto px-6 pb-24 flex flex-col gap-6 text-center">
            <h2 className="text-[12px] uppercase tracking-[2px] text-brand-accent font-bold">Get in Touch</h2>
            <Contact />
        </section>
        
        <footer className="py-8 px-6 border-t border-brand-border text-center">
          <p className="text-[10px] font-bold text-brand-text-s uppercase tracking-[0.3em]">
           Thanks for visiting!!!
          </p>
        </footer>

        <Chatbot />
      </div>
    </ThemeProvider>
  );
}
