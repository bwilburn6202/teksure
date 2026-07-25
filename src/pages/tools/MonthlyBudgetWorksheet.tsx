import { useState, useMemo } from 'react';
import { Calculator, Printer, RotateCcw, ChevronDown, ChevronUp, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface LineItem {
  id: string;
  label: string;
  sublabel?: string;
  placeholder?: string;
}

const INCOME_ITEMS: LineItem[] = [
  { id: 'social-security', label: 'Social Security', sublabel: 'Monthly benefit after Medicare premium deduction' },
  { id: 'pension', label: 'Pension', sublabel: 'From a former employer or government job' },
  { id: 'work', label: 'Work / Part-time earnings', sublabel: 'Wages, freelance, consulting' },
  { id: 'investments', label: 'Investments / Dividends', sublabel: 'Interest, dividends, 401k/IRA withdrawals' },
  { id: 'rental', label: 'Rental income', sublabel: 'Rent collected from a property' },
  { id: 'other-income', label: 'Other income', sublabel: 'Annuity, family support, alimony, etc.' },
];

interface ExpenseGroup {
  label: string;
  color: string;
  items: LineItem[];
}

const EXPENSE_GROUPS: ExpenseGroup[] = [
  {
    label: 'Housing',
    color: 'blue',
    items: [
      { id: 'rent-mortgage', label: 'Rent or mortgage payment' },
      { id: 'property-tax', label: 'Property taxes', sublabel: 'If paid separately, not through escrow' },
      { id: 'hoa', label: 'HOA or condo fees' },
      { id: 'home-insurance', label: 'Homeowners / renters insurance' },
    ],
  },
  {
    label: 'Utilities',
    color: 'yellow',
    items: [
      { id: 'electric-gas', label: 'Electric & gas' },
      { id: 'water', label: 'Water & trash' },
      { id: 'phone', label: 'Cell phone or home phone' },
      { id: 'internet', label: 'Internet service' },
      { id: 'cable-streaming', label: 'Cable TV or streaming services' },
    ],
  },
  {
    label: 'Health & Medical',
    color: 'red',
    items: [
      { id: 'medicare-premium', label: 'Medicare Part B premium', sublabel: 'Standard is $185/month in 2026' },
      { id: 'supplement', label: 'Medicare supplement / Medigap', sublabel: 'Or Medicare Advantage premium' },
      { id: 'prescriptions', label: 'Prescriptions', sublabel: 'After Part D coverage' },
      { id: 'dental-vision', label: 'Dental, vision, hearing' },
      { id: 'medical-copays', label: 'Doctor visits & copays' },
      { id: 'gym-fitness', label: 'Gym or fitness' },
    ],
  },
  {
    label: 'Food & Transportation',
    color: 'green',
    items: [
      { id: 'groceries', label: 'Groceries' },
      { id: 'dining-out', label: 'Dining out & takeout' },
      { id: 'gas', label: 'Gas for your car' },
      { id: 'car-payment', label: 'Car payment' },
      { id: 'car-insurance', label: 'Car insurance' },
      { id: 'car-maintenance', label: 'Car maintenance & repairs', sublabel: 'Budget a monthly average' },
      { id: 'transport-other', label: 'Bus, rideshare, or taxi' },
    ],
  },
  {
    label: 'Personal & Miscellaneous',
    color: 'purple',
    items: [
      { id: 'clothing', label: 'Clothing & personal care' },
      { id: 'entertainment', label: 'Entertainment & hobbies' },
      { id: 'gifts', label: 'Gifts & donations' },
      { id: 'subscriptions', label: 'Subscriptions & memberships' },
      { id: 'pet', label: 'Pet care & supplies' },
      { id: 'savings', label: 'Savings / emergency fund', sublabel: 'Pay yourself first' },
      { id: 'other-expense', label: 'Other expenses' },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
  yellow: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800',
  red: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800',
  green: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
  purple: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800',
};

const headerColorMap: Record<string, string> = {
  blue: 'text-blue-700 dark:text-blue-300',
  yellow: 'text-yellow-700 dark:text-yellow-300',
  red: 'text-red-700 dark:text-red-300',
  green: 'text-green-700 dark:text-green-300',
  purple: 'text-purple-700 dark:text-purple-300',
};

function parseDollar(s: string): number {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function MonthlyBudgetWorksheet() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [showPrintTip, setShowPrintTip] = useState(false);

  const set = (id: string, val: string) => {
    const cleaned = val.replace(/[^0-9.]/g, '');
    setValues(prev => ({ ...prev, [id]: cleaned }));
  };

  const totalIncome = useMemo(() =>
    INCOME_ITEMS.reduce((s, item) => s + parseDollar(values[item.id] ?? ''), 0),
    [values]
  );

  const groupTotals = useMemo(() => {
    const result: Record<string, number> = {};
    for (const group of EXPENSE_GROUPS) {
      result[group.label] = group.items.reduce((s, item) => s + parseDollar(values[item.id] ?? ''), 0);
    }
    return result;
  }, [values]);

  const totalExpenses = useMemo(() =>
    Object.values(groupTotals).reduce((s, v) => s + v, 0),
    [groupTotals]
  );

  const balance = totalIncome - totalExpenses;

  const reset = () => {
    if (window.confirm('Clear all entries and start over?')) {
      setValues({});
      setCollapsed({});
    }
  };

  const toggleGroup = (label: string) =>
    setCollapsed(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <>
      <SEOHead
        title="Monthly Budget Worksheet — TekSure"
        description="A simple monthly budget worksheet for seniors. Enter your income and expenses to see your monthly balance and print a summary."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white print:py-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6 print:mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 mb-4 print:hidden">
              <Calculator className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Monthly Budget Worksheet</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enter your monthly income and expenses to see where your money goes — and how much you have left over.
            </p>
          </div>

          {/* Balance summary — sticky at top on scroll */}
          <div className={`rounded-2xl border-2 p-4 mb-6 print:mb-4 ${
            balance > 0
              ? 'bg-green-50 dark:bg-green-950/30 border-green-400 dark:border-green-700'
              : balance < 0
              ? 'bg-red-50 dark:bg-red-950/30 border-red-400 dark:border-red-700'
              : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Monthly Income</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{fmt(totalIncome)}</p>
              </div>
              <div className="space-y-0.5 text-right">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Monthly Expenses</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{fmt(totalExpenses)}</p>
              </div>
              <div className="w-full border-t border-gray-300 dark:border-gray-600 pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {balance > 0 ? <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" /> :
                   balance < 0 ? <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" /> :
                   <Minus className="w-5 h-5 text-gray-500" />}
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {balance > 0 ? 'Left over each month' : balance < 0 ? 'Over budget each month' : 'Balance'}
                  </span>
                </div>
                <span className={`text-2xl font-bold ${
                  balance > 0 ? 'text-green-700 dark:text-green-300' :
                  balance < 0 ? 'text-red-700 dark:text-red-300' :
                  'text-gray-700 dark:text-gray-300'
                }`}>{fmt(Math.abs(balance))}</span>
              </div>
            </div>
            {balance < 0 && (
              <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                Your expenses are {fmt(Math.abs(balance))} more than your income. Look at the categories below to find places to cut.
              </p>
            )}
          </div>

          {/* Income section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mb-4 overflow-hidden">
            <button
              onClick={() => toggleGroup('Income')}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">Monthly Income</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total: {fmt(totalIncome)}</p>
              </div>
              {collapsed['Income']
                ? <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                : <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />}
            </button>
            {!collapsed['Income'] && (
              <div className="px-4 pb-4 space-y-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                {INCOME_ITEMS.map(item => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className="flex-1">
                      <label htmlFor={item.id} className="block text-sm font-medium text-gray-800 dark:text-gray-200">{item.label}</label>
                      {item.sublabel && <p className="text-xs text-gray-400">{item.sublabel}</p>}
                    </div>
                    <div className="relative w-28 flex-shrink-0">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                      <input
                        id={item.id}
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={values[item.id] ?? ''}
                        onChange={e => set(item.id, e.target.value)}
                        placeholder="0"
                        className="w-full pl-6 pr-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-right text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Expense sections */}
          {EXPENSE_GROUPS.map(group => {
            const groupTotal = groupTotals[group.label] ?? 0;
            const isOpen = !collapsed[group.label];
            return (
              <div key={group.label} className={`rounded-2xl border shadow-sm mb-4 overflow-hidden ${colorMap[group.color]}`}>
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div>
                    <p className={`font-bold text-lg ${headerColorMap[group.color]}`}>{group.label}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total: {fmt(groupTotal)}</p>
                  </div>
                  {!isOpen
                    ? <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    : <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-700 pt-3 bg-white/50 dark:bg-gray-900/50">
                    {group.items.map(item => (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="flex-1">
                          <label htmlFor={item.id} className="block text-sm font-medium text-gray-800 dark:text-gray-200">{item.label}</label>
                          {item.sublabel && <p className="text-xs text-gray-400">{item.sublabel}</p>}
                        </div>
                        <div className="relative w-28 flex-shrink-0">
                          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                          <input
                            id={item.id}
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1"
                            value={values[item.id] ?? ''}
                            onChange={e => set(item.id, e.target.value)}
                            placeholder="0"
                            className="w-full pl-6 pr-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-right text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Action bar */}
          <div className="flex gap-3 mt-2 print:hidden">
            <button
              onClick={() => { setShowPrintTip(!showPrintTip); window.print(); }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
            >
              <Printer className="w-5 h-5" />
              Print / Save as PDF
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Clear
            </button>
          </div>

          {/* Tips */}
          <div className="mt-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 print:hidden">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Tips for using this worksheet</p>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
              <li>Use your most recent bank statements or bills to fill in the numbers.</li>
              <li>For irregular expenses (car repairs, medical bills), estimate a monthly average.</li>
              <li>If your balance is negative, start with your largest expense categories and look for one thing to reduce.</li>
              <li>Many seniors qualify for programs that lower costs — see our <a href="/tools/senior-benefits-finder" className="underline">Senior Benefits Finder</a>.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
