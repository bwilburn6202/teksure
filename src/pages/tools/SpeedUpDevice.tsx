import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Zap, ChevronRight, type LucideIcon,
  Monitor, Laptop, Smartphone,
} from 'lucide-react';

type Device = 'iphone' | 'android' | 'mac' | 'windows';

interface Step {
  title: string;
  detail: string;
  impact: 'big' | 'medium' | 'small';
}

const SPEED_UP: Record<Device, Step[]> = {
  iphone: [
    { title: 'Restart it (yes, really)', detail: 'Hold power + volume down → "slide to power off". Wait 30 seconds. Power back on. Most slowdowns clear with a fresh restart. Do this once a week.', impact: 'big' },
    { title: 'Free up storage', detail: 'Settings → General → iPhone Storage. Anything below 10% free will slow your iPhone significantly. Delete unused apps, clear out Safari cache, offload large videos.', impact: 'big' },
    { title: 'Update iOS — but not to the latest if your phone is old', detail: 'Settings → General → Software Update. If you have an iPhone 8 or older, stay on iOS 16. iOS 17/18 will run, but slowly. The "right" update is the one made for your hardware.', impact: 'medium' },
    { title: 'Reduce Motion + Reduce Transparency', detail: 'Settings → Accessibility → Motion → Reduce Motion ON. And → Display & Text Size → Reduce Transparency ON. Animations get faster, the phone feels snappier.', impact: 'medium' },
    { title: 'Turn off Background App Refresh for what you do not need', detail: 'Settings → General → Background App Refresh. Leave it on for Mail, Maps, Messages. Turn off for everything else.', impact: 'small' },
    { title: 'Replace the battery (if 3+ years old)', detail: 'Settings → Battery → Battery Health. Below 80% maximum capacity = your phone is throttling itself to save what is left. Apple battery replacement is $89-$129 and feels like a new phone.', impact: 'big' },
  ],
  android: [
    { title: 'Restart it', detail: 'Hold power → Restart. Most everyday slowdowns are fixed by this. Once a week.', impact: 'big' },
    { title: 'Free up storage', detail: 'Settings → Storage. Below 10% free = slow phone. Use the built-in "Free up space" tool — it deletes cached data first.', impact: 'big' },
    { title: 'Disable bloatware apps', detail: 'Long-press an app you never use → App info → Disable. Disabling stops it taking memory and update cycles. Cannot uninstall the carrier apps but can disable.', impact: 'medium' },
    { title: 'Turn off auto-updating apps', detail: 'Play Store → Settings → Network preferences → Auto-update apps → "Over Wi-Fi only". Stops your phone updating in the background while you are using it.', impact: 'small' },
    { title: 'Reduce animation speed', detail: 'Settings → About phone → tap "Build number" 7 times to enable Developer Options. Then Settings → System → Developer options → set "Window animation scale", "Transition", and "Animator duration" each to 0.5x. Phone feels twice as fast.', impact: 'medium' },
    { title: 'Replace the battery (if 3+ years old)', detail: 'A weak battery makes Android phones throttle their CPU. Most repair shops swap a battery for $40-$80. uBreakiFix is a reliable national chain.', impact: 'big' },
  ],
  mac: [
    { title: 'Restart', detail: 'Apple menu → Restart. Macs that have been on for weeks accumulate memory pressure. A weekly restart is plenty.', impact: 'big' },
    { title: 'Check Activity Monitor', detail: 'Open Activity Monitor (Spotlight → "Activity"). Sort by Memory and CPU. Anything using a lot is your culprit — usually Chrome with too many tabs.', impact: 'medium' },
    { title: 'Reduce login items', detail: 'System Settings → General → Login Items. Anything that auto-launches at boot uses memory. Remove what you do not need open all the time.', impact: 'medium' },
    { title: 'Clear cache and downloads', detail: 'Empty Downloads folder. Empty Trash. In Finder → Cmd-Shift-G → type "~/Library/Caches" → trash anything in there (only the Caches folder, not anywhere else).', impact: 'small' },
    { title: 'Add more memory if older Intel Mac', detail: 'Pre-2018 MacBooks let you swap RAM. Intel iMac is the same. M1/M2/M3 Macs do NOT — RAM is soldered. If your Mac has fewer than 8GB, more RAM is the single best money you can spend.', impact: 'big' },
    { title: 'Reset SMC and NVRAM (Intel only)', detail: 'Apple support has the exact key combos. SMC reset fixes power and fan issues; NVRAM reset fixes display and sound. Only for Intel Macs — M-series do not need it.', impact: 'small' },
  ],
  windows: [
    { title: 'Restart — not shut down', detail: 'Start menu → Power → Restart. Windows uses Fast Startup which preserves bugs across shutdown. Restart actually clears them.', impact: 'big' },
    { title: 'Open Task Manager', detail: 'Ctrl+Shift+Esc. Sort the Processes tab by Memory or CPU. The biggest user is your problem. Often Chrome, Edge, or an old printer driver.', impact: 'medium' },
    { title: 'Disable startup programs', detail: 'Task Manager → Startup tab. Right-click anything you do not need at boot → Disable. Spotify, OneDrive, Chrome — all common offenders.', impact: 'big' },
    { title: 'Run Storage Sense', detail: 'Settings → System → Storage → "Storage Sense" → ON. Cleans temp files, old downloads, recycle bin. Free 5-20 GB on most older PCs.', impact: 'medium' },
    { title: 'Check for an SSD upgrade', detail: 'If your PC still has a spinning hard drive, an SSD swap (~$50 + $50 install at Best Buy) makes a 7-year-old PC feel new. Single biggest possible upgrade.', impact: 'big' },
    { title: 'Reset visual effects', detail: 'Search "performance" → "Adjust the appearance" → "Adjust for best performance". Turns off animations and shadows; older PCs run noticeably faster.', impact: 'medium' },
  ],
};

const DEVICES: { id: Device; label: string; icon: LucideIcon }[] = [
  { id: 'iphone',  label: 'iPhone',          icon: Smartphone },
  { id: 'android', label: 'Android phone',   icon: Smartphone },
  { id: 'mac',     label: 'Mac computer',    icon: Laptop },
  { id: 'windows', label: 'Windows computer', icon: Monitor },
];

export default function SpeedUpDevice() {
  const [device, setDevice] = useState<Device>('iphone');
  const [done, setDone] = useState<Set<string>>(new Set());

  const steps = SPEED_UP[device];

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const switchDevice = (d: Device) => {
    setDevice(d);
    setDone(new Set());
  };

  return (
    <>
      <SEOHead
        title="Speed Up Your Device"
        description="Make a slow iPhone, Android, Mac, or Windows PC feel new again. Six honest fixes per device — ranked by impact. No shady cleanup apps."
        path="/tools/speed-up-device"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-yellow-50 via-background to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-yellow-500/10 rounded-full">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Speed Up Your Device</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six fixes per device — ranked by impact. No shady "cleanup" apps. Free and honest.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Speed Up Your Device' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your device</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {DEVICES.map(d => {
                  const Icon = d.icon;
                  return (
                    <button key={d.id} onClick={() => switchDevice(d.id)}
                      className={`p-3 rounded-lg border text-left transition-all flex items-center gap-3 ${
                        device === d.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                      }`}>
                      <Icon className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="font-medium text-sm">{d.label}</p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {steps.length} done</p>

          <div className="space-y-3 mb-6">
            {steps.map((s, i) => {
              const isDone = done.has(`${device}-${i}`);
              const impactCls = s.impact === 'big' ? 'bg-green-100 text-green-700 border-green-300' :
                                s.impact === 'medium' ? 'bg-amber-100 text-amber-700 border-amber-300' :
                                'bg-muted text-muted-foreground';
              return (
                <Card key={i} className={`border-border ${isDone ? 'bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                  <CardContent className="p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox checked={isDone} onCheckedChange={() => toggle(`${device}-${i}`)} className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                          <p className={`font-medium text-sm ${isDone ? 'line-through text-muted-foreground' : ''}`}>{i + 1}. {s.title}</p>
                          <Badge variant="outline" className={`text-xs ${impactCls}`}>
                            {s.impact === 'big' ? 'Big impact' : s.impact === 'medium' ? 'Medium' : 'Small'}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                      </div>
                    </label>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">What NOT to install</p>
              <p className="text-xs text-muted-foreground">
                Avoid "PC cleaner", "speed booster", "junk remover" apps. Most are scams that themselves slow your device, show ads, and sometimes inject malware. Windows 10 and 11 have everything you need built in. Same on Mac with the App Store. iPhone and Android are even more locked down — there is no legitimate "phone booster" app.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/storage-cleanup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Storage Cleanup</p>
                <p className="text-xs text-muted-foreground mt-0.5">More space-saving tactics.</p>
              </Link>
              <Link to="/tools/device-age-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Age Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">When to replace instead.</p>
              </Link>
              <Link to="/tools/update-decision-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Update Decision Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Should you install that update?</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: a slow device usually has one big cause. Try the "Big impact" fixes first.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
