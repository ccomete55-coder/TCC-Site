import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg">

      {/* Centered hero header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-4 text-center border-b border-primary/10"
      >
        <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">Connect With Us</span>
        <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-xl font-body text-primary/70 max-w-xl mx-auto leading-relaxed">
          We would love to hear from you. Fill out the form, send us an email, or book directly on our scheduler.
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
        {/* Left — contact info */}
        <div className="space-y-10">

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-sm border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[15px] uppercase tracking-widest text-accent font-bold mb-1">Email</p>
                <a href="mailto:hello@theconsciouscollective.ca" className="text-lg font-body text-primary hover:text-accent transition-colors">
                  hello@theconsciouscollective.ca
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-sm border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[15px] uppercase tracking-widest text-accent font-bold mb-1">Phone</p>
                <a href="tel:587-797-5303" className="text-lg font-body text-primary hover:text-accent transition-colors">
                  587-797-5303
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-sm border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[15px] uppercase tracking-widest text-accent font-bold mb-1">Mailing Address</p>
                <p className="text-lg font-body text-primary/70 leading-relaxed">
                  PO Box 25191, RPO Deer Park<br />Red Deer, AB, T4R 2M2
                </p>
              </div>
            </div>
          </div>

          {/* Schedule card */}
          <div className="p-10 bg-primary text-white">
            <p className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Book Immediately</p>
            <h4 className="text-2xl font-serif text-white mb-4">Prefer to schedule directly?</h4>
            <p className="text-base font-body text-white/70 leading-relaxed mb-8">
              Skip the inbox and book a complimentary consultation with Sheri MacLeod directly on Zoom.
            </p>
            <a
              href="https://scheduler.zoom.us/sheri-macleod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-white text-[15px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-primary transition-all rounded-sm"
            >
              Schedule Zoom Session <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right — contact form */}
        <div className="p-10 md:p-12 border border-primary/10 bg-[#F9F9F4]">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-accent rounded-sm flex items-center justify-center text-white mx-auto mb-6">
                <Send size={24} />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-3">Message Sent</h3>
              <p className="text-base font-body text-primary/70 leading-relaxed">
                Thank you for reaching out. We will respond within 48 hours to begin the conversation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-primary mb-2">Send Us a Message</h3>
                <p className="text-base font-body text-primary/50">We read every message and respond personally.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[15px] uppercase tracking-[0.2em] font-bold text-primary/50 block">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-accent outline-none text-primary font-body text-base transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] uppercase tracking-[0.2em] font-bold text-primary/50 block">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-accent outline-none text-primary font-body text-base transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[15px] uppercase tracking-[0.2em] font-bold text-primary/50 block">Reason for Contact</label>
                <select className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-accent outline-none text-primary font-body text-base transition-colors appearance-none cursor-pointer">
                  <option>Strategic HR Consulting</option>
                  <option>Individuals & Relationship Coaching</option>
                  <option>Workshops & Speaking</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[15px] uppercase tracking-[0.2em] font-bold text-primary/50 block">Message</label>
                <textarea rows={5} required className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-accent outline-none text-primary font-body text-base transition-colors resize-none"></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary text-white text-[15px] uppercase tracking-[0.3em] font-bold hover:bg-accent transition-all flex items-center justify-center gap-3 rounded-sm"
              >
                Send Message <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

