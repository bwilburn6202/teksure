import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function GoodSamaritanLaws() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Good Samaritan Laws Explained | TekSure" description="When can you help in emergencies without legal risk? Plain-English explainer of state Good Samaritan laws." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Good Samaritan Laws</h1>
          <p className="text-lg text-muted-foreground">Help confidently. Law protects.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What they cover</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All 50 states have Good Samaritan laws.</li>
              <li>Protect those who help in emergencies from being sued.</li>
              <li>Cover: CPR, first aid, helping accident victims, calling 911.</li>
              <li>Standard: act in "good faith" + "reasonable" care.</li>
              <li>NOT covered: gross negligence, payment expected, after-the-fact.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to step in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Someone unconscious or not breathing.</li>
              <li>Choking — Heimlich.</li>
              <li>Severe bleeding — apply pressure.</li>
              <li>Suspected stroke or heart attack — call 911.</li>
              <li>Drowning rescue (if safe to attempt).</li>
              <li>Broken bone immobilization.</li>
              <li>Allergic reaction — help with EpiPen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Red Cross First Aid app</strong> — free. Step-by-step emergency.</li>
              <li><strong>What3Words app</strong> — pinpoint exact location for 911 (down to 3m).</li>
              <li><strong>iPhone Emergency SOS</strong> — hold side button + volume.</li>
              <li><strong>Take CPR class</strong> — Red Cross free or low-cost. Worth taking every 2 years.</li>
              <li><strong>AED training</strong> — many seniors at gyms learn to use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t do procedures you&apos;re not trained for.</li>
              <li>Don&apos;t accept money — voids protection in some states.</li>
              <li>Stop if professional help arrives.</li>
              <li>Don&apos;t move severely injured person unless necessary.</li>
              <li>Don&apos;t give medications to strangers.</li>
              <li>Document what you did + saw — for own records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">CPR + Heimlich for life</h3>
            <p className="text-sm text-muted-foreground">Most adults forget CPR within 2 years of training. Refresher every 1-2 years. Red Cross + American Heart Association both offer. Worth $50-100 every 2 years for muscle memory + confidence.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
