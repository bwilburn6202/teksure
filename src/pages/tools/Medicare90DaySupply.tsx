import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function Medicare90DaySupply() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare 90-Day Supply Strategy for Seniors | TekSure" description="Save money with 90-day prescriptions through Medicare Part D mail-order pharmacies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">90-Day Mail Order</h1>
          <p className="text-lg text-muted-foreground">Pay 1 copay for 3 months of medication.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why 90-day supply?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most Medicare Part D plans offer this.</li>
              <li>Pay 1–2 copays instead of 3 for same meds.</li>
              <li>Annual savings: $50–$300+ depending on meds.</li>
              <li>Fewer pharmacy trips.</li>
              <li>Mail-order delivery typical.</li>
              <li>Only available for maintenance medications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call your Medicare Part D plan.</li>
              <li>Ask: &quot;What&apos;s your mail-order pharmacy?&quot;</li>
              <li>They&apos;ll connect you to mail-order or transfer Rx.</li>
              <li>Doctor sends 90-day prescription.</li>
              <li>First shipment in 7–10 days.</li>
              <li>Auto-refills every 90 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major mail-order pharmacies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Express Scripts (often AARP/UnitedHealth).</li>
              <li>OptumRx (often UnitedHealth).</li>
              <li>CVS Caremark (often Aetna/SilverScript).</li>
              <li>Humana Pharmacy.</li>
              <li>Cigna Home Delivery.</li>
              <li>Each plan partners with one specific pharmacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sample savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tier 1 generic: $0/90 days vs $1/30 days = $12/year saved.</li>
              <li>Tier 2 brand: $25/90 days vs $25/30 days = $300/year saved.</li>
              <li>Tier 3 specialty: $40/90 days vs $40/30 days = $480/year saved.</li>
              <li>5 medications switched = $1,500+ savings.</li>
              <li>Worth checking your specific plan&apos;s structure.</li>
              <li>Some plans charge 2 copays for 90 days, still save 1.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What can&apos;t be 90-day</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Antibiotics + short-term meds.</li>
              <li>Controlled substances often limited.</li>
              <li>Recently-started medications (need to test first).</li>
              <li>Some specialty medications.</li>
              <li>Anything requiring close monitoring.</li>
              <li>Maintenance meds work best for 90-day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for success</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order 7–10 days before running out.</li>
              <li>Auto-refill enrollment helps.</li>
              <li>Verify shipping address always current.</li>
              <li>Have backup 30-day at local pharmacy if possible.</li>
              <li>Mail-order keeps refills tracked centrally.</li>
              <li>Easier for adult children to help manage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Call your Part D plan today</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re on Medicare Part D and not using 90-day mail-order for maintenance medications, you&apos;re probably overpaying. Call the number on your plan card today and ask: &quot;What&apos;s the mail-order pharmacy savings on my drugs?&quot; The 10-minute call could save $500+/year. Many seniors don&apos;t know this option exists.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
