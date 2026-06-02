import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(circle at center, rgba(153, 140, 93, 0.12) 0%, transparent 70%)',
          opacity: bgOpacity
        }}
      />
      
      <div className="flex flex-col items-center z-10 w-full px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="text-center"
        >
          <motion.h1
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="text-5xl md:text-7xl font-serif leading-[1.15] text-primary tracking-tight"
          >
            Where personal transformation<br/>
            <span>and professional expansion meet.</span>
          </motion.h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-6 text-primary/60"
        >
          <p className="text-lg md:text-xl max-w-sm text-center font-body leading-relaxed font-semibold text-primary/80">
            Every fragment tells a story. Watch as the narrative connects through your journey, piece by piece.
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="mt-8 opacity-30"
          >
            <div className="w-6 h-6 border border-primary/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating background fragments */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Fragment key={i} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
};

interface FragmentProps {
  index: number;
  scrollYProgress: any;
}

const Fragment: React.FC<FragmentProps> = ({ index, scrollYProgress }) => {
  const seed = index * 456.78;
  const initialX = (Math.sin(seed) * 50) + 50; 
  const initialY = (Math.cos(seed) * 50) + 50; 
  
  // Randomizing trajectories and behaviors based on seed
  const moveX = useTransform(scrollYProgress, [0, 0.4, 1], [0, (Math.sin(seed) * 300), (Math.sin(seed) * 500)]);
  const moveY = useTransform(scrollYProgress, [0, 0.6, 1], [0, (Math.cos(seed) * 300), (Math.cos(seed) * 500)]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, (Math.sin(seed * 2) * 360)]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0.15, 0.2, 0]);

  // Occasional accent color for some fragments
  const isAccent = (index % 5 === 0);

  return (
    <motion.div
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        x: moveX,
        y: moveY,
        rotate,
        scale,
        opacity,
        borderColor: isAccent ? 'rgba(153, 140, 93, 0.3)' : 'rgba(31, 61, 38, 0.1)',
        backgroundColor: isAccent ? 'rgba(153, 140, 93, 0.05)' : 'rgba(255, 255, 255, 0.8)',
      }}
      className="absolute w-4 h-4 md:w-16 md:h-16 border backdrop-blur-[1px] rounded-sm"
    />
  );
};
