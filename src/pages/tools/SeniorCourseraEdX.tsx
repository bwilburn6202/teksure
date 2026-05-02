import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorCourseraEdX() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coursera and edX — Senior Guide" description="Take real college courses online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coursera and edX</h1>
          <p className="text-lg text-muted-foreground">Real Harvard, MIT, Stanford classes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free to audit</h2><p>Most courses free if you skip the certificate. Watch all videos, do all homework.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Famous universities</h2><p>Yale, Princeton, Duke. Same content their students get.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Pace yourself</h2><p>Most are 4-12 weeks. 3-5 hours per week. Pause and resume anytime.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Senior favorites</h2><p>Buddhism in the Modern World, Astronomy, History of Rock and Roll.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Captions</h2><p>Every video has captions. Speed adjustable too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Certificates</h2><p>Optional. $30-100 per course. Good for resume or a diploma on the wall.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many libraries offer free Coursera Plus. Ask at your branch.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
