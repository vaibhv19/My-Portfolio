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
        
        <main className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-[100px] pb-24 lg:grid lg:grid-cols-[1fr_1fr_1.1fr] gap-8">
          {/* Column 1: Hero, About */}
          <div className="flex flex-col gap-8">
            <Hero />
            
            <section id="about" className="flex flex-col gap-4">
              <h2 className="text-[12px] uppercase tracking-[1.5px] text-brand-accent font-semibold px-2">About</h2>
              <About />
            </section>
          </div>

          {/* Column 2: Projects */}
          <div className="flex flex-col gap-8 mt-12 lg:mt-0">
            <section id="projects" className="flex flex-col gap-4 h-full">
              <h2 className="text-[12px] uppercase tracking-[1.5px] text-brand-accent font-semibold px-2">Featured Projects</h2>
              <Projects />
            </section>
          </div>

          {/* Column 3: Skills */}
          <div className="flex flex-col gap-8 mt-12 lg:mt-0">
            <section id="skills" className="flex flex-col gap-4">
              <h2 className="text-[12px] uppercase tracking-[1.5px] text-brand-accent font-semibold px-2">Technical Expertise</h2>
              <Skills />
            </section>
          </div>
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
