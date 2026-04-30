import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function PassportPhotoAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passport Photo Apps for Seniors | TekSure" description="Take passport photos with phone. Senior savings guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passport Photo Apps</h1>
          <p className="text-lg text-muted-foreground">DIY senior savings.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Passport Photo Online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$8 digital.</li><li>$15 print + ship.</li><li>Senior cheap option.</li><li>AI verifies passes.</li><li>iPhone or computer.</li><li>Convenient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CVS, Walgreens</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15-$17.</li><li>Walk in.</li><li>Senior easy + reliable.</li><li>Ready in minutes.</li><li>Pros take photo.</li><li>Standard option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">USPS</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15.</li><li>Where you apply too.</li><li>Senior one-stop.</li><li>Combined trip.</li><li>Reliable.</li><li>Government-style photos.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Requirements</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Recent (within 6 months).</li><li>White background.</li><li>No glasses.</li><li>No smiling.</li><li>2x2 inch.</li><li>Senior follow exact.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free DIY</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Use phone camera.</li><li>State.gov tool free.</li><li>Print at home.</li><li>Senior frugal.</li><li>Save $15.</li><li>Right size paper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Online renewal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Travel.state.gov.</li><li>Upload digital photo.</li><li>Skip print step.</li><li>Senior new feature.</li><li>$8 digital app.</li><li>Save print cost.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$8 Passport Photo Online = senior digital</h3><p className="text-sm text-muted-foreground">Senior online passport renewal at travel.state.gov accepts digital photo. Save print step. $8 Passport Photo Online app verifies AI before submit. Or $15 CVS/USPS for traditional. Cheaper + faster than prior generations of senior renewals.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
