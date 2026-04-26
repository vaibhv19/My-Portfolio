import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'AI Powered Fitness Application',
      description: 'Personalized workout plans using AI. Built with a Spring Boot backend focusing on robust scalability and data management.',
      tech: ['Spring Boot', 'React','Java','REST APIs', 'AI Integration'],
      github: 'https://github.com/vaibhv19/AI-Powered-Fittness-application',
    },
    {
      title: 'Smart Research Assistant',
      description: 'AI-powered browser extension for real-time webpage summarization, contextual insights, and intelligent research assistance using Spring Boot, Spring AI, and Gemini API.',
      tech: ['Spring Boot', 'Spring AI', 'Gemini API', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
      github: 'https://github.com/vaibhv19/Smart-Research-Assistant',
    },
    {
      title: 'AI Content Generator Platform',
      description: 'Generative model platform. Orchestrated via Spring Boot with high-concurrency content processing pipelines.',
      tech: ['Spring Boot', 'React', 'Open AI API'],
      github: 'https://github.com/vaibhv19/AI-Content-Generator-Platform',
    },
    {
      title: 'Expense Tracker App',
      description: 'Intuitive finance management. Backend powered by Spring Boot for secure transaction processing and auditing.',
      tech: ['Spring Boot', 'REST APIs','AWS','Apache Kafka','VPS', 'React Native'],
      github: 'https://github.com/vaibhv19/Expense-Tracker-App',
    },
    {
      title: 'Auth Service (Microservice)',
      description: 'Built a secure authentication and authorization microservice using Spring Boot and Spring Security, implementing JWT-based login, refresh token flow, and role-based access control for scalable backend systems.',
      tech: ['Spring Boot', 'Spring Security', 'JWT', 'Java', 'MySQL'],
      github: 'https://github.com/vaibhv19/Auth-service',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-card border border-brand-border rounded-brand p-5 overflow-hidden"
    >
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title} 
            whileHover={{ x: 5 }}
            className={`py-5 group cursor-pointer ${idx !== projects.length - 1 ? 'border-b border-brand-border' : ''}`}
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[14px] font-semibold text-brand-text-p flex items-center gap-1 group-hover:text-brand-accent transition-colors">
                {project.title}
                <ChevronRight size={14} className="text-brand-text-s group-hover:text-brand-accent transition-colors group-hover:translate-x-1 duration-300" />
              </h3>
            </div>
            
            <p className="text-[11px] text-brand-text-s leading-relaxed mb-3">
              {project.description}
            </p>

            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {project.tech.map((t) => (
                  <motion.span 
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-0.5 bg-brand-accent/10 rounded-sm text-[10px] font-semibold text-brand-accent"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="ml-auto flex gap-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-brand-accent hover:underline flex items-center gap-1"
                >
                  <Github size={10} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
        
        <div className="mt-4 pt-4 border-t border-brand-border">
          <a
            href="https://github.com/vaibhv19"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 flex items-center justify-center gap-2 border border-brand-border text-brand-text-p rounded-md text-[11px] font-bold hover:bg-white/5 transition-colors"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
