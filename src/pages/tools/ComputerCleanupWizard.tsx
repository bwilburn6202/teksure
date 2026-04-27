import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, CheckCircle, Circle, ArrowLeft, ExternalLink, Zap, HardDrive, Shield, Sparkles } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  detail: string;
  category: 'storage' | 'startup' | 'security' | 'performance';
  timeMinutes: number;
  difficulty: 'easy' | 'moderate';
}

interface OS {
  id: string;
  name: string;
  intro: string;
  tasks: Task[];
  support: { label: string; url: string };
}

const WINDOWS_TASKS: Task[] = [
  { id: 'w1', title: 'Empty the Recycle Bin', category: 'storage', timeMinutes: 1, difficulty: 'easy', detail: 'Right-click the Recycle Bin on your desktop → "Empty Recycle Bin". Files you deleted are still taking space until you empty it.' },
  { id: 'w2', title: 'Run Storage Sense', category: 'storage', timeMinutes: 3, difficulty: 'easy', detail: 'Settings → System → Storage → turn on Storage Sense. Windows automatically cleans temp files, Recycle Bin, and old downloads.' },
  { id: 'w3', title: 'Clean up temporary files', category: 'storage', timeMinutes: 5, difficulty: 'easy', detail: 'Settings → System → Storage → Temporary files → check all boxes → Remove files. Often frees 5-20 GB on older PCs.' },
  { id: 'w4', title: 'Uninstall apps you don\'t use', category: 'storage', timeMinutes: 10, difficulty: 'easy', detail: 'Settings → Apps → Installed apps → sort by size. Remove anything you haven\'t used in 6+ months.' },
  { id: 'w5', title: 'Disable startup apps', category: 'startup', timeMinutes: 5, difficulty: 'easy', detail: 'Ctrl+Shift+Esc → Startup tab → disable anything not essential. Dramatically speeds up boot time.' },
  { id: 'w6', title: 'Install Windows updates', category: 'security', timeMinutes: 15, difficulty: 'easy', detail: 'Settings → Windows Update → Check for updates. Security patches, bug fixes. Restart when prompted.' },
  { id: 'w7', title: 'Update drivers (optional)', category: 'performance', timeMinutes: 10, difficulty: 'moderate', detail: 'Settings → Windows Update → Advanced options → Optional updates → Driver updates. Updates graphics, sound, Wi-Fi drivers.' },
  { id: 'w8', title: 'Run a virus scan', category: 'security', timeMinutes: 20, difficulty: 'easy', detail: 'Windows Security → Virus & threat protection → Quick scan. Microsoft Defender is built in and free.' },
  { id: 'w9', title: 'Check disk errors', category: 'performance', timeMinutes: 10, difficulty: 'moderate', detail: 'Open This PC → right-click C: drive → Properties → Tools → Error checking → Check. Fixes file system issues.' },
  { id: 'w10', title: 'Clear browser cache and cookies', category: 'storage', timeMinutes: 3, difficulty: 'easy', detail: 'In Chrome/Edge: Ctrl+Shift+Delete → select "Cached images" and "Cookies" → Clear. Fixes most weird browser issues.' },
  { id: 'w11', title: 'Empty Downloads folder', category: 'storage', timeMinutes: 5, difficulty: 'easy', detail: 'File Explorer → Downloads. Most files here were one-time installers. Delete anything you don\'t need.' },
  { id: 'w12', title: 'Defragment your hard drive (HDD only)', category: 'performance', timeMinutes: 30, difficulty: 'moderate', detail: 'Only for older HDDs — skip if you have an SSD (most PCs from 2018+). Start → type "defragment" → Optimize Drives.' },
];

const MAC_TASKS: Task[] = [
  { id: 'm1', title: 'Empty the Trash', category: 'storage', timeMinutes: 1, difficulty: 'easy', detail: 'Control-click Trash in Dock → Empty Trash. Deleted files keep taking space until you empty the Trash.' },
  { id: 'm2', title: 'Use Optimize Storage', category: 'storage', timeMinutes: 3, difficulty: 'easy', detail: 'Apple menu → System Settings → General → Storage. Click "Optimize" for recommendations like storing old messages in iCloud.' },
  { id: 'm3', title: 'Remove apps you don\'t use', category: 'storage', timeMinutes: 10, difficulty: 'easy', detail: 'Finder → Applications → drag unused apps to Trash. For clean removal: Settings → Storage → Applications → sort by size.' },
  { id: 'm4', title: 'Clear Downloads folder', category: 'storage', timeMinutes: 5, difficulty: 'easy', detail: 'Finder → Downloads. Sort by size. Delete installers, old zip files, and forgotten downloads.' },
  { id: 'm5', title: 'Disable Login Items', category: 'startup', timeMinutes: 5, difficulty: 'easy', detail: 'System Settings → General → Login Items. Remove anything you don\'t need at startup. Speeds up boot.' },
  { id: 'm6', title: 'Install macOS updates', category: 'security', timeMinutes: 20, difficulty: 'easy', detail: 'System Settings → General → Software Update. Apple releases security and performance fixes regularly.' },
  { id: 'm7', title: 'Clear Safari cache', category: 'storage', timeMinutes: 3, difficulty: 'easy', detail: 'Safari → Settings → Privacy → Manage Website Data → Remove All. Or Develop menu → Empty Caches.' },
  { id: 'm8', title: 'Clear Chrome/Firefox cache', category: 'storage', timeMinutes: 3, difficulty: 'easy', detail: 'In Chrome: Cmd+Shift+Delete → select time range → Clear data. Fixes most browser quirks.' },
  { id: 'm9', title: 'Remove large or old files', category: 'storage', timeMinutes: 15, difficulty: 'moderate', detail: 'Settings → Storage → Documents. Review "Large Files" and "Downloads". Old video files are usually the biggest.' },
  { id: 'm10', title: 'Check for malware', category: 'security', timeMinutes: 15, difficulty: 'moderate', detail: 'Free download: Malwarebytes for Mac. Mac has built-in protection but Malwarebytes catches more. Run once a month.' },
  { id: 'm11', title: 'Rebuild Spotlight index', category: 'performance', timeMinutes: 10, difficulty: 'moderate', detail: 'System Settings → Siri & Spotlight → Spotlight Privacy → add your hard drive, remove it. Fixes slow search.' },
  { id: 'm12', title: 'Restart your Mac', category: 'performance', timeMinutes: 3, difficulty: 'easy', detail: 'Apple menu → Restart. If you\'ve been using Sleep only for weeks, a full restart clears memory and fixes slowdowns.' },
];

const OSES: OS[] = [
  {
    id: 'windows',
    name: 'Windows 10 / 11',
    intro: 'A full cleanup takes about 45 minutes and can free up 10–50 GB of space while fixing common slowdowns.',
    tasks: WINDOWS_TASKS,
    support: { label: 'Microsoft Support', url: 'https://support.microsoft.com/en-us/windows' },
  },
  {
    id: 'mac',
    name: 'Mac (macOS)',
    intro: 'A full cleanup takes about 40 minutes and can free up 5–30 GB of space while addressing common slowdowns.',
    tasks: MAC_TASKS,
    support: { label: 'Apple Support', url: 'https://support.apple.com/mac' },
  },
];

const CATEGORY_META = {
  storage: { label: 'Free up space', icon: HardDrive, color: 'text-blue-600' },
  startup: { label: 'Faster startup', icon: Zap, color: 'text-amber-600' },
  security: { label: 'Security', icon: Shield, color: 'text-red-600' },
  performance: { label: 'Performance', icon: Sparkles, color: 'text-purple-600' },
};

export default function ComputerCleanupWizard() {
  const [selectedOS, setSelectedOS] = useState<OS | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<string>('all');

  const toggle = (id: string) => {
    const next = new Set(completed);
    if (next.has(id)) next.delete(id); else next.add(id);
    setCompleted(next);
  };

  const filteredTasks = selectedOS?.tasks.filter(t => filter === 'all' || t.category === filter) ?? [];
  const totalTime = selectedOS?.tasks.reduce((sum, t) => sum + t.timeMinutes, 0) ?? 0;
  const doneTime = selectedOS?.tasks.filter(t => completed.has(t.id)).reduce((sum, t) => sum + t.timeMinutes, 0) ?? 0;

  return (
    <>
      <SEOHead
        title="Computer Cleanup Wizard — Speed Up Your PC or Mac"
        description="Free tool that walks you through cleaning up your Windows PC or Mac. Disk cleanup, startup apps, security updates — step by step."
        path="/tools/computer-cleanup-wizard"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Performance</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Computer Cleanup Wizard</h1>
            <p className="text-muted-foreground max-w-2xl">
              Your computer feeling slow? Work through these checklist tasks to free up space, fix security issues, and speed things up. No downloads required — uses tools already on your computer.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          {!selectedOS ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">Which computer do you have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {OSES.map((os) => (
                  <Card key={os.id} onClick={() => { setSelectedOS(os); setCompleted(new Set()); }}
                    className="cursor-pointer hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 text-lg">{os.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{os.intro}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Badge variant="outline">{os.tasks.length} tasks</Badge>
                        <Badge variant="outline">~{Math.round(os.tasks.reduce((s, t) => s + t.timeMinutes, 0) / 60 * 10) / 10} hours total</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedOS(null)} className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />Pick a different OS
              </Button>

              <h2 className="text-2xl font-bold mb-2">{selectedOS.name}</h2>
              <p className="text-muted-foreground mb-6">{selectedOS.intro}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <Card><CardContent className="p-4">
                  <div className="text-2xl font-bold">{completed.size}/{selectedOS.tasks.length}</div>
                  <div className="text-xs text-muted-foreground">Tasks done</div>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <div className="text-2xl font-bold">{doneTime}</div>
                  <div className="text-xs text-muted-foreground">Minutes spent</div>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <div className="text-2xl font-bold">{totalTime - doneTime}</div>
                  <div className="text-xs text-muted-foreground">Minutes remaining</div>
                </CardContent></Card>
                <Card><CardContent className="p-4">
                  <div className="text-2xl font-bold">{Math.round((completed.size / selectedOS.tasks.length) * 100)}%</div>
                  <div className="text-xs text-muted-foreground">Progress</div>
                </CardContent></Card>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Button variant={filter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('all')}>All ({selectedOS.tasks.length})</Button>
                {Object.entries(CATEGORY_META).map(([key, meta]) => {
                  const count = selectedOS.tasks.filter(t => t.category === key).length;
                  return (
                    <Button key={key} variant={filter === key ? 'default' : 'outline'} size="sm" onClick={() => setFilter(key)}>
                      {meta.label} ({count})
                    </Button>
                  );
                })}
              </div>

              <div className="space-y-3 mb-8">
                {filteredTasks.map((task, i) => {
                  const done = completed.has(task.id);
                  const Meta = CATEGORY_META[task.category];
                  const Icon = Meta.icon;
                  return (
                    <Card key={task.id} onClick={() => toggle(task.id)}
                      className={`cursor-pointer transition-colors ${done ? 'border-green-600/40 bg-green-50/40 dark:bg-green-950/20' : 'hover:border-primary/40'}`}>
                      <CardContent className="p-4 flex items-start gap-3">
                        {done ? <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> : <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <Icon className={`w-4 h-4 ${Meta.color}`} />
                            <h4 className={`font-semibold ${done ? 'line-through text-muted-foreground' : ''}`}>{task.title}</h4>
                            <Badge variant="outline" className="text-xs">{task.timeMinutes} min</Badge>
                            <Badge variant="outline" className="text-xs capitalize">{task.difficulty}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{task.detail}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {completed.size === selectedOS.tasks.length && (
                <Card className="bg-green-50 dark:bg-green-950/30 border-green-600/40 mb-6">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-1 text-green-700 dark:text-green-400">All done!</h4>
                    <p className="text-sm text-muted-foreground">Your computer should feel noticeably faster. Restart it one more time to finalize everything.</p>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="font-semibold mb-1">Official help</h4>
                    <p className="text-sm text-muted-foreground">For specific error codes and advanced issues.</p>
                  </div>
                  <Button asChild>
                    <a href={selectedOS.support.url} target="_blank" rel="noopener noreferrer">
                      {selectedOS.support.label} <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
