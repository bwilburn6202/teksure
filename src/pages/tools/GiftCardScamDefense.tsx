import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, AlertTriangle, Phone, ExternalLink } from 'lucide-react';

const RED_FLAGS = [
  'Anyone tells you to PAY with a gift card. Real businesses, the IRS, Medicare, Social Security, your power company, the police — none of them ever ask for gift cards.',
  'Someone says it\'s urgent — "pay in the next hour or you\'ll be arrested / lose service / go to jail."',
  'They tell you to stay on the phone while you drive to the store and buy cards.',
  'They ask for the number on the back of the card — that\'s the same as cash.',
  'A "grandchild" or "friend" asks for gift cards as a favor (and asks you not to tell anyone).',
];

const WHO_FAKE = [
  ['"IRS" agent', 'The IRS only contacts you by mail. They never demand gift cards.'],
  ['"Microsoft" or "Apple" support', 'These companies do not call you. The pop-up that says "your computer is infected" is fake.'],
  ['"Power company"', 'Your real utility bills you on paper or through their app. They don\'t threaten same-day shutoff over the phone.'],
  ['"Police" or "court" with a warrant', 'Real police don\'t take gift cards. Hang up.'],
  ['"Grandchild" in trouble', 'Use your family safe-word, or call the grandchild back on their normal number.'],
  ['"Romance" partner online', 'Anyone you\'ve only met online who needs gift cards is scamming you. No exceptions.'],
];

export default function GiftCardScamDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gift Card Scam Defense — Stop Before You Pay | TekSure" description="If anyone asks you to pay with a gift card, it's a scam. Here's how to stop one in progress and what to do if you already paid." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gift Card Scam Defense</h1>
          <p className="text-lg text-muted-foreground">Americans lose over $217 million a year to these scams. Don't be next.</p>
        </div>

        <Card className="mb-6 border-2 border-destructive">
          <CardContent className="pt-6">
            <h2 className="font-bold text-2xl mb-2 text-destructive">The one rule</h2>
            <p>If anyone asks you to pay with a <strong>gift card</strong> — Apple, Google Play, Amazon, eBay, Target, Walmart, Steam — <strong>it is always a scam.</strong> Always. No exceptions.</p>
            <p className="text-sm mt-2">Hang up. Walk away. Tell a family member.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags — if you see ANY of these</h2>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              {RED_FLAGS.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who scammers pretend to be</h2>
            <div className="space-y-3">
              {WHO_FAKE.map(([who, real], i) => (
                <div key={i} className="border-l-4 border-destructive pl-3">
                  <p className="font-semibold text-sm">{who}</p>
                  <p className="text-sm text-muted-foreground">{real}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you already bought the cards</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Don't give them the numbers</strong> if you haven't yet. Stop right there.</li>
              <li>If you already shared the card numbers, <strong>call the gift card company immediately</strong> — sometimes they can freeze the funds before they're spent.</li>
              <li>Save the receipt and the cards.</li>
              <li>Report it to the FTC at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">reportfraud.ftc.gov</a>.</li>
              <li>Tell a trusted family member.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-3">Hotlines to call right now</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              <Button asChild variant="outline" className="justify-start"><a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">FTC Report Fraud <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
              <Button asChild variant="outline" className="justify-start"><a href="tel:18772767297"><Phone className="w-3 h-3 mr-2" />AARP Fraud Watch: 877-908-3360</a></Button>
              <Button asChild variant="outline" className="justify-start"><a href="https://www.apple.com/legal/more-resources/gift-cards/" target="_blank" rel="noopener noreferrer">Apple gift card scam help <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
              <Button asChild variant="outline" className="justify-start"><a href="tel:18886524622"><Phone className="w-3 h-3 mr-2" />Google Play: 1-888-652-4622</a></Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-muted-foreground shrink-0" />
              <p className="text-sm">Many stores now train cashiers to ask "Is anyone telling you to buy these?" Don't be embarrassed — say yes. They've stopped thousands of scams in progress.</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
