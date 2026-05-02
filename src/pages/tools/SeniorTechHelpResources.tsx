import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

export default function SeniorTechHelpResources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tech Help Resources — Senior Guide" description="Where seniors can get free tech help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LifeBuoy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tech Help Resources</h1>
          <p className="text-lg text-muted-foreground">Free help when you're stuck.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Senior Planet</h2><p>Free tech classes online. seniorplanet.org. AARP-affiliated.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Library tech help</h2><p>Most public libraries offer free 1-on-1 tech help. Walk-in or appointment.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Apple Support</h2><p>support.apple.com/contact. Free phone or chat help. Friendly experts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Genius Bar</h2><p>Free in-store help at any Apple Store. Make appointment in Apple Support app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Microsoft Answer Desk</h2><p>support.microsoft.com. Free chat help for Windows.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Geek Squad in-store</h2><p>Best Buy. Costs but trusted. $30 free if you're an Office Depot customer with new device.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Avoid pop-up tech support. They're scams. Always go to known stores or official sites.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
