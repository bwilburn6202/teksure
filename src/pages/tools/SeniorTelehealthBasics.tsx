import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function SeniorTelehealthBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Telehealth Basics for Seniors — TekSure" description="How seniors do video doctor visits — Medicare-covered, easy steps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Telehealth Basics</h1>
          <p className="text-lg text-muted-foreground">See your doctor without leaving home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers it</h2><p>Most telehealth visits are covered like in-person visits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What you need</h2><p>Phone, tablet, or computer with camera and microphone. Wi-Fi or cell signal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common platforms</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Zoom (most common)</li><li>Doxy.me (just a link, no app)</li><li>MyChart (hospital portals)</li><li>Teladoc</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Test before</h2><p>Click the link 10 minutes early. Test camera and mic.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Have ready</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>List of medications</li><li>Notes on symptoms</li><li>Blood pressure log if any</li><li>Insurance card</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ask a family member</h2><p>Have someone with you for important visits. They can help take notes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Phone-only visits are billed as &ldquo;audio only&rdquo; — also covered by Medicare.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
