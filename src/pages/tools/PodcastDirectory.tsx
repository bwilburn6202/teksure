import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Headphones,
  Play,
  Download,
  Volume2,
  Radio,
  ExternalLink,
  Search,
  BookmarkPlus,
  ShieldAlert,
  Users,
  Heart,
} from 'lucide-react';

/* ── Types & data ─────────────────────────────────────── */

type Podcast = {
  name: string;
  host: string;
  goodFor: string;
  length: string;
  apple?: string;
  spotify?: string;
  web?: string;
};

type PodcastCategory = {
  id: string;
  label: string;
  blurb: string;
  shows: Podcast[];
};

const categories: PodcastCategory[] = [
  {
    id: 'news',
    label: 'News & current events',
    blurb: 'Short, reliable daily news — great with your morning coffee.',
    shows: [
      {
        name: 'NPR Up First',
        host: 'NPR',
        goodFor: 'A 10-minute weekday news briefing',
        length: '10 min daily',
        apple: 'https://podcasts.apple.com/us/podcast/up-first/id1222114325',
        spotify: 'https://open.spotify.com/show/4Keq8JmRjnzLnKnxwKuFkZ',
      },
      {
        name: 'The Daily',
        host: 'Michael Barbaro (NYT)',
        goodFor: 'One big story each weekday, told carefully',
        length: '20–30 min',
        apple: 'https://podcasts.apple.com/us/podcast/the-daily/id1200361736',
        spotify: 'https://open.spotify.com/show/3IM0lmZxpFAY7CwMuv9H4g',
      },
      {
        name: 'Marketplace',
        host: 'Kai Ryssdal',
        goodFor: 'Plain-English business and economy news',
        length: '30 min daily',
        apple: 'https://podcasts.apple.com/us/podcast/marketplace/id201853034',
        spotify: 'https://open.spotify.com/show/6zYlX5UGEPmNCWacYUJQGD',
      },
      {
        name: 'Fresh Air',
        host: 'Terry Gross (NPR)',
        goodFor: 'Long, warm interviews with authors and artists',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/fresh-air/id214089682',
        spotify: 'https://open.spotify.com/show/6Yv2EbzUcsBYhv4sBz98NG',
      },
      {
        name: 'Morning Edition',
        host: 'NPR',
        goodFor: 'Public radio news from WNYC and member stations',
        length: '2 hrs (podcast segments vary)',
        apple: 'https://podcasts.apple.com/us/podcast/morning-edition/id1572282834',
        web: 'https://www.npr.org/podcasts/510002/morning-edition',
      },
      {
        name: 'BBC Global News Podcast',
        host: 'BBC World Service',
        goodFor: 'World news from outside the US perspective',
        length: '30 min, twice daily',
        apple: 'https://podcasts.apple.com/us/podcast/global-news-podcast/id135067274',
        spotify: 'https://open.spotify.com/show/4zVOBR3pk7PuoN2DXrwPpC',
      },
      {
        name: 'Consider This',
        host: 'NPR',
        goodFor: 'One topic a day, a deeper 15-minute take',
        length: '15 min daily',
        apple: 'https://podcasts.apple.com/us/podcast/consider-this-from-npr/id1438307671',
        spotify: 'https://open.spotify.com/show/6Dv8yKmNM9EcwQaMMbDEGM',
      },
      {
        name: 'NPR News Now',
        host: 'NPR',
        goodFor: 'A 5-minute update you can play any hour',
        length: '5 min, hourly',
        apple: 'https://podcasts.apple.com/us/podcast/npr-news-now/id500005825',
        spotify: 'https://open.spotify.com/show/51NuTpgYlE5rGo7TS2P66D',
      },
    ],
  },
  {
    id: 'history',
    label: 'History',
    blurb: 'Long, rich stories from the past — perfect for road trips.',
    shows: [
      {
        name: 'Hardcore History',
        host: 'Dan Carlin',
        goodFor: 'Deep, gripping dives into World War I, Genghis Khan, and more',
        length: '3–6 hrs per episode',
        apple: 'https://podcasts.apple.com/us/podcast/dan-carlins-hardcore-history/id173001861',
        spotify: 'https://open.spotify.com/show/5sX26U2ma4XCPcW05BUci1',
      },
      {
        name: 'Revolutions',
        host: 'Mike Duncan',
        goodFor: 'Every major revolution, told clearly from start to finish',
        length: '30–60 min',
        apple: 'https://podcasts.apple.com/us/podcast/revolutions/id703889772',
        spotify: 'https://open.spotify.com/show/4EoetfnVfch7ABjbSiPUYQ',
      },
      {
        name: "You're Dead to Me",
        host: 'Greg Jenner (BBC)',
        goodFor: 'History with real laughs — a historian and a comedian together',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/youre-dead-to-me/id1477264620',
        spotify: 'https://open.spotify.com/show/7CXrlVjwAFFQ0sHXWbBkeo',
      },
      {
        name: 'Stuff You Missed in History Class',
        host: 'Holly Frey & Tracy V. Wilson',
        goodFor: 'Short, curious stories you never heard in school',
        length: '30–45 min',
        apple: 'https://podcasts.apple.com/us/podcast/stuff-you-missed-in-history-class/id283605519',
        spotify: 'https://open.spotify.com/show/0fO7MCwqlaFiYDWQFk2FwD',
      },
      {
        name: 'The History Chicks',
        host: 'Beckett Graham & Susan Vollenweider',
        goodFor: 'Friendly, long-form stories of women from history',
        length: '60–90 min',
        apple: 'https://podcasts.apple.com/us/podcast/the-history-chicks/id437858685',
        spotify: 'https://open.spotify.com/show/0ZsMy1Pu5uqPK0HvKzkHFJ',
      },
      {
        name: 'Past Present',
        host: 'Nicole Hemmer, Neil Young, Natalia Mehlman Petrzela',
        goodFor: 'How today’s news connects to American history',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/past-present/id964552341',
        spotify: 'https://open.spotify.com/show/6aURrATR0BBxqgVTI1ub5J',
      },
      {
        name: 'Presidential',
        host: 'Lillian Cunningham (Washington Post)',
        goodFor: 'One US president per episode, in order',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/presidential/id1076230170',
        spotify: 'https://open.spotify.com/show/0IFiH4zUkzsM9jGaZ5N8dG',
      },
      {
        name: 'Throughline',
        host: 'Rund Abdelfatah & Ramtin Arablouei (NPR)',
        goodFor: 'The hidden history behind today’s headlines',
        length: '45–60 min',
        apple: 'https://podcasts.apple.com/us/podcast/throughline/id1451109634',
        spotify: 'https://open.spotify.com/show/2DSljn8n40YGEfjb9ORCXk',
      },
    ],
  },
  {
    id: 'health',
    label: 'Health & science',
    blurb: 'Friendly experts talking about the brain, body, and everyday health.',
    shows: [
      {
        name: 'Hidden Brain',
        host: 'Shankar Vedantam',
        goodFor: 'Why people do what they do — warm and curious',
        length: '50 min',
        apple: 'https://podcasts.apple.com/us/podcast/hidden-brain/id1028908750',
        spotify: 'https://open.spotify.com/show/2JkhmLjxJgDsOn6I1hhlIh',
      },
      {
        name: 'Science Friday',
        host: 'Ira Flatow',
        goodFor: 'Big science stories explained like you’re chatting with a friend',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/science-friday/id73329284',
        spotify: 'https://open.spotify.com/show/2BvtBphXrl4UmvIpvDI2s7',
      },
      {
        name: 'Short Wave',
        host: 'NPR',
        goodFor: 'A little science every weekday — clear and short',
        length: '12 min daily',
        apple: 'https://podcasts.apple.com/us/podcast/short-wave/id1452538632',
        spotify: 'https://open.spotify.com/show/7CZGiby1wV9J8jS0LqrN38',
      },
      {
        name: 'TED Health',
        host: 'Dr. Shoshana Ungerleider',
        goodFor: 'Short talks from doctors and researchers on wellness',
        length: '15 min',
        apple: 'https://podcasts.apple.com/us/podcast/ted-health/id470623801',
        spotify: 'https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti',
      },
      {
        name: 'Bulletproof Radio',
        host: 'Dave Asprey',
        goodFor: 'Interviews on longevity, sleep, and nutrition (take with a grain of salt)',
        length: '60 min',
        apple: 'https://podcasts.apple.com/us/podcast/the-human-upgrade-with-dave-asprey/id451295014',
        spotify: 'https://open.spotify.com/show/7gozmLqbcbr6PScMjc0Zl4',
      },
      {
        name: 'The Doctor’s Farmacy',
        host: 'Dr. Mark Hyman',
        goodFor: 'Food-and-lifestyle interviews about aging well',
        length: '60 min',
        apple: 'https://podcasts.apple.com/us/podcast/the-doctors-farmacy-with-mark-hyman-m-d/id1382804627',
        spotify: 'https://open.spotify.com/show/5nqfQrvaIOJpHlKwxcJLjG',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance & retirement',
    blurb: 'Money guidance in plain language — compare voices before you act.',
    shows: [
      {
        name: 'Retirement Answer Man',
        host: 'Roger Whitney',
        goodFor: 'Warm, step-by-step retirement planning',
        length: '30–45 min',
        apple: 'https://podcasts.apple.com/us/podcast/retirement-answer-man/id647571506',
        spotify: 'https://open.spotify.com/show/5rGlpSS3xR7f9nWTl0tKgD',
      },
      {
        name: 'Planet Money',
        host: 'NPR',
        goodFor: 'Clear, story-driven episodes about the economy',
        length: '25 min',
        apple: 'https://podcasts.apple.com/us/podcast/planet-money/id290783428',
        spotify: 'https://open.spotify.com/show/5RllMBgvDnTau8nnsCUdse',
      },
      {
        name: 'The Ramsey Show',
        host: 'Dave Ramsey',
        goodFor: 'Debt and budgeting advice — a strong opinion, so compare with others',
        length: '2 hrs (clips available)',
        apple: 'https://podcasts.apple.com/us/podcast/the-ramsey-show/id77001367',
        spotify: 'https://open.spotify.com/show/4Fb3qxC1PHnyncAIGt1dxI',
      },
      {
        name: 'Stuff You Should Know',
        host: 'Josh Clark & Chuck Bryant',
        goodFor: 'The money episodes explain credit, taxes, and more',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/stuff-you-should-know/id278981407',
        spotify: 'https://open.spotify.com/show/0aMGbwIjyJ3IRciSmG7gPw',
      },
      {
        name: 'Your Money, Your Wealth',
        host: 'Joe Anderson & Alan Clopine',
        goodFor: 'Listener questions on retirement, Social Security, and taxes',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/your-money-your-wealth/id826112828',
        spotify: 'https://open.spotify.com/show/1nQlmVwXOaTtkSA2NV5Pew',
      },
    ],
  },
  {
    id: 'stories',
    label: 'Stories & storytelling',
    blurb: 'True stories, beautifully told. Great before bed or on long walks.',
    shows: [
      {
        name: 'This American Life',
        host: 'Ira Glass',
        goodFor: 'True stories from ordinary people, theme per episode',
        length: '60 min',
        apple: 'https://podcasts.apple.com/us/podcast/this-american-life/id201671138',
        spotify: 'https://open.spotify.com/show/3DiDSECUqqY1AuBP8qtaIa',
      },
      {
        name: 'Radiolab',
        host: 'WNYC Studios',
        goodFor: 'Curious, cinematic science and human stories',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/radiolab/id152249110',
        spotify: 'https://open.spotify.com/show/2hmkzUtix0qTqvtpPcMzEL',
      },
      {
        name: 'Snap Judgment',
        host: 'Glynn Washington',
        goodFor: 'Moving storytelling with a great soundtrack',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/snap-judgment/id283657561',
        spotify: 'https://open.spotify.com/show/5i3cIjgR0iUrG3XW9vxQDi',
      },
      {
        name: 'The Moth',
        host: 'Various storytellers',
        goodFor: 'Real people telling real stories on stage, no notes',
        length: '50 min',
        apple: 'https://podcasts.apple.com/us/podcast/the-moth/id275699983',
        spotify: 'https://open.spotify.com/show/3cCF3HS3tGw9WvUu4pfjxP',
      },
      {
        name: 'StoryCorps',
        host: 'Dave Isay',
        goodFor: 'Short, beautiful conversations between loved ones',
        length: '5–10 min',
        apple: 'https://podcasts.apple.com/us/podcast/storycorps/id143088933',
        spotify: 'https://open.spotify.com/show/1LL3ul2XpENT5OFJbHJsyB',
      },
      {
        name: 'Reply All (archive)',
        host: 'PJ Vogt & Alex Goldman',
        goodFor: 'Older episodes still worth hearing — stories about the internet',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/reply-all/id941907967',
        spotify: 'https://open.spotify.com/show/7gozmLqbcbr6PScMjc0Zl4',
      },
      {
        name: 'Criminal',
        host: 'Phoebe Judge',
        goodFor: 'True crime told calmly and thoughtfully, not sensationally',
        length: '30 min',
        apple: 'https://podcasts.apple.com/us/podcast/criminal/id764736476',
        spotify: 'https://open.spotify.com/show/5fSamH8zLyaG3LxO7TVRfH',
      },
      {
        name: 'Lore',
        host: 'Aaron Mahnke',
        goodFor: 'Spooky folklore and real history, quiet and well-told',
        length: '30 min',
        apple: 'https://podcasts.apple.com/us/podcast/lore/id1006261514',
        spotify: 'https://open.spotify.com/show/1RrNnZA2MlKZjqPDdbYz2Z',
      },
    ],
  },
  {
    id: 'senior',
    label: 'Senior-focused',
    blurb: 'Made with an older audience in mind.',
    shows: [
      {
        name: 'Senior Planet Podcasts',
        host: 'Senior Planet / OATS',
        goodFor: 'Technology, aging, and community for older adults',
        length: '30 min',
        web: 'https://seniorplanet.org/articles/podcast/',
      },
      {
        name: 'AARP Prime Time Radio',
        host: 'Mike Cuthbert',
        goodFor: 'Classic AARP interviews on retirement, health, and money',
        length: '30 min',
        web: 'https://www.aarp.org/podcasts/',
      },
      {
        name: 'The Seniors Hour',
        host: 'Various',
        goodFor: 'Community-radio style topics chosen for older listeners',
        length: '60 min',
        web: 'https://podcasts.apple.com/us/podcast/the-seniors-hour/id1541540075',
      },
      {
        name: 'Caregiver Chronicles',
        host: 'Various',
        goodFor: 'Honest conversations about caring for aging parents or a spouse',
        length: '30 min',
        apple: 'https://podcasts.apple.com/us/podcast/caregiver-chronicles/id1574091996',
      },
      {
        name: 'A Life Well-Lived',
        host: 'Various',
        goodFor: 'Reflective interviews about meaning, purpose, and later life',
        length: '30–45 min',
        apple: 'https://podcasts.apple.com/us/podcast/a-life-well-lived/id1567428712',
      },
    ],
  },
  {
    id: 'entertainment',
    label: 'Entertainment & culture',
    blurb: 'Funny, warm conversations and smart culture talk.',
    shows: [
      {
        name: 'SmartLess',
        host: 'Jason Bateman, Sean Hayes, Will Arnett',
        goodFor: 'Three friends interviewing a surprise guest — easy laughs',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/smartless/id1521578868',
        spotify: 'https://open.spotify.com/show/0Gkmka9xZNLoLZbI4jOBDc',
      },
      {
        name: 'Armchair Expert',
        host: 'Dax Shepard & Monica Padman',
        goodFor: 'Long, honest interviews with celebrities and experts',
        length: '90 min',
        apple: 'https://podcasts.apple.com/us/podcast/armchair-expert-with-dax-shepard/id1345682353',
        spotify: 'https://open.spotify.com/show/6OFvoqajLOBJQwcRvrUXGx',
      },
      {
        name: 'Pop Culture Happy Hour',
        host: 'Linda Holmes (NPR)',
        goodFor: 'Quick, smart talk about movies, TV, and books',
        length: '30 min',
        apple: 'https://podcasts.apple.com/us/podcast/pop-culture-happy-hour/id479886913',
        spotify: 'https://open.spotify.com/show/6HfgeWv8EnNbwJe9lATAfm',
      },
      {
        name: "Wait Wait... Don't Tell Me!",
        host: 'Peter Sagal (NPR)',
        goodFor: 'A funny news quiz — laugh-out-loud at the week’s headlines',
        length: '50 min',
        apple: 'https://podcasts.apple.com/us/podcast/wait-wait-dont-tell-me/id121493804',
        spotify: 'https://open.spotify.com/show/7FvAgqVplA1M0AT5JI38u6',
      },
      {
        name: 'Fresh Air',
        host: 'Terry Gross (NPR)',
        goodFor: 'Still the best interview show going — authors, actors, musicians',
        length: '45 min',
        apple: 'https://podcasts.apple.com/us/podcast/fresh-air/id214089682',
        spotify: 'https://open.spotify.com/show/6Yv2EbzUcsBYhv4sBz98NG',
      },
    ],
  },
];

/* ── Component ────────────────────────────────────────── */

export default function PodcastDirectory() {
  const totalShows = categories.reduce((sum, c) => sum + c.shows.length, 0);

  return (
    <>
      <SEOHead
        title="Podcasts for Seniors — How to Listen + 45+ Shows to Try | TekSure"
        description="A warm, plain-English guide to podcasts for older adults. How to listen on iPhone, Android, smart speakers, and computers — plus 45+ senior-friendly podcasts worth your time."
        path="/tools/podcast-directory"
      />

      <main
        id="main-content"
        className="container py-12 min-h-[80vh] max-w-5xl mx-auto"
      >
        {/* ── Hero ── */}
        <div className="relative text-center mb-10">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="podcast-directory"
              title="Podcast Directory"
              url="/tools/podcast-directory"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-200 via-pink-100 to-rose-100 text-purple-700 dark:from-purple-900/60 dark:via-pink-950/40 dark:to-rose-950/40 dark:text-purple-300 mb-5 shadow-sm">
            <Headphones className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-br from-purple-700 via-purple-600 to-rose-600 bg-clip-text text-transparent dark:from-purple-300 dark:via-pink-400 dark:to-rose-300">
            Podcasts for Seniors — How to Listen + What to Try
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Podcasts are free, huge, and perfect for long walks or quiet
            mornings. Here's how to start.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary" className="text-sm">New</Badge>
            <Badge variant="outline" className="text-sm">Free</Badge>
            <Badge variant="outline" className="text-sm">{totalShows}+ shows</Badge>
            <Badge variant="outline" className="text-sm">No jargon</Badge>
          </div>
        </div>

        {/* ── What is a podcast ── */}
        <Alert className="mb-10 border-2 border-purple-200 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-800">
          <Radio className="h-5 w-5 text-purple-700 dark:text-purple-300" />
          <AlertTitle className="text-lg font-bold text-purple-900 dark:text-purple-100">
            What is a podcast?
          </AlertTitle>
          <AlertDescription className="text-base text-purple-900 dark:text-purple-100 leading-relaxed">
            Think of a podcast like a radio show you can play whenever you
            want. Most are free. New episodes arrive on a schedule, and you
            can "follow" a show so your phone downloads them for you. No
            account is required to listen to most shows.
          </AlertDescription>
        </Alert>

        {/* ── How to listen quickstart ── */}
        <section aria-labelledby="how-heading" className="mb-14">
          <h2 id="how-heading" className="text-3xl font-bold mb-3">
            How to listen on your device
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Pick what you have. The steps are almost the same on every app.
          </p>
          <Tabs defaultValue="iphone" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
              <TabsTrigger value="iphone" className="text-base min-h-14 py-2">
                iPhone / iPad
              </TabsTrigger>
              <TabsTrigger value="android" className="text-base min-h-14 py-2">
                Android
              </TabsTrigger>
              <TabsTrigger value="speaker" className="text-base min-h-14 py-2">
                Smart Speaker
              </TabsTrigger>
              <TabsTrigger value="computer" className="text-base min-h-14 py-2">
                Computer
              </TabsTrigger>
            </TabsList>

            {/* iPhone */}
            <TabsContent value="iphone" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">iPhone or iPad</h3>
                  <p className="text-base text-muted-foreground">
                    Your phone already has a purple <strong>Podcasts</strong>{' '}
                    app made by Apple. Look for the icon with a white antenna
                    on a purple background. If you prefer Spotify, it works
                    the same way.
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-base leading-relaxed">
                    <li>
                      <strong>Open the Podcasts app.</strong> Swipe down from
                      the middle of your Home Screen and type
                      &ldquo;Podcasts&rdquo; to find it if you don&apos;t
                      see it.
                    </li>
                    <li>
                      <strong>Tap Search</strong> at the bottom right.
                    </li>
                    <li>
                      <strong>Type a show name</strong> (for example,{' '}
                      <em>Fresh Air</em>) and tap the show from the results.
                    </li>
                    <li>
                      <strong>Tap an episode</strong> to play it, or tap the
                      play button on the newest one.
                    </li>
                    <li>
                      <strong>Tap Follow</strong> (it says &ldquo;Follow&rdquo;
                      or has a + symbol). This is free. New episodes will
                      show up in your library.
                    </li>
                    <li>
                      <strong>To listen offline:</strong> tap the three-dot
                      menu on an episode and choose{' '}
                      <em>Download Episode</em>. Once it&apos;s downloaded,
                      it plays without internet.
                    </li>
                    <li>
                      <strong>Playback speed:</strong> while an episode is
                      playing, tap the speed badge (<em>1x</em>) to slow to{' '}
                      <em>0.8x</em> or speed up to <em>1.5x</em>.
                    </li>
                  </ol>
                  <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-800">
                    <AlertDescription className="text-base text-purple-900 dark:text-purple-100">
                      <strong>Quick Tip:</strong> The app can delete episodes
                      after you finish them so your phone doesn&apos;t fill up.
                      Go to <em>Settings → Podcasts → Remove Downloads</em>{' '}
                      and choose <em>After 24 Hours</em>.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Android */}
            <TabsContent value="android" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">Android phone or tablet</h3>
                  <p className="text-base text-muted-foreground">
                    Google Podcasts was shut down in 2024. Today, most
                    Android users listen with <strong>YouTube Music</strong>,{' '}
                    <strong>Spotify</strong>, or <strong>Pocket Casts</strong>.
                    All three are free.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card className="border-2">
                      <CardContent className="p-5 space-y-2">
                        <h4 className="font-bold text-lg">YouTube Music</h4>
                        <p className="text-sm text-muted-foreground">
                          Comes on many Androids. Podcasts live under the{' '}
                          <em>Explore</em> tab → <em>Podcasts</em>.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-5 space-y-2">
                        <h4 className="font-bold text-lg">Spotify</h4>
                        <p className="text-sm text-muted-foreground">
                          Free tier plays podcasts with no ads on most shows.
                          Install from Play Store.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-5 space-y-2">
                        <h4 className="font-bold text-lg">Pocket Casts</h4>
                        <p className="text-sm text-muted-foreground">
                          A fan favorite — big play buttons, easy to learn,
                          no sign-in required to start.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-5 space-y-2">
                        <h4 className="font-bold text-lg">Amazon Music</h4>
                        <p className="text-sm text-muted-foreground">
                          Free for Prime members. Podcasts show under the{' '}
                          <em>Podcasts</em> tab.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <ol className="list-decimal pl-6 space-y-3 text-base leading-relaxed">
                    <li>Open the Play Store and install one of the apps above.</li>
                    <li>Open the app and tap the <strong>Search</strong> icon (the magnifying glass).</li>
                    <li>Type a show name and tap it.</li>
                    <li>Tap <strong>Play</strong> on an episode or tap <strong>Follow</strong> / <strong>Subscribe</strong>. Free.</li>
                    <li>Tap the three-dot menu on an episode to <strong>Download</strong> for offline listening.</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Smart Speaker */}
            <TabsContent value="speaker" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">Alexa or Google smart speaker</h3>
                  <p className="text-base text-muted-foreground">
                    If you have an Amazon Echo or a Google Nest speaker, you
                    can play a podcast out loud without touching your phone.
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                      <p className="font-bold text-lg mb-2">Amazon Echo (Alexa)</p>
                      <p className="text-base mb-2">Say:</p>
                      <ul className="space-y-2 text-base">
                        <li>
                          &ldquo;<strong>Alexa, play the podcast Up First.</strong>&rdquo;
                        </li>
                        <li>
                          &ldquo;<strong>Alexa, play the latest episode of The Daily.</strong>&rdquo;
                        </li>
                        <li>
                          &ldquo;<strong>Alexa, pause.</strong>&rdquo; / &ldquo;<strong>Alexa, resume.</strong>&rdquo;
                        </li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                      <p className="font-bold text-lg mb-2">Google Nest (Google Assistant)</p>
                      <p className="text-base mb-2">Say:</p>
                      <ul className="space-y-2 text-base">
                        <li>
                          &ldquo;<strong>Hey Google, play the podcast Fresh Air.</strong>&rdquo;
                        </li>
                        <li>
                          &ldquo;<strong>Hey Google, play NPR News Now.</strong>&rdquo;
                        </li>
                        <li>
                          &ldquo;<strong>Hey Google, stop.</strong>&rdquo;
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground">
                    New to voice assistants? See our{' '}
                    <Link
                      to="/tools/voice-assistant-setup"
                      className="text-purple-700 dark:text-purple-300 underline underline-offset-4 font-semibold"
                    >
                      Voice Assistant Setup guide
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Computer */}
            <TabsContent value="computer" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">Laptop or desktop computer</h3>
                  <p className="text-base text-muted-foreground">
                    You don&apos;t need a special app. A web browser is enough.
                  </p>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" aria-hidden="true" />
                      <span>
                        <strong>podcasts.apple.com</strong> — search any show
                        and click the episode&apos;s play button.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" aria-hidden="true" />
                      <span>
                        <strong>open.spotify.com</strong> — same idea. Free
                        account lets you follow shows and pick up where you
                        left off.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" aria-hidden="true" />
                      <span>
                        <strong>The show&apos;s own website</strong> — almost
                        every podcast has a play button on its homepage.
                      </span>
                    </li>
                  </ul>
                  <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-800">
                    <AlertDescription className="text-base text-purple-900 dark:text-purple-100">
                      <strong>Quick Tip:</strong> Use headphones or turn up
                      your computer speakers. Volume controls work like any
                      other video or song.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* ── Directory ── */}
        <section aria-labelledby="directory-heading" className="mb-14">
          <h2 id="directory-heading" className="text-3xl font-bold mb-3">
            Our curated directory — {totalShows}+ shows worth trying
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Every show on this list is free. Click a link to open it in
            Apple Podcasts or Spotify on the web.
          </p>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.id}>
                <h3 className="text-2xl font-bold mb-1 text-purple-800 dark:text-purple-200">
                  {cat.label}{' '}
                  <span className="text-base font-normal text-muted-foreground">
                    ({cat.shows.length})
                  </span>
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  {cat.blurb}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.shows.map((show) => (
                    <Card
                      key={show.name}
                      className="border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                    >
                      <CardContent className="p-5 space-y-3">
                        <div>
                          <h4 className="font-bold text-lg leading-tight">
                            {show.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Hosted by {show.host}
                          </p>
                        </div>
                        <p className="text-base">
                          <span className="font-semibold">Good for:</span>{' '}
                          {show.goodFor}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Play className="h-4 w-4" aria-hidden="true" />
                          {show.length}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {show.apple && (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="min-h-10"
                            >
                              <a
                                href={show.apple}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Apple Podcasts
                                <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                              </a>
                            </Button>
                          )}
                          {show.spotify && (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="min-h-10"
                            >
                              <a
                                href={show.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Spotify
                                <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                              </a>
                            </Button>
                          )}
                          {show.web && (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="min-h-10"
                            >
                              <a
                                href={show.web}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Website
                                <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Where to discover more ── */}
        <section aria-labelledby="discover-heading" className="mb-14">
          <h2 id="discover-heading" className="text-3xl font-bold mb-3">
            Where to discover new podcasts
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Trusted directories you can browse for free.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Apple Podcasts Editor Picks',
                url: 'https://www.apple.com/apple-podcasts/',
                note: 'Curated by Apple&apos;s editors — browse by topic',
              },
              {
                name: 'Spotify Podcasts',
                url: 'https://open.spotify.com/genre/podcasts-page',
                note: 'Free to browse; no paid plan needed for podcasts',
              },
              {
                name: 'Listen Notes',
                url: 'https://www.listennotes.com/',
                note: 'Search engine for every podcast in the world',
              },
              {
                name: 'Your local library (Libby)',
                url: 'https://libbyapp.com/',
                note: 'Many libraries now offer podcasts and audiobooks together',
              },
            ].map((src) => (
              <Card key={src.name} className="border-2">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-bold text-lg">{src.name}</h3>
                  <p
                    className="text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: src.note }}
                  />
                  <Button asChild size="sm" variant="outline" className="min-h-10 mt-2">
                    <a href={src.url} target="_blank" rel="noopener noreferrer">
                      Visit
                      <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Beginner pitfalls ── */}
        <section aria-labelledby="pitfalls-heading" className="mb-14">
          <h2 id="pitfalls-heading" className="text-3xl font-bold mb-3">
            Beginner pitfalls to avoid
          </h2>
          <div className="space-y-3">
            {[
              {
                title: 'Don&apos;t pay for &ldquo;podcast subscriptions.&rdquo;',
                body: 'Nearly every podcast is free. If a website or email asks for a credit card to &ldquo;unlock&rdquo; a show, stop. The show is almost certainly free on Apple Podcasts or Spotify.',
              },
              {
                title: 'Ads are normal. You can skip them.',
                body: 'Most free shows play a 30- to 60-second ad at the start and middle. Use the 30-second skip-forward button. If ads really bother you, Spotify and Apple offer a paid tier that removes ads on some shows.',
              },
              {
                title: 'Auto-download can eat your phone storage.',
                body: 'Following a daily show means new episodes download every morning. Turn on &ldquo;Remove Downloads after played&rdquo; in your podcast app settings to free up space automatically.',
              },
              {
                title: 'Volume problems are usually the output, not the show.',
                body: 'If the sound is too quiet, check three places: your phone volume, your headphones (or Bluetooth speaker) volume, and the app&apos;s own play bar. Some shows are recorded quieter than others.',
              },
            ].map((item, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-5">
                  <h3
                    className="font-bold text-lg mb-1"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Comfort adjustments ── */}
        <section aria-labelledby="comfort-heading" className="mb-14">
          <h2 id="comfort-heading" className="text-3xl font-bold mb-3">
            Comfort adjustments
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Small tweaks that make podcasts more enjoyable at any age.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-2">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Slower playback</h3>
                </div>
                <p className="text-base">
                  Set speed to <strong>0.8x</strong> or <strong>0.9x</strong>{' '}
                  if the host talks fast. Tap the &ldquo;1x&rdquo; badge on
                  the play bar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Hearing aid streaming</h3>
                </div>
                <p className="text-base">
                  Many newer hearing aids stream Bluetooth audio straight in.
                  See our{' '}
                  <Link
                    to="/tools/hearing-aid-tech-helper"
                    className="text-purple-700 dark:text-purple-300 underline underline-offset-4 font-semibold"
                  >
                    Hearing Aid Tech Helper
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Large-text transcripts</h3>
                </div>
                <p className="text-base">
                  Apple Podcasts and Spotify now show a running transcript on
                  many shows. Tap the speech-bubble icon on the player.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Sleep timer</h3>
                </div>
                <p className="text-base">
                  Most apps have a built-in sleep timer. Set it to 20 or 30
                  minutes and the audio fades out on its own.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Listening while doing ── */}
        <section aria-labelledby="while-heading" className="mb-14">
          <h2 id="while-heading" className="text-3xl font-bold mb-3">
            When to listen
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Podcasts shine during times your hands or eyes are busy but your
            ears are free.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '🚶', title: 'Walking', body: 'A 30-minute walk pairs with a 30-minute episode.' },
              { icon: '🚗', title: 'Driving', body: 'Use Bluetooth or CarPlay — always hands-free.' },
              { icon: '🍳', title: 'Cooking', body: 'Great for a long recipe or Sunday meal prep.' },
              { icon: '🌻', title: 'Gardening', body: 'News and storytelling work well outdoors.' },
              { icon: '🧺', title: 'Chores', body: 'Laundry, dishes, and tidying fly by.' },
              { icon: '😴', title: 'Before bed', body: 'Set a 20-minute sleep timer for calm stories.' },
            ].map((item) => (
              <Card key={item.title} className="border-2 text-center">
                <CardContent className="p-5">
                  <div className="text-4xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Scam warning ── */}
        <Alert className="mb-14 border-2 border-rose-300 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-800">
          <ShieldAlert className="h-5 w-5 text-rose-700 dark:text-rose-300" />
          <AlertTitle className="text-lg font-bold text-rose-900 dark:text-rose-100">
            Scam warning — watch for these
          </AlertTitle>
          <AlertDescription className="text-base text-rose-900 dark:text-rose-100 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>&ldquo;Free podcast course&rdquo; that actually charges.</strong>{' '}
                Legit podcasts never need a course to listen.
              </li>
              <li>
                <strong>Paid apps selling &ldquo;exclusive&rdquo; content</strong> that&apos;s
                already free on Apple Podcasts or Spotify. Always check the
                official apps first.
              </li>
              <li>
                <strong>Random &ldquo;podcast listening&rdquo; websites</strong> that ask
                for a credit card or log-in. Stick to{' '}
                <strong>podcasts.apple.com</strong>,{' '}
                <strong>open.spotify.com</strong>, or the show&apos;s own
                site.
              </li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* ── Save for later + Family ── */}
        <section aria-labelledby="share-heading" className="mb-14">
          <h2 id="share-heading" className="text-3xl font-bold mb-6">
            Save for later and share with family
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-2">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <BookmarkPlus className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Save episodes for later</h3>
                </div>
                <p className="text-base">
                  On an episode, tap the three-dot menu and pick{' '}
                  <strong>Save</strong>, <strong>Save for Later</strong>, or{' '}
                  <strong>Add to Queue</strong>. Your saved episodes live in
                  a library inside the app — no email or account required for
                  most.
                </p>
                <p className="text-base text-muted-foreground">
                  You can also bookmark this page and any TekSure tool using
                  the bookmark button in the top-right of the hero.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <h3 className="font-bold text-lg">Share with family</h3>
                </div>
                <p className="text-base">
                  On the episode screen, tap the <strong>Share</strong> icon
                  (a square with an up-arrow). Pick <strong>Messages</strong>{' '}
                  or <strong>Mail</strong> to send the link. The other
                  person can tap the link and listen on their device — even
                  if they use a different app.
                </p>
                <p className="text-base text-muted-foreground flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose-500" aria-hidden="true" />
                  Try a listen-along on your next video call with the grandkids.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-14">
          <h2 id="faq-heading" className="text-3xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="f1">
              <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                Are podcasts really free?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Yes. The vast majority are completely free to listen to. A
                small number of shows offer bonus episodes for paying
                subscribers through Apple Podcasts Subscriptions, Spotify,
                Patreon, or the show&apos;s own site — but the main episodes
                almost always stay free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f2">
              <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                Do I need internet to listen?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                You need internet to <em>find</em> and <em>download</em> an
                episode. Once it&apos;s downloaded, you can play it without
                Wi-Fi or cellular data — great for planes, long drives, or
                spotty signal areas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f3">
              <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                Can I listen in the car?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Yes. Most cars made after 2015 have Bluetooth. Pair your phone
                once (in your car&apos;s Settings menu and your phone&apos;s
                Bluetooth menu), and any podcast you play on the phone will
                come out the car speakers. Newer cars also support CarPlay
                (iPhone) or Android Auto, which shows the podcast app on your
                dashboard screen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f4">
              <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                What&apos;s the difference between podcasts and radio?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Radio plays live, on a schedule, and is gone after it airs.
                A podcast is the same idea, but recorded, saved, and ready
                to play whenever you want — pause, rewind, fast-forward, or
                listen tomorrow. Many NPR and BBC radio shows also exist as
                podcasts, so you can catch what you missed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f5">
              <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                What about audiobooks? Are those podcasts?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                No, audiobooks are their own thing — a full book read out
                loud. They&apos;re usually longer and come from apps like
                Audible, Libro.fm, or your library&apos;s Libby app. See our{' '}
                <Link
                  to="/tools/library-tech-helper"
                  className="text-purple-700 dark:text-purple-300 underline underline-offset-4 font-semibold"
                >
                  Library Tech Helper
                </Link>{' '}
                for free audiobooks through your library card.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f6">
              <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                How do I stop a show I don&apos;t like anymore?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Go to the show&apos;s page in your podcast app and tap{' '}
                <strong>Unfollow</strong> or <strong>Unsubscribe</strong>. New
                episodes will stop arriving. Any downloaded episodes can be
                deleted from the three-dot menu on each one.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── Related tools ── */}
        <section aria-labelledby="related-heading" className="mb-10">
          <h2 id="related-heading" className="text-3xl font-bold mb-4">
            Related TekSure tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                to: '/tools/library-tech-helper',
                title: 'Library Tech Helper',
                body: 'Free ebooks, audiobooks, movies, and courses with your library card.',
              },
              {
                to: '/tools/free-learning-hub',
                title: 'Free Learning Hub',
                body: 'Courses, how-to videos, and tutorials — all free, all in one place.',
              },
              {
                to: '/tools/hearing-aid-tech-helper',
                title: 'Hearing Aid Tech Helper',
                body: 'Stream phone audio — including podcasts — straight to your hearing aids.',
              },
              {
                to: '/tools/voice-assistant-setup',
                title: 'Voice Assistant Setup',
                body: 'Set up Alexa or Google so you can play podcasts out loud, hands-free.',
              },
            ].map((r) => (
              <Card key={r.to} className="border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                <CardContent className="p-5">
                  <Link to={r.to} className="block space-y-1">
                    <h3 className="font-bold text-lg text-purple-800 dark:text-purple-200">
                      {r.title}
                    </h3>
                    <p className="text-base text-muted-foreground">{r.body}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
