import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, CheckCircle, Circle, RotateCcw, Sparkles } from 'lucide-react';

const TASKS = [
  { id: 'photos', title: 'Delete blurry and duplicate photos', tip: 'Open your Photos app. Sort by recent. Delete screenshots you no longer need, blurry photos, and duplicates. On iPhone, tap "Duplicates" in the Albums tab.' },
  { id: 'apps', title: 'Uninstall apps you have not used in 3 months', tip: 'On iPhone: Settings → General → iPhone Storage. On Android: Settings → Apps. Delete apps you do not recognize or have not opened recently.' },
  { id: 'downloads', title: 'Clear your Downloads folder', tip: 'On your computer, open the Downloads folder. Sort by date. Delete files older than 30 days that you no longer need.' },
  { id: 'email', title: 'Unsubscribe from 5 email newsletters', tip: 'Search your inbox for "unsubscribe." Open old newsletters and click the unsubscribe link at the bottom. This reduces inbox clutter significantly.' },
  { id: 'browser', title: 'Clear browser cache and cookies', tip: 'Chrome: Settings → Privacy and Security → Clear Browsing Data. Safari: Settings → Safari → Clear History and Website Data.' },
  { id: 'passwords', title: 'Update 3 weak or reused passwords', tip: 'Check Settings → Passwords (iPhone) or passwords.google.com (Android/Chrome) for reused or compromised passwords. Update the 3 most important ones.' },
  { id: 'contacts', title: 'Remove duplicate or outdated contacts', tip: 'Open your Contacts app. Look for duplicates (many phones have a "Merge Duplicates" option). Remove contacts for people or businesses you no longer interact with.' },
  { id: 'storage', title: 'Check cloud storage usage', tip: 'iCloud: Settings → [your name] → iCloud → Manage Storage. Google: drive.google.com/settings. Delete large files you no longer need.' },
  { id: 'notifications', title: 'Turn off unnecessary notifications', tip: 'Settings → Notifications. Go through each app and turn off notifications for apps that are not important. This reduces distractions and saves battery.' },
  { id: 'privacy', title: 'Review app permissions', tip: 'Settings → Privacy (iPhone) or Settings → Apps → Permissions (Android). Check which apps have access to your location, camera, and microphone. Remove access from apps that do not need it.' },
];

export default function DigitalCleanup() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const toggle = (id: string) => setDone(s => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const progress = Math.round((done.size / TASKS.length) * 100);
  return (
    <>
      <SEOHead title="Digital Cleanup Checklist" description="Clean up your phone, computer, and online accounts in 30 minutes. Free up space and improve performance." path="/tools/digital-cleanup" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Trash2 className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Digital Cleanup Checklist</h1><p className="text-muted-foreground">Clean up your devices in 30 minutes</p></div>
        <div className="flex items-center justify-between mb-4"><span className="text-sm font-medium">{done.size}/{TASKS.length} tasks done</span>{done.size > 0 && <Button size="sm" variant="ghost" onClick={() => setDone(new Set())} className="gap-1 text-xs"><RotateCcw className="h-3 w-3" /> Reset</Button>}</div>
        <div className="h-2 rounded-full bg-muted mb-6 overflow-hidden"><div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} /></div>
        <div className="space-y-3">{TASKS.map(task => (
          <Card key={task.id} className={`cursor-pointer transition-all ${done.has(task.id) ? 'border-green-500/30 bg-green-50/50 dark:bg-green-950/20' : ''}`} onClick={() => toggle(task.id)}>
            <CardContent className="p-4 flex gap-3"><div className="mt-0.5">{done.has(task.id) ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Circle className="h-5 w-5 text-muted-foreground" />}</div><div><h3 className={`font-medium text-sm ${done.has(task.id) ? 'line-through text-muted-foreground' : ''}`}>{task.title}</h3><p className="text-xs text-muted-foreground mt-1">{task.tip}</p></div></CardContent>
          </Card>
        ))}</div>
        {done.size === TASKS.length && <div className="text-center mt-8 p-6 rounded-xl bg-green-500/10 border border-green-500/30"><Sparkles className="h-8 w-8 text-green-500 mx-auto mb-2" /><h2 className="text-lg font-bold">All clean!</h2><p className="text-sm text-muted-foreground">Your digital life is freshly organized.</p></div>}
      </div></main>
      <Footer />
    </>
  );
}
