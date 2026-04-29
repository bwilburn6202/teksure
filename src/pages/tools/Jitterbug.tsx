import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function Jitterbug() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jitterbug Phone Honest Review | TekSure" description="Lively Jitterbug pros + cons. Plain-English honest take + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jitterbug Honest Review</h1>
          <p className="text-lg text-muted-foreground">When Lively works. When alternatives are better.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designed for seniors. Big icons. Clear UI.</li>
              <li>Urgent Response button (24/7) connects to professional operators.</li>
              <li>Simple flip phone option = no internet temptation.</li>
              <li>Health + Safety packages include nurse-on-call, brain games.</li>
              <li>Sold at Best Buy + AARP discounts.</li>
              <li>U.S.-based customer service in plain English.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Network: Verizon-only, T-Mobile-only depending on model.</li>
              <li>Plans $20-50/mo — more than budget MVNO ($15).</li>
              <li>Hardware basic — feels cheaper than mainstream.</li>
              <li>Smart 4 still runs older Android — fewer apps.</li>
              <li>Urgent Response add-on $25-50/mo extra.</li>
              <li>Can&apos;t bring own phone to Lively service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Jitterbug is right</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior who really wants ONLY calls/texts (Flip 2 perfect).</li>
              <li>Lives alone, no nearby family — Urgent Response valuable.</li>
              <li>Limited budget for tech support — Lively support is patient + senior-trained.</li>
              <li>Doesn&apos;t want internet temptation.</li>
              <li>Wants ONE company for phone + emergency + health.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When something else is better</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family already on iPhone — match with iPhone SE for FaceTime ease.</li>
              <li>Want lowest-cost plan — switch to Mint Mobile ($15/mo) with simple Android.</li>
              <li>Tech-curious senior who&apos;d use apps — full iPhone or Pixel.</li>
              <li>Already comfortable with current phone — keep it + add accessibility settings.</li>
              <li>Apple Watch user — Watch alone covers Urgent Response use cases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AARP discount</h3>
            <p className="text-sm text-muted-foreground">Lively (parent of Jitterbug) gives AARP members 5% discount + free activation. Not huge but worth claiming.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
