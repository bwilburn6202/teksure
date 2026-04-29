import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SingingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Singing for Seniors | TekSure" description="Singing improves life. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Singing for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free. Improves health. Connects.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strengthens diaphragm + lungs.</li>
              <li>Studies — singing reduces depression 50%.</li>
              <li>Releases endorphins.</li>
              <li>Improves posture.</li>
              <li>Better breathing for asthma / COPD.</li>
              <li>Lowers blood pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to sing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Choirs</strong> — church / community.</li>
              <li><strong>Sweet Adelines</strong> — women&apos;s harmony.</li>
              <li><strong>Barbershop quartets</strong> — men&apos;s.</li>
              <li><strong>Senior centers</strong> — group singing.</li>
              <li><strong>Karaoke nights</strong> — local bars.</li>
              <li><strong>Home</strong> — sing while cooking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice health basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drink water — hydrate vocal cords.</li>
              <li>Warm up gently.</li>
              <li>Don&apos;t strain — voice cracks = stop.</li>
              <li>Avoid yelling.</li>
              <li>Steam shower clears voice.</li>
              <li>Honey + tea soothes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Karaoke apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smule</strong> — sing with others remotely.</li>
              <li><strong>Singa</strong> — millions of songs.</li>
              <li><strong>YouTube karaoke</strong> — endless free.</li>
              <li><strong>Kala app</strong> — voice training.</li>
              <li>Free or low-cost subscription.</li>
              <li>Practice in private.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice lessons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local teacher $40-80.</li>
              <li>Online — Yousician, Singing Carrots.</li>
              <li>YouTube — Cheryl Porter, Eric Arceneaux.</li>
              <li>Group classes cheaper.</li>
              <li>Senior centers often free.</li>
              <li>Library — singing books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Singing for dementia</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music + lyrics last memories preserved.</li>
              <li>Singing brings back memories.</li>
              <li>Stimulates brain regions music + speech.</li>
              <li>Care facilities use therapeutically.</li>
              <li>Familiar songs — best.</li>
              <li>Family member sings together.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No talent required</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve been told &quot;you can&apos;t sing&quot; — disregard. Most amateur choirs welcome anyone. Group singing means you can hide. Voice improves with practice. Brain + body benefits regardless. Sing in shower. Sing while driving. Free, instantly accessible. The most under-used senior wellness tool.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
