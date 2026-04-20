import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Wifi, Zap, DollarSign, Users, Check, ExternalLink, AlertCircle } from 'lucide-react';

interface Plan {
  id: string;
  provider: string;
  planName: string;
  downloadMbps: number;
  uploadMbps: number;
  monthlyPrice: number;
  firstYearPrice?: number;
  type: 'cable' | 'fiber' | '5g' | 'satellite' | 'dsl';
  dataCap?: string;
  contract: string;
  equipmentFee: number;
  notes: string;
  best_for: string[];
  signup_url: string;
}

const PLANS: Plan[] = [
  // Spectrum
  { id: 'sp-300', provider: 'Spectrum', planName: 'Internet 300', downloadMbps: 300, uploadMbps: 10, monthlyPrice: 50, firstYearPrice: 30, type: 'cable', dataCap: 'None', contract: 'No contract', equipmentFee: 7, notes: 'Modem included. Wi-Fi router is $7/month extra.', best_for: ['streaming', 'gaming-casual', 'families'], signup_url: 'https://www.spectrum.com/internet' },
  { id: 'sp-500', provider: 'Spectrum', planName: 'Internet Ultra', downloadMbps: 500, uploadMbps: 20, monthlyPrice: 70, firstYearPrice: 50, type: 'cable', dataCap: 'None', contract: 'No contract', equipmentFee: 7, notes: 'Best value at 500 Mbps.', best_for: ['streaming', 'gaming-casual', 'families', 'remote-work'], signup_url: 'https://www.spectrum.com/internet' },
  { id: 'sp-gig', provider: 'Spectrum', planName: 'Internet Gig', downloadMbps: 1000, uploadMbps: 35, monthlyPrice: 90, firstYearPrice: 70, type: 'cable', dataCap: 'None', contract: 'No contract', equipmentFee: 7, notes: 'No data cap, no contract.', best_for: ['streaming', 'gaming-serious', 'remote-work'], signup_url: 'https://www.spectrum.com/internet' },
  // Xfinity
  { id: 'xf-200', provider: 'Xfinity', planName: 'Connect', downloadMbps: 200, uploadMbps: 5, monthlyPrice: 55, firstYearPrice: 25, type: 'cable', dataCap: '1.2 TB', contract: '1 year', equipmentFee: 15, notes: 'Data cap overage = $10 per 50 GB.', best_for: ['casual', 'streaming'], signup_url: 'https://www.xfinity.com/learn/internet-service' },
  { id: 'xf-400', provider: 'Xfinity', planName: 'Fast', downloadMbps: 400, uploadMbps: 10, monthlyPrice: 65, firstYearPrice: 45, type: 'cable', dataCap: '1.2 TB', contract: '1 year', equipmentFee: 15, notes: 'Good for 3-4 people.', best_for: ['streaming', 'families', 'gaming-casual'], signup_url: 'https://www.xfinity.com/learn/internet-service' },
  { id: 'xf-gig', provider: 'Xfinity', planName: 'Gigabit', downloadMbps: 1200, uploadMbps: 35, monthlyPrice: 85, firstYearPrice: 65, type: 'cable', dataCap: '1.2 TB', contract: '1 year', equipmentFee: 15, notes: 'Add Unlimited Data for $30/mo.', best_for: ['streaming', 'gaming-serious', 'remote-work'], signup_url: 'https://www.xfinity.com/learn/internet-service' },
  // AT&T Fiber
  { id: 'att-300', provider: 'AT&T Fiber', planName: 'Fiber 300', downloadMbps: 300, uploadMbps: 300, monthlyPrice: 55, type: 'fiber', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Symmetrical speed. Equipment included.', best_for: ['remote-work', 'streaming', 'families'], signup_url: 'https://www.att.com/internet/fiber/' },
  { id: 'att-500', provider: 'AT&T Fiber', planName: 'Fiber 500', downloadMbps: 500, uploadMbps: 500, monthlyPrice: 65, type: 'fiber', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Equal upload and download.', best_for: ['remote-work', 'streaming', 'gaming-serious'], signup_url: 'https://www.att.com/internet/fiber/' },
  { id: 'att-1gig', provider: 'AT&T Fiber', planName: 'Fiber 1 Gig', downloadMbps: 1000, uploadMbps: 1000, monthlyPrice: 80, type: 'fiber', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Best balance of speed and price.', best_for: ['remote-work', 'gaming-serious', 'streaming', 'content-creation'], signup_url: 'https://www.att.com/internet/fiber/' },
  { id: 'att-5gig', provider: 'AT&T Fiber', planName: 'Fiber 5 Gig', downloadMbps: 5000, uploadMbps: 5000, monthlyPrice: 180, type: 'fiber', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Overkill for most homes — only if you upload large files daily.', best_for: ['content-creation'], signup_url: 'https://www.att.com/internet/fiber/' },
  // Verizon Fios
  { id: 'vz-300', provider: 'Verizon Fios', planName: '300/300', downloadMbps: 300, uploadMbps: 300, monthlyPrice: 50, type: 'fiber', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Only available in Northeast US.', best_for: ['remote-work', 'streaming', 'families'], signup_url: 'https://www.verizon.com/home/fios-fastest-internet/' },
  { id: 'vz-1g', provider: 'Verizon Fios', planName: '1 Gig', downloadMbps: 1000, uploadMbps: 1000, monthlyPrice: 90, type: 'fiber', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Symmetrical gigabit.', best_for: ['remote-work', 'gaming-serious', 'streaming'], signup_url: 'https://www.verizon.com/home/fios-fastest-internet/' },
  // T-Mobile 5G
  { id: 'tm-home', provider: 'T-Mobile Home Internet', planName: '5G Home Internet', downloadMbps: 245, uploadMbps: 30, monthlyPrice: 50, firstYearPrice: 40, type: '5g', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Speeds vary by location. Gateway included.', best_for: ['casual', 'streaming', 'rural'], signup_url: 'https://www.t-mobile.com/home-internet' },
  // Verizon 5G
  { id: 'vz-5g', provider: 'Verizon 5G Home', planName: '5G Home Internet', downloadMbps: 300, uploadMbps: 25, monthlyPrice: 50, firstYearPrice: 35, type: '5g', dataCap: 'None', contract: 'No contract', equipmentFee: 0, notes: 'Discount with Verizon mobile plan.', best_for: ['casual', 'streaming', 'rural'], signup_url: 'https://www.verizon.com/home/5g-home-internet/' },
  // Starlink
  { id: 'sl-std', provider: 'Starlink', planName: 'Residential', downloadMbps: 150, uploadMbps: 15, monthlyPrice: 120, type: 'satellite', dataCap: 'None', contract: 'No contract', equipmentFee: 349, notes: '$349 one-time hardware. Best option for rural/remote areas.', best_for: ['rural'], signup_url: 'https://www.starlink.com/' },
  // DSL (Frontier/CenturyLink)
  { id: 'ctl-dsl', provider: 'CenturyLink', planName: 'Simply Unlimited', downloadMbps: 100, uploadMbps: 20, monthlyPrice: 50, type: 'dsl', dataCap: 'None', contract: 'No contract', equipmentFee: 15, notes: 'Speeds vary wildly by location — check availability.', best_for: ['casual', 'rural'], signup_url: 'https://www.centurylink.com/home/internet/' },
];

const USE_CASES = [
  { id: 'casual', label: 'Email, web browsing, social media', minMbps: 25 },
  { id: 'streaming', label: 'Streaming HD/4K video', minMbps: 50 },
  { id: 'families', label: 'Family of 3+ with multiple devices', minMbps: 200 },
  { id: 'gaming-casual', label: 'Casual online gaming', minMbps: 100 },
  { id: 'gaming-serious', label: 'Serious gaming / esports', minMbps: 500 },
  { id: 'remote-work', label: 'Remote work / video calls', minMbps: 300 },
  { id: 'content-creation', label: 'Uploading large video/photo files', minMbps: 1000 },
  { id: 'rural', label: 'Rural area / limited options', minMbps: 25 },
];

const TYPE_META = {
  fiber: { label: 'Fiber', color: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400', badge: 'Fastest, most reliable' },
  cable: { label: 'Cable', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400', badge: 'Widely available' },
  '5g': { label: '5G Home', color: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400', badge: 'No cables needed' },
  satellite: { label: 'Satellite', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300', badge: 'Rural areas' },
  dsl: { label: 'DSL', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400', badge: 'Older tech' },
};

export default function InternetPlanComparator() {
  const [selectedUses, setSelectedUses] = useState<Set<string>>(new Set(['streaming', 'remote-work']));
  const [householdSize, setHouseholdSize] = useState(2);
  const [maxBudget, setMaxBudget] = useState(80);

  const toggleUse = (id: string) => {
    const next = new Set(selectedUses);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelectedUses(next);
  };

  const recommendedMinMbps = useMemo(() => {
    let min = 25;
    selectedUses.forEach(u => {
      const uc = USE_CASES.find(x => x.id === u);
      if (uc && uc.minMbps > min) min = uc.minMbps;
    });
    // Scale for household size
    min = Math.max(min, householdSize * 50);
    return min;
  }, [selectedUses, householdSize]);

  const scored = useMemo(() => {
    return PLANS.map(plan => {
      const matchesUses = [...selectedUses].filter(u => plan.best_for.includes(u)).length;
      const hasEnoughSpeed = plan.downloadMbps >= recommendedMinMbps;
      const withinBudget = plan.monthlyPrice + plan.equipmentFee <= maxBudget;
      const score =
        (hasEnoughSpeed ? 3 : 0) +
        (withinBudget ? 2 : 0) +
        matchesUses +
        (plan.type === 'fiber' ? 1 : 0) +
        (plan.dataCap === 'None' ? 1 : 0);
      return { plan, score, hasEnoughSpeed, withinBudget, matchesUses };
    }).sort((a, b) => b.score - a.score);
  }, [selectedUses, recommendedMinMbps, maxBudget]);

  return (
    <>
      <SEOHead
        title="Internet Plan Comparator — Find the Right Plan for Your Home"
        description="Compare internet plans from Spectrum, Xfinity, AT&T, Verizon, T-Mobile, and more. Personalized recommendations based on how you use the internet."
        path="/tools/internet-plan-comparator"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Internet & Connectivity</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Internet Plan Comparator</h1>
            <p className="text-muted-foreground max-w-2xl">
              Compare real plans from major US providers. Tell us how you use the internet and we'll recommend the best options for your home and budget.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1 h-fit">
              <CardContent className="p-5 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Household size
                  </h3>
                  <Input
                    type="number"
                    min={1}
                    max={10}
                    value={householdSize}
                    onChange={(e) => setHouseholdSize(parseInt(e.target.value) || 1)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">People using Wi-Fi at the same time.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Max budget per month
                  </h3>
                  <Input
                    type="number"
                    min={20}
                    max={300}
                    step={10}
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(parseInt(e.target.value) || 50)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Including equipment fees.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    How do you use the internet?
                  </h3>
                  <div className="space-y-2">
                    {USE_CASES.map((uc) => (
                      <Label key={uc.id} className="flex items-start gap-2 cursor-pointer p-2 rounded-md hover:bg-muted/50">
                        <input
                          type="checkbox"
                          checked={selectedUses.has(uc.id)}
                          onChange={() => toggleUse(uc.id)}
                          className="mt-0.5"
                        />
                        <span className="text-sm leading-tight">{uc.label}</span>
                      </Label>
                    ))}
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">Recommended minimum speed</div>
                    <div className="text-2xl font-bold">{recommendedMinMbps} Mbps</div>
                    <div className="text-xs text-muted-foreground mt-1">Download speed for your needs.</div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold">Plans ranked for you</h2>
              {scored.map(({ plan, score, hasEnoughSpeed, withinBudget, matchesUses }, idx) => {
                const typeMeta = TYPE_META[plan.type];
                return (
                  <Card key={plan.id} className={idx === 0 ? 'border-primary border-2' : ''}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {idx === 0 && <Badge className="bg-primary">Top pick</Badge>}
                            <h3 className="font-semibold text-lg">{plan.provider}</h3>
                            <Badge className={typeMeta.color}>{typeMeta.label}</Badge>
                            {!hasEnoughSpeed && <Badge variant="outline" className="text-amber-600 border-amber-600">Speed may be low</Badge>}
                            {!withinBudget && <Badge variant="outline" className="text-red-600 border-red-600">Over budget</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{plan.planName}</p>
                        </div>
                        <div className="text-right">
                          {plan.firstYearPrice ? (
                            <>
                              <div className="text-2xl font-bold">${plan.firstYearPrice}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                              <div className="text-xs text-muted-foreground">then ${plan.monthlyPrice}/mo</div>
                            </>
                          ) : (
                            <div className="text-2xl font-bold">${plan.monthlyPrice}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
                        <div>
                          <div className="text-xs text-muted-foreground">Download</div>
                          <div className="font-semibold">{plan.downloadMbps} Mbps</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Upload</div>
                          <div className="font-semibold">{plan.uploadMbps} Mbps</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Data cap</div>
                          <div className="font-semibold">{plan.dataCap || 'None'}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Equipment</div>
                          <div className="font-semibold">${plan.equipmentFee}/mo</div>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground mb-3 italic">{plan.notes}</p>

                      {matchesUses > 0 && (
                        <div className="mb-3 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                          <Check className="w-3 h-3" />
                          <span>Matches {matchesUses} of your selected uses</span>
                        </div>
                      )}

                      <Button asChild size="sm">
                        <a href={plan.signup_url} target="_blank" rel="noopener noreferrer">
                          Check availability <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="mt-8 bg-muted/30">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong>Important:</strong> Plan availability depends on your exact address. Prices and speeds shown are common offerings — always check the provider's site with your address for the actual deal in your area. TekSure is not affiliated with any provider and receives no commission.
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
