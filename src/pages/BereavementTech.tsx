import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Clock,
  Users,
  Flower,
  FileText,
  Cloud,
  Archive,
  CreditCard,
  LifeBuoy,
  Phone,
  AlertTriangle,
  Mail,
  Camera,
  HeartHandshake,
} from 'lucide-react';

const firstWeek = [
  {
    title: 'Get multiple certified death certificates',
    description:
      'Order 5 to 10 or more. The funeral home usually handles this, but confirm the count. Many institutions (banks, insurance, pension, IRS) require an original certified copy — not a photocopy — and will not return it. Running out later means ordering more and waiting weeks.',
  },
  {
    title: 'Primary contacts — only these this week',
    description:
      'Social Security (1-800-772-1213, or ssa.gov/survivors). The employer, if they were working. The VA (1-800-827-1000) if they were a veteran. That is enough for the first week. Everything else can wait.',
  },
  {
    title: 'Delay everything else if you can',
    description:
      'You will be tempted to "get things done" because action feels better than grief. Resist. Decisions made in the first two weeks are often regretted. Banks, subscriptions, accounts — all of it can wait. Take care of yourself first.',
  },
];

const sharingNews = [
  {
    icon: Users,
    title: 'Social media announcement considerations',
    description:
      'Wait until close family has been told directly. Coordinate with the family so the announcement is consistent. Keep it short. Turn off comments if scrolling through reactions feels too much. You can always share more later.',
  },
  {
    icon: Phone,
    title: 'Who tells whom — delegate this',
    description:
      'Make a list of who needs a phone call, who needs a text, who needs an email. Assign each group to a family member or close friend. You do not have to make all the calls. Letting someone help is a gift to them too.',
  },
  {
    icon: HeartHandshake,
    title: 'Creating a support page (CaringBridge)',
    description:
      'caringbridge.org — free, ad-free, private. Post updates once so the whole circle is informed. Accepts meals, visits, and messages in one place. Especially useful when the same question ("how are you doing?") from 80 people becomes exhausting to answer.',
  },
];

const memorialTech = [
  {
    title: 'Online obituaries',
    description:
      'legacy.com aggregates obituaries from newspapers nationwide. Your local paper can often post the obituary online for a fee (typically $50–$300 depending on length and paper). The funeral home will usually help draft and submit it.',
  },
  {
    title: 'Live-streaming funerals',
    description:
      'Almost every funeral home now offers live-streaming. Ask specifically — do not assume. Share the link with out-of-town family, the infirm, and anyone who could not travel. Most services record it so people can watch later.',
  },
  {
    title: 'Memorial websites',
    description:
      'Ever Loved (everloved.com) and Forever Missed (forevermissed.com) host permanent online memorials. Family can add photos, stories, and light virtual candles. Ever Loved also handles memorial fundraising (for medical bills, funeral costs, charities).',
  },
  {
    title: 'Online guest books',
    description:
      'Tribute.co and the guest-book features on Ever Loved collect written messages and photo memories from people who could not attend. A printed copy becomes a keepsake the family can read in the quieter months afterward.',
  },
  {
    title: 'Sharing photos with the funeral home',
    description:
      'Most funeral directors will request a slideshow of 30 to 60 photos for the service. Upload photos to a Google Drive folder or Dropbox and share the link — easier than emailing dozens of attachments. Give yourself grace if picking photos is overwhelming; ask a sibling or friend to help.',
  },
];

const financialLegal = [
  {
    title: 'Social Security Administration',
    description:
      'ssa.gov/survivors — report the death (the funeral director usually handles this, but confirm). Survivor benefits may be available for spouses, minor children, and dependent adults. Call 1-800-772-1213.',
  },
  {
    title: 'Medicare and insurance',
    description:
      'Medicare is notified through Social Security. Contact all private health, life, auto, and home insurance policies. Life insurance payouts often require certified death certificates — this is one of the big reasons you need so many.',
  },
  {
    title: 'IRS — final tax return',
    description:
      'A final federal tax return (Form 1040) must be filed for the year of death. If there is an estate, a separate Form 1041 may be needed. An estate attorney or CPA will walk you through this — do not try to figure it out alone. irs.gov/individuals/survivors-executors-administrators.',
  },
  {
    title: 'Banks and credit',
    description:
      'Contact every bank, credit union, and credit card company. Joint accounts usually convert to the surviving owner. Individual accounts become part of the estate. Bring a certified death certificate. Request credit bureaus (Equifax, Experian, TransUnion) add a "deceased — do not issue credit" flag to prevent identity theft.',
  },
  {
    title: 'Mortgage, utilities, and employer',
    description:
      'Contact the mortgage company — joint mortgages usually transfer; individual ones require estate handling. Transfer utilities into your name. Contact the employer for final paycheck, unused PTO, life insurance through work, and pension/401(k) administrators.',
  },
  {
    title: 'Pension administrator',
    description:
      'Every pension (including state, federal, union, military, and corporate plans) has its own process and its own survivor benefits. Call each one. Many have spousal continuation benefits that auto-lapse if not claimed within a window.',
  },
];

const digitalLegacy = [
  {
    title: 'Apple Digital Legacy',
    description:
      'support.apple.com/en-us/HT212360 — if they set this up before death, a Legacy Contact can access their iCloud photos, messages, notes, and files. Requires a death certificate and the Legacy Contact access key. If it was not set up, recovery is possible but far harder — contact Apple Support directly.',
  },
  {
    title: 'Google Inactive Account Manager',
    description:
      'myaccount.google.com/inactive — Google\'s version of a digital will. Next of kin can also request account access with a death certificate at support.google.com/accounts/troubleshooter/6357590. Photos, Gmail, and Drive can be recovered or deleted per the family\'s wishes.',
  },
  {
    title: 'Facebook memorialization or deletion',
    description:
      'facebook.com/help/1506822589577997 — choose memorialization (profile stays up with "Remembering" before the name, no one can log in) or deletion. Requires proof of death. If they named a Legacy Contact, that person can post a final message and manage tribute posts.',
  },
  {
    title: 'Instagram memorialization',
    description:
      'help.instagram.com/231764660354188 — similar to Facebook (owned by the same company). Choose between memorializing the account (posts remain but locked) or removal. Requires proof of death and proof of relationship.',
  },
  {
    title: 'LinkedIn legacy',
    description:
      'linkedin.com/help/linkedin/ask/ts-rdmlp — next of kin can request profile removal or memorialization. Useful to stop colleagues from messaging months or years later, unaware.',
  },
  {
    title: 'Other major platforms',
    description:
      'Twitter/X, TikTok, Snapchat, Pinterest, and others each have a deceased-user process. Search "[platform name] deceased user" and follow their form. Have the death certificate scanned and ready to upload.',
  },
];

const preservingDigital = [
  {
    icon: Camera,
    title: 'Download photos from cloud before closing accounts',
    description:
      'Do this first. Apple iCloud, Google Photos, Amazon Photos, and Dropbox all let you download everything as a ZIP. If you close the account before downloading, the photos are often permanently gone. This step alone is worth the effort — photos of them are what you will reach for most.',
  },
  {
    icon: Phone,
    title: 'Save voicemails',
    description:
      'Google Voice lets you download voicemails as audio files directly. On iPhone, use the Voice Memos trick: play the voicemail on speaker while recording on another phone, or use an app like VoCap or iMazing. Saving a voicemail of their voice saying "hey, it\'s me, call me back" is priceless later.',
  },
  {
    icon: Mail,
    title: 'Save emails they sent you',
    description:
      'In Gmail, open the email → three dots → Print → Save as PDF. In Outlook, File → Save As → PDF. Save important emails — birthday messages, advice, the ordinary ones — into a folder on your computer. You will want them someday.',
  },
  {
    icon: Archive,
    title: 'Keep their text messages',
    description:
      'iPhone: back up the phone to a Mac or to iCloud while their phone is still active — do not let the account suspend. Android: SMS Backup & Restore (free app) exports every text message to a single file. Print out favorite threads. Text messages are the modern love letters.',
  },
];

const subscriptions = [
  {
    title: 'Streaming services',
    description:
      'Netflix, Hulu, Disney+, HBO Max, Prime Video, Apple TV+, Spotify, Apple Music — each one charges monthly until cancelled. Most can be cancelled online; a few require a phone call. Before cancelling, check whether you want to keep the account (sometimes family plans include you).',
  },
  {
    title: 'Cloud storage — before you lose their photos!',
    description:
      'iCloud, Google One, Dropbox, OneDrive — these auto-charge and eventually auto-delete the account if payment stops. Cancel storage ONLY after you have downloaded everything. Losing a decade of photos to an auto-deleted iCloud account is one of the most common and most painful mistakes.',
  },
  {
    title: 'Gym memberships',
    description:
      'Most gyms require a phone call, a written letter, or an in-person cancellation. Bring a death certificate. Many will refund the most recent charge. Planet Fitness, Equinox, and LA Fitness each have a specific process — search "[gym name] cancel deceased."',
  },
  {
    title: 'Magazine and newspaper subscriptions',
    description:
      'Check their mail for a week to catch the ones you did not know about. Each publisher has a customer service number on the back of the invoice or in the magazine itself. Usually a quick call.',
  },
  {
    title: 'App subscriptions',
    description:
      'On iPhone: Settings → their Apple ID → Subscriptions. On Android: Play Store → profile icon → Payments & subscriptions → Subscriptions. These are the sneaky ones — apps charging $4.99/month forever. Cancel what you can; the rest stop when the credit card is closed.',
  },
];

const ongoingGrief = [
  {
    icon: LifeBuoy,
    title: 'Grief support apps',
    description:
      'Empathy (empathy.com) is the most comprehensive — combines logistics, grief support, and access to grief specialists. Untangle is focused on community and peer support. GriefShare (griefshare.org) is faith-based and groups-based, with in-person and online meetings.',
  },
  {
    icon: Users,
    title: 'Online grief groups',
    description:
      'Many grief groups now meet on Zoom, which means you can attend without leaving the house on hard days. The Dinner Party (thedinnerparty.org) is specifically for people in their 20s, 30s, and early 40s who have lost someone. Modern Loss has online community and essays.',
  },
  {
    icon: Heart,
    title: 'Local hospice grief programs',
    description:
      'Almost every hospice organization offers free bereavement support for 12 to 18 months after a death, and you do not have to have used their hospice service to qualify. Call your local hospice and ask. Many offer groups, 1-on-1 counseling, and specialized groups (widow/widower, child loss, sudden death).',
  },
  {
    icon: Heart,
    title: 'Therapy — grief-specific',
    description:
      'Psychology Today (psychologytoday.com) lets you filter therapists by specialty ("grief," "bereavement," "complicated grief"). BetterHelp and Talkspace are online-only options. Most grief therapy is covered by insurance, Medicare, and Medicaid — ask about coverage when you call.',
  },
];

const overwhelming = [
  {
    title: '988 Suicide & Crisis Lifeline',
    description:
      'Call or text 988 — 24/7, free, confidential. You do not have to be actively suicidal to call. Any kind of crisis-level distress qualifies. They will listen, not rush, and help you get through the night.',
  },
  {
    title: 'Crisis Text Line',
    description:
      'Text HOME to 741741. Text-based for people who cannot talk out loud. Available 24/7, free, confidential.',
  },
  {
    title: 'Local grief hotlines',
    description:
      'Many hospice organizations and counties run grief hotlines with trained volunteers. Search "[your county] grief hotline" or call 211 (the national social services line) and ask.',
  },
];

export default function BereavementTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Bereavement Tech — Honoring a Life and Navigating the Aftermath | TekSure"
        description="When someone you love dies, the tech side of grief is real. A compassionate, practical guide to accounts, memorials, digital legacy, subscriptions, and ongoing grief support."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-background dark:from-slate-900/40">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Flower className="mr-1 h-3 w-3" />
              Bereavement
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              When Someone You Love Dies — The Tech Side of Grief
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              There is no rush. This guide is here when you're ready — not before.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/40">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 shrink-0 text-slate-700 dark:text-slate-300" />
                <div>
                  <h3 className="mb-2 font-semibold">Before you begin</h3>
                  <p className="text-sm text-muted-foreground">
                    There is no rush. This guide is here when you're ready — not before. Start
                    wherever feels right. Skip what doesn't apply. Come back later for the parts
                    you can't face today. Grief does not move in a straight line, and neither
                    should this list.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* First Week */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Clock className="mr-1 h-3 w-3" />
              The First Week
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">The First Week</h2>
            <p className="text-muted-foreground">
              Only what's truly urgent. Everything else can wait.
            </p>
          </div>
          <div className="space-y-4">
            {firstWeek.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sharing the News */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Users className="mr-1 h-3 w-3" />
                Sharing
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Sharing the News</h2>
              <p className="text-muted-foreground">
                When you're ready — and only when you're ready.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {sharingNews.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Tech */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Flower className="mr-1 h-3 w-3" />
              Memorial
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Memorial & Funeral Tech</h2>
            <p className="text-muted-foreground">
              Honoring their life across distance and time.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {memorialTech.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial & Legal */}
      <section className="border-y bg-slate-50/60 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <FileText className="mr-1 h-3 w-3" />
                Financial & Legal
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Financial & Legal Tech</h2>
              <p className="text-muted-foreground">
                The institutions that need to be notified (U.S.). You'll need 5 to 15 certified
                death certificates depending on complexity.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {financialLegal.map((item) => (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Legacy */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Cloud className="mr-1 h-3 w-3" />
              Digital Legacy
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Digital Legacy — What to Do with Their Accounts
            </h2>
            <p className="text-muted-foreground">
              Every major platform has a specific process. Take them one at a time.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {digitalLegacy.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preserving Digital Life */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Archive className="mr-1 h-3 w-3" />
                Preserving Memories
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Preserving Their Digital Life</h2>
              <p className="text-muted-foreground">
                Do this BEFORE closing anything. Once it's gone, it's gone.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {preservingDigital.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <CreditCard className="mr-1 h-3 w-3" />
              Subscriptions
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Subscriptions to Cancel</h2>
            <p className="text-muted-foreground">
              The monthly auto-charges that keep draining the estate if no one stops them.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {subscriptions.map((item) => (
              <Card key={item.title} className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Grief Tech */}
      <section className="border-y bg-slate-50/60 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <LifeBuoy className="mr-1 h-3 w-3" />
                Ongoing Support
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Ongoing Grief Tech</h2>
              <p className="text-muted-foreground">
                The support that matters most often shows up weeks or months after the funeral.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {ongoingGrief.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Overwhelming */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <AlertTriangle className="mr-1 h-3 w-3" />
              Crisis Support
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">If the Loss Is Overwhelming</h2>
            <p className="text-muted-foreground">
              Please use these. You are not being dramatic. Grief can take a person under.
            </p>
          </div>
          <div className="space-y-4">
            {overwhelming.map((item) => (
              <Card key={item.title} className="border-2 border-rose-200 dark:border-rose-900">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compassionate Closing */}
      <section className="border-t bg-gradient-to-b from-slate-50 to-background dark:from-slate-900/40">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Flower className="mx-auto mb-6 h-12 w-12 text-slate-600 dark:text-slate-400" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">You'll find your own timeline.</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Take all the time you need. The logistics will still be there tomorrow, and next
              week, and next month. The person you lost would want you to be gentle with
              yourself. We'll be here when you're ready to tackle any of it — or when you just
              need someone to walk through it with you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/guides">Browse all guides</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/get-help">Book a 1-on-1 session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
