import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorBeMyEyes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Be My Eyes — Senior Guide" description="Free help from sighted volunteers when needed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Be My Eyes</h1>
          <p className="text-lg text-muted-foreground">Free help when sight is hard.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App connects you with sighted volunteers via video call. 24/7 worldwide.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Read labels</h2><p>Volunteer reads expiration dates, medication names, wash instructions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Sort mail</h2><p>Hold up envelopes — volunteer reads sender names. Saves opening every one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Match clothes</h2><p>Quick pic. Volunteer tells you the color and pattern.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. AI mode</h2><p>New Be My AI uses ChatGPT vision. Instant descriptions of photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Specialized help</h2><p>Microsoft, Google, banks have trained volunteers for tech, banking, accessibility.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Volunteers are friendly and patient. No call too small. They want to help.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
