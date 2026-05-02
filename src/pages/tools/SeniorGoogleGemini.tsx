import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorGoogleGemini() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Gemini for Seniors — Senior Guide" description="Use Google's AI to find answers fast." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Gemini</h1>
          <p className="text-lg text-muted-foreground">Google's AI helper.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>Visit gemini.google.com. Sign in with your Google account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Ask questions</h2><p>Type or speak. Gemini reads from real Google search results.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Compare items</h2><p>Help me pick a riding lawn mower under $2,000 — Gemini gives a comparison table.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Email drafts</h2><p>Draft a polite letter to my insurance company about a denied claim. Gets you started.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Photo help</h2><p>Take a photo of a plant or bug. Ask what it is. Gemini identifies it from the image.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Always check sources</h2><p>Tap the source link Gemini cites. Verify before acting on any health or money advice.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Gemini is built into Android phones — long-press the Home button to summon.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
