import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Vote } from 'lucide-react';

export default function SeniorPolitics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Political Engagement for Seniors — TekSure" description="Voting, campaigning, contacting reps — civic engagement for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Vote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Political Engagement</h1>
          <p className="text-lg text-muted-foreground">Senior votes count.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior turnout</h2><p>72% of 65+ vote vs 50% under 30. Senior voice matters most.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mail-in ballot</h2><p>Most states. Saves trip. Studies say. Some states automatic for 65+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Volunteer</h2><p>Polls, phone banks, campaigns. Seniors most reliable volunteers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">5 Calls</h2><p>FREE. Identifies your reps. Scripts to call about issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local meetings</h2><p>School board, city council. Often retired seniors run.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP advocacy</h2><p>Free. Senior issues focus. Real impact in DC.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Local elections matter more for daily life. Always vote local.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
