import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

const PICKS = [
  { name: 'Amazon Echo Show 8 / 10', price: '$130-180', best: 'Most senior-friendly. Photo frame mode shows family pics. Drop In and call grandkids hands-free. Big screen.', good: 'Echo Show 10 rotates to follow you in video calls.' },
  { name: 'Echo Show 5', price: '$85', best: 'Smaller, bedside. Makes a great alarm clock + photo frame.', good: 'Cheapest tap-and-go option.' },
  { name: 'Google Nest Hub (2nd gen)', price: '$100-180', best: 'For Google Photos users. Sleep tracking optional.', good: 'Pairs with iPhone or Android.' },
  { name: 'Apple HomePod', price: '$99-300', best: 'Best for Apple users. Voice control of HomeKit. NOT a photo frame.', good: 'Skip if photos are the goal.' },
];

export default function SmartDisplayForGrandparents() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Display for Grandparents — Echo Show, Nest Hub | TekSure" description="Best gift for grandparents — a smart display shows family photos, makes hands-free video calls, plays music, and shows the weather. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Display for Grandparents</h1>
          <p className="text-lg text-muted-foreground">Best gift for grandparents who live far from family.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why these are perfect for seniors</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Always-on photo frame of family photos.</li>
              <li>Voice-controlled — "Show me the weather", "Call my daughter", "Play classical music".</li>
              <li>Video calls answered automatically with "Drop In" — like a doorbell that opens.</li>
              <li>Big buttons for those who don\'t want to fumble with a phone.</li>
              <li>Plays the news, audiobooks, podcasts — hands-free.</li>
              <li>Reminds them about meds and appointments.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup as a gift (best practices)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>BEFORE wrapping — set it up at YOUR home with their Wi-Fi password.</li>
              <li>Add their Amazon (or Google) account.</li>
              <li>Pre-load family photos: open the Photos section in the Alexa or Google Home app, link the family Amazon Photos / Google Photos account.</li>
              <li>Pre-add 5-10 contacts (you, spouse, grandkids, doctor, pharmacy).</li>
              <li>Test "Alexa, drop in on Mom" — confirm it opens auto-call.</li>
              <li>Print a 1-page cheat sheet of voice commands. Tape near the device.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Useful voice commands</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"Alexa, show me family photos."</li>
              <li>"Alexa, drop in on John."</li>
              <li>"Alexa, video call Sarah."</li>
              <li>"Alexa, play classical music."</li>
              <li>"Alexa, what\'s the weather tomorrow?"</li>
              <li>"Alexa, set a 10 minute timer."</li>
              <li>"Alexa, remind me to take my heart pill at 8 PM."</li>
              <li>"Alexa, read the news headlines."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy concern?</h3>
            <p className="text-sm text-muted-foreground">Echo and Nest devices listen for the wake word ("Alexa", "Hey Google"). They don\'t record full conversations. There\'s a microphone-off button if it ever bothers them. Some seniors put it in the kitchen, away from the bedroom.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
