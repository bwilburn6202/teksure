import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

export default function iMessageMasteryForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iMessage Mastery for Seniors | TekSure" description="Use iPhone Messages like a pro. Senior iMessage hidden features." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Send className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iMessage Mastery</h1>
          <p className="text-lg text-muted-foreground">Hidden iPhone power.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Blue vs green</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Blue — iPhone to iPhone (iMessage).</li><li>Green — iPhone to Android (SMS).</li><li>Blue is encrypted.</li><li>Blue uses wifi.</li><li>Senior visual cue.</li><li>Function similarly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reactions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-press a message.</li><li>Tap heart, thumbs, ha.</li><li>Quick reply.</li><li>iMessage only (blue).</li><li>Senior easy.</li><li>Saves typing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Edit + unsend</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 16+.</li><li>Long-press recent message.</li><li>Edit (within 15 min).</li><li>Unsend (within 2 min).</li><li>Senior typo fix.</li><li>iMessage only.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice messages</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hold microphone.</li><li>Speak.</li><li>Send audio.</li><li>Family hears voice.</li><li>Senior emotional connection.</li><li>Easier than typing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Search</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pull down on Messages.</li><li>Type search term.</li><li>Find old conversation.</li><li>Senior memory helper.</li><li>Find that recipe.</li><li>Find that address.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Shared photos</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap top of conversation.</li><li>Photos tab.</li><li>All photos shared.</li><li>Senior visual archive.</li><li>Easy access.</li><li>Save favorites.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Voice messages = senior connection</h3><p className="text-sm text-muted-foreground">Voice messages on iPhone bridge senior typing barrier. Hold mic, speak, send. Family hears voice with emotion. Tap Edit on typo (15 min). Unsend embarrassing message (2 min). Search history finds anything. Most under-used iPhone power for seniors.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
