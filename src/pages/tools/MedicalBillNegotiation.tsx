import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function MedicalBillNegotiation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Bill Negotiation for Seniors | TekSure" description="Cut medical bills 30-50%. Plain-English negotiation guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Bill Negotiation</h1>
          <p className="text-lg text-muted-foreground">80% of bills have errors. Always negotiate.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1: Get itemized bill</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Demand itemized bill (not summary).</li>
              <li>Federal law requires it free.</li>
              <li>Lists every service + code + charge.</li>
              <li>50-80% have billing errors.</li>
              <li>Look for: duplicate charges, services not received, wrong codes.</li>
              <li>Compare to medical records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2: Verify with insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Match against EOB (Explanation of Benefits).</li>
              <li>Insurance not paying contractually agreed = call them.</li>
              <li>Hospital billed full retail vs negotiated rate?</li>
              <li>In-network providers shouldn&apos;t balance bill.</li>
              <li>No Surprises Act 2022 protects from many surprise bills.</li>
              <li>Dispute to insurance + provider.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3: Negotiate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call billing department — not collection agency.</li>
              <li>Ask for &quot;cash discount&quot; — 30-50% off.</li>
              <li>Mention financial hardship — even if not severe.</li>
              <li>Ask for charity care application.</li>
              <li>Ask for payment plan — 0% interest typical.</li>
              <li>Mention competitor prices (Healthcare Bluebook, FAIR Health).</li>
              <li>Get reduction in writing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charity care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All non-profit hospitals must offer charity care.</li>
              <li>Often 100% forgiveness for low income.</li>
              <li>50%+ for moderate income.</li>
              <li>Apply even after bill.</li>
              <li>Many seniors qualify, don&apos;t apply.</li>
              <li>Hospital website &quot;financial assistance&quot; section.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pro negotiators</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Patient Advocate Foundation</strong> — patientadvocate.org. Free.</li>
              <li><strong>Medical Billing Advocates</strong> — claims professionals. Take 30%.</li>
              <li><strong>BillCutterz</strong> — negotiate any bill. Take % of savings.</li>
              <li>For bills $5K+ may be worth it.</li>
              <li>Or use AI (ChatGPT) to write appeal letter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t do these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t pay before insurance processes.</li>
              <li>Don&apos;t put on credit card unless paying off immediately.</li>
              <li>Don&apos;t ignore — goes to collections + credit damage.</li>
              <li>Don&apos;t pay before negotiating.</li>
              <li>Don&apos;t pay collection agency without verification.</li>
              <li>Medical debt under $500 = no longer on credit (2023+).</li>
              <li>Paid medical debt = removed from credit reports.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save 50% on common care</h3>
            <p className="text-sm text-muted-foreground"><strong>Healthcare Bluebook</strong> + <strong>FAIR Health Consumer</strong> show fair prices. <strong>Sesame Care</strong> + <strong>Mira</strong> — direct-pay clinics often half ER cost. <strong>Costco / Walmart pharmacies</strong> + <strong>GoodRx</strong> save 50%+. Many seniors overpay due to not shopping. Compare always.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
