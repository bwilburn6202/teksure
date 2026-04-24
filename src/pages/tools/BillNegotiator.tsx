import { useMemo, useRef, useState } from 'react';
import {
  PhoneCall,
  Copy,
  Printer,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  DollarSign,
  Clock,
  TrendingDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ── Types ─────────────────────────────────────────── */
type BillType = 'cable' | 'internet' | 'phone' | 'cell' | 'streaming';
type Tenure = 'under-1' | '1-3' | '3-plus';
type YesNo = 'yes' | 'no';

interface Inputs {
  billType: BillType | '';
  provider: string;
  currentCost: string;
  tenure: Tenure | '';
  calledBefore: YesNo | '';
  competitorOption: YesNo | '';
}

/* ── Bill-type metadata ────────────────────────────── */
const billTypeLabels: Record<BillType, string> = {
  cable: 'Cable TV',
  internet: 'Internet',
  phone: 'Home phone / landline',
  cell: 'Cell phone',
  streaming: 'Streaming service',
};

const billTypeService: Record<BillType, string> = {
  cable: 'cable TV service',
  internet: 'internet service',
  phone: 'home phone service',
  cell: 'cell phone service',
  streaming: 'streaming subscription',
};

/* ── Dynamic script content ────────────────────────── */
function getOpening(tenure: Tenure, provider: string): string {
  const name = provider.trim() || 'your provider';
  if (tenure === 'under-1') {
    return `Hi, my name is [YOUR NAME]. I've been a ${name} customer for less than a year, and I'm calling because my monthly bill is higher than I expected. I'd like to see what can be done to bring it down.`;
  }
  if (tenure === '1-3') {
    return `Hi, my name is [YOUR NAME]. I've been a loyal ${name} customer for a couple of years now, and my bill has been creeping up. I'd like to review my account and find a lower rate.`;
  }
  return `Hi, my name is [YOUR NAME]. I've been a ${name} customer for over three years — a long-time loyal customer — and my bill keeps going up. I'd like to talk about what loyalty discounts or promotional rates you can offer me.`;
}

function getTalkingPoints(billType: BillType): string[] {
  switch (billType) {
    case 'cable':
      return [
        'I don\'t watch as many channels as I used to — I\'m only using a small portion of my package.',
        'Streaming services are much cheaper, and I\'m considering cutting the cord.',
        'New-customer promotions on your website advertise much lower rates than what I\'m paying.',
        'I\'d like to either remove channels I don\'t watch or move to a smaller package.',
      ];
    case 'internet':
      return [
        'I see new customers are being offered faster speeds for less than what I pay.',
        'My speed is fine, but the price has gone up significantly since I signed up.',
        'I mainly use internet for email, video calls, and browsing — I don\'t need top-tier speeds.',
        'If my bill can\'t be lowered, I\'ll need to look at other providers in my area.',
      ];
    case 'phone':
      return [
        'I use the home phone less and less — I\'d like a basic plan with no extras.',
        'The monthly cost keeps rising even though I\'m using it less.',
        'I\'d like you to review any add-ons or features I\'m not actually using.',
        'If we can\'t find a better rate, I\'ll consider switching to a digital or VoIP option.',
      ];
    case 'cell':
      return [
        'I don\'t use nearly as much data as my plan allows — I\'d like a smaller plan.',
        'New customers are offered the same plan at a much lower price.',
        'My phone is paid off, so the device fee should no longer apply.',
        'Other carriers are offering me a better deal to switch — I\'d rather stay if you can match it.',
      ];
    case 'streaming':
      return [
        'The price has gone up, and I\'m not watching as much as I used to.',
        'I\'m considering canceling and moving to a free or ad-supported tier.',
        'Are there any promotions, annual-plan discounts, or bundles available?',
        'If I downgrade, what lower-cost plan would still cover what I watch?',
      ];
  }
}

function getPhoneTreeTips(billType: BillType): string {
  if (billType === 'streaming') {
    return `Most streaming services don\'t have a phone line for retention — but they do have a "Cancel" or "Pause" flow on their website. Start the cancellation process online. Right before you confirm, most services will offer a discount, an ad-supported tier, or a free month to keep you. Accept the best offer, or go through with the cancellation if the offer is weak. If a phone number is available, say "cancel my subscription" or "billing" to get to a real person.`;
  }
  return [
    'When the phone tree asks why you\'re calling, say "cancel my service" or "disconnect" — NOT "billing" or "support". This routes you to the retention department, which has the authority to offer discounts.',
    'If asked to press a number, listen for options like "thinking of leaving," "cancel service," or "customer loyalty."',
    'If stuck with a bot or menu, press 0 or say "representative" or "agent" repeatedly until it transfers you.',
    'When a human answers, politely confirm: "Am I speaking with the retention department? I want to make sure I\'m talking to someone who can help me lower my bill."',
  ].join(' ');
}

function getObjectionHandling(): string[] {
  return [
    'If they say "I\'m sorry, there\'s nothing I can do": Respond calmly with "I understand that may be the case at your level. Could you please transfer me to someone in the retention or customer loyalty department? They usually have more options."',
    'If they offer a tiny discount ($5–$10): Say "I appreciate that, but it\'s not quite enough for me to stay. Is there a longer promotional rate or a different plan you could move me to?"',
    'If they say "That\'s only for new customers": Say "I\'ve been a loyal customer for [X] years. It doesn\'t make sense that a new customer gets a better deal than I do. Can you match that rate as a loyalty gesture?"',
    'If they push a bundle or upsell: Say "I\'m not looking to add services today — I\'m looking to lower what I\'m already paying. Let\'s focus on that."',
    'Stay polite, but stay firm. Silence is your friend — don\'t fill the quiet. Let them come back with an offer.',
  ];
}

function getFallback(competitor: YesNo, provider: string, billType: BillType): string {
  const name = provider.trim() || 'your current provider';
  const service = billTypeService[billType];
  if (competitor === 'yes') {
    return `"I want to be upfront — I\'ve already looked into other providers, and I have an offer from [COMPETITOR NAME] for ${service} at a lower rate. I\'d prefer to stay with ${name} because I\'m familiar with your service, but only if you can get close to that price. What can you do for me today?"`;
  }
  return `"I understand you may not be able to match every competitor, but I\'m genuinely reviewing my budget. If nothing can be done today, I\'ll need to start shopping around — I\'ve seen other providers advertising ${service} for much less. I\'d rather stay with ${name}, but the price has to come down. What options do you have?"`;
}

function getClosing(): string[] {
  return [
    'Once they offer a discount you\'re happy with, say: "Great, I\'d like to accept that. Can you confirm the new monthly rate, how long it lasts, and whether any fees or taxes will change?"',
    'Ask: "Will I need to do anything on my end? Will this show up on my next bill?"',
    'Get a confirmation or reference number: "Could I have a confirmation number for this change so I can reference it if there\'s an issue?"',
    'Write down the rep\'s name, the date, the confirmation number, the new rate, and when the promotion ends. Store this in a safe place.',
    'Thank them genuinely — being polite is a real advantage. Say: "Thank you for your help today. I really appreciate you taking the time to work with me."',
    'After the call, set a calendar reminder for one month BEFORE the promotional rate ends, so you can call again and renegotiate.',
  ];
}

/* ── Savings estimate ──────────────────────────────── */
function estimateSavings(inputs: Inputs): { monthlyLow: number; monthlyHigh: number } {
  const cost = parseFloat(inputs.currentCost) || 0;
  if (cost <= 0) return { monthlyLow: 0, monthlyHigh: 0 };

  let low = 0.1;
  let high = 0.15;

  if (inputs.tenure === '1-3') {
    low = 0.15;
    high = 0.25;
  } else if (inputs.tenure === '3-plus') {
    low = 0.2;
    high = 0.3;
  }

  if (inputs.competitorOption === 'yes') {
    low += 0.05;
    high += 0.05;
  }

  // Slightly lower upside if they've already called recently
  if (inputs.calledBefore === 'yes') {
    low = Math.max(0.05, low - 0.05);
    high = Math.max(0.1, high - 0.05);
  }

  // Streaming tends to give smaller cash savings (smaller base)
  if (inputs.billType === 'streaming') {
    low = Math.max(0.1, low - 0.05);
    high = Math.max(0.15, high - 0.05);
  }

  return {
    monthlyLow: Math.round(cost * low * 100) / 100,
    monthlyHigh: Math.round(cost * high * 100) / 100,
  };
}

/* ── Script assembly ───────────────────────────────── */
interface ScriptSection {
  title: string;
  body: string | string[];
}

function buildScript(inputs: Inputs): ScriptSection[] {
  if (!inputs.billType || !inputs.tenure || !inputs.competitorOption) return [];
  const provider = inputs.provider.trim() || '[PROVIDER]';

  return [
    {
      title: '1. Opening — what to say when they pick up',
      body: getOpening(inputs.tenure, provider),
    },
    {
      title: '2. State your purpose clearly',
      body:
        `"I\'d like to review my account and see what promotional rates, loyalty discounts, or lower plans are available. My current bill is about $${
          parseFloat(inputs.currentCost) || 0
        } per month, and I need to bring that down."`,
    },
    {
      title: `3. Key talking points for ${billTypeLabels[inputs.billType]}`,
      body: getTalkingPoints(inputs.billType),
    },
    {
      title: '4. How to reach the retention department',
      body: getPhoneTreeTips(inputs.billType),
    },
    {
      title: '5. Your specific request',
      body:
        `"What I\'m hoping for is a lower monthly rate — something closer to what new customers are paying. Can you pull up any current promotions I\'d qualify for, and walk me through my options?"`,
    },
    {
      title: '6. If the rep says "no" — how to push back',
      body: getObjectionHandling(),
    },
    {
      title: '7. Your fallback line',
      body: getFallback(inputs.competitorOption as YesNo, provider, inputs.billType),
    },
    {
      title: '8. Confirm the deal before hanging up',
      body: getClosing(),
    },
    {
      title: '9. How to end the call',
      body:
        `"Thank you for your time and for working with me today. Have a wonderful rest of your day." Then, once you\'re off the call, write everything down and set that calendar reminder. Nice work — this call may save you hundreds over the year.`,
    },
  ];
}

function scriptToPlainText(sections: ScriptSection[], inputs: Inputs): string {
  const header = [
    'BILL NEGOTIATION SCRIPT — from TekSure',
    '',
    `Bill type:     ${inputs.billType ? billTypeLabels[inputs.billType] : ''}`,
    `Provider:      ${inputs.provider || ''}`,
    `Current cost:  $${inputs.currentCost || '0'} / month`,
    '',
    '────────────────────────────────────────',
    '',
  ].join('\n');

  const body = sections
    .map((s) => {
      const content = Array.isArray(s.body) ? s.body.map((l) => `• ${l}`).join('\n') : s.body;
      return `${s.title}\n\n${content}\n`;
    })
    .join('\n');

  return header + body;
}

/* ── Component ─────────────────────────────────────── */
export default function BillNegotiator() {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<Inputs>({
    billType: '',
    provider: '',
    currentCost: '',
    tenure: '',
    calledBefore: '',
    competitorOption: '',
  });
  const [showScript, setShowScript] = useState(false);
  const scriptRef = useRef<HTMLDivElement | null>(null);

  const script = useMemo(() => buildScript(inputs), [inputs]);
  const savings = useMemo(() => estimateSavings(inputs), [inputs]);

  const formComplete =
    inputs.billType &&
    inputs.provider.trim().length > 0 &&
    parseFloat(inputs.currentCost) > 0 &&
    inputs.tenure &&
    inputs.calledBefore &&
    inputs.competitorOption;

  function handleGenerate() {
    if (!formComplete) {
      toast({
        title: 'Please fill in every field',
        description: 'We need all the details to write a script that fits your situation.',
      });
      return;
    }
    setShowScript(true);
    setTimeout(() => scriptRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(scriptToPlainText(script, inputs));
      toast({
        title: 'Script copied',
        description: 'You can paste it into Notes, email, or print it out.',
      });
    } catch {
      toast({
        title: "Couldn't copy automatically",
        description: 'Try selecting the text manually and pressing Ctrl+C (or Cmd+C on Mac).',
      });
    }
  }

  function handlePrint() {
    window.print();
  }

  function handleReset() {
    setInputs({
      billType: '',
      provider: '',
      currentCost: '',
      tenure: '',
      calledBefore: '',
      competitorOption: '',
    });
    setShowScript(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const yearlyLow = Math.round(savings.monthlyLow * 12);
  const yearlyHigh = Math.round(savings.monthlyHigh * 12);

  return (
    <>
      <SEOHead
        title="Bill Negotiator | TekSure"
        description="Generate a personalized phone script to lower your cable, internet, phone, cell, or streaming bill. Most callers save around $300 a year in 15 minutes."
        path="/tools/bill-negotiator"
      />

      {/* Print-only styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          main { padding: 0 !important; max-width: none !important; }
          .print-break-avoid { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

      <div className="no-print">
        <Navbar />
      </div>

      <main className="container py-10 min-h-[80vh] max-w-3xl mx-auto text-lg">
        <div className="relative no-print">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="bill-negotiator"
              title="Bill Negotiator"
              url="/tools/bill-negotiator"
            />
          </div>
          <div className="flex items-center gap-3 mb-2 pr-14">
            <PhoneCall className="h-8 w-8 text-primary" aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold">Bill Negotiator</h1>
          </div>
          <p className="text-muted-foreground mb-6">
            Answer six quick questions and we&apos;ll write you a personalized phone script to lower your
            cable, internet, phone, cell, or streaming bill.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 no-print">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-4 flex items-center gap-3">
              <DollarSign className="h-7 w-7 text-primary shrink-0" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold">$300</div>
                <div className="text-sm text-muted-foreground">average yearly savings</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Clock className="h-7 w-7 text-primary shrink-0" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold">15 min</div>
                <div className="text-sm text-muted-foreground">typical call length</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <TrendingDown className="h-7 w-7 text-primary shrink-0" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm text-muted-foreground">success rate</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Input form */}
        <Card className="no-print print-break-avoid">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Tell us about your bill</h2>

            {/* Bill type */}
            <div className="space-y-2">
              <Label htmlFor="bill-type" className="text-base">
                What kind of bill are you negotiating?
              </Label>
              <Select
                value={inputs.billType}
                onValueChange={(v: BillType) => setInputs((p) => ({ ...p, billType: v }))}
              >
                <SelectTrigger id="bill-type" className="h-12 text-base">
                  <SelectValue placeholder="Choose a bill type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cable"> Cable TV</SelectItem>
                  <SelectItem value="internet"> Internet</SelectItem>
                  <SelectItem value="phone"> Home phone / landline</SelectItem>
                  <SelectItem value="cell"> Cell phone</SelectItem>
                  <SelectItem value="streaming"> Streaming service</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Provider */}
            <div className="space-y-2">
              <Label htmlFor="provider" className="text-base">
                Who is your provider?
              </Label>
              <Input
                id="provider"
                className="h-12 text-base"
                placeholder="e.g. Comcast, Verizon, AT&T, Netflix"
                value={inputs.provider}
                onChange={(e) => setInputs((p) => ({ ...p, provider: e.target.value }))}
              />
            </div>

            {/* Current cost */}
            <div className="space-y-2">
              <Label htmlFor="cost" className="text-base">
                What&apos;s your current monthly cost? (dollars)
              </Label>
              <Input
                id="cost"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                className="h-12 text-base"
                placeholder="e.g. 120"
                value={inputs.currentCost}
                onChange={(e) => setInputs((p) => ({ ...p, currentCost: e.target.value }))}
              />
            </div>

            {/* Tenure */}
            <div className="space-y-3">
              <Label className="text-base">How long have you been with this provider?</Label>
              <RadioGroup
                value={inputs.tenure}
                onValueChange={(v: Tenure) => setInputs((p) => ({ ...p, tenure: v }))}
                className="grid gap-2"
              >
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="under-1" id="tenure-under-1" />
                  <span>Less than 1 year</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="1-3" id="tenure-1-3" />
                  <span>1 to 3 years</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="3-plus" id="tenure-3-plus" />
                  <span>More than 3 years</span>
                </label>
              </RadioGroup>
            </div>

            {/* Called before */}
            <div className="space-y-3">
              <Label className="text-base">Have you called to negotiate this bill before?</Label>
              <RadioGroup
                value={inputs.calledBefore}
                onValueChange={(v: YesNo) => setInputs((p) => ({ ...p, calledBefore: v }))}
                className="grid grid-cols-2 gap-2"
              >
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="yes" id="called-yes" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="no" id="called-no" />
                  <span>No</span>
                </label>
              </RadioGroup>
            </div>

            {/* Competitor */}
            <div className="space-y-3">
              <Label className="text-base">
                Is there a real competitor you could switch to in your area?
              </Label>
              <RadioGroup
                value={inputs.competitorOption}
                onValueChange={(v: YesNo) => setInputs((p) => ({ ...p, competitorOption: v }))}
                className="grid grid-cols-2 gap-2"
              >
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="yes" id="comp-yes" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer">
                  <RadioGroupItem value="no" id="comp-no" />
                  <span>Not really</span>
                </label>
              </RadioGroup>
            </div>

            <Button
              size="lg"
              className="w-full h-14 text-lg gap-2"
              onClick={handleGenerate}
              disabled={!formComplete}
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Generate my script
            </Button>
          </CardContent>
        </Card>

        {/* Script output */}
        {showScript && script.length > 0 && (
          <div ref={scriptRef} className="mt-10 space-y-6">
            {/* Savings estimate */}
            <Card className="border-primary/40 bg-primary/5 print-break-avoid">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h2 className="text-2xl font-bold">Your estimated savings</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Based on your tenure, competitor availability, and bill type, a successful call
                  typically saves you:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-background p-4 border">
                    <div className="text-sm text-muted-foreground mb-1">Per month</div>
                    <div className="text-3xl font-bold text-primary">
                      ${savings.monthlyLow.toFixed(2)} – ${savings.monthlyHigh.toFixed(2)}
                    </div>
                  </div>
                  <div className="rounded-xl bg-background p-4 border">
                    <div className="text-sm text-muted-foreground mb-1">Per year</div>
                    <div className="text-3xl font-bold text-primary">
                      ${yearlyLow} – ${yearlyHigh}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 no-print">
              <Button size="lg" onClick={handleCopy} className="gap-2 h-12 text-base">
                <Copy className="h-5 w-5" aria-hidden="true" /> Copy script
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handlePrint}
                className="gap-2 h-12 text-base"
              >
                <Printer className="h-5 w-5" aria-hidden="true" /> Print
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={handleReset}
                className="gap-2 h-12 text-base ml-auto"
              >
                <RotateCcw className="h-5 w-5" aria-hidden="true" /> Start over
              </Button>
            </div>

            {/* Script card */}
            <Card className="print-break-avoid">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <h2 className="text-2xl font-bold">Your personalized script</h2>
                  <Badge className="bg-primary text-primary-foreground">
                    {inputs.billType ? billTypeLabels[inputs.billType] : ''}
                  </Badge>
                  {inputs.provider && <Badge variant="outline">{inputs.provider}</Badge>}
                </div>
                <p className="text-muted-foreground mb-6">
                  Read each section slowly. Pause where you see a comma. It&apos;s normal to feel
                  nervous — reps talk to people like you all day.
                </p>

                <div className="space-y-6">
                  {script.map((section, i) => (
                    <div key={i} className="print-break-avoid">
                      <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                      {Array.isArray(section.body) ? (
                        <ul className="space-y-2 pl-5 list-disc">
                          {section.body.map((line, j) => (
                            <li key={j} className="leading-relaxed">
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="leading-relaxed whitespace-pre-wrap">{section.body}</p>
                      )}
                      {i < script.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety / realism note */}
            <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 no-print">
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300 mb-1">
                 A few things to remember
              </p>
              <ul className="text-sm text-amber-800/90 dark:text-amber-200/90 list-disc pl-5 space-y-1">
                <li>Not every call succeeds. If the first rep won&apos;t budge, hang up politely and call back later — you may reach someone more flexible.</li>
                <li>
                  Be kind. Reps are people too, and politeness gets you further than pressure.
                </li>
                <li>
                  Savings estimates are typical outcomes — your actual result depends on your
                  provider and account.
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
