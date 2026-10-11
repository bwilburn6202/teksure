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
import { getGuideResources } from '@/lib/guideResources';
import NotFound from './NotFound';

const button =
  'inline-flex items-center gap-2 min-h-[44px] px-4 rounded-md border-2 border-border text-base font-semibold hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring no-print';

const ListenButton = ({ guide }: { guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string } }) => {
  const [speaking, setSpeaking] = useState(false);
  const fullText = useCallback(() => {
    let text = `${guide.title}. ${guide.excerpt}. `;
    guide.steps?.forEach((s, i) => {
      text += `Step ${i + 1}: ${s.title}. ${s.content}. `;
      if (s.tip) text += `Tip: ${s.tip}. `;
    });
    if (guide.body) text += guide.body;
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

const Callout = ({ label, tone, children }: { label: string; tone: 'tip' | 'warning'; children: React.ReactNode }) => (
  <div className={`mt-4 border-l-4 px-4 py-3 ${tone === 'tip' ? 'border-primary bg-muted' : 'border-destructive bg-muted'}`}>
    <p className={`font-bold ${tone === 'tip' ? 'text-foreground' : 'text-destructive'}`}>{label}</p>
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
        <article className="mx-auto max-w-3xl px-4 pt-8">
          <nav aria-label="Breadcrumb" className="text-base no-print">
            <Link to="/guides" className="underline underline-offset-4">Guides</Link>
            <span aria-hidden="true"> › </span>
            <Link to={`/guides?category=${guide.category}`} className="underline underline-offset-4">
              {categoryLabels[guide.category]}
            </Link>
          </nav>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">{guide.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{guide.excerpt}</p>
          <p className="mt-3 text-base text-muted-foreground">
            {readTime}
            {guide.steps?.length ? ` · ${guide.steps.length} steps` : ''}
            {guide.lastVerifiedAt &&
              ` · Checked ${new Date(guide.lastVerifiedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <button className={button} onClick={() => window.print()}>
              <Printer className="h-4 w-4" aria-hidden="true" /> Print
            </button>
            <ListenButton guide={guide} />
          </div>

          {guide.steps && guide.steps.length > 0 && (
            <ol className="mt-10 space-y-8">
              {guide.steps.map((step, i) => (
                <li key={i} id={`step-${i + 1}`} className="scroll-mt-20 border-t-2 border-border pt-6">
                  <h2 className="text-2xl font-bold">
                    <span className="text-primary">Step {i + 1}.</span> {step.title}
                  </h2>
                  <div className="mt-3 text-lg leading-relaxed">
                    <RichText text={step.content} />
                  </div>
                  {step.tip && <Callout label="Quick Tip" tone="tip"><RichText text={step.tip} className="space-y-2" /></Callout>}
                  {step.warning && <Callout label="Warning" tone="warning"><RichText text={step.warning} className="space-y-2" /></Callout>}
                </li>
              ))}
            </ol>
          )}

          {guide.tip && <Callout label="Quick Tip" tone="tip"><RichText text={guide.tip} className="space-y-2" /></Callout>}
          {guide.warning && <Callout label="Warning" tone="warning"><RichText text={guide.warning} className="space-y-2" /></Callout>}
          {guide.body && (
            <div className="mt-10 text-lg leading-relaxed">
              <RichText text={guide.body} />
            </div>
          )}

          {(guide.sourceUrl || sources.length > 0 || guide.videoUrl) && (
            <section aria-labelledby="sources" className="mt-12 border-t-2 border-border pt-6">
              <h2 id="sources" className="text-2xl font-bold">Official sources</h2>
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

          <section className="mt-12 border-2 border-border p-6 no-print">
            <h2 className="text-2xl font-bold">Still stuck?</h2>
            <p className="mt-2 text-lg">A real person can walk you through it over the phone.</p>
            <Link
              to="/get-help"
              className="mt-4 inline-flex min-h-[48px] items-center rounded-md bg-primary px-5 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Get help from a person
            </Link>
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related" className="mt-12 no-print">
              <h2 id="related" className="text-2xl font-bold">Related guides</h2>
              <ul className="mt-3 space-y-2 text-lg">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link to={`/guides/${g.slug}`} className="text-primary underline underline-offset-4">{g.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav aria-label="More guides" className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-between text-lg no-print">
            {prev ? <Link to={`/guides/${prev.slug}`} className="underline underline-offset-4">← {prev.title}</Link> : <span />}
            {next ? <Link to={`/guides/${next.slug}`} className="underline underline-offset-4 sm:text-right">{next.title} →</Link> : <span />}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GuideDetail;
