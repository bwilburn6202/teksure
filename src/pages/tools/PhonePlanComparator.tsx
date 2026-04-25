import { useMemo, useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Signal,
  Plane,
  Video,
  Wifi,
  DollarSign,
  ExternalLink,
  Info,
  Sparkles,
  Users,
  CheckCircle2,
} from 'lucide-react';

type Lines = '1' | '2' | '3' | '4+';
type Data = 'low' | 'medium' | 'high' | 'unlimited';
type Hotspot = 'never' | 'occasional' | 'heavy';
type Budget = '20' | '30' | '40' | '50';
type YesNo = 'yes' | 'no';
type Network = 'Verizon' | 'T-Mobile' | 'AT&T' | 'Multiple';

interface Plan {
  id: string;
  carrier: string;
  plan: string;
  pricePerLine: number;
  priceNote?: string;
  network: Network;
  isMVNO: boolean;
  isSenior: boolean;
  unlimited: boolean;
  hotspotGB: number;
  internationalIncluded: boolean;
  streamingFriendly: boolean;
  dataCap?: string;
  maxLines: number;
  bestFor: string;
  features: string[];
  url: string;
}

const PLANS: Plan[] = [
  {
    id: 'verizon-welcome',
    carrier: 'Verizon',
    plan: 'Welcome Unlimited',
    pricePerLine: 65,
    network: 'Verizon',
    isMVNO: false,
    isSenior: false,
    unlimited: true,
    hotspotGB: 0,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited, may slow during congestion',
    maxLines: 10,
    bestFor: 'Light users who want Verizon coverage',
    features: ['Unlimited talk, text & data', 'Basic 5G', 'No hotspot included'],
    url: 'https://www.verizon.com/plans/unlimited/',
  },
  {
    id: 'verizon-plus',
    carrier: 'Verizon',
    plan: 'Unlimited Plus',
    pricePerLine: 90,
    network: 'Verizon',
    isMVNO: false,
    isSenior: false,
    unlimited: true,
    hotspotGB: 30,
    internationalIncluded: true,
    streamingFriendly: true,
    dataCap: 'Premium 5G Ultra Wideband',
    maxLines: 10,
    bestFor: 'Heavy data users who travel',
    features: ['Premium 5G UW', '30GB hotspot', 'Global data in 210+ countries', '4K streaming'],
    url: 'https://www.verizon.com/plans/unlimited/',
  },
  {
    id: 'att-starter',
    carrier: 'AT&T',
    plan: 'Unlimited Starter',
    pricePerLine: 65,
    network: 'AT&T',
    isMVNO: false,
    isSenior: false,
    unlimited: true,
    hotspotGB: 0,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited basic data',
    maxLines: 10,
    bestFor: 'Basic unlimited on AT&T',
    features: ['Unlimited talk, text & data', 'Standard definition streaming'],
    url: 'https://www.att.com/plans/wireless/',
  },
  {
    id: 'att-premium',
    carrier: 'AT&T',
    plan: 'Unlimited Premium',
    pricePerLine: 85,
    network: 'AT&T',
    isMVNO: false,
    isSenior: false,
    unlimited: true,
    hotspotGB: 60,
    internationalIncluded: true,
    streamingFriendly: true,
    dataCap: 'Priority unlimited',
    maxLines: 10,
    bestFor: 'Power users & frequent travelers',
    features: ['60GB hotspot', 'International roaming in 20+ countries', '4K streaming'],
    url: 'https://www.att.com/plans/wireless/',
  },
  {
    id: 'tmo-essentials',
    carrier: 'T-Mobile',
    plan: 'Essentials',
    pricePerLine: 60,
    network: 'T-Mobile',
    isMVNO: false,
    isSenior: false,
    unlimited: true,
    hotspotGB: 0,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited with slower caps during congestion',
    maxLines: 12,
    bestFor: 'Budget unlimited on T-Mobile',
    features: ['Unlimited talk, text, data', 'SD streaming', 'No hotspot priority'],
    url: 'https://www.t-mobile.com/cell-phone-plans',
  },
  {
    id: 'tmo-magenta-max',
    carrier: 'T-Mobile',
    plan: 'Go5G Next (Magenta MAX)',
    pricePerLine: 85,
    network: 'T-Mobile',
    isMVNO: false,
    isSenior: false,
    unlimited: true,
    hotspotGB: 50,
    internationalIncluded: true,
    streamingFriendly: true,
    dataCap: 'Truly unlimited premium data',
    maxLines: 12,
    bestFor: 'Heavy streamers & international travelers',
    features: ['50GB hotspot', 'Unlimited international data', '4K streaming', 'Netflix included'],
    url: 'https://www.t-mobile.com/cell-phone-plans',
  },
  {
    id: 'mint',
    carrier: 'Mint Mobile',
    plan: 'Unlimited (annual)',
    pricePerLine: 15,
    priceNote: 'With 12-month upfront commitment',
    network: 'T-Mobile',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 10,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: '40GB high-speed then throttled',
    maxLines: 5,
    bestFor: 'Budget-conscious single users',
    features: ['Uses T-Mobile 5G network', '10GB hotspot', 'Pay annually for best rate'],
    url: 'https://www.mintmobile.com/plans/',
  },
  {
    id: 'visible',
    carrier: 'Visible by Verizon',
    plan: 'Visible Unlimited',
    pricePerLine: 25,
    network: 'Verizon',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 5,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited, lower network priority',
    maxLines: 1,
    bestFor: 'Single-line users who want Verizon coverage cheap',
    features: ['Runs on Verizon network', 'Unlimited hotspot at 5Mbps', 'No contract'],
    url: 'https://www.visible.com/plans',
  },
  {
    id: 'us-mobile',
    carrier: 'US Mobile',
    plan: 'Unlimited Starter',
    pricePerLine: 25,
    network: 'Multiple',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 10,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: '35GB priority data',
    maxLines: 5,
    bestFor: 'Choice of Verizon or T-Mobile network',
    features: ['Pick your network', 'Flexible plans', 'Global roaming add-on'],
    url: 'https://www.usmobile.com/plans',
  },
  {
    id: 'cricket',
    carrier: 'Cricket Wireless',
    plan: 'Core / More',
    pricePerLine: 40,
    priceNote: '$30–$55/mo depending on tier',
    network: 'AT&T',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 15,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: '15GB high-speed then slowed',
    maxLines: 5,
    bestFor: 'AT&T coverage on a budget',
    features: ['Uses AT&T network', 'Multi-line discounts', 'No annual contract'],
    url: 'https://www.cricketwireless.com/cell-phone-plans',
  },
  {
    id: 'metro',
    carrier: 'Metro by T-Mobile',
    plan: 'Unlimited',
    pricePerLine: 40,
    priceNote: '$30–$50/mo depending on tier',
    network: 'T-Mobile',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 10,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: '35GB high-speed',
    maxLines: 5,
    bestFor: 'T-Mobile coverage on a budget',
    features: ['Uses T-Mobile 5G', 'Prepaid, no credit check', 'Free phone deals'],
    url: 'https://www.metrobyt-mobile.com/cell-phone-plans',
  },
  {
    id: 'boost',
    carrier: 'Boost Mobile',
    plan: 'Unlimited',
    pricePerLine: 35,
    priceNote: '$25–$50/mo',
    network: 'Multiple',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 12,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: '30GB high-speed',
    maxLines: 5,
    bestFor: 'Prepaid flexibility',
    features: ['Uses T-Mobile / AT&T / Dish networks', 'Prepaid', 'BYOD friendly'],
    url: 'https://www.boostmobile.com/plans.html',
  },
  {
    id: 'straight-talk',
    carrier: 'Straight Talk',
    plan: 'Unlimited',
    pricePerLine: 45,
    priceNote: '$35–$55/mo',
    network: 'Multiple',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 10,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: '25GB high-speed',
    maxLines: 5,
    bestFor: 'Walmart-available prepaid',
    features: ['Multi-network', 'Sold at Walmart & major retailers', 'No contract'],
    url: 'https://www.straighttalk.com/plans-services',
  },
  {
    id: 'tello',
    carrier: 'Tello',
    plan: 'Custom / Unlimited',
    pricePerLine: 25,
    priceNote: '$10–$35/mo flexible',
    network: 'T-Mobile',
    isMVNO: true,
    isSenior: false,
    unlimited: false,
    hotspotGB: 5,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Build your own plan',
    maxLines: 5,
    bestFor: 'Light users who want to pay less',
    features: ['Build-your-own plans', 'Uses T-Mobile network', 'No contract, no fees'],
    url: 'https://tello.com/buy/custom_plans',
  },
  {
    id: 'google-fi',
    carrier: 'Google Fi',
    plan: 'Simply Unlimited / Flexible',
    pricePerLine: 50,
    priceNote: '$20–$65/mo depending on use',
    network: 'T-Mobile',
    isMVNO: true,
    isSenior: false,
    unlimited: true,
    hotspotGB: 5,
    internationalIncluded: true,
    streamingFriendly: false,
    dataCap: '35GB high-speed on unlimited',
    maxLines: 6,
    bestFor: 'International travelers & flexible use',
    features: ['Works in 200+ countries at US rates', 'Flexible pay-per-GB option', 'Uses T-Mobile network'],
    url: 'https://fi.google.com/about/plans/',
  },
  {
    id: 'tmo-55',
    carrier: 'T-Mobile',
    plan: 'Essentials 55+',
    pricePerLine: 28,
    priceNote: '$55/mo for 2 lines (age 55+)',
    network: 'T-Mobile',
    isMVNO: false,
    isSenior: true,
    unlimited: true,
    hotspotGB: 0,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited with slower caps',
    maxLines: 2,
    bestFor: 'Couples 55+',
    features: ['Age 55+ discount', '2 lines included', 'Unlimited talk/text/data'],
    url: 'https://www.t-mobile.com/cell-phone-plans/older-americans',
  },
  {
    id: 'consumer-cellular',
    carrier: 'Consumer Cellular',
    plan: 'Unlimited',
    pricePerLine: 55,
    priceNote: '$20–$65/mo — AARP discount available',
    network: 'Multiple',
    isMVNO: true,
    isSenior: true,
    unlimited: true,
    hotspotGB: 10,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited on top tier',
    maxLines: 3,
    bestFor: 'Seniors who want US-based support',
    features: ['Senior-focused service', 'AARP member 5% discount', 'US-based customer support'],
    url: 'https://www.consumercellular.com/shopping/plans',
  },
  {
    id: 'att-55',
    carrier: 'AT&T',
    plan: 'Unlimited 55+',
    pricePerLine: 40,
    priceNote: 'Age 55+, currently Florida residents only',
    network: 'AT&T',
    isMVNO: false,
    isSenior: true,
    unlimited: true,
    hotspotGB: 0,
    internationalIncluded: false,
    streamingFriendly: false,
    dataCap: 'Unlimited basic',
    maxLines: 2,
    bestFor: 'Florida residents age 55+',
    features: ['Age 55+ discount', 'Florida residents only (for now)', 'Single-line $40/mo'],
    url: 'https://www.att.com/plans/wireless/unlimited-55/',
  },
];

interface Answers {
  lines: Lines;
  data: Data;
  international: YesNo;
  streaming: YesNo;
  hotspot: Hotspot;
  budget: Budget;
  senior: YesNo;
}

function scorePlan(plan: Plan, answers: Answers): number {
  let score = 0;
  const budget = parseInt(answers.budget, 10);
  if (plan.pricePerLine <= budget) score += 50;
  else if (plan.pricePerLine <= budget + 10) score += 15;
  else score -= 20;
  score += Math.max(0, 40 - plan.pricePerLine);
  if (answers.data === 'unlimited' && plan.unlimited) score += 20;
  if (answers.data === 'high' && plan.unlimited) score += 15;
  if (answers.data === 'low' && plan.pricePerLine < 30) score += 15;
  if (answers.international === 'yes') {
    if (plan.internationalIncluded) score += 25;
    else score -= 15;
  }
  if (answers.streaming === 'yes' && plan.streamingFriendly) score += 15;
  if (answers.streaming === 'yes' && !plan.streamingFriendly && plan.pricePerLine > 50) score -= 10;
  if (answers.hotspot === 'heavy') {
    if (plan.hotspotGB >= 30) score += 25;
    else if (plan.hotspotGB >= 10) score += 8;
    else score -= 15;
  }
  if (answers.hotspot === 'occasional' && plan.hotspotGB >= 5) score += 10;
  const linesNum = answers.lines === '4+' ? 4 : parseInt(answers.lines, 10);
  if (linesNum > plan.maxLines) score -= 40;
  if (answers.senior === 'yes' && plan.isSenior) score += 30;
  if (answers.senior === 'no' && plan.isSenior) score -= 5;
  return score;
}

export default function PhonePlanComparator() {
  const [lines, setLines] = useState<Lines>('1');
  const [data, setData] = useState<Data>('medium');
  const [international, setInternational] = useState<YesNo>('no');
  const [streaming, setStreaming] = useState<YesNo>('yes');
  const [hotspot, setHotspot] = useState<Hotspot>('occasional');
  const [budget, setBudget] = useState<Budget>('30');
  const [senior, setSenior] = useState<YesNo>('no');
  const [showResults, setShowResults] = useState(false);

  const answers: Answers = { lines, data, international, streaming, hotspot, budget, senior };

  const sortedPlans = useMemo(() => {
    return [...PLANS]
      .map(p => ({ plan: p, score: scorePlan(p, answers) }))
      .sort((a, b) => b.score - a.score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines, data, international, streaming, hotspot, budget, senior]);

  const topPlans = sortedPlans.slice(0, 8);

  const networkColor = (n: Network) => {
    switch (n) {
      case 'Verizon':
        return 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300 border-red-200';
      case 'AT&T':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 border-blue-200';
      case 'T-Mobile':
        return 'bg-pink-50 text-pink-700 dark:bg-pink-950/30 dark:text-pink-300 border-pink-200';
      case 'Multiple':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300 border-purple-200';
    }
  };

  return (
    <>
      <SEOHead
        title="Phone Plan Comparator — Find the Cheapest Plan for You | TekSure"
        description="Answer a few quick questions and get matched with the best phone plan for your actual usage. Compare Verizon, AT&T, T-Mobile, Mint, Visible, Consumer Cellular and more."
        path="/tools/phone-plan-comparator"
      />
      <main className="min-h-screen bg-background">
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-6 w-6 text-sky-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Phone Plan Comparator
            </h1>
            <p className="text-muted-foreground text-lg">
              Most people overpay for phone service. Answer 7 quick questions and we'll show you the plans that actually fit how you use your phone — including smaller carriers that use the same networks as the big three for half the price.
            </p>
          </div>
        </section>

        <section className="container py-10 max-w-3xl">
          <Card className="p-6 md:p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-sky-600" />
              Tell us about your usage
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" /> How many lines do you need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['1', '2', '3', '4+'] as Lines[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setLines(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        lines === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {v} {v === '1' ? 'line' : 'lines'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Signal className="h-4 w-4" /> Monthly data usage?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['low', 'Low (< 5GB)'],
                      ['medium', 'Medium (5–15GB)'],
                      ['high', 'High (15GB+)'],
                      ['unlimited', 'Unlimited'],
                    ] as [Data, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setData(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        data === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Plane className="h-4 w-4" /> Do you travel internationally?
                </label>
                <div className="flex gap-2">
                  {(['yes', 'no'] as YesNo[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setInternational(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        international === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {v === 'yes' ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Video className="h-4 w-4" /> Do you stream video on mobile?
                </label>
                <div className="flex gap-2">
                  {(['yes', 'no'] as YesNo[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setStreaming(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        streaming === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {v === 'yes' ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Wifi className="h-4 w-4" /> Hotspot usage?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['never', 'Never'],
                      ['occasional', 'Occasional'],
                      ['heavy', 'Heavy'],
                    ] as [Hotspot, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setHotspot(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        hotspot === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" /> Your budget per line?
                </label>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      ['20', '$20'],
                      ['30', '$30'],
                      ['40', '$40'],
                      ['50', '$50+'],
                    ] as [Budget, string][]
                  ).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setBudget(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        budget === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Are you 55+ (eligible for senior plans)?</label>
                <div className="flex gap-2">
                  {(['yes', 'no'] as YesNo[]).map(v => (
                    <button
                      key={v}
                      onClick={() => setSenior(v)}
                      className={`px-4 py-2 rounded-full text-sm font-medium min-h-[44px] border ${
                        senior === v
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-background border-border hover:border-foreground/30'
                      }`}
                    >
                      {v === 'yes' ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-8 rounded-xl h-12 text-base"
              onClick={() => {
                setShowResults(true);
                setTimeout(() => {
                  document.getElementById('plan-results')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Show my best-fit plans
            </Button>
          </Card>
        </section>

        {showResults && (
          <section id="plan-results" className="container pb-12 max-w-5xl">
            <h2 className="text-2xl font-bold mb-2">Your best-fit plans</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Ranked by how well they match your answers. The top result is usually your best value.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {topPlans.map(({ plan }, i) => (
                <Card
                  key={plan.id}
                  className={`p-6 rounded-2xl ${i === 0 ? 'border-sky-500 border-2' : ''}`}
                >
                  {i === 0 && (
                    <Badge className="mb-3 bg-sky-600 hover:bg-sky-600">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Best match for you
                    </Badge>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                        {plan.carrier}
                      </div>
                      <h3 className="font-bold text-lg">{plan.plan}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${plan.pricePerLine}</div>
                      <div className="text-xs text-muted-foreground">/mo per line</div>
                    </div>
                  </div>

                  {plan.priceNote && (
                    <p className="text-xs text-muted-foreground mb-3 italic">{plan.priceNote}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full border ${networkColor(plan.network)}`}
                    >
                      <Signal className="h-3 w-3 mr-1" /> {plan.network} network
                    </span>
                    {plan.isMVNO && (
                      <Badge variant="secondary" className="text-xs">
                        MVNO — value pick
                      </Badge>
                    )}
                    {plan.isSenior && (
                      <Badge variant="secondary" className="text-xs">
                        Senior plan
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Best for:</span> {plan.bestFor}
                  </p>

                  <ul className="text-sm space-y-1.5 mb-4">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full rounded-xl">
                    <a href={plan.url} target="_blank" rel="noopener noreferrer">
                      Learn more <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section className="container pb-24 max-w-3xl space-y-4">
          <Card className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-900">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Info className="h-5 w-5 text-amber-600" />
              What's an MVNO?
            </h3>
            <p className="text-sm text-muted-foreground">
              MVNO stands for "Mobile Virtual Network Operator." These smaller carriers — Mint Mobile, Visible, US Mobile, Cricket, Metro, Tello, Google Fi — rent network space from the big three (Verizon, AT&T, T-Mobile) and pass the savings to you. You get the same cell coverage, on a cheaper plan. The only real trade-off: during network congestion, MVNO customers may get lower data priority than the host carrier's own customers.
            </p>
          </Card>

          <Card className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              Why cheaper plans might work better than you think
            </h3>
            <p className="text-sm text-muted-foreground">
              Most people use far less data than they pay for. The average US smartphone user uses under 15GB per month, but many are on "unlimited" plans costing $80+ per line. If you mostly use Wi-Fi at home and work, a $25/mo MVNO plan will feel identical to a $90/mo premium plan — for $780 less per year.
            </p>
          </Card>
        </section>
      </main>
    </>
  );
}
