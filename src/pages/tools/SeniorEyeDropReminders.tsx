import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorEyeDropReminders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eye Drop Reminders for Seniors — TekSure" description="Remember eye drops — apps, devices for glaucoma seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eye Drop Reminders</h1>
          <p className="text-lg text-muted-foreground">Critical for glaucoma.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medisafe</h2><p>FREE. Add eye drops as &ldquo;medication.&rdquo; Reminders + tracking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Health (medications)</h2><p>FREE. iPhone built in. Track adherence.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Missing glaucoma drops causes vision loss. Apps help adherence.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eye drop guides</h2><p>Devices help shaky hands. AutoSqueeze, AutoDrop, $20-$30.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nasolacrimal occlusion</h2><p>Press tear duct after drops. Drug stays in eye longer. Less side effects.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare Part D</h2><p>Many drops covered. Always check formulary.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Echo Show: &ldquo;Alexa, remind me eye drops at 8 AM and 8 PM daily.&rdquo;</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
