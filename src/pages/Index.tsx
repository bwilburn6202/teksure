import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { guides } from '@/data/guides';

/**
 * TekSure landing — single-screen, OpenAI-style layout.
 * No scroll: fills the viewport below the navbar.
 */
const suggestions = [
  { label: 'Get real human help',  to: '/get-help' },
  { label: 'Find the right guide', to: '/find-a-guide' },
  { label: 'Ask TekBot',           to: '/brain' },
  { label: 'Browse tools',         to: '/tools' },
  { label: 'More',                 to: '/guides' },
];

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
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <SEOHead
        title="TekSure — Free Tech Help for Beginners & Seniors"
        description="TekSure is an American tech support company offering free step-by-step guides, quick fixes, and real human support for seniors and beginners. No jargon, just answers."
        path="/"
        jsonLd={[
          { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://teksure.com/#organization', name: 'TekSure', url: 'https://teksure.com', logo: 'https://teksure.com/og-image.png', description: 'American tech support company offering free step-by-step guides for seniors and beginners.', contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@teksure.com', availableLanguage: 'English' } },
          { '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://teksure.com/#website', url: 'https://teksure.com', name: 'TekSure', description: 'American tech support — free guides, tools, and real humans for beginners and seniors.', publisher: { '@id': 'https://teksure.com/#organization' }, potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://teksure.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' } },
        ]}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col items-center justify-center px-4 outline-none">
        <div className="w-full max-w-2xl mx-auto text-center">
          <h1 className="sr-only">TekSure — American Tech Support Company | Free Help for Beginners &amp; Seniors</h1>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-12"
            style={{ letterSpacing: '-0.025em' }}
          >
            Tech help that speaks your language.
          </h2>

          <form onSubmit={handleSubmit} className="w-full mb-6">
            <div className="relative rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
              <label htmlFor="landing-prompt" className="sr-only">What can we help with?</label>
              <textarea
                id="landing-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e as unknown as React.FormEvent);
                  }
                }}
                placeholder="What do you need help with?"
                rows={2}
                className="w-full resize-none bg-transparent px-5 pt-5 pb-14 text-base rounded-2xl focus:outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                aria-label="Search TekSure"
                className="absolute bottom-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-40"
                disabled={!prompt.trim()}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {suggestions.map((s) => (
              <button
                key={s.to}
                onClick={() => navigate(s.to)}
                className="inline-flex items-center px-4 py-2 min-h-[40px] rounded-full border border-border bg-card text-sm text-foreground/80 hover:border-primary/30 hover:text-foreground transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground font-semibold">{guides.length.toLocaleString()}+</strong> free guides · Real humans · Plain English
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
