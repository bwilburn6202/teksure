import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Router, Wifi, CheckCircle, Circle, ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  adminUrl: string;
  defaultUser: string;
  defaultPass: string;
  appName?: string;
  appLink?: string;
  steps: { title: string; detail: string }[];
  support: { label: string; url: string };
  tips: string[];
}

const BRANDS: Brand[] = [
  {
    id: 'netgear',
    name: 'Netgear (Nighthawk, Orbi)',
    adminUrl: 'http://www.routerlogin.net',
    defaultUser: 'admin',
    defaultPass: 'password (printed on router)',
    appName: 'Nighthawk / Orbi App',
    appLink: 'https://www.netgear.com/home/services/nighthawk-app/',
    steps: [
      { title: 'Unplug your old router and modem', detail: 'Power off both. Leave unplugged for 30 seconds so your ISP can recognize the new device.' },
      { title: 'Connect the Netgear router to your modem', detail: 'Use the yellow Ethernet cable. Plug one end into the "Internet" port on the router, the other into your modem.' },
      { title: 'Plug the router into power', detail: 'Wait 2 minutes for all lights to go solid. The internet light should be white or green.' },
      { title: 'Download the Nighthawk app (recommended)', detail: 'Free on iPhone or Android. Tap "New Setup" and scan the QR code on the router label.' },
      { title: 'Or connect to the default Wi-Fi', detail: 'Network name and password are printed on a sticker on the router. Connect, then visit routerlogin.net in a browser.' },
      { title: 'Create your own Wi-Fi name and password', detail: 'Replace the factory default. Use a strong password (12+ characters). Write it down somewhere safe.' },
      { title: 'Update the admin password', detail: 'The admin password is separate from Wi-Fi. Change it from "password" to something strong.' },
      { title: 'Enable auto firmware updates', detail: 'Settings → Administration → Firmware Update → turn on automatic updates. Keeps your router secure.' },
    ],
    support: { label: 'Netgear Support', url: 'https://www.netgear.com/support/' },
    tips: [
      'The Wi-Fi password and admin password are DIFFERENT. Don\'t mix them up.',
      'Orbi users: set up the main router first, then add satellites one at a time.',
      'For mesh: place satellites within line of sight of the main router for best results.',
    ],
  },
  {
    id: 'linksys',
    name: 'Linksys (Velop, Hydra)',
    adminUrl: 'http://myrouter.local',
    defaultUser: 'admin',
    defaultPass: 'admin (or printed on label)',
    appName: 'Linksys App',
    appLink: 'https://www.linksys.com/linksys-app/',
    steps: [
      { title: 'Download the Linksys app', detail: 'Free on iPhone or Android. This is the easiest way to set up.' },
      { title: 'Connect modem to router', detail: 'Ethernet cable from modem into the "Internet" port (usually blue or labeled WAN).' },
      { title: 'Power on the router', detail: 'Wait until the top light blinks steady blue (about 2 minutes).' },
      { title: 'Open the Linksys app', detail: 'Tap "Set up a new Linksys product". The app will find your router automatically.' },
      { title: 'Follow in-app prompts', detail: 'Pick a network name and password. The app walks you through each step.' },
      { title: 'Velop mesh: add nodes one at a time', detail: 'Place each node midway between router and dead zone. Wait for solid blue before moving on.' },
      { title: 'Set up Linksys cloud account', detail: 'Lets you manage the router from anywhere. Use a strong password with 2-factor if available.' },
    ],
    support: { label: 'Linksys Support', url: 'https://www.linksys.com/support/' },
    tips: [
      'If the app can\'t find the router, make sure your phone is connected to the default Wi-Fi on the router label.',
      'Velop nodes should be 1-2 rooms apart for best coverage.',
      'Turn off the old router\'s Wi-Fi to avoid network conflicts.',
    ],
  },
  {
    id: 'tplink',
    name: 'TP-Link (Archer, Deco)',
    adminUrl: 'http://tplinkwifi.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    appName: 'Tether / Deco App',
    appLink: 'https://www.tp-link.com/us/support/download/tether/',
    steps: [
      { title: 'Download the right app', detail: 'Tether for Archer routers, Deco for Deco mesh. Both are free.' },
      { title: 'Power off modem', detail: 'Unplug and leave off for 1 minute.' },
      { title: 'Connect router to modem', detail: 'Ethernet cable from modem into the blue "Internet" port.' },
      { title: 'Power on modem first, then router', detail: 'Wait 1 minute between each. The Wi-Fi light should turn solid.' },
      { title: 'Connect your phone to default Wi-Fi', detail: 'SSID and password are on a card that came with the router or on a sticker.' },
      { title: 'Open the app and create account', detail: 'TP-Link ID is required for remote management and automatic updates.' },
      { title: 'Set new Wi-Fi name and password', detail: 'Make it different from the factory default.' },
      { title: 'Run a speed test', detail: 'Inside the app → Tools → Internet Speed Test. Confirms everything works.' },
    ],
    support: { label: 'TP-Link Support', url: 'https://www.tp-link.com/us/support/' },
    tips: [
      'Deco mesh: set up the main unit, then add other units one at a time — each takes 2-3 minutes.',
      'Enable HomeShield in the app for free parental controls and antivirus.',
      'If you can\'t access tplinkwifi.net, try 192.168.0.1 or 192.168.1.1.',
    ],
  },
  {
    id: 'eero',
    name: 'eero (Amazon)',
    adminUrl: 'via app only',
    defaultUser: 'App-only setup',
    defaultPass: 'App-only setup',
    appName: 'eero App',
    appLink: 'https://eero.com/app',
    steps: [
      { title: 'Download the eero app', detail: 'Free on iPhone or Android. Required — there is no web admin page.' },
      { title: 'Create an eero account', detail: 'Sign in with your Amazon account or create a new eero account.' },
      { title: 'Plug eero into your modem', detail: 'Use the included Ethernet cable. Either port on the eero works — they auto-detect.' },
      { title: 'Scan the QR code on the bottom', detail: 'The app finds your eero through Bluetooth. Very quick.' },
      { title: 'Pick a Wi-Fi name and password', detail: 'The app creates a single unified network for all eeros.' },
      { title: 'Add additional eeros', detail: 'Plug each one into power within 30 feet of the main. App finds them automatically.' },
      { title: 'Run the network test', detail: 'App runs a speed and coverage test. Tells you if any eeros are too far apart.' },
      { title: 'Consider eero Plus ($9.99/mo)', detail: 'Optional. Adds Malwarebytes, 1Password, ad blocking, and parental controls.' },
    ],
    support: { label: 'eero Support', url: 'https://support.eero.com/' },
    tips: [
      'eero has NO web interface. Everything is in the app.',
      'If you have Amazon Prime, eero works with Alexa for voice control.',
      'Wired backhaul: connect eeros with Ethernet for the fastest mesh speeds.',
    ],
  },
  {
    id: 'google',
    name: 'Google Nest Wifi',
    adminUrl: 'via Google Home app',
    defaultUser: 'App-only setup',
    defaultPass: 'App-only setup',
    appName: 'Google Home App',
    appLink: 'https://home.google.com/get-app/',
    steps: [
      { title: 'Download the Google Home app', detail: 'Free on iPhone or Android. If you have other Google devices, you already have it.' },
      { title: 'Plug Nest Wifi into your modem', detail: 'Ethernet cable from modem to the "WAN" port on the Nest Wifi.' },
      { title: 'Power on and wait', detail: 'Light pulses white while starting up, then stays solid white when ready.' },
      { title: 'Open Google Home → "+" → Set up device', detail: 'Tap "New device" → "Wi-Fi" → follow prompts.' },
      { title: 'Scan the QR code on the bottom', detail: 'The app pairs automatically.' },
      { title: 'Pick a Wi-Fi name and password', detail: 'This becomes your main home network.' },
      { title: 'Add Nest Wifi points (if you have them)', detail: 'Plug into power in your chosen room. The app walks you through each one.' },
      { title: 'Set up Guest network', detail: 'Separate Wi-Fi for visitors — keeps your main devices isolated. Recommended.' },
    ],
    support: { label: 'Google Nest Support', url: 'https://support.google.com/googlenest/' },
    tips: [
      'Nest Wifi Pro uses Wi-Fi 6E — much faster but only if your devices support it.',
      'You can use Nest Wifi points as speakers too (older models have Google Assistant built in).',
      'Set schedules to pause Wi-Fi for specific devices (great for kids).',
    ],
  },
  {
    id: 'asus',
    name: 'Asus (RT, ROG, ZenWiFi)',
    adminUrl: 'http://router.asus.com',
    defaultUser: 'admin',
    defaultPass: 'admin',
    appName: 'Asus Router App',
    appLink: 'https://www.asus.com/networking-iot-servers/wifi-routers/asus-router-app/',
    steps: [
      { title: 'Connect router to modem', detail: 'Ethernet into the blue "WAN" port. Power on both.' },
      { title: 'Download Asus Router app (optional but easier)', detail: 'Free on iPhone/Android. Makes first setup much simpler.' },
      { title: 'Connect to default Wi-Fi', detail: 'Asus_XXXX (the X\'s are random letters). No password on first connect.' },
      { title: 'Go to router.asus.com', detail: 'Browser opens the setup wizard automatically.' },
      { title: 'Create login + Wi-Fi password', detail: 'First-time wizard asks for both. Make them different.' },
      { title: 'AiMesh: add second router (if mesh)', detail: 'Network map → "Add AiMesh Node" → router finds it automatically.' },
      { title: 'Turn on AiProtection', detail: 'Free built-in antivirus and parental controls powered by Trend Micro.' },
      { title: 'Enable firmware auto-update', detail: 'Administration → Firmware Upgrade → enable automatic.' },
    ],
    support: { label: 'Asus Support', url: 'https://www.asus.com/support/' },
    tips: [
      'ROG gaming routers have extra gaming features — port prioritization, low-latency mode.',
      'AiMesh lets you mix different Asus router models as a mesh — unique to Asus.',
      'Enable "Adaptive QoS" if your connection feels slow during video calls.',
    ],
  },
];

export default function RouterSetupWizard() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (i: number) => {
    const next = new Set(completedSteps);
    if (next.has(i)) next.delete(i); else next.add(i);
    setCompletedSteps(next);
  };

  return (
    <>
      <SEOHead
        title="Router Setup Wizard — Step-by-Step Guide"
        description="Set up any Wi-Fi router — Netgear, Linksys, TP-Link, eero, Google Nest Wifi, or Asus — with brand-specific steps in plain English."
        path="/tools/router-setup-wizard"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Router className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Home Network</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Router Setup Wizard</h1>
            <p className="text-muted-foreground max-w-2xl">
              Pick your router brand. We'll walk you through the setup step by step — including the app, admin page, Wi-Fi password, and security basics.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          {!selectedBrand ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">What brand is your router?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BRANDS.map((b) => (
                  <Card
                    key={b.id}
                    className="cursor-pointer hover:border-primary transition-colors"
                    onClick={() => { setSelectedBrand(b); setCompletedSteps(new Set()); }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                          <Wifi className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{b.name}</h3>
                          <p className="text-xs text-muted-foreground font-mono">{b.adminUrl}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-amber-50/50 dark:bg-amber-950/20 border-amber-500/40">
                <CardContent className="p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Don't know your brand?</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Look on the box, or at the front/back of the router itself. The brand name is usually printed in large letters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedBrand(null)} className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />Pick a different brand
              </Button>

              <h2 className="text-2xl font-bold mb-3">{selectedBrand.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                <Card><CardContent className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Admin page</div>
                  <div className="text-sm font-mono">{selectedBrand.adminUrl}</div>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Default username</div>
                  <div className="text-sm font-mono">{selectedBrand.defaultUser}</div>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Default password</div>
                  <div className="text-sm font-mono">{selectedBrand.defaultPass}</div>
                </CardContent></Card>
              </div>

              <div className="flex items-center justify-between mb-4 p-3 rounded-md bg-muted/50 border border-border">
                <span className="text-sm font-medium">{completedSteps.size} of {selectedBrand.steps.length} steps done</span>
                <div className="flex-1 mx-4 h-2 bg-border rounded-full overflow-hidden max-w-xs">
                  <div className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(completedSteps.size / selectedBrand.steps.length) * 100}%` }} />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {selectedBrand.steps.map((step, i) => {
                  const done = completedSteps.has(i);
                  return (
                    <Card key={i} onClick={() => toggleStep(i)}
                      className={`cursor-pointer transition-colors ${done ? 'border-green-600/40 bg-green-50/40 dark:bg-green-950/20' : 'hover:border-primary/40'}`}>
                      <CardContent className="p-4 flex items-start gap-3">
                        {done ? <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> : <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">Step {i + 1}</Badge>
                            <h4 className={`font-semibold ${done ? 'line-through text-muted-foreground' : ''}`}>{step.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedBrand.appName && selectedBrand.appLink && (
                  <Card className="bg-primary/5 border-primary/20"><CardContent className="p-5">
                    <h4 className="font-semibold mb-1">Official app</h4>
                    <p className="text-sm text-muted-foreground mb-3">{selectedBrand.appName}</p>
                    <Button asChild size="sm"><a href={selectedBrand.appLink} target="_blank" rel="noopener noreferrer">
                      Download <ExternalLink className="w-3 h-3 ml-1" />
                    </a></Button>
                  </CardContent></Card>
                )}
                <Card className="bg-muted/30"><CardContent className="p-5">
                  <h4 className="font-semibold mb-1">Stuck?</h4>
                  <p className="text-sm text-muted-foreground mb-3">Official support from the manufacturer.</p>
                  <Button asChild variant="outline" size="sm"><a href={selectedBrand.support.url} target="_blank" rel="noopener noreferrer">
                    {selectedBrand.support.label} <ExternalLink className="w-3 h-3 ml-1" />
                  </a></Button>
                </CardContent></Card>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3">Quick Tips</h4>
                  <ul className="space-y-2">
                    {selectedBrand.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
