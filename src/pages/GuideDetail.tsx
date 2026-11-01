import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Printer, Volume2, Square } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import type { GuideStep } from '@/data/guides';
import { categoryLabels } from '@/data/guide-categories';
import { useGuide, guideToEmbeddedJson, EMBEDDED_GUIDE_ID } from '@/lib/guide-data';
import { calcReadTime } from '@/lib/guide-nav';
import { guideRedirects } from '@/data/guide-redirects';
import { RichText } from '@/components/guide/StepContentRenderer';
import { GuideFeedback } from '@/components/guide/GuideFeedback';
import { getGuideResources } from '@/lib/guideResources';
import NotFound from './NotFound';

const button =
  'inline-flex items-center gap-2 min-h-[44px] px-4 rounded-sm border-2 border-foreground bg-card text-base font-bold text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 no-print';

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

const ListenButton = ({ guide }: { guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string } }) => {
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
    <button className={button} onClick={toggle}>
      {speaking ? <Square className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
      {speaking ? 'Stop reading' : 'Read aloud'}
    </button>
  );
};

// Tips and warnings, set the way a manual sets a margin note: a heavy left
// rule and a bold label. No icons; the label says what it is.
const Callout = ({ label, tone, children }: { label: string; tone: 'tip' | 'warning'; children: React.ReactNode }) => (
  <div className={`mt-5 border-l-[6px] px-5 py-4 ${tone === 'tip' ? 'border-primary bg-info' : 'border-destructive bg-danger'}`}>
    <p className={`font-bold ${tone === 'tip' ? 'text-info-foreground' : 'text-danger-foreground'}`}>{label}</p>
    <div className="mt-1 text-lg">{children}</div>
  </div>
);

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
          <div className="mx-auto max-w-3xl px-4">
          <header className="border-b-2 border-foreground pb-8 pt-8">
            <nav aria-label="Breadcrumb" className="text-base no-print">
              <Link to="/guides" className="underline underline-offset-4">Guides</Link>
              <span aria-hidden="true"> › </span>
              <Link to={`/guides?category=${guide.category}`} className="underline underline-offset-4">
                {categoryLabels[guide.category]}
              </Link>
            </nav>

            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">{guide.title}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{guide.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-muted-foreground">
              <span>{readTime}</span>
              {guide.steps?.length ? <span>{guide.steps.length} steps</span> : null}
              {guide.lastVerifiedAt && (
                <span className="stamp text-success-foreground">
                  Checked {new Date(guide.lastVerifiedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button className={button} onClick={() => window.print()}>
                <Printer className="h-4 w-4" aria-hidden="true" /> Print
              </button>
              <ListenButton guide={guide} />
            </div>
          </header>

          {bodyParts.intro && (
            <div className="mt-8 text-lg leading-relaxed">
              <RichText text={bodyParts.intro} />
            </div>
          )}

          {guide.steps && guide.steps.length > 0 && (
            <ol className="mt-10">
              {guide.steps.map((step, i) => (
                <li key={i} id={`step-${i + 1}`} className="scroll-mt-24 border-t border-border py-8 sm:grid sm:grid-cols-[4.5rem_1fr]">
                  <p aria-hidden="true" className="font-display text-5xl font-bold leading-none text-primary">{i + 1}</p>
                  <div>
                    <h2 className="mt-2 font-display text-2xl font-bold sm:mt-0">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h2>
                    <div className="mt-3 text-lg leading-relaxed">
                      <RichText text={step.content} />
                    </div>
                    {step.tip && <Callout label="Quick Tip" tone="tip"><RichText text={stripTipLabel(step.tip)} className="space-y-2" /></Callout>}
                    {step.warning && <Callout label="Warning" tone="warning"><RichText text={step.warning} className="space-y-2" /></Callout>}
                  </div>
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
            <section aria-labelledby="sources" className="mt-12 border-t-2 border-foreground pt-6">
              <h2 id="sources" className="font-display text-2xl font-bold">Official sources</h2>
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

          <GuideFeedback slug={guide.slug} />

          <section className="mt-12 border-2 border-foreground bg-card p-6 no-print">
            <h2 className="font-display text-2xl font-bold">Still stuck?</h2>
            <p className="mt-2 text-lg">A real person can walk you through it over the phone.</p>
            <Link
              to="/get-help"
              className="mt-4 inline-flex min-h-[48px] items-center rounded-sm bg-primary px-5 text-lg font-bold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
            >
              Get help from a person
            </Link>
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related" className="mt-12 no-print">
              <h2 id="related" className="border-b-2 border-foreground pb-2 font-display text-2xl font-bold">Related guides</h2>
              <ul className="divide-y divide-border text-lg">
                {related.map((g) => (
                  <li key={g.slug} className="py-3">
                    <Link to={`/guides/${g.slug}`} className="font-bold text-primary underline-offset-4 hover:underline">{g.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav aria-label="More guides" className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-lg sm:flex-row sm:justify-between no-print">
            {prev ? (
              <Link to={`/guides/${prev.slug}`} className="sm:max-w-[45%]">
                <span className="block text-base text-muted-foreground">← Previous</span>
                <span className="font-bold text-primary underline underline-offset-4">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/guides/${next.slug}`} className="sm:max-w-[45%] sm:text-right">
                <span className="block text-base text-muted-foreground">Next →</span>
                <span className="font-bold text-primary underline underline-offset-4">{next.title}</span>
              </Link>
            ) : <span />}
          </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GuideDetail;
