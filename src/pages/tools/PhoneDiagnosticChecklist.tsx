import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Stethoscope,
  Camera,
  Mic,
  Volume2,
  BatteryCharging,
  Wifi,
  Smartphone,
  Compass,
  Vibrate,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ChevronRight,
  Wrench,
  ShoppingBag,
} from 'lucide-react';

type Status = 'unknown' | 'pass' | 'fail';

interface Test {
  id: string;
  label: string;
  icon: typeof Camera;
  instruction: string;
  passText: string;
  failText: string;
  failureMeans: 'hardware' | 'software' | 'either';
  diagnosis: string;
}

const TESTS: Test[] = [
  {
    id: 'screen',
    label: 'Screen and touch',
    icon: Smartphone,
    instruction:
      'Open any app. Slowly drag your finger across the entire screen — top to bottom and left to right. Watch for: any spot the screen does not respond to your touch, dead pixels (small black dots that never light up), color streaks, or cracked areas where touch fails.',
    passText: 'The whole screen responds to touch and shows clean colors.',
    failText: 'Some area is unresponsive, has dead pixels, or shows damage.',
    failureMeans: 'hardware',
    diagnosis:
      'Screen issues are nearly always hardware. A screen replacement is one of the more common phone repairs and is usually worth doing on a phone less than 4 years old. Apple charges $279 out-of-warranty (or $29 with AppleCare+); third-party shops are $130–$200.',
  },
  {
    id: 'speaker',
    label: 'Speaker',
    icon: Volume2,
    instruction:
      'Open YouTube or a music app. Play any video or song. Set the phone face-up on a table without covering the bottom edge. Slowly increase the volume to maximum. Listen for: any rattling, distortion, dropouts, or one-sided sound. The sound should be clear and equal in volume from all sides of the speaker grille.',
    passText: 'Sound plays clearly at full volume with no distortion.',
    failText: 'Sound is distorted, rattles, very quiet, or absent.',
    failureMeans: 'either',
    diagnosis:
      'A blown speaker can sound very similar to a software glitch. First try: restart the phone. If still bad, check for a software update. If still bad, the speaker likely needs replacement ($80–$130 at most third-party shops).',
  },
  {
    id: 'mic',
    label: 'Microphone',
    icon: Mic,
    instruction:
      'Open the Voice Memos app (iPhone) or Voice Recorder (Android). Record yourself saying "The weather today is sunny and seventy-two degrees" at normal speaking volume. Play the recording back. Listen for: muffled sound, missing words, or complete silence.',
    passText: 'Your voice is clear and at a normal level on playback.',
    failText: 'Voice is muffled, very quiet, distorted, or recording is silent.',
    failureMeans: 'either',
    diagnosis:
      'Microphone problems are commonly caused by lint blocking the mic opening (bottom of phone, near the charge port). Use a wooden toothpick to gently clean. If still bad after cleaning, restart the phone. If still bad, check Settings → Privacy → Microphone to confirm apps have permission. If hardware is at fault, mic repair is $80–$120 at most shops.',
  },
  {
    id: 'rear-camera',
    label: 'Rear camera',
    icon: Camera,
    instruction:
      'Open the Camera app (rear camera, the regular setting). Take a photo of a brightly lit, detailed scene — a window, a houseplant, or text on paper. Look at the photo: is it sharp and clear, or blurry, foggy, or showing spots and streaks?',
    passText: 'Photos are sharp and clear.',
    failText: 'Photos are blurry, hazy, foggy, or show spots.',
    failureMeans: 'hardware',
    diagnosis:
      'Camera issues are usually hardware: lens damage, dust inside the lens, or a failing camera module. Often a cracked back glass affects the camera lenses. Repair is $80–$200 depending on phone and which camera. If only the front (selfie) camera works, the rear camera module needs replacement.',
  },
  {
    id: 'front-camera',
    label: 'Front camera',
    icon: Camera,
    instruction:
      'Switch to the front-facing (selfie) camera. Take a photo of yourself in well-lit conditions. The photo should be sharp and properly exposed.',
    passText: 'Selfie photos are sharp and clear.',
    failText: 'Selfie is blurry, dim, or the camera does not switch over.',
    failureMeans: 'hardware',
    diagnosis:
      'Front camera issues are typically hardware. Check that the camera lens above the screen is not covered by a screen protector or tape. If the lens is clean and photos are still bad, repair is $90–$150.',
  },
  {
    id: 'face-id',
    label: 'Face ID / Face unlock',
    icon: Smartphone,
    instruction:
      'Lock the phone (press the side button). Pick up the phone and look at it as you normally would. The phone should unlock within 1–2 seconds without you doing anything else. If your phone uses fingerprint instead of face, test the fingerprint sensor on the front, back, or side instead.',
    passText: 'Face/fingerprint unlock works reliably.',
    failText: 'Face/fingerprint unlock fails, asks for passcode often.',
    failureMeans: 'either',
    diagnosis:
      'First try: Settings → Face ID & Passcode → Reset Face ID and re-enroll. Make sure no screen protector is over the front camera. If still failing, the Face ID module on iPhone is part of the front-camera assembly — often expensive to repair. Check fingerprint sensor for dirt; clean with a soft dry cloth.',
  },
  {
    id: 'charging',
    label: 'Charging',
    icon: BatteryCharging,
    instruction:
      'Plug your phone into a charger using your normal cable. The phone should immediately show a charging icon. The cable should fit snugly in the charging port — not loose, not requiring you to hold it at a strange angle.',
    passText: 'Phone charges normally with cable plugged in.',
    failText: 'Phone does not charge, or only charges in certain positions.',
    failureMeans: 'either',
    diagnosis:
      'Most charging problems are caused by lint in the charging port, not hardware failure. Use a wooden toothpick to gently clean out the port. If still bad, try a different cable and a different power adapter. If the phone only charges when the cable is held at a specific angle, the port itself is damaged — repair is $80–$150.',
  },
  {
    id: 'wifi',
    label: 'WiFi',
    icon: Wifi,
    instruction:
      'Open Settings → WiFi. The list of nearby networks should appear within a few seconds and include networks you can see other devices using. Connect to your home WiFi. Open a web browser and load any website.',
    passText: 'Connects to WiFi and loads websites normally.',
    failText: 'Cannot find networks, fails to connect, or pages do not load.',
    failureMeans: 'either',
    diagnosis:
      'WiFi problems are usually software. Try: turn WiFi off and on. Then "Forget" the network and reconnect. Then restart the phone. Then restart the router. If WiFi works on other devices but not your phone, and the steps above did not help, the WiFi antenna inside the phone may be failing — this typically requires a logic board repair ($150–$300) or replacement.',
  },
  {
    id: 'gps',
    label: 'GPS / Location',
    icon: Compass,
    instruction:
      'Open Maps (Apple Maps or Google Maps). Tap the location button (a small target icon, usually bottom-right). The map should center on your actual location within 10–30 seconds. The blue dot should be on or very near your house, not several blocks away.',
    passText: 'Maps shows your correct location quickly.',
    failText: 'Location is wrong, takes minutes to find, or never finds you.',
    failureMeans: 'software',
    diagnosis:
      'Most GPS issues are software. Settings → Privacy → Location Services → on, and verify Maps has permission. If still failing: turn airplane mode on for 30 seconds, then off. Restart the phone. Indoor GPS is naturally less accurate — test outside.',
  },
  {
    id: 'vibration',
    label: 'Vibration',
    icon: Vibrate,
    instruction:
      'Settings → Sounds & Haptics (iPhone) or Sounds and vibration (Android). Find the vibration test or set the phone to silent mode and call yourself from a landline or another phone. The phone should vibrate noticeably.',
    passText: 'Phone vibrates clearly when expected.',
    failText: 'Phone does not vibrate, or vibration is very weak.',
    failureMeans: 'either',
    diagnosis:
      'Sometimes a software setting (silent mode, Do Not Disturb, accessibility setting) blocks vibration. Check Settings first. If hardware, the vibration motor is a $40–$80 repair on most phones — minor but commonly affected by drops.',
  },
  {
    id: 'buttons',
    label: 'Physical buttons',
    icon: Smartphone,
    instruction:
      'Press the volume up button. The volume indicator should appear and rise on screen. Press volume down — it should fall. Press the side (power) button — the screen should turn off and on. Test any other physical buttons (mute switch, action button).',
    passText: 'All buttons respond on the first press.',
    failText: 'A button needs multiple presses, sticks, or does not respond.',
    failureMeans: 'hardware',
    diagnosis:
      'Sticky or unresponsive physical buttons are nearly always hardware — usually caused by liquid exposure or accumulated debris. Repair is $50–$120 depending on the button. The mute switch (iPhone) is the most expensive.',
  },
];

interface Summary {
  passed: number;
  failed: number;
  total: number;
  hardwareFails: Test[];
  softwareFails: Test[];
  eitherFails: Test[];
}

export default function PhoneDiagnosticChecklist() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(TESTS.map((t) => [t.id, 'unknown'])),
  );
  const [showSummary, setShowSummary] = useState(false);

  const setStatus = (id: string, value: Status) => {
    setStatuses((prev) => ({ ...prev, [id]: value }));
  };

  const summary: Summary = useMemo(() => {
    const passed = TESTS.filter((t) => statuses[t.id] === 'pass').length;
    const failed = TESTS.filter((t) => statuses[t.id] === 'fail').length;
    const failedTests = TESTS.filter((t) => statuses[t.id] === 'fail');
    return {
      passed,
      failed,
      total: TESTS.length,
      hardwareFails: failedTests.filter((t) => t.failureMeans === 'hardware'),
      softwareFails: failedTests.filter((t) => t.failureMeans === 'software'),
      eitherFails: failedTests.filter((t) => t.failureMeans === 'either'),
    };
  }, [statuses]);

  const completed = TESTS.every((t) => statuses[t.id] !== 'unknown');

  const reset = () => {
    setStatuses(Object.fromEntries(TESTS.map((t) => [t.id, 'unknown'])));
    setShowSummary(false);
  };

  return (
    <>
      <SEOHead
        title="Phone Diagnostic Checklist — Hardware vs Software | TekSure"
        description="Run through 11 quick tests to find out if your phone problem is hardware (needs repair) or software (free fix). Plain English instructions."
        path="/tools/phone-diagnostic-checklist"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-violet-50 dark:from-cyan-950/20 dark:to-violet-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Stethoscope className="h-8 w-8 text-cyan-600" aria-hidden="true" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-3">Free Tool · 10 minutes</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Phone Diagnostic Checklist</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Run through 11 quick tests to find out if your phone problem is hardware (needs
              repair) or software (free fix). Each test takes under a minute.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 space-y-6">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Phone Diagnostic Checklist' },
            ]}
          />

          {!showSummary && (
            <>
              {/* Progress */}
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">
                      Progress: {summary.passed + summary.failed} of {summary.total} tests
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {summary.passed} pass · {summary.failed} fail
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{
                        width: `${
                          ((summary.passed + summary.failed) / summary.total) * 100
                        }%`,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tests */}
              {TESTS.map((test, idx) => {
                const Icon = test.icon;
                const status = statuses[test.id];
                return (
                  <Card key={test.id}>
                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="font-semibold">
                              Test {idx + 1}: {test.label}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {test.instruction}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-12">
                        <Button
                          type="button"
                          variant={status === 'pass' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setStatus(test.id, 'pass')}
                          className="gap-1.5"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          Worked fine
                        </Button>
                        <Button
                          type="button"
                          variant={status === 'fail' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setStatus(test.id, 'fail')}
                          className="gap-1.5"
                        >
                          <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          Did not work
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <div className="flex flex-wrap gap-3 sticky bottom-4 z-10">
                <Button
                  size="lg"
                  onClick={() => setShowSummary(true)}
                  disabled={!completed}
                  className="gap-2 shadow-lg"
                >
                  See my diagnosis ({summary.passed + summary.failed}/{summary.total})
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                {(summary.passed + summary.failed) > 0 && (
                  <Button variant="outline" onClick={reset} size="lg">
                    Start over
                  </Button>
                )}
              </div>
              {!completed && (
                <p className="text-xs text-muted-foreground text-center">
                  Mark every test as "Worked" or "Did not work" to see your diagnosis.
                </p>
              )}
            </>
          )}

          {showSummary && (
            <>
              {/* Top-level summary */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Diagnosis: {summary.failed} of {summary.total} tests failed
                  </h2>
                  {summary.failed === 0 ? (
                    <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 p-4 border border-emerald-200 dark:border-emerald-900/40">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="font-semibold mb-1">Your phone is healthy.</p>
                          <p className="text-sm text-muted-foreground">
                            All 11 tests passed. If you came here because of a specific issue, the
                            cause may be a single app or a recent setting change. Try restarting
                            the phone and checking for software updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Below is what each failed test means and what to do about it. Read through
                      each before deciding on repair.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Failed tests */}
              {summary.failed > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      What each failure means
                    </h3>
                    <div className="space-y-4">
                      {[...summary.hardwareFails, ...summary.softwareFails, ...summary.eitherFails].map((t) => {
                        const Icon = t.icon;
                        const tag =
                          t.failureMeans === 'hardware'
                            ? { label: 'Likely hardware', color: 'text-red-700 bg-red-50 dark:bg-red-950/30 dark:text-red-300' }
                            : t.failureMeans === 'software'
                            ? { label: 'Likely software (free fix)', color: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-300' }
                            : { label: 'Could be either — try free fixes first', color: 'text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-300' };
                        return (
                          <div key={t.id} className="rounded-xl border bg-card p-4">
                            <div className="flex items-start gap-3 mb-2">
                              <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h4 className="font-semibold">{t.label}</h4>
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${tag.color}`}>
                                    {tag.label}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {t.diagnosis}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Replace vs repair guidance */}
              {summary.failed > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      Repair, or replace?
                    </h3>
                    {summary.failed >= 4 ? (
                      <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 p-4 border border-amber-200 dark:border-amber-900/40">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <p className="text-sm">
                            With <strong>{summary.failed} failures</strong>, repair costs add up
                            quickly. Consider replacement — especially if your phone is older than
                            4 years. A refurbished phone (Apple Certified Refurbished, Back Market,
                            Swappa) often costs less than the combined repair bill.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        With {summary.failed} failure{summary.failed === 1 ? '' : 's'}, targeted
                        repair is likely worthwhile. Try the free fixes for "could be either" items
                        first; they cost nothing. Then get a quote for any remaining hardware
                        repairs and compare to the cost of a refurbished phone of similar age.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Next steps</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild>
                      <Link to="/guides/phone-repair-vs-replace-decision-2026">
                        Read: Repair vs Replace decision guide
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/tools/battery-health-coach">Battery Health Coach</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/tools/device-age-checker">Device Age Checker</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/tekbrain">Ask TekBrain</Link>
                    </Button>
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" onClick={reset} className="gap-2">
                      <RotateCcw className="h-4 w-4" aria-hidden="true" /> Run the diagnostic again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <p className="text-xs text-muted-foreground text-center max-w-prose mx-auto">
            All diagnostic guidance is based on public technical documentation from Apple, Samsung,
            and Google, plus repair pricing from Apple Support, uBreakiFix, and Best Buy Geek
            Squad as of 2026.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
