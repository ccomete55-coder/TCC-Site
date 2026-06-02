import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PuzzleGrid } from '../components/PuzzleGrid';
import tccImage1 from '../assets/images/tcc-image1.webp';
import { ServicesBento } from '../components/ServicesBento';
import { Footer } from '../components/Footer';

export const Organizations: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <div className="pt-24">
        <PuzzleGrid 
          src={tccImage1}
          title="Strategic HR Consulting & Workplace Culture Advisory"
          description="The Conscious Collective provides strategic HR consulting, fractional HR services, and workplace advisory support for small and medium-sized businesses seeking flexible, senior-level HR expertise without the cost of a full-time internal HR team."
          rows={3}
          cols={3}
          className="pb-0"
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-20 pt-16 pb-24">

          {/* Centered heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">How We Work</span>
            <h2 className="text-5xl md:text-6xl font-serif text-primary mb-4">Our Approach</h2>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </motion.div>

          {/* Balanced two-column body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24"
          >
            <p className="text-xl font-body text-primary/70 leading-relaxed">
              We partner with business owners and leadership teams to strengthen workplace culture, leadership, communication, employee engagement, and team performance through practical HR solutions grounded in human behaviour, team dynamics, and organizational development.
            </p>
            <p className="text-xl font-body text-primary/70 leading-relaxed border-l-2 border-accent pl-8">
              Our services help organizations navigate workplace challenges, reduce conflict, improve retention and employee experience, develop stronger leaders, and build healthier, more connected, high-performing workplace cultures.
            </p>
          </motion.div>

          <ServicesBento />
        </div>
      </div>
      <Footer />
    </div>
  );
};
