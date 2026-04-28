import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, ChevronRight } from 'lucide-react';

interface ButtonExplanation {
  label: string;
  whatItDoes: string;
  goodOrBad: 'good' | 'bad' | 'okay';
  guidance: string;
}

const BUTTONS: ButtonExplanation[] = [
  {
    label: '"Accept All" / "Allow All Cookies"',
    whatItDoes: 'Allows the site AND every advertising network it works with to track everything you do — what you click, how long you stay, what other sites you visited recently. The data is sold and re-sold among advertisers.',
    goodOrBad: 'bad',
    guidance: 'Skip this button. There is almost always a better option.',
  },
  {
    label: '"Reject All" / "Decline" / "Necessary Only"',
    whatItDoes: 'The site still works fine — but only the cookies needed to make it work load. No tracking, no ad targeting, no profile being built about you.',
    goodOrBad: 'good',
    guidance: 'This is the button you want. Click it on every site.',
  },
  {
    label: '"Customize" / "Manage Preferences"',
    whatItDoes: 'Opens a long list of cookie categories. Can be a wall of text but you have detailed control. Useful when "Reject All" is missing (some sites hide it on purpose).',
    goodOrBad: 'okay',
    guidance: 'Toggle off everything except "Strictly Necessary" or "Essential". Save preferences. Done.',
  },
  {
    label: '"X" / closing the banner',
    whatItDoes: 'Some sites treat this as "accept all". Others treat it as "do nothing". Inconsistent and unfair, but reality.',
    goodOrBad: 'okay',
    guidance: 'Better to use "Reject" or "Customize" than to close. The X is gambling.',
  },
];

const FAQ = [
  {
    q: 'What is a cookie, in plain English?',
    a: 'A small text file that a website saves on your computer or phone. It is how the site remembers you between visits — your shopping cart, your login, your preferred language. Some cookies are essential. Others are tracking your every move and sharing it with advertisers.',
  },
  {
    q: 'Why is the banner there in the first place?',
    a: 'European law (GDPR) and California law (CPRA) require sites to ask permission before tracking you. The pop-ups are annoying, but they exist because once they were not there, sites tracked everything by default.',
  },
  {
    q: 'Will saying "Reject All" break the website?',
    a: 'Almost never. The site still works for shopping, reading, watching, signing in. You may see slightly more generic ads — that is the entire downside.',
  },
  {
    q: 'Will it stop targeted ads forever?',
    a: 'Only for this site. Each website has its own banner. The good news: you can install a free ad-blocker (uBlock Origin in Chrome / Firefox / Safari) that handles most of this across the whole web.',
  },
  {
    q: 'What about all the other sites I have already accepted on?',
    a: 'You can clear cookies in your browser to start fresh — Chrome: Settings → Privacy → "Clear browsing data". Safari: Safari menu → "Clear History". This logs you out of everything and starts the relationship over.',
  },
  {
    q: 'Why do some banners not have a "Reject All" button?',
    a: 'They are quietly violating European law. Look harder — sometimes it is hidden behind "Manage". If not, you can usually close the page and not lose anything important.',
  },
];

export default function CookieConsentDecoder() {
  return (
    <>
      <SEOHead
        title="Cookie Consent Decoder"
        description="What every cookie banner button actually means — and which one to click. Plain-English guide to the pop-ups that interrupt every website."
        path="/tools/cookie-consent-decoder"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Cookie className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookie Consent Decoder</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              That pop-up at the bottom of every website? Here is what each button actually does.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Cookie Consent Decoder' }]} />

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What each button means</p>
          <div className="space-y-3 mb-6">
            {BUTTONS.map(b => (
              <Card key={b.label} className={`border-2 ${
                b.goodOrBad === 'good' ? 'border-green-300 bg-green-50/30 dark:bg-green-950/10' :
                b.goodOrBad === 'bad'  ? 'border-red-300 bg-red-50/30 dark:bg-red-950/10' :
                                          'border-border'
              }`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold">{b.label}</p>
                    <Badge variant="outline" className={
                      b.goodOrBad === 'good' ? 'bg-green-100 text-green-700 border-green-300' :
                      b.goodOrBad === 'bad'  ? 'bg-red-100 text-red-700 border-red-300' :
                                                'bg-amber-100 text-amber-700 border-amber-300'
                    }>
                      {b.goodOrBad === 'good' ? 'Click this' : b.goodOrBad === 'bad' ? 'Avoid' : 'Okay'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>What it does:</strong> {b.whatItDoes}</p>
                  <p className="text-sm"><strong>Guidance:</strong> {b.guidance}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-primary/5 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">The 3-second rule for any cookie banner</p>
              <ol className="space-y-1.5 text-sm">
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">1.</span><span>Look for "Reject All" or "Necessary Only" — click that.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">2.</span><span>Not there? Click "Customize" → toggle everything off except Strictly Necessary → Save.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">3.</span><span>Banner does not let you reject? Close the tab — that site is not respecting you.</span></li>
              </ol>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Common questions</p>
          <div className="space-y-3 mb-6">
            {FAQ.map(f => (
              <Card key={f.q} className="border-border">
                <CardContent className="p-5">
                  <p className="font-semibold text-sm mb-1">{f.q}</p>
                  <p className="text-sm text-muted-foreground">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A bigger fix: install an ad-blocker</p>
              <p className="text-xs text-muted-foreground mb-3">
                <strong>uBlock Origin</strong> is free, runs in Chrome, Firefox, Edge, and Safari, and blocks trackers and most cookie banners automatically. Install once, every site is calmer afterwards. ublockorigin.com.
              </p>
              <p className="text-xs text-muted-foreground">
                For phones — <strong>Brave Browser</strong> (free, App Store + Play Store) blocks trackers and ads by default. Use it instead of Safari/Chrome on the phone for cleaner browsing.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/data-broker-removal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Data Broker Removal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Remove yourself from people-search sites.</p>
              </Link>
              <Link to="/tools/browser-safety-audit" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Browser Safety Audit</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down your browser further.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Suspicious site? Check before clicking.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: defaulting to "Reject All" on every site adds up — over a year, you stop being tracked across thousands of pages.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
