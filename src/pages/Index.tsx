import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUp, Search } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { StarfieldBackground } from '@/components/StarfieldBackground';
import { guides } from '@/data/guides';

/**
 * TekSure landing — Landing Page v2 (dark, sleek, animated starfield).
 * Pixel-ported from teksure-design-system/project/Landing Page v2.html.
 */

const suggestions = [
  { label: 'Get real human help', to: '/get-help' },
  { label: 'Find the right guide', to: '/find-a-guide' },
  { label: 'Ask TekBot', to: '/brain' },
  { label: 'Browse tools', to: '/tools' },
  { label: 'More', to: '/guides' },
];

const navLinks = [
  { label: 'Guides', to: '/guides' },
  { label: 'Tools', to: '/tools' },
  { label: 'Safety', to: '/scam-defense' },
  { label: 'Get Help', to: '/get-help' },
  { label: 'Resources', to: '/quick-fixes' },
];

const openSearchModal = () => {
  document.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
  );
};

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = prompt.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div className="landing-v2">
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Pixel-ported styles scoped under .landing-v2. */}
      <style>{`
        .landing-v2 {
          position: fixed; inset: 0;
          height: 100vh; overflow: hidden;
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          background: #050D1F;
          color: #fff;
          user-select: none;
        }
        .landing-v2 *, .landing-v2 *::before, .landing-v2 *::after {
          box-sizing: border-box;
        }
        .landing-v2 .page {
          position: relative; z-index: 1;
          height: 100vh; display: flex; flex-direction: column; align-items: center;
        }

        /* Navbar */
        .landing-v2 .nav {
          margin-top: 24px;
          display: flex; align-items: center; gap: 0;
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 9999px;
          padding: 6px 8px 6px 12px;
          height: 52px;
        }
        .landing-v2 .nav-logo { height: 26px; width: auto; margin-right: 20px; flex-shrink: 0; }
        .landing-v2 .nav-links { display: flex; gap: 2px; align-items: center; margin-right: 6px; }
        .landing-v2 .nav-link {
          background: transparent; border: 0; cursor: pointer;
          font: 500 14px/1 'Inter', sans-serif;
          color: rgba(255,255,255,.80);
          padding: 0 14px; height: 38px;
          border-radius: 9999px; white-space: nowrap;
          text-decoration: none;
          transition: background .15s, color .15s;
          display: inline-flex; align-items: center;
        }
        .landing-v2 .nav-link:hover { background: rgba(255,255,255,.12); color: #fff; }
        .landing-v2 .nav-divider { width: 1px; height: 20px; background: rgba(255,255,255,.15); margin: 0 4px; }
        .landing-v2 .nav-search {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12);
          border-radius: 9999px; padding: 0 12px; height: 36px;
          font: 500 13px 'Inter'; color: rgba(255,255,255,.55); cursor: pointer;
          margin-left: 6px; margin-right: 6px;
        }
        .landing-v2 .nav-search:hover { background: rgba(255,255,255,.12); color: rgba(255,255,255,.85); }
        .landing-v2 .nav-search kbd {
          font: 11px 'Inter'; border: 1px solid rgba(255,255,255,.2);
          border-radius: 4px; padding: 1px 5px; color: rgba(255,255,255,.4);
        }
        .landing-v2 .btn-cta {
          background: #1D5FE8; color: #fff; border: 0;
          font: 600 14px 'Inter'; padding: 0 20px; height: 38px;
          border-radius: 9999px; cursor: pointer;
          box-shadow: 0 4px 16px rgba(29,95,232,.45);
          transition: transform .15s, box-shadow .15s;
          white-space: nowrap; margin-left: 8px;
          text-decoration: none; display: inline-flex; align-items: center;
        }
        .landing-v2 .btn-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(29,95,232,.6); }

        /* Hero */
        .landing-v2 .hero {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 0 20px 40px; text-align: center;
        }
        .landing-v2 .hero-logo-wrap {
          position: relative; margin-bottom: 36px;
          display: flex; align-items: center; justify-content: center;
        }
        .landing-v2 .hero-logo-wrap::before {
          content: '';
          position: absolute;
          width: 480px; height: 200px;
          background: radial-gradient(ellipse at center,
            rgba(29,95,232,.12) 0%,
            rgba(29,95,232,.04) 50%,
            transparent 75%);
          filter: blur(24px);
          z-index: -1;
          animation: landingV2PulseGlow 4s ease-in-out infinite;
        }
        @keyframes landingV2PulseGlow {
          0%,100% { opacity: .8; transform: scale(1); }
          50%     { opacity: 1;  transform: scale(1.06); }
        }
        .landing-v2 .hero-logo { height: 80px; width: auto; }

        .landing-v2 h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.07;
          color: #fff;
          margin-bottom: 40px;
          max-width: 680px;
          text-wrap: pretty;
        }

        /* Search */
        .landing-v2 .search-wrap { width: 100%; max-width: 640px; position: relative; margin-bottom: 20px; }
        .landing-v2 .search-box {
          width: 100%;
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 20px;
          padding: 20px 60px 20px 22px;
          font: 400 17px/1.5 'Inter';
          color: #fff;
          resize: none; outline: none;
          transition: border-color .2s, box-shadow .2s;
          display: block; overflow: hidden;
        }
        .landing-v2 .search-box::placeholder { color: rgba(255,255,255,.40); }
        .landing-v2 .search-box:focus {
          border-color: rgba(29,95,232,.6);
          box-shadow: 0 0 0 3px rgba(29,95,232,.18), 0 8px 32px rgba(0,0,0,.35);
        }
        .landing-v2 .search-submit {
          position: absolute; right: 12px; bottom: 12px;
          width: 38px; height: 38px; border-radius: 9999px;
          background: rgba(255,255,255,.85); color: #050D1F; border: 0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 16px;
          transition: background .15s, opacity .15s;
        }
        .landing-v2 .search-submit:disabled { opacity: .35; cursor: default; }
        .landing-v2 .search-submit:not(:disabled):hover { background: #fff; }

        /* Chips */
        .landing-v2 .chips {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 8px; margin-bottom: 24px; max-width: 640px;
        }
        .landing-v2 .chip {
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 9999px;
          padding: 0 16px; height: 38px;
          font: 500 13px 'Inter'; color: rgba(255,255,255,.80);
          cursor: pointer; white-space: nowrap;
          display: inline-flex; align-items: center;
          transition: background .15s, border-color .15s, color .15s;
        }
        .landing-v2 .chip:hover {
          background: rgba(255,255,255,.14);
          border-color: rgba(255,255,255,.28);
          color: #fff;
        }

        /* Stat bar */
        .landing-v2 .stat-bar {
          font: 400 12px 'Inter'; color: rgba(255,255,255,.45);
          display: flex; gap: 6px; align-items: center;
        }
        .landing-v2 .stat-bar strong { color: rgba(255,255,255,.80); font-weight: 600; }
        .landing-v2 .stat-dot { opacity: .4; }

        /* Hide secondary nav + CTA on narrow screens so the pill doesn't overflow */
        @media (max-width: 760px) {
          .landing-v2 .nav-links { display: none; }
          .landing-v2 .nav-divider { display: none; }
          .landing-v2 .btn-cta { padding: 0 14px; }
        }
        @media (max-width: 480px) {
          .landing-v2 .nav-search { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .landing-v2 .hero-logo-wrap::before { animation: none; }
        }
      `}</style>

      <StarfieldBackground />

      <div className="page">
        {/* Navbar */}
        <nav className="nav" aria-label="Primary">
          <Link to="/" aria-label="TekSure home" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <NavLogo />
          </Link>

          <div className="nav-links">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="nav-link">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-divider" />

          <button type="button" className="nav-search" onClick={openSearchModal} aria-label="Open search">
            <Search size={14} strokeWidth={2} />
            Search
            <kbd>⌘K</kbd>
          </button>

          <Link to="/signup" className="btn-cta">Get Started</Link>
        </nav>

        {/* Hero */}
        <main id="main-content" tabIndex={-1} className="hero" style={{ outline: 'none' }}>
          <h1 className="sr-only" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
            TekSure — American Tech Support Company
          </h1>

          <div className="hero-logo-wrap">
            <HeroLogo />
          </div>

          <h1>
            Tech help that speaks<br />your language.
          </h1>

          <form onSubmit={handleSubmit} className="search-wrap">
            <label htmlFor="landing-prompt" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
              What do you need help with?
            </label>
            <textarea
              id="landing-prompt"
              className="search-box"
              rows={1}
              placeholder="What do you need help with?"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                const t = e.currentTarget;
                t.style.height = 'auto';
                t.style.height = Math.min(t.scrollHeight, 140) + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent);
                }
              }}
            />
            <button
              type="submit"
              className="search-submit"
              aria-label="Search TekSure"
              disabled={!prompt.trim()}
            >
              <ArrowUp size={16} strokeWidth={2.5} />
            </button>
          </form>

          <div className="chips">
            {suggestions.map((s) => (
              <button key={s.to} className="chip" onClick={() => navigate(s.to)}>
                {s.label}
              </button>
            ))}
          </div>

          <p className="stat-bar">
            <strong>{guides.length.toLocaleString()}+</strong> free guides
            <span className="stat-dot">·</span>
            Real humans
            <span className="stat-dot">·</span>
            Plain English
          </p>
        </main>
      </div>
    </div>
  );
};

export default Index;

// ── Inline SVG logos (kept at file bottom to declutter the component body) ──

function NavLogo() {
  return (
    <svg className="nav-logo" viewBox="0 0 1153.9 252.4" xmlns="http://www.w3.org/2000/svg" fill="none">
      <defs>
        <filter id="shield-glow-nav">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#shield-glow-nav)">
        <path fill="#4B8EF8" d="M87.2,179.5c2.5,1.3,4.2,3.1,5.3,5.5l0,0c1.2,2.6,4.5,3.2,6.5,1.2l2.9-2.9c5.4-5.4,5.2-14-0.2-19.4c0,0-0.1-0.1-0.1-0.1c-10.9-11.2-21.4-22.8-32-34.3c-4.6-4.9-9.5-9.6-13.5-15c-2.3-3.2-4.6-7.8-4.2-11.5c1.1-10,12.6-13.5,20.7-6.7c10.4,8.7,20.8,17.6,31.2,26.5c8.1,7,12.4,6.9,20.1-0.6c16.3-15.8,65.6-65.7,94.2-94.1c-25.8-8.4-51.7-16.8-77.6-25.1C134.6,1,128.8,0,123.1,0c-5.8,0-11.5,1-17.3,2.9C73.7,13.2,41.8,23.6,9.8,34C4.3,35.8,1,39.6,0.6,45.3c-2.5,38.5,2.2,76,18.3,111.4c8.2,18.1,18.6,34,31.1,47.7c8.7-8.7,15.8-15.7,19.9-19.6c1.3-1.3,2.8-2.4,4.3-3.4C78.2,179,82.5,177.1,87.2,179.5z" />
        <path fill="#4B8EF8" d="M245.5,45.3c-0.2-2.4-0.8-4.4-2-6.2c-27.9,29.7-83.8,88.3-102,107.8c-5,5.4-10,10.8-15,16.2c-1,1.1-2.1,2.1-3.2,3c0,0-32.2,32.6-32.5,33c-0.7,1-1.5,2-2.4,2.9c-4.5,4.8-11.2,12-19.3,20.6c6.7,5.5,13.9,10.6,21.5,15.3c27.5-27.3,81.7-82.2,99-98.9c1.9-1.8,3.8-3.6,6-5c4-2.5,8.3-4.3,12.9-1.9c2.5,1.3,4.2,3.1,5.3,5.5c2.1,4.6,1.4,10-1.6,14.1c-0.7,1-1.5,2-2.4,2.9c-16.1,17.5-62.2,65.8-91.8,97.1c1.7,0.4,3.4,0.7,5.1,0.7c3.4-0.1,6.8-0.9,10.2-2.5c42.5-19.8,74.5-50.2,94-93.2C243.3,121.3,248,83.8,245.5,45.3z" />
        <path fill="#4B8EF8" d="M631.2,88.8h40L630,138.9c-3.2,3.5-4.7,6.2-4.7,8.1c0,1.7,1.5,4.4,4.4,7.9l45.3,58.8h-40l-32.4-43.5c-6.4-7.9-9.6-16-9.6-24.2c0-8.1,2.5-13.1,9.6-22L631.2,88.8z" />
      </g>
      <path fill="rgba(255,255,255,.95)" d="M294,82.6V51.8h120.7v30.9H371v129.6h-33.3V82.6H294z" />
      <path fill="rgba(255,255,255,.95)" d="M525.3,160.8h-76.5v5.2c0,14.8,7.2,20.7,24.2,20.7c19,0,24.4-4.4,24.4-14.1H528c0,26.7-14.3,42.5-55,42.5c-38.5,0-56.5-16.3-56.5-54.1v-19.7c0-37,19.2-55.5,57.5-55.5c36,0,54.1,17.5,54.1,52.8C528,147.3,527,154.7,525.3,160.8z M448.8,134.7h48.6V132c0-12.1-8.1-18.3-24.4-18.3c-16,0-24.2,6.2-24.2,18.3V134.7z" />
      <path fill="rgba(255,255,255,.95)" d="M552.5,212.2V39.4h32.1v172.8H552.5z" />
      <path fill="rgba(255,255,255,.95)" d="M716.6,163.6c0,17.5,6.9,22.7,28.4,22.7c18,0,24.4-3.7,24.4-15.3c0-3.5-1.2-6.4-3.9-8.6c-2.7-2.2-8.9-6.2-18.3-11.6l-31.6-18.5c-18.5-10.9-27.4-23-27.4-41.5c0-27.6,17.3-41.5,57.5-41.5c40.2,0,55,15.3,55,49.9h-31.6c0-15.1-6.9-21-23.4-21c-16.8,0-23.4,3.5-23.4,13.6c0,5.7,3.2,7.7,16,15.3l32.8,19.2c14.8,8.9,22.5,14.6,28.1,25.4c2.7,5.7,4.2,12.1,4.2,19.3c0,28.9-17.3,44.2-58.5,44.2c-40,0-60-17.3-60-51.6H716.6z" />
      <path fill="rgba(255,255,255,.95)" d="M856.5,88.8v76.5c0,13.8,4.7,19.5,24.2,19.5c19,0,23.7-5.7,23.7-19.5V88.8h32.1v76.5c0,33.6-17.3,49.9-55.8,49.9c-37.3,0-56.3-17.3-56.3-49.9V88.8H856.5z" />
      <path fill="rgba(255,255,255,.95)" d="M993,212.2h-32.3v-81.4c0-29.4,17.8-44.9,51.3-44.9c5.2,0,10.4,0.7,15.3,2v30.4c-4.7-1.2-9.6-2-15.3-2c-15.1,0-19,4.9-19,17V212.2z" />
      <path fill="rgba(255,255,255,.95)" d="M1151.2,160.8h-76.5v5.2c0,14.8,7.2,20.7,24.2,20.7c19,0,24.4-4.4,24.4-14.1h30.6c0,26.7-14.3,42.5-55,42.5c-38.5,0-56.5-16.3-56.5-54.1v-19.7c0-37,19.3-55.5,57.5-55.5c36,0,54.1,17.5,54.1,52.8C1153.9,147.3,1153,154.7,1151.2,160.8z M1074.7,134.7h48.6V132c0-12.1-8.1-18.3-24.4-18.3c-16,0-24.2,6.2-24.2,18.3V134.7z" />
    </svg>
  );
}

function HeroLogo() {
  return (
    <svg className="hero-logo" viewBox="0 0 1153.9 252.4" xmlns="http://www.w3.org/2000/svg" fill="none">
      <defs>
        <filter id="shield-glow-hero" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shield-glow-hero2" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.18  0 0 0 0 0.55  0 0 0 0 0.98  0 0 0 0.10 0" result="colorBlur" />
          <feMerge>
            <feMergeNode in="colorBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#shield-glow-hero2)">
        <path fill="#3B82F6" d="M87.2,179.5c2.5,1.3,4.2,3.1,5.3,5.5l0,0c1.2,2.6,4.5,3.2,6.5,1.2l2.9-2.9c5.4-5.4,5.2-14-0.2-19.4c0,0-0.1-0.1-0.1-0.1c-10.9-11.2-21.4-22.8-32-34.3c-4.6-4.9-9.5-9.6-13.5-15c-2.3-3.2-4.6-7.8-4.2-11.5c1.1-10,12.6-13.5,20.7-6.7c10.4,8.7,20.8,17.6,31.2,26.5c8.1,7,12.4,6.9,20.1-0.6c16.3-15.8,65.6-65.7,94.2-94.1c-25.8-8.4-51.7-16.8-77.6-25.1C134.6,1,128.8,0,123.1,0c-5.8,0-11.5,1-17.3,2.9C73.7,13.2,41.8,23.6,9.8,34C4.3,35.8,1,39.6,0.6,45.3c-2.5,38.5,2.2,76,18.3,111.4c8.2,18.1,18.6,34,31.1,47.7c8.7-8.7,15.8-15.7,19.9-19.6c1.3-1.3,2.8-2.4,4.3-3.4C78.2,179,82.5,177.1,87.2,179.5z" />
        <path fill="#3B82F6" d="M245.5,45.3c-0.2-2.4-0.8-4.4-2-6.2c-27.9,29.7-83.8,88.3-102,107.8c-5,5.4-10,10.8-15,16.2c-1,1.1-2.1,2.1-3.2,3c0,0-32.2,32.6-32.5,33c-0.7,1-1.5,2-2.4,2.9c-4.5,4.8-11.2,12-19.3,20.6c6.7,5.5,13.9,10.6,21.5,15.3c27.5-27.3,81.7-82.2,99-98.9c1.9-1.8,3.8-3.6,6-5c4-2.5,8.3-4.3,12.9-1.9c2.5,1.3,4.2,3.1,5.3,5.5c2.1,4.6,1.4,10-1.6,14.1c-0.7,1-1.5,2-2.4,2.9c-16.1,17.5-62.2,65.8-91.8,97.1c1.7,0.4,3.4,0.7,5.1,0.7c3.4-0.1,6.8-0.9,10.2-2.5c42.5-19.8,74.5-50.2,94-93.2C243.3,121.3,248,83.8,245.5,45.3z" />
        <path fill="#60A5FA" d="M631.2,88.8h40L630,138.9c-3.2,3.5-4.7,6.2-4.7,8.1c0,1.7,1.5,4.4,4.4,7.9l45.3,58.8h-40l-32.4-43.5c-6.4-7.9-9.6-16-9.6-24.2c0-8.1,2.5-13.1,9.6-22L631.2,88.8z" />
      </g>
      <path fill="rgba(255,255,255,.95)" d="M294,82.6V51.8h120.7v30.9H371v129.6h-33.3V82.6H294z" />
      <path fill="rgba(255,255,255,.95)" d="M525.3,160.8h-76.5v5.2c0,14.8,7.2,20.7,24.2,20.7c19,0,24.4-4.4,24.4-14.1H528c0,26.7-14.3,42.5-55,42.5c-38.5,0-56.5-16.3-56.5-54.1v-19.7c0-37,19.2-55.5,57.5-55.5c36,0,54.1,17.5,54.1,52.8C528,147.3,527,154.7,525.3,160.8z M448.8,134.7h48.6V132c0-12.1-8.1-18.3-24.4-18.3c-16,0-24.2,6.2-24.2,18.3V134.7z" />
      <path fill="rgba(255,255,255,.95)" d="M552.5,212.2V39.4h32.1v172.8H552.5z" />
      <path fill="rgba(255,255,255,.95)" d="M716.6,163.6c0,17.5,6.9,22.7,28.4,22.7c18,0,24.4-3.7,24.4-15.3c0-3.5-1.2-6.4-3.9-8.6c-2.7-2.2-8.9-6.2-18.3-11.6l-31.6-18.5c-18.5-10.9-27.4-23-27.4-41.5c0-27.6,17.3-41.5,57.5-41.5c40.2,0,55,15.3,55,49.9h-31.6c0-15.1-6.9-21-23.4-21c-16.8,0-23.4,3.5-23.4,13.6c0,5.7,3.2,7.7,16,15.3l32.8,19.2c14.8,8.9,22.5,14.6,28.1,25.4c2.7,5.7,4.2,12.1,4.2,19.3c0,28.9-17.3,44.2-58.5,44.2c-40,0-60-17.3-60-51.6H716.6z" />
      <path fill="rgba(255,255,255,.95)" d="M856.5,88.8v76.5c0,13.8,4.7,19.5,24.2,19.5c19,0,23.7-5.7,23.7-19.5V88.8h32.1v76.5c0,33.6-17.3,49.9-55.8,49.9c-37.3,0-56.3-17.3-56.3-49.9V88.8H856.5z" />
      <path fill="rgba(255,255,255,.95)" d="M993,212.2h-32.3v-81.4c0-29.4,17.8-44.9,51.3-44.9c5.2,0,10.4,0.7,15.3,2v30.4c-4.7-1.2-9.6-2-15.3-2c-15.1,0-19,4.9-19,17V212.2z" />
      <path fill="rgba(255,255,255,.95)" d="M1151.2,160.8h-76.5v5.2c0,14.8,7.2,20.7,24.2,20.7c19,0,24.4-4.4,24.4-14.1h30.6c0,26.7-14.3,42.5-55,42.5c-38.5,0-56.5-16.3-56.5-54.1v-19.7c0-37,19.3-55.5,57.5-55.5c36,0,54.1,17.5,54.1,52.8C1153.9,147.3,1153,154.7,1151.2,160.8z M1074.7,134.7h48.6V132c0-12.1-8.1-18.3-24.4-18.3c-16,0-24.2,6.2-24.2,18.3V134.7z" />
    </svg>
  );
}
