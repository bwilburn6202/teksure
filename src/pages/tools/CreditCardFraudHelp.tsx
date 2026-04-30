import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function CreditCardFraudHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Card Fraud Help for Seniors | TekSure" description="Spot + recover from card fraud. Plain-English guide for senior victims." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Card Fraud</h1>
          <p className="text-lg text-muted-foreground">Catch early. Recover fully.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spot fraud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check statements monthly (or weekly).</li>
              <li>Use bank app for instant alerts.</li>
              <li>Charges you don&apos;t recognize.</li>
              <li>Charges in unusual locations.</li>
              <li>Multiple small charges (testing).</li>
              <li>Subscriptions you didn&apos;t sign up for.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Found fraud — act NOW</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call card company immediately (number on back).</li>
              <li>Report fraud charges.</li>
              <li>They issue new card + reverse charges.</li>
              <li>Federal law caps liability at $50 (often $0).</li>
              <li>Update auto-pay accounts with new card.</li>
              <li>Place fraud alert on credit reports.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disputes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>60 days to dispute charge from statement.</li>
              <li>Call OR submit online via portal.</li>
              <li>Provide details, receipts, screenshots.</li>
              <li>Card freezes charge while investigating.</li>
              <li>Most resolved 30-90 days.</li>
              <li>Win rate: 80%+ for clear fraud.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After fraud — protect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free credit freeze at 3 bureaus (Equifax, Experian, TransUnion).</li>
              <li>Identity theft report at FTC IdentityTheft.gov.</li>
              <li>Police report (some banks require).</li>
              <li>Free credit monitoring (most banks include).</li>
              <li>Change passwords on financial accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevent fraud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bank alerts on every charge over $X.</li>
              <li>Apple Pay / Google Pay = much safer than swipe.</li>
              <li>Don&apos;t save card info on shady sites.</li>
              <li>Lock card in app when not using.</li>
              <li>Don&apos;t use ATMs at gas stations (skimmers).</li>
              <li>Cover PIN entry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If overwhelmed</h3>
            <p className="text-sm text-muted-foreground">If victimized + confused — Identity Theft Resource Center (idtheftcenter.org) free help. AARP Fraud Watch helpline 1-877-908-3360. Trusted family member can help reach out. Don&apos;t try to handle alone if anxiety. Help available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
