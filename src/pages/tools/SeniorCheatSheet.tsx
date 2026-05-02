import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

export default function SeniorCheatSheet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Tech Cheat Sheet — Senior Guide" description="Quick-reference tech tips for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Tech Cheat Sheet</h1>
          <p className="text-lg text-muted-foreground">The essentials, on one page.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Restart fixes most things</h2><p>Phone acting weird? Hold power button, restart. Solves 80% of issues.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Big text everywhere</h2><p>Settings, Display, Text Size. Drag larger. Phone, computer, e-reader all support this.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Strong unique passwords</h2><p>Use a password manager. Never reuse passwords across sites.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Two-factor everywhere</h2><p>Email, bank, Apple ID, Google. The single best security upgrade.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Backup nightly</h2><p>iCloud or Google plug-in-while-sleeping does it automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Hang up on strangers</h2><p>Real banks, IRS, Medicare never call demanding payment. Just hang up.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Print this page. Tape on fridge. Refer to it whenever in doubt.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
