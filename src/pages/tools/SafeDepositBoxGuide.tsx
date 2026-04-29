import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SafeDepositBoxGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Safe Deposit Box Guide | TekSure" description="What to keep + avoid. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Safe Deposit Box</h1>
          <p className="text-lg text-muted-foreground">Pros + cons + alternatives.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to KEEP</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birth certificates.</li>
              <li>Marriage certificates.</li>
              <li>Death certificates.</li>
              <li>Adoption papers.</li>
              <li>Property deeds.</li>
              <li>Car titles.</li>
              <li>Original Social Security cards.</li>
              <li>Military records.</li>
              <li>Insurance policy originals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What NOT to keep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Original will</strong> — bank may freeze access.</li>
              <li><strong>Power of attorney</strong> — needed quickly.</li>
              <li><strong>Healthcare directive</strong> — needed in emergency.</li>
              <li><strong>Cash</strong> — not insured.</li>
              <li><strong>Items needed urgently</strong>.</li>
              <li><strong>Passport</strong> if traveling soon.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost + sizing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50-200/yr depending on size.</li>
              <li>3x5 inch — small ($50/yr).</li>
              <li>10x10 inch — medium ($150/yr).</li>
              <li>Larger sizes available.</li>
              <li>Some banks free for premium accounts.</li>
              <li>Annual rental fee.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance reality</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NOT FDIC-insured contents.</li>
              <li>Bank not liable for loss.</li>
              <li>Get separate &quot;valuable items&quot; rider.</li>
              <li>Photo + inventory contents.</li>
              <li>Receipts + appraisals separate.</li>
              <li>Consider for jewelry, coins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Co-signers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add adult child as co-renter.</li>
              <li>They access without your presence.</li>
              <li>Avoid &quot;frozen at death&quot; problem.</li>
              <li>Trust them completely.</li>
              <li>Different names = legal claim.</li>
              <li>Update will accordingly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home safe alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fireproof + waterproof safe ($150-300).</li>
              <li>Bolted to floor.</li>
              <li>Backup of digital scans.</li>
              <li>Avoid theft if hidden.</li>
              <li>Insurance + appraisal copies inside.</li>
              <li>Cheaper long-term.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Digital backup essential</h3>
            <p className="text-sm text-muted-foreground">Whatever&apos;s in safe deposit box — also scan + store in cloud. Family can access digital copy if needed urgently. Originals in box for legal weight. Copies always available. Inventory list updated yearly. Tell trusted family member box location, key location, what&apos;s inside. Backup = peace of mind.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
