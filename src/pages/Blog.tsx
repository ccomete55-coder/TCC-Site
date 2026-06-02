import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  // June 2026
  {
    slug: 'ready-for-relationship-coach',
    category: 'Relationships',
    title: '5 Signs You Are Ready for a Relationship Coach',
    excerpt: 'Relationship coaching is not just for people in crisis. It is for anyone ready to build something better — in love, in communication, and in how they show up for the people who matter most.',
    date: 'June 2026',
    readTime: '5 min read',
    featured: true,
  },
  // May 2026
  {
    slug: 'cost-of-disengagement',
    category: 'Team Performance',
    title: 'The Hidden Cost of a Disengaged Team — And What To Do About It',
    excerpt: 'A disengaged employee costs an organization up to 34% of their annual salary in lost productivity. But the real cost goes far beyond the numbers. Here is what disengagement actually looks like — and how to turn it around.',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    slug: 'human-centred-leadership',
    category: 'Leadership',
    title: 'What Human-Centred Leadership Actually Looks Like in Practice',
    excerpt: 'Leadership is not a title. It is a daily practice of showing up with clarity, empathy, and intention. Here is what that looks like when culture and performance align.',
    date: 'May 2026',
    readTime: '5 min read',
  },
  // April 2026
  {
    slug: 'workplace-culture-transformation',
    category: 'Culture',
    title: 'Where Culture Meets Performance: Building Workplaces That Thrive',
    excerpt: 'Culture is not what you post on your website. It is what happens in your meetings, your feedback conversations, and the moments in between.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    slug: 'conscious-communication',
    category: 'Relationships',
    title: 'The Communication Shifts That Change Everything',
    excerpt: 'Whether in a boardroom or a relationship, how we communicate shapes how we connect. Three foundational shifts that transform the quality of every conversation.',
    date: 'April 2026',
    readTime: '6 min read',
  },
  // March 2026
  {
    slug: 'fractional-hr-guide',
    category: 'HR Advisory',
    title: 'Is Fractional HR Right for Your Business? A Practical Guide',
    excerpt: 'Senior-level HR expertise without the full-time overhead. We break down when fractional HR makes sense, what to expect, and how to get the most from the partnership.',
    date: 'March 2026',
    readTime: '5 min read',
  },
  {
    slug: 'psychological-safety',
    category: 'Team Performance',
    title: 'Psychological Safety Is Not a Buzzword. Here Is How to Build It.',
    excerpt: 'Teams that feel safe to speak up, take risks, and fail forward outperform those that do not. The research is clear. The practice takes intention.',
    date: 'March 2026',
    readTime: '7 min read',
  },
  // February 2026
  {
    slug: 'personal-transformation',
    category: 'Personal Growth',
    title: 'Personal Evolution as the Foundation of Collective Impact',
    excerpt: 'Every organization is made of people. When individuals grow in self-awareness, communication, and emotional intelligence, the whole system rises with them.',
    date: 'February 2026',
    readTime: '4 min read',
  },
];

const categories = ['All', 'Leadership', 'Culture', 'Relationships', 'HR Advisory', 'Team Performance', 'Personal Growth'];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = posts.find(p => p.featured);
  const filtered = posts.filter(p => !p.featured && (activeCategory === 'All' || p.category === activeCategory));

  return (
    <div className="min-h-screen bg-bg">
      <main className="pt-40 pb-24 px-4 md:px-20 max-w-7xl mx-auto">

        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">Insights</span>
          <h1 className="text-6xl md:text-7xl font-serif text-primary tracking-tight leading-tight mb-6">
            The Collective Blog
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">
            Human-centred. Strategy-led. Tech-enabled.
          </p>
          <p className="text-lg font-body text-primary/70 leading-relaxed max-w-2xl mx-auto">
            Perspectives on leadership, culture, relationships, and the intersection of personal transformation and professional growth.
          </p>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-8" />
        </motion.div>

        {/* Featured Post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => navigate(`/blog/${featured.slug}`)}
          className="mb-20 group cursor-pointer border border-primary/10 rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div className="bg-primary p-12 md:p-16 flex flex-col justify-between min-h-[360px]">
              <div>
                <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">Featured - {featured.category}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
                  {featured.title}
                </h2>
                <p className="text-white/60 font-body leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <span className="text-white/40 text-xs uppercase tracking-widest">{featured.date} - {featured.readTime}</span>
                <div className="flex items-center gap-2 text-accent text-[15px] uppercase tracking-[0.3em] font-bold group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={12} />
                </div>
              </div>
            </div>
            <div className="bg-[#F0EDE4] p-12 md:p-16 flex items-center justify-center">
              <blockquote className="text-2xl md:text-3xl font-serif text-primary/70 leading-relaxed text-center max-w-xs">
                "Every organization is only as strong as the people within it."
              </blockquote>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-primary/10 pb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[15px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-sm transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'text-primary/50 hover:text-primary border border-primary/10 hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group cursor-pointer border border-primary/10 rounded-sm p-8 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">{post.category}</span>
                <h3 className="text-xl font-serif text-primary leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm font-body text-primary/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-primary/5 pt-6">
                <span className="text-primary/30 text-xs uppercase tracking-widest">{post.date} - {post.readTime}</span>
                <div className="flex items-center gap-1 text-accent text-[15px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight size={10} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </main>
      <Footer />
    </div>
  );
};
