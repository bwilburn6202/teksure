import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function BeneficiaryCheckup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Beneficiary Checkup — Update Yours Now | TekSure" description="Beneficiary forms override your will. Plain-English checklist for accounts to update annually — IRA, 401k, life insurance, bank accounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Beneficiary Checkup</h1>
          <p className="text-lg text-muted-foreground">Beneficiary forms beat your will.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The shock most people don&apos;t know</h2>
            <p className="text-sm">Even if your WILL says "everything to current spouse" — your IRA, 401k, life insurance, and "Pay on Death" bank accounts go to whoever&apos;s on the BENEFICIARY FORM. <strong>Beneficiary forms override your will.</strong> Ex-spouses, deceased people, and outdated names regularly inherit by mistake.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accounts with beneficiary forms — UPDATE ALL</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Traditional IRA + Roth IRA</strong> — at brokerage (Vanguard, Fidelity, etc.).</li>
              <li><strong>401(k) / 403(b) / 457</strong> — at employer&apos;s plan provider.</li>
              <li><strong>Pension</strong> — survivor benefit option.</li>
              <li><strong>Life insurance</strong> — primary + contingent beneficiaries.</li>
              <li><strong>Annuities</strong>.</li>
              <li><strong>Bank accounts</strong> — "Pay on Death" (POD) designations.</li>
              <li><strong>Brokerage accounts</strong> — "Transfer on Death" (TOD) designations.</li>
              <li><strong>HSA (Health Savings Account)</strong>.</li>
              <li><strong>529 College Savings</strong>.</li>
              <li><strong>Savings Bonds</strong> — register at TreasuryDirect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual review checklist</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a date you&apos;ll remember (your birthday, January 1, etc.).</li>
              <li>Log into each account.</li>
              <li>Find "Beneficiaries" section (usually under Settings or Profile).</li>
              <li>Verify primary + contingent beneficiaries.</li>
              <li>Update if changes (divorce, deaths, new grandchildren).</li>
              <li>Save screenshot or printout. File with your estate documents.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Always name a CONTINGENT beneficiary</h2>
            <p className="text-sm">If your primary beneficiary dies BEFORE you and you didn&apos;t name a contingent — money goes to your "estate" → probate → may go where you didn&apos;t want.</p>
            <p className="text-sm mt-2">Always name backup. Common: spouse primary, kids equally as contingent.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Special situations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Recently divorced</strong> — most states auto-revoke ex-spouse from beneficiary, but federal accounts (401k, ERISA) may NOT. Update everything.</li>
              <li><strong>Recently widowed</strong> — your spouse may have been beneficiary on YOUR accounts. Update.</li>
              <li><strong>Minor children</strong> — name a TRUST for them, not the kids directly. Otherwise courts hold money until 18.</li>
              <li><strong>Special-needs heir</strong> — name a special-needs trust, NOT them directly. Otherwise they lose disability benefits.</li>
              <li><strong>Charity</strong> — IRAs especially good to leave to charity (no tax impact). Use 100% qualified charitable distribution.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free unclaimed money check</h3>
            <p className="text-sm text-muted-foreground">$70 BILLION sits unclaimed across the US — old life insurance, 401k from past jobs, dormant bank accounts. Search your name (and deceased relatives&apos;) at <strong>missingmoney.com</strong> and <strong>unclaimed.org</strong>. Free, official. Most people find $20-200; some find thousands.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
