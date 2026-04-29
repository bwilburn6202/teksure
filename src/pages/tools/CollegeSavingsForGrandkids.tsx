import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function CollegeSavingsForGrandkids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="College Savings for Grandkids — 529 Plans Explained | TekSure" description="Best gift for grandkids — 529 college savings plan. Tax-free growth, you stay in control, easy to set up. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">College Savings for Grandkids</h1>
          <p className="text-lg text-muted-foreground">Best long-term gift you can give. Tax-free growth.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What a 529 plan is</h2>
            <p className="text-sm">A special savings account. Money grows tax-free. Withdrawals tax-free if used for college (tuition, room/board, books, computers, even some K-12 private school).</p>
            <p className="text-sm mt-2">Two flavors:</p>
            <ul className="text-sm list-disc pl-5">
              <li><strong>529 savings plan</strong> — invests in mutual funds. Most flexible.</li>
              <li><strong>529 prepaid plan</strong> — locks in today\'s tuition rates at in-state public schools.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why grandparents love them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YOU stay in control</strong> — even though grandkid is the beneficiary, you decide when and how to spend.</li>
              <li><strong>Big growth over time</strong> — $100/month from age 0 = $50,000+ at age 18 with average market returns.</li>
              <li><strong>State tax deduction</strong> — many states offer deductions on contributions to your home state\'s 529.</li>
              <li><strong>Birthday gift</strong> — instead of toys, deposit $50 in their 529. Family can also contribute.</li>
              <li><strong>FAFSA-friendly (since 2024)</strong> — grandparent 529s no longer hurt grandkid\'s financial aid.</li>
              <li><strong>Roll to Roth IRA</strong> (new 2024 rule) — leftover $35,000 can move to a Roth IRA in the grandkid\'s name.</li>
              <li><strong>Change beneficiary</strong> — if one grandkid doesn\'t go to college, transfer to another.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best 529 plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Utah\'s my529</strong> — top-rated nationally. Open to anyone in any state. Low fees.</li>
              <li><strong>Nevada Vanguard 529</strong> — Vanguard\'s low-cost funds. Open to all.</li>
              <li><strong>NY 529 (run by Vanguard)</strong> — top New York deduction.</li>
              <li><strong>Your home state\'s plan</strong> — best if your state offers a tax deduction. Check savingforcollege.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to open one</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a plan (above).</li>
              <li>Apply online — 10 minutes. Need your info + grandkid\'s name and SSN.</li>
              <li>Pick an investment — most plans offer "age-based" portfolios that auto-adjust as the grandkid gets closer to college.</li>
              <li>Set up automatic monthly contributions ($25-200/month is typical).</li>
              <li>Tell parents — they can also contribute or use it for matching contributions.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other gift options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>UTMA / UGMA account</strong> — kid gets full control at 18-21. Less restrictive than 529 but counts more against financial aid.</li>
              <li><strong>Series I Bonds</strong> — for younger grandkids. Tax-free if used for college.</li>
              <li><strong>Roth IRA for the working teen</strong> — once your grandkid has any earned income (16+), you can fund a Roth IRA in their name. Best gift you can give.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — start the day they\'re born</h3>
            <p className="text-sm text-muted-foreground">$100/month from age 0 to 18 at average 7% growth = ~$48,000. The same $100/month from age 12 to 18 only = ~$10,000. Time matters more than amount.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
