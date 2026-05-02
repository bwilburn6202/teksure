import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorAncestryDNA() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ancestry DNA — Senior Guide" description="Use Ancestry to research family history and DNA." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ancestry</h1>
          <p className="text-lg text-muted-foreground">Trace your family roots.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. DNA test</h2><p>$99 kit. Spit in tube, mail back. Results in 6-8 weeks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Find living relatives</h2><p>DNA matches show cousins and their family trees. Some find lost siblings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Build family tree</h2><p>Free with Ancestry account. Add yourself, parents, grandparents.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Subscription</h2><p>$25-50/month for full record access. Census, birth, death records.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Library access</h2><p>Many public libraries offer Ancestry.com Library Edition free at the branch.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Privacy</h2><p>Read DNA privacy policy. Some allow sharing with research, some keep private.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Once data is shared, it's hard to take back. Talk to family before sharing DNA.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
