import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function TMobileHomeInternet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="T-Mobile Home Internet for Seniors | TekSure" description="Cheap 5G home internet. Plain-English review for senior switchers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">T-Mobile Home Internet</h1>
          <p className="text-lg text-muted-foreground">$50/mo. Often half cable cost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior switchers love it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50/mo flat — taxes + fees included.</li>
              <li>$30/mo if T-Mobile cell customer.</li>
              <li>NO contract. Cancel anytime.</li>
              <li>NO equipment fees, install fees.</li>
              <li>NO data caps.</li>
              <li>Plug-and-play in 15 min.</li>
              <li>Free trial 15 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Speeds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Average: 100-200 Mbps download.</li>
              <li>Plenty for streaming + video calls.</li>
              <li>Can vary by location/time.</li>
              <li>Slower than fiber, comparable to cable.</li>
              <li>Test free trial first.</li>
              <li>Coverage check at t-mobile.com/home-internet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (15 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order online or in-store.</li>
              <li>Gateway device arrives in 1-3 days.</li>
              <li>Plug into power outlet.</li>
              <li>Place in window if signal weak.</li>
              <li>Connect devices to WiFi (name + password printed on device).</li>
              <li>Done. No technician visit needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to switch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Comcast/Spectrum bill over $80/mo.</li>
              <li>You don&apos;t need fiber-fast speeds.</li>
              <li>Tired of cable company hassles.</li>
              <li>Coverage available at home (check map).</li>
              <li>Want simpler setup.</li>
              <li>Save $30-60/mo most likely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verizon 5G alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verizon 5G Home Internet — $35-60/mo.</li>
              <li>Cheaper if Verizon cell customer.</li>
              <li>Better coverage some areas.</li>
              <li>Try both — pick best price + speed.</li>
              <li>Coverage map at Verizon.com/home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test before commit</h3>
            <p className="text-sm text-muted-foreground">Free 15-day trial. Don&apos;t cancel cable yet. Try T-Mobile in parallel. Test speed (fast.com), test streaming, video calls. If works fine — switch + cancel cable. If not — return T-Mobile, no charge. Risk-free trial.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
