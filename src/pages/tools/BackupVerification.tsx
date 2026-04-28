import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  ShieldCheck, ChevronRight, AlertTriangle, type LucideIcon,
  Monitor, Laptop, Smartphone,
} from 'lucide-react';

type Device = 'iphone' | 'android' | 'mac' | 'windows';

interface Step {
  title: string;
  detail: string;
}

interface DevicePlan {
  verifyLastBackup: Step;
  testRestore: Step;
  monthlyHabit: Step;
  externalDrive: Step;
}

const PLAN: Record<Device, DevicePlan> = {
  iphone: {
    verifyLastBackup: {
      title: 'Check the last iCloud backup time',
      detail: 'Open Settings → tap your name at the top → iCloud → Manage Storage → Backups → tap your iPhone. You will see "Last Backup" with a date and time. If that date is older than a week, your backup is stale. Tap "Back Up Now" and wait for it to finish on Wi-Fi.',
    },
    testRestore: {
      title: 'Run a real test restore (one photo at a time)',
      detail: 'You do not need to wipe your phone to test. Pick one photo you know was backed up. Delete it from Photos → Recently Deleted → Delete permanently. Then go to iCloud.com on a computer → Photos → Recently Deleted (kept 30 days) → Recover. If it comes back, your photo backup is real. For full-restore testing, set up an old retired iPhone or do it the next time you upgrade.',
    },
    monthlyHabit: {
      title: 'First Sunday of each month — verify',
      detail: 'Once a month, walk the path: Settings → name → iCloud → Manage Storage → Backups. Confirm "Last Backup" is within the past 7 days. If iCloud storage is full (the most common silent failure), upgrade to 50GB for $0.99/month or clear out old device backups you no longer use.',
    },
    externalDrive: {
      title: 'Optional: archive to a computer once a year',
      detail: 'Plug iPhone into a Mac or PC → open Finder (Mac) or iTunes/Apple Devices (Windows) → click your iPhone → "Back Up Now" with "Encrypt local backup" checked. This local copy lives on your computer and is independent of iCloud. Good insurance against an Apple ID lockout.',
    },
  },
  android: {
    verifyLastBackup: {
      title: 'Check the last Google One backup time',
      detail: 'Open Settings → Google → Backup. You will see "Last backup" with a date. Tap "Back up now" if it has been more than a week. On Samsung phones, also check Settings → Accounts and backup → Back up data (under Google Drive) — same idea, separate screen.',
    },
    testRestore: {
      title: 'Test a single contact or photo restore',
      detail: 'Open Google Photos on a computer (photos.google.com) → Trash → confirm a recently deleted photo is there and restorable. For contacts: contacts.google.com → trash → confirm. To do a full-restore test, factory-reset an old retired Android, sign in with your Google account, and watch contacts, calendar, photos, and apps come back. Most people skip this until they buy a new phone.',
    },
    monthlyHabit: {
      title: 'First Sunday of each month — verify',
      detail: 'Once a month: Settings → Google → Backup. Confirm the date is recent and that "Photos & videos" shows your photo count climbing, not stuck. If Google One storage is at 100%, backups silently stop — upgrade ($1.99/month for 100GB) or delete old files in Drive.',
    },
    externalDrive: {
      title: 'Optional: copy photos to a USB drive yearly',
      detail: 'Plug a USB-C drive (or USB-A with adapter) into your phone → open Files → My Files → Internal Storage → DCIM → copy the Camera folder to the USB drive. Now you have a physical copy that survives even if your Google account is locked.',
    },
  },
  mac: {
    verifyLastBackup: {
      title: 'Check Time Machine in System Settings',
      detail: 'Apple menu → System Settings → General → Time Machine. The screen shows "Latest backup" with a timestamp. If older than a day or two, click "Back Up Now" from the Time Machine menu bar icon (clock-with-arrow at the top of your screen). If you do not see that icon, turn it on under Time Machine → "Show Time Machine in menu bar".',
    },
    testRestore: {
      title: 'Restore a single file from Time Machine',
      detail: 'Click the Time Machine icon in the menu bar → Browse Time Machine Backups. You will see a stack of Finder windows going back in time. Pick a folder, scroll back a few days, select any file, click "Restore". The file lands back where it was. If this works, your full backup will work when you need it.',
    },
    monthlyHabit: {
      title: 'First Sunday of each month — verify',
      detail: 'Open Time Machine settings, confirm the latest backup is from today or yesterday. Check the backup drive has free space (Time Machine deletes oldest backups when full, but a near-full drive can fail mid-backup). Eject and reconnect the drive — sometimes macOS forgets a flaky USB connection.',
    },
    externalDrive: {
      title: 'Use a dedicated 2TB external drive',
      detail: 'Best practice: a 2TB USB drive used only for Time Machine, plugged in 24/7 if you have a desktop, or daily for laptops. WD Elements or Seagate Backup Plus, around $60. Format as APFS (Mac native) the first time you plug it in — Disk Utility will prompt you. Never store other files on a Time Machine drive — Time Machine wants the whole disk.',
    },
  },
  windows: {
    verifyLastBackup: {
      title: 'Check File History in Settings',
      detail: 'Open Settings → System → Storage → "Advanced storage settings" → "Backup options". You will see when File History last ran. If you do not see File History, your PC may be using "Backup using File History" under Update & Security → Backup (Windows 10) or you may need to turn it on. Make sure an external drive is plugged in — File History needs one.',
    },
    testRestore: {
      title: 'Restore a single file from File History',
      detail: 'In Settings → "Backup options" → "Restore files from a current backup". A window opens showing your backed-up folders by date. Use the left/right arrows at the bottom to scroll back in time. Pick any file, click the green Restore button. If the file reappears in its original folder, File History is working. If the window is empty, your backup never actually ran — fix the drive connection.',
    },
    monthlyHabit: {
      title: 'First Sunday of each month — verify',
      detail: 'Once a month: confirm your external drive is plugged in, File History shows a recent date, and the drive is not full. Also do this: copy your Documents folder manually to OneDrive once a month as a second layer. File History only protects what you tell it to — make sure the folders that matter are in the list.',
    },
    externalDrive: {
      title: 'Pair File History with OneDrive for double safety',
      detail: 'Local backup (File History on a USB drive) protects against ransomware on your cloud account. Cloud backup (OneDrive, free 5GB or 1TB with Microsoft 365) protects against a house fire that destroys your USB drive. Run both. To verify OneDrive: right-click the cloud icon in the system tray → "View online" → confirm your files are listed at onedrive.com.',
    },
  },
};

const DEVICES: { id: Device; label: string; icon: LucideIcon }[] = [
  { id: 'iphone',  label: 'iPhone or iPad',    icon: Smartphone },
  { id: 'android', label: 'Android phone',     icon: Smartphone },
  { id: 'mac',     label: 'Mac computer',      icon: Laptop },
  { id: 'windows', label: 'Windows computer',  icon: Monitor },
];

export default function BackupVerification() {
  const [device, setDevice] = useState<Device>('iphone');
  const [done, setDone] = useState<Set<string>>(new Set());

  const plan = PLAN[device];
  const allSteps: Step[] = [plan.verifyLastBackup, plan.testRestore, plan.monthlyHabit, plan.externalDrive];

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
        title="Backup Verification — Test That Your Backup Actually Works"
        description="A backup is not a backup until you have restored from it. Verify iCloud, Google One, Time Machine, and Windows File History — and run a real test restore."
        path="/tools/backup-verification"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Backup Verification</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Set up a backup once. Test it the rest of your life. Pick your device and walk through the four checks below.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Backup Verification' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-amber-900 dark:text-amber-100 mb-1">
                    "Backed up" does not mean "restorable" until you have tested it.
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    Most backup failures are silent — the icon says everything is fine, the cloud storage is full, and the backup quietly stopped six months ago. Every story of lost photos starts with "I thought it was backing up." A backup you have never restored from is a hope, not a backup.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {allSteps.length} done</p>

          <div className="space-y-3 mb-6">
            {allSteps.map((s, i) => {
              const isDone = done.has(`${device}-${i}`);
              const sectionLabels = ['Verify last backup', 'Test restore', 'Monthly habit', 'External drive'];
              return (
                <Card key={i} className={`border-border ${isDone ? 'bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                  <CardContent className="p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox checked={isDone} onCheckedChange={() => toggle(`${device}-${i}`)} className="mt-1" />
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">{sectionLabels[i]}</p>
                        <p className={`font-medium text-sm ${isDone ? 'line-through text-muted-foreground' : ''}`}>{i + 1}. {s.title}</p>
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
              <p className="text-sm font-semibold mb-2">The 3-2-1 rule (worth memorizing)</p>
              <p className="text-xs text-muted-foreground">
                <strong>3</strong> copies of anything you cannot afford to lose. <strong>2</strong> different types of storage (one local drive, one cloud). <strong>1</strong> copy stored offsite (cloud counts; a USB drive at a relative's house counts). Photos of grandchildren, tax records, scanned medical paperwork — these are the things that need 3-2-1. Cat memes do not.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">External drive verification, no matter the device</p>
              <p className="text-xs text-muted-foreground">
                If you back up to a USB drive (Time Machine, File History, manual copies), test the drive twice a year. Plug it in. Open it. Pick three random files from different folders and try to open them. A dead external drive feels exactly like a working one until the moment you need it. Drives last 3-5 years on average — replace before then.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up backup from scratch.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Keep photos safe and organized.</p>
              </Link>
              <Link to="/tools/usb-storage-guide" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">USB Storage Guide</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick the right external drive.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: put a calendar reminder on the first Sunday of every month titled "Verify backup". Two minutes a month saves a lifetime of memories.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
