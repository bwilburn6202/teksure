import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, AlertTriangle } from 'lucide-react';

export default function SolarPanelDecisionCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Solar Panel Decision Coach — Worth It or Scam? | TekSure" description="Solar salespeople knocking? Plain-English guide to whether solar panels make financial sense, how to vet quotes, and how to avoid the lease trap." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Solar Panel Decision Coach</h1>
          <p className="text-lg text-muted-foreground">Worth it? Sometimes. Trap? Sometimes. Math first.</p>
        </div>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Door-to-door solar salespeople</h2>
                <p className="text-sm">Some are reputable, many are NOT. Use them only as a starting point. Always get 3 quotes from companies YOU find. (See our Door-to-Door Scam Defense.)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When solar makes sense</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You own your home (not renting).</li>
              <li>You plan to stay 7+ years.</li>
              <li>Roof faces south, southeast, or southwest.</li>
              <li>Roof is younger than 10 years (otherwise, replace before solar).</li>
              <li>Few trees shading the roof.</li>
              <li>Your electric bill is over $100/month.</li>
              <li>You can use the federal tax credit (30% through 2032) — need actual tax liability.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy vs lease vs PPA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cash purchase</strong> — best if you have $20-30k. Best return.</li>
              <li><strong>Solar loan</strong> — second-best. You own panels but pay over time.</li>
              <li><strong>Lease / PPA</strong> — solar company owns panels. You "rent" them. Lower upfront cost but tied to your house — can complicate selling. Worse long-term financially.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Push hard against lease/PPA unless you have NO other choice.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get 3 quotes the right way</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Use <strong>EnergySage.com</strong> to compare quotes from vetted installers.</li>
              <li>Add a local installer found on Yelp/Better Business Bureau.</li>
              <li>Add quote from a national: SunRun, Sunpower, Tesla.</li>
              <li>Compare cost per watt — under $3-3.50/watt is competitive.</li>
              <li>Verify the system size matches your usage (don\'t oversell — common scam).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hidden costs and traps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Net metering changes</strong> — many states reduced credits in 2024 (CA NEM 3.0). Run NEW math, not old projections.</li>
              <li><strong>Re-roofing</strong> — solar panels last 25 years. Roof should too. Don\'t install solar on an 18-year-old roof.</li>
              <li><strong>Insurance increase</strong> — your homeowners might rise.</li>
              <li><strong>Property tax</strong> — added panels may raise property tax in some states.</li>
              <li><strong>HOA approval</strong> — required in many.</li>
              <li><strong>Selling the house</strong> — leases complicate it. Owned panels are usually fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free resources</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>EnergySage</strong> — neutral marketplace + education.</li>
              <li><strong>Project Sunroof (Google)</strong> — free roof analysis. project-sunroof.withgoogle.com.</li>
              <li><strong>NREL PVWatts</strong> — free DIY production estimator.</li>
              <li><strong>DSIRE database</strong> — finds state and local solar incentives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most</h3>
            <p className="text-sm text-muted-foreground">If your bill is under $100/month or you\'ll move in 5 years — skip solar. If $200+/month, sunny climate, owning, staying — likely worth investigating with 3 honest quotes. Take 6 months to decide. Real solar pays back over 20 years; never let urgency rush you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
