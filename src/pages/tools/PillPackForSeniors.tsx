import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function PillPackForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PillPack by Amazon for Seniors | TekSure" description="PillPack pre-sorts your medications by dose. Reduces missed doses for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PillPack</h1>
          <p className="text-lg text-muted-foreground">Pre-sorted medications. By Amazon.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What PillPack does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sorts all your meds into single-dose packets.</li>
              <li>Each packet labeled with date + time.</li>
              <li>Just tear open + take.</li>
              <li>Eliminates pill organizers + sorting confusion.</li>
              <li>Delivered every 2 weeks free.</li>
              <li>Great for those on 5+ medications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these patients</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>5+ daily medications.</li>
              <li>Medications taken at multiple times daily.</li>
              <li>Memory difficulties with sorting.</li>
              <li>Caregivers managing parent&apos;s meds.</li>
              <li>Recently discharged from hospital.</li>
              <li>Living alone with complex medication routine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to PillPack.com or call 855-745-5725.</li>
              <li>List all medications.</li>
              <li>Provide insurance or cash payment.</li>
              <li>PillPack contacts each prescriber.</li>
              <li>First shipment arrives in 1–2 weeks.</li>
              <li>Then auto-refill every 2 weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same as any pharmacy — copays apply.</li>
              <li>Free delivery — no extra charge.</li>
              <li>Insurance accepted — Medicare Part D, most plans.</li>
              <li>Cash prices for non-insured.</li>
              <li>No service fee for the sorting.</li>
              <li>Tax-free dispense pricing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What&apos;s included</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Prescription medications.</li>
              <li>Vitamins + supplements (optional).</li>
              <li>Some over-the-counter meds.</li>
              <li>Liquid + creams shipped separately, not in packets.</li>
              <li>Insulin + refrigerated meds shipped separately.</li>
              <li>Most pills go in single-dose packets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For caregivers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You can manage parent&apos;s account.</li>
              <li>Receive shipping notifications.</li>
              <li>Track medication adherence.</li>
              <li>Talk to pharmacist about parent&apos;s questions.</li>
              <li>Reduces caregiving stress significantly.</li>
              <li>Adult children love this for elderly parents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for 5+ medications</h3>
            <p className="text-sm text-muted-foreground">If you take 5 or more medications daily, PillPack is genuinely transformative. No more weekly pill sorting. No more forgetting if you took your morning dose. Each packet has the date and time printed. You just tear and take. Many adult children set up PillPack for their elderly parents — peace of mind that medications are being taken correctly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
