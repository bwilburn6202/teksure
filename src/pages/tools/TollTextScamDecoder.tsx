import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, MessageSquare, Phone } from 'lucide-react';

export default function TollTextScamDecoder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Toll Text Scam Decoder — E-ZPass / SunPass / FasTrak Texts | TekSure" description="Got a text saying you owe an unpaid toll? It's almost certainly a scam. Plain-English explanation and what to do." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Toll Text Scam Decoder</h1>
          <p className="text-lg text-muted-foreground">"You owe $6.99 for an unpaid toll" — these texts are fake. Here's why.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Short answer: delete it</h2>
                <p className="text-sm">The FBI's IC3 has warned millions of Americans about this exact scam. Real toll agencies (E-ZPass, SunPass, FasTrak, TxTag, etc.) <strong>do not text you</strong> about unpaid tolls. They mail you a paper bill.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to spot it (every red flag at once)</h2>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li><strong>Small amount</strong> — usually $4 to $15. Just enough that you'd pay to "make it go away".</li>
              <li><strong>Urgent deadline</strong> — "pay by tomorrow or face a $50 late fee."</li>
              <li><strong>Strange link</strong> — usually NOT the real agency's website. Often ends in <code>.top</code>, <code>.xyz</code>, or has the agency name buried in a long address.</li>
              <li><strong>Comes from an out-of-area or foreign number.</strong></li>
              <li><strong>Even works in states with no tolls</strong> — scammers don't know where you live.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to do</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Don't tap the link.</strong> If you already did and didn't enter card info, you're probably fine.</li>
              <li>If you DID enter your credit card — call the number on the back of your card right now and report it as a scam. Ask for a new card number.</li>
              <li>Forward the text to <strong>7726</strong> (spells SPAM). Your carrier blocks the sender.</li>
              <li>Report it to the FBI at <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">ic3.gov</a>.</li>
              <li>Delete the text and block the number.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you're worried it might be real</h2>
            <p className="text-sm mb-2">Don't click anything in the text. Instead:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Type your toll agency's name into Google yourself (E-ZPass, SunPass, etc.).</li>
              <li>Log in to your real account on the official site.</li>
              <li>Or call the number on a paper bill or the back of your transponder.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Phone className="w-6 h-6 text-muted-foreground shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Same scam, different costume</h3>
                <p className="text-sm text-muted-foreground">"USPS package can't be delivered" texts, "Bank of America fraud alert" texts, and "Your Apple ID has been disabled" texts all use the same playbook. If a text creates urgency, asks you to click a link, and threatens a small fee — it's a scam every time.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
