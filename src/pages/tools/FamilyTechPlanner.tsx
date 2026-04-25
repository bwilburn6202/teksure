import { useState, useMemo } from 'react';
import {
  Users, CheckCircle2, RotateCcw, ChevronRight, Printer, Heart, Shield,
  Phone, Wifi, Monitor, Smartphone, AlertTriangle, Calendar, BookOpen,
  UserCheck, Sparkles, ExternalLink, Download, LifeBuoy,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ── Types ───────────────────────────────── */
type Relationship = 'parent' | 'grandparent' | 'spouse' | 'myself';
type Device = 'iphone' | 'android' | 'basic-phone' | 'no-phone';
type WifiStatus = 'yes' | 'no' | 'not-sure';
type ComputerUse = 'daily' | 'sometimes' | 'never';
type Concern = 'scams' | 'staying-in-touch' | 'emergencies' | 'money' | 'shopping' | 'entertainment';
type Support = 'nobody' | 'one-person' | 'multiple';
type Remote = 'yes' | 'no' | 'not-sure';

interface Answers {
  relationship: Relationship | null;
  device: Device | null;
  wifi: WifiStatus | null;
  computer: ComputerUse | null;
  concerns: Concern[];
  support: Support | null;
  remote: Remote | null;
}

const emptyAnswers: Answers = {
  relationship: null,
  device: null,
  wifi: null,
  computer: null,
  concerns: [],
  support: null,
  remote: null,
};

/* ── Options ────────────────────────────── */
const relationshipOptions: { id: Relationship; label: string; emoji: string; desc: string }[] = [
  { id: 'parent',      label: 'A parent',      emoji: '', desc: "Mom, dad, or step-parent" },
  { id: 'grandparent', label: 'A grandparent', emoji: '',      desc: "Grandma, grandpa, or elder relative" },
  { id: 'spouse',      label: 'My spouse',     emoji: '',      desc: "Husband, wife, or partner" },
  { id: 'myself',      label: 'Myself',        emoji: '',      desc: "Planning for my own future" },
];

const deviceOptions: { id: Device; label: string; emoji: string; desc: string }[] = [
  { id: 'iphone',      label: 'iPhone',       emoji: '', desc: 'Apple smartphone' },
  { id: 'android',     label: 'Android',      emoji: '', desc: 'Samsung, Google, etc.' },
  { id: 'basic-phone', label: 'Basic phone',  emoji: '', desc: 'Flip phone or old-style' },
  { id: 'no-phone',    label: 'No phone yet', emoji: '', desc: "Doesn't have one" },
];

const concernOptions: { id: Concern; label: string; emoji: string; desc: string }[] = [
  { id: 'scams',             label: 'Avoiding scams',        emoji: '', desc: 'Phone, text, and email scams' },
  { id: 'staying-in-touch',  label: 'Staying in touch',      emoji: '', desc: 'Video calls, messages, photos' },
  { id: 'emergencies',       label: 'Medical emergencies',   emoji: '', desc: 'Reaching help quickly' },
  { id: 'money',             label: 'Managing money',        emoji: '', desc: 'Banking, bills, payments' },
  { id: 'shopping',          label: 'Shopping online',       emoji: '', desc: 'Buying safely on Amazon, etc.' },
  { id: 'entertainment',     label: 'Entertainment',         emoji: '', desc: 'Streaming, books, games' },
];

/* ── Guide library (TekSure guide slugs) ───── */
interface GuideRef { title: string; slug: string; why: string; }

const guideLibrary: Record<string, GuideRef> = {
  'emergency-contacts':    { title: 'Set up emergency contacts',          slug: '/guides/emergency-contacts',          why: "So help can be reached in seconds on the lock screen." },
  'medical-id':            { title: 'Turn on Medical ID',                 slug: '/guides/medical-id-iphone',           why: "Paramedics can see allergies and medications without unlocking the phone." },
  'large-text':            { title: 'Make text larger and easier to read', slug: '/guides/accessibility-large-text',   why: "Reduces squinting and mistakes tapping small buttons." },
  'passcode':              { title: 'Set a strong passcode',              slug: '/guides/set-passcode',                why: "First line of defense if the phone is lost." },
  'contacts-import':       { title: 'Add important contacts',             slug: '/guides/add-contacts',                why: "One-tap access to family, doctor, and neighbors." },
  'spam-filter':           { title: 'Silence unknown callers',            slug: '/guides/silence-unknown-callers',     why: "Stops most robocalls without missing real calls." },
  'two-factor':            { title: 'Turn on two-factor authentication',  slug: '/tools/two-factor-setup',             why: "Scammers can't get in even with the password." },
  'password-manager':      { title: 'Set up a password manager',          slug: '/tools/password-manager',             why: "No more forgotten passwords or reused ones." },
  'video-call':            { title: 'Make your first video call',         slug: '/guides/first-video-call',            why: "Seeing family's faces cuts loneliness more than voice calls." },
  'photo-sharing':         { title: 'Share photos with family',           slug: '/guides/share-photos',                why: "Shared albums keep everyone feeling connected." },
  'scam-basics':           { title: 'Spot a scam in 10 seconds',          slug: '/tools/is-this-a-scam',               why: "The single biggest threat to older adults online." },
  'bank-app':              { title: "Set up your bank's app",             slug: '/guides/bank-app-setup',              why: "Safer than using the website on a shared computer." },
  'automatic-backup':      { title: 'Turn on automatic backup',           slug: '/tools/backup-wizard',                why: "Photos and contacts survive a lost or broken phone." },
  'wifi-setup':            { title: 'Connect to home WiFi',               slug: '/guides/connect-to-wifi',             why: "Avoids burning through the cellular data plan." },
  'streaming-basics':      { title: 'Pick a streaming service',           slug: '/tools/streaming-calculator',         why: "Entertainment without cable-TV sticker shock." },
  'remote-help':           { title: 'Enable remote assistance',           slug: '/guides/remote-support-setup',        why: "Family can fix problems without driving over." },
  'do-not-disturb':        { title: 'Quiet hours / Do Not Disturb',       slug: '/guides/do-not-disturb',              why: "Keeps scam calls at bay during dinner and sleep." },
  'find-my':               { title: 'Turn on Find My / location share',   slug: '/guides/find-my-setup',               why: "Helps if the phone is lost or there's an emergency." },
  'facetime-share':        { title: 'Share your screen on FaceTime',      slug: '/guides/facetime-screen-share',       why: "Family can visually walk them through a fix." },
  'subscription-audit':    { title: 'Audit subscriptions',                slug: '/tools/subscription-auditor',         why: "Catches forgotten charges before they add up." },
};

/* ── Plan builder ────────────────────────── */
interface Plan {
  setupChecklist: GuideRef[];
  recommendedTools: { name: string; desc: string; href: string; icon: typeof Shield }[];
  remoteSupport: { name: string; desc: string; best: boolean }[];
  redFlags: string[];
  weeklyCheckins: string[];
  caregiverResources: { label: string; href: string }[];
}

function buildPlan(a: Answers): Plan {
  const order: string[] = [];
  const push = (key: string) => { if (!order.includes(key)) order.push(key); };

  // 1. Foundations first (device literacy / accessibility)
  if (a.device === 'iphone' || a.device === 'android') {
    push('large-text');
    push('passcode');
  }
  if (a.wifi === 'yes') push('wifi-setup');

  // 2. Emergency-critical items
  if (a.concerns.includes('emergencies')) {
    push('emergency-contacts');
    push('medical-id');
    push('find-my');
  }
  // Default emergency setup even if not selected — for older adults always a good idea
  if (a.relationship === 'parent' || a.relationship === 'grandparent') {
    push('emergency-contacts');
  }

  // 3. Scam protection
  if (a.concerns.includes('scams')) {
    push('scam-basics');
    push('spam-filter');
    push('two-factor');
  }

  // 4. Money / Banking
  if (a.concerns.includes('money')) {
    push('bank-app');
    push('password-manager');
    push('two-factor');
    push('subscription-audit');
  }

  // 5. Staying in touch
  if (a.concerns.includes('staying-in-touch')) {
    push('video-call');
    push('photo-sharing');
    push('contacts-import');
  }

  // 6. Shopping
  if (a.concerns.includes('shopping')) {
    push('scam-basics');
    push('two-factor');
  }

  // 7. Entertainment
  if (a.concerns.includes('entertainment')) {
    push('streaming-basics');
  }

  // 8. Safety-net items
  push('automatic-backup');
  if (a.remote === 'yes' || a.remote === 'not-sure') push('remote-help');
  if (a.remote === 'yes') push('facetime-share');
  push('do-not-disturb');

  const checklist = order
    .map(k => guideLibrary[k])
    .filter(Boolean)
    .slice(0, 10);

  /* Recommended tools */
  const tools: Plan['recommendedTools'] = [];
  if (a.concerns.includes('scams')) {
    tools.push({ name: 'Scam Simulator',     desc: 'Practice spotting fake messages safely.',       href: '/tools/scam-simulator',     icon: Shield });
    tools.push({ name: 'Is This a Scam?',    desc: 'Paste any suspicious message for analysis.',    href: '/tools/is-this-a-scam',     icon: Shield });
  }
  if (a.concerns.includes('emergencies')) {
    tools.push({ name: 'Emergency Tech Kit', desc: 'Printable checklist for power outages and crises.', href: '/tools/tech-emergency-kit', icon: LifeBuoy });
  }
  if (a.concerns.includes('money')) {
    tools.push({ name: 'Subscription Auditor', desc: "Find and cancel forgotten recurring charges.", href: '/tools/subscription-auditor', icon: Shield });
    tools.push({ name: 'Password Manager',    desc: 'One secure place for every login.',             href: '/tools/password-manager',     icon: Shield });
  }
  if (a.concerns.includes('staying-in-touch')) {
    tools.push({ name: 'App Recommender',     desc: 'Best apps for video calls and photo sharing.', href: '/tools/app-recommender',    icon: Smartphone });
  }
  if (a.concerns.includes('shopping')) {
    tools.push({ name: 'URL Safety Checker',  desc: 'Verify a link before clicking.',               href: '/tools/url-safety-checker', icon: Shield });
  }
  if (a.wifi === 'no' || a.wifi === 'not-sure') {
    tools.push({ name: 'Internet Speed Doctor', desc: 'Diagnose slow WiFi or help setting it up.',  href: '/tools/internet-speed-doctor', icon: Wifi });
  }
  if (a.computer === 'daily' || a.computer === 'sometimes') {
    tools.push({ name: 'Cyber Scorecard',     desc: 'Rate their computer security in 5 minutes.',   href: '/tools/cyber-scorecard',    icon: Monitor });
  }

  /* Remote support options */
  const remoteSupport: Plan['remoteSupport'] = [];
  if (a.device === 'iphone') {
    remoteSupport.push({ name: 'FaceTime SharePlay + screen share', desc: 'Built into iPhone — no extra apps. They start a FaceTime, then tap "Share My Screen".', best: true });
  }
  if (a.computer === 'daily' || a.computer === 'sometimes') {
    remoteSupport.push({ name: 'Microsoft Quick Assist',  desc: 'Free, built into Windows 10/11. Type "Quick Assist" in Start, give you the 6-digit code.', best: a.device !== 'iphone' });
    remoteSupport.push({ name: 'TeamViewer QuickSupport', desc: 'Works on any computer. They install once; you connect with an ID when needed.',          best: false });
  }
  if (a.device === 'android') {
    remoteSupport.push({ name: 'Google Meet with screen share', desc: 'Free. They share their phone screen; you can see and talk them through fixes.', best: true });
  }
  if (remoteSupport.length === 0) {
    remoteSupport.push({ name: 'Phone + FaceTime audio', desc: "If the device is simpler, a voice call walkthrough is still the most reliable option.", best: true });
  }

  /* Red flags */
  const redFlags = [
    'Getting confused by tasks that used to be easy (emails, remote control, unlocking the phone)',
    'Missing more phone calls or texts than usual',
    'Strange charges on bank or credit card statements',
    'New apps or icons on the phone they don\'t remember installing',
    'Pop-ups claiming "your computer is infected — call this number"',
    'Unfamiliar contacts, or a caller they won\'t describe',
    'Shipping boxes arriving for things they didn\'t order',
    'Sudden urgency about sending money, gift cards, or crypto',
  ];

  /* Weekly check-ins */
  const weeklyCheckins = [
    'Sunday video call — just a "hi, how are you" to maintain the habit',
    'Ask: "Anything strange on the phone this week?" — listen for scam attempts',
    'Glance at the bank app together once a month to spot odd charges',
    'Every 3 months: run the Cyber Scorecard and see if scores are holding',
    'Every 6 months: confirm emergency contacts and Medical ID are still right',
  ];

  /* Caregiver resources */
  const caregiverResources = [
    { label: 'Caregiver Hub',               href: '/caregiver-hub' },
    { label: 'Scam Defense Center',         href: '/scam-defense' },
    { label: 'Senior Tech Learning Path',   href: '/senior-tech-path' },
    { label: 'Dementia Care Tech',          href: '/dementia-care-tech' },
    { label: 'Accessibility Hub',           href: '/accessibility' },
    { label: 'Family Sharing setup',        href: '/family-sharing' },
  ];

  return { setupChecklist: checklist, recommendedTools: tools, remoteSupport, redFlags, weeklyCheckins, caregiverResources };
}

/* ── Component ───────────────────────────── */
const TOTAL_STEPS = 5;

export default function FamilyTechPlanner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);

  const plan = useMemo(() => step === TOTAL_STEPS ? buildPlan(answers) : null, [step, answers]);
  const progress = (step / TOTAL_STEPS) * 100;
  const forName =
    answers.relationship === 'parent'      ? 'your parent' :
    answers.relationship === 'grandparent' ? 'your grandparent' :
    answers.relationship === 'spouse'      ? 'your spouse' :
    answers.relationship === 'myself'      ? 'you' : 'them';

  function reset() { setStep(0); setAnswers(emptyAnswers); }
  function toggleConcern(c: Concern) {
    setAnswers(prev => ({
      ...prev,
      concerns: prev.concerns.includes(c) ? prev.concerns.filter(x => x !== c) : [...prev.concerns, c],
    }));
  }

  return (
    <>
      <SEOHead
        title="Family Tech Planner | TekSure"
        description="Build a personalized tech support plan for aging parents. Setup checklist, scam protection, remote help, and weekly check-ins — all in one printable card."
        path="/tools/family-tech-planner"
      />
      <main className="container py-10 min-h-[80vh] max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="relative">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="family-tech-planner"
              title="Family Tech Planner"
              url="/tools/family-tech-planner"
            />
          </div>
          <div className="flex items-center gap-3 mb-3 pr-14">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Family Tech Planner</h1>
              <p className="text-sm text-muted-foreground">For families organizing tech support for aging parents</p>
            </div>
          </div>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Helping an older family member with technology can feel like a lot. This planner walks you through a few simple
            questions and builds a personalized plan — setup checklist, scam protection, remote help, and gentle red flags
            to watch for. There are no wrong answers, and you can always come back and redo it.
          </p>
        </div>

        {/* Progress */}
        {step < TOTAL_STEPS && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {step + 1} of {TOTAL_STEPS}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Step 0 — Relationship */}
        {step === 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">Who are you making this plan for?</h2>
            <p className="text-muted-foreground mb-6">The plan will be tailored to how you describe the relationship.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relationshipOptions.map(r => (
                <button
                  key={r.id}
                  onClick={() => { setAnswers(p => ({ ...p, relationship: r.id })); setStep(1); }}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 hover:shadow-sm"
                >
                  <span className="text-4xl">{r.emoji}</span>
                  <div>
                    <div className="text-lg font-semibold">{r.label}</div>
                    <div className="text-sm text-muted-foreground">{r.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 1 — Device + WiFi + Computer */}
        {step === 1 && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">What's their current setup?</h2>
            <p className="text-muted-foreground mb-6">A quick snapshot so the plan matches what {forName} actually use{answers.relationship === 'myself' ? '' : 's'}.</p>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3"> Main phone</h3>
              <div className="grid grid-cols-2 gap-3">
                {deviceOptions.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setAnswers(p => ({ ...p, device: d.id }))}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      answers.device === d.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/60 hover:bg-primary/5'
                    }`}
                  >
                    <span className="text-3xl">{d.emoji}</span>
                    <div>
                      <div className="font-medium">{d.label}</div>
                      <div className="text-xs text-muted-foreground">{d.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3"> Home WiFi</h3>
              <div className="grid grid-cols-3 gap-3">
                {(['yes', 'no', 'not-sure'] as WifiStatus[]).map(v => (
                  <button
                    key={v}
                    onClick={() => setAnswers(p => ({ ...p, wifi: v }))}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                      answers.wifi === v
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/60'
                    }`}
                  >
                    {v === 'yes' ? 'Yes, has WiFi' : v === 'no' ? 'No WiFi' : 'Not sure'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3"> Uses a computer?</h3>
              <div className="grid grid-cols-3 gap-3">
                {(['daily', 'sometimes', 'never'] as ComputerUse[]).map(v => (
                  <button
                    key={v}
                    onClick={() => setAnswers(p => ({ ...p, computer: v }))}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all capitalize ${
                      answers.computer === v
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/60'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setStep(0)}>← Back</Button>
              <Button
                onClick={() => setStep(2)}
                disabled={!answers.device || !answers.wifi || !answers.computer}
              >
                Continue <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </section>
        )}

        {/* Step 2 — Concerns */}
        {step === 2 && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">What are your biggest concerns?</h2>
            <p className="text-muted-foreground mb-6">Pick as many as apply — the plan will focus on these first.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {concernOptions.map(c => {
                const selected = answers.concerns.includes(c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => toggleConcern(c.id)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                      selected
                        ? 'border-primary bg-primary/10 shadow-sm'
                        : 'border-border bg-card hover:border-primary/60 hover:bg-primary/5'
                    }`}
                  >
                    <span className="text-3xl">{c.emoji}</span>
                    <div className="flex-1">
                      <div className="text-lg font-semibold">{c.label}</div>
                      <div className="text-sm text-muted-foreground">{c.desc}</div>
                    </div>
                    {selected && <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setStep(1)}>← Back</Button>
              <Button
                onClick={() => setStep(3)}
                disabled={answers.concerns.length === 0}
              >
                Continue ({answers.concerns.length} selected) <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </section>
        )}

        {/* Step 3 — Support availability */}
        {step === 3 && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">Who can help in person?</h2>
            <p className="text-muted-foreground mb-6">This changes how we set up the plan — especially for things only someone in the room can help with.</p>
            <div className="grid gap-3 mb-8">
              {[
                { id: 'nobody',       label: 'Nobody nearby',      emoji: '', desc: 'Family all lives far away. In-person help means a flight.' },
                { id: 'one-person',   label: 'One person nearby',  emoji: '', desc: 'A spouse, one child, or a neighbor who can drop by.' },
                { id: 'multiple',     label: 'Multiple people',    emoji: '', desc: 'Several family members or friends within driving distance.' },
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => { setAnswers(p => ({ ...p, support: s.id as Support })); setStep(4); }}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-4xl">{s.emoji}</span>
                  <div className="flex-1">
                    <div className="text-lg font-semibold">{s.label}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              ))}
            </div>
            <Button variant="ghost" onClick={() => setStep(2)}>← Back</Button>
          </section>
        )}

        {/* Step 4 — Remote access */}
        {step === 4 && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">Should family be able to help remotely?</h2>
            <p className="text-muted-foreground mb-6">
              Remote access lets you see their screen and tap through a fix from anywhere. It's very handy, but some people
              prefer not to have it enabled — both answers are fine.
            </p>
            <div className="grid gap-3 mb-8">
              {[
                { id: 'yes',       label: 'Yes, please set that up',       emoji: '', desc: "We'll recommend FaceTime screen share, Quick Assist, or TeamViewer." },
                { id: 'no',        label: 'No, they prefer privacy',       emoji: '', desc: "We'll focus on phone-walkthrough strategies instead." },
                { id: 'not-sure',  label: 'Not sure — show me options',    emoji: '', desc: "We'll explain the trade-offs and let you decide." },
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => { setAnswers(p => ({ ...p, remote: s.id as Remote })); setStep(TOTAL_STEPS); }}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="text-4xl">{s.emoji}</span>
                  <div className="flex-1">
                    <div className="text-lg font-semibold">{s.label}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              ))}
            </div>
            <Button variant="ghost" onClick={() => setStep(3)}>← Back</Button>
          </section>
        )}

        {/* Step 5 — Personalized Plan */}
        {step === TOTAL_STEPS && plan && (
          <section className="print:max-w-none">
            <div className="flex flex-wrap items-center gap-3 mb-2 print:hidden">
              <Sparkles className="h-7 w-7 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Your Family Tech Plan</h2>
              <div className="ml-auto flex gap-2">
                <Button size="sm" variant="outline" onClick={() => window.print()} className="gap-2">
                  <Printer className="h-4 w-4" /> Print / Save PDF
                </Button>
                <Button size="sm" variant="outline" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Start over
                </Button>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              A personalized plan for <strong className="text-foreground">{forName}</strong>.
              Work through the checklist in order — even one item a week makes a real difference.
            </p>

            {/* Printable plan card */}
            <div className="space-y-6">
              {/* Priority setup checklist */}
              <Card className="border-primary/40 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Priority setup checklist</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Do these in order — each one takes 5–15 minutes. Skip nothing; the early ones make everything else safer.
                  </p>
                  <ol className="space-y-3">
                    {plan.setupChecklist.map((g, i) => (
                      <li key={g.slug} className="flex items-start gap-3 p-3 rounded-lg bg-background">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <Link to={g.slug} className="text-base font-semibold text-primary hover:underline">
                            {g.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-0.5">{g.why}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Recommended tools */}
              {plan.recommendedTools.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold">Recommended TekSure tools</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {plan.recommendedTools.map(t => {
                        const Icon = t.icon;
                        return (
                          <Link
                            key={t.href}
                            to={t.href}
                            className="flex items-start gap-3 p-4 rounded-xl border-2 border-border hover:border-primary/60 hover:bg-primary/5 transition-all"
                          >
                            <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold">{t.name}</div>
                              <div className="text-sm text-muted-foreground">{t.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Remote support setup */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Remote support setup</h3>
                  </div>
                  {answers.remote === 'no' ? (
                    <p className="text-base">
                      You chose not to enable remote access. That's a fine choice — many people prefer the privacy.
                      When help is needed, walk through fixes over a regular phone call or FaceTime voice call.
                      Keep a notepad of common fixes near the phone.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Try the first option below first — set it up once on a calm afternoon so it's ready when it's needed.
                      </p>
                      {plan.remoteSupport.map((r, i) => (
                        <div
                          key={i}
                          className={`p-4 rounded-xl border-2 ${r.best ? 'border-primary/50 bg-primary/5' : 'border-border bg-background'}`}
                        >
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-base">{r.name}</span>
                            {r.best && <Badge className="bg-primary text-primary-foreground text-xs">Best pick</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Emergency contacts callout */}
              <Card className="border-rose-200 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-900">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                    <h3 className="text-xl font-bold">Emergency contacts setup</h3>
                  </div>
                  <p className="text-base mb-3">
                    This is the single most important item on the whole plan. If a paramedic finds their phone,
                    they need to reach someone in seconds without unlocking it.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start gap-2"><span className="text-rose-600 dark:text-rose-400">•</span> Add 3 emergency contacts visible on the lock screen</li>
                    <li className="flex items-start gap-2"><span className="text-rose-600 dark:text-rose-400">•</span> Fill in Medical ID (allergies, medications, blood type)</li>
                    <li className="flex items-start gap-2"><span className="text-rose-600 dark:text-rose-400">•</span> Test that 911 works with the phone locked</li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/guides/emergency-contacts">
                        Open the Emergency Contacts guide <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly check-ins */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Weekly check-in rhythm</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Small, consistent contact catches problems early. Pick one or two that feel natural.
                  </p>
                  <ul className="space-y-2">
                    {plan.weeklyCheckins.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-base">
                        <UserCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Red flags */}
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-900">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-xl font-bold">Red flags to watch for</h3>
                  </div>
                  <p className="text-base mb-3">
                    These can hint at confusion, memory changes, or an active scam. Any one isn't a crisis — a pattern is
                    worth a gentle conversation.
                  </p>
                  <ul className="space-y-2 text-base">
                    {plan.redFlags.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 dark:text-amber-400 font-bold"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Caregiver resources */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Resources for caregivers</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    You're doing an important job. These hubs collect deeper reads, templates, and community stories.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {plan.caregiverResources.map(r => (
                      <Link
                        key={r.href}
                        to={r.href}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/5 transition-all"
                      >
                        <span className="font-medium">{r.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Closing note */}
              <div className="rounded-2xl bg-primary/5 border-2 border-primary/20 p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-lg font-semibold mb-1">You're not alone in this.</p>
                <p className="text-base text-muted-foreground">
                  Every family figures this out one step at a time. Print this plan, pick the first item, and set a 15-minute
                  visit — that's enough for today.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 print:hidden">
                <Button variant="outline" onClick={() => window.print()} className="gap-2">
                  <Download className="h-4 w-4" /> Save as PDF
                </Button>
                <Button variant="outline" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Start over
                </Button>
                <Button asChild>
                  <Link to="/tools"><Phone className="h-4 w-4 mr-1" /> More tools</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
