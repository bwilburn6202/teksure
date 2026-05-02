import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorMobilePassportApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mobile Passport Control for Seniors — TekSure" description="Free U.S. customs app that speeds up returning home from international travel." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mobile Passport Control</h1>
          <p className="text-lg text-muted-foreground">Free U.S. customs app — faster reentry.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>Official U.S. Customs and Border Protection app. Free. No application required.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Download</h2><p>Search &ldquo;Mobile Passport Control&rdquo; in the App Store or Google Play.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set up profile</h2><p>Enter passport details once. Add up to 12 family members on one device.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use at airport</h2><p>After landing, answer 4 customs questions in the app. Show the receipt to the officer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where it works</h2><p>33+ U.S. airports and 4 cruise ports. Includes JFK, LAX, MIA, ORD, SFO.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save vs Global Entry</h2><p>Free instead of $100. No interview required. Good if you travel internationally less than twice a year.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Connect to airport Wi-Fi before submitting — works without cell signal.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
