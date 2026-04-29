import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plug } from 'lucide-react';

export default function ElectricalBasicsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Electrical Basics for Seniors | TekSure" description="Safe DIY electrical. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Electrical Basics</h1>
          <p className="text-lg text-muted-foreground">Stay safe. Know your limits.</p>
        </div>

        <Card className="mb-4 border-red-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-red-700">SAFETY FIRST</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always shut off breaker before electrical work.</li>
              <li>Voltage tester ($15) — verify off.</li>
              <li>Only work when dry hands + dry floor.</li>
              <li>Some tasks need licensed electrician — don&apos;t risk.</li>
              <li>Electrocution risk = REAL.</li>
              <li>Senior bone fragility = falls during work risky.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find your breaker box</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Usually basement, garage, or utility room.</li>
              <li>Label every breaker.</li>
              <li>Test which breaker controls each room.</li>
              <li>Have someone yell &quot;off!&quot; while you flip.</li>
              <li>Photograph + label.</li>
              <li>Quick reference if outage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY safe tasks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Replace lightbulb</strong> — anyone can.</li>
              <li><strong>Replace electrical outlet cover</strong>.</li>
              <li><strong>Replace switch plate</strong>.</li>
              <li><strong>Replace lamp cord</strong>.</li>
              <li><strong>Reset GFCI outlet</strong>.</li>
              <li><strong>Reset breaker</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tasks for electrician</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace outlet (involve wires).</li>
              <li>Install new outlet.</li>
              <li>Replace ceiling fan.</li>
              <li>Replace circuit breaker.</li>
              <li>Add new circuit.</li>
              <li>Anything in panel box.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common issues</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tripped breaker</strong> — flip off then on.</li>
              <li><strong>Dead outlet</strong> — check GFCI button.</li>
              <li><strong>Flickering lights</strong> — bulb or wiring.</li>
              <li><strong>Buzzing breaker</strong> — call electrician immediately.</li>
              <li><strong>Burning smell</strong> — turn off main, evacuate, call 911.</li>
              <li>Hot outlets = serious problem.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use surge protectors (not power strips).</li>
              <li>Don&apos;t overload outlets.</li>
              <li>Replace frayed cords immediately.</li>
              <li>GFCI in bathrooms + kitchen.</li>
              <li>Check smoke + CO detectors monthly.</li>
              <li>Outlet covers if grandkids visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hire wisely</h3>
            <p className="text-sm text-muted-foreground">Licensed electrician = $100-200/hr. Get 3 quotes for big jobs. Ask for license + insurance. Senior discount common. Pay only after work complete + tested. Some areas free electrician for low-income seniors. Local AAA + senior services. Don&apos;t risk DIY electrical beyond your skill.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
