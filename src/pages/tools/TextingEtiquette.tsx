import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function TextingEtiquette() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Texting Etiquette for Seniors | TekSure" description="Don&apos;t embarrass yourself + grandkids. Plain-English texting do&apos;s + don&apos;ts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Texting Etiquette</h1>
          <p className="text-lg text-muted-foreground">Quick + clear + warm.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior texting mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ALL CAPS</strong> — sounds like yelling.</li>
              <li><strong>Period at end</strong> — younger people read as cold/angry.</li>
              <li><strong>Multiple texts in a row</strong> — pings repeatedly.</li>
              <li><strong>Sending screenshots without context</strong>.</li>
              <li><strong>Using "..."</strong> — younger people read as ominous.</li>
              <li><strong>Forwarding chain mail</strong> — never. Don&apos;t.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better practices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One thought per text.</li>
              <li>Skip the period for casual texts.</li>
              <li>Heart emoji + thumbs up = friendly.</li>
              <li>"Tapback" reactions instead of "OK" reply.</li>
              <li>Voice message for emotional things.</li>
              <li>Don&apos;t expect immediate reply — kids text on their schedule.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call instead</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Long stories.</li>
              <li>Emotional topics.</li>
              <li>Time-sensitive medical/safety.</li>
              <li>Anything with potential miscommunication.</li>
              <li>Birthday wishes — call beats text.</li>
              <li>Bad news — never text.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Slang decoder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"lol" = laughing (often just acknowledging).</li>
              <li>"omg" = oh my goodness.</li>
              <li>"tbh" = to be honest.</li>
              <li>"idk" = I don&apos;t know.</li>
              <li>"np" = no problem.</li>
              <li>"ttyl" = talk to you later.</li>
              <li>"k" alone = often dismissive. "ok" warmer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Be yourself</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t force teen-speak. Grandparents text formally — that&apos;s charming, not wrong. Just keep messages short + don&apos;t spam. Kids treasure thoughtful texts.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
