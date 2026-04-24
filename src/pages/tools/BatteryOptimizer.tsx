import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BatteryCharging, ChevronDown, ChevronUp, ArrowRight, Wrench, ExternalLink } from 'lucide-react';

type Device = 'iphone' | 'android' | 'ipad' | 'mac' | 'windows' | 'watch';

type Step = {
  title: string;
  detail: string;
};

const STEPS: Record<Device, Step[]> = {
  iphone: [
    { title: 'Enable Optimized Battery Charging', detail: 'Settings → Battery → Battery Health & Charging → Optimized Battery Charging. iOS learns your charging routine and pauses at 80% overnight to slow battery aging.' },
    { title: 'Check Battery Health', detail: 'Settings → Battery → Battery Health & Charging → Maximum Capacity. Below 80% means the battery is wearing out. Apple replacement is around $89–$99 depending on model.' },
    { title: 'Turn off Background App Refresh selectively', detail: 'Settings → General → Background App Refresh. Set it to Wi-Fi only, or off for apps you rarely open. Apps like Facebook and news apps drain battery in the background.' },
    { title: 'Use Low Power Mode below 50%', detail: 'Settings → Battery → Low Power Mode. Cuts background activity, dims the screen slightly, and reduces visual effects. Add it to Control Center for one-tap access.' },
    { title: 'Disable Location Services for apps that don\'t need it', detail: 'Settings → Privacy & Security → Location Services. Set most apps to "While Using" instead of "Always". Maps, Find My, and weather can stay — most others don\'t need it.' },
    { title: 'Lower screen brightness or use Auto-Brightness', detail: 'Settings → Accessibility → Display & Text Size → Auto-Brightness ON. Screen is the biggest battery user — even 20% lower brightness adds noticeable hours.' },
    { title: 'Switch Mail from Push to Fetch', detail: 'Settings → Mail → Accounts → Fetch New Data. Turn Push off and set fetch to Manually or Hourly. Constant push checking is a steady battery drain.' },
    { title: 'Cut down notifications', detail: 'Settings → Notifications. Turn off any app that doesn\'t need to wake your screen. Each notification briefly powers up the screen and CPU.' },
    { title: 'Remove widgets you don\'t use', detail: 'Long-press the home screen, tap a widget → Remove. Widgets refresh in the background and use battery even when you don\'t look at them.' },
    { title: 'Use Auto or LTE if 5G reception is poor', detail: 'Settings → Cellular → Cellular Data Options → Voice & Data → 5G Auto. In weak-signal areas, your phone burns battery hunting for 5G — let iOS pick the best mode.' },
  ],
  android: [
    { title: 'Turn on Adaptive Battery', detail: 'Settings → Battery → Adaptive Battery. Android learns which apps you use and limits power for the rest. On Samsung: Settings → Device care → Battery → More battery settings.' },
    { title: 'Check Battery health (Android 14+)', detail: 'Settings → Battery → Battery health (or About phone → Battery on Samsung). Below 80% capacity means it\'s aging. Replacement at carrier or repair shop typically $50–$100.' },
    { title: 'Use Battery Saver below 50%', detail: 'Settings → Battery → Battery Saver. Reduces background activity and animations. Set it to turn on automatically at a chosen percentage.' },
    { title: 'Limit background apps', detail: 'Settings → Apps → pick app → Battery → Restricted. Stops it from running when you\'re not using it. Best for social, news, and shopping apps you don\'t need notifications from.' },
    { title: 'Lower screen brightness and refresh rate', detail: 'Settings → Display. Use Adaptive Brightness, and on phones with 90/120 Hz screens, set "Standard refresh rate" or 60 Hz to extend battery several hours per day.' },
    { title: 'Turn off Always-On Display', detail: 'Settings → Display → Always On Display. Looks nice but burns 5–15% per day. Turn off or schedule to "Show on tap only".' },
    { title: 'Disable Hey Google / Bixby always-listening', detail: 'Google app → Settings → Voice → Hey Google → Off. Or Bixby → Settings → Voice wake-up → Off. Always-listening uses microphone power constantly.' },
    { title: 'Remove unused widgets', detail: 'Long-press a widget on the home screen → Remove. Live wallpapers and weather widgets are surprisingly thirsty.' },
    { title: 'Turn off 5G if signal is poor', detail: 'Settings → Network & Internet → SIMs → Preferred network type → LTE/4G. Weak 5G signal is one of the biggest battery drains on modern Androids.' },
  ],
  ipad: [
    { title: 'Enable Optimized Battery Charging', detail: 'Settings → Battery → Battery Health & Charging → Optimized Battery Charging.' },
    { title: 'Check Battery Health', detail: 'Settings → Battery → Battery Health & Charging.' },
    { title: 'Lower screen brightness / Auto-Brightness', detail: 'Settings → Accessibility → Display & Text Size → Auto-Brightness. iPads have huge screens — brightness matters even more than on iPhone.' },
    { title: 'Disable Background App Refresh', detail: 'Settings → General → Background App Refresh. Off for apps you don\'t need updating in the background.' },
    { title: 'Use Low Power Mode', detail: 'Settings → Battery → Low Power Mode. Available on iPad starting with iPadOS 15.' },
    { title: 'Quit unused Stage Manager / split-view apps', detail: 'Open apps in Stage Manager keep running. Close ones you\'re not using by swiping up on their thumbnails.' },
    { title: 'Turn off Hey Siri if unused', detail: 'Settings → Siri & Search → Listen for "Hey Siri" → Off.' },
  ],
  mac: [
    { title: 'Turn on Optimized Battery Charging', detail: 'System Settings → Battery → tap (i) next to Battery Health → Optimized Battery Charging ON. Pauses charging at 80% based on your usage pattern.' },
    { title: 'Check Battery Health', detail: 'System Settings → Battery → Battery Health (top of page). "Normal" is good. "Service Recommended" means time for replacement (Apple charges roughly $159–$249 depending on model).' },
    { title: 'Lower display brightness and disable keyboard backlight', detail: 'Use F1 to dim. System Settings → Keyboard → Keyboard Brightness → off in well-lit rooms.' },
    { title: 'Find apps eating battery in Activity Monitor', detail: 'Open Activity Monitor → Energy tab. "Avg Energy Impact" shows the heaviest hitters. Quit anything you don\'t actively need.' },
    { title: 'Adjust Battery settings', detail: 'System Settings → Battery → Options. Turn on "Slightly dim the display on battery", "Optimized video streaming while on battery", and "Put hard disks to sleep when possible".' },
    { title: 'Turn off Bluetooth when not in use', detail: 'Control Center → Bluetooth → Off. Useful if you\'re only using the trackpad/keyboard via cable or built-in.' },
    { title: 'Quit apps instead of just closing windows', detail: 'On Mac, closing the window keeps the app running. Right-click the dock icon → Quit, or Cmd+Q to fully close.' },
    { title: 'Disable heavy Safari / Chrome tabs', detail: 'Tabs running video, ads, or Google Docs use significant power. Close ones you\'re done with — or use Safari which is generally more efficient than Chrome on Mac.' },
    { title: 'Turn off Spotlight indexing if running hot', detail: 'System Settings → Siri & Spotlight → Spotlight Privacy. Add folders you don\'t need indexed (large external drives especially).' },
  ],
  windows: [
    { title: 'Use Battery saver mode', detail: 'Settings → System → Power & battery → Battery saver. Set it to turn on automatically at 30% (or higher).' },
    { title: 'Choose a power-friendly Power mode', detail: 'Settings → System → Power & battery → Power mode → "Best power efficiency". The "Best performance" setting eats battery for tasks that don\'t need it.' },
    { title: 'Lower screen brightness', detail: 'Press Fn + brightness keys, or open Quick Settings (Win + A) and use the brightness slider. Largest single battery saver on a laptop.' },
    { title: 'See which apps drain battery', detail: 'Settings → System → Power & battery → Battery usage. Shows per-app drain over the last 7 days. Restrict the worst offenders in background.' },
    { title: 'Disable startup apps you don\'t need', detail: 'Task Manager → Startup apps tab. Disable anything you don\'t need running on boot — fewer background apps = longer battery.' },
    { title: 'Turn off keyboard backlight when unneeded', detail: 'Most laptops have a function key for this. Backlight burns 30 minutes to an hour off your battery per day if always on.' },
    { title: 'Disconnect Bluetooth peripherals when on battery', detail: 'Settings → Bluetooth & devices. Bluetooth itself uses minimal power, but connected mice, keyboards, and headphones add up.' },
    { title: 'Turn off "Always-on Wi-Fi scanning"', detail: 'Settings → Network & internet → Wi-Fi → Manage known networks. Forget any networks you no longer use — Windows scans for them constantly.' },
    { title: 'Update graphics drivers', detail: 'Old Intel/AMD/NVIDIA drivers can cause surprise battery drain. Use Windows Update or the manufacturer\'s app (Intel Driver & Support Assistant, GeForce Experience).' },
  ],
  watch: [
    { title: 'Switch to a simpler watch face', detail: 'Modular and Infograph faces with many complications use more power than Simple or Utility. Long-press face → Edit → choose a simpler design.' },
    { title: 'Turn off Always On Display', detail: 'Watch app → Display & Brightness → Always On → Off. Saves 30–50% battery on Series 5+.' },
    { title: 'Disable wrist raise', detail: 'Watch app → Display & Brightness → Wake on Wrist Raise → Off. Tap the screen to wake instead — saves significant power.' },
    { title: 'Limit notifications', detail: 'Watch app → Notifications. Allow only essentials (calls, messages, Find My). Each notification powers the screen and haptic motor.' },
    { title: 'Use airplane mode in low-signal areas', detail: 'Swipe up → tap airplane icon. When the watch can\'t reach your phone or LTE, it burns battery searching constantly.' },
    { title: 'Turn off Background App Refresh', detail: 'Watch app → General → Background App Refresh → Off for apps you don\'t need updating live.' },
  ],
};

const DEVICE_LABELS: Record<Device, { label: string; emoji: string }> = {
  iphone: { label: 'iPhone', emoji: '' },
  android: { label: 'Android Phone', emoji: '' },
  ipad: { label: 'iPad', emoji: '' },
  mac: { label: 'Mac', emoji: '' },
  windows: { label: 'Windows Laptop', emoji: '' },
  watch: { label: 'Apple Watch', emoji: '' },
};

export default function BatteryOptimizer() {
  const [device, setDevice] = useState<Device>('iphone');
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const steps = STEPS[device];
  const completedCount = useMemo(() => steps.filter((s) => done[`${device}:${s.title}`]).length, [steps, done, device]);
  const pct = Math.round((completedCount / steps.length) * 100);

  const toggleDone = (key: string) => setDone((p) => ({ ...p, [key]: !p[key] }));
  const toggleOpen = (key: string) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <>
      <SEOHead
        title="Battery Life Optimizer — Make Your Phone or Laptop Last Longer | TekSure"
        description="Pick your device and get a tailored checklist of real, manufacturer-recommended battery saving steps. No fluff, no fake apps."
        path="/tools/battery-optimizer"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Battery Optimizer' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                <BatteryCharging className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Your Battery Life Just Got Better</h1>
            <p className="text-muted-foreground text-lg">
              Pick your device and walk through real, manufacturer-recommended steps. No "miracle apps" — just settings that actually work.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Device selector */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Pick your device</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(DEVICE_LABELS) as Device[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                      device === d ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30' : 'hover:border-primary hover:bg-muted/50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{DEVICE_LABELS[d].emoji}</div>
                    {DEVICE_LABELS[d].label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card className="border-emerald-200 dark:border-emerald-800/50">
            <CardContent className="pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-semibold">{completedCount} / {steps.length} done</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <Card>
            <CardHeader><CardTitle className="text-lg">{DEVICE_LABELS[device].label} battery checklist</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {steps.map((s, i) => {
                const key = `${device}:${s.title}`;
                const isDone = !!done[key];
                const isOpen = !!open[key];
                return (
                  <div key={key} className={`rounded-lg border ${isDone ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50' : ''}`}>
                    <div className="flex items-start gap-3 p-3">
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggleDone(key)}
                        className="mt-1 h-4 w-4 accent-emerald-600 cursor-pointer"
                        aria-label={`Mark "${s.title}" done`}
                      />
                      <button
                        onClick={() => toggleOpen(key)}
                        className="flex-1 text-left flex items-start gap-2"
                      >
                        <div className="flex-1">
                          <span className="text-xs text-muted-foreground mr-2">{i + 1}.</span>
                          <span className={`text-sm font-medium ${isDone ? 'line-through text-muted-foreground' : ''}`}>{s.title}</span>
                        </div>
                        {isOpen ? <ChevronUp className="h-4 w-4 flex-shrink-0 mt-0.5" /> : <ChevronDown className="h-4 w-4 flex-shrink-0 mt-0.5" />}
                      </button>
                    </div>
                    {isOpen && (
                      <p className="px-3 pb-3 pl-10 text-sm text-muted-foreground">{s.detail}</p>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Battery replacement */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Wrench className="h-5 w-5 text-orange-600" aria-hidden="true" /> Battery Replacement Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">When to replace</p>
                <p className="text-muted-foreground">Phones: when battery health drops below 80%, or you can\'t make it through a typical day. Laptops: when capacity drops below 80%, or runtime is half what it used to be.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Where to get it done</p>
                <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Apple Store / Genius Bar — iPhone $89–$99, Mac $159–$249</li>
                  <li>Best Buy Geek Squad — most makes, often same-day</li>
                  <li>uBreakiFix or local repair shops — often cheaper, ask about parts warranty</li>
                  <li>Carrier store (Verizon, AT&T, T-Mobile) — for phones under warranty or insured</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">A note on DIY</p>
                <p className="text-muted-foreground">Modern phones and laptops use glued-in batteries. DIY kits exist (iFixit) but the risk of a punctured lithium battery is fire. Unless you have prior experience, leave it to a shop.</p>
              </div>
              <a
                href="https://support.apple.com/iphone/repair/battery-power"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline"
              >
                Apple battery service info <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          {/* Cross link */}
          <a href="/tools/device-age-checker" className="block rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors">
            <p className="font-semibold text-sm">Is it time for a new device? <ArrowRight className="inline h-4 w-4" /></p>
            <p className="text-xs text-muted-foreground mt-1">If your battery is the only problem, replacement is much cheaper. Use our Device Age Checker to decide.</p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
