import { useState } from 'react';
import { ArrowLeft, ExternalLink, Phone, ChevronDown, ChevronUp, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Data ────────────────────────────────────────────────────────────────────── */

interface Task {
  title: string;
  steps: string[];
  whatYouNeed: string[];
}

interface ServiceCategory {
  id: string;
  emoji: string;
  title: string;
  description: string;
  officialUrl: string;
  officialLabel: string;
  phoneNumber: string;
  phoneName: string;
  tasks: Task[];
}

const categories: ServiceCategory[] = [
  {
    id: 'social-security',
    emoji: '🏛️',
    title: 'Social Security',
    description: 'Check benefits, replace your card, apply for retirement, and manage your account.',
    officialUrl: 'https://www.ssa.gov',
    officialLabel: 'ssa.gov',
    phoneNumber: '1-800-772-1213',
    phoneName: 'Social Security Administration',
    tasks: [
      {
        title: 'Check your benefits status',
        steps: [
          'Go to ssa.gov and click "my Social Security" at the top of the page.',
          'Sign in with your username and password. If you don\'t have an account yet, see the task below to create one.',
          'Once logged in, click "My Home" to see your benefits overview.',
          'You\'ll see your monthly payment amount, payment dates, and any recent changes.',
        ],
        whatYouNeed: ['Your my Social Security username and password', 'Your Social Security number'],
      },
      {
        title: 'Replace your Social Security card',
        steps: [
          'Go to ssa.gov and sign in to your my Social Security account.',
          'Click "Replacement Documents" in the menu.',
          'Choose "Replace Social Security Card."',
          'Confirm your information is correct and submit the request.',
          'Your new card will arrive by mail within 10–14 business days. There is no fee.',
        ],
        whatYouNeed: ['A my Social Security account', 'A U.S. mailing address on file'],
      },
      {
        title: 'Create a my Social Security account',
        steps: [
          'Go to ssa.gov and click "my Social Security" at the top.',
          'Click "Create an Account."',
          'Enter your full name, Social Security number, date of birth, and mailing address.',
          'Answer a few security questions based on your credit history to verify your identity.',
          'Choose a username and a strong password (at least 8 characters with a mix of letters, numbers, and symbols).',
        ],
        whatYouNeed: ['Your Social Security number', 'Your date of birth', 'A valid email address', 'A U.S. mailing address'],
      },
      {
        title: 'Apply for retirement benefits',
        steps: [
          'Go to ssa.gov and click "Apply for Benefits" at the top of the page.',
          'Choose "Retirement Benefits."',
          'You\'ll fill out an online form with your personal information, work history, and bank details for direct deposit.',
          'Review everything carefully, then submit your application.',
          'You\'ll get a confirmation number. Save it somewhere safe. Social Security will follow up within a few weeks.',
        ],
        whatYouNeed: ['Your Social Security number', 'Your birth certificate or proof of age', 'Bank account and routing numbers for direct deposit', 'W-2 forms or self-employment tax returns for the past year'],
      },
    ],
  },
  {
    id: 'medicare',
    emoji: '🏥',
    title: 'Medicare & Health Insurance',
    description: 'Find plans, compare drug coverage, and check what Medicare covers.',
    officialUrl: 'https://www.medicare.gov',
    officialLabel: 'medicare.gov',
    phoneNumber: '1-800-633-4227',
    phoneName: 'Medicare',
    tasks: [
      {
        title: 'Find your Medicare plan',
        steps: [
          'Go to medicare.gov and click "Find health & drug plans."',
          'Enter your zip code.',
          'You\'ll see a list of plans available in your area with costs and coverage details.',
          'Click on any plan to see the full details, including monthly premiums and what\'s covered.',
        ],
        whatYouNeed: ['Your zip code', 'Your Medicare card number (if you already have Medicare)'],
      },
      {
        title: 'Compare drug coverage',
        steps: [
          'Go to medicare.gov and click "Find health & drug plans."',
          'Click "Drug coverage (Part D)."',
          'Enter your prescriptions one by one — type the drug name and select the correct one from the list.',
          'Enter your pharmacy\'s name or zip code so Medicare can show prices at pharmacies near you.',
          'Review the side-by-side comparison of plans showing your estimated yearly drug costs.',
        ],
        whatYouNeed: ['A list of your current medications (name and dosage)', 'Your preferred pharmacy name or zip code'],
      },
      {
        title: 'Check what Medicare covers',
        steps: [
          'Go to medicare.gov and click "What\'s covered" at the top.',
          'Type the service, test, or item you\'re looking for in the search box (for example, "flu shot" or "hearing aids").',
          'Read the results to see if it\'s covered under Part A (hospital), Part B (medical), or Part D (drugs).',
          'The page will also tell you if there\'s a copayment or deductible.',
        ],
        whatYouNeed: ['The name of the service, test, or item you want to check'],
      },
    ],
  },
  {
    id: 'drivers-license',
    emoji: '🚗',
    title: "Driver's License & ID",
    description: 'Renew your license, get a REAL ID, or update your address. Varies by state.',
    officialUrl: 'https://www.dmv.org/state-dmv',
    officialLabel: 'dmv.org (state lookup)',
    phoneNumber: '',
    phoneName: 'your state DMV',
    tasks: [
      {
        title: 'Renew your driver\'s license online',
        steps: [
          'Go to dmv.org/state-dmv and select your state from the list.',
          'Look for the "License Renewal" option on your state\'s page.',
          'Most states let you renew online if your license is not expired by more than a few months.',
          'Fill out the renewal form with your license number, date of birth, and mailing address.',
          'Pay the renewal fee with a debit or credit card. Fees vary by state (usually $20–$40).',
        ],
        whatYouNeed: ['Your current driver\'s license number', 'Date of birth', 'A debit or credit card for the fee'],
      },
      {
        title: 'Get a REAL ID',
        steps: [
          'Check if your state offers REAL ID by visiting dmv.org/state-dmv and selecting your state.',
          'Look for "REAL ID" on your state\'s DMV page.',
          'You will most likely need to visit a DMV office in person for a REAL ID.',
          'Bring the required documents (listed below). Call your DMV ahead of time to confirm what they need.',
          'A REAL ID will have a star symbol in the upper corner of your license or ID card.',
        ],
        whatYouNeed: ['Proof of identity (passport or birth certificate)', 'Proof of Social Security number (Social Security card or W-2)', 'Two proofs of address (utility bill, bank statement, etc.)', 'Your current driver\'s license'],
      },
      {
        title: 'Change your address on your license',
        steps: [
          'Go to dmv.org/state-dmv and select your state.',
          'Look for "Change of Address" or "Update Address."',
          'Many states let you do this online for free.',
          'Enter your license number, old address, and new address.',
          'Some states will mail you a sticker or new card. Others ask you to write the new address on the back of your current license.',
        ],
        whatYouNeed: ['Your driver\'s license number', 'Your new mailing address'],
      },
    ],
  },
  {
    id: 'veterans',
    emoji: '🎖️',
    title: 'Veterans Benefits',
    description: 'VA health care, claim status, and account setup for veterans.',
    officialUrl: 'https://www.va.gov',
    officialLabel: 'va.gov',
    phoneNumber: '1-800-827-1000',
    phoneName: 'Veterans Affairs',
    tasks: [
      {
        title: 'Enroll in VA health care',
        steps: [
          'Go to va.gov and click "Health Care" at the top.',
          'Click "Apply for VA Health Care."',
          'You can apply online, by phone, by mail, or in person at a VA medical center.',
          'To apply online, click "Apply for Health Benefits" and fill out the form with your military service history and personal information.',
          'After submitting, you\'ll get a confirmation. VA typically responds within one week.',
        ],
        whatYouNeed: ['Your Social Security number', 'Your military discharge papers (DD214)', 'Insurance information (if you have other health coverage)'],
      },
      {
        title: 'Check your claim status',
        steps: [
          'Go to va.gov and click "Check your claim or appeal status."',
          'Sign in with your VA.gov account (you can use Login.gov or ID.me).',
          'You\'ll see a list of your open claims with their current status.',
          'Click on any claim to see detailed updates and any action needed from you.',
        ],
        whatYouNeed: ['A VA.gov account (Login.gov or ID.me)', 'Your Social Security number'],
      },
      {
        title: 'Set up a VA.gov account',
        steps: [
          'Go to va.gov and click "Sign In" in the top right corner.',
          'Choose "Create an account with Login.gov" (this is the recommended option).',
          'Enter your email address and create a strong password.',
          'Verify your identity by uploading a photo of your driver\'s license or state ID.',
          'Once verified, you can access all VA services — health records, claims, benefits letters, and more.',
        ],
        whatYouNeed: ['A valid email address', 'A driver\'s license or state ID (for identity verification)', 'A phone number for security codes'],
      },
    ],
  },
  {
    id: 'taxes',
    emoji: '📋',
    title: 'Taxes',
    description: 'File taxes for free, check your refund, and find free tax prep help for 50+.',
    officialUrl: 'https://www.irs.gov',
    officialLabel: 'irs.gov',
    phoneNumber: '1-800-829-1040',
    phoneName: 'IRS',
    tasks: [
      {
        title: 'File your taxes for free (IRS Free File)',
        steps: [
          'Go to irs.gov/freefile.',
          'If your income was $84,000 or less, you can use guided tax software for free.',
          'Click "Start lookup tool" to find the free software that fits your situation.',
          'Choose a software provider and follow their instructions to file your federal return.',
          'Some providers also offer free state tax filing. Check before you start.',
        ],
        whatYouNeed: ['Your Social Security number', 'All W-2 forms and 1099 forms from the past year', 'Last year\'s tax return (helpful but not required)', 'Bank account and routing numbers for direct deposit of your refund'],
      },
      {
        title: 'Check your refund status',
        steps: [
          'Go to irs.gov and click "Get Your Refund Status."',
          'Enter your Social Security number, your filing status (single, married, etc.), and the exact refund amount from your return.',
          'Click "Submit" to see your refund status.',
          'The tool updates once a day, usually overnight. There\'s no benefit to checking more than once a day.',
        ],
        whatYouNeed: ['Your Social Security number', 'Your filing status', 'The exact refund amount from your tax return'],
      },
      {
        title: 'Find free tax prep help (AARP Tax-Aide)',
        steps: [
          'Go to aarpfoundation.org/taxaide.',
          'Click "Find a Site Near You."',
          'Enter your zip code to find the nearest AARP Tax-Aide location.',
          'AARP Tax-Aide is free for anyone 50 and older — you do not need to be an AARP member.',
          'Call the location to make an appointment and ask what documents to bring.',
        ],
        whatYouNeed: ['Photo ID', 'Social Security card', 'All income documents (W-2s, 1099s, Social Security statement)', 'Last year\'s tax return'],
      },
    ],
  },
  {
    id: 'food-financial',
    emoji: '🤝',
    title: 'Food & Financial Help',
    description: 'Apply for food assistance, find local food banks, and check benefit eligibility.',
    officialUrl: 'https://www.benefits.gov',
    officialLabel: 'benefits.gov',
    phoneNumber: '',
    phoneName: 'your local benefits office',
    tasks: [
      {
        title: 'Apply for SNAP (food stamps)',
        steps: [
          'Go to fns.usda.gov/snap/state-directory to find your state\'s SNAP office.',
          'Click on your state to visit their online application page.',
          'Fill out the application with your household size, income, and expenses.',
          'Submit the application online. You\'ll receive a confirmation with a case number.',
          'Your state will schedule a phone or in-person interview within 30 days.',
        ],
        whatYouNeed: ['Proof of identity (driver\'s license, state ID)', 'Proof of income (pay stubs, Social Security award letter)', 'Proof of housing costs (rent or mortgage statement)', 'Utility bills'],
      },
      {
        title: 'Find local food banks',
        steps: [
          'Go to feedingamerica.org/find-your-local-foodbank.',
          'Enter your zip code.',
          'You\'ll see a list of food banks and pantries near you with addresses and hours.',
          'Most food banks do not require ID or proof of income. You can visit any time they\'re open.',
        ],
        whatYouNeed: ['Your zip code — that\'s it!'],
      },
      {
        title: 'Check your eligibility for government benefits',
        steps: [
          'Go to benefits.gov.',
          'Click "Start Benefits Finder."',
          'Answer questions about your age, income, household size, and situation.',
          'The tool will show you a list of federal and state benefits you may qualify for.',
          'Click on any benefit to learn how to apply.',
        ],
        whatYouNeed: ['Your approximate household income', 'Your household size', 'Your zip code'],
      },
      {
        title: 'Apply for energy bill help (LIHEAP)',
        steps: [
          'Go to acf.hhs.gov/ocs/liheap-state-and-territory-contact-listing.',
          'Find your state and click on the link to your local LIHEAP office.',
          'Applications are usually available in the fall and winter months.',
          'Fill out the application with your household income, utility account info, and household size.',
          'If approved, the payment goes directly to your utility company.',
        ],
        whatYouNeed: ['Recent utility bills', 'Proof of income (Social Security statement, pay stubs)', 'Photo ID', 'Your utility account number'],
      },
    ],
  },
  {
    id: 'voter-registration',
    emoji: '🗳️',
    title: 'Voter Registration',
    description: 'Register to vote, check your status, and find your polling place.',
    officialUrl: 'https://vote.gov',
    officialLabel: 'vote.gov',
    phoneNumber: '',
    phoneName: 'your local election office',
    tasks: [
      {
        title: 'Register to vote',
        steps: [
          'Go to vote.gov.',
          'Select your state from the dropdown list.',
          'You\'ll be taken to your state\'s voter registration page.',
          'Fill out the form with your name, address, date of birth, and ID number (driver\'s license or last 4 of Social Security).',
          'Submit the form online. Some states will mail you a confirmation card.',
        ],
        whatYouNeed: ['Your driver\'s license or state ID number', 'Your Social Security number (last 4 digits)', 'Your current address'],
      },
      {
        title: 'Check your voter registration status',
        steps: [
          'Go to vote.gov and select your state.',
          'Look for a "Check Registration Status" or "Am I Registered?" link.',
          'Enter your name, date of birth, and address.',
          'The system will show whether you\'re registered and where your polling place is.',
        ],
        whatYouNeed: ['Your full name', 'Date of birth', 'Your current address'],
      },
      {
        title: 'Find your polling place',
        steps: [
          'Go to vote.gov and select your state.',
          'Look for "Find Your Polling Place" or "Where Do I Vote?"',
          'Enter your address.',
          'You\'ll see the name and address of your assigned polling place, plus hours of operation on election day.',
        ],
        whatYouNeed: ['Your home address'],
      },
    ],
  },
  {
    id: 'consumer-protection',
    emoji: '🛡️',
    title: 'Consumer Protection',
    description: 'Report fraud, join the Do Not Call list, and file consumer complaints.',
    officialUrl: 'https://www.ftc.gov/complaint',
    officialLabel: 'ftc.gov/complaint',
    phoneNumber: '1-877-382-4357',
    phoneName: 'Federal Trade Commission (FTC)',
    tasks: [
      {
        title: 'Report fraud or a scam',
        steps: [
          'Go to reportfraud.ftc.gov.',
          'Click "Report Now."',
          'Answer the questions about what happened — what type of scam, how you were contacted, and whether you lost money.',
          'Include as much detail as you can: phone numbers, email addresses, company names, and dollar amounts.',
          'Submit your report. The FTC uses these reports to build cases against scammers.',
        ],
        whatYouNeed: ['Details about the scam (when it happened, how you were contacted)', 'Any phone numbers, emails, or websites the scammer used', 'The amount of money lost (if any)'],
      },
      {
        title: 'Add your number to the Do Not Call Registry',
        steps: [
          'Go to donotcall.gov.',
          'Click "Register Your Phone."',
          'Enter the phone number(s) you want to register and your email address.',
          'Check your email and click the confirmation link within 72 hours.',
          'Your number will be added within 31 days. Most legitimate telemarketers will stop calling. Scammers may still call — report those to the FTC.',
        ],
        whatYouNeed: ['The phone number(s) you want to register', 'A valid email address'],
      },
      {
        title: 'File a consumer complaint',
        steps: [
          'Go to ftc.gov/complaint.',
          'Choose the category that best describes your complaint (internet services, phone/mobile, health, etc.).',
          'Fill out the form with details about the company, what happened, and what resolution you\'re looking for.',
          'Include any supporting documents — receipts, contracts, emails.',
          'Submit the complaint. The FTC may share it with other law enforcement agencies.',
        ],
        whatYouNeed: ['The name of the company or person you\'re complaining about', 'Dates and details of what happened', 'Copies of receipts, emails, or contracts (if available)'],
      },
    ],
  },
];

/* ── Component ───────────────────────────────────────────────────────────────── */

export default function GovServices() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const selected = categories.find((c) => c.id === selectedCategory);

  const toggleTask = (taskTitle: string) => {
    setExpandedTask((prev) => (prev === taskTitle ? null : taskTitle));
  };

  return (
    <>
      <SEOHead
        title="Government Services Navigator — TekSure"
        description="Find and access government services online. Step-by-step help for Social Security, Medicare, taxes, voter registration, and more."
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">

          {/* ── Header ──────────────────────────────────────── */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Find Government Services Online
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              We'll help you find the right website for what you need — and show you how to use it.
              Pick a category below to get started.
            </p>
          </div>

          {/* ── Category grid (landing view) ────────────────── */}
          {!selectedCategory && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setExpandedTask(null);
                  }}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8 text-left transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[48px]"
                  aria-label={`Open ${cat.title}`}
                >
                  <span className="text-4xl block mb-3" aria-hidden="true">{cat.emoji}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{cat.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{cat.description}</p>
                </button>
              ))}
            </div>
          )}

          {/* ── Expanded category view ──────────────────────── */}
          {selected && (
            <div>
              {/* Back button */}
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory(null);
                  setExpandedTask(null);
                }}
                className="rounded-xl min-h-[48px] mb-6 text-base gap-2"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                Back to all services
              </Button>

              {/* Category header */}
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl" aria-hidden="true">{selected.emoji}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{selected.title}</h2>
                    <p className="text-base leading-relaxed text-muted-foreground mt-1">{selected.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button
                    asChild
                    className="rounded-xl min-h-[48px] text-base gap-2"
                  >
                    <a href={selected.officialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                      Go to {selected.officialLabel}
                    </a>
                  </Button>
                  {selected.phoneNumber && (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl min-h-[48px] text-base gap-2"
                    >
                      <a href={`tel:${selected.phoneNumber.replace(/[^0-9]/g, '')}`}>
                        <Phone className="h-5 w-5" aria-hidden="true" />
                        Call {selected.phoneNumber}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Task list */}
              <div className="space-y-4">
                {selected.tasks.map((task) => {
                  const isOpen = expandedTask === task.title;
                  return (
                    <div
                      key={task.title}
                      className="rounded-2xl border border-border bg-card overflow-hidden"
                    >
                      <button
                        onClick={() => toggleTask(task.title)}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-lg md:text-xl font-bold text-foreground pr-4">{task.title}</h3>
                        {isOpen ? (
                          <ChevronUp className="h-6 w-6 shrink-0 text-muted-foreground" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-6 w-6 shrink-0 text-muted-foreground" aria-hidden="true" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                          {/* What you'll need */}
                          <div className="rounded-xl bg-muted/50 p-5">
                            <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                              <CheckSquare className="h-5 w-5 text-primary" aria-hidden="true" />
                              What you'll need
                            </h4>
                            <ul className="space-y-2">
                              {task.whatYouNeed.map((item, i) => (
                                <li key={i} className="text-base leading-relaxed text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1 shrink-0" aria-hidden="true">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Steps */}
                          <div>
                            <h4 className="text-base font-bold text-foreground mb-4">Step-by-step instructions</h4>
                            <ol className="space-y-4">
                              {task.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-4">
                                  <span
                                    className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm"
                                    aria-hidden="true"
                                  >
                                    {i + 1}
                                  </span>
                                  <p className="text-base leading-relaxed text-foreground pt-0.5">{step}</p>
                                </li>
                              ))}
                            </ol>
                          </div>

                          {/* Need help note */}
                          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                            <p className="text-base leading-relaxed text-foreground">
                              <strong>Need help?</strong>{' '}
                              {selected.phoneNumber ? (
                                <>
                                  You can call {selected.phoneName} at{' '}
                                  <a
                                    href={`tel:${selected.phoneNumber.replace(/[^0-9]/g, '')}`}
                                    className="font-bold text-primary underline"
                                  >
                                    {selected.phoneNumber}
                                  </a>
                                  . A real person can walk you through the process over the phone.
                                </>
                              ) : (
                                <>
                                  Contact {selected.phoneName} directly — look for a "Contact Us" link on their website. A real person can help you through the process.
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Official website CTA at bottom */}
              <div className="mt-8 text-center">
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Ready to get started? Visit the official website:
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl min-h-[48px] text-base gap-2"
                >
                  <a href={selected.officialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    Go to {selected.officialLabel}
                  </a>
                </Button>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
