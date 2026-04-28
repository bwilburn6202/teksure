import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Clock, Check, AlertTriangle, ChevronRight } from 'lucide-react';

type UpdateType = 'os' | 'app' | 'browser' | 'firmware';
type Recency = 'just-released' | 'few-weeks' | 'older' | 'unknown';

interface Verdict {
  level: 'install-now' | 'wait-week' | 'install-asap' | 'caution';
  badge: string;
  title: string;
  reason: string;
  steps: string[];
}

function decide(type: UpdateType, recency: Recency, isSecurity: boolean, hasBackup: boolean): Verdict {
  if (isSecurity) {
    return {
      level: 'install-asap',
      badge: 'Install today',
      title: 'Install this update right away',
      reason: 'Security updates close holes that scammers and viruses use. The longer you wait, the longer you are exposed. They are designed to be safe — Apple, Microsoft, and Google test these heavily before release.',
      steps: hasBackup
        ? [
            'Plug in your device or laptop charger.',
            'Connect to Wi-Fi.',
            'Tap install. Walk away — most updates take 15 to 45 minutes.',
          ]
        : [
            'Run a quick backup first (it takes 5 minutes).',
            'Plug in your device or laptop charger.',
            'Connect to Wi-Fi.',
            'Tap install.',
          ],
    };
  }

  if (type === 'os' && recency === 'just-released') {
    return {
      level: 'wait-week',
      badge: 'Wait 1–2 weeks',
      title: 'Worth a wait — but only a short one',
      reason: 'Brand-new OS releases sometimes have small bugs that get cleaned up in a week or two. If your phone is working fine, give the dust a chance to settle.',
      steps: [
        'Set a calendar reminder for 10 days from today.',
        'Read user reviews after a week — search "iOS 18 problems" or "Android 15 issues".',
        'If reviews are calm, install. If they are loud, wait another week.',
      ],
    };
  }

  if (type === 'firmware') {
    return {
      level: 'caution',
      badge: 'Install carefully',
      title: 'Worth installing — but plug it in first',
      reason: 'Firmware updates are the deeper kind that touch printers, routers, smart TVs, and the like. They almost always go fine, but a power loss during one can brick the device.',
      steps: [
        'Plug the device into power. Do not run on battery.',
        'Make sure your internet stays on through the update.',
        'Do not unplug or restart until it tells you the update is complete.',
      ],
    };
  }

  if (recency === 'older' || type === 'app' || type === 'browser') {
    return {
      level: 'install-now',
      badge: 'Install now',
      title: 'Go ahead and install',
      reason: 'App and browser updates are routine — quick to install, easy to roll back if anything looks off. Older OS updates have been out long enough that any issues are known.',
      steps: [
        'Plug in if you can.',
        'Tap install. Apps usually finish in under a minute.',
        'Restart the app once it is done.',
      ],
    };
  }

  return {
    level: 'install-now',
    badge: 'Install now',
    title: 'Go ahead and install',
    reason: 'No special concerns flagged. Standard update.',
    steps: [
      'Plug in if you can.',
      'Tap install.',
      'Restart when it asks.',
    ],
  };
}

export default function UpdateDecisionHelper() {
  const [type, setType] = useState<UpdateType | null>(null);
  const [recency, setRecency] = useState<Recency | null>(null);
  const [isSecurity, setIsSecurity] = useState<boolean | null>(null);
  const [hasBackup, setHasBackup] = useState<boolean | null>(null);

  const verdict = (type && recency && isSecurity !== null && hasBackup !== null)
    ? decide(type, recency, isSecurity, hasBackup)
    : null;

  const reset = () => {
    setType(null); setRecency(null); setIsSecurity(null); setHasBackup(null);
  };

  return (
    <>
      <SEOHead
        title="Should I install this update?"
        description="A clear yes/no/wait answer for software updates. Pick the kind of update, when it came out, and we will tell you whether to install now, wait, or back up first."
        path="/tools/update-decision-helper"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Should I install this update?</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Four quick questions and you will have a clear answer.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Update Decision Helper' }]} />

          {!verdict ? (
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-2">1. What kind of update?</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {([
                      { id: 'os' as const,       label: 'Phone or computer OS', sub: 'iOS, Android, Windows, macOS' },
                      { id: 'app' as const,      label: 'App update',           sub: 'A specific app on your phone' },
                      { id: 'browser' as const,  label: 'Web browser',           sub: 'Chrome, Safari, Edge, Firefox' },
                      { id: 'firmware' as const, label: 'Device firmware',       sub: 'Printer, router, smart TV' },
                    ]).map(o => (
                      <button key={o.id} onClick={() => setType(o.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          type === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                        }`}>
                        <p className="font-medium text-sm">{o.label}</p>
                        <p className="text-xs text-muted-foreground">{o.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {type && (
                  <div>
                    <p className="text-sm font-semibold mb-2">2. When was this update released?</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {([
                        { id: 'just-released' as const, label: 'Just came out', sub: 'Within the last few days' },
                        { id: 'few-weeks' as const,    label: 'A few weeks ago', sub: '2 to 4 weeks' },
                        { id: 'older' as const,        label: 'Older — been around a while', sub: '1+ months ago' },
                        { id: 'unknown' as const,      label: 'Not sure', sub: 'No idea when it came out' },
                      ]).map(o => (
                        <button key={o.id} onClick={() => setRecency(o.id)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            recency === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                          }`}>
                          <p className="font-medium text-sm">{o.label}</p>
                          <p className="text-xs text-muted-foreground">{o.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {recency && (
                  <div>
                    <p className="text-sm font-semibold mb-2">3. Does the update mention &quot;security&quot;?</p>
                    <p className="text-xs text-muted-foreground mb-2">Look for words like security, vulnerability, fix, or patch.</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        { id: true,  label: 'Yes, it mentions security' },
                        { id: false, label: 'No / I don\'t think so' },
                      ].map(o => (
                        <button key={String(o.id)} onClick={() => setIsSecurity(o.id)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            isSecurity === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                          }`}>
                          <p className="font-medium text-sm">{o.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isSecurity !== null && (
                  <div>
                    <p className="text-sm font-semibold mb-2">4. Have you backed up recently?</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        { id: true,  label: 'Yes, within the last week' },
                        { id: false, label: 'No / not sure' },
                      ].map(o => (
                        <button key={String(o.id)} onClick={() => setHasBackup(o.id)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            hasBackup === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                          }`}>
                          <p className="font-medium text-sm">{o.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className={`mb-6 border-2 ${
                verdict.level === 'install-asap' ? 'border-red-300 bg-red-50 dark:bg-red-950/20' :
                verdict.level === 'wait-week' ? 'border-amber-300 bg-amber-50 dark:bg-amber-950/20' :
                verdict.level === 'caution' ? 'border-amber-300 bg-amber-50 dark:bg-amber-950/20' :
                'border-green-300 bg-green-50 dark:bg-green-950/20'
              }`}>
                <CardContent className="p-6">
                  <Badge className={`mb-3 ${
                    verdict.level === 'install-asap' ? 'bg-red-100 text-red-700 border-red-300' :
                    verdict.level === 'wait-week' ? 'bg-amber-100 text-amber-700 border-amber-300' :
                    verdict.level === 'caution' ? 'bg-amber-100 text-amber-700 border-amber-300' :
                    'bg-green-100 text-green-700 border-green-300'
                  }`}>
                    {verdict.level === 'install-asap' && <AlertTriangle className="h-3 w-3 mr-1" />}
                    {verdict.level === 'wait-week' && <Clock className="h-3 w-3 mr-1" />}
                    {verdict.level === 'install-now' && <Check className="h-3 w-3 mr-1" />}
                    {verdict.badge}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-2">{verdict.title}</h2>
                  <p className="text-sm text-muted-foreground">{verdict.reason}</p>
                </CardContent>
              </Card>

              <Card className="mb-6 border-border">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What to do</p>
                  <ol className="space-y-2 text-sm">
                    {verdict.steps.map((s, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Button variant="outline" onClick={reset}>Check another update</Button>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make a backup before updating.</p>
              </Link>
              <Link to="/tools/device-age-checker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Age Checker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Is your device still getting updates?</p>
              </Link>
              <Link to="/tools/troubleshooter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Troubleshooter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Update went wrong? Start here.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> When in doubt, security updates beat almost any other concern. They protect everything else.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
