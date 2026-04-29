import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function FacebookGroupsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Groups for Seniors | TekSure" description="Find community on Facebook. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Groups</h1>
          <p className="text-lg text-muted-foreground">Communities for every interest.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Facebook Groups?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Connect with like-minded.</li>
              <li>Less drama than main feed.</li>
              <li>Niche topics + hobbies.</li>
              <li>Local + global communities.</li>
              <li>Free.</li>
              <li>Senior-friendly options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hometown alumni groups.</li>
              <li>Hobby groups (knitting, woodworking).</li>
              <li>Health condition support.</li>
              <li>Local Buy/Sell/Trade.</li>
              <li>Senior travel groups.</li>
              <li>Genealogy + family research.</li>
              <li>Bird watching, gardening clubs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search bar top — type interest.</li>
              <li>&quot;Groups&quot; tab on profile.</li>
              <li>&quot;Discover&quot; tab.</li>
              <li>Friends&apos; groups visible.</li>
              <li>Click &quot;Join&quot; or request.</li>
              <li>Some private — admin approves.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read group rules before posting.</li>
              <li>Lurk first — see culture.</li>
              <li>Don&apos;t share personal info publicly.</li>
              <li>Beware scammers in marketplace groups.</li>
              <li>Report rule-breakers to admin.</li>
              <li>Leave anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specific senior groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Senior Travel Buddies&quot;.</li>
              <li>&quot;Aging in Place&quot;.</li>
              <li>&quot;Solo Senior Adventures&quot;.</li>
              <li>&quot;Caregivers Support&quot;.</li>
              <li>&quot;Senior Cooking Recipes&quot;.</li>
              <li>&quot;Grandparents Connection&quot;.</li>
              <li>&quot;Retired Folks of [your state]&quot;.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Engage well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Introduce yourself first.</li>
              <li>Ask questions.</li>
              <li>Share helpful info.</li>
              <li>Be kind — these are real people.</li>
              <li>Don&apos;t spam.</li>
              <li>Genuine connections form.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Marketplace caution</h3>
            <p className="text-sm text-muted-foreground">Local Facebook Marketplace + Buy/Sell groups — meet in public, daylight. Bring family. Cash only. Inspect before paying. Many scams. But also great deals. Stick to local trades. International &quot;buyer&quot; = scammer. Free pickup of working items. Senior money saver if cautious.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
