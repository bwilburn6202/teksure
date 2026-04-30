import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function SeniorWoodworkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Woodworking Apps + Resources for Seniors | TekSure" description="Plan and build projects safely. Woodworking apps for senior hobbyists." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Woodworking</h1>
          <p className="text-lg text-muted-foreground">Apps for senior makers.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SketchUp Free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free 3D modeling.</li><li>Plan furniture before cutting.</li><li>Browser-based.</li><li>Tutorials abundant.</li><li>Avoid wasted lumber.</li><li>Senior planning friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cut Calculator</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>CutList Optimizer.</li><li>Free apps.</li><li>Maximize lumber yield.</li><li>Reduce waste.</li><li>Save money.</li><li>Less math in head.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plan sources</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ana White — free plans.</li><li>Wood Magazine.</li><li>Fine Woodworking ($).</li><li>Pinterest browsing.</li><li>YouTube walkthroughs.</li><li>Senior project library.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safety tech</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SawStop saw — magnetic stop.</li><li>Push sticks always.</li><li>Hearing protection — Bluetooth.</li><li>Dust collection — bucket vacuum.</li><li>Magnifier glasses.</li><li>Senior reaction time slower.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stumpy Nubs — senior favorite.</li><li>Wood Whisperer.</li><li>Steve Ramsey — beginner.</li><li>Free instruction.</li><li>Watch before doing.</li><li>Pause + replay anytime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior-friendly setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stool for sitting work.</li><li>Anti-fatigue mat.</li><li>Heat in shop winter.</li><li>Good lighting.</li><li>Take breaks.</li><li>Don&apos;t work tired.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free SketchUp = senior wood saver</h3><p className="text-sm text-muted-foreground">Free SketchUp + free Ana White plans + YouTube videos = no need for $300 woodworking course. Plan in 3D before cutting. Save lumber + frustration. Many senior workshops thrive on free digital tools. Woodworking keeps mind + body active for decades.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
