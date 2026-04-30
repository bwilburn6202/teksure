import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trees } from 'lucide-react';

export default function NationalParksAppSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="National Parks App for Senior Travelers | TekSure" description="Official NPS app for visiting US national parks. Senior pass discount + park info." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trees className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">National Parks App</h1>
          <p className="text-lg text-muted-foreground">Free official NPS app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Official NPS app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free official app.</li>
              <li>All 400+ parks + monuments.</li>
              <li>Maps, trails, hours.</li>
              <li>Self-guided tours.</li>
              <li>Audio descriptions.</li>
              <li>Download for offline use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior Pass</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$80 lifetime pass for 62+.</li>
              <li>Or $20/year senior pass.</li>
              <li>Free entry to all 400+ federal sites.</li>
              <li>50% off camping + amenity fees.</li>
              <li>Buy at any park entrance.</li>
              <li>Best deal in senior travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recreation.gov</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reserve campsites + cabins.</li>
              <li>Book months in advance for popular.</li>
              <li>Pay hiking permit fees.</li>
              <li>Government rec sites all here.</li>
              <li>$8 reservation fee typical.</li>
              <li>Required for Yosemite, Yellowstone, Glacier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best parks for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Yellowstone — accessible boardwalks.</li>
              <li>Grand Canyon — South Rim drive + lookouts.</li>
              <li>Acadia — paved carriage roads.</li>
              <li>Smoky Mountains — easy trails.</li>
              <li>Zion — shuttle tours, no driving.</li>
              <li>Great Sand Dunes — wheelchair accessible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-guided tours</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Audio narration of points of interest.</li>
              <li>GPS-triggered descriptions.</li>
              <li>Park ranger expert content.</li>
              <li>Free with NPS app.</li>
              <li>Better than guidebooks.</li>
              <li>Pause + replay anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Volunteering</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Volunteer.gov — find park opportunities.</li>
              <li>Camp host = free site for hosting.</li>
              <li>Visitor center help.</li>
              <li>Trail maintenance.</li>
              <li>Many seniors retire to this.</li>
              <li>Beautiful + meaningful work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Buy Senior Pass first</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re 62+ and haven&apos;t bought the $80 lifetime America the Beautiful Senior Pass, do it today. Best deal in travel. Pays for itself in 3–4 park visits. Combined with the free NPS app for self-guided tours, you have a complete national parks experience for under $100. Start with closest park to you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
