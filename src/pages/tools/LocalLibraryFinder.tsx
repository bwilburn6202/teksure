import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Library,
  MapPin,
  Search,
  Building2,
  BookOpen,
  Disc,
  Newspaper,
  Film,
  Laptop,
  Printer,
  FileSignature,
  Calculator,
  GraduationCap,
  Ticket,
  Users,
  Database,
  Wrench,
  Sprout,
  BookMarked,
  Home,
  HandHeart,
  Truck,
  Globe,
  Briefcase,
  Flag,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  HelpCircle,
  ExternalLink,
  PiggyBank,
  Heart,
  Mail,
  DollarSign,
  Star,
  type LucideIcon,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
 * Local Library Finder
 * ─────────────────────────────────────────────────────────────
 * Helps users find their nearest public library and understand
 * the full menu of services their library card unlocks.
 * Plain-language, senior-friendly, no jargon.
 * ───────────────────────────────────────────────────────────── */

/* ── State directory data ───────────────────────────────────── */
interface StateLib {
  code: string;
  name: string;
  url: string;
}

const STATE_LIBS: StateLib[] = [
  { code: 'AL', name: 'Alabama', url: 'https://aplsonline.gov' },
  { code: 'AK', name: 'Alaska', url: 'https://library.alaska.gov' },
  { code: 'AZ', name: 'Arizona', url: 'https://azlibrary.gov' },
  { code: 'AR', name: 'Arkansas', url: 'https://library.arkansas.gov' },
  { code: 'CA', name: 'California', url: 'https://www.library.ca.gov' },
  { code: 'CO', name: 'Colorado', url: 'https://www.cde.state.co.us/cdelib' },
  { code: 'CT', name: 'Connecticut', url: 'https://libguides.ctstatelibrary.org' },
  { code: 'DE', name: 'Delaware', url: 'https://libraries.delaware.gov' },
  { code: 'DC', name: 'District of Columbia', url: 'https://www.dclibrary.org' },
  { code: 'FL', name: 'Florida', url: 'https://dos.fl.gov/library-archives/' },
  { code: 'GA', name: 'Georgia', url: 'https://georgialibraries.org' },
  { code: 'HI', name: 'Hawaii', url: 'https://librarieshawaii.org' },
  { code: 'ID', name: 'Idaho', url: 'https://libraries.idaho.gov' },
  { code: 'IL', name: 'Illinois', url: 'https://www.ilsos.gov/departments/library/home.html' },
  { code: 'IN', name: 'Indiana', url: 'https://www.in.gov/library/' },
  { code: 'IA', name: 'Iowa', url: 'https://www.statelibraryofiowa.gov' },
  { code: 'KS', name: 'Kansas', url: 'https://kslib.info' },
  { code: 'KY', name: 'Kentucky', url: 'https://kdla.ky.gov' },
  { code: 'LA', name: 'Louisiana', url: 'https://www.state.lib.la.us' },
  { code: 'ME', name: 'Maine', url: 'https://www.maine.gov/msl/' },
  { code: 'MD', name: 'Maryland', url: 'https://www.marylandlibraries.org' },
  { code: 'MA', name: 'Massachusetts', url: 'https://mblc.state.ma.us' },
  { code: 'MI', name: 'Michigan', url: 'https://www.michigan.gov/libraryofmichigan' },
  { code: 'MN', name: 'Minnesota', url: 'https://education.mn.gov/MDE/dse/lib/' },
  { code: 'MS', name: 'Mississippi', url: 'https://www.mlc.lib.ms.us' },
  { code: 'MO', name: 'Missouri', url: 'https://www.sos.mo.gov/library' },
  { code: 'MT', name: 'Montana', url: 'https://msl.mt.gov' },
  { code: 'NE', name: 'Nebraska', url: 'https://nlc.nebraska.gov' },
  { code: 'NV', name: 'Nevada', url: 'https://nsla.nv.gov' },
  { code: 'NH', name: 'New Hampshire', url: 'https://www.nh.gov/nhsl/' },
  { code: 'NJ', name: 'New Jersey', url: 'https://www.njstatelib.org' },
  { code: 'NM', name: 'New Mexico', url: 'https://nmstatelibrary.org' },
  { code: 'NY', name: 'New York', url: 'https://www.nysl.nysed.gov' },
  { code: 'NC', name: 'North Carolina', url: 'https://statelibrary.ncdcr.gov' },
  { code: 'ND', name: 'North Dakota', url: 'https://www.library.nd.gov' },
  { code: 'OH', name: 'Ohio', url: 'https://library.ohio.gov' },
  { code: 'OK', name: 'Oklahoma', url: 'https://libraries.ok.gov' },
  { code: 'OR', name: 'Oregon', url: 'https://libguides.osl.state.or.us' },
  { code: 'PA', name: 'Pennsylvania', url: 'https://www.pa.gov/agencies/education/programs-and-services/libraries.html' },
  { code: 'RI', name: 'Rhode Island', url: 'https://olis.ri.gov' },
  { code: 'SC', name: 'South Carolina', url: 'https://statelibrary.sc.gov' },
  { code: 'SD', name: 'South Dakota', url: 'https://library.sd.gov' },
  { code: 'TN', name: 'Tennessee', url: 'https://sos.tn.gov/tsla' },
  { code: 'TX', name: 'Texas', url: 'https://www.tsl.texas.gov' },
  { code: 'UT', name: 'Utah', url: 'https://library.utah.gov' },
  { code: 'VT', name: 'Vermont', url: 'https://libraries.vermont.gov' },
  { code: 'VA', name: 'Virginia', url: 'https://www.lva.virginia.gov' },
  { code: 'WA', name: 'Washington', url: 'https://www.sos.wa.gov/library' },
  { code: 'WV', name: 'West Virginia', url: 'https://librarycommission.wv.gov' },
  { code: 'WI', name: 'Wisconsin', url: 'https://dpi.wi.gov/pld' },
  { code: 'WY', name: 'Wyoming', url: 'https://library.wyo.gov' },
];

/* ── Major library systems ──────────────────────────────────── */
interface MajorLib {
  name: string;
  city: string;
  cardUrl: string;
  highlight: string;
}

const MAJOR_LIBS: MajorLib[] = [
  { name: 'New York Public Library (NYPL)', city: 'New York, NY', cardUrl: 'https://www.nypl.org/library-card', highlight: 'Anyone living, working, or studying in NY State can get a card. Huge ebook and research collection.' },
  { name: 'LA County Library', city: 'Los Angeles County, CA', cardUrl: 'https://lacountylibrary.org/library-cards/', highlight: '85+ branches. Kanopy, Libby, Hoopla, plus free museum passes through Discover & Go.' },
  { name: 'Chicago Public Library', city: 'Chicago, IL', cardUrl: 'https://chipublib.org/get-a-library-card/', highlight: 'Free for anyone living in Illinois. Maker spaces, teacher-in-the-library, and a Library of Things.' },
  { name: 'Houston Public Library', city: 'Houston, TX', cardUrl: 'https://houstonlibrary.org/borrow-renew/get-a-card', highlight: 'MyLink cards available to non-residents. Strong ESL and citizenship programs.' },
  { name: 'Seattle Public Library', city: 'Seattle, WA', cardUrl: 'https://www.spl.org/library-collection/get-a-library-card', highlight: 'One of the largest Libby catalogs in the country. Free peak time passes.' },
  { name: 'Boston Public Library', city: 'Boston, MA', cardUrl: 'https://www.bpl.org/library-cards/', highlight: "America's first public library. Cards free to anyone in Massachusetts." },
  { name: 'DC Public Library', city: 'Washington, DC', cardUrl: 'https://www.dclibrary.org/libcards', highlight: 'Free to tourists with a DC address on file. Excellent research databases.' },
  { name: 'Miami-Dade Public Library', city: 'Miami, FL', cardUrl: 'https://www.mdpls.org/services/get-a-card/', highlight: '50+ branches across the county. Strong Spanish-language collection.' },
  { name: 'San Francisco Public Library', city: 'San Francisco, CA', cardUrl: 'https://sfpl.org/services/library-cards', highlight: 'Iconic main branch. 280+ databases, Kanopy, and a legendary LGBTQ+ history archive.' },
  { name: 'Free Library of Philadelphia', city: 'Philadelphia, PA', cardUrl: 'https://www.freelibrary.org/using-the-library/library-cards', highlight: 'One of the largest genealogy collections in the US. Free culinary literacy events.' },
  { name: 'Brooklyn Public Library', city: 'Brooklyn, NY', cardUrl: 'https://www.bklynlibrary.org/cards', highlight: 'Offers Books Unbanned cards — free digital access nationwide for ages 13–21.' },
  { name: 'Queens Public Library', city: 'Queens, NY', cardUrl: 'https://www.queenslib.org/accounts/newcard', highlight: 'Classes in 20+ languages. Dedicated older adult services.' },
  { name: 'Denver Public Library', city: 'Denver, CO', cardUrl: 'https://www.denverlibrary.org/card', highlight: 'Free ideaLAB maker space, plus the Western History & Genealogy archives.' },
  { name: 'Phoenix Public Library', city: 'Phoenix, AZ', cardUrl: 'https://www.phoenixpubliclibrary.org/library-card', highlight: 'Career Online High School program lets adults earn a real diploma, free.' },
  { name: 'Dallas Public Library', city: 'Dallas, TX', cardUrl: 'https://dallaslibrary2.org/card', highlight: '30 branches. Free passport services at select branches.' },
  { name: 'San Diego Public Library', city: 'San Diego, CA', cardUrl: 'https://www.sandiego.gov/public-library/services/library-cards', highlight: 'Libby, Kanopy, plus free after-school tutoring at many branches.' },
  { name: 'Austin Public Library', city: 'Austin, TX', cardUrl: 'https://library.austintexas.gov/library-cards', highlight: 'Recording studios at the Central Library. Seeds to sign out.' },
  { name: 'Multnomah County Library', city: 'Portland, OR', cardUrl: 'https://multcolib.org/library-card', highlight: 'One of the busiest systems per capita in the US. Strong My Librarian program.' },
  { name: 'Hennepin County Library', city: 'Minneapolis, MN', cardUrl: 'https://www.hclib.org/cards', highlight: '41 branches. Book delivery to homebound patrons.' },
  { name: 'Atlanta-Fulton Public Library', city: 'Atlanta, GA', cardUrl: 'https://afpls.org/get-a-card', highlight: 'Auburn Avenue Research Library has one of the best African American collections in the South.' },
  { name: 'Las Vegas-Clark County Library', city: 'Las Vegas, NV', cardUrl: 'https://lvccld.org/accounts/new', highlight: 'Free art gallery admission. Art & poetry grants for residents.' },
  { name: 'San Antonio Public Library', city: 'San Antonio, TX', cardUrl: 'https://mysapl.org/Borrow/Get-Card', highlight: 'Free online tutoring in English and Spanish. Library of Things lending.' },
  { name: 'Orange County Library (Orlando)', city: 'Orlando, FL', cardUrl: 'https://www.ocls.info/library-cards', highlight: 'Nationally known Melrose Center — recording studio, 3D printing, simulation lab.' },
  { name: 'Tampa-Hillsborough Public Library', city: 'Tampa, FL', cardUrl: 'https://hcplc.org/services/library-cards', highlight: '1,000+ digital magazines through Flipster. Strong Friends program.' },
  { name: 'Charlotte Mecklenburg Library', city: 'Charlotte, NC', cardUrl: 'https://www.cmlibrary.org/library-cards', highlight: 'Active ImaginOn youth branch. Robinson-Spangler Carolina Room for local history.' },
  { name: 'Columbus Metropolitan Library', city: 'Columbus, OH', cardUrl: 'https://www.columbuslibrary.org/get-a-library-card/', highlight: 'One of the highest-rated systems in the country. Free homework help through Reading Buddies.' },
  { name: 'Cincinnati Public Library', city: 'Cincinnati, OH', cardUrl: 'https://chpl.org/locations-hours/get-a-library-card/', highlight: 'MakerSpace at the main branch. Free notary, tax help, and ESL classes.' },
  { name: 'Cleveland Public Library', city: 'Cleveland, OH', cardUrl: 'https://cpl.org/cards/', highlight: 'Free chess club and Ohio Center for the Book programs.' },
  { name: 'Salt Lake City Public Library', city: 'Salt Lake City, UT', cardUrl: 'https://www.slcpl.org/locations-hours/library-card', highlight: 'Iconic main library building. Free community recording studio.' },
  { name: 'King County Library System', city: 'King County, WA', cardUrl: 'https://kcls.org/library-cards', highlight: 'Serves Seattle suburbs. Extensive Library of Things — instruments, telescopes, thermal cameras.' },
];

/* ── Services every library has ─────────────────────────────── */
interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  linkTo?: string;
  linkLabel?: string;
}

const CORE_SERVICES: Service[] = [
  {
    title: 'Books, audiobooks, and ebooks',
    desc: 'Borrow print books, audio CDs, and digital books through apps like Libby and Hoopla. No waiting in line for most titles.',
    icon: BookOpen,
    color: 'text-teal-600',
    linkTo: '/tools/library-tech-helper',
    linkLabel: 'Library tech helper',
  },
  {
    title: 'DVDs and music CDs',
    desc: 'Many libraries still stock thousands of DVDs, Blu-rays, and music CDs. A great way to catch up on series or try new music without a streaming fee.',
    icon: Disc,
    color: 'text-cyan-600',
  },
  {
    title: 'Newspapers and magazines',
    desc: 'Print copies on the shelf, plus free online access to hundreds of newspapers and magazines through PressReader and Flipster with your card.',
    icon: Newspaper,
    color: 'text-emerald-600',
  },
  {
    title: 'Streaming movies and shows',
    desc: 'Kanopy and Hoopla let you stream films, documentaries, and TV through your library card — no Netflix fee.',
    icon: Film,
    color: 'text-teal-600',
  },
  {
    title: 'Free computer and Wi-Fi',
    desc: 'Public computers with internet, printers, and office software. Free Wi-Fi inside the building, and many libraries have Wi-Fi that reaches the parking lot.',
    icon: Laptop,
    color: 'text-cyan-600',
  },
  {
    title: 'Printing, scanning, copying',
    desc: 'Print a boarding pass, scan a tax document, or make a copy of your Medicare card. Usually free for small amounts or a few cents per page.',
    icon: Printer,
    color: 'text-emerald-600',
  },
  {
    title: 'Free notary service',
    desc: 'Many branches have a staff notary who can notarize documents at no charge. Call ahead to confirm the notary is on duty.',
    icon: FileSignature,
    color: 'text-teal-600',
  },
  {
    title: 'Free tax prep help (VITA/TCE)',
    desc: 'From January through April, trained volunteers help you file federal and state taxes for free. Priority for seniors and low-to-moderate-income families.',
    icon: Calculator,
    color: 'text-cyan-600',
  },
  {
    title: 'Tech classes for seniors',
    desc: 'Group classes on smartphones, email, video calls, online shopping, and scam safety. Often paired with one-on-one follow-up appointments.',
    icon: GraduationCap,
    color: 'text-emerald-600',
  },
  {
    title: 'Free museum passes',
    desc: 'Reserve a pass for local museums, zoos, and gardens through your library card — a family of four can save $60 or more in one visit.',
    icon: Ticket,
    color: 'text-teal-600',
  },
  {
    title: 'Meeting rooms',
    desc: 'Reserve a quiet study room for a video call, a small meeting, or a family history research session. Most libraries let you book online.',
    icon: Users,
    color: 'text-cyan-600',
  },
  {
    title: 'Research databases',
    desc: 'Consumer Reports, Ancestry Library, HeritageQuest, legal forms, academic journals, and more — normally paywalled, free with your card.',
    icon: Database,
    color: 'text-emerald-600',
  },
];

/* ── Extended / hidden services ─────────────────────────────── */
const EXTENDED_SERVICES: Service[] = [
  {
    title: 'Library of Things',
    desc: 'Borrow telescopes, sewing machines, power tools, sous-vide machines, musical instruments, Cricut cutters, metal detectors, and more. Same card, no fee.',
    icon: Wrench,
    color: 'text-teal-600',
  },
  {
    title: 'Seed library',
    desc: 'Free vegetable and flower seeds to take home and plant. Many libraries ask you to bring some seeds back from your harvest to keep the cycle going.',
    icon: Sprout,
    color: 'text-emerald-600',
  },
  {
    title: 'Book kits and book clubs',
    desc: 'Ready-made book club kits with 10 copies of a title, discussion questions, and a host guide. Or join a club the library runs.',
    icon: BookMarked,
    color: 'text-cyan-600',
  },
  {
    title: 'Homebound services',
    desc: 'If mobility limits your ability to visit, many libraries bring books and DVDs to your home. Ask for the "outreach" or "homebound" program.',
    icon: Home,
    color: 'text-teal-600',
  },
  {
    title: 'One-on-one tech help',
    desc: 'Book a free 30–60 minute appointment with a librarian for help with your phone, email, Zoom, streaming, printer, or a new device.',
    icon: HandHeart,
    color: 'text-emerald-600',
  },
  {
    title: 'Inter-library loan (ILL)',
    desc: 'If your branch does not own a book, a librarian can request it from any library in the US. Free and usually arrives in 1–2 weeks.',
    icon: Truck,
    color: 'text-cyan-600',
  },
  {
    title: 'Books by mail',
    desc: 'For seniors with mobility limits or rural addresses, the library mails books to you and pays the return postage. Ask the reference desk.',
    icon: Mail,
    color: 'text-teal-600',
  },
  {
    title: 'ESL and citizenship classes',
    desc: 'English-language classes and naturalization prep taught at the branch by volunteers or partner nonprofits. Completely free.',
    icon: Globe,
    color: 'text-emerald-600',
  },
  {
    title: 'Job search help and resume workshops',
    desc: 'Resume review, interview practice, LinkedIn basics, and quiet spaces to take a video interview. Many branches have dedicated career librarians.',
    icon: Briefcase,
    color: 'text-cyan-600',
  },
  {
    title: 'Naturalization and civics prep',
    desc: 'Practice civics tests, fill out USCIS forms with a volunteer, and access study materials for the citizenship interview.',
    icon: Flag,
    color: 'text-teal-600',
  },
];

/* ── First visit checklist ──────────────────────────────────── */
const FIRST_VISIT = [
  'Bring a photo ID (driver\'s license, state ID, or passport).',
  'Bring proof of address (a utility bill, lease, piece of mail, or bank statement with your name and current address).',
  'Ask for a library card AND online access — they are sometimes set up separately.',
  'Take the branch tour. Librarians love to give them.',
  'Grab the monthly events calendar at the front desk.',
  'Sign up for the library\'s email newsletter so you hear about new classes and books.',
  'Ask the reference librarian: "What do you offer here that I should know about?" They will light up.',
];

/* ── Senior-specific programs ───────────────────────────────── */
const SENIOR_PROGRAMS = [
  { title: 'Medicare 101 classes', desc: 'Neutral, no-sales-pitch walk-throughs of Parts A, B, C, D and how to pick a plan.' },
  { title: 'Scam defense workshops', desc: 'Real examples of current scams, run by police, AARP, or the FTC.' },
  { title: 'Tech for seniors', desc: 'Unhurried classes on smartphones, tablets, video calls, and online safety.' },
  { title: 'Book clubs', desc: 'Daytime clubs are common — a great way to meet neighbors.' },
  { title: 'Grief support groups', desc: 'Run by hospice partners or counselors, often free and open to the public.' },
  { title: 'Genealogy help', desc: 'Hands-on sessions using Ancestry Library Edition and HeritageQuest, with local history volunteers.' },
  { title: 'Chair yoga and chair exercise', desc: 'Gentle movement classes held at the library, designed for all mobility levels.' },
  { title: 'Memory cafes', desc: 'Dementia-friendly gatherings where caregivers and loved ones come together for conversation and activities.' },
];

/* ── FAQs ───────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Is there really no fee for any of this?',
    a: 'Yes. Library cards are free and have been for over 100 years. Your property and income taxes pay for the library, so you have already funded it. Borrowing, computer use, Wi-Fi, research databases, and most classes are all included. A handful of special materials (a new release you lost, a long-distance inter-library loan) might have small fees — those are the exceptions.',
  },
  {
    q: 'Can I use the library if I am not a resident?',
    a: 'In most cases, yes. Rules vary by system, but options include: (1) free cards if you live, work, or attend school in the service area, (2) reciprocal cards through statewide or regional networks, (3) paid non-resident cards (typically $30–$120/year) that still save hundreds compared to buying materials, and (4) visitor cards at some urban libraries if you can show a local address. Call the reference desk and ask — they want to help.',
  },
  {
    q: 'What about late fees and fines?',
    a: 'Most US libraries went fine-free starting in 2019 and the movement accelerated through 2022. That means no daily overdue fees. You may still owe replacement costs if an item is very late or lost, and some systems charge for new-release DVDs. Renew online with one tap to avoid trouble.',
  },
  {
    q: 'Can I donate books or movies?',
    a: 'Many libraries accept donations through their Friends of the Library group. Books are sold at ongoing book sales to fund library programs. Condition matters — nothing moldy, water-damaged, or heavily worn. Call ahead if you have more than a few boxes.',
  },
  {
    q: 'Do I have to go to the building, or can I use the library from home?',
    a: 'Almost everything is available from home once you have a card. Ebooks and audiobooks through Libby, streaming movies through Kanopy and Hoopla, magazines through Flipster, research through Consumer Reports and Ancestry, language learning through Mango, live homework help, ebook renewals, and holds — all work from your couch. The building is for in-person classes, meeting rooms, public computers, printing, and the atmosphere.',
  },
  {
    q: 'How do I find my library\'s website?',
    a: 'Search Google for "[your city or county] public library" and add "official" if you see ads at the top. Library websites end in .org, .gov, or .us. Bookmark it. Your library\'s website is where you renew books, place holds, reserve rooms, and find events.',
  },
  {
    q: 'I lost my library card. What do I do?',
    a: 'Call your library or stop by. They can look up your account by ID. A replacement card is usually free or $1–$5. In the meantime, you can still log into your online account to keep using digital services.',
  },
  {
    q: 'Can children and grandchildren get cards too?',
    a: 'Yes. Most libraries offer cards to children with a parent or guardian signature. Some systems let children get their first card at birth. Teenagers can often get cards on their own.',
  },
];

/* ─────────────────────────────────────────────────────────── */
/* Main component                                              */
/* ─────────────────────────────────────────────────────────── */
export default function LocalLibraryFinder() {
  const [zip, setZip] = useState('');
  const [stateCode, setStateCode] = useState<string>('');

  const selectedState = useMemo(
    () => STATE_LIBS.find(s => s.code === stateCode) ?? null,
    [stateCode]
  );

  function handleZipSearch() {
    const clean = zip.trim().replace(/[^0-9]/g, '').slice(0, 5);
    const query = clean.length > 0
      ? `public library near ${clean}`
      : 'public library near me';
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function handleStateOpen() {
    if (!selectedState) return;
    window.open(selectedState.url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <SEOHead
        title="Find Your Local Library — And Everything It Offers | TekSure"
        description="A senior-friendly guide to finding your nearest public library and using every free service your card unlocks — ebooks, streaming, classes, notary, tax help, museum passes, and more."
        path="/tools/local-library-finder"
      />
      <Navbar />

      <main id="main-content" className="container py-12 min-h-[80vh] max-w-4xl mx-auto">
        {/* ── Hero ── */}
        <div className="relative text-center mb-10">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="local-library-finder"
              title="Local Library Finder"
              url="/tools/local-library-finder"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-teal-200 via-amber-100 to-orange-100 text-teal-700 dark:from-teal-900/60 dark:via-amber-950/40 dark:to-orange-950/40 dark:text-teal-300 mb-5 shadow-sm">
            <Library className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-br from-teal-700 via-teal-600 to-amber-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-teal-400 dark:to-amber-300">
            Find Your Library — And Everything It Offers
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your tax dollars already pay for it. Here&apos;s how to actually use it.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary" className="text-sm">New</Badge>
            <Badge variant="outline" className="text-sm">Free forever</Badge>
            <Badge variant="outline" className="text-sm">Senior-friendly</Badge>
          </div>
        </div>

        {/* ── Budget-saver banner ── */}
        <Alert className="mb-10 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <PiggyBank className="h-5 w-5 text-amber-700 dark:text-amber-300" />
          <AlertTitle className="text-lg font-bold text-amber-900 dark:text-amber-100">
            Your library card is worth at least $2,000 a year
          </AlertTitle>
          <AlertDescription className="text-base text-amber-900 dark:text-amber-100">
            If you paid separately for the streaming, ebooks, audiobooks, magazines, Consumer Reports, LinkedIn
            Learning, language apps, and museum passes your library offers, you would spend over $2,000 a year.
            With a library card, it is all free.
          </AlertDescription>
        </Alert>

        {/* ── Find your library section ── */}
        <section aria-labelledby="find-heading" className="mb-12">
          <h2 id="find-heading" className="text-3xl font-bold mb-2 flex items-center gap-2">
            <MapPin className="h-8 w-8 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            Find your library
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Three ways to locate the branch nearest you. Pick whichever is easiest.
          </p>

          <Tabs defaultValue="zip" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="zip" className="text-base min-h-12 py-2">By ZIP</TabsTrigger>
              <TabsTrigger value="state" className="text-base min-h-12 py-2">By state</TabsTrigger>
              <TabsTrigger value="directory" className="text-base min-h-12 py-2">Nationwide</TabsTrigger>
            </TabsList>

            <TabsContent value="zip" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <label htmlFor="zip-input" className="block text-base font-semibold">
                    Enter your ZIP code
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      id="zip-input"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 90210"
                      maxLength={5}
                      value={zip}
                      onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ''))}
                      className="text-lg min-h-14 flex-1"
                      aria-describedby="zip-help"
                    />
                    <Button
                      onClick={handleZipSearch}
                      size="lg"
                      className="min-h-14 text-base bg-teal-600 hover:bg-teal-700"
                    >
                      <Search className="h-5 w-5 mr-2" aria-hidden="true" />
                      Find libraries near me
                    </Button>
                  </div>
                  <p id="zip-help" className="text-sm text-muted-foreground">
                    This opens a Google search in a new tab — we do not collect or store your ZIP code.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="state" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <label htmlFor="state-select" className="block text-base font-semibold">
                    Pick your state
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select value={stateCode} onValueChange={setStateCode}>
                      <SelectTrigger id="state-select" className="text-lg min-h-14 flex-1">
                        <SelectValue placeholder="Choose a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATE_LIBS.map((s) => (
                          <SelectItem key={s.code} value={s.code} className="text-base py-2">
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleStateOpen}
                      disabled={!selectedState}
                      size="lg"
                      className="min-h-14 text-base bg-teal-600 hover:bg-teal-700"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" aria-hidden="true" />
                      Open state directory
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedState
                      ? `Links to the ${selectedState.name} state library — the official directory for every public library in the state.`
                      : 'Each state has an official library commission that lists every public library and its services.'}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="directory" className="mt-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Nationwide library finder</h3>
                  <p className="text-base text-muted-foreground">
                    LibraryTechnology.org maintains a comprehensive, free database of every public library in the
                    US — with addresses, phone numbers, and branch information.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="min-h-14 text-base bg-teal-600 hover:bg-teal-700"
                  >
                    <a
                      href="https://librarytechnology.org/libraries/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" aria-hidden="true" />
                      Open librarytechnology.org
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* ── Major library systems spotlight ── */}
        <section aria-labelledby="major-heading" className="mb-14">
          <h2 id="major-heading" className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Building2 className="h-8 w-8 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            Major library systems
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            30 of the biggest public library systems in the country — each with their own standout services. If
            you live in or near one of these cities, these cards go a long way.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {MAJOR_LIBS.map((lib) => (
              <Card key={lib.name} className="border-2 hover:border-teal-300 transition-colors">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-1">{lib.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {lib.city}
                  </p>
                  <p className="text-base mb-4">{lib.highlight}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="min-h-12 text-base"
                  >
                    <a href={lib.cardUrl} target="_blank" rel="noopener noreferrer">
                      Get a card
                      <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Services every library has ── */}
        <section aria-labelledby="core-heading" className="mb-14">
          <h2 id="core-heading" className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Star className="h-8 w-8 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            Services every library has
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            If your library is open, it almost certainly offers all 12 of these. Bring your card and ask.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {CORE_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card key={svc.title} className="border-2">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`shrink-0 rounded-xl p-2 bg-teal-50 dark:bg-teal-950/30 ${svc.color}`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1">{svc.title}</h3>
                        <p className="text-base text-muted-foreground">{svc.desc}</p>
                        {svc.linkTo && (
                          <Link
                            to={svc.linkTo}
                            className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-teal-700 dark:text-teal-400 hover:underline"
                          >
                            {svc.linkLabel}
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ── Extended services ── */}
        <section aria-labelledby="extended-heading" className="mb-14">
          <h2 id="extended-heading" className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Lightbulb className="h-8 w-8 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            Services you might not know about
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            These are the quiet gems. Many libraries have all of these, but they rarely advertise them. Ask.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {EXTENDED_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card key={svc.title} className="border-2 border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`shrink-0 rounded-xl p-2 bg-amber-100 dark:bg-amber-950/30 ${svc.color}`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1">{svc.title}</h3>
                        <p className="text-base text-muted-foreground">{svc.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ── First visit checklist ── */}
        <section aria-labelledby="first-visit-heading" className="mb-14">
          <Card className="border-2 border-teal-300 bg-teal-50 dark:bg-teal-950/30 dark:border-teal-800">
            <CardContent className="p-6 sm:p-8">
              <h2 id="first-visit-heading" className="text-2xl font-bold mb-4 flex items-center gap-2 text-teal-900 dark:text-teal-100">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                First visit checklist
              </h2>
              <p className="text-base mb-5 text-teal-900 dark:text-teal-100">
                Everything you need to walk out with a card and a plan:
              </p>
              <ul className="space-y-3 text-base text-teal-900 dark:text-teal-100">
                {FIRST_VISIT.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-teal-700 dark:text-teal-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── Senior-specific programs ── */}
        <section aria-labelledby="senior-heading" className="mb-14">
          <h2 id="senior-heading" className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Heart className="h-8 w-8 text-rose-600 dark:text-rose-400" aria-hidden="true" />
            Programs for adults 60+
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Many branches run programs made with older adults in mind. Ask for the monthly calendar.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {SENIOR_PROGRAMS.map((p) => (
              <Card key={p.title} className="border-2">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                  <p className="text-base text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Reciprocal cards ── */}
        <section aria-labelledby="reciprocal-heading" className="mb-14">
          <Card className="border-2">
            <CardContent className="p-6 sm:p-8">
              <h2 id="reciprocal-heading" className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Users className="h-7 w-7 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                Reciprocal and regional cards
              </h2>
              <p className="text-base mb-3">
                Many libraries honor cards from nearby systems. Metro networks — CountyCat in Wisconsin, BiblioCommons
                members, the Maryland Interlibrary Consortium, and others — let you borrow at dozens of branches with
                one card.
              </p>
              <p className="text-base">
                If you work, go to school, or own property in a neighboring county, you can often apply for a card
                there too. More cards mean more ebook copies available on Libby and more holds going at once — a
                quiet way to skip waitlists.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Rural / no library fallback ── */}
        <section aria-labelledby="rural-heading" className="mb-14">
          <Card className="border-2 border-cyan-300 bg-cyan-50 dark:bg-cyan-950/30 dark:border-cyan-800">
            <CardContent className="p-6 sm:p-8">
              <h2 id="rural-heading" className="text-2xl font-bold mb-3 flex items-center gap-2 text-cyan-900 dark:text-cyan-100">
                <Globe className="h-7 w-7" aria-hidden="true" />
                No library close by? You still have options.
              </h2>
              <p className="text-base mb-4 text-cyan-900 dark:text-cyan-100">
                Rural areas and very small towns sometimes lack a physical branch, but you still have access:
              </p>
              <ul className="space-y-3 text-base text-cyan-900 dark:text-cyan-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                  <span>
                    <strong>Statewide virtual library card.</strong> Many state library commissions offer a digital
                    card to any resident — no branch visit required. Pick your state above.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                  <span>
                    <strong>County-level Libby access.</strong> Even if your town has no library, your county often
                    has a system that lets you read digitally through OverDrive / Libby.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                  <span>
                    <strong>Internet Archive</strong> (<a href="https://archive.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">archive.org</a>) lets anyone borrow millions
                    of digital books for free — no card needed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                  <span>
                    <strong>Project Gutenberg</strong> (<a href="https://gutenberg.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">gutenberg.org</a>) has 70,000+ free classic
                    ebooks, forever, with no account required.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                  <span>
                    <strong>LibriVox</strong> (<a href="https://librivox.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">librivox.org</a>) offers free audiobooks of public-domain
                    titles, read by volunteers.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── Librarian is your friend ── */}
        <section className="mb-14">
          <Card className="border-2 border-teal-200 dark:border-teal-900">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <HandHeart className="h-7 w-7 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                The reference librarian is your friend
              </h2>
              <p className="text-base mb-3">
                Reference librarians will answer research questions by email, phone, or chat — free, and often same
                day. "What year did my grandfather's ship arrive?" "How do I contest a property tax bill?" "What are
                the top-rated dishwashers under $700?" Ask anything. They love this work.
              </p>
              <p className="text-base">
                If they don&apos;t have the answer, they&apos;ll point you to someone who does. That kind of help is
                worth hundreds of dollars an hour in the private world. At the library, it&apos;s free.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Etiquette ── */}
        <section className="mb-14">
          <Card className="border-2">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="h-7 w-7 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                Library etiquette
              </h2>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span><strong>Quiet zones are real.</strong> Keep phone conversations to the lobby or a meeting room. Most libraries have a "loud" and a "quiet" area — ask which is which.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span><strong>Renew online.</strong> Most items can be renewed one or two times with a tap in the library&apos;s app or website — as long as no one else is waiting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span><strong>Late fees mostly vanished.</strong> Most US libraries went fine-free between 2019 and 2022. Check your library&apos;s policy — you might owe less than you think.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span><strong>Return books in the slot.</strong> Most libraries have an outdoor book drop that works 24/7 — no need to come in during hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span><strong>Food policies vary.</strong> Many libraries allow covered drinks and small snacks in most areas. Big meals, no.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── Volunteer ── */}
        <section className="mb-14">
          <Card className="border-2 border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/10">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <HandHeart className="h-7 w-7 text-rose-600 dark:text-rose-400" aria-hidden="true" />
                Volunteer at your library
              </h2>
              <p className="text-base mb-3">
                Most libraries rely on volunteers for book sales, tutoring, shelving, story time, and tech help.
                It&apos;s a great way to meet your neighbors, use skills you built over a career, and give back to a
                place that gives so much away.
              </p>
              <p className="text-base">
                Friends of the Library groups run the book sales that fund many programs. They meet monthly and
                almost always need more hands.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-14">
          <h2 id="faq-heading" className="text-3xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="h-8 w-8 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-semibold min-h-14 py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ── Related tools ── */}
        <section aria-labelledby="related-heading" className="mb-8">
          <h2 id="related-heading" className="text-2xl font-bold mb-4">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              to="/tools/library-tech-helper"
              className="block rounded-xl border-2 border-border bg-card p-5 hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 transition-colors min-h-24"
            >
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="h-5 w-5 text-teal-600" aria-hidden="true" />
                <span className="font-bold text-base">Library Tech Helper</span>
              </div>
              <p className="text-sm text-muted-foreground">Set up Libby, Hoopla, Kanopy, and other library apps.</p>
            </Link>
            <Link
              to="/tools/free-learning-hub"
              className="block rounded-xl border-2 border-border bg-card p-5 hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 transition-colors min-h-24"
            >
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="h-5 w-5 text-teal-600" aria-hidden="true" />
                <span className="font-bold text-base">Free Learning Hub</span>
              </div>
              <p className="text-sm text-muted-foreground">Free courses on any topic from real universities.</p>
            </Link>
            <Link
              to="/tools/free-resource-hub"
              className="block rounded-xl border-2 border-border bg-card p-5 hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 transition-colors min-h-24"
            >
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-5 w-5 text-teal-600" aria-hidden="true" />
                <span className="font-bold text-base">Free Resource Hub</span>
              </div>
              <p className="text-sm text-muted-foreground">Free tech, internet, and utility programs you may qualify for.</p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
