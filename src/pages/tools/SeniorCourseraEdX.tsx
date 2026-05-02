import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorCourseraEdX() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coursera & edX for Seniors — TekSure" description="Free Harvard, MIT, and Yale courses for seniors — Coursera and edX." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coursera &amp; edX</h1>
          <p className="text-lg text-muted-foreground">Ivy League courses, free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audit free</h2><p>Both let you watch all course videos for free. Pay only for a certificate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">edX</h2><p>Founded by Harvard and MIT. Strong in science and humanities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Coursera</h2><p>Yale, Stanford, Princeton, Duke. Strong in business, history, psychology.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior favorites</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Yale&apos;s Science of Well-Being (free)</li><li>Harvard&apos;s CS50 intro to computer science</li><li>MIT history courses</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pace yourself</h2><p>Most courses are 4-12 weeks. Watch on your schedule.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior groups</h2><p>Discussion forums often have age-diverse groups. Great for connection.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 1-2 hours per week is plenty. Slow learning sticks better.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
