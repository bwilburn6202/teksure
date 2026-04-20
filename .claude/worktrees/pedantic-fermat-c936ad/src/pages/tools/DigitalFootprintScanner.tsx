import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, ExternalLink, Eye, Shield, AlertTriangle, UserX } from 'lucide-react';

interface CheckSource {
  name: string;
  category: 'people-search' | 'social' | 'search' | 'data-broker' | 'breach';
  urlTemplate: (input: string) => string;
  description: string;
  optOutUrl?: string;
}

const SOURCES: CheckSource[] = [
  // People-search sites (most important for privacy)
  {
    name: 'Whitepages',
    category: 'people-search',
    urlTemplate: (q) => `https://www.whitepages.com/name/${encodeURIComponent(q.replace(/\s+/g, '-'))}`,
    description: 'Free lookup shows name, age range, address history, relatives, and phone numbers.',
    optOutUrl: 'https://www.whitepages.com/suppression-requests',
  },
  {
    name: 'Spokeo',
    category: 'people-search',
    urlTemplate: (q) => `https://www.spokeo.com/${encodeURIComponent(q.replace(/\s+/g, '-'))}`,
    description: 'Aggregates public records, social profiles, and contact info.',
    optOutUrl: 'https://www.spokeo.com/optout',
  },
  {
    name: 'BeenVerified',
    category: 'people-search',
    urlTemplate: (q) => `https://www.beenverified.com/people/${encodeURIComponent(q.replace(/\s+/g, '-'))}/`,
    description: 'Paid service but free preview reveals existence of criminal records, addresses, phones.',
    optOutUrl: 'https://www.beenverified.com/app/optout/search',
  },
  {
    name: 'Intelius',
    category: 'people-search',
    urlTemplate: (q) => `https://www.intelius.com/people-search/${encodeURIComponent(q.replace(/\s+/g, '-'))}`,
    description: 'Background check aggregator. Uses public records and social profiles.',
    optOutUrl: 'https://www.intelius.com/opt-out',
  },
  {
    name: 'Radaris',
    category: 'people-search',
    urlTemplate: (q) => `https://radaris.com/ng/search?ff=${encodeURIComponent(q)}`,
    description: 'Often has the most detailed records — including properties owned and relatives.',
    optOutUrl: 'https://radaris.com/control/privacy',
  },
  {
    name: 'TruePeopleSearch',
    category: 'people-search',
    urlTemplate: (q) => `https://www.truepeoplesearch.com/results?name=${encodeURIComponent(q)}`,
    description: 'Completely free. Includes current address, phone numbers, and relatives.',
    optOutUrl: 'https://www.truepeoplesearch.com/removal',
  },
  {
    name: 'FastPeopleSearch',
    category: 'people-search',
    urlTemplate: (q) => `https://www.fastpeoplesearch.com/name/${encodeURIComponent(q.replace(/\s+/g, '_'))}`,
    description: 'Same data as TruePeopleSearch — both owned by the same company.',
    optOutUrl: 'https://www.fastpeoplesearch.com/removal',
  },
  // Search engines
  {
    name: 'Google',
    category: 'search',
    urlTemplate: (q) => `https://www.google.com/search?q=%22${encodeURIComponent(q)}%22`,
    description: 'Search your full name in quotes — shows the most indexed mentions of you online.',
  },
  {
    name: 'Google Images',
    category: 'search',
    urlTemplate: (q) => `https://www.google.com/search?q=%22${encodeURIComponent(q)}%22&tbm=isch`,
    description: 'Photos of you publicly available — profile pictures, tagged photos, event photos.',
  },
  {
    name: 'DuckDuckGo',
    category: 'search',
    urlTemplate: (q) => `https://duckduckgo.com/?q=%22${encodeURIComponent(q)}%22`,
    description: 'Different algorithm than Google. Often surfaces results Google hides.',
  },
  {
    name: 'Bing',
    category: 'search',
    urlTemplate: (q) => `https://www.bing.com/search?q=%22${encodeURIComponent(q)}%22`,
    description: 'Microsoft\'s search. Better for LinkedIn and work-related results.',
  },
  // Social media
  {
    name: 'Facebook',
    category: 'social',
    urlTemplate: (q) => `https://www.facebook.com/search/people/?q=${encodeURIComponent(q)}`,
    description: 'Even with a private profile, your name and photo may be visible.',
  },
  {
    name: 'LinkedIn',
    category: 'social',
    urlTemplate: (q) => `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(q)}`,
    description: 'Profiles are often public by default — includes job history and connections.',
  },
  {
    name: 'Instagram',
    category: 'social',
    urlTemplate: (q) => `https://www.google.com/search?q=site:instagram.com+%22${encodeURIComponent(q)}%22`,
    description: 'Instagram doesn\'t allow direct name search from search engines — use Google.',
  },
  {
    name: 'X (Twitter)',
    category: 'social',
    urlTemplate: (q) => `https://twitter.com/search?q=${encodeURIComponent(q)}&src=typed_query&f=user`,
    description: 'User search. Old tweets may reveal personal info.',
  },
  // Breach checks
  {
    name: 'Have I Been Pwned',
    category: 'breach',
    urlTemplate: () => `https://haveibeenpwned.com/`,
    description: 'Check if your email was exposed in a data breach. Enter email on their site.',
  },
  {
    name: 'Firefox Monitor',
    category: 'breach',
    urlTemplate: () => `https://monitor.firefox.com/`,
    description: 'Mozilla\'s free breach checker — same data as HIBP with cleaner interface.',
  },
  // Data brokers (less public but important)
  {
    name: 'MyLife',
    category: 'data-broker',
    urlTemplate: (q) => `https://www.mylife.com/search-results?fn=${encodeURIComponent(q.split(' ')[0] || '')}&ln=${encodeURIComponent(q.split(' ').slice(1).join(' '))}`,
    description: 'Publishes "reputation scores" based on public data — often misleading.',
    optOutUrl: 'https://www.mylife.com/ci/optout',
  },
  {
    name: 'PeopleFinders',
    category: 'data-broker',
    urlTemplate: (q) => `https://www.peoplefinders.com/people/${encodeURIComponent(q.replace(/\s+/g, '-'))}`,
    description: 'Paid report service. Free preview confirms your data is listed.',
    optOutUrl: 'https://www.peoplefinders.com/opt-out',
  },
];

const CATEGORY_META = {
  'people-search': { label: 'People-Search Sites', icon: UserX, color: 'text-red-600', description: 'These sell your name, address, phone, and relatives. Highest priority to opt out of.' },
  'search': { label: 'Search Engines', icon: Search, color: 'text-blue-600', description: 'See what shows up when someone googles you.' },
  'social': { label: 'Social Media', icon: Eye, color: 'text-purple-600', description: 'Check your public footprint on the major platforms.' },
  'breach': { label: 'Data Breaches', icon: AlertTriangle, color: 'text-amber-600', description: 'Has your information been exposed in a hacking incident?' },
  'data-broker': { label: 'Data Brokers', icon: Shield, color: 'text-slate-600', description: 'Companies that aggregate and sell your personal data.' },
};

export default function DigitalFootprintScanner() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Digital Footprint Scanner — What's Public About You Online?"
        description="Free tool that shows you where to check what's publicly visible about you on the internet. Includes opt-out links for people-search sites."
        path="/tools/digital-footprint-scanner"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Privacy</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Digital Footprint Scanner</h1>
            <p className="text-muted-foreground max-w-2xl">
              See what the internet knows about you. We'll give you direct links to the biggest people-search sites, search engines, and data brokers — plus instructions to remove yourself from each.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <form onSubmit={handleScan} className="max-w-xl mb-10">
            <Label htmlFor="name" className="text-base mb-2 block">Your full name</Label>
            <div className="flex gap-2">
              <Input
                id="name"
                placeholder="e.g. Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-base"
              />
              <Button type="submit" size="lg">
                <Search className="w-4 h-4 mr-2" />Scan
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Your name is only used to generate search links — we never send it to any server or save it.
            </p>
          </form>

          {submitted && (
            <>
              <Card className="mb-8 border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20">
                <CardContent className="p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">This opens links in new tabs</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Each button below opens a search on a different site. Work through them one by one to see what's out there. Prepare for a surprise — most Americans have more data exposed than they realize.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {Object.entries(CATEGORY_META).map(([catKey, meta]) => {
                const Icon = meta.icon;
                const items = SOURCES.filter(s => s.category === catKey);
                return (
                  <div key={catKey} className="mb-8">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-md bg-muted ${meta.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{meta.label}</h3>
                        <p className="text-sm text-muted-foreground">{meta.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {items.map((src) => (
                        <Card key={src.name}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h4 className="font-semibold">{src.name}</h4>
                              {src.optOutUrl && <Badge variant="outline" className="text-xs">Opt-out available</Badge>}
                            </div>
                            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{src.description}</p>
                            <div className="flex gap-2 flex-wrap">
                              <Button size="sm" asChild>
                                <a href={src.urlTemplate(name)} target="_blank" rel="noopener noreferrer">
                                  Check <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                              </Button>
                              {src.optOutUrl && (
                                <Button size="sm" variant="outline" asChild>
                                  <a href={src.optOutUrl} target="_blank" rel="noopener noreferrer">
                                    Opt out
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-2">Want help removing yourself?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Going through each site manually takes 3–5 hours total. Or use a paid service that does it for you:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                    <li>• <strong>DeleteMe</strong> ($129/year) — most popular, removes you from 30+ sites and keeps you off</li>
                    <li>• <strong>Kanary</strong> ($100/year) — similar, slightly cheaper</li>
                    <li>• <strong>Incogni</strong> ($6.50/month) — subscription, covers EU + US brokers</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    These services are not affiliated with TekSure. Your data re-appears every 6-12 months, so removal is ongoing work.
                  </p>
                </CardContent>
              </Card>
            </>
          )}

          {!submitted && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <Card><CardContent className="p-5">
                <div className="text-2xl font-bold mb-1">{SOURCES.filter(s => s.category === 'people-search').length}</div>
                <div className="text-sm text-muted-foreground">People-search sites checked</div>
              </CardContent></Card>
              <Card><CardContent className="p-5">
                <div className="text-2xl font-bold mb-1">{SOURCES.filter(s => s.optOutUrl).length}</div>
                <div className="text-sm text-muted-foreground">Direct opt-out links provided</div>
              </CardContent></Card>
              <Card><CardContent className="p-5">
                <div className="text-2xl font-bold mb-1">5</div>
                <div className="text-sm text-muted-foreground">Categories of exposure</div>
              </CardContent></Card>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
