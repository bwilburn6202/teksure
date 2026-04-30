import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smile } from 'lucide-react';

export default function EmojiAndGifsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emoji + GIFs for Senior Texters | TekSure" description="Use emoji and GIFs in texts. Senior guide to fun messaging." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smile className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emoji + GIFs</h1>
          <p className="text-lg text-muted-foreground">Add fun to texts.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What are emojis</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tiny pictures in text.</li><li>Show emotion.</li><li>Heart, smile, thumbs up.</li><li>3,000+ available.</li><li>Free + built-in.</li><li>Universal language.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Add emoji</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap smile face on keyboard.</li><li>Or globe icon.</li><li>Browse categories.</li><li>Tap to add.</li><li>Recent emojis remembered.</li><li>Easy to find.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Common meanings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heart = love.</li><li>Thumbs up = ok/yes.</li><li>Crying laugh = funny.</li><li>Praying hands = thanks/hope.</li><li>Pink heart = grandkids.</li><li>Don&apos;t overthink.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">GIFs (animated)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mini videos that loop.</li><li>Tap GIF button on keyboard.</li><li>Search funny moments.</li><li>Tap to send.</li><li>Grandkids love them.</li><li>Adds humor.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reactions (iPhone)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-press a message.</li><li>Tap heart, thumbs, etc.</li><li>Reaction shows beside.</li><li>Quick reply.</li><li>No need for words.</li><li>Senior-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid mistakes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Eggplant has slang meaning.</li><li>Skull = laughing now.</li><li>Just smile + heart safe.</li><li>Ask grandkid if unsure.</li><li>Most are obvious.</li><li>Have fun.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Emojis = warm senior texts</h3><p className="text-sm text-muted-foreground">Adding heart or smiley to text instantly warmer. Grandkids appreciate effort. Don&apos;t need to use slang ones — heart, smile, flowers always safe. GIFs for special occasions. Your texts go from boring to lively. Fun part of senior tech.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
