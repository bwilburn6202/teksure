import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorAudiologyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hearing Tests for Seniors — Senior Guide" description="Online hearing tests and apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Tests</h1>
          <p className="text-lg text-muted-foreground">Find hearing loss early.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Mimi Hearing Test</h2><p>Free. 5 minutes. Hearing age estimated. Free recheck monthly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Apple Hearing Test</h2><p>iPhone 15+ with AirPods Pro 2. Free FDA-cleared at-home test.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Costco Hearing</h2><p>Free hearing tests for members. Affordable hearing aids.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Free local hearing tests</h2><p>Most ear/nose/throat doctors offer free first hearing screening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. AARP Hearing</h2><p>aarp.org/hearing — discounted hearing aids and rebates.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. OTC hearing aids</h2><p>FDA approved OTC since 2022. $200-1500. No prescription needed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Hearing loss linked to dementia risk. Treating early matters.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
