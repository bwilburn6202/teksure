import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function SeniorDigitalDetoxApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Detox Apps for Seniors — TekSure" description="Step away from screens — Forest, Freedom, One Sec for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Detox Apps</h1>
          <p className="text-lg text-muted-foreground">Step away from screens. Heal.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Forest</h2><p>$2 once. Plant a virtual tree. Don&apos;t use phone for 30 minutes — tree grows.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Freedom</h2><p>$30/year. Block distracting apps and websites for hours.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">One Sec</h2><p>FREE. Adds 1-second pause before opening Facebook. Often makes you reconsider.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone-free hours</h2><p>Schedule no-phone times. Mealtimes, walks, mornings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><p>Better sleep, less anxiety, more present with grandkids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Try a weekend</h2><p>Phone in drawer 24 hours. World keeps spinning. You&apos;ll feel refreshed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Charge phone in kitchen at night, not bedside. Sleep dramatically better.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
