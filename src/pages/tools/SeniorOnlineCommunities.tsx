import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorOnlineCommunities() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Communities for Seniors — TekSure" description="Senior chat rooms, Facebook groups, AARP online community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Communities</h1>
          <p className="text-lg text-muted-foreground">Friends across the country.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP Online Community</h2><p>FREE for AARP members. Forums, advice, connections.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reddit r/seniors</h2><p>FREE. Active senior discussion. Anonymous.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Facebook Groups</h2><p>FREE. Search interests + senior. Hundreds of niche groups.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SuddenlySenior</h2><p>FREE. Forum for senior topics. Long-running community.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Planet</h2><p>FREE. Tech-savvy senior community + classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Romance scammers in senior groups. Don&apos;t share personal info.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: One Facebook senior group beats many isolated days. Real friendship.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
