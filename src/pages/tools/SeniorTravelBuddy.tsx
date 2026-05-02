import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorTravelBuddy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Buddies for Seniors — TekSure" description="Solo senior travel — find companions, group tours, women-only tours." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Buddies</h1>
          <p className="text-lg text-muted-foreground">Travel together. Don&apos;t pay singles.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel Buddies International</h2><p>Senior matchmaker for travel partners. No-romance pairings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Solo Travel Society</h2><p>Tours for solos. No single supplements. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Women&apos;s tours</h2><p>Adventures in Good Company. Wild Women Expeditions. 50+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Road Scholar</h2><p>Designed for 50+. No supplements on many tours. Educational.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cruise singles</h2><p>Many lines have host nights. Meet single seniors at sea.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Meetup.com travel groups</h2><p>FREE local senior travel groups. Plan trips together.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Solo travel is empowering. Senior groups make it safe and fun.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
