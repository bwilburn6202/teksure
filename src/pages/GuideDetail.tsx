import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Tag, CheckCircle, Lightbulb, AlertTriangle, Printer, Volume2, Square, Heart, BookOpen } from 'lucide-react';
import { StarRating } from '@/components/StarRating';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { CopyButton } from '@/components/CopyButton';
import { BackToTop } from '@/components/BackToTop';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { guides, categoryLabels, type GuideStep, type ScreenshotAnnotation } from '@/data/guides';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { GuideVideoSection } from '@/components/GuideVideoSection';
import { StepContent, getStepIcon } from '@/components/guide/StepContentRenderer';
import { isFavorite, addFavorite, removeFavorite } from '@/lib/favorites';
import { markGuideCompleted, isGuideCompleted } from '@/lib/progress';
import { getGuideThumbnailUrl, getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { useAuth } from '@/contexts/AuthContext';

/* ── Helpers ────────────────────────────────────── */

function calcReadTime(guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string }): string {
  let words = `${guide.title} ${guide.excerpt}`.split(/\s+/).length;
  if (guide.steps) guide.steps.forEach(s => { words += (s.title + ' ' + s.content + ' ' + (s.tip || '') + ' ' + (s.warning || '')).split(/\s+/).length; });
  if (guide.body) words += guide.body.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

/* ── Sub-components ─────────────────────────────── */

const AnnotationLayer = ({ annotations }: { annotations: ScreenshotAnnotation[] }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    {annotations.map((a, i) => {
      if (a.type === 'callout') {
        return (
          <g key={i}>
            <circle cx={a.x} cy={a.y} r="4.5" fill="#ef4444" opacity="0.92" />
            <circle cx={a.x} cy={a.y} r="4.5" fill="none" stroke="white" strokeWidth="0.8" />
            <text x={a.x} y={a.y + 1.6} textAnchor="middle" fontSize="4.5" fill="white" fontWeight="bold" fontFamily="sans-serif">
              {a.label ?? String(i + 1)}
            </text>
          </g>
        );
      }
      if (a.type === 'arrow') {
        const dir = a.direction ?? 'down';
        const arrowPaths: Record<string, string> = {
          down:  `M${a.x},${a.y - 8} L${a.x},${a.y - 1} M${a.x - 2.5},${a.y - 4} L${a.x},${a.y - 1} L${a.x + 2.5},${a.y - 4}`,
          up:    `M${a.x},${a.y + 8} L${a.x},${a.y + 1} M${a.x - 2.5},${a.y + 4} L${a.x},${a.y + 1} L${a.x + 2.5},${a.y + 4}`,
          right: `M${a.x - 8},${a.y} L${a.x - 1},${a.y} M${a.x - 4},${a.y - 2.5} L${a.x - 1},${a.y} L${a.x - 4},${a.y + 2.5}`,
          left:  `M${a.x + 8},${a.y} L${a.x + 1},${a.y} M${a.x + 4},${a.y - 2.5} L${a.x + 1},${a.y} L${a.x + 4},${a.y + 2.5}`,
        };
        return (
          <g key={i}>
            <path d={arrowPaths[dir]} stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {a.label && (
              <text x={a.x} y={a.y - 11} textAnchor="middle" fontSize="4" fill="#ef4444" fontWeight="bold" fontFamily="sans-serif">{a.label}</text>
            )}
          </g>
        );
      }
      if (a.type === 'highlight') {
        const w = a.width ?? 20;
        const h = a.height ?? 10;
        return (
          <g key={i}>
            <rect x={a.x} y={a.y} width={w} height={h} fill="#fbbf24" opacity="0.25" rx="1" />
            <rect x={a.x} y={a.y} width={w} height={h} fill="none" stroke="#f59e0b" strokeWidth="0.8" rx="1" />
          </g>
        );
      }
      return null;
    })}
  </svg>
);

const StepScreenshot = ({
  screenshotUrl,
  screenshotAlt,
  annotations,
}: {
  screenshotUrl: string;
  screenshotAlt?: string;
  annotations?: ScreenshotAnnotation[];
}) => {
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-border shadow-sm">
      <div className="relative bg-muted/30">
        <img
          src={screenshotUrl}
          alt={screenshotAlt || ''}
          className="w-full h-auto"
          loading="lazy"
        />
        {annotations && annotations.length > 0 && (
          <AnnotationLayer annotations={annotations} />
        )}
      </div>
      {annotations && annotations.length > 0 && (
        <div className="bg-muted/50 border-t border-border px-4 py-2 flex flex-wrap gap-3">
          {annotations.filter(a => a.label && a.type !== 'highlight').map((a, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {a.type === 'callout' && (
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold shrink-0">
                  {a.label}
                </span>
              )}
              {a.type === 'arrow' && <span className="text-red-500 font-bold">↓</span>}
              {a.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ProTip = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 rounded-lg border border-amber-300/40 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-700/40 px-4 py-3 flex items-start gap-3">
    <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
    <div>
      <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-0.5">Quick Tip</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  </div>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 flex items-start gap-3">
    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
    <div>
      <p className="text-xs font-bold text-destructive mb-0.5">Warning</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  </div>
);

const CompletionBanner = ({ guideTitle, slug }: { guideTitle: string; slug: string }) => {
  const [completed, setCompleted] = useState(() => isGuideCompleted(slug));

  const handleComplete = () => {
    markGuideCompleted(slug);
    setCompleted(true);
  };

  return (
    <div className="rounded-xl border border-teksure-success/30 bg-teksure-success/10 px-6 py-5 text-center mb-8">
      <CheckCircle className="h-8 w-8 text-teksure-success mx-auto mb-2" />
      <p className="font-bold text-base mb-1">You Did It!</p>
      <p className="text-sm text-muted-foreground mb-4">You've completed: <strong>{guideTitle}</strong></p>
      {completed ? (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teksure-success/20 text-teksure-success text-sm font-medium">
          <CheckCircle className="h-4 w-4" /> Marked as complete!
        </div>
      ) : (
        <Button size="sm" variant="outline" onClick={handleComplete} className="gap-2 border-teksure-success/50 text-teksure-success hover:bg-teksure-success/10">
          <CheckCircle className="h-4 w-4" /> Mark as Complete
        </Button>
      )}
      <p className="text-xs text-muted-foreground mt-3">Need more help? <Link to="/signup" className="text-primary hover:underline font-medium">Get Expert Help from a TekSure Tech →</Link></p>
    </div>
  );
};

const ListenButton = ({ guide }: { guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string } }) => {
  const [speaking, setSpeaking] = useState(false);
  const getFullText = useCallback(() => {
    let text = `${guide.title}. ${guide.excerpt}. `;
    if (guide.steps) guide.steps.forEach((s, i) => { text += `Step ${i + 1}: ${s.title}. ${s.content}. `; if (s.tip) text += `Tip: ${s.tip}. `; });
    if (guide.body) text += guide.body;
    return text;
  }, [guide]);
  useEffect(() => { return () => { window.speechSynthesis.cancel(); }; }, []);
  const handleListen = () => {
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(getFullText());
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };
  return (
    <Button variant="outline" size="sm" className="gap-2 no-print min-h-[44px]" onClick={handleListen}>
      {speaking ? <><Square className="h-4 w-4" /> Stop</> : <><Volume2 className="h-4 w-4" /> Listen</>}
    </Button>
  );
};

const BookmarkButton = ({ slug, title, excerpt }: { slug: string; title: string; excerpt: string }) => {
  const [saved, setSaved] = useState(() => isFavorite(slug));
  const toggle = () => {
    if (saved) { removeFavorite(slug); } else { addFavorite({ slug, title, excerpt }); }
    setSaved(!saved);
  };
  return (
    <Button variant="ghost" size="icon" className="absolute top-0 right-0 no-print" onClick={toggle} aria-label={saved ? 'Remove from favorites' : 'Add to favorites'}>
      <Heart className={`h-5 w-5 transition-colors ${saved ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} />
    </Button>
  );
};

const HelpfulSection = ({ guideSlug }: { guideSlug: string }) => (
  <Card className="mb-8">
    <CardContent className="py-6 text-center">
      <p className="font-semibold mb-1">Rate this guide</p>
      <p className="text-sm text-muted-foreground mb-4">How helpful was this guide?</p>
      <StarRating guideSlug={guideSlug} size="lg" />
    </CardContent>
  </Card>
);

/** Scroll-based progress bar */
const useStepProgress = (stepCount: number) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepCount) return;
    const handleScroll = () => {
      const container = stepsRef.current;
      if (!container) return;
      const stepEls = container.querySelectorAll('[data-step]');
      let latest = 0;
      stepEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) latest = i;
      });
      setActiveStep(latest);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stepCount]);

  return { activeStep, stepsRef };
};

/* ── Main component ─────────────────────────────── */

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const location = useLocation();
  const guide = guides.find(g => g.slug === slug);

  const stepCount = guide?.steps?.length || 0;
  const { activeStep, stepsRef } = useStepProgress(stepCount);

  if (!guide) return <Navigate to="/guides" replace />;

  if (!user) {
    return <Navigate to="/login" state={{ message: 'Create a free account to read this guide.', from: location.pathname }} replace />;
  }

  const currentIndex = guides.findIndex(g => g.slug === slug);
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  const relatedGuides = guides
    .filter(g => g.slug !== slug && g.category === guide.category)
    .slice(0, 3);

  const estimatedReadTime = calcReadTime(guide);

  const howToJsonLd = guide.steps ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    step: guide.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.content,
      ...(s.screenshotUrl ? { image: { '@type': 'ImageObject', url: s.screenshotUrl, description: s.screenshotAlt || s.title } } : {}),
    })),
  } : undefined;

  const videoJsonLd = guide.videoUrl ? {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${guide.title} — Video Tutorial`,
    description: guide.excerpt,
    thumbnailUrl: `https://teksure.com/og-image.png`,
    uploadDate: guide.publishedAt,
    embedUrl: guide.videoUrl,
    publisher: { '@type': 'Organization', name: 'TekSure', logo: { '@type': 'ImageObject', url: 'https://teksure.com/og-image.png' } },
  } : undefined;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teksure.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://teksure.com/guides' },
      { '@type': 'ListItem', position: 3, name: categoryLabels[guide.category], item: `https://teksure.com/guides?category=${guide.category}` },
      { '@type': 'ListItem', position: 4, name: guide.title, item: `https://teksure.com/guides/${guide.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${guide.title} — Step-by-Step Guide | TekSure`}
        description={guide.excerpt}
        path={`/guides/${guide.slug}`}
        type="article"
        jsonLd={[howToJsonLd, videoJsonLd, breadcrumbJsonLd].filter(Boolean) as Record<string, unknown>[]}
      />
      <Navbar />

      {/* Sticky progress bar */}
      {guide.steps && guide.steps.length > 1 && (
        <div className="sticky top-14 z-40 bg-background/95 backdrop-blur border-b border-border no-print">
          <div className="container max-w-4xl py-2 flex items-center gap-3">
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              Step {activeStep + 1} of {guide.steps.length}
            </span>
            <Progress value={((activeStep + 1) / guide.steps.length) * 100} className="h-2 flex-1" />
          </div>
        </div>
      )}

      <article className="container py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/guides">Guides</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to={`/guides?category=${guide.category}`}>{categoryLabels[guide.category]}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>{guide.title}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div>
          {/* Header */}
          <div className="mb-10 relative">
            <BookmarkButton slug={guide.slug} title={guide.title} excerpt={guide.excerpt} />
            <img src={getGuideThumbnailUrl(guide)} alt={guide.title} className="w-20 h-14 rounded-lg object-cover mb-4" loading="lazy" />
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize">{categoryLabels[guide.category]}</Badge>
              {guide.difficulty && (
                <Badge variant="outline" className={
                  guide.difficulty === 'Beginner' ? 'border-teksure-success/50 text-teksure-success' :
                  guide.difficulty === 'Intermediate' ? 'border-teksure-warning/50 text-teksure-warning' :
                  'border-destructive/50 text-destructive'
                }>
                  {guide.difficulty}
                </Badge>
              )}
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {estimatedReadTime}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" /> {guide.steps?.length || 0} steps
              </span>
              <span className="text-sm text-muted-foreground">
                {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">{guide.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{guide.excerpt}</p>
            <div className="mt-3">
              <StarRating guideSlug={guide.slug} readOnly size="sm" />
            </div>

            {/* Print-only header: shows TekSure URL at the top of printed page */}
            <div className="hidden print:block text-sm text-gray-500 mb-2">
              Printed from TekSure.com &mdash; teksure.com/guides/{guide.slug}
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 no-print min-h-[48px] text-base font-semibold px-6"
                onClick={() => window.print()}
                aria-label="Print this guide"
              >
                <Printer className="h-5 w-5" /> Print this Guide
              </Button>
              <ListenButton guide={guide} />
            </div>
          </div>

          {/* Table of contents */}
          {guide.steps && guide.steps.length > 3 && (
            <Card className="mb-8 bg-muted/50">
              <CardContent className="py-4">
                <p className="text-sm font-semibold mb-2">In this guide ({guide.steps.length} steps):</p>
                <ol className="space-y-1">
                  {guide.steps.map((step, i) => (
                    <li key={i}>
                      <a href={`#step-${i + 1}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <span className="text-xs font-mono text-primary">{i + 1}.</span>
                        {step.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Video section — OS-specific player with DB-backed videos, falls back to static videoUrl */}
          <GuideVideoSection
            guideSlug={guide.slug}
            fallbackVideoUrl={guide.videoUrl}
            fallbackTitle={guide.title}
          />

          <Separator className="mb-8" />

          {/* Steps */}
          {guide.steps && (
            <div ref={stepsRef} className="space-y-10 mb-10">
              {guide.steps.map((step, i) => (
                <div
                  key={i}
                  id={`step-${i + 1}`}
                  data-step={i}
                  className="scroll-mt-28"
                >
                  <Card className="overflow-hidden border-l-4 border-l-primary">
                    <CardContent className="py-5 px-4 sm:px-6">
                      <div className="flex gap-4 sm:gap-5">
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base sm:text-lg font-bold">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-3">
                            {(() => {
                              const Icon = getStepIcon(step.title, step.content);
                              return Icon ? <Icon className="h-[18px] w-[18px] text-primary/70 shrink-0" /> : null;
                            })()}
                            <h3 className="font-bold text-lg">{step.title}</h3>
                          </div>
                          <div className="text-base text-muted-foreground leading-relaxed">
                            <StepContent text={step.content} />
                          </div>

                          {step.whyItWorks && (
                            <div className="mt-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 px-4 py-3">
                              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Why this works</p>
                              <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">{step.whyItWorks}</p>
                            </div>
                          )}

                          {step.screenshotUrl && (
                            <StepScreenshot
                              screenshotUrl={step.screenshotUrl}
                              screenshotAlt={step.screenshotAlt}
                              annotations={step.annotations}
                            />
                          )}

                          {/* Before / After comparison slider */}
                          {step.beforeCaption && step.afterCaption && (
                            <BeforeAfterSlider
                              beforeCaption={step.beforeCaption}
                              afterCaption={step.afterCaption}
                              beforeLabel={step.beforeLabel}
                              afterLabel={step.afterLabel}
                            />
                          )}

                          {step.tip && <ProTip><StepContent text={step.tip} /></ProTip>}

                          {step.warning && <WarningBox><StepContent text={step.warning} /></WarningBox>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}

          {/* Completion banner */}
          {guide.steps && guide.steps.length > 0 && <CompletionBanner guideTitle={guide.title} slug={guide.slug} />}

          {/* Body content */}
          {guide.body && (
            <div className="prose prose-base max-w-none mb-8 leading-relaxed">
              {guide.body.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <h3 key={i} className="text-lg font-semibold mt-6 mb-2">{paragraph.replace(/\*\*/g, '')}</h3>;
                }
                if (paragraph.startsWith('**')) {
                  const [boldPart, ...rest] = paragraph.split('**').filter(Boolean);
                  return (
                    <div key={i} className="mb-4">
                      <h3 className="text-base font-semibold mb-1">{boldPart}</h3>
                      {rest.length > 0 && <p className="text-base text-muted-foreground leading-relaxed">{rest.join('')}</p>}
                    </div>
                  );
                }
                if (paragraph.startsWith('- ') || /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2700}-\u{27BF}]/u.test(paragraph)) {
                  return (
                    <ul key={i} className="space-y-2 mb-4">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-base text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                          <span>{item.replace(/^[-•]\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <ol key={i} className="space-y-2 mb-4">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-base text-muted-foreground">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-semibold">{j + 1}</span>
                          <span>{item.replace(/^\d+\.\s*/, '')}</span>
                        </li>
                      ))}
                    </ol>
                  );
                }
                return <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
              })}
            </div>
          )}

          {/* Was this helpful? */}
          <HelpfulSection guideSlug={guide.slug} />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {guide.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {prevGuide ? (
              <Link to={`/guides/${prevGuide.slug}`} className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="py-4">
                    <p className="text-xs text-muted-foreground mb-1">← Previous</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{prevGuide.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : <div />}
            {nextGuide ? (
              <Link to={`/guides/${nextGuide.slug}`} className="group text-right">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="py-4">
                    <p className="text-xs text-muted-foreground mb-1">Next →</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{nextGuide.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : <div />}
          </div>

          <Separator className="mb-8" />

          {/* CTA */}
          <div className="rounded-2xl border border-border bg-muted/50 p-10 text-center mb-12">
            <h2 className="text-xl font-bold mb-2">Still stuck? Let a pro handle it.</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">Our verified technicians can fix this issue for you — remotely or in person.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl gap-2">
                <Link to="/signup">Book a Verified Tech <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-6">Related Guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedGuides.map(g => (
                  <Link to={`/guides/${g.slug}`} key={g.slug}>
                    <Card className="h-full hover:shadow-md transition-shadow group">
                      <CardContent className="pt-5">
                        <img src={getGuideThumbnailSmall(g)} alt={g.title} className="w-10 h-10 rounded-lg object-cover mb-2" loading="lazy" />
                        <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{g.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{g.excerpt}</p>
                        <p className="text-xs text-muted-foreground mt-1">{calcReadTime(g)}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default GuideDetail;
