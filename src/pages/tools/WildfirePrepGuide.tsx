import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function WildfirePrepGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wildfire Prep for Seniors | TekSure" description="Defensible space + go bag. Plain-English wildfire guide for senior homeowners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wildfire Prep</h1>
          <p className="text-lg text-muted-foreground">Senior evacuation = early evacuation.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Year-round preparation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clear 100 ft &quot;defensible space.&quot;</li>
              <li>Trim trees away from house.</li>
              <li>Remove dry brush.</li>
              <li>Clean gutters of leaves.</li>
              <li>Update roof to fire-resistant.</li>
              <li>Sign up for emergency alerts.</li>
              <li>Plan evacuation routes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Go bag (always packed)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Important documents (deed, ID, insurance, meds list).</li>
              <li>5-7 days of medications.</li>
              <li>Glasses, hearing aids, CPAP.</li>
              <li>Phone + charger.</li>
              <li>$200 cash.</li>
              <li>Water + snacks.</li>
              <li>Pet supplies.</li>
              <li>Sturdy shoes.</li>
              <li>N95 masks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior special prep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>EVACUATE EARLY — don&apos;t wait.</li>
              <li>Tell out-of-state contact your plans.</li>
              <li>Identify pet-friendly shelter.</li>
              <li>Buddy system with neighbor.</li>
              <li>Know hospital with your records.</li>
              <li>Backup oxygen / power for medical equip.</li>
              <li>Senior at-risk lists with fire dept.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If smoke</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stay inside, doors + windows closed.</li>
              <li>HEPA air purifier.</li>
              <li>N95 masks if must go outside.</li>
              <li>Don&apos;t exercise outside.</li>
              <li>AirNow.gov for air quality.</li>
              <li>COPD, asthma — extra precautions.</li>
              <li>Some hotels run as &quot;clean air&quot; refuges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo/video EVERY room before fire season.</li>
              <li>Save inventory in cloud (not just home).</li>
              <li>Replacement cost coverage (not market value).</li>
              <li>Verify wildfire coverage (some carriers drop).</li>
              <li>FAIR plan if uninsurable.</li>
              <li>Document EVERY loss after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Ready.gov/wildfires</strong>. <strong>FEMA app</strong> — alerts. <strong>Watch Duty</strong> app — best wildfire tracking. <strong>Cal Fire</strong> if California. Nextdoor for neighborhood info. Get out early. Don&apos;t lose life trying to save belongings.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
