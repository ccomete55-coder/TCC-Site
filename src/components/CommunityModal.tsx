import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/20 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-bg border border-primary/10 p-10 rounded-sm shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-primary/40 hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-6">
              <span className="text-[15px] uppercase tracking-[0.4em] text-accent font-medium">Join the Community</span>
              <h3 className="text-3xl font-serif text-primary tracking-tight">
                Opt into {title} updates
              </h3>
              <p className="text-primary/70 font-light leading-relaxed">
                Connect with our collective. Receive insights on human dynamics, 
                leadership, and mindful workspace advisory.
              </p>

              <form className="pt-4 space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <input 
                  type="email" 
                  placeholder="email@address.com" 
                  className="w-full bg-white border border-primary/10 px-6 py-4 text-sm text-primary focus:outline-none focus:border-accent transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-accent text-white py-4 text-[15px] uppercase tracking-[0.4em] font-bold hover:bg-primary transition-all"
                >
                  Join Collective
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

