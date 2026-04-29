import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldX } from 'lucide-react';

export default function IdentityTheftRecovery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Identity Theft Recovery Plan | TekSure" description="Step-by-step plain-English plan for recovering from identity theft. Free FTC tools, credit freezes, fraud reports." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Identity Theft Recovery</h1>
          <p className="text-lg text-muted-foreground">Step-by-step. Free. Use this.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First 24 hours</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>identitytheft.gov</strong> (FTC). Fills out everything for you.</li>
              <li>Place fraud alert with credit bureaus (free, online, 1 call).</li>
              <li>Call your bank/credit card companies. Cancel cards. Get new ones.</li>
              <li>Change passwords on email + financial accounts.</li>
              <li>File police report (online or in person).</li>
              <li>Keep records — every call, every email.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First week</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pull all 3 credit reports (annualcreditreport.com — free).</li>
              <li>Note unfamiliar accounts. Dispute each.</li>
              <li>Place CREDIT FREEZE at all 3 bureaus (free, separate from fraud alert).</li>
              <li>Notify Social Security if SSN compromised — 1-800-269-0271.</li>
              <li>IRS — get an IP PIN (Identity Protection PIN) free at IRS.gov.</li>
              <li>If checks stolen — close checking, open new.</li>
              <li>Tell family — they may be targeted next.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First month</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Follow up on EVERY dispute in writing (certified mail).</li>
              <li>Re-check credit reports for new fraud.</li>
              <li>Watch utility, medical, mortgage statements.</li>
              <li>Watch for jury duty notices in someone else&apos;s name (a sign).</li>
              <li>Watch your mail — fraudsters often redirect.</li>
              <li>Save all paperwork in dedicated folder for at least 3 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>identitytheft.gov</strong> — FTC&apos;s recovery plan, customized to your situation.</li>
              <li><strong>Identity Theft Resource Center</strong> — 1-888-400-5530 free help.</li>
              <li><strong>AARP Fraud Watch Helpline</strong> — 1-877-908-3360 free for 50+.</li>
              <li><strong>Senior Medicare Patrol</strong> — Medicare-specific fraud.</li>
              <li><strong>Local victim advocates</strong> — through police department.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t pay LifeLock or similar</h3>
            <p className="text-sm text-muted-foreground">$10-30/mo "identity theft protection" services do mostly what you can do for FREE — credit freeze + monitoring. Skip them. Spend money on credit freeze (free) + IP PIN (free) + identitytheft.gov (free).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
