import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

interface Item {
  id: string;
  title: string;
  detail: string;
}

const STORAGE_KEY = 'teksure.safe-senior-setup.done';

const ITEMS: Item[] = [
  { id: 's1',  title: 'Create a standard user account for them — keep the admin password to yourself', detail: 'Set up Windows or macOS with you as the admin. Then make a second account (standard user, no admin rights) for your parent. Malware and scam pop-ups that ask to install software get blocked because the standard account cannot install anything without your password.' },
  { id: 's2',  title: 'Turn on built-in protection (Windows Defender or macOS Gatekeeper)', detail: 'Windows: Settings → Privacy & Security → Windows Security → Virus & threat protection — leave everything on. Mac: System Settings → Privacy & Security → set "Allow apps from" to App Store (or App Store and identified developers). No third-party antivirus needed.' },
  { id: 's3',  title: 'Set automatic updates to ON for the OS and the browser', detail: 'Windows Update: set active hours and turn on "Get the latest updates as soon as available". Mac: System Settings → General → Software Update → Automatic updates ON for everything. The browser updates itself in the background — leave it alone.' },
  { id: 's4',  title: 'Install only well-known apps from the official store', detail: 'Use Microsoft Store (Windows) or App Store (Mac). No download sites. No "free PDF converter" pop-ups. If they need an app that is not in the store, you install it for them on a video call.' },
  { id: 's5',  title: 'Set up Find My Device in case the laptop walks off', detail: 'Windows: Settings → Privacy & Security → Find my device → ON. Mac: System Settings → Apple ID → iCloud → Find My Mac → ON. Now you can locate or lock the machine from your own phone if it goes missing.' },
  { id: 's6',  title: 'Pre-approve remote help (Quick Assist on Windows, Screen Sharing on Mac)', detail: 'Windows: install Quick Assist from Microsoft Store and walk through it once together. Mac/iPhone family: turn on Messages screen share. When they call confused, you can see their screen in 30 seconds — no shady "remote support" software needed.' },
  { id: 's7',  title: 'Harden the browser — Edge or Chrome with strict tracking prevention', detail: 'Edge: Settings → Privacy → set tracking prevention to Strict. Chrome: Settings → Privacy and security → Safe Browsing → Enhanced. Set DuckDuckGo as the default search engine — fewer sponsored scam ads at the top of results.' },
  { id: 's8',  title: 'Install uBlock Origin (free ad blocker)', detail: 'Search the Chrome Web Store or Edge Add-ons for "uBlock Origin Lite" (Chrome/Edge). Blocks the fake virus pop-ups and scam ads that lead to most senior tech-support scams. Free, no account, no upsell.' },
  { id: 's9',  title: 'Set up bookmark-only browsing for the sites they actually use', detail: 'Pin bookmarks for their bank, email, news, family photo site, doctor portal — right on the bookmarks bar. Tell them: if a site is not on this bar, do not type its address from an email or phone call. The bar becomes their safe-zone.' },
  { id: 's10', title: 'Skip Microsoft Office — set up free Google Docs instead', detail: 'A $99/year Office subscription is not needed for letters and the family budget. Sign them into Google Docs, Sheets, and Gmail with one Google account. Saves $99 a year and works in the browser.' },
  { id: 's11', title: 'Turn on a password manager and write down the master password for them', detail: 'Bitwarden (free) or the built-in browser password manager. Save passwords as you go. Write the master password on an index card kept in a drawer at their house — security people hate this advice, but it beats sticky notes on the monitor and reused passwords.' },
  { id: 's12', title: 'Add your phone number to the lock screen as the emergency contact', detail: 'Windows: Settings → Personalization → Lock screen → add a status message. Mac: set a custom lock screen message in Privacy & Security. If a stranger ever picks up the laptop, your number shows — not theirs.' },
];

export default function SafeSeniorComputerSetup() {
  const [done, setDone] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      return new Set(JSON.parse(raw) as string[]);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(done)));
    } catch {
      // ignore storage errors
    }
  }, [done]);

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reset = () => setDone(new Set());

  return (
    <>
      <SEOHead
        title="Safe Computer Setup for an Elderly Parent"
        description="A defensive 12-step setup for an elderly parent's computer. Standard user account, automatic updates, browser hardening, ad blocker, pre-approved remote help."
        path="/tools/safe-senior-computer-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Safe Computer Setup for an Elderly Parent</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A 12-step defensive setup for a parent who has fallen for a scam before. About an hour together.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Safe Senior Computer Setup' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-1">This is a guard-rails setup — not a normal full computer setup.</p>
                <p className="text-muted-foreground">
                  Use this when you are setting up a computer for someone who has fallen for tech-support scams, fake pop-ups, or phishing
                  emails before. Some choices below trade convenience for safety on purpose. For a standard new-PC walkthrough, see the
                  <Link to="/tools/new-computer-setup" className="text-primary hover:underline ml-1">New Computer Setup</Link> tool instead.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted-foreground">{done.size} of {ITEMS.length} done</p>
            {done.size > 0 && (
              <Button variant="ghost" size="sm" onClick={reset} className="text-xs h-7">Reset</Button>
            )}
          </div>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <div className="space-y-2">
                {ITEMS.map(item => (
                  <label key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                    }`}>
                    <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {done.size === ITEMS.length && (
            <Card className="border-green-300 bg-green-50 dark:bg-green-950/20 mb-6">
              <CardContent className="p-5 text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 border-green-300">Guard rails up</Badge>
                <p className="font-semibold">The computer is locked down and ready.</p>
                <p className="text-sm text-muted-foreground mt-1">Save the Scam Message Decoder for the next suspicious text or email.</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link to="/tools/scam-message-decoder">Scam Message Decoder</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/new-computer-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">New Computer Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Standard first-time setup checklist.</p>
              </Link>
              <Link to="/tools/remote-tech-help" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Remote Tech Help</p>
                <p className="text-xs text-muted-foreground mt-0.5">Help from across the country.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste a suspicious message, get a verdict.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
