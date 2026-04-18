import { motion } from 'motion/react';
import { Download, ChevronRight, User } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  // Simplified tiered loading: Local (with cache buster) -> Drive -> Unsplash Fallback
  const [imgSrc, setImgSrc] = useState(`/me.jpg?v=${Date.now()}`);
  const [loadStep, setLoadStep] = useState(0); // 0: Local, 1: Drive, 2: Remote Fallback
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (loadStep === 0) {
      console.log("Local image failed, trying Drive link...");
      setImgSrc('https://drive.google.com/uc?id=10zi_xd6fh2ferfEpy6NBCdnOreYW8hEm');
      setLoadStep(1);
    } else if (loadStep === 1) {
      console.log("Drive image failed, trying Unsplash fallback...");
      setImgSrc('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80');
      setLoadStep(2);
    } else {
      console.log("All image sources failed.");
      setHasError(true);
    }
  };

  return (
    <section className="flex items-center justify-center pt-8 px-4 overflow-hidden relative">
      <div className="w-full max-w-xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="bg-brand-card border border-brand-border rounded-brand p-8 shadow-2xl relative overflow-hidden group/card hover:border-brand-accent/50 transition-colors duration-500"
        >
          {/* Subtle background glow effect on the box */}
          <div className="absolute -inset-24 bg-brand-accent/5 blur-[100px] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 -z-10" />

          {/* Profile Photo & Name Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-48 h-48 rounded-[32px] bg-zinc-800 border-4 border-brand-accent/20 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-2xl relative"
            >
              {!hasError ? (
                <img 
                  src={imgSrc} 
                  alt="Vaibhav Gupta" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-zinc-900 text-brand-accent">
                   <User size={80} />
                </div>
              )}
            </motion.div>
            
            <div className="text-center sm:text-left flex flex-col justify-center h-48">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[12px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-3"
              >
                Hi, I am
              </motion.span>
              <motion.h1
                className="text-[48px] sm:text-[56px] font-black text-white tracking-tighter leading-[0.85] uppercase flex flex-col mb-4"
              >
                <span>Vaibhav</span>
                <span>Gupta</span>
              </motion.h1>
              <div className="h-1.5 w-32 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          <div className="text-left flex flex-col items-start px-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[16px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-8"
            >
              Software Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-brand-accent text-zinc-900 rounded-xl text-sm font-black transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)]"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-zinc-800 bg-zinc-900/50 text-white rounded-xl text-sm font-bold transition-all hover:border-zinc-700"
              >
                Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
