import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck, Printer, RefreshCw, Phone, Volume2 } from 'lucide-react';

const WORDS = ['Lighthouse', 'Cinnamon', 'Velvet', 'Compass', 'Maple', 'Harbor', 'Saffron', 'Whisper', 'Lantern', 'Cobalt', 'Gingerbread', 'Mulberry', 'Snowdrift', 'Pinecone', 'Driftwood', 'Hazelnut', 'Periwinkle', 'Marigold', 'Bramble', 'Thistle'];

export default function SafeWordKit() {
  const [word, setWord] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [family, setFamily] = useState('');

  const reroll = () => setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  const print = () => window.print();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Safe-Word Kit — Beat AI Voice-Clone Scams | TekSure" description="Scammers can now copy a loved one's voice with AI. A family safe-word stops them cold. Pick yours, print the wallet card, and share it with everyone in your family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8 print:hidden">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Safe-Word Kit</h1>
          <p className="text-lg text-muted-foreground">Stop "grandparent" voice-clone scams in 30 seconds.</p>
        </div>

        <Card className="mb-6 bg-yellow-50 border-yellow-300 print:hidden dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Volume2 className="w-6 h-6 text-yellow-700 shrink-0 dark:text-yellow-400" />
              <div>
                <h2 className="font-bold mb-1">Why you need this</h2>
                <p className="text-sm text-muted-foreground">Scammers now use AI to copy a grandchild's or family member's voice from social media videos. They call crying, claiming a car accident or arrest, asking for money. A safe-word — a private word only your family knows — proves who's really on the line.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 print:hidden">
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="font-medium block mb-2">Step 1 — Pick a safe-word</label>
              <p className="text-xs text-muted-foreground mb-2">Use a word that's NOT on your social media — not pet names, kids' names, or hometown. Random is best.</p>
              <div className="flex gap-2">
                <Input value={word} onChange={(e) => setWord(e.target.value)} className="text-xl font-bold" />
                <Button variant="outline" onClick={reroll}><RefreshCw className="w-4 h-4 mr-2" />New word</Button>
              </div>
            </div>
            <div>
              <label className="font-medium block mb-2">Step 2 — Family members who will know it</label>
              <Input value={family} onChange={(e) => setFamily(e.target.value)} placeholder="e.g., Sarah, Michael, James, Linda" />
            </div>
            <Button onClick={print} size="lg" className="w-full"><Printer className="w-4 h-4 mr-2" />Print the wallet card</Button>
          </CardContent>
        </Card>

        <div className="hidden print:block mb-6 text-center">
          <h1 className="text-3xl font-bold">Our Family Safe-Word</h1>
        </div>

        <Card className="mb-6 border-2 border-primary print:border-black print:break-inside-avoid">
          <CardContent className="pt-6">
            <div className="text-center py-4">
              <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2 print:text-black">Our family safe-word</p>
              <p className="text-5xl font-bold text-primary print:text-black mb-3">{word}</p>
              {family && <p className="text-sm text-muted-foreground print:text-black">Known by: {family}</p>}
            </div>
            <div className="border-t pt-4 mt-4 space-y-2 text-sm">
              <p className="font-bold flex items-center gap-2"><Phone className="w-4 h-4" />If someone calls in a panic asking for money:</p>
              <ol className="list-decimal pl-5 space-y-1 text-muted-foreground print:text-black">
                <li>Stay calm. Real emergencies survive a 2-minute pause.</li>
                <li>Ask: "What's our family safe-word?"</li>
                <li>If they don't know it — hang up. It's a scam.</li>
                <li>Call the family member back on their normal number to check.</li>
                <li>Never wire money, send gift cards, or give bank info on the phone.</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="print:hidden">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">How to share it</h3>
            <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
              <li>Tell each family member in person or by phone — never by text or email.</li>
              <li>Make every adult memorize it. No writing it on phones.</li>
              <li>Change it once a year, or right away if it's ever shared by mistake.</li>
              <li>Teach grandchildren too — scammers target them just as often.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
