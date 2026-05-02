import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorOnlineFreelancing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Freelancing for Seniors — TekSure" description="Earn from home — Upwork, Fiverr, FlexJobs for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Freelancing</h1>
          <p className="text-lg text-muted-foreground">Use your skills from home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FlexJobs</h2><p>$15/month. Verified remote jobs only. Best for seniors avoiding scams.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Upwork</h2><p>FREE to join. Take on freelance projects. 5-10% fee on earnings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fiverr</h2><p>FREE. Sell skills as &ldquo;gigs&rdquo; from $5. Voice-overs, writing, advice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best senior skills</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Writing and editing</li><li>Bookkeeping</li><li>Voice-over work</li><li>Translation</li><li>Tutoring</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VIPKid / Outschool</h2><p>Tutor English or any subject. $10-$25/hour from home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid scams</h2><p>Real freelance jobs never ask you to pay. If they do, it&apos;s fake.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 5 hours a week of consistent freelancing = $300-$800 monthly retirement bonus.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
