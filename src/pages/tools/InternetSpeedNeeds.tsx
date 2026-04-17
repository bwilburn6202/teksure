import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Wifi, Gauge, Lightbulb, ArrowRight, ExternalLink, Info } from 'lucide-react';

type Inputs = {
  emailUsers: number;
  hdStreams: number;
  fourKStreams: number;
  videoCallParticipants: number;
  gaming: boolean;
  liveStreaming: boolean;
  smartHomeDevices: number;
  workFromHome: boolean;
  studentsOnline: number;
  cloudBackup: boolean;
};

const INITIAL: Inputs = {
  emailUsers: 1,
  hdStreams: 0,
  fourKStreams: 0,
  videoCallParticipants: 0,
  gaming: false,
  liveStreaming: false,
  smartHomeDevices: 0,
  workFromHome: false,
  studentsOnline: 0,
  cloudBackup: false,
};

function calcMbps(i: Inputs) {
  let download = 0;
  const breakdown: { label: string; mbps: number }[] = [];

  const add = (label: string, mbps: number) => {
    if (mbps <= 0) return;
    download += mbps;
    breakdown.push({ label, mbps });
  };

  add(`Email & web browsing (${i.emailUsers} ${i.emailUsers === 1 ? 'person' : 'people'})`, i.emailUsers * 5);
  add(`HD streaming (${i.hdStreams} ${i.hdStreams === 1 ? 'stream' : 'streams'})`, i.hdStreams * 5);
  add(`4K streaming (${i.fourKStreams} ${i.fourKStreams === 1 ? 'stream' : 'streams'})`, i.fourKStreams * 25);
  add(`Video calls (${i.videoCallParticipants} ${i.videoCallParticipants === 1 ? 'call' : 'calls'})`, i.videoCallParticipants * 6);
  if (i.gaming) add('Online gaming console', 20);
  if (i.liveStreaming) add('Live streaming (Twitch/YouTube)', 12);
  if (i.smartHomeDevices > 0) add(`Smart home devices (${i.smartHomeDevices})`, Math.min(20, i.smartHomeDevices * 1));
  if (i.workFromHome) add('Work from home', 15);
  if (i.studentsOnline > 0) add(`Students online (${i.studentsOnline})`, i.studentsOnline * 8);
  if (i.cloudBackup) add('Cloud backup running', 10);

  const headroom = Math.round(download * 0.2);
  const total = download + headroom;

  let plan = '';
  let planNote = '';
  if (total <= 50) { plan = 'Basic 50–100 Mbps'; planNote = 'Most cable and DSL starter plans cover this. Don\'t pay for more than you need.'; }
  else if (total <= 150) { plan = '100 Mbps plan'; planNote = 'A typical mid-tier plan from Xfinity, Spectrum, or Verizon will work fine.'; }
  else if (total <= 400) { plan = '300 Mbps plan'; planNote = 'A standard "fast" plan. Comfortably handles a family with multiple streams and gaming.'; }
  else if (total <= 900) { plan = '500–1000 Mbps (gigabit)'; planNote = 'You may want fiber if available — better upload too. Cable gigabit also works.'; }
  else { plan = '1 Gbps+ plan'; planNote = 'A heavy-use household. Consider whether you really need 2 Gbps — most home Wi-Fi can\'t deliver it anyway.'; }

  return { download, headroom, total, breakdown, plan, planNote };
}

function NumStep({ label, value, set, max = 10 }: { label: string; value: number; set: (n: number) => void; max?: number }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="text-sm flex-1">{label}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => set(Math.max(0, value - 1))}
          className="h-8 w-8 rounded-lg border hover:bg-muted text-lg leading-none"
          aria-label={`Decrease ${label}`}
        >−</button>
        <span className="w-8 text-center font-semibold">{value}</span>
        <button
          onClick={() => set(Math.min(max, value + 1))}
          className="h-8 w-8 rounded-lg border hover:bg-muted text-lg leading-none"
          aria-label={`Increase ${label}`}
        >+</button>
      </div>
    </div>
  );
}

function YesNo({ label, value, set }: { label: string; value: boolean; set: (b: boolean) => void }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm flex-1">{label}</span>
      <Switch checked={value} onCheckedChange={set} />
    </div>
  );
}

export default function InternetSpeedNeeds() {
  const [inputs, setInputs] = useState<Inputs>(INITIAL);
  const result = useMemo(() => calcMbps(inputs), [inputs]);
  const update = <K extends keyof Inputs>(key: K, value: Inputs[K]) => setInputs((p) => ({ ...p, [key]: value }));

  return (
    <>
      <SEOHead
        title="How Much Internet Speed Do I Need? — Find the Right Plan | TekSure"
        description="Check what you actually do online and find the right Mbps for your home. Stop overpaying for speed you won't use."
        path="/tools/internet-speed-needs"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Internet Speed Needs' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center flex-shrink-0">
                <Wifi className="h-6 w-6 text-cyan-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Don't Overpay for Speed You Won't Use</h1>
            <p className="text-muted-foreground text-lg">
              Tell us what you actually do online and we'll calculate the speed you really need. Most homes pay for a lot more than they use.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          <Card>
            <CardHeader><CardTitle className="text-lg">What do you do online?</CardTitle></CardHeader>
            <CardContent className="divide-y">
              <NumStep label="People doing email & basic browsing" value={inputs.emailUsers} set={(n) => update('emailUsers', n)} max={12} />
              <NumStep label="HD streams at the same time (Netflix, Hulu)" value={inputs.hdStreams} set={(n) => update('hdStreams', n)} max={8} />
              <NumStep label="4K streams at the same time" value={inputs.fourKStreams} set={(n) => update('fourKStreams', n)} max={6} />
              <NumStep label="People on video calls (Zoom, FaceTime)" value={inputs.videoCallParticipants} set={(n) => update('videoCallParticipants', n)} max={6} />
              <NumStep label="Smart home devices (Nest, Alexa, cameras)" value={inputs.smartHomeDevices} set={(n) => update('smartHomeDevices', n)} max={30} />
              <NumStep label="Students online (homework, classes)" value={inputs.studentsOnline} set={(n) => update('studentsOnline', n)} max={6} />
              <YesNo label="Online gaming (PlayStation/Xbox/Switch)" value={inputs.gaming} set={(b) => update('gaming', b)} />
              <YesNo label="Live streaming (Twitch/YouTube broadcaster)" value={inputs.liveStreaming} set={(b) => update('liveStreaming', b)} />
              <YesNo label="Work from home (heavy uploads, calls)" value={inputs.workFromHome} set={(b) => update('workFromHome', b)} />
              <YesNo label="Cloud backup runs in the background" value={inputs.cloudBackup} set={(b) => update('cloudBackup', b)} />
            </CardContent>
          </Card>

          {/* Result */}
          <Card className="border-cyan-200 dark:border-cyan-800/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Gauge className="h-5 w-5 text-cyan-600" aria-hidden="true" /> Your recommended speed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="text-center py-4">
                <p className="text-sm text-muted-foreground mb-1">You need about</p>
                <p className="text-5xl font-bold tracking-tight">{result.total} <span className="text-2xl font-semibold text-muted-foreground">Mbps</span></p>
                <p className="text-sm text-muted-foreground mt-2">download speed (with 20% headroom)</p>
              </div>

              <div className="rounded-lg bg-cyan-50 dark:bg-cyan-950/30 p-4">
                <p className="font-semibold text-sm mb-1">Match: {result.plan}</p>
                <p className="text-sm text-muted-foreground">{result.planNote}</p>
              </div>

              {result.breakdown.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2">How we got there:</p>
                  <div className="space-y-1">
                    {result.breakdown.map((b) => (
                      <div key={b.label} className="flex justify-between text-sm py-1 border-b last:border-0">
                        <span className="text-muted-foreground">{b.label}</span>
                        <span className="font-mono">{b.mbps} Mbps</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm py-1">
                      <span className="text-muted-foreground">+ 20% headroom</span>
                      <span className="font-mono">{result.headroom} Mbps</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 font-semibold border-t">
                      <span>Total recommended</span>
                      <span className="font-mono">{result.total} Mbps</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Plain English explainers */}
          <Card>
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Info className="h-5 w-5 text-blue-600" aria-hidden="true" /> What these terms mean</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">What is Mbps?</p>
                <p className="text-muted-foreground">Megabits per second — how fast data can flow into your home. 100 Mbps means you can pull about 100 million bits of data per second. A 4K Netflix show needs about 25 Mbps, an HD show about 5 Mbps.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Why upload speed matters</p>
                <p className="text-muted-foreground">Most plans show download speed first. Upload speed matters for video calls, sending photos, and cloud backups. Cable plans often have low upload (10–35 Mbps). Fiber plans usually match upload to download.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Why you probably don't need gigabit</p>
                <p className="text-muted-foreground">Most home Wi-Fi tops out at 200–500 Mbps in real-world conditions. Paying for 1 Gbps when your devices can only use 300 Mbps is paying for speed you literally can't receive.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Ping and latency for gaming</p>
                <p className="text-muted-foreground">For gaming, low ping (under 50ms) matters more than raw speed. Fiber and cable both have decent ping. Satellite internet has very high ping — bad for gaming.</p>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="border-amber-200 dark:border-amber-800/50">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Quick Tip</p>
                  <p className="text-muted-foreground">Before you switch plans, run a real-world speed test from a few rooms in your house. If you're already getting more than the speed you need, the upgrade won't change anything you actually do.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cross-links */}
          <div className="grid sm:grid-cols-2 gap-3">
            <a href="/tools/wifi-speed" className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors">
              <p className="font-semibold text-sm">Test your current Wi-Fi speed <ArrowRight className="inline h-4 w-4" /></p>
              <p className="text-xs text-muted-foreground mt-1">See what you're really getting before changing plans.</p>
            </a>
            <a href="/tools/internet-plan-comparator" className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors">
              <p className="font-semibold text-sm">Compare internet plans <ArrowRight className="inline h-4 w-4" /></p>
              <p className="text-xs text-muted-foreground mt-1">Side-by-side cost and speed for major providers.</p>
            </a>
          </div>

          <a
            href="https://www.fcc.gov/consumers/guides/broadband-speed-guide"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            FCC broadband speed guide <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
