import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function EstateExecutorTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tools for Executors of an Estate | TekSure" description="Just been named executor? Plain-English checklist of apps, websites, and 60-day, 6-month, 1-year tasks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Executor Tools</h1>
          <p className="text-lg text-muted-foreground">You&apos;ve been named executor. Now what?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First 30 days</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Get 10-20 certified copies of death certificate (funeral home orders).</li>
              <li>Locate the will and any trust documents.</li>
              <li>Notify Social Security (1-800-772-1213). Stop benefits.</li>
              <li>Notify pension/401k providers.</li>
              <li>Tell banks. They&apos;ll freeze accounts pending probate.</li>
              <li>Contact life insurance.</li>
              <li>Start a "Date of Death" file — every account balance, every bill.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helpful tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Everplans</strong> — $89/yr digital filing cabinet for end-of-life docs. Saves hours.</li>
              <li><strong>EstateExec</strong> — $169/yr software walks you through executor duties. State-specific.</li>
              <li><strong>Trustworthy</strong> — $200/yr family info hub.</li>
              <li><strong>Local probate attorney</strong> — $1,500-5,000 typical. Worth it for estates over $250K.</li>
              <li><strong>USPS Mail Forwarding</strong> — forward mail to executor for 1 year.</li>
              <li><strong>Credit bureau notification</strong> — flag deceased to prevent ID theft.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Probate — file in 60-90 days</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>File the will with local probate court (county courthouse).</li>
              <li>Court issues "Letters Testamentary" — proves you&apos;re executor.</li>
              <li>Inventory all assets.</li>
              <li>Pay debts (60-180 days for creditors to file claims).</li>
              <li>File final tax return (IRS Form 1040 + Form 1041 if estate income).</li>
              <li>Distribute assets to heirs.</li>
              <li>File final probate accounting.</li>
              <li>Court closes estate.</li>
            </ol>
            <p className="text-sm mt-3">Typical timeline: 6-18 months. Complex estates: 2-5 years.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t skip these contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>IRS — request final return / Form 706 if estate &gt; $13.6M (2025).</li>
              <li>Veterans Affairs — burial benefits ($300-2,000 for vets).</li>
              <li>Equifax + Experian + TransUnion — flag deceased.</li>
              <li>Credit cards — close accounts.</li>
              <li>Email + social — see /tools/memorial-facebook-guide.</li>
              <li>Phone, internet, streaming, magazine subscriptions.</li>
              <li>Utilities — transfer to surviving spouse or close.</li>
              <li>HOA + property tax assessor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common executor mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Distributing assets BEFORE paying creditors → you become personally liable.</li>
              <li>Co-mingling estate funds with own — open a SEPARATE estate checking account.</li>
              <li>Missing tax deadlines.</li>
              <li>Selling property too fast — heirs may want to keep it.</li>
              <li>Not communicating with beneficiaries — leads to lawsuits.</li>
              <li>Doing everything alone — hire CPA + attorney for complex estates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Take care of yourself</h3>
            <p className="text-sm text-muted-foreground">Being an executor while grieving is exhausting. Set boundaries. Tell other family members what&apos;s happening. Don&apos;t rush. The IRS gives 9-15 months for estate tax filing. Most things can wait 30 days.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
