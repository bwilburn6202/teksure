import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function PetInsuranceComparison() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Insurance Comparison for Senior Pet Owners | TekSure" description="Compare Healthy Paws, Embrace, Trupanion, ASPCA pet insurance providers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Insurance Compared</h1>
          <p className="text-lg text-muted-foreground">Best providers for senior pet owners.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Healthy Paws</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One simple plan — easy to understand.</li>
              <li>Unlimited annual benefit.</li>
              <li>90% reimbursement option.</li>
              <li>Senior-friendly enrollment until age 14.</li>
              <li>Fast claims processing.</li>
              <li>Highly rated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Embrace Pet Insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Covers some pre-existing conditions if cured.</li>
              <li>Diminishing deductible for healthy pets.</li>
              <li>Wellness add-on available.</li>
              <li>Customizable plans.</li>
              <li>Good for senior pets.</li>
              <li>Available all 50 states.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trupanion</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pays vet directly (in some clinics).</li>
              <li>No annual benefit cap.</li>
              <li>90% reimbursement standard.</li>
              <li>$0 to specific deductible options.</li>
              <li>Higher monthly cost.</li>
              <li>Good for serious medical issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ASPCA Pet Insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Affiliated with the ASPCA.</li>
              <li>Wellness packages available.</li>
              <li>10% multi-pet discount.</li>
              <li>Reasonable senior pet pricing.</li>
              <li>Good for routine + accident coverage.</li>
              <li>Underwritten by Crum &amp; Forster.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost factors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pet age — older = much higher premiums.</li>
              <li>Breed — purebreds cost more.</li>
              <li>Location — varies by state.</li>
              <li>Coverage level — accident-only cheapest.</li>
              <li>Deductible — higher = lower premium.</li>
              <li>Reimbursement % — 70-90% options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to skip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pet over 10-12 years old.</li>
              <li>Pre-existing conditions excluded.</li>
              <li>Premiums often $80-$150+/month senior pet.</li>
              <li>Self-fund with savings often better.</li>
              <li>CareCredit for emergencies.</li>
              <li>Math the cost-benefit carefully.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Healthy Paws for new pets</h3>
            <p className="text-sm text-muted-foreground">If you adopt a young pet (under 5), Healthy Paws is widely considered the best value. Simple plan, unlimited annual coverage, fast claims. For older pets you already own (8+), pet insurance often costs more than it saves due to age-based premiums + pre-existing exclusions. Self-insurance with $50/month savings often better.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
