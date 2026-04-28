import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Wrench, AlertTriangle } from 'lucide-react';

type Problem = 'cracked' | 'battery' | 'water' | 'slow';
type Age = 'under2' | 'two-to-four' | 'over4';

const problemLabel: Record<Problem, string> = {
  cracked: 'Cracked screen',
  battery: 'Dead or dying battery',
  water: 'Water damage',
  slow: 'Slow performance',
};

export default function PhoneRepairOrReplace() {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [age, setAge] = useState<Age | null>(null);

  const result = useMemo(() => {
    if (!problem || !age) return null;

    let verdict: 'repair' | 'replace' | 'consider' = 'consider';
    let headline = '';
    let reason = '';
    let cost = '';

    if (problem === 'cracked') {
      cost = 'Apple screen repair runs 129 to 329 dollars depending on the model. Other brands run 99 to 299 dollars at uBreakiFix or a local shop.';
      if (age === 'under2') { verdict = 'repair'; headline = 'Repair the screen'; reason = 'A newer phone is worth the screen fix. You will get years more use out of it.'; }
      else if (age === 'two-to-four') { verdict = 'consider'; headline = 'Repair if you like the phone'; reason = 'A repair makes sense if the rest of the phone still works well. If the battery is also weak, replacement may cost about the same as two repairs.'; }
      else { verdict = 'replace'; headline = 'Replace the phone'; reason = 'On a 4-plus year old phone, a screen repair often costs more than a refurbished newer model. Put the repair money toward the next phone.'; }
    } else if (problem === 'battery') {
      cost = 'Apple battery replacement is 49 to 99 dollars. Samsung and Pixel batteries run 45 to 89 dollars at authorized shops.';
      if (age === 'under2') { verdict = 'repair'; headline = 'Replace the battery'; reason = 'A fresh battery on a 2 year old phone is the best money you can spend. The phone will feel new again.'; }
      else if (age === 'two-to-four') { verdict = 'repair'; headline = 'Replace the battery'; reason = 'At under 100 dollars, a new battery buys you another year or two. Worth doing before you spend hundreds on a new phone.'; }
      else { verdict = 'consider'; headline = 'Battery swap or upgrade — close call'; reason = 'A new battery still helps, but a 4-plus year old phone may be losing software support soon. Check if your phone still gets security updates first.'; }
    } else if (problem === 'water') {
      cost = 'Water damage repair is rarely worth it. Diagnostic alone runs 50 to 100 dollars, and full repairs often exceed 200 dollars with no guarantee.';
      if (age === 'under2') { verdict = 'consider'; headline = 'Try a repair shop diagnostic'; reason = 'Newer phones have water resistance. If it still powers on, a shop can dry and clean the internals. If it does not, replacement is usually the smarter call.'; }
      else { verdict = 'replace'; headline = 'Replace the phone'; reason = 'Water damage on an older phone almost always returns months later as corrosion. Back up what you can and move on.'; }
    } else {
      cost = 'A slow phone usually does not need a repair — it needs a battery, a software reset, or replacement. No part swap will fix age-related slowness.';
      if (age === 'under2') { verdict = 'repair'; headline = 'Try a software reset first'; reason = 'A 2 year old phone should not feel slow. Back up, do a factory reset, and reload only the apps you actually use. If still slow, the battery may be the real cause.'; }
      else if (age === 'two-to-four') { verdict = 'consider'; headline = 'Battery first, then decide'; reason = 'A weak battery makes the phone slow down on purpose. Try a battery replacement before giving up on the phone.'; }
      else { verdict = 'replace'; headline = 'Time to replace'; reason = 'A 4-plus year old phone slowing down is usually the phone telling you it is done. New apps and updates need newer hardware.'; }
    }

    return { verdict, headline, reason, cost };
  }, [problem, age]);

  return (
    <>
      <SEOHead
        title="Phone Repair or Replace?"
        description="Should you fix your cracked screen, dead battery, water damage, or slow phone — or buy a new one? Honest cost-benefit answer in under a minute."
        path="/tools/phone-repair-or-replace"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-orange-500/10 rounded-full">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phone Repair or Replace?</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Cracked screen, dead battery, water damage, or sluggish phone? Get an honest answer based on what is wrong and how old the phone is.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Phone Repair or Replace' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <Label className="text-sm font-semibold mb-2 block">1. What is wrong with the phone?</Label>
                <RadioGroup value={problem ?? ''} onValueChange={(v) => setProblem(v as Problem)}>
                  <div className="flex items-center gap-3"><RadioGroupItem value="cracked" id="cracked" /><Label htmlFor="cracked" className="cursor-pointer">Cracked screen</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="battery" id="battery" /><Label htmlFor="battery" className="cursor-pointer">Battery dies fast or will not hold a charge</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="water" id="water" /><Label htmlFor="water" className="cursor-pointer">Water damage</Label></div>
                  <div className="flex items-center gap-3"><RadioGroupItem value="slow" id="slow" /><Label htmlFor="slow" className="cursor-pointer">Slow or laggy performance</Label></div>
                </RadioGroup>
              </div>

              {problem && (
                <div>
                  <Label className="text-sm font-semibold mb-2 block">2. How old is the phone?</Label>
                  <RadioGroup value={age ?? ''} onValueChange={(v) => setAge(v as Age)}>
                    <div className="flex items-center gap-3"><RadioGroupItem value="under2" id="under2" /><Label htmlFor="under2" className="cursor-pointer">Under 2 years old</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="two-to-four" id="two-to-four" /><Label htmlFor="two-to-four" className="cursor-pointer">2 to 4 years old</Label></div>
                    <div className="flex items-center gap-3"><RadioGroupItem value="over4" id="over4" /><Label htmlFor="over4" className="cursor-pointer">More than 4 years old</Label></div>
                  </RadioGroup>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <>
              <Card className={`border-2 mb-6 ${
                result.verdict === 'repair' ? 'border-green-300 bg-green-50 dark:bg-green-950/20' :
                result.verdict === 'replace' ? 'border-blue-300 bg-blue-50 dark:bg-blue-950/20' :
                'border-amber-300 bg-amber-50 dark:bg-amber-950/20'
              }`}>
                <CardContent className="p-6">
                  <Badge className="mb-2">
                    {result.verdict === 'repair' ? 'Repair' : result.verdict === 'replace' ? 'Replace' : 'Close call'}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-2">{result.headline}</h2>
                  <p className="text-sm text-muted-foreground mb-3">{result.reason}</p>
                  <p className="text-sm bg-background/60 rounded-md p-3 border border-border"><strong>Typical cost — </strong>{result.cost}</p>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Where to get repairs done — for {problemLabel[problem!]}</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Apple Store</strong> — same-day screen and battery service for iPhones. Walk in or book at apple.com/retail. Genuine parts.</li>
                    <li><strong>uBreakiFix (by Asurion)</strong> — Apple, Samsung, and Google authorized. Most repairs done in 2 hours. Locations in most US cities.</li>
                    <li><strong>Best Buy / Geek Squad</strong> — authorized Samsung repairs. Good if you have a store nearby.</li>
                    <li><strong>Local independent shops</strong> — often cheapest for older phones. Look for Yelp reviews of 4.5 stars or higher and ask if they use original parts.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Watch out for "phone repair" pop-up ads</p>
                    <p className="text-muted-foreground">
                      Ads on Facebook, Instagram, TikTok, and Google promising 49 dollar screen fixes or mail-in repairs from companies you have never heard of are often scams. They keep your phone, ghost you, or return it worse. Stick to Apple, uBreakiFix, Best Buy, or a local shop you can walk into and meet the technician.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/computer-repair-options" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Computer Repair Options</p>
                <p className="text-xs text-muted-foreground mt-0.5">Same question, but for your laptop or desktop.</p>
              </Link>
              <Link to="/tools/device-retirement-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Retirement Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">When the old phone is finally done.</p>
              </Link>
              <Link to="/tools/phone-insurance-decision" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Phone Insurance Decision</p>
                <p className="text-xs text-muted-foreground mt-0.5">Should you buy AppleCare or skip it?</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
