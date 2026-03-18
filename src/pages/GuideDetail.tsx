import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag, CheckCircle, Play, Info, Lightbulb, AlertTriangle, Printer, Volume2, Square, Heart, ThumbsUp, ThumbsDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { CopyButton } from '@/components/CopyButton';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { guides, categoryLabels, type GuideStep } from '@/data/guides';
import { isFavorite, addFavorite, removeFavorite } from '@/lib/favorites';
import { useAuth } from '@/contexts/AuthContext';

/* ── Helpers ────────────────────────────────────── */

function calcReadTime(guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string }): string {
  let words = `${guide.title} ${guide.excerpt}`.split(/\s+/).length;
  if (guide.steps) guide.steps.forEach(s => { words += (s.title + ' ' + s.content + ' ' + (s.tip || '') + ' ' + (s.warning || '')).split(/\s+/).length; });
  if (guide.body) words += guide.body.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

const getOsHint = (category: string, stepContent: string): 'windows' | 'mac' | 'browser' | 'generic' => {
  if (category === 'windows-guides') return 'windows';
  if (category === 'mac-guides') return 'mac';
  if (stepContent.toLowerCase().includes('browser') || stepContent.toLowerCase().includes('website') || stepContent.toLowerCase().includes('url')) return 'browser';
  return 'generic';
};

/* ── Sub-components ─────────────────────────────── */

const MockScreenshot = ({ description, osHint }: { description: string; osHint?: 'windows' | 'mac' | 'browser' | 'generic' }) => {
  const toolbarLabel = osHint === 'browser' ? 'Browser' : osHint === 'mac' ? 'Finder' : osHint === 'windows' ? 'Windows' : 'Screen';
  const addressText = osHint === 'browser' ? 'https://example.com' : osHint === 'windows' ? '⊞ Settings' : osHint === 'mac' ? '⌘ System Preferences' : '⚙ Settings';
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-border shadow-sm">
      <div className="flex items-center gap-2 px-3 py-2 bg-muted border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3 h-6 rounded-md bg-background/80 border border-border flex items-center px-3">
          <span className="text-[10px] text-muted-foreground truncate">{addressText}</span>
        </div>
        <span className="text-[10px] text-muted-foreground hidden sm:inline">{toolbarLabel}</span>
      </div>
      <div className="bg-muted/30 px-6 py-8 flex items-center justify-center min-h-[120px]">
        <div className="flex items-start gap-3 max-w-md">
          <Info className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed italic">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProTip = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 rounded-lg border border-amber-300/40 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-700/40 px-4 py-3 flex items-start gap-3">
    <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
    <div>
      <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-0.5">Pro Tip</p>
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

const CompletionBanner = ({ guideTitle }: { guideTitle: string }) => (
  <div className="rounded-xl border border-teksure-success/30 bg-teksure-success/10 px-6 py-5 text-center mb-8">
    <span className="text-3xl mb-2 block">🎉</span>
    <p className="font-bold text-base mb-1">You Did It!</p>
    <p className="text-sm text-muted-foreground">You've completed: <strong>{guideTitle}</strong></p>
    <p className="text-xs text-muted-foreground mt-2">Need more help? <Link to="/signup" className="text-secondary hover:underline font-medium">Get Expert Help from a TekSure Tech →</Link></p>
  </div>
);

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
    <Button variant="outline" size="sm" className="gap-2 no-print" onClick={handleListen}>
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

const HelpfulSection = () => {
  const [vote, setVote] = useState<'up' | 'down' | null>(null);
  return (
    <Card className="mb-8">
      <CardContent className="py-6 text-center">
        <p className="font-semibold mb-3">Was this guide helpful?</p>
        {vote ? (
          <p className="text-sm text-muted-foreground">
            {vote === 'up' ? '👍 Thanks for the feedback! Glad it helped.' : '👎 Thanks for letting us know. We'll work on improving it.'}
          </p>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="lg" className="gap-2" onClick={() => setVote('up')}>
              <ThumbsUp className="h-5 w-5" /> Yes
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => setVote('down')}>
              <ThumbsDown className="h-5 w-5" /> No
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

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
    step: guide.steps.map((s, i) => ({
      '@type': 'HowToStep', position: i + 1, name: s.title, text: s.content,
    })),
  } : undefined;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teksure.lovable.app/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://teksure.lovable.app/guides' },
      { '@type': 'ListItem', position: 3, name: categoryLabels[guide.category], item: `https://teksure.lovable.app/guides?category=${guide.category}` },
      { '@type': 'ListItem', position: 4, name: guide.title },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${guide.title} — Step-by-Step Guide | TekSure`}
        description={guide.excerpt}
        path={`/guides/${guide.slug}`}
        type="article"
        jsonLd={[howToJsonLd, breadcrumbJsonLd].filter(Boolean) as Record<string, unknown>[]}
      />
      <Navbar />

      {/* Sticky progress bar */}
      {guide.steps && guide.steps.length > 1 && (
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border no-print">
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Header */}
          <div className="mb-10 relative">
            <BookmarkButton slug={guide.slug} title={guide.title} excerpt={guide.excerpt} />
            <div className="text-5xl mb-4">{guide.thumbnailEmoji}</div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize">{categoryLabels[guide.category]}</Badge>
              {guide.difficulty && (
                <Badge variant="outline" className={
                  guide.difficulty === 'Beginner' ? 'border-teksure-success/50 text-teksure-success' :
                  guide.difficulty === 'Intermediate' ? 'border-teksure-warning/50 text-teksure-warning' :
                  'border-destructive/50 text-destructive'
                }>
                  {guide.difficulty === 'Beginner' ? '🟢' : guide.difficulty === 'Intermediate' ? '🟡' : '🔴'} {guide.difficulty}
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

            <div className="flex gap-2 mt-5">
              <Button variant="outline" size="sm" className="gap-2 no-print" onClick={() => window.print()}>
                <Printer className="h-4 w-4" /> Print Guide
              </Button>
              <ListenButton guide={guide} />
            </div>
          </div>

          {/* Table of contents */}
          {guide.steps && guide.steps.length > 3 && (
            <Card className="mb-8 bg-muted/50">
              <CardContent className="py-4">
                <p className="text-sm font-semibold mb-2">📋 In this guide ({guide.steps.length} steps):</p>
                <ol className="space-y-1">
                  {guide.steps.map((step, i) => (
                    <li key={i}>
                      <a href={`#step-${i + 1}`} className="text-sm text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2">
                        <span className="text-xs font-mono text-secondary">{i + 1}.</span>
                        {step.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Video */}
          {guide.videoUrl && (
            <div className="mb-8">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                <iframe src={guide.videoUrl} title={guide.title} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <Play className="h-3 w-3" /> Video tutorial — watch along or read below
              </p>
            </div>
          )}

          <Separator className="mb-8" />

          {/* Steps */}
          {guide.steps && (
            <div ref={stepsRef} className="space-y-10 mb-10">
              {guide.steps.map((step, i) => (
                <motion.div
                  key={i}
                  id={`step-${i + 1}`}
                  data-step={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="scroll-mt-28"
                >
                  <Card className="overflow-hidden border-l-4 border-l-secondary">
                    <CardContent className="py-6 px-6">
                      <div className="flex gap-5">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-lg font-bold">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                          <div className="text-base text-muted-foreground leading-relaxed">
                            {step.content.split(/(`[^`]+`)/).map((part, pi) => {
                              if (part.startsWith('`') && part.endsWith('`')) {
                                const code = part.slice(1, -1);
                                return (
                                  <span key={pi} className="inline-flex items-center gap-1 bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
                                    {code}
                                    <CopyButton text={code} />
                                  </span>
                                );
                              }
                              return <span key={pi}>{part}</span>;
                            })}
                          </div>

                          <MockScreenshot
                            description={step.screenshotDesc || step.content}
                            osHint={getOsHint(guide.category, step.content)}
                          />

                          {/* Pro Tip — always show one; use step.tip or generate a contextual default */}
                          <ProTip>{step.tip || 'Take your time with this step. If something looks different on your screen, it may be a slightly different version — the steps should still work.'}</ProTip>

                          {step.warning && <WarningBox>{step.warning}</WarningBox>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Completion banner */}
          {guide.steps && guide.steps.length > 0 && <CompletionBanner guideTitle={guide.title} />}

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
                if (paragraph.startsWith('- ') || paragraph.startsWith('🔒') || paragraph.startsWith('🪪') || paragraph.startsWith('🔍') || paragraph.startsWith('✅')) {
                  return (
                    <ul key={i} className="space-y-2 mb-4">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-base text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-1" />
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
          <HelpfulSection />

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
                    <p className="text-sm font-medium group-hover:text-secondary transition-colors line-clamp-2">{prevGuide.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : <div />}
            {nextGuide ? (
              <Link to={`/guides/${nextGuide.slug}`} className="group text-right">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="py-4">
                    <p className="text-xs text-muted-foreground mb-1">Next →</p>
                    <p className="text-sm font-medium group-hover:text-secondary transition-colors line-clamp-2">{nextGuide.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : <div />}
          </div>

          <Separator className="mb-8" />

          {/* CTA */}
          <Card className="hero-gradient text-primary-foreground mb-12 overflow-hidden">
            <CardContent className="py-10 text-center">
              <h2 className="text-2xl font-bold mb-2">Still stuck? Let a pro handle it.</h2>
              <p className="opacity-90 mb-6 max-w-md mx-auto">Our verified technicians can fix this issue for you — remotely or in person.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/signup">Book a Verified Tech <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-hero-outline">
                  <Link to="/pricing">See Pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-6">Related Guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedGuides.map(g => (
                  <Link to={`/guides/${g.slug}`} key={g.slug}>
                    <Card className="h-full hover:shadow-md transition-shadow group">
                      <CardContent className="pt-5">
                        <div className="text-2xl mb-2">{g.thumbnailEmoji}</div>
                        <p className="text-sm font-medium group-hover:text-secondary transition-colors line-clamp-2">{g.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{g.excerpt}</p>
                        <p className="text-xs text-muted-foreground mt-1">{calcReadTime(g)}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideDetail;
