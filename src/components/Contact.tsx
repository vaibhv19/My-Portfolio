import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Code2, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { 
      name: 'Gmail',
      icon: <Mail size={24} />, 
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gvaibhav.business@gmail.com'
    },
   
    { 
      name: 'LinkedIn',
      icon: <Linkedin size={24} />, 
      href: 'https://www.linkedin.com/in/vaibhv19'
    },
    { 
      name: 'GitHub',
      icon: <Github size={24} />, 
      href: 'https://github.com/vaibhv19'
    },
     { 
      name: 'WhatsApp',
      icon: <MessageSquare size={24} />, 
      href: 'https://wa.me/919208012172'
    },
    { 
      name: 'Phone',
      icon: <Phone size={24} />, 
      href: 'tel:+919208012172'
    },
    { 
      name: 'LeetCode',
      icon: <Code2 size={24} />, 
      href: 'https://leetcode.com/u/vaibhv_19/'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-brand-card border border-brand-border rounded-brand p-8"
    >
      <div className="flex items-center justify-center gap-8">
        {contactInfo.map((info) => (
          <a 
            key={info.name} 
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            title={info.name}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-brand-border text-brand-text-s hover:text-brand-accent hover:border-brand-accent hover:bg-brand-accent/5 transition-all group scale-110"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {info.icon}
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
