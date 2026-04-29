import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppScamSpotting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="WhatsApp Scam Spotting | TekSure" description="Avoid WhatsApp scams. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">WhatsApp Scams</h1>
          <p className="text-lg text-muted-foreground">Common tricks. Stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">&quot;Mom, this is my new number&quot;</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most common WhatsApp scam.</li>
              <li>Pretends to be your child.</li>
              <li>&quot;Lost my phone, new number.&quot;</li>
              <li>Asks for money urgently.</li>
              <li>NEVER send money.</li>
              <li>Call old number first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verification scam</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Send me the 6-digit code I just texted.&quot;</li>
              <li>NEVER share verification codes.</li>
              <li>That code = WhatsApp registration.</li>
              <li>If shared = they take over your account.</li>
              <li>WhatsApp itself never asks for codes.</li>
              <li>Block + report sender.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Investment / crypto scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Insider tip — buy this stock&quot;.</li>
              <li>Group chats with fake testimonials.</li>
              <li>&quot;You can earn $5,000 in 30 days.&quot;</li>
              <li>Always crypto / forex / stocks.</li>
              <li>&quot;Trading platform&quot; takes money + disappears.</li>
              <li>NEVER respond.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fake delivery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Package delivery — click for details.&quot;</li>
              <li>Link goes to phishing site.</li>
              <li>Steals login or credit card.</li>
              <li>FedEx / UPS / USPS don&apos;t WhatsApp.</li>
              <li>Real delivery = email or SMS direct.</li>
              <li>Verify on official site.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Job offer scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Earn $500/day from home.&quot;</li>
              <li>Always too good to be true.</li>
              <li>&quot;Just need credit card for setup.&quot;</li>
              <li>Or &quot;send personal info to apply.&quot;</li>
              <li>Real jobs don&apos;t recruit on WhatsApp.</li>
              <li>Block + report.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Block + report</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open chat with sender.</li>
              <li>Tap their name at top.</li>
              <li>Scroll down, &quot;Block&quot;.</li>
              <li>&quot;Report contact&quot; sends to WhatsApp.</li>
              <li>Don&apos;t reply first.</li>
              <li>Tell others in family group.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior protection</h3>
            <p className="text-sm text-muted-foreground">Set 2FA on WhatsApp: Settings → Account → Two-step verification → Enable. Choose 6-digit PIN. Add email recovery. Stops account takeover. Don&apos;t answer calls / messages from unknown numbers. Family code word for emergencies. WhatsApp scams target seniors most. Vigilance = protection.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
