import { useState } from 'react';
import { Gift, ChevronRight, ChevronLeft, RotateCcw, ExternalLink } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Benefit {
  name: string;
  what: string;
  who: string;
  howToApply: string;
  url: string;
  tags: string[];
}

const BENEFITS: Benefit[] = [
  {
    name: 'Medicare Savings Programs',
    what: 'Helps pay your Medicare Part B premiums, deductibles, and copays. Could save $174+ per month.',
    who: 'Medicare enrollees with limited income and resources. Income limits vary by state.',
    howToApply: 'Apply through your State Medicaid office or by calling 1-800-MEDICARE.',
    url: 'medicare.gov/basics/costs/help/medicare-savings-programs',
    tags: ['medicare', 'health', 'low-income'],
  },
  {
    name: 'Extra Help (Part D Low Income Subsidy)',
    what: 'Reduces or eliminates the cost of Medicare prescription drug coverage — premiums, deductibles, and copays.',
    who: 'Medicare enrollees with limited income. Single: income under ~$22,590/year. Couple: ~$30,660/year (2026 estimates).',
    howToApply: 'Apply online at socialsecurity.gov or call Social Security at 1-800-772-1213.',
    url: 'ssa.gov/medicare/part-d-extra-help',
    tags: ['medicare', 'prescriptions', 'low-income'],
  },
  {
    name: 'SNAP (Food Assistance)',
    what: 'Monthly benefits loaded onto an EBT card to buy groceries at most supermarkets and farmers markets.',
    who: 'Households with limited income. Many seniors qualify — income limit is typically 130% of the federal poverty level ($19,578/year for a single person in 2026).',
    howToApply: 'Apply online at benefits.gov or at your local SNAP office. Also try the SNAP pre-screening tool at benefits.gov/benefit/361.',
    url: 'fns.usda.gov/snap',
    tags: ['food', 'low-income', 'groceries'],
  },
  {
    name: 'LIHEAP (Home Energy Assistance)',
    what: 'Helps pay heating and cooling bills — electricity, gas, oil, and propane.',
    who: 'Households with limited income. Many seniors on fixed incomes qualify.',
    howToApply: 'Contact your state LIHEAP office — find it at liheap.acf.hhs.gov/find-help.',
    url: 'liheap.acf.hhs.gov',
    tags: ['utilities', 'energy', 'low-income'],
  },
  {
    name: 'Medicaid',
    what: 'Free or low-cost health insurance that covers doctor visits, hospital stays, nursing home care, and more.',
    who: 'Low-income individuals and families. Eligibility and coverage varies significantly by state.',
    howToApply: 'Apply through your state Medicaid agency, at healthcare.gov, or call 1-877-267-2323.',
    url: 'medicaid.gov',
    tags: ['health', 'insurance', 'low-income'],
  },
  {
    name: 'Lifeline Phone Program',
    what: 'Reduces your monthly phone or internet bill by up to $9.25/month. Tribal lands: up to $34.25/month.',
    who: 'Households enrolled in SNAP, Medicaid, SSI, Federal Housing Assistance, or with income at or below 135% of the poverty line.',
    howToApply: 'Apply at lifelinesupport.org or through your phone provider.',
    url: 'lifelinesupport.org',
    tags: ['phone', 'internet', 'low-income'],
  },
  {
    name: 'ACP (Affordable Connectivity Program)',
    what: 'Up to $30/month discount on internet service, plus a one-time $100 discount on a laptop or tablet.',
    who: 'Households at or below 200% of the federal poverty line, or enrolled in qualifying government programs.',
    howToApply: 'Apply at affordableconnectivity.gov or through your internet service provider.',
    url: 'affordableconnectivity.gov',
    tags: ['internet', 'computer', 'low-income'],
  },
  {
    name: 'Supplemental Security Income (SSI)',
    what: 'Monthly cash payments for people 65+ (or any age if disabled or blind) with limited income and assets.',
    who: 'US citizens or qualifying residents, age 65+, with income and resources below SSA limits.',
    howToApply: 'Apply at socialsecurity.gov/ssi or call Social Security at 1-800-772-1213.',
    url: 'ssa.gov/ssi',
    tags: ['income', 'social-security', 'low-income'],
  },
  {
    name: 'Property Tax Exemptions for Seniors',
    what: 'Reduces or freezes your local property taxes. The amount varies widely by state and county.',
    who: 'Homeowners 65+ — most states offer some form of property tax relief for seniors.',
    howToApply: 'Contact your county assessor\'s office or search "[your state] senior property tax exemption."',
    url: 'benefits.gov',
    tags: ['housing', 'property-tax', 'homeowner'],
  },
  {
    name: 'AARP Foundation Benefits QuickLINK',
    what: 'A free tool from AARP that screens you for hundreds of federal, state, and local benefit programs in minutes.',
    who: 'Anyone 50+ — not just AARP members.',
    howToApply: 'Go to aarp.org/quicklink and answer a few questions.',
    url: 'aarp.org/quicklink',
    tags: ['screening', 'aarp', 'all-programs'],
  },
  {
    name: 'BenefitsCheckUp (NCOA)',
    what: 'The National Council on Aging\'s free tool to screen for 2,500+ benefit programs — federal, state, and local.',
    who: 'Anyone 55+ or caregivers of older adults.',
    howToApply: 'Go to benefitscheckup.org and complete the screening.',
    url: 'benefitscheckup.org',
    tags: ['screening', 'ncoa', 'all-programs'],
  },
  {
    name: 'Meals on Wheels',
    what: 'Free or low-cost nutritious meals delivered to your home, plus a daily check-in visit.',
    who: 'Homebound seniors who have difficulty preparing meals. Not income-restricted in most areas.',
    howToApply: 'Find your local program at mealsonwheelsamerica.org or call 1-888-998-6325.',
    url: 'mealsonwheelsamerica.org',
    tags: ['food', 'home-delivery', 'senior-services'],
  },
  {
    name: 'Senior Farmers\' Market Nutrition Program',
    what: 'Free coupons (typically $20–$50/year) to buy fresh fruits and vegetables at farmers markets.',
    who: 'Low-income seniors 60+. Run by USDA — not all states participate.',
    howToApply: 'Contact your local Area Agency on Aging or your state\'s agricultural department.',
    url: 'fns.usda.gov/sfmnp',
    tags: ['food', 'farmers-market', 'low-income'],
  },
  {
    name: 'Prescription Assistance Programs (PAPs)',
    what: 'Free or very low-cost prescription medications directly from drug manufacturers.',
    who: 'Uninsured or underinsured adults who cannot afford their medications.',
    howToApply: 'Search RxAssist.org or NeedyMeds.org for your specific medications.',
    url: 'rxassist.org',
    tags: ['prescriptions', 'medications', 'low-income'],
  },
  {
    name: 'Area Agency on Aging Services',
    what: 'Your local AAA coordinates services like transportation, home care, legal aid, caregiver support, and more — often free or low-cost.',
    who: 'Adults 60+ in your area.',
    howToApply: 'Find your local AAA at eldercare.acl.gov or call the Eldercare Locator at 1-800-677-1116.',
    url: 'eldercare.acl.gov',
    tags: ['local-services', 'transportation', 'home-care', 'senior-services'],
  },
];

type SituationKey = 'health-costs' | 'food' | 'utilities' | 'phone-internet' | 'housing' | 'prescriptions' | 'income' | 'local-help';

const SITUATIONS: { key: SituationKey; label: string; description: string; emoji: string; tags: string[] }[] = [
  { key: 'health-costs', label: 'Help paying Medicare or health costs', description: 'Premiums, copays, deductibles are hard to afford', emoji: '🏥', tags: ['medicare', 'health', 'insurance'] },
  { key: 'food', label: 'Help with groceries or meals', description: 'Food costs are a concern, or need meals delivered', emoji: '🛒', tags: ['food', 'groceries', 'home-delivery', 'farmers-market'] },
  { key: 'utilities', label: 'Help paying utilities', description: 'Electricity, gas, heating, or cooling bills', emoji: '💡', tags: ['utilities', 'energy'] },
  { key: 'phone-internet', label: 'Help paying phone or internet', description: 'Monthly phone or internet bill is a burden', emoji: '📱', tags: ['phone', 'internet', 'computer'] },
  { key: 'prescriptions', label: 'Help paying for prescriptions', description: 'Medication costs are too high', emoji: '💊', tags: ['prescriptions', 'medications'] },
  { key: 'income', label: 'Limited or fixed income', description: 'Living on Social Security or limited savings', emoji: '💰', tags: ['income', 'social-security', 'low-income'] },
  { key: 'housing', label: 'Help with housing costs', description: 'Property taxes, rent, or home maintenance', emoji: '🏠', tags: ['housing', 'property-tax', 'homeowner'] },
  { key: 'local-help', label: 'Local services and support', description: 'Transportation, home care, legal help, and more', emoji: '🤝', tags: ['local-services', 'transportation', 'home-care', 'senior-services', 'aarp', 'ncoa', 'all-programs', 'screening'] },
];

export default function SeniorBenefitsFinder() {
  const [selected, setSelected] = useState<SituationKey[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleSituation = (key: SituationKey) => {
    setSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };

  const matchedBenefits = BENEFITS.filter(b => {
    if (selected.length === 0) return true;
    const allSelectedTags = selected.flatMap(s => SITUATIONS.find(sit => sit.key === s)?.tags ?? []);
    return b.tags.some(tag => allSelectedTags.includes(tag));
  });

  return (
    <>
      <SEOHead
        title="Senior Benefits Finder — TekSure"
        description="Find government and non-profit programs that may help you with health care costs, food, utilities, prescriptions, phone, internet, and more."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-950/60 mb-4">
              <Gift className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Senior Benefits Finder</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Many seniors qualify for programs that can save hundreds or thousands of dollars a year — but never apply because they don't know about them.
            </p>
          </div>

          {!showResults ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-lg">What would help you the most?</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Choose all that apply — or leave all unchecked to see every program.</p>
              <div className="space-y-2">
                {SITUATIONS.map(s => {
                  const isSelected = selected.includes(s.key);
                  return (
                    <button
                      key={s.key}
                      onClick={() => toggleSituation(s.key)}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-green-400'
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{s.emoji}</span>
                      <div className="flex-1">
                        <p className={`font-semibold text-sm ${isSelected ? 'text-green-800 dark:text-green-200' : 'text-gray-900 dark:text-gray-100'}`}>{s.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{s.description}</p>
                      </div>
                      {isSelected && <span className="text-green-600 dark:text-green-400 text-lg flex-shrink-0">✓</span>}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setShowResults(true)}
                className="w-full mt-5 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Show Programs I May Qualify For
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {matchedBenefits.length} program{matchedBenefits.length !== 1 ? 's' : ''} found
                  {selected.length > 0 && ` for your selections`}
                </p>
                <button
                  onClick={() => { setShowResults(false); setSelected([]); }}
                  className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Start Over
                </button>
              </div>

              <div className="space-y-3">
                {matchedBenefits.map((b, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{b.name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{b.what}</p>
                    <div className="space-y-1.5 text-sm">
                      <p><span className="font-medium text-gray-600 dark:text-gray-400">Who qualifies:</span> <span className="text-gray-700 dark:text-gray-300">{b.who}</span></p>
                      <p><span className="font-medium text-gray-600 dark:text-gray-400">How to apply:</span> <span className="text-gray-700 dark:text-gray-300">{b.howToApply}</span></p>
                    </div>
                    <a
                      href={`https://${b.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-green-600 dark:text-green-400 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {b.url}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Want a full screening?</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  For the most thorough check, use BenefitsCheckUp (benefitscheckup.org) from the National Council on Aging — it screens for 2,500+ programs in your specific state and county. It's free and takes about 10 minutes.
                </p>
              </div>

              <button
                onClick={() => setShowResults(false)}
                className="mt-4 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <ChevronLeft className="w-4 h-4" /> Change selections
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
