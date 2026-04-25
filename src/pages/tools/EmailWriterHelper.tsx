import { useMemo, useRef, useState } from 'react';
import {
  Mail,
  Copy,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Minus,
  Plus,
  Shuffle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ─────────────────────────────────────────── */
type EmailKind =
  | 'complain'
  | 'cancel'
  | 'medical-records'
  | 'doctor-question'
  | 'interview-followup'
  | 'thank-you'
  | 'difficult-family'
  | 'reschedule'
  | 'refund'
  | 'benefits';

type Recipient = 'stranger' | 'professional' | 'family' | 'friend';
type Tone = 'polite-firm' | 'warm' | 'formal' | 'casual';
type Length = 'short' | 'normal' | 'long';

interface Inputs {
  kind: EmailKind | '';
  recipientType: Recipient | '';
  recipientName: string;
  yourName: string;
  tone: Tone | '';
  keyPoints: string;
}

/* ── Labels & metadata ─────────────────────────────── */
const kindLabels: Record<EmailKind, string> = {
  complain: 'Complain about bad service',
  cancel: 'Cancel a subscription',
  'medical-records': 'Request medical records',
  'doctor-question': 'Ask a doctor a question',
  'interview-followup': 'Follow up after a job interview',
  'thank-you': 'Send a thank-you note',
  'difficult-family': 'Address a difficult family topic',
  reschedule: 'Reschedule an appointment',
  refund: 'Ask for a refund',
  benefits: 'Apply for benefits',
};

const kindEmojis: Record<EmailKind, string> = {
  complain: '',
  cancel: '',
  'medical-records': '',
  'doctor-question': '',
  'interview-followup': '',
  'thank-you': '',
  'difficult-family': '',
  reschedule: '',
  refund: '',
  benefits: '',
};

const recipientLabels: Record<Recipient, string> = {
  stranger: "Someone I don't know",
  professional: 'A professional (doctor, lawyer, agent, etc.)',
  family: 'A family member',
  friend: 'A friend',
};

const toneLabels: Record<Tone, string> = {
  'polite-firm': 'Polite & firm',
  warm: 'Warm',
  formal: 'Formal',
  casual: 'Casual',
};

/* ── Subject lines ─────────────────────────────────── */
function getSubject(kind: EmailKind, tone: Tone): string {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  switch (kind) {
    case 'complain':
      return tone === 'formal'
        ? `Formal complaint regarding recent service — ${today}`
        : `Concern about a recent experience — ${today}`;
    case 'cancel':
      return 'Request to cancel my subscription';
    case 'medical-records':
      return 'Request for a copy of my medical records';
    case 'doctor-question':
      return 'Quick question about my care';
    case 'interview-followup':
      return 'Thank you — following up on our interview';
    case 'thank-you':
      return 'Thank you';
    case 'difficult-family':
      return "Something I've been wanting to share";
    case 'reschedule':
      return 'Request to reschedule our appointment';
    case 'refund':
      return 'Refund request';
    case 'benefits':
      return 'Application for benefits — please see details';
  }
}

/* ── Greeting ──────────────────────────────────────── */
function getGreeting(recipient: Recipient, tone: Tone, name: string): string {
  const n = name.trim();
  const nameSuffix = n ? ` ${n}` : '';

  if (recipient === 'stranger') {
    if (tone === 'formal') return 'To Whom It May Concern,';
    if (tone === 'casual') return 'Hello,';
    return n ? `Dear${nameSuffix},` : 'Hello,';
  }

  if (recipient === 'professional') {
    if (tone === 'casual') return n ? `Hi${nameSuffix},` : 'Hello,';
    return n ? `Dear${nameSuffix},` : 'Dear Sir or Madam,';
  }

  if (recipient === 'family') {
    if (tone === 'formal') return n ? `Dear${nameSuffix},` : 'Dear family,';
    return n ? `Hi${nameSuffix},` : 'Hi,';
  }

  // friend
  if (tone === 'formal') return n ? `Dear${nameSuffix},` : 'Dear friend,';
  if (tone === 'casual') return n ? `Hey${nameSuffix},` : 'Hey,';
  return n ? `Hi${nameSuffix},` : 'Hi,';
}

/* ── Opening sentence (context) ────────────────────── */
function getOpening(kind: EmailKind, tone: Tone): string {
  switch (kind) {
    case 'complain':
      return tone === 'polite-firm'
        ? 'I am writing to share my disappointment with a recent experience and to ask that it be made right.'
        : tone === 'formal'
        ? 'I am writing to formally express my dissatisfaction with a recent interaction and to request your attention to the matter.'
        : tone === 'warm'
        ? 'I really wanted to reach out because something happened recently that left me upset, and I hope we can sort it out together.'
        : "I wanted to let you know something didn't go the way I hoped, and I'd like to see if we can fix it.";
    case 'cancel':
      return tone === 'formal'
        ? 'I am writing to formally request that my subscription be cancelled effective immediately.'
        : "I'm writing to ask that you cancel my subscription.";
    case 'medical-records':
      return 'I am writing to request a complete copy of my medical records for my personal files.';
    case 'doctor-question':
      return tone === 'warm'
        ? "I hope you're doing well. I had a question I was hoping you could help me with."
        : "I'm writing with a brief question about my care.";
    case 'interview-followup':
      return 'Thank you again for taking the time to meet with me. I wanted to follow up on our conversation.';
    case 'thank-you':
      return tone === 'warm'
        ? 'I just wanted to take a moment to say thank you — it really meant a lot to me.'
        : 'I wanted to take a moment to express my thanks.';
    case 'difficult-family':
      return tone === 'warm'
        ? "I've been thinking about how to say this for a while, and I want you to know that I'm sharing this with love."
        : "There is something I've been wanting to share with you, and I felt a letter would give me the space to say it clearly.";
    case 'reschedule':
      return "I'm writing to ask if we could reschedule our upcoming appointment.";
    case 'refund':
      return tone === 'polite-firm'
        ? 'I am writing to request a refund for a recent purchase, and I would appreciate your help in resolving this quickly.'
        : tone === 'formal'
        ? 'I am writing to formally request a refund for a recent purchase.'
        : "I'm writing to ask for a refund on a recent purchase.";
    case 'benefits':
      return 'I am writing to apply for benefits and to provide the information needed to support my application.';
  }
}

/* ── Body expansion of user key points ─────────────── */
function splitPoints(raw: string): string[] {
  if (!raw.trim()) return [];
  // Split on newlines or numbered bullets; fall back to single block
  const byLine = raw
    .split(/\r?\n+/)
    .map((l) => l.replace(/^\s*[-•*\d.)]+\s*/, '').trim())
    .filter((l) => l.length > 0);
  if (byLine.length > 1) return byLine;

  // Fall back: split on sentences if the user wrote one paragraph
  const sentences = raw
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  return sentences.length > 0 ? sentences : [raw.trim()];
}

function expandPoint(point: string, tone: Tone, index: number): string {
  const clean = point.trim();
  if (!clean) return '';

  const connectors: Record<Tone, string[]> = {
    'polite-firm': [
      'Specifically,',
      'I would also like to note that',
      'In addition,',
      'It is important to me that',
    ],
    warm: [
      'I also want to share that',
      'Something else on my mind is that',
      'And on a related note,',
      "I'd also like you to know that",
    ],
    formal: [
      'Please be advised that',
      'I would like to bring to your attention that',
      'Furthermore,',
      'For your consideration,',
    ],
    casual: ['Also,', 'One more thing —', 'Just wanted to mention,', 'And'],
  };

  const pool = connectors[tone];
  const connector = index === 0 ? '' : `${pool[index % pool.length]} `;

  // Make sure the expanded point reads like a sentence
  const normalized = clean.replace(/\s+/g, ' ');
  const withPeriod = /[.!?]$/.test(normalized) ? normalized : `${normalized}.`;

  if (!connector) return withPeriod;

  // Lowercase the first letter when following a connector phrase
  const joined = `${connector}${withPeriod.charAt(0).toLowerCase()}${withPeriod.slice(1)}`;
  return joined;
}

function getKindContextLine(kind: EmailKind): string {
  switch (kind) {
    case 'complain':
      return "Here's what happened, in my own words:";
    case 'cancel':
      return "Here are the details of the account I'd like cancelled:";
    case 'medical-records':
      return 'To help you locate my file, here are the details:';
    case 'doctor-question':
      return "Here's what I've been wondering about:";
    case 'interview-followup':
      return 'A few things I wanted to highlight from our conversation:';
    case 'thank-you':
      return 'I especially want to thank you for:';
    case 'difficult-family':
      return "I'll try to say it plainly:";
    case 'reschedule':
      return "Here are the details of the appointment and what I'm hoping for:";
    case 'refund':
      return "Here are the details of the purchase and why I'm asking for a refund:";
    case 'benefits':
      return 'Here are the details that support my application:';
  }
}

function getKindAsk(kind: EmailKind, tone: Tone): string {
  switch (kind) {
    case 'complain':
      return tone === 'polite-firm'
        ? 'I would appreciate a response letting me know how this will be made right.'
        : tone === 'formal'
        ? 'I respectfully request a written response outlining what steps will be taken.'
        : 'Could you please let me know what can be done to fix this?';
    case 'cancel':
      return 'Please confirm in writing that my subscription has been cancelled and that I will not be billed again.';
    case 'medical-records':
      return 'Please let me know the next step — whether there is a form to sign or a fee to pay — and how I can receive the records.';
    case 'doctor-question':
      return "Whenever you have a moment, I'd appreciate your guidance.";
    case 'interview-followup':
      return "Please let me know if there's anything else I can provide. I'd welcome the chance to continue the conversation.";
    case 'thank-you':
      return '';
    case 'difficult-family':
      return "I'm not asking for an immediate reply — I just wanted you to know how I feel.";
    case 'reschedule':
      return "Please let me know what times work on your end, and I'll do my best to match one of them.";
    case 'refund':
      return tone === 'polite-firm'
        ? 'Please confirm the refund and let me know when I can expect to see it.'
        : 'Could you please let me know how the refund will be issued?';
    case 'benefits':
      return 'Please let me know if anything further is needed to complete my application.';
  }
}

/* ── Closing & signature ───────────────────────────── */
function getClosingLine(tone: Tone): string {
  switch (tone) {
    case 'polite-firm':
      return 'I appreciate your time and attention, and I look forward to hearing back.';
    case 'warm':
      return 'Thank you so much — it really means a lot.';
    case 'formal':
      return 'Thank you for your consideration of this matter.';
    case 'casual':
      return 'Thanks a bunch.';
  }
}

function getSignOff(tone: Tone): string {
  switch (tone) {
    case 'polite-firm':
      return 'Sincerely,';
    case 'warm':
      return 'With appreciation,';
    case 'formal':
      return 'Respectfully,';
    case 'casual':
      return 'Thanks,';
  }
}

/* ── Length adjustments ────────────────────────────── */
function adjustBody(bodyLines: string[], length: Length): string[] {
  if (length === 'short') {
    // Keep the first 1–2 expanded points, drop the rest
    return bodyLines.slice(0, Math.min(2, bodyLines.length));
  }
  if (length === 'long') {
    // Add a reflection line at the end
    return [
      ...bodyLines,
      "I've taken some time to think this through, and I felt it was important to put it in writing so nothing gets lost in translation.",
    ];
  }
  return bodyLines;
}

/* ── Email assembly ────────────────────────────────── */
interface ComposedEmail {
  subject: string;
  greeting: string;
  opening: string;
  context: string;
  bodyPoints: string[];
  ask: string;
  closing: string;
  signOff: string;
  signature: string;
}

function composeEmail(inputs: Inputs, length: Length): ComposedEmail | null {
  if (!inputs.kind || !inputs.recipientType || !inputs.tone) return null;

  const points = splitPoints(inputs.keyPoints);
  const expanded = points.map((p, i) => expandPoint(p, inputs.tone as Tone, i)).filter(Boolean);
  const adjusted = adjustBody(expanded, length);

  return {
    subject: getSubject(inputs.kind, inputs.tone),
    greeting: getGreeting(inputs.recipientType, inputs.tone, inputs.recipientName),
    opening: getOpening(inputs.kind, inputs.tone),
    context: getKindContextLine(inputs.kind),
    bodyPoints: adjusted,
    ask: getKindAsk(inputs.kind, inputs.tone),
    closing: getClosingLine(inputs.tone),
    signOff: getSignOff(inputs.tone),
    signature: inputs.yourName.trim() || '[Your name]',
  };
}

function emailToPlainText(e: ComposedEmail): string {
  const bodyBlock =
    e.bodyPoints.length > 0 ? `${e.context}\n\n${e.bodyPoints.join('\n\n')}\n\n` : '';
  const askBlock = e.ask ? `${e.ask}\n\n` : '';

  return [
    `Subject: ${e.subject}`,
    '',
    e.greeting,
    '',
    e.opening,
    '',
    bodyBlock + askBlock + e.closing,
    '',
    e.signOff,
    e.signature,
  ].join('\n');
}

/* ── Tone cycling (for "try a different tone") ─────── */
const toneOrder: Tone[] = ['polite-firm', 'warm', 'formal', 'casual'];
function nextTone(current: Tone): Tone {
  const i = toneOrder.indexOf(current);
  return toneOrder[(i + 1) % toneOrder.length];
}

/* ── Component ─────────────────────────────────────── */
export default function EmailWriterHelper() {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<Inputs>({
    kind: '',
    recipientType: '',
    recipientName: '',
    yourName: '',
    tone: '',
    keyPoints: '',
  });
  const [showEmail, setShowEmail] = useState(false);
  const [length, setLength] = useState<Length>('normal');
  const emailRef = useRef<HTMLDivElement | null>(null);

  const email = useMemo(() => composeEmail(inputs, length), [inputs, length]);

  const formComplete =
    inputs.kind &&
    inputs.recipientType &&
    inputs.tone &&
    inputs.keyPoints.trim().length > 0;

  function handleGenerate() {
    if (!formComplete) {
      toast({
        title: 'A few things are missing',
        description:
          'Please choose the kind of email, the recipient, a tone, and add a few key points before we write the draft.',
      });
      return;
    }
    setShowEmail(true);
    setTimeout(
      () => emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      100,
    );
  }

  async function handleCopy() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(emailToPlainText(email));
      toast({
        title: 'Email copied to your clipboard',
        description: 'Paste it into your email app with Ctrl+V (or Cmd+V on Mac).',
      });
    } catch {
      toast({
        title: "Couldn't copy automatically",
        description: 'Select the text below and press Ctrl+C (or Cmd+C on Mac).',
      });
    }
  }

  function handleTryDifferentTone() {
    if (!inputs.tone) return;
    const next = nextTone(inputs.tone);
    setInputs((p) => ({ ...p, tone: next }));
    toast({
      title: `Rewritten with a ${toneLabels[next].toLowerCase()} tone`,
      description: 'Take a look — tap the button again to try another.',
    });
  }

  function handleShorter() {
    setLength('short');
    toast({
      title: 'Shortened',
      description: "We've trimmed the draft down to the essentials.",
    });
  }

  function handleLonger() {
    setLength('long');
    toast({
      title: 'Expanded',
      description: "We've added a little more context to the draft.",
    });
  }

  function handleReset() {
    setInputs({
      kind: '',
      recipientType: '',
      recipientName: '',
      yourName: '',
      tone: '',
      keyPoints: '',
    });
    setLength('normal');
    setShowEmail(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SEOHead
        title="Email Writer Helper | TekSure"
        description="Draft clear, polite emails for any situation — complaints, cancellations, medical requests, thank-yous, family conversations, and more. Templates only — we never send your email for you."
        path="/tools/email-writer-helper"
      />

      {/* Print-only styles (for folks who want to print the draft) */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          main { padding: 0 !important; max-width: none !important; }
          .print-break-avoid { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

      <div className="no-print">
      </div>

      <main className="container py-10 min-h-[80vh] max-w-3xl mx-auto text-lg">
        <div className="flex items-center gap-3 mb-2 no-print">
          <Mail className="h-8 w-8 text-primary" aria-hidden="true" />
          <h1 className="text-3xl md:text-4xl font-bold">Email Writer Helper</h1>
        </div>
        <p className="text-muted-foreground mb-6 no-print">
          Answer four quick questions and we&apos;ll draft a polished email you can copy into your
          email app. Works for complaints, cancellations, medical requests, thank-you notes,
          difficult family topics, and more.
        </p>

        {/* Privacy badge */}
        <div
          className="flex items-start gap-3 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-4 mb-8 no-print"
          role="note"
        >
          <ShieldCheck
            className="h-6 w-6 text-green-700 dark:text-green-300 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-base text-green-900 dark:text-green-100">
            <span className="font-semibold">Your privacy is protected.</span> This tool uses
            templates that run entirely in your browser — we never send your email for you and
            nothing you type here leaves your device.
          </p>
        </div>

        {/* Input form */}
        <Card className="no-print print-break-avoid">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Tell us about your email</h2>

            {/* Kind of email */}
            <div className="space-y-2">
              <Label htmlFor="kind" className="text-base">
                What kind of email are you writing?
              </Label>
              <Select
                value={inputs.kind}
                onValueChange={(v: EmailKind) => setInputs((p) => ({ ...p, kind: v }))}
              >
                <SelectTrigger id="kind" className="h-12 text-base">
                  <SelectValue placeholder="Choose the type of email" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(kindLabels) as EmailKind[]).map((k) => (
                    <SelectItem key={k} value={k}>
                      {kindEmojis[k]} {kindLabels[k]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Recipient type */}
            <div className="space-y-3">
              <Label className="text-base">Who will receive this email?</Label>
              <RadioGroup
                value={inputs.recipientType}
                onValueChange={(v: Recipient) =>
                  setInputs((p) => ({ ...p, recipientType: v }))
                }
                className="grid gap-2"
              >
                {(Object.keys(recipientLabels) as Recipient[]).map((r) => (
                  <label
                    key={r}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer"
                  >
                    <RadioGroupItem value={r} id={`recipient-${r}`} />
                    <span>{recipientLabels[r]}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Recipient name (optional) */}
            <div className="space-y-2">
              <Label htmlFor="recipient-name" className="text-base">
                Their name <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="recipient-name"
                className="h-12 text-base"
                placeholder='e.g. "Dr. Patel", "Aunt Mary", or leave blank'
                value={inputs.recipientName}
                onChange={(e) =>
                  setInputs((p) => ({ ...p, recipientName: e.target.value }))
                }
              />
            </div>

            {/* Tone */}
            <div className="space-y-3">
              <Label className="text-base">What tone fits this message?</Label>
              <RadioGroup
                value={inputs.tone}
                onValueChange={(v: Tone) => setInputs((p) => ({ ...p, tone: v }))}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {(Object.keys(toneLabels) as Tone[]).map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer"
                  >
                    <RadioGroupItem value={t} id={`tone-${t}`} />
                    <span>{toneLabels[t]}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Key points */}
            <div className="space-y-2">
              <Label htmlFor="key-points" className="text-base">
                What do you want to say?{' '}
                <span className="text-muted-foreground">(a few bullet points is plenty)</span>
              </Label>
              <Textarea
                id="key-points"
                className="text-base min-h-[160px]"
                placeholder={
                  'e.g.\n- My bill went up $30 this month with no warning\n- I\'ve been a customer for 7 years\n- I\'d like the old rate back or an explanation'
                }
                value={inputs.keyPoints}
                onChange={(e) =>
                  setInputs((p) => ({ ...p, keyPoints: e.target.value }))
                }
              />
              <p className="text-sm text-muted-foreground">
                Put one thought per line. Don&apos;t worry about grammar — we&apos;ll polish it up.
              </p>
            </div>

            {/* Your name */}
            <div className="space-y-2">
              <Label htmlFor="your-name" className="text-base">
                Your name <span className="text-muted-foreground">(for the signature)</span>
              </Label>
              <Input
                id="your-name"
                className="h-12 text-base"
                placeholder="e.g. Barbara Wilson"
                value={inputs.yourName}
                onChange={(e) => setInputs((p) => ({ ...p, yourName: e.target.value }))}
              />
            </div>

            <Button
              size="lg"
              className="w-full h-14 text-lg gap-2"
              onClick={handleGenerate}
              disabled={!formComplete}
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Write my email
            </Button>
          </CardContent>
        </Card>

        {/* Email output */}
        {showEmail && email && (
          <div ref={emailRef} className="mt-10 space-y-6">
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 no-print">
              <Button size="lg" onClick={handleCopy} className="gap-2 h-12 text-base">
                <Copy className="h-5 w-5" aria-hidden="true" /> Copy email
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleTryDifferentTone}
                className="gap-2 h-12 text-base"
              >
                <Shuffle className="h-5 w-5" aria-hidden="true" /> Try a different tone
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleShorter}
                className="gap-2 h-12 text-base"
                disabled={length === 'short'}
              >
                <Minus className="h-5 w-5" aria-hidden="true" /> Make it shorter
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLonger}
                className="gap-2 h-12 text-base"
                disabled={length === 'long'}
              >
                <Plus className="h-5 w-5" aria-hidden="true" /> Make it longer
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

            {/* Email card */}
            <Card className="print-break-avoid">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <h2 className="text-2xl font-bold">Your email draft</h2>
                  {inputs.kind && (
                    <Badge className="bg-primary text-primary-foreground">
                      {kindLabels[inputs.kind]}
                    </Badge>
                  )}
                  {inputs.tone && (
                    <Badge variant="outline">{toneLabels[inputs.tone]}</Badge>
                  )}
                  {length !== 'normal' && (
                    <Badge variant="outline">
                      {length === 'short' ? 'Shortened' : 'Expanded'}
                    </Badge>
                  )}
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Subject line
                  </div>
                  <div className="text-lg font-semibold rounded-lg bg-muted/60 px-4 py-3 border">
                    {email.subject}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Email body */}
                <div className="space-y-5 leading-relaxed">
                  <p className="font-semibold">{email.greeting}</p>

                  <p>{email.opening}</p>

                  {email.bodyPoints.length > 0 && (
                    <>
                      <p>{email.context}</p>
                      {email.bodyPoints.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </>
                  )}

                  {email.ask && <p>{email.ask}</p>}

                  <p>{email.closing}</p>

                  <div className="pt-2">
                    <p>{email.signOff}</p>
                    <p className="font-semibold">{email.signature}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tip note */}
            <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 no-print">
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300 mb-1">
                 A couple of tips before you send
              </p>
              <ul className="text-sm text-amber-800/90 dark:text-amber-200/90 list-disc pl-5 space-y-1">
                <li>
                  Read the draft out loud once. If a sentence feels wrong when you say it, edit it
                  before sending.
                </li>
                <li>
                  Double-check any names, dates, account numbers, or dollar amounts — the draft
                  only knows what you typed in.
                </li>
                <li>
                  For important emails, wait an hour and re-read before sending. A fresh pair of
                  eyes catches a lot.
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      <div className="no-print">
      </div>
    </>
  );
}
