import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorGriefSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grief Support for Seniors — TekSure" description="Grief apps and groups — GriefShare, Hospice Foundation, support online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grief Support</h1>
          <p className="text-lg text-muted-foreground">Loss is part of life.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GriefShare</h2><p>FREE. 13-week support group. In churches nationally.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hospice Foundation</h2><p>FREE 24/7. 1-800-854-3402. Bereavement counseling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Empty Cradle</h2><p>FREE. Online groups for spousal loss.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Modern Loss</h2><p>FREE app. Daily grief support. Real stories.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local hospice</h2><p>Often free bereavement programs. Even if loved one wasn&apos;t their patient.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Therapy</h2><p>Medicare covers grief counseling. Don&apos;t suffer alone.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Grief takes years, not months. Be patient with yourself.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
