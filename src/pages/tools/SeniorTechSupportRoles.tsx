import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function SeniorTechSupportRoles() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Tech Support Roles — Senior Guide" description="Earn money helping people online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Customer Support Jobs</h1>
          <p className="text-lg text-muted-foreground">Work from home helping others.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple at Home</h2><p>Apple hires home tech advisors. $20-25/hour. Health benefits included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Amazon CS</h2><p>Hires home reps. Same pay range. Hours flexible.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Working Solutions</h2><p>Independent contractor. Set your hours. Pay varies by client.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. LiveOps</h2><p>Independent. Customer service for major companies. Flex hours.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Nice equipment</h2><p>Most need quiet room, headset, fast internet. Apple often provides equipment.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Avoid scams</h2><p>Real jobs don't ask you to pay or buy training. Watch for that warning sign.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Senior support agents often outshine the young — patience and life experience help.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
