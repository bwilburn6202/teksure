import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorMeetupGroups() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meetup Groups for Seniors — TekSure" description="Find local senior groups — Meetup.com, senior centers, hiking clubs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meetup Groups</h1>
          <p className="text-lg text-muted-foreground">Make friends. Find your tribe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Meetup.com</h2><p>Free to join. Search &ldquo;senior&rdquo; or any interest in your zip code.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Popular senior interests</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Walking groups</li><li>Bridge clubs</li><li>Book clubs</li><li>Photography walks</li><li>Birding</li><li>Travel singles</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior centers</h2><p>Free local resource. Daily activities. Free transportation often included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers</h2><p>Free with most Medicare Advantage. Gym + group fitness classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Planet meetups</h2><p>Free online and in-person. Tech + life skill classes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Faith communities</h2><p>Most welcome new members. Many have specific 50+ groups.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try 3 different groups. The right fit might be the third.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
