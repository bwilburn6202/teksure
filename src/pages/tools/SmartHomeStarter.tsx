import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  HomeIcon, ChevronRight, Lightbulb, DoorOpen, Speaker, Plug,
  Camera, Thermometer, Droplets, AlertTriangle, type LucideIcon,
  ArrowRight,
} from 'lucide-react';

type Goal =
  | 'see-who-is-at-the-door'
  | 'feel-safer-at-night'
  | 'reach-someone-fast'
  | 'cant-bend-down'
  | 'fewer-light-switches'
  | 'remember-the-stove'
  | 'thermostat-too-fiddly'
  | 'water-leaks-worry-me';

interface Pick {
  name: string;
  price: string;
  why: string;
  setup: string;
  icon: LucideIcon;
  notes?: string[];
}

const GOAL_OPTIONS: { id: Goal; label: string; sub: string }[] = [
  { id: 'see-who-is-at-the-door', label: 'See who is at the door without getting up', sub: 'Especially after dark' },
  { id: 'feel-safer-at-night',    label: 'Feel safer at night',                        sub: 'Lights that come on automatically' },
  { id: 'reach-someone-fast',     label: 'Reach a family member fast',                  sub: 'Hands-free calls or video' },
  { id: 'cant-bend-down',         label: "I can't bend to reach outlets or switches",   sub: 'Voice or phone control' },
  { id: 'fewer-light-switches',   label: 'Cut down on getting up to flip switches',     sub: 'Schedule lights, control by voice' },
  { id: 'remember-the-stove',     label: 'Help remembering things were turned off',     sub: 'The stove, the iron, the curling iron' },
  { id: 'thermostat-too-fiddly',  label: 'Thermostat is hard to read or change',        sub: 'Bigger numbers, schedule it once' },
  { id: 'water-leaks-worry-me',   label: 'I worry about water leaks',                    sub: 'Under the sink, washing machine, hot water heater' },
];

const PICKS: Record<Goal, Pick> = {
  'see-who-is-at-the-door': {
    name: 'Video doorbell — Ring, Nest, or Eufy',
    price: '$80–$200 one-time',
    why: 'Replaces your existing doorbell. When someone presses the button, your phone or watch rings — you can see and talk to them without opening the door. After dark, the camera switches to night vision.',
    setup: 'Ring is easiest if you have an existing doorbell wired in. Eufy is the cheapest if you do not want a monthly subscription. Nest is best if you already use Google. Most can be installed by a friend or handyman in 30 minutes.',
    icon: DoorOpen,
    notes: [
      'Ring: optional $4/month adds video recording history.',
      'Nest: free without subscription has 3 hours of history.',
      'Eufy: stores video locally — no monthly fee at all.',
    ],
  },
  'feel-safer-at-night': {
    name: 'Motion-activated smart bulbs in 2 or 3 spots',
    price: '$15–$25 per bulb',
    why: 'Replace the bulbs in your hallway, bathroom path, and front porch with smart bulbs. Set them to turn on automatically when motion is detected, then turn off after 5 minutes. No more fumbling for switches at 3am.',
    setup: 'Pick the Philips Hue Smart Bulb (most reliable, needs the Hue Bridge) or a Wyze Bulb (cheaper, plugs into Wi-Fi directly). Both screw into a regular socket. Phone app does the schedule in 2 minutes.',
    icon: Lightbulb,
    notes: [
      'No wiring or electrician needed.',
      'Works with Alexa, Google, or Apple Home if you have a smart speaker.',
    ],
  },
  'reach-someone-fast': {
    name: 'Amazon Echo Show or Google Nest Hub',
    price: '$80–$130',
    why: 'A small kitchen-counter screen with a speaker. Say "Alexa, call my daughter" and it rings her phone or her own Echo Show. Works for video calls too. No tapping, no remembering apps.',
    setup: 'Plug it in, follow the on-screen prompts to connect Wi-Fi, sign into your Amazon or Google account. Add family members as Contacts in the app. About 15 minutes total.',
    icon: Speaker,
    notes: [
      'Pair an Echo Show in your kitchen with one in your daughter\'s house — calls between them are free and instant ("Drop In" feature).',
      'Echo Show 8 has the right size screen for older eyes — bigger than the smaller Show 5.',
    ],
  },
  'cant-bend-down': {
    name: 'Smart plug for a hard-to-reach outlet',
    price: '$10–$15',
    why: 'Plugs in between the wall outlet and the lamp. Now you turn the lamp on with your phone or by saying "Alexa, turn on the bedroom lamp" — no more bending behind the dresser to flip a switch.',
    setup: 'Pick the Kasa Smart Plug Mini or Amazon Smart Plug. Plug in, scan a QR code with your phone, name it ("bedroom lamp"). Done in 5 minutes.',
    icon: Plug,
  },
  'fewer-light-switches': {
    name: 'Smart bulbs in your most-used lamps',
    price: '$15–$25 per bulb',
    why: 'Same bulb idea as before, but for your reading chair lamp and bedside lamp instead. Schedule them to come on at sunset and off at bedtime. Or say "Alexa, turn off all the lights" before bed.',
    setup: 'Wyze Bulb is the best price. Philips Hue is the best quality. Install: unscrew old bulb, screw in new one, set up in the app.',
    icon: Lightbulb,
  },
  'remember-the-stove': {
    name: 'Smart plug + a smart speaker reminder',
    price: '$15 plug + $50 speaker',
    why: 'Smart plug on the appliance you forget — iron, curling iron, fan. Tell Alexa "remind me at 9am to turn off the iron" — and a tap on your phone turns it off from anywhere. For the actual stove (which is wired in, not plugged), see notes below.',
    setup: 'Plug it in like above. The Echo Dot is $50 and lets you say "Alexa, turn off the iron" hands-free.',
    icon: Plug,
    notes: [
      'For the kitchen stove specifically, fire-safety is better solved by an iGuard Stove Top Auto-Shutoff ($350) or a smart smoke detector like Google Nest Protect ($120) that texts your family if smoke is detected.',
    ],
  },
  'thermostat-too-fiddly': {
    name: 'Nest Thermostat (newer model) or Ecobee',
    price: '$130–$250 one-time',
    why: 'Big, bright screen with large numbers. Set the temperature once and it learns your routine. If the house gets too hot or too cold for you to notice, family members can adjust it from their phone.',
    setup: 'A handyman can swap it for your old thermostat in 30 minutes. The app walks you through the wiring (it takes a photo of the existing wires before you start). After install, you set "favorite temperatures" and forget it.',
    icon: Thermometer,
    notes: [
      'Some power companies give a $50–$100 rebate for installing a smart thermostat. Check your utility website before you buy.',
    ],
  },
  'water-leaks-worry-me': {
    name: 'Water leak sensors',
    price: '$20–$30 per sensor',
    why: 'A small puck you place under the sink, behind the washing machine, or near the hot water heater. The moment it gets wet, your phone alerts you and a smart speaker can announce it.',
    setup: 'Pick Govee Water Leak Detector or YoLink Water Sensor. Pull a battery tab, place it on the floor, scan the QR code. About 3 minutes per sensor. Three sensors covers most leak risks in a typical home.',
    icon: Droplets,
  },
};

export default function SmartHomeStarter() {
  const [picked, setPicked] = useState<Set<Goal>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: Goal) => {
    setPicked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < 3) next.add(id);
      return next;
    });
  };

  const recommendations = useMemo(
    () => Array.from(picked).map(g => PICKS[g]),
    [picked],
  );

  const reset = () => { setPicked(new Set()); setSubmitted(false); };

  return (
    <>
      <SEOHead
        title="Smart Home Starter Picker"
        description="Tell us your one or two real concerns and we will pick the right first smart-home device — no upselling, no full-house overhauls. Honest comparisons, US prices, and plain-English setup."
        path="/tools/smart-home-starter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <HomeIcon className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Home Starter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick the one or two real concerns that bug you. We will recommend a single device that solves each — no full-house overhauls, no upselling.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Smart Home Starter' }]} />

          {!submitted ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-1">Pick up to 3</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Be honest — only the things that actually annoy or worry you. Smart-home gear pays off when it solves a real problem, not when you buy a kit.
                </p>
                <div className="space-y-2 mb-5">
                  {GOAL_OPTIONS.map(g => {
                    const checked = picked.has(g.id);
                    const disabled = !checked && picked.size >= 3;
                    return (
                      <label
                        key={g.id}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          checked ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40'
                        } ${disabled ? 'opacity-50' : ''}`}
                      >
                        <Checkbox checked={checked} onCheckedChange={() => toggle(g.id)} disabled={disabled} className="mt-1" />
                        <div>
                          <p className="font-medium text-sm">{g.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{g.sub}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
                <Button
                  onClick={() => setSubmitted(true)}
                  disabled={picked.size === 0}
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                >
                  Show my recommendations <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
                  <Badge variant="outline">{recommendations.length} recommendation{recommendations.length !== 1 ? 's' : ''}</Badge>
                  <Button variant="outline" size="sm" onClick={reset}>Start over</Button>
                </CardContent>
              </Card>

              <div className="space-y-4 mb-6">
                {recommendations.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Card key={i} className="border-border">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-base">{p.name}</p>
                            <Badge variant="outline" className="mt-1">{p.price}</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{p.why}</p>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Setup</p>
                        <p className="text-sm mb-3">{p.setup}</p>
                        {p.notes && p.notes.length > 0 && (
                          <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                            {p.notes.map((n, j) => (
                              <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                                <span className="text-primary">•</span>
                                <span>{n}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Watch for "smart-home installer" scams</p>
                    <p className="text-muted-foreground">
                      Door-to-door salespeople sometimes offer to "set up smart home for free" and then lock seniors into 60-month security-monitoring contracts at $50/month. None of the devices on this page need a contract. If you want help installing, call a local handyman or a TaskRabbit pro for a flat fee.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30">
                <CardContent className="p-5 flex items-start gap-3">
                  <Camera className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">A note on cameras inside the home</p>
                    <p className="text-muted-foreground">
                      We do not generally recommend cameras inside the house. Outdoor doorbells and porch cameras are useful. Indoor cameras can become a privacy and hacking problem — especially the cheap brands. If you want to "check on" a parent, a smart speaker with video calling is a kinder option than a camera watching them all day.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Watch or pendant for emergencies.</p>
              </Link>
              <Link to="/tools/home-security-camera-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Home Security Camera Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Outdoor cameras done right.</p>
              </Link>
              <Link to="/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up a tablet for the same person.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: start with one device, live with it for two weeks, then decide if you want a second.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
