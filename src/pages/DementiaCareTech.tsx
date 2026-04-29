import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Shield,
  Pill,
  Image as ImageIcon,
  MessageCircle,
  Clock,
  Music,
  Users,
  AlertTriangle,
  Phone,
  HandHeart,
  Smartphone,
  Home,
  Sparkles,
  MapPin,
  Stethoscope,
} from 'lucide-react';

const simplerDevices = [
  {
    icon: Smartphone,
    title: 'GrandPad tablet',
    description:
      'grandpad.net — a senior-focused tablet with a deliberately minimal interface. Big buttons, no app store, no confusing notifications. Family members control the contacts and photos remotely. Monthly subscription includes the tablet and 4G data.',
  },
  {
    icon: Phone,
    title: 'Jitterbug Smart phones',
    description:
      'A simplified Android phone designed for seniors. List-based menus instead of a grid of app icons, a dedicated urgent-response button, and larger text. Sold through Lively. A good middle ground between a flip phone and a full smartphone.',
  },
  {
    icon: Phone,
    title: 'Simple flip phones still make sense',
    description:
      'If smartphones create more confusion than comfort, a flip phone with large buttons and a few programmed speed-dial numbers is often the right answer. Familiarity beats features at every stage of dementia.',
  },
  {
    icon: Sparkles,
    title: '"Senior Mode" on existing phones',
    description:
      'Samsung has Easy Mode (Settings → Display → Easy mode) which enlarges icons and simplifies the home screen. iPhone has Display Zoom, Larger Text, and a Simple Home layout through Assistive Access (iOS 17+). Use what they already know.',
  },
];

const safetyTech = [
  {
    icon: MapPin,
    title: 'GPS tracking for wandering',
    description:
      'Apple AirTag (inexpensive, but only useful if they pass near another iPhone — and requires consent considerations). SafeWander sensors alert when someone gets out of bed. Jiobit is a small clip-on tracker with two-way communication. Mindme is a dedicated dementia-focused GPS device with an SOS button.',
  },
  {
    icon: Heart,
    title: 'Fall detection',
    description:
      'Apple Watch (Series 4 and newer) auto-calls emergency services after a hard fall if there is no response. Medical Guardian and Lively Mobile are dedicated medical-alert devices with 24/7 monitoring — no phone needed. Waterproof versions can be worn in the shower, where most falls happen.',
  },
  {
    icon: Home,
    title: 'Door alerts',
    description:
      'Ring doorbells record who comes and goes. Simple door sensors (SimpliSafe, Wyze, Ring Alarm) send a phone alert to a caregiver whenever the front door opens — useful for catching wandering before it becomes a crisis.',
  },
  {
    icon: AlertTriangle,
    title: 'Stove monitors',
    description:
      'iGuardStove automatically shuts off the stove after a set period of inactivity. Safe-T-Element replaces burner coils with ones that cannot exceed a safe temperature. Unattended stoves are one of the leading causes of house fires in dementia households — this is worth the investment.',
  },
];

const medication = [
  {
    title: 'Hero pill dispenser',
    description:
      'herohealth.com — an automated countertop dispenser that holds 10 medications, sorts doses, and alerts a caregiver by phone if a dose is missed. Around $45/month plus the hardware. For a household where missed doses lead to hospital visits, this pays for itself quickly.',
  },
  {
    title: 'PillPack by Amazon',
    description:
      'pillpack.amazon.com — your pharmacy packages each dose into a pre-sorted pouch labeled with the date and time. Delivered free to the door every two weeks. Medicare Part D and most insurance plans cover it. Removes the "is this the right pill?" question entirely.',
  },
  {
    title: 'Simple reminder apps',
    description:
      'MyTherapy and Medisafe send alerts when it is time for each pill, and notify a caregiver if a dose is skipped. Best for early-stage dementia when the person still reliably checks their phone. Set up by the caregiver, not the person taking the medication.',
  },
  {
    title: 'Weekly pill organizers still work',
    description:
      'The $8 plastic weekly pill box from the drugstore is still effective and removes any technology friction. A caregiver fills it on Sunday; the person with dementia only sees the one day they need. Low-tech is often the right answer.',
  },
];

const memoryAids = [
  {
    icon: ImageIcon,
    title: 'Digital photo frames with rotating family photos',
    description:
      'Skylight Frame, Aura, and Nixplay let family members email or upload photos directly to the frame from anywhere. The frame sits on the counter and plays a slideshow of familiar faces all day — often the most calming device in the house.',
  },
  {
    icon: MessageCircle,
    title: 'Video messages from family',
    description:
      'An Amazon Echo Show with the "Drop In" feature enabled lets family call and appear on the screen without the person with dementia having to answer. Use sparingly and with clear permission — but for moments of confusion or agitation, a familiar face helps.',
  },
  {
    icon: Sparkles,
    title: 'Reminiscence therapy apps',
    description:
      'GreyMatters and MindMate walk through personal history, music, and photos. Best used together as an activity, not solo. Life story work — even a simple slideshow of their wedding, their kids, their house over the decades — can reach someone whose short-term memory is gone.',
  },
  {
    icon: Clock,
    title: 'Voice reminders set up by caregivers',
    description:
      'With Alexa Routines or Google Assistant Routines, a caregiver can schedule the smart speaker to say "It is time for lunch, Mom" at noon every day. Sounds odd — it works. The speaker does the reminding so the caregiver does not have to be the reminder.',
  },
];

const communication = [
  {
    title: 'Picture-based communication apps',
    description:
      'When words become hard, Proloquo2Go, TalkTablet, and simple picture boards let a person point to what they want. Originally built for autism and stroke recovery, these tools work well in mid-to-late dementia for basic needs (water, bathroom, pain, cold).',
  },
  {
    title: 'Simple video calling',
    description:
      'The Amazon Echo Show can be set to auto-answer calls from specific contacts — the screen lights up and a family member is there, no button pressing required. Removes the "how do I answer this" confusion that kills most video calls.',
  },
  {
    title: 'Family circle apps',
    description:
      'Marco Polo and Cluster let family share short video messages in a single thread. The person with dementia does not have to "check" the app — a caregiver plays the new messages together during a calm moment in the day.',
  },
];

const midStage = [
  {
    title: 'Routines need to stay the same',
    description:
      'If the TV remote has been the same for ten years, do not replace it. If they watch the weather at 7 a.m., keep that. Dementia brains cling to routine — every break in routine is a small stress event.',
  },
  {
    title: 'Introduce one device at a time',
    description:
      'Adding three new things at once guarantees all three will fail. Pick the most-needed one (usually medication reminders or a fall detector). Get it working for a month before adding anything else.',
  },
  {
    title: 'Familiarity wins over "better"',
    description:
      'A slow, outdated iPad they have used for five years is better than a brand-new one, even if the new one is faster. Do not upgrade unless the old device literally stops working. Even then, try to match the replacement as closely as possible.',
  },
];

const advancedStages = [
  {
    icon: Music,
    title: 'Music therapy — Music & Memory',
    description:
      'musicandmemory.org — a nonprofit that helps build personalized playlists from the person\'s young-adult years. Music from ages 15–25 often reaches people in late-stage dementia when nothing else does. Spotify or Apple Music on a simple Bluetooth speaker is enough to start.',
  },
  {
    icon: ImageIcon,
    title: 'Calming video content',
    description:
      'Videos of nature, fireplaces, aquariums, and trains on a loop are soothing. YouTube has hours of free "dementia-friendly" calming videos. A cheap Fire TV Stick turns any old TV into a calming-video display.',
  },
  {
    icon: Heart,
    title: 'Familiar photos on constant loop',
    description:
      'A digital photo frame near the bed or chair, cycling through family photos and old familiar places. Sometimes the recognition flickers. Sometimes it does not. Either way, the presence of familiar imagery reduces agitation measurably.',
  },
  {
    icon: Shield,
    title: 'Tablets with simplified, locked interfaces',
    description:
      'iPad Guided Access (triple-click the side button) locks the iPad to a single app — usually a photo slideshow or a music player. No way to accidentally exit into a confusing screen. This is the single most useful iPad setting for late-stage dementia.',
  },
];

const caregiverTools = [
  {
    title: 'Caregiver support apps',
    description:
      'Carely and Lotsa Helping Hands coordinate family members — who is checking in, who is picking up prescriptions, who is visiting Saturday. Reduces the "I thought you were doing that" tension that burns out primary caregivers.',
  },
  {
    title: 'Respite care scheduling',
    description:
      'CareLinx and Papa help find part-time in-home help so the primary caregiver can get a few hours a week away. Many states have Medicaid respite care benefits that are underused — ask an Aging Life Care Manager about eligibility.',
  },
  {
    title: 'Shared caregiver notes',
    description:
      'A shared Google Doc or a Notion page beats trying to remember what the doctor said. Track medications, mood changes, sleep, what worked, what did not. Invaluable at every doctor visit and for swapping shifts with siblings.',
  },
  {
    title: "Alzheimer's Association 24/7 helpline",
    description:
      '1-800-272-3900. Free. Staffed by master\'s-level clinicians. Call them at 3 a.m. when something new happens and you do not know what to do. They will not rush you, and they will not charge you.',
  },
];

const avoid = [
  {
    icon: AlertTriangle,
    title: 'Complex new devices',
    description:
      'Every new interface is a new learning task for a brain that cannot learn anymore. Stick with what they already know.',
  },
  {
    icon: AlertTriangle,
    title: 'Multiple conflicting apps',
    description:
      'Three reminder apps beeping at once is worse than none. Pick one tool for each job and delete the others.',
  },
  {
    icon: AlertTriangle,
    title: 'Technology that requires frequent password entry',
    description:
      'Passwords will be forgotten, typed wrong, and create stress. Use devices with auto-login, biometric unlock, or no password at all for daily-use items.',
  },
  {
    icon: AlertTriangle,
    title: 'Updates that change familiar interfaces',
    description:
      'Turn off automatic updates on their devices. An iOS update that moves the Settings icon can erase months of caregiver training. Update on your own schedule, not Apple\'s.',
  },
];

const professionalHelp = [
  {
    title: 'Occupational therapist for home modifications',
    description:
      'An OT can walk through the home and suggest specific tech modifications — door chimes, bathroom safety sensors, kitchen-safety shutoffs. Medicare Part B covers OT visits with a doctor\'s referral. Ask specifically for a home safety assessment.',
  },
  {
    title: 'Aging Life Care Manager',
    description:
      'aginglifecare.org — a professional who coordinates medical, legal, financial, and tech support for dementia households. Private-pay (typically $100–$200/hour), but often saves far more than that in avoided ER visits and better-targeted care.',
  },
  {
    title: 'Medicare covers some tech assistance',
    description:
      'Medicare Advantage plans increasingly cover in-home tech support, medical-alert devices, and even some smart-home equipment under the Special Supplemental Benefits for the Chronically Ill (SSBCI) program. Call the plan and ask — benefits change yearly.',
  },
];

export default function DementiaCareTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dementia & Memory Loss Tech Hub | TekSure"
        description="Warm, practical technology guidance for caregivers of people living with dementia. Simpler devices, safety tech, medication tools, memory aids, and caregiver support."
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="mr-1 h-3 w-3" />
              Dementia Care
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Technology That Helps, Not Confuses
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Caring for someone with memory loss? These tools can reduce stress and keep them
              safer — without adding complexity neither of you needs.
            </p>
          </div>
        </div>
      </section>

      {/* Simpler Devices */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Smartphone className="mr-1 h-3 w-3" />
              Start Here
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Start with Simpler Devices</h2>
            <p className="text-muted-foreground">
              The best device is the one they can still use without frustration.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {simplerDevices.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
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
      </section>

      {/* Safety Tech */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Shield className="mr-1 h-3 w-3" />
                Safety
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Safety Tech</h2>
              <p className="text-muted-foreground">
                The four areas where tech reduces risk in a dementia household.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {safetyTech.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
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

      {/* Medication */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Pill className="mr-1 h-3 w-3" />
              Medications
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Medication Management</h2>
            <p className="text-muted-foreground">
              Pick one system and stick with it. The wrong system is worse than a low-tech one.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {medication.map((item) => (
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

      {/* Memory Aids */}
      <section className="border-y bg-purple-50/40 dark:bg-purple-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <ImageIcon className="mr-1 h-3 w-3" />
                Memory Aids
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Memory Aids</h2>
              <p className="text-muted-foreground">
                Technology that supports recognition when recall is fading.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {memoryAids.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
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

      {/* Communication */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <MessageCircle className="mr-1 h-3 w-3" />
              Communication
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Communication When Speech Is Hard
            </h2>
            <p className="text-muted-foreground">
              Connection matters even when conversation becomes difficult.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {communication.map((item) => (
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

      {/* Mid-Stage */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Clock className="mr-1 h-3 w-3" />
                Mid-Stage
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">For Mid-Stage Dementia</h2>
              <p className="text-muted-foreground">
                The principles that keep the tech helping instead of harming.
              </p>
            </div>
            <div className="space-y-4">
              {midStage.map((item) => (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Stages */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Music className="mr-1 h-3 w-3" />
              Advanced Stages
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">For Advanced Stages</h2>
            <p className="text-muted-foreground">
              When the goal is comfort, calm, and moments of connection.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {advancedStages.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
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
      </section>

      {/* Caregivers */}
      <section className="border-y bg-purple-50/50 dark:bg-purple-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <HandHeart className="mr-1 h-3 w-3" />
                For Caregivers
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">For Caregivers</h2>
              <p className="text-muted-foreground">
                The tech for you, not for them. Protect your own sanity first.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {caregiverTools.map((item) => (
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

      {/* What to Avoid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <AlertTriangle className="mr-1 h-3 w-3" />
              Avoid These
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">What to Avoid</h2>
            <p className="text-muted-foreground">
              These mistakes turn helpful tech into daily frustration.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {avoid.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
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
      </section>

      {/* Professional Help */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Stethoscope className="mr-1 h-3 w-3" />
                Professional Help
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Getting Professional Help</h2>
              <p className="text-muted-foreground">
                You do not have to figure any of this out alone.
              </p>
            </div>
            <div className="space-y-4">
              {professionalHelp.map((item) => (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compassionate Closing */}
      <section className="border-t bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/30">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto mb-6 h-12 w-12 text-purple-600 dark:text-purple-400" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">This is hard. You're doing your best.</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Take breaks. Ask for help. You cannot pour from an empty cup, and the person you
              love needs you well. The Alzheimer's Association helpline is always open, day or
              night — they have talked to thousands of families walking the same road you are.
            </p>
            <p className="mb-8 text-xl font-semibold">
              Alzheimer's Association 24/7 Helpline:{' '}
              <a href="tel:18002723900" className="text-purple-700 underline dark:text-purple-300">
                1-800-272-3900
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/caregiver-hub">Caregiver Hub</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/book">Book a 1-on-1 setup session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
