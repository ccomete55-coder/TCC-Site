import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface QuizOption {
  label: string;
  score: number;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface QuizConfig {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
  results: {
    min: number;
    max: number;
    title: string;
    description: string;
    service: string;
    cta: string;
  }[];
}

const quizzes: Record<string, QuizConfig> = {
  'ready-for-relationship-coach': {
    title: 'Are You Ready for a Relationship Coach?',
    subtitle: 'Answer 4 quick questions to find out if relationship coaching is the right next step for you.',
    questions: [
      {
        question: 'How often do you find yourself repeating the same relationship patterns or conflicts?',
        options: [
          { label: 'Rarely — my relationships feel healthy and evolving.', score: 1 },
          { label: 'Sometimes — I notice patterns but am not sure how to shift them.', score: 2 },
          { label: 'Often — the same issues keep coming up no matter who I am with.', score: 3 },
          { label: 'Almost always — I feel stuck and frustrated with the cycle.', score: 4 },
        ],
      },
      {
        question: 'How would you describe your communication in close relationships?',
        options: [
          { label: 'Strong — I express myself clearly and listen well.', score: 1 },
          { label: 'Decent — but I sometimes struggle to say what I really mean.', score: 2 },
          { label: 'Inconsistent — I can shut down or escalate under pressure.', score: 3 },
          { label: 'Difficult — I often feel misunderstood or avoid hard conversations.', score: 4 },
        ],
      },
      {
        question: 'Are you currently navigating a major relationship transition (dating, breakup, engagement, marriage, co-parenting)?',
        options: [
          { label: 'No — my situation feels relatively stable right now.', score: 1 },
          { label: 'Somewhat — things are shifting but I am managing.', score: 2 },
          { label: 'Yes — and I could use more clarity and support.', score: 3 },
          { label: 'Yes — and it is significantly affecting my wellbeing.', score: 4 },
        ],
      },
      {
        question: 'How open are you to examining your own patterns, triggers, and blind spots?',
        options: [
          { label: 'Very open — self-awareness is something I actively pursue.', score: 4 },
          { label: 'Mostly open — though it can feel uncomfortable at times.', score: 3 },
          { label: 'Somewhat — I am curious but not sure where to start.', score: 2 },
          { label: 'Not quite there yet — this feels new or vulnerable.', score: 1 },
        ],
      },
    ],
    results: [
      {
        min: 4, max: 7,
        title: 'You have a strong foundation.',
        description: 'Your relationships and self-awareness are in a good place. Coaching at this stage can help you sustain what is working, deepen connection, and grow proactively rather than reactively.',
        service: 'Coaching for High Performers',
        cta: 'Explore Coaching',
      },
      {
        min: 8, max: 12,
        title: 'You are ready to go deeper.',
        description: 'You have the self-awareness and the desire — now you need the tools and support to break the patterns that are holding you back. Relationship coaching could be a real turning point for you.',
        service: 'Conscious Coupling™ or Conscious Commitment™',
        cta: 'Book a Consultation',
      },
      {
        min: 13, max: 16,
        title: 'Now is the time.',
        description: 'You are navigating real challenges and feeling the weight of them. That is exactly when coaching creates the most impact. You do not have to figure this out alone.',
        service: 'Relationship Coaching with Sheri MacLeod',
        cta: 'Start the Conversation',
      },
    ],
  },

  'cost-of-disengagement': {
    title: 'How Engaged Is Your Team?',
    subtitle: 'Answer 4 questions to assess the health of your team\'s engagement and find out where to focus.',
    questions: [
      {
        question: 'How often do team members proactively share ideas or raise concerns in meetings?',
        options: [
          { label: 'Regularly — people feel safe to speak up and often do.', score: 1 },
          { label: 'Sometimes — a few voices dominate but others contribute occasionally.', score: 2 },
          { label: 'Rarely — most people stay quiet unless directly asked.', score: 3 },
          { label: 'Almost never — there is an atmosphere of silence or fear.', score: 4 },
        ],
      },
      {
        question: 'How would you describe your team\'s energy and motivation right now?',
        options: [
          { label: 'High — people are enthusiastic and take ownership.', score: 1 },
          { label: 'Moderate — work gets done but the spark is missing.', score: 2 },
          { label: 'Low — there is noticeable disengagement or cynicism.', score: 3 },
          { label: 'Very low — I am concerned about burnout or quiet quitting.', score: 4 },
        ],
      },
      {
        question: 'How clear are your team members on their role, expectations, and how their work connects to the bigger picture?',
        options: [
          { label: 'Very clear — alignment is strong across the team.', score: 1 },
          { label: 'Mostly clear — some confusion exists but it gets resolved.', score: 2 },
          { label: 'Unclear for many — there is confusion around priorities and purpose.', score: 3 },
          { label: 'Very unclear — people are operating in silos with little direction.', score: 4 },
        ],
      },
      {
        question: 'When was the last time you meaningfully assessed your team\'s culture and engagement?',
        options: [
          { label: 'Recently — we have a regular practice of checking in.', score: 1 },
          { label: 'A while ago — we did something but it was not very structured.', score: 2 },
          { label: 'Not formally — we rely on intuition rather than data.', score: 3 },
          { label: 'Never — this is something we have not prioritized.', score: 4 },
        ],
      },
    ],
    results: [
      {
        min: 4, max: 7,
        title: 'Your team has a strong culture.',
        description: 'You have built something real. The opportunity now is to sustain it intentionally as your team grows and evolves. Proactive culture strategy keeps high-engagement teams from sliding without warning.',
        service: 'Culture Strategy & Team Performance',
        cta: 'Explore Team Support',
      },
      {
        min: 8, max: 12,
        title: 'There is real opportunity here.',
        description: 'Your team is functional but there are gaps worth addressing. Investing in culture and communication now will prevent the slow erosion that leads to costly turnover and disengagement down the road.',
        service: 'Workplace Advisory & Team Facilitation',
        cta: 'Let\'s Talk Strategy',
      },
      {
        min: 13, max: 16,
        title: 'Your team needs support now.',
        description: 'The signs are there. Disengagement at this level is costly — in performance, retention, and culture. The good news: it is fixable. The Conscious Collective can help you diagnose the root causes and build a clear path forward.',
        service: 'HR Advisory & Culture Strategy',
        cta: 'Book a Consultation',
      },
    ],
  },

  'human-centred-leadership': {
    title: 'What Kind of Leader Are You?',
    subtitle: 'Answer 4 questions to discover your leadership style and where human-centred leadership can take you.',
    questions: [
      {
        question: 'When a team member is struggling, what is your first instinct?',
        options: [
          { label: 'To listen without jumping to solutions — understanding comes first.', score: 4 },
          { label: 'To offer advice and resources to help them get back on track.', score: 3 },
          { label: 'To give them space and check in after some time.', score: 2 },
          { label: 'To address the performance impact and set clear expectations.', score: 1 },
        ],
      },
      {
        question: 'How comfortable are you acknowledging your own mistakes to your team?',
        options: [
          { label: 'Very comfortable — I model vulnerability and it strengthens trust.', score: 4 },
          { label: 'Somewhat comfortable — I do it when necessary but it does not come naturally.', score: 3 },
          { label: 'Uncomfortable — I worry it undermines my authority.', score: 2 },
          { label: 'I avoid it — leaders need to project confidence above all.', score: 1 },
        ],
      },
      {
        question: 'How often do you actively seek feedback from your team about your leadership?',
        options: [
          { label: 'Regularly — I have structured ways to gather honest input.', score: 4 },
          { label: 'Occasionally — I ask informally but not consistently.', score: 3 },
          { label: 'Rarely — I rely on results and performance data.', score: 2 },
          { label: 'Never — I feel feedback flows the other way.', score: 1 },
        ],
      },
      {
        question: 'How would your team describe the psychological safety on your team?',
        options: [
          { label: 'High — people speak freely, disagree openly, and trust each other.', score: 4 },
          { label: 'Moderate — most people feel safe but some hold back.', score: 3 },
          { label: 'Low — people are careful about what they say and to whom.', score: 2 },
          { label: 'I am not sure — I have not asked or assessed this.', score: 1 },
        ],
      },
    ],
    results: [
      {
        min: 4, max: 8,
        title: 'You lead with authority. Now add depth.',
        description: 'Your leadership is results-driven and decisive. Adding human-centred practices — vulnerability, active listening, psychological safety — will elevate your team\'s trust and performance to the next level.',
        service: 'Leadership Development & Coaching',
        cta: 'Develop Your Leadership',
      },
      {
        min: 9, max: 13,
        title: 'You are on the right path.',
        description: 'You understand the value of human connection in leadership and practice it with intention. Coaching can help you deepen these skills, address blind spots, and become the leader your team deserves.',
        service: '1:1 Leadership Coaching',
        cta: 'Book a Session',
      },
      {
        min: 14, max: 16,
        title: 'You are a human-centred leader.',
        description: 'You lead with empathy, self-awareness, and a genuine commitment to your team\'s growth. The opportunity now is to formalize your approach and share these practices with the leaders around you.',
        service: 'Leadership Development Programs',
        cta: 'Explore Programs',
      },
    ],
  },

  'default': {
    title: 'Which TCC Service Is Right for You?',
    subtitle: 'Answer 4 quick questions to find out where The Conscious Collective can support you most.',
    questions: [
      {
        question: 'What best describes your current situation?',
        options: [
          { label: 'I lead a team or organization and need HR or culture support.', score: 1 },
          { label: 'I want to improve my personal relationships and communication.', score: 2 },
          { label: 'I am looking for leadership coaching or professional development.', score: 3 },
          { label: 'I am not sure — I just know something needs to change.', score: 2 },
        ],
      },
      {
        question: 'How would you describe the biggest challenge you are facing right now?',
        options: [
          { label: 'Team dynamics, culture, or HR challenges in my organization.', score: 1 },
          { label: 'Patterns in my personal relationships I want to shift.', score: 2 },
          { label: 'Bridging the gap between professional success and personal fulfillment.', score: 3 },
          { label: 'Feeling stuck without a clear path forward.', score: 2 },
        ],
      },
      {
        question: 'How ready are you to invest in change right now?',
        options: [
          { label: 'Very ready — I know I need support and I am committed.', score: 4 },
          { label: 'Ready — I am open and willing to do the work.', score: 3 },
          { label: 'Almost — I need a little more information before I commit.', score: 2 },
          { label: 'Still exploring — this is early days for me.', score: 1 },
        ],
      },
      {
        question: 'What outcome matters most to you in the next 6 months?',
        options: [
          { label: 'A stronger, more engaged, high-performing team.', score: 1 },
          { label: 'Healthier, more conscious relationships in my personal life.', score: 2 },
          { label: 'Greater self-awareness and more effective leadership.', score: 3 },
          { label: 'More clarity, confidence, and control in my life overall.', score: 2 },
        ],
      },
    ],
    results: [
      {
        min: 4, max: 7,
        title: 'Organizations & HR Advisory.',
        description: 'Your focus is on building better workplaces. The Conscious Collective offers fractional HR, culture strategy, and team performance solutions designed for growing organizations.',
        service: 'HR Advisory & Culture Strategy',
        cta: 'Explore Organizations',
      },
      {
        min: 8, max: 12,
        title: 'Personal & Relationship Coaching.',
        description: 'You are ready to invest in the most important relationships in your life. Our coaching programs help individuals and couples build deeper connection and communication.',
        service: 'Conscious Coaching for Individuals',
        cta: 'Explore Coaching',
      },
      {
        min: 13, max: 16,
        title: 'Leadership & Personal Development.',
        description: 'You are looking to grow as a leader and as a person. Our leadership coaching and high-performance programs bridge professional ambition with personal depth.',
        service: 'Leadership Development',
        cta: 'Book a Consultation',
      },
    ],
  },
};

interface BlogQuizProps {
  slug: string;
}

export const BlogQuiz: React.FC<BlogQuizProps> = ({ slug }) => {
  const config = quizzes[slug] ?? quizzes['default'];
  const { title, subtitle, questions, results } = config;

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const result = results.find(r => totalScore >= r.min && totalScore <= r.max) ?? results[Math.floor(results.length / 2)];

  const progress = (currentQ / questions.length) * 100;

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    const score = questions[currentQ].options[selectedIndex].score;
    const newScores = [...scores, score];
    if (currentQ < questions.length - 1) {
      setScores(newScores);
      setCurrentQ(currentQ + 1);
      setSelectedIndex(null);
    } else {
      setScores(newScores);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelectedIndex(null);
    setScores([]);
    setShowResult(false);
  };

  return (
    <div className="mt-24 border-t border-primary/10 pt-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">Self-Assessment</span>
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">{title}</h2>
        <p className="text-lg font-body text-primary/70 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-6" />
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto"
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-[13px] uppercase tracking-widest text-primary/40 font-body mb-3">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="w-full h-[2px] bg-primary/10">
                <motion.div
                  className="h-[2px] bg-accent"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-xl md:text-2xl font-serif text-primary mb-8 leading-snug">
              {questions[currentQ].question}
            </h3>

            {/* Options — keyed by index so only one can be selected */}
            <div className="space-y-4 mb-10">
              {questions[currentQ].options.map((opt, i) => {
                const isSelected = selectedIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left px-6 py-5 border rounded-sm transition-all duration-200 font-body text-base leading-relaxed ${
                      isSelected
                        ? 'border-accent bg-accent/8 text-primary'
                        : 'border-primary/10 hover:border-accent/40 text-primary/70 hover:text-primary'
                    }`}
                  >
                    <span className="flex items-start gap-4">
                      <span className={`mt-1 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                        isSelected ? 'border-accent bg-accent' : 'border-primary/20'
                      }`} />
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedIndex === null}
              className={`px-10 py-4 text-[15px] uppercase tracking-[0.2em] font-bold rounded-sm transition-all inline-flex items-center gap-3 ${
                selectedIndex !== null
                  ? 'bg-primary text-white hover:bg-accent cursor-pointer'
                  : 'bg-primary/15 text-primary/30 cursor-not-allowed'
              }`}
            >
              {currentQ < questions.length - 1 ? 'Next Question' : 'See My Results'}
              <ArrowRight size={14} />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-primary text-white">
                <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">Your Result</span>
                <h3 className="text-3xl font-serif text-white mb-6 leading-tight">{result.title}</h3>
                <p className="text-base font-body text-white/70 leading-relaxed mb-8">{result.description}</p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[13px] uppercase tracking-widest text-accent font-bold mb-2">Recommended</p>
                  <p className="text-white font-serif text-lg">{result.service}</p>
                </div>
              </div>
              <div className="p-10 border border-primary/10 bg-[#F9F9F4] flex flex-col justify-between">
                <div>
                  <span className="text-accent text-[15px] uppercase tracking-[0.4em] mb-4 block">Ready to Go Deeper?</span>
                  <p className="text-lg font-body text-primary/70 leading-relaxed mb-8">
                    Book a complimentary consultation with Sheri to talk through your results and explore what working together could look like.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="https://scheduler.zoom.us/sheri-macleod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-8 py-4 bg-accent text-white text-[15px] uppercase tracking-[0.2em] font-bold hover:bg-primary transition-all rounded-sm"
                  >
                    {result.cta} <ArrowRight size={14} className="inline ml-2" />
                  </a>
                  <button
                    onClick={handleRestart}
                    className="w-full text-center text-[13px] uppercase tracking-widest text-primary/40 hover:text-accent transition-colors font-bold py-2"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
