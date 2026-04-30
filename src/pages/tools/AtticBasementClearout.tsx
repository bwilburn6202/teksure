import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Box } from 'lucide-react';

export default function AtticBasementClearout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Attic + Basement Clearout for Seniors | TekSure" description="Clear stored junk safely. Plain-English step-by-step for senior basement + attic decluttering." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Box className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Attic + Basement Clearout</h1>
          <p className="text-lg text-muted-foreground">The hardest spaces. Slow + safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER do attic alone — heat exhaustion + falls common.</li>
              <li>Wear N95 mask — dust, mold, asbestos, rodent droppings.</li>
              <li>Sturdy closed-toe shoes — nails common.</li>
              <li>Work in cool times (early AM in summer).</li>
              <li>Bring water + take 15-min breaks.</li>
              <li>Solid attic ladder + helper at base.</li>
              <li>If you feel dizzy — STOP.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire help when</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mobility issues.</li>
              <li>Heavy items (furniture, boxes 30+ lbs).</li>
              <li>Spaces with mold, pests, asbestos.</li>
              <li>Suspected hoarding situation.</li>
              <li>Need to be done in 1 weekend.</li>
              <li>Get 2 quotes from junk haulers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Junk hauling services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-800-Got-Junk</strong> — most popular. $250-800.</li>
              <li><strong>College Hunks Hauling Junk</strong> — competitor.</li>
              <li><strong>Junk King</strong> — recycles more.</li>
              <li><strong>Local hauler</strong> — search Google. Often half the price.</li>
              <li><strong>BAGSTER bag</strong> — $30 buy + $150 pickup. DIY pace.</li>
              <li><strong>Roll-off dumpster</strong> — $400-700/week.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sort categories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Keep</strong> — actively used / true sentiment.</li>
              <li><strong>Family/heirs</strong> — text photos, see who wants.</li>
              <li><strong>Sell</strong> — Facebook Marketplace, garage sale.</li>
              <li><strong>Donate</strong> — Goodwill, Salvation Army.</li>
              <li><strong>Recycle</strong> — paper, electronics, metal.</li>
              <li><strong>Trash</strong> — broken, moldy, unusable.</li>
              <li>4 boxes labeled, work one box at a time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Special items</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Paint, chemicals</strong> — Hazardous waste day at town landfill (free).</li>
              <li><strong>Electronics</strong> — Best Buy, Staples free recycling.</li>
              <li><strong>Old computers</strong> — wipe drive first / drill holes.</li>
              <li><strong>Mattresses</strong> — Bye Bye Mattress recycle program.</li>
              <li><strong>Tires</strong> — accept at local Discount Tire $5.</li>
              <li><strong>Asbestos</strong> — DON&apos;T disturb. Hire abatement specialist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Reward yourself</h3>
            <p className="text-sm text-muted-foreground">Each box cleared = a small reward. Reorganized space = peace of mind. Many seniors find unexpected items: WWII letters, old jewelry, savings bonds. Search before tossing anything that looks valuable. Antique appraiser visit if many old items ($50-100).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
