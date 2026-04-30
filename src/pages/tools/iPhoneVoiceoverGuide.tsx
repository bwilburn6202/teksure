import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function iPhoneVoiceoverGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone VoiceOver Guide for Seniors | TekSure" description="Use VoiceOver if vision is failing. Built-in iPhone screen reader." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VoiceOver Guide</h1>
          <p className="text-lg text-muted-foreground">iPhone reads screen aloud.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Turn on</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>VoiceOver → On.</li><li>Or — &quot;Hey Siri, turn on VoiceOver.&quot;</li><li>Triple-press side button shortcut.</li><li>Practice mode included.</li><li>Free + built in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Different gestures</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap to hear element.</li><li>Double-tap to activate.</li><li>3-finger swipe to scroll.</li><li>Different from normal use.</li><li>Takes practice.</li><li>Tutorial included.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spoken Content — easier.</li><li>Settings → Accessibility → Spoken Content.</li><li>Reads selected text only.</li><li>No gesture changes.</li><li>Better senior intro.</li><li>Use first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Macular degeneration.</li><li>Cataracts before surgery.</li><li>Tired eyes at end of day.</li><li>Reading long emails.</li><li>News articles.</li><li>Reduces eye strain.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Speak Selection</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Highlight any text.</li><li>Tap Speak option.</li><li>iPhone reads aloud.</li><li>Easier than VoiceOver.</li><li>Use anywhere.</li><li>Adjustable speed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Get help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Accessibility helpline.</li><li>1-877-204-3930.</li><li>Free senior support.</li><li>Apple Store sessions.</li><li>YouTube Apple Support.</li><li>Practice with patient family.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Spoken Content easier than VoiceOver</h3><p className="text-sm text-muted-foreground">For most senior vision needs, &quot;Spoken Content&quot; is easier than full VoiceOver. Highlight text, hear it read. No gesture relearning. VoiceOver for full blindness — call Apple Accessibility helpline 1-877-204-3930 for free training. Don&apos;t suffer with eye strain.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
