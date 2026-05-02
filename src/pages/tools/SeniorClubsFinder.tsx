import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorClubsFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Club Finder — TekSure" description="Find local senior clubs — Rotary, Lions, Elks, hobby groups." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Club Finder</h1>
          <p className="text-lg text-muted-foreground">Local connection.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Rotary Club</h2><p>Service organization. Many seniors. Local impact.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lions Club</h2><p>Vision-focused service. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Elks Lodge</h2><p>Veterans, kids charities. Community service.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Garden clubs</h2><p>Most cities. Free or low-cost. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior centers</h2><p>FREE in most cities. Daily activities. Lunch programs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Meetup.com</h2><p>FREE. Hundreds of senior interest groups in most cities.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even joining one club reduces senior loneliness dramatically.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
