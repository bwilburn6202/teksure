import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function EstateSaleApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate Sale Apps for Senior Downsizers | TekSure" description="Estate sale apps for senior downsizing or running estate sale for parents." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Sales</h1>
          <p className="text-lg text-muted-foreground">Find sales near you. Sell your stuff.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EstateSales.net</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app + website.</li>
              <li>Find estate sales by zip.</li>
              <li>Photos of items in sale.</li>
              <li>Maps + directions.</li>
              <li>Browse before going.</li>
              <li>Largest US directory.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hire estate sale company</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>For downsizing or after parent passes.</li>
              <li>Companies handle everything.</li>
              <li>30-50% commission typical.</li>
              <li>3-day weekend sales standard.</li>
              <li>EstateSales.net to find local.</li>
              <li>Get 3 quotes before hiring.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Run your own sale</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cheaper but more work.</li>
              <li>Photograph + price all items.</li>
              <li>Advertise on EstateSales.net (small fee).</li>
              <li>Plus Craigslist + Facebook.</li>
              <li>Family helps the day of.</li>
              <li>Cash + Venmo for sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online auctions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>EBTH (Everything But The House).</li>
              <li>MaxSold - online estate auctions.</li>
              <li>Pickup-only auctions.</li>
              <li>Wider buyer pool than local.</li>
              <li>Higher prices on collectibles.</li>
              <li>15-35% commission.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior shopping at sales</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Best deals last day of sale.</li>
              <li>First day for best selection.</li>
              <li>Cash for power.</li>
              <li>Bring measuring tape.</li>
              <li>Photograph items, ask family.</li>
              <li>Make offer on big items.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior downsizing tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start 6 months before move.</li>
              <li>Family member as project manager.</li>
              <li>Photograph everything for memory.</li>
              <li>Donate before throwing.</li>
              <li>Don't try to do it alone.</li>
              <li>Pace yourself - emotionally taxing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hire pros for big sales</h3>
            <p className="text-sm text-muted-foreground">When downsizing or settling parent&apos;s estate with thousands of items, hire an estate sale company. The 30-40% commission saves weeks of your time. They price, advertise, run the sale, and clean out unsold items. For smaller sales (one room of stuff), DIY via Facebook Marketplace works fine. Match the tool to scale.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
