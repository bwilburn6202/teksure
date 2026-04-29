import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlockSpamCallsTexts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Block Spam Calls & Junk Texts — Step by Step | TekSure" description="Tired of robocalls and spam texts? Plain-English steps to block them on your phone, with your carrier, and on the federal Do Not Call list." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Block Spam Calls & Texts</h1>
          <p className="text-lg text-muted-foreground">Three layers of defense. Use all three.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Layer 1 — Block on the phone itself</h2>
            <h3 className="font-semibold mt-3 mb-2">📱 iPhone</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
              <li><strong>Block one number:</strong> Open the call or text → tap the number/name at top → scroll down → "Block this Caller".</li>
              <li><strong>Silence unknown callers:</strong> Settings → Phone → Silence Unknown Callers → ON. Real callers leave voicemail; spam goes straight to voicemail without ringing.</li>
              <li><strong>Filter spam texts:</strong> Settings → Messages → Unknown & Spam → "Filter Unknown Senders" ON.</li>
            </ul>
            <h3 className="font-semibold mt-3 mb-2">🤖 Android</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Block a number:</strong> Open the call log → press and hold the number → "Block / report spam".</li>
              <li><strong>Auto-screen calls (Pixel):</strong> Phone app → Settings → Spam and Call Screen → "See caller and reason for calling" — Google Assistant answers and types out what they say. You decide whether to pick up.</li>
              <li><strong>Block unknown callers (Samsung):</strong> Phone app → menu → Settings → Block numbers → turn on "Block calls from unknown numbers".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Layer 2 — Use your carrier's free spam filter</h2>
            <p className="text-sm mb-3">All three big carriers have free apps that block known robocallers BEFORE the phone rings.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Verizon — Call Filter</strong> (free version): pre-installed on most Verizon phones. Open it, turn on Spam Detection.</li>
              <li><strong>AT&T — ActiveArmor</strong>: free app from the App Store / Play Store. Sign in with your AT&T phone number.</li>
              <li><strong>T-Mobile — Scam Shield</strong>: free app. Inside the app, dial #662# from your phone to enable Scam Block.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Layer 3 — National Do Not Call Registry</h2>
            <p className="text-sm mb-3">Free, lifetime, federal. Doesn't stop scammers (they break the law anyway), but stops most legitimate telemarketers.</p>
            <Button asChild variant="outline" className="w-full"><a href="https://www.donotcall.gov" target="_blank" rel="noopener noreferrer">Add your number — donotcall.gov <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
            <p className="text-sm mt-3">After signing up, telemarketers must stop within 31 days. Report violators on the same site.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reporting spam texts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Forward the text to <strong>7726</strong> (spells SPAM). Free, all carriers. Your carrier blocks the sender across their network.</li>
              <li>Then delete the text and block the number.</li>
              <li>Don't reply with "STOP" to numbers you don't recognize — it confirms your number is real.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The trick scammers don't want you to know</h3>
            <p className="text-sm text-muted-foreground">If you don't recognize the number, <strong>don't answer at all</strong>. Real callers leave voicemail. Picking up confirms your number is real and active — that gets you on more lists. Let unknown calls go to voicemail every time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
