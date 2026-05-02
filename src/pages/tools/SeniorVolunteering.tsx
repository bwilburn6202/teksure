import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function SeniorVolunteering() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Volunteer Apps for Seniors — TekSure" description="Find volunteer work — VolunteerMatch, AmeriCorps Seniors, AARP." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Volunteering for Seniors</h1>
          <p className="text-lg text-muted-foreground">Give back. Stay sharp.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VolunteerMatch</h2><p>FREE. Largest US volunteer database. Filter by virtual or in-person.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AmeriCorps Seniors</h2><p>FREE. Government program for 55+. Foster Grandparent, Senior Companion programs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP CreateTheGood</h2><p>FREE. Senior-focused volunteer matching. createthegood.aarp.org.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Virtual options</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Smithsonian Transcription</li><li>Library of Congress</li><li>UN Volunteers Online</li><li>Be My Eyes (low-vision help)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local ideas</h2><p>Hospitals, libraries, food banks, animal shelters always need help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Health benefits</h2><p>Volunteers live longer and report less depression. Real measurable impact.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 2 hours a week is plenty to make a difference and feel connected.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
