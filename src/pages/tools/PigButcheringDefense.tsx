import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export default function PigButcheringDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="'Pig Butchering' Crypto Investment Scam — How It Works | TekSure" description="The biggest scam of the decade. A friendly stranger texts, becomes a friend, then introduces an 'investment'. Americans lost $5+ billion last year. How to spot it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pig-Butchering Scam Defense</h1>
          <p className="text-lg text-muted-foreground">The biggest financial scam in the world right now. Learn the playbook.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Why the strange name?</h2>
                <p className="text-sm">It's the literal Mandarin term scammers use — "fattening the pig before slaughter". They befriend you for weeks or months, build trust, then "introduce" a magical investment app. You see your fake balance grow. When you try to cash out — gone.</p>
                <p className="text-sm mt-2">The FBI says Americans lost over <strong>$5 billion</strong> to this scam in 2024 alone.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it always starts</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>A "wrong number" text. <em>"Hi Karen, are we still on for dinner Saturday?"</em> You reply, "Wrong number." They apologize and chat — friendly, attractive, successful.</li>
              <li>Or — a stranger DMs you on Facebook, Instagram, LinkedIn, or a dating app.</li>
              <li>You start chatting daily. Weeks pass. They never ask for money. They send food photos, complain about work, ask about your day.</li>
              <li>They casually mention they made money on "crypto trading". They have an "uncle who taught them" or a "secret app".</li>
              <li>They offer to teach you. "Just start small — $500 to see."</li>
              <li>You sign up on the app they suggest. Your $500 becomes $700 in a week. You\'re thrilled. You add more.</li>
              <li>Eventually you try to withdraw. The app says "tax payment needed" or "account verification fee". You pay. Still no withdrawal. More fees. Then they ghost you.</li>
              <li>You\'ve lost everything you put in. There's no app — it was a scam website all along.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚩 Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stranger you've never met in person teaches you about money or investing.</li>
              <li>"Investment app" you've never heard of — not Fidelity, Schwab, Vanguard, or a real bank.</li>
              <li>App requires depositing crypto (Bitcoin, Tether/USDT) instead of dollars.</li>
              <li>Returns of 10-30% per week. (Real returns are 7-10% per YEAR.)</li>
              <li>Pressure to add more money. "I just put $50,000 in. You should join."</li>
              <li>Unusual fees to withdraw your own money.</li>
              <li>Refusal to video chat live (or refusal to meet at a public restaurant).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The bedrock rule</h2>
            <p className="text-sm mb-2">Don't take investment advice from anyone you've only met online. Ever.</p>
            <p className="text-sm">If you want to invest, talk to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>A fee-only fiduciary financial advisor (search NAPFA.org for one near you).</li>
              <li>Vanguard, Fidelity, or Schwab — real, regulated US firms with phone support.</li>
              <li>Your bank's wealth advisor — even if you don't use them, they\'ll explain real options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you've already sent money</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Stop. Don\'t send the "tax payment" or "withdrawal fee". It's the same scammers — they've taken everything they\'re going to.</li>
              <li>Save all chats and screenshots from the fake app.</li>
              <li>Call the FBI's IC3 at <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">ic3.gov</a>. Crypto scams are their specialty now.</li>
              <li>Report to the FTC at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">reportfraud.ftc.gov</a>.</li>
              <li>If you sent crypto from a real exchange like Coinbase — call Coinbase support. In some recent cases law enforcement has frozen wallet flows.</li>
              <li>Watch for "recovery scams" — fake "asset recovery firms" that promise to get your crypto back for an upfront fee. Always a second scam.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tell someone</h3>
            <p className="text-sm text-muted-foreground">Most victims don't tell anyone for months because of shame. Don't. The scammers do this for a living, with practiced scripts and teams of operators. Telling family, your bank, and the FBI is the single most powerful thing you can do to slow them down — and to start healing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
