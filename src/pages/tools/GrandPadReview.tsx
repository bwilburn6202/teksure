import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function GrandPadReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GrandPad Honest Review | TekSure" description="GrandPad simplified senior tablet — pros, cons, and alternatives. Plain-English honest take." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GrandPad Review</h1>
          <p className="text-lg text-muted-foreground">Simplified tablet for non-tech seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What GrandPad is</h2>
            <p className="text-sm">8" tablet specifically built for non-tech seniors. Pre-loaded with photos from family. Built-in cellular (no wifi setup). Comes with stylus + stand. Subscription ~$80/month. Family manages from phone.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best parts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO setup — arrives ready, family pre-loaded.</li>
              <li>Built-in 4G — no wifi to troubleshoot.</li>
              <li>BIG icons. NO drop-down menus. NO confusing settings.</li>
              <li>Family-only social network — no spam, no scams.</li>
              <li>Photos from family arrive automatically.</li>
              <li>Video calls + voice are simple.</li>
              <li>News, weather, music, games — curated.</li>
              <li>24/7 senior-trained support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drawbacks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$80/month subscription = $960/year. Adds up.</li>
              <li>Walled garden — limited to what GrandPad allows.</li>
              <li>No Amazon, no app store, no real Internet.</li>
              <li>If senior gets curious + wants more — outgrows it.</li>
              <li>You&apos;re tied to GrandPad service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When GrandPad is right</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior with dementia / cognitive issues.</li>
              <li>NEVER used tech and never will master a regular tablet.</li>
              <li>Family doesn&apos;t want to provide tech support.</li>
              <li>Senior&apos;s biggest need is video calls + photos from family.</li>
              <li>Cost not big concern.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPad + Apple Family Sharing</strong> — adult kids manage. ~$330 + cellular plan.</li>
              <li><strong>Echo Show 8</strong> — $150. Photo frame + video calls + Alexa.</li>
              <li><strong>Lively Jitterbug Smart 4</strong> — phone form factor.</li>
              <li><strong>Konnekt Captioning Videophone</strong> — pure video phone, captions calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Honest take</h3>
            <p className="text-sm text-muted-foreground">GrandPad is genuinely good for severely-non-tech seniors. But $960/year is steep. Echo Show 8 + photo frame ($200 total) replaces 70% of GrandPad use cases. Try those first if budget is concern.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
