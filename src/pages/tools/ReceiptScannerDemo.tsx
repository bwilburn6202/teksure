import { useState, useRef } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScanLine, Upload, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';

interface ParsedItem {
  name: string;
  amount: string;
}

const SAMPLE_RECEIPTS: Array<{ label: string; items: ParsedItem[]; store: string; date: string; total: string }> = [
  {
    label: 'Grocery store',
    store: 'City Market',
    date: 'Apr 15, 2026',
    total: '$47.83',
    items: [
      { name: 'Whole milk 1gal', amount: '$4.29' },
      { name: 'Bread, whole wheat', amount: '$3.49' },
      { name: 'Chicken breast 2lb', amount: '$9.98' },
      { name: 'Bananas 1.5lb', amount: '$0.89' },
      { name: 'Cheddar cheese 8oz', amount: '$5.49' },
      { name: 'Pasta 16oz ×2', amount: '$3.58' },
      { name: 'Pasta sauce 24oz', amount: '$3.29' },
      { name: 'Orange juice 52oz', amount: '$4.99' },
      { name: 'Paper towels 6pk', amount: '$8.99' },
      { name: 'Subtotal', amount: '$44.99' },
      { name: 'Tax (6.3%)', amount: '$2.84' },
    ],
  },
  {
    label: 'Pharmacy',
    store: 'Walgreens',
    date: 'Apr 12, 2026',
    total: '$23.17',
    items: [
      { name: 'Ibuprofen 200mg 50ct', amount: '$7.49' },
      { name: 'Hand lotion 8oz', amount: '$5.99' },
      { name: 'Tissues 3pk', amount: '$4.29' },
      { name: 'Greeting card', amount: '$3.99' },
      { name: 'Subtotal', amount: '$21.76' },
      { name: 'Tax', amount: '$1.41' },
    ],
  },
  {
    label: 'Restaurant',
    store: 'Main Street Diner',
    date: 'Apr 10, 2026',
    total: '$38.50',
    items: [
      { name: 'Eggs benedict', amount: '$14.00' },
      { name: 'Club sandwich', amount: '$12.00' },
      { name: 'Coffee ×2', amount: '$6.00' },
      { name: 'Orange juice', amount: '$3.50' },
      { name: 'Subtotal', amount: '$35.50' },
      { name: 'Tax (8.5%)', amount: '$3.00' },
    ],
  },
];

export default function ReceiptScannerDemo() {
  const [mode, setMode] = useState<'landing' | 'uploading' | 'processing' | 'result'>('landing');
  const [selectedSample, setSelectedSample] = useState(0);
  const [fileName, setFileName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setMode('uploading');
    // Simulate processing
    setTimeout(() => setMode('processing'), 400);
    setTimeout(() => setMode('result'), 2200);
  };

  const useSample = (idx: number) => {
    setSelectedSample(idx);
    setFileName('sample_receipt.jpg');
    setMode('processing');
    setTimeout(() => setMode('result'), 1800);
  };

  const reset = () => {
    setMode('landing');
    setFileName('');
    if (fileRef.current) fileRef.current.value = '';
  };

  const receipt = SAMPLE_RECEIPTS[selectedSample];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Receipt Scanner Demo | TekSure"
        description="See how receipt scanning works. Upload a photo of a receipt or try a sample — the tool reads the items, prices, and totals automatically."
      />
      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Receipt Scanner Demo' }]} />

        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ScanLine className="h-4 w-4" />
              How receipt scanning works
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Receipt Scanner Demo</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Upload a photo of a receipt — or try one of our samples — to see how your phone
              or a budgeting app can automatically read items and totals without any typing.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-2xl space-y-6">
            {mode === 'landing' && (
              <>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h2 className="font-bold text-lg mb-4">Try it with a sample receipt</h2>
                    <div className="grid gap-2 sm:grid-cols-3 mb-6">
                      {SAMPLE_RECEIPTS.map((r, i) => (
                        <button
                          key={r.label}
                          onClick={() => useSample(i)}
                          className="p-3 border rounded-lg text-left hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                          <div className="font-medium text-sm">{r.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{r.store} · {r.total}</div>
                        </button>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Or upload your own receipt photo (nothing is stored — this is a demo):
                      </p>
                      <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm font-medium">Click to upload a receipt photo</span>
                        <span className="text-xs text-muted-foreground">JPG, PNG, or PDF</span>
                        <input
                          ref={fileRef}
                          type="file"
                          accept="image/*,.pdf"
                          className="sr-only"
                          onChange={handleFile}
                        />
                      </label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      What can you do with receipt scanning?
                    </h2>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /><span>Track spending by category without manually entering anything</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /><span>Keep digital copies of receipts for returns or expense reports</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /><span>Check if you were charged the right price at checkout</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /><span>Match receipts to credit card charges automatically</span></li>
                    </ul>
                    <div className="mt-4 pt-4 border-t text-sm">
                      <p className="font-medium mb-1">Free apps that scan receipts:</p>
                      <p className="text-muted-foreground">Expensify (best for work), Fetch Rewards (earn points), NeatReceipts (home filing), and Mint (links to budgeting).</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {(mode === 'uploading' || mode === 'processing') && (
              <Card className="border-2">
                <CardContent className="p-10 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <ScanLine className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                  <h2 className="font-bold text-lg mb-2">
                    {mode === 'uploading' ? 'Reading your receipt…' : 'Identifying items and prices…'}
                  </h2>
                  <p className="text-sm text-muted-foreground">{fileName}</p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-2 w-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {mode === 'result' && (
              <>
                <Card className="border-2 border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <h2 className="font-bold text-lg">Receipt scanned successfully</h2>
                    </div>
                    <div className="flex justify-between mb-4 text-sm">
                      <div>
                        <div className="font-medium">{receipt.store}</div>
                        <div className="text-muted-foreground">{receipt.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">Total</div>
                        <div className="text-xl font-bold text-primary">{receipt.total}</div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      {receipt.items.map((item, i) => (
                        <div
                          key={i}
                          className={`flex justify-between px-4 py-2 text-sm ${
                            item.name === 'Subtotal' || item.name.startsWith('Tax')
                              ? 'bg-muted/50 text-muted-foreground'
                              : i % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                          }`}
                        >
                          <span>{item.name}</span>
                          <span className="font-medium tabular-nums">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <Badge variant="secondary">Scanned in 1.4 sec</Badge>
                      <Badge variant="secondary">{receipt.items.filter(i => i.name !== 'Subtotal' && !i.name.startsWith('Tax')).length} items found</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <strong className="text-foreground">This is a demo.</strong> The items shown
                        are sample data, not from your actual receipt. A real app like Expensify or
                        Fetch would read your receipt's actual items using optical character
                        recognition (OCR) — the same technology that makes ATMs read checks.
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button onClick={reset} variant="outline" className="w-full">
                  Try another receipt
                </Button>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
