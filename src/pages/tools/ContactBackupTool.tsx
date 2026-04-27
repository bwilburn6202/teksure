import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Contact, Smartphone, CheckCircle, ChevronDown, ChevronUp, AlertTriangle, ExternalLink, Copy, Users, RefreshCw } from 'lucide-react';

type Device = 'iphone' | 'android' | null;

interface Step {
  title: string;
  detail: string;
}

const iphoneBackupSteps: Step[] = [
  {
    title: 'Open Settings',
    detail: 'Find the gray gear icon on your home screen and tap it.',
  },
  {
    title: 'Tap your name at the top',
    detail: 'At the very top of the Settings screen, you will see your name and Apple ID. Tap on it.',
  },
  {
    title: 'Tap "iCloud"',
    detail: 'In the Apple ID menu, find "iCloud" and tap on it.',
  },
  {
    title: 'Turn on Contacts',
    detail: 'Scroll down to "Contacts" and make sure the toggle is turned on (green). If it asks to merge, tap "Merge" to combine contacts from your phone with iCloud.',
  },
  {
    title: 'Wait for sync',
    detail: 'Your contacts will now automatically sync to iCloud. This may take a few minutes depending on how many contacts you have.',
  },
  {
    title: 'Verify on icloud.com',
    detail: 'On a computer, go to icloud.com and sign in with your Apple ID. Click on "Contacts" to see all your backed-up contacts.',
  },
];

const iphoneExportSteps: Step[] = [
  {
    title: 'Go to icloud.com/contacts on a computer',
    detail: 'Open a web browser on your computer and go to icloud.com. Sign in with your Apple ID and click "Contacts."',
  },
  {
    title: 'Select all contacts',
    detail: 'Click the gear icon at the bottom left corner, then click "Select All."',
  },
  {
    title: 'Export as vCard',
    detail: 'Click the gear icon again and choose "Export vCard." A .vcf file will download to your computer.',
  },
  {
    title: 'Save the file',
    detail: 'Keep this .vcf file in a safe place (like your Documents folder or a USB drive). You can import it into any phone or email service later.',
  },
];

const androidBackupSteps: Step[] = [
  {
    title: 'Open Settings',
    detail: 'Find the Settings app (gear icon) on your home screen or app drawer and tap it.',
  },
  {
    title: 'Tap "Accounts" or "Users & accounts"',
    detail: 'Scroll down in Settings until you find "Accounts" (on some phones it may say "Users & accounts" or "Passwords & accounts").',
  },
  {
    title: 'Tap your Google account',
    detail: 'Find your Google account (your Gmail address) and tap on it.',
  },
  {
    title: 'Tap "Account sync" or "Sync account"',
    detail: 'Look for a sync option and tap it to see what is being synced.',
  },
  {
    title: 'Turn on Contacts sync',
    detail: 'Make sure "Contacts" is turned on. If it is off, tap the toggle to turn it on. Your contacts will start syncing to Google.',
  },
  {
    title: 'Verify on contacts.google.com',
    detail: 'On a computer, go to contacts.google.com and sign in with the same Google account. You should see all your contacts there.',
  },
];

const androidExportSteps: Step[] = [
  {
    title: 'Go to contacts.google.com on a computer',
    detail: 'Open a web browser and go to contacts.google.com. Sign in with your Google account.',
  },
  {
    title: 'Click "Export" in the left sidebar',
    detail: 'On the left side menu, click "Export." If you do not see it, click the three-line menu icon first.',
  },
  {
    title: 'Choose export format',
    detail: 'Select "Google CSV" (works best with Google) or "vCard" (works with most services). Then click "Export."',
  },
  {
    title: 'Save the file',
    detail: 'The file will download to your computer. Save it somewhere safe as a backup.',
  },
];

const duplicateTips = [
  'On iPhone: Open the Contacts app and look for "Duplicates Found" at the top. Tap it to review and merge duplicate contacts.',
  'On Android: Go to contacts.google.com, click "Merge & fix" in the left sidebar, and follow the prompts to merge duplicates.',
  'Before merging, review each suggested merge carefully — sometimes two different people have the same name.',
  'After merging, scroll through your contacts to make sure nothing was combined incorrectly.',
];

const emergencyRecoverySteps = [
  {
    title: 'iPhone — Recover from iCloud',
    steps: [
      'Go to Settings, tap your name, then iCloud, then Contacts.',
      'Turn Contacts off. When asked, choose "Keep on My iPhone."',
      'Turn Contacts back on. Choose "Merge" when asked.',
      'Your contacts from iCloud will be restored to your phone.',
    ],
  },
  {
    title: 'Android — Recover from Google',
    steps: [
      'Go to contacts.google.com on a computer.',
      'Click the gear icon in the top right and choose "Undo changes."',
      'Choose how far back you want to restore (10 minutes, 1 hour, 1 day, 1 week, or custom).',
      'Click "Undo" to restore your contacts to that point in time.',
    ],
  },
];

export default function ContactBackupTool() {
  const [selectedDevice, setSelectedDevice] = useState<Device>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [showExport, setShowExport] = useState(false);
  const [showDuplicates, setShowDuplicates] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  const toggleStep = (key: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const backupSteps = selectedDevice === 'iphone' ? iphoneBackupSteps : androidBackupSteps;
  const exportSteps = selectedDevice === 'iphone' ? iphoneExportSteps : androidExportSteps;
  const totalSteps = backupSteps.length;
  const completedCount = Array.from(completedSteps).filter(k => k.startsWith('backup-')).length;
  const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  const verifyUrl = selectedDevice === 'iphone' ? 'https://www.icloud.com/contacts' : 'https://contacts.google.com';
  const verifyLabel = selectedDevice === 'iphone' ? 'icloud.com/contacts' : 'contacts.google.com';

  return (
    <>
      <SEOHead
        title="Contact Backup Tool — Back Up Your Phone Contacts | TekSure"
        description="Step-by-step guide to back up and export your phone contacts on iPhone and Android. Includes tips for merging duplicates and recovering lost contacts."
        path="/tools/contact-backup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Contact Backup Tool' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center flex-shrink-0">
                <Contact className="h-6 w-6 text-cyan-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Contact Backup Tool</h1>
            <p className="text-muted-foreground text-lg">
              Follow these steps to back up, export, and protect your phone contacts so you never lose them.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Device selection */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Select Your Device</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={selectedDevice === 'iphone' ? 'default' : 'outline'}
                  onClick={() => { setSelectedDevice('iphone'); setCompletedSteps(new Set()); }}
                  className="h-auto py-4"
                  aria-pressed={selectedDevice === 'iphone'}
                >
                  <Smartphone className="h-5 w-5 mr-2" aria-hidden="true" />
                  iPhone / iPad
                </Button>
                <Button
                  variant={selectedDevice === 'android' ? 'default' : 'outline'}
                  onClick={() => { setSelectedDevice('android'); setCompletedSteps(new Set()); }}
                  className="h-auto py-4"
                  aria-pressed={selectedDevice === 'android'}
                >
                  <Smartphone className="h-5 w-5 mr-2" aria-hidden="true" />
                  Android
                </Button>
              </div>
            </CardContent>
          </Card>

          {selectedDevice && (
            <>
              {/* Progress */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Backup progress</span>
                    <span className="text-muted-foreground">{completedCount} of {totalSteps} steps done</span>
                  </div>
                  <Progress value={progressPercent} className="h-3" aria-label={`${progressPercent}% complete`} />
                </CardContent>
              </Card>

              {/* Backup steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedDevice === 'iphone' ? 'Back Up to iCloud' : 'Back Up to Google'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {backupSteps.map((step, i) => {
                    const key = `backup-${i}`;
                    return (
                      <label key={i} className="flex items-start gap-3 text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <input
                          type="checkbox"
                          checked={completedSteps.has(key)}
                          onChange={() => toggleStep(key)}
                          className="mt-0.5 h-4 w-4 rounded"
                          aria-label={`Mark "${step.title}" as done`}
                        />
                        <div className={completedSteps.has(key) ? 'text-muted-foreground' : ''}>
                          <p className={`font-medium ${completedSteps.has(key) ? 'line-through' : ''}`}>
                            Step {i + 1}: {step.title}
                          </p>
                          <p className="text-muted-foreground mt-0.5">{step.detail}</p>
                        </div>
                      </label>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Verify backup */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-sm">Verify Your Backup</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Visit {verifyLabel} on a computer to confirm all your contacts are there.
                        </p>
                      </div>
                    </div>
                    <a
                      href={verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline flex-shrink-0"
                      aria-label={`Visit ${verifyLabel} (opens in a new tab)`}
                    >
                      Open <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Export contacts */}
              <div className="rounded-2xl border p-6">
                <button onClick={() => setShowExport(!showExport)} className="flex items-center gap-3 w-full text-left">
                  <Copy className="h-5 w-5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-sm flex-1">Export Contacts to a File</span>
                  {showExport ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {showExport && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-muted-foreground">Save a copy of your contacts as a file that you can store on your computer or a USB drive.</p>
                    {exportSteps.map((step, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                        <div>
                          <p className="font-medium">{step.title}</p>
                          <p className="text-muted-foreground">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Merge duplicates */}
              <div className="rounded-2xl border p-6">
                <button onClick={() => setShowDuplicates(!showDuplicates)} className="flex items-center gap-3 w-full text-left">
                  <Users className="h-5 w-5 text-purple-500 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-sm flex-1">Fix Duplicate Contacts</span>
                  {showDuplicates ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {showDuplicates && (
                  <ul className="mt-4 space-y-2">
                    {duplicateTips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Emergency recovery */}
              <div className="rounded-2xl border p-6">
                <button onClick={() => setShowEmergency(!showEmergency)} className="flex items-center gap-3 w-full text-left">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-sm flex-1">I Lost My Contacts — Emergency Recovery</span>
                  {showEmergency ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {showEmergency && (
                  <div className="mt-4 space-y-4">
                    {emergencyRecoverySteps.map((section, si) => (
                      <div key={si}>
                        <p className="font-medium text-sm flex items-center gap-2">
                          <RefreshCw className="h-4 w-4 text-red-500" aria-hidden="true" /> {section.title}
                        </p>
                        <ol className="mt-2 space-y-1 pl-6">
                          {section.steps.map((step, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="font-medium flex-shrink-0">{i + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
