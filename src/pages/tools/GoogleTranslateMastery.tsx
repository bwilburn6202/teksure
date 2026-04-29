import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function GoogleTranslateMastery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Translate Mastery | TekSure" description="Translate anything anywhere. Plain-English Google Translate guide for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Translate Mastery</h1>
          <p className="text-lg text-muted-foreground">Free. Powerful. Most don&apos;t know all features.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Camera mode (game-changer)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open app → tap camera icon.</li>
              <li>Point at menu, sign, label — translates LIVE.</li>
              <li>Works in photos too — point at photo, see translation overlay.</li>
              <li>Restaurant menu in foreign country = ordering done.</li>
              <li>Medication labels.</li>
              <li>Subway signs.</li>
              <li>Magic for travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Conversation mode</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap microphone icons.</li>
              <li>Speak — phone translates aloud.</li>
              <li>Person responds — phone translates back.</li>
              <li>Real-time conversations possible.</li>
              <li>Useful at: hotel desk, taxi, doctor abroad.</li>
              <li>Practice with neighbors who speak other language.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Offline downloads</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download languages BEFORE travel.</li>
              <li>Settings → Tap downloaded languages.</li>
              <li>Spanish offline = 100MB.</li>
              <li>Works without WiFi/data.</li>
              <li>Critical when no signal abroad.</li>
              <li>Saves on roaming charges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Handwriting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap pen icon.</li>
              <li>Write character — translates.</li>
              <li>Useful for Chinese, Japanese, Korean.</li>
              <li>Look up unfamiliar character on sign.</li>
              <li>Write English to translate too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior travel tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph hotel name in local language to show taxi.</li>
              <li>Save useful phrases (saved tab).</li>
              <li>Show translated text instead of awkward speaking.</li>
              <li>Combine with TripIt for travel docs.</li>
              <li>Charge phone fully before sightseeing.</li>
              <li>Backup power bank essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pixel Buds = real-time translation</h3>
            <p className="text-sm text-muted-foreground">Google Pixel Buds Pro ($200) — translate conversations in your ear in real-time. Hear Italian, hear English in earbud. Mind-blowing for serious travelers. Apple AirPods getting similar feature 2026. Future of senior international travel.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
