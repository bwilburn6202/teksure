import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HandHeart } from 'lucide-react';

export default function SeniorVolunteerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Volunteer Apps for Seniors — Senior Guide" description="Find rewarding volunteer opportunities online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HandHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Volunteer Apps</h1>
          <p className="text-lg text-muted-foreground">Give back from home or in person.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AARP Create The Good</h2><p>Free at createthegood.org. Match volunteer needs with your skills.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. VolunteerMatch</h2><p>Free at volunteermatch.org. Filter for senior-friendly opportunities.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Senior Corps</h2><p>Federal program. Stipend or expense reimbursement available.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Be My Eyes volunteer</h2><p>Help blind people identify objects via video call. 5-10 minute commitments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Translators without Borders</h2><p>If you speak another language, translate for refugees and aid groups.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Storytelling</h2><p>StoryCorps records family stories for the Library of Congress. Free app.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Volunteering improves mood and longevity. Even one hour a week makes a difference.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
