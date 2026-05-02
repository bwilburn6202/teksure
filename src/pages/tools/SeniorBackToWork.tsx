import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorBackToWork() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Back to Work for Seniors — Senior Guide" description="Find part-time or remote work after retirement." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Back to Work</h1>
          <p className="text-lg text-muted-foreground">Find work that fits your life.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AARP Job Board</h2><p>Free at aarp.org/jobs. Age-friendly employers post here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Senior Employment Program</h2><p>Federal SCSEP program. Paid training and placement at age 55+.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. FlexJobs</h2><p>$10/month. Curated remote and part-time jobs. No scams.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. LinkedIn</h2><p>Free. Update your profile. Recruiters seek experienced workers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Indeed</h2><p>Free. Filter for part-time, remote, age-friendly companies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Tutor.com</h2><p>Tutor students online. Use your career experience.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Watch Social Security earnings limit if not yet at full retirement age.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
