import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Trophy, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-card border border-brand-border rounded-brand p-6"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-[13px] text-brand-text-s leading-relaxed font-medium">
            I am a 3rd-year B.Tech student dedicated to mastering <span className="text-brand-text-p font-semibold">Software Development</span> through a deep foundation in Computer Science and rigorous practical application.
          </p>
          
          <p className="text-[13px] text-brand-text-s leading-relaxed">
            My expertise lies in architecting Java-based backend and full-stack systems using <span className="text-brand-text-p font-semibold">Spring Boot, REST APIs, MySQL, and MongoDB</span>. I bridge the gap between core development and modern innovation by integrating AI into microservices and distributed platforms.
          </p>

          <p className="text-[13px] text-brand-text-s leading-relaxed">
            Currently, I am exploring <span className="text-brand-text-p font-semibold">Cloud (AWS), DevOps, and System Design</span> to understand how scalable applications are built and maintained. Beyond the code, I value the discipline and consistency required to build production-grade systems.
          </p>
          
          <p className="text-[13px] text-brand-text-s leading-relaxed border-l-2 border-brand-accent/30 pl-3 italic">
            Actively seeking Software Development Internship opportunities and collaborative ventures to solve complex technical challenges.
          </p>
        </div>

        <div className="pt-6 border-t border-brand-border space-y-8">
          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <GraduationCap size={16} />
              </div>
              <h3 className="text-sm font-bold text-brand-text-p uppercase tracking-tight">
                Education
              </h3>
            </div>

            <div className="space-y-6 ml-4 border-l border-brand-border pl-6 relative">
              {/* College */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-brand-accent border-2 border-brand-bg shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <div className="space-y-1">
                  <p className="text-[14px] font-bold text-brand-text-p">
                    Greater Noida Institute of Technology (GNIOT)
                  </p>
                  <p className="text-[12px] font-semibold text-brand-accent">
                    Bachelor of Technology, Computer Science
                  </p>
                  <p className="text-[11px] text-brand-text-s flex items-center gap-1.5 mt-1">
                    <Calendar size={10} className="opacity-50" />
                    Sep 2023 – May 2027
                  </p>
                </div>
              </div>

              {/* Class 12 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-brand-border border-2 border-brand-bg" />
                <div className="space-y-1">
                  <p className="text-[13px] font-bold text-brand-text-p">
                    RPM Academy
                  </p>
                  <p className="text-[12px] font-medium text-brand-text-s">
                    Class 12, PCM
                  </p>
                  <p className="text-[11px] text-brand-text-s flex items-center gap-1.5 mt-1">
                    <Calendar size={10} className="opacity-50" />
                    Jun 2020 – May 2022
                  </p>
                </div>
              </div>

              {/* Class 10 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-brand-border border-2 border-brand-bg" />
                <div className="space-y-1">
                  <p className="text-[13px] font-bold text-brand-text-p">
                    Springer Public School
                  </p>
                  <p className="text-[12px] font-medium text-brand-text-s">
                    Class 10, SCIENCE
                  </p>
                  <p className="text-[11px] text-brand-text-s flex items-center gap-1.5 mt-1">
                    <Calendar size={10} className="opacity-50" />
                    May 2018 – Jul 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
              <Trophy size={20} />
            </div>
            <div className="space-y-1 w-full">
              <h3 className="text-sm font-bold text-brand-text-p uppercase tracking-tight">
                Achievements
              </h3>
              
              <div className="space-y-3 mt-2">
                {/* Yukti NIR Startup Challenge */}
                <motion.div 
                  whileHover={{ x: 5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  className="p-3 rounded-lg bg-white/5 border border-brand-border transition-colors"
                >
                  <p className="text-[13px] font-semibold text-brand-text-p">
                    Semi-Finalist – Yukti NIR Startup Challenge Hackathon 2025
                  </p>
                  <p className="text-[11px] text-brand-text-s mt-1">
                    Issued by Greater Noida Institute of Technology • Apr 2025
                  </p>
                </motion.div>

                {/* LeetCode */}
                <motion.a 
                  href="https://leetcode.com/u/vaibhv_19/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, borderColor: "var(--brand-accent)" }}
                  className="group flex items-center justify-between p-3 rounded-lg bg-white/5 border border-brand-border transition-all"
                >
                  <div className="space-y-0.5">
                    <p className="text-[13px] font-semibold text-brand-text-p group-hover:text-brand-accent transition-colors">
                      75+ Questions Solved
                    </p>
                    <p className="text-[11px] text-brand-text-s uppercase tracking-wider font-bold">
                      LeetCode
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-brand-text-s group-hover:text-brand-accent transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
