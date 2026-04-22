import { motion } from 'motion/react';
import { Download, ChevronRight, User } from 'lucide-react';
import { useState, SyntheticEvent } from 'react';
import { useTheme } from '../ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  // Tiered loading: Local -> Drive (lh3 format) -> Unsplash Fallback
  const [imgSrc, setImgSrc] = useState('/me.jpg');
  const [loadStep, setLoadStep] = useState(0); // 0: Local, 1: Drive, 2: Remote Fallback
  const [hasError, setHasError] = useState(false);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (loadStep === 0) {
      console.warn(`Local image '/me.jpg' failed (Status: ${target.complete}). Trying Google Drive link...`);
      setImgSrc('https://lh3.googleusercontent.com/d/10zi_xd6fh2ferfEpy6NBCdnOreYW8hEm');
      setLoadStep(1);
    } else if (loadStep === 1) {
      console.warn("Google Drive link failed. Falling back to Unsplash photo.");
      setImgSrc('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80');
      setLoadStep(2);
    } else {
      console.error("Critical: All image sources failed.");
      setHasError(true);
    }
  };

  const resumeUrl = import.meta.env.VITE_RESUME_URL || "https://drive.google.com/file/d/1X7ON6o9T-47CrX83VmGR1aZmHrLTcRL6/view?usp=sharing";
  
  // Helper to ensure Google Drive links are viewable
  const getProcessedResumeUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
      }
    }
    return url;
  };

  const finalResumeUrl = getProcessedResumeUrl(resumeUrl);

  return (
    <section key={theme} className="flex items-center justify-center pt-8 px-4 overflow-hidden relative">
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
              className="w-48 h-48 rounded-[32px] bg-brand-bg border-4 border-brand-accent/20 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-2xl relative"
            >
              {!hasError ? (
                <img 
                  src={imgSrc} 
                  alt="Vaibhav Gupta" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-brand-bg text-brand-accent">
                   <User size={80} />
                </div>
              )}
            </motion.div>
            
            <div className="text-center sm:text-left flex flex-col justify-center h-48">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[12px] font-bold text-brand-text-s uppercase tracking-[0.2em] mb-3"
              >
                Hi, I am
              </motion.span>
              <motion.h1
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="text-[48px] sm:text-[56px] font-black tracking-tighter leading-[0.85] uppercase flex flex-col mb-4 transition-colors duration-500 text-brand-text-p"
              >
                <motion.span
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  className="block"
                >
                  Vaibhav
                </motion.span>
                <motion.span
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  className="block"
                >
                  Gupta
                </motion.span>
              </motion.h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "128px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
              />
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-brand-accent text-white rounded-xl text-sm font-black transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)]"
              >
                View Projects
              </motion.a>
              <motion.a
                href={finalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-brand-border bg-brand-card text-brand-text-p rounded-xl text-sm font-bold transition-all hover:border-brand-accent/50"
              >
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
