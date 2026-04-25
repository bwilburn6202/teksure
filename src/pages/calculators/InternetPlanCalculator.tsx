import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Wifi,
  Users,
  Monitor,
  Video,
  Gamepad2,
  Briefcase,
  Camera,
  Upload,
  DollarSign,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Info,
  Gauge,
  Router,
  MapPin,
  ShoppingCart,
  PhoneCall,
  HelpCircle,
  ExternalLink,
  Satellite,
  Signal,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ── Types ────────────────────────────────────────────────────────────────────

type Frequency = 'none' | 'occasional' | 'daily';
type Gaming = 'none' | 'light' | 'heavy';
type Work = 'no' | 'occasional' | 'yes';

interface Tier {
  speed: number;        // Mbps
  label: string;
  low: number;          // typical monthly low
  high: number;         // typical monthly high
  note: string;
}

interface Provider {
  name: string;
  type: 'Cable' | 'Fiber' | 'DSL' | '5G Home' | 'Satellite' | 'Fixed Wireless' | 'Municipal';
  tiers: string;
  dataCap: string;
  contract: string;
  equipment: string;
  install: string;
  notes: string;
}

interface Region {
  id: string;
  label: string;
  providers: Provider[];
}

// ── Data: tiers ──────────────────────────────────────────────────────────────

const TIERS: Tier[] = [
  {
    speed: 100,
    label: '100 Mbps',
    low: 40,
    high: 60,
    note: 'Fine for 1–2 people, basic streaming, light work from home.',
  },
  {
    speed: 300,
    label: '300 Mbps',
    low: 60,
    high: 80,
    note: 'Comfortable for a household with multiple streams and a few smart devices.',
  },
  {
    speed: 500,
    label: '500 Mbps',
    low: 70,
    high: 90,
    note: 'Good for 4K streaming on several TVs at once, plus work from home.',
  },
  {
    speed: 1000,
    label: '1 Gbps (1,000 Mbps)',
    low: 80,
    high: 120,
    note: 'Overkill for most households. Worth it only with very heavy use.',
  },
  {
    speed: 2000,
    label: '2 Gbps and up',
    low: 120,
    high: 200,
    note: 'Almost no home setup can take advantage of this. Marketing speed.',
  },
];

// ── Data: providers by region ────────────────────────────────────────────────

const REGIONS: Region[] = [
  {
    id: 'northeast',
    label: 'Northeast (NY, NJ, PA, MA, CT, etc.)',
    providers: [
      {
        name: 'Verizon Fios',
        type: 'Fiber',
        tiers: '300 / 500 / 1 Gbps / 2 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: '$15/mo router (optional — own router allowed)',
        install: 'Often free with online sign-up',
        notes: 'Symmetrical upload and download. Strongest fiber option in the Northeast.',
      },
      {
        name: 'Optimum (Altice)',
        type: 'Cable / Fiber',
        tiers: '300 / 500 / 1 Gbps / 2 Gbps / 5 Gbps',
        dataCap: 'None',
        contract: 'No contract on most plans',
        equipment: '$10/mo modem + router gateway',
        install: 'Free professional install common',
        notes: 'Introductory price usually rises after 12 months — watch for it.',
      },
      {
        name: 'Xfinity (Comcast)',
        type: 'Cable',
        tiers: '150 / 400 / 800 / 1.2 Gbps / 2 Gbps',
        dataCap: '1.2 TB/month on most plans',
        contract: '1–2 year contracts common (no-contract costs more)',
        equipment: '$15/mo xFi gateway',
        install: '$89 professional or free self-install',
        notes: 'Data cap matters if you do heavy 4K streaming across many TVs.',
      },
      {
        name: 'Spectrum',
        type: 'Cable',
        tiers: '300 / 500 / 1 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Modem free, router $5/mo (optional)',
        install: '$60 activation; self-install possible',
        notes: 'Prices reset after 12 months. Call to renegotiate.',
      },
    ],
  },
  {
    id: 'southeast',
    label: 'Southeast (FL, GA, NC, SC, VA, TN, AL)',
    providers: [
      {
        name: 'AT&T Fiber',
        type: 'Fiber',
        tiers: '300 / 500 / 1 Gbps / 2 Gbps / 5 Gbps',
        dataCap: 'None on fiber',
        contract: 'No contract',
        equipment: 'Gateway included in price',
        install: 'Free professional install often included',
        notes: 'Symmetrical speeds. Best option where available.',
      },
      {
        name: 'Xfinity (Comcast)',
        type: 'Cable',
        tiers: '150 / 400 / 800 / 1.2 Gbps',
        dataCap: '1.2 TB/month',
        contract: '1–2 year contracts common',
        equipment: '$15/mo gateway',
        install: '$89 or self-install',
        notes: 'Competitive in Atlanta, Nashville, Jacksonville markets.',
      },
      {
        name: 'Spectrum',
        type: 'Cable',
        tiers: '300 / 500 / 1 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Modem free, router optional',
        install: '$60 activation',
        notes: 'Widely available across the Carolinas and Florida.',
      },
      {
        name: 'T-Mobile Home Internet',
        type: '5G Home',
        tiers: '~100–245 Mbps typical',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Gateway included ($0)',
        install: 'Plug it in yourself',
        notes: 'Flat $50/mo with autopay. No equipment fee. Speed varies by tower.',
      },
    ],
  },
  {
    id: 'midwest',
    label: 'Midwest (IL, MI, OH, IN, WI, MN, MO, IA)',
    providers: [
      {
        name: 'Xfinity (Comcast)',
        type: 'Cable',
        tiers: '150 / 400 / 800 / 1.2 Gbps',
        dataCap: '1.2 TB/month',
        contract: '1–2 year contracts common',
        equipment: '$15/mo gateway',
        install: '$89 or self-install',
        notes: 'Dominant in Chicago, Minneapolis, Detroit metros.',
      },
      {
        name: 'AT&T Fiber',
        type: 'Fiber',
        tiers: '300 / 500 / 1 Gbps / 2 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Gateway included',
        install: 'Free professional install',
        notes: 'Expanding across Indiana, Ohio, Michigan.',
      },
      {
        name: 'Spectrum',
        type: 'Cable',
        tiers: '300 / 500 / 1 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Modem free, router optional',
        install: '$60 activation',
        notes: 'Strong in Ohio, Wisconsin, Missouri.',
      },
      {
        name: 'Mediacom',
        type: 'Cable',
        tiers: '300 / 600 / 1 Gbps',
        dataCap: '200 GB – 6 TB depending on tier',
        contract: '1-year contracts common',
        equipment: '$13/mo modem',
        install: '$100 standard',
        notes: 'Data caps smaller than Xfinity — read the fine print.',
      },
    ],
  },
  {
    id: 'south-central',
    label: 'South Central (TX, OK, AR, LA, MS, KY)',
    providers: [
      {
        name: 'AT&T Fiber',
        type: 'Fiber',
        tiers: '300 / 500 / 1 Gbps / 2 Gbps / 5 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Gateway included',
        install: 'Free professional install',
        notes: 'Widespread fiber buildout across Texas metros.',
      },
      {
        name: 'Spectrum',
        type: 'Cable',
        tiers: '300 / 500 / 1 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Modem free',
        install: '$60 activation',
        notes: 'Strong in Texas and Louisiana.',
      },
      {
        name: 'Xfinity (Comcast)',
        type: 'Cable',
        tiers: '150 / 400 / 800 / 1.2 Gbps',
        dataCap: '1.2 TB/month',
        contract: '1–2 year contracts',
        equipment: '$15/mo gateway',
        install: '$89 or self-install',
        notes: 'Strong in Houston suburbs.',
      },
      {
        name: 'Verizon 5G Home',
        type: '5G Home',
        tiers: '~85–300 Mbps typical',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Router included',
        install: 'Self-install',
        notes: 'Good fit where fiber has not reached.',
      },
    ],
  },
  {
    id: 'mountain',
    label: 'Mountain West (CO, UT, AZ, NM, NV, ID, MT, WY)',
    providers: [
      {
        name: 'Xfinity (Comcast)',
        type: 'Cable',
        tiers: '150 / 400 / 800 / 1.2 Gbps',
        dataCap: '1.2 TB/month',
        contract: '1–2 year contracts',
        equipment: '$15/mo gateway',
        install: '$89 or self-install',
        notes: 'Common in Denver, Salt Lake City, Phoenix.',
      },
      {
        name: 'CenturyLink / Quantum Fiber',
        type: 'DSL / Fiber',
        tiers: '100 Mbps DSL, 200 / 500 / 940 / 3 Gbps fiber',
        dataCap: 'None on fiber',
        contract: 'No contract',
        equipment: '$15/mo router (own router allowed)',
        install: 'Often free',
        notes: 'Check if your address has fiber (Quantum) or slow DSL only.',
      },
      {
        name: 'Cox',
        type: 'Cable',
        tiers: '100 / 250 / 500 / 1 Gbps / 2 Gbps',
        dataCap: '1.25 TB/month',
        contract: '1–2 year contracts',
        equipment: '$14/mo gateway',
        install: '$100 or self-install',
        notes: 'Dominant cable option in Phoenix and Las Vegas.',
      },
      {
        name: 'T-Mobile Home Internet',
        type: '5G Home',
        tiers: '~100–245 Mbps typical',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Gateway included',
        install: 'Self-install',
        notes: 'Flat pricing — a strong option in spread-out Mountain West towns.',
      },
    ],
  },
  {
    id: 'west-coast',
    label: 'West Coast (CA, OR, WA)',
    providers: [
      {
        name: 'AT&T Fiber',
        type: 'Fiber',
        tiers: '300 / 500 / 1 Gbps / 2 Gbps / 5 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Gateway included',
        install: 'Free professional install',
        notes: 'Strong in Los Angeles and the Bay Area.',
      },
      {
        name: 'Xfinity (Comcast)',
        type: 'Cable',
        tiers: '150 / 400 / 800 / 1.2 Gbps / 2 Gbps',
        dataCap: '1.2 TB/month',
        contract: '1–2 year contracts',
        equipment: '$15/mo gateway',
        install: '$89 or self-install',
        notes: 'Broad coverage across CA, OR, WA.',
      },
      {
        name: 'Wave / Astound Broadband',
        type: 'Cable',
        tiers: '300 / 600 / 940 Mbps',
        dataCap: 'None on most plans',
        contract: 'No contract on most plans',
        equipment: '$14/mo gateway',
        install: '$80 or self-install',
        notes: 'Sometimes cheaper than Xfinity for similar speeds.',
      },
      {
        name: 'Frontier Fiber',
        type: 'Fiber',
        tiers: '500 / 1 Gbps / 2 Gbps / 5 Gbps',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Router included',
        install: 'Free professional install',
        notes: 'Symmetrical upload. Strong in SoCal and Pacific Northwest pockets.',
      },
    ],
  },
  {
    id: 'rural',
    label: 'Rural / Underserved Areas',
    providers: [
      {
        name: 'Starlink',
        type: 'Satellite',
        tiers: 'Residential ~50–220 Mbps',
        dataCap: 'Priority data then deprioritized',
        contract: 'No contract',
        equipment: '$349–$599 one-time hardware',
        install: 'Self-install on roof or yard',
        notes: 'Best option when no cable or fiber reaches you. High upfront cost.',
      },
      {
        name: 'T-Mobile Home Internet',
        type: '5G Home',
        tiers: '~50–245 Mbps typical',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Gateway included',
        install: 'Self-install',
        notes: 'Works anywhere with T-Mobile 5G signal. Check coverage first.',
      },
      {
        name: 'Verizon 5G Home',
        type: '5G Home',
        tiers: '~85–300 Mbps typical',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Router included',
        install: 'Self-install',
        notes: 'Address-based eligibility. Check verizon.com/5g/home.',
      },
      {
        name: 'Sparklight (Cable ONE)',
        type: 'Cable',
        tiers: '100 / 300 / 600 / 1 Gbps',
        dataCap: '700 GB – 3 TB depending on tier',
        contract: '1-year agreements common',
        equipment: '$10–13/mo gateway',
        install: '$99 or self-install',
        notes: 'Common in Idaho, Arizona, Mississippi rural markets. Data caps vary.',
      },
      {
        name: 'Frontier (DSL / Fiber)',
        type: 'DSL / Fiber',
        tiers: 'DSL 6–45 Mbps, fiber up to 5 Gbps where available',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Router included',
        install: 'Varies',
        notes: 'If only DSL is offered at your address, treat it as a backup option.',
      },
      {
        name: 'Municipal Broadband (where available)',
        type: 'Municipal',
        tiers: 'Varies by city — often 1 Gbps fiber',
        dataCap: 'None',
        contract: 'No contract',
        equipment: 'Varies',
        install: 'Varies',
        notes: 'Cities like Chattanooga TN, Longmont CO, and Ammon ID run fiber. Check your city website.',
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function videoCallLoad(freq: Frequency) {
  if (freq === 'daily') return 15;
  if (freq === 'occasional') return 5;
  return 0;
}

function workLoad(work: Work) {
  if (work === 'yes') return 25;
  if (work === 'occasional') return 10;
  return 0;
}

function gamingLoad(game: Gaming) {
  if (game === 'heavy') return 25;
  if (game === 'light') return 10;
  return 0;
}

function pickTier(needed: number): Tier {
  for (const t of TIERS) {
    if (t.speed >= needed) return t;
  }
  return TIERS[TIERS.length - 1];
}

function currency(n: number) {
  return `$${n.toFixed(0)}`;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function InternetPlanCalculator() {
  // Inputs
  const [people, setPeople] = useState(2);
  const [devices, setDevices] = useState(6);
  const [videoCalls, setVideoCalls] = useState<Frequency>('occasional');
  const [streams, setStreams] = useState(1);
  const [uhd, setUhd] = useState(false);
  const [gaming, setGaming] = useState<Gaming>('none');
  const [work, setWork] = useState<Work>('no');
  const [largeUploads, setLargeUploads] = useState(false);
  const [cams, setCams] = useState(0);
  const [currentTierSpeed, setCurrentTierSpeed] = useState<number>(1000);
  const [currentBill, setCurrentBill] = useState<number>(95);
  const [regionId, setRegionId] = useState<string>('northeast');

  // Computation
  const calc = useMemo(() => {
    const streamLoad = streams * (uhd ? 25 : 5);
    const baseline =
      25 +
      (people >= 2 ? 10 : 0) +
      devices * 1 +
      streamLoad +
      videoCallLoad(videoCalls) +
      workLoad(work) +
      gamingLoad(gaming) +
      cams * 5 +
      (largeUploads ? 10 : 0);

    const recommendedDownload = Math.ceil((baseline * 1.3) / 5) * 5; // round up to nearest 5
    const recommendedUpload = Math.max(
      10,
      (videoCalls === 'daily' ? 25 : videoCalls === 'occasional' ? 10 : 5) +
        (work === 'yes' ? 15 : work === 'occasional' ? 5 : 0) +
        (largeUploads ? 20 : 0) +
        cams * 2
    );

    const recommendedTier = pickTier(recommendedDownload);
    const currentTier =
      TIERS.find((t) => t.speed === currentTierSpeed) ?? TIERS[3];

    const recommendedMid = (recommendedTier.low + recommendedTier.high) / 2;
    const savingsPerMonth = Math.max(0, Math.round(currentBill - recommendedMid));
    const savingsPerYear = savingsPerMonth * 12;

    return {
      baseline,
      recommendedDownload,
      recommendedUpload,
      recommendedTier,
      currentTier,
      recommendedMid,
      savingsPerMonth,
      savingsPerYear,
      overpaying: currentTier.speed > recommendedTier.speed,
    };
  }, [
    people,
    devices,
    videoCalls,
    streams,
    uhd,
    gaming,
    work,
    largeUploads,
    cams,
    currentTierSpeed,
    currentBill,
  ]);

  const region = REGIONS.find((r) => r.id === regionId) ?? REGIONS[0];

  return (
    <>
      <SEOHead
        title="Internet Plan Calculator — What Speed Do You Actually Need? | TekSure"
        description="Match your real household usage to the cheapest internet tier that meets it. Stop overpaying for speed you don't use."
        path="/calculators/internet-plan"
      />
      <main className="min-h-screen bg-background">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 dark:from-sky-950/40 dark:via-blue-950/30 dark:to-indigo-950/40">
          <div className="container py-12 md:py-16 max-w-5xl">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Wifi className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <Badge variant="secondary" className="text-base">
                    Free Calculator
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-blue-950 dark:text-blue-50">
                  What Internet Speed Do You Actually Need?
                </h1>
                <p className="text-lg md:text-xl text-blue-900/80 dark:text-blue-100/85 max-w-2xl">
                  Stop overpaying for speed you don't use. Answer a few questions and
                  see the cheapest tier that matches your real household usage.
                </p>
              </div>
              <BookmarkButton
                type="tool"
                slug="internet-plan-calculator"
                title="Internet Plan Calculator"
                url="/calculators/internet-plan"
              />
            </div>
          </div>
        </section>

        <div className="container py-8 md:py-10 pb-24 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* ── Left column: inputs ── */}
            <div className="space-y-6">
              {/* Household */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-sky-600" aria-hidden="true" />
                    Your Household
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label
                      htmlFor="people"
                      className="block text-base font-medium mb-2"
                    >
                      How many people live here?
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        id="people"
                        type="range"
                        min={1}
                        max={8}
                        step={1}
                        value={people}
                        onChange={(e) => setPeople(Number(e.target.value))}
                        className="flex-1 accent-sky-600 min-h-14"
                        aria-label="Number of people in household"
                      />
                      <span className="text-lg font-semibold w-20 text-right">
                        {people} {people === 1 ? 'person' : 'people'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="devices"
                      className="block text-base font-medium mb-2"
                    >
                      How many devices are connected most of the time?
                    </label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Count phones, tablets, laptops, smart TVs, thermostats,
                      speakers, and cameras.
                    </p>
                    <div className="flex items-center gap-4">
                      <input
                        id="devices"
                        type="range"
                        min={1}
                        max={15}
                        step={1}
                        value={devices}
                        onChange={(e) => setDevices(Number(e.target.value))}
                        className="flex-1 accent-sky-600 min-h-14"
                        aria-label="Number of connected devices"
                      />
                      <span className="text-lg font-semibold w-24 text-right">
                        {devices} devices
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Video + Streaming */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-sky-600" aria-hidden="true" />
                    Streaming and Video Calls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label
                      htmlFor="videocalls"
                      className="block text-base font-medium mb-2"
                    >
                      <Video className="inline h-4 w-4 mr-1" aria-hidden="true" />
                      Video calls (Zoom, FaceTime, Google Meet)
                    </label>
                    <Select
                      value={videoCalls}
                      onValueChange={(v: Frequency) => setVideoCalls(v)}
                    >
                      <SelectTrigger
                        id="videocalls"
                        className="min-h-14 text-base"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Almost never</SelectItem>
                        <SelectItem value="occasional">
                          Occasional — a few times a week
                        </SelectItem>
                        <SelectItem value="daily">
                          Daily — for work, family, or doctor visits
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="streams"
                      className="block text-base font-medium mb-2"
                    >
                      How many TVs stream video at the same time?
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        id="streams"
                        type="range"
                        min={0}
                        max={5}
                        step={1}
                        value={streams}
                        onChange={(e) => setStreams(Number(e.target.value))}
                        className="flex-1 accent-sky-600 min-h-14"
                        aria-label="Simultaneous video streams"
                      />
                      <span className="text-lg font-semibold w-20 text-right">
                        {streams}
                      </span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer min-h-14 p-3 rounded-xl border-2 border-border hover:border-sky-300 transition-colors">
                    <input
                      type="checkbox"
                      checked={uhd}
                      onChange={(e) => setUhd(e.target.checked)}
                      className="mt-1 h-5 w-5 accent-sky-600"
                      aria-label="Watch in 4K UHD"
                    />
                    <div>
                      <div className="font-semibold text-base">
                        We watch in 4K Ultra HD
                      </div>
                      <div className="text-sm text-muted-foreground">
                        4K uses about 25 Mbps per stream — five times more than HD.
                      </div>
                    </div>
                  </label>
                </CardContent>
              </Card>

              {/* Work + Gaming + Uploads */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-sky-600" aria-hidden="true" />
                    Work, Gaming, Uploads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label
                      htmlFor="work"
                      className="block text-base font-medium mb-2"
                    >
                      Working from home?
                    </label>
                    <Select value={work} onValueChange={(v: Work) => setWork(v)}>
                      <SelectTrigger id="work" className="min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="occasional">
                          Occasional — a few days a month
                        </SelectItem>
                        <SelectItem value="yes">
                          Yes — most weekdays
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="gaming"
                      className="block text-base font-medium mb-2"
                    >
                      <Gamepad2 className="inline h-4 w-4 mr-1" aria-hidden="true" />
                      Gaming in the household
                    </label>
                    <Select
                      value={gaming}
                      onValueChange={(v: Gaming) => setGaming(v)}
                    >
                      <SelectTrigger id="gaming" className="min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="light">
                          Light — a grandkid visits and plays sometimes
                        </SelectItem>
                        <SelectItem value="heavy">
                          Heavy — online gaming every day
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer min-h-14 p-3 rounded-xl border-2 border-border hover:border-sky-300 transition-colors">
                    <input
                      type="checkbox"
                      checked={largeUploads}
                      onChange={(e) => setLargeUploads(e.target.checked)}
                      className="mt-1 h-5 w-5 accent-sky-600"
                      aria-label="Large photo or video uploads"
                    />
                    <div>
                      <div className="font-semibold text-base flex items-center gap-2">
                        <Upload className="h-4 w-4" aria-hidden="true" />
                        We upload photos or videos to the cloud often
                      </div>
                      <div className="text-sm text-muted-foreground">
                        iCloud Photos, Google Photos, YouTube uploads, backup
                        software.
                      </div>
                    </div>
                  </label>
                </CardContent>
              </Card>

              {/* Smart home */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Camera className="h-5 w-5 text-sky-600" aria-hidden="true" />
                    Smart Home Devices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label
                      htmlFor="cams"
                      className="block text-base font-medium mb-2"
                    >
                      How many security cameras or video doorbells?
                    </label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ring, Nest Cam, Arlo, Wyze, Blink.
                    </p>
                    <div className="flex items-center gap-4">
                      <input
                        id="cams"
                        type="range"
                        min={0}
                        max={8}
                        step={1}
                        value={cams}
                        onChange={(e) => setCams(Number(e.target.value))}
                        className="flex-1 accent-sky-600 min-h-14"
                        aria-label="Number of security cameras"
                      />
                      <span className="text-lg font-semibold w-20 text-right">
                        {cams}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-sky-600" aria-hidden="true" />
                    What You're Paying Now (Optional)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label
                      htmlFor="currentTier"
                      className="block text-base font-medium mb-2"
                    >
                      Current plan speed
                    </label>
                    <Select
                      value={String(currentTierSpeed)}
                      onValueChange={(v) => setCurrentTierSpeed(Number(v))}
                    >
                      <SelectTrigger
                        id="currentTier"
                        className="min-h-14 text-base"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TIERS.map((t) => (
                          <SelectItem key={t.speed} value={String(t.speed)}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="currentBill"
                      className="block text-base font-medium mb-2"
                    >
                      Monthly bill (with all fees and taxes)
                    </label>
                    <Input
                      id="currentBill"
                      type="number"
                      min={0}
                      step={1}
                      value={currentBill}
                      onChange={(e) => setCurrentBill(Number(e.target.value))}
                      className="min-h-14 text-base"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ── Right column: result summary (sticky) ── */}
            <div className="lg:sticky lg:top-6 space-y-4">
              <div className="rounded-2xl border-2 border-sky-300 dark:border-sky-700 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/40 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  <h2 className="font-bold text-lg">Your Recommended Speed</h2>
                </div>
                <div className="text-4xl font-bold text-sky-800 dark:text-sky-200 mb-1">
                  {calc.recommendedDownload} Mbps
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  download · ~{calc.recommendedUpload} Mbps upload
                </p>

                <div className="rounded-xl bg-white dark:bg-slate-900/60 border p-4 mb-3">
                  <div className="text-sm text-muted-foreground mb-1">
                    Cheapest tier that meets it:
                  </div>
                  <div className="font-semibold text-lg">
                    {calc.recommendedTier.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currency(calc.recommendedTier.low)}–
                    {currency(calc.recommendedTier.high)}/mo typical
                  </div>
                  <p className="text-sm mt-2">{calc.recommendedTier.note}</p>
                </div>

                {calc.overpaying ? (
                  <Alert className="border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40">
                    <TrendingDown className="h-4 w-4 text-emerald-700" />
                    <AlertTitle className="text-emerald-900 dark:text-emerald-100">
                      You may be overpaying
                    </AlertTitle>
                    <AlertDescription className="text-emerald-900/90 dark:text-emerald-100/90">
                      Paying for: <strong>{calc.currentTier.label}</strong>.
                      You need: <strong>{calc.recommendedTier.label}</strong>.
                      {calc.savingsPerMonth > 0 && (
                        <>
                          {' '}Potential savings:{' '}
                          <strong>
                            {currency(calc.savingsPerMonth)}/mo (
                            {currency(calc.savingsPerYear)}/yr)
                          </strong>
                          .
                        </>
                      )}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="border-sky-300 bg-sky-50 dark:bg-sky-950/40">
                    <CheckCircle2 className="h-4 w-4 text-sky-700" />
                    <AlertTitle className="text-sky-900 dark:text-sky-100">
                      Your current plan is a good fit
                    </AlertTitle>
                    <AlertDescription className="text-sky-900/90 dark:text-sky-100/90">
                      You're at {calc.currentTier.label} and you need around{' '}
                      {calc.recommendedTier.label}. No need to downgrade.
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="rounded-2xl border p-5 bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Signal className="h-4 w-4 text-sky-700" aria-hidden="true" />
                  <h3 className="font-semibold">Run a real speed test</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  See what speed you actually get vs what the bill promises.
                  Open <strong>fast.com</strong> or <strong>speedtest.net</strong>
                  {' '}in a browser.
                </p>
                <Link
                  to="/tools/internet-speed-doctor"
                  className="text-sm font-medium text-sky-700 hover:text-sky-900 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Open Internet Speed Doctor{' '}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Compare tiers ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Compare the Common Tiers
            </h2>
            <p className="text-muted-foreground mb-6 text-base md:text-lg">
              These are typical prices in the US. Your area may run higher or
              lower by $10–20.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TIERS.map((t) => {
                const isRec = t.speed === calc.recommendedTier.speed;
                return (
                  <Card
                    key={t.speed}
                    className={
                      isRec
                        ? 'border-2 border-sky-500 shadow-md'
                        : 'border-border'
                    }
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-lg">{t.label}</CardTitle>
                        {isRec && (
                          <Badge className="bg-sky-600 hover:bg-sky-700">
                            Your match
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-1">
                        {currency(t.low)}–{currency(t.high)}
                        <span className="text-base font-normal text-muted-foreground">
                          /mo
                        </span>
                      </div>
                      <p className="text-base text-muted-foreground">{t.note}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* ── Region + providers ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-sky-600" aria-hidden="true" />
              Providers by Region
            </h2>
            <p className="text-muted-foreground mb-4 text-base md:text-lg">
              Pick your region to see common providers, data caps, contracts,
              and hidden fees.
            </p>

            <div className="mb-6 max-w-md">
              <label htmlFor="region" className="block text-base font-medium mb-2">
                Your region
              </label>
              <Select value={regionId} onValueChange={setRegionId}>
                <SelectTrigger id="region" className="min-h-14 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {REGIONS.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {region.providers.map((p) => (
                <Card key={p.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <CardTitle className="text-lg">{p.name}</CardTitle>
                      <Badge variant="outline">{p.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-base">
                    <div>
                      <span className="font-semibold">Speeds:</span> {p.tiers}
                    </div>
                    <div>
                      <span className="font-semibold">Data cap:</span> {p.dataCap}
                    </div>
                    <div>
                      <span className="font-semibold">Contract:</span> {p.contract}
                    </div>
                    <div>
                      <span className="font-semibold">Equipment:</span>{' '}
                      {p.equipment}
                    </div>
                    <div>
                      <span className="font-semibold">Install:</span> {p.install}
                    </div>
                    <p className="text-sm text-muted-foreground pt-1 border-t">
                      {p.notes}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Hidden costs ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
              Hidden Cost Alerts
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">Equipment rental fee</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p className="mb-2">
                    Most providers charge $10–$15/mo to rent their modem/router
                    combo — that's $120–$180/year.
                  </p>
                  <p>
                    <strong>What to do:</strong> Buy your own modem and router
                    (~$150 one-time). It pays for itself in under a year. Look for
                    a DOCSIS 3.1 modem and a Wi-Fi 6 router.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">Data caps</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Xfinity caps at 1.2 TB/month. Cox caps at 1.25 TB. Most
                    households never hit it — but heavy 4K streaming plus video
                    uploads can push you over. Overage fees run $10 per 50 GB.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Introductory price reset
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p className="mb-2">
                    Spectrum, Xfinity, Cox, and Optimum all show a low "new
                    customer" price for 12 months, then raise it $20–$40/mo.
                  </p>
                  <p>
                    <strong>What to do:</strong> Mark your 11-month anniversary on
                    your calendar. Call and ask for a loyalty offer — or ask to be
                    transferred to retention.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">Auto-pay discount trap</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    The $5–$10 auto-pay discount often requires a bank account
                    draft (not a credit card). That removes your dispute
                    protection. Read which payment type the discount applies to.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">
                    "Broadcast TV" and sports surcharges
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    If your internet is bundled with cable TV, look for
                    "Broadcast TV Fee" ($25+/mo) and "Regional Sports Fee" ($15+).
                    These were often missing from the advertised price.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardHeader>
                  <CardTitle className="text-lg">Early termination fees</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    If you signed a 2-year contract, ending it early can cost
                    $10–$20 per remaining month. Ask about the ETF before agreeing
                    to any promotional price.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Save money ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              Ways to Save
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Buy your own modem and router
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base space-y-2">
                  <p>One-time cost: ~$150 for a solid setup. Pays back in ~12 months.</p>
                  <p className="font-semibold">Reliable DOCSIS 3.1 picks:</p>
                  <ul className="list-disc list-inside space-y-1 text-base">
                    <li>Motorola MB8611 (cable modem, ~$150)</li>
                    <li>Arris SURFboard SB8200 (cable modem, ~$140)</li>
                    <li>TP-Link Archer AX55 (Wi-Fi 6 router, ~$100)</li>
                    <li>eero 6+ mesh (2-pack, ~$150)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground pt-2">
                    Fiber providers use their own ONT — you only replace the
                    router there.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    Negotiate your bill
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base space-y-2">
                  <p>Call your provider's retention line and try this script:</p>
                  <blockquote className="border-l-4 border-sky-400 pl-3 italic text-base">
                    "I've been a customer for [X] years. My bill went up to [$X].
                    I'm looking at [competitor name] offering [speed] for [$X].
                    Can you match that or I'll need to switch."
                  </blockquote>
                  <p>Expected result: $10–$30/mo off.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lifeline Program</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    A federal program that takes $9.25/mo off internet or phone
                    for households that qualify — including many seniors on SSI,
                    Medicaid, SNAP, or Veterans Pension.
                  </p>
                  <p className="mt-2">
                    Apply at{' '}
                    <a
                      href="https://www.lifelinesupport.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-700 hover:text-sky-900 underline"
                    >
                      lifelinesupport.org
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Senior / low-income plans</CardTitle>
                </CardHeader>
                <CardContent className="text-base space-y-2">
                  <p>
                    Several providers offer discounted plans for seniors or
                    households under an income threshold:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong>Xfinity Internet Essentials</strong> — $9.95/mo for
                      qualifying households
                    </li>
                    <li>
                      <strong>AT&T Access</strong> — $30/mo for up to 100 Mbps for
                      qualifying households
                    </li>
                    <li>
                      <strong>Spectrum Internet Assist</strong> — $24.99/mo
                    </li>
                    <li>
                      <strong>Cox Connect2Compete</strong> — $9.95/mo for families
                      with school-age children
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Bundle vs unbundle</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    TV+Internet bundles rarely save money once the Broadcast TV
                    Fee and Regional Sports Fee are added. For most households,
                    internet alone plus a cheap streaming service ($10–$20/mo)
                    costs less than a bundle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Check ACP-replacement programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    The federal Affordable Connectivity Program ended in June
                    2024, but many states and providers kept their own
                    lower-income internet programs. Check your state broadband
                    office or call 211 for local options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Rural options ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
              <Satellite className="h-6 w-6 text-sky-600" aria-hidden="true" />
              Rural and Underserved Options
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              No cable or fiber at your address? You still have options.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Starlink</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Satellite internet from SpaceX. 50–220 Mbps typical.
                    ~$120/mo plus $349–$599 for the dish. Works almost anywhere
                    with a clear view of the sky. Install it yourself.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    T-Mobile / Verizon 5G Home
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Runs over the cellular network. $50–$70/mo, no equipment fee,
                    no contract. Only works where you have a strong 5G signal —
                    check the coverage map at your exact address first.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Phone hotspot (backup)</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Your phone's mobile hotspot can work as light home internet —
                    fine for email, web, and SD video. Not a fit for 4K streaming
                    or working from home. Watch your data cap.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fixed wireless / WISPs</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Small local providers beam a signal from a tower to a small
                    dish on your roof. Typical speeds 25–100 Mbps. Ask neighbors
                    or check with your county broadband office for local names.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── Router tips ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
              <Router className="h-6 w-6 text-sky-600" aria-hidden="true" />
              Wi-Fi Router Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Where to put it</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Place the router in a central, open spot — waist-height or
                    higher, away from metal appliances, thick walls, and
                    microwaves. Closets and basements are the two worst spots.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When to replace it</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    If your router is older than 5 years, it probably predates
                    Wi-Fi 6 and can't keep up with modern devices. Replacing it
                    often feels like a speed upgrade — without touching your
                    internet plan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mesh vs single router</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    For a small apartment or a home under 1,500 sq ft, one good
                    router is plenty. For bigger homes, multi-story houses, or
                    dead spots in the back bedroom, a mesh system (eero, Google
                    Nest Wifi, TP-Link Deco) fixes coverage better than one
                    powerful router.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reboot once a month</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Unplug the modem and router, wait 30 seconds, plug them back
                    in. That quick reset clears small memory problems and often
                    restores speed without a support call.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4">
              <Link
                to="/tools/router-setup-wizard"
                className="inline-flex items-center gap-1 text-base font-medium text-sky-700 hover:text-sky-900 underline underline-offset-2"
              >
                Open the Router Setup Wizard{' '}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-sky-600" aria-hidden="true" />
              Frequently Asked
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-base md:text-lg text-left min-h-14">
                  Is gigabit internet "future proof"?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Rarely worth it for most households. Very few home devices can
                  actually use more than 500 Mbps at once — most phones, laptops,
                  and smart TVs top out at 300–500 Mbps over Wi-Fi. Gigabit is
                  marketed as "future proof," but the limit is your router, your
                  wiring, and your devices — not your plan. Unless you have
                  heavy gamers, a 4K-streaming household of 5+, or frequent large
                  uploads, 300–500 Mbps is plenty.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-base md:text-lg text-left min-h-14">
                  Why does my neighbor pay less for the same plan?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Introductory rates and the "loyalty penalty." Providers offer a
                  low price for the first 12 months to new customers, then raise
                  it. Long-term customers pay more than new ones. Call retention
                  every year, mention a competitor's price, and ask for the new-
                  customer rate back.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-base md:text-lg text-left min-h-14">
                  Can I use my phone's hotspot as home internet?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  For light use — yes. It works for email, web, and regular-
                  quality video. For 4K streaming, video calls all day, or
                  online gaming, it falls short, and most phone plans cap hotspot
                  data at 10–40 GB a month. If you truly have no other option,
                  T-Mobile Home Internet or Verizon 5G Home (designed for home
                  use) is a better fit than a phone hotspot.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-base md:text-lg text-left min-h-14">
                  Why is my internet slow even on a 1 Gbps plan?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Usually it's not the plan. The three biggest causes:
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>
                      <strong>Old router</strong> — anything older than 5 years
                      can't pass through 1 Gbps.
                    </li>
                    <li>
                      <strong>Wi-Fi vs wired</strong> — Wi-Fi usually tops out at
                      300–700 Mbps even on a gigabit plan. Plug in with an
                      Ethernet cable to see the real speed.
                    </li>
                    <li>
                      <strong>Device limitations</strong> — older laptops, tablets,
                      and phones have Wi-Fi chips that cap out at 100–300 Mbps.
                    </li>
                  </ol>
                  Run fast.com on a device plugged in with Ethernet to see what
                  your line really delivers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-base md:text-lg text-left min-h-14">
                  What's the difference between Mbps and MB?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Mbps is megabits per second — how fast your connection moves
                  data. MB is megabytes — how much data a file is. 8 megabits
                  equal 1 megabyte. A 100 Mbps connection downloads about 12 MB
                  per second. That matters less than it sounds — the "right"
                  speed is about how many things happen at once, not file size.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-base md:text-lg text-left min-h-14">
                  Do I need fiber if I can get cable?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Fiber has two real advantages: symmetrical upload (same speed
                  both directions) and no data caps. If you work from home,
                  upload photos or videos, or do lots of video calls, fiber is
                  worth paying for. For mostly-streaming households, modern cable
                  is fine.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* ── Related tools ── */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Related Money Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/tools/bill-decoder"
                className="block rounded-2xl border p-5 hover:border-sky-400 hover:shadow-sm transition-all"
              >
                <div className="font-semibold text-lg mb-1">Bill Decoder</div>
                <p className="text-base text-muted-foreground">
                  Confused by a line on your bill? Search any fee for a plain-
                  English explanation.
                </p>
              </Link>
              <Link
                to="/tools/subscription-auditor"
                className="block rounded-2xl border p-5 hover:border-sky-400 hover:shadow-sm transition-all"
              >
                <div className="font-semibold text-lg mb-1">
                  Subscription Auditor
                </div>
                <p className="text-base text-muted-foreground">
                  Find subscriptions you forgot about and see how to cancel each
                  one.
                </p>
              </Link>
              <Link
                to="/tools/phone-plan-comparison"
                className="block rounded-2xl border p-5 hover:border-sky-400 hover:shadow-sm transition-all"
              >
                <div className="font-semibold text-lg mb-1">
                  Phone Plan Comparison
                </div>
                <p className="text-base text-muted-foreground">
                  Side-by-side comparison of the major US carriers for your
                  usage.
                </p>
              </Link>
            </div>
          </section>

          {/* ── Disclosure ── */}
          <section className="mt-12">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>About these prices</AlertTitle>
              <AlertDescription>
                Prices and data caps listed are typical US figures as of 2026 and
                change often. Always confirm with the provider at your exact
                address before signing up. TekSure has no paid relationship with
                any internet provider.
              </AlertDescription>
            </Alert>
          </section>
        </div>
      </main>
    </>
  );
}
