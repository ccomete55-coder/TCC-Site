import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { Footer } from '../components/Footer';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-serif mb-4">Service not found</h1>
        <button 
          onClick={() => navigate('/')}
          className="text-accent underline uppercase tracking-widest text-xs"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <main className="pb-24">

        {/* Centered hero header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-40 pb-20 px-4 text-center border-b border-primary/10"
        >
          <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">
            Organization Service
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-xl font-body text-primary/70 max-w-2xl mx-auto leading-relaxed">
            {service.shortDesc}
          </p>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-8" />
        </motion.div>

        {/* Balanced two-column body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-7xl mx-auto px-4 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-start"
        >
          {/* Left — main content */}
          <div className="space-y-10">
            <p className="text-xl md:text-2xl font-body text-primary/70 leading-relaxed">
              {service.content || service.longDesc}
            </p>
            <p className="text-lg font-body text-primary/70 leading-relaxed">
              In the modern workplace, the pieces of the puzzle are constantly shifting. We don't just provide solutions — we architect systems that allow for growth, evolution, and conscious connection.
            </p>
            <p className="text-lg font-body text-primary/70 leading-relaxed">
              Our approach is rooted in human behaviour and organizational health. We understand that behind every strategy is a person, and behind every person is a narrative that matters.
            </p>
            <motion.button
              whileHover={{ x: -6 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-primary hover:text-accent transition-all uppercase tracking-[0.3em] text-[15px] font-bold pt-4 border-t border-primary/10 w-fit"
            >
              <ArrowLeft size={16} />
              Return to previous
            </motion.button>
          </div>

          {/* Right — balanced sidebar */}
          <div className="space-y-10">
            <div className="p-10 border border-primary/10 bg-[#F9F9F4]">
              <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-8">Key Focus Areas</h3>
              <ul className="space-y-5">
                {(service.features || ['Strategic Implementation', 'Cultural Alignment', 'Relationship Dynamics', 'Resilience Training']).map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-base font-body text-primary/70">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-primary text-white">
              <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Ready to Start?</h3>
              <p className="text-base font-body text-white/70 leading-relaxed mb-8">
                Connect with us to discuss how we can support your organization's specific needs.
              </p>
              <a
                href="https://scheduler.zoom.us/sheri-macleod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-8 py-4 bg-accent text-white text-[15px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-primary transition-all rounded-sm"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

