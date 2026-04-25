import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Video,
  Image,
  MessageCircle,
  BookOpen,
  Cake,
  Home,
  HandHeart,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Camera,
  Clock,
  Music,
  Phone,
  Gift,
  Lock,
  Baby,
} from 'lucide-react';

const essentialApps = [
  {
    icon: Video,
    title: 'FaceTime or Google Duo',
    description:
      'For seeing the baby. FaceTime is built into iPhone and iPad. Google Duo (now part of Google Meet) works on Android and iPhone. Both are free, both are reliable, and both can do group calls so the whole family can see at once.',
  },
  {
    icon: Image,
    title: 'Shared photo albums',
    description:
      'For getting the photos and videos as they happen. Apple Shared Album, Google Photos partner sharing, and Tinybeans all let parents drop new photos in and grandparents see them within seconds — no texting required.',
  },
  {
    icon: MessageCircle,
    title: 'Group messaging',
    description:
      'For the running family thread. iMessage group works for all-Apple families. WhatsApp works across iPhone and Android. Pick one and pick it together — group threads splinter when half the family is on each.',
  },
];

const photoAlbumOptions = [
  {
    title: 'Apple Shared Album',
    description:
      'On iPhone or iPad: Photos app → Albums tab → tap "+" → New Shared Album. Invite parents and other grandparents by Apple ID. Anyone in the album can add photos and videos. Up to 5,000 items per album. Free with any Apple device.',
    bestFor: 'Families where the parents and at least one grandparent use iPhone.',
  },
  {
    title: 'Google Photos partner sharing',
    description:
      'On Android or iPhone: Google Photos → Settings → Partner sharing. Parents grant access to a specific person (you), and you see new photos automatically. Can be filtered to only photos that include certain faces. Free with a Google account.',
    bestFor: 'Mixed Apple/Android families, or when one grandparent should see only baby photos.',
  },
  {
    title: 'Tinybeans (tinybeans.com)',
    description:
      'A private, family-only social network built for baby photos. Parents post; only the people they invite can see. Has a daily journal feature, milestone tracking, and a "year in review" book at the end of each year. Free with a paid premium tier.',
    bestFor: 'Parents who want to share publicly-styled photos but keep them entirely private.',
  },
  {
    title: 'Milestone tracking apps',
    description:
      'Wonder Weeks, Huckleberry, and Glow Baby track sleep, feeding, and developmental milestones. Most have a "share" feature so grandparents can follow along without asking the parents how the baby slept every day.',
    bestFor: 'Grandparents who want context for what is happening, not just photos.',
  },
];

const videoTips = [
  {
    icon: Clock,
    title: 'Best time of day',
    description:
      'Babies have short attention spans for screens — 5 minutes is a great call. Aim for after a feeding and a nap, when the baby is alert and content. Avoid the witching hour (typically 5-7 p.m.).',
  },
  {
    icon: Sparkles,
    title: 'Props that work',
    description:
      'Hand puppets, pots and pans being banged, a music toy, peekaboo with a blanket, your face making big surprised expressions. Babies respond to motion, contrast, and sound — not to conversation.',
  },
  {
    icon: Heart,
    title: 'What not to do',
    description:
      'Do not take it personally when the baby cries, looks away, or wants down. Babies do not understand the screen. Their reaction is to a glowing rectangle, not to you. Try again in a few days.',
  },
  {
    icon: Music,
    title: 'Audio-only for non-visual times',
    description:
      'Some of the most-watched grandparent videos are just singing. Record a short video of yourself singing a lullaby and parents can play it at bedtime. Your voice becomes part of the routine even when you cannot be there.',
  },
];

const readingTools = [
  {
    title: 'Prop up a book',
    description:
      'The simplest version: prop your phone or tablet on a stand, hold the book in front of the camera, and read with expression. A $10 phone tripod from Amazon makes this much steadier than holding the phone.',
  },
  {
    title: 'Cabin Cove storybook reader',
    description:
      'cabincove.com — a video-call platform built for grandparents reading to grandkids. Has a built-in library of children\'s books that show on both screens at once, with page-turn syncing. Subscription required.',
    url: 'https://cabincove.com',
  },
  {
    title: 'Caribu (now part of Mattel\'s Together)',
    description:
      'A video-calling app with built-in books, drawing, and games on a shared screen. Both ends see the same page. Has a free tier and a premium subscription.',
  },
];

const longDistance = [
  {
    title: 'Apps that send kisses and hugs',
    description:
      'Bond Touch (paired bracelets — tap yours, theirs vibrates), Couplete, and Hey! Vina have features that send a tap, hug, or kiss across distance. Sounds gimmicky until you do it. Then it stops sounding gimmicky.',
  },
  {
    title: 'Amazon Echo Show drop-in',
    description:
      'A smart display in the parent\'s home that you can "drop in" on with permission — the screen turns on and you are there, no answer required. Works through the Alexa app. Parents control which contacts can drop in.',
  },
  {
    title: 'Portal from Facebook (discontinued — alternatives)',
    description:
      'Meta discontinued Portal in 2022. The closest replacements are the Echo Show 8 and 10 (above), Google Nest Hub Max (similar smart display with Duo calling), and Facebook Messenger video on a regular tablet.',
  },
  {
    title: 'Nanit baby monitor (with permission)',
    description:
      'Nanit and Owlet baby monitors have apps that parents can share with grandparents. You see live nursery video. Get permission first, every time — this is the parents\' call to make, not yours.',
  },
];

const birthdayTech = [
  {
    title: 'Video card apps',
    description:
      'Tribute (tribute.co) and Punchbowl let you collect short video messages from family members and stitch them into a single birthday video. Great for milestone birthdays.',
  },
  {
    title: 'Zoom screen share or FaceTime',
    description:
      'On the birthday call, share your screen to play a song, show a photo slideshow, or read a story together. Both apps support screen sharing on phone and computer.',
  },
  {
    title: 'Gift delivery',
    description:
      'Amazon, Target, Walmart, and Etsy all let you ship straight to the parents\' house. Use the parents\' Amazon wishlist (if they have one) to avoid duplicates and outgrown sizes.',
  },
  {
    title: 'Gift cards digitally',
    description:
      'Amazon, Target, Apple, and Visa all offer email-delivered gift cards. As kids get older, this becomes the most-used gift type. Set up a recurring delivery for birthdays you might forget.',
  },
];

const visitTech = [
  {
    icon: Lock,
    title: 'Childproofing your tech',
    description:
      'Move chargers, AirPods, and small devices out of toddler reach. Hide TV remotes if you have a smart TV (one button press can buy a $20 movie). Cover unused outlets.',
  },
  {
    icon: Baby,
    title: 'Kid-safe tablet mode',
    description:
      'iPad: Settings → Screen Time → Content & Privacy Restrictions. Set up Guided Access (triple-click the side button) to lock the iPad to a single app. Android tablets have a Kids Space mode.',
  },
  {
    icon: Home,
    title: 'Parental controls on your WiFi',
    description:
      'Most modern routers (eero, Google Nest WiFi, Orbi) have a built-in family/kids profile. Pause the internet on a child\'s device at bedtime, block adult content, and limit screen time — from the router app on your phone.',
  },
  {
    icon: CheckCircle2,
    title: 'Safe content curation',
    description:
      'YouTube Kids (kids.youtube.com) instead of regular YouTube. PBS Kids app for free, ad-free educational content. Khan Academy Kids for ages 2-8. None of these will be perfect — but all are better than the YouTube algorithm.',
  },
];

const supportingParents = [
  {
    title: 'When they ask for help vs. when they don\'t',
    description:
      'Help that is requested feels like support. Help that is unrequested often feels like criticism, even when it is loving. Wait for the ask. When they do ask, take it seriously and follow through.',
  },
  {
    title: 'Respecting their digital boundaries',
    description:
      'If they ask you not to post baby photos on Facebook, do not post them on Facebook. If they prefer texts to drop-in calls, prefer texts. The boundaries are about the parents\' comfort and the child\'s privacy, not about you.',
  },
  {
    title: 'Privacy agreements about sharing baby photos online',
    description:
      'Have the conversation early: who can see photos, on which platforms, with the baby\'s name visible or not. The default for most families now is private albums only — no public social posts. Ask before you assume.',
  },
];

const futureMilestones = [
  {
    icon: Camera,
    title: 'First-day-of-school photo traditions',
    description:
      'Set a calendar reminder for late August every year. Ask the parents to text you the photo on the morning of. Save them in a folder labeled by year — the year-over-year sequence becomes a treasured collection.',
  },
  {
    icon: Cake,
    title: 'Birthday calls setup',
    description:
      'Save every grandchild\'s birthday in your phone calendar with a 2-day-before reminder. By the time they are 10, they have come to expect the call from grandma or grandpa — do not be the one who forgot.',
  },
  {
    icon: Phone,
    title: 'Learning their app preferences as they grow',
    description:
      'Toddlers do not care which app. Tweens and teens do. Ask which app they prefer (Snapchat, FaceTime, Discord, iMessage). Meet them where they are, not where you wish they were.',
  },
];

export default function NewGrandparentTech() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="New Grandparent Tech Guide — Stay Close Even Far Away | TekSure"
        description="The apps, video-call tips, shared photo albums, and long-distance tools that help new grandparents stay close to a new baby and the family — across any distance."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-pink-50 to-background dark:from-pink-950/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="mr-1 h-3 w-3" />
              For New Grandparents
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Becoming a Grandparent? Here's How Technology Can Keep You Close
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Distance is not what it used to be. With three small setups, you can see the baby
              every day, hear them coo, and be a real presence in their life — even from across
              the country.
            </p>
          </div>
        </div>
      </section>

      {/* Three Essential Apps */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">The Three Essential Apps</h2>
            <p className="text-muted-foreground">
              If you set up nothing else from this page, set up these three. They cover 90% of
              long-distance grandparenting.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {essentialApps.map((app) => {
              const Icon = app.icon;
              return (
                <Card key={app.title} className="border-2 border-pink-200 dark:border-pink-900">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold">{app.title}</h3>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared Photo Albums */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Image className="mr-1 h-3 w-3" />
                Photo Sharing
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Shared Photo Albums, Step by Step</h2>
              <p className="text-muted-foreground">
                Pick one. Set it up once. Then the photos keep coming for years.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {photoAlbumOptions.map((opt) => (
                <Card key={opt.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">{opt.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{opt.description}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Best for:</span> {opt.bestFor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Calling Tips */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Video className="mr-1 h-3 w-3" />
              Video Calls
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Video Calling Tips</h2>
            <p className="text-muted-foreground">
              The four things that make a video call with a baby actually work.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {videoTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card key={tip.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reading / Bedtime */}
      <section className="border-y bg-amber-50/40 dark:bg-amber-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <BookOpen className="mr-1 h-3 w-3" />
                Bedtime Stories
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Virtual Reading and Bedtime Stories</h2>
              <p className="text-muted-foreground">
                Reading to a grandchild over video is one of the most-loved long-distance
                traditions. Here is how to do it well.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {readingTools.map((tool) => (
                <Card key={tool.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">{tool.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{tool.description}</p>
                    {tool.url && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Visit site <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Distance Presence */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <HandHeart className="mr-1 h-3 w-3" />
              Always-On Presence
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Long-Distance Presence</h2>
            <p className="text-muted-foreground">
              Beyond scheduled calls — small ways to stay woven into daily life.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {longDistance.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday/Holiday Tech */}
      <section className="border-y bg-pink-50/50 dark:bg-pink-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Gift className="mr-1 h-3 w-3" />
                Celebrations
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">Birthday and Holiday Tech</h2>
              <p className="text-muted-foreground">
                Show up for the moments that matter, even from far away.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {birthdayTech.map((item) => (
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

      {/* When They Visit You */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Home className="mr-1 h-3 w-3" />
              At Your House
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">When They Visit You</h2>
            <p className="text-muted-foreground">
              Setting up your home so visits are calm, safe, and a little magical.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {visitTech.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
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

      {/* Supporting the New Parents */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-3">
                <Heart className="mr-1 h-3 w-3" />
                The Parents
              </Badge>
              <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                Supporting the New Parents (Without Overstepping)
              </h2>
              <p className="text-muted-foreground">
                The hardest part of being a new grandparent has nothing to do with technology.
                These three principles make the tech help land as love, not pressure.
              </p>
            </div>
            <div className="space-y-4">
              {supportingParents.map((item) => (
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

      {/* Future Milestones */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3">
              <Sparkles className="mr-1 h-3 w-3" />
              Years Ahead
            </Badge>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Future Milestones Tech</h2>
            <p className="text-muted-foreground">
              The traditions you set up now become the things they remember when they are grown.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {futureMilestones.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
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

      {/* CTA Footer */}
      <section className="border-t bg-pink-50/30 dark:bg-pink-950/10">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Welcome to one of the best chapters of your life.
            </h2>
            <p className="mb-6 text-muted-foreground">
              The tech is the bridge. The love is the thing. We have more guides for every season
              of grandparenting — and a 1-on-1 setup session if you want help getting any of this
              going.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/guides">Browse all guides</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/get-help">Book a setup session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
