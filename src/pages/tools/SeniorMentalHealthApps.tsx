import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function SeniorMentalHealthApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Mental Health Apps | TekSure" description="Therapy + mood tracking apps for senior wellness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mental Health Apps</h1>
          <p className="text-lg text-muted-foreground">Senior wellness.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Talkspace + BetterHelp</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$240-$400/mo therapy.</li><li>Senior online convenient.</li><li>Match therapist.</li><li>Video, phone, text.</li><li>Insurance some accepts.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daylio mood</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free.</li><li>30-sec daily entry.</li><li>Senior pattern recognition.</li><li>Doctor share.</li><li>Pre-therapy data.</li><li>Worth daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sanvello CBT</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$9/month.</li><li>Cognitive behavioral therapy.</li><li>Senior anxiety + depression.</li><li>Self-paced.</li><li>Some insurance.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Crisis hotlines</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>988 — suicide + crisis.</li><li>Free 24/7.</li><li>Senior text or call.</li><li>Friendly listener.</li><li>Save number.</li><li>Critical resource.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior depression real</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Common but treatable.</li><li>Don&apos;t accept as aging.</li><li>Senior worth treating.</li><li>Talk doctor.</li><li>Medication helps.</li><li>Therapy helps.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">In-person better</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Local therapist.</li><li>Medicare covers.</li><li>Senior connection deeper.</li><li>Group therapy options.</li><li>Worth searching.</li><li>Don&apos;t avoid.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">988 + Daylio + therapy = senior mental health</h3><p className="text-sm text-muted-foreground">Senior mental health: free 988 crisis line + free Daylio mood tracking + Medicare-covered local therapy = comprehensive support. Online options BetterHelp $240+/mo if convenient. Don&apos;t accept depression as aging — treatable. Worth seeking help.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
