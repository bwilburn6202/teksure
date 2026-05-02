import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorWindowsAntivirus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows Antivirus — Senior Guide" description="Keep your PC safe from viruses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows Antivirus</h1>
          <p className="text-lg text-muted-foreground">Built-in protection that works.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Windows Defender</h2><p>Free, built into Windows 10 and 11. Equal to most paid antivirus tools.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Open Security</h2><p>Open Start, type Windows Security. The shield icon shows your status.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Quick Scan</h2><p>Click Virus & threat protection, Quick scan. Takes 5-10 minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Full Scan once a month</h2><p>Choose Scan options, Full scan. Best done overnight when you don't need the PC.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Skip pop-ups about extra antivirus</h2><p>Pop-ups urging you to buy McAfee or Norton are usually scams. Defender is enough.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Real protection</h2><p>Don't open email attachments from unknown senders. Most viruses arrive that way.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a website warns your PC is infected, close the page. Real antivirus warnings come from Windows, not websites.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
