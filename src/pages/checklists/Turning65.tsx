import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cake,
  Printer,
  CheckCircle2,
  ShieldAlert,
  Heart,
  HelpCircle,
  Calendar,
  PhoneCall,
  Landmark,
  Pill,
  FileText,
  KeyRound,
  Briefcase,
  HeartPulse,
  HandHeart,
  UserCheck,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ──────────────────────────────────────────────────────────────
 * Turning 65 — Your Tech + Benefits Checklist
 * ------------------------------------------------------------
 * A life-transition interactive checklist for people approaching
 * age 65. Covers Medicare, Social Security, retirement planning,
 * and digital cleanup. State persists in localStorage under
 * `teksure:turning-65`.
 *
 * Plain-language, senior-friendly design per TekSure standards.
 * ────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'teksure:turning-65';

/* ── Timeline data ────────────────────────────────── */

interface TimelineStep {
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  tint: string;
}

const TIMELINE: TimelineStep[] = [
  {
    label: '7 months before 65',
    title: 'Initial Enrollment Period opens',
    body: 'Your 7-month Medicare sign-up window begins 3 months before the month you turn 65. Start by logging in at ssa.gov to see your benefit estimate and confirm your records are correct.',
    icon: Calendar,
    tint: 'text-amber-700 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900',
  },
  {
    label: '6 months before 65',
    title: 'Decide your Medicare path',
    body: 'Choose between Original Medicare (Parts A + B, often paired with Medigap and Part D) or Medicare Advantage (Part C). A SHIP counselor in your state gives free, unbiased help — no sales pitch.',
    icon: HeartPulse,
    tint: 'text-orange-700 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900',
  },
  {
    label: '3 months before 65',
    title: 'Enroll in Medicare',
    body: 'Apply at medicare.gov or by calling Social Security at 1-800-772-1213. If you already get Social Security benefits, enrollment in Parts A and B happens automatically.',
    icon: UserCheck,
    tint: 'text-rose-700 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900',
  },
  {
    label: '2 months before 65',
    title: 'Coordinate with employer coverage',
    body: 'If you are still working with group coverage, talk with HR about whether to delay Part B. If you leave the job, you get a Special Enrollment Period — COBRA does not count as creditable coverage in most cases.',
    icon: Briefcase,
    tint: 'text-purple-700 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900',
  },
  {
    label: 'The month you turn 65',
    title: 'Coverage begins',
    body: 'Medicare coverage starts on the first day of your birthday month (or the month before, if your birthday is on the 1st). Watch the mail for your red-white-and-blue Medicare card.',
    icon: Cake,
    tint: 'text-pink-700 bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-900',
  },
  {
    label: '1 month after',
    title: 'Set up your MyMedicare account',
    body: 'Go to mymedicare.gov and create an account. This is where you track claims, find in-network providers, and compare plans during Open Enrollment.',
    icon: KeyRound,
    tint: 'text-blue-700 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900',
  },
  {
    label: '3 months after',
    title: 'Review prescription coverage',
    body: 'Medicare Annual Enrollment runs October 15 through December 7. Use Plan Finder on medicare.gov to compare Part D drug plans with your actual prescriptions entered.',
    icon: Pill,
    tint: 'text-teal-700 bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-900',
  },
  {
    label: '1 year and ongoing',
    title: 'Annual Medicare review',
    body: 'Each fall, double-check your plan still covers your doctors, pharmacies, and medications. Plans change their drug lists and provider networks every year.',
    icon: RotateCcw,
    tint: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900',
  },
];

/* ── Checklist sections ───────────────────────────── */

interface ChecklistItem {
  id: string;
  label: string;
  detail: string;
  link?: { url: string; label: string; internal?: boolean };
}

interface ChecklistSection {
  title: string;
  icon: LucideIcon;
  tint: string;
  items: ChecklistItem[];
}

const SECTIONS: ChecklistSection[] = [
  {
    title: 'Social Security & Medicare basics',
    icon: Landmark,
    tint: 'text-amber-700',
    items: [
      {
        id: 'ssa-account',
        label: 'Create a mySocialSecurity account',
        detail: 'Go to ssa.gov/myaccount. You will need to verify your identity with Login.gov or ID.me. Keep the login info in a password manager.',
        link: { url: 'https://www.ssa.gov/myaccount', label: 'ssa.gov/myaccount' },
      },
      {
        id: 'benefit-estimate',
        label: 'Request your estimated benefit amount',
        detail: 'Your Social Security Statement shows your estimated monthly benefit at 62, at full retirement age, and at 70. Waiting past 65 can raise your monthly check.',
      },
      {
        id: 'medicare-path',
        label: 'Pick your Medicare path (Original vs. Advantage)',
        detail: 'Original Medicare (A + B) with Medigap gives the widest doctor choice. Medicare Advantage bundles drug coverage with lower premiums but network limits.',
      },
      {
        id: 'part-a',
        label: 'Enroll in Part A (hospital) — free for most people',
        detail: 'If you or a spouse paid Medicare taxes for at least 10 years, Part A has no monthly premium.',
      },
      {
        id: 'part-b',
        label: 'Enroll in Part B (doctor visits) — has a monthly premium',
        detail: 'Part B covers doctor visits, outpatient care, and preventive services. The 2026 standard premium is deducted from your Social Security check if you are already receiving benefits.',
      },
      {
        id: 'medigap-advantage',
        label: 'Evaluate Medigap vs. Medicare Advantage',
        detail: 'Medigap (Medicare Supplement) pays the out-of-pocket costs Original Medicare leaves behind. You can switch later, but medical underwriting may apply — the best time to enroll is during your 6-month Medigap Open Enrollment.',
      },
      {
        id: 'part-d',
        label: 'Pick a Part D drug plan if you chose Original Medicare',
        detail: 'Part D is prescription coverage. Skipping it when you are first eligible adds a lifetime late-enrollment penalty unless you have other creditable drug coverage.',
      },
      {
        id: 'mymedicare',
        label: 'Set up your MyMedicare.gov account',
        detail: 'After your Medicare card arrives, create an account at mymedicare.gov to view claims, order a replacement card, and access Plan Finder.',
        link: { url: 'https://www.medicare.gov', label: 'medicare.gov' },
      },
    ],
  },
  {
    title: 'Healthcare setup',
    icon: HeartPulse,
    tint: 'text-rose-700',
    items: [
      {
        id: 'pharmacy',
        label: 'Update pharmacy with your new insurance info',
        detail: 'Bring your Medicare card and Part D card (or Advantage card) to your pharmacy before your first refill under Medicare.',
      },
      {
        id: 'primary-care',
        label: 'Find a primary care doctor who accepts Medicare',
        detail: 'Use the Care Compare tool on medicare.gov to check a doctor\'s Medicare status. Call the office to confirm they are taking new Medicare patients.',
      },
      {
        id: 'records',
        label: 'Transfer medical records to your new providers',
        detail: 'Ask your current doctor\'s office for a records release form. Federal law (HIPAA) gives you the right to a copy within 30 days.',
      },
    ],
  },
  {
    title: 'Work & employer',
    icon: Briefcase,
    tint: 'text-purple-700',
    items: [
      {
        id: 'employer-hr',
        label: 'Notify employer HR if you are still working',
        detail: 'Ask HR for written confirmation that your employer coverage is "creditable" for Part D. Small-employer rules (under 20 employees) are different — Medicare usually becomes your primary.',
      },
      {
        id: 'cobra',
        label: 'If leaving a job: compare COBRA vs. Medicare carefully',
        detail: 'COBRA is rarely a good substitute for Medicare Part B. Most people should enroll in Part B when Medicare-eligible to avoid late penalties.',
      },
      {
        id: 'linkedin',
        label: 'Update LinkedIn and résumé if consulting or part-time',
        detail: 'Many retirees pick up consulting work. Keeping your LinkedIn current makes that easier when you are ready.',
      },
    ],
  },
  {
    title: 'Estate & legacy planning',
    icon: FileText,
    tint: 'text-blue-700',
    items: [
      {
        id: 'beneficiaries',
        label: 'Update beneficiary designations',
        detail: 'Check beneficiaries on life insurance, 401(k), IRA, bank accounts, and pension. Beneficiary forms override what is in your will.',
      },
      {
        id: 'life-insurance',
        label: 'Review life insurance needs',
        detail: 'Some people need less life insurance once kids are grown and mortgages are paid. Others want a policy to cover final expenses — a few thousand dollars can make a hard time easier for family.',
      },
      {
        id: 'pension',
        label: 'Check pension status with former employers',
        detail: 'If you had a pension at any job, contact the plan administrator to confirm what you are owed and when payments begin. The PBGC.gov site helps find lost pensions.',
      },
      {
        id: 'will-poa',
        label: 'Update your will, power of attorney, and healthcare directive',
        detail: 'A healthcare directive (also called a living will) says what medical treatment you want if you cannot speak for yourself. A durable power of attorney lets someone handle your finances if you are unable.',
      },
      {
        id: 'rmd',
        label: 'Learn about Required Minimum Distributions (start at age 73)',
        detail: 'The IRS requires you to withdraw a minimum from traditional IRAs and 401(k)s starting at 73 (rules from the SECURE 2.0 Act). Missing an RMD can trigger a 25% penalty.',
      },
    ],
  },
  {
    title: 'Save money — use the benefits you\'ve earned',
    icon: HandHeart,
    tint: 'text-emerald-700',
    items: [
      {
        id: 'aarp',
        label: 'Enroll in AARP if you want the discounts',
        detail: 'AARP membership is open at 50+ (not required at 65). The discounts cover travel, rental cars, restaurants, and prescription savings — worth it for many people.',
      },
      {
        id: 'senior-discounts',
        label: 'Claim senior discounts (phone, movies, museums, travel)',
        detail: 'Ask everywhere: phone carriers have 55+ plans, many movie theaters offer senior tickets, national parks sell a lifetime Senior Pass for $80.',
        link: { url: '/tools/senior-discount-finder', label: 'Senior Discount Finder', internal: true },
      },
      {
        id: 'long-term-care',
        label: 'Consider long-term care insurance (window closes with age)',
        detail: 'Premiums rise sharply each year past 65, and existing health conditions can block approval. Even a small policy covers home-care hours if you need them.',
      },
    ],
  },
  {
    title: 'Digital cleanup & records',
    icon: KeyRound,
    tint: 'text-cyan-700',
    items: [
      {
        id: 'digital-will',
        label: 'Make a digital estate plan',
        detail: 'Document how loved ones access your email, photos, and financial accounts if something happens. A password manager plus a sealed note in a safe is a common setup.',
        link: { url: '/tools/digital-will-template', label: 'Digital Will Template', internal: true },
      },
      {
        id: 'password-manager',
        label: 'Set up a password manager you trust',
        detail: 'A password manager generates and stores strong passwords. Share master access with one trusted person as part of your digital estate plan.',
        link: { url: '/tools/password-strength', label: 'Password Strength Tester', internal: true },
      },
      {
        id: 'scan-docs',
        label: 'Scan important documents to secure cloud storage',
        detail: 'Will, deed, car title, birth certificate, Social Security card, Medicare card, insurance policies. Keep originals in a fireproof safe; scans in an encrypted cloud folder.',
      },
      {
        id: 'photo-backup',
        label: 'Back up your photos',
        detail: 'Pick one place (iCloud, Google Photos, Amazon Photos) and make sure backup is on. Decades of photos on a phone with no backup is a heartbreak waiting to happen.',
      },
      {
        id: 'emergency-contacts',
        label: 'Create a one-page emergency contacts list',
        detail: 'Doctor, pharmacy, emergency contact, power of attorney, attorney, financial advisor, insurance agents. Print a copy for the fridge and one for your wallet.',
      },
    ],
  },
  {
    title: 'Community & connection',
    icon: Heart,
    tint: 'text-orange-700',
    items: [
      {
        id: 'senior-center',
        label: 'Explore your local senior center',
        detail: 'Senior centers run free classes, fitness, meals, and social events. Find yours through your Area Agency on Aging (call 1-800-677-1116).',
      },
    ],
  },
];

/* ── FAQ data ────────────────────────────────────── */

const FAQ = [
  {
    q: 'Is Medicare automatic when I turn 65?',
    a: 'Only if you are already receiving Social Security retirement benefits — then Parts A and B start automatically the first day of your birthday month. If you are not yet taking Social Security, you must enroll yourself during your Initial Enrollment Period at ssa.gov or by phone.',
  },
  {
    q: 'What if I\'m still working at 65?',
    a: 'You usually want Part A (it is free for most people). Whether to take Part B depends on your employer plan. If your employer has 20 or more employees, you can delay Part B without penalty. If under 20 employees, Medicare becomes your primary insurance and you should enroll on time. Ask your HR for written confirmation of your coverage status.',
  },
  {
    q: 'Can I change my mind after picking a Medicare plan?',
    a: 'Yes. Annual Enrollment runs October 15 through December 7 each year — that is when you can switch Medicare Advantage plans, change Part D plans, or move between Original Medicare and Advantage. Some changes (like adding Medigap later) may require medical underwriting, which is why the 6-month Medigap Open Enrollment at age 65 matters.',
  },
  {
    q: 'Is Social Security taxable income?',
    a: 'Sometimes. If your combined income is above a threshold ($25,000 single / $32,000 married filing jointly for federal tax), up to 85% of your Social Security can be taxed. State rules vary — 13 states tax Social Security benefits; the other 37 do not. Talk to a tax preparer or use the IRS Tax Withholding Estimator for your situation.',
  },
];

/* ── Helpers ────────────────────────────────────── */

function loadChecked(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveChecked(state: Record<string, boolean>) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage full or blocked — fail silently */
  }
}

/* ── Page component ───────────────────────────────── */

export default function Turning65() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setChecked(loadChecked());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveChecked(checked);
  }, [checked, hydrated]);

  const allItems = useMemo(
    () => SECTIONS.flatMap((s) => s.items),
    [],
  );
  const totalCount = allItems.length;
  const completedCount = useMemo(
    () => allItems.filter((i) => checked[i.id]).length,
    [allItems, checked],
  );
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const resetAll = () => {
    if (typeof window === 'undefined') return;
    const ok = window.confirm('Clear every check on this page? This cannot be undone.');
    if (ok) setChecked({});
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      <SEOHead
        title="Turning 65 — Your Tech + Benefits Checklist | TekSure"
        description="An interactive checklist for people approaching age 65. Covers Medicare, Social Security, retirement planning, senior discounts, and digital cleanup. Free, plain-English, no sales pitch."
        path="/checklists/turning-65"
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container pt-6 print:hidden">
          <PageBreadcrumb
            items={[
              { label: 'Checklists', href: '/checklists' },
              { label: 'Turning 65' },
            ]}
          />
        </div>

        {/* ── Hero ──────────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 dark:from-amber-950/50 dark:via-orange-950/30 dark:to-rose-950/40 print:bg-white print:border-none">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6 print:hidden">
              <BookmarkButton
                type="tool"
                slug="turning-65"
                title="Turning 65 — Your Tech + Benefits Checklist"
                url="/checklists/turning-65"
              />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300">
                <Cake className="w-7 h-7" aria-hidden="true" />
              </div>
              <Badge variant="outline" className="text-xs">
                Life Transition · Interactive Checklist
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 text-amber-950 dark:text-amber-50">
              Turning 65 — Your Tech + Benefits Checklist
            </h1>
            <p className="text-lg md:text-2xl text-amber-900/90 dark:text-amber-100/90 max-w-3xl leading-relaxed">
              Don't miss deadlines. Get the benefits you've earned.
            </p>
            <p className="mt-4 text-base md:text-lg text-amber-900/80 dark:text-amber-100/80 max-w-3xl leading-relaxed">
              This page walks you through everything that happens in the months around your 65th birthday — Medicare enrollment, Social Security choices, retirement housekeeping, and the digital cleanup most people forget. Check each box as you go. Your progress is saved on this device.
            </p>

            <div className="flex flex-wrap gap-3 mt-6 print:hidden">
              <Button asChild size="lg" className="text-base min-h-14 bg-amber-700 hover:bg-amber-800 text-white">
                <a href="#timeline">See the 7-month timeline</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                <a href="#checklist">Jump to the checklist</a>
              </Button>
              <Button
                onClick={handlePrint}
                size="lg"
                variant="outline"
                className="text-base min-h-14"
              >
                <Printer className="w-5 h-5 mr-2" aria-hidden="true" />
                Printable one-pager
              </Button>
            </div>

            {/* Progress */}
            <Card className="mt-8 border-amber-300 dark:border-amber-900 bg-white/80 dark:bg-amber-950/40 backdrop-blur print:hidden">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-base md:text-lg text-amber-900 dark:text-amber-100">
                    Your progress
                  </div>
                  <div className="text-base md:text-lg font-bold text-amber-800 dark:text-amber-200">
                    {completedCount} of {totalCount} ({percent}%)
                  </div>
                </div>
                <Progress value={percent} className="h-3" />
                <div className="flex flex-wrap gap-3 items-center justify-between mt-4">
                  <p className="text-sm text-amber-900/80 dark:text-amber-100/80">
                    Progress is saved locally in your browser. Clearing cookies will reset it.
                  </p>
                  {completedCount > 0 && (
                    <Button
                      onClick={resetAll}
                      variant="ghost"
                      size="sm"
                      className="text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 min-h-10"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
                      Reset all
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────── */}
        <section id="timeline" className="container py-10 md:py-14 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">The 7-month window (and beyond)</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Medicare calls this your Initial Enrollment Period. It starts 3 months before your birthday month, includes the birthday month itself, and ends 3 months after. Missing it can mean lifetime late penalties — so the earlier you start, the better.
            </p>

            <ol className="space-y-4">
              {TIMELINE.map((step) => {
                const StepIcon = step.icon;
                return (
                  <li key={step.label}>
                    <Card className={`border-l-4 ${step.tint}`}>
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-start gap-4">
                          <div className={`shrink-0 p-3 rounded-lg ${step.tint}`}>
                            <StepIcon className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs md:text-sm uppercase tracking-wide font-semibold text-muted-foreground mb-1">
                              {step.label}
                            </div>
                            <div className="text-lg md:text-xl font-bold mb-2">
                              {step.title}
                            </div>
                            <p className="text-base leading-relaxed text-foreground/90">
                              {step.body}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ── Scam warning ─────────────────────────── */}
        <section className="container pb-4">
          <Alert className="border-red-300 bg-red-50 dark:bg-red-950/40 dark:border-red-900">
            <ShieldAlert className="h-5 w-5 text-red-700 dark:text-red-300" />
            <AlertTitle className="text-red-900 dark:text-red-100 text-lg font-bold">
              Scam warnings for new Medicare members
            </AlertTitle>
            <AlertDescription className="text-red-900/90 dark:text-red-100/90 text-base leading-relaxed">
              <p className="mb-2">
                Brand-new Medicare enrollees are a top target for phone scams. Watch for calls or texts saying:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>"We need to send your new card"</strong> — Medicare never calls to send cards.</li>
                <li><strong>"Free back brace / knee brace / DNA test kit"</strong> — billing fraud in your name.</li>
                <li><strong>"Confirm your Medicare number"</strong> — Medicare already has it.</li>
                <li><strong>"We can lower your premium"</strong> — premiums are set by CMS, not a caller.</li>
              </ul>
              <p className="mb-3">
                Never give your Medicare number, Social Security number, or bank info to a caller you did not contact first. Hang up and call Medicare directly at <strong>1-800-MEDICARE</strong>.
              </p>
              <Button asChild variant="outline" className="bg-white dark:bg-red-950/60 border-red-300 dark:border-red-800 text-red-900 dark:text-red-100 hover:bg-red-100 dark:hover:bg-red-900/60 min-h-12">
                <Link to="/tools/is-this-real">
                  <ShieldAlert className="w-4 h-4 mr-2" aria-hidden="true" />
                  Check a suspicious message with Is This Real?
                </Link>
              </Button>
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Free help card ───────────────────────── */}
        <section className="container pb-10">
          <Alert className="border-green-300 bg-green-50 dark:bg-green-950/40 dark:border-green-900">
            <HandHeart className="h-5 w-5 text-green-700 dark:text-green-300" />
            <AlertTitle className="text-green-900 dark:text-green-100 text-lg font-bold">
              Free help is real — and independent
            </AlertTitle>
            <AlertDescription className="text-green-900/90 dark:text-green-100/90 text-base leading-relaxed">
              <p className="mb-3">
                These organizations give free, unbiased guidance. They do not sell plans.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li>
                  <strong>SHIP</strong> — State Health Insurance Assistance Program. Free one-on-one Medicare counseling in every state. Find your state program at <span className="font-mono text-sm">shiphelp.org</span>.
                </li>
                <li>
                  <strong>AARP Foundation</strong> — Free tax prep (Tax-Aide), benefit screenings, legal aid referrals. Website: <span className="font-mono text-sm">aarpfoundation.org</span>.
                </li>
                <li>
                  <strong>VITA / TCE</strong> — IRS-sponsored free tax help for seniors and moderate-income filers. Search "VITA near me" on irs.gov.
                </li>
                <li>
                  <strong>Area Agencies on Aging</strong> — Local support for meals, transportation, caregiving, and benefits. Call the Eldercare Locator at <strong>1-800-677-1116</strong>.
                </li>
                <li>
                  <strong>211</strong> — Dial 2-1-1 for a United Way info line covering housing, utilities, food, and senior services in your community.
                </li>
                <li>
                  <strong>medicare.gov</strong> — The only official Medicare site. Any other "Medicare" URL is a private business.
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Checklist ────────────────────────────── */}
        <section id="checklist" className="container pb-12 md:pb-16 scroll-mt-20">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Your interactive checklist</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Tap each item as you finish it. Your checks are saved on this device. Print the page any time for a paper copy you can share with a spouse or family member.
            </p>

            <div className="space-y-8">
              {SECTIONS.map((section) => {
                const SectionIcon = section.icon;
                const done = section.items.filter((i) => checked[i.id]).length;
                return (
                  <Card key={section.title} className="overflow-hidden">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`p-2 rounded-lg bg-muted ${section.tint}`}>
                          <SectionIcon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold">{section.title}</h3>
                          <div className="text-sm text-muted-foreground">
                            {done} of {section.items.length} done
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {section.items.map((item) => {
                          const isChecked = !!checked[item.id];
                          return (
                            <li key={item.id}>
                              <label
                                htmlFor={`chk-${item.id}`}
                                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors min-h-14 ${
                                  isChecked
                                    ? 'bg-green-50 border-green-300 dark:bg-green-950/30 dark:border-green-800'
                                    : 'bg-background border-border hover:bg-muted/40'
                                }`}
                              >
                                <Checkbox
                                  id={`chk-${item.id}`}
                                  checked={isChecked}
                                  onCheckedChange={() => toggle(item.id)}
                                  className="mt-1 h-5 w-5"
                                />
                                <div className="flex-1">
                                  <div
                                    className={`text-base md:text-lg font-semibold leading-snug ${
                                      isChecked ? 'text-green-900 dark:text-green-100 line-through decoration-2 decoration-green-500' : ''
                                    }`}
                                  >
                                    {item.label}
                                  </div>
                                  <div
                                    className={`text-sm md:text-base leading-relaxed mt-1 ${
                                      isChecked
                                        ? 'text-green-900/80 dark:text-green-100/80'
                                        : 'text-muted-foreground'
                                    }`}
                                  >
                                    {item.detail}
                                  </div>
                                  {item.link && (
                                    <div className="mt-2 print:hidden">
                                      {item.link.internal ? (
                                        <Link
                                          to={item.link.url}
                                          onClick={(e) => e.stopPropagation()}
                                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline min-h-10"
                                        >
                                          {item.link.label}
                                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                        </Link>
                                      ) : (
                                        <a
                                          href={item.link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline min-h-10"
                                        >
                                          {item.link.label}
                                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                        </a>
                                      )}
                                    </div>
                                  )}
                                </div>
                                {isChecked && (
                                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-1" aria-hidden="true" />
                                )}
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {percent === 100 && (
              <Card className="mt-8 border-green-400 bg-green-50 dark:bg-green-950/40 dark:border-green-800 print:hidden">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-10 h-10 mx-auto text-green-600 dark:text-green-400 mb-3" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                    You finished the checklist!
                  </h3>
                  <p className="text-base text-green-900/90 dark:text-green-100/90 leading-relaxed">
                    Turning 65 is a lot of paperwork. Well done. Bookmark this page and come back for the annual Medicare review each fall.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────── */}
        <section className="container pb-12 md:pb-16 print:hidden">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-amber-700" aria-hidden="true" />
              Common questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Quick answers to the questions we hear most often about turning 65.
            </p>
            <Accordion type="single" collapsible className="space-y-2">
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-xl px-4 bg-card"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold min-h-14 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Alert className="mt-8 border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-900">
              <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">This is educational, not advice</AlertTitle>
              <AlertDescription className="text-amber-900/90 dark:text-amber-100/90 text-base leading-relaxed">
                Medicare and Social Security rules change every year, and your situation is unique. For personal decisions, talk to a free SHIP counselor or a licensed advisor before enrolling.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* ── Related TekSure tools ───────────────── */}
        <section className="container pb-12 print:hidden">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Keep going on TekSure</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="hover:border-amber-400 transition-colors">
                <CardContent className="p-5">
                  <div className="p-2 inline-flex rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 mb-3">
                    <Landmark className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Government Benefits Portal</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Senior-friendly walkthroughs for every major .gov benefits site — SSA, Medicare, VA, IRS, SNAP.
                  </p>
                  <Link
                    to="/tools/government-benefits-portal"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline min-h-10"
                  >
                    Open portal guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:border-amber-400 transition-colors">
                <CardContent className="p-5">
                  <div className="p-2 inline-flex rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 mb-3">
                    <HandHeart className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Free Resource Hub</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Free, legal resources for seniors — streaming, library apps, classes, tax help, and more.
                  </p>
                  <Link
                    to="/tools/free-resource-hub"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline min-h-10"
                  >
                    Browse free resources <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:border-amber-400 transition-colors">
                <CardContent className="p-5">
                  <div className="p-2 inline-flex rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300 mb-3">
                    <FileText className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1">Money guides</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Plain-English guides on bills, banking apps, refunds, scams, and protecting your money online.
                  </p>
                  <Link
                    to="/guides?category=money"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline min-h-10"
                  >
                    Read money guides <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Call to contact ──────────────────────── */}
        <section className="container pb-16 print:hidden">
          <Card className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-amber-950/30 dark:to-rose-950/30 border-amber-200 dark:border-amber-900">
            <CardContent className="p-6 md:p-8 text-center">
              <PhoneCall className="w-10 h-10 mx-auto text-amber-700 dark:text-amber-300 mb-3" aria-hidden="true" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">Want a person to walk you through this?</h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-5">
                Book a free, no-pressure session with a TekSure guide — we'll help you set up mySocialSecurity, MyMedicare, and your password manager together.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="text-base min-h-14 bg-amber-700 hover:bg-amber-800 text-white">
                  <Link to="/get-help">Get personal help</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                  <Link to="/retirement-tech">Visit the Retirement Tech hub</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />

      {/* Print-only one-pager styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .container { max-width: 100% !important; padding: 0.5in !important; }
          h1 { font-size: 24pt !important; margin-bottom: 0.25in !important; }
          h2 { font-size: 16pt !important; margin-top: 0.25in !important; }
          h3 { font-size: 13pt !important; }
          section { page-break-inside: avoid; }
          ol, ul { page-break-inside: avoid; }
          li { page-break-inside: avoid; }
          a { color: black !important; text-decoration: none !important; }
        }
      `}</style>
    </>
  );
}
