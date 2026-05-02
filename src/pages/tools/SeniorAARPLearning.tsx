import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorAARPLearning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Skills Builder — Senior Guide" description="Free skills training from AARP." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Skills Builder</h1>
          <p className="text-lg text-muted-foreground">Free skill training for 50+.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Senior Planet</h2><p>Free tech classes online. Sign up at seniorplanet.org.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. AARP TEK</h2><p>Free in-person workshops. Find one nearby at aarp.org/tek.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Smart Driver Course</h2><p>Senior driving refresher. $20-30 online. Most insurers give a discount after.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Job training</h2><p>AARP Re-Skill helps with resume building, interview prep for older job seekers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Caregiver classes</h2><p>Free at aarp.org/caregiving. Includes legal, financial, emotional support.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Brain Health</h2><p>Staying Sharp from AARP — free brain games and articles. Helps memory.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Most are free even for non-members. AARP encourages joining at $16/year for more access.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
