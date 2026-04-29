import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Accessibility } from 'lucide-react';

const APPS = [
  { name: 'AccessibleGo', cost: 'FREE', best: 'Hotels with verified accessibility info.', good: 'Best hotel finder.' },
  { name: 'Wheelmap', cost: 'FREE', best: 'Crowdsourced accessible places worldwide.', good: 'Best place finder.' },
  { name: 'BindiMaps', cost: 'FREE', best: 'Indoor navigation for accessibility.', good: 'Best indoor.' },
  { name: 'iAccess Life', cost: 'FREE', best: 'Restaurant + business accessibility ratings.', good: 'Best ratings.' },
  { name: 'Sociability', cost: 'FREE', best: 'Reviews accessible places.', good: 'Best community.' },
];

export default function AccessibleTravelApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Accessible Travel Apps for Seniors | TekSure" description="Travel with mobility issues. Plain-English accessible travel app picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Accessibility className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Accessible Travel</h1>
          <p className="text-lg text-muted-foreground">Wheelchair, walker, or limited mobility — travel possible.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accessible cruises</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modern cruise ships highly accessible.</li>
              <li>Accessible cabins fill 1-2 yrs ahead — book early.</li>
              <li>Royal Caribbean, Princess, Norwegian = best accessible.</li>
              <li>Wheelchair / scooter brought free.</li>
              <li>Rent ones — Special Needs Group at Sea.</li>
              <li>Many shore excursions accessible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Air travel tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wheelchair assistance FREE — see /tools/airport-wheelchair-help.</li>
              <li>TSA Cares — call 855-787-2227 ahead.</li>
              <li>Pre-board for extra time.</li>
              <li>Aisle seats easier.</li>
              <li>Direct flights — fewer transfers.</li>
              <li>Insurance for trip cancellation essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accessible destinations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Disney + Universal</strong> — extremely accessible.</li>
              <li><strong>Las Vegas</strong> — flat, accessible everywhere.</li>
              <li><strong>Cruise ships</strong> — best accessibility option.</li>
              <li><strong>National Parks</strong> — many accessible trails + lodges.</li>
              <li><strong>Hawaii</strong> — accessible resorts + tours.</li>
              <li><strong>Europe</strong> — varies by city. Check before book.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free National Park Pass</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Access Pass</strong> — FREE lifetime for permanently disabled US residents.</li>
              <li>Free entry to 2,000+ federal sites.</li>
              <li>50% off camping.</li>
              <li>Apply at park entrance with disability proof.</li>
              <li>Or USGS website.</li>
              <li>HUGE benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specialized travel agencies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sage Traveling</strong> — accessible Europe specialist.</li>
              <li><strong>Accessible Travel Solutions</strong> — Mexico, Costa Rica.</li>
              <li><strong>Sand &amp; Surf</strong> — beach accessibility.</li>
              <li><strong>Wheelchair Escapes</strong> — wheelchair travel agency.</li>
              <li>Spend more for done-for-you trips.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t self-limit</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t assume you can&apos;t travel. Modern accessibility incredible. Many wheelchair users, scooter users, walker users travel internationally regularly. Right planning = unlimited destinations. Many find travel improves mood + cognition. Apply for accessible passes + book early.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
