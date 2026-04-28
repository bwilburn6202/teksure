import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ShieldAlert, Search, ChevronRight, ExternalLink } from 'lucide-react';

interface Scam {
  name: string;
  category: string;
  hook: string;
  pattern: string;
  redFlag: string;
  whatToDo: string;
}

const SCAMS: Scam[] = [
  {
    name: 'Grandparent Scam',
    category: 'Family impersonation',
    hook: '"Grandma? It\'s me, Tommy. I\'m in trouble — please don\'t tell Mom and Dad."',
    pattern: 'A frantic young voice (or AI clone of one) calls claiming to be your grandchild. They are in jail / a hospital / stranded. They need money fast — usually gift cards or wire transfer. They beg you not to tell their parents.',
    redFlag: 'The "do not tell anyone" demand. Real family emergencies welcome a second opinion. Scammers need you isolated.',
    whatToDo: 'Hang up. Call the grandchild directly on a number you know is real. If you cannot reach them, call their parents. The scam falls apart in 5 minutes when you do.',
  },
  {
    name: 'IRS / Tax Collection Scam',
    category: 'Government impersonation',
    hook: '"This is the IRS. There is a warrant for your arrest for unpaid taxes. Pay $987 immediately with Apple gift cards or you will be jailed today."',
    pattern: 'Aggressive caller claims to be from the IRS, sometimes with a spoofed Caller ID. Demands payment in gift cards or wire. Threatens arrest, deportation, license suspension.',
    redFlag: 'The IRS does not call. Ever. They write paper letters. They do not take gift cards. They do not threaten arrest by phone.',
    whatToDo: 'Hang up. If worried about real tax issues: irs.gov or 1-800-829-1040. Report the call to TIGTA at tigta.gov.',
  },
  {
    name: 'Tech Support Scam',
    category: 'Tech impersonation',
    hook: 'Pop-up: "Your computer has been infected — call Microsoft Support at 1-800-..."',
    pattern: 'Browser pop-up that locks the screen. Loud beeping. Phone number to call. The "tech" wants to remote into your computer, then asks for hundreds in "support fees" — often paid by gift card.',
    redFlag: 'Microsoft and Apple do not show you their phone number on a pop-up. Real anti-virus does not lock your browser.',
    whatToDo: 'Close the browser tab (or force-quit if it will not close). Restart the computer. Run a virus scan. Never call the number, never give remote access.',
  },
  {
    name: 'Romance Scam',
    category: 'Romance',
    hook: 'A handsome stranger DMs you online. He is a doctor, military officer, or oil-rig worker. He is widowed.',
    pattern: 'Weeks of warm conversations. He cannot video call (camera broken / on a remote base). He starts with a small ask — money for a sick child, a customs fee, a flight to come visit. The asks escalate. He is never able to actually meet.',
    redFlag: 'Cannot video call. Always traveling. Asks for money, gift cards, or crypto. Profile photos look professional / model-like.',
    whatToDo: 'Stop. Reverse-image-search his photos at images.google.com. Tell a trusted family member or friend everything. Block. Report to FTC and IC3. You are not alone.',
  },
  {
    name: 'Medicare Card Scam',
    category: 'Medical',
    hook: '"This is Medicare. We need to verify your number to send your new card / brace / DNA test."',
    pattern: 'Free orthopedic brace. Free genetic test. Free diabetic supplies. Hand over your Medicare number and address and the scammer bills Medicare for fake services — and sometimes resells your number.',
    redFlag: 'Medicare does not call you. They mail letters. They do not give away free braces.',
    whatToDo: 'Hang up. Never give your Medicare number to a caller. Report at 1-800-MEDICARE or oig.hhs.gov.',
  },
  {
    name: 'Sweepstakes / "You\'ve Won" Scam',
    category: 'Money',
    hook: '"Congratulations! You won $4 million in the Publishers Clearing House sweepstakes. Pay $500 in fees to release your prize."',
    pattern: 'You won — but they need a "processing fee" or "tax payment" first. They send a fake check that bounces a week later. By then you have already wired the difference to them.',
    redFlag: 'You did not enter a contest you do not remember. Real winnings never require you to pay first.',
    whatToDo: 'Delete the email. Hang up the phone. Real Publishers Clearing House never asks for money up front.',
  },
  {
    name: 'Utility Shutoff Scam',
    category: 'Money',
    hook: '"This is your power company. Your service will be cut off in 30 minutes if you do not pay $487 immediately."',
    pattern: 'Caller claims you missed a payment. Demands gift card / wire / Zelle. Shows up especially during heat waves and cold snaps when shutoff threats feel real.',
    redFlag: 'Real utilities mail multiple notices before any shutoff. They do not call once and demand a same-hour payment.',
    whatToDo: 'Hang up. Look at your last paper utility bill — call THAT number to verify your account status.',
  },
  {
    name: 'Package Delivery Scam',
    category: 'Phishing',
    hook: 'Text: "USPS: Your package cannot be delivered. Click here to confirm your address: [link]"',
    pattern: 'Looks like a USPS, FedEx, UPS, or Amazon delivery alert. Link goes to a fake site that asks for credit card "to pay a redelivery fee" — actually steals your card.',
    redFlag: 'You did not order a package. The link is not amazon.com or usps.com — it is something like "usps-track-204.co" with random numbers.',
    whatToDo: 'Do not click. Forward the text to 7726 (free spam-reporting number). Delete.',
  },
  {
    name: 'Bank Fraud "Verification" Call',
    category: 'Money',
    hook: '"This is the Bank of America fraud department. We\'ve detected suspicious charges on your account."',
    pattern: 'Legitimate-sounding caller. Asks you to verify your identity by reading a 6-digit code that landed on your phone. The code is your real bank\'s 2-factor — and they use it to take over your account.',
    redFlag: 'No real bank ever asks you to read a verification code aloud. Ever.',
    whatToDo: 'Hang up. Call the number on the back of your card. If the bank really sees fraud, you can find out for sure that way.',
  },
  {
    name: 'Charity Scam (after disasters)',
    category: 'Money',
    hook: '"Help victims of [recent disaster]. Donate now, every dollar goes directly to families."',
    pattern: 'Pop-up after every disaster — hurricane, fire, earthquake. Fake charity names, sometimes copying real ones (American Red Cros vs Red Cross). Pressure to give now, by gift card or wire.',
    redFlag: 'High pressure. Asks for gift cards or wire transfer. Charity name is "almost" a real one.',
    whatToDo: 'Verify at give.org or charitynavigator.org before donating. Real charities accept credit cards, not gift cards.',
  },
  {
    name: 'Job / Work-from-Home Scam',
    category: 'Money',
    hook: '"Earn $5,000/week from home — package re-shipping. Apply now."',
    pattern: 'You "process" packages or checks at home. The packages are stolen goods, the checks are fraudulent. When they bounce, you owe the bank thousands.',
    redFlag: 'Pay seems too good. Asks you to use your own bank account for "processing".',
    whatToDo: 'Walk away. Real jobs do not pay in advance. Real jobs do not ask you to handle other people\'s checks.',
  },
  {
    name: 'Fake Antivirus Renewal',
    category: 'Tech impersonation',
    hook: 'Email: "Your McAfee subscription auto-renews tomorrow at $499. Cancel below if needed."',
    pattern: 'You did not buy McAfee, but the email looks real. The "cancel" link calls a scammer who wants to "refund" you but tricks you into wiring them money.',
    redFlag: 'The amount is too high. The "support" wants to remote into your computer or asks for bank info to "process the refund".',
    whatToDo: 'Delete the email. If you do have antivirus, log into the real account on its website, not via the email.',
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(SCAMS.map(s => s.category)))];

export default function CommonScamsLibrary() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = SCAMS.filter(s => {
    if (cat !== 'All' && s.category !== cat) return false;
    if (!query) return true;
    return s.name.toLowerCase().includes(query.toLowerCase())
      || s.hook.toLowerCase().includes(query.toLowerCase())
      || s.pattern.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <SEOHead
        title="Common Scams Library"
        description="Twelve scams that target seniors most often. Each entry shows the hook, the full pattern, the red flag, and what to do. Free reference. Use it before you act."
        path="/tools/common-scams-library"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <ShieldAlert className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Common Scams Library</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Twelve scams that target seniors most often. Recognize the pattern. Act on the truth.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Common Scams Library' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search 'IRS', 'package', 'romance'..." className="pl-9" />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setCat(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      cat === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{filtered.length} {filtered.length === 1 ? 'scam' : 'scams'}</p>

          <div className="space-y-4 mb-6">
            {filtered.map(s => (
              <Card key={s.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{s.name}</p>
                    <Badge variant="outline">{s.category}</Badge>
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">Hook</p>
                  <p className="text-sm italic p-2 rounded bg-muted/40 border border-border">{s.hook}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">How it works</p>
                  <p className="text-sm">{s.pattern}</p>

                  <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider mt-3 mb-1">Red flag</p>
                  <p className="text-sm p-2 rounded bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">{s.redFlag}</p>

                  <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider mt-3 mb-1">What to do</p>
                  <p className="text-sm p-2 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">{s.whatToDo}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <Card className="border-border bg-muted/30">
              <CardContent className="p-5 text-sm text-muted-foreground">No matches. Try a different search or "All".</CardContent>
            </Card>
          )}

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Where to report a scam</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">reportfraud.ftc.gov <ExternalLink className="h-3 w-3" /></a> — Federal Trade Commission</li>
                <li><a href="https://www.ic3.gov" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">ic3.gov <ExternalLink className="h-3 w-3" /></a> — FBI internet crime</li>
                <li>1-800-MEDICARE — for Medicare-related scams</li>
                <li>Forward spam texts to 7726 (free)</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste any text and check it.</p>
              </Link>
              <Link to="/tools/scam-witness-statement" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Witness Statement Builder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Build a clean report.</p>
              </Link>
              <Link to="/tools/id-theft-recovery" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">ID Theft Recovery</p>
                <p className="text-xs text-muted-foreground mt-0.5">If you have already been scammed.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: read one entry per week with a family member. Pattern recognition is what saves you in the moment.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
