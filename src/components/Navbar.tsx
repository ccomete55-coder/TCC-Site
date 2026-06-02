import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import tccLogo from '../assets/images/tcc-logo.png';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.2 }
      );

      const sections = ['organizations', 'individuals', 'facilitation', 'about', 'contact'];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [location.pathname]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 bg-gradient-to-b from-bg/95 via-bg/80 to-transparent backdrop-blur-[4px]"
    >
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src={tccLogo} alt="The Conscious Collective" className="h-20 w-auto" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.2em] uppercase text-primary/70">
        {[
          { name: 'Organizations', path: '/organizations' },
          { name: 'Individuals', path: '/individuals' },
          { name: 'Speaking', path: '/facilitation' },
          { name: 'About', path: '/about' },
          { name: 'Blog', path: '/blog' },
          { name: 'Contact', path: '/contact' }
        ].map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className="relative hover:text-accent transition-colors font-bold py-3"
          >
            {item.name}
            {location.pathname === item.path && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
