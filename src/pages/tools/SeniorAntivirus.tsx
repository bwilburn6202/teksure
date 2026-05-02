import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorAntivirus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Antivirus for Seniors — TekSure" description="Best antivirus for senior computers — Bitdefender, Norton, free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Antivirus for Seniors</h1>
          <p className="text-lg text-muted-foreground">Protect your computer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Windows Defender</h2><p>FREE. Built into Windows 10/11. Plenty for most seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bitdefender</h2><p>$30/year. Top-rated. Auto-updates. Doesn&apos;t slow computer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Norton</h2><p>$50/year. Includes VPN, password manager, identity theft.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mac antivirus</h2><p>Macs have built-in protection. Most seniors don&apos;t need extra.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Pop-ups saying &ldquo;Virus detected!&rdquo; are SCAMS. Real antivirus runs quietly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip these</h2><p>McAfee, AVG, Avast — too pushy. Many ads + upselling.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Click careful = no virus. Software helps but behavior matters more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
