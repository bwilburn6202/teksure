import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function SeniorCalculatorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calculator Apps for Seniors — Senior Guide" description="Pick a senior-friendly calculator app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calculator Apps</h1>
          <p className="text-lg text-muted-foreground">Big buttons, easy math.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Built-in works fine</h2><p>iPhone and Android both have calculator apps. Free, big buttons in landscape mode.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Tip Calculator</h2><p>Built into iPhone Calculator. Or any of dozens of free tip apps.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Currency converter</h2><p>XE Currency. Free. Live rates for travel.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mortgage calculator</h2><p>Bankrate's free app. Estimate monthly payments and total interest.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Unit converter</h2><p>Inches to centimeters, gallons to liters. Useful when traveling abroad.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice calculator</h2><p>Hey Siri or Hey Google, what's 25% of $84? Instant answer.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Use phone in landscape (sideways) mode. Calculator shows scientific functions too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
