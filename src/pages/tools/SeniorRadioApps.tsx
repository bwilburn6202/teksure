import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorRadioApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Radio Apps for Senior Listeners | TekSure" description="iHeartRadio, TuneIn, SiriusXM apps for senior radio fans. Talk + music + sports." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Radio Apps</h1>
          <p className="text-lg text-muted-foreground">Free radio + Sirius for car listening.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iHeartRadio (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app — local FM/AM stations.</li>
              <li>Listen to radio anywhere via internet.</li>
              <li>Hometown stations on vacation.</li>
              <li>Talk + music genres.</li>
              <li>News + sports stations.</li>
              <li>Most popular radio app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TuneIn Radio</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100,000+ stations worldwide.</li>
              <li>Free with optional Premium.</li>
              <li>NPR + BBC + foreign stations.</li>
              <li>Sports — local + national.</li>
              <li>Premium $9.99/month — MLB, NFL, no ads.</li>
              <li>Free version sufficient for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SiriusXM</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Subscription radio — $10–$25/month.</li>
              <li>Often free in new cars first 3 months.</li>
              <li>Howard Stern, Andy Cohen, etc.</li>
              <li>Decade music channels.</li>
              <li>Best for car listening.</li>
              <li>App works without car radio too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SiriusXM senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Negotiate rate — call when subscription expires.</li>
              <li>Often willing to discount $5–$10.</li>
              <li>40s, 50s, 60s, 70s music channels.</li>
              <li>Sirius app works on phone too.</li>
              <li>Stream while walking.</li>
              <li>Family plan available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">NPR + BBC apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NPR One — all NPR content free.</li>
              <li>BBC Sounds — UK news + dramas.</li>
              <li>NPR Live — local NPR station.</li>
              <li>Curated content based on tastes.</li>
              <li>Free, ad-free.</li>
              <li>High quality journalism.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listen on smart speaker</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, play [station] on iHeartRadio.&quot;</li>
              <li>&quot;Hey Google, play NPR.&quot;</li>
              <li>&quot;Hey Siri, play KQED.&quot;</li>
              <li>HomePod / Echo / Nest Audio.</li>
              <li>Better sound than phone.</li>
              <li>Hands-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">iHeartRadio free is plenty</h3>
            <p className="text-sm text-muted-foreground">For most seniors, free iHeartRadio is enough. Listen to your hometown stations even when traveling. NPR app for news. BBC app for international news. SiriusXM only worth paying for if you commute long distances and love their decade music or talk shows. Try free options first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
