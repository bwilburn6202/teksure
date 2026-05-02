import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Vote } from 'lucide-react';

export default function SeniorPolitical() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Civic Engagement Apps for Seniors — TekSure" description="Track Congress, contact reps, vote — civic apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Vote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Civic Engagement Apps</h1>
          <p className="text-lg text-muted-foreground">Make your voice heard.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Congress.gov</h2><p>FREE. Official site. Track every bill in Congress.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">5 Calls</h2><p>FREE. Identifies your reps. Suggests scripts to call about issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vote.org</h2><p>FREE. Register to vote. Find your polling place. Mail-in ballot info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">BallotReady</h2><p>FREE. Research candidates and ballot measures before voting.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP advocacy</h2><p>FREE. AARP follows senior issues — Medicare, Social Security. Action alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FEC.gov</h2><p>FREE. See who donates to political campaigns. Public records.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Seniors vote at higher rates than any age group. Power matters.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
