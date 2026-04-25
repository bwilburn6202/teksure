import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Tag, CheckCircle, Lightbulb, AlertTriangle, Printer, Volume2, Square, Heart, BookOpen, ExternalLink, Sparkles, ThumbsUp, ThumbsDown, Calendar, ListOrdered, MessageSquare } from 'lucide-react';
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
import { ShareGuideButton } from '@/components/ShareGuideButton';
import { ReportBrokenLink } from '@/components/ReportBrokenLink';
import { BookmarkButton as SaveBookmarkButton } from '@/components/BookmarkButton';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { guides, categoryLabels, type GuideStep, type ScreenshotAnnotation } from '@/data/guides';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { GuideVideoSection } from '@/components/GuideVideoSection';
import { StepContent, getStepIcon } from '@/components/guide/StepContentRenderer';
import { ScreenshotLightbox } from '@/components/ScreenshotLightbox';
import { isFavorite, addFavorite, removeFavorite } from '@/lib/favorites';
import { markGuideCompleted, isGuideCompleted } from '@/lib/progress';
import { getGuideThumbnailUrl, getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { useAuth } from '@/contexts/AuthContext';

const CATEGORY_RESOURCES: Record<string, { label: string; url: string }[]> = {
  'windows-guides': [
    { label: 'Microsoft Support', url: 'https://support.microsoft.com' },
    { label: 'How-To Geek — Windows', url: 'https://www.howtogeek.com/category/windows/' },
    { label: 'GCFGlobal — Windows Basics', url: 'https://edu.gcfglobal.org/en/topics/windows/' },
  ],
  'mac-guides': [
    { label: 'Apple Support', url: 'https://support.apple.com' },
    { label: 'How-To Geek — Mac', url: 'https://www.howtogeek.com/category/mac/' },
    { label: 'Apple Support YouTube', url: 'https://www.youtube.com/@AppleSupport' },
  ],
  'phone-guides': [
    { label: 'Apple Support — iPhone', url: 'https://support.apple.com/iphone' },
    { label: 'Google Help — Android', url: 'https://support.google.com/android' },
    { label: 'Samsung Support', url: 'https://www.samsung.com/us/support/' },
  ],
  'safety-guides': [
    { label: 'FTC Consumer Protection', url: 'https://consumer.ftc.gov' },
    { label: 'CISA — Cybersecurity Tips', url: 'https://www.cisa.gov/topics/cybersecurity-best-practices' },
    { label: 'AARP Fraud Watch Network', url: 'https://www.aarp.org/money/scams-fraud/' },
  ],
  'health-tech': [
    { label: 'Medicare.gov', url: 'https://www.medicare.gov' },
    { label: 'MedlinePlus — Health Info', url: 'https://medlineplus.gov' },
    { label: 'AARP Health & Technology', url: 'https://www.aarp.org/health/' },
  ],
  'government-civic': [
    { label: 'USA.gov — Government Services', url: 'https://www.usa.gov' },
    { label: 'SSA — Social Security', url: 'https://www.ssa.gov' },
    { label: 'Benefits.gov', url: 'https://www.benefits.gov' },
    { label: 'IRS Free File', url: 'https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free' },
  ],
  'financial-tech': [
    { label: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov' },
    { label: 'FTC — Identity Theft', url: 'https://consumer.ftc.gov/features/identity-theft' },
    { label: 'AnnualCreditReport.com', url: 'https://www.annualcreditreport.com' },
  ],
  'essential-skills': [
    { label: 'GCFGlobal — Free Digital Skills', url: 'https://edu.gcfglobal.org/en/' },
    { label: 'AARP Technology Tips', url: 'https://www.aarp.org/home-family/personal-technology/' },
    { label: 'Senior Planet', url: 'https://seniorplanet.org/' },
  ],
  'ai-guides': [
    { label: 'Google AI Overview', url: 'https://ai.google' },
    { label: 'OpenAI — ChatGPT Help', url: 'https://help.openai.com' },
    { label: 'AARP on Artificial Intelligence', url: 'https://www.aarp.org/home-family/personal-technology/info-2023/what-is-artificial-intelligence-chatgpt.html' },
  ],
  'app-guides': [
    { label: 'Apple App Store Support', url: 'https://support.apple.com/apps' },
    { label: 'Google Play Help', url: 'https://support.google.com/googleplay' },
    { label: 'GCFGlobal — Apps', url: 'https://edu.gcfglobal.org/en/topics/mobile-devices/' },
  ],
  'smart-home': [
    { label: 'Amazon Alexa Help', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GCM2UCAJHE9QXRXK' },
    { label: 'Google Nest Help', url: 'https://support.google.com/googlenest' },
    { label: 'How-To Geek — Smart Home', url: 'https://www.howtogeek.com/category/smart-home/' },
  ],
  'internet-connectivity': [
    { label: 'FCC Broadband Help', url: 'https://www.fcc.gov/consumers/guides' },
    { label: 'How-To Geek — Networking', url: 'https://www.howtogeek.com/category/networking/' },
    { label: 'Google — Test Your Speed', url: 'https://fiber.google.com/about/speedtest/' },
  ],
  'social-media': [
    { label: 'Facebook Help Center', url: 'https://www.facebook.com/help' },
    { label: 'AARP Social Media Guide', url: 'https://www.aarp.org/home-family/personal-technology/info-2020/social-media-beginners-guide.html' },
    { label: 'FTC — Social Media Safety', url: 'https://consumer.ftc.gov/articles/what-know-about-social-media' },
  ],
  'entertainment': [
    { label: 'Netflix Help Center', url: 'https://help.netflix.com' },
    { label: 'Spotify Support', url: 'https://support.spotify.com' },
    { label: 'How-To Geek — Streaming', url: 'https://www.howtogeek.com/category/streaming/' },
  ],
  'communication': [
    { label: 'Zoom Help Center', url: 'https://support.zoom.us' },
    { label: 'Apple FaceTime Support', url: 'https://support.apple.com/facetime' },
    { label: 'WhatsApp Help', url: 'https://faq.whatsapp.com' },
  ],
  'life-transitions': [
    { label: 'AARP Life Changes', url: 'https://www.aarp.org/home-family/' },
    { label: 'Senior Planet', url: 'https://seniorplanet.org/' },
    { label: 'GCFGlobal — Digital Skills', url: 'https://edu.gcfglobal.org/en/' },
  ],
  'tips-tricks': [
    { label: 'How-To Geek', url: 'https://www.howtogeek.com' },
    { label: 'AARP Technology Tips', url: 'https://www.aarp.org/home-family/personal-technology/' },
    { label: "Tom's Guide — Tips", url: 'https://www.tomsguide.com/how-to' },
  ],
  'how-to': [
    { label: 'GCFGlobal', url: 'https://edu.gcfglobal.org/en/' },
    { label: 'How-To Geek', url: 'https://www.howtogeek.com' },
    { label: 'AARP Technology Tips', url: 'https://www.aarp.org/home-family/personal-technology/' },
  ],
};

/* ── Helpers ────────────────────────────────────── */

function calcReadTime(guide: { title: string; excerpt: string; steps?: GuideStep[]; body?: string }): string {
  let words = `${guide.title} ${guide.excerpt}`.split(/\s+/).length;
  if (guide.steps) guide.steps.forEach(s => { words += (s.title + ' ' + s.content + ' ' + (s.tip || '') + ' ' + (s.warning || '')).split(/\s+/).length; });
  if (guide.body) words += guide.body.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

function calcStepTime(step: GuideStep): string {
  const words = (step.title + ' ' + step.content + ' ' + (step.tip || '') + ' ' + (step.warning || '')).split(/\s+/).length;
  const secs = Math.max(15, Math.ceil((words / 200) * 60));
  if (secs < 60) return `~${secs}s`;
  return `~${Math.ceil(secs / 60)} min`;
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="mt-4 rounded-xl overflow-hidden border border-border shadow-sm cursor-pointer group"
        onClick={() => setLightboxOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Enlarge screenshot: ${screenshotAlt || 'guide step'}`}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxOpen(true); } }}
      >
        <div className="relative bg-muted/30">
          <img
            src={screenshotUrl}
            alt={screenshotAlt || ''}
            className="w-full h-auto transition-opacity group-hover:opacity-90"
            loading="lazy"
          />
          {annotations && annotations.length > 0 && (
            <AnnotationLayer annotations={annotations} />
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
            <span className="bg-black/60 text-white text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm">
              Click to enlarge
            </span>
          </div>
        </div>
        {annotations && annotations.length > 0 && (
          <div className="bg-muted/50 border-t border-border px-4 py-2 flex flex-wrap gap-3">
            {annotations.filter(a => a.label && a.type !== 'highlight').map((a, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {a.type === 'callout' && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-bold shrink-0">
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
      <ScreenshotLightbox
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        screenshotUrl={screenshotUrl}
        screenshotAlt={screenshotAlt}
        annotations={annotations}
      />
    </>
  );
};

const ProTip = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5 rounded-xl border border-blue-300/50 bg-blue-50 dark:bg-blue-950/25 dark:border-blue-700/40 px-5 py-4 flex items-start gap-3">
    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-1">Quick Tip</p>
      <p className="text-base text-foreground/85 leading-relaxed">{children}</p>
    </div>
  </div>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5 rounded-xl border border-amber-300/60 bg-amber-50 dark:bg-amber-950/25 dark:border-amber-700/40 px-5 py-4 flex items-start gap-3">
    <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300 mb-1">Warning</p>
      <p className="text-base text-foreground/85 leading-relaxed">{children}</p>
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
      <p className="text-xs text-muted-foreground mt-3">Need more help? <Link to="/get-help" className="text-primary hover:underline font-medium">Get Expert Help from a TekSure Tech <span aria-hidden="true">→</span></Link></p>
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
    <Button variant="ghost" size="icon" className="absolute top-0 right-0 no-print min-h-[44px] min-w-[44px]" onClick={toggle} aria-label={saved ? 'Remove from favorites' : 'Add to favorites'}>
      <Heart className={`h-5 w-5 transition-colors ${saved ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} />
    </Button>
  );
};

const HelpfulSection = ({ guideSlug }: { guideSlug: string }) => {
  const storageKey = `teksure-guide-feedback-${guideSlug}`;
  const [vote, setVote] = useState<'up' | 'down' | null>(() => {
    if (typeof window === 'undefined') return null;
    const stored = window.localStorage.getItem(storageKey);
    return stored === 'up' || stored === 'down' ? stored : null;
  });

  const handleVote = (next: 'up' | 'down') => {
    const newVote = vote === next ? null : next;
    setVote(newVote);
    if (typeof window !== 'undefined') {
      if (newVote) window.localStorage.setItem(storageKey, newVote);
      else window.localStorage.removeItem(storageKey);
    }
  };

  return (
    <Card className="mb-8 no-print">
      <CardContent className="py-8 text-center">
        <p className="text-lg font-bold mb-1">Was this guide helpful?</p>
        <p className="text-sm text-muted-foreground mb-5">
          Your feedback helps us make TekSure better for everyone.
        </p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <Button
            size="lg"
            variant={vote === 'up' ? 'default' : 'outline'}
            onClick={() => handleVote('up')}
            className="gap-2 min-h-[48px] px-6"
            aria-pressed={vote === 'up'}
          >
            <ThumbsUp className="h-5 w-5" /> Yes, helpful
          </Button>
          <Button
            size="lg"
            variant={vote === 'down' ? 'default' : 'outline'}
            onClick={() => handleVote('down')}
            className="gap-2 min-h-[48px] px-6"
            aria-pressed={vote === 'down'}
          >
            <ThumbsDown className="h-5 w-5" /> Not really
          </Button>
        </div>
        {vote && (
          <p className="text-sm text-muted-foreground mb-5" role="status" aria-live="polite">
            {vote === 'up' ? 'Thanks! Glad it helped.' : 'Thanks for the feedback — we\u2019ll keep improving.'}
          </p>
        )}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Want to rate with stars?</p>
          <StarRating guideSlug={guideSlug} size="lg" />
        </div>
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

  // Hoisted before early returns to satisfy Rules of Hooks
  const estimatedReadTime = useMemo(() => guide ? calcReadTime(guide) : '', [guide]);

  const stepCount = guide?.steps?.length || 0;
  const { activeStep, stepsRef } = useStepProgress(stepCount);

  if (!guide) return <Navigate to="/guides" replace />;

  // Guides are free for everyone — no auth required to read

  const currentIndex = guides.findIndex(g => g.slug === slug);
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  const relatedGuides = guides
    .filter(g => g.slug !== slug && g.category === guide.category)
    .slice(0, 3);

  const howToJsonLd = guide.steps ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    ...(guide.lastVerifiedAt ? { dateModified: guide.lastVerifiedAt } : {}),
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

  // FAQ schema from guide steps — boosts chances of rich snippets in Google
  const faqJsonLd = guide.steps && guide.steps.length >= 3 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.steps.slice(0, 8).map(s => ({
      '@type': 'Question',
      name: `How do I ${s.title.toLowerCase().replace(/^(step \d+[:\s]*)/i, '')}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: s.content,
      },
    })),
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
        jsonLd={[howToJsonLd, videoJsonLd, breadcrumbJsonLd, faqJsonLd].filter(Boolean) as Record<string, unknown>[]}
      />
      <Navbar />

      {/* Full-width progress bar across the top */}
      {guide.steps && guide.steps.length > 1 && (
        <div className="sticky top-14 z-40 bg-background/95 backdrop-blur border-b border-border no-print">
          <Progress
            value={((activeStep + 1) / guide.steps.length) * 100}
            className="h-1.5 rounded-none"
            aria-label={`Step ${activeStep + 1} of ${guide.steps.length}`}
          />
          <div className="container max-w-6xl py-2 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              Step {activeStep + 1} of {guide.steps.length}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block truncate max-w-md">
              {guide.steps[activeStep]?.title}
            </span>
          </div>
        </div>
      )}

      <article className="container py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6 no-print">
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

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
          {/* ── Main content column ─────────────────────────────── */}
          <div className="min-w-0">
            {/* Hero */}
            <header className="mb-10 relative guide-hero rounded-3xl bg-gradient-to-br from-primary/5 via-background to-background border border-border p-6 sm:p-8">
              <BookmarkButton slug={guide.slug} title={guide.title} excerpt={guide.excerpt} />
              <img
                src={getGuideThumbnailUrl(guide)}
                alt=""
                className="w-24 h-16 rounded-xl object-cover mb-5 shadow-sm"
                loading="lazy"
              />
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Badge variant="secondary" className="capitalize text-sm px-3 py-1">
                  {categoryLabels[guide.category]}
                </Badge>
                {guide.difficulty && (
                  <Badge
                    variant="outline"
                    className={`text-sm px-3 py-1 rounded-full ${
                      guide.difficulty === 'Beginner' ? 'border-teksure-success/50 text-teksure-success bg-teksure-success/5' :
                      guide.difficulty === 'Intermediate' ? 'border-teksure-warning/50 text-teksure-warning bg-teksure-warning/5' :
                      'border-destructive/50 text-destructive bg-destructive/5'
                    }`}
                  >
                    {guide.difficulty}
                  </Badge>
                )}
                {guide.verifiedHelpful && (
                  <Badge variant="outline" className="border-teksure-success/50 text-teksure-success bg-teksure-success/5 gap-1 text-sm px-3 py-1 rounded-full">
                    <CheckCircle className="h-3.5 w-3.5" /> Verified Helpful
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.15]">
                {guide.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5 max-w-3xl">
                {guide.excerpt}
              </p>

              {/* Print This Guide — prominent, near the top, hidden when printing */}
              <div className="mb-5 no-print print:hidden">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 min-h-[48px] rounded-xl border-2 hover:border-primary hover:text-primary"
                  onClick={() => window.print()}
                >
                  <Printer className="h-5 w-5" aria-hidden="true" />
                  Print This Guide
                </Button>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground pt-4 border-t border-border/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {estimatedReadTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" /> {guide.steps?.length || 0} steps
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                {guide.lastVerifiedAt && (
                  <span className="flex items-center gap-1.5 text-teksure-success">
                    <CheckCircle className="h-4 w-4" />
                    Verified {new Date(guide.lastVerifiedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <StarRating guideSlug={guide.slug} readOnly size="sm" />
              </div>
            </header>

            {/* Video section — OS-specific player with DB-backed videos, falls back to static videoUrl */}
            <GuideVideoSection
              guideSlug={guide.slug}
              fallbackVideoUrl={guide.videoUrl}
              fallbackTitle={guide.title}
            />

            {/* Steps */}
            {guide.steps && (
              <div ref={stepsRef} className="space-y-8 mb-12">
                {guide.steps.map((step, i) => (
                  <section
                    key={i}
                    id={`step-${i + 1}`}
                    data-step={i}
                    className="scroll-mt-28"
                    aria-labelledby={`step-heading-${i + 1}`}
                  >
                    <Card className="overflow-hidden border-l-[6px] border-l-primary shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="py-6 px-5 sm:px-8">
                        <div className="flex gap-4 sm:gap-6">
                          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl sm:text-2xl font-bold shadow-sm">
                            {i + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 mb-4 flex-wrap">
                              {(() => {
                                const Icon = getStepIcon(step.title, step.content);
                                return Icon ? <Icon className="h-6 w-6 text-primary/70 shrink-0 mt-0.5" /> : null;
                              })()}
                              <h2
                                id={`step-heading-${i + 1}`}
                                className="font-bold text-xl sm:text-2xl tracking-tight flex-1 min-w-0 leading-snug"
                              >
                                {step.title}
                              </h2>
                              <span className="text-xs text-muted-foreground shrink-0 mt-1.5 tabular-nums">
                                {calcStepTime(step)}
                              </span>
                            </div>
                            <div className="text-lg text-foreground/85 leading-[1.7]">
                              <StepContent text={step.content} />
                            </div>

                            {step.screenshotUrl && (
                              <StepScreenshot
                                screenshotUrl={step.screenshotUrl}
                                screenshotAlt={step.screenshotAlt}
                                annotations={step.annotations}
                              />
                            )}

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
                  </section>
                ))}
              </div>
            )}

            {/* Completion banner */}
            {guide.steps && guide.steps.length > 0 && <CompletionBanner guideTitle={guide.title} slug={guide.slug} />}

            {/* Body content */}
            {guide.body && (
              <div className="prose prose-lg max-w-none mb-10 leading-relaxed">
                {guide.body.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <h3 key={i} className="text-xl font-semibold mt-8 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>;
                  }
                  if (paragraph.startsWith('**')) {
                    const [boldPart, ...rest] = paragraph.split('**').filter(Boolean);
                    return (
                      <div key={i} className="mb-5">
                        <h3 className="text-lg font-semibold mb-2">{boldPart}</h3>
                        {rest.length > 0 && <p className="text-lg text-foreground/80 leading-[1.7]">{rest.join('')}</p>}
                      </div>
                    );
                  }
                  if (paragraph.startsWith('- ') || /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2700}-\u{27BF}]/u.test(paragraph)) {
                    return (
                      <ul key={i} className="space-y-3 mb-5">
                        {paragraph.split('\n').map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-lg text-foreground/80 leading-[1.7]">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                            <span>{item.replace(/^[-•]\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <ol key={i} className="space-y-3 mb-5">
                        {paragraph.split('\n').map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-lg text-foreground/80 leading-[1.7]">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">{j + 1}</span>
                            <span>{item.replace(/^\d+\.\s*/, '')}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={i} className="text-lg text-foreground/80 leading-[1.7] mb-5">{paragraph}</p>;
                })}
              </div>
            )}

            {/* Was this helpful? */}
            <HelpfulSection guideSlug={guide.slug} />

            {/* Ask TekBrain follow-up CTA */}
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-8 mb-10 no-print">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                    Ask TekBrain a follow-up question about this guide. It&rsquo;s free, no
                    sign-up needed, and the answer will be in plain English.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="gap-2 min-h-[48px]">
                      <Link to={`/tekbrain/chat?guide=${encodeURIComponent(guide.slug)}`}>
                        <MessageSquare className="h-5 w-5" />
                        Ask TekBrain a follow-up
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2 min-h-[48px]">
                      <Link to="/ask">Browse common questions</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {guide.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-sm">{tag}</Badge>
              ))}
            </div>

            {/* Official Resources */}
            {CATEGORY_RESOURCES[guide.category] && (
              <div className="mb-10 p-6 rounded-2xl border border-border bg-muted/30">
                <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  Official Resources
                </h2>
                <div className="flex flex-wrap gap-2">
                  {CATEGORY_RESOURCES[guide.category].map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors min-h-[44px]"
                    >
                      {r.label}
                      <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Sources used to create and verify this guide.{' '}
                  <a href="/sources" className="text-primary hover:underline">View all sources →</a>
                </p>
              </div>
            )}

            {/* Prev/Next */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 no-print">
              {prevGuide ? (
                <Link to={`/guides/${prevGuide.slug}`} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="py-5">
                      <p className="text-xs text-muted-foreground mb-1">← Previous</p>
                      <p className="text-base font-medium group-hover:text-primary transition-colors line-clamp-2">{prevGuide.title}</p>
                    </CardContent>
                  </Card>
                </Link>
              ) : <div />}
              {nextGuide ? (
                <Link to={`/guides/${nextGuide.slug}`} className="group sm:text-right">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="py-5">
                      <p className="text-xs text-muted-foreground mb-1">Next →</p>
                      <p className="text-base font-medium group-hover:text-primary transition-colors line-clamp-2">{nextGuide.title}</p>
                    </CardContent>
                  </Card>
                </Link>
              ) : <div />}
            </div>

            <Separator className="mb-10 no-print" />

            {/* Still stuck CTA — warm card, hidden when printing */}
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10 text-center mb-12 no-print print:hidden">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Still stuck? No problem.</h2>
              <p className="text-base md:text-lg text-foreground/80 mb-7 max-w-xl mx-auto leading-relaxed">
                Sometimes a guide isn&rsquo;t enough. Our technicians can walk
                you through it step by step, in plain English, on your schedule.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-xl gap-2 min-h-[52px] px-7 text-base font-bold">
                  <Link to="/get-help">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                    Book a Tech Helper
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl gap-2 min-h-[52px] px-7 text-base font-bold border-2">
                  <Link to="/tekbrain/chat">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                    Ask TekBrain
                  </Link>
                </Button>
              </div>
            </div>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Related Guides</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  More from {categoryLabels[guide.category]}
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedGuides.map(g => (
                    <Link to={`/guides/${g.slug}`} key={g.slug} className="group">
                      <Card className="h-full hover:shadow-md hover:border-primary/40 transition-all">
                        <CardContent className="pt-5 pb-5">
                          <img src={getGuideThumbnailSmall(g)} alt="" className="w-12 h-12 rounded-lg object-cover mb-3" loading="lazy" />
                          <p className="text-base font-semibold group-hover:text-primary transition-colors line-clamp-2 mb-1.5">{g.title}</p>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{g.excerpt}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {calcReadTime(g)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Sticky sidebar (desktop) / collapsible on mobile ─────── */}
          <aside className="no-print">
            <div className="lg:sticky lg:top-28 space-y-4">
              {/* Table of contents */}
              {guide.steps && guide.steps.length > 0 && (
                <Card>
                  <CardContent className="py-5 px-5">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="h-4 w-4 text-primary" />
                      <h2 className="text-sm font-bold uppercase tracking-wide">In this guide</h2>
                    </div>
                    <ol className="space-y-1 max-h-[50vh] overflow-y-auto pr-1">
                      {guide.steps.map((step, i) => {
                        const isActive = i === activeStep;
                        return (
                          <li key={i}>
                            <a
                              href={`#step-${i + 1}`}
                              className={`group flex items-start gap-3 rounded-lg px-2 py-2 text-sm transition-colors min-h-[40px] ${
                                isActive
                                  ? 'bg-primary/10 text-primary font-semibold'
                                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                              }`}
                              aria-current={isActive ? 'step' : undefined}
                            >
                              <span
                                className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                  isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                                }`}
                              >
                                {i + 1}
                              </span>
                              <span className="flex-1 leading-snug">{step.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </CardContent>
                </Card>
              )}

              {/* Ask TekBrain */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="py-5 px-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h2 className="text-sm font-bold uppercase tracking-wide">Need more help?</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Ask TekBrain for a plain-English answer tailored to this guide.
                  </p>
                  <Button asChild className="w-full gap-2 min-h-[44px]">
                    <Link to={`/tekbrain?guide=${encodeURIComponent(guide.slug)}`}>
                      <MessageSquare className="h-4 w-4" />
                      Ask TekBrain about this
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Share / Print / Save toolbar */}
              <Card>
                <CardContent className="py-5 px-5">
                  <h2 className="text-sm font-bold uppercase tracking-wide mb-3">Tools</h2>
                  <div className="space-y-2 [&_button]:w-full [&_button]:justify-start">
                    <Button
                      variant="outline"
                      className="gap-2 min-h-[44px]"
                      onClick={() => window.print()}
                    >
                      <Printer className="h-4 w-4" /> Print guide
                    </Button>
                    <ListenButton guide={guide} />
                    <ShareGuideButton title={guide.title} url={`/guides/${guide.slug}`} />
                    <ReportBrokenLink guideSlug={guide.slug} guideTitle={guide.title} />
                  </div>
                  {/* Save to My Favorites — new unified bookmarks (guides + tools) */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight">Save for later</p>
                      <p className="text-xs text-muted-foreground">Find it in My Favorites</p>
                    </div>
                    <SaveBookmarkButton
                      type="guide"
                      slug={guide.slug}
                      title={guide.title}
                      url={`/guides/${guide.slug}`}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideDetail;
