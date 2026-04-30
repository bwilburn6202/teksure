import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function PBSPassportForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PBS Passport for Senior Viewers | TekSure" description="PBS Passport gives access to all PBS shows. Best value senior streaming option." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PBS Passport</h1>
          <p className="text-lg text-muted-foreground">Best streaming value for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is PBS Passport?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$60/year donation to local PBS station.</li>
              <li>Full PBS show archive online.</li>
              <li>All current + past shows.</li>
              <li>Stream on phone, tablet, TV.</li>
              <li>Tax-deductible (501c3).</li>
              <li>Supports public broadcasting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you get access to</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Masterpiece — Downton Abbey, Sherlock, Mr. Bates.</li>
              <li>Ken Burns documentaries.</li>
              <li>America&apos;s Test Kitchen + cooking shows.</li>
              <li>Antiques Roadshow.</li>
              <li>Nature + Nova documentaries.</li>
              <li>Frontline investigations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why it&apos;s a great value</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$60/year vs $20+/month for streaming.</li>
              <li>Senior-friendly content focus.</li>
              <li>No clickbait or trash content.</li>
              <li>Educational + entertaining.</li>
              <li>Watch British dramas + documentaries.</li>
              <li>Equivalent to having BritBox + cooking + history.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit your local PBS station website.</li>
              <li>Donate $60+/year.</li>
              <li>Account email connects to Passport.</li>
              <li>Login on PBS app or website.</li>
              <li>Stream on Roku, Apple TV, etc.</li>
              <li>Or watch on phone/tablet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-loved shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Masterpiece Mystery — All Creatures Great and Small.</li>
              <li>Call the Midwife.</li>
              <li>Mr. Bates vs The Post Office.</li>
              <li>Ken Burns&apos; The Civil War, Vietnam War.</li>
              <li>Antiques Roadshow.</li>
              <li>This Old House.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free PBS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>PBS app — recent episodes free.</li>
              <li>Local PBS broadcast — completely free.</li>
              <li>PBS Kids — free for grandkids.</li>
              <li>Passport unlocks full archive.</li>
              <li>Like Netflix for PBS shows.</li>
              <li>Skip if you only watch new episodes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cancel Netflix, get PBS Passport</h3>
            <p className="text-sm text-muted-foreground">Many seniors find PBS Passport ($60/year) replaces Netflix ($240/year), Hulu, and BritBox combined. The shows quality matches HBO. The documentaries beat anything on Netflix. Plus the donation is tax-deductible. Try Masterpiece&apos;s &quot;Downton Abbey&quot; or &quot;All Creatures Great and Small&quot; — most seniors fall in love.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
