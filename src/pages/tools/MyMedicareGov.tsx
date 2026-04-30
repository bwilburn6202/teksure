import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function MyMedicareGov() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyMedicare.gov Account Setup | TekSure" description="Manage your Medicare online. Plain-English walkthrough of MyMedicare.gov account features." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyMedicare.gov</h1>
          <p className="text-lg text-muted-foreground">Manage Medicare online.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>medicare.gov</strong>.</li>
              <li>Click "Create Account".</li>
              <li>Verify with Login.gov or ID.me.</li>
              <li>Need: Medicare number, Part B enrollment date.</li>
              <li>Set up 2FA.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See claims (what was billed).</li>
              <li>Order replacement Medicare card.</li>
              <li>See coverage details.</li>
              <li>Compare Part D drug plans.</li>
              <li>Compare Medicare Advantage plans.</li>
              <li>Find doctors / hospitals + ratings.</li>
              <li>Track preventive care due.</li>
              <li>Print summary for tax records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Care Compare tool</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>medicare.gov/care-compare — best part of site.</li>
              <li>Hospital ratings (1-5 stars).</li>
              <li>Nursing home star ratings.</li>
              <li>Dialysis facility comparison.</li>
              <li>Hospice provider info.</li>
              <li>Doctor + clinician ratings.</li>
              <li>Always check before choosing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan Finder annually</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Every October-December — review Part D + Advantage plans.</li>
              <li>Plan Finder shows which covers YOUR exact medications.</li>
              <li>Compare total annual cost.</li>
              <li>Switch during AEP if cheaper plan exists.</li>
              <li>Many seniors save $200-1,000/year by switching plans.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">SHIP for help</h3>
            <p className="text-sm text-muted-foreground">If overwhelmed by Medicare.gov — SHIP counselors do this FREE for you. shiphelp.org. Find local SHIP office. Sit with counselor 30 min, they navigate site + plan finder for your situation. Best free help available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
