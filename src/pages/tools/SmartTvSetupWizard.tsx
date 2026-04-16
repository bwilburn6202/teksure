import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tv, CheckCircle, Circle, ArrowLeft, ExternalLink, Play } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  tagline: string;
  appsIncluded: string[];
  cost: string;
  remote: string;
  voiceAssistant: string;
  steps: { title: string; detail: string }[];
  popularApps: { name: string; isFree: boolean }[];
  support: { label: string; url: string };
}

const DEVICES: Device[] = [
  {
    id: 'roku',
    name: 'Roku (Streaming Stick, Express, Ultra)',
    tagline: 'Simple, affordable, works with almost every streaming service.',
    appsIncluded: ['Netflix', 'YouTube', 'Hulu', 'Disney+', 'Max', 'Peacock', 'Apple TV+'],
    cost: '$30–$100 one-time',
    remote: 'Physical remote with simple 4-color buttons, plus app control',
    voiceAssistant: 'Roku Voice (built into remote on most models)',
    steps: [
      { title: 'Plug the Roku into your TV', detail: 'HDMI cable into the back or side of the TV. Note the HDMI port number (HDMI 1, 2, etc.).' },
      { title: 'Plug the power cable', detail: 'Into a wall outlet, or into the TV\'s USB port (only on Streaming Stick). USB is fine for light use.' },
      { title: 'Switch TV to the right input', detail: 'Press "Input" or "Source" on your TV remote. Pick HDMI 1, 2, or whichever port you used.' },
      { title: 'Put batteries in the Roku remote', detail: 'Pairing is automatic — wait 30 seconds after turning on the Roku.' },
      { title: 'Pick your language', detail: 'Roku remote: use arrows to select, press OK.' },
      { title: 'Connect to Wi-Fi', detail: 'Pick your home network. Enter your Wi-Fi password using the on-screen keyboard.' },
      { title: 'Let Roku update itself', detail: 'First-time updates take 5–10 minutes. Roku will restart.' },
      { title: 'Create a Roku account (free)', detail: 'You can do this on your phone/computer — easier than typing with the remote. Go to roku.com/link and enter the code shown on TV.' },
      { title: 'Skip the payment method if prompted', detail: 'You don\'t need a credit card. Click "Start without entering a payment method" (it\'s in small text).' },
      { title: 'Add your streaming apps', detail: 'Home → Streaming Channels → search for Netflix, Hulu, etc. Sign in to each with your existing account.' },
    ],
    popularApps: [
      { name: 'The Roku Channel', isFree: true },
      { name: 'Pluto TV', isFree: true },
      { name: 'Tubi', isFree: true },
      { name: 'Freevee', isFree: true },
      { name: 'YouTube', isFree: true },
      { name: 'Netflix', isFree: false },
      { name: 'Disney+', isFree: false },
      { name: 'Max', isFree: false },
    ],
    support: { label: 'Roku Support', url: 'https://support.roku.com/' },
  },
  {
    id: 'firetv',
    name: 'Amazon Fire TV Stick',
    tagline: 'Great if you have Amazon Prime. Alexa built in.',
    appsIncluded: ['Prime Video', 'Netflix', 'Hulu', 'Disney+', 'Max', 'YouTube', 'Freevee'],
    cost: '$30–$60 one-time',
    remote: 'Includes Alexa voice remote',
    voiceAssistant: 'Alexa',
    steps: [
      { title: 'Plug Fire TV Stick into HDMI', detail: 'Back or side of your TV. Use the included HDMI extender if it doesn\'t fit.' },
      { title: 'Plug power into wall outlet', detail: 'Do NOT use your TV\'s USB port — Fire Stick needs more power for best performance.' },
      { title: 'Switch TV to that HDMI input', detail: 'Press "Input" on your TV remote and select the correct HDMI port.' },
      { title: 'Put batteries in the remote', detail: 'It pairs automatically when you turn on the Fire Stick.' },
      { title: 'Press the Home button', detail: 'This starts the setup wizard.' },
      { title: 'Connect to Wi-Fi', detail: 'Pick your network and enter the password.' },
      { title: 'Sign in to Amazon', detail: 'Use your existing Amazon account. If you don\'t have one, create it on your phone — it\'s much faster.' },
      { title: 'Set up parental controls (optional)', detail: 'Requires a PIN before purchases or adult content. Good if kids use the TV.' },
      { title: 'Choose your streaming apps', detail: 'Amazon offers to install Netflix, Hulu, Disney+, etc. during setup. You can add more later from the App Store.' },
      { title: 'Try "Alexa, open Netflix"', detail: 'Hold the microphone button on the remote. Alexa can search, play, pause, and switch apps.' },
    ],
    popularApps: [
      { name: 'Prime Video (if Prime member)', isFree: false },
      { name: 'Freevee', isFree: true },
      { name: 'IMDb TV', isFree: true },
      { name: 'Pluto TV', isFree: true },
      { name: 'Tubi', isFree: true },
      { name: 'YouTube', isFree: true },
      { name: 'Netflix', isFree: false },
      { name: 'Disney+', isFree: false },
    ],
    support: { label: 'Amazon Fire TV Help', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GZNVS8V2XDKYCT5Y' },
  },
  {
    id: 'appletv',
    name: 'Apple TV 4K',
    tagline: 'Premium streaming box. Best if you already use an iPhone or Mac.',
    appsIncluded: ['Apple TV+', 'Netflix', 'YouTube', 'Hulu', 'Disney+', 'Max', 'Apple Music'],
    cost: '$129–$149 one-time',
    remote: 'Siri Remote with touch pad',
    voiceAssistant: 'Siri',
    steps: [
      { title: 'Connect to TV with HDMI', detail: 'You need to buy the HDMI cable separately. Any HDMI 2.1 cable works.' },
      { title: 'Plug into power', detail: 'Apple TV always needs wall power — no USB option.' },
      { title: 'Switch TV input to the right HDMI', detail: 'Press "Input" or "Source" on your TV remote.' },
      { title: 'Press any button on the Siri Remote', detail: 'Remote is pre-paired. Just press to wake Apple TV.' },
      { title: 'Hold your iPhone near Apple TV', detail: 'If you have an iPhone signed into iCloud, it auto-transfers your Apple ID and Wi-Fi settings. Magic.' },
      { title: 'Or set up manually', detail: 'Pick language → Wi-Fi network → enter Apple ID. Much slower than iPhone auto-setup.' },
      { title: 'Enable Siri', detail: 'Press and hold the microphone button on the remote. Say "Open Netflix" or "Watch a comedy."' },
      { title: 'Install apps from the App Store', detail: 'Most streaming apps are already installed. Search for others in the built-in App Store.' },
      { title: 'Set up AirPlay', detail: 'Automatic. You can send photos, videos, or your phone screen to the TV from any Apple device.' },
      { title: 'Consider Apple One (optional)', detail: 'Bundles Apple TV+, Apple Music, iCloud storage, and more. Starts at $19.95/month.' },
    ],
    popularApps: [
      { name: 'Apple TV+', isFree: false },
      { name: 'YouTube', isFree: true },
      { name: 'Pluto TV', isFree: true },
      { name: 'Tubi', isFree: true },
      { name: 'Netflix', isFree: false },
      { name: 'Disney+', isFree: false },
      { name: 'Hulu', isFree: false },
      { name: 'Max', isFree: false },
    ],
    support: { label: 'Apple TV Support', url: 'https://support.apple.com/apple-tv' },
  },
  {
    id: 'chromecast',
    name: 'Google Chromecast / Google TV',
    tagline: 'Built on Android. Works with Google Assistant.',
    appsIncluded: ['YouTube', 'Netflix', 'Hulu', 'Disney+', 'Google Play Movies'],
    cost: '$30–$50 one-time',
    remote: 'Voice remote with Google Assistant button',
    voiceAssistant: 'Google Assistant',
    steps: [
      { title: 'Plug Chromecast into TV', detail: 'HDMI into the back or side of the TV. Power cable into wall outlet.' },
      { title: 'Switch TV input', detail: 'Press "Input" on your TV remote, pick the HDMI you used.' },
      { title: 'Download Google Home app on your phone', detail: 'Free on iPhone/Android. Required to finish setup.' },
      { title: 'Open Google Home → tap "+" → Set up device', detail: 'App finds the Chromecast automatically via Bluetooth.' },
      { title: 'Confirm the code on TV matches the app', detail: 'Just a security check.' },
      { title: 'Sign in to your Google account', detail: 'Use an existing Gmail account or create one for free.' },
      { title: 'Choose a room and connect Wi-Fi', detail: 'Pick "Living Room" etc. Wi-Fi password transfers from your phone.' },
      { title: 'Pair the remote', detail: 'Hold both buttons for 5 seconds until it pairs.' },
      { title: 'Install streaming apps', detail: 'From the TV: Apps → search. Or tell the Assistant "Install Netflix."' },
      { title: 'Set up Google TV profiles', detail: 'Each family member gets their own recommendations and watch history.' },
    ],
    popularApps: [
      { name: 'YouTube', isFree: true },
      { name: 'Pluto TV', isFree: true },
      { name: 'Tubi', isFree: true },
      { name: 'Google TV (free movies)', isFree: true },
      { name: 'Netflix', isFree: false },
      { name: 'Disney+', isFree: false },
      { name: 'Max', isFree: false },
      { name: 'Hulu', isFree: false },
    ],
    support: { label: 'Chromecast Support', url: 'https://support.google.com/googletv' },
  },
];

export default function SmartTvSetupWizard() {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(completedSteps);
    if (next.has(i)) next.delete(i); else next.add(i);
    setCompletedSteps(next);
  };

  return (
    <>
      <SEOHead
        title="Smart TV Setup Wizard — Roku, Fire Stick, Apple TV, Chromecast"
        description="Set up your streaming device with brand-specific step-by-step instructions. Roku, Amazon Fire TV, Apple TV, and Google Chromecast."
        path="/tools/smart-tv-setup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Tv className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Entertainment</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Smart TV Setup Wizard</h1>
            <p className="text-muted-foreground max-w-2xl">
              New streaming device? Pick yours and we'll walk you through plugging it in, connecting to Wi-Fi, and adding your favorite apps.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          {!selectedDevice ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">Which streaming device do you have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DEVICES.map((d) => (
                  <Card key={d.id} onClick={() => { setSelectedDevice(d); setCompletedSteps(new Set()); }}
                    className="cursor-pointer hover:border-primary transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                          <Play className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{d.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{d.tagline}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline">{d.cost}</Badge>
                        <Badge variant="outline">{d.voiceAssistant}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedDevice(null)} className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />Pick a different device
              </Button>

              <h2 className="text-2xl font-bold mb-2">{selectedDevice.name}</h2>
              <p className="text-muted-foreground mb-6">{selectedDevice.tagline}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                <Card><CardContent className="p-4"><div className="text-xs text-muted-foreground mb-1">Cost</div><div className="text-sm font-semibold">{selectedDevice.cost}</div></CardContent></Card>
                <Card><CardContent className="p-4"><div className="text-xs text-muted-foreground mb-1">Voice assistant</div><div className="text-sm font-semibold">{selectedDevice.voiceAssistant}</div></CardContent></Card>
                <Card><CardContent className="p-4"><div className="text-xs text-muted-foreground mb-1">Remote</div><div className="text-sm">{selectedDevice.remote}</div></CardContent></Card>
              </div>

              <div className="flex items-center justify-between mb-4 p-3 rounded-md bg-muted/50 border border-border">
                <span className="text-sm font-medium">{completedSteps.size} of {selectedDevice.steps.length} steps done</span>
                <div className="flex-1 mx-4 h-2 bg-border rounded-full overflow-hidden max-w-xs">
                  <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(completedSteps.size / selectedDevice.steps.length) * 100}%` }} />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {selectedDevice.steps.map((step, i) => {
                  const done = completedSteps.has(i);
                  return (
                    <Card key={i} onClick={() => toggle(i)}
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

              <Card className="mb-6">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3">Popular apps on this device</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selectedDevice.popularApps.map((app) => (
                      <div key={app.name} className="flex items-center justify-between p-2 rounded-md border border-border bg-muted/30">
                        <span className="text-sm">{app.name}</span>
                        {app.isFree && <Badge className="bg-green-600 hover:bg-green-600 text-xs">Free</Badge>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="font-semibold mb-1">Official support</h4>
                    <p className="text-sm text-muted-foreground">For troubleshooting specific models and error codes.</p>
                  </div>
                  <Button asChild>
                    <a href={selectedDevice.support.url} target="_blank" rel="noopener noreferrer">
                      {selectedDevice.support.label} <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
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
