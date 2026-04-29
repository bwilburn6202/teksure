import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, AlertTriangle } from 'lucide-react';

const FLAGS = [
  'Met online — never in person, never on a real video call.',
  'Profile photos look professional or like a model. (Reverse-image search them — often stolen from a real stranger.)',
  'Falls for you fast — within days they\'re calling you "soulmate" and saying "I love you".',
  'Says they\'re overseas — military deployment, oil rig, doctor in war zone, traveling executive.',
  'Won\'t video chat. Always an excuse: bad signal, broken camera, security restrictions.',
  'Has an emergency that needs money. Family illness, customs fees, a stuck inheritance, a flight home.',
  'Asks for gift cards, wire transfers, crypto, or "help moving money" through your bank.',
  'Discourages you from telling family or friends.',
  'Promises to pay you back — or to come visit as soon as the money is sorted.',
];

export default function RomanceScamDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Romance Scam Defense — Recognize and Stop It | TekSure" description="Romance scams stole over $1 billion last year — mostly from older adults. Learn the playbook so it can't happen to you or someone you love." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Romance Scam Defense</h1>
          <p className="text-lg text-muted-foreground">If you\'ve never met them in person, the rules below matter.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">The hard truth</h2>
                <p className="text-sm">Americans over 60 lost over <strong>$1 billion</strong> to romance scams in 2024. The targets are not naive — they're often smart, kind, lonely, and recently widowed. The scammers are professional, and they study their target for weeks before asking for money.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚩 Red flags — every romance scam has them</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              {FLAGS.map((f, i) => <li key={i}>{f}</li>)}
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The hardest rule (and the most important)</h2>
            <p className="text-sm mb-2"><strong>Never send money to anyone you've only met online.</strong></p>
            <p className="text-sm">Not a small "loan". Not gift cards "to help out". Not "hold this transfer for me". Not "buy this crypto for us". Once it's gone, it's gone — and the next request will be bigger.</p>
            <p className="text-sm mt-2">Real partners don't ask people they've never met for money. Period.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to test if someone is real</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Reverse-image search their photos.</strong> On a computer, right-click their photo → "Search Google for image". If it shows up on stock photo sites, modeling agencies, or someone else's social media — you've got a scammer.</li>
              <li><strong>Insist on a live video call.</strong> Not a recorded video. Not a photo. A live call where you can ask them to wave, or hold up today's newspaper. Scammers refuse — every time.</li>
              <li><strong>Look up their name + city.</strong> Real people have a footprint — LinkedIn, news, an old yearbook. Scammers using stolen identities have nothing.</li>
              <li><strong>Tell a trusted family member.</strong> Show your son or daughter the messages. Listen to them.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you\'ve already sent money</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Stop. Send no more — even if they "promise the rest will fix everything".</li>
              <li>Save every message and every receipt. You'll need them.</li>
              <li>Call your bank — they may be able to reverse a wire if it just left.</li>
              <li>Report to <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">reportfraud.ftc.gov</a> and the FBI at <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">ic3.gov</a>.</li>
              <li>Tell a family member. Don't carry this alone.</li>
              <li>If you're feeling overwhelmed — call AARP's Fraud Helpline at <strong>1-877-908-3360</strong>. They listen, no judgment.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For family — having "the conversation"</h2>
            <p className="text-sm mb-2">If a parent or relative seems caught up in something:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Don't shame or yell — they're already embarrassed.</li>
              <li>Show them the FBI and FTC pages on romance scams. They use the same exact playbook every time.</li>
              <li>Ask to do a video call WITH them, on speaker, with the "partner". (Will not happen.)</li>
              <li>Help them search the photos with reverse-image search.</li>
              <li>Be patient. It's like an emotional withdrawal — takes weeks, not minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to find real connection</h3>
            <p className="text-sm text-muted-foreground">Local senior centers, libraries, hiking clubs, church groups, volunteer organizations. AARP Connect2Affect helps with loneliness directly. Real connections take time — but no real one ever asks you for money.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
