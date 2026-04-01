import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      'Report the number to Action Fraud (UK) or the FTC (US)',
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
      'If scammed, report to your bank and Action Fraud / FTC',
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
];

export default function ScamAlerts() {
  return (
    <>
      <SEOHead
        title="Scam Alerts & Safety Guide | TekSure"
        description="Learn to spot and avoid the 8 most common scams — fake tech support, phishing, bank texts, and more."
        path="/safety/scam-alerts"
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
              <motion.div
                key={scam.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
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
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
