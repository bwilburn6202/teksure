import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorLifeReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Life Review Apps for Seniors — TekSure" description="Storyworth, Remento — record life stories for grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Life Review</h1>
          <p className="text-lg text-muted-foreground">Tell your story for grandkids.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Storyworth</h2><p>$99/year. Weekly questions emailed. Year-end book printed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Remento</h2><p>$129/year. Voice-recorded stories. AI transcribes. Beautiful book.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">StoryCorps</h2><p>FREE. Record interviews with family. Library of Congress preserves.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice Memos</h2><p>FREE. iPhone built in. Talk for 5 minutes about a memory weekly. 200+ memories.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why important</h2><p>Voice fades after death. Stories disappear. Record now.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best gift</h2><p>Family treasures life stories more than money. Records last forever.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Storyworth is best gift adult children give parents. Memories before fade.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
