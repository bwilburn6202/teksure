import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Shield, Lock, KeyRound, Eye, Mail, Smartphone, Laptop, Wifi, Battery,
  Volume2, Accessibility, Heart, Moon, Sun, Gift, Calendar, Bell, Search,
  Camera, Printer, Cloud, HardDrive, Download, Settings, Zap, Leaf, Globe,
  Lightbulb, AlertTriangle, Users, ArrowRight, Share2, CheckCircle2,
  ChevronLeft, ChevronRight, Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { weeklyTips, type WeeklyTip } from '@/data/weekly-tips';

// ── Icon registry ─────────────────────────────────────────────────────────
const ICONS: Record<WeeklyTip['icon'], LucideIcon> = {
  Shield, Lock, KeyRound, Eye, Mail, Smartphone, Laptop, Wifi, Battery,
  Volume2, Accessibility, Heart, Moon, Sun, Gift, Calendar, Bell, Search,
  Camera, Printer, Cloud, HardDrive, Download, Settings, Zap, Leaf, Globe,
  Lightbulb, AlertTriangle, Users,
};

// ── Category → warm color palette ─────────────────────────────────────────
const CATEGORY_COLORS: Record<WeeklyTip['category'], { bg: string; text: string; ring: string }> = {
  'Safety':            { bg: 'bg-rose-100 dark:bg-rose-950/40',    text: 'text-rose-800 dark:text-rose-200',    ring: 'ring-rose-200 dark:ring-rose-900' },
  'Smart Setting':     { bg: 'bg-amber-100 dark:bg-amber-950/40',  text: 'text-amber-900 dark:text-amber-200',  ring: 'ring-amber-200 dark:ring-amber-900' },
  'App Pick':          { bg: 'bg-orange-100 dark:bg-orange-950/40',text: 'text-orange-900 dark:text-orange-200',ring: 'ring-orange-200 dark:ring-orange-900' },
  'Quick Fix':         { bg: 'bg-yellow-100 dark:bg-yellow-950/40',text: 'text-yellow-900 dark:text-yellow-200',ring: 'ring-yellow-200 dark:ring-yellow-900' },
  'Senior-Friendly':   { bg: 'bg-teal-100 dark:bg-teal-950/40',    text: 'text-teal-900 dark:text-teal-200',    ring: 'ring-teal-200 dark:ring-teal-900' },
  'Digital Wellness':  { bg: 'bg-emerald-100 dark:bg-emerald-950/40',text: 'text-emerald-900 dark:text-emerald-200',ring:'ring-emerald-200 dark:ring-emerald-900' },
  'Seasonal':          { bg: 'bg-fuchsia-100 dark:bg-fuchsia-950/40',text:'text-fuchsia-900 dark:text-fuchsia-200',ring:'ring-fuchsia-200 dark:ring-fuchsia-900' },
};

// ── ISO week helpers (no server needed) ───────────────────────────────────
// ISO-8601 week: Monday-based, weeks belong to the year of their Thursday.
function getISOWeek(date: Date): { year: number; week: number } {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const year = d.getUTCFullYear();
  const yearStart = new Date(Date.UTC(year, 0, 1));
  const week = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return { year, week };
}

/** Given "2026-W15" → Date of the Monday of that ISO week (UTC). */
function isoWeekToDate(year: number, week: number): Date {
  const simple = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));
  const dayNum = simple.getUTCDay() || 7;
  const iso = new Date(simple);
  if (dayNum <= 4) iso.setUTCDate(simple.getUTCDate() - dayNum + 1);
  else iso.setUTCDate(simple.getUTCDate() + 8 - dayNum);
  return iso;
}

function parseWeekParam(raw: string | null): { year: number; week: number } | null {
  if (!raw) return null;
  const m = raw.match(/^(\d{4})-W(\d{1,2})$/);
  if (!m) return null;
  const year = parseInt(m[1], 10);
  const week = parseInt(m[2], 10);
  if (week < 1 || week > 53) return null;
  return { year, week };
}

function formatWeekRange(monday: Date): string {
  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  const year = sunday.getUTCFullYear();
  return `${fmt(monday)} – ${fmt(sunday)}, ${year}`;
}

function isoLabel(year: number, week: number): string {
  return `${year}-W${String(week).padStart(2, '0')}`;
}

// ── Pick 5 tips deterministically from the 60-entry pool ──────────────────
// Offset so categories don't all flip on the same week.
const OFFSETS = [0, 13, 27, 41, 53];

function tipsForWeek(year: number, week: number): WeeklyTip[] {
  const base = ((year * 53 + week) % weeklyTips.length + weeklyTips.length) % weeklyTips.length;
  return OFFSETS.map(off => weeklyTips[(base + off) % weeklyTips.length]);
}

// ── The page ──────────────────────────────────────────────────────────────
export default function WeeklyTips() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Determine which week we're viewing
  const now = useMemo(() => new Date(), []);
  const currentISO = useMemo(() => getISOWeek(now), [now]);
  const requested = parseWeekParam(searchParams.get('week'));
  const viewing = requested ?? currentISO;

  const monday = useMemo(() => isoWeekToDate(viewing.year, viewing.week), [viewing.year, viewing.week]);
  const weekRange = useMemo(() => formatWeekRange(monday), [monday]);
  const tips = useMemo(() => tipsForWeek(viewing.year, viewing.week), [viewing.year, viewing.week]);

  const isViewingCurrent = viewing.year === currentISO.year && viewing.week === currentISO.week;

  // Previous 4 weeks for the history section
  const previousWeeks = useMemo(() => {
    const weeks: { label: string; range: string; iso: string }[] = [];
    for (let i = 1; i <= 4; i++) {
      const past = new Date(now);
      past.setUTCDate(now.getUTCDate() - i * 7);
      const iso = getISOWeek(past);
      const pastMonday = isoWeekToDate(iso.year, iso.week);
      weeks.push({
        label: isoLabel(iso.year, iso.week),
        range: formatWeekRange(pastMonday),
        iso: isoLabel(iso.year, iso.week),
      });
    }
    return weeks;
  }, [now]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const shareText = `I read this week\u2019s tech tips on TekSure and thought of you. Five quick, practical tips for ${weekRange}:\n\nhttps://teksure.com/this-week${
    requested ? `?week=${isoLabel(viewing.year, viewing.week)}` : ''
  }`;

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard not available; ignore
    }
  };

  const mailtoLink = `mailto:?subject=${encodeURIComponent(
    'This week\u2019s tech tips from TekSure'
  )}&body=${encodeURIComponent(shareText)}`;

  const goToWeek = (label: string) => {
    setSearchParams({ week: label });
  };

  const clearWeek = () => {
    setSearchParams({});
  };

  return (
    <>
      <SEOHead
        title={`This Week at TekSure — ${weekRange}`}
        description="Five fresh, practical tech tips every week — scams to avoid, hidden settings worth turning on, quick fixes, and senior-friendly features."
        path="/this-week"
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <div className="container max-w-3xl pt-4 px-4">
          <PageBreadcrumb segments={[{ label: 'This Week' }]} />
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="border-b border-amber-200/70 dark:border-white/10 py-14 md:py-20">
          <div className="container max-w-3xl text-center px-4">
            <Badge className="mb-5 bg-amber-200/70 text-amber-900 hover:bg-amber-200/70 border-0 px-3 py-1 text-sm dark:bg-amber-900/40 dark:text-amber-100">
              <Sparkles className="w-4 h-4 mr-1.5" aria-hidden="true" />
              {isViewingCurrent ? 'This week' : 'Archive'}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
              This Week at TekSure
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Five tips to help you stay safer, save money, and get more out of the tech in your life.
            </p>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Week of {weekRange}
              {!isViewingCurrent && (
                <button
                  onClick={clearWeek}
                  className="ml-3 text-sm font-semibold text-orange-700 dark:text-orange-400 hover:underline"
                >
                  Jump to this week →
                </button>
              )}
            </p>
          </div>
        </section>

        {/* ── 5 Tip cards (column layout) ──────────────────────────────── */}
        <section className="container max-w-3xl px-4 py-12 md:py-16 space-y-8">
          {tips.map((tip, idx) => {
            const Icon = ICONS[tip.icon] ?? Lightbulb;
            const colors = CATEGORY_COLORS[tip.category];
            return (
              <Card
                key={`${viewing.year}-${viewing.week}-${tip.id}`}
                className="rounded-3xl border-2 border-amber-100 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-7 md:p-9">
                  {/* Top row: icon + category + tip number */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 ring-1 ${colors.ring}`}
                    >
                      <Icon className="h-7 w-7 md:h-8 md:w-8" />
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className={`${colors.text} border-current/30 text-xs font-semibold`}
                        >
                          {tip.category}
                        </Badge>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Tip {idx + 1} of 5
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
                    {tip.headline}
                  </h2>

                  {/* Body paragraphs */}
                  <div className="space-y-3 mb-6">
                    {tip.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Try-this CTA */}
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base h-12 px-6"
                  >
                    <Link to={tip.ctaHref} className="inline-flex items-center gap-2">
                      {tip.ctaLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* ── Previous weeks ───────────────────────────────────────────── */}
        <section className="border-y border-amber-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-950/40 py-12">
          <div className="container max-w-3xl px-4">
            <div className="flex items-center gap-2 mb-6">
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Previous weeks
              </h2>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
              Missed a week? Catch up on recent tips.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {previousWeeks.map((w) => (
                <li key={w.label}>
                  <button
                    onClick={() => goToWeek(w.label)}
                    className="w-full text-left rounded-2xl border-2 border-amber-100 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all p-5 group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-1">
                          {w.label}
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {w.range}
                        </p>
                      </div>
                      <ChevronRight
                        className="h-5 w-5 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Subscribe ────────────────────────────────────────────────── */}
        <section className="py-14 md:py-20">
          <div className="container max-w-2xl px-4">
            <Card className="rounded-3xl border-2 border-orange-200 dark:border-orange-900/40 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50 dark:from-orange-950/30 dark:via-slate-900 dark:to-amber-950/30 shadow-lg">
              <CardContent className="p-8 md:p-10 text-center">
                <Mail className="h-10 w-10 mx-auto text-orange-700 dark:text-orange-400 mb-4" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Want these delivered to your email?
                </h2>
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  One short email every week. Five tips, no fluff, always free.
                  Unsubscribe any time.
                </p>

                {subscribed ? (
                  <div
                    role="status"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 px-5 py-3 font-semibold"
                  >
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    Thanks! We&rsquo;ll send the next tips to your inbox.
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    aria-label="Subscribe to weekly tips"
                  >
                    <label htmlFor="weekly-email" className="sr-only">
                      Email address
                    </label>
                    <Input
                      id="weekly-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="h-12 text-base rounded-full px-5 bg-white dark:bg-slate-900"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 shrink-0"
                    >
                      Sign me up
                    </Button>
                  </form>
                )}
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
                  We don&rsquo;t sell your email. We don&rsquo;t track clicks. Ever.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Share section ────────────────────────────────────────────── */}
        <section className="pb-20">
          <div className="container max-w-2xl px-4">
            <Card className="rounded-3xl border-2 border-amber-100 dark:border-white/10 bg-white dark:bg-slate-900">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-teal-100 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 flex items-center justify-center shrink-0">
                    <Share2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Send this to a friend
                    </h2>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      A little tech help goes a long way. Share this week&rsquo;s tips with someone who&rsquo;d find them useful.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50 dark:bg-slate-950/50 border border-amber-200 dark:border-white/10 p-4 mb-5">
                  <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {shareText}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleCopyShare}
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-orange-300 text-orange-900 dark:text-orange-200 dark:border-orange-800 font-semibold h-12 flex-1"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
                        Copied!
                      </>
                    ) : (
                      'Copy share text'
                    )}
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold h-12 flex-1"
                  >
                    <a href={mailtoLink}>
                      <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                      Send by email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
