/**
 * MOCKUP C — "Premium & Polished" (Stripe-inspired)
 *
 * Design philosophy: Sophisticated, high-trust, elegant light typography.
 * Deep navy headings, purple accent, blue-tinted shadows, weight-300 elegance.
 *
 * Key traits:
 * - Deep navy (#061b31) headings, not black
 * - Purple (#533afd) as the primary accent
 * - Blue-tinted shadows (rgba(50,50,93,0.25))
 * - Light font weight (300) for headings — whisper authority
 * - Conservative radius (4-8px) — nothing pill-shaped
 * - Alternating white / dark indigo sections
 * - Financial-grade trust and precision
 */

import { Link } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Heart, ChevronRight,
  CheckCircle2, Users, Star, Zap, Lock, Eye,
  ArrowUpRight, Layers, Clock, Award
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const features = [
  { icon: BookOpen, title: '200+ Free Guides', desc: 'Step-by-step instructions written in plain English. Every guide is reviewed for clarity.', color: '#533afd' },
  { icon: Shield, title: 'Scam Protection', desc: 'Learn to identify scams, phishing emails, and suspicious messages before they cause harm.', color: '#ea2261' },
  { icon: Layers, title: '30+ Interactive Tools', desc: 'Password checkers, WiFi testers, device comparisons, and more — all free to use.', color: '#533afd' },
  { icon: Users, title: 'Real Human Support', desc: 'When guides are not enough, talk to a real person who can walk you through it.', color: '#ea2261' },
];

const guides = [
  { title: 'Recognizing Scam Emails', category: 'Safety', difficulty: 'Beginner', time: '4 min', icon: Shield },
  { title: 'Connecting to WiFi', category: 'Essentials', difficulty: 'Beginner', time: '5 min', icon: Monitor },
  { title: 'Making Text Bigger', category: 'Accessibility', difficulty: 'Beginner', time: '3 min', icon: Eye },
  { title: 'Understanding the Cloud', category: 'Concepts', difficulty: 'Beginner', time: '6 min', icon: Layers },
  { title: 'Setting Up Two-Factor', category: 'Security', difficulty: 'Intermediate', time: '7 min', icon: Lock },
  { title: 'Using AI Assistants', category: 'AI', difficulty: 'Intermediate', time: '8 min', icon: Bot },
];

const metrics = [
  { value: '200+', label: 'Guides', sublabel: 'and growing weekly' },
  { value: '10k+', label: 'People helped', sublabel: 'across all 50 states' },
  { value: '4.9', label: 'Average rating', sublabel: 'out of 5 stars' },
  { value: '<2hr', label: 'Response time', sublabel: 'for support requests' },
];

const MockupC = () => {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff', fontFamily: 'Inter, -apple-system, system-ui, "Segoe UI", sans-serif' }}>
      <SEOHead title="TekSure — Mockup C: Premium & Polished" description="Stripe-inspired premium polished design" path="/mockup-c" />

      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #e5edf5' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/mockups" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #533afd, #7c5cff)' }}>
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-semibold" style={{ color: '#061b31', letterSpacing: '-0.02em' }}>TekSure</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm" style={{ color: '#64748d' }}>Guides</a>
              <a href="#" className="text-sm" style={{ color: '#64748d' }}>Tools</a>
              <a href="#" className="text-sm" style={{ color: '#64748d' }}>Get Help</a>
              <a href="#" className="text-sm" style={{ color: '#64748d' }}>About</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm px-3 py-1.5 rounded" style={{ color: '#533afd' }}>Sign in</button>
            <button className="text-sm px-4 py-2 rounded font-medium text-white" style={{ background: '#533afd' }}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded mb-6 text-xs font-medium" style={{ background: 'rgba(83,58,253,0.08)', color: '#533afd', border: '1px solid rgba(83,58,253,0.15)' }}>
              <Zap className="w-3 h-3" /> Free for everyone — no account needed
            </div>
            <h1 className="text-[40px] md:text-[60px] leading-[1.05] mb-6" style={{ color: '#061b31', fontWeight: 300, letterSpacing: '-0.03em' }}>
              Technology help<br />
              designed for <span style={{ color: '#533afd', fontWeight: 400 }}>clarity</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-[560px]" style={{ color: '#64748d', fontWeight: 300 }}>
              Step-by-step guides and tools that make technology approachable. Written in plain English for people who want answers, not jargon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="h-11 px-5 rounded text-sm font-medium text-white flex items-center gap-2" style={{ background: '#533afd' }}>
                Browse Guides <ArrowRight className="w-4 h-4" />
              </button>
              <button className="h-11 px-5 rounded text-sm font-medium flex items-center gap-2" style={{ color: '#533afd', border: '1px solid rgba(83,58,253,0.3)' }}>
                Talk to a Person <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Bar ─── */}
      <section className="py-12 px-6" style={{ background: '#f8fafc', borderTop: '1px solid #e5edf5', borderBottom: '1px solid #e5edf5' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl md:text-4xl mb-1" style={{ color: '#061b31', fontWeight: 300, letterSpacing: '-0.03em' }}>{m.value}</div>
              <div className="text-sm font-medium" style={{ color: '#061b31' }}>{m.label}</div>
              <div className="text-xs mt-0.5" style={{ color: '#64748d' }}>{m.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[560px] mb-12">
            <h2 className="text-[32px] md:text-[40px] leading-tight mb-4" style={{ color: '#061b31', fontWeight: 300, letterSpacing: '-0.025em' }}>
              Everything you need,<br />nothing you don't
            </h2>
            <p className="text-base" style={{ color: '#64748d', fontWeight: 300 }}>
              TekSure gives you the tools and knowledge to handle technology with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-lg transition-shadow"
                style={{ border: '1px solid #e5edf5', boxShadow: 'rgba(50,50,93,0.04) 0px 2px 5px, rgba(0,0,0,0.03) 0px 1px 2px' }}
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4" style={{ background: `${f.color}10` }}>
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: '#061b31', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748d', fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Guide Cards ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: '#f8fafc', borderTop: '1px solid #e5edf5' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-[32px] md:text-[40px] leading-tight mb-2" style={{ color: '#061b31', fontWeight: 300, letterSpacing: '-0.025em' }}>
                Popular guides
              </h2>
              <p className="text-base" style={{ color: '#64748d', fontWeight: 300 }}>Start with what matters most.</p>
            </div>
            <Link to="/guides" className="hidden md:flex items-center gap-1 text-sm font-medium" style={{ color: '#533afd' }}>
              View all guides <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g) => (
              <div
                key={g.title}
                className="group p-5 rounded-lg cursor-pointer transition-all hover:translate-y-[-2px]"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5edf5',
                  boxShadow: 'rgba(50,50,93,0.04) 0px 2px 5px, rgba(0,0,0,0.03) 0px 1px 2px',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: '#533afd10' }}>
                    <g.icon className="w-5 h-5" style={{ color: '#533afd' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium mb-2 group-hover:text-[#533afd] transition-colors" style={{ color: '#061b31' }}>
                      {g.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: '#533afd10', color: '#533afd' }}>{g.difficulty}</span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#64748d' }}>
                        <Clock className="w-3 h-3" /> {g.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works (Dark Section) ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #0d253d 100%)' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] leading-tight mb-4" style={{ color: '#ffffff', fontWeight: 300, letterSpacing: '-0.025em' }}>
            How TekSure works
          </h2>
          <p className="text-base mb-14" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
            Three straightforward steps to solving any tech problem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: 'Search or browse', desc: 'Type your question or pick from our topic library. No tech knowledge required.' },
              { icon: BookOpen, title: 'Follow along', desc: 'Each guide breaks the solution into numbered steps with clear explanations.' },
              { icon: CheckCircle2, title: 'Problem solved', desc: 'Still stuck? Talk to a real person who can help — included at no cost.' },
            ].map((step, i) => (
              <div key={step.title}>
                <div className="w-12 h-12 rounded-md flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(83,58,253,0.15)', border: '1px solid rgba(83,58,253,0.25)' }}>
                  <step.icon className="w-5 h-5" style={{ color: '#a78bfa' }} />
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: '#ffffff' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)', fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Section ─── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded mb-6 text-xs font-medium" style={{ background: 'rgba(234,34,97,0.08)', color: '#ea2261' }}>
            <Award className="w-3 h-3" /> Trusted by thousands
          </div>
          <h2 className="text-[32px] md:text-[40px] leading-tight mb-4" style={{ color: '#061b31', fontWeight: 300, letterSpacing: '-0.025em' }}>
            Built for people who prefer clarity over complexity
          </h2>
          <p className="text-base mb-10 max-w-[500px] mx-auto" style={{ color: '#64748d', fontWeight: 300 }}>
            Every guide is reviewed by real people for readability. We explain things the way a patient friend would.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Eye, title: 'Large, readable text', desc: 'Designed for comfortable reading at any age or ability.' },
              { icon: BookOpen, title: 'Plain English only', desc: 'If we use a tech word, we explain it immediately.' },
              { icon: Users, title: 'Human support', desc: 'Real people available when guides are not enough.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg text-left" style={{ border: '1px solid #e5edf5' }}>
                <item.icon className="w-5 h-5 mb-3" style={{ color: '#533afd' }} />
                <h3 className="text-sm font-medium mb-1" style={{ color: '#061b31' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#64748d', fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: '#061b31' }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[44px] leading-tight mb-4" style={{ color: '#ffffff', fontWeight: 300, letterSpacing: '-0.03em' }}>
            Start learning today
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.50)', fontWeight: 300 }}>
            No account needed. No fees. Just open a guide and follow along.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/guides" className="inline-flex items-center justify-center h-11 px-6 rounded text-sm font-medium text-white" style={{ background: '#533afd' }}>
              Browse Guides <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/get-help" className="inline-flex items-center justify-center h-11 px-6 rounded text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid #e5edf5' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #533afd, #7c5cff)' }}>
                  <span className="text-white font-bold text-xs">T</span>
                </div>
                <span className="font-semibold text-sm" style={{ color: '#061b31' }}>TekSure</span>
              </div>
              <p className="text-sm" style={{ color: '#64748d' }}>Free tech help for everyone.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#273951' }}>Learn</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: '#64748d' }}>
                <a href="#">Guides</a><a href="#">Tools</a><a href="#">Glossary</a><a href="#">Videos</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#273951' }}>Support</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: '#64748d' }}>
                <a href="#">Get Help</a><a href="#">Quick Fixes</a><a href="#">Scam Alerts</a><a href="#">Forum</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#273951' }}>Company</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: '#64748d' }}>
                <a href="#">About</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-sm" style={{ borderTop: '1px solid #e5edf5', color: '#64748d' }}>
            <span>&copy; 2026 TekSure, Inc.</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MockupC;
