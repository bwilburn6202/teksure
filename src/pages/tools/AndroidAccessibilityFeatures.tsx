import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function AndroidAccessibilityFeatures() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Accessibility Features for Seniors | TekSure" description="Built-in Android accessibility — TalkBack, magnification, large text, sound amplifier." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Accessibility</h1>
          <p className="text-lg text-muted-foreground">Make your Android phone easier to use.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Magnification (zoom)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Magnification.</li>
              <li>Triple-tap any screen to zoom.</li>
              <li>Or use accessibility button.</li>
              <li>Pan around magnified screen with fingers.</li>
              <li>Triple-tap again to return to normal.</li>
              <li>Perfect for tiny text.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Large display + text</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display → Display size + Font size.</li>
              <li>Two sliders — make text bigger AND interface bigger.</li>
              <li>Bold text option for clarity.</li>
              <li>High contrast mode.</li>
              <li>Color correction for color-blindness.</li>
              <li>Available on most Android phones.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sound Amplifier</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Google app for hearing assistance.</li>
              <li>Use phone + earbuds as hearing aid.</li>
              <li>Filter background noise.</li>
              <li>Boost speech frequencies.</li>
              <li>Adjust per ear.</li>
              <li>Cheaper than hearing aids for mild loss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Live Transcribe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Google app — real-time captions.</li>
              <li>Captions any conversation around you.</li>
              <li>Multiple language support.</li>
              <li>Save transcripts.</li>
              <li>Especially helpful for hearing loss.</li>
              <li>On Pixel + many other Android phones.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice Access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Control entire phone by voice.</li>
              <li>Free Google accessibility app.</li>
              <li>Say &quot;Open Email&quot; or &quot;Tap John.&quot;</li>
              <li>Number labels on every button.</li>
              <li>Helpful for limited dexterity.</li>
              <li>Settings → Accessibility → Installed Services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TalkBack screen reader</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>For severe vision impairment.</li>
              <li>Reads everything on screen.</li>
              <li>Different gestures to control phone.</li>
              <li>Settings → Accessibility → TalkBack.</li>
              <li>Tutorial included.</li>
              <li>Don&apos;t enable accidentally — different gestures!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try Sound Amplifier first</h3>
            <p className="text-sm text-muted-foreground">If you have any hearing loss but aren&apos;t ready for hearing aids, try Google Sound Amplifier free. Plug in earbuds, open the app, and your phone becomes a real-time hearing aid. Customize for your ear&apos;s specific needs. Many seniors with mild loss use this for restaurants and family gatherings — free and surprisingly effective.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
