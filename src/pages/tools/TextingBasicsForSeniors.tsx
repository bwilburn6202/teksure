import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function TextingBasicsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Texting Basics for Seniors | TekSure" description="Learn to text confidently. Senior texting guide for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Texting Basics</h1>
          <p className="text-lg text-muted-foreground">Senior texting confidence.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Send a text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Messages app (green or blue).</li><li>Tap pencil/compose icon.</li><li>Type contact name.</li><li>Type message.</li><li>Tap send arrow.</li><li>Done!</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice typing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap microphone on keyboard.</li><li>Speak naturally.</li><li>Phone types it.</li><li>Easier than thumbs.</li><li>Senior wins.</li><li>Edit before sending.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photos in text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap camera icon.</li><li>Take new photo or choose.</li><li>Send.</li><li>Family loves photos.</li><li>Especially grandkids.</li><li>Easy share.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bigger text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Display.</li><li>Text Size — slide up.</li><li>Easier to read.</li><li>Enable Bold Text.</li><li>Senior eye friendly.</li><li>Free fix.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Group texts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add multiple contacts.</li><li>Everyone sees replies.</li><li>Family logistics.</li><li>Mute if too busy.</li><li>Tap names to view.</li><li>Senior helpful.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Common shortcuts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>LOL = laughing.</li><li>BRB = be right back.</li><li>OMW = on my way.</li><li>K = ok.</li><li>Don&apos;t need to use.</li><li>Just understand.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Texting bridges senior gap</h3><p className="text-sm text-muted-foreground">Many seniors feel left out of texting. Family lives in texts. 30 minutes practice + voice typing = senior texting confidence. Photos of garden + grandkids = bond. Bigger font fixes eye strain. Voice typing fixes thumb fatigue. Don&apos;t miss family chat.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
