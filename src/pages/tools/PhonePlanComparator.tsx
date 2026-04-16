import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Signal, Check, X, Star, DollarSign, AlertTriangle, ChevronDown, ChevronUp, Lightbulb, Globe, Wifi, Users } from 'lucide-react';

type Priority = 'price' | 'data' | 'family' | 'international' | 'hotspot';

interface Plan {
  carrier: string;
  plan: string;
  price: number;
  data: string;
  fiveG: boolean;
  familyDiscount: string;
  international: string;
  hotspot: string;
  network: string;
  bestFor: Priority[];
}

const plans: Plan[] = [
  {
    carrier: 'T-Mobile',
    plan: 'Essentials',
    price: 50,
    data: 'Unlimited',
    fiveG: true,
    familyDiscount: '$25/line with 4+ lines',
    international: 'Free texting in 215+ countries',
    hotspot: '5 GB at high speed',
    network: 'T-Mobile 5G/LTE',
    bestFor: ['price', 'international'],
  },
  {
    carrier: 'T-Mobile',
    plan: 'Go5G Plus',
    price: 90,
    data: 'Unlimited Premium',
    fiveG: true,
    familyDiscount: '$45/line with 4+ lines',
    international: 'Free data & texting in 215+ countries, 5 GB high-speed international data',
    hotspot: '50 GB at high speed',
    network: 'T-Mobile 5G/LTE',
    bestFor: ['data', 'hotspot', 'international'],
  },
  {
    carrier: 'AT&T',
    plan: 'Value Plus',
    price: 50,
    data: 'Unlimited',
    fiveG: true,
    familyDiscount: '$25/line with 4+ lines',
    international: 'No international included',
    hotspot: '5 GB at high speed',
    network: 'AT&T 5G/LTE',
    bestFor: ['price'],
  },
  {
    carrier: 'AT&T',
    plan: 'Unlimited Premium',
    price: 85,
    data: 'Unlimited Premium',
    fiveG: true,
    familyDiscount: '$40/line with 4+ lines',
    international: '5 GB international data in 19 countries',
    hotspot: '60 GB at high speed',
    network: 'AT&T 5G/LTE',
    bestFor: ['data', 'hotspot'],
  },
  {
    carrier: 'Verizon',
    plan: 'Unlimited Welcome',
    price: 65,
    data: 'Unlimited',
    fiveG: true,
    familyDiscount: '$30/line with 4+ lines',
    international: 'No international included',
    hotspot: 'Not included',
    network: 'Verizon 5G/LTE',
    bestFor: [],
  },
  {
    carrier: 'Verizon',
    plan: 'Unlimited Ultimate',
    price: 90,
    data: 'Unlimited Premium',
    fiveG: true,
    familyDiscount: '$40/line with 4+ lines',
    international: '10 GB/month international data in 210+ countries',
    hotspot: '60 GB at high speed',
    network: 'Verizon 5G/LTE',
    bestFor: ['data', 'hotspot', 'international'],
  },
  {
    carrier: 'Mint Mobile',
    plan: 'Unlimited',
    price: 30,
    data: 'Unlimited (40 GB at high speed)',
    fiveG: true,
    familyDiscount: 'No family plan (but already low price)',
    international: 'Free calls to Mexico & Canada',
    hotspot: '10 GB at high speed',
    network: 'T-Mobile 5G/LTE',
    bestFor: ['price'],
  },
  {
    carrier: 'Google Fi',
    plan: 'Simply Unlimited',
    price: 50,
    data: 'Unlimited (35 GB at high speed)',
    fiveG: true,
    familyDiscount: '$30/line with 4+ lines',
    international: 'Free texting worldwide, data in 200+ countries',
    hotspot: '5 GB at high speed',
    network: 'T-Mobile + US Cellular',
    bestFor: ['international', 'family'],
  },
  {
    carrier: 'Visible',
    plan: 'Visible+',
    price: 45,
    data: 'Unlimited Premium',
    fiveG: true,
    familyDiscount: 'No family plan (single-line only)',
    international: 'Free roaming in Mexico, Canada, and 30+ countries',
    hotspot: 'Unlimited at 10 Mbps',
    network: 'Verizon 5G/LTE',
    bestFor: ['price', 'hotspot', 'international'],
  },
  {
    carrier: 'Cricket',
    plan: 'Unlimited + 15 GB Hotspot',
    price: 55,
    data: 'Unlimited',
    fiveG: true,
    familyDiscount: '$25/line with 5 lines',
    international: 'Unlimited talk & text to 37 countries',
    hotspot: '15 GB at high speed',
    network: 'AT&T 5G/LTE',
    bestFor: ['price', 'family'],
  },
];

const priorityLabels: Record<Priority, { label: string; icon: typeof DollarSign }> = {
  price: { label: 'Low Price', icon: DollarSign },
  data: { label: 'More Data', icon: Signal },
  family: { label: 'Family Plan', icon: Users },
  international: { label: 'International', icon: Globe },
  hotspot: { label: 'Hotspot', icon: Wifi },
};

const negotiationTips = [
  'Call your carrier and say you are thinking about switching. Ask if they have any retention offers or loyalty discounts.',
  'Check if your employer offers a corporate discount — many companies have deals with major carriers that save 15-25%.',
  'If you are 55 or older, ask about senior plans. T-Mobile, AT&T, and Verizon all offer plans for people 55 and up.',
  'If you are a current or former military member, ask about military discounts. Most carriers offer significant savings.',
  'Consider prepaid carriers like Mint Mobile, Visible, or Cricket. They use the same towers as the big carriers but cost much less.',
  'Bundle your phone plan with your home internet for savings. T-Mobile, AT&T, and Verizon all offer bundle discounts.',
];

const hiddenFees = [
  { fee: 'Activation fee', description: 'One-time charge of $25-$35 when you start a new line. Ask the store to waive it.' },
  { fee: 'Taxes and regulatory fees', description: 'Typically adds $5-$10 per line per month. Some carriers (T-Mobile, Mint, Visible, Cricket) include taxes in the advertised price.' },
  { fee: 'Device payment', description: 'If you are paying off a phone in monthly installments, that is added on top of your plan price.' },
  { fee: 'Insurance/protection', description: 'Optional device protection plans can add $10-$17 per month. Consider if you really need it.' },
  { fee: 'International roaming', description: 'Using your phone overseas can cost up to $10/day unless your plan includes international roaming.' },
];

export default function PhonePlanComparator() {
  const [selectedPriorities, setSelectedPriorities] = useState<Set<Priority>>(new Set());
  const [showNegotiationTips, setShowNegotiationTips] = useState(false);
  const [showFees, setShowFees] = useState(false);

  const togglePriority = (p: Priority) => {
    setSelectedPriorities(prev => {
      const next = new Set(prev);
      next.has(p) ? next.delete(p) : next.add(p);
      return next;
    });
  };

  const scoredPlans = useMemo(() => {
    if (selectedPriorities.size === 0) return plans.map(p => ({ ...p, score: 0 }));
    return plans
      .map(p => ({
        ...p,
        score: p.bestFor.filter(bf => selectedPriorities.has(bf)).length,
      }))
      .sort((a, b) => b.score - a.score);
  }, [selectedPriorities]);

  const topScore = scoredPlans[0]?.score ?? 0;

  return (
    <>
      <SEOHead
        title="Phone Plan Comparator — Find the Best Cell Phone Plan | TekSure"
        description="Compare phone plans from AT&T, T-Mobile, Verizon, Mint Mobile, Google Fi, Visible, and Cricket side by side. Find the best plan for your needs and budget."
        path="/tools/phone-plan-comparator"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Phone Plan Comparator' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <Signal className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Phone Plan Comparator</h1>
            <p className="text-muted-foreground text-lg">
              Compare phone plans side by side and find the best option for your needs and budget.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Priority selector */}
          <Card>
            <CardHeader><CardTitle className="text-lg">What matters most to you?</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Select one or more priorities and we will highlight the best plans for you.</p>
              <div className="flex flex-wrap gap-3">
                {(Object.entries(priorityLabels) as [Priority, { label: string; icon: typeof DollarSign }][]).map(([key, { label, icon: Icon }]) => (
                  <Button
                    key={key}
                    variant={selectedPriorities.has(key) ? 'default' : 'outline'}
                    onClick={() => togglePriority(key)}
                    className="h-auto py-2"
                    aria-pressed={selectedPriorities.has(key)}
                  >
                    <Icon className="h-4 w-4 mr-2" aria-hidden="true" />
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Plans */}
          <div className="space-y-4">
            {scoredPlans.map((plan) => {
              const isBest = selectedPriorities.size > 0 && plan.score === topScore && plan.score > 0;
              return (
                <Card key={`${plan.carrier}-${plan.plan}`} className={isBest ? 'ring-2 ring-blue-500' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-base">{plan.carrier}</h3>
                          {isBest && (
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                              <Star className="h-3 w-3 mr-1" aria-hidden="true" /> Best Match
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.plan}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">${plan.price}</p>
                        <p className="text-xs text-muted-foreground">per month / line</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm mt-4">
                      <div className="flex items-start gap-2">
                        <span className="font-medium w-24 flex-shrink-0">Data:</span>
                        <span className="text-muted-foreground">{plan.data}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium w-24 flex-shrink-0">5G:</span>
                        {plan.fiveG
                          ? <span className="flex items-center gap-1 text-green-600"><Check className="h-3 w-3" aria-hidden="true" /> Included</span>
                          : <span className="flex items-center gap-1 text-muted-foreground"><X className="h-3 w-3" aria-hidden="true" /> No</span>
                        }
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium w-24 flex-shrink-0">Family:</span>
                        <span className="text-muted-foreground">{plan.familyDiscount}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium w-24 flex-shrink-0">Hotspot:</span>
                        <span className="text-muted-foreground">{plan.hotspot}</span>
                      </div>
                      <div className="flex items-start gap-2 sm:col-span-2">
                        <span className="font-medium w-24 flex-shrink-0">International:</span>
                        <span className="text-muted-foreground">{plan.international}</span>
                      </div>
                      <div className="flex items-start gap-2 sm:col-span-2">
                        <span className="font-medium w-24 flex-shrink-0">Network:</span>
                        <span className="text-muted-foreground">{plan.network}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Negotiation tips */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowNegotiationTips(!showNegotiationTips)} className="flex items-center gap-3 w-full text-left">
              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Tips for Negotiating With Your Current Carrier</span>
              {showNegotiationTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showNegotiationTips && (
              <ul className="mt-4 space-y-2">
                {negotiationTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Hidden fees warning */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowFees(!showFees)} className="flex items-center gap-3 w-full text-left">
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Watch Out for These Hidden Fees</span>
              {showFees ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showFees && (
              <div className="mt-4 space-y-3">
                {hiddenFees.map((item, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-medium">{item.fee}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
