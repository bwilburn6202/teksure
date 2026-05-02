import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function SeniorScreenTimeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Screen Time Apps for Seniors — TekSure" description="Track and limit phone use — Apple Screen Time, Digital Wellbeing, Opal." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Screen Time Apps</h1>
          <p className="text-lg text-muted-foreground">Phone less. Live more.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Screen Time</h2><p>FREE built into iPhone. Settings → Screen Time. Daily report.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Digital Wellbeing</h2><p>FREE on Android. Same features as Apple.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">App limits</h2><p>Set 30 min/day on Facebook. Phone stops you when you hit limit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bedtime mode</h2><p>9 PM-7 AM phone goes grayscale. Less appealing. Better sleep.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Opal</h2><p>$50/year. Strong app blocker. Group apps to block together.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><p>Less phone = better sleep, less back pain, more time with family.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Turn off phone notifications. Most aren&apos;t urgent. Calm restored.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
