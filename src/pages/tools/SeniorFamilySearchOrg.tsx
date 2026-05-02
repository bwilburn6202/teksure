import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine } from 'lucide-react';

export default function SeniorFamilySearchOrg() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="FamilySearch.org — Senior Guide" description="Free genealogy at FamilySearch.org." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TreePine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">FamilySearch.org</h1>
          <p className="text-lg text-muted-foreground">Free family tree research.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free forever</h2><p>Run by The Church of Jesus Christ of Latter-day Saints. Open to everyone, free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign up</h2><p>Visit familysearch.org. Make a free account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Build your tree</h2><p>Add yourself. Then parents, grandparents. App finds matches with other people's research.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Search records</h2><p>Billions of free records. Census, birth, death, marriage, immigration.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Memories</h2><p>Upload old photos and stories. Share with family.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Help center</h2><p>Volunteers help by chat or video call. Free help with hard-to-find ancestors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many libraries have FamilySearch Centers — visit for hands-on help with research.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
