import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { guides } from '@/data/guides';

/**
 * TekSure landing — warm, senior-friendly homepage.
 * Redesigned to replace the previous dark-mode landing with a cream/amber
 * palette, clear headline, two prominent CTAs, and trust indicators.
 * See DESIGN.md + teksure-next-gen-mockup.html for the design direction.
 */

const Index = () => {
  return (
    <div className="teksure-home">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="TekSure is an American tech support company offering free step-by-step guides, quick fixes, and real human support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={[
          { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://teksure.com/#organization', name: 'TekSure', url: 'https://teksure.com', logo: 'https://teksure.com/og-image.png', description: 'American tech support company offering free step-by-step guides for seniors and beginners.', contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@teksure.com', availableLanguage: 'English' } },
          { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://teksure.com/#website', url: 'https://teksure.com', name: 'TekSure', description: 'American tech support — free guides, tools, and real humans for beginners and seniors.', publisher: { '@id': 'https://teksure.com/#organization' }, potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' } },
        ]}
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Scoped styles for the landing. Warm cream base, navy accent. */}
      <style>{`
        .teksure-home {
          min-height: 100vh;
          color: #1A1A1A;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          font-weight: 500;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .teksure-home *, .teksure-home *::before, .teksure-home *::after {
          box-sizing: border-box;
        }
        .teksure-home :focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px rgba(42,95,204,.35);
          border-radius: 10px;
        }

        /* Skip link for keyboard users */
        .teksure-home .skip-link {
          position: absolute; left: -9999px; top: 16px;
          background: #2A5FCC; color: #fff;
          padding: 12px 18px; border-radius: 10px;
          z-index: 999;
          text-decoration: none; font-weight: 700;
          font-size: 16px;
        }
        .teksure-home .skip-link:focus { left: 16px; }

        /* Top bar */
        .teksure-home .top {
          position: sticky; top: 0; z-index: 30;
          background: rgba(250, 248, 244, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #E4DFD4;
        }
        .teksure-home .top-row {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; gap: 16px;
          padding: 14px 24px;
        }
        .teksure-home .logo-link {
          display: inline-flex; align-items: center;
          text-decoration: none; color: #1A1A1A;
          line-height: 0;
        }
        .teksure-home .logo-link img {
          height: 36px; width: auto; display: block;
        }
        /* Hero brand mark — prominent stacked logo above the headline */
        .teksure-home .hero-logo {
          display: flex; justify-content: center;
          margin: 0 auto 28px;
        }
        .teksure-home .hero-logo img {
          width: 200px; height: auto; display: block;
        }
        .teksure-home .nav-main {
          display: flex; gap: 2px; margin-left: auto;
        }
        .teksure-home .nav-link {
          padding: 10px 16px; border-radius: 10px;
          text-decoration: none; color: #1A1A1A;
          font-weight: 600; font-size: 16px;
          transition: background .15s, color .15s;
        }
        .teksure-home .nav-link:hover { background: #fff; color: #2A5FCC; }
        .teksure-home .nav-search {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid #E4DFD4;
          border-radius: 10px; padding: 9px 14px; min-height: 40px;
          font-weight: 500; font-size: 15px; color: #444;
          cursor: pointer;
          transition: border-color .15s, color .15s;
        }
        .teksure-home .nav-search:hover { border-color: #2A5FCC; color: #1A1A1A; }
        .teksure-home .nav-search kbd {
          font: 12px 'Inter', sans-serif;
          border: 1px solid #E4DFD4;
          border-radius: 4px; padding: 1px 5px;
          color: #6B6B6B; background: #FAF8F4;
        }
        .teksure-home .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          background: #2A5FCC; color: #fff; text-decoration: none;
          font-weight: 700; font-size: 15px;
          padding: 10px 18px; min-height: 40px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(42,95,204,0.28);
          transition: transform .15s, box-shadow .15s, background .15s;
          white-space: nowrap;
        }
        .teksure-home .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(42,95,204,0.4);
          background: #234FB0;
        }

        /* Hero */
        .teksure-home .hero {
          max-width: 1000px; margin: 0 auto;
          padding: 72px 24px 96px;
          text-align: center;
        }
        .teksure-home .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid #E4DFD4;
          border-radius: 999px; padding: 8px 16px;
          font-weight: 600; font-size: 14px; color: #444;
          margin-bottom: 32px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .teksure-home .hero-eyebrow .eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #2E8B57;
          box-shadow: 0 0 0 3px rgba(46,139,87,0.18);
        }

        /* Icon cluster — playfully tilted chips */
        .teksure-home .icon-cluster {
          display: flex; justify-content: center; align-items: center;
          gap: 14px; margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .teksure-home .cluster-chip {
          width: 68px; height: 68px; border-radius: 20px;
          display: grid; place-items: center;
          border: 1px solid #E4DFD4;
          background: #fff;
          box-shadow: 0 2px 0 rgba(0,0,0,0.04), 0 8px 22px rgba(0,0,0,0.06);
          transition: transform .25s ease;
        }
        .teksure-home .cluster-chip svg {
          width: 30px; height: 30px;
          stroke-width: 1.8;
        }
        .teksure-home .cluster-chip.c1 { background: #E6F0FF; color: #1F47A3; transform: rotate(-5deg); }
        .teksure-home .cluster-chip.c2 { background: #FFEFD9; color: #B35A00; transform: translateY(-10px); }
        .teksure-home .cluster-chip.c3 { background: #DFF1E4; color: #1E6A3D; transform: rotate(4deg); }
        .teksure-home .cluster-chip.c4 { background: #FFE4EF; color: #9C2E5E; transform: translateY(-8px) rotate(-3deg); }
        .teksure-home .cluster-chip.c5 { background: #EDE4FF; color: #513C9C; transform: rotate(5deg); }
        .teksure-home .cluster-chip:hover { transform: translateY(-2px) rotate(0deg); }

        /* Headline */
        .teksure-home .hero h1 {
          font-size: clamp(38px, 5.2vw, 60px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #1A1A1A;
          margin: 0 auto 20px;
          max-width: 780px;
          text-wrap: balance;
        }
        .teksure-home .hero h1 .accent { color: #2A5FCC; }

        .teksure-home .hero .subhead {
          font-size: clamp(18px, 1.8vw, 21px);
          line-height: 1.55;
          color: #444;
          max-width: 640px;
          margin: 0 auto 40px;
          font-weight: 500;
        }

        /* CTAs */
        .teksure-home .cta-row {
          display: flex; gap: 16px;
          justify-content: center; flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .teksure-home .btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 10px;
          min-height: 56px; padding: 0 28px;
          border-radius: 14px;
          font-size: 18px; font-weight: 700;
          text-decoration: none;
          transition: transform .15s, box-shadow .15s, background .15s, border-color .15s;
          border: 2px solid transparent;
          cursor: pointer;
          white-space: nowrap;
        }
        .teksure-home .btn svg { flex-shrink: 0; }
        .teksure-home .btn-primary {
          background: #2A5FCC; color: #fff;
          box-shadow: 0 4px 14px rgba(42,95,204,0.3);
        }
        .teksure-home .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(42,95,204,0.42);
          background: #234FB0;
        }
        .teksure-home .btn-secondary {
          background: #fff; color: #2A5FCC;
          border-color: #2A5FCC;
        }
        .teksure-home .btn-secondary:hover {
          transform: translateY(-2px);
          background: #F0F5FF;
          box-shadow: 0 6px 18px rgba(42,95,204,0.18);
        }

        /* Trust indicators */
        .teksure-home .trust-row {
          display: flex; gap: 28px;
          justify-content: center; flex-wrap: wrap;
          color: #333; font-size: 16px; font-weight: 600;
          margin-bottom: 40px;
        }
        .teksure-home .trust-item {
          display: inline-flex; align-items: center; gap: 10px;
        }
        .teksure-home .trust-item svg { flex-shrink: 0; }
        .teksure-home .trust-item.heart  svg { color: #C43333; }
        .teksure-home .trust-item.spark  svg { color: #E87A2B; }
        .teksure-home .trust-item.shield svg { color: #1E6A3D; }

        /* Stat footer */
        .teksure-home .stat-bar {
          color: #6B6B6B; font-size: 15px; font-weight: 500;
          display: inline-flex; gap: 8px; align-items: center;
          justify-content: center; flex-wrap: wrap;
        }
        .teksure-home .stat-bar strong { color: #1A1A1A; font-weight: 700; }
        .teksure-home .stat-dot { opacity: .5; }

        /* Responsive */
        @media (max-width: 900px) {
          .teksure-home .nav-main { display: none; }
          .teksure-home .nav-search { display: none; }
        }
        @media (max-width: 640px) {
          .teksure-home .top-row { padding: 12px 16px; gap: 10px; }
          .teksure-home .hero { padding: 48px 16px 72px; }
          .teksure-home .cta-row { flex-direction: column; align-items: stretch; gap: 12px; }
          .teksure-home .btn { width: 100%; padding: 0 20px; }
          .teksure-home .trust-row { gap: 14px; flex-direction: column; align-items: center; }
          .teksure-home .cluster-chip { width: 56px; height: 56px; border-radius: 16px; }
          .teksure-home .cluster-chip svg { width: 24px; height: 24px; }
          .teksure-home .icon-cluster { gap: 10px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .teksure-home .btn:hover,
          .teksure-home .nav-cta:hover,
          .teksure-home .cluster-chip:hover {
            transform: none;
          }
        }
      `}</style>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/*
        Universal floating glass-bubble navbar.
        Replaces the old flat cream top bar — shared across every page now.
      */}
      <Navbar />

      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <section className="hero" aria-labelledby="hero-heading">
          {/* Prominent brand mark — ~200px wide stacked logo above the headline */}
          <div className="hero-logo">
            <img
              src="/teksure-logo-stacked.svg"
              alt="TekSure"
              width={200}
              height={119}
              fetchPriority="high"
            />
          </div>

          <span className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Free tech help · No signup required
          </span>

          <div className="icon-cluster" aria-hidden="true">
            <div className="cluster-chip c1"><Smartphone /></div>
            <div className="cluster-chip c2"><Wifi /></div>
            <div className="cluster-chip c3"><ShieldCheck /></div>
            <div className="cluster-chip c4"><MessageCircle /></div>
            <div className="cluster-chip c5"><Lightbulb /></div>
          </div>

          <h1 id="hero-heading">
            Technology Help That{' '}
            <span className="accent">Finally Makes Sense</span>
          </h1>

          <p className="subhead">
            Step-by-step guides, friendly tools, and real human answers —
            built for beginners and seniors who want to feel confident with
            their phones, computers, and the internet.
          </p>

          <div className="cta-row">
            <Link to="/guides" className="btn btn-primary">
              <BookOpen size={22} strokeWidth={2.2} aria-hidden="true" />
              Get Started
              <ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
            </Link>
            <Link to="/brain" className="btn btn-secondary">
              <MessageCircle size={22} strokeWidth={2.2} aria-hidden="true" />
              Ask TekBrain
            </Link>
          </div>

          <div className="trust-row" role="list">
            <span className="trust-item heart" role="listitem">
              <Heart size={20} strokeWidth={2.2} fill="currentColor" aria-hidden="true" />
              Trusted by seniors nationwide
            </span>
            <span className="trust-item spark" role="listitem">
              <Sparkles size={20} strokeWidth={2.2} aria-hidden="true" />
              Free forever
            </span>
            <span className="trust-item shield" role="listitem">
              <ShieldCheck size={20} strokeWidth={2.2} aria-hidden="true" />
              No tech jargon
            </span>
          </div>

          <p className="stat-bar">
            <strong>{guides.length.toLocaleString()}+</strong> free guides
            <span className="stat-dot" aria-hidden="true">·</span>
            Real humans
            <span className="stat-dot" aria-hidden="true">·</span>
            Plain English
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
