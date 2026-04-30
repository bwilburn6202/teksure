import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function PassportRenewalGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passport Renewal Guide for Seniors | TekSure" description="Renew US passport online. Step-by-step for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passport Renewal</h1>
          <p className="text-lg text-muted-foreground">Online + by mail.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eligible to renew</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Have current passport.</li><li>Issued after age 16.</li><li>Issued in last 15 years.</li><li>Same name (or proof of change).</li><li>Undamaged.</li><li>If yes — easy renewal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Online renewal (NEW)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Travel.state.gov.</li><li>No appointment needed.</li><li>Upload photo.</li><li>Pay online.</li><li>Mail old passport.</li><li>Get new one in 6-8 weeks.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130 standard.</li><li>$60 expedited (extra).</li><li>$200 1-2 day rush at agency.</li><li>Photo $15 at CVS/Walgreens.</li><li>Total ~$145 standard.</li><li>10-year passport.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo requirements</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Recent (within 6 months).</li><li>Plain white background.</li><li>No glasses.</li><li>No smiling.</li><li>2x2 inches.</li><li>CVS/Walgreens does it right.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Timing tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many countries need 6 months left.</li><li>Renew early.</li><li>Don&apos;t wait until expires.</li><li>Senior trip planning important.</li><li>Apply 9-12 months before trip.</li><li>Avoid expedited fee.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lost or expired old</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Need to apply in person.</li><li>Bring birth certificate.</li><li>USPS or county clerk.</li><li>Form DS-11.</li><li>2 trips usually.</li><li>Allow 8-11 weeks.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Online passport renewal saves trip</h3><p className="text-sm text-muted-foreground">New 2026 online renewal at travel.state.gov is the easiest passport renewal ever. Skip post office trip. Upload photo. Mail old passport in. New passport in 6-8 weeks. Renew now even without trip planned — peace of mind for spontaneous travel.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
