import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface PuzzleGridProps {
  src: string;
  rows?: number;
  cols?: number;
  title: string;
  description: string;
  className?: string;
  reverse?: boolean;
  ctaLink?: string;
}

export const PuzzleGrid: React.FC<PuzzleGridProps> = ({
  src,
  rows = 4,
  cols = 4,
  title,
  description,
  className,
  reverse = false,
  ctaLink,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smoothen the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate assembling progress (0 to 1) 
  // We want the puzzle to be fully assembled in the middle of the scroll
  const assemblyProgress = useTransform(smoothProgress, [0, 0.35, 1], [0, 1, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);

  const blocks = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      blocks.push({ r, c });
    }
  }

  return (
    <section 
      ref={containerRef} 
      className={cn("relative min-h-[80vh] flex items-center justify-center py-24 px-4 md:px-20", className)}
    >
      <motion.div 
        style={{ opacity, scale }}
        className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
      >
        <div className={cn("w-full flex-1 order-2", reverse ? "md:order-2" : "md:order-1")}>
          <motion.div 
            className="grid gap-1 relative aspect-square w-full max-w-[500px] mx-auto"
            style={{ 
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`
            }}
          >
            {blocks.map((block, i) => {
              // Seeded random for consistent scatter
              const seed = (block.r * cols + block.c) * 123.45;
              const randomX = (Math.sin(seed) * 500);
              const randomY = (Math.cos(seed) * 500);
              const randomRot = Math.sin(seed * 2) * 180;

              const x = useTransform(assemblyProgress, [0, 1], [randomX, 0]);
              const y = useTransform(assemblyProgress, [0, 1], [randomY, 0]);
              const rotate = useTransform(assemblyProgress, [0, 1], [randomRot, 0]);

              return (
                <motion.div
                  key={i}
                  className="relative w-full h-full bg-cover bg-no-repeat rounded-sm shadow-xl"
                  style={{
                    x,
                    y,
                    rotate,
                    backgroundImage: `url(${src})`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${(block.c / (cols - 1)) * 100}% ${(block.r / (rows - 1)) * 100}%`,
                  }}
                />
              );
            })}
          </motion.div>
        </div>

        <div className={cn("w-full flex-1 flex flex-col justify-center", reverse ? "md:order-1" : "md:order-2")}>
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif mb-8 text-primary tracking-tight leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-primary/70 mb-10 max-w-sm font-body leading-relaxed"
          >
            {description}
          </motion.p>
          {ctaLink && (
            <Link to={ctaLink}>
              <motion.button
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-fit px-10 py-4 bg-accent text-white text-[15px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center group transition-all hover:bg-primary hover:text-white"
              >
                View Details
              </motion.button>
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

