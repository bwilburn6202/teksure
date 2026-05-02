import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorTechRepairScams() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tech Repair Scams for Seniors — TekSure" description="Avoid fake tech support — Microsoft Support scams, computer popup scams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tech Repair Scams</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t let &ldquo;Microsoft&rdquo; rob you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">The classic scam</h2><p>Pop-up: &ldquo;Your computer has virus. Call Microsoft now.&rdquo; They&apos;re scammers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft RULE</h2><p>Microsoft NEVER calls you. Never pops up phone numbers. Always a scam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple RULE</h2><p>Apple NEVER calls you. iCloud doesn&apos;t lock from popups.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">If you got scammed</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Hang up immediately</li><li>Disconnect computer from internet</li><li>Run real antivirus</li><li>Change passwords</li><li>Call bank if they got money</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real help</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Apple: 1-800-APL-CARE</li><li>Microsoft: support.microsoft.com</li><li>Local Best Buy</li><li>Local computer shops</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Report</h2><p>FTC: reportfraud.ftc.gov. AARP Fraud Watch: 877-908-3360.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: When in doubt, hang up and ask family. Real tech support never pressures.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
