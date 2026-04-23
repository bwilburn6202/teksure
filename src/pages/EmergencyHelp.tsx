import { Link } from 'react-router-dom';
import { Shield, Smartphone, KeyRound, MousePointerClick, MonitorX, Phone, ExternalLink, ChevronDown } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface EmergencyScenario {
  id: string;
  icon: typeof Smartphone;
  title: string;
  subtitle: string;
  urgencyColor: string;
  steps: { title: string; detail: string }[];
  tip: string;
  relatedLink?: { to: string; label: string };
}

const scenarios: EmergencyScenario[] = [
  {
    id: 'phone-lost',
    icon: Smartphone,
    title: 'My Phone Is Lost or Stolen',
    subtitle: 'Act fast to protect your accounts and data.',
    urgencyColor: 'border-red-500/50 bg-red-50/50 dark:bg-red-950/20',
    steps: [
      {
        title: 'Lock your phone remotely',
        detail:
          'iPhone: Go to iCloud.com/find on any computer or another phone. Sign in with your Apple ID and tap "Mark As Lost." Android: Go to google.com/android/find on any browser. Sign in with your Google account and tap "Secure Device." This will lock your phone so no one can use it.',
      },
      {
        title: 'Call your phone carrier',
        detail:
          'Call your carrier (AT&T: 1-800-331-0500, Verizon: 1-800-922-0204, T-Mobile: 1-800-937-8997) and ask them to suspend your line. This stops anyone from making calls, sending texts, or using your data plan.',
      },
      {
        title: 'Change your important passwords',
        detail:
          'On another device, change the passwords for your email, bank, and social media accounts. Start with your email since many password resets go through email. Use a different password for each account.',
      },
      {
        title: 'File a police report',
        detail:
          'Call your local police non-emergency number and file a report. You will need this report number if you file an insurance claim. Write down the report number and keep it somewhere safe.',
      },
      {
        title: 'Check your bank accounts',
        detail:
          'Log into your bank and credit card accounts from another device. Look for any charges you did not make. If you see anything suspicious, call your bank immediately and report it.',
      },
    ],
    tip: 'Write down your carrier phone number and keep it in your wallet or purse before this happens. That way you can call even without your phone.',
    relatedLink: { to: '/tools/two-factor-setup', label: 'Set Up Two-Factor Authentication' },
  },
  {
    id: 'account-hacked',
    icon: KeyRound,
    title: 'My Account Was Hacked',
    subtitle: 'Take control back by securing your accounts right away.',
    urgencyColor: 'border-orange-500/50 bg-orange-50/50 dark:bg-orange-950/20',
    steps: [
      {
        title: 'Change your password immediately',
        detail:
          'Go to the website or app for the account that was hacked. Click "Forgot Password" or "Reset Password." Create a new password that is at least 12 characters long. Use a mix of letters, numbers, and symbols. Do not reuse a password from another account.',
      },
      {
        title: 'Turn on two-factor authentication (2FA)',
        detail:
          'Two-factor authentication adds a second layer of protection. After you reset your password, go to the account\'s security settings and turn on 2FA. This means that even if someone knows your password, they cannot get in without your phone.',
      },
      {
        title: 'Check for unauthorized activity',
        detail:
          'Look at your recent account activity. Most services like Gmail, Facebook, and banks show a list of recent logins. Look for logins from unfamiliar locations or devices. If you see any, it confirms someone else was in your account.',
      },
      {
        title: 'Change passwords on other accounts that used the same password',
        detail:
          'If you used the same password on other accounts, change those passwords too. Hackers often try the same password on many different websites. Each account should have its own unique password.',
      },
      {
        title: 'Contact the service for help',
        detail:
          'If you cannot get back into your account, go to the service\'s help page. Gmail: support.google.com/accounts. Facebook: facebook.com/hacked. Apple: support.apple.com. They have special recovery processes for hacked accounts.',
      },
    ],
    tip: 'Consider using a password manager to create and remember strong, unique passwords for every account. Our Password Manager Guide can help you get started.',
    relatedLink: { to: '/tools/password-manager', label: 'Set Up a Password Manager' },
  },
  {
    id: 'suspicious-link',
    icon: MousePointerClick,
    title: 'I Clicked a Suspicious Link',
    subtitle: "Stay calm. Here is what to do depending on what happened next.",
    urgencyColor: 'border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20',
    steps: [
      {
        title: 'Close the page immediately',
        detail:
          'Close the browser tab or window right away. Do not enter any information like passwords, credit card numbers, or personal details. If the page will not close normally, press Ctrl+W (Windows) or Cmd+W (Mac) to force-close the tab.',
      },
      {
        title: 'Do NOT enter any information',
        detail:
          'If you already entered a password or credit card number, skip to step 4. If you only clicked the link but did not type anything in, you are likely safe. Most suspicious links only become dangerous when you enter your information.',
      },
      {
        title: 'Run a security scan',
        detail:
          'Windows: Open Windows Security (search for it in the Start menu) and run a "Quick Scan." Mac: Macs have built-in protection, but you can download Malwarebytes (free version) for an extra check. iPhone/Android: Delete any apps you do not recognize that were recently installed.',
      },
      {
        title: 'Change passwords if you entered any information',
        detail:
          'If you typed in a password, go directly to that service\'s real website (type the address yourself, do not click any links) and change your password. If you entered credit card information, call your bank immediately and report it.',
      },
      {
        title: 'Watch your accounts for a few weeks',
        detail:
          'Check your email, bank accounts, and credit card statements over the next few weeks. Look for unexpected charges, password reset emails you did not request, or messages from services saying your account was accessed from a new device.',
      },
    ],
    tip: 'Before clicking a link in an email or text, hover over it (without clicking) to see where it really goes. If the address looks strange or does not match the company, do not click it.',
    relatedLink: { to: '/tools/phishing-scanner', label: 'Check a Link with Our Phishing Scanner' },
  },
  {
    id: 'scary-warning',
    icon: MonitorX,
    title: 'My Screen Shows a Scary Warning',
    subtitle: 'This is almost always a scam. Do NOT call any phone number on screen.',
    urgencyColor: 'border-red-500/50 bg-red-50/50 dark:bg-red-950/20',
    steps: [
      {
        title: 'Do NOT call the phone number shown',
        detail:
          'Real security warnings from Microsoft, Apple, or Google will never show a phone number and ask you to call. This is a scam designed to scare you. The people on the other end will try to charge you money or steal your information.',
      },
      {
        title: 'Do NOT click any buttons on the warning',
        detail:
          'Do not click "Fix Now," "Call Support," or any other button on the warning. These buttons may install unwanted software. Even the "X" button to close it may be fake. Use the steps below to close it safely instead.',
      },
      {
        title: 'Force-close your browser',
        detail:
          'Windows: Press Ctrl + Alt + Delete, click "Task Manager," find your browser (Chrome, Edge, Firefox), click it, then click "End Task." Mac: Press Cmd + Option + Esc, find your browser in the list, and click "Force Quit." If your entire screen is frozen, hold the power button for 10 seconds to shut down.',
      },
      {
        title: 'Restart your device',
        detail:
          'After force-closing the browser, restart your computer normally. When the browser opens again, do NOT click "Restore Pages" if it asks. Start fresh instead.',
      },
      {
        title: 'Run a security scan',
        detail:
          'Windows: Open Windows Security from the Start menu and run a full scan. Mac: These pop-ups are usually just browser tricks and do not actually infect your computer, but running Malwarebytes (free version) gives peace of mind.',
      },
    ],
    tip: 'If you already called the number and gave someone remote access to your computer, disconnect from the internet immediately (unplug the cable or turn off WiFi), then call a trusted family member or local tech support for help.',
    relatedLink: { to: '/safety/scam-alerts', label: 'Learn About Common Scams' },
  },
];

export default function EmergencyHelp() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Emergency Tech Help — What to Do Right Now | TekSure"
        description="Step-by-step instructions for what to do right now if your phone is lost, your account is hacked, you clicked a suspicious link, or your screen shows a scary warning."
        path="/emergency-help"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-500/10 via-background to-amber-500/10 border-b border-border py-12 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 dark:bg-red-950/40 rounded-full">
              <Shield className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Emergency Tech Help</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Something went wrong? Take a deep breath. Pick the situation that matches yours below,
            and follow the steps in order.
          </p>
        </div>
      </section>

      <main id="main-content" className="container max-w-3xl mx-auto px-4 py-10">
        {/* Quick jump */}
        <Card className="mb-8 bg-muted/40">
          <CardContent className="py-5">
            <p className="font-semibold text-sm mb-3">Jump to your situation:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scenarios.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors min-h-[44px] px-3 py-2 rounded-lg hover:bg-muted"
                >
                  <s.icon className="h-4 w-4 shrink-0" />
                  {s.title}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scenarios */}
        <div className="space-y-6">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} id={scenario.id} className={`border-2 ${scenario.urgencyColor} scroll-mt-20`}>
              <CardContent className="p-6 md:p-8">
                {/* Scenario header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-background shadow-sm shrink-0">
                    <scenario.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-1">{scenario.title}</h2>
                    <p className="text-muted-foreground">{scenario.subtitle}</p>
                  </div>
                </div>

                {/* Steps */}
                <Accordion type="single" collapsible defaultValue="step-0" className="space-y-2">
                  {scenario.steps.map((step, i) => (
                    <AccordionItem key={i} value={`step-${i}`} className="border rounded-lg px-4 bg-background">
                      <AccordionTrigger className="hover:no-underline py-4 min-h-[44px]">
                        <span className="flex items-center gap-3 text-left">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-base">{step.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-10 text-base leading-relaxed text-muted-foreground">
                        {step.detail}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Tip */}
                <div className="mt-6 rounded-lg border border-amber-300/50 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-700/40 px-4 py-3">
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">Quick Tip</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{scenario.tip}</p>
                </div>

                {/* Related link */}
                {scenario.relatedLink && (
                  <div className="mt-4">
                    <Link
                      to={scenario.relatedLink.to}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium min-h-[44px]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {scenario.relatedLink.label}
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still need help? */}
        <Card className="mt-10 border-primary/30 bg-primary/5">
          <CardContent className="py-8 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">Still Need Help?</h2>
            <p className="text-muted-foreground mb-5 max-w-md mx-auto">
              If you have followed the steps above and still feel stuck or worried,
              our tech support team can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="min-h-[44px]">
                <Link to="/get-help">Get Expert Help</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[44px]">
                <Link to="/tools/scam-simulator">Practice Spotting Scams</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
