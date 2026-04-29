import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const APPS = [
  { name: 'Shutterfly', cost: '$30+/book', best: 'Most-used, photo books + cards.', good: 'Best photo books.' },
  { name: 'Mixbook', cost: '$30+/book', best: 'Premium photo books.', good: 'Best premium.' },
  { name: 'Chatbooks', cost: '$10/mo subscription', best: 'Auto-photo books monthly.', good: 'Best auto.' },
  { name: 'Canva', cost: 'FREE', best: 'Design pages digitally.', good: 'Best design free.' },
  { name: 'Forever', cost: '$10-30/yr', best: 'Lifetime photo storage.', good: 'Best storage.' },
];

export default function ScrapbookingDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Scrapbooking for Seniors | TekSure" description="Make photo books + scrapbooks. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Scrapbooking</h1>
          <p className="text-lg text-muted-foreground">Photo books = scrapbooks of today.</p>
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
            <h2 className="font-bold text-xl mb-3">Why digital scrapbooking?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No glue, scissors, paper everywhere.</li>
              <li>Store thousands of photos easily.</li>
              <li>Print only what you want.</li>
              <li>Multiple copies for family.</li>
              <li>Templates do design work.</li>
              <li>Phone photos go directly in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Shutterfly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$30-50/book.</li>
              <li>Easy upload from phone.</li>
              <li>Auto-suggest layouts.</li>
              <li>Add captions.</li>
              <li>Customer service in English.</li>
              <li>Coupons frequent — 50% off common.</li>
              <li>Print 1 or 100.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Project ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Yearly &quot;family year&quot; book.</li>
              <li>Trip / vacation books.</li>
              <li>Grandkid milestone book.</li>
              <li>Memorial book (passed loved one).</li>
              <li>Recipe book with family photos.</li>
              <li>Wedding album recreation.</li>
              <li>Christmas story books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo organization first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get photos off phone — backup first.</li>
              <li>Apple / Google Photos auto-album.</li>
              <li>Pick favorites — 30-50 per book.</li>
              <li>Sort by date or theme.</li>
              <li>Avoid blurry photos.</li>
              <li>One book per topic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Traditional scrapbooking too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hobby Lobby / Joann supplies.</li>
              <li>Acid-free paper + adhesive.</li>
              <li>Print photos at Costco / Walgreens.</li>
              <li>Cricut machine cuts shapes.</li>
              <li>Combine with handwritten notes.</li>
              <li>Heritage scrapbook = family history.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t lose photos</h3>
            <p className="text-sm text-muted-foreground">Scan old paper photos before they fade — Costco, FedEx, ScanCafe. Backup digital photos to cloud — Google Photos free 15GB. Make at least 1 photo book per year. Best gift for kids + grandkids: family memories printed permanently.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
