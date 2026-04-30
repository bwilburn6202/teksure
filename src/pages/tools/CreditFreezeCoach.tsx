import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, ExternalLink, Phone, CheckCircle2 } from 'lucide-react';

const BUREAUS = [
  { name: 'Equifax', online: 'https://www.equifax.com/personal/credit-report-services/credit-freeze/', phone: '1-800-685-1111' },
  { name: 'Experian', online: 'https://www.experian.com/freeze/center.html', phone: '1-888-397-3742' },
  { name: 'TransUnion', online: 'https://www.transunion.com/credit-freeze', phone: '1-888-909-8872' },
];

export default function CreditFreezeCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Freeze Coach — Free Way to Stop ID Theft | TekSure" description="A credit freeze stops scammers from opening loans or credit cards in your name. It's free. Walk through how to do it at all three bureaus — in plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Freeze Coach</h1>
          <p className="text-lg text-muted-foreground">The single best free thing you can do to protect your money.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What is a credit freeze?</h2>
            <p className="text-sm mb-2">It locks your credit reports so no one — not even you — can open a new loan, credit card, or account in your name without first un-freezing.</p>
            <p className="text-sm mb-2"><strong>It does NOT:</strong> stop you from using current cards, lower your credit score, or cost any money. It's free by federal law.</p>
            <p className="text-sm"><strong>It DOES:</strong> stop nearly all "someone opened a credit card in my name" identity theft. The FTC and AARP both recommend it.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you'll need first</h2>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Your full name, address, date of birth, Social Security number</li>
              <li>An email address (and access to it)</li>
              <li>30 minutes — about 10 minutes per bureau</li>
              <li>A safe place to write down each bureau's PIN or password (you'll need them later to un-freeze)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="font-bold text-2xl mb-3">Freeze each bureau (all 3 needed)</h2>
        <div className="space-y-3 mb-6">
          {BUREAUS.map((b, i) => (
            <Card key={b.name}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{b.name}</h3>
                    <p className="text-sm text-muted-foreground">Sign up for an account, verify your identity, then click "Place a freeze".</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <Button asChild variant="outline"><a href={b.online} target="_blank" rel="noopener noreferrer">Freeze online <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
                  <Button asChild variant="outline"><a href={`tel:${b.phone.replace(/\D/g, '')}`}><Phone className="w-3 h-3 mr-2" />{b.phone}</a></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need a loan or credit card later</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Ask the lender which bureau they pull from (most pull just one).</li>
              <li>Go to that bureau's website or call them.</li>
              <li>Sign in with the username and PIN you saved.</li>
              <li>Choose "Lift freeze" — pick a date range (usually 1-7 days is enough).</li>
              <li>Apply for your loan. Re-freezing is automatic when the date passes.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Bonus protection — also free</h3>
                <p className="text-sm text-muted-foreground">Sign up for <strong>USPS Informed Delivery</strong> at informeddelivery.usps.com. It emails you photos of mail before it arrives — so you'll know if a thief steals letters from your mailbox (Medicare cards, tax forms, etc.).</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
