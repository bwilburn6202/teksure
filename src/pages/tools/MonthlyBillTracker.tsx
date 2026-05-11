import { useState, useMemo } from 'react';
import { Plus, Trash2, Printer, DollarSign, CalendarDays, AlertCircle, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Bill {
  id: string;
  name: string;
  amount: string;
  dueDay: string;
  category: string;
  autopay: boolean;
}

const CATEGORIES = [
  'Housing',
  'Utilities',
  'Insurance',
  'Phone / Internet',
  'Medical',
  'Subscriptions',
  'Transportation',
  'Other',
];

const STARTER_BILLS: Bill[] = [
  { id: '1', name: 'Mortgage / Rent', amount: '', dueDay: '1', category: 'Housing', autopay: false },
  { id: '2', name: 'Electric / Gas', amount: '', dueDay: '15', category: 'Utilities', autopay: false },
  { id: '3', name: 'Phone', amount: '', dueDay: '10', category: 'Phone / Internet', autopay: false },
];

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function MonthlyBillTracker() {
  const [bills, setBills] = useState<Bill[]>(STARTER_BILLS);
  const [newName, setNewName] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDueDay, setNewDueDay] = useState('1');
  const [newCategory, setNewCategory] = useState('Other');
  const [newAutopay, setNewAutopay] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const sortedBills = useMemo(
    () => [...bills].sort((a, b) => parseInt(a.dueDay || '31') - parseInt(b.dueDay || '31')),
    [bills]
  );

  const total = useMemo(
    () => bills.reduce((sum, b) => sum + (parseFloat(b.amount) || 0), 0),
    [bills]
  );

  const filledBills = bills.filter(b => b.amount && parseFloat(b.amount) > 0);
  const missingAmount = bills.filter(b => !b.amount || parseFloat(b.amount) === 0);
  const autopayCount = bills.filter(b => b.autopay).length;

  const addBill = () => {
    if (!newName.trim()) return;
    setBills(prev => [
      ...prev,
      {
        id: generateId(),
        name: newName.trim(),
        amount: newAmount,
        dueDay: newDueDay,
        category: newCategory,
        autopay: newAutopay,
      },
    ]);
    setNewName('');
    setNewAmount('');
    setNewDueDay('1');
    setNewCategory('Other');
    setNewAutopay(false);
    setShowForm(false);
  };

  const updateBill = (id: string, field: keyof Bill, value: string | boolean) => {
    setBills(prev => prev.map(b => (b.id === id ? { ...b, [field]: value } : b)));
  };

  const removeBill = (id: string) => {
    setBills(prev => prev.filter(b => b.id !== id));
  };

  const handlePrint = () => window.print();

  const dueSoon = (dueDay: string) => {
    const today = new Date().getDate();
    const due = parseInt(dueDay);
    const diff = due - today;
    return diff >= 0 && diff <= 5;
  };

  return (
    <>
      <SEOHead
        title="Monthly Bill Tracker — TekSure"
        description="Keep track of all your monthly bills in one place. Enter each bill's name, amount, and due date to see your total and which bills are coming up soon."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white print:py-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 print:mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 mb-4 print:hidden">
              <DollarSign className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Monthly Bill Tracker
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 print:hidden">
              Add your monthly bills below to see your total and keep track of due dates.
              Nothing is saved online — this page is private to you.
            </p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-3 mb-6 print:grid-cols-3">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                ${total.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Monthly total</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{bills.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Bills tracked</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{autopayCount}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">On autopay</p>
            </div>
          </div>

          {/* Missing amounts notice */}
          {missingAmount.length > 0 && (
            <div className="flex gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4 print:hidden">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                {missingAmount.length} bill{missingAmount.length > 1 ? 's' : ''} still need an amount entered to be included in your total.
              </p>
            </div>
          )}

          {/* Bill list */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm mb-4">
            <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center print:hidden">
              <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Your bills — sorted by due date</span>
            </div>

            {sortedBills.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-gray-600">
                <CalendarDays className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p>No bills yet. Add your first bill below.</p>
              </div>
            )}

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {sortedBills.map(bill => (
                <div key={bill.id} className="px-4 py-3">
                  {/* Print view */}
                  <div className="hidden print:flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-900">{bill.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({bill.category})</span>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-700">
                      <span>Due: {bill.dueDay ? `Day ${bill.dueDay}` : '—'}</span>
                      <span>{bill.autopay ? 'Autopay ✓' : 'Manual'}</span>
                      <span className="font-semibold">{bill.amount ? `$${parseFloat(bill.amount).toFixed(2)}` : '—'}</span>
                    </div>
                  </div>

                  {/* Screen view */}
                  <div className="print:hidden">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="text"
                            value={bill.name}
                            onChange={e => updateBill(bill.id, 'name', e.target.value)}
                            className="font-medium text-gray-900 dark:text-gray-100 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-emerald-400 outline-none flex-1 min-w-0"
                          />
                          {dueSoon(bill.dueDay) && (
                            <span className="text-xs bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full font-medium">
                              Due soon
                            </span>
                          )}
                          {bill.autopay && (
                            <span className="text-xs bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full">
                              Autopay
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-400">$</span>
                            <input
                              type="number"
                              placeholder="Amount"
                              value={bill.amount}
                              onChange={e => updateBill(bill.id, 'amount', e.target.value)}
                              className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-2 py-1 w-full outline-none border border-gray-200 dark:border-gray-700 focus:border-emerald-400"
                            />
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-400 whitespace-nowrap">Due day</span>
                            <input
                              type="number"
                              min="1"
                              max="31"
                              value={bill.dueDay}
                              onChange={e => updateBill(bill.id, 'dueDay', e.target.value)}
                              className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-2 py-1 w-16 outline-none border border-gray-200 dark:border-gray-700 focus:border-emerald-400"
                            />
                          </div>
                          <div>
                            <select
                              value={bill.category}
                              onChange={e => updateBill(bill.id, 'category', e.target.value)}
                              className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-2 py-1 w-full outline-none border border-gray-200 dark:border-gray-700"
                            >
                              {CATEGORIES.map(c => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={bill.autopay}
                              onChange={e => updateBill(bill.id, 'autopay', e.target.checked)}
                              className="rounded"
                            />
                            On autopay
                          </label>
                        </div>
                      </div>
                      <button
                        onClick={() => removeBill(bill.id)}
                        className="flex-shrink-0 text-gray-300 hover:text-red-500 dark:text-gray-600 dark:hover:text-red-400 transition-colors mt-1"
                        aria-label="Remove bill"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total row */}
            {filledBills.length > 0 && (
              <div className="px-5 py-3 bg-emerald-50 dark:bg-emerald-950/30 border-t border-emerald-100 dark:border-emerald-900 flex justify-between items-center">
                <span className="font-semibold text-emerald-800 dark:text-emerald-200">Monthly Total</span>
                <span className="font-bold text-lg text-emerald-700 dark:text-emerald-300">${total.toFixed(2)}</span>
              </div>
            )}
          </div>

          {/* Add bill form */}
          <div className="print:hidden mb-4">
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add a bill
              </button>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Add a new bill</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Bill name</label>
                    <input
                      type="text"
                      placeholder="e.g. Netflix, Water bill, Car insurance"
                      value={newName}
                      onChange={e => setNewName(e.target.value)}
                      className="w-full rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Amount ($)</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={newAmount}
                        onChange={e => setNewAmount(e.target.value)}
                        className="w-full rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Due day of month</label>
                      <input
                        type="number"
                        min="1"
                        max="31"
                        value={newDueDay}
                        onChange={e => setNewDueDay(e.target.value)}
                        className="w-full rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Category</label>
                    <select
                      value={newCategory}
                      onChange={e => setNewCategory(e.target.value)}
                      className="w-full rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:border-emerald-400"
                    >
                      {CATEGORIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newAutopay}
                      onChange={e => setNewAutopay(e.target.checked)}
                      className="rounded"
                    />
                    This bill is set up on autopay
                  </label>
                  <div className="flex gap-3 pt-1">
                    <button
                      onClick={addBill}
                      disabled={!newName.trim()}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-medium rounded-xl py-2.5 transition-colors"
                    >
                      Add bill
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="px-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          </div>

          {/* Privacy note */}
          <div className="mt-6 flex gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 print:hidden">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Private:</strong> Nothing you enter here is saved online. All information stays in your browser only. Use the Print button to save a copy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
