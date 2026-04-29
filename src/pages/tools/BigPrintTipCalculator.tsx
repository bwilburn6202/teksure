import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function BigPrintTipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPct, setTipPct] = useState(20);
  const [people, setPeople] = useState(1);

  const { tip, total, perPerson } = useMemo(() => {
    const b = parseFloat(bill) || 0;
    const t = b * (tipPct / 100);
    const total = b + t;
    return { tip: t, total, perPerson: total / Math.max(1, people) };
  }, [bill, tipPct, people]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Big-Print Tip Calculator — Easy Restaurant Math | TekSure" description="Large numbers, big buttons, and clear results. Figure out the tip and split the check without squinting." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-2xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tip Calculator</h1>
          <p className="text-lg text-muted-foreground">Big buttons. Clear numbers. No squinting.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <label className="block text-xl font-semibold mb-2">Bill amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-muted-foreground">$</span>
              <input
                type="number"
                inputMode="decimal"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-4 text-3xl font-bold border-2 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <label className="block text-xl font-semibold mb-3">Tip percent</label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[15, 18, 20, 25].map(p => (
                <button
                  key={p}
                  onClick={() => setTipPct(p)}
                  className={`py-4 text-2xl font-bold rounded-lg border-2 ${tipPct === p ? 'bg-primary text-primary-foreground border-primary' : 'border-muted hover:border-primary'}`}
                >{p}%</button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setTipPct(Math.max(0, tipPct - 1))} className="w-12 h-12 text-2xl font-bold rounded-lg border-2">−</button>
              <div className="flex-1 text-center text-2xl font-bold">{tipPct}%</div>
              <button onClick={() => setTipPct(Math.min(100, tipPct + 1))} className="w-12 h-12 text-2xl font-bold rounded-lg border-2">+</button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <label className="block text-xl font-semibold mb-3">Split between how many people?</label>
            <div className="flex items-center gap-3">
              <button onClick={() => setPeople(Math.max(1, people - 1))} className="w-14 h-14 text-3xl font-bold rounded-lg border-2">−</button>
              <div className="flex-1 text-center text-3xl font-bold">{people}</div>
              <button onClick={() => setPeople(people + 1)} className="w-14 h-14 text-3xl font-bold rounded-lg border-2">+</button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardContent className="pt-6 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-lg text-muted-foreground">Tip</span>
              <span className="text-3xl font-bold">${tip.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-baseline border-t pt-4">
              <span className="text-lg text-muted-foreground">Total</span>
              <span className="text-4xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            {people > 1 && (
              <div className="flex justify-between items-baseline border-t pt-4">
                <span className="text-lg text-muted-foreground">Each person pays</span>
                <span className="text-4xl font-bold">${perPerson.toFixed(2)}</span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tip Quick Tips</h3>
            <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
              <li><strong>Sit-down restaurant:</strong> 18-20% is standard in the US.</li>
              <li><strong>Take-out:</strong> 10% is generous; nothing is also fine.</li>
              <li><strong>Hairdresser:</strong> 18-20% on the service price.</li>
              <li><strong>Hotel housekeeping:</strong> $3-$5 per night, in cash, left visible.</li>
              <li><strong>Taxi or Uber:</strong> 15-20% (the app will round up for you).</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
