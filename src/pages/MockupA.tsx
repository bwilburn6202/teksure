/**
 * MOCKUP A — "Warm & Minimal" (Notion-inspired)
 *
 * Design philosophy: Warm neutrals, whisper-thin borders, generous whitespace,
 * ultra-readable typography. Feels like quality paper — approachable, calm, trustworthy.
 *
 * Key traits:
 * - Warm off-white (#f6f5f4) alternating sections
 * - Near-black text (not pure black) for softer reading
 * - Single accent color (warm blue) for CTAs
 * - Whisper borders (1px rgba(0,0,0,0.1))
 * - Large, airy spacing between sections
 * - Minimal shadows, maximum clarity
 * - Pill badges for categories
 */

import { Link } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Heart, ChevronRight,
  CheckCircle2, Users, Star, Zap, HelpCircle, Eye
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const categories = [
  { name: 'Getting Started', icon: Lightbulb, count: 24, color: '#f59e0b' },
  { name: 'Stay Safe Online', icon: Shield, count: 18, color: '#ef4444' },
  { name: 'Windows Help', icon: Monitor, count: 31, color: '#3b82f6' },
  { name: 'Phone & Apps', icon: Phone, count: 22, color: '#8b5cf6' },
  { name: 'AI Made Simple', icon: Bot, count: 12, color: '#06b6d4' },
  { name: 'Health & Wellness', icon: Heart, count: 9, color: '#ec4899' },
];

const popularGuides = [
  { title: 'How to Spot a Scam Email', category: 'Safety', time: '4 min', emoji: '' },
  { title: 'Setting Up WiFi on Your Phone', category: 'Getting Started', time: '5 min', emoji: '' },
  { title: 'Making Text Bigger on Any Device', category: 'Tips', time: '3 min', emoji: '' },
  { title: 'What is the Cloud? (Explained Simply)', category: 'Getting Started', time: '6 min', emoji: '' },
  { title: 'How to Video Call Your Family', category: 'Apps', time: '5 min', emoji: '' },
  { title: 'Keeping Your Passwords Safe', category: 'Safety', time: '4 min', emoji: '' },
];

const stats = [
  { number: '200+', label: 'Free guides written in plain English' },
  { number: '30+', label: 'Interactive tools to help you learn' },
  { number: '10,000+', label: 'People helped so far' },
];

const MockupA = () => {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff', color: 'rgba(0,0,0,0.90)' }}>
      <SEOHead title="TekSure — Mockup A: Warm & Minimal" description="Notion-inspired warm minimal design" path="/mockup-a" />

      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: 'rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/mockups" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#0075de' }}>T</div>
            <span className="text-lg font-bold tracking-tight" style={{ color: 'rgba(0,0,0,0.95)' }}>TekSure</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#guides" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>Guides</a>
            <a href="#tools" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>Tools</a>
            <a href="#help" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>Get Help</a>
            <a href="#about" className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>About</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md text-sm" style={{ background: 'rgba(0,0,0,0.04)', color: 'rgba(0,0,0,0.5)' }}>
              <Search className="w-3.5 h-3.5" /> Search...
            </button>
            <button className="px-4 py-2 rounded text-sm font-semibold text-white" style={{ background: '#0075de' }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6" style={{ background: '#f2f9ff', color: '#097fe8' }}>
            <Zap className="w-3 h-3" /> 100% Free — No Account Needed
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold leading-[1.05] tracking-tight mb-6" style={{ color: 'rgba(0,0,0,0.95)', letterSpacing: '-0.035em' }}>
            Tech help that speaks{' '}
            <span style={{ color: '#0075de' }}>your language</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-[600px] mx-auto" style={{ color: 'rgba(0,0,0,0.55)' }}>
            Step-by-step guides written in plain English. No jargon, no assumptions — just clear answers when you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(0,0,0,0.3)' }} />
              <input
                type="text"
                placeholder="What do you need help with?"
                className="w-full h-12 pl-10 pr-4 rounded-lg text-[15px] outline-none"
                style={{ border: '1px solid rgba(0,0,0,0.12)', background: '#ffffff' }}
              />
            </div>
            <button className="h-12 px-6 rounded-lg text-[15px] font-semibold text-white shrink-0" style={{ background: '#0075de' }}>
              Find Answers
            </button>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="border-y py-10 px-6" style={{ borderColor: 'rgba(0,0,0,0.06)', background: '#f6f5f4' }}>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ color: 'rgba(0,0,0,0.90)' }}>{stat.number}</div>
              <div className="text-sm" style={{ color: 'rgba(0,0,0,0.50)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What's Bothering You? ─── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-3" style={{ letterSpacing: '-0.025em' }}>What's going on with your tech?</h2>
            <p className="text-base" style={{ color: 'rgba(0,0,0,0.50)' }}>Pick a problem — we'll walk you through the fix.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { emoji: '', label: 'WiFi Not Working' },
              { emoji: '', label: 'Computer Is Slow' },
              { emoji: '', label: 'Suspicious Pop-ups' },
              { emoji: '', label: 'Printer Problems' },
              { emoji: '', label: 'Forgot a Password' },
              { emoji: '', label: 'Phone Storage Full' },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-xl text-left transition-all hover:scale-[1.02]"
                style={{ border: '1px solid rgba(0,0,0,0.08)', background: '#ffffff' }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-[15px] font-medium" style={{ color: 'rgba(0,0,0,0.80)' }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Browse by Category ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: '#f6f5f4' }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-2" style={{ letterSpacing: '-0.025em' }}>Browse by topic</h2>
              <p className="text-base" style={{ color: 'rgba(0,0,0,0.50)' }}>Find exactly what you need.</p>
            </div>
            <Link to="/guides" className="hidden md:flex items-center gap-1 text-sm font-semibold" style={{ color: '#0075de' }}>
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-shadow hover:shadow-md"
                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${cat.color}15` }}>
                  <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-semibold" style={{ color: 'rgba(0,0,0,0.85)' }}>{cat.name}</div>
                  <div className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{cat.count} guides</div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'rgba(0,0,0,0.25)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Popular Guides ─── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-10 text-center" style={{ letterSpacing: '-0.025em' }}>Most popular guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularGuides.map((guide) => (
              <div
                key={guide.title}
                className="group p-5 rounded-xl cursor-pointer transition-all hover:shadow-md"
                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="text-3xl mb-3">{guide.emoji}</div>
                <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#0075de] transition-colors" style={{ color: 'rgba(0,0,0,0.85)' }}>
                  {guide.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: '#f2f9ff', color: '#097fe8' }}>
                    {guide.category}
                  </span>
                  <span className="text-xs" style={{ color: 'rgba(0,0,0,0.40)' }}>{guide.time} read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: '#f6f5f4' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-12" style={{ letterSpacing: '-0.025em' }}>How TekSure works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: Search, title: 'Search or browse', desc: 'Type your question or pick a topic from our guide library.' },
              { step: '2', icon: BookOpen, title: 'Follow the steps', desc: 'Each guide walks you through the solution one step at a time.' },
              { step: '3', icon: CheckCircle2, title: 'Problem solved', desc: 'If you get stuck, our team is here to help — for free.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: '#0075de', color: '#fff' }}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.55)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Section ─── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-[36px] font-bold tracking-tight mb-4" style={{ letterSpacing: '-0.025em' }}>Built for people, not tech experts</h2>
          <p className="text-base mb-10" style={{ color: 'rgba(0,0,0,0.50)' }}>
            Every guide is reviewed for clarity by real humans. We explain things the way a patient friend would.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Eye, title: 'Large, readable text', desc: 'Designed for comfortable reading at any age.' },
              { icon: HelpCircle, title: 'No jargon, ever', desc: 'If we use a tech word, we explain it right away.' },
              { icon: Users, title: 'Real human support', desc: 'Get help from a real person when guides are not enough.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                <item.icon className="w-5 h-5 mb-3" style={{ color: '#0075de' }} />
                <h3 className="text-[15px] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.50)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: '#31302e' }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl md:text-[40px] font-bold tracking-tight mb-4 text-white" style={{ letterSpacing: '-0.03em' }}>
            Ready to get started?
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.60)' }}>
            Browse 200+ free guides or talk to our team — no account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/guides" className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-[15px] font-semibold text-[#31302e]" style={{ background: '#ffffff' }}>
              Browse Guides <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/get-help" className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-[15px] font-semibold text-white" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
              Talk to a Person
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded flex items-center justify-center text-white font-bold text-xs" style={{ background: '#0075de' }}>T</div>
                <span className="font-bold">TekSure</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>Free tech help for everyone.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Learn</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.50)' }}>
                <a href="#">Guides</a><a href="#">Tools</a><a href="#">Glossary</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Support</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.50)' }}>
                <a href="#">Get Help</a><a href="#">Quick Fixes</a><a href="#">Scam Alerts</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.50)' }}>
                <a href="#">About</a><a href="#">Blog</a><a href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t text-center text-sm" style={{ borderColor: 'rgba(0,0,0,0.06)', color: 'rgba(0,0,0,0.35)' }}>
            &copy; 2026 TekSure. Free tech help for everyone.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MockupA;
