import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import { services, Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  const { title, shortDesc, longDesc, size = 'standard', color, id } = service;

  const colorStyles = {
    green: 'bg-primary text-white',
    cream: 'bg-[#F9F9F4] text-primary border border-primary/5',
    charcoal: 'bg-[#2D2D2D] text-white',
    mauve: 'bg-mauve text-white',
  };

  const sizeStyles = {
    standard: 'col-span-1 row-span-1 aspect-square md:aspect-auto',
    tall: 'col-span-1 row-span-1 md:row-span-2 min-h-[400px] md:min-h-auto',
    wide: 'col-span-1 md:col-span-2 row-span-1 min-h-[250px] md:min-h-auto',
  };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      onClick={() => navigate(`/services/${id}`)}
      className={cn(
        "relative group overflow-hidden rounded-sm p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer",
        colorStyles[color],
        sizeStyles[size]
      )}
      variants={{
        hover: { y: -6 }
      }}
    >
      <div className="z-10">
        <h3 className={cn("text-xl md:text-3xl font-serif mb-3 leading-tight", color === 'cream' ? 'text-primary' : 'text-white')}>
          {title}
        </h3>
        <p className={cn("text-sm md:text-base font-light leading-relaxed opacity-90", color === 'cream' ? 'text-primary/80' : 'text-white/80')}>
          {shortDesc}
        </p>
      </div>

      <div className="z-10 mt-auto">
        <div
          className="flex items-center gap-2 text-[15px] uppercase tracking-[0.3em] font-bold"
        >
          <span>Explore</span>
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

      {/* Overlay Description */}
      <motion.div
        variants={{
          initial: { y: '100%' },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className={cn(
          "absolute inset-0 p-8 flex flex-col justify-center gap-6 z-20",
          color === 'cream' ? 'bg-[#F2F2EB]' : (color === 'green' ? 'bg-[#152a1a]' : (color === 'mauve' ? 'bg-[#6b5a5a]' : 'bg-[#1a1a1a]'))
        )}
      >
        <p className={cn("text-lg md:text-xl font-body leading-relaxed", color === 'cream' ? 'text-primary' : 'text-white')}>
          {longDesc}
        </p>
        <div className="flex items-center gap-2 text-[15px] uppercase tracking-[0.3em] font-bold">
           View Details <motion.div variants={{ hover: { x: 5 } }}><ArrowRight size={14} /></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ServicesBento: React.FC = () => {
  return (
    <section className="pt-0 pb-24 px-4 md:px-20 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">Strategic Support</span>
        <h2 className="text-4xl md:text-5xl font-serif text-primary">Full Support Services</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[300px]">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

