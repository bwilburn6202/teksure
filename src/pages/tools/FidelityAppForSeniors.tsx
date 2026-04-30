import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart } from 'lucide-react';

export default function FidelityAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fidelity App for Senior Investors | TekSure" description="Manage retirement + brokerage accounts with Fidelity Investments app. Senior-friendly guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LineChart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fidelity App</h1>
          <p className="text-lg text-muted-foreground">Retirement + investment management.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Fidelity?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Among most popular brokerages for retirees.</li>
              <li>$0 commission stocks + ETFs.</li>
              <li>Excellent retirement planning tools.</li>
              <li>Mutual funds with no minimum.</li>
              <li>Free 401(k) rollover assistance.</li>
              <li>Brick + mortar branches available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App features for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See all accounts in one place — IRA, 401(k), brokerage.</li>
              <li>Required Minimum Distribution (RMD) calculator.</li>
              <li>Income planning for retirement.</li>
              <li>Tax-loss harvesting opportunities.</li>
              <li>Set up bill pay from brokerage.</li>
              <li>Easy beneficiary updates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RMD management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Required at age 73 (most accounts).</li>
              <li>App calculates exact RMD amount.</li>
              <li>Schedule automatic monthly distributions.</li>
              <li>Avoid 50% penalty for missing RMD.</li>
              <li>Reminder notifications.</li>
              <li>Withhold taxes automatically if desired.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Income strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Income generator tool — find dividend stocks.</li>
              <li>Bond ladder calculator.</li>
              <li>Annuity quotes inside the app.</li>
              <li>4% rule retirement income simulator.</li>
              <li>Social Security claiming calculator.</li>
              <li>Net worth tracker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free phone advisors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free retirement advisor consultation.</li>
              <li>Phone or in-person at branch.</li>
              <li>Help with rollovers, RMDs, beneficiaries.</li>
              <li>No commission pressure.</li>
              <li>Real humans + good service.</li>
              <li>Book through app or call directly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior security</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add Trusted Contact — Fidelity contacts if suspicious activity.</li>
              <li>Set up 2FA.</li>
              <li>Voice biometric ID for phone calls.</li>
              <li>Lockdown mode if compromised.</li>
              <li>Designate Power of Attorney access.</li>
              <li>Excellent fraud protection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Add Trusted Contact today</h3>
            <p className="text-sm text-muted-foreground">If your retirement accounts are at Fidelity, add a Trusted Contact this week — usually adult child or spouse. Fidelity will reach out to them if they suspect fraud or you appear cognitively impaired. This safeguard has saved many seniors from being scammed out of retirement savings. Free, takes 5 minutes, requires their consent.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
