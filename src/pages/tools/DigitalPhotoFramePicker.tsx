import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

const PICKS = [
  { name: 'Aura Carver', price: '$179', best: 'Best overall. Most senior-friendly. Family sends photos from their phone — they appear on grandma\'s frame.', good: 'No subscription. Works with iPhone and Android.' },
  { name: 'Aura Walden / Mason', price: '$129-249', best: 'Different sizes and styles. Same easy "anyone can send photos" model.', good: 'Long-term reliability and customer service.' },
  { name: 'Skylight Frame', price: '$159-299 + optional $40/year', best: 'Touch-screen interface. Family can email photos directly to a unique frame email address.', good: 'Subscription unlocks longer videos and a calendar feature, but base frame is fully usable for free.' },
  { name: 'Nixplay', price: '$130-260, free + paid plans', best: 'Most flexible — supports playlists, scheduled photos, web display.', good: 'Free Cloud account for basic use.' },
  { name: 'Pix-Star', price: '$200', best: 'Old reliable. Strong for the less tech-savvy.', good: 'No subscription, ever.' },
];

export default function DigitalPhotoFramePicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Photo Frame Picker — Aura, Skylight, Nixplay | TekSure" description="The best gift for grandparents. Family sends photos from any phone; they appear on grandma\'s frame. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Photo Frame Picker</h1>
          <p className="text-lg text-muted-foreground">Best gift for grandparents who live far from grandkids.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">How they work</h2>
            <p className="text-sm">A digital photo frame sits on a shelf or table, plugged into a wall outlet, connected to home Wi-Fi. Family members install a free app on their phones; when they take a photo, it can appear on the frame within seconds. No SD cards, no transferring files.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1"><strong>Best:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>10-12" screen</strong> is the sweet spot. Bigger gets unwieldy.</li>
              <li><strong>Anti-glare matte screen</strong> — better viewing in bright rooms.</li>
              <li><strong>Auto-orient</strong> — phone photos shot vertically vs horizontal both look good.</li>
              <li><strong>Wi-Fi (not Bluetooth-only)</strong> — Wi-Fi means relatives anywhere can send photos. Bluetooth only works in the same room.</li>
              <li><strong>App with simple sharing</strong> — both iPhone AND Android friends should be able to send photos easily.</li>
              <li><strong>No subscription required for basics</strong> — Aura is best for this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips for gift-givers</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>BEFORE wrapping it as a gift, set it up at YOUR home with the recipient\'s home Wi-Fi name and password. Pre-load 20-30 photos.</li>
              <li>Get the rest of the family to install the app and add their email/phone before you give it.</li>
              <li>Wrap it. When grandma plugs it in, the slideshow starts immediately — no setup hassle.</li>
              <li>Send a NEW photo every few days for the first month. That\'s the magic.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cheaper alternative — a tablet</h3>
            <p className="text-sm text-muted-foreground">A $90 Amazon Fire 8 tablet running the free Amazon Photos app does the same thing — picks up new photos from family\'s phones automatically. Less polished but a third the price.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
