import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function HelocCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HELOC Coach — Home Equity Line of Credit | TekSure" description="HELOC vs home equity loan vs cash-out refi. Plain-English guide to using home equity safely (or running away from it)." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">HELOC Coach</h1>
          <p className="text-lg text-muted-foreground">Home equity = available cash. Use carefully.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What\'s a HELOC?</h2>
            <p className="text-sm">A line of credit secured by your home equity. Like a credit card backed by the house. Typical limit: 80% of home value minus mortgage balance.</p>
            <p className="text-sm mt-2">Example: home worth $500k, mortgage $200k. Equity = $300k. Lender may approve HELOC up to $200k.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HELOC vs Home Equity Loan vs Cash-Out Refi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>HELOC</strong> — line of credit. Borrow as needed. Variable rate. Best for ongoing needs (renovations, medical bills as they come).</li>
              <li><strong>Home Equity Loan</strong> — lump sum. Fixed rate. Best for one-time big purchase.</li>
              <li><strong>Cash-out refinance</strong> — replace mortgage with bigger one. Best when current rate is much higher than refi rate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When HELOC makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Major home repair (roof, foundation).</li>
              <li>Medical emergency without enough cash.</li>
              <li>Bridge while waiting for IRA withdrawal or pension to start.</li>
              <li>Down payment on a 2nd property.</li>
              <li>Emergency fund "in case" — many open one with no balance, just for safety.</li>
              <li>Short-term cash flow needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ When HELOC is dangerous</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>To pay off credit cards. You\'re trading unsecured debt (lose if defaulted) for secured (lose your HOUSE if defaulted).</li>
              <li>Vacations, cars, weddings, or speculation.</li>
              <li>Unstable income — variable rate could spike during a tough year.</li>
              <li>Combined with other big debts.</li>
              <li>If you\'re forgetful — a HELOC requires monthly payments forever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to get one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Your existing bank/credit union</strong> — usually best terms for existing customers.</li>
              <li><strong>Local credit union</strong> — typically lowest rates.</li>
              <li><strong>Bankrate.com</strong> — compare current HELOC rates.</li>
              <li><strong>Figure.com</strong> — fast online HELOC.</li>
              <li><strong>Better.com</strong> — competitive online lender.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch the math</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Variable rate = rate adjusts. Today\'s 7% could be tomorrow\'s 10%.</li>
              <li>Closing costs $500-2,000 typical.</li>
              <li>"Draw period" 5-10 years (you can borrow). Then "repayment" 10-20 years.</li>
              <li>"Balloon" payment at end if not paid down — be careful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For senior homeowners specifically</h3>
            <p className="text-sm text-muted-foreground">A HELOC opened for "emergency fund" purposes (carry $0 balance) is wise. Pay nothing if unused. Available if a real emergency hits. Compare to reverse mortgage — HELOC is usually cheaper and more flexible. (See our Reverse Mortgage Explained tool.)</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
