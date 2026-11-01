import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Printer, Volume2, Square, Lightbulb, AlertTriangle, ExternalLink, Headset, ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import type { GuideStep } from '@/data/guides';
import { categoryLabels } from '@/data/guide-categories';
import { useGuide, guideToEmbeddedJson, EMBEDDED_GUIDE_ID } from '@/lib/guide-data';
import { calcReadTime } from '@/lib/guide-nav';
import { guideRedirects } from '@/data/guide-redirects';
import { RichText } from '@/components/guide/StepContentRenderer';
import { getGuideResources } from '@/lib/guideResources';
import NotFound from './NotFound';

const button =
  'inline-flex items-center gap-2 min-h-[44px] px-4 rounded-lg border-2 border-border bg-card text-base font-semibold text-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring no-print';

// The same buttons, on the navy title band.
const bandButton =
  'inline-flex items-center gap-2 min-h-[44px] px-4 rounded-lg border-2 border-ink-line bg-white/5 text-base font-semibold text-ink-foreground hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal no-print';

// Many tips already start with "Quick Tip:", which doubled up with the callout label.
const stripTipLabel = (tip: string) => tip.replace(/^\s*\**\s*(quick|pro)\s+tip\s*\**\s*[:\-—–]\s*\**\s*/i, '');

// The body's opening paragraph explains what the guide is about, so it goes above the
// steps; the rest is background and stays below them.
const splitBody = (body?: string) => {
  const blocks = (body ?? '').trim().split(/\n\s*\n/).filter(Boolean);
  if (blocks.length === 0) return { intro: '', rest: '' };
  if (/^\s*(#|[-*•]\s|\d+[.)]\s)/.test(blocks[0])) return { intro: '', rest: blocks.join('\n\n') };
  return { intro: blocks[0], rest: blocks.slice(1).join('\n\n') };
};

const ListenButton = ({ guide, className = button }: { guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string }; className?: string }) => {
  const [speaking, setSpeaking] = useState(false);
  const fullText = useCallback(() => {
    const { intro, rest } = splitBody(guide.body);
    let text = `${guide.title}. ${guide.excerpt}. `;
    if (intro) text += `${intro} `;
    guide.steps?.forEach((s, i) => {
      text += `Step ${i + 1}: ${s.title}. ${s.content}. `;
      if (s.tip) text += `Tip: ${stripTipLabel(s.tip)}. `;
    });
    if (rest) text += rest;
    return text;
  }, [guide]);
  useEffect(() => () => window.speechSynthesis?.cancel(), []);
  if (typeof window !== 'undefined' && !('speechSynthesis' in window)) return null;
  const toggle = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(fullText());
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };
  return (
    <button className={className} onClick={toggle}>
      {speaking ? <Square className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
      {speaking ? 'Stop reading' : 'Read aloud'}
    </button>
  );
};

const Callout = ({ label, tone, children }: { label: string; tone: 'tip' | 'warning'; children: React.ReactNode }) => {
  const Icon = tone === 'tip' ? Lightbulb : AlertTriangle;
  return (
    <div
      className={`mt-5 flex gap-3 rounded-xl border-2 px-4 py-4 ${
        tone === 'tip' ? 'border-primary/30 bg-info text-foreground' : 'border-destructive/40 bg-danger text-foreground'
      }`}
    >
      <Icon className={`mt-1 h-6 w-6 shrink-0 ${tone === 'tip' ? 'text-info-foreground' : 'text-danger-foreground'}`} aria-hidden="true" />
      <div>
        <p className={`font-bold ${tone === 'tip' ? 'text-info-foreground' : 'text-danger-foreground'}`}>{label}</p>
        <div className="mt-1 text-lg">{children}</div>
      </div>
    </div>
  );
};

const GuideLoading = ({ failed }: { failed: boolean }) => (
  <>
    <Navbar />
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 min-h-[60vh]">
      {failed ? (
        <div className="space-y-4">
          <p className="text-2xl font-semibold">We could not load this guide.</p>
          <p className="text-lg text-muted-foreground">Check your internet connection, then try again.</p>
          <button className={button} onClick={() => window.location.reload()}>Try again</button>
        </div>
      ) : (
        <p role="status" aria-live="polite" className="text-lg text-muted-foreground">Loading guide…</p>
      )}
    </main>
    <Footer />
  </>
);

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guideState = useGuide(slug);
  const guide = guideState.guide;
  const readTime = useMemo(() => (guide ? calcReadTime(guide) : ''), [guide]);

  if (guideState.status === 'loading' || guideState.status === 'error') {
    return <GuideLoading failed={guideState.status === 'error'} />;
  }
  if (!guide) {
    if (slug && guideRedirects[slug]) return <Navigate to={`/guides/${guideRedirects[slug]}`} replace />;
    return <NotFound />;
  }

  const { prev, next, related } = guide.nav;
  const sources = getGuideResources(guide);
  const bodyParts = splitBody(guide.body);
  const url = `https://www.teksure.com/guides/${guide.slug}`;

  const howToJsonLd = guide.steps?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: guide.title,
        description: guide.excerpt,
        datePublished: guide.publishedAt,
        ...(guide.lastVerifiedAt ? { dateModified: guide.lastVerifiedAt } : {}),
        step: guide.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.content })),
      }
    : undefined;
  // Article carries the dates and publisher that search engines and AI answer
  // engines use to judge freshness. Google stopped showing HowTo rich results
  // in 2023, so HowTo alone told them little.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title.length > 110 ? `${guide.title.slice(0, 107)}...` : guide.title,
    description: guide.excerpt,
    url,
    mainEntityOfPage: url,
    image: 'https://www.teksure.com/og-image.png',
    inLanguage: 'en-US',
    datePublished: guide.publishedAt,
    dateModified: guide.lastVerifiedAt ?? guide.publishedAt,
    author: { '@type': 'Organization', name: 'TekSure', url: 'https://www.teksure.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TekSure',
      url: 'https://www.teksure.com',
      logo: { '@type': 'ImageObject', url: 'https://www.teksure.com/favicon-512.png' },
    },
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.teksure.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.teksure.com/guides' },
      { '@type': 'ListItem', position: 3, name: categoryLabels[guide.category], item: `https://www.teksure.com/guides?category=${guide.category}` },
      { '@type': 'ListItem', position: 4, name: guide.title, item: url },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${guide.title} | TekSure`}
        description={guide.excerpt}
        path={`/guides/${guide.slug}`}
        type="article"
        publishedTime={guide.publishedAt}
        modifiedTime={guide.lastVerifiedAt}
        jsonLd={[articleJsonLd, howToJsonLd, breadcrumbJsonLd].filter(Boolean) as Record<string, unknown>[]}
      />
      {/* This guide's data, embedded so the browser can show it on first load
          without fetching it (see src/lib/guide-data.ts). */}
      <script
        type="application/json"
        id={EMBEDDED_GUIDE_ID}
        data-slug={guide.slug}
        dangerouslySetInnerHTML={{ __html: guideToEmbeddedJson(guide) }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <article>
          <header className="relative overflow-hidden bg-ink text-ink-foreground print:bg-transparent print:text-foreground">
            <div aria-hidden="true" className="bg-grid absolute inset-0 print:hidden" />
            <div className="relative mx-auto max-w-3xl px-4 py-10 sm:py-12">
              <nav aria-label="Breadcrumb" className="text-base text-ink-muted no-print">
                <Link to="/guides" className="underline underline-offset-4 hover:text-signal">Guides</Link>
                <span aria-hidden="true"> › </span>
                <Link to={`/guides?category=${guide.category}`} className="underline underline-offset-4 hover:text-signal">
                  {categoryLabels[guide.category]}
                </Link>
              </nav>

              <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">{guide.title}</h1>
              <p className="mt-4 text-xl text-ink-muted print:text-foreground">{guide.excerpt}</p>
              <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm font-semibold text-signal print:text-foreground">
                <span>{readTime}</span>
                {guide.steps?.length ? <span>{guide.steps.length} steps</span> : null}
                {guide.lastVerifiedAt && (
                  <span>
                    Checked {new Date(guide.lastVerifiedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                )}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <button className={bandButton} onClick={() => window.print()}>
                  <Printer className="h-4 w-4" aria-hidden="true" /> Print
                </button>
                <ListenButton guide={guide} className={bandButton} />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4">
          {bodyParts.intro && (
            <div className="mt-10 text-lg leading-relaxed">
              <RichText text={bodyParts.intro} />
            </div>
          )}

          {guide.steps && guide.steps.length > 0 && (
            <ol className="mt-10 space-y-6">
              {guide.steps.map((step, i) => (
                <li key={i} id={`step-${i + 1}`} className="scroll-mt-24 rounded-2xl border-2 border-border bg-card p-5 sm:p-6">
                  <h2 className="flex items-start gap-4 font-display text-2xl font-bold">
                    <span className="flex h-11 min-w-[2.75rem] shrink-0 items-center justify-center rounded-xl bg-primary px-2 font-mono text-lg text-primary-foreground">
                      <span className="sr-only">Step </span>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="pt-1">{step.title}</span>
                  </h2>
                  <div className="mt-4 text-lg leading-relaxed">
                    <RichText text={step.content} />
                  </div>
                  {step.tip && <Callout label="Quick Tip" tone="tip"><RichText text={stripTipLabel(step.tip)} className="space-y-2" /></Callout>}
                  {step.warning && <Callout label="Warning" tone="warning"><RichText text={step.warning} className="space-y-2" /></Callout>}
                </li>
              ))}
            </ol>
          )}

          {guide.tip && <Callout label="Quick Tip" tone="tip"><RichText text={stripTipLabel(guide.tip)} className="space-y-2" /></Callout>}
          {guide.warning && <Callout label="Warning" tone="warning"><RichText text={guide.warning} className="space-y-2" /></Callout>}
          {bodyParts.rest && (
            <section aria-labelledby="more-about" className="mt-12">
              <h2 id="more-about" className="font-display text-2xl font-bold">More about this</h2>
              <div className="mt-3 text-lg leading-relaxed">
                <RichText text={bodyParts.rest} />
              </div>
            </section>
          )}

          {(guide.sourceUrl || sources.length > 0 || guide.videoUrl) && (
            <section aria-labelledby="sources" className="mt-12 rounded-2xl border-2 border-border bg-card p-6">
              <h2 id="sources" className="flex items-center gap-2 font-display text-2xl font-bold">
                <ExternalLink className="h-6 w-6 text-primary" aria-hidden="true" />
                Official sources
              </h2>
              <ul className="mt-3 space-y-2 text-lg">
                {guide.sourceUrl && (
                  <li>
                    <a href={guide.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                      {guide.sourceName || guide.sourceUrl}
                    </a>
                  </li>
                )}
                {sources.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                      {r.title}
                    </a>{' '}
                    <span className="text-muted-foreground">— {r.source}</span>
                  </li>
                ))}
                {guide.videoUrl && (
                  <li>
                    <a href={guide.videoUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                      Watch a video walkthrough
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}

          <section className="relative mt-12 overflow-hidden rounded-2xl bg-ink p-6 text-ink-foreground sm:p-8 no-print">
            <div aria-hidden="true" className="bg-grid absolute inset-0" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-signal text-ink">
                  <Headset className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold">Still stuck?</h2>
                  <p className="mt-1 text-lg text-ink-muted">A real person can walk you through it over the phone.</p>
                </div>
              </div>
              <Link
                to="/get-help"
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-xl bg-card px-6 text-lg font-semibold text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                Get help from a person
              </Link>
            </div>
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related" className="mt-12 no-print">
              <h2 id="related" className="font-display text-2xl font-bold">Related guides</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link
                      to={`/guides/${g.slug}`}
                      className="group flex h-full items-start justify-between gap-3 rounded-xl border-2 border-border bg-card p-4 text-lg font-semibold text-primary hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {g.title}
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav aria-label="More guides" className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-between text-lg no-print">
            {prev ? (
              <Link to={`/guides/${prev.slug}`} className="flex flex-1 items-start gap-2 rounded-xl border-2 border-border bg-card p-4 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <ArrowLeft className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span><span className="block font-mono text-sm font-semibold text-muted-foreground">Previous</span>{prev.title}</span>
              </Link>
            ) : <span className="flex-1" />}
            {next ? (
              <Link to={`/guides/${next.slug}`} className="flex flex-1 items-start justify-end gap-2 rounded-xl border-2 border-border bg-card p-4 text-right hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span><span className="block font-mono text-sm font-semibold text-muted-foreground">Next</span>{next.title}</span>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              </Link>
            ) : <span className="flex-1" />}
          </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GuideDetail;
