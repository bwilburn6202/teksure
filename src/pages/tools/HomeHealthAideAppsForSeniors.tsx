import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus } from 'lucide-react';

export default function HomeHealthAideAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Health Aide Apps for Seniors | TekSure" description="Find home health aides. Senior caregiver hire apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserPlus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Health Aides</h1>
          <p className="text-lg text-muted-foreground">Hire senior care apps.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Care.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Find senior caregivers.</li><li>Background checks.</li><li>Free signup.</li><li>$40/mo Premium.</li><li>Senior local matching.</li><li>Trusted brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Honor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App-based home care.</li><li>Vetted aides.</li><li>Track via app.</li><li>Senior tech-forward.</li><li>$25-$35/hour.</li><li>Backup if no-show.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local agencies</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Visiting Angels.</li><li>Home Instead.</li><li>Comfort Keepers.</li><li>Senior trusted brands.</li><li>$25-$40/hour.</li><li>Background checked.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare coverage</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skilled nursing — yes.</li><li>Home health aide — limited.</li><li>Medicaid more.</li><li>Senior verify benefits.</li><li>Often out-of-pocket.</li><li>Plan financially.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Background check.</li><li>References check.</li><li>Trial period.</li><li>Senior comfort matters.</li><li>Same person consistent.</li><li>Family involved.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Independent contractor risks.</li><li>Insurance + bonding.</li><li>Tax withholding.</li><li>Agency safer for seniors.</li><li>Higher cost worth it.</li><li>Family helps decide.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Agency care = senior safety</h3><p className="text-sm text-muted-foreground">Senior home aides best from agencies (Visiting Angels, Home Instead) — bonded, insured, vetted. Higher cost worth safety. Or Care.com direct hire if budget. Honor app newer tech option. Medicare limited — usually out-of-pocket. Worth the investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
