import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function SeniorTextingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Texting Tips for Seniors — TekSure" description="How seniors text family — voice typing, photos, group chats, scam alerts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Texting Tips for Seniors</h1>
          <p className="text-lg text-muted-foreground">Faster than calling. Clearer than email.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice typing</h2><p>Tap microphone on keyboard. Speak. Phone types it. No more thumb hunting.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Send a photo</h2><p>Tap camera icon in messages. Snap or pick from gallery. Send.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Group texts</h2><p>Add multiple recipients. Holiday wishes to whole family at once.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger text</h2><p>iPhone: Settings → Display → Text Size. Android: Settings → Display → Font size.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common scams to ignore</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Wrong number&rdquo; chats that get friendly</li><li>USPS package fees</li><li>Bank fraud alerts with links</li><li>Grandchild needing bail money</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Block and report</h2><p>Long-press the conversation → Block. Or report as spam.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A 1-letter reply (&ldquo;K&rdquo; for OK) is fine. Texting culture allows short responses.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
