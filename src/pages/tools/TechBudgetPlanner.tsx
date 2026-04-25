import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingDown, BarChart3, Lightbulb, ChevronDown, ChevronUp, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpendCategory {
  key: string;
  label: string;
  max: number;
  step: number;
  avg: number;
  tips: string[];
}

const spendCategories: SpendCategory[] = [
  { key: 'internet', label: 'Internet Service', max: 200, step: 5, avg: 75, tips: ['Call your provider and ask about promotions — you can often save $10-20/month.', 'Consider whether you need the fastest plan. Most households do fine with 100 Mbps.', 'Bundle internet with your phone plan for potential savings.'] },
  { key: 'phone', label: 'Phone Plan', max: 150, step: 5, avg: 55, tips: ['Prepaid carriers like Mint Mobile, Visible, or Cricket offer the same networks for less.', 'If you use Wi-Fi at home most of the time, you may not need unlimited data.', 'Family plans can save 30-40% per line compared to individual plans.'] },
  { key: 'streaming', label: 'Streaming Services', max: 100, step: 5, avg: 35, tips: ['Rotate between services each month instead of paying for all of them at once.', 'Choose ad-supported tiers to save $5-10 per service.', 'Check if your library offers free streaming through Kanopy or Hoopla.'] },
  { key: 'cloud', label: 'Cloud Storage', max: 30, step: 1, avg: 5, tips: ['Apple, Google, and Microsoft all offer free storage tiers (5-15 GB).', 'Delete old photos and files to stay within the free tier.', 'One cloud plan is usually enough — you do not need iCloud, Google One, and Dropbox.'] },
  { key: 'software', label: 'Software Subscriptions', max: 50, step: 5, avg: 15, tips: ['Free alternatives exist for most paid software (LibreOffice instead of Microsoft Office).', 'Check if your employer or library provides free access to software.', 'Pay annually instead of monthly for 10-20% savings.'] },
  { key: 'hardware', label: 'Hardware & Accessories', max: 100, step: 5, avg: 20, tips: ['Buy refurbished devices from Apple, Amazon, or manufacturer-certified sellers.', 'Extend the life of your devices with a good case and regular updates.', 'Set aside a small amount each month so a replacement does not hit your budget all at once.'] },
];

export default function TechBudgetPlanner() {
  const [amounts, setAmounts] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    spendCategories.forEach(c => { init[c.key] = 0; });
    return init;
  });
  const [showSavings, setShowSavings] = useState(false);

  const monthlyTotal = Object.values(amounts).reduce((s, v) => s + v, 0);
  const annualTotal = monthlyTotal * 12;
  const industryAvg = spendCategories.reduce((s, c) => s + c.avg, 0);
  const diff = monthlyTotal - industryAvg;

  const recommendations = spendCategories
    .filter(c => amounts[c.key] > c.avg * 1.2)
    .map(c => ({ ...c, over: amounts[c.key] - c.avg }));

  return (
    <>
      <SEOHead
        title="Tech Budget Planner — Track Your Technology Spending | TekSure"
        description="Track your monthly technology expenses across internet, phone, streaming, and more. Compare to averages and get personalized money-saving tips."
        path="/tools/tech-budget-planner"
      />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Tech Budget Planner' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Tech Budget Planner</h1>
            <p className="text-muted-foreground text-lg">
              See where your money goes on technology each month, compare to the average, and find ways to save.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Sliders */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Monthly Tech Spending</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              {spendCategories.map(cat => (
                <div key={cat.key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{cat.label}</span>
                    <span className="font-semibold">${amounts[cat.key]}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={cat.max}
                    step={cat.step}
                    value={amounts[cat.key]}
                    onChange={e => setAmounts(prev => ({ ...prev, [cat.key]: Number(e.target.value) }))}
                    className="w-full accent-emerald-600"
                    aria-label={`${cat.label} monthly cost`}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$0</span>
                    <span className="text-emerald-600">Avg: ${cat.avg}</span>
                    <span>${cat.max}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Totals */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Monthly Total</p>
                <p className="text-3xl font-bold text-emerald-600">${monthlyTotal}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Annual Total</p>
                <p className="text-3xl font-bold text-emerald-600">${annualTotal.toLocaleString()}</p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison */}
          <Card>
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><BarChart3 className="h-5 w-5" aria-hidden="true" /> How You Compare</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-xl">
                  <p className="text-xs text-muted-foreground">Your Monthly</p>
                  <p className="text-xl font-bold">${monthlyTotal}</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-xl">
                  <p className="text-xs text-muted-foreground">Average Household</p>
                  <p className="text-xl font-bold">${industryAvg}</p>
                </div>
              </div>
              <div className={`rounded-xl p-4 ${diff > 0 ? 'bg-amber-50 dark:bg-amber-950/20' : 'bg-emerald-50 dark:bg-emerald-950/20'}`}>
                <p className="text-sm">
                  {diff > 50 ? `You are spending $${diff}/month more than average. There may be some good savings opportunities below.` :
                   diff > 0 ? `You are spending $${diff}/month more than average, which is not far off.` :
                   diff === 0 ? 'You are right at the average. Nice work!' :
                   `You are spending $${Math.abs(diff)}/month less than average. Well done!`}
                </p>
              </div>
              {spendCategories.map(cat => (
                <div key={cat.key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{cat.label}</span>
                    <span className="text-xs text-muted-foreground">${amounts[cat.key]} vs avg ${cat.avg}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${amounts[cat.key] > cat.avg ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${Math.min((amounts[cat.key] / cat.max) * 100, 100)}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <Card>
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><TrendingDown className="h-5 w-5 text-emerald-600" aria-hidden="true" /> Money-Saving Recommendations</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map(cat => (
                  <div key={cat.key} className="border rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium">{cat.label}</p>
                      <Badge variant="outline" className="text-amber-600">Save ~${cat.over}/mo</Badge>
                    </div>
                    <ul className="space-y-1">
                      {cat.tips.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-emerald-600">-</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* General tips */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowSavings(!showSavings)} className="flex items-center gap-3 w-full text-left">
              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">General Money-Saving Tips</span>
              {showSavings ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showSavings && (
              <ul className="mt-4 space-y-2">
                {['Review your bank statement each month for charges you do not recognize.',
                  'Ask about senior discounts — many carriers and services offer 10-20% off.',
                  'Use your local library for free access to e-books, movies, music, and even tech classes.',
                  'Before buying any new device, check if a free software update can fix your current one.',
                  'Look into government assistance programs like the Affordable Connectivity Program for internet discounts.'
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button variant="outline" onClick={() => window.print()} className="w-full">
            <Printer className="h-4 w-4 mr-2" aria-hidden="true" /> Print Budget Summary
          </Button>
        </div>
      </main>
    </>
  );
}
