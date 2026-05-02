import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function SeniorSmartThermostats() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Thermostats for Seniors — TekSure" description="Save on heating and cooling — Nest, Ecobee, Honeywell for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Thermostats</h1>
          <p className="text-lg text-muted-foreground">Lower bills. Comfort everywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Nest</h2><p>$130. Learns your schedule. Auto-adjusts when you&apos;re away.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ecobee Smart</h2><p>$190. Includes room sensors so every room stays comfortable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Honeywell Home</h2><p>$130. Simple. Reliable. Easy app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Utility rebates</h2><p>Many electric companies pay $50-$100 rebate. Check before buying.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save 10-15%</h2><p>Studies show smart thermostats save $150+ per year on average bills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Hey Google, make it 72.&rdquo; &ldquo;Alexa, set the heat to 68.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Have an electrician install for ~$100 if wiring is unclear. Worth the peace of mind.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
