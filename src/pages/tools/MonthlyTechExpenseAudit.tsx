import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DollarSign,
  Smartphone,
  Wifi,
  Tv,
  Music,
  ShieldCheck,
  RotateCcw,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Printer,
} from 'lucide-react';

interface ExpenseItem {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
  typicalRange: string;
  typicalMid: number;
  savingsTip: string;
  freeAlternative?: string;
}

const EXPENSE_ITEMS: ExpenseItem[] = [
  {
    id: 'phone',
    label: 'Cell Phone Plan',
    sublabel: 'Monthly phone bill (voice + data)',
    icon: Smartphone,
    color: 'text-blue-500',
    typicalRange: '$25–$85 / month',
    typicalMid: 55,
    savingsTip:
      'Seniors 55+ qualify for special discounts at T-Mobile (Go5G 55+), Consumer Cellular, and Mint Mobile. If you use less than 5 GB of data per month, a plan under $40 exists from multiple carriers.',
    freeAlternative: 'Lifeline program (lifelineprogramforamerica.org) offers free or reduced-cost phone service for qualifying low-income households.',
  },
  {
    id: 'internet',
    label: 'Home Internet',
    sublabel: 'Monthly broadband or Wi-Fi bill',
    icon: Wifi,
    color: 'text-cyan-500',
    typicalRange: '$35–$80 / month',
    typicalMid: 58,
    savingsTip:
      'Ask your provider for a "senior" or "low-income" plan. Xfinity Internet Essentials, Spectrum Internet Assist, and AT&T Access all offer discounted internet for qualifying households (around $10–$30/month).',
    freeAlternative: 'ACP (Affordable Connectivity Program) ended in 2024, but Lifeline still offers $9.25/month off internet bills for qualifying households.',
  },
  {
    id: 'streaming1',
    label: 'Streaming Service #1',
    sublabel: 'e.g., Netflix, Hulu, Disney+',
    icon: Tv,
    color: 'text-red-500',
    typicalRange: '$8–$23 / month',
    typicalMid: 15,
    savingsTip:
      'Netflix with ads is $7.99/month — significantly cheaper than ad-free. Hulu with ads is $7.99. Check if you are paying for a streaming service you rarely watch — cancel and rejoin when something you want is available.',
    freeAlternative: 'Pluto TV, Tubi, and Peacock Free offer hundreds of channels and thousands of shows completely free with ads.',
  },
  {
    id: 'streaming2',
    label: 'Streaming Service #2',
    sublabel: 'Second paid streaming service',
    icon: Tv,
    color: 'text-orange-500',
    typicalRange: '$8–$23 / month',
    typicalMid: 15,
    savingsTip:
      'Most households watch one streaming service at a time. Consider rotating: subscribe to one service for 2–3 months, cancel, switch to another. You can always resubscribe later.',
    freeAlternative: 'Amazon Freevee (free with Amazon account), YouTube (free), Samsung TV Plus (free on Samsung TVs).',
  },
  {
    id: 'streaming3',
    label: 'Streaming Service #3',
    sublabel: 'Third paid service, if applicable',
    icon: Tv,
    color: 'text-yellow-500',
    typicalRange: '$8–$23 / month',
    typicalMid: 15,
    savingsTip:
      'Three streaming services costs $300–$700 per year. That is close to cable pricing. Consider which one you watch most and cancel the others temporarily.',
  },
  {
    id: 'music',
    label: 'Music Streaming',
    sublabel: 'e.g., Spotify, Apple Music, Amazon Music',
    icon: Music,
    color: 'text-green-500',
    typicalRange: '$5–$11 / month',
    typicalMid: 10,
    savingsTip:
      'Spotify and Apple Music both offer senior discounts (50% off in some areas — check their sites). Spotify has a free tier with ads. Amazon Prime includes Prime Music at no extra charge.',
    freeAlternative: 'Spotify free (with ads), Pandora free, YouTube Music free (with ads). Public libraries often provide free access to services like hoopla or OverDrive.',
  },
  {
    id: 'antivirus',
    label: 'Antivirus / Security Software',
    sublabel: 'Annual fee paid monthly or yearly',
    icon: ShieldCheck,
    color: 'text-purple-500',
    typicalRange: '$0–$10 / month ($0–$120/yr)',
    typicalMid: 5,
    savingsTip:
      'Windows Defender (built into every Windows 10/11 computer) is free and rated highly by independent labs — you may not need a paid antivirus. On Mac, the built-in security is also excellent. Check if you are paying for something Windows or Mac already includes.',
    freeAlternative: 'Windows Defender (Windows), built-in Mac security (Mac), Malwarebytes free version for periodic manual scans.',
  },
  {
    id: 'cloud',
    label: 'Cloud Storage',
    sublabel: 'e.g., iCloud+, Google One, OneDrive',
    icon: ShieldCheck,
    color: 'text-indigo-500',
    typicalRange: '$1–$10 / month',
    typicalMid: 3,
    savingsTip:
      'iCloud free gives you 5 GB. Google Photos and Google Drive give you 15 GB free. OneDrive gives 5 GB free. Most people only need to pay for more storage if they have thousands of photos. Try clearing old files before upgrading.',
    freeAlternative: 'Google Photos (15 GB free), OneDrive 5 GB free, iCloud 5 GB free — enough for most people if organized.',
  },
  {
    id: 'other',
    label: 'Other Tech Subscriptions',
    sublabel: 'Apps, games, news, other services',
    icon: DollarSign,
    color: 'text-pink-500',
    typicalRange: 'Varies widely',
    typicalMid: 15,
    savingsTip:
      'Check your bank or credit card statements for small recurring charges — $1.99, $2.99, $4.99 per month. These add up fast and are easy to forget. Cancel any you do not recognize or use regularly.',
  },
];

type Entry = { value: string };

function getRating(paid: number, typical: number): 'great' | 'ok' | 'high' {
  if (paid <= typical * 0.8) return 'great';
  if (paid <= typical * 1.3) return 'ok';
  return 'high';
}

export default function MonthlyTechExpenseAudit() {
  const [entries, setEntries] = useState<Record<string, Entry>>(() =>
    Object.fromEntries(EXPENSE_ITEMS.map((e) => [e.id, { value: '' }])),
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const setEntry = (id: string, value: string) => {
    setEntries((prev) => ({ ...prev, [id]: { value } }));
    setShowResults(false);
  };

  const parsed = useMemo(
    () =>
      EXPENSE_ITEMS.map((item) => {
        const raw = entries[item.id].value.replace(/[$,\s]/g, '');
        const num = parseFloat(raw);
        return { item, amount: isNaN(num) ? null : num };
      }),
    [entries],
  );

  const total = useMemo(
    () => parsed.reduce((sum, r) => sum + (r.amount ?? 0), 0),
    [parsed],
  );

  const filledCount = parsed.filter((r) => r.amount !== null).length;

  const savings = useMemo(
    () =>
      parsed
        .filter((r) => r.amount !== null && getRating(r.amount, r.item.typicalMid) === 'high')
        .reduce((sum, r) => sum + (r.amount! - r.item.typicalMid), 0),
    [parsed],
  );

  const toggleExpand = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleReset = () => {
    setEntries(Object.fromEntries(EXPENSE_ITEMS.map((e) => [e.id, { value: '' }])));
    setExpanded({});
    setShowResults(false);
  };

  return (
    <>
      <SEOHead
        title="Monthly Tech Expense Audit | TekSure"
        description="Find out if you are overpaying for your phone, internet, streaming, and other tech services. Free audit tool — no sign-in needed."
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
        <div className="max-w-2xl mx-auto px-4 pt-6">
          <PageBreadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'Tech Expense Audit' },
            ]}
          />

          <div className="text-center mb-8 mt-4">
            <div className="text-5xl mb-3">💰</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Monthly Tech Expense Audit
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Enter what you pay each month. We will show you where you might be overpaying and
              what free alternatives exist.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Nothing leaves your device — all calculations happen in your browser.
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {EXPENSE_ITEMS.map(({ id, label, sublabel, icon: Icon, color, typicalRange }) => {
              const isOpen = expanded[id];
              const entry = entries[id];
              const raw = entry.value.replace(/[$,\s]/g, '');
              const num = parseFloat(raw);
              const hasValue = !isNaN(num) && num >= 0;
              const item = EXPENSE_ITEMS.find((e) => e.id === id)!;
              const rating = hasValue ? getRating(num, item.typicalMid) : null;

              return (
                <Card key={id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      onClick={() => toggleExpand(id)}
                      aria-expanded={isOpen}
                    >
                      <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 ${color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 dark:text-white">{label}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{sublabel}</div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {hasValue && (
                          <Badge
                            className={
                              rating === 'great'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                : rating === 'ok'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                            }
                          >
                            {rating === 'great' ? 'Great deal' : rating === 'ok' ? 'Typical' : 'Check this'}
                          </Badge>
                        )}
                        {isOpen ? (
                          <ChevronUp size={16} className="text-gray-400" />
                        ) : (
                          <ChevronDown size={16} className="text-gray-400" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700 pt-3 space-y-3">
                        <div className="flex items-center gap-3">
                          <label
                            htmlFor={`input-${id}`}
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                          >
                            Your monthly cost ($):
                          </label>
                          <Input
                            id={`input-${id}`}
                            type="number"
                            min="0"
                            max="500"
                            step="1"
                            placeholder="0"
                            value={entry.value}
                            onChange={(e) => setEntry(id, e.target.value)}
                            className="w-28"
                          />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Typical range:</span> {typicalRange}
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-sm text-blue-800 dark:text-blue-200">
                          <p className="font-medium mb-1">💡 Money-saving tip</p>
                          <p>{item.savingsTip}</p>
                        </div>
                        {item.freeAlternative && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-sm text-green-800 dark:text-green-200">
                            <p className="font-medium mb-1">🆓 Free alternatives</p>
                            <p>{item.freeAlternative}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filledCount >= 2 && (
            <div className="flex gap-3 mb-6">
              <Button
                onClick={() => setShowResults(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <TrendingDown size={16} className="mr-2" />
                See My Results
              </Button>
              <Button variant="outline" onClick={handleReset} aria-label="Start over">
                <RotateCcw size={16} />
              </Button>
            </div>
          )}

          {showResults && filledCount >= 2 && (
            <Card className="mb-6 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 space-y-5">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Your Results
                  </h2>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    ${total.toFixed(2)} / month
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    ${(total * 12).toFixed(0)} per year on tech services
                  </div>
                </div>

                <div className="space-y-2">
                  {parsed
                    .filter((r) => r.amount !== null)
                    .map(({ item, amount }) => {
                      const rating = getRating(amount!, item.typicalMid);
                      return (
                        <div key={item.id} className="flex items-center justify-between py-1">
                          <span className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2">
                            {rating === 'great' ? (
                              <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                            ) : rating === 'ok' ? (
                              <CheckCircle2 size={15} className="text-yellow-500 shrink-0" />
                            ) : (
                              <AlertTriangle size={15} className="text-red-500 shrink-0" />
                            )}
                            {item.label}
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            ${amount!.toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
                </div>

                {savings > 5 && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-2">
                      <TrendingDown size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-800 dark:text-amber-200">
                          Potential savings: ${savings.toFixed(2)}/month (${(savings * 12).toFixed(0)}/year)
                        </p>
                        <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                          Some of your services appear to cost more than typical. Tap each item
                          above to see specific tips for reducing that cost.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {savings <= 5 && (
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-200">
                          Your tech spending looks reasonable!
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          Your costs are in line with or below typical ranges. Still worth
                          reviewing each service annually — prices and better deals change often.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200">Next steps:</p>
                  <p>1. Review any item marked "Check this" and tap it for a savings tip.</p>
                  <p>2. Call your phone or internet provider and ask: "What promotions do you have for existing customers?"</p>
                  <p>3. Check your bank statement for small recurring charges you may have forgotten.</p>
                  <p>4. Set a calendar reminder to review this audit again in 6 months.</p>
                </div>

                <Button
                  variant="outline"
                  className="w-full print:hidden"
                  onClick={() => window.print()}
                >
                  <Printer size={16} className="mr-2" />
                  Print This Summary
                </Button>
              </CardContent>
            </Card>
          )}

          {filledCount === 0 && (
            <div className="text-center text-gray-400 dark:text-gray-600 py-8">
              <DollarSign size={40} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">Tap each category above to enter your monthly cost.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
