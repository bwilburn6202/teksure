import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, AlertTriangle, CheckCircle2, Baby, Search, Phone, ExternalLink } from 'lucide-react';

interface Scam {
  title: string;
  redFlags: string[];
  whatToDo: string[];
}

const scams: Scam[] = [
  {
    title: 'Fake Tech Support Call',
    redFlags: [
      'Unsolicited call claiming to be from Microsoft, Apple, or your ISP',
      'Caller asks you to install remote-access software',
      'They claim your computer has a virus they can see remotely',
      'Pressure to pay immediately by gift card or bank transfer',
    ],
    whatToDo: [
      'Hang up immediately — legitimate companies never cold-call about viruses',
      'Never give remote access to someone who calls you',
      'Report the number to the FTC at ReportFraud.ftc.gov',
      'If you gave access, disconnect from the internet and run a full antivirus scan',
    ],
  },
  {
    title: 'Phishing Email',
    redFlags: [
      'Sender address doesn\'t match the company it claims to be from',
      'Generic greeting like "Dear Customer" instead of your name',
      'Urgent language: "Your account will be closed in 24 hours"',
      'Links that don\'t match the official website when you hover over them',
    ],
    whatToDo: [
      'Don\'t click any links or download attachments',
      'Check the sender\'s email address carefully',
      'Go to the company\'s website directly by typing the URL yourself',
      'Report the email as phishing in your email client',
    ],
  },
  {
    title: 'Bank Text Scam',
    redFlags: [
      'Text message claiming suspicious activity on your account',
      'Contains a link to a website that looks like your bank',
      'Asks you to enter your full banking details or PIN',
      'Uses urgency: "Reply within 2 hours or your account will be frozen"',
    ],
    whatToDo: [
      'Never click links in texts claiming to be from your bank',
      'Call your bank directly using the number on your card',
      'Forward scam texts to 7726 (SPAM) to report them',
      'Delete the message after reporting',
    ],
  },
  {
    title: 'Lottery / Prize Scam',
    redFlags: [
      'You\'ve "won" a competition you never entered',
      'Asked to pay a fee to release your winnings',
      'Request for personal details like passport or bank info',
      'Poor grammar and spelling in the message',
    ],
    whatToDo: [
      'Remember: you can\'t win a lottery you didn\'t enter',
      'Never pay a fee to collect a "prize"',
      'Don\'t share personal or financial information',
      'Report to your local fraud agency',
    ],
  },
  {
    title: 'Online Shopping Scam',
    redFlags: [
      'Prices that are too good to be true (e.g. 90% off designer items)',
      'Website has no contact information or physical address',
      'No reviews, or only 5-star reviews that sound fake',
      'Only accepts bank transfer or cryptocurrency — no card protection',
    ],
    whatToDo: [
      'Research the seller — check Trustpilot and social media',
      'Use a credit card for purchase protection',
      'Look for HTTPS and a padlock icon (but note scammers use these too)',
      'If scammed, report to your bank and the FTC at ReportFraud.ftc.gov',
    ],
  },
  {
    title: 'Romance Scam',
    redFlags: [
      'Online relationship moves very fast — declarations of love within days',
      'They can never video call or meet in person',
      'Sob story followed by a request for money',
      'They ask you to send money via wire transfer or gift cards',
    ],
    whatToDo: [
      'Never send money to someone you haven\'t met in person',
      'Reverse-image search their profile photos',
      'Talk to a trusted friend or family member about the relationship',
      'Report the profile to the dating platform and police',
    ],
  },
  {
    title: 'Grandparent Scam',
    redFlags: [
      'Caller pretends to be a grandchild in trouble (arrested, in hospital)',
      'Begs you not to tell anyone else in the family',
      'Asks for money urgently via wire transfer or gift cards',
      'May pass the phone to a fake "lawyer" or "police officer"',
    ],
    whatToDo: [
      'Hang up and call your grandchild directly on their known number',
      'Verify the story with other family members',
      'Never send money based on an unexpected phone call',
      'Report the call to police',
    ],
  },
  {
    title: 'Investment Scam',
    redFlags: [
      'Promises of guaranteed high returns with no risk',
      'Pressure to invest quickly before you "miss out"',
      'Unsolicited contact via social media, email, or phone',
      'Company isn\'t registered with the financial regulator',
    ],
    whatToDo: [
      'Check the FCA register (UK) or SEC database (US) for the company',
      'Never invest based on pressure or urgency',
      'Be wary of celebrity endorsements — they\'re often fake',
      'Seek independent financial advice before investing',
    ],
  },
  {
    title: 'Unclaimed Funds / Property Scam (March 2026)',
    redFlags: [
      'Call or text saying you\'re eligible for thousands in unclaimed property',
      'They use fake government agency names to sound official',
      'They ask for a fee to "search" for your unclaimed funds',
      'Pressure to act quickly before the money is "returned to the state"',
    ],
    whatToDo: [
      'The government will NEVER ask you to pay them to find unclaimed money',
      'Search for unclaimed property yourself for free at your state\'s official website',
      'Report the scam at ReportFraud.ftc.gov',
      'Never give personal or financial details to unsolicited callers',
    ],
  },
  {
    title: 'AI Voice Clone "Grandchild in Trouble" Scam (2026)',
    redFlags: [
      'A call from someone who sounds exactly like a family member',
      'They claim to be in an emergency — arrested, in hospital, or stranded',
      'They beg you not to tell other family members',
      'They need money wired or sent via gift cards immediately',
    ],
    whatToDo: [
      'Hang up and call the person back on their real number',
      'Set up a family safety word that only your family knows',
      'Remember: AI can now clone anyone\'s voice from just a few seconds of audio',
      'Report the call to local police and the FTC',
    ],
  },
  {
    title: 'FIFA World Cup 2026 Ticket Scams',
    redFlags: [
      'Websites selling tickets at suspiciously low or high prices',
      'Fake or copycat sites that look like official FIFA pages',
      'Sellers asking for payment via bank transfer, gift cards, or crypto',
      'Tickets offered via social media DMs or unsolicited emails',
    ],
    whatToDo: [
      'Only buy tickets through official FIFA channels (FIFA.com/tickets)',
      'Never pay for tickets via bank transfer or gift cards',
      'Check the URL carefully — scam sites often misspell "FIFA"',
      'Report fake ticket sites to the FTC at ReportFraud.ftc.gov',
    ],
  },
  {
    title: 'ESTA Travel Application Scams',
    redFlags: [
      'Copycat websites that look like the official US government ESTA site',
      'They charge far more than the real $21 ESTA application fee',
      'Some sites take your money and never submit the paperwork',
      'Ads at the top of search results leading to unofficial sites',
    ],
    whatToDo: [
      'Only apply for ESTA at the official site: esta.cbp.dhs.gov',
      'The real fee is $21 — anything much higher is a scam',
      'Be careful clicking ads in search results for government services',
      'Report copycat sites to the FTC at ReportFraud.ftc.gov',
    ],
  },
  {
    title: 'Fake Debt Relief Companies (2026)',
    redFlags: [
      'Company promises to eliminate your debt quickly for a fee',
      'They pressure you to stop paying your creditors directly',
      'Unsolicited calls, texts, or emails offering debt relief',
      'They ask for large upfront fees before doing any work',
    ],
    whatToDo: [
      'Legitimate debt relief companies never guarantee to eliminate your debt',
      'Never pay upfront fees for debt relief services',
      'Contact your creditors directly or speak to a free nonprofit credit counsellor',
      'Report fake debt relief companies to the FTC at ReportFraud.ftc.gov',
    ],
  },
  // Social: "Getting calls about mortgage relief? Scammers are using economic anxiety to steal from homeowners. Here's how to spot them."
  // Newsletter: "The FTC just flagged a surge in fake mortgage relief calls. Scammers charge upfront fees and may even try to get you to sign over your home. Learn the red flags."
  {
    title: 'Fake Mortgage Relief Call Scam (April 2026)',
    redFlags: [
      'Unsolicited call claiming they can lower your mortgage payments or save you from foreclosure',
      'They ask for an upfront fee before doing any work — this is illegal under federal law',
      'They tell you to stop contacting your lender directly',
      'They pressure you to sign documents or pay by wire transfer, gift card, or Zelle',
    ],
    whatToDo: [
      'Hang up — legitimate mortgage help programs never cold-call you asking for money first',
      'Contact your mortgage servicer directly using the number on your monthly statement',
      'Find free HUD-approved housing counselors at hud.gov or call 800-569-4287',
      'Report the call to the FTC at ReportFraud.ftc.gov and your state attorney general',
    ],
  },
  // Social: "Scammers are using your real name and partial Social Security number to pretend they're from the government. Here's the new trick to watch for."
  // Newsletter: "The SSA impersonation scam just got scarier: callers now use stolen data (your real name, partial SSN) to make the threat feel real. The SSA will NEVER threaten you with arrest. Here's what to do."
  {
    title: '"Your Social Security Number Was Suspended" Scam (April 2026)',
    redFlags: [
      'Caller uses your real name or partial Social Security number — this does NOT mean the call is real',
      'They claim your SSN has been "suspended" or linked to criminal activity',
      'They threaten arrest and say a federal agent will come to your home',
      'They ask you to withdraw cash or record yourself saying your personal information',
    ],
    whatToDo: [
      'Hang up immediately — the SSA never threatens arrest, never demands cash, and never sends agents to your door',
      'Do not call back any number they give you — find the real SSA at ssa.gov or call 800-772-1213',
      'Never give your SSN or address over an unexpected call, even if the caller already knows some of your details',
      'Report it to the SSA Office of Inspector General at oig.ssa.gov or call 800-269-0271',
    ],
  },
];

export default function ScamAlerts() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScams = scams.filter((scam) =>
    scam.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Scam Alerts & Safety Guide 2026 | TekSure"
        description="Learn to spot and avoid the most common scams in 2026 — fake tech support calls, phishing emails, AI voice clones, romance scams, and more. Free safety guide."
        path="/safety/scam-alerts"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How do I spot a tech support scam?', acceptedAnswer: { '@type': 'Answer', text: 'Legitimate companies like Microsoft and Apple will never call you first about a virus. If someone calls claiming your computer is infected and asks for remote access, hang up immediately.' }},
            { '@type': 'Question', name: 'What should I do if I get a phishing email?', acceptedAnswer: { '@type': 'Answer', text: 'Do not click any links. Check the sender address carefully — scammers use addresses that look similar to real companies. Report it as spam and delete it.' }},
            { '@type': 'Question', name: 'How can I tell if a phone call is a scam?', acceptedAnswer: { '@type': 'Answer', text: 'Red flags include urgent demands for immediate payment, requests for gift cards or wire transfers, threats of arrest, and callers who refuse to let you hang up and call back on an official number.' }},
          ],
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Scam Alerts</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Scammers are getting smarter — but so can you. Learn the red flags for the most common scams and what to do if you encounter one.
            </p>
          </div>
        </section>

        {/* Quick Red Flags Banner */}
        <section className="border-b border-border bg-orange-50 dark:bg-orange-950/20 py-10 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold">Quick Red Flags — Signs of ANY Scam</h2>
            </div>
            <p className="text-muted-foreground mb-5">
              No matter what type of scam it is, most share these warning signs. If you notice even one of these, stop and verify before doing anything else.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Someone you don't know contacts you first</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>They want you to act right now — no time to think</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>They ask for payment by gift card, wire transfer, or cryptocurrency</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>They ask for remote access to your computer</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>They tell you not to tell anyone else</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>The deal sounds too good to be true</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-20">
          {/* Search Filter */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search scam types by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">
                Showing {filteredScams.length} of {scams.length} scam types
              </p>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredScams.map((scam, idx) => (
              <div
                key={scam.title}
              >
                <Card className="overflow-hidden rounded-2xl border border-border bg-card hover:border-border/60 transition-all h-full">
                  <CardHeader className="pb-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0" />
                      <CardTitle className="text-lg">{scam.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-5 space-y-5">
                    <div>
                      <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        Red Flags
                      </h3>
                      <ul className="space-y-2">
                        {scam.redFlags.map((flag, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-orange-500 shrink-0 font-semibold">•</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        What To Do
                      </h3>
                      <ul className="space-y-2">
                        {scam.whatToDo.map((step, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-green-600 shrink-0 font-semibold">✓</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* What To Do If You've Been Scammed */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-bold">What To Do If You've Been Scammed</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              If you think you've fallen for a scam, don't panic. Take these steps as soon as possible to protect yourself and help catch the scammers.
            </p>
            <div className="grid gap-4">
              {[
                { step: 1, text: 'Contact your bank or credit card company right away. They may be able to stop or reverse the transaction.' },
                { step: 2, text: 'Change your passwords for any accounts that may be affected. Start with email, banking, and social media.' },
                { step: 3, text: 'Report to the FTC at ReportFraud.ftc.gov. Your report helps investigators track down scammers.' },
                { step: 4, text: 'File a report with the FBI\'s Internet Crime Complaint Center (IC3) at ic3.gov.' },
                { step: 5, text: 'Contact the AARP Fraud Watch Helpline: 877-908-3360. It\'s free and available to anyone, not only AARP members.' },
                { step: 6, text: 'If you gave remote access to your computer, disconnect from the internet right away and run a full antivirus scan.' },
              ].map((item) => (
                <Card key={item.step} className="rounded-xl border border-border bg-card">
                  <CardContent className="py-4 flex items-start gap-4">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 font-bold text-sm shrink-0">
                      {item.step}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Helplines */}
          <section className="mt-16">
            <Card className="rounded-2xl border-2 border-primary/30 bg-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Helplines &amp; Reporting Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">
                  Save these numbers and websites. If something feels wrong, reach out — these services are free.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>FTC:</strong> 877-382-4357</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>AARP Fraud Watch:</strong> 877-908-3360</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ExternalLink className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>FBI IC3:</strong>{' '}
                      <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">ic3.gov</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ExternalLink className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Identity Theft:</strong>{' '}
                      <a href="https://www.identitytheft.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">IdentityTheft.gov</a>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Parental Controls Link */}
          <div className="mt-12">
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="py-6 flex items-start gap-4">
                <Baby className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold mb-1">Keeping kids safe online?</p>
                  <Link to="/safety/parental-controls" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                    Read our Parental Controls Guide →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
