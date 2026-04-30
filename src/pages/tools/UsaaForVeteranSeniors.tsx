import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function UsaaForVeteranSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="USAA for Veteran Seniors | TekSure" description="USAA banking + insurance for veterans and their families. Senior-focused guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">USAA</h1>
          <p className="text-lg text-muted-foreground">Banking + insurance for veterans + family.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who can join USAA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Active military + veterans.</li>
              <li>Spouses of military members.</li>
              <li>Children of USAA members can join.</li>
              <li>Most current military families eligible.</li>
              <li>Not just for active duty — retirees too.</li>
              <li>Once eligible, lifetime member.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">USAA Bank</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free checking account (no monthly fees).</li>
              <li>Reimburses up to $15/month in ATM fees.</li>
              <li>High-yield savings options.</li>
              <li>Mobile app + mobile deposit.</li>
              <li>No physical branches in most areas.</li>
              <li>Excellent phone customer service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto + home insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Highly rated — typically cheaper than competitors.</li>
              <li>Auto insurance often 10-30% less.</li>
              <li>Discounts for low-mileage seniors.</li>
              <li>Bundle home + auto for savings.</li>
              <li>Excellent claims service.</li>
              <li>Annual rate shopping recommended.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other USAA services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Life insurance — competitive rates.</li>
              <li>Retirement accounts (IRA, brokerage).</li>
              <li>Health insurance options for retired military.</li>
              <li>Roadside assistance.</li>
              <li>Travel insurance.</li>
              <li>One-stop shop for veterans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mature drivers discount on auto insurance.</li>
              <li>Discounts for accident-free history.</li>
              <li>Survivor benefit guidance.</li>
              <li>Life insurance for veterans only available.</li>
              <li>VA loan refinancing assistance.</li>
              <li>Long-term care planning resources.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">USAA app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bank, insurance, investments all in one app.</li>
              <li>Mobile deposit.</li>
              <li>File insurance claims through app.</li>
              <li>Get auto insurance ID cards.</li>
              <li>Talk to representatives via secure message.</li>
              <li>Excellent app rating — well-designed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If eligible, switch insurance</h3>
            <p className="text-sm text-muted-foreground">If you or your spouse served in the military, USAA membership is one of the most valuable financial relationships available. The auto insurance alone often saves $500–$1,000/year versus other insurers. Combined with their veteran-focused customer service and senior discounts, it&apos;s worth checking eligibility. Even children + grandchildren of members can sometimes join.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
