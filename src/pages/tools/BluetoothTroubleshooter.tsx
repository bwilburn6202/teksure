import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Bluetooth, ChevronRight, CheckCircle2, RotateCcw,
  Headphones, Speaker, Laptop, Smartphone, Monitor,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

type DeviceType = 'headphones' | 'speaker' | 'keyboard' | 'phone' | 'other';

interface Step {
  id: string;
  instruction: string;
  detail?: string;
  yesNext: string | 'solved' | 'expert';
  noNext: string | 'solved' | 'expert';
  yesLabel?: string;
  noLabel?: string;
}

const deviceSteps: Record<DeviceType, Step[]> = {
  headphones: [
    {
      id: 's1',
      instruction: 'Are the headphones turned on and fully charged?',
      detail: 'Most headphones have a power button — hold it for 2–3 seconds until you hear a tone or see an LED.',
      yesNext: 's2', noNext: 's1a',
      yesLabel: 'Yes, they\'re on', noLabel: 'Not sure / No',
    },
    {
      id: 's1a',
      instruction: 'Charge your headphones for at least 30 minutes, then turn them on.',
      detail: 'Connect them to a USB charger using the included cable. A solid LED usually means charging.',
      yesNext: 's2', noNext: 'expert',
      yesLabel: 'They\'re on now', noLabel: 'Still won\'t turn on',
    },
    {
      id: 's2',
      instruction: 'Is your device\'s Bluetooth turned on?',
      detail: 'On iPhone/iPad: Settings → Bluetooth. On Android: Settings → Connected devices → Bluetooth. On Windows: Settings → Devices → Bluetooth.',
      yesNext: 's3', noNext: 's2a',
    },
    {
      id: 's2a',
      instruction: 'Turn on Bluetooth on your device, wait 5 seconds, then try again.',
      yesNext: 's3', noNext: 'expert',
      yesLabel: 'Bluetooth is on', noLabel: 'I can\'t find Bluetooth',
    },
    {
      id: 's3',
      instruction: 'Were the headphones previously paired to this device?',
      detail: 'If yes, they should reconnect automatically when in range. If the connection isn\'t happening, we\'ll fix that next.',
      yesNext: 's4', noNext: 's5',
      yesLabel: 'Yes, paired before', noLabel: 'No, first time',
    },
    {
      id: 's4',
      instruction: 'Remove the headphones from your device\'s Bluetooth list and re-pair them.',
      detail: 'On your device: go to Bluetooth settings, tap the headphones name, then tap "Forget" or "Remove". Next, put the headphones in pairing mode (see below) and re-add them.',
      yesNext: 's5', noNext: 'expert',
      yesLabel: 'Removed and ready to re-pair', noLabel: 'Can\'t find them in the list',
    },
    {
      id: 's5',
      instruction: 'Put the headphones into pairing mode.',
      detail: 'Usually: hold the Bluetooth button for 5–7 seconds until the LED flashes blue/red or you hear "pairing". Check your headphone\'s manual if unsure.',
      yesNext: 's6', noNext: 'expert',
      yesLabel: 'They\'re in pairing mode', noLabel: 'Can\'t get them into pairing mode',
    },
    {
      id: 's6',
      instruction: 'On your device, open Bluetooth settings and select your headphones from the list.',
      detail: 'They may appear as "WH-1000XM5", "AirPods", "Beats Studio", or a similar name. Tap to connect.',
      yesNext: 'solved', noNext: 'expert',
      yesLabel: 'Connected!', noLabel: 'Not showing in list',
    },
  ],
  speaker: [
    {
      id: 'sp1',
      instruction: 'Is the Bluetooth speaker powered on?',
      detail: 'Press and hold the power button until you see a light or hear a startup sound.',
      yesNext: 'sp2', noNext: 'sp1a',
    },
    {
      id: 'sp1a',
      instruction: 'The speaker may need charging. Plug it in for 15–30 minutes then try again.',
      yesNext: 'sp2', noNext: 'expert',
      yesLabel: 'It\'s on now', noLabel: 'Still won\'t power on',
    },
    {
      id: 'sp2',
      instruction: 'Is the speaker in Bluetooth pairing mode?',
      detail: 'Look for a flashing blue LED or listen for a pairing beep. Often activated by holding the Bluetooth button for 3–5 seconds.',
      yesNext: 'sp3', noNext: 'sp2a',
      yesLabel: 'Yes, LED is flashing', noLabel: 'Not sure',
    },
    {
      id: 'sp2a',
      instruction: 'Press and hold the Bluetooth button on the speaker for 5 seconds.',
      detail: 'The LED should start flashing rapidly, indicating it\'s ready to pair.',
      yesNext: 'sp3', noNext: 'expert',
      yesLabel: 'LED is flashing now', noLabel: 'Nothing happened',
    },
    {
      id: 'sp3',
      instruction: 'On your phone or computer, open Bluetooth settings and select the speaker from the list.',
      yesNext: 'solved', noNext: 'expert',
      yesLabel: 'Connected!', noLabel: 'Not showing in list',
    },
  ],
  keyboard: [
    {
      id: 'kb1',
      instruction: 'Is the keyboard\'s Bluetooth switch turned on?',
      detail: 'Many wireless keyboards have a physical on/off switch on the bottom or side. Make sure it\'s in the ON position.',
      yesNext: 'kb2', noNext: 'kb1a',
    },
    {
      id: 'kb1a',
      instruction: 'Slide the power switch to the ON position, then press any key to wake it up.',
      yesNext: 'kb2', noNext: 'expert',
      yesLabel: 'It\'s on', noLabel: 'There is no switch',
    },
    {
      id: 'kb2',
      instruction: 'Are the batteries fresh? Low battery is the #1 cause of keyboard pairing issues.',
      detail: 'Replace with new AA or AAA batteries even if you think the current ones are fine.',
      yesNext: 'kb3', noNext: 'kb2a',
      yesLabel: 'Batteries are new', noLabel: 'Not sure',
    },
    {
      id: 'kb2a',
      instruction: 'Replace the batteries with fresh ones, then retry.',
      yesNext: 'kb3', noNext: 'expert',
      yesLabel: 'Done, retrying', noLabel: 'No batteries available',
    },
    {
      id: 'kb3',
      instruction: 'Put the keyboard into pairing mode.',
      detail: 'Look for a dedicated Bluetooth key (often Fn + a Bluetooth icon). Hold it for 3–5 seconds. Some keyboards have numbered channels (1, 2, 3) — hold the channel button you want to use.',
      yesNext: 'kb4', noNext: 'expert',
      yesLabel: 'It\'s in pairing mode', noLabel: 'Can\'t find the pairing key',
    },
    {
      id: 'kb4',
      instruction: 'Select the keyboard from your device\'s Bluetooth settings.',
      yesNext: 'solved', noNext: 'expert',
      yesLabel: 'Connected!', noLabel: 'Not showing up',
    },
  ],
  phone: [
    {
      id: 'ph1',
      instruction: 'Are you trying to pair your phone to a car, another phone, or a Bluetooth accessory?',
      yesNext: 'ph2', noNext: 'ph3',
      yesLabel: 'Car or accessory', noLabel: 'Phone-to-phone',
    },
    {
      id: 'ph2',
      instruction: 'Make sure the car or accessory is in Bluetooth pairing mode.',
      detail: 'For cars: go to the audio system menu and select "Pair new phone" or "Bluetooth". For accessories, hold the Bluetooth button for 5 seconds.',
      yesNext: 'ph5', noNext: 'expert',
      yesLabel: 'It\'s in pairing mode', noLabel: 'I\'m not sure how',
    },
    {
      id: 'ph3',
      instruction: 'Both phones need Bluetooth on and one must be discoverable.',
      detail: 'On Android: Settings → Bluetooth → make visible. On iPhone, open the Bluetooth settings screen — it automatically becomes discoverable.',
      yesNext: 'ph5', noNext: 'expert',
      yesLabel: 'Both phones ready', noLabel: 'Having trouble',
    },
    {
      id: 'ph5',
      instruction: 'Go to your phone\'s Bluetooth settings and tap the device you want to connect to.',
      detail: 'If it asks for a PIN, try "0000" or "1234", or check the device\'s manual.',
      yesNext: 'solved', noNext: 'expert',
      yesLabel: 'Connected!', noLabel: 'Not showing or PIN failed',
    },
  ],
  other: [
    {
      id: 'ot1',
      instruction: 'Is Bluetooth turned on on both your device and the accessory?',
      yesNext: 'ot2', noNext: 'ot1a',
    },
    {
      id: 'ot1a',
      instruction: 'Turn on Bluetooth on your device (Settings → Bluetooth) and power on the accessory.',
      yesNext: 'ot2', noNext: 'expert',
      yesLabel: 'Both are on now', noLabel: 'Still having trouble',
    },
    {
      id: 'ot2',
      instruction: 'Put the accessory into pairing mode.',
      detail: 'Usually done by holding the Bluetooth or power button for 5 seconds until an LED flashes or you hear a tone.',
      yesNext: 'ot3', noNext: 'expert',
      yesLabel: 'It\'s in pairing mode', noLabel: 'Can\'t find how',
    },
    {
      id: 'ot3',
      instruction: 'On your device, go to Bluetooth settings and select the accessory from the list.',
      yesNext: 'solved', noNext: 'expert',
      yesLabel: 'Connected!', noLabel: 'Not showing in the list',
    },
  ],
};

const deviceOptions: { type: DeviceType; label: string; icon: typeof Headphones; color: string }[] = [
  { type: 'headphones', label: 'Headphones / Earbuds', icon: Headphones, color: 'text-violet-500' },
  { type: 'speaker', label: 'Bluetooth Speaker', icon: Speaker, color: 'text-teal-500' },
  { type: 'keyboard', label: 'Wireless Keyboard / Mouse', icon: Laptop, color: 'text-blue-500' },
  { type: 'phone', label: 'Phone / Car', icon: Smartphone, color: 'text-orange-500' },
  { type: 'other', label: 'Other Device', icon: Monitor, color: 'text-primary' },
];

export default function BluetoothTroubleshooter() {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [currentStepId, setCurrentStepId] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [outcome, setOutcome] = useState<'solved' | 'expert' | null>(null);

  const steps = deviceType ? deviceSteps[deviceType] : [];
  const currentStep = steps.find(s => s.id === currentStepId);

  const handleDeviceSelect = (type: DeviceType) => {
    setDeviceType(type);
    const firstStep = deviceSteps[type][0];
    setCurrentStepId(firstStep.id);
    setHistory([]);
    setOutcome(null);
  };

  const handleAnswer = (next: string) => {
    if (next === 'solved' || next === 'expert') {
      setOutcome(next);
      return;
    }
    setHistory(prev => [...prev, currentStepId]);
    setCurrentStepId(next);
  };

  const handleBack = () => {
    if (history.length === 0) {
      setDeviceType(null);
      setCurrentStepId('');
      setOutcome(null);
      return;
    }
    const prev = [...history];
    const last = prev.pop()!;
    setHistory(prev);
    setCurrentStepId(last);
    setOutcome(null);
  };

  const handleReset = () => {
    setDeviceType(null);
    setCurrentStepId('');
    setHistory([]);
    setOutcome(null);
  };

  const stepIndex = history.length + 1;
  const totalSteps = steps.length;

  return (
    <>
      <SEOHead
        title="Bluetooth Troubleshooter – TekSure Tools"
        description="Fix Bluetooth connection problems step by step. Works for headphones, speakers, keyboards, phones, and car audio."
        path="/tools/bluetooth-troubleshooter"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-2xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">Bluetooth Troubleshooter</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Bluetooth className="h-7 w-7" />
                <h1 className="text-3xl md:text-4xl font-bold">Bluetooth Troubleshooter</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                Answer a few quick questions and we'll walk you to a fix — step by step.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-2xl">
            <>
              {/* Device selection */}
              {!deviceType && (
                <div key="device-select">
                  <p className="text-center text-muted-foreground mb-6 text-lg">What are you trying to connect?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {deviceOptions.map(opt => {
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.type}
                          onClick={() => handleDeviceSelect(opt.type)}
                          className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all text-left group"
                        >
                          <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                            <Icon className={`h-6 w-6 ${opt.color}`} />
                          </div>
                          <span className="font-medium">{opt.label}</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Outcome: solved */}
              {outcome === 'solved' && (
                <div key="solved">
                  <Card className="border-[hsl(var(--teksure-success)/0.4)] bg-[hsl(var(--teksure-success)/0.06)]">
                    <CardContent className="p-8 text-center">
                      <CheckCircle2 className="h-14 w-14 text-[hsl(var(--teksure-success))] mx-auto mb-4" />
                      <h2 className="text-2xl font-bold mb-2">You're connected!</h2>
                      <p className="text-muted-foreground mb-6">
                        Great work! Your Bluetooth device should now be paired and working. Enjoy!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button variant="outline" onClick={handleReset}>
                          <RotateCcw className="h-4 w-4 mr-2" /> Fix another device
                        </Button>
                        <Button asChild>
                          <Link to="/tools">Back to Tools</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Outcome: expert */}
              {outcome === 'expert' && (
                <div key="expert">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Bluetooth className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h2 className="text-2xl font-bold mb-2">This one needs a closer look</h2>
                      <p className="text-muted-foreground mb-2">
                        The issue may be a hardware fault, a firmware update needed, or an incompatibility between devices.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        Our technicians can take a look and get it sorted for you quickly.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button variant="outline" onClick={handleReset}>
                          <RotateCcw className="h-4 w-4 mr-2" /> Start over
                        </Button>
                        <Button asChild>
                          <Link to="/book">Book a Technician</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Steps */}
              {deviceType && currentStep && !outcome && (
                <div key={currentStepId}>
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>Step {stepIndex} of ~{totalSteps}</span>
                    <Badge variant="outline" className="capitalize">
                      {deviceOptions.find(d => d.type === deviceType)?.label}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 mb-6">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all"
                      style={{ width: `${Math.min(100, (stepIndex / totalSteps) * 100)}%` }}
                    />
                  </div>

                  <Card className="mb-4">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-3">{currentStep.instruction}</h2>
                      {currentStep.detail && (
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 p-3 bg-muted rounded-lg">
                          {currentStep.detail}
                        </p>
                      )}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <Button
                          className="flex-1"
                          onClick={() => handleAnswer(currentStep.yesNext)}
                        >
                          {currentStep.yesLabel ?? 'Yes'}
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleAnswer(currentStep.noNext)}
                        >
                          {currentStep.noLabel ?? 'No'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground">
                    ← {history.length === 0 ? 'Change device type' : 'Go back'}
                  </Button>
                </div>
              )}
            </>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
