import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dot } from 'lucide-react';

export default function BrailleDisplays() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Refreshable Braille Displays | TekSure" description="Connect a braille display to iPhone, iPad, or Mac. Plain-English picks for refreshable braille devices, free training, and where to find help." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Refreshable Braille Displays</h1>
          <p className="text-lg text-muted-foreground">Read your phone in braille.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">A braille display is a small device with raised pins that pop up to form braille. Pairs with iPhone, iPad, Mac, or PC over Bluetooth. Read texts, emails, web pages — anything on the screen — in braille.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top picks (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Orbit Reader 20+</strong> — $700. 20-cell entry-level. Good for new users.</li>
              <li><strong>HumanWare Brailliant BI 20X / 40X</strong> — $2,000-3,500. Standard in schools.</li>
              <li><strong>Mantis Q40</strong> ($2,500) — combines QWERTY keyboard + 40-cell braille.</li>
              <li><strong>Focus 14 Blue (Vispero)</strong> ($1,500) — portable, popular with travelers.</li>
              <li><strong>Monarch (APH)</strong> — multi-line tactile graphics device, new-generation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Funding sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>State vocational rehab</strong> — pays full cost for working-age adults heading back to work.</li>
              <li><strong>Schools (IEP)</strong> — district provides for students.</li>
              <li><strong>VA</strong> — fully covers for vision-impaired veterans.</li>
              <li><strong>Lions Club, civic organizations</strong> — often pay for one device.</li>
              <li><strong>Medicare</strong> — does NOT cover (lobbying ongoing).</li>
              <li><strong>National Federation of the Blind</strong> — Tenacity equipment program.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pair with iPhone (FREE)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → VoiceOver (must be ON).</li>
              <li>Tap Braille → Braille Displays.</li>
              <li>Turn ON your braille display, put in pairing mode.</li>
              <li>iPhone discovers it. Tap to pair.</li>
              <li>Type braille shorthand into iPhone or read screen.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free braille resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bookshare</strong> — 1.2M ebooks free for print-disabled readers.</li>
              <li><strong>BARD (Library of Congress)</strong> — free audiobooks + braille books.</li>
              <li><strong>Hadley Institute</strong> — free braille classes for adults losing vision.</li>
              <li><strong>National Federation of the Blind training</strong>.</li>
              <li><strong>NLS Braille and Talking Book Library</strong> — federal free service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Late-life vision loss?</h3>
            <p className="text-sm text-muted-foreground">It&apos;s never too late to learn braille. Hadley Institute has free correspondence and online classes specifically for adults who lose vision later in life. Most adults learn enough basic braille for labels (medications, food cans) within 3-6 months. Audio + braille combined is most powerful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
