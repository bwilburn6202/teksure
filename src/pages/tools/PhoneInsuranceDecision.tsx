import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ShieldCheck, ChevronRight, AlertTriangle } from 'lucide-react';

type Phone = 'apple' | 'samsung' | 'google' | 'other';
type DropFrequency = 'never' | 'rare' | 'often';

export default function PhoneInsuranceDecision() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [phonePrice, setPhonePrice] = useState('');
  const [dropFrequency, setDropFrequency] = useState<DropFrequency | null>(null);
  const [creditCardCovers, setCreditCardCovers] = useState<'yes' | 'no' | 'not-sure' | null>(null);

  const result = useMemo(() => {
    if (!phone || !dropFrequency || !creditCardCovers) return null;

    const cost = parseFloat(phonePrice) || 800;
    let monthly = 0;
    let typicalDeductible = 0;
    let label = '';
    let pros: string[] = [];
    let cons: string[] = [];

    if (phone === 'apple') {
      monthly = 9;
      typicalDeductible = 29;
      label = 'AppleCare+ ($9–$13/mo)';
      pros = [
        'Apple Stores fix it same-day in person — no shipping.',
        '$29 screen replacement, $99 other accidental damage.',
        'Apple-authorised parts (no aftermarket).',
        'No third-party adjuster — you walk in, you walk out.',
      ];
      cons = [
        'Adds $216 over a 2-year phone life.',
        'No theft coverage on the standard tier (you need AppleCare+ with Theft and Loss for that).',
      ];
    } else if (phone === 'samsung') {
      monthly = 11;
      typicalDeductible = 99;
      label = 'Samsung Care+ ($8–$15/mo)';
      pros = [
        'Tier 1 is $99 deductible for screen damage.',
        'Mail-in or in-person at Best Buy / uBreakiFix.',
      ];
      cons = [
        'Theft requires the higher tier and is harder to claim.',
        'Repairs sometimes use refurbished parts.',
      ];
    } else if (phone === 'google') {
      monthly = 10;
      typicalDeductible = 89;
      label = 'Google Preferred Care ($8–$13/mo)';
      pros = [
        'Lower deductible than carrier insurance.',
        'Google ships you a replacement — kept overnight.',
      ];
      cons = [
        'No in-person repair option.',
        'Refurbished replacement device, not new.',
      ];
    } else {
      monthly = 13;
      typicalDeductible = 200;
      label = 'Carrier insurance (Asurion / Verizon Mobile Protect)';
      pros = [
        'Covers loss and theft as well as damage.',
        'Fast replacement — usually next day.',
      ];
      cons = [
        '$200+ deductibles per claim.',
        'Replacement is usually refurbished, not new.',
        'Most expensive option per month.',
      ];
    }

    const yearlyPlanCost = monthly * 12;
    const twoYearPlanCost = yearlyPlanCost * 2;

    let recommendation: 'buy' | 'skip' | 'consider';
    let reason: string;

    if (creditCardCovers === 'yes') {
      recommendation = 'skip';
      reason = `Your credit card already covers accidental damage on phones bought with it. AppleCare and friends become less necessary. Save the ${twoYearPlanCost} dollars and pocket it.`;
    } else if (cost < 400) {
      recommendation = 'skip';
      reason = `Your phone costs about $${cost}. Two years of insurance ($${twoYearPlanCost}) would buy you a new one outright if it broke. Skip the plan, put the money in a savings envelope, replace if needed.`;
    } else if (dropFrequency === 'never' && cost < 700) {
      recommendation = 'skip';
      reason = `You rarely drop your phone and it costs under $700. The math does not favour the plan. Use a $30 OtterBox case and a $15 screen protector instead — that is a better $45 spent.`;
    } else if (dropFrequency === 'often' || cost > 1000) {
      recommendation = 'buy';
      reason = `You drop the phone often or it costs over $1,000. ${label} is worth it — one screen replacement out of pocket would cost more than two years of premiums plus the deductible.`;
    } else {
      recommendation = 'consider';
      reason = `It is a close call. Buy the plan only if you would feel financially squeezed by paying $${Math.round(cost * 0.4)}–$${cost} out of pocket for an unexpected screen replacement. Otherwise, skip and save the difference.`;
    }

    return { label, monthly, typicalDeductible, pros, cons, twoYearPlanCost, recommendation, reason };
  }, [phone, dropFrequency, creditCardCovers, phonePrice]);

  return (
    <>
      <SEOHead
        title="Phone Insurance Decision"
        description="Should you buy AppleCare+, Samsung Care, Google Preferred Care, or carrier insurance? An honest cost-benefit answer based on what you actually drop and what your credit card already covers."
        path="/tools/phone-insurance-decision"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phone Insurance Decision</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Should you buy AppleCare+ (or Samsung Care, or Google Preferred Care, or carrier insurance)? Honest answer in under a minute.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Phone Insurance Decision' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <Label className="text-sm font-semibold mb-2 block">1. What kind of phone?</Label>
                <RadioGroup value={phone ?? ''} onValueChange={(v) => setPhone(v as Phone)}>
                  <div className="flex items-center gap-3"><RadioGroupItem value="apple"   id="apple" /><Label htmlFor="apple" className="cursor-pointer">iPhone</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="samsung" id="samsung" /><Label htmlFor="samsung" className="cursor-pointer">Samsung Galaxy</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="google"  id="google" /><Label htmlFor="google" className="cursor-pointer">Google Pixel</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="other"   id="other" /><Label htmlFor="other" className="cursor-pointer">Another Android brand</Label></div>
                </RadioGroup>
              </div>

              {phone && (
                <div>
                  <Label htmlFor="price" className="text-sm font-semibold">2. How much did the phone cost?</Label>
                  <Input id="price" type="number" placeholder="e.g. 800" value={phonePrice} onChange={(e) => setPhonePrice(e.target.value)} className="mt-1 max-w-[200px]" />
                  <p className="text-xs text-muted-foreground mt-1">If you do not know, $800 is a reasonable middle.</p>
                </div>
              )}

              {phonePrice && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">3. How often do you drop or damage your phone?</Label>
                  <RadioGroup value={dropFrequency ?? ''} onValueChange={(v) => setDropFrequency(v as DropFrequency)}>
                    <div className="flex items-center gap-3"><RadioGroupItem value="never"  id="never" /><Label htmlFor="never" className="cursor-pointer">Never — knock on wood</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="rare"   id="rare" /><Label htmlFor="rare" className="cursor-pointer">A small drop every year or two</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="often"  id="often" /><Label htmlFor="often" className="cursor-pointer">I have cracked screens before</Label></div>
                  </RadioGroup>
                </div>
              )}

              {dropFrequency && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">4. Did you buy the phone with a credit card that has cell phone protection?</Label>
                  <RadioGroup value={creditCardCovers ?? ''} onValueChange={(v) => setCreditCardCovers(v as 'yes' | 'no' | 'not-sure')}>
                    <div className="flex items-center gap-3"><RadioGroupItem value="yes" id="cc-yes" /><Label htmlFor="cc-yes" className="cursor-pointer">Yes (Chase Sapphire, Citi Premier, AmEx Platinum, etc.)</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="no" id="cc-no" /><Label htmlFor="cc-no" className="cursor-pointer">No</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="not-sure" id="cc-ns" /><Label htmlFor="cc-ns" className="cursor-pointer">Not sure (treat as no)</Label></div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground mt-1">Only counts if the monthly bill is paid with that same card.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <>
              <Card className={`border-2 mb-6 ${
                result.recommendation === 'buy' ? 'border-green-300 bg-green-50 dark:bg-green-950/20' :
                result.recommendation === 'skip' ? 'border-blue-300 bg-blue-50 dark:bg-blue-950/20' :
                'border-amber-300 bg-amber-50 dark:bg-amber-950/20'
              }`}>
                <CardContent className="p-6">
                  <Badge className="mb-2">
                    {result.recommendation === 'buy' ? 'Buy it' : result.recommendation === 'skip' ? 'Skip it' : 'Close call'}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-2">
                    {result.recommendation === 'buy' && `Yes — get ${result.label}`}
                    {result.recommendation === 'skip' && `Skip ${result.label.split(' (')[0]}`}
                    {result.recommendation === 'consider' && `It is close — ${result.label} could go either way`}
                  </h2>
                  <p className="text-sm text-muted-foreground">{result.reason}</p>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{result.label} — at a glance</p>
                  <p className="text-sm mb-3">2 years of premiums: <strong>${result.twoYearPlanCost}</strong>. Typical deductible: <strong>${result.typicalDeductible}</strong>.</p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Pros</p>
                  <ul className="space-y-1 mb-3">
                    {result.pros.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm"><span className="text-green-600 shrink-0">+</span><span>{p}</span></li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Cons</p>
                  <ul className="space-y-1">
                    {result.cons.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm"><span className="text-red-600 shrink-0">−</span><span>{c}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">A real alternative — your own savings envelope</p>
                    <p className="text-muted-foreground">
                      If you skip the plan, take what you would have spent on premiums (roughly $${result.twoYearPlanCost} over 2 years) and stick it in a high-yield savings account. If your phone never breaks, you keep it. If it does break, you have the money for a screen repair or new phone.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/device-age-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Age Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Should you replace before insuring?</p>
              </Link>
              <Link to="/tools/device-retirement-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Retirement</p>
                <p className="text-xs text-muted-foreground mt-0.5">When the old one finally dies.</p>
              </Link>
              <Link to="/tools/warranty-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Warranty Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">What is already covered for free?</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
