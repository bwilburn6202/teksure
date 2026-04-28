import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartPulse, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Cuff {
  name: string;
  price: string;
  accuracy: string;
  whoFor: string;
  appIntegration: string;
  pros: string[];
  cons: string[];
  link: string;
}

const CUFFS: Cuff[] = [
  {
    name: 'Omron Platinum (BP5450)',
    price: '$95',
    accuracy: 'Clinically validated by AMA',
    whoFor: 'Best overall pick — averages 3 readings automatically for the most accurate result.',
    appIntegration: 'Omron Connect app on iPhone and Android. Syncs with Apple Health and Google Fit.',
    pros: [
      'Takes 3 readings two minutes apart, then averages them — what doctors recommend.',
      'Big backlit screen — readable without glasses.',
      'Stores 200 readings for 2 users on the cuff itself.',
      'Detects irregular heartbeat and alerts you.',
    ],
    cons: [
      'Pricier than basic models.',
      'Cuff fits 9 to 17 inch arms — measure your upper arm first.',
    ],
    link: 'https://omronhealthcare.com/products/platinum-blood-pressure-monitor-bp5450/',
  },
  {
    name: 'OMRON Evolv (BP7000)',
    price: '$80',
    accuracy: 'Clinically validated',
    whoFor: 'Best for travel — one piece, no tubes, fits in a small bag.',
    appIntegration: 'Omron Connect app — Bluetooth only, no display data export without phone.',
    pros: [
      'All-in-one wireless design — cuff and monitor are one unit.',
      'No tubes or wires to tangle.',
      'Compact and travel-friendly.',
      'Syncs readings to your phone automatically.',
    ],
    cons: [
      'No screen on the cuff itself — you must use the phone app to see results.',
      'Requires a smartphone, which rules it out for some seniors.',
    ],
    link: 'https://omronhealthcare.com/products/evolv-wireless-upper-arm-blood-pressure-monitor-bp7000/',
  },
  {
    name: 'A&D Medical UA-651BLE',
    price: '$60',
    accuracy: 'Clinically validated',
    whoFor: 'Best budget pick — accurate, no-frills, with a clear screen.',
    appIntegration: 'A&D Connect app, plus works with Apple Health and many doctor portals.',
    pros: [
      'Lowest price for a clinically validated cuff.',
      'Large, clear display you can read without glasses.',
      'One-button operation — turn on, press start, that is it.',
      'Bluetooth syncing if you want it, optional if you do not.',
    ],
    cons: [
      'Plain look — feels less premium than Omron.',
      'No automatic 3-reading average like the Platinum.',
    ],
    link: 'https://medical.andonline.com/product/ua-651ble/',
  },
  {
    name: 'Withings BPM Connect',
    price: '$100',
    accuracy: 'Clinically validated',
    whoFor: 'Best for iPhone users who want a polished app and quick doctor sharing.',
    appIntegration: 'Withings Health Mate app — exports clean PDF reports to email or print for your doctor.',
    pros: [
      'Beautiful, minimalist design.',
      'Wi-Fi built in — readings sync without the phone nearby.',
      'Color-coded results (green / yellow / red) so you know at a glance.',
      'Generates a PDF report you can email to your doctor.',
    ],
    cons: [
      'Smaller display than the Omron Platinum.',
      'Charging port instead of replaceable batteries — must remember to charge it.',
    ],
    link: 'https://www.withings.com/us/en/bpm-connect',
  },
  {
    name: 'QardioArm',
    price: '$100',
    accuracy: 'FDA-cleared, clinically validated',
    whoFor: 'Best for tech-comfortable users who want the slickest app experience.',
    appIntegration: 'Qardio app on iPhone, Android, and Apple Watch. Sends results directly to your doctor through Qardio MD.',
    pros: [
      'Compact, folds in half for travel.',
      'Detects irregular heartbeat.',
      'App talks you through proper technique.',
      'Doctor-share feature that real practices accept.',
    ],
    cons: [
      'Phone is required — no screen on the cuff.',
      'Bluetooth pairing can be finicky if your phone is not nearby.',
    ],
    link: 'https://www.getqardio.com/qardioarm-blood-pressure-monitor-iphone-android/',
  },
];

interface AppPick {
  name: string;
  price: string;
  whoFor: string;
  link: string;
}

const APPS: AppPick[] = [
  {
    name: 'Apple Health (iPhone)',
    price: 'Free, built in',
    whoFor: 'Already on every iPhone — open the Health app, search "Blood Pressure," tap Add Data. Your readings live alongside other vitals.',
    link: 'https://support.apple.com/guide/iphone/track-your-health-and-wellness-iph0810d96ed/ios',
  },
  {
    name: 'Google Fit (Android)',
    price: 'Free',
    whoFor: 'Built in on most Android phones — tap the Browse tab, scroll to Vitals, and log a reading by hand or sync from a connected cuff.',
    link: 'https://www.google.com/fit/',
  },
  {
    name: 'MyTherapy',
    price: 'Free, no ads',
    whoFor: 'Track readings AND medications in one place. Generates a printable report for doctor visits.',
    link: 'https://www.mytherapyapp.com/',
  },
  {
    name: 'Doctor portal (MyChart, FollowMyHealth, etc.)',
    price: 'Free with your provider',
    whoFor: 'Many doctors accept blood pressure logs straight through their portal. Ask the front desk how to send readings before your next visit.',
    link: 'https://www.mychart.com/',
  },
];

export default function BloodPressureApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Blood Pressure Apps and Cuffs"
        description="Pick a home blood pressure cuff and a way to track readings. Honest comparisons of Omron, Withings, A&D, and Qardio, plus free apps."
        path="/tools/blood-pressure-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-red-50 dark:from-rose-950/20 dark:to-red-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <HeartPulse className="h-8 w-8 text-rose-600 dark:text-rose-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Blood Pressure Apps and Cuffs</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Five home blood pressure cuffs compared, plus four free ways to keep a record your doctor will actually use.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Blood Pressure Apps' }]} />

          <Card className="border-rose-300 bg-rose-50 dark:bg-rose-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">This page is not medical advice</p>
                <p className="text-muted-foreground">
                  We compare devices and apps. We do not diagnose, treat, or set targets. Your doctor knows your history, your medications, and the right numbers for your body. Talk to them about what your target should be and what to do if your readings are high.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong className="text-rose-700 dark:text-rose-200">Call 911 or your doctor right away</strong> if a reading is sustained over 180/120, or if a high reading comes with chest pain, shortness of breath, weakness on one side, or trouble speaking. That is a hypertensive crisis, not a wait-and-see.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Why a home cuff matters</p>
              <p className="text-xs text-muted-foreground mb-3">
                Doctors call it "white coat syndrome" — your blood pressure goes up the second a nurse puts the cuff on. A home reading taken in your own kitchen is often more honest than what you get at a clinic. The American Heart Association now recommends home monitoring for anyone being treated for high blood pressure, and most insurance plans, including Medicare, cover the cost of a cuff for patients with a doctor's order.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-xl font-bold mb-4">Home blood pressure cuffs compared</h2>

          <div className="space-y-4 mb-6">
            {(showAll ? CUFFS : CUFFS.slice(0, 3)).map(c => (
              <Card key={c.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{c.name}</p>
                    <Badge variant="outline">{c.price}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2"><strong>Accuracy:</strong> {c.accuracy}</p>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {c.whoFor}</p>
                  <p className="text-xs text-muted-foreground mb-3"><strong>App support:</strong> {c.appIntegration}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {c.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {c.cons.map((con, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{con}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={c.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 5 cuffs</Button>
            )}
          </div>

          <h2 className="text-xl font-bold mb-4">Free apps to track your readings</h2>

          <div className="grid gap-3 mb-6">
            {APPS.map(a => (
              <Card key={a.name} className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-sm">{a.name}</p>
                    <Badge variant="outline" className="text-xs">{a.price}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{a.whoFor}</p>
                  <a href={a.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Learn more <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">When to check — and how</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong>Twice a day:</strong> once in the morning before coffee or medication, once in the evening before dinner. Same times each day.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong>Wait 5 minutes</strong> sitting quietly before you start. No talking, no TV, feet flat on the floor.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong>Empty bladder first.</strong> A full bladder can raise the reading by up to 10 points.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong>Bare arm, supported.</strong> Roll up the sleeve. Rest your arm on a table at heart height.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">•</span><span><strong>Take 2 readings a minute apart</strong> and write down the average. The Omron Platinum does this for you automatically.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">What the numbers mean</p>
              <p className="text-xs text-muted-foreground mb-3">
                A reading has two numbers, like 128/80. The top number (systolic) is the pressure when your heart beats. The bottom number (diastolic) is the pressure when your heart rests between beats. Both matter.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex gap-3 items-start">
                  <span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200 font-semibold w-24 text-center shrink-0">Normal</span>
                  <span className="text-muted-foreground">Less than 120 / less than 80</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="inline-block px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200 font-semibold w-24 text-center shrink-0">Elevated</span>
                  <span className="text-muted-foreground">120-129 / less than 80</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="inline-block px-2 py-0.5 rounded bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200 font-semibold w-24 text-center shrink-0">Stage 1</span>
                  <span className="text-muted-foreground">130-139 / 80-89</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="inline-block px-2 py-0.5 rounded bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200 font-semibold w-24 text-center shrink-0">Stage 2</span>
                  <span className="text-muted-foreground">140 or higher / 90 or higher</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="inline-block px-2 py-0.5 rounded bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-100 font-bold w-24 text-center shrink-0">Crisis</span>
                  <span className="text-muted-foreground"><strong>Over 180 / over 120 — call 911 or your doctor now.</strong></span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                These are the American Heart Association ranges. Your doctor may have a different target for you, especially if you have diabetes, kidney disease, or are over 75. Always go by what they tell you.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">When to call your doctor</p>
                <ol className="space-y-1.5 mt-2">
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">1.</span><span><strong>Right now:</strong> a reading of 180/120 or higher, especially with chest pain, shortness of breath, vision changes, weakness, or trouble speaking. Call 911.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">2.</span><span><strong>Same day:</strong> a reading over 180/120 with no other symptoms. Wait 5 minutes, take it again. If still that high, call your doctor.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">3.</span><span><strong>This week:</strong> readings consistently over 140/90 for several days in a row, or a sudden change from your normal range.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">4.</span><span><strong>At your next visit:</strong> bring two weeks of readings. Most doctors will adjust medication based on home numbers.</span></li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Cuff size matters more than the brand</p>
              <p className="text-xs text-muted-foreground">
                Wrap a soft tape measure around the middle of your upper arm, halfway between your elbow and shoulder. Standard adult cuffs fit 9 to 13 inch arms. Large cuffs fit 13 to 17 inch arms. A cuff that is too small will read too high — sometimes by 10 to 40 points. If you are between sizes, go larger. Wrist cuffs are less accurate than upper-arm cuffs and most doctors do not recommend them.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/medication-reminder-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medication Reminder Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair your readings with on-time pills.</p>
              </Link>
              <Link to="/tools/senior-fitness-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior Fitness Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">Walking and gentle exercise lower BP.</p>
              </Link>
              <Link to="/tools/telehealth-prep" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Telehealth Prep</p>
                <p className="text-xs text-muted-foreground mt-0.5">Bring your numbers to a video visit.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: keep your cuff in the same drawer near where you sit each morning. Out of sight means skipped readings — the best cuff is the one you actually use.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
