import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Boxes } from 'lucide-react';

export default function SeniorDownsizingCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Downsizing Coach — Move to Smaller, Lighter | TekSure" description="Ready to leave the big house? Plain-English guide to senior move managers (NASMM), declutter strategies, and selling 30 years of stuff." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Boxes className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Downsizing Coach</h1>
          <p className="text-lg text-muted-foreground">Sell, donate, save. The art of moving to less.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When downsizing makes sense</h2>
            <ul className="text-sm list-disc pl-5">
              <li>House too big for two (or one) people.</li>
              <li>Stairs becoming hard.</li>
              <li>Yard work / maintenance more than you want.</li>
              <li>Want to be near grandkids.</li>
              <li>Want to free equity for retirement spending.</li>
              <li>Driving has become limiting; want walkable area.</li>
              <li>You\'re still healthy — easier to make the move now than after a fall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior Move Manager (NASMM)</h2>
            <p className="text-sm">A profession dedicated to helping seniors downsize. They sort, donate, sell, pack, supervise movers, set up the new home — sometimes within days. Average $50-90/hour but worth it for many.</p>
            <p className="text-sm mt-2">Find one at <strong>nasmm.org</strong> — National Association of Senior Move Managers. Members are vetted and insured.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Declutter strategy that actually works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>4-box method</strong> — KEEP, DONATE, SELL, TRASH. Every item goes in one. No "maybe" pile.</li>
              <li><strong>One room a week</strong> — not the whole house. Sustainable.</li>
              <li><strong>Photos save sentiment</strong> — take a photo of the keepsake, then donate. The memory is what you wanted, not the object.</li>
              <li><strong>Ask: "When did I last use this?"</strong> — over 12 months ago, probably never again.</li>
              <li><strong>Stop on a high note</strong> — finish a session feeling proud, not exhausted.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to sell the good stuff</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Facebook Marketplace</strong> — best for big furniture, tools, appliances.</li>
              <li><strong>Estate sale company</strong> — for whole-house contents. They take 25-40% but handle everything.</li>
              <li><strong>Live auction</strong> — for antiques. Search "[your area] estate auction".</li>
              <li><strong>Online auction (LiveAuctioneers, eBay)</strong> — for collectibles.</li>
              <li><strong>Consignment shop</strong> — quality clothing, jewelry.</li>
              <li><strong>Maxsold or EverythingButTheHouse</strong> — online estate auction services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to donate</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Goodwill / Salvation Army / local thrift</strong> — usable clothing, furniture, household.</li>
              <li><strong>Habitat for Humanity ReStore</strong> — building materials, larger furniture, appliances.</li>
              <li><strong>Local hospice resale shops</strong> — proceeds support real care.</li>
              <li><strong>Vietnam Veterans of America (VVA)</strong> — they pick up donations free.</li>
              <li><strong>Library</strong> — books for the annual sale.</li>
              <li><strong>Local schools</strong> — teachers always need supplies.</li>
            </ul>
            <p className="text-sm mt-2">Save donation receipts for tax deduction (if you itemize).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly housing options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>55+ active adult community</strong> — you own. Maintenance handled.</li>
              <li><strong>Independent living</strong> — apartment-style, optional meals/services. Rental.</li>
              <li><strong>CCRC (Continuing Care Retirement Community)</strong> — independent + assisted + nursing on one campus. Big buy-in but lifetime care.</li>
              <li><strong>"Granny flat" / ADU at adult child\'s home</strong> — increasingly popular.</li>
              <li><strong>Smaller home / condo in walkable neighborhood</strong> — staying independent longer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best resource</h3>
            <p className="text-sm text-muted-foreground">A geriatric care manager (find at <strong>aginglifecare.org</strong>) helps assess what level of housing fits your current and future needs. Worth the consultation fee. Plus your local <strong>Area Agency on Aging</strong> ({"<"}eldercare.acl.gov{">"}) is free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
