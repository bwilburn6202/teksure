/**
 * TekSure Landing Page — AI & LLM Resources Hub
 *
 * Mockup A (Warm & Minimal / Notion-inspired) design system:
 * - Brand colors: Blue (#0066FF), Dark Navy (#003366), Gray (#A6A8AB)
 * - Warm off-white sections, whisper borders, generous whitespace
 * - Focused entirely on AI/LLM resources and information
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, ArrowRight, BookOpen, Bot, Sparkles, Brain,
  Zap, ChevronRight, Mail, Loader2, CheckCircle,
  Layers, TrendingUp, Shield, Eye, MessageSquare, Code,
  Cpu, Globe, Lock, BarChart3, Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SEOHead } from '@/components/SEOHead';

/* ── Brand Colors ── */
const BLUE = '#0066FF';
const NAVY = '#003366';
const GRAY = '#A6A8AB';

/* ── Newsletter Signup ── */
function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      await (supabase as any).from('newsletter_signups').insert({ email: email.trim() });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2 py-2">
        <CheckCircle className="h-5 w-5" style={{ color: BLUE }} />
        <p className="text-sm font-medium" style={{ color: NAVY }}>You're in! Weekly AI insights headed your way.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center gap-2 py-2">
        <p className="text-sm font-medium text-red-600">Something went wrong. Please try again.</p>
        <button onClick={() => setStatus('idle')} className="text-sm hover:underline" style={{ color: BLUE }}>Try again</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="h-12 flex-1 px-4 rounded-lg text-[15px] outline-none"
        style={{ border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff' }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-12 px-6 rounded-lg text-[15px] font-semibold text-white shrink-0"
        style={{ background: BLUE }}
      >
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
      </button>
    </form>
  );
}

/* ── Scroll Reveal Hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

/* ── Data ── */
const aiModels = [
  { name: 'Claude', maker: 'Anthropic', desc: 'Advanced reasoning, coding, and analysis with a focus on safety.', icon: Brain, color: '#D97706' },
  { name: 'GPT-4o', maker: 'OpenAI', desc: 'Multimodal model for text, vision, and audio understanding.', icon: Sparkles, color: '#10B981' },
  { name: 'Gemini', maker: 'Google', desc: 'Natively multimodal AI with deep Google ecosystem integration.', icon: Globe, color: '#3B82F6' },
  { name: 'Llama', maker: 'Meta', desc: 'Open-source large language model family for research and apps.', icon: Code, color: '#8B5CF6' },
  { name: 'Mistral', maker: 'Mistral AI', desc: 'Efficient European-built models with strong multilingual support.', icon: Zap, color: '#F97316' },
  { name: 'Grok', maker: 'xAI', desc: 'Real-time knowledge model with a distinctive conversational style.', icon: MessageSquare, color: '#EF4444' },
];

const resourceCategories = [
  { name: 'Getting Started with AI', icon: Lightbulb, count: 24, desc: 'Beginner-friendly introductions to AI and LLMs' },
  { name: 'Model Comparisons', icon: BarChart3, count: 18, desc: 'Side-by-side breakdowns of leading AI models' },
  { name: 'Prompt Engineering', icon: MessageSquare, count: 31, desc: 'Write better prompts for better AI results' },
  { name: 'AI Safety & Ethics', icon: Shield, count: 15, desc: 'Responsible AI use, bias, and alignment' },
  { name: 'Coding with AI', icon: Code, count: 22, desc: 'Using AI assistants for development and debugging' },
  { name: 'AI News & Trends', icon: TrendingUp, count: 40, desc: 'Latest breakthroughs, releases, and analysis' },
];

const latestGuides = [
  { title: 'What Are Large Language Models? A Plain-English Guide', category: 'Getting Started', time: '6 min', icon: Brain },
  { title: 'Claude vs GPT-4o vs Gemini: Which AI Should You Use?', category: 'Comparisons', time: '8 min', icon: BarChart3 },
  { title: 'How to Write Prompts That Get Great Results', category: 'Prompt Engineering', time: '5 min', icon: MessageSquare },
  { title: 'Understanding AI Hallucinations and How to Spot Them', category: 'Safety', time: '4 min', icon: Eye },
  { title: 'Building Your First App with an AI API', category: 'Coding', time: '10 min', icon: Code },
  { title: 'The State of Open-Source AI in 2026', category: 'News', time: '7 min', icon: TrendingUp },
];

const stats = [
  { number: '200+', label: 'AI guides and resources' },
  { number: '30+', label: 'Interactive AI tools' },
  { number: '6', label: 'Major models covered' },
];

/* ── Main Component ── */
const Index = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/search?q=${encodeURIComponent(search.trim())}`);
  };

  return (
    <div className="min-h-screen" style={{ background: '#ffffff', color: 'rgba(0,0,0,0.90)', fontFamily: 'Inter, -apple-system, system-ui, sans-serif' }}>
      <SEOHead
        title="TekSure — AI & LLM Resources | Guides, Comparisons & Tools"
        description="Your go-to resource for understanding AI and large language models. Guides, model comparisons, prompt engineering tips, and the latest AI news — all in plain English."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://teksure.com/#organization',
            name: 'TekSure',
            url: 'https://teksure.com',
            logo: 'https://teksure.com/teksure-logo.svg',
            description: 'AI and LLM resources hub — guides, comparisons, tools, and news in plain English.',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://teksure.com/#website',
            url: 'https://teksure.com',
            name: 'TekSure',
            description: 'AI & LLM resources — guides, model comparisons, prompt engineering, and AI news.',
            publisher: { '@id': 'https://teksure.com/#organization' },
            potentialAction: {
              '@type': 'SearchAction',
              target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' },
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />

      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/teksure-logo.svg" alt="TekSure" className="h-7 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/guides" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.55)' }}>Guides</Link>
            <Link to="/tools" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.55)' }}>Tools</Link>
            <Link to="/blog" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.55)' }}>News</Link>
            <Link to="/about" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.55)' }}>About</Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md text-sm" style={{ background: 'rgba(0,0,0,0.04)', color: 'rgba(0,0,0,0.45)' }}>
              <Search className="w-3.5 h-3.5" /> Search...
            </button>
            <Link to="/guides" className="px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ background: BLUE }}>
              Explore
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6" style={{ background: `${BLUE}10`, color: BLUE }}>
            <Bot className="w-3 h-3" /> Your AI & LLM Resource Hub
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold leading-[1.05] tracking-tight mb-6" style={{ color: NAVY, letterSpacing: '-0.035em' }}>
            Understand AI.{' '}
            <span style={{ color: BLUE }}>Use it better.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-[600px] mx-auto" style={{ color: 'rgba(0,0,0,0.50)' }}>
            Guides, model comparisons, prompt tips, and the latest news on large language models — all explained in plain English.
          </p>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(0,0,0,0.3)' }} />
              <input
                type="text"
                placeholder="Search AI topics, models, guides..."
                className="w-full h-12 pl-10 pr-4 rounded-lg text-[15px] outline-none"
                style={{ border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button type="submit" className="h-12 px-6 rounded-lg text-[15px] font-semibold text-white shrink-0" style={{ background: BLUE }}>
              Search
            </button>
          </form>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="py-10 px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', background: '#f6f5f4' }}>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ color: NAVY }}>{stat.number}</div>
              <div className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AI Models Overview ─── */}
      <RevealSection>
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-3" style={{ color: NAVY, letterSpacing: '-0.025em' }}>
                Leading AI Models
              </h2>
              <p className="text-base" style={{ color: 'rgba(0,0,0,0.45)' }}>
                Learn about the most important large language models and what makes each one different.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiModels.map((model) => (
                <div
                  key={model.name}
                  className="group p-5 rounded-xl cursor-pointer transition-all hover:shadow-md"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${model.color}15` }}>
                      <model.icon className="w-5 h-5" style={{ color: model.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[15px] font-semibold" style={{ color: NAVY }}>{model.name}</h3>
                        <span className="text-xs" style={{ color: GRAY }}>{model.maker}</span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.50)' }}>{model.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ─── Resource Categories ─── */}
      <RevealSection>
        <section className="py-16 md:py-24 px-6" style={{ background: '#f6f5f4' }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-2" style={{ color: NAVY, letterSpacing: '-0.025em' }}>
                  Browse by topic
                </h2>
                <p className="text-base" style={{ color: 'rgba(0,0,0,0.45)' }}>Deep dives into every aspect of AI.</p>
              </div>
              <Link to="/guides" className="hidden md:flex items-center gap-1 text-sm font-semibold" style={{ color: BLUE }}>
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resourceCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-shadow hover:shadow-md"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${BLUE}10` }}>
                    <cat.icon className="w-5 h-5" style={{ color: BLUE }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold mb-1" style={{ color: NAVY }}>{cat.name}</div>
                    <p className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{cat.desc}</p>
                    <span className="text-xs mt-2 inline-block" style={{ color: GRAY }}>{cat.count} articles</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ─── Latest Guides ─── */}
      <RevealSection>
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-10 text-center" style={{ color: NAVY, letterSpacing: '-0.025em' }}>
              Latest guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {latestGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="group p-5 rounded-xl cursor-pointer transition-all hover:shadow-md"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${BLUE}10` }}>
                    <guide.icon className="w-4 h-4" style={{ color: BLUE }} />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2 leading-snug" style={{ color: NAVY }}>
                    {guide.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: `${BLUE}10`, color: BLUE }}>
                      {guide.category}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(0,0,0,0.35)' }}>{guide.time} read</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ─── Why TekSure ─── */}
      <RevealSection>
        <section className="py-16 md:py-24 px-6" style={{ background: '#f6f5f4' }}>
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-4" style={{ color: NAVY, letterSpacing: '-0.025em' }}>
              AI information you can trust
            </h2>
            <p className="text-base mb-10" style={{ color: 'rgba(0,0,0,0.45)' }}>
              We cut through the hype and explain AI in language that actually makes sense.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Eye, title: 'No hype, no jargon', desc: 'Clear explanations of real AI capabilities and limitations.' },
                { icon: Layers, title: 'Always up to date', desc: 'New models and breakthroughs covered as they happen.' },
                { icon: Lock, title: 'Unbiased coverage', desc: 'We cover all major AI providers — no favorites, no sponsors.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl text-left" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <item.icon className="w-5 h-5 mb-3" style={{ color: BLUE }} />
                  <h3 className="text-[15px] font-semibold mb-1" style={{ color: NAVY }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ─── Newsletter ─── */}
      <RevealSection>
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-[500px] mx-auto text-center">
            <Mail className="w-6 h-6 mx-auto mb-4" style={{ color: BLUE }} />
            <h2 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Weekly AI Digest</h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>
              The most important AI developments, explained in under 5 minutes. Every Sunday.
            </p>
            <NewsletterSignup />
          </div>
        </section>
      </RevealSection>

      {/* ─── Final CTA ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: NAVY }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl md:text-[40px] font-bold tracking-tight mb-4 text-white" style={{ letterSpacing: '-0.03em' }}>
            Start exploring AI today
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            200+ free guides covering every major AI model, use case, and technique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/guides" className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-[15px] font-semibold" style={{ background: '#ffffff', color: NAVY }}>
              Browse All Guides <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/tools" className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-[15px] font-semibold text-white" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
              Try AI Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="inline-block mb-4">
                <img src="/teksure-logo.svg" alt="TekSure" className="h-6 w-auto" />
              </Link>
              <p className="text-sm" style={{ color: 'rgba(0,0,0,0.40)' }}>AI & LLM resources in plain English.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3" style={{ color: NAVY }}>Resources</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>
                <Link to="/guides" className="hover:underline">Guides</Link>
                <Link to="/tools" className="hover:underline">AI Tools</Link>
                <Link to="/glossary" className="hover:underline">AI Glossary</Link>
                <Link to="/blog" className="hover:underline">News</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3" style={{ color: NAVY }}>Topics</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>
                <Link to="/guides" className="hover:underline">Getting Started</Link>
                <Link to="/guides" className="hover:underline">Model Comparisons</Link>
                <Link to="/guides" className="hover:underline">Prompt Engineering</Link>
                <Link to="/guides" className="hover:underline">AI Safety</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3" style={{ color: NAVY }}>Company</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/blog" className="hover:underline">Blog</Link>
                <Link to="/forum" className="hover:underline">Community</Link>
              </div>
            </div>
          </div>
          <div className="pt-6 text-center text-sm" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', color: 'rgba(0,0,0,0.30)' }}>
            &copy; 2026 TekSure. AI & LLM resources for everyone.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
