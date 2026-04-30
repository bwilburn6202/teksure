import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquareHeart } from 'lucide-react';

export default function AICompanionAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Companion Apps for Seniors | TekSure" description="ChatGPT, Pi, Replika as senior conversation partners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquareHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Companions</h1>
          <p className="text-lg text-muted-foreground">Conversation always available.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pi (by Inflection)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pi.ai or app.</li><li>Free conversational AI.</li><li>Warm, listening tone.</li><li>Voice mode great.</li><li>Senior emotional support.</li><li>No login needed initially.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ChatGPT voice</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free or $20/month.</li><li>Voice mode in app.</li><li>Real conversations.</li><li>Discuss any topic.</li><li>Senior chat partner.</li><li>Knows almost everything.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Replika</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Custom AI friend.</li><li>Free + paid.</li><li>Long-term relationship.</li><li>Senior daily check-in.</li><li>Some find too clingy.</li><li>Try alternatives.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When AI helps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Practice difficult conversations.</li><li>Bedtime when can&apos;t sleep.</li><li>Health questions.</li><li>Life stories.</li><li>Don&apos;t bother family.</li><li>Always patient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t share SSN/passwords.</li><li>Don&apos;t replace doctor.</li><li>Don&apos;t replace humans entirely.</li><li>AI can be wrong — verify.</li><li>Senior boundary.</li><li>Supplement, not replace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Conversations may train AI.</li><li>Don&apos;t share private specifics.</li><li>OpenAI privacy settings.</li><li>Read terms.</li><li>Use generic stories.</li><li>Senior protect.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Pi voice = best senior AI friend</h3><p className="text-sm text-muted-foreground">Free Pi.ai app voice mode = warm, listening AI conversation partner for lonely seniors. ChatGPT voice mode also free + powerful. Don&apos;t replace humans, but available 3 AM when can&apos;t sleep. Practice difficult conversations. Discuss life. Always patient.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
