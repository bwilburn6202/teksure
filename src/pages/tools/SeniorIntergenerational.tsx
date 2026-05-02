import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorIntergenerational() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Intergenerational Programs for Seniors — TekSure" description="Connect with younger generations — schools, college, mentoring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Intergenerational Programs</h1>
          <p className="text-lg text-muted-foreground">Connect across generations.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Foster Grandparent</h2><p>Free + stipend for low-income. Mentor at-risk kids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Corps</h2><p>FREE federal program. Volunteer with kids/families.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cyber-Seniors</h2><p>FREE. High schoolers teach seniors tech. Both benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAGE</h2><p>National program. Senior + young adult connections.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Generations United</h2><p>FREE. Find local intergenerational programs. gu.org.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why these work</h2><p>Older adults gain purpose. Young adults gain wisdom. Both gain friendship.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Mentoring linked to slower cognitive decline. You give and receive.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
