import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cable } from 'lucide-react';

export default function EthernetCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ethernet Coach — When Wired Beats Wireless | TekSure" description="Wi-Fi gets all the attention but Ethernet is faster, more reliable. Plain-English guide to when to plug in instead of going wireless." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cable className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ethernet Coach</h1>
          <p className="text-lg text-muted-foreground">When wired beats Wi-Fi — and how to do it cheap.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use Ethernet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart TV / streaming box in living room</strong> — eliminates buffering. Connect to nearest Ethernet jack.</li>
              <li><strong>Desktop computer / video calls</strong> — most stable.</li>
              <li><strong>Gaming console</strong> — lower lag.</li>
              <li><strong>NAS / media server</strong> — needs full speed.</li>
              <li><strong>Home office work</strong> — for video conferencing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Ethernet is better</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Faster</strong> — usually 1 Gbps. Wi-Fi 6/7 advertises higher but real-world is often less.</li>
              <li><strong>More stable</strong> — no interference from microwaves, neighbors\' Wi-Fi, baby monitors.</li>
              <li><strong>Lower latency</strong> — important for video calls, gaming.</li>
              <li><strong>More secure</strong> — physical wire vs broadcast signal anyone can sniff.</li>
              <li><strong>Frees up Wi-Fi</strong> — fewer devices on Wi-Fi means better Wi-Fi for the rest.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to add Ethernet without rewiring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cat6 cable</strong> — 25-50ft. $10-20 on Amazon. Run along baseboard.</li>
              <li><strong>Powerline adapters</strong> — $80 for a pair. Plug one near router, one near device. Internet over electrical.</li>
              <li><strong>MoCA adapter</strong> — uses your home\'s coax (cable TV) wiring. Often the FASTEST non-wired option.</li>
              <li><strong>Network switch</strong> ($25) — multi-port hub. Plug into one Ethernet, get 5-8 ports.</li>
              <li><strong>Professional install</strong> — cable inside walls. $200-500.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cable types — which to buy</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Cat5e</strong> — works for 1 Gbps. Cheapest. Fine for most.</li>
              <li><strong>Cat6 / Cat6a</strong> — 1-10 Gbps. Better future-proofing for $5-10 more. Pick this.</li>
              <li><strong>Cat7 / Cat8</strong> — overkill for home. Skip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick win</h3>
            <p className="text-sm text-muted-foreground">Plug your living room smart TV / Apple TV / Roku into Ethernet via a long Cat6 cable from the router. Tape it along the baseboard. Streaming becomes instant — no more "buffering" pauses on Netflix.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
