import { motion } from 'motion/react';
import { SkillGroup } from '../types';

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Backend & Systems',
      items: ['Spring Boot', 'Spring Security (OAuth2/JWT)', 'Spring Cloud', 'Java 21', 'Flask', 'Python'],
    },
    {
      category: 'AI & Integrations',
      items: ['Spring AI', 'Google Gemini API', 'OpenAI Whisper', 'RabbitMQ', 'RESTful APIs'],
    },
    {
      category: 'Frontend & Mobile',
      items: ['React', 'React Native', 'Chrome Extensions', 'Tailwind CSS'],
    },
    {
      category: 'Databases & Cloud',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'AWS', 'Git & GitHub'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-card border border-brand-border rounded-brand p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="text-[11px] font-bold text-brand-text-p uppercase tracking-wider mb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5 focus:outline-none">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 text-[10px] font-medium border border-brand-border rounded-md bg-white/5 text-brand-text-s hover:text-brand-accent hover:border-brand-accent transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
