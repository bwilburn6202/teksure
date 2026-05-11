import { useState, useMemo } from 'react';
import { Tv, ChevronDown, ChevronUp, Check, TrendingDown, DollarSign } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface StreamingService {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
  includes: string;
  freeOption?: string;
  url: string;
}

const STREAMING: StreamingService[] = [
  { id: 'netflix', name: 'Netflix', monthlyPrice: 17, description: 'Movies, TV shows, original series', includes: 'Standard plan (HD, 2 screens)', freeOption: undefined, url: 'netflix.com' },
  { id: 'netflix-ads', name: 'Netflix (with ads)', monthlyPrice: 7, description: 'Same content, short ads during shows', includes: 'Standard with ads plan', url: 'netflix.com' },
  { id: 'hulu', name: 'Hulu', monthlyPrice: 18, description: 'TV shows day after they air, movies', includes: 'No-ads plan', url: 'hulu.com' },
  { id: 'hulu-ads', name: 'Hulu (with ads)', monthlyPrice: 8, description: 'TV shows day after they air, movies', includes: 'Ad-supported plan', url: 'hulu.com' },
  { id: 'disney', name: 'Disney+', monthlyPrice: 14, description: 'Disney, Pixar, Marvel, Star Wars, National Geographic', includes: 'No-ads plan', url: 'disneyplus.com' },
  { id: 'max', name: 'Max (HBO)', monthlyPrice: 16, description: 'HBO originals, Warner Bros. movies, news', includes: 'Ad-free plan', url: 'max.com' },
  { id: 'apple-tv', name: 'Apple TV+', monthlyPrice: 10, description: 'Apple originals — award-winning shows and movies', includes: 'All content included, no ads', url: 'tv.apple.com' },
  { id: 'paramount', name: 'Paramount+', monthlyPrice: 13, description: 'CBS shows, NFL, Paramount movies, news', includes: 'Essential (with ads) plan', url: 'paramountplus.com' },
  { id: 'peacock', name: 'Peacock', monthlyPrice: 8, description: 'NBC shows, Bravo, sports, news', includes: 'Premium plan', freeOption: 'Free tier available (limited content)', url: 'peacocktv.com' },
  { id: 'amazon', name: 'Amazon Prime Video', monthlyPrice: 9, description: 'Movies, Amazon originals, some live sports', includes: 'Included with Amazon Prime ($139/year)', url: 'amazon.com/primevideo' },
  { id: 'youtube-tv', name: 'YouTube TV', monthlyPrice: 73, description: 'Live TV replacement — 100+ channels including local news', includes: 'Unlimited DVR, 3 simultaneous streams', url: 'tv.youtube.com' },
  { id: 'hulu-live', name: 'Hulu + Live TV', monthlyPrice: 83, description: 'Live TV replacement — 90+ channels, local news, sports', includes: 'Disney+ and ESPN+ included', url: 'hulu.com/live-tv' },
  { id: 'sling', name: 'Sling TV', monthlyPrice: 40, description: 'Cable-like live TV at lower cost — news, sports, entertainment', includes: 'Orange or Blue plan (not both)', url: 'sling.com' },
  { id: 'philo', name: 'Philo', monthlyPrice: 28, description: 'Live TV with entertainment and news — no sports', includes: '70+ channels, unlimited DVR', url: 'philo.com' },
  { id: 'espn', name: 'ESPN+', monthlyPrice: 11, description: 'Live sports — UFC, college sports, some MLB, NHL, MLS', includes: 'Sports content only', url: 'espnplus.com' },
  { id: 'tubi', name: 'Tubi', monthlyPrice: 0, description: 'Thousands of free movies and TV shows with ads', includes: 'Completely free — no subscription', freeOption: '100% free with ads', url: 'tubi.tv' },
  { id: 'pluto', name: 'Pluto TV', monthlyPrice: 0, description: 'Free live channels and on-demand with ads', includes: 'Completely free — no subscription', freeOption: '100% free with ads', url: 'pluto.tv' },
  { id: 'pbs', name: 'PBS', monthlyPrice: 0, description: 'News, nature, history, cooking, dramas (Masterpiece)', includes: 'Free on PBS.org and PBS app', freeOption: 'Free — PBS Passport $5/month for extras', url: 'pbs.org' },
];

const INTERNET_TIPS = [
  'Ask your internet provider to remove the cable bundle and switch to internet-only.',
  'Many providers offer lower-cost internet plans — ask about "Internet Essentials" or senior discounts.',
  'You may need to return cable equipment (cable box, remote) — call to arrange a drop-off.',
  'You will still need the internet to stream, so keep your internet service.',
];

export default function CordCuttingPlanner() {
  const [cableBill, setCableBill] = useState('');
  const [internetCost, setInternetCost] = useState('');
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [showTips, setShowTips] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const cable = parseFloat(cableBill.replace(/[^0-9.]/g, '')) || 0;
  const internet = parseFloat(internetCost.replace(/[^0-9.]/g, '')) || 0;

  const streamingTotal = useMemo(() =>
    STREAMING.filter(s => selectedServices.has(s.id)).reduce((sum, s) => sum + s.monthlyPrice, 0),
    [selectedServices]
  );

  const newMonthlyTotal = internet + streamingTotal;
  const currentTotal = cable + internet;
  const monthlySavings = currentTotal - newMonthlyTotal;
  const yearlySavings = monthlySavings * 12;

  const visibleServices = showAllServices ? STREAMING : STREAMING.slice(0, 10);

  return (
    <>
      <SEOHead
        title="Cord-Cutting Savings Planner — TekSure"
        description="See how much you could save by cancelling cable and switching to streaming services. Enter your current cable bill and pick the services you want."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-950/60 mb-4">
              <Tv className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Cord-Cutting Savings Planner</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See how much you could save by cancelling cable and switching to streaming. The average household saves $100+ per month.
            </p>
          </div>

          {/* Step 1 — Current bills */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm mb-4">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Step 1 — Your current monthly bills</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Check your most recent bill or bank statement.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <label className="w-44 text-sm font-medium text-gray-700 dark:text-gray-300 flex-shrink-0">Cable TV bill</label>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    value={cableBill}
                    onChange={e => setCableBill(e.target.value)}
                    placeholder="e.g. 120"
                    className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="w-44 text-sm font-medium text-gray-700 dark:text-gray-300 flex-shrink-0">
                  Internet bill
                  <span className="block text-xs font-normal text-gray-400">If bundled with cable, use 0</span>
                </label>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    value={internetCost}
                    onChange={e => setInternetCost(e.target.value)}
                    placeholder="e.g. 60"
                    className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>
              {cable > 0 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">
                  Current monthly total: <span className="font-semibold text-gray-900 dark:text-gray-100">${(cable + internet).toFixed(0)}</span>
                  {cable > 0 && internet > 0 && ` (${cable.toFixed(0)} cable + ${internet.toFixed(0)} internet)`}
                </p>
              )}
            </div>
          </div>

          {/* Step 2 — Choose services */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm mb-4">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">Step 2 — Pick the services you want</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Choose as many or as few as you like. Start with 1–2 and add more later.</p>
            <div className="space-y-2">
              {visibleServices.map(service => {
                const isSelected = selectedServices.has(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center ${
                      isSelected ? 'bg-purple-600 border-purple-600' : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-semibold text-sm ${isSelected ? 'text-purple-800 dark:text-purple-200' : 'text-gray-900 dark:text-gray-100'}`}>
                          {service.name}
                        </span>
                        {service.monthlyPrice === 0 && (
                          <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded font-medium">FREE</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{service.description}</p>
                      {service.freeOption && (
                        <p className="text-xs text-green-600 dark:text-green-400">{service.freeOption}</p>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className={`font-bold text-sm ${isSelected ? 'text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'}`}>
                        {service.monthlyPrice === 0 ? 'Free' : `$${service.monthlyPrice}/mo`}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
            {!showAllServices && (
              <button
                onClick={() => setShowAllServices(true)}
                className="mt-3 w-full py-2 text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center justify-center gap-1"
              >
                <ChevronDown className="w-4 h-4" />
                Show all {STREAMING.length} services
              </button>
            )}
            {showAllServices && (
              <button
                onClick={() => setShowAllServices(false)}
                className="mt-3 w-full py-2 text-sm text-gray-500 dark:text-gray-400 hover:underline flex items-center justify-center gap-1"
              >
                <ChevronUp className="w-4 h-4" />
                Show fewer
              </button>
            )}
          </div>

          {/* Results */}
          {cable > 0 && (
            <div className={`rounded-2xl border-2 p-5 mb-4 ${
              monthlySavings > 0
                ? 'bg-green-50 dark:bg-green-950/30 border-green-400 dark:border-green-700'
                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}>
              <div className="flex items-start gap-3 mb-4">
                {monthlySavings > 0
                  ? <TrendingDown className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  : <DollarSign className="w-6 h-6 text-gray-500 flex-shrink-0 mt-0.5" />}
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                    {monthlySavings > 0
                      ? `You could save $${monthlySavings.toFixed(0)}/month`
                      : monthlySavings < 0
                      ? `Your streaming picks cost $${Math.abs(monthlySavings).toFixed(0)} more than cable`
                      : 'Same monthly cost as cable'}
                  </p>
                  {monthlySavings > 0 && (
                    <p className="text-sm text-green-700 dark:text-green-300">
                      That's <strong>${yearlySavings.toFixed(0)} per year</strong> back in your pocket.
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Current cable + internet</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">${currentTotal.toFixed(0)}/mo</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Internet only (after cutting cable)</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">${internet.toFixed(0)}/mo</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">
                    Selected streaming ({selectedServices.size} service{selectedServices.size !== 1 ? 's' : ''})
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">${streamingTotal.toFixed(0)}/mo</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-bold text-gray-900 dark:text-gray-100">New monthly total</span>
                  <span className="font-bold text-gray-900 dark:text-gray-100">${newMonthlyTotal.toFixed(0)}/mo</span>
                </div>
              </div>

              {selectedServices.size === 0 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  Select services above to see your new total cost.
                </p>
              )}
            </div>
          )}

          {/* Tips */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm mb-4">
            <button
              onClick={() => setShowTips(!showTips)}
              className="w-full flex items-center justify-between text-left"
            >
              <p className="font-bold text-gray-900 dark:text-gray-100">How to actually cut the cord — next steps</p>
              {showTips ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            {showTips && (
              <div className="mt-3 space-y-3">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">1. What you need</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                    <li>A smart TV, or a streaming stick (Roku, Amazon Fire Stick) plugged into your TV</li>
                    <li>A reliable internet connection (25+ Mbps for HD streaming)</li>
                    <li>A free account with any streaming service you pick</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">2. Call your cable company</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                    {INTERNET_TIPS.map((tip, i) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">3. Start small</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pick one or two services and watch them for a month before adding more. Most services let you cancel anytime. Start with the free options (Tubi, Pluto TV, PBS) — they cost nothing and have a lot of good content.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">4. Antennas for local channels</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A $20–$40 indoor TV antenna picks up free local channels (ABC, NBC, CBS, PBS, FOX) in most areas — no subscription needed. Search "indoor TV antenna" on Amazon. This gives you local news and network TV for free.
                  </p>
                </div>
              </div>
            )}
          </div>

          <p className="text-xs text-center text-gray-400 dark:text-gray-500 pb-4">
            Prices shown are approximate as of early 2026. Service pricing changes — verify current prices before subscribing.
          </p>

        </div>
      </div>
    </>
  );
}
