import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function MyChartUserGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyChart User Guide for Seniors | TekSure" description="Master MyChart patient portal. Senior medical records app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyChart Guide</h1>
          <p className="text-lg text-muted-foreground">Senior medical portal.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Test results immediate.</li><li>Message doctor.</li><li>Schedule appointments.</li><li>Senior medical records.</li><li>Video visits.</li><li>Free with provider.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Provider gives activation code.</li><li>MyChart app or website.</li><li>Senior 10-min.</li><li>Family proxy access.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family proxy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kid help senior parent.</li><li>HIPAA form at provider.</li><li>Senior consents.</li><li>Critical aging-in-place.</li><li>Free.</li><li>Worth coordinating.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Test results</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Posted often before doctor calls.</li><li>Senior anxiety vs informed.</li><li>Don&apos;t panic — context matters.</li><li>Doctor explains.</li><li>Worth tracking.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Message doctor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Non-urgent questions.</li><li>Senior 1-2 day reply.</li><li>Free.</li><li>No phone tag.</li><li>Documented.</li><li>Worth using.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Multiple providers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some MyChart instances merge.</li><li>Senior multiple hospitals.</li><li>Each separate login often.</li><li>Track all.</li><li>Bookmark each.</li><li>Worth organizing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free MyChart + family proxy = senior med info</h3><p className="text-sm text-muted-foreground">Free MyChart app from provider + family proxy access (HIPAA form) = senior medical empowerment + adult kid helps. Test results, message doctor, schedule, video visits all free. Critical aging-in-place. Most under-set-up senior medical tool.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
