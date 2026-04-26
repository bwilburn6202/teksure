import { useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Download, Share2, ArrowRight, Lock, Sprout, Shield, Wrench, Smartphone, Rocket, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCompletedGuides } from '@/lib/progress';

const paths: { name: string; icon: LucideIcon; required: number; color: string }[] = [
  { name: 'Beginner Basics', icon: Sprout, required: 5, color: 'from-green-400 to-emerald-600' },
  { name: 'Safety Essentials', icon: Shield, required: 5, color: 'from-blue-400 to-blue-600' },
  { name: 'Practical Skills', icon: Wrench, required: 5, color: 'from-orange-400 to-orange-600' },
  { name: 'Devices & Apps', icon: Smartphone, required: 5, color: 'from-purple-400 to-purple-600' },
  { name: 'Level Up', icon: Rocket, required: 10, color: 'from-pink-400 to-rose-600' },
];

export default function Certificate() {
  const certRef = useRef<HTMLDivElement>(null);
  const completed = getCompletedGuides();
  const total = completed.size;

  const earnedPaths = paths.filter(p => total >= p.required);
  const latestPath = earnedPaths[earnedPaths.length - 1];

  const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  function handlePrint() {
    if (!certRef.current) return;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(`<html><head><title>TekSure Certificate</title>
      <style>body{margin:0;font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f9f7f4;}
      .cert{width:700px;padding:60px;border:8px double #1a5f3f;text-align:center;background:white;}
      h1{font-size:2.5rem;color:#1a5f3f;margin-bottom:8px;}
      h2{font-size:1.8rem;margin:16px 0;}
      p{color:#555;font-size:1rem;margin:8px 0;}
      .icon-badge{font-size:1.5rem;margin:16px 0;width:80px;height:80px;border-radius:50%;background:#1a5f3f;color:white;display:inline-flex;align-items:center;justify-content:center;}
      .badge{font-size:1.2rem;font-weight:bold;color:#1a5f3f;border:2px solid #1a5f3f;display:inline-block;padding:8px 24px;border-radius:999px;margin:16px 0;}
      .footer{margin-top:40px;font-size:0.85rem;color:#999;}
      </style></head><body>
      <div class="cert">
        <p style="font-size:1.3rem;color:#888;letter-spacing:2px;text-transform:uppercase;">TekSure — Certificate of Achievement</p>
        <div class="icon-badge"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div>
        <h1>${latestPath?.name ?? 'Learning'} Certificate</h1>
        <p>This certificate is proudly awarded to</p>
        <h2>A TekSure Member</h2>
        <p>for completing <strong>${total} guide${total !== 1 ? 's' : ''}</strong> and demonstrating commitment to digital literacy.</p>
        <div class="badge">${total} Guides Completed</div>
        <div class="footer">Issued by TekSure · ${today}</div>
      </div></body></html>`);
    w.document.close();
    w.print();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Digital Skills Certificate — Track Your Progress | TekSure"
        description="Earn printable certificates as you complete TekSure guides. Track your learning journey and celebrate your tech achievements."
        path="/certificate"
      />
      <Navbar />
      <main className="flex-1 container max-w-3xl py-12">
        <div className="border-b border-border pb-10 mb-10">
          <div className="text-center">
            <div className="text-4xl mb-3"></div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">Tech Skills Certificates</h1>
            <p className="text-muted-foreground">Complete guides to unlock certificates — print and display them with pride.</p>
          </div>
        </div>

        {total === 0 ? (
          <Card className="rounded-2xl border border-border bg-card text-center py-12">
            <CardContent>
              <Trophy className="h-12 w-12 mx-auto text-muted-foreground opacity-30 mb-4" />
              <h2 className="text-xl font-semibold mb-2">No certificates yet</h2>
              <p className="text-muted-foreground mb-6">Complete guides to earn your first certificate. Start with Beginner Basics — only 5 guides to go.</p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl gap-2">
                <Link to="/my-path"><ArrowRight className="h-4 w-4" /> Start Learning</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Live certificate preview */}
            {latestPath && (
              <div ref={certRef} className="rounded-2xl border border-border bg-card p-10 text-center mb-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">TekSure · Certificate of Achievement</p>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"><latestPath.icon className="h-8 w-8 text-primary" /></div>
                <h2 className="text-2xl font-bold mb-1">{latestPath.name} Certificate</h2>
                <p className="text-muted-foreground mb-3">Awarded for completing</p>
                <div className="text-4xl font-black text-primary mb-1">{total}</div>
                <p className="text-muted-foreground mb-4">guides completed</p>
                <Badge variant="outline" className="text-sm px-4 py-1">Issued {today}</Badge>
              </div>
            )}

            <div className="flex gap-3 mb-10 justify-center flex-wrap">
              <Button onClick={handlePrint} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl gap-2">
                <Download className="h-4 w-4" /> Print / Save Certificate
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl gap-2" onClick={() => { if (navigator.share) navigator.share({ title: 'My TekSure Certificate', text: `I've completed ${total} tech guides on TekSure!`, url: window.location.href }); }}>
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </>
        )}

        {/* All paths */}
        <h2 className="text-xl font-bold mb-5 text-primary">All certificates</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {paths.map(p => {
            const earned = total >= p.required;
            return (
              <Card key={p.name} className={`rounded-2xl border border-border bg-card ${earned ? '' : 'opacity-60'}`}>
                <CardContent className="pt-5 pb-4 flex items-center gap-4">
                  <div className="rounded-xl w-12 h-12 bg-muted flex items-center justify-center shrink-0"><p.icon className="h-6 w-6 text-primary" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-semibold">{p.name}</p>
                      {earned ? <Badge variant="secondary" className="text-xs">Earned </Badge> : <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {earned ? `Unlocked — ${total}/${p.required} guides done` : `Complete ${p.required} guides to unlock (${total}/${p.required})`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
