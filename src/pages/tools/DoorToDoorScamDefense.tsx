import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DoorClosed, AlertTriangle } from 'lucide-react';

export default function DoorToDoorScamDefense() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Door-to-Door Scam Defense — Solar, Roof, Septic | TekSure" description="Strangers at your door pushing solar, a 'free' roof inspection, or a septic emergency? Recognize the most common door-to-door scams and how to send them away politely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DoorClosed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Door-to-Door Scam Defense</h1>
          <p className="text-lg text-muted-foreground">A polite no, every time.</p>
        </div>

        <Card className="mb-6 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h2 className="font-bold mb-1">Universal rule</h2>
                <p className="text-sm">Anyone showing up unannounced asking to "inspect" your roof, solar potential, septic, water, or driveway — say no thanks and close the door. Real businesses don\'t cold-canvass neighborhoods. Reputable contractors get work through referrals and Yelp.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The most common door-to-door scams</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">"Free" roof inspection</p>
                <p>They climb on your roof, "find" damage (or create some), then push an insurance claim. Often results in dropped insurance and a bad/expensive repair.</p>
              </div>
              <div>
                <p className="font-bold">Solar panel salesperson</p>
                <p>High-pressure pitch about how solar will "pay for itself". Many lock you into 25-year leases that hurt resale of your home. Get 3 quotes from companies you found, never one at the door.</p>
              </div>
              <div>
                <p className="font-bold">Driveway sealcoating</p>
                <p>"We have leftover material from another job." Spray motor oil + cheap coating. Looks fine for 2 weeks, then peels.</p>
              </div>
              <div>
                <p className="font-bold">Tree-trimming</p>
                <p>Storm follow-up. Trims trees badly, demands cash up front, leaves a mess.</p>
              </div>
              <div>
                <p className="font-bold">Septic / water "emergency"</p>
                <p>"Your sewer is backing up — we can pump now for $X." Demands cash. Real plumbers come to a scheduled appointment.</p>
              </div>
              <div>
                <p className="font-bold">Magazine subscriptions</p>
                <p>"I\'m working my way through college." High prices, often never delivered.</p>
              </div>
              <div>
                <p className="font-bold">Religious / charity solicitors</p>
                <p>Some are real (they have official ID). Many are scams collecting cash. Politely decline; donate to vetted charities online instead.</p>
              </div>
              <div>
                <p className="font-bold">Utility "inspector"</p>
                <p>Real utility employees rarely show up unannounced. If unsure, ask to call the company\'s real number from your bill — they\'ll confirm.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The polite no (memorize this)</h2>
            <p className="text-sm mb-2">"I don\'t do business at the door. If your company is interested in working with me, please leave a card and I\'ll consider it after I research your reviews. Have a good day."</p>
            <p className="text-sm">Then close the door. Don\'t be drawn into "let me explain" — there\'s nothing to explain. Real contractors don\'t mind you doing your homework; scammers will keep pushing.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart preventions</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Video doorbell</strong> (Ring, Nest, Eufy) — see who\'s there before opening. Talk to them through speaker without opening.</li>
              <li><strong>"No Soliciting" sign</strong> — required to be honored in many cities.</li>
              <li><strong>Don\'t hand over ID, cash, or signed paperwork at the door, ever.</strong></li>
              <li><strong>If they claim to be utility / city — close the door, then call the utility\'s real number to verify.</strong></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Right after a storm, beware "storm chasers"</h3>
            <p className="text-sm text-muted-foreground">After hurricanes, hail, or tornadoes, out-of-town crews flood neighborhoods. Many do shoddy or no work, demand a deposit, then disappear. ALWAYS use local contractors with a long track record.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
