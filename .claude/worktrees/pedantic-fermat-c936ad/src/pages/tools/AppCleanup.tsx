import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Trash2, Search, CheckCircle, Circle, Clock, Shield, Battery, HardDrive, RotateCcw } from 'lucide-react';

interface AppEntry { name: string; category: string; lastUsed: string; size: string; risk: 'safe' | 'review' | 'remove'; reason: string; }

const COMMON_APPS: AppEntry[] = [
  { name: 'Facebook', category: 'Social', lastUsed: 'Daily', size: '400 MB', risk: 'safe', reason: 'Actively used — but check permissions in Settings → Privacy.' },
  { name: 'Candy Crush Saga', category: 'Games', lastUsed: '6+ months ago', size: '250 MB', risk: 'remove', reason: 'Not used in months. Games are often the biggest space wasters.' },
  { name: 'Weather Channel', category: 'Weather', lastUsed: 'Weekly', size: '120 MB', risk: 'review', reason: 'Your phone has a built-in weather app. Consider using that instead.' },
  { name: 'Flashlight App', category: 'Utility', lastUsed: 'Rarely', size: '50 MB', risk: 'remove', reason: 'Your phone has a built-in flashlight in the control center. No need for a separate app.' },
  { name: 'QR Scanner Pro', category: 'Utility', lastUsed: 'Rarely', size: '80 MB', risk: 'remove', reason: 'Your phone camera app can scan QR codes natively. No extra app needed.' },
  { name: 'Battery Saver Plus', category: 'Utility', lastUsed: 'Background', size: '60 MB', risk: 'remove', reason: 'Third-party battery savers often drain more battery than they save. Use built-in settings instead.' },
  { name: 'Clean Master', category: 'Utility', lastUsed: 'Background', size: '150 MB', risk: 'remove', reason: 'Phone "cleaner" apps are rarely needed and may contain ads or tracking. Your phone manages memory automatically.' },
  { name: 'Instagram', category: 'Social', lastUsed: 'Daily', size: '350 MB', risk: 'safe', reason: 'Actively used. Clear cache periodically: Settings → Storage → Clear Cache.' },
  { name: 'TikTok', category: 'Social', lastUsed: 'Weekly', size: '500 MB', risk: 'review', reason: 'Very large app. Clear cache regularly and review screen time settings.' },
  { name: 'Amazon Shopping', category: 'Shopping', lastUsed: 'Monthly', size: '200 MB', risk: 'safe', reason: 'Useful if you shop on Amazon. You can also use the website instead.' },
  { name: 'Uber', category: 'Transport', lastUsed: 'Monthly', size: '300 MB', risk: 'safe', reason: 'Keep if you use rideshare. Delete if you never use it.' },
  { name: 'Old Banking App', category: 'Finance', lastUsed: 'Never', size: '100 MB', risk: 'remove', reason: 'If you switched banks, delete the old app. Old banking apps may still have cached login data.' },
  { name: 'Coupon Clipper', category: 'Shopping', lastUsed: '3+ months ago', size: '90 MB', risk: 'remove', reason: 'Not used recently. Many coupon apps track your location and shopping habits.' },
  { name: 'Photo Editor Pro', category: 'Photo', lastUsed: 'Rarely', size: '200 MB', risk: 'review', reason: 'Your phone has built-in photo editing. Consider if you need a separate app.' },
  { name: 'VPN Free Unlimited', category: 'Security', lastUsed: 'Background', size: '80 MB', risk: 'remove', reason: 'Free VPNs often sell your data. If you need a VPN, use a reputable paid one.' },
];

export default function AppCleanup() {
  const [search, setSearch] = useState('');
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const toggle = (name: string) => setMarked(s => { const n = new Set(s); if (n.has(name)) n.delete(name); else n.add(name); return n; });

  const filtered = useMemo(() => {
    if (!search.trim()) return COMMON_APPS;
    return COMMON_APPS.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const spaceSaved = useMemo(() => {
    let mb = 0;
    marked.forEach(name => { const app = COMMON_APPS.find(a => a.name === name); if (app) mb += parseInt(app.size); });
    return mb >= 1000 ? `${(mb / 1000).toFixed(1)} GB` : `${mb} MB`;
  }, [marked]);

  const riskColor = { safe: 'text-green-500', review: 'text-amber-500', remove: 'text-red-500' };
  const riskLabel = { safe: 'Keep', review: 'Review', remove: 'Remove' };
  const riskBg = { safe: 'bg-green-500/10 border-green-500/20', review: 'bg-amber-500/10 border-amber-500/20', remove: 'bg-red-500/10 border-red-500/20' };

  return (
    <>
      <SEOHead title="App Cleanup Advisor" description="Find apps you do not need and free up storage on your phone. Get personalized recommendations for which apps to keep, review, or remove." path="/tools/app-cleanup" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-3xl py-12 px-4">
        <div className="text-center mb-10"><Trash2 className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">App Cleanup Advisor</h1><p className="text-muted-foreground max-w-lg mx-auto">Find apps wasting space on your phone and get recommendations for which to keep, review, or remove.</p></div>

        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search apps..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" /></div>
          {marked.size > 0 && <Button variant="ghost" size="sm" onClick={() => setMarked(new Set())} className="gap-1 text-xs"><RotateCcw className="h-3 w-3" /> Reset</Button>}
        </div>

        {marked.size > 0 && (
          <Card className="mb-6 border-primary/40"><CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3"><HardDrive className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium">{marked.size} app{marked.size !== 1 ? 's' : ''} marked for removal</p><p className="text-xs text-muted-foreground">You could save approximately <strong>{spaceSaved}</strong> of storage</p></div></div>
          </CardContent></Card>
        )}

        <div className="space-y-2">{filtered.map(app => (
          <Card key={app.name} className={`cursor-pointer transition-all ${marked.has(app.name) ? 'border-red-500/30 bg-red-50/50 dark:bg-red-950/20' : ''}`} onClick={() => toggle(app.name)}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="mt-0.5">{marked.has(app.name) ? <CheckCircle className="h-5 w-5 text-red-500" /> : <Circle className="h-5 w-5 text-muted-foreground" />}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1"><h3 className={`font-medium text-sm ${marked.has(app.name) ? 'line-through text-muted-foreground' : ''}`}>{app.name}</h3><Badge variant="outline" className="text-xs">{app.category}</Badge><Badge variant="secondary" className={`text-xs border ${riskBg[app.risk]}`}><span className={riskColor[app.risk]}>{riskLabel[app.risk]}</span></Badge></div>
                <p className="text-xs text-muted-foreground">{app.reason}</p>
              </div>
              <div className="text-right shrink-0"><p className="text-sm font-medium">{app.size}</p><p className="text-xs text-muted-foreground flex items-center gap-1 justify-end"><Clock className="h-3 w-3" />{app.lastUsed}</p></div>
            </CardContent>
          </Card>
        ))}</div>

        <Card className="mt-8"><CardContent className="p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> How to delete apps</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-medium mb-1">iPhone / iPad</h4><p className="text-xs text-muted-foreground">Press and hold the app icon until it wiggles. Tap the minus (-) or X button, then tap "Delete App."</p></div>
            <div className="p-3 rounded-lg bg-muted/50"><h4 className="font-medium mb-1">Android</h4><p className="text-xs text-muted-foreground">Press and hold the app icon. Drag it to "Uninstall" at the top, or tap the info icon and select "Uninstall."</p></div>
          </div>
        </CardContent></Card>
      </div></main>
      <Footer />
    </>
  );
}
