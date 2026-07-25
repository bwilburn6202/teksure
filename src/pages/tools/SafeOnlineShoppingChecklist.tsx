import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  ShieldAlert,
  Shield,
  CheckCircle2,
  XCircle,
  Circle,
  RotateCcw,
  ExternalLink,
  Lock,
  AlertTriangle,
} from 'lucide-react';

interface Check {
  id: string;
  question: string;
  whyItMatters: string;
  goodSign: string;
  badSign: string;
  tip?: string;
  isSafetyKiller?: boolean;
}

const CHECKS: Check[] = [
  {
    id: 'https',
    question: 'Does the address bar show "https://" (with an "s") and a padlock icon?',
    whyItMatters: 'HTTPS means your connection is encrypted. HTTP (no "s") means your payment data travels in plain text — anyone can intercept it.',
    goodSign: 'Address starts with "https://" and shows a 🔒 padlock.',
    badSign: 'Address starts with "http://" (no padlock, or broken padlock icon).',
    isSafetyKiller: true,
  },
  {
    id: 'url',
    question: 'Is the web address (URL) spelled exactly right — no extra words, typos, or substituted letters?',
    whyItMatters: 'Scammers register sites like "amaz0n.com," "walmrt.com," or "paypa1.com" — close enough to fool a quick glance.',
    goodSign: 'URL is the exact address you\'d expect (amazon.com, target.com, medicare.gov).',
    badSign: 'URL has extra words (amazon-clearance.shop), swapped letters, or a different ending (.net instead of .com).',
    tip: 'Government agencies always use .gov — not .com, .org, or .net.',
    isSafetyKiller: true,
  },
  {
    id: 'known_site',
    question: 'Is this a retailer or company you have bought from before — or one you looked up directly?',
    whyItMatters: 'You landed here from a search result or social media ad — not by typing the address yourself. Scammers pay for ads to appear next to searches for major brands.',
    goodSign: 'You typed the address directly, or you recognize this site from previous purchases.',
    badSign: 'You found this site through a social media ad, a pop-up, or a search result you are not sure about.',
    tip: 'When in doubt, go directly to a trusted retailer (amazon.com, walmart.com, target.com) by typing the address yourself.',
  },
  {
    id: 'contact_info',
    question: 'Does the site show a real phone number and physical address?',
    whyItMatters: 'Legitimate businesses disclose their contact information. Scam sites often have no phone number, a disconnected number, or a fake address.',
    goodSign: 'A working phone number and real street address are listed in the footer or "Contact Us" page.',
    badSign: 'No phone number, a number that goes nowhere, or only a generic contact form with no address.',
  },
  {
    id: 'price',
    question: 'Is the price realistic — not suspiciously lower than what you see elsewhere?',
    whyItMatters: 'Prices 50–80% below normal market value are the most common bait used by scam sites. Real sales are rarely more than 30–40% off.',
    goodSign: 'Price is in the normal range, or a reasonable discount (10–40% off).',
    badSign: 'Price is far below what this item normally costs — iPhone for $89, designer bag for $30, brand-name shoes for $12.',
    isSafetyKiller: true,
  },
  {
    id: 'reviews',
    question: 'Have you checked third-party reviews for this company — not reviews on the site itself?',
    whyItMatters: 'Sites can fake their own customer reviews. Real feedback from other buyers shows up on BBB.org, Trustpilot, or in Google search results.',
    goodSign: 'Positive reviews on BBB.org or Trustpilot, or established seller ratings on a major platform.',
    badSign: 'No external reviews, or many reports of non-delivery or fraud when you search "[company name] scam."',
    tip: 'Search "[company name] scam" in Google before any first-time purchase.',
  },
  {
    id: 'return_policy',
    question: 'Does the site have a clear return and refund policy?',
    whyItMatters: 'Scam sites either have no return policy or a policy buried in confusing language that effectively means no returns. Legitimate retailers make their return policy easy to find.',
    goodSign: 'Return policy is clearly stated — e.g., "30-day returns, free shipping label."',
    badSign: 'No return policy found, or a policy full of exceptions that make returns impossible.',
  },
  {
    id: 'payment',
    question: 'Is payment by credit or debit card — not gift card, wire transfer, or cryptocurrency?',
    whyItMatters: 'Credit cards have fraud protection — you can dispute a charge and get your money back. Gift cards, wire transfers, and crypto are essentially untraceable and unrecoverable.',
    goodSign: 'Checkout accepts major credit/debit cards (Visa, Mastercard, American Express) or PayPal.',
    badSign: 'Site asks for payment by gift card, bank wire transfer, Zelle, Venmo, cryptocurrency, or money order.',
    isSafetyKiller: true,
    tip: 'Using a credit card (not debit) gives you the strongest fraud protection through the chargeback process.',
  },
];

type Answer = 'yes' | 'no' | null;

const RATING = (answers: Record<string, Answer>) => {
  const killerFailed = CHECKS.filter(
    (c) => c.isSafetyKiller && answers[c.id] === 'no',
  ).length;
  const totalAnswered = Object.values(answers).filter((a) => a !== null).length;
  const yesCount = Object.values(answers).filter((a) => a === 'yes').length;

  if (totalAnswered === 0) return null;
  if (killerFailed > 0) return 'danger';
  if (yesCount === totalAnswered && totalAnswered >= 6) return 'safe';
  if (yesCount >= totalAnswered * 0.75) return 'caution';
  return 'danger';
};

export default function SafeOnlineShoppingChecklist() {
  const [answers, setAnswers] = useState<Record<string, Answer>>(
    Object.fromEntries(CHECKS.map((c) => [c.id, null])),
  );
  const [expanded, setExpanded] = useState<string | null>(CHECKS[0].id);

  const setAnswer = (id: string, val: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
    const idx = CHECKS.findIndex((c) => c.id === id);
    if (idx < CHECKS.length - 1) {
      setExpanded(CHECKS[idx + 1].id);
    } else {
      setExpanded(null);
    }
  };

  const reset = () => {
    setAnswers(Object.fromEntries(CHECKS.map((c) => [c.id, null])));
    setExpanded(CHECKS[0].id);
  };

  const answered = Object.values(answers).filter((a) => a !== null).length;
  const rating = RATING(answers);
  const killerFailed = CHECKS.filter((c) => c.isSafetyKiller && answers[c.id] === 'no');

  return (
    <>
      <SEOHead
        title="Safe Online Shopping Checklist | TekSure"
        description="8 quick checks before you enter payment info on any website. Catch fake sites before they catch you."
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
        <div className="max-w-xl mx-auto px-4 pt-6">
          <PageBreadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'Safe Shopping Checklist' },
            ]}
          />

          <div className="text-center mb-8 mt-4">
            <div className="text-5xl mb-3">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Safe Online Shopping Checklist
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Answer 8 quick questions before buying from an unfamiliar website. Takes 60 seconds.
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {answered}/{CHECKS.length} checks done
            </p>
            <Button variant="ghost" size="sm" onClick={reset} className="text-gray-500">
              <RotateCcw size={14} className="mr-1" /> Start over
            </Button>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-400"
              style={{ width: `${(answered / CHECKS.length) * 100}%` }}
            />
          </div>

          {/* Checks */}
          <div className="space-y-3 mb-6">
            {CHECKS.map((check, idx) => {
              const ans = answers[check.id];
              const isOpen = expanded === check.id;

              return (
                <Card
                  key={check.id}
                  className={
                    ans === 'no' && check.isSafetyKiller
                      ? 'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-950/20'
                      : ans === 'yes'
                        ? 'border-green-200 dark:border-green-800'
                        : ''
                  }
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full flex items-start gap-3 p-4 text-left"
                      onClick={() => setExpanded(isOpen ? null : check.id)}
                    >
                      <span className="shrink-0 mt-0.5 text-sm font-bold text-gray-400 w-5 text-center">
                        {idx + 1}
                      </span>
                      {ans === 'yes' ? (
                        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      ) : ans === 'no' ? (
                        <XCircle size={20} className={`shrink-0 mt-0.5 ${check.isSafetyKiller ? 'text-red-500' : 'text-orange-400'}`} />
                      ) : (
                        <Circle size={20} className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${ans ? 'text-gray-600 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                          {check.question}
                        </p>
                        {check.isSafetyKiller && ans === null && (
                          <Badge className="mt-1 text-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                            Critical check
                          </Badge>
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 dark:border-gray-700 p-4 space-y-3">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {check.whyItMatters}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-green-50 dark:bg-green-900/20 rounded p-2 text-green-800 dark:text-green-200">
                            <span className="font-semibold block mb-0.5">✅ Good sign</span>
                            {check.goodSign}
                          </div>
                          <div className="bg-red-50 dark:bg-red-900/20 rounded p-2 text-red-800 dark:text-red-200">
                            <span className="font-semibold block mb-0.5">🚩 Red flag</span>
                            {check.badSign}
                          </div>
                        </div>
                        {check.tip && (
                          <p className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded p-2">
                            💡 {check.tip}
                          </p>
                        )}
                        <div className="flex gap-2 pt-1">
                          <Button
                            size="sm"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => setAnswer(check.id, 'yes')}
                          >
                            <CheckCircle2 size={14} className="mr-1.5" /> Yes
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                            onClick={() => setAnswer(check.id, 'no')}
                          >
                            <XCircle size={14} className="mr-1.5" /> No
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Result */}
          {rating && (
            <Card
              className={`mb-4 border-2 ${
                rating === 'safe'
                  ? 'border-green-300 dark:border-green-700'
                  : rating === 'caution'
                    ? 'border-yellow-300 dark:border-yellow-700'
                    : 'border-red-300 dark:border-red-700'
              }`}
            >
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  {rating === 'safe' ? (
                    <ShieldCheck size={24} className="text-green-500" />
                  ) : rating === 'caution' ? (
                    <Shield size={24} className="text-yellow-500" />
                  ) : (
                    <ShieldAlert size={24} className="text-red-500" />
                  )}
                  <h2
                    className={`text-lg font-bold ${
                      rating === 'safe'
                        ? 'text-green-700 dark:text-green-300'
                        : rating === 'caution'
                          ? 'text-yellow-700 dark:text-yellow-300'
                          : 'text-red-700 dark:text-red-300'
                    }`}
                  >
                    {rating === 'safe'
                      ? 'This site looks safe to buy from.'
                      : rating === 'caution'
                        ? 'Proceed with caution.'
                        : 'Do NOT enter payment information on this site.'}
                  </h2>
                </div>

                {rating === 'safe' && (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This site passes all the key safety checks. Use a credit card (not debit) for the strongest fraud protection if anything goes wrong later.
                  </p>
                )}

                {rating === 'caution' && (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This site passed some checks but not all. Consider buying the same product from a retailer you already know and trust, like Amazon, Walmart.com, or Target.com.
                  </p>
                )}

                {rating === 'danger' && killerFailed.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                      This site failed critical safety checks:
                    </p>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      {killerFailed.map((c) => (
                        <li key={c.id} className="flex items-start gap-1.5">
                          <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                          {c.question}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Close this site. Find what you need at a retailer you already know and trust.
                    </p>
                  </div>
                )}

                <div className="pt-1 flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.bbb.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={12} /> Check BBB.org
                  </a>
                  <a
                    href="https://www.trustpilot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={12} /> Check Trustpilot
                  </a>
                  <a
                    href="https://reportfraud.ftc.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={12} /> Report to FTC
                  </a>
                </div>
              </CardContent>
            </Card>
          )}

          {!rating && answered === 0 && (
            <div className="text-center py-6 text-gray-400 dark:text-gray-600">
              <Lock size={36} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">Tap each check above to answer yes or no.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
