import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  DollarSign,
  Gift,
  Heart,
  Lock,
  Mail,
  MessageCircle,
  MessageSquare,
  Share2,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { guides } from '@/data/guides';

/**
 * TekSure — About page.
 *
 * Warm, trust-building page that tells TekSure's story in plain English.
 * Matches the cream/amber palette of the Index.tsx landing, with large,
 * readable type and lots of breathing room. Built to be read aloud by
 * an 80-year-old who has never used a computer.
 */

const guideCount = guides.length;
// Round down to the nearest hundred for a friendlier, less-brittle number.
const guideCountRounded = Math.floor(guideCount / 100) * 100;

const pillars = [
  {
    icon: BookOpen,
    title: 'We’ll never use jargon without explaining it first',
    body:
      'If we have to use a word like “browser,” “router,” or “phishing,” we’ll tell you exactly what it means before we use it. No gatekeeping. No showing off.',
    accent: '#E6F0FF',
    ring: '#2A5FCC',
  },
  {
    icon: ShieldCheck,
    title: 'We’ll never try to sell you something you don’t need',
    body:
      'Our guides are free. We don’t take ads, we don’t get kickbacks for pushing products, and we’ll tell you when the answer is “actually, you don’t need that.”',
    accent: '#FFEFD9',
    ring: '#E87A2B',
  },
  {
    icon: Heart,
    title: 'We’ll always treat you with respect, not like a beginner',
    body:
      'You’re not “bad at tech” — tech is bad at explaining itself. We write for smart adults who just haven’t been handed a clear explanation yet.',
    accent: '#FFE4EF',
    ring: '#C43333',
  },
];

const audience = [
  { icon: Heart, label: 'Seniors who got handed a smartphone and told “good luck”' },
  { icon: Users, label: 'Adult kids and caregivers helping a parent navigate tech from afar' },
  { icon: Sparkles, label: 'New Americans learning English and American tech at the same time' },
  { icon: MessageCircle, label: 'Anyone who’s ever felt dumb asking a tech question — you’re not' },
];

const differences = [
  {
    icon: BookOpen,
    title: `${guideCountRounded.toLocaleString()}+ guides, read-aloud tested`,
    body:
      'Every guide is written to be read aloud by an 80-year-old who’s never used a computer. If a sentence stumbles, we rewrite it.',
  },
  {
    icon: Gift,
    title: 'Free forever, no ads',
    body:
      'No paywall. No “upgrade to premium.” No banner ads following you around. Just free help, like a library.',
  },
  {
    icon: Lock,
    title: 'Privacy-first',
    body:
      'We don’t track you across the web. We don’t sell your data. We don’t build a profile of who you are. Full stop.',
  },
  {
    icon: Sparkles,
    title: 'TekBrain answers only from our verified guides',
    body:
      'Our AI assistant won’t make things up. It answers from our written, reviewed guides — and tells you where every answer came from.',
  },
  {
    icon: Calendar,
    title: 'Book a real human when you need one',
    body:
      'Some things are easier with a person. Background-checked technicians can walk you through anything — over the phone, screen share, or in person.',
  },
];

const trustStats = [
  { value: `${guideCountRounded.toLocaleString()}+`, label: 'Plain-English guides' },
  { value: '99+', label: 'Friendly tools & wizards' },
  { value: '10,000+', label: 'People helped so far' },
];

type InvolvementItem = {
  icon: typeof UserCheck;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
};

const involvement: InvolvementItem[] = [
  {
    icon: UserCheck,
    title: 'Volunteer to help',
    body: 'Patient, kind, and know your way around a computer? Help a neighbor one hour a week.',
    cta: 'Become a volunteer',
    href: '/tech-help-near-me',
  },
  {
    icon: MessageSquare,
    title: 'Contribute a guide',
    body: 'Know how to do something the internet explains badly? Write it up — we’ll edit and publish.',
    cta: 'Suggest a guide',
    href: 'mailto:hello@teksure.com?subject=Guide%20suggestion',
    external: true,
  },
  {
    icon: Share2,
    title: 'Share with a friend',
    body: 'The best thing you can do is send TekSure to someone who’s been stuck. A forwarded link changes lives.',
    cta: 'Visit teksure.com',
    href: 'https://teksure.com',
    external: true,
  },
];

const About = () => {
  return (
    <div className="teksure-about">
      <SEOHead
        title="About TekSure — Tech Support That Finally Speaks Human"
        description="TekSure is free tech help for seniors, caregivers, new Americans, and anyone who finds technology frustrating. No jargon, no ads, no selling your data — just plain-English guides and real human support."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TekSure',
          url: 'https://teksure.com',
          logo: 'https://teksure.com/og-image.png',
          description:
            'Free technology support and guides for everyday people. An American company making tech simple.',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@teksure.com',
            contactType: 'customer service',
          },
          sameAs: [],
          foundingDate: '2025',
          founder: { '@type': 'Person', name: 'Bailey Wilburn' },
        }}
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Scoped styles — matches the cream + amber landing palette. */}
      <style>{`
        .teksure-about {
          min-height: 100vh;
          background:
            radial-gradient(1100px 520px at 50% -10%, #FFE9C7 0%, rgba(255,233,199,0) 60%),
            radial-gradient(800px 400px at 90% 10%, #FFEAD2 0%, rgba(255,234,210,0) 60%),
            #FAF8F4;
          color: #1A1A1A;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          font-weight: 500;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .teksure-about *, .teksure-about *::before, .teksure-about *::after {
          box-sizing: border-box;
        }
        .teksure-about :focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px rgba(42,95,204,.35);
          border-radius: 12px;
        }

        /* Container */
        .teksure-about .wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .teksure-about .wrap-narrow {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO */
        .teksure-about .hero {
          padding: 56px 0 72px;
          text-align: center;
        }
        .teksure-about .hero-logo {
          display: flex; justify-content: center;
          margin: 0 auto 28px;
        }
        .teksure-about .hero-logo img {
          width: 170px; height: auto; display: block;
        }
        .teksure-about .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; border: 1px solid #E4DFD4;
          border-radius: 999px; padding: 8px 18px;
          font-weight: 600; font-size: 15px; color: #444;
          margin-bottom: 28px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .teksure-about .hero-eyebrow .dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: #E87A2B;
          box-shadow: 0 0 0 3px rgba(232,122,43,0.22);
        }
        .teksure-about .hero h1 {
          font-size: clamp(36px, 5.2vw, 58px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 auto 22px;
          max-width: 820px;
          text-wrap: balance;
        }
        .teksure-about .hero h1 .accent { color: #2A5FCC; }
        .teksure-about .hero .lede {
          font-size: clamp(18px, 1.8vw, 22px);
          line-height: 1.6;
          color: #444;
          max-width: 680px;
          margin: 0 auto 36px;
        }

        /* SECTION */
        .teksure-about section {
          padding: 72px 0;
        }
        .teksure-about .section-head {
          text-align: center;
          margin: 0 auto 48px;
          max-width: 760px;
        }
        .teksure-about .eyebrow {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 13px;
          font-weight: 700;
          color: #B35A00;
          margin-bottom: 14px;
        }
        .teksure-about h2 {
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.15;
          margin: 0 0 18px;
          color: #1A1A1A;
          text-wrap: balance;
        }
        .teksure-about .section-lede {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.6;
          color: #444;
        }

        /* Soft divider */
        .teksure-about .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E4DFD4, transparent);
          margin: 0 24px;
          max-width: 1080px;
          margin-left: auto; margin-right: auto;
        }

        /* PILLAR CARDS */
        .teksure-about .pillars {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .teksure-about .pillar {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 22px;
          padding: 36px 30px;
          box-shadow: 0 2px 0 rgba(0,0,0,0.03), 0 12px 30px rgba(0,0,0,0.06);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .teksure-about .pillar:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 0 rgba(0,0,0,0.03), 0 18px 40px rgba(0,0,0,0.09);
        }
        .teksure-about .pillar-icon {
          width: 64px; height: 64px;
          border-radius: 18px;
          display: grid; place-items: center;
          margin-bottom: 22px;
        }
        .teksure-about .pillar-icon svg {
          width: 30px; height: 30px; stroke-width: 2;
        }
        .teksure-about .pillar h3 {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin: 0 0 12px;
          color: #1A1A1A;
        }
        .teksure-about .pillar p {
          font-size: 17px;
          line-height: 1.6;
          color: #444;
          margin: 0;
        }

        /* AUDIENCE */
        .teksure-about .who-box {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 24px;
          padding: 40px 36px;
          box-shadow: 0 2px 0 rgba(0,0,0,0.03), 0 12px 30px rgba(0,0,0,0.05);
        }
        .teksure-about .who-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 32px;
          margin: 0 0 28px;
          padding: 0;
          list-style: none;
        }
        .teksure-about .who-list li {
          display: flex; gap: 14px; align-items: flex-start;
          font-size: 18px; line-height: 1.55;
          color: #1A1A1A;
        }
        .teksure-about .who-list svg {
          flex-shrink: 0; margin-top: 3px;
          color: #2A5FCC;
        }
        .teksure-about .who-not {
          font-size: 17px;
          color: #6B6B6B;
          border-top: 1px dashed #E4DFD4;
          padding-top: 22px;
          margin: 0;
        }
        .teksure-about .who-not strong { color: #1A1A1A; }

        /* STORY */
        .teksure-about .story p {
          font-size: 19px;
          line-height: 1.75;
          color: #2a2a2a;
          margin: 0 0 22px;
        }
        .teksure-about .story p:last-child { margin-bottom: 0; }
        .teksure-about .story-sig {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid #E4DFD4;
          font-size: 17px;
          color: #444;
        }
        .teksure-about .story-sig strong {
          display: block;
          font-weight: 700;
          font-size: 18px;
          color: #1A1A1A;
          margin-bottom: 2px;
        }

        /* DIFFERENCE LIST */
        .teksure-about .diff-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .teksure-about .diff-item {
          display: flex; gap: 16px; align-items: flex-start;
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 18px;
          padding: 24px 24px;
        }
        .teksure-about .diff-item .ic {
          flex-shrink: 0;
          width: 44px; height: 44px; border-radius: 12px;
          display: grid; place-items: center;
          background: #FFEFD9; color: #B35A00;
        }
        .teksure-about .diff-item .ic svg { width: 22px; height: 22px; stroke-width: 2; }
        .teksure-about .diff-item h3 {
          font-size: 18px; font-weight: 700;
          margin: 0 0 6px; color: #1A1A1A;
          letter-spacing: -0.005em;
        }
        .teksure-about .diff-item p {
          font-size: 16px; line-height: 1.55; color: #444; margin: 0;
        }

        /* TRUST NUMBERS */
        .teksure-about .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          background: linear-gradient(180deg, #FFF6E4 0%, #FFFBEF 100%);
          border: 1px solid #F0E4C5;
          border-radius: 24px;
          padding: 44px 32px;
          box-shadow: 0 2px 0 rgba(0,0,0,0.02), 0 18px 40px rgba(184,128,0,0.06);
          text-align: center;
        }
        .teksure-about .stat-num {
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #2A5FCC;
          margin-bottom: 10px;
        }
        .teksure-about .stat-label {
          font-size: 17px; font-weight: 600; color: #444;
        }
        .teksure-about .stats-caption {
          margin-top: 20px;
          text-align: center;
          font-size: 15px; color: #6B6B6B;
        }

        /* TEKBRAIN */
        .teksure-about .brain-card {
          background: linear-gradient(135deg, #EDE4FF 0%, #E6F0FF 100%);
          border: 1px solid #D7CCFA;
          border-radius: 24px;
          padding: 44px 40px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 32px; align-items: center;
        }
        .teksure-about .brain-icon {
          width: 96px; height: 96px; border-radius: 28px;
          display: grid; place-items: center;
          background: #fff;
          color: #513C9C;
          box-shadow: 0 10px 26px rgba(81,60,156,0.18);
        }
        .teksure-about .brain-icon svg { width: 44px; height: 44px; stroke-width: 1.8; }
        .teksure-about .brain-card h2 {
          margin-bottom: 10px;
          color: #2A1E5A;
        }
        .teksure-about .brain-card p {
          font-size: 18px; line-height: 1.6;
          color: #3a2f6a; margin: 0 0 18px;
        }
        .teksure-about .brain-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #2A5FCC; color: #fff;
          padding: 12px 22px; border-radius: 12px;
          font-weight: 700; font-size: 16px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(42,95,204,0.35);
          transition: transform .15s, box-shadow .15s, background .15s;
        }
        .teksure-about .brain-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(42,95,204,0.4);
          background: #234FB0;
        }

        /* FUNDING */
        .teksure-about .funding-box {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 22px;
          padding: 40px 36px;
          display: flex; gap: 24px; align-items: flex-start;
        }
        .teksure-about .funding-icon {
          flex-shrink: 0;
          width: 56px; height: 56px; border-radius: 16px;
          display: grid; place-items: center;
          background: #DFF1E4; color: #1E6A3D;
        }
        .teksure-about .funding-icon svg { width: 28px; height: 28px; stroke-width: 2; }
        .teksure-about .funding-box h3 {
          font-size: 22px; font-weight: 700;
          margin: 0 0 10px; color: #1A1A1A;
        }
        .teksure-about .funding-box p {
          font-size: 17px; line-height: 1.6;
          color: #444; margin: 0 0 14px;
        }
        .teksure-about .funding-box p:last-of-type { margin-bottom: 14px; }
        .teksure-about .funding-box .promise {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 700; color: #1E6A3D;
          background: #DFF1E4; border-radius: 999px;
          padding: 6px 14px; font-size: 15px;
        }

        /* INVOLVE CARDS */
        .teksure-about .involve-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .teksure-about .involve-card {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 22px;
          padding: 32px 28px;
          text-align: center;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .teksure-about .involve-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.07);
        }
        .teksure-about .involve-icon {
          width: 60px; height: 60px; border-radius: 16px;
          margin: 0 auto 20px;
          display: grid; place-items: center;
          background: #FFEFD9; color: #B35A00;
        }
        .teksure-about .involve-icon svg { width: 28px; height: 28px; stroke-width: 2; }
        .teksure-about .involve-card h3 {
          font-size: 20px; font-weight: 700;
          margin: 0 0 10px; color: #1A1A1A;
        }
        .teksure-about .involve-card p {
          font-size: 16px; line-height: 1.55; color: #444;
          margin: 0 0 18px;
        }
        .teksure-about .involve-cta {
          display: inline-flex; align-items: center; gap: 6px;
          color: #2A5FCC; font-weight: 700; font-size: 16px;
          text-decoration: none;
        }
        .teksure-about .involve-cta:hover { text-decoration: underline; }

        /* CONTACT */
        .teksure-about .contact-box {
          background: linear-gradient(180deg, #FFEFD9 0%, #FFF6E4 100%);
          border: 1px solid #F0D7A6;
          border-radius: 24px;
          padding: 48px 36px;
          text-align: center;
        }
        .teksure-about .contact-box h2 { margin-bottom: 12px; }
        .teksure-about .contact-box p {
          font-size: 19px; line-height: 1.55; color: #3a2a10;
          margin: 0 auto 28px; max-width: 560px;
        }
        .teksure-about .contact-row {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
        }
        .teksure-about .c-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 24px; min-height: 56px;
          border-radius: 14px; font-weight: 700; font-size: 17px;
          text-decoration: none;
          border: 2px solid transparent;
          transition: transform .15s, box-shadow .15s, background .15s;
        }
        .teksure-about .c-btn svg { flex-shrink: 0; }
        .teksure-about .c-primary {
          background: #2A5FCC; color: #fff;
          box-shadow: 0 4px 14px rgba(42,95,204,0.3);
        }
        .teksure-about .c-primary:hover {
          background: #234FB0; transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(42,95,204,0.42);
        }
        .teksure-about .c-secondary {
          background: #fff; color: #2A5FCC; border-color: #2A5FCC;
        }
        .teksure-about .c-secondary:hover {
          transform: translateY(-2px);
          background: #F0F5FF;
          box-shadow: 0 6px 18px rgba(42,95,204,0.18);
        }
        .teksure-about .c-tertiary {
          background: #fff; color: #1A1A1A; border-color: #E4DFD4;
        }
        .teksure-about .c-tertiary:hover {
          border-color: #1A1A1A; transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .teksure-about section { padding: 56px 0; }
          .teksure-about .pillars { grid-template-columns: 1fr; }
          .teksure-about .diff-list { grid-template-columns: 1fr; }
          .teksure-about .involve-grid { grid-template-columns: 1fr; }
          .teksure-about .brain-card {
            grid-template-columns: 1fr; text-align: center;
            padding: 36px 28px;
          }
          .teksure-about .brain-icon { margin: 0 auto; }
          .teksure-about .who-list { grid-template-columns: 1fr; }
          .teksure-about .funding-box { flex-direction: column; align-items: flex-start; }
          .teksure-about .stats { grid-template-columns: 1fr; gap: 28px; padding: 36px 24px; }
        }
        @media (max-width: 640px) {
          .teksure-about .wrap, .teksure-about .wrap-narrow { padding: 0 18px; }
          .teksure-about .hero { padding: 40px 0 56px; }
          .teksure-about .who-box, .teksure-about .funding-box { padding: 28px 22px; }
          .teksure-about .pillar { padding: 28px 24px; }
          .teksure-about .contact-row { flex-direction: column; align-items: stretch; }
          .teksure-about .c-btn { width: 100%; justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .teksure-about .pillar:hover,
          .teksure-about .involve-card:hover,
          .teksure-about .c-btn:hover,
          .teksure-about .brain-cta:hover { transform: none; }
        }
      `}</style>

      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" aria-labelledby="about-hero">
          <div className="wrap">
            <div className="hero-logo">
              <img
                src="/teksure-logo-stacked.svg"
                alt="TekSure"
                width={170}
                height={101}
                fetchPriority="high"
              />
            </div>

            <span className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              About TekSure
            </span>

            <h1 id="about-hero">
              Tech support that finally{' '}
              <span className="accent">speaks human</span>
            </h1>

            <p className="lede">
              TekSure is a small American company on a simple mission: make
              technology make sense for the people who’ve been quietly feeling
              left behind. No jargon. No judgment. No selling your data.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* ============ OUR PROMISE ============ */}
        <section aria-labelledby="promise-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our promise</span>
              <h2 id="promise-heading">Three things we’ll never do</h2>
              <p className="section-lede">
                Everything we build is measured against these three rules. If
                we ever break one, you can call us on it.
              </p>
            </div>

            <div className="pillars">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="pillar">
                    <div
                      className="pillar-icon"
                      style={{ background: p.accent, color: p.ring }}
                      aria-hidden="true"
                    >
                      <Icon />
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WHO WE'RE FOR ============ */}
        <section aria-labelledby="who-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Who we’re for</span>
              <h2 id="who-heading">Built for people, not power users</h2>
              <p className="section-lede">
                We wrote TekSure for the folks tech companies forget about.
              </p>
            </div>

            <div className="who-box">
              <ul className="who-list">
                {audience.map((a) => {
                  const Icon = a.icon;
                  return (
                    <li key={a.label}>
                      <Icon size={22} strokeWidth={2} aria-hidden="true" />
                      <span>{a.label}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="who-not">
                <strong>Who we’re not for:</strong> software engineers, IT
                professionals, or folks debugging enterprise networks. Our
                guides will feel obvious to you — and that’s the point. If
                that’s you, please send us to your mom. (We mean it.)
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WHY WE STARTED ============ */}
        <section aria-labelledby="story-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Why we started TekSure</span>
              <h2 id="story-heading">
                Nobody should feel stupid asking for help
              </h2>
            </div>

            <div className="story">
              <p>
                TekSure started the way a lot of family tech-support does — a
                phone call. A grandparent asking how to join a video call. A
                parent wondering if the email in their inbox is a scam. An aunt
                afraid to press a button in case she broke something expensive.
              </p>
              <p>
                Every time, the hardest part wasn’t the tech — it was watching
                a smart, capable person apologize for not knowing something no
                one had ever actually explained to them. That apology is
                everywhere. It shouldn’t be.
              </p>
              <p>
                So we started writing things down. One guide became ten. Ten
                became a hundred. We kept a single rule the whole time: if an
                80-year-old who’s never used a computer can’t read it aloud and
                follow along, it isn’t done yet.
              </p>
              <p>
                Our vision is a web where nobody has to apologize for asking a
                tech question. Where “I don’t know how this works” is met with
                a clear answer, not a sigh. Where help is free, kind, and
                actually helpful. We’re not there yet — but every guide, tool,
                and human on this site is a step toward it.
              </p>
              <p className="story-sig">
                <strong>Bailey Wilburn</strong>
                Founder, TekSure
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WHAT MAKES US DIFFERENT ============ */}
        <section aria-labelledby="diff-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What makes us different</span>
              <h2 id="diff-heading">
                A few things you won’t find anywhere else
              </h2>
            </div>

            <ul className="diff-list">
              {differences.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.title} className="diff-item">
                    <div className="ic" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <h3>{d.title}</h3>
                      <p>{d.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="divider" />

        {/* ============ TRUST NUMBERS ============ */}
        <section aria-labelledby="stats-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">By the numbers</span>
              <h2 id="stats-heading">Small team, big library</h2>
            </div>

            <div className="stats" role="list">
              {trustStats.map((s) => (
                <div key={s.label} role="listitem">
                  <div className="stat-num">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="stats-caption">
              Numbers grow every week. The work of helping people never stops.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* ============ MEET TEKBRAIN ============ */}
        <section aria-labelledby="brain-heading">
          <div className="wrap">
            <div className="brain-card">
              <div className="brain-icon" aria-hidden="true">
                <Sparkles />
              </div>
              <div>
                <span className="eyebrow" style={{ color: '#513C9C' }}>
                  Meet TekBrain
                </span>
                <h2 id="brain-heading">Your patient, plain-English helper</h2>
                <p>
                  TekBrain is a friendly AI assistant that can answer your
                  tech questions any time of day. Here’s the important part:
                  TekBrain only answers from our verified, human-reviewed
                  guides — so it can’t make things up, invent fake steps, or
                  wander off into strange corners of the internet. When it
                  replies, it shows you exactly which guide the answer came
                  from.
                </p>
                <p>
                  No scary robot. No surveillance. Just a calm, patient second
                  opinion — available whenever you need one.
                </p>
                <Link to="/brain" className="brain-cta">
                  <MessageCircle size={20} aria-hidden="true" />
                  Ask TekBrain a question
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ HOW WE'RE FUNDED ============ */}
        <section aria-labelledby="fund-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">How we’re funded</span>
              <h2 id="fund-heading">Free forever, with nothing hidden</h2>
            </div>

            <div className="funding-box">
              <div className="funding-icon" aria-hidden="true">
                <DollarSign />
              </div>
              <div>
                <h3>Where the money actually comes from</h3>
                <p>
                  TekSure is <strong>free forever</strong> — no subscriptions,
                  no paywalls, no ads. When you book a real human technician,
                  we take a small share to keep the lights on. That’s it. No
                  data sales, no tracking deals, no mystery sponsors.
                </p>
                <p>
                  If we can’t explain how we make money in one sentence, we
                  won’t make money that way.
                </p>
                <span className="promise">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  We never sell your data
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ GET INVOLVED ============ */}
        <section aria-labelledby="involve-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Get involved</span>
              <h2 id="involve-heading">Help us help more people</h2>
              <p className="section-lede">
                TekSure gets better when neighbors show up for neighbors.
                Here are three ways to pitch in.
              </p>
            </div>

            <div className="involve-grid">
              {involvement.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="involve-card">
                    <div className="involve-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    {item.external ? (
                      <a
                        href={item.href}
                        className="involve-cta"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link to={item.href} className="involve-cta">
                        {item.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ CONTACT ============ */}
        <section aria-labelledby="contact-heading">
          <div className="wrap-narrow">
            <div className="contact-box">
              <span className="eyebrow">Contact</span>
              <h2 id="contact-heading">Come say hi</h2>
              <p>
                Got a question, a guide idea, or a story about a family member
                we could help? We read every email — a real human writes back.
              </p>
              <div className="contact-row">
                <a href="mailto:hello@teksure.com" className="c-btn c-primary">
                  <Mail size={20} aria-hidden="true" />
                  Email hello@teksure.com
                </a>
                <Link to="/get-help" className="c-btn c-secondary">
                  <Calendar size={20} aria-hidden="true" />
                  Book a session
                </Link>
                <Link to="/forum" className="c-btn c-tertiary">
                  <Users size={20} aria-hidden="true" />
                  Community forum
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
