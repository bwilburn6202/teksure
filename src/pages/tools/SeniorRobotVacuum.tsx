import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorRobotVacuum() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Vacuums for Seniors — Senior Guide" description="Pick a robot vacuum for easier cleaning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Vacuums</h1>
          <p className="text-lg text-muted-foreground">Floors clean themselves.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Roomba</h2><p>Most popular. $250-700. Schedule daily cleans. Self-empty bin available.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Roborock</h2><p>$300-1500. Vacuum and mops. Top-rated by reviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Eufy</h2><p>$200-600. Quieter. Better budget option.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Schedule daily</h2><p>App lets you run while at lunch. Come home to clean floors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. No-go zones</h2><p>App marks pet bowls, plants. Robot avoids those.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Empty weekly</h2><p>Empty bin once a week. Or get self-empty model — done for you.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Less stooping and pushing. Especially helpful for seniors with back or knee pain.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
