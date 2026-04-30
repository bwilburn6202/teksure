import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function GoGoGrandparentForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GoGoGrandparent for Seniors | TekSure" description="Call rides without an app. GoGoGrandparent senior rideshare guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GoGoGrandparent</h1>
          <p className="text-lg text-muted-foreground">Call for ride — no app.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Concierge rideshare.</li><li>Call phone — they book Uber/Lyft.</li><li>$10/month + small fee per ride.</li><li>No smartphone needed.</li><li>Senior-targeted.</li><li>Family monitoring.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sign up phone or web.</li><li>Save addresses.</li><li>Call 1-855-464-6872.</li><li>Press 1 for ride.</li><li>Confirm pickup.</li><li>Driver arrives.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No app needed.</li><li>Familiar phone process.</li><li>Family alerts on rides.</li><li>Save common destinations.</li><li>Senior independence.</li><li>Safer than driving.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family monitoring</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Kids see senior rides.</li><li>Alert when boarded/arrived.</li><li>Pay for service.</li><li>Reduce driving worry.</li><li>Senior independence preserved.</li><li>Family peace of mind.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Other services</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Press 2 — meal delivery.</li><li>Press 3 — groceries.</li><li>Press 4 — prescriptions.</li><li>Press 5 — caregiving.</li><li>One number, many services.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/month membership.</li><li>+$0.27 per minute service fee.</li><li>+normal Uber/Lyft fare.</li><li>Worth it for non-tech.</li><li>Cheaper than nursing home.</li><li>Senior value.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Phone-only rideshare = senior independence</h3><p className="text-sm text-muted-foreground">For seniors without smartphones, GoGoGrandparent + flip phone = full Uber access. Call number, get ride. Family monitors. Plus meal/grocery delivery via same number. Best service for seniors who shouldn&apos;t drive but lack tech. Worth the $10/month.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
