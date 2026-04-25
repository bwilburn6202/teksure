import { useState } from 'react';
import {
  Wifi,
  RotateCcw,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Power,
  MapPin,
  Radio,
  Phone,
  Gauge,
  Network,
  Sparkles,
  ExternalLink,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type Symptom = 'buffering' | 'slow-sites' | 'calls-drop' | 'wont-connect' | 'all';
type When = 'just-now' | 'today' | 'this-week' | 'always';
type Where = 'everywhere' | 'some-rooms' | 'near-router' | 'far-from-router';
type Device = 'phone' | 'computer' | 'tv' | 'all';
type TriedRestart = 'yes' | 'no' | 'not-sure';

interface Answers {
  symptom: Symptom | null;
  when: When | null;
  where: Where | null;
  device: Device | null;
  restart: TriedRestart | null;
}

/* ── Option lists ────────────────────────── */
const symptomOptions: { id: Symptom; label: string; emoji: string; desc: string }[] = [
  { id: 'buffering', label: 'Videos keep buffering', emoji: '', desc: 'YouTube, Netflix, or live TV pauses to load' },
  { id: 'slow-sites', label: 'Websites are slow', emoji: '', desc: 'Pages take forever to open' },
  { id: 'calls-drop', label: 'Video calls drop or freeze', emoji: '', desc: 'Zoom, FaceTime, or WhatsApp cuts out' },
  { id: 'wont-connect', label: 'WiFi won\'t connect at all', emoji: '', desc: 'No internet showing on my devices' },
  { id: 'all', label: 'A bit of everything', emoji: '', desc: 'It\'s just generally not working right' },
];

const whenOptions: { id: When; label: string; emoji: string; desc: string }[] = [
  { id: 'just-now', label: 'Just started — in the last hour', emoji: '', desc: 'It was working fine earlier today' },
  { id: 'today', label: 'Today', emoji: '', desc: 'Started sometime this morning or afternoon' },
  { id: 'this-week', label: 'This week', emoji: '', desc: 'It\'s been bad for a few days' },
  { id: 'always', label: 'It\'s always been slow', emoji: '', desc: 'I don\'t remember a time it worked well' },
];

const whereOptions: { id: Where; label: string; emoji: string; desc: string }[] = [
  { id: 'everywhere', label: 'Everywhere in the house', emoji: '', desc: 'No matter which room I\'m in' },
  { id: 'some-rooms', label: 'Only in some rooms', emoji: '', desc: 'Fine in one spot, bad in another' },
  { id: 'near-router', label: 'Even right next to the router', emoji: '', desc: 'Slow even when I\'m sitting near it' },
  { id: 'far-from-router', label: 'Only when I\'m far from the router', emoji: '', desc: 'Fine near it, weak in far rooms' },
];

const deviceOptions: { id: Device; label: string; emoji: string }[] = [
  { id: 'phone', label: 'Just my phone', emoji: '' },
  { id: 'computer', label: 'Just my computer', emoji: '' },
  { id: 'tv', label: 'Just my TV or streaming box', emoji: '' },
  { id: 'all', label: 'All my devices', emoji: '' },
];

const restartOptions: { id: TriedRestart; label: string; emoji: string; desc: string }[] = [
  { id: 'yes', label: 'Yes — already tried that', emoji: '', desc: 'Unplugged it, waited, plugged it back in' },
  { id: 'no', label: 'No — haven\'t restarted it', emoji: '', desc: 'I\'ll give that a try' },
  { id: 'not-sure', label: 'Not sure how', emoji: '', desc: 'Show me how to restart the router' },
];

/* ── Fix-step catalogue ──────────────────── */
type FixPriority = 'high' | 'medium' | 'low';

interface FixStep {
  id: string;
  title: string;
  priority: FixPriority;
  icon: typeof Wifi;
  summary: string;
  steps: string[];
  tip?: string;
  link?: { label: string; url: string };
}

const fix_routerRestart: FixStep = {
  id: 'router-restart',
  title: 'Restart your router — the #1 fix',
  priority: 'high',
  icon: Power,
  summary: 'Fixes about 70% of slow-internet problems. Easy and safe — nothing on your router gets erased.',
  steps: [
    'Find your router — the small box with flashing lights, usually near where the internet cable enters your home.',
    'Unplug the power cable from the back of the router (or from the wall).',
    'Wait a full 30 seconds. Count slowly — one-one-thousand, two-one-thousand. This part matters.',
    'Plug the power cable back in.',
    'Wait 2–3 minutes for the lights to settle. You\'re looking for a steady (not blinking) internet light.',
    'Try your internet again on your phone or computer.',
  ],
  tip: 'If your modem is a separate box from your router, unplug both at the same time, wait 30 seconds, then plug the modem in first — wait 2 minutes — then plug the router in.',
};

const fix_deviceRestart: FixStep = {
  id: 'device-restart',
  title: 'Restart the device that\'s acting up',
  priority: 'high',
  icon: RotateCcw,
  summary: 'If only one device is slow, restarting it often clears the problem in under a minute.',
  steps: [
    'On a phone: hold the power button, then slide to power off. Wait 10 seconds, then turn it back on.',
    'On a computer: click the Start or Apple menu, then choose Restart (not just shut down).',
    'On a TV or streaming stick: unplug it from the wall for 30 seconds, then plug it back in.',
    'Once it\'s back on, re-connect to your WiFi and try again.',
  ],
  tip: 'A full restart is different from just locking the screen or closing the lid — it has to actually turn off and back on to clear the glitch.',
};

const fix_routerLocation: FixStep = {
  id: 'router-location',
  title: 'Move your router to a better spot',
  priority: 'medium',
  icon: MapPin,
  summary: 'WiFi gets weaker the further it travels — and walls, floors, and furniture make it worse.',
  steps: [
    'Aim for a central spot in your home — not stuffed in a corner or basement.',
    'Lift it up — on a shelf or table works better than on the floor.',
    'Keep it out in the open — cupboards, closets, and TV cabinets block the signal badly.',
    'Move it away from big metal objects (fridges, filing cabinets) and fish tanks (water blocks WiFi).',
    'Keep it at least 3 feet from a microwave — microwaves use the same frequency as WiFi.',
  ],
  tip: 'Think of WiFi like light from a lamp — the further you are and the more walls in the way, the dimmer it gets.',
};

const fix_interference: FixStep = {
  id: 'interference',
  title: 'Check for things blocking your WiFi',
  priority: 'medium',
  icon: Radio,
  summary: 'Everyday household items can quietly interfere with your WiFi signal.',
  steps: [
    'Microwaves: WiFi often drops while the microwave is running. Wait until it\'s done.',
    'Cordless phones and baby monitors: older ones can interfere — try a different channel if possible.',
    'Bluetooth speakers: can occasionally clash with WiFi when close to the router.',
    'Thick walls (brick, stone, concrete) and anything with water inside (fish tanks, water heaters) are WiFi killers.',
    'Neighbors\' WiFi on the same channel can slow yours down, especially in apartments.',
  ],
  tip: 'If your internet always slows down at the same time of day (like evenings), it may be the whole neighborhood streaming at once — call your ISP about a plan upgrade.',
};

const fix_speedTest: FixStep = {
  id: 'speed-test',
  title: 'Run a free speed test',
  priority: 'medium',
  icon: Gauge,
  summary: 'A speed test tells you if you\'re actually getting the speed you pay for.',
  steps: [
    'Open your web browser and go to fast.com (it\'s a free test from Netflix).',
    'Wait for the number to settle — it takes about 30 seconds.',
    'Write down the result. A good home speed today is 100 Mbps or higher for streaming.',
    'Try the test again from a different room to see if the speed drops far from the router.',
    'If the number is much lower than what you pay for, something is wrong — call your internet provider.',
  ],
  link: { label: 'Open fast.com', url: 'https://fast.com' },
  tip: 'Run the test while plugged into the router with a cable if you can — that shows your true incoming speed without WiFi slowing it down.',
};

const fix_callIsp: FixStep = {
  id: 'call-isp',
  title: 'When to call your internet provider',
  priority: 'high',
  icon: Phone,
  summary: 'If you\'ve restarted the router and it\'s still slow, it\'s time to call. Here\'s exactly what to say.',
  steps: [
    'Find your provider\'s support number — it\'s on your monthly bill or the sticker on your router.',
    'Tell them: "My internet is very slow and I\'ve already restarted the modem and router."',
    'Ask them: "Can you check the line from your end and see if there\'s an outage in my area?"',
    'If they offer a technician visit, ask if it\'s free — it usually is if the fault is on their side.',
    'Write down the case or ticket number they give you, in case you need to call again.',
  ],
  tip: 'Saying "I\'ve already restarted it" is the magic phrase — it jumps you past 20 minutes of basic troubleshooting questions.',
};

const fix_upgradePlan: FixStep = {
  id: 'upgrade-plan',
  title: 'Consider upgrading your plan',
  priority: 'low',
  icon: Sparkles,
  summary: 'If your plan is old, you may simply be paying for slower internet than modern streaming needs.',
  steps: [
    'Check your current speed on your last bill — look for "Mbps" (megabits per second).',
    'For one or two people streaming: 100 Mbps is a comfortable starting point.',
    'For a household with multiple TVs, video calls, and smart devices: aim for 300 Mbps or more.',
    'Call your provider and ask: "What faster plans do you have, and is there a promotion for loyal customers?"',
    'Compare against a competitor\'s offer — most providers will match or beat it to keep you.',
  ],
  tip: 'Providers rarely tell you about cheaper new-customer deals. It never hurts to ask "is this the best price you can offer me?" — the worst they can say is no.',
};

const fix_mesh: FixStep = {
  id: 'mesh',
  title: 'Look at a mesh WiFi system',
  priority: 'low',
  icon: Network,
  summary: 'A mesh system uses two or three small pucks around the house so WiFi reaches every room evenly.',
  steps: [
    'Mesh systems are worth it if your home is larger than a small flat, or if you have dead spots even after moving the router.',
    'Popular options: Google Nest WiFi, Amazon eero, TP-Link Deco. Most cost $150–$300 for a two-pack.',
    'Setup is done through a phone app — usually takes 15 minutes.',
    'You place the extra puck halfway between the router and the room with bad WiFi.',
    'Ask a family member or call TekSure for help if setup feels daunting — you only have to do it once.',
  ],
  tip: 'A WiFi "extender" is the cheaper cousin of mesh — works okay, but mesh is smoother and easier to manage. If you\'re buying new, pick mesh.',
};

/* ── Recommendation engine ───────────────── */
function getFixes(a: Answers): FixStep[] {
  const fixes: FixStep[] = [];
  const add = (f: FixStep) => { if (!fixes.find(x => x.id === f.id)) fixes.push(f); };

  // Restart the router — unless they've already done it
  if (a.restart === 'no' || a.restart === 'not-sure') {
    add(fix_routerRestart);
  }

  // Device-only problem → restart that device
  if (a.device && a.device !== 'all') {
    add(fix_deviceRestart);
  }

  // Won't connect at all — router restart is critical, device restart too
  if (a.symptom === 'wont-connect') {
    add(fix_routerRestart);
    add(fix_deviceRestart);
  }

  // Coverage issue (some rooms / far from router) → location + mesh
  if (a.where === 'some-rooms' || a.where === 'far-from-router') {
    add(fix_routerLocation);
    add(fix_interference);
    add(fix_mesh);
  }

  // Slow even near the router → it's likely the internet itself, not coverage
  if (a.where === 'near-router' || a.where === 'everywhere') {
    add(fix_speedTest);
    if (a.restart === 'yes') add(fix_callIsp);
  }

  // Buffering / calls dropping suggests speed/quality problems
  if (a.symptom === 'buffering' || a.symptom === 'calls-drop' || a.symptom === 'slow-sites') {
    add(fix_speedTest);
    add(fix_interference);
  }

  // Always been slow → plan upgrade and mesh are the likely real fix
  if (a.when === 'always') {
    add(fix_upgradePlan);
    add(fix_mesh);
    add(fix_speedTest);
  }

  // Just started today and they've already restarted → call ISP (likely outage)
  if ((a.when === 'just-now' || a.when === 'today') && a.restart === 'yes') {
    add(fix_callIsp);
  }

  // This week + everywhere → probably needs ISP call
  if (a.when === 'this-week' && (a.where === 'everywhere' || a.where === 'near-router')) {
    add(fix_callIsp);
  }

  // All devices affected → it's the router/ISP, not the device
  if (a.device === 'all' && a.restart === 'yes') {
    add(fix_callIsp);
  }

  // Safety net — always give the user *something* useful
  if (fixes.length === 0) {
    add(fix_routerRestart);
    add(fix_speedTest);
  }

  // Sort by priority: high → medium → low
  const order: Record<FixPriority, number> = { high: 0, medium: 1, low: 2 };
  fixes.sort((x, y) => order[x.priority] - order[y.priority]);
  return fixes;
}

/* ── Page component ──────────────────────── */
export default function InternetSpeedDoctor() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    symptom: null,
    when: null,
    where: null,
    device: null,
    restart: null,
  });

  const totalQuestions = 5;
  const progress = (step / totalQuestions) * 100;
  const fixes = step === totalQuestions ? getFixes(answers) : [];

  function reset() {
    setStep(0);
    setAnswers({ symptom: null, when: null, where: null, device: null, restart: null });
  }

  return (
    <>
      <SEOHead
        title="Internet Speed Doctor | TekSure"
        description="Slow internet at home? Answer 5 simple questions and get plain-language fix steps — from router restarts to when to call your provider."
        path="/tools/internet-speed-doctor"
      />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Wifi className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Internet Speed Doctor</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-6">
          Slow internet? Let's figure out what's wrong together. Answer 5 quick questions and we'll
          give you step-by-step fixes in plain language.
        </p>

        {step < totalQuestions && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>Question {step + 1} of {totalQuestions}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Step 0 — What's happening? */}
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">What's happening?</h2>
            <p className="text-muted-foreground mb-4">Pick the one that sounds most like your problem.</p>
            <div className="grid gap-3">
              {symptomOptions.map(o => (
                <button
                  key={o.id}
                  onClick={() => { setAnswers(p => ({ ...p, symptom: o.id })); setStep(1); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 min-h-[72px]"
                >
                  <span className="text-4xl shrink-0">{o.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{o.label}</div>
                    <div className="text-sm text-muted-foreground">{o.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1 — When did this start? */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">When did this start?</h2>
            <p className="text-muted-foreground mb-4">This helps us tell if it's a temporary glitch or a bigger issue.</p>
            <div className="grid gap-3">
              {whenOptions.map(o => (
                <button
                  key={o.id}
                  onClick={() => { setAnswers(p => ({ ...p, when: o.id })); setStep(2); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 min-h-[72px]"
                >
                  <span className="text-4xl shrink-0">{o.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{o.label}</div>
                    <div className="text-sm text-muted-foreground">{o.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(0)}>← Back</Button>
          </div>
        )}

        {/* Step 2 — Where in your home? */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Where in your home is it bad?</h2>
            <p className="text-muted-foreground mb-4">Room-by-room clues help us spot a WiFi coverage problem.</p>
            <div className="grid gap-3">
              {whereOptions.map(o => (
                <button
                  key={o.id}
                  onClick={() => { setAnswers(p => ({ ...p, where: o.id })); setStep(3); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 min-h-[72px]"
                >
                  <span className="text-4xl shrink-0">{o.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{o.label}</div>
                    <div className="text-sm text-muted-foreground">{o.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(1)}>← Back</Button>
          </div>
        )}

        {/* Step 3 — Which devices? */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Which devices are affected?</h2>
            <p className="text-muted-foreground mb-4">If only one device is slow, the fix is usually on that device.</p>
            <div className="grid gap-3">
              {deviceOptions.map(o => (
                <button
                  key={o.id}
                  onClick={() => { setAnswers(p => ({ ...p, device: o.id })); setStep(4); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 min-h-[72px]"
                >
                  <span className="text-4xl shrink-0">{o.emoji}</span>
                  <div className="flex-1 font-semibold text-lg">{o.label}</div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(2)}>← Back</Button>
          </div>
        )}

        {/* Step 4 — Restarted router? */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Have you tried restarting the router?</h2>
            <p className="text-muted-foreground mb-4">
              Don't worry if you haven't — we'll walk you through it. A restart fixes most problems.
            </p>
            <div className="grid gap-3">
              {restartOptions.map(o => (
                <button
                  key={o.id}
                  onClick={() => { setAnswers(p => ({ ...p, restart: o.id })); setStep(5); }}
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 min-h-[72px]"
                >
                  <span className="text-4xl shrink-0">{o.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{o.label}</div>
                    <div className="text-sm text-muted-foreground">{o.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4" onClick={() => setStep(3)}>← Back</Button>
          </div>
        )}

        {/* Step 5 — Results */}
        {step === 5 && (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-7 w-7 text-primary" />
              <h2 className="text-2xl font-bold">Here's what to try — in order</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We've matched your answers to the most likely fixes. Start at the top — each step takes
              just a few minutes. Most people solve their problem before reaching the bottom.
            </p>

            <div className="grid gap-4 mb-8">
              {fixes.map((fix, i) => {
                const Icon = fix.icon;
                const priorityLabel =
                  fix.priority === 'high' ? 'Try this first'
                  : fix.priority === 'medium' ? 'Worth a try'
                  : 'Longer-term fix';
                const priorityClass =
                  fix.priority === 'high' ? 'bg-primary text-primary-foreground'
                  : fix.priority === 'medium' ? 'bg-amber-500 text-white'
                  : 'bg-muted text-muted-foreground';
                return (
                  <Card key={fix.id} className={i === 0 ? 'border-primary/40 bg-primary/5' : ''}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="text-xs font-semibold text-muted-foreground">
                              Step {i + 1}
                            </span>
                            <Badge className={`text-xs ${priorityClass}`}>{priorityLabel}</Badge>
                          </div>
                          <h3 className="text-lg font-bold leading-tight mb-1">{fix.title}</h3>
                          <p className="text-sm text-muted-foreground">{fix.summary}</p>
                        </div>
                      </div>

                      <ol className="space-y-2 mb-3 pl-1">
                        {fix.steps.map((s, idx) => (
                          <li key={idx} className="flex gap-3 text-sm">
                            <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5">{s}</span>
                          </li>
                        ))}
                      </ol>

                      {fix.tip && (
                        <div className="rounded-lg bg-muted/60 p-3 flex gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <p className="text-sm">
                            <span className="font-semibold">Tip: </span>{fix.tip}
                          </p>
                        </div>
                      )}

                      {fix.link && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={fix.link.url} target="_blank" rel="noreferrer">
                            {fix.link.label} <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-4 mb-4">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">
                    You've got this.
                  </p>
                  <p className="text-sm text-green-800/90 dark:text-green-200/90">
                    Most internet problems are fixed by the first or second step above. If you get
                    stuck anywhere, TekSure has a friendly guide who can help — you're not on your own.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 mb-6">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
                    Heads up
                  </p>
                  <p className="text-sm text-amber-800/90 dark:text-amber-200/90">
                    Never let a stranger who calls or texts you "fix" your internet by giving them
                    remote access — that's almost always a scam. Only follow the advice above, or
                    call your provider directly using the number on your bill.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Start over
            </Button>
          </div>
        )}
      </main>
    </>
  );
}
