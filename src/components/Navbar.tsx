import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import tccLogo from '../assets/images/tcc-logo-sm.png';

const NAV_ITEMS = [
  { name: 'Organizations', path: '/organizations' },
  { name: 'Individuals', path: '/individuals' },
  { name: 'Speaking', path: '/facilitation' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 bg-gradient-to-b from-bg/95 via-bg/80 to-transparent backdrop-blur-[4px]"
    >
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src={tccLogo} alt="The Conscious Collective" className="h-16 md:h-20 w-auto" />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.2em] uppercase text-primary/70">
        {NAV_ITEMS.map((item) => (
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
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className="md:hidden text-primary p-2 -mr-2 relative z-50"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-serif tracking-wide transition-colors ${
                    location.pathname === item.path ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
