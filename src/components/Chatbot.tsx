import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const WEBSITE_CONTEXT = `
You are a virtual assistant for Vaibhav Gupta's portfolio website. 
Your goal is to answer questions about Vaibhav's projects, skills, education, and contact information.

Vaibhav's Profile:
- Name: Vaibhav Gupta
- Role: Software Developer
- Education: Final year B.Tech in Computer Science and Engineering (Expected 2026), GPA: 7.8/10.
- Core Strengths: Full-stack development, Java (Spring Boot), and Artificial Intelligence.

Technical Skills:
- Languages: Java, Python
- Backend: Spring Boot, REST APIs, Microservices, JWT, Gradle, Maven
- Frontend: React, React Native, Tailwind CSS, Framer Motion
- Databases: MySQL, MongoDB
- Cloud/DevOps: AWS, Docker, Apache Kafka, VPS
- Tools: Git, GitHub, Linux
- Computer Science: DSA, OS, DBMS, Computer Networks, OOPS

Featured Projects:
1. AI Powered Fitness Application: Personalized workout plans using AI. Tech: Spring Boot, React, Java, AI Integration.
2. Smart Research Assistant: AI-driven tool for summarizing technical papers. Tech: Spring Boot, REST APIs, Microservices.
3. AI Content Generator Platform: Generative model platform with high-concurrency pipelines. Tech: Spring Boot, React, OpenAI API.
4. Expense Tracker App: Finance management with secure transaction processing. Tech: Spring Boot, AWS, Apache Kafka, React Native.
5. Auth Service: Standalone microservice for secures distributed systems using Spring Security and JWT.

Achievements:
- Semi-Finalist in Yukti NIR Startup Challenge Hackathon 2025.
- Solved 75+ problems on LeetCode.

Contact Information:
- Email: gvaibhav.business@gmail.com
- Phone/WhatsApp: +91 9208012172
- GitHub: https://github.com/vaibhv19
- LinkedIn: vaibhv19

Guidelines:
- Be professional, helpful, and concise.
- If the question is not about Vaibhav or the website, kindly redirect them to ask about his work.
- Use a friendly tone.
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I am Vaibhav’s virtual assistant. Ask me anything about his projects, skills, or experience!' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show tooltip after 2 seconds if not already open
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    setShowTooltip(false); // Hide tooltip on interaction

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const isPlaceholder = !apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey === 'undefined' || apiKey === 'null';
      
      if (isPlaceholder) {
        throw new Error('API Key missing');
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: currentInput,
        config: {
          systemInstruction: WEBSITE_CONTEXT,
        },
      });

      const botMessage = { role: 'bot', content: response.text || "I'm sorry, I couldn't process that. Could you try again?" };
      setMessages(prev => [...prev, botMessage]);
    } catch (error: any) {
      console.error("Chatbot Error:", error);
      let errorMessage = "Sorry, I'm having trouble connecting to my brain right now. Please try again later!";
      
      if (error?.message?.includes('API Key missing')) {
        errorMessage = "I need a Gemini API Key to work! Please add your API key in the 'Settings > Secrets' menu of AI Studio.";
      }
      
      setMessages(prev => [...prev, { role: 'bot', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="mb-3 px-4 py-2 bg-brand-card border border-brand-accent rounded-xl shadow-xl text-[12px] text-brand-text-p font-medium flex items-center gap-2 whitespace-nowrap"
          >
            <Bot size={14} className="text-brand-accent animate-bounce" />
            <span>Explore my profile through the assistant.</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="ml-2 hover:text-brand-accent transition-colors"
            >
              <X size={12} />
            </button>
            {/* Pointer arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-brand-card border-r border-b border-brand-accent rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] bg-brand-card border border-brand-accent rounded-brand shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-3 border-b border-brand-border flex items-center justify-between bg-brand-bg/50">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-wider">Vaibhav's Assistant</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-text-s hover:text-brand-text-p transition-colors"
                aria-label="Close Chat"
              >
                <X size={14} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-brand-bg/30 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`max-w-[85%] p-3 rounded-2xl text-[12px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'ml-auto bg-brand-accent text-white shadow-lg'
                      : 'bg-white/5 border border-brand-border text-brand-text-s shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-white/5 border border-brand-border text-brand-text-s p-3 rounded-2xl w-fit flex items-center gap-2">
                  <Loader2 size={12} className="animate-spin text-brand-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-50">Thinking...</span>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-brand-border bg-brand-bg/50">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isLoading}
                  className="w-full bg-brand-bg border border-brand-border p-3 pr-10 rounded-xl text-[12px] text-brand-text-p focus:outline-none focus:border-brand-accent transition-all disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-accent disabled:text-brand-text-s transition-colors p-1"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-2xl hover:shadow-brand-accent/20 transition-all z-50 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
