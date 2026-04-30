import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function MisinfoSpotting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spot Misinformation Online | TekSure" description="Don&apos;t fall for AI-generated photos + deepfakes. Plain-English checklist." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spot Misinformation</h1>
          <p className="text-lg text-muted-foreground">AI fakery is everywhere now.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AI photo signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hands — too many fingers, mangled, weird joints.</li>
              <li>Teeth — irregular, blurry, too many.</li>
              <li>Hair — strange flow, blends weird with skin.</li>
              <li>Background — text gibberish, shapes don&apos;t make sense.</li>
              <li>Eyes — different colors, asymmetric, dead-looking.</li>
              <li>Glasses — disappear into face.</li>
              <li>Jewelry — symmetric becomes random.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Deepfake video signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eye blinks unnatural / never blink.</li>
              <li>Mouth doesn&apos;t match audio perfectly.</li>
              <li>Skin has weird smoothness or sharpness.</li>
              <li>Hair edges blurry.</li>
              <li>Voice slightly robotic / off-cadence.</li>
              <li>Verify: does this person REALLY appear on real news?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common viral lies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Famous person died" — sometimes a hoax. Verify on AP.</li>
              <li>"Government announces" — check actual government site.</li>
              <li>"Doctor says X causes Y" — search original study.</li>
              <li>"Celebrity quote" — many are fabricated.</li>
              <li>Old photos repurposed for current events.</li>
              <li>Out-of-context videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"This makes me angry" check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strong emotion = likely manipulated content.</li>
              <li>Algorithms feed you outrage to keep you scrolling.</li>
              <li>Pause. Verify before sharing.</li>
              <li>Don&apos;t share angry posts within 5 min — wait.</li>
              <li>Often after research — story isn&apos;t what it seemed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tools that help</h3>
            <p className="text-sm text-muted-foreground"><strong>Google reverse image search</strong> — verify photos. <strong>NewsGuard browser extension</strong> — rates news sites. <strong>Snopes</strong> — searches viral claims. Use 30 sec to verify before sharing. Saves embarrassment + slows misinformation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
