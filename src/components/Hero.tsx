import { motion } from 'motion/react';
import { Download, ChevronRight } from 'lucide-react';

export default function Hero() {
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

          {/* Profile Photo */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-40 h-40 rounded-3xl bg-zinc-200 dark:bg-zinc-800 border-2 border-brand-accent/20 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-2xl ring-4 ring-brand-accent/5"
            >
               <img 
                 src="/profile.jpg" 
                 alt="Vaibhav Gupta - Software Developer" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                 referrerPolicy="no-referrer"
               />
            </motion.div>
            <div className="text-center sm:text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-[12px] font-bold text-brand-text-s uppercase tracking-widest mb-1 block opacity-70"
              >
                Hi, I am
              </motion.span>
              <motion.h1
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2
                    }
                  },
                  hover: {
                    scale: 1.02,
                    color: "var(--brand-accent)",
                    transition: { duration: 0.3 }
                  }
                }}
                className="text-[42px] font-black text-brand-text-p tracking-tighter leading-[0.9] uppercase cursor-default transition-colors duration-300 flex flex-col"
              >
                <div className="flex justify-center sm:justify-start">
                  {"Vaibhav".split("").map((char, index) => (
                    <motion.span
                      key={`vaibhav-${index}`}
                      variants={{
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-center sm:justify-start">
                  {"Gupta".split("").map((char, index) => (
                    <motion.span
                      key={`gupta-${index}`}
                      variants={{
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-brand-accent mt-2 rounded-full mx-auto sm:mx-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[14px] font-black uppercase tracking-[0.2em] text-brand-accent mb-6"
          >
            Software Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, backgroundColor: "var(--brand-accent)" }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 bg-brand-accent text-white rounded-[6px] text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02, borderColor: "var(--brand-accent)", color: "var(--brand-accent)" }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 border border-brand-border text-brand-text-p rounded-[6px] text-xs font-bold transition-all"
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
