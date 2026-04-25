import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Users, Tv, Video, Gamepad2, Laptop, ArrowRight, CheckCircle } from 'lucide-react';

const ACTIVITIES = [
  { id: 'email', label: 'Email and web browsing', icon: Laptop, mbps: 5 },
  { id: 'social', label: 'Social media (Facebook, Instagram)', icon: Laptop, mbps: 10 },
  { id: 'sdstream', label: 'Streaming video (standard quality)', icon: Tv, mbps: 10 },
  { id: 'hdstream', label: 'Streaming video (HD)', icon: Tv, mbps: 25 },
  { id: '4kstream', label: 'Streaming video (4K)', icon: Tv, mbps: 50 },
  { id: 'videocall', label: 'Video calls (Zoom, FaceTime)', icon: Video, mbps: 15 },
  { id: 'gaming', label: 'Online gaming', icon: Gamepad2, mbps: 25 },
  { id: 'wfh', label: 'Working from home', icon: Laptop, mbps: 25 },
];

export default function InternetSpeedAdvisor() {
  const [people, setPeople] = useState(2);
  const [selected, setSelected] = useState<Set<string>>(new Set(['email']));
  const toggle = (id: string) => setSelected(s => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const baseMbps = Array.from(selected).reduce((max, id) => { const a = ACTIVITIES.find(x => x.id === id); return Math.max(max, a?.mbps || 0); }, 0);
  const recommended = Math.max(25, Math.round(baseMbps * Math.max(1, people * 0.6)));
  const tier = recommended <= 50 ? 'Basic' : recommended <= 100 ? 'Standard' : recommended <= 300 ? 'Fast' : 'Ultra-fast';
  return (
    <>
      <SEOHead title="Internet Speed Advisor" description="Find out how much internet speed you actually need based on your household and activities." path="/tools/internet-speed-advisor" />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Wifi className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Internet Speed Advisor</h1><p className="text-muted-foreground">Find out how much speed you actually need</p></div>
        <Card className="mb-6"><CardContent className="p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Users className="h-5 w-5" /> How many people use the internet at home?</h3>
          <div className="flex items-center gap-4"><Button size="sm" variant="outline" onClick={() => setPeople(p => Math.max(1, p - 1))}>-</Button><span className="text-2xl font-bold w-8 text-center">{people}</span><Button size="sm" variant="outline" onClick={() => setPeople(p => Math.min(10, p + 1))}>+</Button></div>
        </CardContent></Card>
        <Card className="mb-6"><CardContent className="p-6">
          <h3 className="font-semibold mb-3">What do you use the internet for?</h3>
          <div className="grid gap-2">{ACTIVITIES.map(a => (
            <button key={a.id} onClick={() => toggle(a.id)} className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${selected.has(a.id) ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'}`}>
              {selected.has(a.id) ? <CheckCircle className="h-5 w-5 text-primary shrink-0" /> : <a.icon className="h-5 w-5 text-muted-foreground shrink-0" />}
              <span className="text-sm font-medium">{a.label}</span>
            </button>
          ))}</div>
        </CardContent></Card>
        <Card className="border-primary/40"><CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">Recommended speed for your household</p>
          <p className="text-4xl font-bold text-primary mb-1">{recommended} Mbps</p>
          <Badge variant="outline" className="mb-4">{tier} plan</Badge>
          <p className="text-sm text-muted-foreground">This is the download speed you should look for when comparing internet plans. Most providers like AT&T, Xfinity, Spectrum, and Verizon offer plans in this range.</p>
        </CardContent></Card>
      </div></main>
    </>
  );
}
