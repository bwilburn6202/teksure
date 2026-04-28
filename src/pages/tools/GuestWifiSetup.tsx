import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi, ShieldCheck, ChevronRight, AlertTriangle } from 'lucide-react';

type Router =
  | 'tplink'
  | 'eero'
  | 'google'
  | 'netgear'
  | 'asus'
  | 'isp';

interface RouterGuide {
  label: string;
  app: string;
  steps: string[];
  isolation: string;
  timeLimit: string;
  notes: string[];
}

const ROUTERS: Record<Router, RouterGuide> = {
  tplink: {
    label: 'TP-Link (Archer or Deco)',
    app: 'TP-Link Tether app (Archer routers) or Deco app (mesh)',
    steps: [
      'Open the Tether or Deco app on your phone and sign in.',
      'Tap "More" (Tether) or the gear icon (Deco), then tap "Wi-Fi" or "Wi-Fi Settings".',
      'Tap "Guest Network" and turn the switch ON.',
      'Type a name for the guest network. A clear pick is your last name plus "-Guest" (for example, "Smith-Guest").',
      'Type a password. Eight or more characters. Avoid your address or phone number.',
      'Tap "Save". The new network appears in your visitor\'s Wi-Fi list within a minute.',
    ],
    isolation: 'In the same Guest Network screen, look for "Allow guests to access my local network". Make sure that switch is OFF. This is the setting that hides your printer, smart speakers, and computers from anyone on the guest network.',
    timeLimit: 'Tap "Access Time" or "Effective Time" inside the Guest Network screen. You can set the network to turn itself off at, say, 11 PM, and turn back on at 8 AM. Helps when grandkids visit.',
    notes: [
      'Most TP-Link routers also let you set a separate guest password for the 2.4 GHz and 5 GHz bands. Pick the same password for both — simpler.',
      'On Deco mesh, the guest network covers every Deco unit in the house automatically.',
    ],
  },
  eero: {
    label: 'Eero (any model)',
    app: 'eero app (iPhone or Android)',
    steps: [
      'Open the eero app and sign in.',
      'Tap the "Settings" tab (gear icon, bottom right).',
      'Tap "Guest Network".',
      'Turn the toggle ON.',
      'Type a network name and a password.',
      'Tap "Save". Eero shares the password by text message if you want — handy for visitors.',
    ],
    isolation: 'Eero isolates the guest network from your main network by default. Devices on the guest network cannot see your printer, smart lock, or laptops. No extra step needed.',
    timeLimit: 'Eero does not have a built-in daily on/off timer for the guest network on the free plan. eero Plus (paid, around $10/month) adds scheduled access. Free workaround: turn the guest network OFF in the app when company leaves.',
    notes: [
      'You can share the guest password by tapping "Share" — eero sends a text with the network name and password. Visitors tap once to connect.',
      'The guest network uses the same Wi-Fi as your main network, so speed is not cut in half.',
    ],
  },
  google: {
    label: 'Google Nest Wifi / Google Wifi',
    app: 'Google Home app',
    steps: [
      'Open the Google Home app on your phone.',
      'Tap "Wi-Fi" (the round icon, usually top of the screen).',
      'Tap the gear icon → "Guest network".',
      'Toggle "Use guest network" ON.',
      'Type a network name and password.',
      'Tap "Save".',
    ],
    isolation: 'Inside the Guest Network screen, you can pick which devices are allowed to be SHARED with guests — for example, your Chromecast or smart TV. Anything you do not check stays hidden. By default nothing is shared, which is the safe choice.',
    timeLimit: 'Google does not have a daily timer on the guest network itself, but you can use Family Wi-Fi → Schedules to pause it. Or turn the guest network OFF when no one is visiting.',
    notes: [
      'Tap "Show password" inside the app to read it out to a visitor — or tap "Share" to send by text.',
      'Works the same on every Nest Wifi point in the house.',
    ],
  },
  netgear: {
    label: 'Netgear Nighthawk',
    app: 'Nighthawk app, or routerlogin.net in a web browser',
    steps: [
      'Open the Nighthawk app and sign in. (Or visit routerlogin.net on a computer connected to your Wi-Fi.)',
      'Tap "Wi-Fi Settings".',
      'Tap "Guest Wi-Fi".',
      'Toggle the guest network ON.',
      'Type a name and a password. Pick WPA2 or WPA3 security if asked.',
      'Tap "Apply" or "Save".',
    ],
    isolation: 'On the Guest Wi-Fi screen, find the option "Allow guests to see each other and access my local network". Make sure that box is UNCHECKED. That is what keeps your printer, computers, and smart speakers hidden from visitors.',
    timeLimit: 'Nighthawk routers support a "Schedule" option under Guest Wi-Fi on most newer models — you can pick the hours the guest network is allowed to be on. Older models may not have this; turn it off manually when company leaves.',
    notes: [
      'The Nighthawk app shows a QR code for the guest network. Visitors point their camera at it and tap to connect — no typing.',
      'Set up separate 2.4 GHz and 5 GHz guest networks if you want, or one combined network. One is simpler.',
    ],
  },
  asus: {
    label: 'ASUS (RT-AX or ZenWiFi)',
    app: 'ASUS Router app, or router.asus.com in a web browser',
    steps: [
      'Open the ASUS Router app and sign in.',
      'Tap "Settings" (gear icon).',
      'Tap "Guest Network".',
      'ASUS supports up to three guest networks. Tap the first slot, then "Enable".',
      'Type a Network Name (SSID) and a password.',
      'Pick "WPA2-Personal" or "WPA3-Personal" for security.',
      'Tap "Apply".',
    ],
    isolation: 'In the Guest Network setup, find "Access Intranet" and set it to "Disable". This is the ASUS name for blocking the guest network from your printer, smart devices, and computers. Disable means safe.',
    timeLimit: 'ASUS lets you set "Access time" right in the Guest Network screen — pick the number of hours the network is allowed to stay on, or set unlimited. After that time, the guest network turns itself off.',
    notes: [
      'On ZenWiFi mesh, the guest network covers every node automatically.',
      'AiProtection (free, built in) blocks dangerous websites for guests too — make sure it is turned ON in the app.',
    ],
  },
  isp: {
    label: 'I rent a router from my ISP (Spectrum, Xfinity, Verizon)',
    app: 'Your provider\'s app — Xfinity, My Spectrum, or My Verizon',
    steps: [
      'Open your internet provider\'s app on your phone and sign in. (Xfinity, My Spectrum, or My Verizon Fios.)',
      'Find the "Internet" or "Wi-Fi" section.',
      'Look for "Guest Network", "Guest Wi-Fi", or "Manage Wi-Fi". Tap it.',
      'Turn the guest network ON.',
      'Type a name and a password.',
      'Save. The change can take 2–3 minutes to apply.',
    ],
    isolation: 'On Xfinity and Spectrum, the guest network is automatically isolated from your main network — no extra step. On Verizon Fios, look for "Block guests from accessing my devices" and turn it ON.',
    timeLimit: 'Most ISP-supplied routers do not offer a daily timer for the guest network. Workaround: turn the guest network OFF in the app when no one is visiting, ON when company arrives.',
    notes: [
      'If you cannot find a guest network option in your provider\'s app, your rented router may not support it. That is one reason many people buy their own router — see our Router Upgrade Helper.',
      'Xfinity also broadcasts a public "xfinitywifi" hotspot from rented routers by default. That is a different thing — it is for other Xfinity customers, not your visitors. You can turn it off in the app if you want.',
    ],
  },
};

export default function GuestWifiSetup() {
  const [router, setRouter] = useState<Router>('tplink');
  const guide = ROUTERS[router];

  return (
    <>
      <SEOHead
        title="Guest Wi-Fi Setup"
        description="Set up a separate Wi-Fi network for visitors so they cannot see your printer, smart speakers, security cameras, or computers. Step-by-step for TP-Link, Eero, Google Nest Wifi, Netgear, ASUS, and ISP-rented routers."
        path="/tools/guest-wifi-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Wifi className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Guest Wi-Fi Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A separate Wi-Fi network for visitors. Keeps your printer, smart speakers, and computers hidden — and your main password private.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Guest Wi-Fi Setup' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5 flex gap-3">
              <ShieldCheck className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Why a guest network matters</p>
                <p className="text-muted-foreground">
                  Anyone who knows your main Wi-Fi password is on the same network as your smart lock, baby monitor, security cameras, printer, and the laptop where you do your banking. A guest network puts visitors in a separate room with a closed door — they get internet, but they cannot see your devices. If a visitor\'s phone has a virus, it cannot spread to your computer either.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your router</p>
              <div className="flex gap-2 flex-wrap">
                {(Object.keys(ROUTERS) as Router[]).map(r => (
                  <Button
                    key={r}
                    variant={router === r ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setRouter(r)}
                  >
                    {ROUTERS[r].label}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Not sure what you have? Look at the sticker on the back of the router. The brand name is printed there.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                <div>
                  <Badge variant="outline" className="mb-2">{guide.label}</Badge>
                  <p className="text-xs text-muted-foreground">App: {guide.app}</p>
                </div>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
              <ol className="space-y-3 mb-5">
                {guide.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Hide your devices from guests</p>
                <p className="text-sm">{guide.isolation}</p>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Set a daily time limit</p>
                <p className="text-sm">{guide.timeLimit}</p>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1.5">
                {guide.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{n}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Always set a password — never leave the guest network "open"</p>
                <p className="text-muted-foreground">
                  Some routers offer an "open" guest network with no password. Do not pick that. An open network is a magnet for neighbors, people parked outside, and anyone scanning the area. They can use up your data, slow your internet, and in rare cases use your connection for illegal downloads — which the police trace back to you. A simple password (eight characters, plain enough to read aloud) blocks all of that.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A few good guest-network habits</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Write the guest name and password on a small card and tape it inside a kitchen cabinet door. Visitors find it without you having to look it up.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Change the guest password once a year. Old visitors\' phones stop auto-connecting — that is fine.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Use the guest network for any new gadget you are unsure about — a smart bulb from a brand you have never heard of, for example. Keeps it away from your real devices.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Never give your main Wi-Fi password to repair people, contractors, or short-term help. Guest network only.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/router-upgrade-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Router Upgrade Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Newer routers make guest setup faster.</p>
              </Link>
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick safe smart devices to add.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Protect the laptop you bank on.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write the guest password somewhere a visitor can find it without bothering you. Inside a cabinet door works great.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
