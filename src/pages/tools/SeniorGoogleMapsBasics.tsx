import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function SeniorGoogleMapsBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Maps for Seniors — TekSure" description="How seniors use Google Maps for driving, walking, and finding doctors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Maps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Never get lost again.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get directions</h2><p>Tap search bar. Type address or business name. Tap blue &ldquo;Directions&rdquo; button.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice navigation</h2><p>Tap &ldquo;Start.&rdquo; Phone speaks turn-by-turn. Eyes on the road.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid highways</h2><p>Tap &ldquo;...&rdquo; → Route options → Avoid highways. Less stressful for some.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save Home and Work</h2><p>Tap your profile → Settings → Saved → set Home and Work.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find services</h2><p>Type &ldquo;pharmacy near me&rdquo; or &ldquo;urgent care.&rdquo; See ratings and hours.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Download offline</h2><p>Save your area for use without internet on trips.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Maps and Waze do the same thing. Pick whichever feels easiest.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
