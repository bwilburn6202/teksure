import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function ProstateScreeningSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Prostate Screening for Senior Men | TekSure" description="PSA test pros + cons. Plain-English prostate screening for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Prostate Screening</h1>
          <p className="text-lg text-muted-foreground">Talk to doctor. Decide together.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two main tests</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PSA blood test</strong> — measures prostate-specific antigen.</li>
              <li><strong>DRE (digital rectal exam)</strong> — physical exam.</li>
              <li>Combined for best detection.</li>
              <li>Both quick.</li>
              <li>Discuss with doctor — controversies exist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to screen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Age 50</strong> — start discussion average risk.</li>
              <li><strong>Age 45</strong> — Black men, family history.</li>
              <li><strong>Age 40</strong> — strong family history.</li>
              <li><strong>Age 70+</strong> — discuss continuing.</li>
              <li>Stop if life expectancy under 10 years.</li>
              <li>USPSTF: shared decision-making 55-69.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PSA controversy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>High PSA doesn&apos;t mean cancer (also BPH, infection).</li>
              <li>False positives common.</li>
              <li>Leads to unnecessary biopsies.</li>
              <li>But catches early cancers.</li>
              <li>Discuss YOUR risks with doctor.</li>
              <li>Family history changes calculus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch + wait</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many slow-growing prostate cancers.</li>
              <li>Active surveillance — monitor without immediate treatment.</li>
              <li>Many die WITH not FROM prostate cancer.</li>
              <li>Treatment side effects (incontinence, ED) significant.</li>
              <li>Aggressive cancers need treatment.</li>
              <li>Decision is personal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptoms to mention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Trouble urinating.</li>
              <li>Weak / interrupted stream.</li>
              <li>Frequent urination at night.</li>
              <li>Blood in urine or semen.</li>
              <li>Pelvic / lower back pain.</li>
              <li>Erectile dysfunction.</li>
              <li>Many = BPH not cancer, but check.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Make informed decision</h3>
            <p className="text-sm text-muted-foreground">Read American Cancer Society guidelines (cancer.org). Discuss with primary doctor. Consider urologist consultation. Strong family history = screen. Most senior men benefit from at least baseline PSA. Discuss every visit. Free with Medicare.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
