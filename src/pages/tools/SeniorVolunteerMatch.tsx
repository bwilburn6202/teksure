import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HandHeart } from 'lucide-react';

export default function SeniorVolunteerMatch() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VolunteerMatch — Senior Guide" description="Find meaningful volunteer roles online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HandHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VolunteerMatch</h1>
          <p className="text-lg text-muted-foreground">Volunteer roles tailored to you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up free</h2><p>volunteermatch.org. Pick interests, location, skills.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. In-person or virtual</h2><p>Filter Virtual to volunteer from home. Phone calls, tutoring, mentoring.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Skill-based</h2><p>Use career skills to help non-profits with bookkeeping, marketing, writing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. One-time events</h2><p>Filter for one-time only. No commitment beyond the day.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Senior favorites</h2><p>Tutoring kids, hospital greeter, food bank, animal shelter, library helper.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Health benefits</h2><p>Studies show volunteers live longer, feel happier, stay sharper.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Background checks may be needed. Free for volunteers.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
