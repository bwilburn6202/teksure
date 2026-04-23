/**
 * MOCKUP B — "Bold & Inviting" (Airbnb-inspired)
 *
 * Design philosophy: Photography-forward, warm near-black text (#222),
 * generous border-radius (20px+), single coral accent, inviting and tactile.
 *
 * Key traits:
 * - Pure white canvas with warm near-black (#222222) text
 * - Coral/red accent (#ff385c) as the singular brand color
 * - Large rounded cards (20px radius) with 3-layer warm shadows
 * - Photography-forward hero with gradient overlay
 * - Horizontal scrolling category pills
 * - Warm, approachable, magazine-like browsing pace
 */

import { Link } from 'react-router-dom';
import {
  Search, Shield, ArrowRight, Monitor, Lightbulb,
  Sparkles, Bot, BookOpen, Phone, Heart, ChevronRight,
  CheckCircle2, Users, Star, Menu, Play, Lock, Wifi
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const categories = [
  { name: 'All Topics', active: true },
  { name: 'Getting Started', icon: '' },
  { name: 'WiFi & Internet', icon: '' },
  { name: 'Safety & Scams', icon: '' },
  { name: 'Phones & Tablets', icon: '' },
  { name: 'Windows', icon: '' },
  { name: 'Mac & Apple', icon: '' },
  { name: 'AI Tools', icon: '' },
  { name: 'Health Tech', icon: '' },
];

const featuredCards = [
  {
    title: 'How to Spot a Scam Email Before You Click',
    category: 'Safety',
    time: '4 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    title: 'Setting Up WiFi: A Complete Walkthrough',
    category: 'Getting Started',
    time: '5 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
  },
  {
    title: 'Video Calling Your Family Made Simple',
    category: 'Apps',
    time: '6 min read',
    image: 'https://images.unsplash.com/photo-1586953208270-767fc45f7376?w=600&h=400&fit=crop',
  },
  {
    title: 'What is the Cloud? A Friendly Explanation',
    category: 'Getting Started',
    time: '5 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
];

const quickHelp = [
  { icon: Wifi, label: 'WiFi not working', color: '#3b82f6' },
  { icon: Monitor, label: 'Computer is slow', color: '#f59e0b' },
  { icon: Shield, label: 'Got a suspicious message', color: '#ef4444' },
  { icon: Lock, label: 'Forgot my password', color: '#10b981' },
  { icon: Phone, label: 'Phone storage full', color: '#8b5cf6' },
  { icon: Sparkles, label: 'Want to learn something new', color: '#ec4899' },
];

const testimonials = [
  { name: 'Margaret T.', age: 72, text: 'I finally understand what the cloud is! These guides are written for people like me.', stars: 5 },
  { name: 'Robert S.', age: 68, text: 'Fixed my WiFi myself for the first time ever. The step-by-step photos made all the difference.', stars: 5 },
  { name: 'Dorothy L.', age: 75, text: 'I was afraid of getting scammed online. Now I know exactly what to look for.', stars: 5 },
];

const MockupB = () => {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff', color: '#222222', fontFamily: '-apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <SEOHead title="TekSure — Mockup B: Bold & Inviting" description="Airbnb-inspired bold inviting design" path="/mockup-b" />

      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50" style={{ background: '#ffffff', borderBottom: '1px solid #f2f2f2' }}>
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link to="/mockups" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#ff385c' }}>
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold" style={{ color: '#222222' }}>TekSure</span>
          </Link>

          {/* Center search bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="w-full flex items-center gap-2 px-4 py-2.5 rounded-full" style={{ border: '1px solid #dddddd', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
              <Search className="w-4 h-4" style={{ color: '#222222' }} />
              <input type="text" placeholder="Search for help..." className="flex-1 text-sm outline-none bg-transparent" style={{ color: '#222222' }} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-semibold" style={{ color: '#222222' }}>Get Help</a>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ border: '1px solid #dddddd' }}>
              <Menu className="w-4 h-4" />
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#717171', color: '#fff' }}>
                <Users className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] mb-5" style={{ color: '#ffffff', letterSpacing: '-0.02em' }}>
              Tech help that<br />
              <span style={{ color: '#ff385c' }}>anyone</span> can follow
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              200+ free guides with step-by-step instructions, written for real people — not tech experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="h-12 px-6 rounded-lg text-base font-semibold text-white" style={{ background: '#ff385c' }}>
                Browse Free Guides
              </button>
              <button className="h-12 px-6 rounded-lg text-base font-semibold flex items-center justify-center gap-2" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Play className="w-4 h-4" /> Watch How It Works
              </button>
            </div>
          </div>
        </div>
        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #ff385c, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', transform: 'translate(0, 30%)' }} />
      </section>

      {/* ─── Category Pills (horizontal scroll) ─── */}
      <section className="border-b sticky top-[72px] z-40" style={{ background: '#ffffff', borderColor: '#f2f2f2' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex gap-3 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-all"
                style={cat.active
                  ? { background: '#222222', color: '#ffffff' }
                  : { background: '#f7f7f7', color: '#222222', border: '1px solid #ebebeb' }
                }
              >
                {cat.icon && <span>{cat.icon}</span>}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Help Grid ─── */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ letterSpacing: '-0.02em' }}>What do you need help with?</h2>
          <p className="text-base mb-8" style={{ color: '#717171' }}>Pick your problem. We'll guide you through the fix.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickHelp.map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center transition-all hover:shadow-lg"
                style={{ background: '#f7f7f7', border: '1px solid transparent' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${item.color}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <span className="text-sm font-medium leading-tight" style={{ color: '#222222' }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Guides (Airbnb-style cards) ─── */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ letterSpacing: '-0.02em' }}>Popular guides this week</h2>
              <p className="text-base mt-1" style={{ color: '#717171' }}>Guides our readers are finding most helpful right now.</p>
            </div>
            <Link to="/guides" className="hidden md:flex items-center gap-1 text-sm font-semibold underline" style={{ color: '#222222' }}>
              Show all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCards.map((card) => (
              <div key={card.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-3" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: '#ffffff', color: '#222222' }}>
                      {card.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-[15px] font-semibold leading-snug mb-1 group-hover:underline" style={{ color: '#222222' }}>{card.title}</h3>
                <p className="text-sm" style={{ color: '#717171' }}>{card.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Proof / Testimonials ─── */}
      <section className="py-14 md:py-20 px-6" style={{ background: '#f7f7f7' }}>
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ letterSpacing: '-0.02em' }}>Loved by people just like you</h2>
          <p className="text-base text-center mb-10" style={{ color: '#717171' }}>Real reviews from real people who used TekSure to solve their tech problems.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl" style={{ background: '#ffffff', boxShadow: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.06) 0px 4px 8px' }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#ff385c' }} />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#222222' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: '#f7f7f7', color: '#717171' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs" style={{ color: '#717171' }}>Age {t.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ letterSpacing: '-0.02em' }}>Three steps to solving any tech problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Describe your problem', desc: 'Search for your issue or pick from common problems. No tech knowledge needed.', color: '#ff385c' },
              { num: '02', title: 'Follow the guide', desc: 'Step-by-step instructions with screenshots. Go at your own pace.', color: '#222222' },
              { num: '03', title: 'All fixed!', desc: 'Still stuck? A real person can help you — included in our free service.', color: '#222222' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-bold mb-4" style={{ color: step.color, opacity: 0.15 }}>{step.num}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#222222' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#717171' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: '#222222' }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-[44px] font-bold leading-tight mb-4" style={{ color: '#ffffff', letterSpacing: '-0.02em' }}>
            Your tech problems<br />
            have a <span style={{ color: '#ff385c' }}>free</span> solution
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            No sign-up required. No hidden fees. Just clear, step-by-step help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/guides" className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-semibold" style={{ background: '#ff385c', color: '#ffffff' }}>
              Start Browsing Guides <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/get-help" className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-semibold" style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}>
              Talk to Someone
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6" style={{ background: '#f7f7f7', borderTop: '1px solid #ebebeb' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#ff385c' }}>
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-bold" style={{ color: '#222222' }}>TekSure</span>
              </div>
              <p className="text-sm" style={{ color: '#717171' }}>Free tech help for everyone, everywhere.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#222222' }}>Learn</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: '#717171' }}>
                <a href="#" className="hover:underline">Guides</a>
                <a href="#" className="hover:underline">Tools</a>
                <a href="#" className="hover:underline">Glossary</a>
                <a href="#" className="hover:underline">Videos</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#222222' }}>Support</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: '#717171' }}>
                <a href="#" className="hover:underline">Get Help</a>
                <a href="#" className="hover:underline">Quick Fixes</a>
                <a href="#" className="hover:underline">Scam Alerts</a>
                <a href="#" className="hover:underline">Forum</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#222222' }}>Company</h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: '#717171' }}>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Blog</a>
                <a href="#" className="hover:underline">Careers</a>
                <a href="#" className="hover:underline">Contact</a>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-sm" style={{ borderTop: '1px solid #ebebeb', color: '#717171' }}>
            <span>&copy; 2026 TekSure. All rights reserved.</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MockupB;
