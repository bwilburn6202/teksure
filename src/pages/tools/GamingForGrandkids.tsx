import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

export default function GamingForGrandkids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gaming with Grandkids — Plain-English Guide | TekSure" description="Play video games with your grandkids. Plain-English picks for senior-friendly games and how to connect online without the chaos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gaming with Grandkids</h1>
          <p className="text-lg text-muted-foreground">Best gift you can give: showing up.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best games for grandparents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Minecraft</strong> — build worlds together. Calm, creative, no shooting. $30 once.</li>
              <li><strong>Animal Crossing: New Horizons</strong> (Switch) — visit each other&apos;s islands. Sweet, no stress.</li>
              <li><strong>Mario Kart 8</strong> (Switch) — racing. Easy controls. 2-4 players.</li>
              <li><strong>Stardew Valley</strong> — farm + village life. Co-op online. Endless.</li>
              <li><strong>Lego games</strong> (Switch/PlayStation) — based on Star Wars, Marvel. Easy + funny.</li>
              <li><strong>Wii Sports / Nintendo Switch Sports</strong> — bowling, tennis. Active.</li>
              <li><strong>Words With Friends</strong> — like Scrabble. Asynchronous. Play over weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Games to AVOID first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fortnite</strong> — shooting + battle. Toxic chat. Save for older grandkids if at all.</li>
              <li><strong>Call of Duty</strong> — violent + adult-heavy.</li>
              <li><strong>Roblox</strong> — kid magnet, but predator concerns. Co-play if at all.</li>
              <li><strong>Anything with mics on with strangers</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best system for new gamers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nintendo Switch</strong> — $300. Most senior-friendly. Easy controls. Best family-game library. Battery life issues solved with Switch 2.</li>
              <li><strong>iPad</strong> — already have it? Apple Arcade ($7/mo) gives 200+ family games, no ads.</li>
              <li><strong>PlayStation 5 / Xbox</strong> — more powerful, more complex. Avoid unless grandkid is 12+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online play together (over distance)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Buy same game.</li>
              <li>Both add each other as "friend" in the system.</li>
              <li>Use Discord or Switch chat — voice talk while playing.</li>
              <li>Schedule a recurring "game night" — Wednesday 5 PM.</li>
              <li>30-45 min sessions are perfect.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you visit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Let them teach you. Kids love being the expert.</li>
              <li>Lose graciously. Or win — many kids respect it.</li>
              <li>Co-op games beat competitive games for bonding.</li>
              <li>"Show me your Minecraft world" — they&apos;ll talk for an hour.</li>
              <li>Take photos of the moments. Real connection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Gentle ON the eyes</h3>
            <p className="text-sm text-muted-foreground">If reading text in games is hard — most modern games have "high contrast" or "large font" accessibility settings. Switch and PS5 both have them. Don&apos;t suffer through tiny text. Look in Settings → Accessibility before playing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
