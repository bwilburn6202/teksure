import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  Calendar,
  ExternalLink,
  Mail,
  CheckCircle2,
  Wrench,
  ArrowRight,
  Newspaper,
  Info,
} from 'lucide-react';

interface Source {
  label: string;
  url: string;
}

interface TechProblem {
  weekRange: string;
  dateISO: string;
  title: string;
  emoji: string;
  description: string;
  howToCheck?: string;
  whatToDo: string;
  source: Source;
  isCurrent?: boolean;
}

const CURRENT_PROBLEM: TechProblem = {
  weekRange: 'April 14–20, 2026',
  dateISO: '2026-04-14',
  title: 'Widespread Facebook Password Reset Scam Emails',
  emoji: '',
  description:
    'Scammers are blasting out fake "Facebook has detected suspicious activity on your account" emails. The emails look official — Facebook logo, professional formatting — but the reset link leads to a fake login page that steals your password. Reports have spiked this week across the US.',
  howToCheck:
    'Never click password reset links from email. Instead, open facebook.com (or the Facebook app) directly and check your notifications and security settings. If there was a real problem with your account, Facebook will tell you there.',
  whatToDo:
    'If you already clicked the link and entered your password, change it immediately at facebook.com > Settings > Security and Login. Turn on two-factor authentication while you are there. Report the email to the FTC at ReportFraud.ftc.gov.',
  source: {
    label: 'FTC Consumer Alerts',
    url: 'https://consumer.ftc.gov/consumer-alerts',
  },
  isCurrent: true,
};

const PAST_PROBLEMS: TechProblem[] = [
  {
    weekRange: 'April 7–13, 2026',
    dateISO: '2026-04-07',
    title: 'iOS 18 Update Draining Battery Fast',
    emoji: '',
    description:
      'A number of iPhone users reported that the most recent iOS point update caused their batteries to drain 30-50% faster than normal, especially on older models. Apple acknowledged the issue and is testing a fix.',
    whatToDo:
      'Restart your phone, then check Settings > Battery to see which apps are using the most power. Disable Background App Refresh for apps you rarely use. A hotfix is expected within days.',
    source: {
      label: 'Apple Support',
      url: 'https://support.apple.com/iphone',
    },
  },
  {
    weekRange: 'March 31 – April 6, 2026',
    dateISO: '2026-03-31',
    title: 'Netflix Profile Switcher Breaking on Smart TVs',
    emoji: '',
    description:
      'Netflix pushed an app update that caused the profile picker to freeze on several Samsung and LG smart TVs from 2019-2021. Users were stuck on whichever profile was last used.',
    whatToDo:
      'Sign out of Netflix on the TV, then sign back in. If that fails, uninstall and reinstall the Netflix app from your TV\u2019s app store. Netflix rolled out a server-side fix on April 5.',
    source: {
      label: 'Netflix Help Center',
      url: 'https://help.netflix.com',
    },
  },
  {
    weekRange: 'March 24–30, 2026',
    dateISO: '2026-03-24',
    title: 'Gmail Marking Legitimate Emails as Spam',
    emoji: '',
    description:
      'Gmail\u2019s spam filter began aggressively flagging legitimate emails — including bank statements, appointment confirmations, and family messages — as spam after a filter update.',
    whatToDo:
      'Check your Spam folder for missing messages. Open the email, click "Report not spam," and add the sender to your contacts to prevent future false flags.',
    source: {
      label: 'Google Gmail Help',
      url: 'https://support.google.com/mail',
    },
  },
  {
    weekRange: 'March 17–23, 2026',
    dateISO: '2026-03-17',
    title: 'Ring Doorbell Going Offline in Cold Weather',
    emoji: '',
    description:
      'Ring users in colder regions reported their battery-powered doorbells unexpectedly going offline when temperatures dropped below 32°F. Motion alerts stopped working entirely for many.',
    whatToDo:
      'Bring the battery pack inside to warm up, then recharge fully. Consider upgrading to a hardwired setup for year-round reliability. Ring published cold-weather tips on their blog.',
    source: {
      label: 'Ring Support',
      url: 'https://support.ring.com',
    },
  },
  {
    weekRange: 'March 10–16, 2026',
    dateISO: '2026-03-10',
    title: 'Medicare.gov Login Issues After Update',
    emoji: '',
    description:
      'Medicare.gov rolled out a redesigned login page and many users — especially those using older browsers — could not sign in. Error messages were vague and unhelpful.',
    whatToDo:
      'Try signing in using Chrome or Edge on a computer instead of an older tablet. If problems persist, call 1-800-MEDICARE. Medicare published a troubleshooting page with screenshots.',
    source: {
      label: 'Medicare.gov Help',
      url: 'https://www.medicare.gov/help',
    },
  },
  {
    weekRange: 'March 3–9, 2026',
    dateISO: '2026-03-03',
    title: 'Instagram Story Privacy Setting Defaulted to Public',
    emoji: '',
    description:
      'After an app update, many Instagram users discovered their story privacy had been switched from "Close Friends" to "Public" without warning. Photos intended for a small group were visible to everyone.',
    whatToDo:
      'Open Instagram > Profile > Menu > Settings > Privacy > Story and verify your audience setting. Delete any story you shared during this window that you did not intend to be public.',
    source: {
      label: 'Instagram Help',
      url: 'https://help.instagram.com',
    },
  },
  {
    weekRange: 'February 24 – March 2, 2026',
    dateISO: '2026-02-24',
    title: 'Bank of America App Unexpected Logout Loops',
    emoji: '',
    description:
      'The Bank of America mobile app repeatedly logged users out mid-session, forcing them to re-enter passwords and verification codes. Sessions timed out after as little as 60 seconds.',
    whatToDo:
      'Update the app to the latest version, then uninstall and reinstall if the problem continues. If you cannot log in, use bankofamerica.com in your web browser instead.',
    source: {
      label: 'Bank of America Help',
      url: 'https://www.bankofamerica.com/customer-service/',
    },
  },
  {
    weekRange: 'February 17–23, 2026',
    dateISO: '2026-02-17',
    title: 'Amazon Prime Video Buffering on Older Fire TVs',
    emoji: '',
    description:
      'Prime Video streams were buffering heavily or refusing to start on Fire TV Stick models from 2018 and earlier. Amazon pushed an app update that increased memory requirements.',
    whatToDo:
      'Restart your Fire TV, then go to Settings > Applications > Manage Installed Applications > Prime Video > Clear Cache. If the issue continues, a newer Fire TV Stick is recommended.',
    source: {
      label: 'Amazon Customer Service',
      url: 'https://www.amazon.com/gp/help/customer/contact-us',
    },
  },
  {
    weekRange: 'February 10–16, 2026',
    dateISO: '2026-02-10',
    title: 'Chromebook Suddenly Requiring Verification Codes',
    emoji: '',
    description:
      'Many Chromebook owners were unexpectedly asked to enter a Google verification code at login — sometimes every single time. This followed a rolled-out security update.',
    whatToDo:
      'Make sure your phone number or recovery email in your Google Account is current. You can also generate backup codes at myaccount.google.com/security for times when your phone is unavailable.',
    source: {
      label: 'Google Account Help',
      url: 'https://support.google.com/accounts',
    },
  },
  {
    weekRange: 'February 3–9, 2026',
    dateISO: '2026-02-03',
    title: 'iCloud Photos Duplicating After Restore',
    emoji: '',
    description:
      'iPhone users who restored their device from an iCloud backup reported seeing every photo duplicated — sometimes triple or quadruple. Photo library sizes ballooned overnight.',
    whatToDo:
      'In the Photos app, go to Albums > Duplicates to review and merge duplicates. Apple\u2019s built-in duplicate detection will safely combine them while preserving originals.',
    source: {
      label: 'Apple Support — Photos',
      url: 'https://support.apple.com/photos',
    },
  },
];

export default function TechProblemOfWeek() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Tech Problem of the Week — Stay Ahead of What's Breaking | TekSure"
        description="The biggest tech issues affecting everyday users this week. What's broken, who's affected, and exactly how to fix it. Updated weekly."
        path="/tech-problem-of-week"
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-5 bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300 text-sm px-3 py-1">
            <AlertTriangle className="w-4 h-4 mr-1.5" />
            Weekly tech alert
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
            What's Going Wrong This Week
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            A weekly look at the tech problems affecting everyday people — plus exactly what to do about them.
          </p>
        </section>

        {/* Current Week Hero Card */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-orange-300 dark:border-orange-700 bg-white dark:bg-slate-900 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-red-600 text-white hover:bg-red-700">
                  This Week
                </Badge>
                <span className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {CURRENT_PROBLEM.weekRange}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl md:text-6xl flex-shrink-0">{CURRENT_PROBLEM.emoji}</div>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {CURRENT_PROBLEM.title}
                </h2>
              </div>

              <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                {CURRENT_PROBLEM.description}
              </p>

              {CURRENT_PROBLEM.howToCheck && (
                <div className="mb-6 p-5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      How to check if you're affected
                    </h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {CURRENT_PROBLEM.howToCheck}
                  </p>
                </div>
              )}

              <div className="mb-6 p-5 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white">How to fix it</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                  {CURRENT_PROBLEM.whatToDo}
                </p>
              </div>

              <a
                href={CURRENT_PROBLEM.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-amber-700 dark:text-amber-400 hover:underline"
              >
                Source: {CURRENT_PROBLEM.source.label}
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            </CardContent>
          </Card>
        </section>

        {/* Recent Weeks */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Recent Weeks
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PAST_PROBLEMS.map((problem) => (
              <Card
                key={problem.dateISO}
                className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{problem.emoji}</div>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {problem.weekRange}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed flex-grow">
                    {problem.description}
                  </p>

                  <div className="border-t border-slate-200 dark:border-slate-800 pt-3 space-y-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">What to do:</span>{' '}
                      {problem.whatToDo}
                    </p>
                    <a
                      href={problem.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      {problem.source.label}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How We Pick + Suggest */}
        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  How we pick these
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Every Monday, our team reviews reports from the FTC, CISA, official vendor status pages, and tech news sources to identify the issue most likely to affect everyday users that week.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We prioritize problems that are widespread, actionable (there is something you can actually do), and explained in plain English.
              </p>
              <Link
                to="/news"
                className="inline-flex items-center text-sm font-semibold text-amber-700 dark:text-amber-400 hover:underline mt-4"
              >
                See our full news feed
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border-amber-200 dark:border-amber-900">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Suggest a problem
                </h2>
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-5 flex-grow">
                Noticed something breaking for you or people you know? Drop us a line. If it's affecting a lot of people, we'll feature it and help folks fix it.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white w-fit">
                <a href="mailto:problems@teksure.com?subject=Tech%20Problem%20Suggestion">
                  <Mail className="w-4 h-4 mr-2" />
                  problems@teksure.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
