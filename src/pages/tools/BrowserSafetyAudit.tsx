import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, ExternalLink, Lock, CheckCircle2, ArrowLeft,
  Chrome, Compass, Flame, Globe, Info, BookOpen, AlertTriangle,
} from 'lucide-react';

/* ── Types ─────────────────────────────────────── */
interface BrowserCheck {
  id: string;
  label: string;
  where: string;         // Plain-English path like "Settings > Privacy > Security"
  link?: string;         // Direct https:// or chrome:// link when available
  why: string;           // 2–3 sentences on why it matters
}

interface BrowserSection {
  id: 'chrome' | 'safari' | 'firefox' | 'edge';
  title: string;
  tagline: string;
  icon: React.ElementType;
  color: string;          // Tailwind classes for the tile background
  guide?: { label: string; to: string };
  checks: BrowserCheck[];
}

/* ── Browser data ──────────────────────────────── */
const BROWSERS: BrowserSection[] = [
  /* ── Chrome ────────────────────────────────── */
  {
    id: 'chrome',
    title: 'Google Chrome',
    tagline: '12 settings to harden the world\'s most-used browser',
    icon: Chrome,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    guide: { label: 'Read our Chrome safety guide', to: '/guides' },
    checks: [
      {
        id: 'chrome-safe-browsing',
        label: 'Turn on Enhanced Safe Browsing',
        where: 'chrome://settings/security > Safe Browsing > Enhanced protection',
        link: 'https://support.google.com/chrome/answer/9890866',
        why:
          'Enhanced Safe Browsing warns you about dangerous sites, downloads, and extensions in real time — before damage is done. Standard protection only checks against a list; Enhanced checks every page against Google\'s live threat database. This is the single biggest win for avoiding scams.',
      },
      {
        id: 'chrome-password-alerts',
        label: 'Turn on password breach warnings',
        where: 'chrome://settings/security > "Warn you if passwords are exposed in a data breach"',
        why:
          'If a site you use gets hacked and your password leaks, Chrome will tell you — usually within days of the breach. Without this on, your stolen password could be used for months before you find out.',
      },
      {
        id: 'chrome-saved-passwords',
        label: 'Review your saved passwords and clean up duplicates',
        where: 'chrome://settings/passwords',
        link: 'https://passwords.google.com/checkup',
        why:
          'Chrome saves every password you let it save — sometimes you end up with five old logins for the same site. Reviewing them lets you remove what you don\'t use anymore and run the built-in Password Checkup to find reused or leaked ones.',
      },
      {
        id: 'chrome-permissions',
        label: 'Review site permissions (camera, microphone, location)',
        where: 'chrome://settings/content',
        why:
          'Over time you\'ve probably clicked "Allow" on dozens of sites asking for your camera, microphone, or location. Going through this list and removing anything you don\'t recognize means old sites can\'t quietly keep watching or listening.',
      },
      {
        id: 'chrome-malicious-downloads',
        label: 'Enable "Warn you about malicious downloads"',
        where: 'chrome://settings/security (included with Safe Browsing)',
        why:
          'This catches fake installers and disguised malware before they run. A file labeled "invoice.pdf" that\'s really a virus will get flagged before it touches your computer.',
      },
      {
        id: 'chrome-extensions',
        label: 'Review installed extensions — remove any you don\'t recognize',
        where: 'chrome://extensions',
        why:
          'Extensions can read everything you type and see every page you visit. Scammers sometimes buy popular extensions and quietly add spyware. Remove anything you don\'t use or remember installing — it\'s one of the most common ways people get hacked.',
      },
      {
        id: 'chrome-secure-dns',
        label: 'Turn on "Use secure DNS" (Cloudflare or Google)',
        where: 'chrome://settings/security > Advanced > Use secure DNS',
        why:
          'Regular DNS lookups happen in plain text — your internet provider, public Wi-Fi, and anyone on the network can see every site you visit. Secure DNS (DNS over HTTPS) encrypts those lookups. Cloudflare (1.1.1.1) is a good free choice.',
      },
      {
        id: 'chrome-third-party-cookies',
        label: 'Block third-party cookies',
        where: 'chrome://settings/cookies > "Block third-party cookies"',
        why:
          'Third-party cookies are how advertisers follow you from site to site, building a profile of everywhere you browse. Blocking them breaks very few sites and dramatically reduces tracking.',
      },
      {
        id: 'chrome-clear-on-close',
        label: 'Set cookies and site data to clear on close (optional — advanced)',
        where: 'chrome://settings/cookies > "Clear cookies and site data when you close all windows"',
        why:
          'This means every time you quit Chrome, your browsing session is wiped clean — like using incognito by default. Downside: you\'ll be logged out of everything next time. Great for shared computers; overkill for a personal laptop.',
      },
      {
        id: 'chrome-shared-signins',
        label: 'Check if you\'re signed in on any shared or old computers',
        where: 'chrome://settings/syncSetup > Manage your Google Account > Security > Your devices',
        link: 'https://myaccount.google.com/device-activity',
        why:
          'If you\'ve ever signed into Chrome on a hotel computer, a friend\'s laptop, or an old phone, your bookmarks and passwords may still be syncing there. This page shows every device still signed in — remove anything you don\'t own anymore.',
      },
      {
        id: 'chrome-update',
        label: 'Update Chrome to the latest version',
        where: 'chrome://settings/help',
        why:
          'Chrome releases security patches almost every week. An out-of-date browser has known holes that scammers actively use — sometimes all it takes is visiting one bad website. Chrome usually updates itself, but checking confirms it worked.',
      },
      {
        id: 'chrome-phishing',
        label: 'Confirm phishing protection is active',
        where: 'chrome://settings/security > Safe Browsing (any level except "No protection")',
        why:
          'Phishing sites pretend to be your bank or email to steal your password. Chrome\'s built-in phishing protection blocks thousands of known fake sites every day — just make sure Safe Browsing isn\'t turned off entirely.',
      },
    ],
  },

  /* ── Safari ────────────────────────────────── */
  {
    id: 'safari',
    title: 'Safari (iPhone & Mac)',
    tagline: '10 settings for Apple\'s built-in browser',
    icon: Compass,
    color: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
    guide: { label: 'Read our Safari safety guide', to: '/guides' },
    checks: [
      {
        id: 'safari-fraud-warning',
        label: 'Enable Fraudulent Website Warning',
        where: 'Settings > Safari > Fraudulent Website Warning (on)',
        why:
          'This is Apple\'s version of phishing protection — it warns you before you visit a site known to steal passwords or credit card numbers. Leave it on; there\'s almost no reason to turn it off.',
      },
      {
        id: 'safari-cross-site',
        label: 'Prevent Cross-Site Tracking is on',
        where: 'Settings > Safari > Prevent Cross-Site Tracking (on)',
        why:
          'This stops advertisers from following you from one website to the next. It\'s on by default in modern iOS and macOS, but worth confirming — especially after a major system update when settings sometimes reset.',
      },
      {
        id: 'safari-hide-ip',
        label: 'Hide IP Address from Trackers is on',
        where: 'Settings > Safari > Hide IP Address > From Trackers',
        why:
          'Your IP address is like a rough home address for your internet connection. This setting hides it from known ad trackers so they can\'t tie your browsing to your location or device.',
      },
      {
        id: 'safari-block-cookies',
        label: 'Block All Cookies (optional — breaks some sites)',
        where: 'Settings > Safari > Block All Cookies',
        why:
          'Blocking all cookies is the strongest privacy setting, but it will log you out of most sites every time you visit. Most people do better with "Prevent Cross-Site Tracking" on and cookies allowed — only turn this on if you\'re high-risk.',
      },
      {
        id: 'safari-passwords',
        label: 'Check saved passwords for breaches',
        where: 'Settings > Passwords > Security Recommendations',
        link: 'https://support.apple.com/guide/iphone/iph14aacf0c7/ios',
        why:
          'iPhone and Mac can check every saved password against known data breaches. If any have leaked, reused, or are weak, they show up here with a one-tap way to change them. Check this page every couple of months.',
      },
      {
        id: 'safari-site-permissions',
        label: 'Review website permissions (camera, microphone, location)',
        where: 'Settings > Safari > Settings for Websites (Camera, Microphone, Location)',
        why:
          'Every website you\'ve ever granted access to your camera or mic is listed here. Go through it and "Deny" anything you don\'t recognize — old sites don\'t need to keep that access forever.',
      },
      {
        id: 'safari-private-browsing',
        label: 'Use Private Browsing for sensitive tasks',
        where: 'Safari > Tab button (bottom right) > Private',
        why:
          'Private Browsing doesn\'t save history, cookies, or autofill. It\'s perfect for shopping for gifts on a shared device, checking a health symptom, or logging into a second account. It doesn\'t hide you from your internet provider — but it does hide you from the device.',
      },
      {
        id: 'safari-clear-history',
        label: 'Clear cache and history monthly',
        where: 'Settings > Safari > Clear History and Website Data',
        why:
          'Over time Safari accumulates gigabytes of old pages, logos, and tracking cookies. Clearing it monthly speeds the browser up, frees storage, and wipes out old tracking identifiers — a quick housekeeping win.',
      },
      {
        id: 'safari-update',
        label: 'Update iOS or macOS for the latest Safari',
        where: 'Settings > General > Software Update (iOS) or System Settings > General > Software Update (Mac)',
        why:
          'Safari is updated with the operating system, not separately. Running an out-of-date iOS or macOS means running an out-of-date Safari — with known security holes. Keeping the OS current keeps Safari current.',
      },
      {
        id: 'safari-private-relay',
        label: 'Turn on iCloud Private Relay (if you have iCloud+)',
        where: 'Settings > [your name] > iCloud > Private Relay',
        why:
          'Private Relay is Apple\'s built-in lightweight VPN. It hides your real IP address and the sites you visit from your internet provider and the websites themselves. If you pay for any iCloud storage upgrade, you already have it — just flip it on.',
      },
    ],
  },

  /* ── Firefox ───────────────────────────────── */
  {
    id: 'firefox',
    title: 'Firefox',
    tagline: '10 settings for Mozilla\'s privacy-focused browser',
    icon: Flame,
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
    guide: { label: 'Read our Firefox safety guide', to: '/guides' },
    checks: [
      {
        id: 'firefox-etp-strict',
        label: 'Set Enhanced Tracking Protection to Strict',
        where: 'about:preferences#privacy > Enhanced Tracking Protection > Strict',
        link: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
        why:
          'Strict mode blocks more trackers than the default Standard — including cross-site cookies, fingerprinters, and crypto miners. A few sites break; most don\'t. It\'s Firefox\'s biggest privacy win and one click to enable.',
      },
      {
        id: 'firefox-https-only',
        label: 'Enable HTTPS-Only Mode',
        where: 'about:preferences#privacy > HTTPS-Only Mode > Enable in all windows',
        why:
          'This forces every site to use the encrypted version (https://). If a site doesn\'t support encryption, Firefox warns you before loading it. Prevents "man in the middle" attacks on public Wi-Fi — coffee shops, airports, hotels.',
      },
      {
        id: 'firefox-monitor',
        label: 'Enable Firefox Monitor for breach alerts',
        where: 'monitor.mozilla.org > Sign in with Firefox account',
        link: 'https://monitor.mozilla.org/',
        why:
          'Firefox Monitor is a free service that watches over 500 known data breaches. You sign up with your email once, and if it ever shows up in a new leak, Mozilla emails you to change that password right away.',
      },
      {
        id: 'firefox-saved-logins',
        label: 'Review saved logins and check for breaches',
        where: 'about:logins',
        why:
          'Firefox\'s built-in password manager stores every login you\'ve saved, and it warns you if any have been in a known breach. Review the list, delete anything you don\'t use, and fix any that show a breach alert.',
      },
      {
        id: 'firefox-phishing',
        label: 'Enable phishing and malware protection',
        where: 'about:preferences#privacy > Security > "Block dangerous and deceptive content"',
        why:
          'Firefox checks every page against Google\'s Safe Browsing list of phishing and malware sites. It\'s on by default, but worth confirming — it\'s your defense against the fake-bank and fake-delivery scams that fill inboxes.',
      },
      {
        id: 'firefox-extensions',
        label: 'Review installed extensions',
        where: 'about:addons',
        why:
          'Extensions (add-ons) can see everything you type and every page you visit. Remove anything you don\'t actively use — especially older ones whose developers may have moved on or sold the extension to someone less trustworthy.',
      },
      {
        id: 'firefox-telemetry',
        label: 'Turn off telemetry and usage data sharing',
        where: 'about:preferences#privacy > Firefox Data Collection and Use (uncheck)',
        why:
          'By default Firefox sends Mozilla anonymous data about how you use it. Mozilla is more privacy-respecting than most, but off is off — unchecking these boxes stops the data from leaving your computer at all.',
      },
      {
        id: 'firefox-dns',
        label: 'Use secure DNS (DNS over HTTPS)',
        where: 'about:preferences#general > Network Settings > "Enable DNS over HTTPS"',
        why:
          'This encrypts the "address lookups" your browser makes every time you visit a site. Without it, your internet provider and anyone on your Wi-Fi can see every domain you visit. Cloudflare and NextDNS are solid free providers.',
      },
      {
        id: 'firefox-clear-on-close',
        label: 'Clear cookies and history when Firefox closes',
        where: 'about:preferences#privacy > History > "Clear history when Firefox closes"',
        why:
          'This wipes your browsing traces every time you quit. It logs you out of most sites — which is the point. Great for a shared computer, or if you\'re worried about someone physically accessing your device.',
      },
      {
        id: 'firefox-update',
        label: 'Update Firefox to the latest version',
        where: 'about:preferences#general > Firefox Updates',
        why:
          'Firefox patches security holes regularly. Automatic updates are on by default — but it\'s worth checking the version under "About Firefox" to make sure you\'re current. Old browsers are a top target for attacks.',
      },
    ],
  },

  /* ── Microsoft Edge ────────────────────────── */
  {
    id: 'edge',
    title: 'Microsoft Edge',
    tagline: '10 settings for Windows\'s default browser',
    icon: Globe,
    color: 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300',
    guide: { label: 'Read our Edge safety guide', to: '/guides' },
    checks: [
      {
        id: 'edge-smartscreen',
        label: 'Enable Microsoft Defender SmartScreen',
        where: 'edge://settings/privacy > Security > "Microsoft Defender SmartScreen"',
        why:
          'SmartScreen is Edge\'s version of Safe Browsing — it checks every site and download against a list of known scams and malware. It also warns about potentially unwanted apps (PUAs) bundled with free software. Leave it on.',
      },
      {
        id: 'edge-password-monitor',
        label: 'Enable Password Monitor for breach alerts',
        where: 'edge://settings/passwords > "Show alerts when passwords are found in an online leak"',
        why:
          'Password Monitor checks every password you\'ve saved against known breaches. If one of yours leaks, Edge tells you which site and gives you a one-click link to change it. Turn it on — it only costs a checkbox.',
      },
      {
        id: 'edge-tracking-strict',
        label: 'Set Tracking Prevention to Strict',
        where: 'edge://settings/privacy > Tracking prevention > Strict',
        why:
          'Strict mode blocks the most trackers and ads — including fingerprinters that try to identify you across sites. It may break a few sites\' login flows; when that happens, you can add an exception for just that site.',
      },
      {
        id: 'edge-permissions',
        label: 'Review site permissions (camera, microphone, location, pop-ups)',
        where: 'edge://settings/content',
        why:
          'Every site you\'ve granted camera, microphone, or location access to is listed here. Go through and remove anything you don\'t recognize — old sites don\'t need to keep that access, and some scammers rely on forgotten permissions.',
      },
      {
        id: 'edge-extensions',
        label: 'Review installed extensions',
        where: 'edge://extensions',
        why:
          'Extensions have huge access to your browsing — they can read every page and every form you fill in. Remove anything you don\'t use, especially unfamiliar ones that came bundled with free downloads.',
      },
      {
        id: 'edge-secure-dns',
        label: 'Enable secure DNS (DNS over HTTPS)',
        where: 'edge://settings/privacy > Security > "Use secure DNS to specify how to look up the network address for websites"',
        why:
          'Normal DNS is unencrypted — your internet provider, the coffee shop Wi-Fi, and anyone on the network can see every domain you visit. Secure DNS fixes that. Cloudflare (1.1.1.1) is a free, privacy-respecting choice.',
      },
      {
        id: 'edge-saved-passwords',
        label: 'Review and clean up saved passwords',
        where: 'edge://settings/passwords',
        why:
          'Edge stores every password you\'ve saved — you probably have logins for sites you haven\'t visited in years. Delete old ones and confirm that the sites you actually use still have the right credentials.',
      },
      {
        id: 'edge-new-tab-content',
        label: 'Turn off recommended content in the new tab page (if intrusive)',
        where: 'New tab page > gear icon (top right) > turn off "Show feed"',
        why:
          'The default new-tab page shows clickbait news and ads that can be misleading. Turning off the feed gives you a clean, distraction-free new tab — and removes a place where disguised scam links sometimes appear.',
      },
      {
        id: 'edge-update',
        label: 'Update Edge to the latest version',
        where: 'edge://settings/help',
        why:
          'Edge updates itself with Windows, but it\'s worth opening "About Microsoft Edge" to confirm. A browser that hasn\'t been updated in months has known security holes that scammers actively exploit.',
      },
      {
        id: 'edge-in-private',
        label: 'Use InPrivate Browsing for sensitive tasks',
        where: 'Menu (three dots, top right) > New InPrivate window',
        why:
          'InPrivate windows don\'t save history, cookies, or passwords. Use them when shopping for gifts on a shared PC, signing into a second account, or looking up something sensitive. The site still sees you — but the device doesn\'t remember.',
      },
    ],
  },
];

/* ── Component ─────────────────────────────────── */
export default function BrowserSafetyAudit() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeBrowser, setActiveBrowser] = useState<BrowserSection['id'] | null>(null);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const browserProgress = (browser: BrowserSection) => {
    const ids = browser.checks.map((c) => c.id);
    const done = ids.filter((id) => checked[id]).length;
    return { done, total: ids.length, pct: Math.round((done / ids.length) * 100) };
  };

  const totalProgress = useMemo(() => {
    const all = BROWSERS.flatMap((b) => b.checks.map((c) => c.id));
    const done = all.filter((id) => checked[id]).length;
    return { done, total: all.length, pct: Math.round((done / all.length) * 100) };
  }, [checked]);

  const active = BROWSERS.find((b) => b.id === activeBrowser);

  return (
    <>
      <SEOHead
        title="Browser Safety Audit — Lock Down Chrome, Safari, Firefox, or Edge"
        description="Step-by-step guided browser safety audit for Chrome, Safari, Firefox, and Edge. Stops scams before they start by fixing the settings that actually matter."
        path="/tools/browser-safety-audit"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container py-12 md:py-16">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Browser Safety</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Is Your Browser Safe?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Most scams start in the browser. Let's lock yours down.
            </p>
          </div>
        </section>

        {/* ── Reassurance banner ──────────────── */}
        <section className="container pt-8 pb-2">
          <Card className="border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-5 flex items-start gap-3">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Your progress stays with you</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We don't collect any data. This is a guided checklist that shows you exactly
                  where to click in your browser — in plain English. Your checkmarks are saved
                  only in this browser session.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Why browsers matter ─────────────── */}
        <section className="container pt-4 pb-2">
          <Card className="border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Why the browser?</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Fake delivery texts, bank phishing pages, scam pop-ups, and malicious downloads
                  almost always land in your browser first. Ten minutes of settings here can stop
                  the vast majority of scams before they ever reach you.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Total progress bar ──────────────── */}
        <section className="container py-6">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-semibold">Overall Progress</h2>
                <span className="text-lg font-bold text-primary">
                  {totalProgress.done} / {totalProgress.total} settings reviewed
                </span>
              </div>
              <Progress value={totalProgress.pct} className="h-4 mb-2" />
              <p className="text-base text-muted-foreground">
                {totalProgress.pct === 100
                  ? 'Incredible — you have locked down every browser. Come back in 6 months to re-check.'
                  : totalProgress.pct === 0
                    ? 'Pick the browser you use most below. You do not have to do them all — one is better than none.'
                    : 'Keep going! Each setting you fix closes another scam doorway.'}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Browser picker OR active browser ─ */}
        {!active ? (
          <section className="container pb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Which browser do you want to audit?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start with the one you use most. If you use more than one, come back for the others.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {BROWSERS.map((browser) => {
                const { done, total, pct } = browserProgress(browser);
                const Icon = browser.icon;
                const complete = done === total && total > 0;
                return (
                  <button
                    key={browser.id}
                    onClick={() => setActiveBrowser(browser.id)}
                    className="text-left group"
                  >
                    <Card
                      className={`h-full transition-all group-hover:shadow-md group-hover:border-primary/50 ${
                        complete ? 'border-green-500/50' : ''
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg shrink-0 ${browser.color}`}>
                            {complete ? (
                              <CheckCircle2 className="w-8 h-8" />
                            ) : (
                              <Icon className="w-8 h-8" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold mb-1">{browser.title}</h3>
                            <p className="text-base text-muted-foreground leading-snug">
                              {browser.tagline}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">
                              {done} of {total} reviewed
                            </span>
                            <span className="font-semibold text-primary">{pct}%</span>
                          </div>
                          <Progress value={pct} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          <section className="container pb-12">
            {/* Back button + browser header */}
            <Button
              variant="ghost"
              onClick={() => setActiveBrowser(null)}
              className="mb-4 -ml-2 text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all browsers
            </Button>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <div className={`p-3 rounded-lg shrink-0 ${active.color}`}>
                    <active.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-bold">{active.title} Safety Audit</h2>
                    <p className="text-lg text-muted-foreground">{active.tagline}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-base mb-1">
                    <span className="text-muted-foreground">
                      {browserProgress(active).done} of {browserProgress(active).total} reviewed
                    </span>
                    <span className="font-semibold text-primary">
                      {browserProgress(active).pct}%
                    </span>
                  </div>
                  <Progress value={browserProgress(active).pct} className="h-3" />
                </div>
                {active.guide && (
                  <div className="mt-5">
                    <Button variant="outline" asChild>
                      <Link to={active.guide.to}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        {active.guide.label}
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Checklist */}
            <div className="space-y-4">
              {active.checks.map((check, i) => {
                const isDone = checked[check.id] ?? false;
                return (
                  <Card
                    key={check.id}
                    className={isDone ? 'border-green-500/40 bg-green-50/30 dark:bg-green-950/10' : ''}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={isDone}
                          onCheckedChange={() => toggle(check.id)}
                          className="mt-1.5 h-6 w-6 shrink-0 cursor-pointer"
                          id={`check-${check.id}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-3">
                            <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-muted-foreground text-sm font-semibold mt-0.5">
                              {i + 1}
                            </span>
                            <label
                              htmlFor={`check-${check.id}`}
                              className={`text-lg md:text-xl font-semibold leading-snug cursor-pointer ${
                                isDone ? 'line-through text-muted-foreground' : 'text-foreground'
                              }`}
                            >
                              {check.label}
                            </label>
                          </div>

                          {/* Where to find it */}
                          <div className="ml-9 mb-3 p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm font-semibold text-muted-foreground mb-1">
                              Where to find it:
                            </p>
                            <p className="text-base font-mono text-foreground break-words">
                              {check.where}
                            </p>
                          </div>

                          {/* Why it matters */}
                          <div className="ml-9 mb-3 flex items-start gap-2">
                            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-muted-foreground mb-1">
                                Why it matters:
                              </p>
                              <p className="text-base leading-relaxed">{check.why}</p>
                            </div>
                          </div>

                          {/* Direct link */}
                          {check.link && (
                            <div className="ml-9 mt-3">
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={check.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Open this setting
                                  <ExternalLink className="w-3 h-3 ml-1.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Browser-complete card */}
            {browserProgress(active).pct === 100 && (
              <Card className="mt-6 bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-300" />
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200">
                      {active.title} is locked down!
                    </h3>
                  </div>
                  <p className="text-base text-green-700 dark:text-green-300 leading-relaxed">
                    Every setting reviewed. Come back every 6 months — browsers update their
                    defaults, and new scam techniques appear all the time.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Continue to next browser */}
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Keep going</h3>
                <p className="text-base text-muted-foreground mb-4">
                  Audit another browser — your progress on this one is saved.
                </p>
                <div className="flex flex-wrap gap-2">
                  {BROWSERS.filter((b) => b.id !== active.id).map((b) => {
                    const { pct } = browserProgress(b);
                    const Icon = b.icon;
                    return (
                      <Button
                        key={b.id}
                        variant="outline"
                        onClick={() => setActiveBrowser(b.id)}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {b.title}
                        {pct > 0 && pct < 100 && (
                          <Badge variant="secondary" className="ml-2">
                            {pct}%
                          </Badge>
                        )}
                        {pct === 100 && (
                          <CheckCircle2 className="w-4 h-4 ml-2 text-green-600" />
                        )}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* ── Related tools ───────────────────── */}
        <section className="container pb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Related safety tools</h3>
              <div className="grid gap-2 md:grid-cols-2">
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/privacy-audit">
                    <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Privacy Audit — lock down Facebook, Google, and your phone</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/phishing-scanner">
                    <AlertTriangle className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Phishing Scanner — is this email a scam?</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/url-safety-checker">
                    <Lock className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">URL Safety Checker — is this link safe to click?</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/two-factor-setup">
                    <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Two-Factor Setup — the single most important security step</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
