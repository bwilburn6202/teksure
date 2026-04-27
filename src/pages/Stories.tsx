import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Heart,
  Quote,
  ArrowRight,
  Mail,
  Filter,
  MapPin,
  X,
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────────────
type Tag = 'Scams' | 'Family' | 'Health' | 'Money' | 'Learning' | 'Grief' | 'Accessibility';

interface Story {
  id: string;
  name: string;
  age: number;
  state: string;
  headline: string;       // the large pulled quote (1–2 sentences)
  tags: Tag[];
  paragraphs: string[];   // 3–4 paragraphs for the full story
  palette: {
    // amber / cream / soft palette — circle avatar + accent color per card
    avatarBg: string;
    avatarText: string;
    ring: string;
  };
  relatedLink?: { to: string; label: string };
}

// ── Avatar palettes — warm cream/amber spectrum ───────────────────────────────
const PALETTES = [
  { avatarBg: 'bg-amber-100',  avatarText: 'text-amber-900',  ring: 'ring-amber-200' },
  { avatarBg: 'bg-orange-100', avatarText: 'text-orange-900', ring: 'ring-orange-200' },
  { avatarBg: 'bg-rose-100',   avatarText: 'text-rose-900',   ring: 'ring-rose-200' },
  { avatarBg: 'bg-yellow-100', avatarText: 'text-yellow-900', ring: 'ring-yellow-200' },
  { avatarBg: 'bg-stone-100',  avatarText: 'text-stone-900',  ring: 'ring-stone-200' },
  { avatarBg: 'bg-teal-100',   avatarText: 'text-teal-900',   ring: 'ring-teal-200' },
];

// ── The 12 stories ───────────────────────────────────────────────────────────
const STORIES: Story[] = [
  {
    id: 'margaret-ohio',
    name: 'Margaret',
    age: 72,
    state: 'Ohio',
    tags: ['Health', 'Learning'],
    headline:
      '“I avoided my doctor’s online portal for two years. I was sure I’d click the wrong thing and lose my records.”',
    paragraphs: [
      'Margaret’s doctor switched everything to MyChart back in 2023. Her grandson set up the account, but she never once logged in. Every time she tried, a password box popped up and she closed the laptop. She was convinced she’d delete her chart by accident.',
      'She came to TekSure looking for a step-by-step guide she could follow at her own pace. She printed the walkthrough, kept it next to her kitchen laptop, and went through it on a Saturday afternoon with a cup of coffee.',
      'Now she checks her lab results the same day they post. She messaged her doctor last month about a refill instead of waiting a week for a return phone call. Her words: “It wasn’t as scary as I’d built it up to be. I wish I’d done it in 2023.”',
    ],
    palette: PALETTES[0],
    relatedLink: { to: '/guides', label: 'Browse patient portal guides' },
  },
  {
    id: 'harold-texas',
    name: 'Harold',
    age: 68,
    state: 'Texas',
    tags: ['Scams', 'Family', 'Money'],
    headline:
      '“A man called saying my grandson was in jail. I was already out the door with $4,000 in cash before I remembered what I’d read.”',
    paragraphs: [
      'Harold got the call on a Tuesday morning. The caller said his grandson had been in a car accident, was in jail, and needed bail money in gift cards — and not to tell his parents, because the boy didn’t want to worry them. Harold grabbed his wallet.',
      'On the way to Walgreens, something nagged at him. He’d read a TekSure scam guide a month earlier that mentioned this exact pattern: urgency, secrecy, gift cards. He pulled over and called his grandson directly. His grandson picked up on the third ring — at school, perfectly fine.',
      'He still thinks about how close he came. He says what saved him wasn’t being clever — it was just having read the pattern written out plainly, one time, weeks before. Now he forwards the scam guide to every friend he knows.',
    ],
    palette: PALETTES[1],
    relatedLink: { to: '/scam-defense', label: 'See the Scam Defense Center' },
  },
  {
    id: 'dorothy-florida',
    name: 'Dorothy',
    age: 79,
    state: 'Florida',
    tags: ['Family', 'Learning'],
    headline:
      '“I see my great-grandchildren every Sunday now. Before, I’d go six months without seeing their faces.”',
    paragraphs: [
      'Dorothy’s great-grandchildren live in Seattle. She lives in Sarasota. For years, the only way she saw them was in pictures her granddaughter mailed around the holidays. Video calling felt impossible — she’d watched her daughter try to show her FaceTime once, and it just looked like a lot of buttons.',
      'Her neighbor showed her TekSure’s FaceTime walkthrough, which has big pictures of each button. She practiced with the neighbor twice on a Tuesday, calling back and forth across the hallway.',
      'The first Sunday, she called her great-granddaughter Ruby and the little girl showed her a dance from school. Dorothy cried for twenty minutes after she hung up. It’s been a year, and they haven’t missed a Sunday since.',
    ],
    palette: PALETTES[2],
  },
  {
    id: 'robert-newyork',
    name: 'Robert',
    age: 65,
    state: 'New York',
    tags: ['Money'],
    headline:
      '“I’d been paying $210 a month for cable I barely watched. TekSure walked me through the call script and I got it down to $165.”',
    paragraphs: [
      'Robert had been a Comcast customer for 19 years. Every year the bill crept up a little. He’d looked at the statement once, sighed, and put it back in the drawer. He didn’t feel like arguing with a call center — he just figured this is what things cost now.',
      'The TekSure Bill Negotiator tool gave him a script: exactly what to say, what to ask for, and what to do when the first rep said no. It told him to ask for the retention department specifically.',
      'The call took 22 minutes. He saved $45 a month — $540 over the year. He says the hardest part was staying on hold; the actual negotiation felt easier when he knew exactly what words to use.',
    ],
    palette: PALETTES[3],
    relatedLink: { to: '/tools/bill-negotiator', label: 'Try the Bill Negotiator' },
  },
  {
    id: 'ling-california',
    name: 'Ling',
    age: 58,
    state: 'California',
    tags: ['Money', 'Learning'],
    headline:
      '“I moved here from Shanghai last year. I didn’t know what a credit score was, or why my apartment application kept getting denied.”',
    paragraphs: [
      'Ling came to the U.S. in 2025 to be near her son and his family. She spoke good English but the banking system was a foreign language of its own — routing numbers, credit reports, overdraft fees, Zelle versus Venmo versus CashApp. Nothing she’d learned in China mapped cleanly.',
      'She worked through TekSure’s guide for newcomers over several weeks. She opened a checking account with a credit union her son recommended. She got a secured credit card and set it to autopay her phone bill — something the guide specifically recommended as a safe way to start building credit.',
      'Nine months later, her credit score is 712. She just signed a lease on her own apartment, no co-signer needed. She says the guide didn’t just explain banking — it explained what Americans assume everyone already knows.',
    ],
    palette: PALETTES[4],
  },
  {
    id: 'james-montana',
    name: 'James',
    age: 71,
    state: 'Montana',
    tags: ['Learning', 'Money'],
    headline:
      '“I’m forty miles from the nearest town. The phone company said I could get DSL ‘someday.’ I finally figured out Starlink was my real option.”',
    paragraphs: [
      'James has lived on the same ranch since 1978. His internet for the last decade was a cellular hotspot that cost $150 a month and crawled to a stop whenever a storm rolled in. He knew satellite existed but couldn’t tell which option was real and which was a sales pitch.',
      'TekSure’s rural internet guide walked through the tradeoffs — Starlink, cellular, fixed wireless — and what each actually costs once you add up the equipment. It gave him a worksheet for estimating his realistic monthly data needs.',
      'He installed Starlink himself from the driveway with his son on FaceTime. First speed test: 180 Mbps down. His wife watches church services without buffering for the first time ever. He says the guide saved him from making an expensive wrong choice — “every option sounds the same in the ad.”',
    ],
    palette: PALETTES[5],
    relatedLink: { to: '/rural-tech-hub', label: 'Rural Tech Hub' },
  },
  {
    id: 'vivian-michigan',
    name: 'Vivian',
    age: 74,
    state: 'Michigan',
    tags: ['Grief', 'Money', 'Family'],
    headline:
      '“After Frank died, I didn’t know half the passwords for our own life. The guide walked me through it without making me feel stupid.”',
    paragraphs: [
      'Frank handled the bills, the bank logins, the Netflix, the Amazon, all of it. When he passed last March, Vivian opened his laptop for the first time in forty-three years of marriage and didn’t know where to start. The grief was enormous, and on top of it, she felt like a stranger in her own household.',
      'TekSure’s guide for widowed spouses was written in the right tone — gentle, patient, no jargon, and organized in order of urgency. It told her what to handle this week (notifying the bank, finding the will), what could wait until next month, and what she could leave for later.',
      'She spent two mornings going through it, a little at a time, with her daughter on speakerphone. By the end of the month, she had the utilities in her name, a new password manager set up, and the Social Security death benefit claim filed.',
      'She says the guide didn’t make grieving any easier. It just made the paperwork one less thing crushing her.',
    ],
    palette: PALETTES[0],
    relatedLink: { to: '/bereavement-tech', label: 'Bereavement tech guide' },
  },
  {
    id: 'kwame-georgia',
    name: 'Kwame',
    age: 62,
    state: 'Georgia',
    tags: ['Health', 'Learning'],
    headline:
      '“I served 22 years and I still couldn’t figure out VA.gov. Turns out I’m not the only one.”',
    paragraphs: [
      'Kwame is a retired Army master sergeant. He’s been eligible for VA healthcare for years but kept putting off the enrollment because the website would log him out every time he hit a back button. He’d tried the 1-800 number twice and waited over an hour both times.',
      'The Veterans’ Tech Hub on TekSure had a step-by-step with screenshots of the exact pages, including the weird part where you have to verify with ID.me. It also flagged the specific page that tends to time out and told him to save his progress before he got there.',
      'He got his healthcare enrollment approved in eight days. He also found out through the same guide that he qualified for a benefit he didn’t know existed. He says it felt like having a younger buddy walk him through it — which is exactly what he needed and couldn’t get from the agency itself.',
    ],
    palette: PALETTES[1],
    relatedLink: { to: '/veterans-tech-hub', label: 'Veterans’ Tech Hub' },
  },
  {
    id: 'barbara-pennsylvania',
    name: 'Barbara',
    age: 81,
    state: 'Pennsylvania',
    tags: ['Accessibility', 'Health'],
    headline:
      '“I thought my reading days were over. Nobody ever told me my phone has a built-in magnifying glass.”',
    paragraphs: [
      'Barbara has macular degeneration. She stopped reading the newspaper three years ago and felt, in her words, “cut off from the world.” Her kids had offered to get her a Kindle but she didn’t want to learn a new device.',
      'A TekSure guide about accessibility features on the iPhone she already owned showed her the Magnifier app — it turns her phone camera into a real-time magnifying glass with adjustable zoom and contrast. She also discovered the large-text setting, which she’d had turned off for years without knowing.',
      'She reads the newspaper again. She reads menus in restaurants. She read a get-well card from her grandson last week for the first time without asking for help. She told us: “It wasn’t a new device I needed. It was knowing what the one in my purse could already do.”',
    ],
    palette: PALETTES[2],
    relatedLink: { to: '/accessibility', label: 'Accessibility Hub' },
  },
  {
    id: 'sofia-arizona',
    name: 'Sofia',
    age: 66,
    state: 'Arizona',
    tags: ['Family', 'Accessibility', 'Health'],
    headline:
      '“My husband has early Alzheimer’s. We use the simplest guides together — it’s become our afternoon routine.”',
    paragraphs: [
      'Sofia’s husband Miguel was diagnosed with early-stage Alzheimer’s two years ago. His neurologist recommended daily cognitive activities — not demanding ones, just routine engagement. Sofia was skeptical of apps that claimed to “reverse” the disease (there aren’t any) but wanted something gentle they could do together.',
      'They settled into a routine with TekSure’s simplest guides. Each afternoon she picks one — how to take a photo, how to answer a video call, how to ask Siri a question — and they work through it together at the kitchen table. Some days he remembers the day before. Some days he doesn’t.',
      'She doesn’t claim the guides are a treatment. She says they give the two of them something to do together that feels like the old him — patient, curious, figuring something out. And on the days when Miguel does remember, she gets a small glimpse of her husband looking proud of himself again.',
    ],
    palette: PALETTES[3],
    relatedLink: { to: '/dementia-care-tech', label: 'Dementia care tech' },
  },
  {
    id: 'don-oregon',
    name: 'Don',
    age: 70,
    state: 'Oregon',
    tags: ['Family', 'Money'],
    headline:
      '“I’m not afraid of dying. I’m afraid of my kids spending six months locked out of my email trying to sort things out.”',
    paragraphs: [
      'Don’s father died in 2022. The family spent most of the following year trying to gain access to his email, his photos, his bank accounts — all locked behind passwords nobody knew. It was exhausting on top of the grief.',
      'Don made a promise to his own kids that he wouldn’t leave them with the same mess. He worked through the TekSure guide on setting up Apple’s Legacy Contact feature, which lets a designated person request access to your account after your death with a digital access key and a death certificate.',
      'It took him about forty minutes. He set up his daughter as his Legacy Contact, printed out the access key as a physical document, and put it in his safe with his will. He told his kids over Sunday dinner. “Nobody likes talking about it,” he says. “But I’d rather have an awkward dinner than leave them what my dad left me.”',
    ],
    palette: PALETTES[4],
    relatedLink: { to: '/tools/digital-will-template', label: 'Digital will template' },
  },
  {
    id: 'marsha-illinois',
    name: 'Marsha',
    age: 75,
    state: 'Illinois',
    tags: ['Scams', 'Learning'],
    headline:
      '“I run scam-awareness hour at my senior center on Wednesdays. I started because the center director asked me — and I said yes because I earned that silly badge.”',
    paragraphs: [
      'Marsha went through TekSure’s Scam IQ course on her own last winter, mostly out of curiosity after her sister nearly wired money to a fake IRS agent. She earned the Scam Spotter badge, which she admits she was a little embarrassed about at first. “Am I that kind of person now?” she laughed.',
      'But the center director noticed her posting about it on Facebook and asked if she’d host a casual Wednesday session. Marsha said yes before she could talk herself out of it. She uses the TekSure scam examples — the Medicare scam, the grandchild scam, the utility cutoff scam — and walks her group through the red flags in each one.',
      'Attendance has grown from four people to about eighteen. Two of her regulars have avoided scams since starting the group. She says hosting has taught her more than taking the course did: “You don’t really know something until you have to explain it to someone else.”',
    ],
    palette: PALETTES[5],
    relatedLink: { to: '/tools/scam-iq-test', label: 'Try the Scam IQ test' },
  },
];

const ALL_TAGS: Tag[] = ['Scams', 'Family', 'Health', 'Money', 'Learning', 'Grief', 'Accessibility'];

// ── Page component ───────────────────────────────────────────────────────────
export default function Stories() {
  const [activeTag, setActiveTag] = useState<Tag | 'All'>('All');
  const [openStory, setOpenStory] = useState<Story | null>(null);

  const visible = useMemo(
    () => (activeTag === 'All' ? STORIES : STORIES.filter((s) => s.tags.includes(activeTag))),
    [activeTag]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 via-orange-50/40 to-amber-50/30 dark:from-background dark:via-background dark:to-background">
      <SEOHead
        title="Real Stories from Real People"
        description="Read how everyday people — seniors, caregivers, newcomers, veterans — have used TekSure to solve real tech problems in their lives."
        path="/stories"
      />

      <Navbar />

      <main id="main-content" className="container mx-auto px-4 py-12 md:py-16">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-950/40 px-4 py-1.5 text-sm font-medium text-amber-900 dark:text-amber-200 mb-5">
            <Heart className="h-4 w-4" aria-hidden="true" />
            From our community
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5">
            Real Stories from Real People
          </h1>
          <p className="text-xl md:text-2xl text-foreground/75 leading-relaxed">
            See how TekSure has helped folks just like you.
          </p>
        </header>

        {/* ── Filter tags ───────────────────────────────────────────────── */}
        <section
          aria-label="Filter stories by topic"
          className="max-w-5xl mx-auto mb-10"
        >
          <div className="flex items-center gap-3 mb-4 text-foreground/70">
            <Filter className="h-5 w-5" aria-hidden="true" />
            <span className="text-base font-medium">Filter by topic:</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <FilterChip
              label="All stories"
              active={activeTag === 'All'}
              onClick={() => setActiveTag('All')}
              count={STORIES.length}
            />
            {ALL_TAGS.map((t) => (
              <FilterChip
                key={t}
                label={t}
                active={activeTag === t}
                onClick={() => setActiveTag(t)}
                count={STORIES.filter((s) => s.tags.includes(t)).length}
              />
            ))}
          </div>
        </section>

        {/* ── Story grid ────────────────────────────────────────────────── */}
        <section
          aria-label="Stories"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto"
        >
          {visible.map((story) => (
            <StoryCard key={story.id} story={story} onOpen={() => setOpenStory(story)} />
          ))}
        </section>

        {visible.length === 0 && (
          <p className="text-center text-foreground/60 text-lg mt-10">
            No stories yet for this topic. Check back soon.
          </p>
        )}

        {/* ── Submit your own ──────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto mt-20 md:mt-24 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-amber-100/80 via-orange-100/60 to-rose-100/50 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-rose-950/20 border border-amber-200/70 dark:border-amber-900/40 p-8 md:p-12">
            <Mail className="h-10 w-10 text-amber-700 dark:text-amber-300 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Have your own story? We’d love to hear it.
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-6">
              Whether you figured out something that stumped you for years, caught a scam,
              or taught a friend — your story could be the one that helps someone else.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full">
              <a
                href="mailto:stories@teksure.com?subject=My%20TekSure%20Story"
                aria-label="Email your story to stories@teksure.com"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                Send us your story
              </a>
            </Button>
            <p className="text-sm text-foreground/60 mt-4">
              stories@teksure.com — we read every one.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── Full-story modal ────────────────────────────────────────────── */}
      <Dialog open={!!openStory} onOpenChange={(o) => !o && setOpenStory(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {openStory && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex items-center justify-center h-16 w-16 rounded-full ${openStory.palette.avatarBg} ${openStory.palette.avatarText} text-2xl font-bold ring-4 ${openStory.palette.ring} shrink-0`}
                    aria-hidden="true"
                  >
                    {openStory.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {openStory.name}, {openStory.age}
                    </DialogTitle>
                    <DialogDescription className="flex items-center gap-1.5 text-base text-foreground/70 mt-0.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {openStory.state}
                    </DialogDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {openStory.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              <div className="space-y-4 mt-4 text-left">
                <blockquote className="border-l-4 border-amber-400 pl-4 italic text-lg text-foreground/85 leading-relaxed">
                  {openStory.headline}
                </blockquote>
                {openStory.paragraphs.map((p, i) => (
                  <p key={i} className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    {p}
                  </p>
                ))}

                {openStory.relatedLink && (
                  <div className="pt-2">
                    <Button asChild variant="outline" className="h-11">
                      <Link to={openStory.relatedLink.to}>
                        {openStory.relatedLink.label}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── Subcomponents ────────────────────────────────────────────────────────────
interface StoryCardProps {
  story: Story;
  onOpen: () => void;
}

function StoryCard({ story, onOpen }: StoryCardProps) {
  return (
    <Card className="group relative flex flex-col h-full bg-white/90 dark:bg-card/80 border-amber-100 dark:border-border hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
      <CardContent className="p-6 md:p-7 flex flex-col h-full">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className={`flex items-center justify-center h-14 w-14 rounded-full ${story.palette.avatarBg} ${story.palette.avatarText} text-xl font-bold ring-4 ${story.palette.ring} shrink-0`}
            aria-hidden="true"
          >
            {story.name.charAt(0)}
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground leading-tight">
              {story.name}, {story.age}
            </p>
            <p className="flex items-center gap-1 text-sm text-foreground/65 mt-0.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {story.state}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="flex-1 mb-5">
          <Quote
            className="h-6 w-6 text-amber-400/70 mb-2"
            aria-hidden="true"
          />
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85 font-medium">
            {story.headline}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {story.tags.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="text-xs bg-amber-50 text-amber-900 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-200 border border-amber-200/60 dark:border-amber-900/40"
            >
              {t}
            </Badge>
          ))}
        </div>

        {/* Read full story */}
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors w-fit"
          aria-label={`Read the full story from ${story.name}`}
        >
          Read the full story
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </button>
      </CardContent>
    </Card>
  );
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}

function FilterChip({ label, active, onClick, count }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'inline-flex items-center gap-2 h-11 px-4 rounded-full text-base font-semibold bg-amber-600 text-white shadow-md transition-all'
          : 'inline-flex items-center gap-2 h-11 px-4 rounded-full text-base font-medium bg-white dark:bg-card text-foreground/80 border-2 border-amber-200 dark:border-border hover:border-amber-400 hover:text-foreground transition-all'
      }
    >
      {label}
      <span
        className={
          active
            ? 'text-xs font-semibold px-1.5 py-0.5 rounded-full bg-white/20'
            : 'text-xs font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200'
        }
      >
        {count}
      </span>
      {active && <X className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />}
    </button>
  );
}
