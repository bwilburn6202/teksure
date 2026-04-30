import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserMinus } from 'lucide-react';

export default function DeleteMeForSeniorPrivacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DeleteMe + Privacy Cleanup for Seniors | TekSure" description="DeleteMe service removes your data from internet. Senior privacy cleanup deep dive." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserMinus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DeleteMe</h1>
          <p className="text-lg text-muted-foreground">Remove your data from data brokers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What DeleteMe does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Removes you from people-search sites.</li>
              <li>Spokeo, BeenVerified, etc.</li>
              <li>$129/year per person.</li>
              <li>Continues quarterly.</li>
              <li>Reports show what was removed.</li>
              <li>Reduces senior scam targeting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why important for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Scammers find seniors via these sites.</li>
              <li>Your address + age + family there.</li>
              <li>Reduces robocalls.</li>
              <li>Less junk mail.</li>
              <li>Identity theft prevention.</li>
              <li>Privacy = safety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY removal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Each site has opt-out form.</li>
              <li>Tedious — 50+ sites.</li>
              <li>Free if you have time.</li>
              <li>Need to redo every 6 months.</li>
              <li>DeleteMe automates this.</li>
              <li>Worth $129/year for time saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Incogni — $7-15/month.</li>
              <li>Privacy Bee — competitive.</li>
              <li>OneRep — similar.</li>
              <li>Compare features + price.</li>
              <li>Annual subscriptions cheaper.</li>
              <li>All similar quality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manual key sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Whitepages — biggest, opt out free.</li>
              <li>Spokeo, BeenVerified.</li>
              <li>TruePeopleSearch.</li>
              <li>FastPeopleSearch.</li>
              <li>Each has opt-out URL.</li>
              <li>Search &quot;[site] opt out.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family + friends</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell family what info to share publicly.</li>
              <li>Don&apos;t post your address on social media.</li>
              <li>Don&apos;t announce vacations.</li>
              <li>Don&apos;t answer family questionnaires.</li>
              <li>Privacy is family practice.</li>
              <li>Talk about it openly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth $129/year for safety</h3>
            <p className="text-sm text-muted-foreground">For seniors targeted by scammers, DeleteMe&apos;s $129/year is good investment. Removes you from databases scammers use to target. Combined with credit freeze + 2FA + privacy practices, makes you much harder to scam. Many seniors who&apos;ve been victims wish they&apos;d started sooner.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
