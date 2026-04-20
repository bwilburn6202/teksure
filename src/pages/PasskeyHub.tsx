import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  KeyRound,
  ShieldCheck,
  Smartphone,
  Apple,
  Chrome,
  Cloud,
  HelpCircle,
  Wrench,
  Rocket,
  ListChecks,
  ExternalLink,
  CheckCircle2,
  Lock,
  Fingerprint,
} from 'lucide-react';

type Item = {
  name: string;
  url?: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof KeyRound;
  badge: string;
  intro: string;
  accent: string;
  items: Item[];
};

const sections: Section[] = [
  {
    id: 'what-is',
    title: "What's a passkey?",
    icon: KeyRound,
    badge: 'PLAIN ENGLISH',
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    intro:
      'A passkey is like a password — but your device (phone or laptop) proves it is you, instead of you typing a word. You unlock it with your fingerprint, face, or device PIN.',
    items: [
      {
        name: 'The short version',
        description:
          'Instead of remembering "P@ssw0rd!2024" and typing it, you tap a button, your phone reads your fingerprint or face, and you are in. The math that proves it is you happens quietly in the background.',
      },
      {
        name: 'Why it is safer',
        description:
          'There is nothing to steal. No password to phish. No word for a data breach to leak. A passkey lives on your device and never leaves — a website only sees proof that you own it, never the secret itself.',
      },
      {
        name: 'Why it is faster',
        description:
          'No typing. No password manager copy-paste. No "forgot password" email loop. A fingerprint tap and you are signed in, usually in under 2 seconds.',
      },
    ],
  },
  {
    id: 'why-better',
    title: 'Why passkeys are better than passwords',
    icon: ShieldCheck,
    badge: 'BENEFITS',
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    intro:
      'Passwords were invented in the 1960s. They were never designed for a world with 10 billion leaked accounts. Passkeys fix every one of the big problems.',
    items: [
      {
        name: 'Cannot be phished',
        description:
          'A fake website can trick you into typing a password. It cannot trick your device into handing over a passkey — passkeys only work on the exact site they were created for.',
      },
      {
        name: 'Cannot be guessed',
        description:
          'Every passkey is a long random number that no human could ever guess. Your fingerprint or face unlocks it locally — it is never "weak" no matter how simple your device PIN is.',
      },
      {
        name: 'Cannot be leaked in a data breach',
        description:
          'When a website gets hacked, it used to mean millions of passwords in the wild. Websites do not store passkeys — only a public verification code that is useless by itself.',
      },
      {
        name: 'Faster to sign in',
        description:
          'Tap, fingerprint, done. No 2FA text message. No authenticator app code. No password manager fumbling. Most sign-ins take under 2 seconds.',
      },
      {
        name: 'No more "forgot password" loops',
        description:
          'There is no password to forget. If you have your phone (and its backup), you have your passkey.',
      },
    ],
  },
  {
    id: 'where-work',
    title: 'Where passkeys work now',
    icon: Cloud,
    badge: 'SUPPORTED SITES',
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    intro:
      'Passkey support has gone from "almost nowhere" in 2023 to "most major sites" today. New ones are added every week.',
    items: [
      {
        name: 'Apple ID / iCloud',
        url: 'https://support.apple.com/en-us/102195',
        description:
          'Full passkey support across iPhone, iPad, and Mac. Syncs through iCloud Keychain so your passkeys are on every Apple device.',
      },
      {
        name: 'Google account',
        url: 'https://myaccount.google.com/security',
        description:
          'Passkeys are the default sign-in method now. Works everywhere Google does.',
      },
      {
        name: 'Microsoft account',
        url: 'https://account.microsoft.com',
        description:
          'Full support, including for Outlook, Xbox, and Microsoft 365.',
      },
      {
        name: 'Amazon',
        description: 'Set up in Your Account → Login & security → Passkey.',
      },
      {
        name: 'PayPal',
        description: 'Settings → Security → Manage passkeys. Fastest way to approve a payment.',
      },
      {
        name: 'Target, Home Depot, Best Buy, eBay',
        description: 'Major retailers have all rolled out passkeys over the past year.',
      },
      {
        name: 'Live list: passkeys.directory',
        url: 'https://passkeys.directory',
        description:
          'Community-maintained, always-current list of every site that supports passkeys. Check before you sign up anywhere.',
      },
    ],
  },
  {
    id: 'setup',
    title: 'How to set up your first passkey',
    icon: Smartphone,
    badge: 'STEP BY STEP',
    accent: 'from-indigo-50 to-indigo-100/40 dark:from-indigo-950/30 dark:to-indigo-900/10',
    intro:
      'If you only set up one passkey this month, make it your email account. It is the master key to your entire digital life — everything else resets through it.',
    items: [
      {
        name: 'Apple ID (iPhone, iPad, Mac)',
        description:
          'Settings → tap your name at the top → Sign-In & Security → Passkeys → "Set Up Passkey." You will confirm with Face ID or Touch ID. The passkey syncs automatically to every device signed in with the same Apple ID.',
      },
      {
        name: 'Google account',
        description:
          'Go to myaccount.google.com/security → "How you sign in to Google" → Passkeys → "Create a passkey." Confirm with your device\'s fingerprint, face, or screen lock.',
      },
      {
        name: 'Microsoft account',
        description:
          'Go to account.microsoft.com → Security → Advanced security options → under "Ways to prove who you are," click "Add a new way to sign in" → choose "Face, fingerprint, PIN, or security key." Follow the prompts.',
      },
      {
        name: 'What you will see the first time',
        description:
          'A pop-up from your operating system (not the website) asking "Save a passkey for this account?" Tap Continue, authenticate with your fingerprint or face, and that is it. You are done.',
      },
    ],
  },
  {
    id: 'managers',
    title: 'Password managers that support passkeys',
    icon: Lock,
    badge: 'STORAGE',
    accent: 'from-purple-50 to-purple-100/40 dark:from-purple-950/30 dark:to-purple-900/10',
    intro:
      'Passkeys can live in your device\'s built-in keychain, or in a dedicated password manager. A password manager is useful if you switch between Apple and Google devices.',
    items: [
      {
        name: 'Apple Keychain',
        description:
          'Built in to every Apple device, free. Syncs through iCloud. Best pick if your whole household is on Apple.',
      },
      {
        name: 'Google Password Manager',
        description:
          'Built in to Chrome and Android, free. Syncs through your Google account. Best pick if you live in Chrome.',
      },
      {
        name: 'Bitwarden',
        url: 'https://bitwarden.com',
        description:
          'Free forever for individuals, open source, works everywhere. The best pick if you switch between Apple, Windows, and Android.',
      },
      {
        name: '1Password',
        url: 'https://1password.com',
        description:
          '$3/mo. Polished apps, excellent family sharing, strong passkey support. The premium choice.',
      },
      {
        name: 'Dashlane',
        url: 'https://dashlane.com',
        description: '$5/mo. Includes a VPN and dark-web monitoring alongside passkey storage.',
      },
    ],
  },
  {
    id: 'faq',
    title: 'Common questions answered',
    icon: HelpCircle,
    badge: 'FAQ',
    accent: 'from-teal-50 to-teal-100/40 dark:from-teal-950/30 dark:to-teal-900/10',
    intro: 'Every new technology comes with five or six good questions. Here they are.',
    items: [
      {
        name: '"What if I lose my phone?"',
        description:
          'Your passkeys sync through iCloud Keychain (Apple), Google Password Manager (Google), or your password manager. Sign in to your cloud account on a new device and they come right back. You can also sign in from any other trusted device you have set up.',
      },
      {
        name: '"Is a passkey safer than 2FA?"',
        description:
          'Yes. Text-message 2FA codes can be intercepted (SIM swaps) or phished on fake sites. Authenticator app codes can be phished too. A passkey cannot — it will only work on the real site.',
      },
      {
        name: '"What about shared accounts?"',
        description:
          'Passkeys are per-person, not per-account. Everyone who uses a shared account sets up their own passkey on their own device. This is actually better — it means you can see who signed in.',
      },
      {
        name: '"Do I still need passwords?"',
        description:
          'Yes, for now. Most sites still do not support passkeys, and your big ones (email, bank) may also keep a password as a backup. Keep using a password manager. Passkeys add a fast, safe option on the sites that support them.',
      },
      {
        name: '"Can a passkey be stolen?"',
        description:
          'Only if someone has your unlocked device or your cloud password — which is also why your cloud account (Apple ID / Google / Microsoft) is the most important thing to protect. Turn on 2FA for that one.',
      },
    ],
  },
  {
    id: 'combo',
    title: 'Passkey + password manager = peace of mind',
    icon: Fingerprint,
    badge: 'BEST PRACTICE',
    accent: 'from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10',
    intro:
      'The strongest setup in 2026 is not one or the other — it is both, working together.',
    items: [
      {
        name: 'Use a password manager for everything',
        description:
          'Bitwarden, 1Password, or your device\'s built-in one. Let it generate and store every password. You should not know any of them by heart.',
      },
      {
        name: 'Add passkeys wherever they are offered',
        description:
          'Every time you sign in to a major site, check whether they have added passkey support. Takes 30 seconds to upgrade. Your password manager will still hold the old password as a backup.',
      },
      {
        name: 'Protect the master account',
        description:
          'Your password manager\'s master password and your cloud account (Apple ID / Google / Microsoft) are the two keys to everything. Use a unique, long passphrase for each, and turn on 2FA.',
      },
      {
        name: 'TekSure tools that help',
        url: '/tools/password-phrase-generator',
        description:
          'The Password Phrase Generator creates memorable, strong passwords. The Password Leak Checker tells you if any of yours were in a breach.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: Wrench,
    badge: 'FIX IT',
    accent: 'from-slate-50 to-slate-100/40 dark:from-slate-950/30 dark:to-slate-900/10',
    intro: 'Most passkey problems have the same two or three fixes. Try these in order.',
    items: [
      {
        name: '"Passkey did not work"',
        description:
          'Sign out of the account fully, then sign back in. If the problem repeats, delete the passkey in the site\'s security settings and create a fresh one. Make sure your device\'s operating system is up to date.',
      },
      {
        name: '"I am on a new device"',
        description:
          'If you are signed in to iCloud, Google, or Microsoft on the new device, your passkeys are already there. If not, sign in to your cloud account first. As a last resort, use the password as a backup to sign in, then set up a new passkey on the new device.',
      },
      {
        name: '"My account is locked"',
        description:
          'Almost every site still has "Sign in with password" as a fallback. Use that, then reset your passkey. If you do not remember the password either, use "Forgot password" on your trusted recovery email.',
      },
      {
        name: '"Passkey is not offered on this device"',
        description:
          'Older devices (iOS before 16, Android before 9, Windows 10 without Windows Hello) may not support passkeys. The fix is usually an OS update. If you cannot update, keep using a password manager.',
      },
    ],
  },
  {
    id: 'future',
    title: 'The future',
    icon: Rocket,
    badge: 'WHERE THIS GOES',
    accent: 'from-fuchsia-50 to-fuchsia-100/40 dark:from-fuchsia-950/30 dark:to-fuchsia-900/10',
    intro: 'Passwords will not disappear overnight, but they are on the way out.',
    items: [
      {
        name: 'Most big sites in 2–3 years',
        description:
          'Banks, insurance companies, streaming services, and government portals are all rolling out passkey support. Within a couple of years, typing a password will feel as old as writing a check.',
      },
      {
        name: 'Hardware keys still matter for high-security needs',
        description:
          'Journalists, activists, and executives often carry a YubiKey as a second factor. For most people, a phone-based passkey is plenty.',
      },
      {
        name: 'Passwords live on for old systems',
        description:
          'Some niche sites (your electric company, a small county portal) will still ask for passwords for years. That is fine. Your password manager handles those.',
      },
    ],
  },
  {
    id: 'action',
    title: 'Action plan',
    icon: ListChecks,
    badge: 'DO THIS',
    accent: 'from-orange-50 to-orange-100/40 dark:from-orange-950/30 dark:to-orange-900/10',
    intro:
      'Do not try to switch everything at once. Three steps, spread over three months, and you will be ahead of 99% of people.',
    items: [
      {
        name: 'This week: your email account',
        description:
          'Set up a passkey on the email account you use for everything else (Gmail, iCloud Mail, Outlook). This is the single most important account on the internet — if someone controls it, they can reset every other password.',
      },
      {
        name: 'Next month: banking, social media, shopping',
        description:
          'One login session at a time, when you would be signing in anyway. Check security settings, add a passkey. Bank first, then Facebook/Instagram, then Amazon.',
      },
      {
        name: 'Ongoing: add one more each week',
        description:
          'Every time a site you use announces passkeys, add one. Set a monthly reminder. In six months you will be mostly password-free on the things you use every day.',
      },
    ],
  },
];

export default function PasskeyHub() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Passkey Hub — The End of Passwords | TekSure"
        description="Passwords are dying. Passkeys are taking over. A plain-English guide to what passkeys are, why they are safer, where they work now, and how to set up your first one this week."
        path="/passkey-hub"
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
            <KeyRound className="w-4 h-4" />
            <span className="text-sm font-medium">Passkey Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Passwords Are Dying. Passkeys Are Taking Over.
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">
              Here is What That Means for You.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A fingerprint or face scan, no password to forget, nothing for a hacker to steal. This
            is the single biggest upgrade to everyday internet safety in 20 years — and it is
            already waiting on every account you care about.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm px-4 py-2 rounded-full border border-border hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <Card className={`overflow-hidden bg-gradient-to-br ${section.accent} border-2`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-background shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {section.badge}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.intro}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="p-4 rounded-lg bg-background/80 backdrop-blur border border-border/60"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                {item.url ? (
                                  <a
                                    href={item.url}
                                    target={item.url.startsWith('http') ? '_blank' : undefined}
                                    rel={
                                      item.url.startsWith('http') ? 'noopener noreferrer' : undefined
                                    }
                                    className="font-semibold hover:underline inline-flex items-center gap-1"
                                  >
                                    {item.name}
                                    {item.url.startsWith('http') && (
                                      <ExternalLink className="w-3 h-3" />
                                    )}
                                  </a>
                                ) : (
                                  <span className="font-semibold">{item.name}</span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}
        </div>

        {/* Tools CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Check your password health</h2>
              <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
                While you switch to passkeys, make sure the passwords you still use are strong and
                have not been leaked.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="/tools/password-phrase-generator">
                    <KeyRound className="w-4 h-4 mr-2" />
                    Password Phrase Generator
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-700"
                >
                  <a href="/tools/password-leak-checker">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Password Leak Checker
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
