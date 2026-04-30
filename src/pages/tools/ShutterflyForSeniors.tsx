import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function ShutterflyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Shutterfly for Seniors | TekSure" description="Photo books, holiday cards, prints, gifts. Shutterfly app for senior shutterbugs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Shutterfly</h1>
          <p className="text-lg text-muted-foreground">Photo prints, books, cards, gifts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can make</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo prints — 4x6, 5x7, 8x10.</li>
              <li>Photo books — hardcover + softcover.</li>
              <li>Holiday cards — Christmas, Hanukkah, Easter.</li>
              <li>Calendars — wall + desk.</li>
              <li>Mugs, blankets, pillows with photos.</li>
              <li>Canvas wall art.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing strategy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always wait for a sale — they happen weekly.</li>
              <li>50% off coupons common.</li>
              <li>Often free 4x6 prints offers.</li>
              <li>Holiday cards: 40-60% off in October-December.</li>
              <li>Photo books: 50% off frequent.</li>
              <li>Sign up for emails — discount alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Holiday card workflow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick design (hundreds of templates).</li>
              <li>Upload family photo.</li>
              <li>Add text — names, year.</li>
              <li>Add envelopes (free addressing).</li>
              <li>Order in October — best discounts.</li>
              <li>Mail by early December.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo book annual tradition</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make book of each year&apos;s photos.</li>
              <li>50–80 best photos per year.</li>
              <li>Include captions + dates.</li>
              <li>$30–$60 per book during sales.</li>
              <li>Build family library over years.</li>
              <li>Treasure for grandchildren.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free Shutterfly photo storage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free unlimited photo storage.</li>
              <li>Backup phone photos automatically.</li>
              <li>Then easy to make products.</li>
              <li>Only catch — they hope you order.</li>
              <li>No pressure — backup forever free.</li>
              <li>Good emergency photo backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other photo printers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mixbook — higher-end photo books.</li>
              <li>Snapfish — cheaper than Shutterfly.</li>
              <li>Walgreens — same-day prints.</li>
              <li>CVS Photo — also same-day.</li>
              <li>Costco Photo — best quality + price for members.</li>
              <li>Compare quality before bulk orders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Annual photo book = best legacy</h3>
            <p className="text-sm text-muted-foreground">Every January, make a Shutterfly photo book of the previous year. Include the best 50 photos from family events, vacations, holidays, everyday moments. Wait for 50% off promo. After 10 years you have a complete photo library on shelves. Future generations will treasure these books — far more than thousands of unsorted phone photos.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
