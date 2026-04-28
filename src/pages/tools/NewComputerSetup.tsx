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
import { Laptop, ChevronRight } from 'lucide-react';

type System = 'windows' | 'mac' | 'chromebook';

interface Item {
  id: string;
  title: string;
  detail: string;
}

const SETUPS: Record<System, Item[]> = {
  windows: [
    { id: 'w1',  title: 'Skip the bloatware on first boot', detail: 'Windows 11 asks if you want McAfee, Norton, Office trials. Decline all. You can install what you actually need later.' },
    { id: 'w2',  title: 'Sign in with a Microsoft account', detail: 'Use the email + password you already have, or create a free one. Lets you re-set up the PC later if it dies.' },
    { id: 'w3',  title: 'Install Windows updates', detail: 'Settings → Windows Update → Check for updates. Let it run for 20-30 minutes — these are 6+ months of pending updates the PC shipped without.' },
    { id: 'w4',  title: 'Set up Windows Hello (face or fingerprint unlock)', detail: 'Settings → Accounts → Sign-in options. Replaces typing your password constantly.' },
    { id: 'w5',  title: 'Turn on automatic backup', detail: 'Free OneDrive backup of Desktop, Documents, Pictures. Settings → Accounts → Windows backup. Worth doing day one.' },
    { id: 'w6',  title: 'Install your browser of choice', detail: 'Edge is fine. Chrome, Firefox, or Brave are alternatives. Sign in with a Google or browser account so bookmarks and passwords sync from your old PC.' },
    { id: 'w7',  title: 'Uninstall the bloatware that did install', detail: 'Settings → Apps → Installed apps. Anything labeled "trial" — uninstall.' },
    { id: 'w8',  title: 'Set up File Explorer to show extensions', detail: 'View tab → "File name extensions" checkbox. Lets you see if .exe files are actually safe to open.' },
    { id: 'w9',  title: 'Install antivirus only if you need extras', detail: 'Windows Defender (built-in) is plenty for most people. Skip Norton, McAfee, Kaspersky unless your work specifically requires one.' },
    { id: 'w10', title: 'Plug in a backup external drive monthly', detail: 'A $40 USB hard drive set up for File History gives you full image backup. Plug in once a month.' },
  ],
  mac: [
    { id: 'm1',  title: 'Sign in with your Apple ID', detail: 'Use the same Apple ID as your iPhone — apps, photos, contacts sync automatically.' },
    { id: 'm2',  title: 'Run Software Update', detail: 'Apple menu → System Settings → Software Update. Install everything pending.' },
    { id: 'm3',  title: 'Set up Touch ID or Apple Watch unlock', detail: 'System Settings → Touch ID & Password. Touch ID for the trackpad; Apple Watch can auto-unlock when nearby.' },
    { id: 'm4',  title: 'Turn on Time Machine for backups', detail: 'Plug in a USB hard drive ($40). System Settings → General → Time Machine → "Add Backup Disk". Every hour your Mac auto-backs up.' },
    { id: 'm5',  title: 'Sign into iCloud', detail: 'System Settings → Apple ID → iCloud. Photos, Notes, Calendar all sync from your iPhone.' },
    { id: 'm6',  title: 'Pick your default apps', detail: 'System Settings → Desktop & Dock → "Default web browser". Some people prefer Chrome over Safari.' },
    { id: 'm7',  title: 'Enable FileVault', detail: 'System Settings → Privacy & Security → FileVault → Turn On. Encrypts the entire drive — if your laptop is stolen, your files are safe.' },
    { id: 'm8',  title: 'Hide menu bar icons you do not need', detail: 'Drag any system icon out of the menu bar with Cmd held. Cleaner top bar.' },
    { id: 'm9',  title: 'Set up Hot Corners', detail: 'System Settings → Desktop & Dock → Hot Corners. Bottom-right corner shows desktop. Top-left starts screensaver. Saves a lot of clicks.' },
  ],
  chromebook: [
    { id: 'c1', title: 'Sign in with a Google account', detail: 'A Chromebook is essentially a Chrome browser. Your Gmail account becomes your login.' },
    { id: 'c2', title: 'Update ChromeOS', detail: 'Settings → About ChromeOS → Check for updates. Should be quick.' },
    { id: 'c3', title: 'Set up Google Smart Lock with your Android phone', detail: 'Settings → Connected devices → Smart Lock. Phone in your pocket = Chromebook unlocks automatically.' },
    { id: 'c4', title: 'Pin frequently-used apps', detail: 'Right-click an app icon → "Pin to shelf". Keeps Gmail, Docs, Photos right at the bottom.' },
    { id: 'c5', title: 'Install Android apps from Play Store', detail: 'Open Play Store from the launcher. Most Android apps work — Netflix, Zoom, banking apps, games.' },
    { id: 'c6', title: 'Turn on Google Drive offline', detail: 'docs.google.com → Settings → "Available offline" → ON. Documents work without internet.' },
    { id: 'c7', title: 'Set up Powerwash for emergencies', detail: 'If something ever breaks: Settings → Advanced → Reset settings → "Powerwash". Wipes everything to factory in 5 minutes — the killer Chromebook feature.' },
  ],
};

const SYSTEMS: { id: System; label: string }[] = [
  { id: 'windows',     label: 'Windows PC' },
  { id: 'mac',         label: 'Mac' },
  { id: 'chromebook',  label: 'Chromebook' },
];

export default function NewComputerSetup() {
  const [system, setSystem] = useState<System>('windows');
  const [done, setDone] = useState<Set<string>>(new Set());

  const items = SETUPS[system];

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const switchSystem = (s: System) => {
    setSystem(s);
    setDone(new Set());
  };

  return (
    <>
      <SEOHead
        title="New Computer Setup"
        description="Set up a new Windows PC, Mac, or Chromebook the right way the first time. Skip bloatware, set up backups, secure logins, sign in to the right accounts."
        path="/tools/new-computer-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Laptop className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">New Computer Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Open the box, set it up right the first time. Skip the bloatware. Lock down the basics. About 30 minutes.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'New Computer Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your system</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {SYSTEMS.map(s => (
                  <button key={s.id} onClick={() => switchSystem(s.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      system === s.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{s.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {items.length} done</p>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <div className="space-y-2">
                {items.map(item => (
                  <label key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                    }`}>
                    <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {done.size === items.length && (
            <Card className="border-green-300 bg-green-50 dark:bg-green-950/20 mb-6">
              <CardContent className="p-5 text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 border-green-300">All set up</Badge>
                <p className="font-semibold">Your computer is ready.</p>
                <p className="text-sm text-muted-foreground mt-1">Print a Tech Cheatsheet next so common tasks are at hand.</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link to="/tools/tech-cheatsheet-generator">Tech Cheatsheet Generator</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/speed-up-device" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Speed Up Your Device</p>
                <p className="text-xs text-muted-foreground mt-0.5">When the new PC starts feeling slow.</p>
              </Link>
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make sure backups are running.</p>
              </Link>
              <Link to="/tools/free-office-suite" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Free Office Suite</p>
                <p className="text-xs text-muted-foreground mt-0.5">Don\'t buy Office.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
