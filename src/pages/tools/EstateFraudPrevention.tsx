import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function EstateFraudPrevention() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate + Inheritance Fraud Prevention | TekSure" description="Family financial abuse, fake heirs, deed theft. Plain-English plan to protect your estate from fraud during life and after." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Fraud Prevention</h1>
          <p className="text-lg text-muted-foreground">Protect what you built.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family financial abuse</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$28 BILLION/year stolen from seniors by family members + caregivers.</li>
              <li>Often: child borrows + doesn&apos;t repay, caregiver takes credit cards, "I&apos;ll handle banking" + drains accounts.</li>
              <li>Watch signs: missing items, unfamiliar charges, isolated by one family member.</li>
              <li>Most under-reported crime in US.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifetime protections</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Limited Power of Attorney</strong> — only what&apos;s necessary, expires.</li>
              <li><strong>Trust + Trustee with co-trustee</strong> — checks and balances.</li>
              <li><strong>Multiple banks</strong> — split accounts, different signatories.</li>
              <li><strong>Trusted Contact at bank</strong> — bank calls them if suspicious activity.</li>
              <li><strong>Monitor accounts monthly</strong> — flag unfamiliar charges.</li>
              <li><strong>Don&apos;t add adult kids as joint owners</strong> on bank accounts (their creditors can take it).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After-death protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Will + Trust drafted by attorney</strong> — DIY wills are ground for challenges.</li>
              <li><strong>Witnesses + notary</strong> — both required.</li>
              <li><strong>Specific bequests</strong> — name items, beneficiaries, percentages.</li>
              <li><strong>"No-contest clause"</strong> — disinherits anyone who challenges.</li>
              <li><strong>Letter of intent</strong> — explains why decisions made (helps prevent suits).</li>
              <li><strong>Update will every 5-10 years</strong> + after major life events.</li>
              <li><strong>Tell heirs ahead of time</strong> — surprise inheritances cause family wars.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Deed / property theft</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Some scammers forge deeds to "sell" senior&apos;s home.</li>
              <li>Sign up for free deed monitoring at county recorder (most counties offer).</li>
              <li>Title insurance + monitoring service — Home Title Lock ($15/mo). Helpful but free options exist.</li>
              <li>Annual property record check at county website.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you suspect fraud</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Stop access — change passwords, lock accounts, revoke POA in writing.</li>
              <li>Document everything — dates, amounts, who did what.</li>
              <li>Adult Protective Services (APS) — your county. Free, confidential.</li>
              <li>Local police + DA elder fraud unit.</li>
              <li>Consult an elder law attorney (low-income legal aid free).</li>
              <li>Don&apos;t confront the abuser alone.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free elder law help</h3>
            <p className="text-sm text-muted-foreground"><strong>National Center on Elder Abuse</strong> — ncea.acl.gov. <strong>Eldercare Locator</strong> — 1-800-677-1116. <strong>Senior Legal Hotlines</strong> — many states have free elder law hotlines. <strong>NAELA</strong> — National Academy of Elder Law Attorneys (find specialist).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
