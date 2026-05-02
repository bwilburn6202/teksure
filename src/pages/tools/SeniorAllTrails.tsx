import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine } from 'lucide-react';

export default function SeniorAllTrails() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AllTrails for Seniors — Senior Guide" description="Find easy hiking and walking trails near you." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TreePine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AllTrails</h1>
          <p className="text-lg text-muted-foreground">Find walks and hikes everywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App or alltrails.com. Sign up free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Filter by easy</h2><p>Sort by Easy difficulty. Under 1 mile. Wheelchair-friendly options too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Read recent reviews</h2><p>Trails change with weather. Recent reviews tell you about mud, downed trees.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Download offline maps</h2><p>Pro version $36/year. Maps work without cell signal.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Share live location</h2><p>Send link to family. They see your progress on the trail in real time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Save favorites</h2><p>Bookmark trails you've enjoyed. Find them again easily.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Walking 30 minutes a day on a trail beats indoor exercise for mood and balance.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
