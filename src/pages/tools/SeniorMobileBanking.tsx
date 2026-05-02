import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark } from 'lucide-react';

export default function SeniorMobileBanking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mobile Banking for Seniors — TekSure" description="How seniors can use mobile banking safely — Chase, Wells Fargo, BofA, Capital One." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Landmark className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mobile Banking for Seniors</h1>
          <p className="text-lg text-muted-foreground">Bank safely from home or anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get the official app</h2><p>Search the App Store or Google Play for your bank&apos;s name. Look for the official badge.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set up Face ID or fingerprint</h2><p>Faster and safer than typing a password each time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mobile check deposit</h2><p>Snap a photo of front and back. Endorse with &ldquo;For mobile deposit only&rdquo; + your signature.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set transaction alerts</h2><p>Get a text any time over $50 is spent. Catches fraud fast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Never click links</h2><p>If you get a text or email, open the bank app yourself. Never tap suspicious links.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lock the app</h2><p>Set a 4-digit PIN even after Face ID. Two layers protect against scammers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Banks NEVER call asking for your password. If they do — hang up and call the number on your card.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
