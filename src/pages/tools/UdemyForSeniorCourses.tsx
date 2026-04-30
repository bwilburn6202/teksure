import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function UdemyForSeniorCourses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Udemy for Senior Courses | TekSure" description="Cheap online courses. Udemy senior learning guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Udemy</h1>
          <p className="text-lg text-muted-foreground">Pay-per-course library.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>200,000+ courses.</li><li>Pay per course $10-$200.</li><li>Frequently $10 sale.</li><li>Lifetime access.</li><li>Self-paced.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sale tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always wait for sale.</li><li>$199 → $10-$15.</li><li>Sales every 2 weeks.</li><li>Senior never pay full.</li><li>Worth waiting.</li><li>Same course.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Computer + phone basics.</li><li>Photography.</li><li>Languages.</li><li>Investing.</li><li>Music instruments.</li><li>Cooking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Quality varies</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Read reviews carefully.</li><li>4.5+ stars only.</li><li>Watch preview.</li><li>30-day refund.</li><li>Senior cautious.</li><li>Try sample.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Coursera</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Coursera — university courses.</li><li>Udemy — anyone teaches.</li><li>Coursera more rigorous.</li><li>Udemy more variety.</li><li>Senior pick depth.</li><li>Different purposes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wait for sales.</li><li>Read 100+ reviews.</li><li>Take notes.</li><li>Pause + replay.</li><li>Apply daily.</li><li>Senior brain growth.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10 = senior course library</h3><p className="text-sm text-muted-foreground">Wait for Udemy sales — $200 courses go to $10. Lifetime access. Senior pay $50/year for 5 quality courses. Photography, computer skills, languages, investing. Read reviews carefully — quality varies. Refund within 30 days. Best per-course value.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
