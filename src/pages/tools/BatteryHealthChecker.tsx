import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Battery, ChevronRight } from 'lucide-react';

export default function BatteryHealthChecker() {
  const [phone, setPhone] = useState<'iphone' | 'android' | null>(null);
  const [pct, setPct] = useState('');

  const verdict = (() => {
    const n = parseInt(pct, 10);
    if (isNaN(n)) return null;
    if (n >= 90) return { level: 'good', title: 'Battery is in great shape', body: 'Most of your battery life is still here. No need to do anything.' };
    if (n >= 80) return { level: 'good', title: 'Battery is healthy', body: 'Apple and Google call anything 80% or above "normal". You\'re fine.' };
    if (n >= 70) return { level: 'fair', title: 'Battery is showing wear', body: 'You\'ll notice the phone doesn\'t last as long as it used to. Replacement helps but isn\'t urgent.' };
    if (n >= 60) return { level: 'fair', title: 'Time to think about a new battery', body: 'A replacement battery will make the phone feel almost new again — usually $70-$110 at Apple or a phone repair shop.' };
    return { level: 'bad', title: 'Battery is worn out', body: 'Replace it. The phone may shut off randomly, run slow, or die fast. A new battery is far cheaper than a new phone.' };
  })();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Battery Health Checker — Is My Phone Battery Worn Out? | TekSure" description="Find your iPhone or Android battery health number — and we'll tell you what it means in plain English. Replace or keep?" />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-2xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Battery Health Checker</h1>
          <p className="text-lg text-muted-foreground">Phone dies fast? Find out if the battery is the problem.</p>
        </div>

        {!phone && (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg mb-2">Which phone do you have?</h2>
              <Button onClick={() => setPhone('iphone')} variant="outline" size="lg" className="w-full justify-between">📱 iPhone <ChevronRight className="w-4 h-4" /></Button>
              <Button onClick={() => setPhone('android')} variant="outline" size="lg" className="w-full justify-between">🤖 Android <ChevronRight className="w-4 h-4" /></Button>
            </CardContent>
          </Card>
        )}

        {phone === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h2 className="font-bold text-lg mb-3">How to find your iPhone battery health</h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm mb-4">
                <li>Open <strong>Settings</strong>.</li>
                <li>Scroll down and tap <strong>Battery</strong>.</li>
                <li>Tap <strong>Battery Health & Charging</strong>.</li>
                <li>Look for "Maximum Capacity" — it shows a percentage like 87%.</li>
              </ol>
              <label className="font-medium block mb-2">Enter the percentage you see:</label>
              <input type="number" value={pct} onChange={(e) => setPct(e.target.value)} className="w-full p-3 border rounded text-lg" placeholder="e.g., 87" />
            </CardContent>
          </Card>
        )}

        {phone === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h2 className="font-bold text-lg mb-3">How to check Android battery health</h2>
              <p className="text-sm mb-3">Android doesn't show a single number like iPhone, but here's how to estimate:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
                <li><strong>Samsung:</strong> Settings → Battery and device care → Battery → tap the menu (three dots) → Battery Settings. Some Samsungs show a "Battery health" status (Good / Normal / Replace).</li>
                <li><strong>Google Pixel:</strong> Settings → Battery → Battery Information.</li>
                <li><strong>All Android:</strong> Install the free app "AccuBattery" from the Play Store. After 1-2 days of use, it shows estimated battery health as a percentage.</li>
              </ul>
              <label className="font-medium block mb-2">If you have a percentage, enter it:</label>
              <input type="number" value={pct} onChange={(e) => setPct(e.target.value)} className="w-full p-3 border rounded text-lg" placeholder="e.g., 82" />
            </CardContent>
          </Card>
        )}

        {verdict && (
          <Card className={`mb-4 border-2 ${verdict.level === 'good' ? 'border-green-600' : verdict.level === 'fair' ? 'border-yellow-500' : 'border-destructive'}`}>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-2">{verdict.title}</h2>
              <p>{verdict.body}</p>
              {verdict.level !== 'good' && (
                <div className="mt-4 pt-4 border-t text-sm space-y-2">
                  <p className="font-semibold">Where to replace:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Apple Store / Apple Authorized:</strong> $69-$119 depending on model. Genuine battery, 1-year warranty.</li>
                    <li><strong>Local phone repair shop:</strong> $50-$90, usually same-day.</li>
                    <li><strong>uBreakiFix (Samsung partner):</strong> good option for Samsung Galaxy.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">Tip: Replacing the battery is much cheaper than buying a new phone — and most phones feel brand new again.</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {phone && <Button onClick={() => { setPhone(null); setPct(''); }} variant="outline" className="w-full">Start over</Button>}
      </main>
      <Footer />
    </div>
  );
}
