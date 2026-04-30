import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  Heart,
  Smartphone,
  Wifi,
  Phone,
  Activity,
  Eye,
  Globe,
  type LucideIcon,
} from 'lucide-react';

interface Benefit {
  name: string;
  category: string;
  who: string;
  provides: string;
  apply: string[];
  link: string;
  phone?: string;
  notes?: string[];
  icon: LucideIcon;
}

const BENEFITS: Benefit[] = [
  {
    name: 'VA.gov Online Services',
    category: 'Free',
    who: 'Any veteran with a DD-214 or current service member. Family members can create their own account for survivor benefits.',
    provides:
      'One website for everything VA: file disability claims, check claim status, refill prescriptions, message your doctor, download your records, and view payment history.',
    apply: [
      'Go to VA.gov and click "Sign in or create an account".',
      'Pick Login.gov or ID.me — both are free and secure.',
      'Verify your identity with a photo ID and a quick selfie.',
      'Once verified, link your VA records — it pulls them in automatically.',
    ],
    link: 'https://www.va.gov',
    phone: '1-800-698-2411',
    icon: Globe,
    notes: [
      'You only have to verify your identity once — covers VA.gov, MyHealtheVet, and eBenefits.',
      'Family members of deceased veterans can apply for survivor benefits through the same portal.',
    ],
  },
  {
    name: 'My HealtheVet',
    category: 'Free',
    who: 'Any veteran enrolled in VA health care. If you are not enrolled yet, apply for VA health care first at VA.gov.',
    provides:
      'Refill prescriptions online, send secure messages to your VA doctor, view lab results, schedule appointments, and download your full medical records.',
    apply: [
      'Go to MyHealth.va.gov.',
      'Sign in with your Login.gov or ID.me account (the same one you use at VA.gov).',
      'On your first visit, ask the front desk at your VA clinic to "upgrade" your account to Premium — this unlocks prescription refills and secure messaging.',
      'The upgrade is free and takes about 5 minutes at any VA facility.',
    ],
    link: 'https://www.myhealth.va.gov',
    phone: '1-877-327-0022',
    icon: Heart,
    notes: [
      'Refilling prescriptions online means no waiting on hold and no trip to the pharmacy window.',
      'Secure messages reach your provider faster than the phone line in most cases.',
    ],
  },
  {
    name: 'VA Mobile Apps (SmartphoneVet collection)',
    category: 'Free',
    who: 'Veterans, service members, and family caregivers. No VA enrollment needed for most apps.',
    provides:
      'Over 40 free apps from the VA: PTSD Coach, Mindfulness Coach, Insomnia Coach, VA Health Chat, Annie (text-message check-ins), VA Welcome Kit, Caregiver Self-Care, and more.',
    apply: [
      'Open the App Store (iPhone) or Play Store (Android).',
      'Search for the app name with "VA" in front — for example, "VA PTSD Coach".',
      'Confirm the publisher reads "U.S. Department of Veterans Affairs" before downloading.',
      'Most apps work without a sign-in; a few connect to your VA health account.',
    ],
    link: 'https://mobile.va.gov/appstore',
    icon: Smartphone,
    notes: [
      'PTSD Coach has been downloaded over 600,000 times and is recommended by VA mental health providers.',
      'Mindfulness Coach is helpful even if you do not have a diagnosis — it is good for general stress.',
    ],
  },
  {
    name: 'Free Internet Through the VA (Digital Divide Consult)',
    category: 'Free',
    who: 'Veterans enrolled in VA health care who do not have reliable home internet and need it for telehealth visits.',
    provides:
      'A no-cost iPad or hotspot with a data plan for telehealth video appointments. The VA covers the device and the monthly internet for as long as you need it for medical visits.',
    apply: [
      'At your next VA appointment, tell your provider you have trouble with telehealth because of internet.',
      'They put in a "Digital Divide Consult" — that is the official name.',
      'A VA social worker calls within 1-2 weeks to ship the device.',
      'Device arrives by mail with a one-page setup guide.',
    ],
    link: 'https://connectedcare.va.gov/partners/digital-divide',
    phone: '1-866-651-3180',
    icon: Wifi,
    notes: [
      'Also available through SAMHSA and tribal partner programs.',
      'You keep the iPad as long as you have ongoing VA telehealth care.',
    ],
  },
  {
    name: 'AT&T Veterans Discount',
    category: '25% off',
    who: 'Active duty, veterans, retirees, and their spouses. Gold Star families qualify too.',
    provides:
      '25% off the unlimited wireless plan, plus discounts on AT&T Fiber home internet. Discount applies for the whole household on one bill.',
    apply: [
      'Go to att.com/wireless/military-discount.',
      'Click "Verify with ID.me" — same system the VA uses.',
      'Sign in to ID.me (or create a free account) and confirm veteran status.',
      'Link your AT&T account number; the discount appears on your next bill.',
    ],
    link: 'https://www.att.com/wireless/military-discount',
    phone: '1-800-331-0500',
    icon: Phone,
    notes: [
      'Works on existing accounts — you do not have to switch plans.',
      'Spouses can apply on the veteran\'s behalf with a marriage certificate.',
    ],
  },
  {
    name: 'Verizon Veterans Plan (Welcome Unlimited)',
    category: '$25/line',
    who: 'Veterans, active duty, and Gold Star families. Verified through ID.me.',
    provides:
      'Up to $25/month off each line on Verizon Unlimited plans. A family of 4 can save around $100 a month. Includes free Disney+ and Apple Music on the higher tiers.',
    apply: [
      'Visit verizon.com/military.',
      'Verify with ID.me using your DD-214 or current military ID.',
      'Pick a plan or apply the discount to your existing one.',
      'Discount appears on the next billing cycle.',
    ],
    link: 'https://www.verizon.com/military',
    phone: '1-800-922-0204',
    icon: Phone,
    notes: [
      'The discount stacks on top of mix-and-match family plans.',
      'Auto-pay is required to keep the discount.',
    ],
  },
  {
    name: 'T-Mobile Magenta Military',
    category: '20-50% off',
    who: 'Veterans, active duty, retirees, reservists, and Gold Star spouses and parents.',
    provides:
      'Half off additional lines on the Go5G or Magenta MAX plan, plus a free year of Apple TV+ and Paramount+. Two lines run around $80/month after the discount.',
    apply: [
      'Go to t-mobile.com/cell-phone-plans/military.',
      'Verify through ID.me with your service record.',
      'Switch a current plan or sign up new — they will port your number free.',
      'Discount kicks in on the first bill.',
    ],
    link: 'https://www.t-mobile.com/cell-phone-plans/military',
    phone: '1-800-937-8997',
    icon: Phone,
    notes: [
      'T-Mobile also waives the activation fee for veterans.',
      'Gold Star families get the same pricing as active military.',
    ],
  },
  {
    name: 'SilverSneakers (free through the VA Champion Veteran option)',
    category: 'Free',
    who: 'Veterans 65+ who are eligible for VA care, and many veterans on Tricare for Life or certain Medicare Advantage plans.',
    provides:
      'Free gym membership at over 16,000 locations (Planet Fitness, YMCA, LA Fitness, Anytime Fitness) plus free senior fitness classes. Includes the SilverSneakers GO mobile app for at-home workouts.',
    apply: [
      'Go to SilverSneakers.com → "Check Your Eligibility".',
      'Enter your Medicare or Tricare ID number.',
      'If you do not have those, call 1-888-423-4632 and ask about VA Champion Veteran enrollment.',
      'Print the membership card or show the app at the gym front desk.',
    ],
    link: 'https://www.silversneakers.com',
    phone: '1-888-423-4632',
    icon: Activity,
    notes: [
      'No copay, no contract, and you can use any participating gym anywhere in the country.',
      'Great for veterans who travel — switch gyms while on the road at no extra cost.',
    ],
  },
  {
    name: 'Hadley Institute (free for blind / low-vision veterans)',
    category: 'Free',
    who: 'Veterans (and any adult) living with vision loss, blindness, or progressive eye disease.',
    provides:
      'Free online and audio courses on living with vision loss: smartphone use with VoiceOver/TalkBack, computer keyboard shortcuts, daily tasks, braille, and emotional adjustment. Personal one-on-one phone support too.',
    apply: [
      'Go to Hadley.edu and click "Get Started".',
      'Complete a short, free enrollment form.',
      'Pick the courses you want — over 200 to choose from.',
      'Learn at your own pace by audio, large print, or online video.',
    ],
    link: 'https://hadley.edu',
    phone: '1-800-323-4238',
    icon: Eye,
    notes: [
      'Founded in 1920 — the oldest school of its kind in the US.',
      'You can also call a Hadley counselor for free phone tutoring on a smartphone or computer.',
    ],
  },
  {
    name: 'VA Welcome Kit (printable benefits map)',
    category: 'Free',
    who: 'New veterans, transitioning service members, and family members who are unsure where to start.',
    provides:
      'A free PDF guide that lists every VA benefit by life event — buying a home, having a baby, going back to school, retiring. Each section has the right phone number and website.',
    apply: [
      'Go to va.gov/welcome-kit.',
      'Click "Download the welcome kit".',
      'Save the PDF or print it. About 50 pages.',
      'Spanish version available on the same page.',
    ],
    link: 'https://www.va.gov/welcome-kit',
    icon: Shield,
    notes: [
      'The best single document for understanding what the VA actually offers.',
      'Mail-order print copies are free by calling 1-800-698-2411.',
    ],
  },
];

export default function VeteranTechBenefits() {
  return (
    <>
      <SEOHead
        title="Veteran Tech Benefits Guide"
        description="Tech benefits available to US veterans and their families: VA online services, MyHealtheVet, free SmartphoneVet apps, free internet through the VA, AT&T, Verizon, and T-Mobile military discounts, free SilverSneakers, and Hadley Institute for blind veterans."
        path="/tools/veteran-tech-benefits"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-red-50 dark:from-blue-950/20 dark:to-red-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Veteran Tech Benefits</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ten real tech benefits earned by US veterans and their families. Free apps, free internet, big phone discounts, free gym, and more — most never get used.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Veteran Tech Benefits' }]} />

          <Card className="border-red-300 bg-red-50 dark:bg-red-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out for VA scam calls</p>
                <p className="text-muted-foreground mb-2">
                  Scammers target veterans with fake "VA refund" calls, fake claim-help fees, and pretend pension increases. The real VA will <strong>never</strong> call to demand a payment, gift cards, or your bank login to release a refund.
                </p>
                <ul className="text-muted-foreground space-y-1">
                  <li className="flex gap-2"><span className="text-red-600">•</span><span>Hang up on anyone claiming to be from "VA Refund Department" — that office does not exist.</span></li>
                  <li className="flex gap-2"><span className="text-red-600">•</span><span>Never pay a "claim filing fee" — VSOs (DAV, VFW, American Legion) help file claims for free.</span></li>
                  <li className="flex gap-2"><span className="text-red-600">•</span><span>Report scam calls to the VA Office of Inspector General at 1-800-488-8244 or to the FTC at ReportFraud.ftc.gov.</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {BENEFITS.map(b => {
              const Icon = b.icon;
              return (
                <Card key={b.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{b.name}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline">{b.category}</Badge>
                          {b.phone && <Badge variant="outline">{b.phone}</Badge>}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Who qualifies:</strong> {b.who}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>What it provides:</strong> {b.provides}
                    </p>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to apply</p>
                    <ol className="space-y-1.5 mb-3">
                      {b.apply.map((s, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>

                    {b.notes && (
                      <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                        {b.notes.map((n, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span><span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <a
                      href={b.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
                    >
                      Apply / learn more <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Other places to check</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Veterans Service Officers (VSOs):</strong> DAV, VFW, and American Legion file claims for you at no cost. Find one at va.gov/ogc/apps/accreditation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>VA Caregiver Support line:</strong> 1-855-260-3274 — free phone help for spouses and family caregivers, including tech setup.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Veterans Crisis Line:</strong> dial 988 then press 1. Text 838255. Free, 24/7, and confidential.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link
                to="/tools/government-benefits-portal"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm flex items-center gap-1">
                  Benefits Portal <ChevronRight className="h-3 w-3" />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">All government benefits in one place.</p>
              </Link>
              <Link
                to="/tools/free-resources"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm flex items-center gap-1">
                  Free Resources <ChevronRight className="h-3 w-3" />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">Free tech programs and tools.</p>
              </Link>
              <Link
                to="/tools/scam-message-decoder"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm flex items-center gap-1">
                  Scam Decoder <ChevronRight className="h-3 w-3" />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot fake calls and texts.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
