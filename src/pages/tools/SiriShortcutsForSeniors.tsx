import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wand } from 'lucide-react';

export default function SiriShortcutsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Siri Shortcuts for Seniors | TekSure" description="One-tap automations. Siri Shortcuts simplify senior iPhone use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Siri Shortcuts</h1>
          <p className="text-lg text-muted-foreground">One tap = many actions.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What they are</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pre-built automations.</li><li>One tap or voice command.</li><li>Multiple actions chained.</li><li>Free Shortcuts app.</li><li>Built into iPhone.</li><li>Senior simplifier.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior examples</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;I&apos;m home&quot; — texts spouse.</li><li>Dad on speed dial — large button.</li><li>Battery low → low power mode.</li><li>Bedtime — silence + alarm.</li><li>Read article — text-to-speech.</li><li>Magnifier on lock screen.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Gallery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Shortcuts app.</li><li>Tap Gallery.</li><li>Browse pre-made.</li><li>One-tap install.</li><li>Customize easily.</li><li>Senior easy starts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Home screen widget</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add to home.</li><li>Big button = action.</li><li>Senior big-button workflow.</li><li>&quot;Call daughter&quot; widget.</li><li>One tap.</li><li>No menus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice commands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add custom phrase.</li><li>&quot;Hey Siri, I&apos;m leaving home.&quot;</li><li>Runs your shortcut.</li><li>Senior hands-free.</li><li>Familiar phrases.</li><li>Powerful.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kids set up.</li><li>Senior uses simple buttons.</li><li>Customize for needs.</li><li>Reduce phone complexity.</li><li>Empowers seniors.</li><li>Free + invisible setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family-set shortcuts = senior power</h3><p className="text-sm text-muted-foreground">Adult children can set up Siri Shortcuts for senior parents. &quot;Call son&quot; widget on home screen — one tap. &quot;Magnify text&quot; widget — one tap to read pill bottle. Custom for each senior. Most under-used iPhone feature for senior accessibility. Free + powerful.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
