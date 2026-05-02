import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorCardioRehab() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cardiac Rehab for Seniors — TekSure" description="Cardiac rehab options — in-person, at-home, virtual programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cardiac Rehab</h1>
          <p className="text-lg text-muted-foreground">After heart event. Get strong.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>36 sessions over 12 weeks. Don&apos;t skip. Reduces death risk 25%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">In-person</h2><p>At hospital. Monitored. Best for first 12 weeks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Virtual cardiac rehab</h2><p>Hello Heart, Recora. Newer. Some Medicare plans cover.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Maintenance</h2><p>After 36 sessions, continue gym at home. Many can&apos;t afford to skip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SilverSneakers</h2><p>FREE. Many gyms have cardiac-rehab-friendly programs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Show up</h2><p>Most seniors who skip rehab regret it. 12 weeks change everything.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Cardiac rehab is the best 12 weeks of senior life after heart event.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
