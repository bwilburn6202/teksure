import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  CalendarClock, ChevronRight, AlertTriangle, Hourglass, Clock,
  Target, PartyPopper, Sun, Printer, type LucideIcon,
} from 'lucide-react';

interface Phase {
  id: string;
  title: string;
  when: string;
  icon: LucideIcon;
  whyNow: string;
  items: { id: string; title: string; detail: string }[];
}

const PHASES: Phase[] = [
  {
    id: 'five-years', title: 'Five years before retirement', when: 'About 60 if you plan to retire at 65',
    icon: Hourglass,
    whyNow: 'Long runway means small habits stick. Start the digital cleanup now and the last year is calm, not frantic.',
    items: [
      { id: '5y-1', title: 'Open a my Social Security account at ssa.gov', detail: 'Sign up at ssa.gov/myaccount and check your earnings record. Errors take months to fix, so finding them now beats finding them at 64. See our Social Security Setup tool for screenshots.' },
      { id: '5y-2', title: 'Inventory every online account in a password manager', detail: 'Bitwarden, 1Password, or iCloud Keychain — pick one. Add every login as you use it for 30 days. By month two you will have a full list. This becomes the master list for everything else later.' },
      { id: '5y-3', title: 'Move work email contacts to a personal address', detail: 'Anyone you want to keep in touch with — friends, doctors, family — should have your personal Gmail, iCloud, or Outlook address. Work email vanishes the day you retire.' },
      { id: '5y-4', title: 'Start backing up phone and computer to the cloud', detail: 'iPhone: Settings, your name, iCloud, iCloud Backup, On. Android: Settings, Google, Backup, On. PC: turn on OneDrive. Mac: turn on iCloud Drive. Five years of muscle memory means nothing gets lost in the transition.' },
    ],
  },
  {
    id: 'one-year', title: 'One year before retirement', when: 'About 64 if you retire at 65', icon: Clock,
    whyNow: 'Medicare enrollment opens 3 months before your 65th birthday. The decisions you make now lock in for a year at a time.',
    items: [
      { id: '1y-1', title: 'Create a Medicare.gov account', detail: 'Go to medicare.gov and click "Log in / Create account". You will need your Social Security number. The portal is where you compare Part D drug plans, Medicare Advantage plans, and track claims later.' },
      { id: '1y-2', title: 'Download and save important work files', detail: 'Anything personal on a work laptop — photos, personal documents, contact lists — copy to a USB drive or personal cloud. IT wipes the device the day you leave.' },
      { id: '1y-3', title: 'List recurring subscriptions paid through work', detail: 'LinkedIn Premium, professional newsletters, software that came through work email — note which you want to keep and move them to personal billing now.' },
      { id: '1y-4', title: 'Update beneficiaries on every retirement account', detail: '401(k), IRA, pension, life insurance. Each plan has its own beneficiary form. Log into each provider, find "Beneficiaries", confirm or update. Old ones pointing to ex-spouses cause real problems for families.' },
      { id: '1y-5', title: 'Plan your Medicare plan comparison', detail: 'Bookmark our Medicare Plan Chooser. The official Medicare Plan Finder at medicare.gov/plan-compare opens during enrollment.' },
    ],
  },
  {
    id: 'six-months', title: 'Six months before retirement', when: 'About 64 and a half', icon: Target,
    whyNow: 'This is enrollment season. Move carefully — there are scammers waiting, and good decisions need a quiet head.',
    items: [
      { id: '6m-1', title: 'Enroll in Medicare during your Initial Enrollment Period', detail: 'Your window is 7 months — 3 before your 65th birthday month, your birthday month, and 3 after. Sign up at ssa.gov/medicare. Missing this window means a permanent late penalty on Part B.' },
      { id: '6m-2', title: 'Compare Part D drug plans against your prescriptions', detail: 'On medicare.gov/plan-compare, type in every medication you take. The tool ranks plans by your actual yearly cost. The cheapest plan for someone else may be the most expensive for you.' },
      { id: '6m-3', title: 'Set up a personal email signature with your new contact info', detail: 'Phone, personal email, mailing address. Send it once to friends, family, doctors, and the pharmacy so the work address can quietly retire with you.' },
      { id: '6m-4', title: 'Forward work calendar items to personal calendar', detail: 'Doctor appointments, family birthdays, recurring reminders that lived on the work calendar — copy them to Google Calendar or Apple Calendar before access ends.' },
    ],
  },
  {
    id: 'first-month', title: 'First month retired', when: 'Day 1 through day 30', icon: PartyPopper,
    whyNow: 'The work laptop is gone. The work email is gone. This month is about making sure everything important still works.',
    items: [
      { id: '1m-1', title: 'Print your Medicare card and store the digital one in your phone wallet', detail: 'Your red, white, and blue card arrives by mail. Photograph the front and back, save to your phone Notes app, and add to Apple Wallet or Google Wallet if your providers accept it.' },
      { id: '1m-2', title: 'Set up the patient portal for every doctor', detail: 'MyChart, FollowMyHealth, Patient Gateway — sign in once for primary care, dentist, eye doctor, specialists. Test results and appointment booking live there.' },
      { id: '1m-3', title: 'Switch any work-tied two-factor codes', detail: 'If your bank, brokerage, or 401(k) sent text codes to a work phone, change the number to your personal cell. Same for any email-based 2FA pointing at the work address.' },
      { id: '1m-4', title: 'Review the password manager and clean up', detail: 'Delete logins for tools you only used at work. Update names so a family member could find what they need. This list is the single most useful thing you can leave behind.' },
    ],
  },
  {
    id: 'six-after', title: 'Six months after retirement', when: 'The new normal', icon: Sun,
    whyNow: 'The settling-in is done. Now lock in the long-term setup so retirement stays calm for years.',
    items: [
      { id: '6a-1', title: 'Schedule an annual digital check-in with a family member', detail: 'Once a year, sit with an adult child or trusted person and walk through the password manager, beneficiary list, and emergency contacts. Put it on the calendar so it actually happens.' },
      { id: '6a-2', title: 'Set up legacy contacts on your phone and email', detail: 'iPhone: Settings, your name, Sign-In and Security, Legacy Contact. Google: myaccount.google.com, Inactive Account Manager. They can access your data if something happens.' },
      { id: '6a-3', title: 'Review every monthly subscription against actual use', detail: 'Streaming, magazines, cloud storage, software. Cancel what you do not use. Retirement income usually shrinks — small monthly bills add up to real money.' },
      { id: '6a-4', title: 'Set up a low-cost cell phone plan for retirees', detail: 'Consumer Cellular, T-Mobile 55+, Verizon 55+ Unlimited, and AARP-discount plans drop most bills by half. The phone you have keeps working — only the SIM or eSIM changes.' },
      { id: '6a-5', title: 'Read our Account After Loss guide together', detail: 'Hard to think about, important to plan. Walk through what a spouse or child would need to access if something happened to you.' },
    ],
  },
];

const RELATED = [
  { href: '/tools/social-security-setup', label: 'Social Security Setup', sub: 'Open my Social Security the right way.' },
  { href: '/tools/medicare-plan-chooser', label: 'Medicare Plan Chooser', sub: 'Compare Original, Advantage, and Part D.' },
  { href: '/tools/account-after-loss', label: 'Account After Loss', sub: 'Plan what family will need access to.' },
];

export default function CountdownToRetirement() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const total = PHASES.reduce((s, p) => s + p.items.length, 0);
  const toggle = (id: string) => setDone(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const printIt = () => window.print();

  return (
    <>
      <SEOHead
        title="Countdown to Retirement: Year-by-Year Tech Checklist"
        description="A free 5-phase tech checklist for the years before and after retirement — Medicare setup, password handover, work-account cleanup, and the digital habits that keep retirement calm. Plain English, US-focused."
        path="/tools/countdown-to-retirement"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3"><div className="p-3 bg-amber-500/10 rounded-full"><CalendarClock className="h-8 w-8 text-amber-600" /></div></div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Countdown to Retirement</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">A year-by-year tech checklist — five phases, from five years out to six months in. Do a few items each phase and the transition stays calm.</p>
            <p className="text-sm text-muted-foreground mt-3">About 20 minutes per phase. Print the kit and tick boxes as you go.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Countdown to Retirement' }]} />
          <Alert className="mb-6 border-amber-300 bg-amber-50 dark:bg-amber-950/30">
            <AlertTriangle className="h-4 w-4 text-amber-700" />
            <AlertTitle className="text-amber-900 dark:text-amber-200">Watch out for Medicare scam calls during enrollment</AlertTitle>
            <AlertDescription className="text-amber-900/80 dark:text-amber-200/80 text-sm">Real Medicare will never call out of the blue asking for your Social Security number, bank info, or a new card fee. During the months around your 65th birthday, scammers ramp up. If a caller pressures you, hang up and call 1-800-MEDICARE yourself. Report scams at ftc.gov/complaint.</AlertDescription>
          </Alert>
          <Card className="border-border shadow-sm mb-6"><CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm text-muted-foreground">{done.size} of {total} done</p>
            <Button onClick={printIt} variant="outline" size="sm" className="gap-2"><Printer className="h-4 w-4" /> Print the checklist</Button>
          </CardContent></Card>
          <Card className="border-border bg-muted/30 mb-6"><CardContent className="p-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skip ahead</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {PHASES.map(p => (
                <a key={p.id} href={`#${p.id}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"><ChevronRight className="h-4 w-4 shrink-0" /><span>{p.title}</span></a>
              ))}
            </div>
          </CardContent></Card>

          {PHASES.map(phase => {
            const Icon = phase.icon;
            return (
              <section key={phase.id} id={phase.id} className="mb-8 scroll-mt-24">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg"><Icon className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h2 className="text-xl font-bold">{phase.title}</h2>
                    <p className="text-xs text-muted-foreground italic">{phase.when}</p>
                    <p className="text-xs text-muted-foreground mt-1">{phase.whyNow}</p>
                  </div>
                </div>
                <Card className="border-border"><CardContent className="p-5"><div className="space-y-3">
                  {phase.items.map(item => (
                    <label key={item.id} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'}`}>
                      <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                      </div>
                    </label>
                  ))}
                </div></CardContent></Card>
              </section>
            );
          })}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {RELATED.map(r => (
                <Link key={r.href} to={r.href} className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <p className="font-medium text-sm">{r.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.sub}</p>
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1"><ChevronRight className="h-3 w-3" /> Quick Tip: stick the printed checklist on the fridge and cross off one item a week. Five years of small steps beats one frantic month.</p>
        </div>

        <div className="hidden print:block px-8 py-6 text-sm">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">Countdown to Retirement Tech Checklist</h1>
            <p className="text-xs text-gray-600 mt-1">Five phases, from five years out to six months in — TekSure.com</p>
          </header>
          {PHASES.map(p => (
            <section key={p.id} className="mb-4 break-inside-avoid">
              <h2 className="font-bold uppercase tracking-wider text-xs mb-1">{p.title} <span className="font-normal italic text-gray-600">({p.when})</span></h2>
              <p className="text-xs text-gray-600 italic mb-2">{p.whyNow}</p>
              <ul className="space-y-1">
                {p.items.map(item => (<li key={item.id} className="leading-snug"><span className="font-mono mr-1">&#9744;</span><strong>{item.title}.</strong> {item.detail}</li>))}
              </ul>
            </section>
          ))}
          <footer className="mt-6 pt-3 border-t border-gray-300 text-xs text-gray-600">More free retirement tech tools at TekSure.com.</footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
