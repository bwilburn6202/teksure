import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Smartphone, BarChart3, Lightbulb, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

type Platform = 'iphone' | 'android';

const findInstructions: Record<Platform, string[]> = {
  iphone: [
    'Open the Settings app on your iPhone.',
    'Scroll down and tap "Screen Time."',
    'Tap "See All App & Website Activity."',
    'You will see your daily average at the top of the screen.',
    'Scroll down to see time spent per app and per category.',
  ],
  android: [
    'Open the Settings app on your Android phone.',
    'Tap "Digital Wellbeing & Parental Controls."',
    'Your daily average is shown in the dashboard chart.',
    'Tap the chart to see a breakdown by app.',
    'Tap "Show All Apps" to see every app you have used.',
  ],
};

const categories = ['Social Media', 'Entertainment', 'Productivity', 'Reading & Reference', 'Games', 'Other'];
const NATIONAL_AVG = 4.5;

const reductionTips = [
  'Turn on Grayscale mode to make your phone less visually appealing.',
  'Set app time limits for your most-used apps (15-30 minutes per day is a good start).',
  'Move social media apps off your home screen and into a folder.',
  'Turn off non-essential notifications to reduce the urge to check your phone.',
  'Use "Do Not Disturb" or "Focus" mode during meals and before bedtime.',
  'Charge your phone in a different room at night so it is not the last thing you see.',
  'Try replacing 30 minutes of phone time with a walk, book, or conversation.',
  'Set a "phone curfew" — no screens one hour before bed.',
];

const healthyHabits = [
  'I take a break from screens every 30 minutes.',
  'I do not use my phone during meals.',
  'I keep my phone out of the bedroom at night.',
  'I have set app time limits on my most-used apps.',
  'I turn off notifications for non-essential apps.',
  'I have at least one screen-free hobby I enjoy.',
];

export default function ScreenTimeAnalyzer() {
  const [platform, setPlatform] = useState<Platform | ''>('');
  const [dailyAvg, setDailyAvg] = useState('');
  const [topApps, setTopApps] = useState('');
  const [categoryHours, setCategoryHours] = useState<Record<string, string>>({});
  const [analyzed, setAnalyzed] = useState(false);
  const [habits, setHabits] = useState<Set<number>>(new Set());
  const [showTips, setShowTips] = useState(false);

  const totalHours = Object.values(categoryHours).reduce((s, v) => s + (parseFloat(v) || 0), 0);
  const dailyNum = parseFloat(dailyAvg) || 0;
  const diff = dailyNum - NATIONAL_AVG;

  const handleAnalyze = () => {
    if (dailyNum > 0) setAnalyzed(true);
  };

  return (
    <>
      <SEOHead
        title="Screen Time Analyzer — Check Your Phone Usage | TekSure"
        description="Find out how your screen time compares to the national average. Get personalized tips for healthier phone habits."
        path="/tools/screen-time-analyzer"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Screen Time Analyzer' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Screen Time Analyzer</h1>
            <p className="text-muted-foreground text-lg">
              Enter your daily screen time to see how it compares and get tips for healthier habits.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Platform select */}
          <Card>
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Smartphone className="h-5 w-5" aria-hidden="true" /> Select Your Device</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {([['iphone', 'iPhone / iPad'], ['android', 'Android']] as const).map(([val, label]) => (
                  <button key={val} onClick={() => setPlatform(val)} className={`border rounded-xl p-4 text-center text-sm font-medium transition-colors ${platform === val ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20 text-blue-700' : 'hover:bg-muted'}`}>
                    {label}
                  </button>
                ))}
              </div>
              {platform && (
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="font-medium text-sm mb-2">How to Find Your Screen Time</p>
                  <ol className="space-y-1.5">
                    {findInstructions[platform].map((step, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Input fields */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Enter Your Usage</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">Daily average (hours)</label>
                <Input type="number" step="0.5" min="0" max="24" placeholder="e.g. 5.5" value={dailyAvg} onChange={e => setDailyAvg(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Most-used apps (comma-separated)</label>
                <Input placeholder="e.g. Facebook, YouTube, Messages" value={topApps} onChange={e => setTopApps(e.target.value)} />
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Hours per category (optional)</p>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <div key={cat}>
                      <label className="text-xs text-muted-foreground">{cat}</label>
                      <Input type="number" step="0.5" min="0" placeholder="0" value={categoryHours[cat] || ''} onChange={e => setCategoryHours(prev => ({ ...prev, [cat]: e.target.value }))} />
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={handleAnalyze} disabled={!dailyAvg} className="w-full">
                <BarChart3 className="h-4 w-4 mr-2" aria-hidden="true" /> Analyze My Screen Time
              </Button>
            </CardContent>
          </Card>

          {/* Analysis */}
          {analyzed && (
            <>
              <Card>
                <CardHeader><CardTitle className="text-lg">Your Results</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Your Daily Average</p>
                      <p className="text-3xl font-bold text-blue-600">{dailyNum.toFixed(1)}h</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">National Average (65+)</p>
                      <p className="text-3xl font-bold text-gray-600">{NATIONAL_AVG}h</p>
                    </div>
                  </div>
                  <div className={`rounded-xl p-4 ${diff > 0 ? 'bg-amber-50 dark:bg-amber-950/20' : 'bg-emerald-50 dark:bg-emerald-950/20'}`}>
                    <p className="text-sm font-medium">
                      {diff > 2 ? 'Your screen time is significantly above the national average. Consider trying some of the reduction tips below.' :
                       diff > 0 ? 'Your screen time is slightly above the national average. Small changes can make a big difference.' :
                       'Your screen time is below the national average. Keep up the good habits!'}
                    </p>
                  </div>
                  {topApps && (
                    <div>
                      <p className="text-sm font-medium mb-2">Your Top Apps</p>
                      <div className="flex flex-wrap gap-2">
                        {topApps.split(',').map((app, i) => (
                          <Badge key={i} variant="outline">{app.trim()}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {totalHours > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Category Breakdown</p>
                      {categories.filter(c => parseFloat(categoryHours[c]) > 0).map(c => {
                        const val = parseFloat(categoryHours[c]);
                        return (
                          <div key={c} className="mb-2">
                            <div className="flex justify-between text-sm mb-1"><span>{c}</span><span className="font-medium">{val.toFixed(1)}h</span></div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${(val / Math.max(dailyNum, totalHours)) * 100}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Healthy habits checklist */}
              <Card>
                <CardHeader><CardTitle className="text-lg">Healthy Habits Checklist</CardTitle></CardHeader>
                <CardContent className="space-y-2">
                  {healthyHabits.map((item, i) => (
                    <label key={i} className="flex items-start gap-3 text-sm cursor-pointer py-1">
                      <input type="checkbox" checked={habits.has(i)} onChange={() => setHabits(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; })} className="mt-0.5 h-4 w-4 rounded" />
                      <span className={habits.has(i) ? 'line-through text-muted-foreground' : ''}>{item}</span>
                    </label>
                  ))}
                  <p className="text-xs text-muted-foreground pt-2">
                    <CheckCircle className="h-3 w-3 inline mr-1" />{habits.size} of {healthyHabits.length} habits
                  </p>
                </CardContent>
              </Card>
            </>
          )}

          {/* Tips */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowTips(!showTips)} className="flex items-center gap-3 w-full text-left">
              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Tips for Reducing Screen Time</span>
              {showTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showTips && (
              <ul className="mt-4 space-y-2">
                {reductionTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
