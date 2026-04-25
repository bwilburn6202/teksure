import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wifi, Home, Building2, Layers, AlertTriangle, CheckCircle2,
  MapPin, Router, Signal, ArrowRight, DollarSign, Zap,
  Settings, Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ─────────────────────────────────────────── */

type HomeSize = 'small' | 'medium' | 'large' | 'xl';
type WallType = 'drywall' | 'plaster' | 'concrete' | 'brick';
type RouterPlacement = 'center' | 'edge' | 'basement' | 'attic' | 'second';

interface Layout {
  size: HomeSize;
  floors: number;
  walls: WallType;
  placement: RouterPlacement;
  deadZones: string[];
}

const homeSizes: { id: HomeSize; label: string; desc: string; icon: typeof Home }[] = [
  { id: 'small', label: 'Small', desc: 'Under 1,000 sq ft · apartment or condo', icon: Home },
  { id: 'medium', label: 'Medium', desc: '1,000–2,500 sq ft · typical house', icon: Home },
  { id: 'large', label: 'Large', desc: '2,500–4,000 sq ft · bigger home', icon: Building2 },
  { id: 'xl', label: 'Extra Large', desc: '4,000+ sq ft · or multi-building property', icon: Building2 },
];

const wallTypes: { id: WallType; label: string; blocks: string }[] = [
  { id: 'drywall', label: 'Drywall (most modern homes)', blocks: 'Minimal signal loss' },
  { id: 'plaster', label: 'Plaster and lath (older homes)', blocks: 'Moderate signal loss' },
  { id: 'concrete', label: 'Concrete block walls', blocks: 'Heavy signal loss' },
  { id: 'brick', label: 'Brick or stone exterior', blocks: 'Heavy signal loss' },
];

const placements: { id: RouterPlacement; label: string; icon: typeof Router }[] = [
  { id: 'center', label: 'Central room (living room, hallway)', icon: Router },
  { id: 'edge', label: 'One side of the house', icon: Router },
  { id: 'basement', label: 'Basement or low floor', icon: Router },
  { id: 'attic', label: 'Attic or high floor', icon: Router },
  { id: 'second', label: 'Second floor', icon: Router },
];

const roomOptions = [
  'Primary bedroom', 'Kids bedroom', 'Guest bedroom', 'Kitchen', 'Living room',
  'Dining room', 'Home office', 'Basement', 'Garage', 'Outdoor/backyard',
  'Bathroom', 'Laundry room', 'Attic', 'Driveway', 'Pool area',
];

const diyFixes = [
  { title: 'Move the router higher', detail: 'Put it on a shelf or mount it on a wall. WiFi radiates downward — hiding it in a cabinet or behind the TV kills the signal.' },
  { title: 'Move it to the center of your home', detail: 'The router should be as centrally located as possible. If it is in the corner, half the signal is going into your neighbor\'s yard.' },
  { title: 'Keep it away from metal and mirrors', detail: 'Metal filing cabinets, large mirrors, and refrigerators reflect and block WiFi.' },
  { title: 'Away from microwaves and cordless phones', detail: 'Microwaves and older cordless phones broadcast on the 2.4 GHz band — exactly where WiFi lives. Move the router at least 10 feet away.' },
  { title: 'Try the 5 GHz band for close devices', detail: 'Most modern routers have both 2.4 GHz (longer range, slower) and 5 GHz (shorter range, much faster). Switch close devices to the 5 GHz network name.' },
  { title: 'Update router firmware', detail: 'Log in to the router admin page (usually 192.168.1.1 or 192.168.0.1) and check for a firmware update. Many routers now do this automatically.' },
  { title: 'Restart the router', detail: 'Unplug it for 30 seconds, then plug it back in. Do this every few months — it clears out memory issues that slow things down.' },
  { title: 'Change the WiFi channel', detail: 'In the router admin panel, switch from "Auto" to channel 1, 6, or 11 on 2.4 GHz. Apps like WiFi Analyzer (Android) show which channels are crowded.' },
  { title: 'Check for bandwidth hogs', detail: 'A 4K stream, a game console downloading a 100 GB update, and a security camera all running at once will kill speed. Pause big downloads.' },
  { title: 'Make sure the router is not ancient', detail: 'Routers over 5 years old are often the real problem. If yours is from before 2020, a new one will likely solve the whole issue.' },
];

const productTiers = [
  {
    tier: 'Budget',
    price: '~$180',
    name: 'TP-Link Deco X20 (3-pack)',
    covers: 'Up to 5,800 sq ft',
    detail: 'Solid WiFi 6 mesh for most homes. Great for anyone upgrading from a single router or old extender.',
    good: ['Simple setup via phone app', 'Reliable for families of four', 'Works with any internet provider'],
    okay: ['Max speeds not as fast as premium options', 'Basic parental controls'],
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    tier: 'Mid-range',
    price: '~$300',
    name: 'eero 6+ (3-pack)',
    covers: 'Up to 4,500 sq ft',
    detail: 'Most people\'s pick. Easiest setup on the market. Owned by Amazon — pairs well with Alexa.',
    good: ['Setup in under 10 minutes', 'Automatic firmware updates', 'Smart home hub built in (Zigbee, Thread)'],
    okay: ['Advanced features need eero Plus subscription', 'Fewer ethernet ports'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    tier: 'Premium',
    price: '~$700–900',
    name: 'eero Pro 6E or Netgear Orbi RBK863',
    covers: '6,000+ sq ft',
    detail: 'For large homes, power users, gigabit internet, or anyone who has tried the cheaper options and still has dead zones.',
    good: ['WiFi 6E (adds the 6 GHz band)', 'Handles 100+ devices without slowdown', 'Wired backhaul support for best speeds'],
    okay: ['Price', 'Orbi setup is a bit more technical'],
    color: 'from-amber-500 to-amber-600',
  },
];

/* ── Diagnosis logic ───────────────────────────────── */

interface Recommendation {
  verdict: 'move-router' | 'extender' | 'mesh-2' | 'mesh-3' | 'premium';
  headline: string;
  explanation: string;
  nextSteps: string[];
}

function diagnose(layout: Layout): Recommendation {
  const deadCount = layout.deadZones.length;
  const hardWalls = layout.walls === 'concrete' || layout.walls === 'brick' || layout.walls === 'plaster';
  const badPlacement = layout.placement === 'basement' || layout.placement === 'attic' || layout.placement === 'edge';

  // Tiny homes with only placement issues
  if (layout.size === 'small' && deadCount <= 1 && badPlacement) {
    return {
      verdict: 'move-router',
      headline: 'Try moving your router first',
      explanation: 'Your home is small enough that a single router should cover it. The placement is likely causing your dead zones.',
      nextSteps: [
        'Move the router to a central room at eye level or higher',
        'Keep it off the floor, out of cabinets, and away from metal',
        'Retest your dead zones after 10 minutes',
        'If problems remain, try the DIY fixes below before buying anything',
      ],
    };
  }

  // XL or large with hard walls or many dead zones → premium
  if ((layout.size === 'xl' || (layout.size === 'large' && hardWalls)) && (deadCount >= 3 || layout.floors >= 3)) {
    return {
      verdict: 'premium',
      headline: 'A premium mesh system with wired backhaul',
      explanation: 'Your home is large and has features that block WiFi. Cheap extenders will frustrate you — this is the case for investing in a real mesh network.',
      nextSteps: [
        'Plan for 3–4 mesh nodes',
        'If you have ethernet in the walls, use wired backhaul — it roughly doubles mesh performance',
        'Place nodes one room away from dead zones, not inside them',
        'Consider having an electrician run ethernet between floors for the best setup',
      ],
    };
  }

  // Large with multiple dead zones → 3-pack mesh
  if (deadCount >= 3 || layout.floors >= 2 || layout.size === 'large') {
    return {
      verdict: 'mesh-3',
      headline: 'A 3-pack mesh system',
      explanation: 'Multiple dead zones across more than one floor are the classic case for mesh. One base router and two satellite nodes will cover a typical 2,500–4,000 sq ft home.',
      nextSteps: [
        'Place the main unit where your internet comes in',
        'Put nodes one room between the main unit and each dead zone',
        'Do not stack nodes right next to walls — leave breathing room',
        'Use the app to check signal strength between nodes',
      ],
    };
  }

  // 1-2 dead zones in a small/medium home → 2-pack or extender
  if (deadCount <= 2 && layout.size !== 'xl') {
    return {
      verdict: deadCount === 1 ? 'extender' : 'mesh-2',
      headline: deadCount === 1 ? 'A single WiFi extender might be enough' : 'A 2-pack mesh system',
      explanation: deadCount === 1
        ? 'A good extender is the cheapest fix for a single dead zone. The trade-off: extenders usually create a second network name and cut speeds roughly in half.'
        : 'Two mesh nodes will handle two dead zones without the headaches of an extender. You keep one network name and full speeds at both points.',
      nextSteps: deadCount === 1 ? [
        'Plug the extender into an outlet halfway between the router and the dead zone — not inside the dead zone',
        'Use TP-Link AX1500 or Netgear EAX15 (~$60–100)',
        'Accept that devices on the extended network will be slower',
        'If it does not work well, return it and switch to a 2-pack mesh',
      ] : [
        'Place nodes halfway between the router and each dead zone',
        'Eero 6+ 2-pack or TP-Link Deco X20 2-pack work well',
        'Set up through the app — takes about 15 minutes',
      ],
    };
  }

  // Fallback: mesh 3-pack
  return {
    verdict: 'mesh-3',
    headline: 'A 3-pack mesh system',
    explanation: 'Based on your layout, a 3-pack mesh network is the most reliable way to eliminate your dead zones.',
    nextSteps: [
      'Start with 3 nodes — you can add more later',
      'Place them in a triangle across your home, not in a line',
      'Keep the main unit near the modem',
    ],
  };
}

/* ── Page ──────────────────────────────────────────── */

export default function WifiCoveragePlanner() {
  const [layout, setLayout] = useState<Layout>({
    size: 'medium', floors: 1, walls: 'drywall', placement: 'center', deadZones: [],
  });
  const [showResults, setShowResults] = useState(false);

  const recommendation = useMemo(() => diagnose(layout), [layout]);

  function toggleRoom(room: string) {
    setLayout((l) => ({
      ...l,
      deadZones: l.deadZones.includes(room) ? l.deadZones.filter((r) => r !== room) : [...l.deadZones, room],
    }));
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="WiFi Coverage Planner — Fix Dead Zones in Your Home | TekSure"
        description="Map your home layout, identify WiFi dead zones, and get free recommendations for router placement, mesh systems, and DIY fixes before you spend money."
        path="/tools/wifi-coverage-planner"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/30 dark:to-background py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
            <Wifi className="h-3 w-3 mr-1" /> WiFi Planner
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Map Your Home. Fix the Dead Zones.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions, tell us where your WiFi is weak, and get real advice —
            what to try first, what to buy, and what to avoid.
          </p>
        </div>
      </section>

      {/* Layout builder */}
      <section className="py-12">
        <div className="container max-w-5xl mx-auto px-4 space-y-8">

          <StepCard step={1} title="How big is your home?" icon={<Home className="h-5 w-5" />}>
            <div className="grid sm:grid-cols-2 gap-3">
              {homeSizes.map((s) => (
                <button key={s.id}
                  onClick={() => setLayout({ ...layout, size: s.id })}
                  className={`text-left border rounded-lg p-4 transition ${layout.size === s.id ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/30' : 'hover:border-sky-300'}`}>
                  <p className="font-semibold">{s.label}</p>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </button>
              ))}
            </div>
          </StepCard>

          <StepCard step={2} title="How many floors?" icon={<Layers className="h-5 w-5" />}>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button key={n}
                  onClick={() => setLayout({ ...layout, floors: n })}
                  className={`px-5 py-3 rounded-lg border font-medium ${layout.floors === n ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/30' : 'hover:border-sky-300'}`}>
                  {n} {n === 1 ? 'floor' : 'floors'}
                </button>
              ))}
            </div>
          </StepCard>

          <StepCard step={3} title="What are your walls made of?" icon={<Building2 className="h-5 w-5" />}>
            <div className="space-y-2">
              {wallTypes.map((w) => (
                <button key={w.id}
                  onClick={() => setLayout({ ...layout, walls: w.id })}
                  className={`w-full text-left border rounded-lg p-3 flex justify-between items-center ${layout.walls === w.id ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/30' : 'hover:border-sky-300'}`}>
                  <span className="font-medium">{w.label}</span>
                  <span className="text-xs text-muted-foreground">{w.blocks}</span>
                </button>
              ))}
            </div>
          </StepCard>

          <StepCard step={4} title="Where is your router right now?" icon={<Router className="h-5 w-5" />}>
            <div className="grid sm:grid-cols-2 gap-2">
              {placements.map((p) => (
                <button key={p.id}
                  onClick={() => setLayout({ ...layout, placement: p.id })}
                  className={`text-left border rounded-lg p-3 ${layout.placement === p.id ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/30' : 'hover:border-sky-300'}`}>
                  <p className="font-medium">{p.label}</p>
                </button>
              ))}
            </div>
          </StepCard>

          <StepCard step={5} title="Where are the dead zones?" icon={<MapPin className="h-5 w-5" />} subtitle="Check every room where WiFi is slow, keeps dropping, or just does not work.">
            <div className="flex flex-wrap gap-2">
              {roomOptions.map((room) => (
                <button key={room}
                  onClick={() => toggleRoom(room)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${layout.deadZones.includes(room) ? 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300' : 'hover:border-slate-400'}`}>
                  {layout.deadZones.includes(room) && <CheckCircle2 className="inline h-3 w-3 mr-1" />}
                  {room}
                </button>
              ))}
            </div>
          </StepCard>

          <div className="flex justify-center pt-2">
            <Button size="lg" onClick={() => setShowResults(true)} className="bg-sky-600 hover:bg-sky-700">
              <Signal className="h-4 w-4 mr-2" /> Get My WiFi Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      {showResults && (
        <section className="bg-slate-50 dark:bg-slate-950 py-12" id="results">
          <div className="container max-w-5xl mx-auto px-4 space-y-8">

            {/* Diagnosis */}
            <Card className="border-sky-200 dark:border-sky-900">
              <CardContent className="p-6 md:p-8">
                <Badge className="mb-3 bg-sky-100 text-sky-700">Your Diagnosis</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{recommendation.headline}</h2>
                <p className="text-muted-foreground mb-6">{recommendation.explanation}</p>
                <h3 className="font-semibold mb-3">Next steps</h3>
                <ul className="space-y-2">
                  {recommendation.nextSteps.map((s, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* DIY fixes first */}
            <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  <h2 className="text-2xl font-bold">Try these 10 free fixes first</h2>
                </div>
                <p className="text-muted-foreground mb-5">
                  Before spending a dollar, work through this list. Many people find one of these fixes the whole problem.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {diyFixes.map((f, i) => (
                    <div key={i} className="bg-background rounded-lg border p-4">
                      <p className="font-semibold mb-1 flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{i + 1}</span>
                        {f.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Products */}
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-emerald-600" /> Product recommendations
              </h2>
              <p className="text-muted-foreground mb-6">
                Real options at three price points. Prices are 2026 estimates and change often — check current prices before buying.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {productTiers.map((p) => (
                  <Card key={p.tier} className="overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-2">{p.tier}</Badge>
                      <p className="text-2xl font-bold mb-1">{p.price}</p>
                      <p className="font-semibold">{p.name}</p>
                      <p className="text-xs text-muted-foreground mb-4">Covers {p.covers}</p>
                      <p className="text-sm mb-4">{p.detail}</p>
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">Strengths</p>
                      <ul className="text-xs text-muted-foreground space-y-1 mb-3">
                        {p.good.map((g, i) => <li key={i}>• {g}</li>)}
                      </ul>
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">Trade-offs</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {p.okay.map((g, i) => <li key={i}>• {g}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Extender vs mesh */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-sky-600" /> Extender vs. mesh — which one?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <p className="font-semibold">Range extender (~$50–$100)</p>
                    <p className="text-sm text-muted-foreground mb-2">Cheaper, fine for a single dead zone.</p>
                    <p className="text-xs"><strong>Downside:</strong> Creates a second network name. Cuts speeds roughly in half. Not great for 4K streaming or video calls.</p>
                  </div>
                  <div className="border rounded-lg p-4 border-sky-300 bg-sky-50 dark:bg-sky-950/30">
                    <p className="font-semibold">Mesh system (~$180–$900)</p>
                    <p className="text-sm text-muted-foreground mb-2">One network name, full speeds everywhere.</p>
                    <p className="text-xs"><strong>Downside:</strong> Costs more. Overkill for small apartments with one weak room.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wired backhaul */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Settings className="h-5 w-5" /> Wired backhaul — the pro move
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If your house has ethernet jacks in the walls, use them to connect mesh nodes to each other.
                  This is called "wired backhaul" and roughly doubles mesh performance.
                </p>
                <ul className="text-sm space-y-1.5">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> Use a Cat6 or Cat6a cable between nodes</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> Some mesh apps auto-detect wired backhaul; others need a setting turned on</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> MoCA adapters work over coax (cable TV) wiring if you have that instead</li>
                </ul>
              </CardContent>
            </Card>

            {/* Booster setup */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How to set up a signal booster the right way</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside text-muted-foreground">
                  <li>Plug it into a wall outlet <strong className="text-foreground">halfway</strong> between the router and the dead zone — not inside the dead zone.</li>
                  <li>Let it find your network — most modern extenders have a WPS button.</li>
                  <li>Put close devices on the 5 GHz network and far devices on the 2.4 GHz network.</li>
                  <li>Test with a speed test app. If you still get less than 20 Mbps, you need mesh, not an extender.</li>
                </ol>
              </CardContent>
            </Card>

            {/* Related */}
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/guides/set-up-mesh-wifi-system"
                    className="border rounded-lg p-5 bg-background hover:shadow-md transition group flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Set up a mesh WiFi system</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step guide for eero, Deco, and Orbi.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/tools/wifi-speed"
                    className="border rounded-lg p-5 bg-background hover:shadow-md transition group flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">WiFi speed checker</h3>
                  <p className="text-sm text-muted-foreground">See what speed you are actually getting.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {!showResults && (
        <section className="py-10">
          <div className="container max-w-3xl mx-auto px-4">
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
              <CardContent className="p-5 flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong>Quick Tip:</strong> Before you buy anything, finish the planner above and try the DIY fixes we show
                  in the results. Most people fix their dead zones with free changes to router placement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

    </div>
  );
}

/* ── Helpers ───────────────────────────────────────── */

function StepCard({
  step, title, subtitle, icon, children,
}: { step: number; title: string; subtitle?: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 shrink-0">
            {icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground">STEP {step}</p>
            <h2 className="text-xl font-bold leading-tight">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
