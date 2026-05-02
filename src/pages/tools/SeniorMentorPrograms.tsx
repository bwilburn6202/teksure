import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorMentorPrograms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Mentor Programs — TekSure" description="Mentor entrepreneurs, students, others — SCORE, AARP Mentor Up, OASIS." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mentor Programs</h1>
          <p className="text-lg text-muted-foreground">Share decades of experience.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SCORE</h2><p>FREE. Mentor small business owners. 50+ years of experience welcomed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP Mentor Up</h2><p>FREE. Reverse mentoring — younger people teach seniors tech. Friendship results.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OASIS</h2><p>FREE. Tutor elementary school kids. Online or in-person.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Encore.org</h2><p>FREE. Match with paid or volunteer mentor roles in education, nonprofits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VITA tax prep</h2><p>FREE. IRS-trained volunteers help low-income families with taxes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Foster Grandparent</h2><p>Stipend for low-income seniors mentoring kids. Up to 40 hours/week.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Mentoring linked to slower cognitive decline. Real benefit on top of helping others.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
