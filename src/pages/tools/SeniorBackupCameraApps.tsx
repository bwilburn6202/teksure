import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorBackupCameraApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backup Cameras for Seniors — TekSure" description="Add backup camera to any car — wireless, dash cam, blind spot help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backup Cameras for Seniors</h1>
          <p className="text-lg text-muted-foreground">Add a camera to any car.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">All new cars</h2><p>Federal law requires backup cameras since 2018. If yours doesn&apos;t have one, your car is older.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aftermarket wireless</h2><p>$50-$150. License-plate camera + dashboard screen. DIY 30-minute install.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-Vox</h2><p>$160. Top-rated. Solar-powered. Works with most cars.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dash cam alternative</h2><p>$50 dash cams record both directions. Insurance discounts available.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Blind spot help</h2><p>Many newer cars have side-mirror cameras for lane changes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AAA installation</h2><p>AAA members get discounted backup camera installation at member shops.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Backup accidents drop 95% with cameras. Save $1000s in scrapes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
