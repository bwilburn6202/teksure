import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck } from 'lucide-react';

const SERVICES = [
  { name: 'Notarize.com', cost: '$25/document', best: 'Biggest US online notary. 24/7 availability. Most banks and lenders accept.', good: 'Best overall.' },
  { name: 'OneNotary', cost: '$25-35', best: 'Lower-priced alternative. Solid customer service.', good: 'Good budget option.' },
  { name: 'NotaryCam', cost: '$25', best: 'One of the originals. Real-estate-focused.', good: 'Best for closing documents.' },
  { name: 'BlueNotary', cost: '$25', best: 'Modern interface. Mobile-friendly.', good: 'Best app experience.' },
  { name: 'Bank in person', cost: 'FREE for customers', best: 'Most banks notarize FREE for account holders. No appointment usually needed.', good: 'Cheapest if you have time.' },
  { name: 'UPS Store / FedEx', cost: '$5-25', best: 'In-person, walk-in. Reliable, no online setup needed.', good: 'Great in a pinch.' },
];

export default function OnlineNotaryCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Notary Coach — Notarize From Home | TekSure" description="Need a document notarized? Don\'t drive anywhere. Online notaries via video call. Plain-English guide to legal e-notary." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Notary Coach</h1>
          <p className="text-lg text-muted-foreground">Notarize a document via video call. From your couch.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Is it legal?</h2>
            <p className="text-sm">Yes — online notarization (called RON, Remote Online Notarization) is legal in 45+ states. The notary is real, certified, and verified by ID + selfie + knowledge-based questions. The document is just as valid as in-person notarization.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm mb-1">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How online notarization works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up. Upload your document (PDF or photo).</li>
              <li>Verify ID — selfie + driver\'s license photo.</li>
              <li>Answer 5 random "knowledge-based authentication" questions (your old addresses, etc.).</li>
              <li>Connect to a notary via video.</li>
              <li>You sign on screen with finger or stylus.</li>
              <li>Notary watches you sign, applies their seal.</li>
              <li>You download the notarized PDF in 1-3 minutes.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Power of Attorney forms.</li>
              <li>Real estate closing documents.</li>
              <li>Affidavits.</li>
              <li>Title transfers.</li>
              <li>Travel consent for grandkids.</li>
              <li>Most legal forms that say "notarize".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to do it in person instead</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Will signing — many states require in-person witnesses.</li>
              <li>Some states (CA, IA, SC) don\'t fully accept online notarization yet.</li>
              <li>Banks sometimes require their own notary for big transactions.</li>
              <li>If you don\'t have a working webcam.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cheapest option</h3>
            <p className="text-sm text-muted-foreground">If you have ANY checking account at a bank or credit union — they\'ll notarize FREE for customers. Walk in, ask the teller. 5 minutes. Worth the trip if you have time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
