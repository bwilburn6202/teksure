import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function CreditFreezeHowTo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Freeze — Step-by-Step | TekSure" description="Block ID thieves from opening credit in your name. Plain-English step-by-step for freezing all 3 bureaus — for free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Freeze — Step by Step</h1>
          <p className="text-lg text-muted-foreground">15 minutes. Free. Best protection there is.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <p className="text-sm">A credit freeze locks your credit reports. <strong>No one</strong> can open a new credit card, mortgage, or loan in your name — including you — until you "thaw" it. Best protection against identity theft.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Free since 2018 (federal law).</li>
              <li>Doesn&apos;t hurt your credit score.</li>
              <li>Doesn&apos;t affect existing accounts.</li>
              <li>Doesn&apos;t affect your ability to use cards/loans you already have.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bureau 1 — Equifax</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>equifax.com/personal/credit-report-services</strong>.</li>
              <li>Click "Place a freeze".</li>
              <li>Create account (or sign in).</li>
              <li>Enter SSN, address, DOB. Verify identity (security questions).</li>
              <li>Place freeze. Save the PIN they give you.</li>
              <li><strong>Phone alternative:</strong> 1-800-685-1111.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bureau 2 — Experian</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>experian.com/freeze</strong>.</li>
              <li>Click "Add a security freeze".</li>
              <li>Create account (or sign in).</li>
              <li>Verify identity. Place freeze. Save PIN.</li>
              <li><strong>Phone alternative:</strong> 1-888-397-3742.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bureau 3 — TransUnion</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>transunion.com/credit-freeze</strong>.</li>
              <li>Click "Place a credit freeze".</li>
              <li>Create account.</li>
              <li>Verify identity. Place freeze. Save PIN.</li>
              <li><strong>Phone alternative:</strong> 1-888-909-8872.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bonus — also freeze these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ChexSystems</strong> — banks pull this when opening checking. Freeze at <strong>chexsystems.com</strong>.</li>
              <li><strong>Innovis</strong> — 4th bureau most don&apos;t know. <strong>innovis.com/personal/securityFreeze</strong>.</li>
              <li><strong>NCTUE</strong> — telecom/utility bureau. <strong>nctue.com</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need to thaw</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign back into the bureau&apos;s website.</li>
              <li>Click "Lift" or "Thaw freeze".</li>
              <li>Set duration: temporary (1-30 days) OR permanent.</li>
              <li>Use PIN if requested.</li>
              <li>Effective immediately.</li>
              <li>Re-freeze when done (or it expires automatically with temp option).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save your PINs</h3>
            <p className="text-sm text-muted-foreground">Each bureau gives a unique PIN. WRITE THEM ALL DOWN. Keep with your will or in your password manager. If you lose them, you can recover by mailing in a notarized form — but it takes weeks.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
