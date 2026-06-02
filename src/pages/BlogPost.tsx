import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';
import { BlogQuiz } from '../components/BlogQuiz';

interface BlogPostData {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  body: string[];
}

const postData: BlogPostData[] = [
  {
    slug: 'human-centred-leadership',
    category: 'Leadership',
    title: 'What Human-Centred Leadership Actually Looks Like in Practice',
    date: 'May 2026',
    readTime: '5 min read',
    body: [
      'Leadership is not a title. It is a daily practice of showing up with clarity, empathy, and intention.',
      'We often talk about leadership as though it is a destination — something you arrive at once you have the role, the salary, the office. But the leaders who create lasting impact understand that leadership is fundamentally relational. It lives in the small moments: the conversation you choose to have instead of avoid, the feedback you give with care instead of criticism, the decision to listen before you respond.',
      'Human-centred leadership is not soft. It is strategic. When people feel seen, supported, and safe to contribute fully, teams perform at their highest level. Psychological safety is not a nice-to-have — it is the foundation of innovation, trust, and sustainable performance.',
      'At The Conscious Collective, we work with leaders at every stage to build the self-awareness and emotional intelligence required to lead this way. The result is not just better performance — it is healthier cultures, stronger retention, and workplaces that people genuinely want to be part of.',
      'The question is not whether you can afford to invest in human-centred leadership. The question is whether you can afford not to.',
    ],
  },
  {
    slug: 'workplace-culture-transformation',
    category: 'Culture',
    title: 'Where Culture Meets Performance: Building Workplaces That Thrive',
    date: 'April 2026',
    readTime: '4 min read',
    body: [
      'Culture is not what you post on your website. It is what happens in your meetings, your feedback conversations, and the moments in between.',
      'Many organizations invest heavily in defining their values and displaying them on walls, only to find those values disconnected from day-to-day reality. The gap between stated culture and lived culture is where trust erodes, engagement drops, and top talent leaves.',
      'Building a thriving workplace culture starts with an honest assessment of where you are. Not where you aspire to be — where you actually are. What behaviours are being rewarded? What conversations are being avoided? How do people actually feel about showing up to work?',
      'When culture and performance align, something remarkable happens. People stop working for the organization and start working with it. Collaboration deepens. Innovation increases. And the metrics — retention, engagement, productivity — follow.',
      'Culture is not a program or a one-time initiative. It is a living system shaped by every decision, interaction, and message leadership sends. The Conscious Collective helps organizations close the gap between intention and reality — one conversation, one team, one workplace at a time.',
    ],
  },
  {
    slug: 'conscious-communication',
    category: 'Relationships',
    title: 'The Communication Shifts That Change Everything',
    date: 'April 2026',
    readTime: '6 min read',
    body: [
      'Whether in a boardroom or a relationship, how we communicate shapes how we connect.',
      'Most communication challenges are not about the words themselves. They are about the assumptions behind them, the emotions underneath them, and the patterns that have built up over time. We speak, but we are not heard. We listen, but we are not truly present. We have the conversation, but nothing changes.',
      'Three shifts that transform the quality of every conversation: First, move from reacting to responding. Reaction is automatic — it is driven by emotion and pattern. Response is intentional — it involves a pause, a choice, a more thoughtful engagement. Second, replace advice with curiosity. The most powerful question in any conversation is often simply "tell me more." Third, acknowledge before you advance. Before offering solutions, solutions, or counterpoints, acknowledge what you have heard. This single shift reduces defensiveness and opens the door to real dialogue.',
      'These skills sound simple. They are not easy. But with practice — and with the right support — they change everything: how you lead, how you parent, how you partner, how you connect.',
      'At The Conscious Collective, conscious communication is at the heart of everything we do. Whether in our coaching programs or our organizational workshops, we help people move from habitual patterns to intentional connection.',
    ],
  },
  {
    slug: 'fractional-hr-guide',
    category: 'HR Advisory',
    title: 'Is Fractional HR Right for Your Business? A Practical Guide',
    date: 'March 2026',
    readTime: '5 min read',
    body: [
      'Senior-level HR expertise without the full-time overhead. Here is how to know if fractional HR is the right fit for your organization.',
      'For many small and mid-sized businesses, the HR function exists in one of two states: either it is handled reactively by a founder or operations manager with no formal HR background, or there is a junior HR coordinator doing their best without senior strategic guidance. Neither serves the organization well.',
      'Fractional HR fills this gap. It brings seasoned, senior-level HR leadership into your business on a flexible, part-time or project basis. You get the expertise of a Chief People Officer or VP of HR without the cost of a full-time executive hire.',
      'Fractional HR is particularly valuable during periods of growth, organizational change, or when specific HR projects — like building a performance management system, navigating a complex employee relations issue, or designing a compensation structure — require expertise beyond your current capacity.',
      'The Conscious Collective provides fractional HR services grounded in strategy, empathy, and a deep understanding of how people and organizations thrive together. If you are unsure whether fractional HR is the right step, we offer a complimentary consultation to help you assess your needs and explore your options.',
    ],
  },
  {
    slug: 'psychological-safety',
    category: 'Team Performance',
    title: 'Psychological Safety Is Not a Buzzword. Here Is How to Build It.',
    date: 'March 2026',
    readTime: '7 min read',
    body: [
      'Teams that feel safe to speak up, take risks, and fail forward outperform those that do not. The research is clear. The practice takes intention.',
      'Psychological safety — the belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes — is the single most important factor in team performance, according to Google\'s landmark Project Aristotle research. Yet it remains one of the most misunderstood and underdeveloped capabilities in most organizations.',
      'Psychological safety is not about being nice. It is not about avoiding difficult conversations or protecting people from accountability. It is about creating an environment where honest dialogue is possible — where team members trust that their voice matters and that vulnerability will not be weaponized against them.',
      'Building it requires consistent, intentional leadership behaviours: modelling fallibility by openly acknowledging your own mistakes, responding to bad news with curiosity rather than blame, actively soliciting input from quieter voices, and following up when people raise concerns to demonstrate that speaking up leads to action.',
      'The Conscious Collective works with leadership teams and organizations to assess and build psychological safety through facilitated workshops, leadership coaching, and culture strategy. Because when safety is present, performance follows.',
    ],
  },
  {
    slug: 'personal-transformation',
    category: 'Personal Growth',
    title: 'Personal Evolution as the Foundation of Collective Impact',
    date: 'February 2026',
    readTime: '4 min read',
    body: [
      'Every organization is made of people. When individuals grow in self-awareness, communication, and emotional intelligence, the whole system rises with them.',
      'We tend to separate personal development from professional performance, as though who we are at home has nothing to do with who we are at work. But the research — and lived experience — tells a different story. The leader who has done the work to understand their own patterns, triggers, and blind spots shows up differently in every meeting, conversation, and decision.',
      'Personal evolution is not self-indulgence. It is one of the highest-leverage investments any professional can make. When you understand yourself more deeply, you communicate more clearly, lead more effectively, and navigate complexity with greater resilience.',
      'At The Conscious Collective, we believe that organizational transformation and personal transformation are not separate paths — they are the same path, walked together. Our coaching programs for individuals and our advisory services for organizations are designed with this in mind: that when people grow, so do the systems they are part of.',
      'The work begins with you. And its impact extends far beyond you.',
    ],
  },
  {
    slug: 'cost-of-disengagement',
    category: 'Team Performance',
    title: 'The Hidden Cost of a Disengaged Team — And What To Do About It',
    date: 'May 2026',
    readTime: '6 min read',
    body: [
      'A disengaged employee costs an organization up to 34% of their annual salary in lost productivity. But the real cost goes far beyond the numbers.',
      'Disengagement shows up quietly at first. It looks like meetings where no one speaks up. Deadlines met without enthusiasm. High performers who stop volunteering ideas. A slow, steady erosion of the energy that once made your team feel like something worth being part of. By the time turnover begins, the damage has usually been building for months — sometimes years.',
      'Gallup research consistently shows that only about 23% of employees globally are engaged at work. That means the majority of people in your organization are either just going through the motions, or actively working against the culture you are trying to build.',
      'What drives disengagement? Most often it is not compensation. It is a lack of psychological safety, unclear expectations, poor manager relationships, and a disconnect between stated values and lived reality. People disengage when they stop believing that their work matters, that their voice is heard, or that the organization actually cares about them as people.',
      'The path back begins with listening — genuinely, structurally, and without defensiveness. It continues with leaders who model vulnerability and accountability. And it is sustained by building the kind of culture where people feel seen, supported, and clear on their contribution.',
      'At The Conscious Collective, we partner with organizations to assess engagement, identify the root causes of disengagement, and design practical strategies that rebuild trust and performance from the inside out. Because a thriving team is not an accident — it is a choice, made consistently, at every level of leadership.',
    ],
  },
  {
    slug: 'ready-for-relationship-coach',
    category: 'Relationships',
    title: '5 Signs You Are Ready for a Relationship Coach',
    date: 'June 2026',
    readTime: '5 min read',
    body: [
      'Relationship coaching is not just for people in crisis. It is for anyone ready to build something better — in love, in communication, and in how they show up for the people who matter most.',
      'There is still a misconception that coaching is what you do when things have gone wrong. The truth is, the people who benefit most from relationship coaching are often not in crisis at all. They are high-achievers, self-aware individuals, and people who are genuinely committed to growth — and who recognize that their patterns, habits, and blind spots might be limiting the depth and quality of their connections.',
      'Sign 1: You keep having the same argument. The topic changes, but the cycle does not. Relationship coaching helps you identify what is actually being fought over beneath the surface — and gives you tools to break the pattern.',
      'Sign 2: You feel chronically misunderstood. You say one thing, but your partner, colleague, or family member hears something completely different. This is almost always a communication and attachment pattern issue — one that is very workable with the right support.',
      'Sign 3: You are entering or exiting a major life transition. Dating after a long relationship. Getting married. Navigating a breakup. Moving in together. These are high-leverage moments where coaching can prevent years of unnecessary pain.',
      'Sign 4: You are highly successful in one area of life but struggling in another. Many high performers find that the same drive that fuels professional success can create distance in personal relationships. Coaching helps integrate both.',
      'Sign 5: You want more — not because something is broken, but because you know it can be better. This is perhaps the most powerful reason of all. The willingness to invest in your relationships before they need saving is a sign of extraordinary self-awareness.',
      'If any of these resonates, you are probably more ready than you think. The Conscious Collective offers relationship coaching, personal growth programs, and conscious connection work for individuals and couples ready to build something real.',
    ],
  },
];

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = postData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-primary mb-4">Post not found</h1>
        <button onClick={() => navigate('/blog')} className="text-accent underline uppercase tracking-widest text-sm rounded-sm">Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">

      {/* Centered hero header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-4 text-center border-b border-primary/10"
      >
        <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-6 block">{post.category}</span>
        <h1 className="text-4xl md:text-6xl font-serif text-primary tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          {post.title}
        </h1>
        <p className="text-sm uppercase tracking-[0.3em] text-primary/40 font-body">{post.date} &nbsp;·&nbsp; {post.readTime}</p>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-8" />
      </motion.div>

      {/* Balanced two-column body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-7xl mx-auto px-4 md:px-20 py-24 grid grid-cols-1 md:grid-cols-3 gap-20 items-start"
      >
        {/* Left — article body */}
        <div className="md:col-span-2 space-y-8">
          {post.body.map((para, i) => (
            <p key={i} className={`font-body leading-relaxed ${i === 0 ? 'text-xl md:text-2xl text-primary/80' : 'text-lg text-primary/70'}`}>
              {para}
            </p>
          ))}

          <motion.button
            whileHover={{ x: -6 }}
            onClick={() => navigate('/blog')}
            className="flex items-center gap-3 text-primary hover:text-accent transition-all uppercase tracking-[0.3em] text-[15px] font-bold pt-8 border-t border-primary/10 w-fit rounded-sm"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </motion.button>
        </div>

        {/* Right — sidebar */}
        <div className="space-y-10">
          <div className="p-10 border border-primary/10 bg-[#F9F9F4]">
            <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-6">About This Topic</h3>
            <p className="text-base font-body text-primary/70 leading-relaxed">
              The Conscious Collective writes about leadership, culture, relationships, and the intersection of personal and professional growth.
            </p>
          </div>

          <div className="p-10 bg-primary text-white">
            <h3 className="text-[15px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Work With Us</h3>
            <p className="text-base font-body text-white/70 leading-relaxed mb-8">
              Ready to bring these ideas into your organization or personal growth journey?
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

      {/* Lead Magnet Quiz */}
      <div className="max-w-7xl mx-auto px-4 md:px-20 pb-24">
        <BlogQuiz slug={post.slug} />
      </div>

      <Footer />
    </div>
  );
};
