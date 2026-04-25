import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Scale,
  AlertTriangle,
  Cloud,
  Mail,
  Wallet,
  Users,
  Baby,
  Home,
  Tv,
  Image as ImageIcon,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  Phone,
  Lock,
} from 'lucide-react';

const cloudAccounts = [
  {
    name: 'Apple Family Sharing',
    steps:
      'Settings → [your name] → Family → tap each family member to remove. Or, if you are the organizer, you can leave instead of dissolving the whole group. Anything purchased under shared accounts stays with the person who paid.',
  },
  {
    name: 'Google Family Link',
    steps:
      'families.google.com → Manage family group → Remove members or leave the group. Kids under 13 need one parent to be the manager, so coordinate who keeps that role.',
  },
  {
    name: 'Amazon Household',
    steps:
      'Amazon → Account → Amazon Household → Leave or Remove adult. Shared Prime benefits end, but each person keeps their purchase history and digital content they bought.',
  },
  {
    name: 'Netflix / Streaming',
    steps:
      'Go to Account Settings → Profiles. Delete shared profiles before anyone else does. If keeping the subscription, change the password and payment method to your own.',
  },
  {
    name: 'iCloud Photos',
    steps:
      'Settings → [your name] → iCloud → Photos. Download your photo library to a personal computer or external drive before any account changes. A full library can take days to download — start now.',
  },
];

const emailSteps = [
  {
    title: 'Get your own email address',
    description:
      'If you share an email or if yours is something like "smithfamily@gmail", open a fresh account in your own name. Gmail, Proton Mail, iCloud — all free. Use this for all new accounts going forward.',
  },
  {
    title: 'Forward important emails to your personal account',
    description:
      'Financial statements, medical records, legal documents, photos of kids — save them to your new personal email before any password changes happen.',
  },
  {
    title: 'Change shared email passwords — after legal advice',
    description:
      'If you and your spouse share an email, do NOT change the password until your attorney says it is okay. In some states, locking a spouse out of shared accounts during proceedings can cause legal issues.',
  },
  {
    title: 'Update recovery email and phone everywhere',
    description:
      'Every account you have — bank, retirement, social media — may have your ex-spouse as a recovery contact. Go through each and update to your own phone and email.',
  },
];

const financialAccounts = [
  {
    title: 'Separate joint online banking',
    description:
      'Follow your attorney on what joint accounts to keep open during proceedings. For accounts being split, each person sets up their own login. Do not delete transaction history — it may matter later.',
  },
  {
    title: 'Freeze credit with all three bureaus',
    description:
      'Equifax (equifax.com), Experian (experian.com), TransUnion (transunion.com). Takes 10 minutes each. Free. Prevents anyone — including a former spouse with your SSN — from opening new credit in your name.',
  },
  {
    title: 'Update Venmo, Zelle, PayPal, Cash App',
    description:
      'Change the phone number and email on each. Disconnect from any shared bank account. Review transaction history and export it (most apps let you download a CSV) before changes.',
  },
  {
    title: 'Joint credit cards',
    description:
      'Talk to your attorney first. Typically, you call the issuer and ask to be removed as a joint account holder, or close the card entirely. Some cards cannot be closed with a balance — pay off first.',
  },
  {
    title: 'Investment and retirement accounts',
    description:
      'Fidelity, Vanguard, 401(k) through work — update beneficiaries ONLY after your divorce is final. Changing a beneficiary during proceedings can create legal problems. Your attorney should guide this.',
  },
];

const socialMedia = [
  {
    title: 'Review your friend list',
    description:
      'You do not have to unfriend in-laws or mutual friends. Take your time. For people who are actively stirring up drama, the "Unfollow" button keeps the connection but hides their posts.',
  },
  {
    title: 'Relationship status — when you are ready',
    description:
      'Change it when you want to, not when you feel pressure. Many people hide the "relationship" field entirely and skip the status update altogether. Both are fine.',
  },
  {
    title: 'Shared photos',
    description:
      'You do not have to delete wedding photos to move on. Most platforms let you hide photos from your profile without deleting them. Facebook: edit post privacy to "Only me".',
  },
  {
    title: 'Tags and check-ins',
    description:
      'Review your tagged photos. Turn on Tag Review so nothing new appears on your profile without your approval. Facebook → Settings → Profile and Tagging.',
  },
  {
    title: 'Location sharing',
    description:
      'Turn off location sharing in Find My Friends, Google Maps, Snap Maps. Remove your ex from any "Family Sharing" location group. This step matters for safety, not just privacy.',
  },
];

const parentingTools = [
  {
    name: 'Our Family Wizard',
    description:
      'Court-accepted co-parenting app. All messages, schedules, and expenses logged and timestamped. Judges in most states will admit these records as evidence. ~$120/year per parent. Has a "ToneMeter" that flags emotional language before you send.',
  },
  {
    name: 'TalkingParents',
    description:
      'Similar to Our Family Wizard. Free version works; paid version unlocks unalterable records you can print for court. Every message is preserved. Neither parent can edit or delete.',
  },
  {
    name: 'Google Calendar (shared)',
    description:
      'Free and simple. Make a shared calendar just for kid events — doctor appointments, school events, custody swaps. Each parent adds items. Both see everything without chatting.',
  },
  {
    name: 'Cozi Family Organizer',
    description:
      'Free. Shared calendar, grocery lists, to-do lists. Not designed for high-conflict co-parenting — better for parents who can still communicate normally about logistics.',
  },
  {
    name: "Children's device access",
    description:
      'Keep parental controls consistent across both homes. If you use Apple Family Sharing or Google Family Link, decide together who is the primary manager. Two different rulebooks confuses kids.',
  },
];

const homeTech = [
  {
    title: 'WiFi password — change after move-out',
    description:
      'Not before. Locking out a spouse who still has possessions at the house can cause legal issues. After they have moved out, change the router password. Old devices will need the new one.',
  },
  {
    title: 'Smart locks — change codes',
    description:
      'August, Schlage, Yale — remove your ex from the user list and delete their access code. If the lock is synced to a shared account, factory reset may be needed. Check the manufacturer instructions.',
  },
  {
    title: 'Ring doorbell and security cameras',
    description:
      'Remove shared access: Ring app → Settings → Shared Users → remove. Same for Nest, Arlo, Blink. Consider what footage is stored in the cloud and who has access to review it.',
  },
  {
    title: 'Alexa / Google Home',
    description:
      'Remove your ex from Alexa Household (Alexa app → Settings → Your Profile → Amazon Household). For Google Home, remove them as a household member in the app.',
  },
  {
    title: 'Smart TVs and streaming profiles',
    description:
      'Sign out of all shared streaming accounts and sign back in with your own. Delete profiles that belong to your ex so they do not see what you watch.',
  },
];

const subscriptions = [
  {
    name: 'Decide who keeps what',
    description:
      'Netflix, Spotify Family, Disney+, Hulu, Apple Music, HBO Max, gym apps, meal kits, news subscriptions. Make a list together if possible. One person keeps, one cancels — or both cancel and restart fresh.',
  },
  {
    name: 'Check your credit card statement',
    description:
      'Look back 6 months. Every recurring charge is a subscription you may have forgotten. Cancel the ones you do not need. Dispute any your ex starts on shared cards without agreement.',
  },
  {
    name: 'Streaming profiles — download your data first',
    description:
      'Spotify has your liked songs and playlists. Netflix has your watch history. Before you lose access, download or export what you want to keep.',
  },
];

const photosAndMemories = [
  {
    title: 'Extract shared iCloud photos',
    description:
      'If you share an Apple ID (not recommended but common): Settings → [name] → iCloud → Photos → Download originals to this device. Then back up to a personal external drive. Do this BEFORE any account changes.',
  },
  {
    title: 'Google Photos shared library',
    description:
      'photos.google.com → Shared libraries → Leave or unshare. Download everything first using Google Takeout (takeout.google.com). Takeout lets you download your entire photo history as a ZIP file.',
  },
  {
    title: 'Digital wedding albums and videos',
    description:
      'Painful but practical: decide what to keep, what to archive in a folder you rarely open, and what to delete. There is no wrong answer. Many people keep them for the kids someday.',
  },
  {
    title: 'Text messages',
    description:
      'iPhone: Settings → Messages → turn off iCloud Messages BEFORE signing out of a shared account. Otherwise your texts may be tied to the shared account. On Android, export via the Google Messages backup.',
  },
];

const identityProtection = [
  {
    title: 'Freeze your credit at all three bureaus',
    description:
      'Equifax, Experian, TransUnion. Free, takes 10 minutes per bureau. Nobody — not even a former spouse with your SSN — can open new credit in your name while frozen.',
  },
  {
    title: 'Set up fraud alerts',
    description:
      'A free one-year fraud alert requires creditors to verify your identity before opening new accounts. Place it at any one bureau — they notify the others. Renew yearly.',
  },
  {
    title: 'Monitor your credit report',
    description:
      'Free weekly reports at annualcreditreport.com (the only official site — the others are traps). Watch for new accounts you did not open and addresses you do not recognize.',
  },
  {
    title: 'Change passwords everywhere',
    description:
      'Use a password manager (1Password, Bitwarden, Dashlane) to generate a new unique password for every account. Start with: email, banking, phone carrier, SSN-linked accounts, cloud storage. Then work outward.',
  },
];

export default function DivorceTechHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Divorce Tech Hub — Splitting Digital Accounts & Identity | TekSure"
        description="The tech side of separation — practical, non-legal help with splitting cloud accounts, email, finances, social media, shared smart home, and protecting your identity."
        path="/divorce-tech-hub"
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Scale className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              The Tech Side of Separation
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Practical, non-legal help — what to do with shared accounts, devices, and digital life.
            </p>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="container max-w-4xl pt-10">
          <Card className="rounded-2xl border-2 border-destructive/40 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-foreground mb-2">
                    This is not legal advice
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Always follow your lawyer's guidance during divorce proceedings. Some actions
                    on this page may be prohibited by court order or local law until assets are
                    formally divided. Locking a spouse out of shared accounts before separation is
                    legally finalized can harm your case. When in doubt, ask your attorney first.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Before Making Changes */}
        <section className="container max-w-4xl py-10">
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-8">
              <Lock className="h-6 w-6 text-primary mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Before you make any changes
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Talk to your attorney first. In most states, joint accounts must be preserved
                  during proceedings. Courts can undo changes that look like hiding or
                  disadvantaging a spouse — or even sanction the person who made them.
                </p>
                <p>
                  That said, steps to protect <em>your own</em> identity (freezing your credit,
                  getting a personal email, backing up your photos) are almost always safe and
                  smart to do right away.
                </p>
                <p>
                  If there is any concern about safety, those rules change. Reach out to the
                  National Domestic Violence Hotline (1-800-799-7233) for guidance on safe
                  separation steps.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shared Cloud Accounts */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Cloud className="h-7 w-7" />
              Separating shared cloud accounts
            </h2>
            <p className="text-muted-foreground">
              Most shared-family subscriptions have a formal "leave the group" process. Use it
              rather than brute-force changing passwords.
            </p>
          </div>

          <div className="space-y-3">
            {cloudAccounts.map((a) => (
              <Card key={a.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{a.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.steps}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Email */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Mail className="h-7 w-7" />
                Email and communications
              </h2>
              <p className="text-muted-foreground">
                A fresh email account in your own name makes everything else cleaner. This is one
                of the first things to do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {emailSteps.map((e) => (
                <Card key={e.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{e.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financial */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Wallet className="h-7 w-7" />
              Financial accounts
            </h2>
            <p className="text-muted-foreground">
              These steps protect you while proceedings are underway. Again — joint account moves
              need your attorney's blessing first.
            </p>
          </div>

          <div className="space-y-3">
            {financialAccounts.map((f) => (
              <Card key={f.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Users className="h-7 w-7" />
                Social media
              </h2>
              <p className="text-muted-foreground">
                There is no timeline for this. Do what feels right, when it feels right. None of
                this is urgent unless it affects safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {socialMedia.map((s) => (
                <Card key={s.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parenting */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Baby className="h-7 w-7" />
              Parenting tech (if you have kids)
            </h2>
            <p className="text-muted-foreground">
              Tools designed for co-parenting after separation. Used right, they cut down on
              conflict and give you a clean record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {parentingTools.map((p) => (
              <Card key={p.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Home Tech */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Home className="h-7 w-7" />
                Smart home and shared devices
              </h2>
              <p className="text-muted-foreground">
                Smart home tech can become a safety issue after separation — cameras, locks,
                thermostats can be accessed remotely by whoever has the account.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {homeTech.map((h) => (
                <Card key={h.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscriptions */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Tv className="h-7 w-7" />
              Shared subscriptions to split
            </h2>
            <p className="text-muted-foreground">
              Every shared subscription needs a decision — keep, cancel, or split. Doing it
              intentionally beats discovering double-charges six months later.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {subscriptions.map((s) => (
              <Card key={s.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Photos */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <ImageIcon className="h-7 w-7" />
                Photos and memories
              </h2>
              <p className="text-muted-foreground">
                Do this step early. Photo access is one of the hardest things to recover after an
                account is closed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {photosAndMemories.map((p) => (
                <Card key={p.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Identity Protection */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <ShieldCheck className="h-7 w-7" />
              Identity protection
            </h2>
            <p className="text-muted-foreground">
              A former spouse knows more about you than almost anyone. These steps close the doors
              that they still have a key to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {identityProtection.map((i) => (
              <Card key={i.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{i.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mental Health */}
        <section className="bg-primary/5 border-y border-border">
          <div className="container max-w-4xl py-14">
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="p-8">
                <HeartPulse className="h-6 w-6 text-primary mb-3" />
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  Mental health support
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Divorce is one of the most stressful things a person can go through. Getting
                  support is not weakness — it is basic maintenance.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">988 Suicide &amp; Crisis Lifeline</strong>{' '}
                    — call or text 988 anytime. Free, confidential, staffed 24/7. Not just for
                    suicide — for any crisis.
                  </p>
                  <p>
                    <strong className="text-foreground">BetterHelp</strong> — online therapy,
                    $65–$90/week. Video, phone, or messaging. Good if local therapists have long
                    waits or you want privacy.
                  </p>
                  <p>
                    <strong className="text-foreground">Talkspace</strong> — similar to BetterHelp.
                    Covered by some insurance plans — check before paying out of pocket.
                  </p>
                  <p>
                    <strong className="text-foreground">DivorceCare support groups</strong> —
                    divorcecare.org. Free, in-person and online groups. Religious framing but
                    welcoming to all.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-primary/5">
            <CardContent className="p-8 md:p-10 text-center">
              <Scale className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                One step at a time
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                You do not have to do all of this in a week. Start with the safety-critical
                ones — credit freeze, personal email — and work through the rest as you are
                ready.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/book">
                    <Phone className="h-4 w-4" />
                    Book a session
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/data-broker-removal">Remove your data online</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
            TekSure provides technology help only. We are not attorneys. For legal questions,
            always consult a licensed family law attorney in your state.
          </p>
        </section>
      </main>
    </div>
  );
}
