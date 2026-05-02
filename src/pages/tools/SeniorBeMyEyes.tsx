import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorBeMyEyes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Be My Eyes for Seniors — TekSure" description="Free app connects low-vision users with sighted volunteers — and AI." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Be My Eyes</h1>
          <p className="text-lg text-muted-foreground">A pair of eyes — anytime, free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>Free app. Connects you to a sighted volunteer by video call. They help read or describe.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common uses</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Read mail</li><li>Match clothing colors</li><li>Check expiration dates</li><li>Read pill bottles</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AI Be My AI</h2><p>Free GPT-powered. Snap any photo. AI describes what&apos;s in it. No human needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">7+ million volunteers</h2><p>Average wait time: under 30 seconds. Available worldwide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Volunteers see only what your camera shows. They can&apos;t access anything else.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get the app</h2><p>Free in App Store and Google Play. Search &ldquo;Be My Eyes.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even good eyesight helps with tiny prescription print. The app is for everyone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
