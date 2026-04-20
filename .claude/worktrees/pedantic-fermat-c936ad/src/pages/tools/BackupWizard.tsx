import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HardDrive, Cloud, Camera, FileText, Users, Package,
  ChevronRight, CheckCircle2, RotateCcw, ArrowRight, Shield,
  Monitor, Laptop, Smartphone, Tablet, Lock, Zap,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────────────── */

type BackupItem = 'photos' | 'documents' | 'contacts' | 'everything';
type BackupDest = 'cloud' | 'drive' | 'both';
type DeviceType = 'windows' | 'mac' | 'iphone' | 'android';

interface Plan {
  items: BackupItem[];
  destination: BackupDest;
  device: DeviceType;
}

/* ── Step data ───────────────────────────────────── */

const backupItems: { id: BackupItem; label: string; icon: LucideIcon; desc: string }[] = [
  { id: 'photos', label: 'Photos & Videos', icon: Camera, desc: 'Your precious memories and family pictures' },
  { id: 'documents', label: 'Documents & Files', icon: FileText, desc: 'Important letters, forms, and saved files' },
  { id: 'contacts', label: 'Contacts', icon: Users, desc: 'Phone numbers, email addresses, and addresses' },
  { id: 'everything', label: 'Everything', icon: Package, desc: 'A full backup of your entire device' },
];

const destinations: { id: BackupDest; label: string; icon: typeof Cloud; color: string; desc: string; pros: string }[] = [
  { id: 'cloud', label: 'Cloud Storage', icon: Cloud, color: 'text-blue-500', desc: 'Backed up online — accessible from any device', pros: 'Free options available · Access anywhere · Automatic' },
  { id: 'drive', label: 'External Hard Drive', icon: HardDrive, color: 'text-amber-500', desc: 'Saved to a physical device you keep at home', pros: 'One-time purchase · Works without internet · Very fast' },
  { id: 'both', label: 'Both (Recommended)', icon: Shield, color: 'text-green-500', desc: 'Cloud backup + an external hard drive copy', pros: 'Maximum protection · Best practice for important data' },
];

const devices: { id: DeviceType; label: string; icon: LucideIcon }[] = [
  { id: 'windows', label: 'Windows PC or Laptop', icon: Monitor },
  { id: 'mac', label: 'Mac (MacBook or iMac)', icon: Laptop },
  { id: 'iphone', label: 'iPhone or iPad', icon: Smartphone },
  { id: 'android', label: 'Android Phone or Tablet', icon: Tablet },
];

/* ── Instructions generator ─────────────────────── */

interface InstructionBlock {
  heading: string;
  service?: string;
  serviceUrl?: string;
  steps: string[];
  tip?: string;
}

function getInstructions(plan: Plan): InstructionBlock[] {
  const blocks: InstructionBlock[] = [];
  const wantsPhotos = plan.items.includes('photos') || plan.items.includes('everything');
  const wantsDocs = plan.items.includes('documents') || plan.items.includes('everything');
  const wantsContacts = plan.items.includes('contacts') || plan.items.includes('everything');
  const wantsCloud = plan.destination === 'cloud' || plan.destination === 'both';
  const wantsDrive = plan.destination === 'drive' || plan.destination === 'both';

  // ─── Cloud instructions ───────────────────────────
  if (wantsCloud) {
    if (plan.device === 'iphone') {
      if (wantsPhotos) {
        blocks.push({
          heading: 'Back Up Photos to iCloud',
          service: 'iCloud',
          steps: [
            'Open the Settings app (the grey cog icon)',
            'Tap your name at the very top',
            'Tap "iCloud"',
            'Tap "Photos" and turn on "iCloud Photos"',
            'Your photos will now back up automatically over Wi-Fi',
            'You get 5 GB free — upgrade in Settings > iCloud > Manage Storage if needed',
          ],
          tip: 'Keep your phone plugged in and on Wi-Fi overnight for the first big backup.',
        });
      }
      if (wantsDocs) {
        blocks.push({
          heading: 'Back Up Documents to iCloud Drive',
          service: 'iCloud Drive',
          steps: [
            'Go to Settings > [your name] > iCloud',
            'Scroll down and toggle on "iCloud Drive"',
            'Also toggle on any apps you want to sync (like Pages or Notes)',
            'Open the Files app to see your iCloud Drive documents',
          ],
        });
      }
      if (wantsContacts) {
        blocks.push({
          heading: 'Back Up Contacts to iCloud',
          steps: [
            'Go to Settings > [your name] > iCloud',
            'Toggle on "Contacts"',
            'Your contacts will sync automatically and can be restored any time',
          ],
          tip: 'If you ever get a new iPhone, your contacts will automatically appear when you sign in.',
        });
      }
    }

    if (plan.device === 'android') {
      if (wantsPhotos) {
        blocks.push({
          heading: 'Back Up Photos to Google Photos',
          service: 'Google Photos',
          serviceUrl: 'https://photos.google.com',
          steps: [
            'Install or open the Google Photos app',
            'Sign in with your Google account (your Gmail address)',
            'Tap your profile picture in the top right',
            'Tap "Photos settings" then "Backup"',
            'Turn on "Backup" and choose your preferred upload quality',
            'High quality backups are free with unlimited storage',
          ],
          tip: 'Plug into Wi-Fi and charger before the first backup — it can take a while!',
        });
      }
      if (wantsContacts) {
        blocks.push({
          heading: 'Back Up Contacts to Google',
          steps: [
            'Go to your phone\'s Settings app',
            'Tap "Accounts" (or "Accounts & sync")',
            'Tap your Google account',
            'Make sure "Contacts" is turned on',
            'Tap "Sync now" to back up straight away',
          ],
        });
      }
    }

    if (plan.device === 'windows') {
      if (wantsPhotos) {
        blocks.push({
          heading: 'Back Up Photos to OneDrive',
          service: 'OneDrive',
          steps: [
            'Open the Start menu and search for "OneDrive"',
            'Sign in with your Microsoft account (or create one free at microsoft.com)',
            'During setup, choose "Automatically save photos to OneDrive"',
            'Or right-click any photo folder and select "Move to OneDrive"',
            'You get 5 GB free — Microsoft 365 gives you 1 TB',
          ],
          tip: 'You can also use Google Photos on Windows — just visit photos.google.com and drag photos in.',
        });
      }
      if (wantsDocs) {
        blocks.push({
          heading: 'Back Up Documents to OneDrive',
          steps: [
            'Open File Explorer and find the OneDrive folder (it has a cloud icon)',
            'Drag and drop your important documents into the OneDrive folder',
            'Anything in OneDrive is automatically saved to the cloud',
            'You can also set Desktop, Documents, and Pictures to auto-sync:',
            'Right-click the OneDrive icon in the taskbar > Settings > Backup > Manage backup',
          ],
        });
      }
    }

    if (plan.device === 'mac') {
      if (wantsPhotos) {
        blocks.push({
          heading: 'Back Up Photos to iCloud',
          service: 'iCloud Photos',
          steps: [
            'Open System Settings (the gear icon in your Dock)',
            'Click your Apple ID at the top left',
            'Click "iCloud" then "Photos"',
            'Turn on "Sync this Mac"',
            'All your Photos library will back up to iCloud automatically',
          ],
          tip: 'Make sure you have enough iCloud storage — 5 GB is free, more can be purchased in System Settings.',
        });
      }
      if (wantsDocs) {
        blocks.push({
          heading: 'Back Up Documents to iCloud Drive',
          steps: [
            'Go to System Settings > Apple ID > iCloud',
            'Turn on "iCloud Drive"',
            'Check "Desktop & Documents Folders" to automatically sync those locations',
            'Your Documents folder will now live in the cloud and on your Mac',
          ],
        });
      }
    }
  }

  // ─── External drive instructions ─────────────────
  if (wantsDrive) {
    if (plan.device === 'windows') {
      blocks.push({
        heading: 'Back Up to an External Hard Drive — Windows',
        steps: [
          'Plug your external hard drive into a USB port on your computer',
          'Open the Start menu and search for "Backup settings"',
          'Click "Add a drive" and select your external hard drive',
          'Turn on "Automatically back up my files"',
          'Click "More options" to choose which folders to include',
          'For a full system backup: search for "Backup and Restore (Windows 7)" and click "Create a system image"',
        ],
        tip: 'Label the hard drive and keep it somewhere safe — like a different room or a fireproof box.',
      });
    }
    if (plan.device === 'mac') {
      blocks.push({
        heading: 'Back Up to an External Hard Drive — Time Machine',
        steps: [
          'Plug your external hard drive into your Mac\'s USB-C or USB port',
          'Your Mac may ask if you want to use it for Time Machine — click "Use as Backup Disk"',
          'Or go to System Settings > General > Time Machine',
          'Click "Add Backup Disk" and select your drive',
          'Time Machine will automatically back up everything every hour',
          'The first backup takes a while — leave it running overnight',
        ],
        tip: 'Time Machine keeps hourly backups for 24 hours, daily for a month, and weekly forever. It\'s very reliable.',
      });
    }
    if (plan.device === 'iphone' || plan.device === 'android') {
      blocks.push({
        heading: 'Back Up Your Phone to a Computer',
        steps: [
          'Connect your phone to your computer with its charging cable',
          plan.device === 'iphone'
            ? 'On Mac: open Finder, click your iPhone in the sidebar, click "Back Up Now"'
            : 'On Windows: your phone\'s photos will appear as a folder in File Explorer — copy them across',
          plan.device === 'iphone'
            ? 'On Windows: open iTunes, click your iPhone icon, choose "Back Up Now"'
            : 'For a full Android backup, use your phone manufacturer\'s PC tool (Samsung Smart Switch, etc.)',
          'Store this backup on your external hard drive by copying the backup folder across',
        ],
        tip: plan.device === 'iphone' ? 'An iTunes/Finder backup lets you fully restore a new iPhone in minutes.' : 'Connect to Wi-Fi and use Google Backup for a simpler option.',
      });
    }
  }

  return blocks;
}

/* ── Main component ─────────────────────────────── */

export default function BackupWizard() {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [selectedItems, setSelectedItems] = useState<BackupItem[]>([]);
  const [destination, setDestination] = useState<BackupDest | null>(null);
  const [device, setDevice] = useState<DeviceType | null>(null);

  const progress = step === 0 ? 0 : Math.round((step / 3) * 100);

  const toggleItem = (id: BackupItem) => {
    if (id === 'everything') {
      setSelectedItems(prev => prev.includes('everything') ? [] : ['everything']);
      return;
    }
    setSelectedItems(prev => {
      const without = prev.filter(i => i !== 'everything' && i !== id);
      return prev.includes(id) ? without : [...without, id];
    });
  };

  const plan: Plan | null = device && destination && selectedItems.length > 0
    ? { items: selectedItems, destination, device }
    : null;

  const instructions = plan ? getInstructions(plan) : [];

  const reset = () => {
    setStep(0);
    setSelectedItems([]);
    setDestination(null);
    setDevice(null);
  };

  return (
    <>
      <SEOHead
        title="Data Backup Wizard — Back Up Your Photos & Files | TekSure"
        description="Step-by-step personalized guide to backing up your photos, documents, and contacts. Works for iPhone, Android, Windows, and Mac. Free and easy."
        path="/tools/backup-wizard"
      />
      <Navbar />
      <main className="container max-w-2xl py-12 min-h-[70vh]">

        <div className="flex items-start gap-3 mb-8">
          <HardDrive className="h-8 w-8 text-primary shrink-0 mt-0.5" />
          <div>
            <h1 className="text-3xl font-bold">Data Backup Wizard</h1>
            <p className="text-muted-foreground mt-1">3 quick questions — then your personalized backup plan.</p>
          </div>
        </div>

        {step > 0 && step < 4 && (
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>Step {step} of 3</span>
            <span>{progress}%</span>
          </div>
        )}
        {step > 0 && step < 4 && <Progress value={progress} className="h-1.5 mb-8" />}

        <>

          {/* Intro */}
          {step === 0 && (
            <div key="intro">
              <Card className="mb-6">
                <CardContent className="py-8 text-center">
                  <div className="text-5xl mb-4">💾</div>
                  <h2 className="text-xl font-semibold mb-3">Is your data backed up?</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                    Phones break. Computers crash. A backup means you never lose your photos, contacts, or important documents. This wizard gives you a personalized plan in under 3 minutes.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-3 mb-8 text-center text-sm">
                {[
                  { icon: Camera, label: 'Protect your photos' },
                  { icon: Lock, label: 'Keep documents safe' },
                  { icon: Zap, label: '3 questions only' },
                ].map(item => (
                  <div key={item.label} className="bg-muted/50 rounded-xl p-3">
                    <div className="flex justify-center mb-1"><item.icon className="h-6 w-6 text-primary" /></div>
                    <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full h-14 text-base gap-2" onClick={() => setStep(1)}>
                Get My Backup Plan <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Step 1: What to back up */}
          {step === 1 && (
            <div key="step1">
              <Card className="mb-5">
                <CardContent className="py-6 text-center">
                  <p className="text-xl font-semibold">What do you want to back up?</p>
                  <p className="text-sm text-muted-foreground mt-1">Select all that apply — or choose "Everything"</p>
                </CardContent>
              </Card>

              <div className="space-y-3 mb-6">
                {backupItems.map(item => {
                  const selected = selectedItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                        selected ? 'border-primary bg-primary/10 shadow-sm' : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <item.icon className="h-6 w-6 text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      {selected && <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="w-full h-12 gap-2"
                disabled={selectedItems.length === 0}
                onClick={() => setStep(2)}
              >
                Next: Where to Back Up <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Destination */}
          {step === 2 && (
            <div key="step2">
              <Card className="mb-5">
                <CardContent className="py-6 text-center">
                  <p className="text-xl font-semibold">Where do you want to back up?</p>
                  <p className="text-sm text-muted-foreground mt-1">Both is always safer, but either works</p>
                </CardContent>
              </Card>

              <div className="space-y-3 mb-6">
                {destinations.map(dest => {
                  const Icon = dest.icon;
                  const selected = destination === dest.id;
                  return (
                    <button
                      key={dest.id}
                      onClick={() => setDestination(dest.id)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl border transition-all text-left ${
                        selected ? 'border-primary bg-primary/10 shadow-sm' : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="h-11 w-11 rounded-xl bg-muted flex items-center justify-center shrink-0">
                        <Icon className={`h-5 w-5 ${dest.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium flex items-center gap-2">
                          {dest.label}
                          {dest.id === 'both' && <Badge variant="secondary" className="text-xs">Best choice</Badge>}
                        </p>
                        <p className="text-sm text-muted-foreground">{dest.desc}</p>
                        <p className="text-xs text-primary mt-1">{dest.pros}</p>
                      </div>
                      {selected && <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="gap-1">← Back</Button>
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  disabled={!destination}
                  onClick={() => setStep(3)}
                >
                  Next: Your Device <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Device */}
          {step === 3 && (
            <div key="step3">
              <Card className="mb-5">
                <CardContent className="py-6 text-center">
                  <p className="text-xl font-semibold">What device are you backing up?</p>
                </CardContent>
              </Card>

              <div className="space-y-3 mb-6">
                {devices.map(d => {
                  const selected = device === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setDevice(d.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                        selected ? 'border-primary bg-primary/10 shadow-sm' : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <d.icon className="h-6 w-6 text-primary shrink-0" />
                      <span className="font-medium flex-1">{d.label}</span>
                      {selected && <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="gap-1">← Back</Button>
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  disabled={!device}
                  onClick={() => setStep(4)}
                >
                  Get My Plan <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && plan && (
            <div key="result">
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">✅</div>
                <h2 className="text-2xl font-bold mb-1">Your Personalized Backup Plan</h2>
                <p className="text-muted-foreground text-sm">Follow these steps to keep your data safe</p>
              </div>

              {instructions.length === 0 ? (
                <Card className="mb-6">
                  <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground">We couldn't generate specific instructions for that combination. Try adjusting your selections.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-5 mb-8">
                  {instructions.map((block, bi) => (
                    <Card key={bi} className="border-primary/20">
                      <CardContent className="py-6">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <h3 className="font-bold text-base leading-snug">{block.heading}</h3>
                          {block.service && (
                            <Badge variant="outline" className="text-xs shrink-0">{block.service}</Badge>
                          )}
                        </div>

                        <div className="space-y-3">
                          {block.steps.map((s, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {i + 1}
                              </div>
                              <p className="text-sm leading-relaxed">{s}</p>
                            </div>
                          ))}
                        </div>

                        {block.tip && (
                          <div className="mt-4 flex items-start gap-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-lg px-3 py-2.5">
                            <span className="text-amber-500 shrink-0 text-sm">💡</span>
                            <p className="text-xs text-muted-foreground leading-relaxed">{block.tip}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* How often reminder */}
              <Card className="mb-6 bg-primary text-primary-foreground border-0">
                <CardContent className="py-5">
                  <p className="font-semibold mb-1">⏰ How often should you back up?</p>
                  <p className="text-sm opacity-90">
                    Photos: <strong>weekly</strong> or enable automatic backup ·
                    Documents: <strong>after every important change</strong> ·
                    Full device: <strong>monthly</strong> at minimum
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Button asChild className="flex-1 gap-2">
                  <Link to="/get-help">
                    <ArrowRight className="h-4 w-4" /> Need Help Setting It Up?
                  </Link>
                </Button>
              </div>

              <Button variant="ghost" onClick={reset} className="gap-2 text-muted-foreground w-full">
                <RotateCcw className="h-4 w-4" /> Start over
              </Button>
            </div>
          )}

        </>
      </main>
      <Footer />
    </>
  );
}
