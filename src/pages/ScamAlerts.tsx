import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, AlertTriangle, CheckCircle2, Baby } from 'lucide-react';

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
      'Report the number to the FTC at ReportFraud.ftc.gov or 1-877-382-4357',
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
      'Forward scam texts to 7726 (UK) to report them',
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
  // Social: "Getting a text about your reward points expiring? The FTC says scammers are behind thousands of these messages. Don't click the link — here's the safe way to check."
  // Newsletter: "The FTC just issued an alert about fake 'expiring reward points' texts. Clicking the link can steal your personal info or install malware. The safe move: open the company's app yourself and check there — never through the text link."
  {
    title: 'Fake "Expiring Reward Points" Text Scam (April 2026)',
    redFlags: [
      'Text claims your airline miles, store points, or credit card rewards are about to expire today — and includes a link to "save" them',
      'The link goes to a site that looks like a real retailer or airline but asks for your login, credit card, or Social Security number',
      'Message creates urgency: "Your points expire TODAY — click now or lose them"',
      'The sender is an unknown number or the text arrives completely out of nowhere',
    ],
    whatToDo: [
      'Do not click the link — open the company\'s official app or type their website address yourself instead',
      'Check your rewards balance there directly — if points were really expiring, it will show up in your account',
      'Turn on spam filters: AT&T Call Protect, T-Mobile Scam Shield, and Verizon Call Filter are all free',
      'Report the scam text to the FTC at ReportFraud.ftc.gov and forward it to 7726 (SPAM)',
    ],
  },
  // Social: "Getting a message about a product recall from Amazon or Costco? Scammers are faking official recall notices to steal your login. Here's the safe way to check."
  // Newsletter: "AARP's Fraud Watch Network is warning about a surge in fake product recall notices — they look exactly like messages from Amazon, Walmart, or Costco. Never click the link. Go directly to the store's app and check your order history instead."
  {
    title: 'Fake Product Recall Scam (April 2026)',
    redFlags: [
      'Message claims a product you bought has been recalled for a "safety issue" — with a link to get your refund',
      'The message appears to come from a trusted store like Amazon, Walmart, Costco, or Target',
      'Uses urgent language: "Process your refund immediately to ensure your safety"',
      'Clicking the link takes you to a login page designed to steal your username and password',
    ],
    whatToDo: [
      'Never click the link in the message — even if it looks completely official',
      'Open the store\'s app yourself (or type their web address) and check your order history there',
      'Real product recalls show up directly in your account — you will never need to click a link in a text',
      'If you think the recall might be real, call the retailer using the phone number on their official website',
      'Report the scam to the FTC at ReportFraud.ftc.gov or call 1-877-382-4357',
    ],
  },
  // Social: "Got a text saying you owe money for an unpaid traffic ticket? Don't click — the FTC just flagged this as a major new scam targeting millions of Americans."
  // Newsletter: "The FTC issued a fresh alert on April 14, 2026: scammers are flooding phones with fake traffic violation texts that look like they come from your state's DMV or a toll authority. Clicking the link takes you to a convincing fake payment page. The safe move: delete the text and look up any real fines yourself through your state's official DMV website."
  {
    title: 'Fake Traffic Violation Text Scam (April 2026)',
    redFlags: [
      'Text claims you have an unpaid traffic ticket, toll violation, or moving violation — even if you don\'t remember getting one',
      'Message uses urgent language: "Pay within 24 hours to avoid license suspension" or "Final notice — 35% fee applies"',
      'Includes a link to pay that looks official but goes to a fake website designed to steal your card number',
      'May include a fake case number or legal code to seem more convincing',
    ],
    whatToDo: [
      'Do not click the link — delete the text immediately',
      'If you think the fine might be real, look up your state\'s official DMV or toll authority website yourself (never use a link from a text)',
      'You can verify real traffic violations by calling your local court or DMV using a number from the official government website',
      'Report the scam text to the FTC at ReportFraud.ftc.gov and forward it to 7726 (SPAM)',
    ],
  },
  // Social: "Scammers swapped out the link in their fake traffic violation texts — now they're using QR codes so filters can't catch them. Don't scan any QR code sent to you in a text."
  // Newsletter: "The FTC confirmed a new twist on the traffic violation text scam: scammers now embed a QR code in an image of a fake 'official notice' to bypass spam filters. Scanning it opens a payment page that steals your card number. Never scan a QR code from an unexpected text message."
  {
    title: 'Traffic Violation QR Code Scam (April 2026)',
    redFlags: [
      'Text message includes an image of a fake "official court notice" with a state seal and a case number',
      'Instead of a clickable link, the image contains a QR code to "pay your fine" — scammers use images to bypass spam filters',
      'The fine is usually small — around $6.99 to $8.99 — designed to feel routine and low-stakes',
      'Message uses urgent language: "final warning," "default judgment," or "enforcement action"',
    ],
    whatToDo: [
      'Do NOT scan the QR code — it opens a fake payment page that steals your card number',
      'If you think the fine might be real, go directly to your state\'s official court or DMV website — type the address yourself',
      'Real traffic fines are mailed to you on paper, or show up when you log in to official government sites — never by text with a QR code',
      'Report the text to the FTC at ReportFraud.ftc.gov and forward it to 7726 (SPAM)',
      'If you already scanned the code and entered card information, call your bank immediately to report fraud',
    ],
  },
  // Social: "Scammers are now calling people locked out of Windows 11 and offering to 'recover' their computer — for $300. Here's the safe, free fix."
  // Newsletter: "Microsoft's April 2026 update (KB5083769) locked some Windows 11 users out with a BitLocker screen. Scammers are now cold-calling those people, pretending to offer free recovery and charging hundreds of dollars. The real fix is free — here's how to do it yourself."
  {
    title: 'Fake "Windows Recovery" Phone Scam (April 2026)',
    redFlags: [
      'Caller claims to know your computer is locked out after the recent Windows update — they got your number from public records or a data breach',
      'They offer a "free recovery service" but ask for remote access to your computer or a one-time fee to fix it',
      'Fees are often $150–$400, paid by gift card, wire transfer, or Zelle',
      'They claim to be from "Microsoft Support," "Windows Technical Department," or a similar official-sounding name',
    ],
    whatToDo: [
      'Hang up — Microsoft never calls you first, and the real BitLocker fix is completely free',
      'The real fix: on another device, go to account.microsoft.com/devices/recoverykey, sign in, and find your 48-digit recovery key',
      'Never give remote access to someone who calls you — not even if they claim to be from Microsoft',
      'Microsoft\'s free official support is at support.microsoft.com or 1-800-642-7676',
      'Report the call to the FTC at ReportFraud.ftc.gov',
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
  // Social: "The FTC says investment scams are now the #1 way Americans lose money — average loss $20,000. Here are the exact warning signs to know before someone pitches you."
  // Newsletter: "The FTC issued a fresh alert in April 2026: investment scams have hit record levels, with AI-generated celebrity endorsements making fake platforms nearly impossible to spot at a glance. Here's how to check if any investment opportunity is real before you put any money in."
  {
    title: 'Fake Investment Opportunity Scam (April 2026)',
    redFlags: [
      'Social media ads or unsolicited messages promise unusually high returns — often 10–20% per month — with "no risk"',
      'AI-generated videos appear to show real celebrities like Elon Musk or Warren Buffett endorsing the platform',
      'You are asked to invest using cryptocurrency, wire transfer, or gift cards — payment methods that cannot be reversed',
      'The platform shows a large profit in your account but demands you pay a "tax," "withdrawal fee," or "compliance deposit" before you can take the money out',
    ],
    whatToDo: [
      'No legitimate investment guarantees high returns with no risk — this is always the #1 red flag, no exceptions',
      'Before investing anywhere, verify the firm at investor.gov/CRS (SEC) or at brokercheck.finra.org (licensed advisers)',
      'Never pay a fee to withdraw your own money — demanding a withdrawal fee is a second theft designed to take even more from you',
      'Report suspected investment fraud to the FTC at ReportFraud.ftc.gov and to the SEC at sec.gov/tcr',
      'Call the AARP Fraud Watch Network helpline free at 877-908-3360 (Mon–Fri, 8 AM–8 PM ET) for help understanding your options',
    ],
  },
  // Social: "Getting a job offer out of nowhere — great pay, fully remote, no experience needed? This is the #1 fake job scam pattern the FBI is warning about right now."
  // Newsletter: "The FBI's IC3 says fake job offer scams jumped 40% in early 2026. Scammers post convincing job listings and even hold fake 'interviews' via AI video — then ask for money for equipment or background checks. Here's what to check before you share any personal information with a new employer."
  {
    title: 'Fake Job Offer / AI Interview Scam (2026)',
    redFlags: [
      'You receive an unsolicited job offer — often via LinkedIn, WhatsApp, or text — from a company you never applied to',
      'The "interview" is conducted entirely via text message, chat, or a pre-recorded AI video — never a real live person',
      'The job offers unusually high pay for remote work requiring little experience',
      'After being "hired," they ask you to pay for equipment, software licenses, a background check, or a training course before you can start',
    ],
    whatToDo: [
      'Real employers never ask job candidates to pay anything — any request for money from a new "employer" is a scam',
      'Verify the company exists by calling the main number from their official website — find it yourself, not from a number they gave you',
      'Never share your Social Security number, bank account details, or a photo of your ID until you have verified the employer is real',
      'Report fake job offers to the FTC at ReportFraud.ftc.gov and to the FBI\'s Internet Crime Complaint Center at ic3.gov',
    ],
  },
];

export default function ScamAlerts() {
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

        <div className="container max-w-4xl mx-auto px-4 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {scams.map((scam, idx) => (
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

          <div
            className="mt-12"
          >
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
