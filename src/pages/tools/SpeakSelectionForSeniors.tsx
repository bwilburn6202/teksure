import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume } from 'lucide-react';

export default function SpeakSelectionForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Speak Selection for Seniors | TekSure" description="iPhone reads any text aloud. Senior accessibility feature." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Speak Selection</h1>
          <p className="text-lg text-muted-foreground">iPhone reads any text.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>Spoken Content.</li><li>Speak Selection ON.</li><li>Speak Screen ON.</li><li>Senior-friendly.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Highlight text.</li><li>Tap &quot;Speak.&quot;</li><li>Or 2-finger swipe down for whole screen.</li><li>iPhone reads.</li><li>Senior eyes rest.</li><li>Adjust speed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long articles.</li><li>Pill bottle small print.</li><li>Recipe instructions.</li><li>Email content.</li><li>Senior eye relief.</li><li>Free + always available.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Multiple voices.</li><li>Adjust pitch.</li><li>Senior personalize.</li><li>Different accents.</li><li>Premium voices free.</li><li>Customize.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs VoiceOver</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Speak Selection — easier.</li><li>VoiceOver — full screen reader.</li><li>Senior gentle option.</li><li>Try Spoken Content first.</li><li>Worth setting up.</li><li>5-min setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reader mode</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Safari Reader Mode.</li><li>Plus Speak Screen.</li><li>Listen to clean article.</li><li>Senior multi-task.</li><li>Cooking + listen.</li><li>Free combo.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Speak Selection = senior eye relief</h3><p className="text-sm text-muted-foreground">Free iPhone Speak Selection — highlight any text, tap Speak, listen. Pill bottle, recipe, article. Senior eye relief. 2-finger swipe down reads whole screen. Customize voice + speed. Most under-used senior accessibility feature. Free always.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
