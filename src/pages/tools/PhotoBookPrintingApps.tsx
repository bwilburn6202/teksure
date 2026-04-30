import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function PhotoBookPrintingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Book Printing Apps for Seniors | TekSure" description="Turn your phone photos into beautiful photo books. Best apps and services for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Books</h1>
          <p className="text-lg text-muted-foreground">Turn phone photos into hardcover books.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why photo books?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photos on phone get forgotten in cloud.</li>
              <li>Printed books last for generations.</li>
              <li>Beautiful coffee table conversation pieces.</li>
              <li>Best gifts for spouses + grandkids.</li>
              <li>Memorial books to honor loved ones.</li>
              <li>Travel albums make trips meaningful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shutterfly — most popular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>20-page hardcover book starts $30.</li>
              <li>Free templates — drag photos in.</li>
              <li>Frequent 50% off promos.</li>
              <li>Ships in 1–2 weeks.</li>
              <li>Hardcover or softcover.</li>
              <li>Free shipping with promo codes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mixbook — premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher-quality books — thicker paper.</li>
              <li>20-page book starts $40.</li>
              <li>Beautiful designs + customization.</li>
              <li>Best for special occasions.</li>
              <li>Free shipping promos common.</li>
              <li>Archival quality — lasts decades.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Chatbooks — easiest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto-creates books from your phone photos.</li>
              <li>$10 + shipping — softcover, 60 photos.</li>
              <li>Subscription option — monthly photo book.</li>
              <li>Pulls from Instagram, Facebook, camera roll.</li>
              <li>Almost no work required.</li>
              <li>Great for keeping family up to date.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + cheap options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walmart Photo — books from $10.</li>
              <li>Costco Photo — high quality, member prices.</li>
              <li>CVS, Walgreens — same-day photo books.</li>
              <li>Apple Photos — printed books from iPhone.</li>
              <li>Google Photos — Photobook integration.</li>
              <li>Compare quality before committing to series.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for great photo books</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick 30–50 best photos, not 200.</li>
              <li>Group by event or year.</li>
              <li>Add captions with dates + names.</li>
              <li>Mix big + small photos on each page.</li>
              <li>Order one — review quality before more.</li>
              <li>Wait for promos — 50% off common.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Annual family yearbook</h3>
            <p className="text-sm text-muted-foreground">A wonderful yearly tradition: every January, make a family photo book of the previous year. Pick 50–80 best photos from the year — birthdays, holidays, trips, everyday moments. Order from Shutterfly during a 50% off sale ($20–$25). After 10 years you have a complete visual family history. Future generations will treasure these — far more than thousands of unsorted phone photos.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
