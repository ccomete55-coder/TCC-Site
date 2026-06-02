import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { CheckCircle2 } from 'lucide-react';

export const Facilitation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = [
    "Team Dynamics & Collaboration",
    "Leadership Development",
    "Psychological Safety in the Workplace",
    "Communication & Conflict Resolution",
    "Emotional Intelligence & Self-Awareness",
    "Workplace Culture & Employee Engagement",
    "Trust, Accountability & Team Performance"
  ];

  return (
    <div className="min-h-screen bg-bg">

      {/* Centered hero header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-4 text-center border-b border-primary/10"
      >
        <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">Workshops & Speaking</span>
        <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight mb-6">
          Workshops and Speaking
        </h1>
        <p className="text-xl font-body text-primary/70 max-w-2xl mx-auto leading-relaxed">
          Interactive workshops designed to strengthen leadership, communication, team dynamics, psychological safety, and workplace culture.
        </p>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-8" />
      </motion.div>

      {/* Balanced two-column body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-7xl mx-auto px-4 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-start"
      >
        {/* Left */}
        <div className="space-y-8">
          <p className="text-xl md:text-2xl font-body text-primary/70 leading-relaxed">
            Leveraging practical tools and frameworks such as The Working Genius&reg; and Myers-Briggs Type Indicator&reg; (MBTI), our workshops help individuals and teams better understand how they communicate, collaborate, lead, and contribute most effectively.
          </p>
          <p className="text-lg font-body text-primary/70 leading-relaxed">
            Our facilitation style is engaging, conversational, and action-oriented, combining education, reflection, discussion, and practical application.
          </p>
          <p className="text-lg font-body text-primary/70 leading-relaxed">
            Human-centred. Strategy-led. Tech-enabled. Every session is customized to meet your team where they are and move them toward where they want to be.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-10">
          <div className="p-10 border border-primary/10 bg-[#F9F9F4]">
            <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-8">Speaking & Workshop Topics</h3>
            <ul className="space-y-5">
              {topics.map((topic, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 text-primary/80"
                >
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  <span className="text-base font-body">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-primary text-white">
            <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Book a Workshop</h3>
            <p className="text-base font-body text-white/70 leading-relaxed mb-8">
              Let's design a facilitation experience tailored to your team's goals and culture.
            </p>
            <a
              href="https://scheduler.zoom.us/sheri-macleod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-8 py-4 bg-accent text-white text-[15px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-primary transition-all rounded-sm"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};
