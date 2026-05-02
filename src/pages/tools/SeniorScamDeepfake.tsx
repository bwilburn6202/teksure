import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorScamDeepfake() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Voice Cloning Scams — Senior Guide" description="Spot fake AI voice scams targeting seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Voice Scams</h1>
          <p className="text-lg text-muted-foreground">Scammers can fake any voice now.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. The new scam</h2><p>Caller sounds like grandkid in trouble. Voice is cloned from social media.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Family code word</h2><p>Pick a family password. Only real family knows. Ask before sending money.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Hang up and call back</h2><p>Always call grandkid's regular number to verify.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Never gift cards</h2><p>No real emergency requires gift cards. Always a scam.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Don't say YES</h2><p>Saying yes can be recorded for fraud. Just listen and hang up.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Tell family</h2><p>Talk with family about voice scams. Awareness saves money.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Less social media posts of voice/video means less material for scammers to clone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
