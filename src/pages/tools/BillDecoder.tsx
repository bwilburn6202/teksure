import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Receipt,
  Wifi,
  Phone,
  Stethoscope,
  ShieldCheck,
  Zap,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Flag,
  Info,
} from 'lucide-react';

type BillType = 'internet' | 'phone' | 'medical' | 'insurance' | 'utility';

interface LineItem {
  id: string;
  label: string;
  amount: string;
  plainEnglish: string;
  status: 'normal' | 'questionable' | 'scammy';
  action: string;
}

interface BillData {
  type: BillType;
  title: string;
  icon: typeof Wifi;
  provider: string;
  accountDetail: string;
  items: LineItem[];
  questions: string[];
  disputeGuidance: string;
  resourceLinks: { label: string; href: string }[];
}

const BILLS: Record<BillType, BillData> = {
  internet: {
    type: 'internet',
    title: 'Internet Bill',
    icon: Wifi,
    provider: 'Sample Cable Co.',
    accountDetail: 'Account #XXX-0042 — Gigabit plan',
    items: [
      {
        id: 'service',
        label: 'Monthly internet service',
        amount: '$79.99',
        plainEnglish: 'The price you pay for the actual internet. This is almost always higher than the "advertised" price because promotional credits expire after 12 months.',
        status: 'normal',
        action: 'If this jumped recently, your promo ended. Call and ask to renew it — they almost always will.',
      },
      {
        id: 'equipment',
        label: 'Equipment rental (modem/router)',
        amount: '$15.00',
        plainEnglish: 'A monthly rental fee for the modem and router they gave you. Over 3 years, that is $540 to rent a $120 box.',
        status: 'scammy',
        action: 'Buy your own modem (around $100) and router (around $100). You break even in about 13 months.',
      },
      {
        id: 'broadcast-tv',
        label: 'Broadcast TV fee',
        amount: '$22.75',
        plainEnglish: 'For cable TV bundles only. This covers the cost of "free" local channels (ABC, NBC, CBS, Fox). It is not required by law — the cable company invented this line item to raise prices without raising the advertised price.',
        status: 'scammy',
        action: 'Call and ask them to waive or reduce it. Threaten to cancel. You can also just watch local channels for free with a $30 antenna.',
      },
      {
        id: 'regional-sports',
        label: 'Regional sports fee',
        amount: '$14.45',
        plainEnglish: 'A charge for local sports channels, even if you never watch sports. Same trick as the broadcast TV fee.',
        status: 'scammy',
        action: 'If you do not watch sports, this is a strong argument to cancel cable TV and go streaming-only.',
      },
      {
        id: 'fcc',
        label: 'FCC regulatory fee',
        amount: '$0.08',
        plainEnglish: 'A tiny government-required fee that helps fund the FCC. This one is real and very small.',
        status: 'normal',
        action: 'Nothing to do here — it is legitimate and pennies.',
      },
      {
        id: 'infra',
        label: 'Internet infrastructure fee',
        amount: '$3.99',
        plainEnglish: 'A vague, made-up fee that is just more hidden price. It is not a tax and it is not going anywhere special — it is profit.',
        status: 'scammy',
        action: 'Call and complain. It can often be removed on request, especially if you threaten to cancel.',
      },
      {
        id: 'late',
        label: 'Late payment fee',
        amount: '$10.00',
        plainEnglish: 'You pay this if your payment was late. Usually a flat $10 or so.',
        status: 'questionable',
        action: 'If this is your first time being late in a year, call and ask them to waive it. They almost always say yes the first time.',
      },
      {
        id: 'taxes',
        label: 'Taxes and surcharges',
        amount: '$4.52',
        plainEnglish: 'Real state and federal taxes on telecom services. These are genuine.',
        status: 'normal',
        action: 'Nothing to do — taxes are taxes.',
      },
      {
        id: 'promo',
        label: 'Promotional credit (ENDING NEXT MONTH)',
        amount: '-$20.00',
        plainEnglish: 'A discount you signed up with that is about to expire. Your bill will jump $20/month starting next cycle.',
        status: 'questionable',
        action: 'Call BEFORE it expires and ask for a new promo or to switch to a retention department. Mention competitor pricing.',
      },
    ],
    questions: [
      'Why did my bill go up? (Usually: a promo ended.)',
      'Can you waive the equipment rental if I buy my own modem?',
      'Is there a current promotion I can switch to?',
      'Is this broadcast TV/regional sports fee optional?',
      'What would it cost to drop the TV bundle entirely?',
    ],
    disputeGuidance: 'Call and ask for the "retention" or "loyalty" department — not regular customer service. Be polite, mention you are shopping around (most areas have at least one fiber competitor now), and ask what they can do. If you get nowhere, file a complaint at fcc.gov/consumers — internet companies take FCC complaints very seriously and usually call you back within a week with a better offer.',
    resourceLinks: [
      { label: 'FCC complaint form', href: 'https://consumercomplaints.fcc.gov/' },
      { label: 'TekSure: Lower your internet bill', href: '/guides' },
    ],
  },
  phone: {
    type: 'phone',
    title: 'Phone Bill',
    icon: Phone,
    provider: 'Sample Wireless Co.',
    accountDetail: '2 lines — Unlimited plan',
    items: [
      {
        id: 'base',
        label: 'Base plan (2 lines, Unlimited)',
        amount: '$90.00',
        plainEnglish: 'The actual cost of the phone service itself. Often advertised as "$45/line" but only with auto-pay and paperless billing.',
        status: 'normal',
        action: 'Make sure you have auto-pay and paperless billing on — that is usually $10/line discount.',
      },
      {
        id: 'universal-service',
        label: 'Federal universal service fee',
        amount: '$4.82',
        plainEnglish: 'A real federal fee that helps fund phone service in rural areas and for low-income families.',
        status: 'normal',
        action: 'Nothing to do — this is a legitimate federal charge.',
      },
      {
        id: 'regulatory',
        label: 'Regulatory cost recovery charge',
        amount: '$3.29',
        plainEnglish: 'Sounds official, but this is a fee the carrier created to cover their own regulatory costs. It is not a tax.',
        status: 'scammy',
        action: 'You generally cannot get this removed, but know it is bloat. Use it when comparison shopping.',
      },
      {
        id: 'device-payment',
        label: 'Device payment plan (iPhone, month 14/24)',
        amount: '$41.63',
        plainEnglish: 'The monthly installment on a phone you are financing. This is basically a $1,000 phone split into 24 payments.',
        status: 'normal',
        action: 'If you pay this off early, make sure you also renegotiate the plan — some carriers force you onto a cheaper plan once the phone is paid off.',
      },
      {
        id: 'insurance',
        label: 'Device protection plan',
        amount: '$17.00',
        plainEnglish: 'Phone insurance, usually per line. Covers drops, water damage, and loss — but with deductibles of $100–$250 per claim.',
        status: 'questionable',
        action: 'Worth it only if you tend to break phones. If your phone is older than 18 months, cancel — it is not worth insuring anymore.',
      },
      {
        id: 'third-party',
        label: 'Third-party charges (text services, ringtones, etc.)',
        amount: '$9.99',
        plainEnglish: 'Charges from OUTSIDE companies that somehow got added to your bill. This is called "cramming" and it is often a scam.',
        status: 'scammy',
        action: 'Call immediately and demand the charge be removed AND that third-party billing be blocked on your account. Most carriers let you block this for free.',
      },
      {
        id: 'taxes',
        label: 'Local taxes and 911 fee',
        amount: '$6.14',
        plainEnglish: 'State, city, and 911 fees. These are real government charges.',
        status: 'normal',
        action: 'Nothing to do — these are genuine taxes.',
      },
    ],
    questions: [
      'Am I paying for any third-party services I did not sign up for?',
      'Can you block third-party billing on my account?',
      'Is my device paid off — can my plan be cheaper now?',
      'What promotions are available if I sign a new 2-year agreement?',
      'Is there a cheaper plan that still fits how I use my phone?',
    ],
    disputeGuidance: 'For third-party "cramming" charges, you are legally entitled to a refund. If the carrier refuses, file a complaint with the FCC (fcc.gov/consumers) and your state Attorney General. These almost always get refunded. Check every bill for surprise charges — cramming quietly adds up to billions each year.',
    resourceLinks: [
      { label: 'FCC on cramming', href: 'https://www.fcc.gov/consumers/guides/cramming-unauthorized-charges-your-phone-bill' },
      { label: 'File an FCC complaint', href: 'https://consumercomplaints.fcc.gov/' },
    ],
  },
  medical: {
    type: 'medical',
    title: 'Medical Bill / EOB',
    icon: Stethoscope,
    provider: 'Sample Hospital',
    accountDetail: 'Visit date: 03/14/2026 — Outpatient',
    items: [
      {
        id: 'cpt',
        label: 'Procedure code 99213 (office visit)',
        amount: '$285.00 (billed)',
        plainEnglish: 'The CPT code identifies what was done. 99213 is a standard 15-minute office visit. The billed amount is the "sticker price" — what they bill when they do not have a contract.',
        status: 'normal',
        action: 'Look up your CPT codes at fairhealthconsumer.org to see typical prices in your area.',
      },
      {
        id: 'allowed',
        label: 'Allowed amount (negotiated rate)',
        amount: '$142.00',
        plainEnglish: 'The amount your insurance and the doctor have agreed is a fair price. This should be way lower than the billed amount.',
        status: 'normal',
        action: 'If your insurance paid based on the billed amount instead of the allowed amount, that is a mistake — call them.',
      },
      {
        id: 'plan-paid',
        label: 'Plan paid',
        amount: '$113.60',
        plainEnglish: 'The amount your insurance company paid after their contract discount.',
        status: 'normal',
        action: 'Verify this matches what your insurance company\'s Explanation of Benefits (EOB) shows.',
      },
      {
        id: 'deductible',
        label: 'Deductible applied',
        amount: '$0.00',
        plainEnglish: 'Anything you had to pay because you had not hit your yearly deductible yet. Zero means your deductible was already met.',
        status: 'normal',
        action: 'Track your deductible in your insurance portal so there are no surprises.',
      },
      {
        id: 'copay',
        label: 'Copay / coinsurance',
        amount: '$28.40',
        plainEnglish: 'Your share of the allowed amount. Copay is a flat fee (like $25 per visit). Coinsurance is a percentage (like 20% of the cost).',
        status: 'normal',
        action: 'This is what you actually owe. Pay this part.',
      },
      {
        id: 'adjustment',
        label: 'Provider adjustment (write-off)',
        amount: '-$143.00',
        plainEnglish: 'The amount the doctor had to knock off their sticker price to match the insurance contract. You do not owe this.',
        status: 'normal',
        action: 'Make sure this appears on your bill. Without it, the provider is double-billing.',
      },
      {
        id: 'oon',
        label: 'Out-of-network charge',
        amount: '$412.00',
        plainEnglish: 'A provider you saw (often an anesthesiologist or lab) was not in your network, even at an in-network hospital. You got blindsided.',
        status: 'scammy',
        action: 'Fight this. Under the No Surprises Act (2022), most surprise out-of-network bills at in-network hospitals are illegal. File a complaint.',
      },
      {
        id: 'balance-billing',
        label: 'Balance billing',
        amount: '$186.00',
        plainEnglish: 'The provider is trying to bill you for the difference between their sticker price and what insurance paid. This is often illegal.',
        status: 'scammy',
        action: 'For in-network care and most emergencies, balance billing is banned. Call the provider and demand they remove it. Cite the No Surprises Act.',
      },
    ],
    questions: [
      'Can I have an itemized bill with every CPT code and charge spelled out?',
      'Does this charge include a surprise out-of-network provider?',
      'Is this balance billing — and is it legal under the No Surprises Act?',
      'What is your financial assistance policy? (Nonprofit hospitals must have one.)',
      'Can I get a cash discount if I pay today?',
    ],
    disputeGuidance: 'ALWAYS request an itemized bill before paying anything — studies show 30–80% of medical bills have errors. Dispute surprise billing under the federal No Surprises Act by calling 1-800-985-3059 or filing at cms.gov/nosurprises. Most hospitals will negotiate down cash payments by 30–50% if you simply ask. Nonprofit hospitals are federally required to offer financial assistance — ask.',
    resourceLinks: [
      { label: 'No Surprises Act help', href: 'https://www.cms.gov/nosurprises' },
      { label: 'Price-check CPT codes', href: 'https://www.fairhealthconsumer.org/' },
    ],
  },
  insurance: {
    type: 'insurance',
    title: 'Insurance Premium Bill',
    icon: ShieldCheck,
    provider: 'Sample Health Plan',
    accountDetail: 'Member ID: XXX-987 — PPO Plan',
    items: [
      {
        id: 'premium',
        label: 'Monthly premium',
        amount: '$612.00',
        plainEnglish: 'The amount you pay every month for coverage, even if you never see a doctor. Think of it like rent for your insurance.',
        status: 'normal',
        action: 'If this jumped at renewal, shop around — most people never do. Check the health exchange (healthcare.gov) every November.',
      },
      {
        id: 'copay',
        label: 'Your copay (per visit)',
        amount: '$30 primary / $60 specialist',
        plainEnglish: 'The flat fee you pay when you see a doctor. Primary care is usually cheaper than a specialist.',
        status: 'normal',
        action: 'Know these numbers before every visit. Ask the front desk to confirm your copay before being seen.',
      },
      {
        id: 'deductible',
        label: 'Annual deductible remaining',
        amount: '$1,420 of $2,500',
        plainEnglish: 'How much more you have to pay out of pocket before insurance kicks in for most services. Resets every January 1st.',
        status: 'normal',
        action: 'Schedule elective procedures late in the year if your deductible is already met — they will be much cheaper.',
      },
      {
        id: 'oop',
        label: 'Out-of-pocket maximum progress',
        amount: '$2,840 of $8,700',
        plainEnglish: 'Once you hit your out-of-pocket max, insurance pays 100% of covered care for the rest of the year. It is the most you should ever have to pay in a year.',
        status: 'normal',
        action: 'If you are close to hitting it (say, $500 away), consider scheduling any needed procedures before year end.',
      },
      {
        id: 'prescription',
        label: 'Prescription tier copays',
        amount: 'T1: $10 / T2: $40 / T3: $75',
        plainEnglish: 'Your cost per prescription depends on its "tier." Generic is tier 1, brand-name preferred is tier 2, brand-name non-preferred is tier 3.',
        status: 'normal',
        action: 'Always ask for generic. Ask your doctor if a tier 1 alternative would work.',
      },
    ],
    questions: [
      'Is my current doctor still in-network?',
      'Has the formulary (covered drug list) changed?',
      'What is my actual deductible and out-of-pocket max for this year?',
      'If I switch plans at open enrollment, what would I save?',
    ],
    disputeGuidance: 'Premium increases at renewal are not inevitable. Every November, spend one hour comparing your current plan to alternatives on healthcare.gov or your state exchange. Many people overpay by $1,000+/year because they auto-renew. If you have employer coverage, check if your spouse\'s plan is better.',
    resourceLinks: [
      { label: 'HealthCare.gov marketplace', href: 'https://www.healthcare.gov/' },
      { label: 'Medicare.gov (if 65+)', href: 'https://www.medicare.gov/' },
    ],
  },
  utility: {
    type: 'utility',
    title: 'Utility Bill (Electric)',
    icon: Zap,
    provider: 'Sample Power Co.',
    accountDetail: 'Account #XX-2048 — Residential',
    items: [
      {
        id: 'supply',
        label: 'Supply charge (the electricity itself)',
        amount: '$78.40',
        plainEnglish: 'The cost of the actual electricity you used. This is the part you can shop for in deregulated states.',
        status: 'normal',
        action: 'In deregulated states (TX, PA, OH, IL, NJ, NY, MA, CT, MD), shop around for a cheaper supplier. You can save 10–30%.',
      },
      {
        id: 'delivery',
        label: 'Delivery charge',
        amount: '$42.18',
        plainEnglish: 'The cost of getting the electricity to your house through the wires. You cannot shop for this — only your local utility provides it.',
        status: 'normal',
        action: 'You are stuck with this charge. Use it to check if switching to time-of-use rates would help.',
      },
      {
        id: 'customer-charge',
        label: 'Customer charge (fixed monthly fee)',
        amount: '$10.50',
        plainEnglish: 'A flat fee just for being a customer, even if you used zero electricity. Pretty much unavoidable.',
        status: 'normal',
        action: 'You cannot avoid this, but know it is there when calculating if solar panels or a battery would pay off.',
      },
      {
        id: 'peak',
        label: 'Peak rate usage',
        amount: '$0.24/kWh',
        plainEnglish: 'What electricity costs between 3 PM and 9 PM on weekdays — the most expensive time to use power.',
        status: 'normal',
        action: 'Shift laundry, dishwashers, and EV charging to off-peak hours. Could save $30–100/month.',
      },
      {
        id: 'off-peak',
        label: 'Off-peak rate usage',
        amount: '$0.09/kWh',
        plainEnglish: 'What electricity costs during overnight and weekend hours — the cheapest time to use power.',
        status: 'normal',
        action: 'Run your big appliances during these times. Use a smart plug to automate it.',
      },
      {
        id: 'taxes',
        label: 'State and local taxes',
        amount: '$7.29',
        plainEnglish: 'Real taxes, genuinely going to the government.',
        status: 'normal',
        action: 'Nothing to do — these are legitimate.',
      },
      {
        id: 'efficiency',
        label: 'Energy efficiency surcharge',
        amount: '$3.15',
        plainEnglish: 'A state-mandated charge that funds rebates for insulation, efficient appliances, and home energy audits.',
        status: 'normal',
        action: 'You are paying for these programs — use them! Most utilities offer free home energy audits and rebates up to $500 on appliances.',
      },
    ],
    questions: [
      'Am I on the best rate plan for my usage? (Ask for "time-of-use" or "budget billing" comparison.)',
      'Is there a lower rate for seniors or low-income customers?',
      'What rebates and free home audits are available right now?',
      'Can I switch suppliers in my state for a cheaper rate?',
    ],
    disputeGuidance: 'If a bill is wildly higher than usual, demand a meter read and usage breakdown. Sometimes meters are misread for months before anyone notices. In deregulated states, shop around every 1–2 years — supplier prices shift a lot. Most utilities offer free energy audits that pay for themselves in one season.',
    resourceLinks: [
      { label: 'LIHEAP energy assistance', href: 'https://www.acf.hhs.gov/ocs/programs/liheap' },
      { label: 'ENERGY STAR rebate finder', href: 'https://www.energystar.gov/rebate-finder' },
    ],
  },
};

const TYPE_META: Array<{ type: BillType; label: string; icon: typeof Wifi }> = [
  { type: 'internet', label: 'Internet bill', icon: Wifi },
  { type: 'phone', label: 'Phone bill', icon: Phone },
  { type: 'medical', label: 'Medical / EOB', icon: Stethoscope },
  { type: 'insurance', label: 'Insurance premium', icon: ShieldCheck },
  { type: 'utility', label: 'Utility bill', icon: Zap },
];

function statusBadge(status: LineItem['status']) {
  if (status === 'normal') {
    return (
      <Badge variant="secondary" className="gap-1 bg-green-100 text-green-900 dark:bg-green-900/40 dark:text-green-200">
        <CheckCircle className="h-3 w-3" /> Normal
      </Badge>
    );
  }
  if (status === 'questionable') {
    return (
      <Badge variant="secondary" className="gap-1 bg-yellow-100 text-yellow-900 dark:bg-yellow-900/40 dark:text-yellow-200">
        <HelpCircle className="h-3 w-3" /> Worth questioning
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="gap-1 bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-200">
      <AlertTriangle className="h-3 w-3" /> Often bloat or scammy
    </Badge>
  );
}

export default function BillDecoder() {
  const [active, setActive] = useState<BillType>('internet');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const bill = BILLS[active];
  const Icon = bill.icon;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Bill Decoder — Understand Internet, Phone, Medical, & Insurance Bills | TekSure"
        description="Decode confusing bills line by line. Internet, phone, medical, insurance, and utility bills explained in plain English — with action steps for fees you should question."
      />

      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Bill Decoder' }]} />

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Receipt className="h-4 w-4" />
              Line-by-line decoder
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Your Bill Is Confusing On Purpose. We'll Help You Read It.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tap any line on a sample bill to see what it means, whether the charge is normal or
              should be questioned, and exactly what to do if it seems wrong.
            </p>
          </div>
        </section>

        {/* Bill type tabs */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {TYPE_META.map((t) => {
                const TabIcon = t.icon;
                const isActive = t.type === active;
                return (
                  <button
                    key={t.type}
                    onClick={() => { setActive(t.type); setOpenItem(null); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card hover:bg-muted'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sample bill */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
              {/* Bill header */}
              <div className="bg-muted/50 border-b p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-bold">{bill.provider} — {bill.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{bill.accountDetail}</p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  This is a realistic example bill. Click any line to see what it means.
                </p>
              </div>

              {/* Line items */}
              <div className="divide-y">
                {bill.items.map((item) => {
                  const isOpen = openItem === item.id;
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => setOpenItem(isOpen ? null : item.id)}
                        className="w-full p-4 md:p-5 flex items-start justify-between gap-4 hover:bg-muted/30 text-left transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.label}</div>
                          <div className="mt-1">{statusBadge(item.status)}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-semibold tabular-nums">{item.amount}</div>
                          <div className="text-xs text-primary mt-1">
                            {isOpen ? 'Hide' : 'Explain'}
                          </div>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-4 md:px-5 pb-5 bg-muted/20 space-y-3">
                          <div>
                            <div className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                              What it means
                            </div>
                            <p className="text-sm">{item.plainEnglish}</p>
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                              What to do
                            </div>
                            <p className="text-sm flex items-start gap-2">
                              <Flag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              {item.action}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Questions to ask */}
            <div className="mt-8 bg-card border rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Questions you should ask
              </h3>
              <ul className="space-y-2">
                {bill.questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold">{i + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dispute guidance */}
            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-800 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
                When to dispute
              </h3>
              <p className="text-sm leading-relaxed">{bill.disputeGuidance}</p>
            </div>

            {/* Resource links */}
            <div className="mt-6 bg-card border rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Helpful resources
              </h3>
              <ul className="space-y-2">
                {bill.resourceLinks.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target={r.href.startsWith('http') ? '_blank' : undefined}
                      rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary hover:underline font-medium"
                    >
                      {r.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button asChild size="lg" variant="outline">
                <a href="/tools">← Back to all tools</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
