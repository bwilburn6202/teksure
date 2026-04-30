import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function MedicareAdvantageCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Advantage Plan Comparison for Seniors | TekSure" description="Compare Medicare Advantage plans online. Find the best fit for your needs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Advantage</h1>
          <p className="text-lg text-muted-foreground">Compare plans online.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare.gov tool</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Official plan finder.</li><li>Enter your zip code.</li><li>Add your medications.</li><li>See covered drugs + costs.</li><li>Free to use.</li><li>No salesperson pressure.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What to compare</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Monthly premium.</li><li>Copays for doctor visits.</li><li>Prescription drug coverage.</li><li>Network — your doctors in?</li><li>Out-of-pocket maximum.</li><li>Star rating (1-5).</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SHIP counselors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free state counseling.</li><li>Unbiased — not selling plans.</li><li>1-877-839-2675.</li><li>Volunteer trained experts.</li><li>Help compare options.</li><li>Annual enrollment guidance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Open enrollment</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Oct 15 - Dec 7 each year.</li><li>Switch plans for next year.</li><li>Review every year.</li><li>Plans change benefits.</li><li>Don&apos;t miss window.</li><li>New coverage Jan 1.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch out for</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$0 premium can mean high copays.</li><li>Limited networks.</li><li>Prior auth requirements.</li><li>Pushy sales tactics.</li><li>Misleading TV ads.</li><li>Read the fine print.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>List your doctors first.</li><li>List medications.</li><li>Check both before signing.</li><li>Bring family member.</li><li>Read all paperwork.</li><li>Ask SHIP for second opinion.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Medicare.gov + SHIP = best combo</h3><p className="text-sm text-muted-foreground">Use Medicare.gov plan finder to narrow options. Then call free SHIP counselor for unbiased advice. Avoid TV-ad agents who push specific plans. The right plan saves seniors $1,000-$5,000/year. Spend 1 hour comparing — pays off enormously.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
