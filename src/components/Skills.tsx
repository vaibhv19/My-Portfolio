import { motion } from 'motion/react';
import { SkillGroup } from '../types';

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      items: ['Java', 'Python'],
    },
    {
      category: 'Backend & Systems',
      items: ['Gradle','Maven','JWT','Spring Boot', 'REST APIs', 'Microservices Architecture'],
    },
    {
      category: 'Frontend',
      items: ['React', 'React Native', 'Tailwind CSS'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'MongoDB'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Apache Kafka', 'VPS'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Linux'],
    },
    {
      category: 'Core Computer Science',
      items: [
        'DSA',
        'OS',
        'DBMS',
        'CN',
        'OOP',
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-card border border-brand-border rounded-brand p-6"
    >
      <div className="grid grid-cols-1 gap-6">
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
