import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';

export default function TranslationAppCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Translation App Coach — Talk Across Languages | TekSure" description="Free translation apps that work on your phone. Speak English, get Spanish in real time — for travel, doctor visits, or chatting with neighbors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Translation App Coach</h1>
          <p className="text-lg text-muted-foreground">Speak any language. Free. Built into your phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 iPhone — Translate app (free, built in)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the <strong>Translate</strong> app (white with a globe). If you don't see it, search the App Store for "Translate" — it's free from Apple.</li>
              <li>Tap the languages at the top — pick English on the left and Spanish (or whatever) on the right.</li>
              <li>Tap the <strong>Conversation</strong> tab at the bottom for two-way chats.</li>
              <li>Tap the microphone and speak. Translation appears AND speaks aloud.</li>
              <li>Hand the phone to the other person — they tap the mic and speak. Translation comes back.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Tip:</strong> Tap "Auto Detect" so the app figures out who's speaking which language. Easier than tapping every time.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Android — Google Translate (free)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Google Translate</strong> from the Play Store (often pre-installed).</li>
              <li>Pick the two languages at the top.</li>
              <li>Tap <strong>Conversation</strong> for two-way mode.</li>
              <li>Tap either language's mic — speak — translation shows and reads aloud.</li>
              <li>Use <strong>Camera</strong> mode to point at a menu or sign — it overlays the English translation right on screen.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🌍 Use cases that actually help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Reading menus on vacation</strong> — point camera at the menu. Done.</li>
              <li><strong>Talking to a non-English-speaking neighbor</strong> — open Conversation mode. Hand the phone back and forth.</li>
              <li><strong>Doctor's office paperwork</strong> — point camera at a Spanish form. Read in English.</li>
              <li><strong>Watching foreign-language calls with grandkids</strong> — set translate on speakerphone. Awkward, but works.</li>
              <li><strong>Stuck driver / lost</strong> — show your phone screen with the question typed out.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before you travel</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the translate app at home (with Wi-Fi).</li>
              <li>Tap the language list. Look for a download arrow next to your destination's language.</li>
              <li>Download it. Now translation works <strong>without internet</strong> — important when roaming charges are sky-high.</li>
              <li>Test it offline before you fly: turn on Airplane mode, try a translation. Make sure it works.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">A small caution</h3>
            <p className="text-sm text-muted-foreground">Translation apps are great for everyday talk, menus, and signs. They're NOT reliable for legal documents, contracts, or medical instructions where one wrong word matters. For those, ask for a real human translator.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
