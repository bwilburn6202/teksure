import { useState } from 'react';
import {
  GraduationCap,
  Laptop,
  Languages,
  BookOpen,
  Landmark,
  FlaskConical,
  Palette,
  ChefHat,
  HeartPulse,
  PiggyBank,
  Feather,
  ChevronLeft,
  ExternalLink,
  Lightbulb,
  Award,
  AlertTriangle,
  ShieldAlert,
  Users,
  HelpCircle,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ── Types ───────────────────────────────── */
type CategoryId =
  | 'computer-skills'
  | 'languages'
  | 'academic'
  | 'history'
  | 'science'
  | 'arts'
  | 'cooking'
  | 'wellness'
  | 'finance'
  | 'writing';

interface Resource {
  name: string;
  description: string;
  freeDetails: string;
  upsells?: string;
  url: string;
}

interface Category {
  id: CategoryId;
  emoji: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  headerBlurb: string;
  resources: Resource[];
}

/* ── Category data ───────────────────────── */
const CATEGORIES: Category[] = [
  /* ── 1. Computer Skills for Seniors ── */
  {
    id: 'computer-skills',
    emoji: '',
    icon: Laptop,
    title: 'Computer Skills for Seniors',
    tagline: 'Plain-language computer classes made for people who did not grow up with screens.',
    headerBlurb:
      'These are the gold-standard free spots for building comfort with computers, email, the internet, and phones — with pacing and vocabulary written for older adults.',
    resources: [
      {
        name: 'GCFGlobal',
        description: 'The gold standard of free, senior-friendly computer classes — over 200 tutorials on Windows, Mac, email, Zoom, Word, Excel, and more.',
        freeDetails: 'Every single tutorial is free forever. No account required. No ads.',
        url: 'https://edu.gcfglobal.org',
      },
      {
        name: 'Senior Planet OATS',
        description: 'Free live online classes and on-demand videos from AARP\'s senior-focused tech education arm.',
        freeDetails: 'All classes free. Must register (free) for live sessions. In-person classes at Senior Planet centers also free.',
        url: 'https://seniorplanet.org/classes',
      },
      {
        name: 'AARP Online Classes',
        description: 'Short, friendly video classes on everyday tech — texting, photos, video calls, scams, smart speakers.',
        freeDetails: 'Free to watch. AARP membership is $16/year but not required for most classes.',
        upsells: 'Some deeper courses are AARP-member-only.',
        url: 'https://aarp.org/home-family/personal-technology/virtual-community-center/',
      },
      {
        name: "Teacher's Tech (YouTube)",
        description: 'Hundreds of calm, step-by-step YouTube tutorials for Windows, Office, Gmail, and iPhone.',
        freeDetails: '100% free on YouTube. Captions available on every video.',
        url: 'https://www.youtube.com/@TeachersTech',
      },
      {
        name: 'Techboomers',
        description: 'Free written tutorials on 100+ popular websites and apps — Facebook, Netflix, Amazon, YouTube, Zoom.',
        freeDetails: 'Entirely free. No login required. No ads that try to install anything.',
        url: 'https://techboomers.com',
      },
      {
        name: 'Be Connected (Australia)',
        description: 'A free senior digital-literacy program that works beautifully even if you are not in Australia — clear, well-paced lessons.',
        freeDetails: 'All courses free. Free to register.',
        url: 'https://beconnected.esafety.gov.au/topic-library',
      },
    ],
  },

  /* ── 2. Languages ── */
  {
    id: 'languages',
    emoji: '',
    icon: Languages,
    title: 'Languages',
    tagline: 'Spanish, French, Italian, Mandarin, ASL — learn a new language at your kitchen table.',
    headerBlurb:
      'Research shows that learning a new language helps keep your brain sharp at any age. These sites will not pressure you into paying.',
    resources: [
      {
        name: 'Duolingo',
        description: '40+ languages with 5-minute daily lessons, a mascot owl, and a surprisingly effective streak system.',
        freeDetails: 'Fully free. Ads between lessons can be ignored. You never need to pay to complete any course.',
        upsells: '"Super Duolingo" removes ads and gives unlimited hearts — entirely optional.',
        url: 'https://www.duolingo.com',
      },
      {
        name: 'Mango Languages (via library)',
        description: '70+ languages with a focus on real conversations — free if your local library offers it (most do).',
        freeDetails: 'Free with your library card. Check your library\'s website or call the reference desk and ask for Mango.',
        url: 'https://mangolanguages.com',
      },
      {
        name: 'BBC Languages',
        description: 'Classic BBC-quality lessons in French, Spanish, Italian, German, Greek, and more. Archived but still excellent.',
        freeDetails: 'Free. No registration.',
        url: 'https://www.bbc.co.uk/languages/',
      },
      {
        name: 'Open Culture — Free Language Lessons',
        description: 'A directory of 48+ free language courses from universities and public broadcasters around the world.',
        freeDetails: 'Free curated links — Open Culture takes you straight to the source.',
        url: 'https://www.openculture.com/freelanguagelessons',
      },
      {
        name: 'Lifeprint ASL University',
        description: 'The best free American Sign Language curriculum online — used by community colleges.',
        freeDetails: 'All video lessons and coursework free.',
        url: 'https://www.lifeprint.com',
      },
      {
        name: 'SBS Learn English',
        description: 'Free short episodes made for adult English learners — useful for ESL and for anyone learning vocabulary in a second language.',
        freeDetails: 'Free podcast and text. No login.',
        url: 'https://www.sbs.com.au/learnenglish',
      },
    ],
  },

  /* ── 3. Academic ── */
  {
    id: 'academic',
    emoji: '',
    icon: GraduationCap,
    title: 'Academic Classes',
    tagline: 'Real classes from Harvard, MIT, Yale, and Stanford — yes, free.',
    headerBlurb:
      'You can audit almost any Ivy League class online without paying. Certificates usually cost money, but the full lectures, readings, and problem sets are free.',
    resources: [
      {
        name: 'Khan Academy',
        description: 'K-12 math, science, history, economics, art history, and adult topics like personal finance and investing.',
        freeDetails: '100% free. No ads. Ever. Funded by donations.',
        url: 'https://www.khanacademy.org',
      },
      {
        name: 'Coursera (audit mode)',
        description: 'Thousands of university courses from Yale, Duke, Stanford, and more.',
        freeDetails: 'Most courses can be "audited" for free — full lectures and readings. Look for the "Audit" link on the enrollment page.',
        upsells: 'The certificate and graded assignments require a paid track — skip them if you want the learning only.',
        url: 'https://www.coursera.org',
      },
      {
        name: 'edX (audit mode)',
        description: 'Harvard, MIT, Berkeley, and Microsoft courses on a wide range of topics.',
        freeDetails: 'Most courses have a free audit track with full video lectures.',
        upsells: 'Certificates and some assignments are paid.',
        url: 'https://www.edx.org',
      },
      {
        name: 'MIT OpenCourseWare',
        description: 'Over 2,500 complete MIT courses — syllabus, lecture notes, assignments, and often full video.',
        freeDetails: 'Free. No registration. No payment path at all.',
        url: 'https://ocw.mit.edu',
      },
      {
        name: 'Harvard Extension Free Lectures',
        description: 'A curated set of free Harvard courses including the famous "Justice" lectures by Michael Sandel.',
        freeDetails: 'Free to watch. No login.',
        url: 'https://www.extension.harvard.edu/inside-extension/free-harvard-courses',
      },
      {
        name: 'Yale Open Courses',
        description: 'Full lecture videos from real Yale classes — philosophy, astronomy, financial markets, Shakespeare.',
        freeDetails: 'Free. No account. Videos, transcripts, and syllabi available.',
        url: 'https://oyc.yale.edu',
      },
      {
        name: 'Stanford Online (free courses)',
        description: 'A rotating list of free online Stanford courses on AI, medicine, engineering, and humanities.',
        freeDetails: 'Some courses are free to audit — check the "free" filter.',
        url: 'https://online.stanford.edu/free-courses',
      },
    ],
  },

  /* ── 4. History & Culture ── */
  {
    id: 'history',
    emoji: '',
    icon: Landmark,
    title: 'History & Culture',
    tagline: 'Museums at your kitchen table. Documentaries for curious minds.',
    headerBlurb:
      'The Smithsonian, Library of Congress, and The Met have put incredible amounts of content online for free. Perfect for deep rainy-afternoon reading.',
    resources: [
      {
        name: 'Smithsonian Learning Lab',
        description: 'Millions of digitized artifacts, photos, and primary sources with free guided learning collections.',
        freeDetails: 'All content free. Free (optional) account to save collections.',
        url: 'https://learninglab.si.edu',
      },
      {
        name: 'Library of Congress',
        description: 'Historical newspapers, photographs, veterans\' oral histories, maps, and family-history research tools.',
        freeDetails: 'Free. No login.',
        url: 'https://www.loc.gov',
      },
      {
        name: 'Google Arts & Culture',
        description: 'Virtual tours of thousands of museums, zoomable artworks, and themed stories on art, science, and history.',
        freeDetails: 'Free on the web and as a free app. No login required.',
        url: 'https://artsandculture.google.com',
      },
      {
        name: 'The Met 360° Tours',
        description: 'Walk through the Metropolitan Museum of Art\'s galleries in immersive 360° video.',
        freeDetails: 'Free on The Met\'s website and YouTube.',
        url: 'https://www.metmuseum.org/art/online-features/met-360-project',
      },
      {
        name: 'BBC iPlayer (where available)',
        description: 'Hundreds of BBC documentaries on history, nature, and science.',
        freeDetails: 'Free in the UK. Archived content from the BBC is widely available on YouTube for free elsewhere.',
        url: 'https://www.bbc.co.uk/iplayer/categories/documentaries',
      },
      {
        name: 'PBS American Experience',
        description: 'The best American history documentary series ever made — full episodes online.',
        freeDetails: 'Most full episodes are free to stream on PBS.org.',
        upsells: 'PBS Passport (donation-based membership) unlocks the full archive.',
        url: 'https://www.pbs.org/wgbh/americanexperience',
      },
      {
        name: 'HistoryHit (select content)',
        description: 'Short, engaging video-history explainers on YouTube from historian Dan Snow.',
        freeDetails: 'YouTube channel is free; there is a paid streaming service you do not need.',
        url: 'https://www.youtube.com/@HistoryHit',
      },
    ],
  },

  /* ── 5. Science & Nature ── */
  {
    id: 'science',
    emoji: '',
    icon: FlaskConical,
    title: 'Science & Nature',
    tagline: 'NASA, National Geographic, Cornell bird experts — free.',
    headerBlurb:
      'The same resources used by elementary classrooms and citizen scientists. Nature identification apps have become remarkably good.',
    resources: [
      {
        name: 'Khan Academy — Science',
        description: 'Biology, chemistry, physics, Earth science — with practice problems.',
        freeDetails: 'Free. No ads.',
        url: 'https://www.khanacademy.org/science',
      },
      {
        name: 'NASA+',
        description: 'NASA\'s free streaming service with documentaries, live mission coverage, and archive footage.',
        freeDetails: 'Entirely free. No ads. No login required.',
        url: 'https://plus.nasa.gov',
      },
      {
        name: 'Cornell Lab Bird Academy (free courses)',
        description: 'Cornell\'s ornithology lab offers a rotating set of free mini-courses on birdsong, feeders, and identification.',
        freeDetails: 'Multiple courses are free. Check the "free" filter.',
        upsells: 'Longer certificate courses range from $20 to $300 — not required for casual birding.',
        url: 'https://academy.allaboutbirds.org',
      },
      {
        name: 'Merlin Bird ID',
        description: 'Free app from Cornell that identifies birds by song, photo, or five quick questions. Remarkable.',
        freeDetails: '100% free. No ads. Works offline once regional packs are downloaded.',
        url: 'https://merlin.allaboutbirds.org',
      },
      {
        name: 'iNaturalist & Seek',
        description: 'Point your phone at a plant, bug, or animal and get an identification backed by a community of naturalists.',
        freeDetails: 'Free. No ads. Seek is designed for kids and families, iNaturalist for adults.',
        url: 'https://www.inaturalist.org',
      },
      {
        name: 'National Geographic Explore',
        description: 'Free articles, videos, and interactive maps on nature, geography, and exploration.',
        freeDetails: 'Most articles free. Some feature stories require a free account.',
        upsells: 'Print magazine and premium digital are paid.',
        url: 'https://www.nationalgeographic.com',
      },
      {
        name: 'PBS Nova & Nature',
        description: 'Two of the best science documentary series in the world — full episodes online.',
        freeDetails: 'Most episodes free on PBS.org.',
        url: 'https://www.pbs.org/wgbh/nova',
      },
    ],
  },

  /* ── 6. Arts & Music ── */
  {
    id: 'arts',
    emoji: '',
    icon: Palette,
    title: 'Arts & Music',
    tagline: 'Watercolor, piano, drawing, sheet music, masterpieces — all free.',
    headerBlurb:
      'Whether you want to learn to draw, play piano, or walk through MoMA from your couch, these resources will get you there without a subscription.',
    resources: [
      {
        name: 'MoMA Learning',
        description: 'The Museum of Modern Art\'s free online art education portal — lessons on 20th-century art, photography, and design.',
        freeDetails: 'Free. No login.',
        url: 'https://www.moma.org/learn',
      },
      {
        name: 'Tate Online',
        description: 'Free articles, interviews, and virtual gallery tours from the Tate in London.',
        freeDetails: 'Free.',
        url: 'https://www.tate.org.uk/art',
      },
      {
        name: 'Hoopla & Kanopy (via library)',
        description: 'Two free streaming services — available with a library card — that include The Great Courses Plus and thousands of art films.',
        freeDetails: 'Free with library card. Check your library\'s website for access.',
        url: 'https://www.hoopladigital.com',
      },
      {
        name: 'Draw With Jazza / Proko / Circle Line Art (YouTube)',
        description: 'Three of the most respected free art-instruction YouTube channels — drawing, anatomy, perspective, watercolor.',
        freeDetails: 'Free on YouTube. Captions available.',
        upsells: 'They offer paid courses you do not need to buy to learn the basics.',
        url: 'https://www.youtube.com/@Proko',
      },
      {
        name: 'Open Culture — Free Art & Film',
        description: 'Curated links to free art courses, film classes, and cultural content from universities.',
        freeDetails: 'Free curated directory.',
        url: 'https://www.openculture.com/freeonlinecourses',
      },
      {
        name: 'IMSLP (International Music Score Library Project)',
        description: 'Free, legal public-domain sheet music — over 700,000 scores from Bach to Joplin.',
        freeDetails: 'Free. Download PDFs directly.',
        url: 'https://imslp.org',
      },
      {
        name: 'Pianote / Justin Guitar (free portions)',
        description: 'Two of the best beginner music-instruction sites — both have a full free beginner track.',
        freeDetails: 'Justin Guitar has a free complete beginner course. Pianote has a free sample track.',
        upsells: 'Both offer paid memberships you do not need to start.',
        url: 'https://www.justinguitar.com',
      },
    ],
  },

  /* ── 7. Cooking ── */
  {
    id: 'cooking',
    emoji: '',
    icon: ChefHat,
    title: 'Cooking',
    tagline: 'Technique, recipes, and kitchen science — from the people who wrote the books.',
    headerBlurb:
      'Most top cooking content is free on YouTube or on trusted recipe sites. Watch a few before you consider paying for a cooking class.',
    resources: [
      {
        name: "America's Test Kitchen (free portions)",
        description: 'America\'s Test Kitchen posts many full episodes and articles on YouTube and their free website.',
        freeDetails: 'Free YouTube channel and ATK Kids site. Weekly free recipes on the main site.',
        upsells: 'Full paid membership gives the magazine archive — not required to cook well.',
        url: 'https://www.youtube.com/@AmericasTestKitchen',
      },
      {
        name: 'YouTube Chef Channels',
        description: 'Kenji López-Alt, Adam Ragusea, Ethan Chlebowski, Helen Rennie, Cook\'s Country — clear, rigorous technique.',
        freeDetails: 'All free on YouTube. Captions available.',
        url: 'https://www.youtube.com/@JKenjiLopezAlt',
      },
      {
        name: 'AllRecipes',
        description: 'The largest community recipe site — good for finding real-world variations and reviews.',
        freeDetails: 'Free. Ad-supported. No login required for most recipes.',
        url: 'https://www.allrecipes.com',
      },
      {
        name: 'BBC Good Food',
        description: 'Rigorously tested recipes with clear step-by-step instructions — UK measurements but easy to convert.',
        freeDetails: 'Free. Ad-supported.',
        url: 'https://www.bbcgoodfood.com',
      },
      {
        name: 'Serious Eats',
        description: 'The best food-science writing on the web — why recipes work, not only how.',
        freeDetails: 'Free. Ad-supported. Full archive searchable.',
        url: 'https://www.seriouseats.com',
      },
      {
        name: 'NYT Cooking (via library)',
        description: 'The New York Times cooking site, free through many library systems.',
        freeDetails: 'Free with many library cards — check your library\'s digital resources.',
        upsells: 'Direct subscription is paid — use the library instead.',
        url: 'https://cooking.nytimes.com',
      },
    ],
  },

  /* ── 8. Wellness & Yoga ── */
  {
    id: 'wellness',
    emoji: '',
    icon: HeartPulse,
    title: 'Wellness & Yoga',
    tagline: 'Gentle yoga, chair workouts, balance, stretching, meditation — made for senior bodies.',
    headerBlurb:
      'Always check with your doctor before starting a new exercise program. These are the most-trusted free resources for gentle, senior-safe movement.',
    resources: [
      {
        name: 'Yoga With Adriene',
        description: 'The most popular free yoga teacher on the internet, with hundreds of classes from 10 minutes to an hour — many for beginners and for seniors.',
        freeDetails: '100% free on YouTube. No ads interrupt videos.',
        upsells: 'Her paid membership site is optional — the free YouTube library is enormous.',
        url: 'https://www.youtube.com/@yogawithadriene',
      },
      {
        name: 'SilverSneakers',
        description: 'A free fitness program included with many Medicare Advantage plans — gym access, online classes, and videos.',
        freeDetails: 'Free if your Medicare plan includes it. Check at silversneakers.com with your Medicare info.',
        url: 'https://www.silversneakers.com',
      },
      {
        name: 'HASfit Senior Workouts',
        description: 'Hundreds of free senior-specific workout videos — chair workouts, balance, strength.',
        freeDetails: 'All videos free on YouTube.',
        url: 'https://www.youtube.com/@HASfit',
      },
      {
        name: 'Go4Life (NIH)',
        description: 'The National Institute on Aging\'s free exercise program for adults 50+ — with a printable workbook.',
        freeDetails: 'Free. Funded by the NIH.',
        url: 'https://www.nia.nih.gov/health/exercise-physical-activity',
      },
      {
        name: 'National Council on Aging — Healthy Aging',
        description: 'Free articles on exercise, nutrition, chronic conditions, and mental health for older adults.',
        freeDetails: 'Free.',
        url: 'https://www.ncoa.org/older-adults/health',
      },
      {
        name: 'Insight Timer',
        description: 'A free meditation app with thousands of free guided meditations, sleep stories, and gentle music.',
        freeDetails: 'Massive free library. Paid tier is optional.',
        upsells: 'Premium tier unlocks courses but the free tier alone is enormous.',
        url: 'https://insighttimer.com',
      },
    ],
  },

  /* ── 9. Finance & Retirement ── */
  {
    id: 'finance',
    emoji: '',
    icon: PiggyBank,
    title: 'Finance & Retirement',
    tagline: 'Retirement, Social Security, taxes, scams, investing — all without a sales pitch.',
    headerBlurb:
      'Government and nonprofit sources are the most trustworthy place to start — they are not trying to sell you anything.',
    resources: [
      {
        name: 'AARP Money Basics',
        description: 'Retirement planning, Social Security timing, scams, taxes, and Medicare — written for people 50+.',
        freeDetails: 'Free to read. Free AARP newsletter available.',
        url: 'https://www.aarp.org/money',
      },
      {
        name: 'Investor.gov (SEC)',
        description: 'The U.S. Securities and Exchange Commission\'s official site for retail investors — calculators, tutorials, fraud alerts.',
        freeDetails: 'Free. Government resource, no sales pitch.',
        url: 'https://www.investor.gov',
      },
      {
        name: 'Consumer.FTC.gov',
        description: 'The FTC\'s plain-language consumer site — money, identity theft, scams, housing, and more.',
        freeDetails: 'Free. Federal government resource.',
        url: 'https://consumer.ftc.gov/money-credit',
      },
      {
        name: 'Next Avenue',
        description: 'PBS-affiliated publication for adults 50+ — money, work, caregiving, health, and lifestyle articles.',
        freeDetails: 'Free. Supported by PBS and foundations.',
        url: 'https://www.nextavenue.org',
      },
      {
        name: 'U.S. Financial Literacy Commission (MyMoney.gov)',
        description: 'Plain-language financial education from 20+ federal agencies all in one place.',
        freeDetails: 'Free. Government resource.',
        url: 'https://www.mymoney.gov',
      },
      {
        name: 'SSA.gov Retirement Planner',
        description: 'The official Social Security Administration tools — estimate benefits, plan timing, and read clear explanations.',
        freeDetails: 'Free. Government resource.',
        url: 'https://www.ssa.gov/benefits/retirement',
      },
      {
        name: 'Khan Academy — Personal Finance',
        description: 'Short lessons on budgeting, credit, investing, taxes, and retirement.',
        freeDetails: 'Free. No ads.',
        url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
      },
    ],
  },

  /* ── 10. Creative Writing ── */
  {
    id: 'writing',
    emoji: '',
    icon: Feather,
    title: 'Creative Writing',
    tagline: 'Memoirs, essays, poetry, fiction — and a lifetime of free reading.',
    headerBlurb:
      'Writing is one of the best activities for keeping your mind sharp. These resources will help whether you are writing a memoir for your grandkids or starting your first novel.',
    resources: [
      {
        name: 'Coursera Writing Courses (audit)',
        description: 'Wesleyan\'s Creative Writing Specialization, Stanford\'s Writer\'s Toolkit, and more — all auditable free.',
        freeDetails: 'Audit mode gives you the full lectures free. Look for the "Audit" link.',
        upsells: 'Certificate is paid but the course content is free.',
        url: 'https://www.coursera.org/browse/arts-and-humanities/music-and-art',
      },
      {
        name: 'OpenLearn — The Open University',
        description: 'Free writing courses from the UK\'s Open University — fiction, poetry, memoir.',
        freeDetails: 'Free. Optional free account to track progress.',
        url: 'https://www.open.edu/openlearn/history-the-arts/creative-writing',
      },
      {
        name: 'Project Gutenberg',
        description: '70,000+ free classic books — all legally in the public domain. The best reading inspiration a writer can have.',
        freeDetails: 'Completely free. Download or read online in any format.',
        url: 'https://www.gutenberg.org',
      },
      {
        name: 'Creativebug (via library)',
        description: 'Video classes on memoir writing, journaling, poetry, and hand-lettering — free with many library cards.',
        freeDetails: 'Free with a participating library card.',
        upsells: 'Direct subscription is paid — use the library.',
        url: 'https://www.creativebug.com',
      },
      {
        name: 'Reedsy Learning',
        description: 'Free 10-day email courses on writing, editing, and self-publishing from working editors.',
        freeDetails: 'Free. Email-based.',
        url: 'https://reedsy.com/learning',
      },
      {
        name: 'Poetry Foundation',
        description: 'Thousands of free poems, articles, and learning resources — perfect for studying the craft.',
        freeDetails: 'Free. No login.',
        url: 'https://www.poetryfoundation.org',
      },
      {
        name: 'StoryCorps',
        description: 'The national oral-history project — free prompts and recording tools for capturing family stories.',
        freeDetails: 'Free recording and archiving through the StoryCorps app.',
        url: 'https://storycorps.org',
      },
    ],
  },
];

/* ── Main component ──────────────────────── */
export default function FreeLearningHub() {
  const [selectedId, setSelectedId] = useState<CategoryId | null>(null);

  const selected = selectedId ? CATEGORIES.find(c => c.id === selectedId) ?? null : null;

  function handleSelect(id: CategoryId) {
    setSelectedId(id);
    setTimeout(() => {
      const el = document.getElementById('free-learning-detail');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function handleReset() {
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SEOHead
        title="Free Learning Hub — Learn Anything, Free | TekSure"
        description="Senior-friendly directory of 100% free online learning — languages, history, computer skills, cooking, wellness, art, finance, and more. Real classes from real universities at no cost."
        path="/tools/free-learning-hub"
      />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-3xl mx-auto">
        {/* ── Hero ── */}
        <div className="relative text-center mb-10">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="free-learning-hub"
              title="Free Learning Hub"
              url="/tools/free-learning-hub"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-200 via-violet-100 to-fuchsia-100 text-violet-700 dark:from-violet-900/60 dark:via-violet-950/40 dark:to-fuchsia-950/40 dark:text-violet-300 mb-5 shadow-sm">
            <GraduationCap className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-300 dark:via-violet-400 dark:to-fuchsia-400">
            Learn Anything, Free
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
            Real classes from real universities and senior-focused educators — at your own pace, at no cost.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mt-3">
            Pick a topic below and we will hand you the best free spots on the internet for it — with what is truly free and what is a sales pitch.
          </p>
        </div>

        {/* ── Category picker ── */}
        {!selected && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-violet-600 dark:text-violet-400" aria-hidden="true" />
              What do you want to learn?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect(cat.id)}
                    className="group text-left w-full rounded-2xl border-2 border-border bg-card hover:border-violet-400 hover:bg-violet-50/50 dark:hover:border-violet-600 dark:hover:bg-violet-950/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all p-5 min-h-[7rem]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 text-3xl leading-none" aria-hidden="true">
                        {cat.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                          <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400 shrink-0" aria-hidden="true" />
                          {cat.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── Senior learning tips ── */}
            <Card className="mt-8 border-2 border-violet-300 bg-violet-50 dark:bg-violet-950/30 dark:border-violet-800">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-violet-900 dark:text-violet-200">
                  <Lightbulb className="h-6 w-6" aria-hidden="true" />
                  Tips for learning well at any age
                </h3>
                <ul className="space-y-3 text-base text-violet-900 dark:text-violet-100">
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Take a break every 25 minutes.</strong> A quick walk or stretch helps your brain hold on to what you learned.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong>Make the text bigger.</strong> If reading on a screen is a strain, our{' '}
                      <Link to="/tools/low-vision-tech-hub" className="font-semibold underline">Low Vision Tech Hub</Link>
                      {' '}shows you how to enlarge text on any device.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Turn on captions for everything.</strong> Even if your hearing is fine, captions help you catch names and technical words.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Learn with someone.</strong> A friend, a neighbor, or a grandchild. Shared learning sticks better — and it is more fun.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Do not worry about certificates.</strong> Learning is the point. You do not need a piece of paper to prove you know something.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-violet-700 dark:text-violet-300 shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Set a realistic schedule.</strong> 15 minutes a day beats 2 hours once a week. Consistency wins every time.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ── Detail view ── */}
        {selected && (
          <div id="free-learning-detail">
            {/* Back button */}
            <Button
              variant="ghost"
              size="lg"
              onClick={handleReset}
              className="mb-4 gap-2 text-base min-h-14"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              Back to all topics
            </Button>

            {/* Detail header */}
            <Card className="mb-6 border-2 border-violet-300 bg-violet-50/70 dark:border-violet-800 dark:bg-violet-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-5xl leading-none" aria-hidden="true">
                    {selected.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-violet-900 dark:text-violet-200">
                      {selected.title}
                    </h2>
                    <p className="text-base text-violet-900/90 dark:text-violet-100/90 mb-2 font-medium">
                      {selected.tagline}
                    </p>
                    <p className="text-base text-violet-900/80 dark:text-violet-100/80 leading-relaxed">
                      {selected.headerBlurb}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource cards */}
            <div className="space-y-4 mb-6">
              {selected.resources.map((r, i) => (
                <Card key={i} className="border-2">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <h3 className="text-xl font-bold">{r.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 border-green-300 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800 text-xs font-semibold"
                      >
                        Free
                      </Badge>
                    </div>
                    <p className="text-base text-foreground leading-relaxed mb-3">
                      {r.description}
                    </p>
                    <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-3 mb-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-green-900 dark:text-green-200 mb-0.5">What is genuinely free</p>
                          <p className="text-sm text-green-900/90 dark:text-green-100/90 leading-relaxed">{r.freeDetails}</p>
                        </div>
                      </div>
                    </div>
                    {r.upsells && (
                      <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-3 mb-3">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-amber-900 dark:text-amber-200 mb-0.5">What costs money (skip if you want)</p>
                            <p className="text-sm text-amber-900/90 dark:text-amber-100/90 leading-relaxed">{r.upsells}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-base font-semibold text-violet-700 hover:text-violet-900 dark:text-violet-400 dark:hover:text-violet-300 hover:underline"
                    >
                      Visit {r.name}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action row */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={handleReset} className="gap-2 min-h-14 text-base">
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
                Explore another topic
              </Button>
            </div>
          </div>
        )}

        {/* ── Certificate vs. auditing ── */}
        <Card className="mt-8 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Award className="h-6 w-6 text-violet-600 dark:text-violet-400" aria-hidden="true" />
              Certificate vs. auditing — what you actually need
            </h3>
            <p className="text-base text-foreground mb-3 leading-relaxed">
              Many online courses charge for the certificate but give away the course itself. Here is the plain-English version:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 p-4">
                <h4 className="font-bold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  Auditing (free)
                </h4>
                <ul className="space-y-2 text-sm text-green-900/90 dark:text-green-100/90">
                  <li>Watch all the lectures</li>
                  <li>Read all the readings</li>
                  <li>Follow along at your own pace</li>
                  <li>No pressure, no deadlines</li>
                  <li>This is what most people want</li>
                </ul>
              </div>
              <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 p-4">
                <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  Paid certificate track
                </h4>
                <ul className="space-y-2 text-sm text-amber-900/90 dark:text-amber-100/90">
                  <li>Includes graded assignments and quizzes</li>
                  <li>A piece of paper with the school name</li>
                  <li>$50 to $300 per course on average</li>
                  <li>Only worth it for career purposes</li>
                  <li>Skip it if you are learning for fun</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Real free vs. freemium traps ── */}
        <Card className="mt-6 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-amber-900 dark:text-amber-200">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
              Real free vs. "freemium traps"
            </h3>
            <p className="text-base text-amber-900/90 dark:text-amber-100/90 mb-4 leading-relaxed">
              Some sites call themselves "free" but make it hard to use without paying. A quick cheat sheet:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-amber-900 dark:text-amber-100">
                  <strong>Duolingo:</strong> free works. Ads can be ignored, and you never need to pay to finish a course.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-amber-900 dark:text-amber-100">
                  <strong>LinkedIn Learning:</strong> free through most public libraries. Check with yours before paying.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-amber-900 dark:text-amber-100">
                  <strong>MasterClass:</strong> not free. Do not fall for "90% off" ads — it is still $10/month for a year.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-amber-900 dark:text-amber-100">
                  <strong>Skillshare:</strong> 30-day "free trial" that auto-bills. Set a calendar reminder if you try it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-amber-900 dark:text-amber-100">
                  <strong>Rosetta Stone:</strong> rarely worth buying anymore. Use Mango Languages free through your library instead.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Grandparent + grandkid bonding ── */}
        <Card className="mt-6 border-2 border-rose-300 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-800">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-rose-900 dark:text-rose-200">
              <Users className="h-6 w-6" aria-hidden="true" />
              Learn together — grandparent and grandkid pairs
            </h3>
            <p className="text-base text-rose-900/90 dark:text-rose-100/90 mb-3 leading-relaxed">
              One of the best gifts you can give a grandchild (and yourself) is learning something new together. A few ideas:
            </p>
            <ul className="space-y-2 text-base text-rose-900 dark:text-rose-100">
              <li><strong>Language streaks on Duolingo.</strong> Kids love the competition — and you will practice more than you would alone.</li>
              <li><strong>A watercolor or drawing class on YouTube.</strong> Set aside a Saturday morning a few times a month.</li>
              <li><strong>A science topic on Khan Academy.</strong> Homework help for them, curiosity for you.</li>
              <li><strong>Bird ID with Merlin.</strong> Walk the yard or a park and identify every bird together.</li>
              <li><strong>StoryCorps.</strong> Have the grandchild interview you about your life, then save the recording forever.</li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Staying safe ── */}
        <Card className="mt-6 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <ShieldAlert className="h-6 w-6 text-primary" aria-hidden="true" />
              Is any of this a scam?
            </h3>
            <p className="text-base text-foreground mb-3 leading-relaxed">
              Legitimate free learning sites like the ones above are not scams. But watch out for two traps:
            </p>
            <ul className="space-y-2 text-base text-foreground mb-3">
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Fake "online university" sites</strong> that charge hundreds of dollars for a worthless diploma. Always check accreditation at CHEA.org or the U.S. Department of Education.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>"Free trial" traps</strong> that auto-bill after 7 or 30 days. Never give a credit card for a "free" class without a calendar reminder to cancel.</span>
              </li>
            </ul>
            <p className="text-base text-muted-foreground">
              Not sure whether a site is legitimate? Run it through{' '}
              <Link to="/tools/is-this-real" className="font-semibold text-primary underline">Is This Real?</Link>
              {' '}first.
            </p>
          </CardContent>
        </Card>

        {/* ── FAQ ── */}
        <Card className="mt-6 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-violet-600 dark:text-violet-400" aria-hidden="true" />
              Common questions
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-lg mb-1">Is there a real diploma track on these sites?</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Some, yes. Coursera and edX offer paid certificates from real universities that employers recognize. If you want a credential for work, these are legitimate. But if you are learning for your own enjoyment or to keep your mind active, you do not need a diploma — the content is the point.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Will I get stupider if I stop learning new things?</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  No — but actively learning new things genuinely helps protect cognition as you age. A large body of research (including from the National Institute on Aging) links regular learning, reading, and social connection to slower cognitive decline. Picking up a new language, instrument, or skill is one of the better things you can do for your brain at any age.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">What if I have memory issues — can I still learn?</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Absolutely. Adjust expectations — shorter sessions (10–15 minutes), more repetition, and written notes help a lot. Focus on enjoyment over retention. Learning that brings you joy has real benefits even if you do not remember every detail. Caregivers and adults with early-stage memory loss often enjoy Yoga With Adriene, birding apps, art tutorials, and memoir writing the most.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">How do I stay motivated over time?</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Three things that work for most people: pick something you actually care about (not what you think you "should" learn), do a little every day instead of long sessions once a week, and tell someone about it — a friend, a family member, or a small online community. Accountability beats willpower.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Do I need a fast internet connection for these?</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Most sites work fine on any home internet. Video classes use more data than text-based sites. If your connection is slow, drop the video quality to 480p in YouTube settings — it will still look great on a laptop or phone screen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Related tools ── */}
        <Card className="mt-6 border-2">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-violet-600 dark:text-violet-400" aria-hidden="true" />
              Related on TekSure
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tools/free-resource-hub" className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
                  Free Resource Hub
                </Link>
                <p className="text-sm text-muted-foreground">Free tech programs, devices, and internet for seniors and low-income households.</p>
              </li>
              <li>
                <Link to="/tools/library-tech-helper" className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
                  Library Tech Helper
                </Link>
                <p className="text-sm text-muted-foreground">Everything a library card gets you — free streaming, audiobooks, classes, newspapers.</p>
              </li>
              <li>
                <Link to="/tools/low-vision-tech-hub" className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
                  Low Vision Tech Hub
                </Link>
                <p className="text-sm text-muted-foreground">Make any device easier on your eyes — bigger text, better contrast, screen readers.</p>
              </li>
              <li>
                <Link to="/guides?category=education" className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
                  Education guides
                </Link>
                <p className="text-sm text-muted-foreground">Step-by-step TekSure guides for learning online.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Golden rule ── */}
        <Card className="mt-6 border-2 border-violet-300 bg-violet-50 dark:bg-violet-950/30 dark:border-violet-800">
          <CardContent className="p-5 flex gap-3">
            <Sparkles className="h-6 w-6 text-violet-700 dark:text-violet-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-violet-900 dark:text-violet-200 mb-1">Keep learning</p>
              <p className="text-base text-violet-900/90 dark:text-violet-100/90 leading-relaxed">
                Every one of the resources here is real, free, and written or recorded by people who want you to learn. Start with 15 minutes today. Come back tomorrow. The internet has more free knowledge than any human could finish in a lifetime — enjoy it.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
