import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function SeniorVolunteerOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Volunteering for Seniors — TekSure" description="Volunteer from home — Smithsonian, Library of Congress, online tutoring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Volunteering</h1>
          <p className="text-lg text-muted-foreground">Help from home, on your schedule.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smithsonian Transcribe</h2><p>FREE. Help digitize handwritten historical documents. Engaging detective work.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Library of Congress</h2><p>FREE. Transcribe historical letters, diaries, photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tutor.com</h2><p>FREE volunteer tutoring of US students. Use your career skills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Be My Eyes</h2><p>FREE. Help blind users via video. 1-2 minutes per request.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Crisis Text Line</h2><p>Volunteer texting suicide-prevention support. 30+ hours of training.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Corps</h2><p>Federal program. Foster Grandparent and Senior Companion programs. Stipend available.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 2 hours/week of online volunteering = 100 hours/year of impact.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
