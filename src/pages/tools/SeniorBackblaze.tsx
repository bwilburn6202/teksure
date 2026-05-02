import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function SeniorBackblaze() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backblaze for Seniors — TekSure" description="Backblaze unlimited cloud backup for seniors — set and forget protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backblaze for Seniors</h1>
          <p className="text-lg text-muted-foreground">Unlimited cloud backup. Set and forget.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$9/month per computer. Unlimited storage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why best for seniors</h2><p>Set up once. Runs forever in background. Backs up everything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Disaster recovery</h2><p>Computer dies? They mail a hard drive to you with all your files.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vs others</h2><p>iCloud/Google = limited. Backblaze = unlimited. Best for big photo libraries.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carbonite alternative</h2><p>$6/month. Same idea. Both work well.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Download app. Sign in. Walk away. Done.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Worth every penny. One ransomware attack avoided pays for years.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
