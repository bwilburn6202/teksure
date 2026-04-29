import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldOff } from 'lucide-react';

export default function AIScamProtection() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spot + Avoid AI Scams | TekSure" description="AI-powered scams targeting seniors. Plain-English defense guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Scam Protection</h1>
          <p className="text-lg text-muted-foreground">New scams. Same defenses.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice cloning scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Scammers can clone voice from 3 seconds of audio.</li>
              <li>&quot;Grandma, I&apos;m in jail, send bail money!&quot; — sounds EXACTLY like grandkid.</li>
              <li>From social media voice posts, voicemails.</li>
              <li><strong>Defense: family password</strong> — agreed-on word/phrase only family knows.</li>
              <li>Always call back on KNOWN number.</li>
              <li>Never wire/gift card under emotional pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Deepfake video scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fake CEO videos pushing investment scams.</li>
              <li>Celebrity endorsements — Taylor Swift, Tom Hanks faked.</li>
              <li>Romance scams using AI faces — fake love interests.</li>
              <li>Ask uncomfortable questions — AI sometimes fails.</li>
              <li>Reverse image search photos.</li>
              <li>Real celebrities don&apos;t pitch on Facebook ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AI-generated phishing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Perfect grammar (no more typos).</li>
              <li>Highly personalized (mention real details).</li>
              <li>Creates urgency / emotional pressure.</li>
              <li>Email/texts impossible to distinguish.</li>
              <li><strong>Defense:</strong> NEVER click links in emails. Type URL directly.</li>
              <li>Call company on number from THEIR official website.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fake AI services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;ChatGPT Premium&quot; apps — most fake.</li>
              <li>Real ChatGPT: chat.openai.com.</li>
              <li>Real Claude: claude.ai.</li>
              <li>Real Gemini: gemini.google.com.</li>
              <li>App stores have many fakes — read reviews.</li>
              <li>FREE versions of all major AI exist.</li>
              <li>Don&apos;t pay for &quot;exclusive&quot; AI access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family password (do this NOW)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick a word ALL family knows.</li>
              <li>Something inside-joke, never on social media.</li>
              <li>Use ONLY in emergency to verify identity.</li>
              <li>&quot;Grandma in jail&quot; calls = ask for password.</li>
              <li>Real grandkids will know it.</li>
              <li>Teach kids when they get phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When in doubt</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hang up. Call back on official number.</li>
              <li>Tell a friend before sending money.</li>
              <li>24-hour rule — sleep on big decisions.</li>
              <li>Never send money under pressure.</li>
              <li>Real emergencies have real solutions through real channels.</li>
              <li>If feels off — it is.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP Fraud Watch helpline</strong> — 1-877-908-3360. Free counselors. Talk through suspicious calls. <strong>FTC report</strong> — reportfraud.ftc.gov. <strong>FBI IC3</strong> — ic3.gov for online crime. Your bank can also reverse some scam payments if reported within 24-48 hours.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
