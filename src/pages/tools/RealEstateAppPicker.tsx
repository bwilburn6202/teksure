import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface App {
  name: string;
  price: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const APPS: App[] = [
  {
    name: 'Zillow', price: 'Free',
    whoFor: 'Browsing the most listings in one place. A good first stop to see what is out there.',
    pros: ['Largest pool of for-sale and for-rent listings in the US.', 'Map view, saved searches, price-drop alerts.', 'Mortgage calculator built in.'],
    cons: ['The Zestimate price guess can be off by tens of thousands of dollars — do not trust it as a real value.', 'Listings can stay up after a home is already sold.', 'Lots of paid agent ads.'],
    link: 'https://www.zillow.com',
  },
  {
    name: 'Redfin', price: 'Free',
    whoFor: 'Anyone who wants more accurate prices and data from real licensed agents.',
    pros: ['Updates every 5 minutes from the MLS — fewer stale homes.', 'Redfin Estimate tends to be closer to the true sale price than Zillow.', 'Lower-commission Redfin agents in many areas.'],
    cons: ['Smaller listing pool in rural areas.', 'Redfin agents are not in every zip code.'],
    link: 'https://www.redfin.com',
  },
  {
    name: 'Realtor.com', price: 'Free',
    whoFor: 'Buyers who want the freshest, most accurate listing data straight from the source.',
    pros: ['Pulls directly from the MLS (the database real agents use).', 'Listings update faster than Zillow.', 'Clear school ratings and neighborhood info.'],
    cons: ['No price estimate as well known as the Zestimate.', 'App is a little slower than Zillow or Redfin.'],
    link: 'https://www.realtor.com',
  },
  {
    name: 'Trulia', price: 'Free',
    whoFor: 'Folks who care about neighborhood feel — crime maps, schools, commute.',
    pros: ['Strong neighborhood maps — crime, schools, commute, noise.', 'Resident reviews of the area.'],
    cons: ['Owned by Zillow — same listings. No reason to use both.', 'Most seniors stick with Zillow once they see the data overlaps.'],
    link: 'https://www.trulia.com',
  },
  {
    name: 'Apartments.com', price: 'Free',
    whoFor: 'Renters — the best place to find senior apartments, 55+ communities, and rentals.',
    pros: ['Largest US rental listings, with 55+ filters.', 'Verified listings — fewer fake or expired posts.', 'Side-by-side compare and saved favorites.'],
    cons: ['Mostly large complexes — small private rentals are rarer here.', 'Some listings push you toward leasing-office calls.'],
    link: 'https://www.apartments.com',
  },
  {
    name: 'AARP Livability Index', price: 'Free',
    whoFor: 'Anyone weighing where to move — scores cities for senior friendliness.',
    pros: ['Scores any US city or zip on housing, health, transportation, engagement.', 'Backed by AARP — designed for the 55+ audience.', 'Side-by-side compare two towns before you visit.'],
    cons: ['Not a listing app — still need Zillow or Redfin for real homes.', 'Data updates yearly, so very recent changes may not show.'],
    link: 'https://livabilityindex.aarp.org',
  },
];

export default function RealEstateAppPicker() {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <SEOHead
        title="Real Estate App Picker"
        description="Pick the right real estate app — Zillow, Redfin, Realtor.com, Trulia, Apartments.com, AARP Livability Index. Plain-English pros and cons for seniors thinking about downsizing."
        path="/tools/real-estate-app-picker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Home className="h-8 w-8 text-emerald-700 dark:text-emerald-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Real Estate App Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Thinking about downsizing or moving closer to family? Six honest comparisons of the apps real buyers and renters use.
            </p>
          </div>
        </section>
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Real Estate App Picker' }]} />
          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A word on price estimates</p>
              <p className="text-xs text-muted-foreground">
                Zillow's "Zestimate" is the most famous home-value number in America — and the most often wrong. It can be off by 30,000 dollars or more. Use it as a rough starting point, not a real price. For a true value, ask an agent for a free comparative market analysis (CMA), or look at actual sale prices on Redfin and Realtor.com.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4 mb-6">
            {(showAll ? APPS : APPS.slice(0, 3)).map(a => (
              <Card key={a.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{a.name}</p>
                    <Badge variant="outline">{a.price}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {a.whoFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">{a.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">{a.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}</ul>
                    </div>
                  </div>
                  <a href={a.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">Visit official site <ExternalLink className="h-3 w-3" /></a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (<Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 picks</Button>)}
          </div>
          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Wire fraud is the biggest danger when buying a home</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Scammers hack into the email of your agent or title company, then send fake wiring instructions. People lose their entire down payment in minutes — and the bank cannot get it back. Before sending any money, call the title company on a number you looked up yourself (not from the email) and confirm the wire details by voice.
                </p>
                <Link to="/tools/real-estate-wire-scam" className="text-xs text-amber-800 dark:text-amber-200 font-semibold underline">Read the full Real Estate Wire Scam guide →</Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">How to actually use these apps</p>
              <p className="text-xs text-muted-foreground">
                Start with the AARP Livability Index to compare two or three towns. Then open Redfin and Realtor.com to see real listings — pick the one with more homes in the area you want. Save 5 to 10 favorites. Set a price-drop alert. Tour in person before you fall in love with photos. And work with a buyer's agent — their fee is paid by the seller, not by you.
              </p>
            </CardContent>
          </Card>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/real-estate-wire-scam" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Real Estate Wire Scam</p>
                <p className="text-xs text-muted-foreground mt-0.5">The biggest financial risk in any home purchase.</p>
              </Link>
              <Link to="/moving-tech" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Moving Tech</p>
                <p className="text-xs text-muted-foreground mt-0.5">Update accounts, address, and devices when you move.</p>
              </Link>
              <Link to="/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Handle accounts after a spouse passes.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: visit any new town twice — once on a weekday, once on a weekend — before you sign anything. Photos and apps cannot tell you what the noise, traffic, and neighbors really feel like.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
