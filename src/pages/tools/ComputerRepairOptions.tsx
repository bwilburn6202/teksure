import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wrench, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface RepairOption {
  name: string;
  cost: string;
  turnaround: string;
  fixes: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const OPTIONS: RepairOption[] = [
  {
    name: 'Apple Store / Apple Authorized Service',
    cost: 'Diagnostic free under warranty. Out-of-warranty: screen 280-580, battery 130-200, logic board 600-1,500.',
    turnaround: '1-7 days (same-day for batteries and screens at busy stores).',
    fixes: 'Macs, iPads, iPhones — anything Apple. Genuine parts, full warranty work.',
    whoFor: 'Anyone with an Apple device still under AppleCare or under 5 years old.',
    pros: [
      'Genuine Apple parts, certified technicians.',
      'Free diagnostic if you have AppleCare+.',
      'Repairs covered by 90-day warranty after work.',
      'Stores and Best Buy locations both qualify.',
    ],
    cons: [
      'Most expensive option for out-of-warranty work.',
      'Older Macs (8+ years) flagged as "vintage" — may decline service.',
      'Appointments fill up — book a week ahead.',
    ],
    link: 'https://support.apple.com/repair',
  },
  {
    name: 'Best Buy Geek Squad',
    cost: 'Diagnostic 100. Membership 200/year covers most labor. Per-fix: 150-450 for non-members.',
    turnaround: '3-7 days in-store. 7-14 days if shipped to a service center.',
    fixes: 'Windows PCs, Macs, printers, network gear, virus removal, data recovery basics.',
    whoFor: 'Windows laptop and desktop owners. Anyone who already has a Geek Squad Total membership.',
    pros: [
      'Storefront in nearly every US town — drop off in person.',
      'Apple Authorized — they fix Apple stuff too.',
      'Membership pays back fast if you have multiple devices.',
      'Will set up a replacement if the device is unfixable.',
    ],
    cons: [
      'Quality varies hugely by store and technician.',
      'Upsells common — push back on extras you do not need.',
      'Data recovery is limited — they will not crack a drowned drive.',
    ],
    link: 'https://www.bestbuy.com/services/triage/home',
  },
  {
    name: 'uBreakiFix by Asurion',
    cost: 'Diagnostic free. Screens 150-350, batteries 80-150, ports/keyboards 100-250.',
    turnaround: 'Same-day for most phone and tablet repairs. 2-5 days for laptops.',
    fixes: 'Phones, tablets, laptops, game consoles. Samsung Authorized and Google Authorized.',
    whoFor: 'Anyone with a Samsung Galaxy, Google Pixel, or a cracked screen they want fixed today.',
    pros: [
      'Free diagnostic, no obligation to repair.',
      '1-year warranty on every repair.',
      '700+ US locations — walk in, no appointment.',
      'Genuine Samsung and Google parts.',
    ],
    cons: [
      'Limited Mac repair capacity — phones and tablets are the strength.',
      'Busy stores can run a 2-3 hour wait without an appointment.',
    ],
    link: 'https://www.ubreakifix.com',
  },
  {
    name: 'Local Independent Repair Shop',
    cost: 'Diagnostic 30-60 (often waived if you proceed). Repairs typically 30-50 percent less than chains.',
    turnaround: '1-3 days for common fixes. Same-day if parts are in stock.',
    fixes: 'Almost anything — older laptops, custom-built PCs, soldering, water damage, board-level work.',
    whoFor: 'Older devices the chains refuse, or anyone who wants a real conversation with the person doing the work.',
    pros: [
      'Cheapest skilled labor in most cities.',
      'Will work on devices the chains call "vintage".',
      'You talk directly to the technician — no script.',
      'Often handle data recovery and board-level repair.',
    ],
    cons: [
      'Quality is hit-or-miss — read Google reviews before you commit.',
      'Warranty terms vary — get it in writing.',
      'Aftermarket parts may not match original quality (ask before they install).',
    ],
    link: 'https://www.google.com/search?q=computer+repair+near+me',
  },
  {
    name: 'Mail-In Service (Manufacturer / iFixit)',
    cost: 'Manufacturer warranty: free if covered. Out-of-warranty Dell/HP/Lenovo: 200-600 flat-rate. iFixit parts kit: 50-300 (you do the work).',
    turnaround: '7-14 days door-to-door for manufacturer service. Parts ship in 2-5 days from iFixit.',
    fixes: 'Manufacturer covers original-design issues. iFixit covers anything with a published guide — batteries, screens, hinges, fans.',
    whoFor: 'No good shop nearby, or your laptop is still under the original 1-year warranty.',
    pros: [
      'Use it from anywhere — rural areas with no chains nearby.',
      'Manufacturer service uses original parts, every time.',
      'iFixit guides are step-by-step with photos — actually doable.',
      'Often cheaper than walking into a chain.',
    ],
    cons: [
      'You are without your computer for 1-2 weeks.',
      'Shipping risk — pack it well and insure it.',
      'iFixit means you are the technician — read the whole guide first.',
    ],
    link: 'https://www.ifixit.com',
  },
  {
    name: 'DIY Repair (with caveats)',
    cost: 'Parts only: battery 30-80, RAM 40-100, SSD 60-200. Tools 30 if you do not own them.',
    turnaround: 'A weekend afternoon, plus shipping for the part.',
    fixes: 'Battery swaps, RAM upgrades, SSD upgrades, fan cleaning, keyboard swaps on older laptops.',
    whoFor: 'Anyone comfortable with a screwdriver and a step-by-step video. Not for first-timers on a Mac.',
    pros: [
      'Cheapest possible repair — labor is free.',
      'You learn how the computer works.',
      'iFixit and YouTube have a guide for almost every model.',
    ],
    cons: [
      'One slipped screwdriver can total a 1,500 laptop.',
      'Modern Macs are glued and soldered — many parts cannot be swapped.',
      'No warranty if you break it further.',
      'Static damage is real — wear an anti-static strap.',
    ],
    link: 'https://www.ifixit.com/Guide',
  },
];

export default function ComputerRepairOptions() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Computer Repair Options"
        description="Where to get a computer fixed — Apple Store, Geek Squad, uBreakiFix, local shops, mail-in, and DIY. Plain-English costs, turnaround, and pros and cons."
        path="/tools/computer-repair-options"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-50 via-background to-zinc-50 dark:from-slate-950/20 dark:to-zinc-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-slate-500/10 rounded-full">
                <Wrench className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Computer Repair Options</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six honest places to get a broken computer fixed — what each costs, how long it takes, and when to give up and replace.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Computer Repair Options' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Before you pay for any repair</p>
              <p className="text-xs text-muted-foreground mb-3">
                Back up your files first, if the computer still turns on. A repair shop is allowed to wipe a drive if that fixes the problem — and most will. Plug in an external drive and copy your photos, documents, and downloads. If the computer will not boot at all, ask the shop about data recovery before they begin work, in writing.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? OPTIONS : OPTIONS.slice(0, 3)).map(o => (
              <Card key={o.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{o.name}</p>
                    <Badge variant="outline">{o.turnaround.split('.')[0]}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1"><strong>Cost:</strong> {o.cost}</p>
                  <p className="text-xs text-muted-foreground mb-1"><strong>What they fix:</strong> {o.fixes}</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {o.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {o.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {o.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={o.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 options</Button>
            )}
          </div>

          <Card className="border-red-300 bg-red-50 dark:bg-red-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1 text-red-800 dark:text-red-200">Scam alert: "your computer is infected" callers</p>
                <p className="text-xs text-red-900 dark:text-red-100 mb-2">
                  If anyone calls, emails, or shows a popup saying your computer is infected and offers to fix it remotely — it is always a scam. Microsoft, Apple, Google, and Norton do not call you. Real repair starts with you reaching out, in person or through a known website. Hang up. Close the popup. Never let a stranger remote-control your computer.
                </p>
                <p className="text-xs text-red-900 dark:text-red-100">
                  Common red flags: a phone number on a popup, a "tech" who wants gift-card payment, a request to install AnyDesk or TeamViewer, urgent threats your bank will be drained. Real shops have a storefront, a published phone number, and they let you walk away.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">When to give up and replace</p>
              <p className="text-xs text-muted-foreground mb-2">
                A rough rule: if the repair quote is more than 50 percent of the cost of a new comparable computer, replace it. Other strong signals to walk away from a repair:
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                <li>The device is more than 7 years old (Macs and PCs both).</li>
                <li>It will no longer receive security updates from Apple, Microsoft, or Google.</li>
                <li>It is the second major repair in 12 months.</li>
                <li>The motherboard or logic board is the problem (often more than half a new device).</li>
                <li>It is fully encrypted and the drive failed — your data is likely lost regardless.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Worth knowing about repair quotes</p>
              <p className="text-xs text-muted-foreground">
                Always get the quote in writing before any work begins. Ask three questions: what parts will be used (original or aftermarket), what the warranty is on the repair (most reputable shops give 90 days minimum), and what happens to your data. A shop that refuses to put numbers on paper is a shop to avoid.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/remote-tech-help" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Remote Tech Help</p>
                <p className="text-xs text-muted-foreground mt-0.5">Trusted services that help by phone or screen-share.</p>
              </Link>
              <Link to="/tools/speed-up-device" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Speed Up Device</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free fixes before you pay for a repair.</p>
              </Link>
              <Link to="/tools/device-retirement-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Retirement Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">When the answer is to replace, do it safely.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: take a photo of every cable and port before you hand the computer over. If anything is missing or scratched on return, you have proof.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
