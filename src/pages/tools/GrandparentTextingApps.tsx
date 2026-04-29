import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function GrandparentTextingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Texting Apps for Grandparents | TekSure" description="GIFs, voice messages, photos. Plain-English picks for texting apps that connect grandparents and grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Texting Apps for Grandparents</h1>
          <p className="text-lg text-muted-foreground">Stay connected without being awkward.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best texting apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iMessage</strong> (iPhone) — already there. Tap microphone for voice messages.</li>
              <li><strong>WhatsApp</strong> — 2.5B users. Voice + video calls + photos. Free worldwide.</li>
              <li><strong>Facebook Messenger</strong> — if grandkids on Facebook.</li>
              <li><strong>Marco Polo</strong> — video voicemails. Gentler than live video calls.</li>
              <li><strong>Google Duo / Meet</strong> — for Android families.</li>
              <li><strong>SimplyConnect / GrandPad</strong> — simplified for non-tech seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Keep messages light + frequent</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo of the cat / your garden / today&apos;s sunset.</li>
              <li>Question: "What show are you watching now?"</li>
              <li>"Thinking of you. No need to reply."</li>
              <li>Send funny meme or article you saw.</li>
              <li>Voice message — 30 seconds, sounds personal.</li>
              <li>Don&apos;t expect immediate reply — kids/teens read on their schedule.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Texting tricks to learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GIFs</strong> — Tap GIF button on keyboard. Search "happy birthday" — animated cards instant.</li>
              <li><strong>Emoji</strong> — Press 🌐 globe icon → tap emoji.</li>
              <li><strong>Voice message</strong> — Hold microphone icon. Speak. Release sends.</li>
              <li><strong>Photo + sketch</strong> — iPhone Markup pencil. Add hearts to grandkid photos.</li>
              <li><strong>Reply to specific message</strong> — long-press message → Reply.</li>
              <li><strong>Tapback</strong> — long-press, tap heart/thumbs (faster than typing "love it!").</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t feel pressure</h3>
            <p className="text-sm text-muted-foreground">Teens text differently — short, ALL CAPS or all lowercase, abbreviations. Don&apos;t force their style. Be yourself. Grandkids treasure messages from grandma even if they don&apos;t reply right away.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
