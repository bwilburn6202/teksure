import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import {
  HardDrive, ChevronRight, Trash2, CheckCircle2,
  FolderOpen, Image, Video, Download, AppWindow,
  RotateCcw, Info,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

type DeviceOS = 'windows' | 'mac' | 'iphone' | 'android';

interface CleanupTask {
  id: string;
  title: string;
  description: string;
  estimatedSpaceMB: number;
  icon: typeof Trash2;
  steps: string[];
  difficulty: 'Easy' | 'Medium';
}

const taskSets: Record<DeviceOS, CleanupTask[]> = {
  windows: [
    {
      id: 'win1', title: 'Empty the Recycle Bin', difficulty: 'Easy',
      description: 'Deleted files stay in the Recycle Bin until you empty it. This is often the quickest win.',
      estimatedSpaceMB: 500,
      icon: Trash2,
      steps: [
        'Right-click on the Recycle Bin icon on your desktop.',
        'Click "Empty Recycle Bin".',
        'Click "Yes" to confirm.',
      ],
    },
    {
      id: 'win2', title: 'Clear your Downloads folder', difficulty: 'Easy',
      description: 'Most people never clean out downloads. Old installers and documents add up fast.',
      estimatedSpaceMB: 1500,
      icon: Download,
      steps: [
        'Open File Explorer (the folder icon on your taskbar).',
        'Click "Downloads" in the left sidebar.',
        'Press Ctrl+A to select all, then review — delete anything you no longer need.',
      ],
    },
    {
      id: 'win3', title: 'Run Disk Cleanup', difficulty: 'Easy',
      description: 'Windows has a built-in tool that safely removes temporary files and system junk.',
      estimatedSpaceMB: 2000,
      icon: HardDrive,
      steps: [
        'Click the Start menu and type "Disk Cleanup".',
        'Select your C: drive and click OK.',
        'Check all boxes shown, then click "OK" and "Delete Files".',
        'Optionally, click "Clean up system files" for even more space.',
      ],
    },
    {
      id: 'win4', title: 'Uninstall apps you no longer use', difficulty: 'Medium',
      description: 'Old programs take up gigabytes of space. Removing unused ones can free a lot.',
      estimatedSpaceMB: 5000,
      icon: AppWindow,
      steps: [
        'Click Start → Settings (gear icon) → Apps → Installed apps.',
        'Sort by "Size" to see the biggest apps.',
        'Click an app you no longer use, then click "Uninstall".',
      ],
    },
    {
      id: 'win5', title: 'Check for duplicate photos', difficulty: 'Medium',
      description: 'Duplicate and similar photos can pile up over time. Reviewing them frees space and declutters your library.',
      estimatedSpaceMB: 3000,
      icon: Image,
      steps: [
        'Open File Explorer and navigate to your Pictures folder.',
        'Look for folders with similar names or multiple copies of the same photo.',
        'Select duplicates and press Delete.',
      ],
    },
  ],
  mac: [
    {
      id: 'mac1', title: 'Empty the Trash', difficulty: 'Easy',
      description: 'Items in the Trash use real storage space until you permanently delete them.',
      estimatedSpaceMB: 500,
      icon: Trash2,
      steps: [
        'Click on the Trash icon in the Dock.',
        'Click "Empty" in the top-right corner of the Trash window.',
        'Click "Empty Trash" to confirm.',
      ],
    },
    {
      id: 'mac2', title: 'Use "Optimise Mac Storage"', difficulty: 'Easy',
      description: 'macOS can automatically move files to iCloud that you haven\'t opened recently, freeing local disk space.',
      estimatedSpaceMB: 10000,
      icon: HardDrive,
      steps: [
        'Click the Apple menu (top left) → System Settings → General → Storage.',
        'Click "Optimize…" next to "Optimise Mac Storage".',
        'Old movies and TV shows you\'ve watched will be stored in iCloud instead.',
      ],
    },
    {
      id: 'mac3', title: 'Clear your Downloads folder', difficulty: 'Easy',
      description: 'Your Downloads folder silently fills up with installers, PDFs, and zip files you\'ll never open again.',
      estimatedSpaceMB: 2000,
      icon: Download,
      steps: [
        'Open Finder → Go → Downloads.',
        'Press Cmd+A to select everything.',
        'Review files and delete anything you don\'t need (Cmd+Delete).',
      ],
    },
    {
      id: 'mac4', title: 'Remove unused apps', difficulty: 'Easy',
      description: 'Drag apps to the Trash or use Launchpad to delete Mac App Store apps cleanly.',
      estimatedSpaceMB: 5000,
      icon: AppWindow,
      steps: [
        'Go to Finder → Applications.',
        'Sort by Size (View → Show View Options → Sort by Size).',
        'Drag apps you no longer use to the Trash.',
      ],
    },
    {
      id: 'mac5', title: 'Delete large and duplicate files', difficulty: 'Medium',
      description: 'macOS shows you your largest files so you can decide what to cut.',
      estimatedSpaceMB: 4000,
      icon: FolderOpen,
      steps: [
        'Click Apple menu → System Settings → General → Storage.',
        'Click "Review Files" to see large and old files.',
        'Select files to delete and click "Delete".',
      ],
    },
  ],
  iphone: [
    {
      id: 'ios1', title: 'Offload unused apps', difficulty: 'Easy',
      description: 'Offloading removes the app but keeps your data — you can reinstall it any time for free.',
      estimatedSpaceMB: 3000,
      icon: AppWindow,
      steps: [
        'Open Settings → General → iPhone Storage.',
        'Scroll down to see apps listed by size.',
        'Tap an app you rarely use → "Offload App".',
      ],
    },
    {
      id: 'ios2', title: 'Delete old conversations in Messages', difficulty: 'Easy',
      description: 'Text message threads — especially with photos and videos — take up surprising amounts of space.',
      estimatedSpaceMB: 1000,
      icon: Trash2,
      steps: [
        'In Messages, swipe left on a conversation.',
        'Tap "Delete" to remove it.',
        'Alternatively: Settings → Messages → Keep Messages → change to "30 Days".',
      ],
    },
    {
      id: 'ios3', title: 'Review and delete photos & videos', difficulty: 'Medium',
      description: 'Blurry shots, duplicates, and screenshots pile up. The Photos app\'s Duplicates album makes this easy.',
      estimatedSpaceMB: 5000,
      icon: Image,
      steps: [
        'Open Photos → Albums → scroll down to "Utilities".',
        'Tap "Duplicates" to see and merge duplicate photos.',
        'Also review Screenshots and Selfies albums for quick deletions.',
        'After deleting, go to Albums → Recently Deleted → Delete All.',
      ],
    },
    {
      id: 'ios4', title: 'Enable iCloud Photos to save space', difficulty: 'Medium',
      description: 'With iCloud Photos on, your full-resolution photos live in iCloud and only optimised versions stay on your device.',
      estimatedSpaceMB: 8000,
      icon: HardDrive,
      steps: [
        'Open Settings → [Your Name] → iCloud → Photos.',
        'Turn on "iCloud Photos".',
        'Select "Optimise iPhone Storage".',
      ],
    },
    {
      id: 'ios5', title: 'Clear browser cache', difficulty: 'Easy',
      description: 'Safari stores website data that builds up over time.',
      estimatedSpaceMB: 500,
      icon: FolderOpen,
      steps: [
        'Open Settings → Safari.',
        'Scroll down and tap "Clear History and Website Data".',
        'Confirm by tapping "Clear".',
      ],
    },
  ],
  android: [
    {
      id: 'and1', title: 'Clear app caches', difficulty: 'Easy',
      description: 'Apps store temporary data that you don\'t need. Clearing caches frees space without deleting your data.',
      estimatedSpaceMB: 2000,
      icon: AppWindow,
      steps: [
        'Open Settings → Apps (or "Application Manager").',
        'Tap each app → Storage → "Clear Cache".',
        'Or use Settings → Storage → Cached Data → Clear.',
      ],
    },
    {
      id: 'and2', title: 'Move photos to Google Photos', difficulty: 'Easy',
      description: 'Google Photos offers free unlimited storage for high-quality photos, and can free space on your phone.',
      estimatedSpaceMB: 8000,
      icon: Image,
      steps: [
        'Install Google Photos from the Play Store if not already installed.',
        'Sign in and tap your profile photo → "Manage storage".',
        'Tap "Free up [X] GB" to remove photos already backed up to Google Photos.',
      ],
    },
    {
      id: 'and3', title: 'Delete downloaded videos and music', difficulty: 'Easy',
      description: 'Offline Netflix, Spotify, and YouTube downloads are often forgotten and take up several gigabytes.',
      estimatedSpaceMB: 5000,
      icon: Video,
      steps: [
        'In Netflix: tap Downloads → Delete individual titles.',
        'In Spotify: tap My Library → Downloads → remove albums.',
        'In YouTube: tap Library → Downloads → tap the X next to any video.',
      ],
    },
    {
      id: 'and4', title: 'Remove apps you don\'t use', difficulty: 'Easy',
      description: 'Unused apps often run background processes and take up space.',
      estimatedSpaceMB: 3000,
      icon: AppWindow,
      steps: [
        'Open Settings → Apps.',
        'Sort by Size (tap the filter/sort button).',
        'Tap any large app you don\'t need → Uninstall.',
      ],
    },
    {
      id: 'and5', title: 'Clear your Downloads folder', difficulty: 'Easy',
      description: 'The Files app shows all your downloaded content — a common storage culprit.',
      estimatedSpaceMB: 1500,
      icon: Download,
      steps: [
        'Open the Files app (or "My Files" on Samsung).',
        'Tap "Downloads".',
        'Select and delete files you no longer need.',
      ],
    },
  ],
};

const osOptions: { type: DeviceOS; label: string; emoji: string }[] = [
  { type: 'windows', label: 'Windows PC', emoji: '🪟' },
  { type: 'mac', label: 'Mac', emoji: '🍎' },
  { type: 'iphone', label: 'iPhone / iPad', emoji: '📱' },
  { type: 'android', label: 'Android Phone', emoji: '🤖' },
];

export default function StorageCleanup() {
  const [os, setOs] = useState<DeviceOS | null>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const tasks = os ? taskSets[os] : [];
  const completedCount = checked.size;
  const totalEstimatedMB = tasks.filter(t => checked.has(t.id))
    .reduce((sum, t) => sum + t.estimatedSpaceMB, 0);

  const formatSize = (mb: number) =>
    mb >= 1000 ? `~${(mb / 1000).toFixed(1)} GB` : `~${mb} MB`;

  const toggleCheck = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleReset = () => {
    setOs(null);
    setChecked(new Set());
    setExpandedId(null);
  };

  return (
    <>
      <SEOHead
        title="Storage Cleanup Wizard – TekSure Tools"
        description="Free up space on your Windows PC, Mac, iPhone, or Android phone with our step-by-step storage cleanup guide."
        path="/tools/storage-cleanup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-2xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">Storage Cleanup</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <HardDrive className="h-7 w-7" />
                <h1 className="text-3xl md:text-4xl font-bold">Storage Cleanup Wizard</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                Free up space on any device — step-by-step, no tech knowledge needed.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-2xl">
            <>
              {!os ? (
                <div key="os-select">
                  <p className="text-center text-muted-foreground mb-6 text-lg">Which device do you want to clean up?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {osOptions.map(opt => (
                      <button
                        key={opt.type}
                        onClick={() => setOs(opt.type)}
                        className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
                      >
                        <span className="text-3xl">{opt.emoji}</span>
                        <span className="font-medium text-sm">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={`tasks-${os}`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="font-bold text-lg">
                        {osOptions.find(o => o.type === os)?.emoji}{' '}
                        {osOptions.find(o => o.type === os)?.label} — Cleanup Checklist
                      </h2>
                      <p className="text-sm text-muted-foreground">Tick each step as you go</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground">
                      <RotateCcw className="h-3.5 w-3.5 mr-1" /> Change
                    </Button>
                  </div>

                  {/* Savings banner */}
                  {completedCount > 0 && (
                    <div
                      className="mb-4 p-3 rounded-lg bg-[hsl(var(--teksure-success)/0.1)] border border-[hsl(var(--teksure-success)/0.3)] flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[hsl(var(--teksure-success))] shrink-0" />
                      <p className="text-sm font-medium">
                        {completedCount} task{completedCount !== 1 ? 's' : ''} done — estimated saving:{' '}
                        <span className="text-[hsl(var(--teksure-success))]">{formatSize(totalEstimatedMB)}</span>
                      </p>
                    </div>
                  )}

                  {/* Tasks */}
                  <div className="space-y-3">
                    {tasks.map((task, i) => {
                      const Icon = task.icon;
                      const isChecked = checked.has(task.id);
                      const isExpanded = expandedId === task.id;
                      return (
                        <div
                          key={task.id}
                        >
                          <Card className={`border transition-all ${isChecked ? 'opacity-60 bg-muted/50' : 'bg-card'}`}>
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <Checkbox
                                  id={task.id}
                                  checked={isChecked}
                                  onCheckedChange={() => toggleCheck(task.id)}
                                  className="mt-1 shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 flex-wrap">
                                    <label htmlFor={task.id} className={`font-semibold text-sm cursor-pointer ${isChecked ? 'line-through text-muted-foreground' : ''}`}>
                                      <Icon className="inline h-4 w-4 mr-1.5 align-text-bottom" />
                                      {task.title}
                                    </label>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <Badge variant="outline" className={`text-xs ${task.difficulty === 'Easy' ? 'bg-green-50 text-green-600 border-green-200 dark:bg-green-950/20' : 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950/20'}`}>
                                        {task.difficulty}
                                      </Badge>
                                      <span className="text-xs text-muted-foreground">{formatSize(task.estimatedSpaceMB)}</span>
                                    </div>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-0.5">{task.description}</p>
                                  <button
                                    className="mt-2 text-xs text-primary hover:underline flex items-center gap-1"
                                    onClick={() => setExpandedId(isExpanded ? null : task.id)}
                                  >
                                    <Info className="h-3 w-3" />
                                    {isExpanded ? 'Hide steps' : 'Show me how'}
                                  </button>
                                  <>
                                    {isExpanded && (
                                      <ol
                                        className="mt-2 space-y-1.5 list-decimal list-inside"
                                      >
                                        {task.steps.map((step, si) => (
                                          <li key={si} className="text-xs text-foreground/80 leading-relaxed">{step}</li>
                                        ))}
                                      </ol>
                                    )}
                                  </>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>

                  {/* All done */}
                  {completedCount === tasks.length && (
                    <div className="mt-5">
                      <Card className="border-[hsl(var(--teksure-success)/0.4)] bg-[hsl(var(--teksure-success)/0.06)]">
                        <CardContent className="p-6 text-center">
                          <CheckCircle2 className="h-10 w-10 text-[hsl(var(--teksure-success))] mx-auto mb-2" />
                          <h3 className="font-bold text-lg mb-1">Cleanup complete! 🎉</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            You've freed up an estimated {formatSize(totalEstimatedMB)} of storage. Your device should feel snappier.
                          </p>
                          <Button asChild variant="outline">
                            <Link to="/tools">Back to Tools</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  )}
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
