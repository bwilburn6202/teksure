import { useState, useMemo } from 'react';
import { Clock, Plus, Trash2, Printer, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Trial {
  id: string;
  service: string;
  signupDate: string;
  trialDays: string;
  monthlyPrice: string;
  cardUsed: string;
  cancelUrl: string;
}

const POPULAR: { name: string; days: number; price: number; cancelUrl: string }[] = [
  { name: 'Netflix', days: 0, price: 17, cancelUrl: 'netflix.com/account' },
  { name: 'Hulu', days: 30, price: 18, cancelUrl: 'hulu.com/account/cancel' },
  { name: 'Disney+', days: 7, price: 14, cancelUrl: 'disneyplus.com/account' },
  { name: 'Max (HBO)', days: 7, price: 16, cancelUrl: 'max.com/account' },
  { name: 'Amazon Prime', days: 30, price: 15, cancelUrl: 'amazon.com/mc/pipelines/cancellation' },
  { name: 'Apple TV+', days: 7, price: 10, cancelUrl: 'Settings → your name → Subscriptions' },
  { name: 'Paramount+', days: 7, price: 13, cancelUrl: 'paramountplus.com/account' },
  { name: 'Peacock', days: 7, price: 8, cancelUrl: 'peacocktv.com/account' },
  { name: 'YouTube Premium', days: 30, price: 14, cancelUrl: 'youtube.com/paid_memberships' },
  { name: 'Spotify', days: 30, price: 11, cancelUrl: 'spotify.com/account/subscription' },
  { name: 'Audible', days: 30, price: 15, cancelUrl: 'audible.com/account/cancel' },
  { name: 'SiriusXM', days: 30, price: 22, cancelUrl: 'siriusxm.com/account' },
];

function daysBetween(d1: Date, d2: Date) {
  return Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function newTrial(): Trial {
  return {
    id: Math.random().toString(36).slice(2),
    service: '',
    signupDate: new Date().toISOString().slice(0, 10),
    trialDays: '30',
    monthlyPrice: '',
    cardUsed: '',
    cancelUrl: '',
  };
}

export default function FreeTrialTracker() {
  const [trials, setTrials] = useState<Trial[]>([newTrial()]);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const today = useMemo(() => new Date(), []);

  const addTrial = () => setTrials(prev => [...prev, newTrial()]);
  const removeTrial = (id: string) => setTrials(prev => prev.filter(t => t.id !== id));
  const updateTrial = (id: string, field: keyof Trial, value: string) =>
    setTrials(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));

  const quickAdd = (s: typeof POPULAR[0]) => {
    setTrials(prev => [...prev, {
      ...newTrial(),
      service: s.name,
      trialDays: String(s.days || 30),
      monthlyPrice: String(s.price),
      cancelUrl: s.cancelUrl,
    }]);
    setShowQuickAdd(false);
  };

  const enriched = useMemo(() => trials.map(trial => {
    const signup = trial.signupDate ? new Date(trial.signupDate + 'T12:00:00') : null;
    const days = parseInt(trial.trialDays) || 30;
    const endDate = signup ? addDays(signup, days) : null;
    const cancelBy = endDate ? addDays(endDate, -2) : null;
    const daysLeft = endDate ? daysBetween(today, endDate) : null;
    const urgency = daysLeft === null ? 'none' : daysLeft <= 0 ? 'expired' : daysLeft <= 3 ? 'critical' : daysLeft <= 7 ? 'warning' : 'ok';
    return { ...trial, endDate, cancelBy, daysLeft, urgency };
  }), [trials, today]);

  const urgentCount = enriched.filter(t => t.urgency === 'critical' || t.urgency === 'warning').length;

  return (
    <>
      <SEOHead
        title="Free Trial Tracker — TekSure"
        description="Track your free trial subscriptions so you never get charged by accident. See when each trial ends and get reminded to cancel in time."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-6 print:mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-950/60 mb-4 print:hidden">
              <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Free Trial Tracker</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Keep track of free trials so you know exactly when to cancel — before your credit card gets charged.
            </p>
          </div>

          {urgentCount > 0 && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-700 rounded-2xl p-4 mb-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-red-800 dark:text-red-200">
                {urgentCount} trial{urgentCount !== 1 ? 's' : ''} ending soon — cancel now to avoid being charged.
              </p>
            </div>
          )}

          {/* Quick add popular services */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-4 mb-4 print:hidden">
            <button
              onClick={() => setShowQuickAdd(!showQuickAdd)}
              className="w-full flex items-center justify-between text-left"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Quick-add a popular service</p>
              <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">{showQuickAdd ? 'Hide' : 'Show'}</span>
            </button>
            {showQuickAdd && (
              <div className="mt-3 flex flex-wrap gap-2">
                {POPULAR.map(s => (
                  <button
                    key={s.name}
                    onClick={() => quickAdd(s)}
                    className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Trial cards */}
          <div className="space-y-4">
            {enriched.map((trial, idx) => {
              const borderColor =
                trial.urgency === 'expired' ? 'border-gray-300 dark:border-gray-600' :
                trial.urgency === 'critical' ? 'border-red-400 dark:border-red-600' :
                trial.urgency === 'warning' ? 'border-yellow-400 dark:border-yellow-600' :
                trial.urgency === 'ok' ? 'border-green-300 dark:border-green-700' :
                'border-gray-200 dark:border-gray-700';

              const bgColor =
                trial.urgency === 'critical' ? 'bg-red-50 dark:bg-red-950/20' :
                trial.urgency === 'warning' ? 'bg-yellow-50 dark:bg-yellow-950/20' :
                'bg-white dark:bg-gray-900';

              return (
                <div key={trial.id} className={`rounded-2xl border-2 shadow-sm p-4 ${borderColor} ${bgColor}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400 w-5 text-center">{idx + 1}</span>
                      {trial.urgency === 'ok' && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                      {trial.urgency === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />}
                      {trial.urgency === 'critical' && <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                      {trial.urgency === 'expired' && <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                      {trial.endDate && trial.daysLeft !== null && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          trial.urgency === 'expired' ? 'bg-gray-100 dark:bg-gray-800 text-gray-500' :
                          trial.urgency === 'critical' ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300' :
                          trial.urgency === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300' :
                          'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                        }`}>
                          {trial.daysLeft <= 0 ? 'Expired / Charged' : `${trial.daysLeft} day${trial.daysLeft !== 1 ? 's' : ''} left`}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeTrial(trial.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 flex-shrink-0 print:hidden"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Service name</label>
                      <input
                        type="text"
                        value={trial.service}
                        onChange={e => updateTrial(trial.id, 'service', e.target.value)}
                        placeholder="e.g. Netflix, Hulu, Amazon Prime..."
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 print:hidden"
                      />
                      <p className="font-semibold text-gray-900 dark:text-gray-100 hidden print:block">{trial.service || '(unnamed)'}</p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Sign-up date</label>
                      <input
                        type="date"
                        value={trial.signupDate}
                        onChange={e => updateTrial(trial.id, 'signupDate', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Trial length (days)</label>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        value={trial.trialDays}
                        onChange={e => updateTrial(trial.id, 'trialDays', e.target.value)}
                        placeholder="30"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Monthly price if not cancelled</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          value={trial.monthlyPrice}
                          onChange={e => updateTrial(trial.id, 'monthlyPrice', e.target.value)}
                          placeholder="0"
                          className="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Card used (last 4 digits)</label>
                      <input
                        type="text"
                        maxLength={4}
                        value={trial.cardUsed}
                        onChange={e => updateTrial(trial.id, 'cardUsed', e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="1234"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Where to cancel</label>
                    <input
                      type="text"
                      value={trial.cancelUrl}
                      onChange={e => updateTrial(trial.id, 'cancelUrl', e.target.value)}
                      placeholder="e.g. netflix.com/account or Settings → your name → Subscriptions"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  {trial.endDate && trial.cancelBy && (
                    <div className={`rounded-lg p-3 mt-2 text-sm ${
                      trial.urgency === 'critical' ? 'bg-red-100 dark:bg-red-900/40' :
                      trial.urgency === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/40' :
                      trial.urgency === 'expired' ? 'bg-gray-100 dark:bg-gray-800' :
                      'bg-green-50 dark:bg-green-950/20'
                    }`}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Trial ends: <strong>{formatDate(trial.endDate)}</strong>
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className={`font-semibold ${
                          trial.urgency === 'critical' ? 'text-red-700 dark:text-red-300' :
                          trial.urgency === 'warning' ? 'text-yellow-700 dark:text-yellow-300' :
                          trial.urgency === 'expired' ? 'text-gray-500' :
                          'text-green-700 dark:text-green-300'
                        }`}>
                          Cancel by: {formatDate(trial.cancelBy)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add / actions */}
          <div className="flex gap-3 mt-4 print:hidden">
            <button
              onClick={addTrial}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-orange-300 dark:border-orange-700 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" /> Add another trial
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors text-sm"
            >
              <Printer className="w-4 h-4" /> Print
            </button>
          </div>

          <div className="mt-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 print:hidden">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">The #1 rule for free trials</p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              The moment you sign up for a free trial, open your calendar and set a reminder 2 days before the trial ends. Mark it "Cancel [service name] before being charged." That 60-second habit will save you money every time.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
