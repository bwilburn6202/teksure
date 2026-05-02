import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorVerizonPlans() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Verizon 55+ Plans for Seniors — TekSure" description="Verizon senior plans — 55+ unlimited, FL only." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Verizon 55+ Plans</h1>
          <p className="text-lg text-muted-foreground">Senior discount on big network.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">55+ Unlimited (Florida)</h2><p>$60/month for 1 line. Florida residents only. Discount vs $75 standard.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2-line 55+ FL</h2><p>$80/month. Best deal for senior couples in Florida.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No Florida?</h2><p>Verizon Welcome plan. $35/month with autopay. Often beats senior plans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best coverage</h2><p>Verizon strongest network in rural areas. Worth premium for many.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free Hum</h2><p>Verizon Hum gives car GPS for safety. Sometimes free with plans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheaper alternatives</h2><p>Visible (Verizon-owned) $25/month. Same network, cheaper.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Always negotiate. Verizon often has $10/month off &ldquo;loyalty discount&rdquo; if asked.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
