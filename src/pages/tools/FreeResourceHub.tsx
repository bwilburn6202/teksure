import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Gift,
  Tv,
  BookOpen,
  GraduationCap,
  Landmark,
  FileText,
  Headphones,
  Laptop,
  Heart,
  Search,
  ChevronLeft,
  ExternalLink,
  ShieldAlert,
  Info,
  HandCoins,
  Library,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ── Types ─────────────────────────────────── */
type CategoryId =
  | 'streaming'
  | 'libraries'
  | 'learning'
  | 'benefits'
  | 'taxes'
  | 'books'
  | 'software'
  | 'mental-health'
  | 'fact-check';

interface Resource {
  name: string;
  what: string;            // what it is (1 sentence)
  who: string;             // who runs it
  free: string;            // what's genuinely free vs upsell
  caveat?: string;         // optional 1 caveat
  url: string;
}

interface Category {
  id: CategoryId;
  emoji: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  blurb: string;
  resources: Resource[];
}

/* ── Catalog data ──────────────────────────── */
const CATEGORIES: Category[] = [
  /* ── 1. Streaming & TV ─────────────────── */
  {
    id: 'streaming',
    emoji: '',
    icon: Tv,
    title: 'Streaming & TV',
    tagline: 'Free movies, live channels, and video — no subscription required.',
    blurb:
      'Ad-supported streaming is a real thing. These services show commercials to pay the bills, but the content is legitimate and you do not hand over a credit card to watch.',
    resources: [
      {
        name: 'Pluto TV',
        what: 'Free live TV channels and on-demand movies and shows.',
        who: 'Owned by Paramount.',
        free: 'Everything — no account needed. Shows ads between segments.',
        caveat: 'The lineup of channels and titles rotates every month.',
        url: 'https://pluto.tv',
      },
      {
        name: 'Tubi',
        what: 'Large free library of movies and TV with a handful of originals.',
        who: 'Owned by Fox.',
        free: 'All titles are free with ads. An optional free account lets you resume where you left off.',
        url: 'https://tubitv.com',
      },
      {
        name: 'Amazon Freevee (now Prime Video with ads)',
        what: 'Free movies and series hosted inside the Amazon Prime Video app.',
        who: 'Amazon.',
        free: 'Freevee titles are free with ads and do not require Prime. Any title marked with a price or "Prime" is not.',
        caveat: 'You still need an Amazon account, and the catalog shifts into the paid Prime tier over time.',
        url: 'https://www.amazon.com/adlp/freevee',
      },
      {
        name: 'YouTube',
        what: 'Enormous library of free videos, including full movies, news clips, and how-to content.',
        who: 'Google.',
        free: 'Watching is free with ads. YouTube Premium removes ads for a monthly fee — skip it unless you want it.',
        url: 'https://www.youtube.com',
      },
      {
        name: 'PBS Passport',
        what: 'Streaming access to PBS documentaries, Masterpiece, Ken Burns, NOVA, and more.',
        who: 'Public Broadcasting Service through your local PBS station.',
        free: 'The main PBS.org and PBS app library is free. "Passport" requires a one-time donation (usually $60/year) to your station.',
        caveat: 'A small set of titles are Passport-only; most PBS content stays free without donating.',
        url: 'https://www.pbs.org/passport/',
      },
      {
        name: 'Crackle',
        what: 'Free movies and older TV series.',
        who: 'Chicken Soup for the Soul Entertainment.',
        free: 'Entire catalog is free with ads. No subscription option — so no upsell.',
        url: 'https://www.crackle.com',
      },
      {
        name: 'Plex (free library)',
        what: 'Free live TV channels and a rotating free movie catalog inside the Plex app.',
        who: 'Plex Inc.',
        free: 'The "Watch Free" section is free with ads.',
        caveat: 'Plex also sells a paid Pass; you can ignore it and stick with the free side.',
        url: 'https://www.plex.tv/watch-free-movies-and-tv-shows/',
      },
      {
        name: 'Kanopy',
        what: 'Award-winning films, documentaries, and The Great Courses.',
        who: 'Kanopy, licensed through public libraries and universities.',
        free: 'Fully free with a library card from a participating library — no ads.',
        caveat: 'Most libraries cap you at a set number of plays per month.',
        url: 'https://www.kanopy.com',
      },
      {
        name: 'Hoopla',
        what: 'Free movies, TV, comics, music, audiobooks, and ebooks.',
        who: 'Hoopla Digital, licensed through public libraries.',
        free: 'Fully free with a library card at a participating library.',
        caveat: 'Most libraries set a monthly borrow limit (usually 4–10 items).',
        url: 'https://www.hoopladigital.com',
      },
      {
        name: 'NASA+',
        what: 'Official NASA streaming — space documentaries, launches, and live feeds.',
        who: 'NASA (U.S. government).',
        free: 'Everything is free, no ads, no account required.',
        url: 'https://plus.nasa.gov',
      },
      {
        name: 'Internet Archive (video)',
        what: 'Vintage films, public-domain movies, old TV, and historical video.',
        who: 'The Internet Archive, a nonprofit library.',
        free: 'Free to watch and download. Donations are appreciated but never required.',
        caveat: 'Quality varies — some titles are grainy or black-and-white.',
        url: 'https://archive.org/details/movies',
      },
    ],
  },

  /* ── 2. Libraries ──────────────────────── */
  {
    id: 'libraries',
    emoji: '',
    icon: Library,
    title: 'Libraries',
    tagline: 'What your local library card unlocks online.',
    blurb:
      'Your library card is one of the most underused pieces of plastic you own. These apps are fully paid for by your library — you sign in with your card number and PIN, no credit card required.',
    resources: [
      {
        name: 'Libby (OverDrive)',
        what: 'Borrow ebooks and audiobooks from your library, right on your phone or tablet.',
        who: 'OverDrive, partnered with most U.S. public libraries.',
        free: 'Everything in Libby is free with a library card. No trial, no tiers, no upsell.',
        caveat: 'Popular books have a waitlist — same as a physical library.',
        url: 'https://libbyapp.com',
      },
      {
        name: 'Hoopla',
        what: 'Borrow movies, TV, music, comics, and audiobooks.',
        who: 'Hoopla Digital, partnered with public libraries.',
        free: 'Completely free with a library card at a participating library.',
        caveat: 'Most libraries cap monthly borrows — plan ahead for big ticket items.',
        url: 'https://www.hoopladigital.com',
      },
      {
        name: 'Kanopy',
        what: 'Stream films, documentaries, foreign cinema, and The Great Courses.',
        who: 'Kanopy, partnered with public libraries and universities.',
        free: 'Free with a library card — and no ads.',
        caveat: 'Monthly play credits are common; film festivals and new releases go fast.',
        url: 'https://www.kanopy.com',
      },
      {
        name: 'Mango Languages',
        what: 'Language-learning courses in 70+ languages.',
        who: 'Mango Languages, offered free through many public libraries.',
        free: 'Fully free when accessed through a participating library.',
        caveat: 'If your library does not offer it, the consumer version costs about $20/month.',
        url: 'https://mangolanguages.com',
      },
      {
        name: 'LinkedIn Learning (via library)',
        what: 'Professional courses on computing, business, design, and career skills.',
        who: 'LinkedIn, licensed to libraries.',
        free: 'Free through many public libraries — normally $40/month.',
        caveat: 'You sign in with your library card; you do not need a LinkedIn account.',
        url: 'https://www.linkedin.com/learning/subscription/library',
      },
      {
        name: 'Ancestry Library Edition',
        what: 'The full Ancestry.com genealogy database for family-history research.',
        who: 'Ancestry, licensed for library use.',
        free: 'Free to use while connected to Wi-Fi at a branch that offers it.',
        caveat: 'Most libraries still require in-branch access for this one — call ahead.',
        url: 'https://www.proquest.com/products-services/ancestrylibrary.html',
      },
      {
        name: 'PressReader (via library)',
        what: 'Free digital access to thousands of newspapers and magazines.',
        who: 'PressReader, offered through many libraries.',
        free: 'Free at participating libraries — a paid personal subscription is about $30/month.',
        url: 'https://www.pressreader.com',
      },
      {
        name: 'Your local library website',
        what: 'Homework help, tutoring, résumé review, streaming databases, and more.',
        who: 'Your city, county, or state library system.',
        free: 'Every online service on the library website is free with a library card.',
        caveat: 'Availability varies by location — the librarian is the fastest way to see what yours offers.',
        url: 'https://www.usa.gov/libraries',
      },
    ],
  },

  /* ── 3. Learning & Classes ─────────────── */
  {
    id: 'learning',
    emoji: '',
    icon: GraduationCap,
    title: 'Learning & Classes',
    tagline: 'Real courses, real teachers, zero tuition.',
    blurb:
      'Some of the best computer, language, and life-skills courses in the country are free online. A few are aimed specifically at seniors who want a patient, plain-language teacher.',
    resources: [
      {
        name: 'Khan Academy',
        what: 'Step-by-step lessons in math, grammar, computing, history, and more.',
        who: 'Khan Academy, a nonprofit funded by donors.',
        free: 'The entire site is free, forever. No ads.',
        url: 'https://www.khanacademy.org',
      },
      {
        name: 'Coursera (audit mode)',
        what: 'University-level classes from Yale, Stanford, Google, Meta, and more.',
        who: 'Coursera with partner universities.',
        free: 'Most courses can be "audited" for free — you watch all lectures without paying.',
        caveat: 'The certificate and graded assignments cost money. You can learn the material without paying.',
        url: 'https://www.coursera.org',
      },
      {
        name: 'Duolingo',
        what: 'Bite-sized language lessons in dozens of languages.',
        who: 'Duolingo Inc.',
        free: 'The free version is fully featured with ads. You hit a "hearts" cap on mistakes per day.',
        caveat: 'Duolingo pushes a paid tier called Super; you do not need it to learn.',
        url: 'https://www.duolingo.com',
      },
      {
        name: 'GCFGlobal',
        what: 'Free classes for computer basics, email, Microsoft Office, Google tools, and online safety — written for beginners.',
        who: 'Goodwill Community Foundation, a nonprofit.',
        free: 'Every lesson is free with no account required. Strong fit for seniors new to computers.',
        url: 'https://edu.gcfglobal.org',
      },
      {
        name: 'AARP Online Classes',
        what: 'Live virtual classes on smartphones, online safety, email, social media, and smart-home devices.',
        who: 'AARP, the nonprofit for Americans 50+.',
        free: 'Classes are free to attend. Some events ask for an AARP membership; many do not.',
        url: 'https://learn.aarp.org',
      },
      {
        name: 'Senior Planet (OATS)',
        what: 'Senior-focused tech classes, live online and in community centers.',
        who: 'Older Adults Technology Services, part of AARP.',
        free: 'All classes are free.',
        caveat: 'Popular live sessions fill up — the website also has a large on-demand library.',
        url: 'https://seniorplanet.org',
      },
      {
        name: 'Teacher\'s Tech on YouTube',
        what: 'Plain-language video tutorials on Windows, iPhone, Android, Gmail, and more.',
        who: 'An independent YouTube creator.',
        free: 'Free to watch with ads.',
        url: 'https://www.youtube.com/@TeachersTech',
      },
      {
        name: 'Techboomers',
        what: 'Written tutorials aimed at older adults learning websites and apps for the first time.',
        who: 'Techboomers, an independent nonprofit.',
        free: 'All tutorials are free. No paid tier.',
        url: 'https://techboomers.com',
      },
      {
        name: 'OER Commons (Creative Commons)',
        what: 'Open Educational Resources — textbooks and courses you can read, share, and remix.',
        who: 'ISKME, a nonprofit.',
        free: 'Completely free to use and download.',
        url: 'https://oercommons.org',
      },
    ],
  },

  /* ── 4. Government Benefits ───────────── */
  {
    id: 'benefits',
    emoji: '',
    icon: Landmark,
    title: 'Government Benefits',
    tagline: 'Benefits you may already qualify for — no application fees, ever.',
    blurb:
      'A real government benefit program never charges an application fee. If a site or caller asks you to pay to "unlock" a benefit, it is a scam. Start with the .gov sites below and work from there.',
    resources: [
      {
        name: 'SSA.gov — my Social Security',
        what: 'Manage your Social Security account, estimate benefits, and request replacement cards.',
        who: 'Social Security Administration (U.S. government).',
        free: 'Every service is free on ssa.gov. Anyone charging you is not the SSA.',
        caveat: 'You will need ID.me or Login.gov to sign in — both are free.',
        url: 'https://www.ssa.gov/myaccount/',
      },
      {
        name: 'Medicare.gov — MyMedicare',
        what: 'Compare Medicare plans, track claims, and manage your coverage.',
        who: 'Centers for Medicare & Medicaid Services (U.S. government).',
        free: 'All features on Medicare.gov are free.',
        caveat: 'Private "Medicare" sites that look similar may try to steer you to a particular plan. The real site is Medicare.gov.',
        url: 'https://www.medicare.gov',
      },
      {
        name: 'VA.gov',
        what: 'Veterans\' health care, benefits, disability claims, and records.',
        who: 'U.S. Department of Veterans Affairs.',
        free: 'VA benefits and records are free to access.',
        url: 'https://www.va.gov',
      },
      {
        name: 'Benefits.gov',
        what: 'A 30-question tool that shows which federal benefits you may qualify for.',
        who: 'U.S. Department of Labor and partner agencies.',
        free: 'The entire site, including the Benefit Finder tool, is free and anonymous.',
        url: 'https://www.benefits.gov',
      },
      {
        name: 'SNAP (food assistance)',
        what: 'Food benefits loaded onto an EBT card for groceries.',
        who: 'USDA, administered by your state.',
        free: 'Applying is always free. Find your state office through the USDA link.',
        caveat: 'Apply through your state — watch for fake sites that try to charge a "processing fee."',
        url: 'https://www.fns.usda.gov/snap/state-directory',
      },
      {
        name: 'LIHEAP (heating/cooling help)',
        what: 'Help paying home heating or cooling bills and weatherizing your home.',
        who: 'U.S. Department of Health and Human Services, through your state.',
        free: 'Applying costs nothing.',
        url: 'https://www.acf.hhs.gov/ocs/programs/liheap',
      },
      {
        name: 'Lifeline Program',
        what: 'A monthly discount on phone or internet service for qualifying low-income households.',
        who: 'Federal Communications Commission, administered by USAC.',
        free: 'Applying is free. The benefit is a real discount on your monthly bill.',
        caveat: 'Only apply at LifelineSupport.org — third-party sites have tried to impersonate it.',
        url: 'https://www.lifelinesupport.org',
      },
      {
        name: 'ACP replacement programs',
        what: 'After the federal Affordable Connectivity Program ended in 2024, several states and ISPs launched their own low-cost plans.',
        who: 'Individual carriers (Verizon Forward, Xfinity Internet Essentials, Spectrum Internet Assist, T-Mobile Assurance Wireless) and some state governments.',
        free: 'Plans are low-cost (often $10–$20/month), not truly free, but meaningfully cheaper for qualifying families.',
        caveat: 'Read the fine print — some plans increase after 12 months.',
        url: 'https://www.fcc.gov/broadbandbenefit',
      },
    ],
  },

  /* ── 5. Tax Filing ─────────────────────── */
  {
    id: 'taxes',
    emoji: '',
    icon: FileText,
    title: 'Tax Filing',
    tagline: 'File your federal taxes for free — really free.',
    blurb:
      'Several legitimate options let you file federal taxes free, especially if you\'re a senior or have a lower income. Avoid "free to start" products that charge at the end unless you read the terms first.',
    resources: [
      {
        name: 'IRS Free File',
        what: 'Guided software to file federal (and usually state) returns, run by the IRS with private partners.',
        who: 'IRS with participating tax-software companies.',
        free: 'Free if your adjusted gross income is under $79,000 (updated yearly by the IRS).',
        caveat: 'Start from IRS.gov/FreeFile — going directly to the partner\'s site may not give you the free version.',
        url: 'https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free',
      },
      {
        name: 'IRS Direct File',
        what: 'File directly with the IRS through a new government-run web tool.',
        who: 'The IRS.',
        free: 'Completely free with no income cap — but availability is limited to certain states and tax situations.',
        caveat: 'Check the eligibility page first. If you do not qualify, use Free File or VITA instead.',
        url: 'https://www.directfile.irs.gov',
      },
      {
        name: 'VITA (Volunteer Income Tax Assistance)',
        what: 'Free in-person tax help from IRS-certified volunteers.',
        who: 'The IRS through partner nonprofits.',
        free: 'Fully free. Most sites focus on taxpayers who make $64,000 or less, seniors, or people with disabilities.',
        caveat: 'Find a site near you on the IRS locator — appointments fill up in March and April.',
        url: 'https://www.irs.gov/individuals/find-a-location-for-free-tax-prep',
      },
      {
        name: 'AARP Foundation Tax-Aide',
        what: 'Free tax prep from trained volunteers, aimed at seniors.',
        who: 'AARP Foundation, in partnership with the IRS.',
        free: 'Free to everyone, regardless of age or AARP membership.',
        caveat: 'Available every year from February through April.',
        url: 'https://www.aarp.org/money/taxes/aarp_taxaide/',
      },
      {
        name: 'MyFreeTaxes',
        what: 'Online federal and state filing with free live help.',
        who: 'United Way with TaxSlayer.',
        free: 'Free federal and state for most filers, and phone support is free.',
        url: 'https://myfreetaxes.com',
      },
      {
        name: 'FreeTaxUSA',
        what: 'Online federal e-filing with support for nearly every situation.',
        who: 'TaxHawk, Inc.',
        free: 'Federal filing is truly free, including itemized deductions, investments, and self-employment. State is $15.',
        caveat: 'They offer a paid "Deluxe" add-on — you can skip it unless you want audit assist.',
        url: 'https://www.freetaxusa.com',
      },
    ],
  },

  /* ── 6. Books & Audiobooks ──────────────── */
  {
    id: 'books',
    emoji: '',
    icon: BookOpen,
    title: 'Books & Audiobooks',
    tagline: 'Classic literature, free audiobooks, and accessible reading.',
    blurb:
      'Millions of books are in the public domain or offered free by nonprofits. Several programs also serve readers who are blind, low-vision, or have print disabilities.',
    resources: [
      {
        name: 'Project Gutenberg',
        what: 'Over 70,000 free classic ebooks — Dickens, Austen, Twain, and more.',
        who: 'Project Gutenberg, a volunteer nonprofit.',
        free: 'Completely free. No account, no ads, no upsell.',
        url: 'https://www.gutenberg.org',
      },
      {
        name: 'LibriVox',
        what: 'Free audiobook recordings of public-domain works, read by volunteers.',
        who: 'LibriVox, a volunteer-run nonprofit.',
        free: 'Fully free. Quality varies because readers are volunteers.',
        url: 'https://librivox.org',
      },
      {
        name: 'Open Library (Internet Archive)',
        what: 'Borrow digital copies of modern books, similar to a regular library.',
        who: 'Internet Archive, a nonprofit.',
        free: 'Free to borrow with a free account.',
        caveat: 'Loans are time-limited, and some titles are in legal dispute; availability may change.',
        url: 'https://openlibrary.org',
      },
      {
        name: 'Standard Ebooks',
        what: 'Beautifully re-formatted, carefully proofread editions of classic literature.',
        who: 'Standard Ebooks, a nonprofit.',
        free: 'Fully free to download in any ebook format.',
        url: 'https://standardebooks.org',
      },
      {
        name: 'HathiTrust',
        what: 'Digital library of books from research universities.',
        who: 'HathiTrust, a partnership of universities.',
        free: 'Public-domain works are free to read. Some books are in-copyright and limited to member institutions.',
        url: 'https://www.hathitrust.org',
      },
      {
        name: 'NLS BARD',
        what: 'Free audiobooks and braille for Americans who are blind, low-vision, or have print disabilities.',
        who: 'Library of Congress National Library Service.',
        free: 'Free to qualifying users, including free mailed audiobook players if needed.',
        caveat: 'Requires a signed certification from a doctor or professional.',
        url: 'https://www.loc.gov/nls/braille-audio-reading-materials/bard-access/',
      },
      {
        name: 'Bookshare',
        what: 'Accessible ebooks for people with reading barriers — dyslexia, blindness, or physical disabilities.',
        who: 'Benetech, a nonprofit.',
        free: 'Free for qualifying U.S. users through government funding.',
        caveat: 'Eligibility requires documentation from a qualified professional.',
        url: 'https://www.bookshare.org',
      },
      {
        name: 'Learning Ally',
        what: 'Human-read audiobooks with a focus on students with dyslexia and visual impairment.',
        who: 'Learning Ally, a nonprofit.',
        free: 'Free for qualifying students. Some adult memberships have a fee, so read the eligibility page first.',
        url: 'https://learningally.org',
      },
    ],
  },

  /* ── 7. Software & Apps ──────────────── */
  {
    id: 'software',
    emoji: '',
    icon: Laptop,
    title: 'Software & Apps',
    tagline: 'Free, safe replacements for expensive programs.',
    blurb:
      'Open-source software is built by volunteers and distributed free. It is not pirated, it is not shareware, and it does not bury surprise charges. Download only from the official sites below.',
    resources: [
      {
        name: 'LibreOffice',
        what: 'Full-featured replacement for Microsoft Office — word processing, spreadsheets, and presentations.',
        who: 'The Document Foundation, a nonprofit.',
        free: 'Fully free and open-source. Donations welcome but never required.',
        caveat: 'Download only from libreoffice.org — scam sites copy the name and bundle malware.',
        url: 'https://www.libreoffice.org',
      },
      {
        name: 'GIMP',
        what: 'Free photo editor, comparable to Adobe Photoshop.',
        who: 'GIMP open-source community.',
        free: 'Entirely free and open-source.',
        caveat: 'It has a learning curve. Search "GIMP basics" tutorials before diving in.',
        url: 'https://www.gimp.org',
      },
      {
        name: 'Inkscape',
        what: 'Vector drawing and graphic design — similar to Adobe Illustrator.',
        who: 'The Inkscape community.',
        free: 'Fully free and open-source.',
        url: 'https://inkscape.org',
      },
      {
        name: 'Audacity',
        what: 'Record and edit audio — podcasts, voice memos, music.',
        who: 'Audacity open-source community.',
        free: 'Free and open-source.',
        caveat: 'Only download from audacityteam.org to avoid bundled adware from fake sites.',
        url: 'https://www.audacityteam.org',
      },
      {
        name: 'OBS Studio',
        what: 'Free software for recording your screen and live-streaming.',
        who: 'OBS open-source community.',
        free: 'Free and open-source.',
        url: 'https://obsproject.com',
      },
      {
        name: 'Zoom (free tier)',
        what: 'Video meetings with up to 100 people.',
        who: 'Zoom Video Communications.',
        free: 'Free tier supports unlimited 1-on-1 calls and 40-minute group meetings.',
        caveat: 'Group meetings cut off at 40 minutes on the free plan.',
        url: 'https://zoom.us',
      },
      {
        name: 'Google Docs, Sheets, and Slides',
        what: 'Word processor, spreadsheet, and presentation tools in your browser.',
        who: 'Google.',
        free: 'Free with any Google account. 15 GB of storage shared across Gmail, Drive, and Photos.',
        url: 'https://docs.google.com',
      },
      {
        name: 'Canva (free tier)',
        what: 'Drag-and-drop design for social media, flyers, and cards.',
        who: 'Canva Pty Ltd.',
        free: 'The free tier has millions of free templates. Canva Pro is optional.',
        caveat: 'Some templates, photos, and fonts are gated behind Pro — they are marked with a crown.',
        url: 'https://www.canva.com',
      },
      {
        name: 'Blender',
        what: 'Professional 3D modeling, animation, and rendering.',
        who: 'Blender Foundation, a nonprofit.',
        free: 'Entirely free and open-source.',
        url: 'https://www.blender.org',
      },
      {
        name: 'VLC Media Player',
        what: 'A media player that opens almost any video or audio file.',
        who: 'VideoLAN, a nonprofit.',
        free: 'Free and open-source, with no ads.',
        caveat: 'Get it only from videolan.org — app stores host fakes with ads.',
        url: 'https://www.videolan.org/vlc/',
      },
    ],
  },

  /* ── 8. Mental Health ──────────────── */
  {
    id: 'mental-health',
    emoji: '',
    icon: Heart,
    title: 'Mental Health',
    tagline: 'Free, confidential support lines and peer groups.',
    blurb:
      'These services are free and never require insurance. If you or someone you know is in crisis, dial 988 in the U.S. to reach a trained counselor around the clock.',
    resources: [
      {
        name: '988 Suicide & Crisis Lifeline',
        what: 'Confidential phone, chat, and text support for anyone in emotional distress.',
        who: 'SAMHSA (U.S. government).',
        free: 'Free, 24/7, in English and Spanish. Dial 988 or chat at the website.',
        url: 'https://988lifeline.org',
      },
      {
        name: 'SAMHSA National Helpline',
        what: 'Information and treatment referrals for mental health and substance use.',
        who: 'Substance Abuse and Mental Health Services Administration.',
        free: 'Free, 24/7, confidential. Call 1-800-662-HELP (4357).',
        caveat: 'This is a referral line, not a crisis line. Call 988 for immediate crisis help.',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
      },
      {
        name: 'NAMI HelpLine',
        what: 'Support, resources, and peer-to-peer help for people living with mental illness and their families.',
        who: 'National Alliance on Mental Illness.',
        free: 'Free. Call 1-800-950-NAMI (6264), text "HelpLine" to 62640, or chat on the website, Mon–Fri 10am–10pm ET.',
        url: 'https://www.nami.org/help',
      },
      {
        name: 'AARP Friendship Line',
        what: 'A warm line for older adults who are lonely, isolated, grieving, or anxious.',
        who: 'Institute on Aging, promoted by AARP.',
        free: 'Free and 24/7. Call 1-888-670-1360.',
        caveat: 'Counselors will call you back regularly if you would like check-ins.',
        url: 'https://www.ioaging.org/services/friendship-line',
      },
      {
        name: 'Institute on Aging Friendship Line',
        what: 'Same number as the AARP line — a 24/7 emotional support line for adults 60+ and adults with disabilities.',
        who: 'Institute on Aging, a nonprofit.',
        free: 'Completely free. 1-888-670-1360.',
        url: 'https://www.ioaging.org/services/friendship-line',
      },
      {
        name: 'GriefShare',
        what: 'Free grief support groups — in-person at churches and community centers, or online.',
        who: 'Church Initiative, a Christian nonprofit.',
        free: 'Joining a group is free. A workbook may cost a few dollars.',
        caveat: 'Faith-based framing may not suit everyone; secular alternatives below.',
        url: 'https://www.griefshare.org',
      },
      {
        name: 'The Dinner Party (grief community)',
        what: 'Free online and in-person grief dinners, especially for younger adults who have lost someone.',
        who: 'The Dinner Party, a nonprofit.',
        free: 'Joining a table is free.',
        url: 'https://www.thedinnerparty.org',
      },
      {
        name: 'Vital Hearts',
        what: 'Trauma recovery resources and programs for caregivers and survivors.',
        who: 'Vital Hearts, a nonprofit.',
        free: 'Many resources and community calls are free; some intensive programs have a fee.',
        url: 'https://www.vitalhearts.org',
      },
      {
        name: 'Seniors Blue Book',
        what: 'Directory of local senior services, including mental health and caregiver support.',
        who: 'Seniors Blue Book, an independent publisher.',
        free: 'Free to search and free in print at many senior centers.',
        url: 'https://seniorsbluebook.com',
      },
    ],
  },

  /* ── 9. Fact-Check & Research ─────────── */
  {
    id: 'fact-check',
    emoji: '',
    icon: Search,
    title: 'Fact-Check & Research',
    tagline: 'Verify claims, research history, and check the record.',
    blurb:
      'These sites are free, independent, and widely trusted by journalists and librarians. Use two or three together when something feels off — no single source is right every time.',
    resources: [
      {
        name: 'Snopes',
        what: 'The original fact-checking site — rumors, viral posts, and urban legends.',
        who: 'Snopes Media Group.',
        free: 'All articles are free. An optional paid membership removes ads.',
        url: 'https://www.snopes.com',
      },
      {
        name: 'PolitiFact',
        what: 'Fact-checking for statements made by politicians and political ads.',
        who: 'The Poynter Institute, a journalism nonprofit.',
        free: 'Fully free. No paywall.',
        url: 'https://www.politifact.com',
      },
      {
        name: 'FactCheck.org',
        what: 'Nonpartisan reviews of political claims and viral misinformation.',
        who: 'Annenberg Public Policy Center at the University of Pennsylvania.',
        free: 'Entirely free, ad-free.',
        url: 'https://www.factcheck.org',
      },
      {
        name: 'AP Fact Check',
        what: 'Fact-checking from the Associated Press newsroom.',
        who: 'Associated Press.',
        free: 'Free to read. AP is a nonprofit cooperative funded by member newsrooms.',
        url: 'https://apnews.com/hub/ap-fact-check',
      },
      {
        name: 'Reuters Fact Check',
        what: 'Fact-checking viral claims, especially on social media.',
        who: 'Reuters News.',
        free: 'Free to read.',
        url: 'https://www.reuters.com/fact-check/',
      },
      {
        name: 'USA Today Fact Check',
        what: 'Fact-checking of viral claims, health rumors, and social media posts.',
        who: 'USA Today newsroom.',
        free: 'Free to read. The main site may show a subscription prompt; fact checks are typically outside the paywall.',
        url: 'https://www.usatoday.com/news/factcheck/',
      },
      {
        name: 'Media Bias/Fact Check',
        what: 'Ratings of news outlets\' political lean and factual accuracy.',
        who: 'Media Bias/Fact Check LLC, an independent site.',
        free: 'Free. A paid tier removes ads and unlocks extra research.',
        caveat: 'Bias ratings are a tool, not the final word — read the source itself, too.',
        url: 'https://mediabiasfactcheck.com',
      },
      {
        name: 'Internet Archive Wayback Machine',
        what: 'See how a website looked on a past date — useful for claims about deleted posts.',
        who: 'The Internet Archive, a nonprofit.',
        free: 'Completely free.',
        url: 'https://web.archive.org',
      },
      {
        name: 'Library of Congress Digital Collections',
        what: 'Historical photographs, newspapers, maps, and manuscripts.',
        who: 'Library of Congress (U.S. government).',
        free: 'Free to browse and download.',
        url: 'https://www.loc.gov/collections/',
      },
      {
        name: 'National Archives',
        what: 'Original government documents — census records, military records, historical papers.',
        who: 'National Archives and Records Administration (U.S. government).',
        free: 'Free online and free to visit research rooms.',
        url: 'https://www.archives.gov',
      },
      {
        name: 'Pew Research Center',
        what: 'In-depth public opinion and demographic research.',
        who: 'Pew Research Center, a nonpartisan nonprofit.',
        free: 'All reports are free.',
        url: 'https://www.pewresearch.org',
      },
    ],
  },
];

/* ── Related tools ──────────────────────── */
const RELATED = [
  { title: 'Refund & Return Helper', path: '/tools/refund-and-return-helper' },
  { title: 'Is This Real?', path: '/tools/is-this-real' },
  { title: 'Streaming Service Picker', path: '/tools/streaming-service-picker' },
  { title: 'Money guides', path: '/guides?category=money' },
];

/* ── FAQ ──────────────────────────────── */
const FAQS = [
  {
    q: 'Is there a catch?',
    a: 'For the resources on this page, the short answer is no — they are funded by taxes, donors, ads, library systems, or open-source volunteers. Some of them offer an optional paid tier (more features, no ads, or professional-grade tools). You never have to take it. If a site asks for a credit card to finish a "free" signup, close the tab and check the name against this page.',
  },
  {
    q: 'Why is Libby free?',
    a: 'Libby is paid for by your public library using tax dollars and private donations. The library buys digital copies of books and lends them out the same way it lends physical books. That is why there are waitlists — the library owns a set number of copies.',
  },
  {
    q: 'Do I need to create accounts?',
    a: 'Some services (Libby, Khan Academy, your Social Security account) do require an account so they can save your progress or verify your identity. Others (Pluto TV, Crackle, most fact-check sites) do not. We flag which ones need accounts in each card.',
  },
  {
    q: 'Will they sell my data?',
    a: 'Government sites (.gov) and nonprofit libraries have strong privacy protections. Commercial free services like Tubi, YouTube, or Canva do use your activity to target ads — that is how they pay for the "free" part. If that matters to you, stick to nonprofit and library options.',
  },
  {
    q: 'What about the "free trial that auto-charges" trick?',
    a: 'If a service asks for a credit card to start a "free" trial, write down the date and set a calendar reminder two days before it ends. Most trials auto-renew into a paid plan and count on you forgetting. Real free services on this page do not ask for a card.',
  },
  {
    q: 'I found a great free resource not on this list. Can you add it?',
    a: 'Yes, please — open the feedback form on any TekSure page and tell us. We add new free resources as they come up.',
  },
];

/* ── Main component ──────────────────────── */
export default function FreeResourceHub() {
  const [selectedId, setSelectedId] = useState<CategoryId | null>(null);

  const selected = selectedId
    ? CATEGORIES.find(c => c.id === selectedId) ?? null
    : null;

  function handleSelect(id: CategoryId) {
    setSelectedId(id);
    setTimeout(() => {
      const el = document.getElementById('free-resource-detail');
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
        title="Free Resource Hub | TekSure"
        description="A plain-language catalog of FREE, LEGAL, senior-friendly resources — streaming, library apps, classes, government benefits, tax help, books, software, mental health lines, and fact-check sites."
        path="/tools/free-resource-hub"
      />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-4xl mx-auto">
        {/* ── Hero ── */}
        <div className="relative text-center mb-10">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="free-resource-hub"
              title="Free Resource Hub"
              url="/tools/free-resource-hub"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-200 text-emerald-700 dark:from-emerald-900/50 dark:to-green-900/50 dark:text-emerald-300 mb-5 shadow-sm">
            <Gift className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Free Stuff That's Actually Free (and Legal)
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            No scams, no piracy, no malware — genuinely free resources you can trust.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-3">
            Pick a category below to see a vetted catalog of free services, who runs them, and where an optional paid tier kicks in.
          </p>
        </div>

        {/* ── Category picker ── */}
        {!selected && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              Pick a category
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect(cat.id)}
                    className="group text-left w-full rounded-2xl border-2 border-border bg-card hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all p-5 min-h-[7rem]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 text-3xl leading-none" aria-hidden="true">
                        {cat.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                          <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                          {cat.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {cat.tagline}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 font-medium">
                          {cat.resources.length} resources
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── Universal warning cards (shown before detail is picked) ── */}
            <div className="grid gap-4 mt-10 sm:grid-cols-2">
              {/* How to spot a fake "free" site */}
              <Card className="border-2 border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-900 dark:text-red-200">
                    <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                    How to spot a fake "free" site
                  </h3>
                  <ul className="space-y-2 text-base text-red-900 dark:text-red-100">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      <span>Pirated movies, software, or books — the downloads are almost always bundled with malware.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      <span>An offer that sounds too good to be true — a "free" iPhone, shopping card, or vacation is a scam.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      <span>A "free" trial that demands a credit card. Most auto-charge on day 8 and count on you forgetting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      <span>A site with misspelled brand names, no contact page, and no U.S. address — close the tab.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Support these free services */}
              <Card className="border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
                    <HandCoins className="h-6 w-6" aria-hidden="true" />
                    Support these free services
                  </h3>
                  <p className="text-base text-emerald-900 dark:text-emerald-100 leading-relaxed">
                    If a nonprofit, library, or open-source project has saved you money, consider a small donation when you can. It is never required — but projects like Wikipedia, Project Gutenberg, and Internet Archive run on donations from people like you. Even $5 once a year helps keep them free for everyone.
                  </p>
                </CardContent>
              </Card>

              {/* Ask your library */}
              <Card className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800 sm:col-span-2">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-blue-900 dark:text-blue-200">
                    <Library className="h-6 w-6" aria-hidden="true" />
                    Ask your local library
                  </h3>
                  <p className="text-base text-blue-900 dark:text-blue-100 leading-relaxed">
                    Librarians are a free research help desk. Stop by or call your branch — they can help you sign up for Libby, find free classes, print forms, search old newspapers, and answer almost any question. Many libraries also loan out laptops, hotspots, and even telescopes and musical instruments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* ── Detail view ── */}
        {selected && (
          <div id="free-resource-detail">
            {/* Back button */}
            <Button
              variant="ghost"
              size="lg"
              onClick={handleReset}
              className="mb-4 gap-2 text-base min-h-14"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              Back to all categories
            </Button>

            {/* Detail header */}
            <Card className="mb-6 border-2 border-emerald-300 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-5xl leading-none" aria-hidden="true">
                    {selected.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-emerald-900 dark:text-emerald-200">
                      {selected.title}
                    </h2>
                    <p className="text-base text-emerald-900/90 dark:text-emerald-100/90 mb-2 font-medium">
                      {selected.tagline}
                    </p>
                    <p className="text-base text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed">
                      {selected.blurb}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {selected.resources.map((r, i) => {
                const isExternal = /^https?:\/\//i.test(r.url);
                return (
                  <Card key={i} className="border-2 hover:border-emerald-400 transition-colors h-full">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-bold leading-tight">{r.name}</h3>
                        <Badge
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200 shrink-0"
                        >
                          Free
                        </Badge>
                      </div>
                      <p className="text-base text-foreground mb-3 leading-relaxed">
                        {r.what}
                      </p>
                      <dl className="space-y-2 text-sm mb-4 flex-1">
                        <div>
                          <dt className="font-semibold text-muted-foreground">Who runs it</dt>
                          <dd className="text-foreground">{r.who}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-muted-foreground">What's free</dt>
                          <dd className="text-foreground">{r.free}</dd>
                        </div>
                        {r.caveat && (
                          <div>
                            <dt className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                              Heads-up
                            </dt>
                            <dd className="text-foreground">{r.caveat}</dd>
                          </div>
                        )}
                      </dl>
                      <a
                        href={r.url}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer noopener' : undefined}
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 min-h-14 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        Visit {r.name}
                        {isExternal && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                onClick={handleReset}
                className="gap-2 min-h-14 text-base bg-emerald-600 hover:bg-emerald-700"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                Browse another category
              </Button>
            </div>
          </div>
        )}

        {/* ── FAQ ── */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-lg font-semibold text-left min-h-14">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ── Trust reminder ── */}
        <Alert className="mt-10 border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800">
          <CheckCircle2 className="h-5 w-5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
          <AlertTitle className="text-base font-semibold text-emerald-900 dark:text-emerald-200">
            Every link on this page goes straight to the official source.
          </AlertTitle>
          <AlertDescription className="text-base text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
            We reviewed each service before adding it. If you ever land on a site that looks off — odd URL, strange fonts, urgent pop-ups asking for a credit card — close the tab and come back here to re-open the real link.
          </AlertDescription>
        </Alert>

        {/* ── Related tools ── */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            Related TekSure tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {RELATED.map((r, i) => (
              <Link
                key={i}
                to={r.path}
                className="flex items-center justify-between rounded-xl border-2 border-border bg-card hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/20 px-4 py-3 min-h-14 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <span>{r.title}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
