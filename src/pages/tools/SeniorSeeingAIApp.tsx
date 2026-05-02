import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorSeeingAIApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Seeing AI for Seniors — TekSure" description="Microsoft's free Seeing AI app reads anything — text, faces, money, products." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Seeing AI</h1>
          <p className="text-lg text-muted-foreground">Microsoft&apos;s free vision app.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>Microsoft. Free in App Store and Google Play. No ads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reads text aloud</h2><p>Point camera at any text. Hears it spoken back.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reads documents</h2><p>Take a photo of a letter or bill. App reads the whole document, page by page.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Identifies money</h2><p>Point at a bill — &ldquo;20 dollars.&rdquo; Helps with low vision.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reads barcodes</h2><p>Scan grocery items — app says product name and price.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recognizes faces</h2><p>Identifies family members you&apos;ve trained the app on.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even with good vision, this saves time on small print and pill bottles.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
