import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, CheckCircle, Circle, RotateCcw } from 'lucide-react';

type DeviceType = 'windows' | 'mac' | null;
const STEPS: Record<string, { title: string; windows: string; mac: string }[]> = {
  security: [
    { title: 'Create a strong login password', windows: 'Settings → Accounts → Sign-in options → Password → Change', mac: 'System Settings → Users & Groups → Change Password' },
    { title: 'Enable automatic updates', windows: 'Settings → Windows Update → Advanced options → turn on everything', mac: 'System Settings → General → Software Update → Automatic Updates' },
    { title: 'Turn on the built-in firewall', windows: 'Settings → Privacy & Security → Windows Security → Firewall', mac: 'System Settings → Network → Firewall → Turn On' },
    { title: 'Set up antivirus protection', windows: 'Windows Security (Defender) is already built in and active', mac: 'macOS has XProtect built in. No extra antivirus needed for most people.' },
  ],
  backup: [
    { title: 'Set up automatic backups', windows: 'Settings → System → Storage → Backup options → OneDrive or external drive', mac: 'System Settings → General → Time Machine → Set Up' },
    { title: 'Sign in to your cloud account', windows: 'Sign in to your Microsoft account in Settings → Accounts to sync settings and files via OneDrive', mac: 'System Settings → Apple Account → iCloud → turn on what you want backed up' },
  ],
  comfort: [
    { title: 'Adjust text size for comfort', windows: 'Settings → Accessibility → Text size → drag slider', mac: 'System Settings → Accessibility → Display → Text Size' },
    { title: 'Set up your email', windows: 'Open the Mail app → Add Account → follow the steps for Gmail, Outlook, or Yahoo', mac: 'Open Mail → Add Account → choose your provider and sign in' },
    { title: 'Install a web browser you prefer', windows: 'Edge is pre-installed. For Chrome: visit google.com/chrome. For Firefox: mozilla.org', mac: 'Safari is pre-installed. For Chrome: visit google.com/chrome' },
  ],
};

export default function DeviceSetupChecklist() {
  const [device, setDevice] = useState<DeviceType>(null);
  const [done, setDone] = useState<Set<string>>(new Set());
  const allSteps = Object.values(STEPS).flat();
  const toggle = (title: string) => setDone(s => { const n = new Set(s); if (n.has(title)) n.delete(title); else n.add(title); return n; });
  const progress = Math.round((done.size / allSteps.length) * 100);
  return (
    <>
      <SEOHead title="New Computer Setup Checklist" description="Step-by-step checklist for setting up a new Windows PC or Mac the right way." path="/tools/device-setup-checklist" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Monitor className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">New Computer Setup Checklist</h1><p className="text-muted-foreground">Set up your new computer the right way</p></div>
        {!device ? (
          <div className="flex gap-4 justify-center"><Button size="lg" onClick={() => setDevice('windows')}>Windows PC</Button><Button size="lg" variant="outline" onClick={() => setDevice('mac')}>Mac</Button></div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4"><span className="text-sm font-medium">{done.size}/{allSteps.length} ({progress}%)</span><Button size="sm" variant="ghost" onClick={() => { setDevice(null); setDone(new Set()); }} className="gap-1 text-xs"><RotateCcw className="h-3 w-3" /> Start Over</Button></div>
            <div className="h-2 rounded-full bg-muted mb-6 overflow-hidden"><div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} /></div>
            {Object.entries(STEPS).map(([section, steps]) => (
              <div key={section} className="mb-6"><h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{section === 'security' ? 'Security' : section === 'backup' ? 'Backup & Sync' : 'Comfort & Essentials'}</h3>
                <div className="space-y-2">{steps.map(step => (
                  <Card key={step.title} className={`cursor-pointer ${done.has(step.title) ? 'border-green-500/30 bg-green-50/50 dark:bg-green-950/20' : ''}`} onClick={() => toggle(step.title)}>
                    <CardContent className="p-4 flex gap-3"><div className="mt-0.5">{done.has(step.title) ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Circle className="h-5 w-5 text-muted-foreground" />}</div><div><h4 className={`font-medium text-sm ${done.has(step.title) ? 'line-through text-muted-foreground' : ''}`}>{step.title}</h4><p className="text-xs text-muted-foreground mt-1">{device === 'windows' ? step.windows : step.mac}</p></div></CardContent>
                  </Card>
                ))}</div>
              </div>
            ))}
          </div>
        )}
      </div></main>
      <Footer />
    </>
  );
}
