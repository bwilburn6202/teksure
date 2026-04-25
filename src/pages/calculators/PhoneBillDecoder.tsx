import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Plus,
  Trash2,
  DollarSign,
  Info,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  Tag,
  Scale,
  Users,
  ArrowRight,
  Sparkles,
  Copy,
  PhoneCall,
  FileSearch,
  ShieldCheck,
  Receipt,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

/* ── Types ──────────────────────────────────────────── */
type Carrier =
  | 'Verizon'
  | 'AT&T'
  | 'T-Mobile'
  | 'Cricket'
  | 'Mint'
  | 'Metro'
  | 'Spectrum Mobile'
  | 'Visible'
  | 'Boost'
  | 'Consumer Cellular'
  | 'Other';

type ItemCategory =
  | 'plan'
  | 'device'
  | 'features'
  | 'taxes-fees'
  | 'add-ons'
  | 'discounts';

interface LineItem {
  id: string;
  label: string;
  amount: string;
  category: ItemCategory;
}

interface DecodedInfo {
  plainEnglish: string;
  verdict: 'standard' | 'watch' | 'drop' | 'good';
  tip?: string;
}

/* ── Carrier list ───────────────────────────────────── */
const CARRIERS: Carrier[] = [
  'Verizon',
  'AT&T',
  'T-Mobile',
  'Cricket',
  'Mint',
  'Metro',
  'Spectrum Mobile',
  'Visible',
  'Boost',
  'Consumer Cellular',
  'Other',
];

/* ── Common line-item suggestions ───────────────────── */
interface Suggestion {
  label: string;
  category: ItemCategory;
}

const SUGGESTIONS: Suggestion[] = [
  { label: 'Plan', category: 'plan' },
  { label: 'Device payment', category: 'device' },
  { label: 'Protection / Insurance', category: 'add-ons' },
  { label: 'Hotspot', category: 'features' },
  { label: 'International calling', category: 'features' },
  { label: 'Enhanced data', category: 'features' },
  { label: 'Taxes', category: 'taxes-fees' },
  { label: 'Federal USF', category: 'taxes-fees' },
  { label: 'State/local taxes', category: 'taxes-fees' },
  { label: '911 fee', category: 'taxes-fees' },
  { label: 'Regulatory recovery fee', category: 'taxes-fees' },
  { label: 'Administrative fee', category: 'taxes-fees' },
  { label: 'Activation fee', category: 'taxes-fees' },
  { label: 'Roadside assistance', category: 'add-ons' },
  { label: 'Auto-pay discount', category: 'discounts' },
  { label: 'Paper bill fee', category: 'taxes-fees' },
  { label: 'Next-Up upgrade', category: 'add-ons' },
  { label: 'Apple Watch line', category: 'add-ons' },
  { label: 'Connected device line', category: 'add-ons' },
];

const CATEGORY_LABEL: Record<ItemCategory, string> = {
  plan: 'Plan',
  device: 'Device payment',
  features: 'Feature',
  'taxes-fees': 'Tax / Fee',
  'add-ons': 'Add-on',
  discounts: 'Discount',
};

/* ── Decoder logic ──────────────────────────────────── */
function decodeLine(label: string, category: ItemCategory): DecodedInfo {
  const l = label.toLowerCase();

  if (l.includes('next up') || l.includes('next-up')) {
    return {
      plainEnglish:
        "Next-Up is an early-upgrade program — a small monthly fee that lets you swap phones before your device is paid off. If you tend to keep phones for 2+ years, this is money you don't need to spend.",
      verdict: 'drop',
      tip: 'Ask to remove it. You can still upgrade anytime — you\'ll just have to pay off the current device first.',
    };
  }
  if (l.includes('paper bill')) {
    return {
      plainEnglish:
        'A $2-3/month fee for getting a mailed paper bill. Switching to paperless usually removes this charge instantly.',
      verdict: 'drop',
      tip: 'Go paperless in the carrier app — savings: around $24-36/year.',
    };
  }
  if (l.includes('regulatory') || l.includes('admin')) {
    return {
      plainEnglish:
        'These are NOT government taxes. They are carrier-invented line items that cover ordinary business costs — effectively part of the price. Typical range: $1-5/line/month.',
      verdict: 'watch',
      tip: 'You can\'t refuse this fee, but it can be a dealbreaker when comparing carriers. MVNOs like Mint and Consumer Cellular usually skip it.',
    };
  }
  if (l.includes('federal usf') || l.includes('universal service')) {
    return {
      plainEnglish:
        'The Federal Universal Service Fund — a real federal program that subsidizes rural phone service, schools, and libraries. Rate changes quarterly (recently around 34% of interstate call charges).',
      verdict: 'standard',
    };
  }
  if (l.includes('911')) {
    return {
      plainEnglish:
        'Funds your local 911 emergency service. Set by state or county — typically $0.50-$3.00/line/month. This is real and unavoidable.',
      verdict: 'standard',
    };
  }
  if (l.includes('tax')) {
    return {
      plainEnglish:
        'Real sales or telecom taxes collected by the carrier and paid to federal, state, or local government. Wireless taxes average around 26% in the US.',
      verdict: 'standard',
    };
  }
  if (l.includes('activation')) {
    return {
      plainEnglish:
        'A one-time charge (usually $30-$45) for turning on a new line. Often negotiable — ask the rep to waive it, especially if you\'re adding a new line or transferring from another carrier.',
      verdict: 'watch',
      tip: 'Call and ask for it to be credited back. Success rate is high.',
    };
  }
  if (l.includes('device') || l.includes('equipment') || l.includes('installment')) {
    return {
      plainEnglish:
        'Monthly payment on your phone. Normally a 24- or 36-month plan with 0% financing. Once paid off, this charge goes away — and you own the phone outright.',
      verdict: 'standard',
      tip: 'Ask the carrier how many payments are left. Paying it off frees you to switch to a cheaper plan or MVNO.',
    };
  }
  if (l.includes('protection') || l.includes('insurance')) {
    return {
      plainEnglish:
        'Optional device protection covering drops, loss, or theft — usually $7-20/month per line. Sometimes duplicates your credit card\'s purchase protection or a manufacturer warranty.',
      verdict: 'watch',
      tip: 'If your device is paid off or you have AppleCare+, check whether you\'re double-covered.',
    };
  }
  if (l.includes('hotspot')) {
    return {
      plainEnglish:
        'Lets your phone share its cellular data with a laptop or tablet. Many plans already include some hotspot data — check yours before paying extra.',
      verdict: 'watch',
    };
  }
  if (l.includes('international')) {
    return {
      plainEnglish:
        'A monthly pass for calling or using data abroad. If you haven\'t traveled in months, you\'re paying for nothing.',
      verdict: 'drop',
      tip: 'Remove it between trips. You can add it back the day before you fly.',
    };
  }
  if (l.includes('auto-pay') || l.includes('autopay')) {
    return {
      plainEnglish:
        'A recurring discount (typically $5-10/line) for enrolling in auto-pay with a bank account. Most carriers require bank debit rather than credit card to get the full amount.',
      verdict: 'good',
    };
  }
  if (l.includes('paperless')) {
    return {
      plainEnglish:
        'A discount for receiving bills electronically. Stacks with auto-pay on most carriers.',
      verdict: 'good',
    };
  }
  if (l.includes('apple watch') || l.includes('watch line') || l.includes('connected')) {
    return {
      plainEnglish:
        'A separate line for a smartwatch or connected device (usually $10-15/month). Required if you want the watch to get texts and calls when your phone isn\'t nearby.',
      verdict: 'watch',
      tip: 'If you always carry your phone with you, this may not be needed.',
    };
  }
  if (l.includes('roadside')) {
    return {
      plainEnglish:
        'Roadside assistance through the carrier — typically $3-5/month. Often duplicates what\'s already offered by your car insurance or a AAA membership.',
      verdict: 'watch',
      tip: 'Check your auto insurance policy first.',
    };
  }
  if (l.includes('plan')) {
    return {
      plainEnglish:
        'The base monthly cost of your cell plan — usually includes talk, text, and a data amount. Premium plans often bundle streaming perks.',
      verdict: 'standard',
      tip: 'If you use less than 5 GB of data a month, an MVNO plan may save you $30+/month.',
    };
  }

  /* Fallbacks by category */
  const fallback: Record<ItemCategory, DecodedInfo> = {
    plan: {
      plainEnglish: 'The base cost of your talk/text/data plan.',
      verdict: 'standard',
    },
    device: {
      plainEnglish: 'A monthly payment toward the cost of a phone or tablet.',
      verdict: 'standard',
    },
    features: {
      plainEnglish: 'An optional feature added to your plan. Worth reviewing every few months.',
      verdict: 'watch',
    },
    'taxes-fees': {
      plainEnglish: 'A tax or fee. Some are real government charges; others are carrier-imposed.',
      verdict: 'watch',
    },
    'add-ons': {
      plainEnglish: 'An optional add-on. These are easy to drop if unused.',
      verdict: 'watch',
    },
    discounts: {
      plainEnglish: 'A discount reducing your total bill.',
      verdict: 'good',
    },
  };
  return fallback[category];
}

function verdictBadge(verdict: DecodedInfo['verdict']) {
  switch (verdict) {
    case 'standard':
      return (
        <Badge className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 border-0">
          Standard
        </Badge>
      );
    case 'watch':
      return (
        <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200 border-0">
          Worth a look
        </Badge>
      );
    case 'drop':
      return (
        <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200 border-0">
          Often droppable
        </Badge>
      );
    case 'good':
      return (
        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200 border-0">
          Keep this
        </Badge>
      );
  }
}

function verdictIcon(verdict: DecodedInfo['verdict']) {
  const base = 'h-5 w-5 shrink-0';
  switch (verdict) {
    case 'standard':
      return <Info className={`${base} text-slate-500`} aria-hidden="true" />;
    case 'watch':
      return <AlertTriangle className={`${base} text-amber-600`} aria-hidden="true" />;
    case 'drop':
      return <AlertTriangle className={`${base} text-rose-600`} aria-hidden="true" />;
    case 'good':
      return <CheckCircle2 className={`${base} text-emerald-600`} aria-hidden="true" />;
  }
}

/* ── Utility ────────────────────────────────────────── */
function parseAmount(raw: string): number {
  const n = parseFloat(raw.replace(/[^0-9.\-]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function money(n: number): string {
  return `$${n.toFixed(2)}`;
}

/* ── Component ──────────────────────────────────────── */
export default function PhoneBillDecoder() {
  const { toast } = useToast();
  const [carrier, setCarrier] = useState<Carrier | ''>('');
  const [items, setItems] = useState<LineItem[]>([]);
  const [newLabel, setNewLabel] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newCategory, setNewCategory] = useState<ItemCategory>('plan');

  /* Add line item */
  const addItem = () => {
    if (!newLabel.trim()) return;
    const item: LineItem = {
      id: `li-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      label: newLabel.trim(),
      amount: newAmount.trim() || '0',
      category: newCategory,
    };
    setItems((prev) => [...prev, item]);
    setNewLabel('');
    setNewAmount('');
    setNewCategory('plan');
  };

  /* Click a suggestion chip */
  const useSuggestion = (s: Suggestion) => {
    setNewLabel(s.label);
    setNewCategory(s.category);
  };

  /* Remove line item */
  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((li) => li.id !== id));
  };

  /* Totals */
  const totals = useMemo(() => {
    const total = items.reduce((sum, i) => sum + parseAmount(i.amount), 0);
    const byCategory = items.reduce<Record<ItemCategory, number>>(
      (acc, i) => {
        acc[i.category] = (acc[i.category] || 0) + parseAmount(i.amount);
        return acc;
      },
      { plan: 0, device: 0, features: 0, 'taxes-fees': 0, 'add-ons': 0, discounts: 0 },
    );
    return { total, byCategory };
  }, [items]);

  /* Savings estimate */
  const savings = useMemo(() => {
    const list: { label: string; amount: number; why: string }[] = [];
    items.forEach((i) => {
      const d = decodeLine(i.label, i.category);
      const amt = parseAmount(i.amount);
      if (d.verdict === 'drop' && amt > 0) {
        list.push({
          label: i.label,
          amount: amt,
          why: d.tip || 'This is often easy to remove.',
        });
      }
    });
    const droppable = list.reduce((s, x) => s + x.amount, 0);
    return { list, droppable };
  }, [items]);

  /* Negotiation script */
  const negotiationScript = useMemo(() => {
    const specific = items
      .filter((i) => {
        const d = decodeLine(i.label, i.category);
        return d.verdict === 'drop' || d.verdict === 'watch';
      })
      .slice(0, 3)
      .map((i) => i.label)
      .join(', ');
    return `Hi, I've been a ${carrier || 'longtime'} customer for a few years. I'm looking at my bill and I'd like to review a few charges${
      specific ? ` — specifically ${specific}` : ''
    }. Can you walk through what I'm being charged for and help me lower my monthly cost? I'd also like to confirm I'm on the best plan for how I actually use my phone.`;
  }, [carrier, items]);

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(negotiationScript);
      toast({
        title: 'Script copied',
        description: 'Paste it into your notes or read from your phone on the call.',
      });
    } catch {
      toast({
        title: 'Could not copy',
        description: 'Select the script and copy it manually.',
      });
    }
  };

  /* ── Render ─────────────────────────────── */
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Phone Bill Decoder — Cut $20+/Month"
        description="Paste in every line from your cell phone bill and see what each charge means, which fees are negotiable, and how to save $20 or more every month — in plain English."
        path="/calculators/phone-bill"
      />

      {/* ── Hero ───────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cyan-50 to-emerald-100 dark:from-teal-950/40 dark:via-cyan-950/30 dark:to-emerald-950/40" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.35),transparent_60%)]" />
        <div className="container relative py-10 md:py-14">
          <div className="absolute top-6 right-6">
            <BookmarkButton
              type="tool"
              slug="phone-bill-decoder"
              title="Phone Bill Decoder"
              url="/calculators/phone-bill"
            />
          </div>
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Phone Bill Decoder' },
            ]}
          />
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-teal-600/10 p-3 border border-teal-600/20">
                <Phone className="h-7 w-7 text-teal-700 dark:text-teal-300" aria-hidden="true" />
              </div>
              <Badge className="bg-teal-600 text-white border-0">Money-saver</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Decode Your Phone Bill — And Save $20+/Month
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Every line item explained. Every hidden fee exposed.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl">
              Enter each charge from your bill below. We'll explain what it means, flag fees
              you can usually drop, and hand you a negotiation script that works.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main ───────────────────────────── */}
      <main className="container py-10 md:py-14 space-y-10">
        {/* Carrier picker */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Tag className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Step 1 — Who's your carrier?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="carrier" className="text-base mb-2 block">
              Pick your carrier so we can tailor the advice.
            </Label>
            <Select value={carrier} onValueChange={(v) => setCarrier(v as Carrier)}>
              <SelectTrigger id="carrier" className="min-h-14 text-base">
                <SelectValue placeholder="Choose a carrier…" />
              </SelectTrigger>
              <SelectContent>
                {CARRIERS.map((c) => (
                  <SelectItem key={c} value={c} className="text-base">
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Line-item builder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Receipt className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Step 2 — Add each line from your bill
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input row */}
            <div className="grid gap-3 md:grid-cols-[1fr_160px_180px_auto]">
              <div>
                <Label htmlFor="label" className="text-base mb-1 block">
                  Line label
                </Label>
                <Input
                  id="label"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="e.g. Plan, Device payment, Admin fee"
                  className="min-h-14 text-base"
                />
              </div>
              <div>
                <Label htmlFor="amount" className="text-base mb-1 block">
                  Amount
                </Label>
                <Input
                  id="amount"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  placeholder="$0.00"
                  inputMode="decimal"
                  className="min-h-14 text-base"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-base mb-1 block">
                  Category
                </Label>
                <Select
                  value={newCategory}
                  onValueChange={(v) => setNewCategory(v as ItemCategory)}
                >
                  <SelectTrigger id="category" className="min-h-14 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(CATEGORY_LABEL) as ItemCategory[]).map((k) => (
                      <SelectItem key={k} value={k} className="text-base">
                        {CATEGORY_LABEL[k]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  onClick={addItem}
                  className="min-h-14 text-base w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <Plus className="h-5 w-5 mr-1" aria-hidden="true" /> Add line
                </Button>
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Common line items — tap one to autofill:
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => useSuggestion(s)}
                    className="px-3 py-2 rounded-full text-sm bg-teal-50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-100 border border-teal-200 dark:border-teal-900 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition min-h-11"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Items list */}
            {items.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border p-6 text-center text-muted-foreground text-base">
                No lines yet. Add the first charge from your bill above.
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((i) => {
                  const d = decodeLine(i.label, i.category);
                  return (
                    <div
                      key={i.id}
                      className="rounded-lg border border-border bg-card p-4 md:p-5"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          {verdictIcon(d.verdict)}
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-semibold text-base md:text-lg text-foreground">
                                {i.label}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {CATEGORY_LABEL[i.category]}
                              </Badge>
                              {verdictBadge(d.verdict)}
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground mt-1">
                              {d.plainEnglish}
                            </p>
                            {d.tip && (
                              <p className="text-sm md:text-base text-teal-800 dark:text-teal-200 mt-2 flex items-start gap-1">
                                <Sparkles className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                                <span>
                                  <span className="font-semibold">Quick Tip:</span> {d.tip}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right font-semibold text-base md:text-lg text-foreground">
                            {money(parseAmount(i.amount))}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(i.id)}
                            aria-label={`Remove ${i.label}`}
                            className="min-h-11 min-w-11"
                          >
                            <Trash2 className="h-5 w-5 text-rose-600" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Totals */}
                <div className="rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-teal-700" aria-hidden="true" />
                    <span className="text-base md:text-lg font-semibold text-foreground">
                      Monthly bill total
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-teal-800 dark:text-teal-200">
                    {money(totals.total)}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Savings calculator */}
        <Card className="border-emerald-200 dark:border-emerald-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <TrendingDown className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              Here's what you could save
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {savings.list.length === 0 ? (
              <p className="text-base text-muted-foreground">
                Add a few more line items to see savings opportunities. We flag anything that's
                commonly negotiable or unneeded.
              </p>
            ) : (
              <>
                <div className="space-y-2">
                  {savings.list.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 p-3"
                    >
                      <div>
                        <p className="text-base font-semibold text-foreground">{s.label}</p>
                        <p className="text-sm text-muted-foreground">{s.why}</p>
                      </div>
                      <div className="text-emerald-800 dark:text-emerald-200 font-semibold text-base">
                        -{money(s.amount)}/mo
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-emerald-600 text-white p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <span className="text-base md:text-lg font-semibold">
                    Potential monthly savings
                  </span>
                  <span className="text-2xl font-bold">
                    up to {money(savings.droppable)}/mo
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  That's about {money(savings.droppable * 12)} a year without changing carriers.
                </p>
              </>
            )}

            <div className="grid md:grid-cols-2 gap-3 pt-2">
              <div className="rounded-md border border-border p-4">
                <p className="font-semibold text-base mb-1">Use under 5 GB of data?</p>
                <p className="text-sm text-muted-foreground mb-3">
                  An MVNO like Mint, Consumer Cellular, or Visible could cut your bill in half on
                  the same network.
                </p>
                <Button asChild variant="outline" className="min-h-11 text-base">
                  <Link to="/tools/phone-plan-comparison">
                    Compare plans <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-md border border-border p-4">
                <p className="font-semibold text-base mb-1">Device almost paid off?</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Once you own the phone, you're free to move to a cheaper carrier. Ask for your
                  payoff amount.
                </p>
                <Button asChild variant="outline" className="min-h-11 text-base">
                  <Link to="/tools/phone-plan-comparator">
                    See carrier options <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gotcha alerts */}
        <Card className="border-amber-200 dark:border-amber-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
              Hidden gotchas to watch for
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30">
              <AlertTitle className="text-base font-semibold">
                "Next-Up Anytime" — $5-7/month upgrade fund
              </AlertTitle>
              <AlertDescription className="text-sm md:text-base">
                If you keep phones for 2+ years, you're paying for an early-upgrade option you'll
                never use.
              </AlertDescription>
            </Alert>
            <Alert className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30">
              <AlertTitle className="text-base font-semibold">
                Device protection after the warranty
              </AlertTitle>
              <AlertDescription className="text-sm md:text-base">
                If you have AppleCare+, Samsung Care+, or a credit-card purchase protection, you
                may be double-covered.
              </AlertDescription>
            </Alert>
            <Alert className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30">
              <AlertTitle className="text-base font-semibold">
                "International pass" you never use
              </AlertTitle>
              <AlertDescription className="text-sm md:text-base">
                Remove the pass between trips. You can turn it back on the day before you fly.
              </AlertDescription>
            </Alert>
            <Alert className="border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/30">
              <AlertTitle className="text-base font-semibold">
                Third-party charges billed through your carrier
              </AlertTitle>
              <AlertDescription className="text-sm md:text-base">
                Old-school "cramming" scam — look for unfamiliar $9.99 or $14.99 charges. Ask
                your carrier to block all third-party billing, and dispute anything you didn't
                sign up for.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Discounts you may qualify for */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <ShieldCheck className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Discounts you may qualify for
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { label: '55+ / senior plan', detail: 'Verizon, AT&T, T-Mobile all offer 55+ pricing.' },
                { label: 'Auto-pay', detail: 'Typically $5-10/line. Bank account often beats credit card.' },
                { label: 'Paperless billing', detail: 'Often stacks with auto-pay.' },
                { label: 'Multi-line', detail: 'Per-line cost drops on 2, 3, or 4 lines.' },
                { label: 'Military / veteran', detail: 'Active and retired both qualify.' },
                { label: 'First responder', detail: 'Police, fire, EMS — ID.me usually required.' },
                { label: 'Teacher / education', detail: 'K-12 and college staff in most carriers.' },
                { label: 'Nurse / healthcare', detail: 'Carrier-specific; ask a rep.' },
              ].map((d) => (
                <div
                  key={d.label}
                  className="rounded-md border border-border p-3 bg-card"
                >
                  <p className="font-semibold text-base text-foreground">{d.label}</p>
                  <p className="text-sm text-muted-foreground">{d.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Negotiation script */}
        <Card className="border-teal-200 dark:border-teal-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <PhoneCall className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Your call script
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base text-muted-foreground">
              Call the number on the back of your bill. Tell the automated system
              "loyalty" or "cancel" to reach a retention rep — that's where discounts live.
            </p>
            <div className="rounded-lg bg-muted p-4 md:p-5 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
              {negotiationScript}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={copyScript}
                className="min-h-14 text-base bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Copy className="h-5 w-5 mr-2" aria-hidden="true" /> Copy script
              </Button>
              <Button asChild variant="outline" className="min-h-14 text-base">
                <Link to="/tools/bill-negotiator">
                  Full bill negotiator <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Switching considerations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Scale className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Thinking of switching? Check these first
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold">Port-in number:</span> you can keep your
                  existing phone number. Don't cancel the old line until the new SIM is active.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold">Unlocked device:</span> your phone must be
                  unlocked. If you're still paying it off, it may be locked. Ask your carrier to
                  unlock it once the balance is paid.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold">eSIM:</span> most modern phones use a built-in
                  eSIM — no physical card mailed, activation in minutes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold">Final bill:</span> expect one more bill from
                  the old carrier covering partial-month service. Early termination fees are
                  rare now unless you have an outstanding device balance — that you'll still owe.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Upload/paste future placeholder */}
        <Card className="border-dashed">
          <CardContent className="py-6 flex items-start gap-3">
            <FileSearch className="h-6 w-6 text-muted-foreground mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-base font-semibold text-foreground">
                Coming soon: upload or paste your bill
              </p>
              <p className="text-sm text-muted-foreground">
                We're building a reader that pulls line items straight from a PDF or photo of your
                paper bill. For now, type them in above.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Share with family */}
        <Card className="border-cyan-200 dark:border-cyan-900 bg-cyan-50/40 dark:bg-cyan-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Users className="h-5 w-5 text-cyan-700" aria-hidden="true" />
              Helping a parent or loved one
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-base text-muted-foreground">
              If you're an adult child helping a parent review their bill, a three-way call works
              well — your parent gives verbal permission and the rep will talk with you.
            </p>
            <div className="rounded-lg bg-muted p-4 md:p-5 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
              {`"Hi, my name is [YOUR NAME] and I'm on the line with my parent, [PARENT'S NAME], who is the account holder. They're giving you verbal authorization to discuss the account with me. We're reviewing the monthly bill and want to see what options are available to lower the total."`}
            </div>
            <p className="text-sm text-muted-foreground">
              Have your parent's account number, billing ZIP, and the last 4 of the card on file
              ready. The rep will ask the account holder directly before sharing details.
            </p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Info className="h-5 w-5 text-teal-700" aria-hidden="true" />
              Common questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="why-fees">
                <AccordionTrigger className="text-base md:text-lg text-left">
                  Why does my bill have so many fees?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Some are real government taxes (state/local sales tax, 911, federal USF).
                  Others — like "regulatory recovery" and "administrative" fees — are carrier
                  charges dressed up to look official. They raise your effective price without
                  raising the advertised price.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="refuse-reg">
                <AccordionTrigger className="text-base md:text-lg text-left">
                  Can I refuse the regulatory recovery fee?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  No — it's baked into the contract. But you can factor it into the real monthly
                  cost when comparing carriers. MVNOs like Mint and Consumer Cellular typically
                  skip these fees entirely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="negotiate-how-often">
                <AccordionTrigger className="text-base md:text-lg text-left">
                  How often can I negotiate?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  About every 12 months is realistic. If your promo ends or prices jump, call
                  sooner. The best time is right before your annual renewal date.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="downgrade">
                <AccordionTrigger className="text-base md:text-lg text-left">
                  Is a lower bill a downgrade?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Not usually. Most people overpay for data they never touch. Dropping from a
                  premium unlimited plan to a matched-usage plan can save $20-40/month without
                  any noticeable change. You can always move back up if your needs change.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="unlocked">
                <AccordionTrigger className="text-base md:text-lg text-left">
                  What's a GSM-unlocked phone?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  "Unlocked" means the phone isn't tied to one carrier's SIM — you can move it
                  freely between carriers. "GSM" refers to the old 2G/3G cell standard used by
                  AT&T and T-Mobile. On modern phones (iPhone, most Android), an unlocked device
                  will work on any US carrier as long as it supports the right LTE and 5G bands.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Related tools */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Related tools</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-3">
            <Button asChild variant="outline" className="min-h-14 text-base justify-between">
              <Link to="/tools/phone-plan-comparison">
                Phone plan comparison <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="min-h-14 text-base justify-between">
              <Link to="/tools/bill-negotiator">
                Bill negotiator <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="min-h-14 text-base justify-between">
              <Link to="/tools/bill-decoder">
                Full bill decoder <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>

    </div>
  );
}
