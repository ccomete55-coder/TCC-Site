﻿import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import sheriPortrait from '../assets/images/sheri-headshot.webp';
import tccImage1 from '../assets/images/tcc-image1.webp';
import tccImage2 from '../assets/images/tcc-image2.webp';
import tccImage3 from '../assets/images/tcc-image3.webp';
import { PuzzleGrid } from '../components/PuzzleGrid';
import { Footer } from '../components/Footer';
import { CommunityModal } from '../components/CommunityModal';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: '',
  });

  return (
    <>
      <Hero />

      <div className="relative z-10 flex flex-col gap-0 bg-bg">
        <div id="organizations" className="group">
          <PuzzleGrid 
            src={tccImage1}
            title="Strategic HR Consulting & Workplace Culture Advisory"
            description="The Conscious Collective provides strategic HR consulting, fractional HR services, and workplace advisory support for small and medium-sized businesses seeking flexible, senior-level HR expertise without the cost of a full-time internal HR team."
            rows={3}
            cols={3}
            ctaLink="/organizations"
          />
        </div>

        <div id="individuals">
          <PuzzleGrid 
            src={tccImage2}
            title="Relationship Coaching, Personal Growth & Conscious Connection"
            description="The Conscious Collective offers relationship coaching, personal growth programs, workshops, and digital resources designed to help individuals and couples build healthier relationships, improve communication, strengthen emotional intelligence, and create deeper connection in life and love."
            rows={4}
            cols={4}
            reverse
            ctaLink="/individuals"
          />
        </div>

        <div id="facilitation">
          <PuzzleGrid 
            src={tccImage3}
            title="Workshops and Facilitation"
            description="The Conscious Collective delivers interactive workshops and facilitation experiences designed to strengthen leadership, communication, team dynamics, psychological safety, self-awareness, and workplace culture."
            rows={5}
            cols={5}
            ctaLink="/facilitation"
          />
        </div>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group"
            >
              <img 
                src={sheriPortrait} 
                alt="Sheri, Founder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-left"
            >
              <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">The Founder — Sheri MacLeod</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight leading-tight">
                Authenticity <br />
                as Strategy.
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-body font-normal">
                Sheri MacLeod is the founder of The Conscious Collective and a passionate advocate for building better workplaces, stronger relationships, and more connected lives. With nearly 20 years of experience across Human Resources, coaching, and leadership development, Sheri brings a blend of strategy, compassion, and innovation to every client partnership.
              </p>
              <p className="text-lg text-white/70 mb-12 leading-relaxed font-body border-l border-accent pl-8 py-2">
                Her work is rooted in the belief that when people feel supported, seen, and empowered, both individuals and organizations perform at their best. Through The Conscious Collective, Sheri helps bridge the human and practical sides of growth, combining insight, systems, and technology with a deeply people-first approach.
              </p>
              
              <motion.button
                 id="contact-button"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => window.open('https://scheduler.zoom.us/sheri-macleod', '_blank')}
                 className="px-12 py-5 bg-accent text-white font-bold uppercase tracking-[0.2em] text-[15px] hover:bg-white hover:text-primary transition-all border border-accent/20 rounded-sm"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>

      <div id="contact">
        <Footer />
      </div>
      
      <CommunityModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        title={modalState.title} 
      />
    </>
  );
};

