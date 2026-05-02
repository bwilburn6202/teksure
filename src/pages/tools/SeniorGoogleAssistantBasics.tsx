import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorGoogleAssistantBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Assistant for Seniors — TekSure" description="How seniors use Hey Google on phones and Nest speakers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Assistant Basics</h1>
          <p className="text-lg text-muted-foreground">Just say &ldquo;Hey Google.&rdquo;</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Built into Android</h2><p>Hold home button or say &ldquo;Hey Google.&rdquo; iPhone? Download the Google app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nest Mini ($30)</h2><p>Smallest Google speaker. Same features as bigger speakers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Top commands</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Hey Google, call Mom&rdquo;</li><li>&ldquo;Hey Google, set reminder&rdquo;</li><li>&ldquo;Hey Google, play 60s music&rdquo;</li><li>&ldquo;Hey Google, what&apos;s 30% of $80?&rdquo;</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read websites aloud</h2><p>&ldquo;Hey Google, read this page.&rdquo; Useful for low vision.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Routines</h2><p>Set a Good Morning routine — lights on, weather, news, all by voice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Say &ldquo;Hey Google, delete my recent activity.&rdquo; Or change in app settings.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Train your voice. Settings → Assistant → Voice Match. Better recognition.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
