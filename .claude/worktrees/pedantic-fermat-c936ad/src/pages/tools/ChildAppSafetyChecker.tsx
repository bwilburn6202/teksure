import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Shield, CheckCircle2, AlertTriangle, XCircle, Search, ExternalLink } from 'lucide-react';

interface AppProfile {
  name: string;
  ageRating: string;
  inAppPurchases: boolean;
  chat: boolean;
  ads: boolean;
  location: boolean;
  riskLevel: 'low' | 'medium' | 'high';
  notes: string;
  parentalControls: string;
}

const APP_DATABASE: Record<string, AppProfile> = {
  'youtube': {
    name: 'YouTube',
    ageRating: '17+',
    inAppPurchases: false,
    chat: false,
    ads: true,
    location: false,
    riskLevel: 'high',
    notes: 'Contains adult content, mature language, and extreme political content. The algorithm can surface inappropriate videos. YouTube Kids is a safer alternative for children under 13.',
    parentalControls: 'Use YouTube Kids instead. On the main app: tap your profile → Settings → General → Restricted Mode.',
  },
  'youtube kids': {
    name: 'YouTube Kids',
    ageRating: '4+',
    inAppPurchases: false,
    chat: false,
    ads: true,
    location: false,
    riskLevel: 'low',
    notes: 'Designed specifically for children. Content is filtered. Occasionally age-inappropriate videos slip through — use the parent dashboard to report and block them.',
    parentalControls: 'Set up a parent account in the app. Choose content level (Preschool / Younger Kids / Older Kids). Enable "Approved Content Only" for youngest children.',
  },
  'tiktok': {
    name: 'TikTok',
    ageRating: '12+',
    inAppPurchases: true,
    chat: true,
    ads: true,
    location: false,
    riskLevel: 'high',
    notes: 'The algorithm is powerful and fast — children can be served mature, violent, or harmful content quickly. Has a direct messaging feature. Collects extensive data. Not recommended under 16.',
    parentalControls: 'Family Pairing: tap Profile → Menu → Family Pairing. Links parent account. Can set screen time, restrict DMs, and filter content.',
  },
  'roblox': {
    name: 'Roblox',
    ageRating: '9+',
    inAppPurchases: true,
    chat: true,
    ads: false,
    location: false,
    riskLevel: 'medium',
    notes: 'Vast game library — quality varies greatly. Has a chat feature and contains virtual currency (Robux). Some games contain simulated violence. Bad actors can contact children through the chat.',
    parentalControls: 'On roblox.com: Account Settings → Privacy → Restrict to Friends. Enable Account Restrictions to limit chat to pre-set messages only.',
  },
  'minecraft': {
    name: 'Minecraft',
    ageRating: '10+',
    inAppPurchases: true,
    chat: true,
    ads: false,
    location: false,
    riskLevel: 'low',
    notes: 'Generally safe creative game. Multiplayer servers vary widely in safety. Online servers can expose children to strangers. The "Marketplace" sells in-game content.',
    parentalControls: 'Bedrock Edition: use a Microsoft Family account to approve friends, disable multiplayer, and set spending limits on the Microsoft account.',
  },
  'instagram': {
    name: 'Instagram',
    ageRating: '13+',
    inAppPurchases: false,
    chat: true,
    ads: true,
    location: true,
    riskLevel: 'high',
    notes: 'Direct messages, public photos, location tagging, and the Explore feed can expose teens to strangers and harmful content. Linked to negative body image research in teen girls.',
    parentalControls: 'Family Center: Settings → Family Center. Can monitor follows, set screen time, and manage who can contact them.',
  },
  'snapchat': {
    name: 'Snapchat',
    ageRating: '13+',
    inAppPurchases: false,
    chat: true,
    ads: true,
    location: true,
    riskLevel: 'high',
    notes: 'Disappearing messages can give a false sense of permanence. Snap Map shares exact location. Discover feed contains adult content. Fentanyl and other drugs have been distributed using Snapchat.',
    parentalControls: 'Family Center: Settings → Family Center. Can see who child is chatting with (but not message content) and disable Snap Map.',
  },
  'discord': {
    name: 'Discord',
    ageRating: '13+',
    inAppPurchases: false,
    chat: true,
    ads: false,
    location: false,
    riskLevel: 'high',
    notes: 'Originally for gamers, now general-purpose. Servers (group chats) can be public and unmoderated. Some servers contain adult content, radicalization, or bullying. Direct messages with strangers are possible.',
    parentalControls: 'No built-in parental controls. If used, require child to join only pre-approved servers with friends. Review server contents before approving. Use a shared family account for younger teens.',
  },
  'duolingo': {
    name: 'Duolingo',
    ageRating: '4+',
    inAppPurchases: true,
    chat: false,
    ads: true,
    location: false,
    riskLevel: 'low',
    notes: 'Language learning app — safe for all ages. Has a social leaderboard feature. In-app purchases unlock the ad-free premium version.',
    parentalControls: 'No special setup needed. Safe to use without restrictions.',
  },
  'khan academy': {
    name: 'Khan Academy',
    ageRating: '4+',
    inAppPurchases: false,
    chat: false,
    ads: false,
    location: false,
    riskLevel: 'low',
    notes: 'Free educational content from math to science to history. No ads, no in-app purchases, no social features. One of the safest apps available for children.',
    parentalControls: 'No restrictions needed. Khan Academy Kids (separate app) is specifically designed for ages 2–8.',
  },
};

const riskColors = {
  low: 'text-green-600 dark:text-green-400',
  medium: 'text-amber-600 dark:text-amber-400',
  high: 'text-red-600 dark:text-red-400',
};

const riskBg = {
  low: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800',
  medium: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
  high: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800',
};

const riskIcon = {
  low: CheckCircle2,
  medium: AlertTriangle,
  high: XCircle,
};

const riskLabel = {
  low: 'Lower risk',
  medium: 'Moderate risk',
  high: 'Higher risk',
};

export default function ChildAppSafetyChecker() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<AppProfile | null>(null);
  const [notFound, setNotFound] = useState(false);

  const search = () => {
    const key = query.trim().toLowerCase();
    const found = APP_DATABASE[key];
    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') search();
  };

  const RiskIcon = result ? riskIcon[result.riskLevel] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Child App Safety Checker | TekSure"
        description="Look up popular apps to see age ratings, privacy risks, chat features, and parental control tips before your child downloads them."
      />
      <Navbar />
      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Child App Safety Checker' }]} />

        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              Know before they download
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Child App Safety Checker
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Search an app name to see its age rating, privacy risks, chat features, and how to
              set up parental controls — before your child downloads it.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-2xl space-y-6">
            {/* Search */}
            <Card className="border-2">
              <CardContent className="p-6">
                <label htmlFor="app-search" className="block text-base font-medium mb-2">
                  Enter app name
                </label>
                <div className="flex gap-2">
                  <Input
                    id="app-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="e.g. TikTok, Roblox, YouTube Kids…"
                    className="flex-1"
                  />
                  <Button onClick={search} className="gap-2 shrink-0">
                    <Search className="h-4 w-4" />
                    Check
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <p className="text-xs text-muted-foreground w-full">Try one of these:</p>
                  {['TikTok', 'Roblox', 'YouTube', 'Minecraft', 'Discord', 'Snapchat', 'Duolingo'].map((app) => (
                    <button
                      key={app}
                      onClick={() => { setQuery(app); const key = app.toLowerCase(); const f = APP_DATABASE[key]; if (f) { setResult(f); setNotFound(false); } }}
                      className="text-xs px-2 py-1 border rounded-md hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Result */}
            {result && RiskIcon && (
              <Card className={`border-2 ${riskBg[result.riskLevel]}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">{result.name}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <RiskIcon className={`h-5 w-5 ${riskColors[result.riskLevel]}`} />
                        <span className={`font-semibold ${riskColors[result.riskLevel]}`}>
                          {riskLabel[result.riskLevel]}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm">{result.ageRating} rated</Badge>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {[
                      { label: 'In-app purchases', value: result.inAppPurchases },
                      { label: 'Chat / messaging', value: result.chat },
                      { label: 'Advertisements', value: result.ads },
                      { label: 'Location access', value: result.location },
                    ].map(({ label, value }) => (
                      <div key={label} className="border rounded-lg p-3 bg-background/60 text-center">
                        <div className={`text-lg font-bold ${value ? 'text-amber-600 dark:text-amber-400' : 'text-green-600 dark:text-green-400'}`}>
                          {value ? 'Yes' : 'No'}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-1">What to know</h3>
                    <p className="text-sm text-muted-foreground">{result.notes}</p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border">
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Parental control steps
                    </h3>
                    <p className="text-sm text-muted-foreground">{result.parentalControls}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {notFound && (
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                  <h2 className="font-bold text-lg mb-2">App not in our database</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    We do not have information on "{query}" yet. You can look it up on Common Sense
                    Media, which reviews thousands of apps and games for families.
                  </p>
                  <Button asChild variant="outline" className="gap-2">
                    <a href="https://www.commonsensemedia.org/app-reviews" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Search Common Sense Media
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* General tips */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-3">General tips for any app</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Download and use the app yourself before letting your child install it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>On iPhone: Settings → Screen Time → Content & Privacy Restrictions lets you approve all app downloads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>On Android: Google Family Link can approve downloads, set screen time, and review activity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Set up purchases to require your approval — most app stores have this in family settings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>Have an open conversation about what to do if something feels wrong or uncomfortable online.</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    For comprehensive app reviews:{' '}
                    <a href="https://www.commonsensemedia.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      Common Sense Media
                    </a>{' '}
                    and{' '}
                    <Link to="/guides?category=Safety" className="text-primary underline">
                      our Safety guides
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
