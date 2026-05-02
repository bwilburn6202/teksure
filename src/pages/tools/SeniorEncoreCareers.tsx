import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorEncoreCareers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Encore Careers for Seniors — TekSure" description="Find part-time work after retirement — Encore.org, RetiredBrains, age-friendly employers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Encore Careers</h1>
          <p className="text-lg text-muted-foreground">Work part-time. Stay engaged. Earn extra.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Encore.org</h2><p>FREE. Volunteer + paid opportunities for ages 50+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">RetiredBrains</h2><p>FREE. Senior-only job board. Real part-time roles.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AARP Job Board</h2><p>FREE. Age-friendly employers. Filter by remote.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best senior jobs</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Substitute teacher</li><li>Seasonal IRS</li><li>Census Bureau</li><li>National park ranger</li><li>Tax-Aide volunteer (paid)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SCORE mentoring</h2><p>FREE. Mentor small business owners. Use your career experience.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch Social Security</h2><p>If under full retirement age, earnings over $22,320 reduce benefits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many seniors find encore work boosts mental health more than the income matters.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
