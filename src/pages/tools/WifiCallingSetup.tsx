import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PhoneCall, ChevronRight, ExternalLink } from 'lucide-react';

type Phone = 'iphone' | 'android';

interface Setup {
  steps: string[];
  notes: string[];
}

const SETUPS: Record<Phone, Setup> = {
  iphone: {
    steps: [
      'Settings → Phone → Wi-Fi Calling.',
      'Toggle "Wi-Fi Calling on This iPhone" ON.',
      'It will ask you to verify a 911 emergency address — type your home address. This is what 911 sees if you call from Wi-Fi.',
      'Pop-up confirms it is enabled. Done.',
      'Optional: Settings → Phone → "Add Wi-Fi Calling for Other Devices" → also lets your iPad and Mac take calls when on the same Apple ID.',
    ],
    notes: [
      'Works free on Verizon, AT&T, T-Mobile.',
      'When enabled, the status bar shows "Carrier Wi-Fi" instead of cell bars.',
      'When you are abroad on hotel Wi-Fi, calls and texts to US numbers stay free.',
    ],
  },
  android: {
    steps: [
      'Open the Phone app → menu (three dots) → Settings → Calls → Wi-Fi Calling.',
      'Toggle ON.',
      'Verify a 911 emergency address — your home.',
      'On Pixel and Samsung, look for the small Wi-Fi+phone icon in the status bar to confirm it is working.',
    ],
    notes: [
      'Available on most Verizon, AT&T, T-Mobile Androids — older / unlocked phones may not have it.',
      'Settings location varies a little by manufacturer; the search bar in Settings can find "Wi-Fi calling" fast.',
    ],
  },
};

const SCENARIOS = [
  {
    title: 'A house with poor cell signal in the back rooms',
    detail: 'Wi-Fi calling routes calls through your home internet. Suddenly the back bedroom has full bars.',
  },
  {
    title: 'Traveling internationally',
    detail: 'On hotel Wi-Fi anywhere in the world, calls and texts to US numbers stay FREE — no roaming charges. Calling 911 on Wi-Fi calling abroad reaches US 911, not local emergency.',
  },
  {
    title: 'Living in a basement apartment',
    detail: 'Same idea as the back-of-house bedroom. Cell signal does not penetrate concrete; Wi-Fi does fine.',
  },
  {
    title: 'When the cell tower is congested',
    detail: 'During a major event or storm, towers get overloaded. Wi-Fi calling stays clear.',
  },
];

export default function WifiCallingSetup() {
  const [phone, setPhone] = useState<Phone>('iphone');
  const setup = SETUPS[phone];

  return (
    <>
      <SEOHead
        title="Wi-Fi Calling Setup"
        description="Make and receive calls over your home Wi-Fi when cell signal is bad. Free on every major US carrier. Works internationally too. iPhone and Android setup steps."
        path="/tools/wifi-calling-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <PhoneCall className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Wi-Fi Calling Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Calls and texts over your home internet when cell signal is bad. Free on all major US carriers.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Wi-Fi Calling Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
              <ol className="space-y-3 mb-4">
                {setup.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1.5">
                {setup.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{n}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">When it especially matters</p>
          <div className="space-y-3 mb-6">
            {SCENARIOS.map((s, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A free signal-booster alternative</p>
              <p className="text-xs text-muted-foreground">
                Major US carriers also send free in-home cell boosters (Verizon LTE Network Extender, AT&T MicroCell, T-Mobile signal booster) if you genuinely have no signal at home. Call your carrier and ask. They are sometimes free for senior customers, sometimes a one-time $100 fee.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/router-upgrade-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Router Upgrade Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Better Wi-Fi = better Wi-Fi calling.</p>
              </Link>
              <Link to="/tools/voicemail-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voicemail Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Read voicemails when on Wi-Fi too.</p>
              </Link>
              <Link to="/tools/travel-tech-checklist" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Travel Tech Checklist</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free calls home from any hotel.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: turn it on at home BEFORE you travel. The international free-calls trick works only after Wi-Fi calling is enabled.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
