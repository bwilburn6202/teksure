import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorEmailEtiquette() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Etiquette — Senior Guide" description="Write polite, clear emails." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Etiquette</h1>
          <p className="text-lg text-muted-foreground">Polite emails get faster replies.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Clear subject line</h2><p>Question about appointment beats Hi or no subject. Helps recipient prioritize.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Greeting and signoff</h2><p>Hi Dr. Smith and Thanks, Bob. Like a polite letter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Short paragraphs</h2><p>Two or three sentences each. Easier to read on a phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. No ALL CAPS</h2><p>Reads as shouting. Use bold sparingly for important words.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Reply All vs Reply</h2><p>Default to Reply. Reply All only if everyone needs the answer.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. BCC for groups</h2><p>BCC hides emails from each other. Protects privacy in family newsletters.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Wait 5 minutes before sending angry emails. Often you'll soften it. Sometimes you won't send.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
