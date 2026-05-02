import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorGiftCardScams() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gift Card Scams for Seniors — TekSure" description="Why gift cards are scammers' favorite — never pay anyone with gift cards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gift Card Scams</h1>
          <p className="text-lg text-muted-foreground">Never pay government, business, family with gift cards.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">The rule</h2><p>If anyone asks you to pay with gift cards — IT IS A SCAM. Always.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common scams</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;IRS&rdquo; demanding payment</li><li>&ldquo;Microsoft&rdquo; tech support</li><li>&ldquo;Grandchild&rdquo; needing bail</li><li>Unpaid utilities</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why gift cards</h2><p>Untraceable. Once card numbers given, money gone forever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If you fell for it</h2><p>Call gift card company immediately: Apple 1-800-275-2273, Target 1-800-544-2943. Sometimes you can stop the cards.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stores warn</h2><p>Walmart, CVS, Walgreens train cashiers. They may ask &ldquo;Is this for someone you don&apos;t know?&rdquo; Listen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Report</h2><p>FTC: reportfraud.ftc.gov. Helps catch the criminals.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: One simple rule saves $1000s — never pay with gift cards.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
