import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TwoExcelBadge } from './TwoExcelBadge';
import tccLogo from '../assets/images/tcc-logo-sm.png';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-primary/10 bg-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20">
        {/* LOGO & SOCIALS */}
        <div className="space-y-8">
          <div>
            <Link to="/">
              <img src={tccLogo} alt="The Conscious Collective" className="h-20 w-auto" />
            </Link>
            <span className="text-sm text-primary/70 mt-3 block font-body">The Conscious Collective Inc.</span>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/heysherirae" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-accent transition-colors"><Instagram size={28} /></a>
            <a href="https://www.tiktok.com/@heysherirae" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sheri-macleod-2b188643/" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-accent transition-colors"><Linkedin size={28} /></a>
          </div>
        </div>

        {/* SERVICES */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-[0.3em] text-accent font-bold">Services</h4>
          <ul className="space-y-4">
            {[
              { name: 'HR Advisory', path: '/organizations' },
              { name: 'Leadership', path: '/individuals' },
              { name: 'People Strategy', path: '/organizations' },
              { name: 'Personal Coaching', path: '/individuals' },
              { name: 'Speaking & Facilitation', path: '/facilitation' },
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-primary/80 hover:text-accent transition-colors text-base font-body">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EXPLORE MORE */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-[0.3em] text-accent font-bold">Explore More</h4>
          <ul className="space-y-4">
            {[
              { name: 'Organizations', path: '/organizations' },
              { name: 'Individuals', path: '/individuals' },
              { name: 'Speaking', path: '/facilitation' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' }
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-primary/80 hover:text-accent transition-colors text-base font-body">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-[0.3em] text-accent font-bold">Contact</h4>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <div className="text-sm uppercase tracking-wider font-bold text-primary/70 underline mb-1">Mailing Address</div>
              <p className="text-base font-body text-primary/80 leading-relaxed">
                PO Box 25191, RPO Deer Park,<br/>
                Red Deer, AB, T4R 2M2
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary group">
                <Phone size={18} className="text-accent" />
                <a href="tel:587-797-5303" className="text-base font-body text-primary/80 hover:text-accent transition-all">587-797-5303</a>
              </div>
              <div className="flex items-center gap-3 text-primary group">
                <Mail size={18} className="text-accent" />
                <a href="mailto:hello@theconsciouscollective.ca" className="text-base font-body text-primary/80 hover:text-accent transition-all">hello@theconsciouscollective.ca</a>
              </div>
              <div className="pt-4 mt-2 border-t border-primary/10">
                <a href="https://www.2xcel.net" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-all duration-300" aria-label="2XceL Digital Media Website">
                  <TwoExcelBadge width={180} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-12 border-t border-primary/10 opacity-60">
        <p className="text-sm uppercase tracking-[0.2em] font-body">theconsciouscollective.ca</p>
        <p className="text-sm uppercase tracking-[0.2em] mt-4 md:mt-0 font-body">© 2026 The Conscious Collective Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
