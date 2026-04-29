import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fish } from 'lucide-react';

export default function AquariumStarterSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aquarium Starter for Seniors | TekSure" description="Easy aquarium for seniors. Plain-English starter guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fish className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Aquarium for Seniors</h1>
          <p className="text-lg text-muted-foreground">Calming. Lower BP. Watch fish swim.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lowers blood pressure.</li>
              <li>Reduces anxiety.</li>
              <li>Calms dementia patients.</li>
              <li>Conversation starter.</li>
              <li>Brain stimulation.</li>
              <li>Lower-effort pet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best starter: 10-20 gallon</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smaller = harder (water unstable).</li>
              <li>Larger = forgiving + stable.</li>
              <li>20 gallon kit ($100) — ideal.</li>
              <li>Stand or sturdy table.</li>
              <li>Near outlet, not direct sun.</li>
              <li>Heater + filter included.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy beginner fish</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Betta</strong> — alone, beautiful.</li>
              <li><strong>Goldfish</strong> — classic but messy.</li>
              <li><strong>Tetras</strong> — schools, peaceful.</li>
              <li><strong>Mollies</strong> — hardy, colorful.</li>
              <li><strong>Corydoras catfish</strong> — bottom cleaners.</li>
              <li>Avoid: cichlids, saltwater first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tank, filter, heater.</li>
              <li>Gravel + decorations.</li>
              <li>Water conditioner.</li>
              <li>Fill with water — let cycle 1 week.</li>
              <li>Add fish 2-3 at a time.</li>
              <li>Don&apos;t add all at once = sick fish.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weekly care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Feed daily — small amount.</li>
              <li>20% water change weekly.</li>
              <li>Clean glass.</li>
              <li>Test water (kit $20).</li>
              <li>Watch fish behavior.</li>
              <li>15 minutes/week total.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comforts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto-feeder for trips ($30).</li>
              <li>LED lights — long-lasting.</li>
              <li>App-controlled tanks (Fluval).</li>
              <li>No cleaning if you have a kid help.</li>
              <li>Lighter than dog/cat care.</li>
              <li>Travel-friendly hobby.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground">YouTube — Aquariumcoop, Cory&apos;s Fish Tank. Free + endless. Local fish stores often help with troubleshooting. Petco / PetSmart — basics. Reddit r/Aquariums — community help. Library — fish books. Care less than dog or cat — perfect for seniors traveling part-time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
