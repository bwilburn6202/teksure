import { useState } from 'react';
import { Phone, Copy, Check, Search, ChevronDown, ChevronUp, Printer } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface CallScript {
  id: string;
  emoji: string;
  title: string;
  scenario: string;
  category: string;
  script: string;
  pushback: { theySay: string; youSay: string }[];
  tips: string[];
}

const SCRIPTS: CallScript[] = [
  {
    id: 'cancel-sub',
    emoji: '❌',
    title: 'Cancel a Subscription',
    scenario: 'You want to cancel a magazine, gym, streaming service, or other recurring charge.',
    category: 'Money',
    script: `Hello, my name is [your name] and my account number is [account number from your bill]. I would like to cancel my subscription effective immediately.

Please confirm three things for me:
1. The cancellation is effective today.
2. There will be no further charges to my card or bank account.
3. The confirmation number for this cancellation.

Could you also send me a confirmation email at [your email]?`,
    pushback: [
      {
        theySay: '"We can offer you a 50% discount if you stay."',
        youSay: '"Thank you, but I have decided to cancel. Please proceed with the cancellation today."',
      },
      {
        theySay: '"You need to wait until the end of the billing period."',
        youSay: '"That is fine, but I want the service to end after this period and no further renewals. Please confirm in writing."',
      },
      {
        theySay: '"Let me transfer you to retention."',
        youSay: '"I understand, but my decision is final. Please cancel my account and provide a confirmation number."',
      },
    ],
    tips: [
      'Have your account number, recent bill, and a pen ready before calling.',
      'Write down the confirmation number, the agent\'s name, and the time of the call.',
      'Watch your bank or credit card statement for the next two months — if a charge appears, dispute it.',
    ],
  },
  {
    id: 'senior-discount',
    emoji: '💰',
    title: 'Ask for a Senior Discount',
    scenario: 'You want to know if a business offers a senior discount and apply it.',
    category: 'Money',
    script: `Hello, I am calling about my account. My name is [your name] and my account number is [account number].

I am a senior — I am [your age] — and I wanted to ask: do you offer any senior discounts on this service?

If you do, I would like to apply it to my account today. Could you also tell me whether the discount applies retroactively to recent bills?`,
    pushback: [
      {
        theySay: '"We do not have a senior discount."',
        youSay: '"I understand. Are there any other promotions or loyalty discounts available for long-time customers?"',
      },
      {
        theySay: '"You need to ask in person."',
        youSay: '"I prefer to handle this over the phone. Could you transfer me to someone who can apply the discount?"',
      },
    ],
    tips: [
      'Many companies offer discounts they do not advertise — always ask.',
      'AARP membership ($16/year) unlocks discounts at hotels, restaurants, insurance, and more.',
      'When applying for a new service, ask about senior discounts before signing up.',
    ],
  },
  {
    id: 'dispute-charge',
    emoji: '📋',
    title: 'Dispute a Charge on Your Bill',
    scenario: 'A charge on your credit card or utility bill is wrong, unauthorized, or you did not approve it.',
    category: 'Money',
    script: `Hello, I am calling to dispute a charge on my account. My name is [your name] and my account number is [account number].

The charge is dated [date] for [amount] from [merchant name]. I did not authorize this charge / This charge is incorrect because [reason].

I would like to:
1. Have this charge removed from my bill.
2. Ensure no future charges from this merchant go through.
3. Receive written confirmation of the dispute.

What information do you need from me, and how long will the investigation take?`,
    pushback: [
      {
        theySay: '"You need to contact the merchant first."',
        youSay: '"I have already tried that. By federal law (Fair Credit Billing Act for credit cards or Regulation E for debit), I am entitled to dispute the charge directly through you. Please open a dispute case."',
      },
      {
        theySay: '"This is past the dispute window."',
        youSay: '"What is the dispute window for my account, and is there any exception for fraud? I want this documented."',
      },
    ],
    tips: [
      'For credit cards: federal law gives you 60 days from the statement date to dispute.',
      'For debit cards: report fraud within 2 days for full protection (up to $50 liability), within 60 days for $500 limit.',
      'Always follow up phone disputes in writing (mail or email).',
    ],
  },
  {
    id: 'report-scam',
    emoji: '🚨',
    title: 'Report a Scam Call You Received',
    scenario: 'You received a scam call (IRS, Medicare, fake tech support, "grandparent in trouble") and want to report it.',
    category: 'Safety',
    script: `Hello, I am calling to report a scam phone call I received. My name is [your name].

The call came in on [date] at approximately [time] from the number [phone number]. The caller claimed to be [who they said they were — IRS, Medicare, a family member, etc.] and asked me to [what they wanted — wire money, give my SSN, buy gift cards, etc.].

I did NOT give them any information / I did give them [what you gave].

I would like to file a report. What information do you need from me?`,
    pushback: [
      {
        theySay: '"There is nothing we can do."',
        youSay: '"I understand the caller may be hard to trace, but I want this on record. Please file the report so it is in the database."',
      },
    ],
    tips: [
      'Report to the FTC at ReportFraud.ftc.gov (or 1-877-382-4357).',
      'For IRS impersonation, also report to TIGTA at 1-800-366-4484.',
      'For Medicare scams, call Senior Medicare Patrol at 1-877-808-2468.',
      'If you gave bank info or SSN, also call your bank and place a credit freeze with all three credit bureaus.',
    ],
  },
  {
    id: 'tech-support',
    emoji: '💻',
    title: 'Call Tech Support for Help',
    scenario: 'Your phone, computer, internet, or device has a problem and you need help from the company\'s support team.',
    category: 'Tech',
    script: `Hello, I need help with [device/service — my iPhone, my home internet, etc.]. My name is [your name] and my account number is [account number, if applicable].

The problem is: [describe in one sentence — for example, "My internet has not worked since this morning"].

I have already tried:
- [thing 1 — for example, restarting the modem]
- [thing 2 — for example, restarting my computer]

Could you walk me through the next steps to fix this?`,
    pushback: [
      {
        theySay: '"Have you tried restarting it?"',
        youSay: '"Yes, I restarted it [describe what you restarted]. The problem is still happening."',
      },
      {
        theySay: '"You need to upgrade to fix this."',
        youSay: '"Before I upgrade anything, I want to be sure that is what is needed. What specifically requires the upgrade? Can the existing service work?"',
      },
    ],
    tips: [
      'Write down the problem, what you have tried, and any error messages BEFORE you call.',
      'Ask for a case or ticket number — write it down for follow-up.',
      'If the agent recommends a paid service, ask "Will this fix the problem? What if it does not work?"',
    ],
  },
  {
    id: 'doctor-appt',
    emoji: '🏥',
    title: 'Schedule a Doctor Appointment',
    scenario: 'You need to call your doctor\'s office to schedule an appointment.',
    category: 'Health',
    script: `Hello, my name is [your name]. My date of birth is [date of birth] and I am a patient of Dr. [doctor\'s last name].

I would like to schedule [type of appointment — annual physical, follow-up, new concern]. The reason is [brief reason — for example, "annual checkup" or "ongoing knee pain"].

I prefer [morning / afternoon / specific day if applicable]. The earliest appointment that works for me is [date].

Do you have any cancellations sooner?`,
    pushback: [
      {
        theySay: '"The next available is two months out."',
        youSay: '"Could you please put me on the cancellation list? I can come in on short notice if something opens up."',
      },
      {
        theySay: '"You need a referral."',
        youSay: '"Could you tell me how to get one? Should I call my primary care doctor first?"',
      },
    ],
    tips: [
      'Have your insurance card and a calendar in hand before calling.',
      'Confirm whether the visit is in-person or telehealth.',
      'Ask about preparation needed (fasting, paperwork to fill out, what to bring).',
    ],
  },
  {
    id: 'utility-help',
    emoji: '💡',
    title: 'Ask for Utility Assistance',
    scenario: 'You are having trouble paying your electric, gas, water, or phone bill and need help with payment options.',
    category: 'Money',
    script: `Hello, my name is [your name] and my account number is [account number]. I am calling because I am having difficulty paying my [type of bill] this month.

I would like to ask:
1. Do you offer any payment plans or extensions?
2. Are there any senior assistance programs I qualify for?
3. Are there programs like LIHEAP (for energy bills) that you can connect me with?

I want to keep my service active and pay what I owe — I just need a little help managing this month.`,
    pushback: [
      {
        theySay: '"Payment is due by [date] or service will be cut."',
        youSay: '"I understand. I want to avoid that. What is the minimum I can pay today to keep service active while we set up a payment plan?"',
      },
    ],
    tips: [
      'LIHEAP (Low Income Home Energy Assistance) helps with heat and cooling bills — call 211 to find your local office.',
      'Most utilities have a "shutoff protection" period in winter for seniors and disabled customers.',
      'If you have Medicare, check if you qualify for "Lifeline" phone discount.',
    ],
  },
];

const CATEGORIES = ['All', 'Money', 'Safety', 'Tech', 'Health'];

export default function SeniorPhoneCallScripts() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = SCRIPTS.filter(s => {
    if (category !== 'All' && s.category !== category) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return s.title.toLowerCase().includes(q) || s.scenario.toLowerCase().includes(q);
    }
    return true;
  });

  const toggle = (id: string) => setExpanded(prev => (prev === id ? null : id));

  const copyScript = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore clipboard failures
    }
  };

  return (
    <>
      <SEOHead
        title="Phone Call Scripts for Seniors — TekSure"
        description="Copy-paste scripts for common phone calls seniors need to make: cancel subscriptions, ask for senior discounts, dispute charges, report scams, and more."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 print:hidden">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/60 mb-4">
              <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Phone Call Scripts</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Word-for-word scripts for common phone calls. Copy, print, or read straight from your screen.
            </p>
          </div>

          {/* Search + filters */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm mb-4 print:hidden">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search scripts (e.g. 'cancel', 'discount')"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                    category === c
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Scripts */}
          <div className="space-y-3">
            {filtered.map(s => {
              const isOpen = expanded === s.id;
              return (
                <div key={s.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggle(s.id)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors print:hidden"
                  >
                    <span className="text-3xl">{s.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{s.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{s.scenario}</p>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>

                  <div className="hidden print:block px-5 pt-4">
                    <h2 className="text-lg font-bold">{s.emoji} {s.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{s.scenario}</p>
                  </div>

                  {(isOpen || true) && (
                    <div className={`${isOpen ? 'block' : 'hidden'} print:block px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-4`}>
                      {/* Script */}
                      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 relative">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm uppercase tracking-wide">What to Say</p>
                          <button
                            onClick={() => copyScript(s.id, s.script)}
                            className="print:hidden flex items-center gap-1 text-xs text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100"
                          >
                            {copiedId === s.id ? <><Check className="w-3.5 h-3.5" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                          </button>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 text-sm whitespace-pre-line leading-relaxed">{s.script}</p>
                      </div>

                      {/* Pushback handling */}
                      {s.pushback.length > 0 && (
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm uppercase tracking-wide mb-2">If They Push Back</p>
                          <div className="space-y-2">
                            {s.pushback.map((p, i) => (
                              <div key={i} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>If they say:</strong> {p.theySay}</p>
                                <p className="text-sm text-gray-800 dark:text-gray-200"><strong>You say:</strong> {p.youSay}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      {s.tips.length > 0 && (
                        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
                          <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm uppercase tracking-wide mb-2">Quick Tips</p>
                          <ul className="space-y-1">
                            {s.tips.map((tip, i) => (
                              <li key={i} className="flex gap-2 text-sm text-amber-900 dark:text-amber-100">
                                <span className="text-amber-600 dark:text-amber-400">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Print button */}
          <div className="mt-6 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print All Scripts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
