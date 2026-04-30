import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function CostcoPhotoCenter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Costco Photo Center for Senior Members | TekSure" description="Best photo prices online via Costco Photo Center. Member-only savings on prints, books, gifts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Costco Photo</h1>
          <p className="text-lg text-muted-foreground">Member prices on prints + photo books.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Costco Photo?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Member-only pricing — significantly cheaper.</li>
              <li>Quality matches Shutterfly + Mixbook.</li>
              <li>$1.50 wallet sized prints.</li>
              <li>Photo books from $20.</li>
              <li>Holiday cards from $0.30 each.</li>
              <li>Best value of all photo printers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Products</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo prints — 4x6 to poster size.</li>
              <li>Photo books — soft + hardcover.</li>
              <li>Holiday cards — economical.</li>
              <li>Calendars + canvas wall art.</li>
              <li>Mugs, blankets, coasters.</li>
              <li>Same products as competitors, lower prices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to CostcoPhotoCenter.com.</li>
              <li>Sign in with Costco membership.</li>
              <li>Upload photos from phone or computer.</li>
              <li>Choose product + design.</li>
              <li>Order ships in 5–7 days.</li>
              <li>Or shipped to home (some products).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs Shutterfly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Costco — better everyday pricing.</li>
              <li>Shutterfly — better with 50% off promos.</li>
              <li>Costco quality matches Shutterfly.</li>
              <li>Shutterfly has more design templates.</li>
              <li>Both offer free unlimited photo storage.</li>
              <li>Compare for each project.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costco Connect app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Costco app for photo orders.</li>
              <li>Order from phone.</li>
              <li>Upload phone photos directly.</li>
              <li>Track orders.</li>
              <li>Free with membership.</li>
              <li>Convenient mobile workflow.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Savings example</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>20-page hardcover photo book.</li>
              <li>Costco — $20.</li>
              <li>Shutterfly regular — $40.</li>
              <li>Shutterfly 50% off — $20.</li>
              <li>Mixbook — $40+.</li>
              <li>Costco often cheapest without waiting for sale.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Member benefit worth using</h3>
            <p className="text-sm text-muted-foreground">If you have Costco membership but haven&apos;t used Costco Photo Center, you&apos;re missing out. The member pricing on photo prints and books is consistently among the lowest available. Quality is excellent. The $60 membership pays for itself just on photo orders for many seniors. Try one photo book and compare to your usual provider.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
