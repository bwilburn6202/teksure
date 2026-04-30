import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function CrashDetectionForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Crash Detection for Senior Drivers | TekSure" description="iPhone + Apple Watch crash detect. Senior driver safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Crash Detection</h1>
          <p className="text-lg text-muted-foreground">Auto-call after crash.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone 14+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in.</li><li>Severe crash detected.</li><li>10-sec countdown.</li><li>Auto-calls 911.</li><li>Senior unconscious safe.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch Series 8+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same feature.</li><li>Plus fall detection.</li><li>Senior comprehensive.</li><li>Independent of phone.</li><li>Cellular models call without phone.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pixel + Android</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pixel 3+ has Personal Safety.</li><li>Crash detection.</li><li>Free + built-in.</li><li>Senior Android equivalent.</li><li>Same auto-call.</li><li>Configure first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Emergency.</li><li>Crash Detection On.</li><li>Add emergency contacts.</li><li>Test with airbag-style toy car.</li><li>Senior verify works.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">False alarms</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Roller coasters.</li><li>Skiing falls.</li><li>10-sec cancel.</li><li>Don&apos;t panic.</li><li>Senior aware.</li><li>Won&apos;t embarrass.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family alerts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Crash auto-texts contacts.</li><li>Location shared.</li><li>Senior family knows immediately.</li><li>Free.</li><li>Set up emergency contacts.</li><li>Worth 5 min.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">iPhone 14+ = senior auto-911</h3><p className="text-sm text-muted-foreground">If senior has iPhone 14+ or Apple Watch Series 8+, crash detection auto-calls 911 + alerts family. Free + built-in. 10-sec cancel for false alarms. Senior unconscious — help comes. Worth checking phone setup. Pixel + Android have same.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
