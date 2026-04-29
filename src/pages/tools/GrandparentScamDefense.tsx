import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function GrandparentScamDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandparent Scam Defense | TekSure" description="The grandparent scam targets seniors with fake emergency calls. Plain-English red flags, the AI voice twist, and exact words to say to shut it down." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandparent Scam Defense</h1>
          <p className="text-lg text-muted-foreground">"Grandma, it&apos;s me — I&apos;m in trouble..."</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The setup</h2>
            <p className="text-sm">A panicked young voice calls. Says they&apos;re your grandchild. Been in a car accident, in jail, in the hospital. Begs you not to tell mom or dad. Need money RIGHT NOW. Will send a "lawyer" or "courier" to pick up cash. <strong>$2.7 BILLION lost to these scams in 2023</strong> per FTC.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The new AI voice twist (since 2024)</h2>
            <p className="text-sm">Scammers now use AI to clone a real grandchild&apos;s voice from social media videos. 30 seconds of audio is enough. The voice will sound exactly right. <strong>Trust the rules below — not your ears.</strong></p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags — every grandparent scam has them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Don&apos;t tell mom and dad."</li>
              <li>Asks for cash, gift cards, wire transfer, or crypto.</li>
              <li>"Courier" or "lawyer" coming to pick up.</li>
              <li>Hurry, hurry, can&apos;t wait, can&apos;t verify.</li>
              <li>Voice "different" because of crying, injury, or "broken nose".</li>
              <li>Calling from "a friend&apos;s phone" — explains why caller ID is wrong.</li>
              <li>Story keeps changing as you ask questions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Defense — exact words</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>"What&apos;s the safe word?"</strong> — set up a family code word NOW. Anything weird like "blue donut" or "purple hippo". A real grandchild knows it. A scammer doesn&apos;t.</li>
              <li><strong>"I&apos;ll call you back at your number."</strong> — hang up. Call your grandchild&apos;s real number. Real emergencies survive a 5-minute callback.</li>
              <li><strong>"Let me call your mom first."</strong> — if it&apos;s real, mom will know. Scammer panics.</li>
              <li><strong>"What was your dog&apos;s name?"</strong> or any specific question. Scammers stumble.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up a family safe word — today</h2>
            <p className="text-sm">Family meeting (or group text). Pick a goofy word everyone knows but a stranger never could. Examples: "watermelon", "blue tractor", "Aunt Mildred&apos;s pies". Anyone calling with a real emergency must use it. No safe word = scam.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Already paid? Act fast</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Wire transfer</strong> — call the bank IMMEDIATELY. Sometimes recoverable in first 24 hours.</li>
              <li><strong>Gift card</strong> — call the issuer (Apple, Google Play, Amazon). Some can freeze cards.</li>
              <li><strong>Crypto</strong> — almost never recoverable, but report anyway.</li>
              <li>Report to <strong>FTC at reportfraud.ftc.gov</strong> + <strong>FBI at IC3.gov</strong>.</li>
              <li>Tell family. Don&apos;t hide it from shame — they need to know.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">"It will never happen to me"</h3>
            <p className="text-sm text-muted-foreground">It happens to highly educated people every day. Scammers are professionals. They use real names from social media, real college, real hometown. The defense is the safe word and the callback rule — not "being smart". Set up the safe word today.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
