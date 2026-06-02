﻿import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '../components/Footer';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  contactLink?: boolean;
}

const faqData: FAQItem[] = [
  {
    question: "How do we get started working with you?",
    answer: "The best starting point is a conversation. Simply visit our Contact page or directly schedule a complimentary consultation on our Scheduler. This initial call helps us understand your unique story, identify your desired results, and design a path forward.",
    contactLink: true
  },
  {
    question: "What is the core philosophy of The Conscious Collective?",
    answer: "We operate on the premise that personal evolution is the foundation of collective impact. Whether working with corporate teams or individual leaders, we integrate deep self-awareness, clear communication systems, and strategic clarity to align internal values with outer performance."
  },
  {
    question: "What services do you offer for organizations of different sizes?",
    answer: "We offer Fractional HR services, strategic HR consulting, values-aligned programs, custom facilitation and executive and workplace advisory services. We design customized structures for small-to-mid-sized businesses seeking to cultivate dynamic, high-performing cultures and psychologically safe corporate ecosystems."
  },
  {
    question: "What is Conscious Coaching, and who typically participates?",
    answer: "Our relationship coaching programs, including Conscious Coupling™ and Coaching for High Performers, are created for singles, couples, leaders, and entrepreneurs. Our goal is to shift old patterns, improve self-awareness, and help clients improve the quality of their professional and personal relationships."
  },
  {
    question: "How do your organizational services and individual coaching pathways intersect?",
    answer: "Any organization or collective is only as strong as its constituent members. Personal transformation directly enhances leadership efficacy, and professional clarity directly fosters systemic trust. By working in both spheres, we ensure a harmonious, elevated growth feedback loop."
  },
  {
    question: "Are your programs completely customized, or do you have structured curricula?",
    answer: "A bit of both. We offer both signature offerings and tailored facilitation experiences. Some clients choose from our thoughtfully designed workshops and programs, while others partner with us to create something fully customized around their people, goals, or current challenges. Most of our work lives somewhere in the middle, grounded in a proven framework, with plenty of room to shape the experience around the humans in the room."
  }
];

export const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-bg">
      <main className="pb-24">

        {/* Centered hero header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-40 pb-20 px-4 text-center border-b border-primary/10"
        >
          <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">About — The Collective</span>
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            Human connection is the ultimate strategy.
          </h1>
          <p className="text-[15px] uppercase tracking-[0.3em] text-accent font-bold mb-10">
            Human-centred. Strategy-led. Tech-enabled.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://scheduler.zoom.us/sheri-macleod"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-white hover:bg-primary transition-all text-[15px] uppercase tracking-widest font-bold rounded-sm inline-flex items-center gap-2"
            >
              Schedule Zoom Session <ArrowRight size={12} />
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all text-[15px] uppercase tracking-widest font-bold rounded-sm inline-flex items-center"
            >
              Contact Form
            </Link>
          </div>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Balanced two-column body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-7xl mx-auto px-4 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-start"
        >
          {/* Left — description */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-body text-primary/70 leading-relaxed">
              We offer Fractional HR services, strategic HR consulting, values-aligned programs, custom facilitation and executive and workplace advisory services.
            </p>
            <p className="text-xl md:text-2xl font-body text-primary/70 leading-relaxed">
              At The Conscious Collective, we know that thriving workplaces are built by thriving people. Leadership, culture, communication, and performance all begin with how individuals think, relate, and show up — both personally and professionally.
            </p>
            <p className="text-xl md:text-2xl font-body text-primary/70 leading-relaxed">
              That's why our methodology integrates individual transformation with organizational strategy. By supporting both, we help create healthier leaders, stronger teams, and more conscious workplaces designed for long-term growth.
            </p>
          </div>

          {/* Right — Vision & Values as cards */}
          <div className="space-y-6">
            <div className="p-8 border border-primary/10 bg-[#F9F9F4]">
              <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-4">The Vision</h3>
              <p className="text-lg font-body text-primary/70 leading-relaxed">
                To unlock the potential of individuals, teams, and workplaces by bringing together conscious leadership, meaningful human connection, and forward-thinking technology.
              </p>
            </div>
            <div className="p-8 bg-primary text-white">
              <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-6">Our Values</h3>
              <div className="flex flex-col gap-3">
                {['Consciousness', 'Connection', 'Curiosity', 'Integrity', 'Tech-Forward'].map((v) => (
                  <div key={v} className="border border-white/10 px-6 py-3 text-white font-serif text-base uppercase tracking-widest text-center w-full">
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="faq-section"
          className="max-w-7xl mx-auto px-4 md:px-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-primary/10 pt-16"
        >
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-accent text-[15px] uppercase tracking-[0.4em] block font-semibold">Inquiries</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-body text-primary/70 leading-relaxed max-w-sm">
              Unveiling our methodology, service structures, and guiding principles to align intentional growth with strategic execution.
            </p>
          </div>

          {/* Right Column: Custom Accordion */}
          <div className="lg:col-span-8 divide-y divide-primary/10">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => toggleIndex(index)}
                    className="w-full flex justify-between items-center text-left py-2 hover:text-accent transition-colors duration-300 focus:outline-none group"
                  >
                    <span className="text-lg md:text-xl font-serif text-primary group-hover:text-accent transition-colors duration-300">
                      {item.question}
                    </span>
                    <span className="text-accent ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        {item.contactLink ? (
                          <p className="pt-4 pb-2 text-base md:text-lg font-body text-primary/70 leading-relaxed max-w-3xl">
                            The best starting point is a conversation. Simply visit our{' '}
                            <Link to="/contact" className="underline text-accent hover:text-primary transition-colors">Contact page</Link>
                            {' '}or directly schedule a complimentary consultation on our{' '}
                            <a href="https://scheduler.zoom.us/sheri-macleod" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-primary transition-colors">Scheduler</a>
                            . This initial call helps us understand your unique story, identify your desired results, and design a path forward.
                          </p>
                        ) : (
                          <p className="pt-4 pb-2 text-base md:text-lg font-body text-primary/70 leading-relaxed max-w-3xl">
                            {item.answer}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

