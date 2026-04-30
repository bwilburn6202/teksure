import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ChevronRight } from 'lucide-react';

type App = 'google' | 'apple' | 'waze';

interface AppGuide {
  name: string;
  setup: string[];
  pro: { title: string; detail: string }[];
}

const GUIDES: Record<App, AppGuide> = {
  google: {
    name: 'Google Maps (free, on iPhone or Android)',
    setup: [
      'Install Google Maps if not already on the phone (it is pre-installed on Android).',
      'Sign in with a Google account — your saved places sync across devices.',
      'Allow location access when prompted.',
      'Type "home" → save your home address. Same for "work" if you have one.',
    ],
    pro: [
      { title: 'Download offline maps', detail: 'Tap your photo → "Offline maps" → "Select your own map" → drag the box around your area. Now it works without cell service — important on road trips through the mountains.' },
      { title: 'Save favorite places', detail: 'Tap a place → bookmark icon → save to "Want to go" or "Favorites". Easier to navigate to next time without searching.' },
      { title: 'Share your trip with family', detail: 'When navigating: tap upward arrow → "Share trip progress". They see your live location until you arrive.' },
      { title: 'Voice search and dictation', detail: '"Hey Google, navigate home" — works without unlocking the phone.' },
    ],
  },
  apple: {
    name: 'Apple Maps (free, iPhone/iPad/Mac only)',
    setup: [
      'Already installed — folded paper map icon.',
      'Allow location when first opening.',
      'Tap "Library" → "Home" or "Work" → enter address.',
    ],
    pro: [
      { title: 'Indoor maps for big places', detail: 'Major US airports and malls have indoor maps. Search the airport, then tap "Look Inside" to find the gate.' },
      { title: 'Look Around (Apple\'s Street View)', detail: 'Tap the binoculars icon when viewing a place. 3D street-level view of many US cities.' },
      { title: 'Privacy advantage', detail: 'Apple Maps does not log your trips to a personal profile the way Google does. Worth knowing.' },
      { title: 'Share ETA in Messages', detail: 'When navigating, tap "Share ETA" → pick a contact. Their phone shows your live progress until you arrive.' },
    ],
  },
  waze: {
    name: 'Waze (free, owned by Google, iOS + Android)',
    setup: [
      'Install "Waze".',
      'Sign in with email or Google account.',
      'Allow location.',
      'Type your home address into the search bar — save as "Home".',
    ],
    pro: [
      { title: 'Crowdsourced traffic', detail: 'Waze\'s killer feature — other drivers report cops, accidents, road hazards, gas prices in real time. Best for highway driving.' },
      { title: 'Cheapest gas nearby', detail: 'Tap the search bar → "Gas" → see fuel prices on the map.' },
      { title: 'Avoid HOV lanes', detail: 'Settings → Navigation → "Avoid: HOV / carpool lanes" if you drive solo.' },
    ],
  },
};

const SCENARIOS = [
  {
    title: 'Going to the doctor for the first time',
    detail: 'Pull up the office address the night before. Save it as a favorite. Search "[hospital name] visitor parking" — many hospitals have separate garages.',
  },
  {
    title: 'Meeting family at a restaurant',
    detail: 'Share your trip progress (Google or Apple Maps). Family knows when you\'ll arrive without asking. Reduces "are you on the way?" texts.',
  },
  {
    title: 'Driving in heavy traffic',
    detail: 'Switch to Waze for highway portions. Better at re-routing around accidents than Google.',
  },
  {
    title: 'Walking around a city',
    detail: 'Google Maps walking directions are excellent. Most US cities also show transit on Google. Apple Maps has caught up but is still slightly behind.',
  },
  {
    title: 'No cell service in the area',
    detail: 'Pre-download offline maps for the area before you leave. Routes still work; live traffic does not.',
  },
];

export default function MapsNavigationSetup() {
  const [app, setApp] = useState<App>('google');
  const guide = GUIDES[app];

  return (
    <>
      <SEOHead
        title="Maps & Navigation Setup"
        description="Set up Google Maps, Apple Maps, or Waze — and get to where you are going without stress. Saved places, offline maps, sharing your trip, voice navigation."
        path="/tools/maps-navigation-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Maps &amp; Navigation Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Get there without stress. Set up your maps app, save your home, learn the four tricks that matter.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Maps & Navigation' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your maps app</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {([
                  { id: 'google' as App, label: 'Google Maps' },
                  { id: 'apple' as App,  label: 'Apple Maps' },
                  { id: 'waze' as App,   label: 'Waze' },
                ]).map(o => (
                  <button key={o.id} onClick={() => setApp(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      app === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{guide.name}</Badge>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2">Setup</p>
              <ol className="space-y-2 mb-4">
                {guide.setup.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Four tricks worth knowing</p>
              <div className="space-y-2">
                {guide.pro.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">When to use what</p>
          <div className="space-y-3 mb-6">
            {SCENARIOS.map((s, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">If voice directions sound too quiet</p>
              <p className="text-xs text-muted-foreground">
                Pair your phone via Bluetooth to your car (see Car Phone Setup). Voice goes through the car speakers — much louder than the phone speaker. CarPlay and Android Auto both display the map on your car\'s screen too.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/car-phone-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Car Phone Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">CarPlay / Android Auto for the road.</p>
              </Link>
              <Link to="/tools/find-lost-items" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Find Lost Items</p>
                <p className="text-xs text-muted-foreground mt-0.5">For finding things, not places.</p>
              </Link>
              <Link to="/tools/travel-tech-checklist" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Travel Tech Checklist</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pre-trip phone setup including offline maps.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
