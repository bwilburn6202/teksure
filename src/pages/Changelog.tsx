import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Wrench, Shield, BookOpen, Zap } from 'lucide-react';

const BADGE_STYLES: Record<string, { label: string; className: string; icon: typeof Sparkles }> = {
  feature: { label: 'New Feature', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300', icon: Sparkles },
  improvement: { label: 'Improvement', className: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300', icon: Zap },
  fix: { label: 'Bug Fix', className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', icon: Wrench },
  security: { label: 'Security', className: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300', icon: Shield },
  content: { label: 'Content', className: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300', icon: BookOpen },
};

interface ChangelogEntry {
  date: string;
  items: { type: keyof typeof BADGE_STYLES; text: string }[];
}

const changelog: ChangelogEntry[] = [
  {
    date: 'April 15, 2026',
    items: [
      { type: 'feature', text: '10 new interactive tools: Scam Simulator, Privacy Audit, Streaming Calculator, Data Breach Checker, New Phone Setup Wizard, Subscription Tracker, Internet Speed Advisor, Digital Cleanup, Device Setup Checklist, and Tech Glossary Quiz' },
      { type: 'content', text: '44+ new guides across 7 new categories: Government & Civic, Money & Banking, Smart Home, Entertainment, Communication, Life Transitions, and Internet & WiFi' },
      { type: 'improvement', text: 'Homepage redesigned with Interactive Tools showcase section' },
      { type: 'improvement', text: 'Navigation reorganized — Navbar adds Safety link, Footer expanded to 4 columns' },
      { type: 'improvement', text: 'Tools page now has Setup Wizards and Money & Bills categories' },
      { type: 'improvement', text: 'Forum expanded with Smart Home, Scams, and Printers categories plus search' },
      { type: 'feature', text: 'Auto-merge CI workflow for automated branch merging' },
      { type: 'feature', text: 'Branded TekSure logo assets implemented across site' },
    ],
  },
  {
    date: 'April 14, 2026',
    items: [
      { type: 'feature', text: '3 new tools: Notification Decoder, Safe Call Evaluator, Bill Decoder' },
      { type: 'content', text: '15 new guides including full-scale feature build' },
      { type: 'fix', text: 'Cyber AI Toolkit — 10 bugs fixed across CyberToolkit, CyberScorecard, and OSINT data' },
      { type: 'fix', text: 'SSR rendering, dead links, auth gate, UK-to-US localization, and 20+ bugs fixed' },
    ],
  },
  {
    date: 'April 13, 2026',
    items: [
      { type: 'fix', text: 'Booking flow fixed — resolved profiles RLS infinite recursion and stale column names' },
      { type: 'feature', text: 'Password reset flow — full set-new-password form on recovery link click' },
      { type: 'fix', text: 'Global auth hash error handling and redirectTo URL alignment' },
    ],
  },
  {
    date: 'April 1, 2026',
    items: [
      { type: 'feature', text: 'Autonomous development system launched — daily health checks, weekly content, monthly audits' },
      { type: 'feature', text: 'Server-side rendering (SSR) deployed on Vercel' },
      { type: 'content', text: 'Guide library surpassed 800 guides' },
      { type: 'feature', text: 'Stripe payments live with £15 deposit model' },
    ],
  },
  {
    date: 'March 2026',
    items: [
      { type: 'feature', text: 'TekSure launched — React 18, TypeScript, Supabase, Tailwind, shadcn/ui' },
      { type: 'feature', text: 'Core features: Guides, Tools, Forum, Booking, Admin Console, TekBot AI' },
      { type: 'feature', text: 'Accessibility: Senior Mode, High Contrast, Font Size, Dark Mode, Keyboard Navigation' },
      { type: 'content', text: 'Initial guide library with 300+ guides across 12 categories' },
      { type: 'feature', text: 'Interactive tools: Password Strength, WiFi Speed, Troubleshooter, Device Chooser, and more' },
      { type: 'security', text: 'Supabase RLS policies, protected routes, and admin console security' },
    ],
  },
];

export default function Changelog() {
  return (
    <>
      <SEOHead
        title="Changelog — What's New at TekSure"
        description="See what's new at TekSure — new guides, tools, features, and improvements shipped every week."
        path="/changelog"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container max-w-3xl mx-auto pt-4 px-4">
          <PageBreadcrumb segments={[{ label: 'Changelog' }]} />
        </div>
        <section className="border-b border-border py-14">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Changelog</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Everything we ship — new guides, tools, features, and fixes. Updated weekly.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-12">
            {changelog.map((entry) => (
              <div key={entry.date} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-primary shrink-0" />
                  <h2 className="text-lg font-bold">{entry.date}</h2>
                </div>
                <div className="ml-6 border-l-2 border-border pl-6 space-y-3">
                  {entry.items.map((item, i) => {
                    const badge = BADGE_STYLES[item.type];
                    const Icon = badge.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <Badge variant="secondary" className={`shrink-0 text-xs font-medium gap-1 ${badge.className}`}>
                          <Icon className="h-3 w-3" />
                          {badge.label}
                        </Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
