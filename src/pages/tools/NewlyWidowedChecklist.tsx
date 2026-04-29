import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarHeart } from 'lucide-react';

export default function NewlyWidowedChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Newly Widowed Checklist — First 30 Days | TekSure" description="Lost your spouse? Plain-English step-by-step list for the first month. Don&apos;t make big decisions yet — but here are the small ones that matter." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CalendarHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Newly Widowed Checklist</h1>
          <p className="text-lg text-muted-foreground">First 30 days. Don\'t do everything alone.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">First — give yourself grace</h2>
            <p className="text-sm">Don\'t make BIG decisions for 6-12 months. No selling the house, no big charity gift, no major investment moves. Brain fog from grief is real. Lean on family and a trusted advisor for these.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First week</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Get 10-15 certified copies of the death certificate</strong> from the funeral home. Almost every account asks for one.</li>
              <li><strong>Call employer / pension</strong> if spouse worked. Stop direct deposits, start survivor benefits.</li>
              <li><strong>Call Social Security (1-800-772-1213)</strong> — they need to know. Survivor benefits start at 60. (Funeral home often reports automatically.)</li>
              <li><strong>Call insurance companies</strong> with policy numbers — life, health, etc.</li>
              <li><strong>Tell close family and friends</strong>. Designate ONE person to be the "communications hub" for the wider circle.</li>
              <li><strong>Don\'t answer financial calls</strong> from strangers. Predators target obituaries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First 30 days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>File the will</strong> with probate court (usually executor does this).</li>
              <li><strong>Notify these</strong> with death certificate copies:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li>Banks (joint accounts shift to your name).</li>
                  <li>Credit cards (cancel solely-held cards; keep joint cards open initially).</li>
                  <li>Brokerage / IRA (can update beneficiary status).</li>
                  <li>Mortgage / loan companies.</li>
                  <li>Auto insurance (drop spouse from policy).</li>
                  <li>Cell phone provider.</li>
                  <li>Utilities (transfer name, often unchanged).</li>
                </ul>
              </li>
              <li><strong>Update your own beneficiaries</strong> on retirement, life insurance, bank accounts.</li>
              <li><strong>Get a folder</strong> for every conversation, every form. Date them.</li>
              <li><strong>Start a written "to do" list</strong> — your memory will fail you.</li>
              <li><strong>Eat. Sleep. Walk.</strong> Treat your body like recovering from surgery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First 90 days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apply for survivor benefits</strong> at SSA — you keep the larger of the two Social Security checks.</li>
              <li><strong>VA benefits if veteran spouse</strong> — Aid & Attendance, life insurance, survivor pension. Call 1-800-827-1000.</li>
              <li><strong>Pension survivor benefits</strong> — apply if applicable.</li>
              <li><strong>Update home title and car titles</strong> — to your name only.</li>
              <li><strong>Final tax return</strong> — file for spouse next year. Talk to a CPA about filing status.</li>
              <li><strong>Healthcare coverage</strong> — if you were on spouse\'s plan, choose new coverage within 60 days (special enrollment).</li>
              <li><strong>Update your own will</strong> — beneficiaries, executor, healthcare proxy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to find help</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>AARP Widow/Widower resources</strong> — aarp.org/family/.</li>
              <li><strong>Soaring Spirits International</strong> — peer-led grief group online and in person.</li>
              <li><strong>WomansLifeAfterLoss.com</strong> — practical financial guidance.</li>
              <li><strong>Local hospice bereavement program</strong> — even if no hospice involved, many open to community for free.</li>
              <li><strong>GriefShare</strong> — faith-based 13-week program. Find a local group at griefshare.org.</li>
              <li><strong>BetterHelp / Talkspace</strong> — online therapy.</li>
              <li><strong>Friendship Line for Older Adults</strong> — 1-800-971-0016 — for when nights are long.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most important advice</h3>
            <p className="text-sm text-muted-foreground">Tell people what to do. "I need someone to bring dinner Tuesday." "I need help with paperwork Saturday." Specific asks are answered. Vague "let me know if you need anything" is rarely followed up. Friends WANT to help. Tell them how.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
