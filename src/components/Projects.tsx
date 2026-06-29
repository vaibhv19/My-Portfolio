import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'AI-Powered Fitness Application',
      description: 'A distributed, multi-service fitness ecosystem with Keycloak OAuth2 login, event-driven tracking, and AI recommendations. Features centralized configuration, service discovery, RabbitMQ messaging, and a PostgreSQL/MongoDB backend.',
      tech: ['Spring Boot', 'Spring Cloud', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'React', 'Keycloak', 'Gemini API'],
      github: 'https://github.com/vaibhv19/AI-Powered-Fittness-application',
    },
    {
      title: 'Smart Research Assistant',
      description: 'An AI-powered browser extension and Spring Boot backend leveraging Google Gemini API. Instantly summarizes long articles, delivers contextual insights, and manages research notes within an elegant browser side panel.',
      tech: ['Spring Boot', 'Spring AI', 'Gemini API', 'Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/vaibhv19/Smart-Research-Assistant',
    },
    {
      title: 'Automated Litter Detection System',
      description: 'A prototype environmental safety system that detects waste and hazards from images using Google Gemini. Extracts GPS coordinates from EXIF metadata and dynamically plots registered alerts on a Leaflet map.',
      tech: ['Flask', 'Python', 'Gemini API', 'Leaflet.js', 'EXIF Metadata'],
      github: 'https://github.com/vaibhv19/Automated-Litter-detection-System',
    },
    {
      title: 'Audio to Text Transcriber',
      description: 'A full-stack speech-to-text platform that lets users upload audio files, processes them securely via a Spring Boot backend, and transcribes the content using OpenAI Whisper through Spring AI.',
      tech: ['Spring Boot', 'Spring AI', 'OpenAI Whisper', 'React', 'Vite', 'Java', 'REST APIs'],
      github: 'https://github.com/vaibhv19/Audio-to-Text-Transcriber',
    },
    {
      title: 'Stock Photo Generator',
      description: 'A generative AI dashboard featuring smart conversational chat, dynamic recipe creation, and stock photo image generation from text prompts using OpenAI API integration through Spring AI.',
      tech: ['Spring Boot', 'Spring AI', 'OpenAI API', 'React.js', 'Java', 'REST APIs'],
      github: 'https://github.com/vaibhv19/Stock-Photo-Generator',
    },
    {
      title: 'Auth Service',
      description: 'A high-performance security microservice offering user signup, login, password hashing with BCrypt, refresh tokens, and stateless request authorization via custom JWT filters in Spring Security.',
      tech: ['Spring Boot', 'Spring Security', 'JWT', 'Java', 'MySQL', 'Gradle'],
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
              <div className="flex flex-wrap gap-1.5 max-w-[80%]">
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
              <div className="flex gap-3 justify-end sm:ml-auto">
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
