import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Home,
  Video,
  Shield,
  Wifi,
  Smartphone,
  Music,
  Heart,
  DollarSign,
  Camera,
  MessageCircle,
  Tv,
  BookOpen,
} from 'lucide-react';

const stayConnected = [
  {
    icon: Video,
    title: 'Video calls that actually work',
    description:
      'FaceTime (iPhone/iPad/Mac), Google Meet, and Zoom are all free. The trick is getting everyone on the same app. FaceTime works best when the whole family is on Apple devices. Google Meet works on any device and needs only a web browser — no app download required. Schedule a weekly call and put it in everyone\'s calendar so it becomes a habit, not a chore.',
  },
  {
    icon: MessageCircle,
    title: 'Group chats for the family',
    description:
      'iMessage (iPhone/Mac, blue bubbles) keeps a running group chat free. If your kids are on Android, use WhatsApp or GroupMe instead — both free, both work on any phone. Share photos, short videos, and voice messages. You do not need to send long texts; a quick "thinking of you" photo takes five seconds.',
  },
  {
    icon: Camera,
    title: 'Shared photo albums',
    description:
      'Apple Shared Albums, Google Photos Shared Albums, and Amazon Photos (free with Prime) let you see photos the moment your kids post them — and they see yours. No accounts needed for family members on the same platform. Set one up once and forget it; photos appear automatically.',
  },
  {
    icon: Smartphone,
    title: 'Location sharing — with permission',
    description:
      'Apple\'s Find My Family and Google Maps location sharing let family members see where each other is on a map. Both require everyone to opt in. Many families use this as a safety tool for late-night drives. Turn it off anytime — it is never permanent.',
  },
];

const homeUpgrades = [
  {
    icon: Wifi,
    title: 'Upgrade your internet while you can',
    description:
      'When kids moved out, internet demand dropped. Now is a good time to review your plan. But streaming video in 4K and video calls both need good speed. A 100 Mbps plan handles one or two people well. If you are working from home, aim for 200–300 Mbps. Call your provider and ask what plans are available — loyalty deals often go unadvertised.',
  },
  {
    icon: Home,
    title: 'Smart home basics — start small',
    description:
      'A smart thermostat (Ecobee or Google Nest, $100–$170) pays for itself in 6–12 months on heating and cooling savings. Start with just one smart plug ($15) to control a lamp by voice or schedule. Smart doorbells (Ring, $70–$100) let you see who is at the door from anywhere. Add one device at a time — do not try to "smart home" everything at once.',
  },
  {
    icon: Shield,
    title: 'Security cameras for peace of mind',
    description:
      'A front-door camera (Ring, Blink, or Wyze — $30–$100) records who comes and goes. Free cloud storage saves the last 24 hours on most models; a small subscription saves longer. You can check the camera from your phone anywhere. Indoor cameras can monitor a pet. Always place cameras where you would feel comfortable if a guest saw them.',
  },
  {
    icon: Tv,
    title: 'Cut the cable bill',
    description:
      'The average cable bill runs $85–$120/month. A $25–$40/month combination of streaming services covers most of what cable offered. YouTube TV and Hulu Live carry local news and sports. Netflix, Max, and Apple TV+ cover most shows and movies. A one-time $30 antenna brings in local network channels free. Do the math before you cancel — most people save $50–$70 per month.',
  },
];

const newHobbies = [
  {
    icon: BookOpen,
    title: 'Online learning — most of it free',
    description:
      'Coursera, edX, and Khan Academy offer free courses from major universities. YouTube has tutorials on almost any topic — cooking, woodworking, photography, language learning. Your local library card likely gives free access to LinkedIn Learning (thousands of professional courses) and Kanopy (art-house films and documentaries). Most libraries also offer Libby for free e-books and audiobooks.',
  },
  {
    icon: Music,
    title: 'Music and podcasts',
    description:
      'Spotify Free includes ads but costs nothing. Apple Music and Spotify Premium run $11/month and play every song ever recorded. Podcasts are completely free — download any podcast app and search for topics you enjoy. A Bluetooth speaker ($30–$80) fills a room with music without tangled wires. If you have an Amazon Echo or Google Nest speaker, just ask it to play music.',
  },
  {
    icon: Heart,
    title: 'Staying active with tech',
    description:
      'YouTube has free workout videos for every level — search "beginner yoga" or "low-impact cardio" and filter to whatever length fits your schedule. Apple Fitness+ and Peloton app ($13/month each) offer structured programs. A fitness tracker (Fitbit, Apple Watch) turns daily steps into a light habit. Some Medicare Advantage plans cover gym memberships and fitness apps — check your plan.',
  },
  {
    icon: DollarSign,
    title: 'Managing finances with one less dependent',
    description:
      'Mint (free) and YNAB ($15/month) connect to your bank and show exactly where money goes. Your expenses just changed — this is a good time to look. Many people find they are still paying for subscriptions the kids used. Check your bank statements for recurring charges and cancel what you no longer need. A quick audit often finds $30–$60 in forgotten subscriptions.',
  },
];

const tipsToAvoid = [
  {
    title: 'Do not buy all new tech at once',
    description:
      'The empty nest is a tempting time to upgrade everything. Spread purchases over a few months. The initial "I finally have time for this" energy often fades — buy one thing, live with it, then decide what else you actually need.',
  },
  {
    title: 'Do not sign long service contracts',
    description:
      'Internet and phone carriers will offer "locked-in" rates with 2-year contracts. Month-to-month plans give you flexibility to renegotiate or switch. Competition between providers is fierce — you have more leverage than you think.',
  },
  {
    title: 'Do not pay for features you will not use',
    description:
      'The most expensive smart TV is not the best one — it is the one with the clearest picture for the room size you have. A 55-inch TV looks best from 7–10 feet away. Measure before you buy.',
  },
];

export default function EmptyNestTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Empty Nest Tech Hub | TekSure"
        description="The kids have moved out — now what? Practical tech guidance for empty nesters: staying connected, upgrading the home, cutting the cable bill, and finding new ways to use the time."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Home className="mr-1 h-3 w-3" />
              Empty Nest
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Tech for the Next Chapter
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              The house is quieter. The bandwidth is all yours. Here is how to use tech to stay
              connected, simplify the home, and make the most of this new season.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <MessageCircle className="mr-1 h-3 w-3" />
              Stay Connected
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Staying Close From a Distance</h2>
            <p className="text-muted-foreground">
              Distance is easier to bridge than ever. These tools actually work.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {stayConnected.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
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

      {/* Home Upgrades */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Home className="mr-1 h-3 w-3" />
                Home Upgrades
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Home Tech Worth Considering</h2>
              <p className="text-muted-foreground">
                A quieter house is a good time to think about what the home actually needs.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {homeUpgrades.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
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

      {/* New Hobbies */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Heart className="mr-1 h-3 w-3" />
              More Time, More Options
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Making the Most of More Time</h2>
            <p className="text-muted-foreground">
              Free time is a gift. These tools help you use it.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {newHobbies.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
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

      {/* Tips to Avoid */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">Quick Tips</Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">A Few Things to Keep in Mind</h2>
            </div>
            <div className="space-y-4">
              {tipsToAvoid.map((item) => (
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

      {/* CTA */}
      <section className="border-t bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/30">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Home className="mx-auto mb-6 h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need a hand setting things up?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our tech help sessions are designed for exactly this kind of life moment — a patient
              guide who will walk you through any of the above at your own pace.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/book">Book a 1-on-1 setup session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/guides">Browse all guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
