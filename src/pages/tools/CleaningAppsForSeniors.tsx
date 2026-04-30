import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function CleaningAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cleaning Apps + Services for Seniors | TekSure" description="Find house cleaners. Senior cleaning service apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cleaning Services</h1>
          <p className="text-lg text-muted-foreground">House cleaning apps.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Handy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Book house cleaning.</li><li>Background-checked.</li><li>$20-$40/hr.</li><li>Senior aging-in-place.</li><li>App schedule.</li><li>Recurring option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Care.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Find local cleaners.</li><li>Background check available.</li><li>Senior services + caregiving.</li><li>$0 free signup.</li><li>Premium options.</li><li>Direct hire.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local hires</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nextdoor app neighbors.</li><li>Recommend cleaners.</li><li>Cheaper than apps.</li><li>Personal references.</li><li>Senior trust.</li><li>Free + safer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tipping</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>15-20% if not company.</li><li>$5-$20 cash.</li><li>Recurring relationship.</li><li>Senior generous.</li><li>Holiday bonus.</li><li>Quality cleaner stays.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Frequency</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bi-weekly typical.</li><li>$80-$150 per visit.</li><li>Deep clean monthly.</li><li>Senior maintain home.</li><li>Health benefit.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Background check.</li><li>Bonded + insured ideal.</li><li>Don&apos;t leave keys with stranger.</li><li>Senior safety first.</li><li>Same person each time.</li><li>Build trust.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Cleaning service = senior aging-in-place</h3><p className="text-sm text-muted-foreground">$80 bi-weekly cleaning = senior aging-in-place. Less back/knee pain. Cleaner home better mood. Find via Nextdoor (neighbor referral safest) or Handy. Tip generously. Best senior daily life upgrade. Worth budget.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
