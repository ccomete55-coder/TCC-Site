import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PuzzleGrid } from '../components/PuzzleGrid';
import tccImage2 from '../assets/images/tcc-image2.webp';
import { Footer } from '../components/Footer';
import { CommunityModal } from '../components/CommunityModal';
import { ArrowRight, Heart, Sparkles, User, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export const Individuals: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      title: "Conscious Coupling™",
      tagline: "Break old patterns. Build conscious connections.",
      shortDesc: "A relationship coaching and personal growth program for singles ready to navigate dating with greater clarity and intention.",
      longDesc: "A transformative journey designed for singles seeking to shift counterproductive relationship habits and develop profound, authentic dating and communication strategies.",
      icon: <Heart className="text-accent" size={24} />,
      size: "wide",
      color: "mauve" as const,
    },
    {
      title: "Conscious Commitment™",
      tagline: "Marriage preparation for the modern couple.",
      shortDesc: "A premarital coaching experience designed to help couples strengthen communication and build a strong foundation for partnership.",
      longDesc: "Expert guidance for modern couples navigating the complexities of lifetime partnership, alignment of values, and constructive communication systems.",
      icon: <Sparkles className="text-accent" size={24} />,
      size: "standard",
      color: "cream" as const,
    },
    {
      title: "Coaching for High Performers",
      tagline: "Bridging the gap between success and fulfillment.",
      shortDesc: "Relationship and life coaching for professionals, entrepreneurs, and leaders seeking deeper self-awareness and emotional intelligence.",
      longDesc: "A premium advisory space specifically architected for creators, founders, and leaders looking to harmonize massive driving ambition with rich personal intimacy.",
      icon: <User className="text-accent" size={24} />,
      size: "wide",
      color: "green" as const,
    },
    {
      title: "Contact Us",
      tagline: "Begin your customized coaching experience.",
      shortDesc: "Ready to start your coaching or connection journey? Book a direct session with Sheri to find the perfect fit.",
      longDesc: "Book a complimentary consultation call directly on our scheduler to design a customized coaching pathway for your needs.",
      icon: <MessageCircle className="text-accent" size={24} />,
      size: "standard",
      color: "charcoal" as const,
    }
  ];

  const colorStyles = {
    green: 'bg-primary text-white border border-primary/5',
    cream: 'bg-[#F9F9F4] text-primary border border-primary/5',
    charcoal: 'bg-[#2D2D2D] text-white border border-[#2D2D2D]/5',
    mauve: 'bg-mauve text-white border border-mauve/5',
  };

  const sizeStyles = {
    standard: 'col-span-1 row-span-1 min-h-[380px] md:min-h-auto',
    wide: 'col-span-1 md:col-span-2 row-span-1 min-h-[380px] md:min-h-auto',
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="pt-24">
        <PuzzleGrid 
          src={tccImage2}
          title="Relationship Coaching & Conscious Connection"
          description="The Conscious Collective offers personal growth programs and relationship coaching designed to help individuals and couples build healthier foundations, strengthen emotional intelligence, and create deeper connection."
          rows={4}
          cols={4}
          reverse
          className="pb-0"
        />

        <section className="max-w-7xl mx-auto px-4 md:px-20 pt-12 pb-24">
          <div className="mb-16 text-center">
            <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">Personal Growth Pathways</span>
            <h2 className="text-5xl md:text-6xl font-serif text-primary mb-4">Conscious Coaching Programs</h2>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[380px]">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                whileHover="hover"
                initial="initial"
                onClick={() => window.open('https://scheduler.zoom.us/sheri-macleod', '_blank')}
                className={cn(
                  "relative group overflow-hidden rounded-sm p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer",
                  colorStyles[program.color],
                  sizeStyles[program.size]
                )}
                variants={{
                  hover: { y: -6 }
                }}
              >
                <div className="z-10">
                  <h3 className={cn("text-xl md:text-3xl font-serif mb-3 leading-tight", program.color === 'cream' ? 'text-primary' : 'text-white')}>
                    {program.title}
                  </h3>
                  <p className={cn("text-[15px] uppercase tracking-widest font-bold mb-4", program.color === 'cream' ? 'text-accent' : 'text-accent-foreground/80 text-[#d4caaa]')}>
                    {program.tagline}
                  </p>
                  <p className={cn("text-sm font-light leading-relaxed opacity-90", program.color === 'cream' ? 'text-primary/70' : 'text-white/70')}>
                    {program.shortDesc}
                  </p>
                </div>

                <div className="z-10 mt-auto">
                  <div className="flex items-center gap-2 text-[15px] uppercase tracking-[0.3em] font-bold">
                    <span>Explore Program</span>
                    <motion.div
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 8 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <ArrowRight size={14} />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Slide-up Overlay */}
                <motion.div
                  variants={{
                    initial: { y: '100%' },
                    hover: { y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className={cn(
                    "absolute inset-0 p-8 flex flex-col justify-center gap-6 z-20",
                    program.color === 'cream' ? 'bg-[#F2F2EB]' : 
                    (program.color === 'green' ? 'bg-[#152a1a]' : 
                    (program.color === 'mauve' ? 'bg-[#6b5a5a]' : 'bg-[#1a1a1a]'))
                  )}
                >
                  <p className={cn("text-lg md:text-xl font-body leading-relaxed", program.color === 'cream' ? 'text-primary/90' : 'text-white/90')}>
                    {program.longDesc}
                  </p>
                  <div className="flex items-center gap-2 text-[15px] uppercase tracking-[0.3em] font-bold">
                    Contact Us <motion.div variants={{ hover: { x: 5 } }}><ArrowRight size={14} /></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <CommunityModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ isOpen: false, title: '' })} 
        title={modalState.title} 
      />

      <Footer />
    </div>
  );
};

