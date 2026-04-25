import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Headphones,
  Film,
  Music,
  GraduationCap,
  Languages,
  Users as UsersIcon,
  FileText,
  Library,
  IdCard,
  Laptop,
  Tv,
  Download,
  Wifi,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Volume2,
  Clock,
  Star,
  Heart,
  Mail,
  MapPin,
  Image as ImageIcon,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Library Tech Helper
 * ------------------------------------------------------------
 * A senior-friendly walkthrough for using public library
 * digital services with a library card: ebooks, audiobooks,
 * movies, music, courses, genealogy, and more.
 *
 * Modeled on VoiceAssistantSetup.tsx — plain language, large
 * tap targets, step-by-step wizard, deep dives, FAQ.
 * ────────────────────────────────────────────────────────────── */

/* ── App picker data ─────────────────────────────────────────── */

type AppId =
  | 'libby'
  | 'hoopla'
  | 'kanopy'
  | 'cloudlibrary'
  | 'overdrive'
  | 'mango'
  | 'linkedin'
  | 'ancestry'
  | 'consumerreports';

interface AppItem {
  id: AppId;
  name: string;
  tagline: string;
  icon: LucideIcon;
  content: string;
  platforms: string;
  free: string;
  support: { label: string; url: string };
}

const APPS: AppItem[] = [
  {
    id: 'libby',
    name: 'Libby',
    tagline: 'Ebooks and audiobooks from your library — the most popular app.',
    icon: BookOpen,
    content: 'Ebooks, audiobooks, magazines',
    platforms: 'iPhone, iPad, Android, Kindle Fire, web browser, Kindle e-readers (US only)',
    free: 'Free with any US library card. Borrow up to 5–20 titles at a time depending on your library.',
    support: { label: 'Libby Help', url: 'https://help.libbyapp.com/' },
  },
  {
    id: 'hoopla',
    name: 'Hoopla',
    tagline: 'Instant borrows — no wait list. Movies, TV, music, ebooks, audiobooks, comics.',
    icon: Film,
    content: 'Movies, TV shows, music, audiobooks, ebooks, comics',
    platforms: 'iPhone, iPad, Android, Fire TV, Roku, Apple TV, Chromecast, web browser',
    free: 'Free with a participating library card. Monthly borrow limit set by your library (often 4–10 titles/month).',
    support: { label: 'Hoopla Help', url: 'https://www.hoopladigital.com/help' },
  },
  {
    id: 'kanopy',
    name: 'Kanopy',
    tagline: 'Classic films, documentaries, Great Courses, PBS — ad-free.',
    icon: Film,
    content: 'Films, documentaries, courses, kids shows',
    platforms: 'iPhone, iPad, Android, Roku, Fire TV, Apple TV, Chromecast, web browser',
    free: 'Free with a participating library card. Monthly credit limit (often 4–30 credits). Kanopy Kids is unlimited.',
    support: { label: 'Kanopy Help', url: 'https://help.kanopy.com/' },
  },
  {
    id: 'cloudlibrary',
    name: 'CloudLibrary',
    tagline: 'An alternative to Libby — some libraries use this instead.',
    icon: BookOpen,
    content: 'Ebooks and audiobooks',
    platforms: 'iPhone, iPad, Android, Windows, Mac, web browser',
    free: 'Free with a participating library card. Borrow limits set by your library.',
    support: { label: 'CloudLibrary Help', url: 'https://www.yourcloudlibrary.com/help/' },
  },
  {
    id: 'overdrive',
    name: 'OverDrive (classic)',
    tagline: 'The older version of Libby — still available, but Libby is recommended.',
    icon: BookOpen,
    content: 'Ebooks, audiobooks, magazines',
    platforms: 'Still available on some older devices. OverDrive retired the app on most platforms in 2023 — use Libby instead.',
    free: 'Free with a library card. Your loans move over to Libby automatically.',
    support: { label: 'OverDrive → Libby migration', url: 'https://company.overdrive.com/libraries/faq/' },
  },
  {
    id: 'mango',
    name: 'Mango Languages',
    tagline: 'Learn 70+ languages with audio lessons and offline mode.',
    icon: Languages,
    content: '70+ language courses, including English for speakers of 20+ native languages',
    platforms: 'iPhone, iPad, Android, web browser',
    free: 'Free with a participating library card. Set daily goals and track streaks.',
    support: { label: 'Mango Help', url: 'https://support.mangolanguages.com/' },
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Learning (via library)',
    tagline: '16,000+ courses on tech, business, art — free through your library.',
    icon: GraduationCap,
    content: 'Video courses, certificates, learning paths',
    platforms: 'iPhone, iPad, Android, web browser',
    free: 'Free with a participating library card — normally $30/month direct. Earn certificates you can add to LinkedIn.',
    support: { label: 'LinkedIn Learning Help', url: 'https://www.linkedin.com/help/learning' },
  },
  {
    id: 'ancestry',
    name: 'Ancestry Library Edition',
    tagline: 'The full Ancestry.com database — census, military, immigration records.',
    icon: UsersIcon,
    content: 'Billions of genealogy records',
    platforms: 'Web browser only. Must be used at a library with reciprocal access (some libraries allow home access).',
    free: 'Free with a participating library card. Different from paid Ancestry — you keep your tree on a free account.',
    support: { label: 'Ancestry Library Edition info', url: 'https://www.ancestryheritagequest.com/' },
  },
  {
    id: 'consumerreports',
    name: 'Consumer Reports (via library)',
    tagline: 'Product reviews, car buying guides, appliance ratings — free.',
    icon: FileText,
    content: 'Reviews for cars, appliances, electronics, health products',
    platforms: 'Web browser',
    free: 'Free with a participating library card — normally $39/year. Great before a big purchase.',
    support: { label: 'Consumer Reports help', url: 'https://www.consumerreports.org/cro/resources/help-desk.htm' },
  },
];

/* ── Setup wizard steps (shown per chosen app) ──────────────── */

interface Step {
  title: string;
  instruction: string;
  stumble?: string;
  screenshot: string;
}

interface AppWizard {
  id: AppId;
  name: string;
  shortName: string;
  icon: LucideIcon;
  estTime: string;
  steps: Step[];
  firstActions: string[];
  deepDive?: DeepDive;
}

interface DeepDive {
  title: string;
  sections: Array<{ heading: string; body: string }>;
}

/* Libby — the most important one, so full deep dive ─────────── */
const LIBBY: AppWizard = {
  id: 'libby',
  name: 'Libby by OverDrive',
  shortName: 'Libby',
  icon: BookOpen,
  estTime: '10 – 15 minutes',
  steps: [
    {
      title: 'Install the free Libby app',
      instruction:
        'On your iPhone, iPad, or Android phone, open the App Store or Play Store. Search for "Libby" — the icon is a pink L on a light background. Tap Get or Install. There are no in-app purchases, no ads, and no account fee. On a Kindle Fire, find Libby in the Amazon Appstore. On a computer, visit libbyapp.com in a browser.',
      stumble:
        'Make sure it is "Libby" by OverDrive — there are similar-looking apps from other publishers. The developer name should read "OverDrive, Inc."',
      screenshot: 'Libby app icon in the App Store with pink L logo',
    },
    {
      title: 'Open Libby and say "Yes, I have a library card"',
      instruction:
        'The first screen asks "Do you have a library card?" Tap Yes. The next screen offers two ways to find your library: "Guess My Library" (uses your location) or "Search for a Library". Either works. Type your library\'s name or ZIP code if prompted.',
      stumble:
        'Some libraries share systems with nearby towns. If you do not see your library by name, try searching for the county or regional system (for example "Hennepin County Library" rather than "Minneapolis Public Library").',
      screenshot: 'Libby welcome screen with "Yes, I have a library card" button',
    },
    {
      title: 'Enter your library card number and PIN',
      instruction:
        'Pick your library from the list. Libby asks for your card number (usually 10–14 digits on the back of your card) and sometimes a PIN. Your PIN is often the last 4 digits of your phone number or a 4-digit code the library gave you. If you are not sure, call your library.',
      stumble:
        'Type the card number without spaces or dashes. If Libby keeps saying "card not found", make sure you picked the right branch — a neighboring library might have a similar name.',
      screenshot: 'Libby sign-in screen with card number and PIN fields',
    },
    {
      title: 'Pick your reading device',
      instruction:
        'Libby will ask where you want to read ebooks. Pick one: "This device" (read in Libby on your phone or tablet) or "Kindle" (send books to your Kindle e-reader via Amazon). If you have a Kindle, pick Kindle — the text is crisper on paper-like screens.',
      stumble:
        'You can change this later: tap the Libby icon at the bottom right, then Settings → Read Books With. Many people use both — some books on the phone, some on a Kindle.',
      screenshot: 'Libby "Where would you like to read?" screen',
    },
    {
      title: 'Borrow your first book',
      instruction:
        'Tap the magnifying glass at the bottom and search for any title — try "The Secret Garden" or a recent bestseller. If the book shows "Available", tap Borrow → confirm the loan period (usually 14 or 21 days). If it shows "Place Hold", you can add yourself to the waitlist. The book appears in your Shelf.',
      stumble:
        'Popular new releases often have 8–12 week waits — this is normal. Look at the small "Available" tag and tap "Available now" at the top of search results to see only books you can borrow today.',
      screenshot: 'Libby search results with "Available" and "Borrow" buttons',
    },
    {
      title: 'Place a hold on a book you want later',
      instruction:
        'If a book is not available, tap Place Hold. Libby shows your place in line and an estimated wait time. Most libraries let you have 10–20 holds at a time. You will get an email when the book is ready — you then have 3 days to borrow it or pass.',
      stumble:
        'If a hold comes in at a bad time (vacation, hospital stay), tap the book → "Deliver Later" to pause it. Your place in line is kept, and it will come back when you are ready.',
      screenshot: 'Libby "Place Hold" confirmation with wait time estimate',
    },
    {
      title: 'Add books to a wish list (tag them)',
      instruction:
        'Find a book you want to read someday but do not want to borrow right now. Tap the three-line icon → Tag → "Add to a tag" → New Tag → name it "Want to Read". You can make tags for anything: Book Club, Summer Reading, Cookbooks. This is your personal wish list — only you see it.',
      stumble:
        'Tags stay with your account across all your libraries, so if you switch libraries your list comes with you. Tap the Libby icon → Tags to see all your lists.',
      screenshot: 'Libby "Add to a tag" dialog with tag name field',
    },
    {
      title: 'Check your borrow limits',
      instruction:
        'Tap the Libby icon (bottom right) → your library\'s name. You will see your current checkouts, holds, and limits. Most libraries allow 5–20 borrows and 10–20 holds at a time. Borrow periods are usually 7, 14, or 21 days. You can return a book early to free up space.',
      stumble:
        'Borrow limits reset when a loan ends or you return a book, not on a set date. If you hit your limit, return the book you are done with — no late fees, no fuss.',
      screenshot: 'Libby library card summary showing loans and holds remaining',
    },
  ],
  firstActions: [
    'Borrow an available ebook and start reading',
    'Place a hold on a popular title — expect 8–12 weeks',
    'Try an audiobook with the sleep timer',
    'Add 5 books to a "Want to Read" tag',
    'Adjust font size from the book menu for easier reading',
    'Send a library book to your Kindle',
  ],
  deepDive: {
    title: 'Libby deep dive — get the most out of it',
    sections: [
      {
        heading: 'Ebook vs audiobook — and streaming vs download',
        body:
          'Libby offers two formats: ebooks (read the words) and audiobooks (listen to a narrator). Both work the same way — Borrow, read or listen, return. For audiobooks, you can stream (uses Wi-Fi or cellular data) or download (takes up phone storage but works offline, perfect for flights and road trips). Tap the book → three dots → Download → Download now.',
      },
      {
        heading: 'Send a book to your Kindle',
        body:
          'After borrowing, tap the book on your Shelf → "Read With..." → Kindle. You will be sent to Amazon to confirm — sign in once with the Amazon email tied to your Kindle. After that, every Libby book you borrow will show up on your Kindle Library within a minute. US-only because of publisher licensing. Works on all Kindle e-readers and the Kindle app.',
      },
      {
        heading: 'Speed control for audiobooks',
        body:
          'In any Libby audiobook, tap the clock speed icon at the bottom (shows "1.0x"). You can slow a fast narrator to 0.75x or speed a slow one to 1.5x. Start with 1.25x if a narrator feels slow — most people get used to it within 20 minutes and finish books faster without losing comprehension.',
      },
      {
        heading: 'Sleep timer for bedtime listening',
        body:
          'Audiobook menu → clock icon with zzz → pick 15, 30, 45, or 60 minutes. Libby fades out at the end of the current chapter so you do not wake up confused about where you left off. Tap "End of chapter" to let it finish whatever chapter it is on.',
      },
      {
        heading: 'Dyslexia-friendly font and other reading aids',
        body:
          'In any ebook, tap the "Aa" icon at the top. You can change font size, line spacing, page color (dark mode for night), and even switch to OpenDyslexic, a font designed for easier reading. No judgment — use what helps you read more.',
      },
      {
        heading: 'Return a book early',
        body:
          'Unlike late fees at the physical library, Libby returns books automatically at the end of your loan. But if you finish early, return it so someone else can read it: Shelf → the book → Manage Loan → Return Early. This is a quiet kindness other patrons will never know about but will benefit from.',
      },
      {
        heading: 'How holds and wait times really work',
        body:
          'Libby wait times depend on two things: how many digital copies your library bought, and how many people are ahead of you. Popular new releases (think "the latest celebrity memoir") often have 8–12 week waits. A good trick: place 10–15 holds on a mix of new releases and older books. One pops in every week or two, rather than all at once.',
      },
      {
        heading: 'Lucky Day and Skip the Line shelves',
        body:
          'Many libraries keep a special pool of extra copies of popular titles, called "Lucky Day" or "Skip the Line". These have shorter loan periods (sometimes 7 days) and cannot be renewed or held — you either grab one now or wait. Tap your library\'s name → Explore → look for a Lucky Day shelf. Great for readers who want the newest books without a long wait.',
      },
    ],
  },
};

/* Hoopla — binge content, no wait lists */
const HOOPLA: AppWizard = {
  id: 'hoopla',
  name: 'Hoopla',
  shortName: 'Hoopla',
  icon: Film,
  estTime: '8 – 12 minutes',
  steps: [
    {
      title: 'Install Hoopla and open the app',
      instruction:
        'Search "Hoopla Digital" in the App Store or Play Store and install. The icon is a bright blue H. Hoopla also works on Roku, Fire TV, Apple TV, and Chromecast — set it up on your phone first, then sign in on the TV.',
      stumble:
        'Not every library offers Hoopla. If your library is not on the list, ask a librarian which streaming service your library uses — it might be Kanopy or CloudLibrary instead.',
      screenshot: 'Hoopla app icon in the App Store',
    },
    {
      title: 'Create a free Hoopla account',
      instruction:
        'Tap Sign Up. Enter your email and pick a password (or use "Sign in with Apple" to skip the password). Hoopla will send a confirmation link — open it from your email inbox to activate.',
      stumble:
        'Your Hoopla email is separate from your library card — pick one you check often so you get borrow reminders and expiration notices.',
      screenshot: 'Hoopla sign-up screen with email and password fields',
    },
    {
      title: 'Pick your library and enter your card',
      instruction:
        'Search for your library by name or ZIP. Enter your library card number and PIN. Hoopla verifies with your library in a few seconds.',
      stumble:
        'If your library is not listed, try the county system name (for example "Dallas County Public Library") instead of your branch.',
      screenshot: 'Hoopla library selection with card number field',
    },
    {
      title: 'Understand your monthly borrow limit',
      instruction:
        'Your library sets a monthly borrow cap — usually 4, 6, 8, or 10 borrows per month. The counter resets on the 1st of every month. Look at the top of the Hoopla home screen for "X borrows remaining this month".',
      stumble:
        'Unlike Libby, Hoopla has instant borrows — no waitlists. That is why there is a monthly limit. Pace yourself: save your last 1–2 borrows for late in the month when you find something new.',
      screenshot: 'Hoopla home screen showing "borrows remaining this month"',
    },
    {
      title: 'Borrow your first movie, audiobook, or comic',
      instruction:
        'Tap the magnifying glass and search for anything — a movie title, an artist name, a book. Tap Borrow to instantly check it out. Movies and TV episodes are loaned for 3 days, music for 7 days, ebooks and audiobooks for 21 days, comics for 21 days.',
      stumble:
        'A whole TV season (10 episodes) counts as ONE borrow — not 10. Great deal. Same for full music albums.',
      screenshot: 'Hoopla title page with "Borrow" button and loan period',
    },
    {
      title: 'Try a BingePass — a whole series as one borrow',
      instruction:
        'BingePasses give unlimited access to a whole set of content for 7 days, counting as a single borrow. Popular ones: Great Courses (thousands of lecture courses), Curiosity Stream (documentaries), Kidspiration bundles, Magazines pass (100+ magazines). Search "BingePass" on the home screen.',
      stumble:
        'A BingePass expires 7 days from when you borrow it — not 7 days from when you last watched. Use it on a vacation week or a quiet weekend for the best value.',
      screenshot: 'Hoopla BingePass collection with "Great Courses" tile',
    },
    {
      title: 'Watch on your TV (Roku, Fire TV, Apple TV, Chromecast)',
      instruction:
        'On your TV\'s app store, search for "Hoopla Digital" and install. Open it and pick "Sign in on the web". The TV will show a 4-letter code. On your phone or computer, go to hoopladigital.com/link and type the code. That\'s it — every borrow from your phone now shows up on your TV.',
      stumble:
        'Your Wi-Fi and the TV\'s Wi-Fi must be on the same network for the first setup. If the code does not work, make sure you are signed into the Hoopla website on your computer first.',
      screenshot: 'TV screen showing Hoopla 4-letter sign-in code',
    },
  ],
  firstActions: [
    'Borrow a full season of a TV show (still one borrow)',
    'Try a BingePass for a whole week of learning',
    'Download a graphic novel for offline reading',
    'Create a Hoopla Kids profile for grandkids',
    'Borrow a full music album for a family drive',
    'Cast a movie to your TV via Chromecast or AirPlay',
  ],
  deepDive: {
    title: 'Hoopla deep dive — the unique stuff',
    sections: [
      {
        heading: 'A TV season counts as one checkout',
        body:
          'Hoopla treats a whole TV season as a single borrow. That means "The Great British Baking Show Season 5" (8 episodes) is 1 of your 6 monthly borrows — not 8. This is far more generous than most rental services. Check the seasons list before you start — some shows have 10+ seasons, and each is a separate borrow.',
      },
      {
        heading: 'BingePasses — unlimited access for 7 days',
        body:
          'BingePasses are a relatively new feature. For one borrow, you get unlimited access to a collection for 7 full days. Examples: The Great Courses Plus (thousands of university-level lectures), Curiosity Stream (documentaries), DIY Network shows, Magazines pass (100+ titles). If you know you will have a quiet week, a single BingePass can replace several streaming subscriptions.',
      },
      {
        heading: 'Graphic novels and comics',
        body:
          'Hoopla has one of the largest comic libraries of any library app — tens of thousands of titles from DC, Marvel, Dark Horse, Image, and independent publishers. Great for readers who grew up on newspaper funnies or want to try something new. Tap the Comics tab; swipe through pages or use the guided "panel-by-panel" view that zooms in on one frame at a time.',
      },
      {
        heading: 'Full music albums',
        body:
          'Borrow a complete album (say, The Beatles\' "Abbey Road") for 7 days — the whole thing counts as 1 borrow. Download for offline listening on road trips or flights. Great for exploring a new artist without signing up for a streaming service.',
      },
      {
        heading: 'Kids mode is separate',
        body:
          'Hoopla Kids filters everything to age-appropriate content. Turn it on in Settings → Kids Mode and set a 4-digit PIN. Grandkids can browse on their own without stumbling into grown-up content. Works on phone, tablet, and TV apps.',
      },
    ],
  },
};

/* Kanopy — arthouse films, Great Courses, PBS kids */
const KANOPY: AppWizard = {
  id: 'kanopy',
  name: 'Kanopy',
  shortName: 'Kanopy',
  icon: Film,
  estTime: '7 – 10 minutes',
  steps: [
    {
      title: 'Install Kanopy on your phone or TV',
      instruction:
        'On your phone, search "Kanopy" in the App Store or Play Store. The icon is an orange film strip on white. Kanopy also works on Roku, Fire TV, Apple TV, and Chromecast — install there the same way.',
      stumble:
        'There are a few apps with "Kanopy" in the name — the right one is published by "Kanopy, Inc." with an orange icon.',
      screenshot: 'Kanopy app icon in the App Store',
    },
    {
      title: 'Sign up with email and pick your library',
      instruction:
        'Open Kanopy and tap Get Started. Enter your email and pick a password. Kanopy asks for your library — type your library\'s name or ZIP. If your library is on the network, you\'ll be asked for your card number. Enter it.',
      stumble:
        'Not every library has Kanopy. If yours does not, some universities do — if you are taking community college classes, check your student ID for Kanopy access.',
      screenshot: 'Kanopy "Find Your Library" search screen',
    },
    {
      title: 'Understand how credits work',
      instruction:
        'Most films cost 1–5 "credits". Your library gives you a set number of credits each month (often 4, 8, 15, or 30). Once you tap Play on a film, the credits are spent — you then have 3 days of unlimited re-watches. Credits reset on the 1st of every month.',
      stumble:
        'A credit is only spent when you press Play — browsing and adding to My List is free. Some films say "Free" or "Plays" under the poster — these do not use credits.',
      screenshot: 'Kanopy film page showing "1 play" credit cost',
    },
    {
      title: 'Try Kanopy Kids — unlimited with no credits',
      instruction:
        'From the home screen, tap Kanopy Kids (or set up a profile for a grandchild). Kids content uses no credits — unlimited plays. PBS Kids, Sesame Street, Pocoyo, and more are included.',
      stumble:
        'Kanopy Kids has a 4-digit exit PIN so little ones cannot wander back to grown-up content. Set the PIN in Settings → Kanopy Kids.',
      screenshot: 'Kanopy Kids home screen with PBS Kids and Sesame Street tiles',
    },
    {
      title: 'Explore The Great Courses Plus on Kanopy',
      instruction:
        'Search "Great Courses" in Kanopy. You get the full library of Great Courses Plus — university-level lectures on history, cooking, music, science, and philosophy. Each lecture series is usually 1 credit total, not per episode.',
      stumble:
        'Some Great Courses are labeled "Free" with no credit cost — search "Great Courses Free" to see those.',
      screenshot: 'Kanopy Great Courses category page',
    },
    {
      title: 'Watch on your TV',
      instruction:
        'Install Kanopy on Roku, Fire TV, or Apple TV. Sign in on your TV — it shows a 6-character code. On your phone or computer, go to kanopy.com/link and enter the code. That\'s it — all your credits and My List show up on the TV.',
      stumble:
        'On Roku, if Kanopy does not appear in search, try "Kanopy" (no quotes) in the Roku channel store. Some older Rokus from before 2017 may not support Kanopy.',
      screenshot: 'TV showing Kanopy 6-character sign-in code',
    },
  ],
  firstActions: [
    'Watch an Oscar-nominated classic you missed',
    'Try one Great Courses lecture from start to finish',
    'Set up Kanopy Kids for grandkids',
    'Add 10 films to My List — browsing is free',
    'Watch a PBS Masterpiece drama',
    'Try a Criterion Collection film (many are on Kanopy)',
  ],
  deepDive: {
    title: 'Kanopy deep dive — what it does best',
    sections: [
      {
        heading: 'Credits per month vary by library — check yours',
        body:
          'Different libraries budget different credit amounts. Small towns might give 4–6 per month; big-city libraries often give 10–30. Tap Settings → your library\'s name to see your monthly allotment. If you want more, a librarian may be able to tell you which neighbor library has a bigger allotment and reciprocal access.',
      },
      {
        heading: 'The Great Courses Plus — a huge bonus',
        body:
          'Kanopy includes almost the entire Great Courses Plus catalog. These are university-level lecture series taught by professors — cooking, history, music theory, chess, art. A single full course (often 24 lectures) usually costs 1 credit total, which is an extraordinary deal. Search "Great Courses" to browse.',
      },
      {
        heading: 'PBS shows, Masterpiece, and Frontline',
        body:
          'Kanopy licenses a rotating collection of PBS and BBC series — Downton Abbey, Call the Midwife, Frontline documentaries. Selection changes every few months. Search "PBS" or "Masterpiece" to see what is available today.',
      },
      {
        heading: 'Kanopy Kids is unlimited — always',
        body:
          'Unlike the adult catalog, Kanopy Kids uses no credits. Grandkids can watch as much PBS Kids, Sesame Street, and other age-appropriate shows as they want. Pair this with the 4-digit exit PIN so they cannot leave the Kids section.',
      },
    ],
  },
};

/* CloudLibrary */
const CLOUDLIBRARY: AppWizard = {
  id: 'cloudlibrary',
  name: 'CloudLibrary',
  shortName: 'CloudLibrary',
  icon: BookOpen,
  estTime: '8 – 12 minutes',
  steps: [
    {
      title: 'Install the cloudLibrary app',
      instruction:
        'Search "cloudLibrary" in the App Store or Play Store. The icon is a blue C with a cloud. On a computer, visit yourcloudlibrary.com.',
      stumble:
        'Some libraries use CloudLibrary instead of Libby. Both do ebooks and audiobooks — your library probably picked one, not both.',
      screenshot: 'cloudLibrary app icon in the App Store',
    },
    {
      title: 'Pick your library and sign in',
      instruction:
        'Open the app and tap "Please choose your library". Pick your country → state → library system → your library branch. Enter your card number and PIN.',
      stumble:
        'If you do not see your library in the list, it may not use CloudLibrary. Ask a librarian, or check the library website for "digital library" links.',
      screenshot: 'cloudLibrary library picker with state/library dropdowns',
    },
    {
      title: 'Browse and borrow a book',
      instruction:
        'Tap Browse or Featured. Tap any book → Borrow. Loan periods are usually 21 days. The book downloads and opens in the app.',
      stumble:
        'If a book is not available, tap "Hold" to join the waitlist. Most libraries allow 5–10 holds at a time.',
      screenshot: 'cloudLibrary book page with "Borrow" and "Hold" buttons',
    },
    {
      title: 'Start reading or listening',
      instruction:
        'Tap My Books to see your current loans. Tap the book to open it. For audiobooks, use the playback controls at the bottom — speed, sleep timer, and chapter navigation.',
      stumble:
        'Audiobook downloads can be slow on Wi-Fi under 10 Mbps — let it download fully before you leave the house.',
      screenshot: 'cloudLibrary My Books shelf with active loans',
    },
    {
      title: 'Return a book early',
      instruction:
        'My Books → long-press the book → Return. The book is removed from your loans right away and someone else can borrow it.',
      stumble:
        'Returning early does NOT save a slot in your limit immediately on some library systems — the slot opens when the original loan period would have ended. Check with your librarian if you hit the cap.',
      screenshot: 'cloudLibrary long-press menu with "Return" option',
    },
    {
      title: 'Adjust reading settings',
      instruction:
        'Inside any book, tap the center of the page for the menu. The "Aa" icon lets you change font size, background color, line spacing, and brightness. Dark mode ("night theme") is great for bedtime reading.',
      stumble:
        'CloudLibrary does not have a dyslexia font option as of early 2026. If you need one, Libby does — ask your library if they can switch you over.',
      screenshot: 'cloudLibrary reading settings with font and color options',
    },
  ],
  firstActions: [
    'Borrow one ebook and read the first chapter',
    'Start an audiobook during a walk',
    'Place holds on 3 new releases',
    'Try dark mode for bedtime reading',
    'Download a book for an upcoming trip',
  ],
};

/* OverDrive (classic) */
const OVERDRIVE: AppWizard = {
  id: 'overdrive',
  name: 'OverDrive (classic)',
  shortName: 'OverDrive',
  icon: BookOpen,
  estTime: '5 – 8 minutes',
  steps: [
    {
      title: 'Check if OverDrive still works for you',
      instruction:
        'OverDrive retired the app on most platforms in 2023 and replaced it with Libby. If you have an older Kindle Fire or basic tablet, OverDrive may still work — but Libby is now the recommended app.',
      stumble:
        'If OverDrive still shows in your app tray, that is fine. But the company no longer updates it. Plan to switch to Libby within the next year.',
      screenshot: 'OverDrive app icon next to Libby app icon',
    },
    {
      title: 'Install Libby instead (recommended)',
      instruction:
        'Go to the App Store or Play Store and install Libby. Your OverDrive loans and holds transfer automatically — no data loss, same library card.',
      stumble:
        'If Libby asks about existing OverDrive loans, tap Yes to import. Your history and wish list move over in seconds.',
      screenshot: 'Libby welcome screen with "Import from OverDrive" option',
    },
    {
      title: 'Keep OverDrive on a Kindle Fire or legacy device only',
      instruction:
        'On a legacy device like an older Kindle Fire or a work-issued iPad you cannot update, OverDrive classic can still work. Open it, pick your library, sign in with your card.',
      stumble:
        'OverDrive no longer adds new features. If a book does not show up in OverDrive, it probably exists in Libby — use Libby on a phone for full catalog access.',
      screenshot: 'OverDrive home screen on older Kindle Fire',
    },
    {
      title: 'Move to Libby for new devices',
      instruction:
        'Any phone or tablet made after 2020 should use Libby. OverDrive is being fully retired. Do not spend time learning OverDrive if you have a newer phone — go straight to Libby.',
      stumble:
        'Your library card works the same in both apps. You can keep using an old OverDrive install for a while without problems, but plan for the switch.',
      screenshot: 'Comparison of OverDrive and Libby home screens',
    },
    {
      title: 'Export your wish list from OverDrive',
      instruction:
        'Open OverDrive → Wish List. Libby imports this automatically when you install it. If you ever need to re-import, sign out of Libby → sign back in → it pulls your list from the OverDrive cloud.',
      stumble:
        'If some books do not move over, they may have been removed from the library catalog since you added them. Search for them by title in Libby; most will still be there.',
      screenshot: 'OverDrive Wish List with books queued to import',
    },
  ],
  firstActions: [
    'Install Libby on your newer devices',
    'Let OverDrive sync your wish list over',
    'Uninstall OverDrive after 30 days if Libby works fine',
    'Keep your library card number handy for the switch',
  ],
};

/* Mango Languages */
const MANGO: AppWizard = {
  id: 'mango',
  name: 'Mango Languages',
  shortName: 'Mango',
  icon: Languages,
  estTime: '6 – 10 minutes',
  steps: [
    {
      title: 'Install Mango Languages',
      instruction:
        'Search "Mango Languages" in the App Store or Play Store. The icon is an orange mango. On a computer, visit mangolanguages.com.',
      stumble:
        'The name is singular — "Mango Languages" from Mango Languages, Inc. Not to be confused with the clothing app of the same name.',
      screenshot: 'Mango Languages app icon in the App Store',
    },
    {
      title: 'Sign in via your library',
      instruction:
        'Tap "Get Started" → "Sign in with your library". Search for your library\'s name. Enter your card number and PIN. Mango creates a free account tied to your library.',
      stumble:
        'If your library is not listed, Mango is not included there. Call your librarian and ask if they could add it — libraries often consider requests.',
      screenshot: 'Mango library sign-in screen with card number field',
    },
    {
      title: 'Pick a language',
      instruction:
        'Mango offers 70+ languages including Spanish, French, Italian, German, Chinese, Japanese, Korean, and less common ones like Cherokee, Yiddish, and Pirate. Tap Learn → your language → Start.',
      stumble:
        'There are different versions of Spanish (Latin American vs European) and Chinese (Mandarin vs Cantonese). Pick the one spoken where you plan to use it.',
      screenshot: 'Mango language picker with flag icons',
    },
    {
      title: 'Set a daily goal',
      instruction:
        'In Settings → Goals, pick 10, 15, or 30 minutes per day. Mango tracks streaks and sends a gentle reminder at a time you choose. Research shows 15 minutes a day beats 2 hours once a week.',
      stumble:
        'Miss a day? No guilt — tap the calendar and continue. The streak resets, not your progress. Lifetime vocabulary is saved forever.',
      screenshot: 'Mango daily goal setting screen',
    },
    {
      title: 'Try your first lesson',
      instruction:
        'Each lesson is about 10 minutes. You hear a native speaker say a sentence, then repeat it. Mango shows the sentence with color-coded parts explaining grammar. Tap the microphone to compare your pronunciation.',
      stumble:
        'Wear headphones or find a quiet spot — the microphone works much better when there is no TV or music in the background.',
      screenshot: 'Mango lesson screen with sentence and repeat button',
    },
    {
      title: 'Download a lesson for offline learning',
      instruction:
        'Tap the download icon next to any chapter to save it for offline use — great for flights and road trips. Downloaded lessons do not need Wi-Fi or cellular.',
      stumble:
        'Downloads take up 20–80 MB per chapter. If you are tight on phone storage, download only the chapter you are working on and delete it when done.',
      screenshot: 'Mango chapter download icon and storage estimate',
    },
    {
      title: 'Explore Little Pim (for grandkids)',
      instruction:
        'In Mango, scroll to "Kids" or search "Little Pim". It\'s a separate set of animated language courses for ages 0–6. Great for grandparents teaching grandkids a second language.',
      stumble:
        'Little Pim is in a separate tab — it does not count against any daily adult goal streak.',
      screenshot: 'Mango Little Pim kids language picker',
    },
  ],
  firstActions: [
    'Pick a language and complete the first lesson',
    'Set a 10-minute daily goal',
    'Download 3 chapters for offline practice',
    'Use the microphone to check your pronunciation',
    'Try a Little Pim video with a grandchild',
  ],
  deepDive: {
    title: 'Mango Languages deep dive',
    sections: [
      {
        heading: '70+ languages — including less common ones',
        body:
          'Mango covers the big languages (Spanish, French, German, Chinese) plus dozens of less common ones: Cherokee, Yiddish, Haitian Creole, Cantonese, Tagalog. There is even a Pirate course (for fun). If you have heritage or travel plans, Mango likely has a course for it.',
      },
      {
        heading: 'Offline mode works great on airplanes',
        body:
          'Download lessons to your phone over Wi-Fi before a trip, then use them with your phone in Airplane Mode. Audio and quizzes work with no internet. Progress syncs the next time you connect.',
      },
      {
        heading: 'Goal tracking and streaks',
        body:
          'Mango nudges you with a daily goal (10–30 minutes). Streaks feel good — they trigger a little dopamine hit. Miss a day? Mango asks "Take a break or keep going?" No pressure, no loss of progress. Aim for 15 minutes a day before 9 am — the habit sticks better that way.',
      },
      {
        heading: 'English for speakers of other languages',
        body:
          'Mango has English courses taught in 20+ native languages — including Spanish, Mandarin, Vietnamese, Arabic, Russian, Tagalog, and Brazilian Portuguese. If English is your second language or you know someone who is learning, this is an overlooked feature.',
      },
    ],
  },
};

/* LinkedIn Learning via library */
const LINKEDIN: AppWizard = {
  id: 'linkedin',
  name: 'LinkedIn Learning (via library)',
  shortName: 'LinkedIn Learning',
  icon: GraduationCap,
  estTime: '10 – 15 minutes',
  steps: [
    {
      title: 'Check if your library offers LinkedIn Learning',
      instruction:
        'Go to your library\'s website → look for "Digital Resources" or "Research". Look for LinkedIn Learning (sometimes still called "Lynda.com"). If you do not see it, call and ask — some libraries have it but hide it.',
      stumble:
        'Big-city libraries (New York Public, Los Angeles, Chicago) usually have it. Smaller libraries sometimes share access through a state-wide program.',
      screenshot: 'Library website digital resources page with LinkedIn Learning tile',
    },
    {
      title: 'Click the LinkedIn Learning link from your library site',
      instruction:
        'Always go through your library\'s website — this is how LinkedIn knows to give you free access. You will be asked for your library card number and PIN to sign in.',
      stumble:
        'Going direct to linkedin.com/learning will try to charge you $30/month. Start at your library\'s website every time.',
      screenshot: 'Library sign-in page directing to LinkedIn Learning',
    },
    {
      title: 'Link to your LinkedIn profile (optional but helpful)',
      instruction:
        'When prompted, you can link to your free LinkedIn profile (jobs site). This lets you: (a) earn certificates that appear on your resume, (b) save courses you started, (c) get matched to courses based on your interests. If you do not want to use LinkedIn the jobs site, you can skip — tap "Continue without LinkedIn".',
      stumble:
        'Linking your LinkedIn account does NOT share your learning history with employers or your network unless you choose to post about a certificate.',
      screenshot: 'LinkedIn Learning "Connect your LinkedIn" prompt',
    },
    {
      title: 'Search for a topic and start a course',
      instruction:
        'Use the search bar to find anything — "Excel basics", "photography for beginners", "how to give a wedding toast", "understanding Medicare". Courses are video lessons, usually 1–3 minutes each. Whole courses run 30 minutes to 5 hours.',
      stumble:
        'Sort by "Most Popular" to find courses with good reviews. Also look for the instructor name — Chris Croft and Dave Crenshaw have excellent beginner content.',
      screenshot: 'LinkedIn Learning search results with courses and filters',
    },
    {
      title: 'Take notes and track your progress',
      instruction:
        'Under any video, the Notes tab lets you jot things down — they are saved forever and searchable. Each finished video gives you a checkmark; finish all videos in a course to earn a certificate.',
      stumble:
        'You can download videos for offline use (mobile app only). Tap the download icon below any video on the iPhone or Android app.',
      screenshot: 'LinkedIn Learning video with Notes and Download buttons',
    },
    {
      title: 'Earn and share a certificate',
      instruction:
        'Finish all videos in a course → take the short quiz → you get a certificate of completion. You can download it as a PDF, or post it to your LinkedIn profile. 50,000+ courses with certificates — the catalog is one of the largest anywhere.',
      stumble:
        'Certificates are not accredited degrees, but hiring managers respect them for professional development. List them under "Licenses & Certifications" on your LinkedIn.',
      screenshot: 'LinkedIn Learning certificate of completion sample',
    },
  ],
  firstActions: [
    'Finish one 30-minute beginner course to build confidence',
    'Search for a topic you always wanted to learn',
    'Take notes inside a video so you can search them later',
    'Earn one certificate and save the PDF',
    'Download 3 videos for offline viewing on a flight',
  ],
  deepDive: {
    title: 'LinkedIn Learning deep dive — 16,000+ free courses',
    sections: [
      {
        heading: 'Yes, it is really free — through your library',
        body:
          'A normal LinkedIn Learning subscription is $39.99/month direct from LinkedIn. Through your library, the same full catalog is free — the library pays a site license. The catalog covers business, tech, art, personal development, music, photography, Microsoft Office, Adobe tools, and more. 16,000+ courses, with 50+ new ones added every week.',
      },
      {
        heading: 'Certificates you can add to your LinkedIn profile',
        body:
          'Every completed course grants a shareable certificate. Many employers recognize them. Add to your LinkedIn profile under "Licenses & Certifications" with one click. Good for retirees exploring new careers, volunteers learning nonprofit skills, and anyone building a portfolio.',
      },
      {
        heading: 'Learning Paths — a guided curriculum',
        body:
          'Instead of picking one course, "Learning Paths" group 5–15 courses on a topic into a sequence: "Become an Excel Power User", "Learn iPhone Photography", "Start a Small Business", "Understand Personal Finance". Great when you are not sure where to begin.',
      },
      {
        heading: 'Download videos for offline learning',
        body:
          'In the mobile app, every video has a download button. Saved videos work on airplanes, road trips, and in places with no Wi-Fi. Great for learning a new skill on your commute or during hospital stays.',
      },
    ],
  },
};

/* Ancestry Library Edition */
const ANCESTRY: AppWizard = {
  id: 'ancestry',
  name: 'Ancestry Library Edition',
  shortName: 'Ancestry Library',
  icon: UsersIcon,
  estTime: '10 – 15 minutes',
  steps: [
    {
      title: 'Check if your library offers Ancestry Library Edition',
      instruction:
        'Ancestry Library Edition (ALE) has most of the same records as paid Ancestry.com. Visit your library\'s website → Digital Resources → look for Ancestry Library Edition. Some libraries require you to be on library Wi-Fi; others allow at-home access.',
      stumble:
        'Ancestry Library Edition is different from paid Ancestry.com — your library pays for the research side. You still keep your family tree on a free Ancestry.com account.',
      screenshot: 'Library digital resources page with Ancestry Library Edition link',
    },
    {
      title: 'Start a free family tree on Ancestry.com',
      instruction:
        'Go to ancestry.com and tap "Sign up for free". Create an account (email and password). Start a tree with yourself at the bottom — enter your name, birth date, and place of birth. Add parents and grandparents as you remember.',
      stumble:
        'You do NOT need a paid Ancestry.com subscription. The free tree is forever, and it saves records you find through Library Edition research.',
      screenshot: 'Ancestry.com free tree builder starting screen',
    },
    {
      title: 'Open Ancestry Library Edition from your library',
      instruction:
        'Click the Library Edition link on your library website. It opens in your web browser. Sign in with your library card if prompted. The Library Edition interface looks like Ancestry.com — same search bars, same record types.',
      stumble:
        'Some libraries require you to be at a physical computer in the library building. Other libraries allow from-home access. Check your library\'s FAQ page.',
      screenshot: 'Ancestry Library Edition home screen accessed via library',
    },
    {
      title: 'Search census records for a relative',
      instruction:
        'Start with a grandparent you know. Enter their first and last name, birth year, and state. Pick "Census & Voter Lists" from the left. The 1940 and 1950 censuses are richest for living memory — they show family members, jobs, and home addresses.',
      stumble:
        'Names were often misspelled by census takers. If "Hernandez" gives no results, try "Hernandes" or search by first name only + state.',
      screenshot: 'Ancestry census search results for a 1940 family',
    },
    {
      title: 'Save records to your family tree',
      instruction:
        'On any record page, tap "Save to Tree". Pick the right person in your tree. The record is now attached forever — when you sign out of Library Edition, the record stays saved on your free Ancestry.com tree.',
      stumble:
        'You cannot edit or remove records once Library Edition closes, but you CAN from your free Ancestry.com account at home. Save liberally — you can clean up later.',
      screenshot: 'Ancestry "Save to Tree" dialog with person selector',
    },
    {
      title: 'Try immigration records and military records',
      instruction:
        'Under "Search" → pick "Immigration & Travel" for passenger lists (Ellis Island manifests), or "Military" for draft cards and service records. The 1917 WWI draft registration and 1942 WWII "Old Man\'s Draft" are goldmines — they include home address, employer, and physical description.',
      stumble:
        'If you do not find an ancestor on Ellis Island, try "Castle Garden" (the port before Ellis Island, 1855–1890) or other US ports (Baltimore, Philadelphia, New Orleans).',
      screenshot: 'Ancestry WWI draft registration card for a specific person',
    },
  ],
  firstActions: [
    'Build a free tree with yourself and your parents',
    'Find one grandparent in the 1940 census',
    'Search for an immigration record (ship manifest)',
    'Look up a WWI or WWII draft card',
    'Save 5 records to your free Ancestry.com tree',
  ],
};

/* Consumer Reports via library */
const CONSUMERREPORTS: AppWizard = {
  id: 'consumerreports',
  name: 'Consumer Reports (via library)',
  shortName: 'Consumer Reports',
  icon: FileText,
  estTime: '5 – 8 minutes',
  steps: [
    {
      title: 'Find Consumer Reports on your library website',
      instruction:
        'On your library\'s website, look for "Digital Resources" → Consumer Reports. Your library pays for a site license. Normally a Consumer Reports subscription is $39/year — free through your library.',
      stumble:
        'If it is not there, call your librarian — some libraries keep this hidden under a "Research & Learning" menu.',
      screenshot: 'Library digital resources page with Consumer Reports tile',
    },
    {
      title: 'Sign in with your library card',
      instruction:
        'Click the Consumer Reports link. Enter your library card number and PIN. You are now on the full Consumer Reports website with all ratings unlocked.',
      stumble:
        'Going to consumerreports.org directly will ask you to pay. Always start at the library site.',
      screenshot: 'Consumer Reports library sign-in with card field',
    },
    {
      title: 'Search before a big purchase',
      instruction:
        'Use Consumer Reports before buying a car, appliance, mattress, or TV. The ratings are free of advertising and based on lab tests. Search "refrigerators" or "2026 SUVs" to see head-to-head comparisons.',
      stumble:
        'Look for the red and green dots — red means poor, green means excellent. The "Best Buy" icon flags products that combine quality with a reasonable price.',
      screenshot: 'Consumer Reports refrigerator ratings with color dots',
    },
    {
      title: 'Read a car buying guide',
      instruction:
        'Go to Cars → Buying Guide. Consumer Reports rates reliability of every car model. The "Most Reliable" and "Least Reliable" lists can save you thousands in repairs over a decade.',
      stumble:
        'Older car reliability data is also available. Searching "2018 Toyota Camry reliability" will show long-term data, not marketing fluff.',
      screenshot: 'Consumer Reports car reliability chart for a specific model',
    },
    {
      title: 'Check ratings on a medication or health product',
      instruction:
        'Under Health → Medicines or Supplements, you can read reviews of hearing aids, blood pressure monitors, and prescription drugs. Independent tests without drug company influence.',
      stumble:
        'Consumer Reports is NOT a replacement for your doctor\'s advice. Use it to spot products with strong evidence — then ask your doctor.',
      screenshot: 'Consumer Reports hearing aid ratings page',
    },
  ],
  firstActions: [
    'Check reliability ratings for your next car',
    'Compare washing machines before a purchase',
    'Read the cell phone plan comparison',
    'Check blood pressure monitor reviews',
    'Look up mattress ratings by sleeping position',
  ],
};

const WIZARDS: Record<AppId, AppWizard> = {
  libby: LIBBY,
  hoopla: HOOPLA,
  kanopy: KANOPY,
  cloudlibrary: CLOUDLIBRARY,
  overdrive: OVERDRIVE,
  mango: MANGO,
  linkedin: LINKEDIN,
  ancestry: ANCESTRY,
  consumerreports: CONSUMERREPORTS,
};

/* ── "Don't have a card" steps ───────────────────────────────── */

interface SignupStep {
  title: string;
  body: string;
}

const IN_PERSON_STEPS: SignupStep[] = [
  {
    title: 'Bring a photo ID and proof of address',
    body:
      'Most libraries ask for two things: a photo ID (driver\'s license, state ID, passport) and proof of where you live (utility bill, mail from a bank or government agency, lease, or property tax bill). If you are under 18, a parent or guardian signs for you. If you are without a permanent address, ask the librarian — many libraries accept a letter from a shelter, social worker, or community center.',
  },
  {
    title: 'Walk in during regular hours',
    body:
      'No appointment needed at most public libraries. Ask for a new library card at the front desk or circulation counter. The librarian will type your info, print a card, and hand it to you within 10–15 minutes. Walk out and use it the same day — online and in person.',
  },
  {
    title: 'Set up a PIN',
    body:
      'The librarian will ask you to pick a 4-digit PIN. This is what you type into Libby, Hoopla, and other apps. Pick something you will remember, but not your birth year or "1234". The last four digits of an old phone number are a common choice.',
  },
  {
    title: 'Walk out with the card',
    body:
      'Most libraries give you a plastic card right on the spot. Some mail it in a week but give you a paper temporary card that works right away. Save the card — you will need it every time you sign into a library app for the first time.',
  },
];

const ONLINE_STEPS: SignupStep[] = [
  {
    title: 'Find your library\'s website',
    body:
      'Search Google for "[your town] public library" and find the .org website. Look for "Get a Library Card" or "Sign Up" — usually in the top menu or on the homepage.',
  },
  {
    title: 'Fill in the online form',
    body:
      'Enter your name, address, email, and phone. Some libraries send a code to your phone or email to verify. Takes 5–10 minutes.',
  },
  {
    title: 'Get an eCard number instantly',
    body:
      'Most libraries generate a digital "eCard" number right away — you can use it in Libby, Hoopla, and other apps the same day. A physical plastic card will be mailed or held at the branch.',
  },
  {
    title: 'Visit once to upgrade (if needed)',
    body:
      'Some libraries limit eCard borrowers (say, only 3 holds at a time) until you walk in and show ID. After that first visit, you get full privileges. Bring photo ID and proof of address like above.',
  },
];

/* ── Local library treasures ─────────────────────────────────── */

interface Treasure {
  title: string;
  body: string;
  icon: LucideIcon;
}

const TREASURES: Treasure[] = [
  {
    title: 'Genealogy databases',
    body:
      'Ancestry Library Edition, HeritageQuest, FamilySearch Center — full family history research for free. Some libraries have a dedicated genealogy librarian on Saturdays.',
    icon: UsersIcon,
  },
  {
    title: 'Free notary service',
    body:
      'Many libraries have a notary on staff — free for card holders. Call ahead to check hours. Saves you $10–$25 per document at a bank or UPS Store.',
    icon: FileText,
  },
  {
    title: 'Public computer lab and printing',
    body:
      'Every public library has computers with Word, Excel, and internet — free to use for 30–60 minutes per session. Printing is often 10–25 cents per page. Great for taxes, job applications, or printing boarding passes.',
    icon: Laptop,
  },
  {
    title: 'Free tax help (VITA)',
    body:
      'From February through April, most libraries host the IRS Volunteer Income Tax Assistance program. Free tax return preparation if your income is under $67,000. No appointment at some, walk-in at others — call first.',
    icon: FileText,
  },
  {
    title: 'Scanner, copier, and fax',
    body:
      'Most libraries have a free scanner (scan to your email) and a cheap copier (10–25 cents per page). Some still have fax machines. Great for forms you need to submit to Medicare, Social Security, or the DMV.',
    icon: FileText,
  },
  {
    title: 'Book clubs and discussion groups',
    body:
      'Most libraries host 3–6 book clubs per month — mystery, biography, mainstream fiction. Great way to meet neighbors and read more. No cost, no requirement to finish the book.',
    icon: BookOpen,
  },
  {
    title: 'Tech classes for seniors',
    body:
      'Many libraries offer weekly "Tech Tuesday" or "iPad Basics" classes — free, no sign-up, taught by patient staff. Topics: email, video chat, avoiding scams, setting up a new phone.',
    icon: GraduationCap,
  },
  {
    title: '3D printers and makerspaces',
    body:
      'Bigger libraries have 3D printers, sewing machines, button makers, vinyl cutters, and Cricut machines. Usually free or a small per-print fee. Great for grandchildren\'s visits.',
    icon: Sparkles,
  },
  {
    title: 'Free museum passes',
    body:
      'Many libraries let card holders reserve free passes to local museums, zoos, and science centers — usually for a weekend. Search "[your library] museum passes" or ask at the front desk.',
    icon: MapPin,
  },
  {
    title: 'Meeting rooms',
    body:
      'Free (or low-cost) meeting rooms for community groups, clubs, family reunions, or small classes. Book in advance at the circulation desk.',
    icon: MapPin,
  },
];

/* ── Troubleshooting ─────────────────────────────────────────── */

const TROUBLESHOOTING: Array<{ title: string; body: string }> = [
  {
    title: 'My library card is locked',
    body:
      'Cards lock after too many wrong PIN tries, after an unpaid fine over a certain amount, or after an expired card (renewal is yearly at most libraries). Call the library or walk in — they reset the card in under 2 minutes. Bring ID.',
  },
  {
    title: 'I have too many holds and cannot place more',
    body:
      'Every library sets a hold cap (often 10–20). Go to your app\'s Holds tab and either cancel older holds you no longer want, or pause holds you are not ready for (Libby: tap the hold → Deliver Later).',
  },
  {
    title: 'A book will not send to my Kindle',
    body:
      'Most common cause: you are signed into a different Amazon account on Libby than on your Kindle. In Libby → Settings → Read Books With → Kindle → Sign out and sign back in with the email tied to your Kindle. Borrow the book again and it should land on the Kindle within 2 minutes.',
  },
  {
    title: 'My audiobook keeps stopping',
    body:
      'If the audiobook pauses every few seconds, your phone is probably switching between Wi-Fi and cellular data. In the Libby app: Settings → Only download on Wi-Fi → turn OFF. Also: download the audiobook fully over Wi-Fi at home before you leave.',
  },
  {
    title: 'I cannot find a specific title in Libby or Hoopla',
    body:
      'Not every library licenses every book. Possible fixes: (a) check the other app — if Libby does not have it, Hoopla might, (b) search by author instead of title (spelling or punctuation matters), (c) place an Advantage request or Purchase Request through your library\'s website (see the next section).',
  },
  {
    title: 'Wait times are too long (8+ weeks)',
    body:
      'Popular new releases often have long waits. Strategies: (1) place 10–15 holds across different authors so something pops every week or two, (2) check your library\'s "Skip the Line" or "Lucky Day" shelf, (3) try a neighboring library (see "reciprocal borrowing" below), (4) ask the library to buy more copies via Purchase Request.',
  },
  {
    title: 'I forgot my PIN',
    body:
      'Most libraries let you reset your PIN on their website under "My Account" → "Forgot PIN". Some require you to call or walk in with ID. Have your card number ready either way.',
  },
  {
    title: 'The app says "card expired"',
    body:
      'Most library cards expire once a year to keep addresses current. Walk into the library or call — the renewal is free and takes 2 minutes. You may need to show proof of current address.',
  },
];

/* ── Tipping the balance — getting what you want ─────────────── */

const TIPS: Array<{ title: string; body: string; icon: LucideIcon }> = [
  {
    title: 'Request a title your library does not have',
    body:
      'Most libraries have a "Purchase Request" or "Suggest a Title" form on the website. Fill it in with the title and author. Libraries often buy requested titles within 2–8 weeks. If enough people request it, they buy more copies. Librarians love seeing what patrons want.',
    icon: Heart,
  },
  {
    title: 'Use Interlibrary Loan (ILL) — it is free',
    body:
      'If your library does not have a book (and will not buy it), ask for an Interlibrary Loan. Librarians will borrow it from another library across the state or country — usually free, arriving in 1–3 weeks. Works for obscure, academic, or out-of-print books. Most people have no idea this exists.',
    icon: Mail,
  },
  {
    title: 'Books by Mail (for home-bound patrons)',
    body:
      'Many libraries offer free home delivery for patrons who cannot get to the library due to age, disability, or transportation issues. Books arrive in reusable mailers and go back the same way. Ask the librarian about "Books by Mail", "Homebound Services", or "Outreach" — the name varies.',
    icon: Mail,
  },
  {
    title: 'Reciprocal borrowing — use nearby libraries',
    body:
      'Many neighbor libraries honor each other\'s cards — especially in the same county or state. Ask your librarian, "Can I get a card at the next town over for free?" You can then use both libraries\' Libby catalogs, doubling your available titles.',
    icon: Library,
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: 'Do I really get all this free?',
    a: 'Yes. US public libraries are funded by local taxes — you already paid for them. Libby, Hoopla, Kanopy, Mango, LinkedIn Learning, Ancestry Library, Consumer Reports — all free with your library card. Individually these subscriptions would cost $100+ per month.',
  },
  {
    q: 'What if I live in a small town with a tiny library?',
    a: 'Small-town libraries often share a consortium with bigger libraries in the county or state. Your card probably unlocks more than you think. Also: many states run a statewide card (for example LINKcat in Wisconsin, NC Cardinal in North Carolina) that gives access to dozens of libraries on one card. Ask your librarian — they love explaining this.',
  },
  {
    q: 'Can I use multiple libraries at once?',
    a: 'Yes. Libby lets you add cards from several libraries — tap the Libby icon → Add Library. Each library has its own catalog and limits. Power users often hold cards at 2–4 libraries (their home library, a neighbor library, a big-city library that allows non-resident cards for a small fee).',
  },
  {
    q: 'Will late fees come back?',
    a: 'Many US libraries went "fine-free" during 2020–2022 and have kept it that way. Digital borrows never had late fees — books return themselves automatically. Some libraries still have small fees on physical books. Check your library\'s policy page, or ask at the front desk.',
  },
  {
    q: 'How do I get a library card with no permanent address?',
    a: 'Many US libraries offer "Welcome Cards" or similar programs for people without a permanent address. Ask for "transitional library card" or "outreach card". You may need a letter from a shelter, social worker, community center, or case manager. Libraries want to welcome you — this is one of their core missions.',
  },
  {
    q: 'Is my reading private?',
    a: 'In the US, library patron records are protected by state laws in most places — librarians cannot share what you read without a court order. App-based borrows (Libby, Hoopla) share some data with the app companies, but not with the library. All apps let you delete your history in Settings.',
  },
  {
    q: 'Can I download books for a long flight with no Wi-Fi?',
    a: 'Yes — every app covered here has offline mode. Libby: tap the book → three dots → Download. Hoopla: tap the download arrow next to a borrow. Kanopy: tap the download button on a film. Download at home on Wi-Fi before you leave, then watch or read in Airplane Mode.',
  },
];

/* ── Done screen ─────────────────────────────────────────────── */

function DoneScreen({
  wizard,
  completedCount,
  totalSteps,
  onRestart,
}: {
  wizard: AppWizard;
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}) {
  return (
    <Card className="border-teal-600/40 bg-teal-50/40 dark:bg-teal-950/20">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-teal-600/10 text-teal-700 dark:text-teal-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">You&apos;re all set!</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {wizard.shortName} is ready. You finished {completedCount} of {totalSteps} steps.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Things to try next</h3>
            </div>
            <ul className="space-y-2">
              {wizard.firstActions.map((cmd) => (
                <li key={cmd} className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-base leading-relaxed">{cmd}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2 text-base min-h-14">
            <RotateCcw className="w-5 h-5" />
            Pick a different app
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base min-h-14">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Main component ──────────────────────────────────────────── */

export default function LibraryTechHelper() {
  const [selectedId, setSelectedId] = useState<AppId | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const wizard = useMemo<AppWizard | null>(
    () => (selectedId ? WIZARDS[selectedId] : null),
    [selectedId],
  );

  const totalSteps = wizard?.steps.length ?? 0;
  const isDone = wizard ? stepIndex === totalSteps : false;
  const current: Step | null = wizard && !isDone ? wizard.steps[stepIndex] ?? null : null;
  const progress = wizard ? Math.round((stepIndex / totalSteps) * 100) : 0;

  const markDoneAndNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setSelectedId(null);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pickApp = (id: AppId) => {
    setSelectedId(id);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Landing view ─────────────────────────────────────────── */
  if (!wizard) {
    return (
      <>
        <SEOHead
          title="Library Tech Helper — Your Library Card Is a Superpower"
          description="Senior-friendly walkthrough for Libby, Hoopla, Kanopy, Mango, LinkedIn Learning, Ancestry, and Consumer Reports — all free with your US public library card."
          path="/tools/library-tech-helper"
        />
        <main className="min-h-screen bg-background">
          {/* Hero — warm teal gradient */}
          <section className="border-b border-border bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-teal-950/40 dark:via-cyan-950/30 dark:to-emerald-950/30">
            <div className="container py-10 md:py-16 relative">
              <div className="absolute top-6 right-6">
                <BookmarkButton
                  type="tool"
                  slug="library-tech-helper"
                  title="Library Tech Helper"
                  url="/tools/library-tech-helper"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-teal-600/10 text-teal-700 dark:text-teal-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                <Badge variant="outline" className="text-sm bg-background/60">
                  Entertainment · Learning · Free
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 pr-14 leading-tight">
                Your Library Card Is a Superpower
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Free books, movies, music, learning — add your library card.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Badge variant="secondary" className="text-base py-2 px-3 gap-2">
                  <BookOpen className="w-4 h-4" /> Ebooks
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-3 gap-2">
                  <Headphones className="w-4 h-4" /> Audiobooks
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-3 gap-2">
                  <Film className="w-4 h-4" /> Movies & TV
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-3 gap-2">
                  <Music className="w-4 h-4" /> Music
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-3 gap-2">
                  <GraduationCap className="w-4 h-4" /> Courses
                </Badge>
                <Badge variant="secondary" className="text-base py-2 px-3 gap-2">
                  <Languages className="w-4 h-4" /> Languages
                </Badge>
              </div>
            </div>
          </section>

          {/* Don't have a card */}
          <section className="container py-10 md:py-14">
            <div className="flex items-center gap-3 mb-3">
              <IdCard className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">
                Don&apos;t have a library card yet? Start here.
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Getting a public library card in the US is free. You have two paths — walk into any branch, or
              sign up online. Both work.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-6 md:p-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300">
                      <Library className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Walk-in signup</h3>
                  </div>
                  <ol className="space-y-4">
                    {IN_PERSON_STEPS.map((s, i) => (
                      <li key={s.title} className="flex gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-base md:text-lg mb-1">{s.title}</div>
                          <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-100 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300">
                      <Wifi className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Online signup</h3>
                  </div>
                  <ol className="space-y-4">
                    {ONLINE_STEPS.map((s, i) => (
                      <li key={s.title} className="flex gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-semibold">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-base md:text-lg mb-1">{s.title}</div>
                          <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-5 bg-muted/40">
              <CardContent className="p-5 md:p-6 flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-base md:text-lg">Ages and reciprocal borrowing</h4>
                  <p className="text-base leading-relaxed">
                    <strong>Kids:</strong> Most libraries offer a card from birth. Parent or guardian signs.
                    <br />
                    <strong>Teens:</strong> Age 13+ can usually sign for their own card with parent agreement.
                    <br />
                    <strong>Reciprocal borrowing:</strong> Many libraries in the same county or state honor each
                    other&apos;s cards. Ask your librarian whether you can get a card at a neighboring library
                    for free — it doubles your digital catalog.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* App picker */}
          <section className="border-t border-border bg-muted/20">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pick an app to set up</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Nine apps to unlock with your library card. Tap any one for a step-by-step setup written
                for first-time users.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {APPS.map((app) => (
                  <Card key={app.id} className="flex flex-col hover:border-primary/40 transition-colors">
                    <CardContent className="p-6 flex-1 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                          <app.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {app.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex gap-2">
                          <Badge variant="outline" className="shrink-0">Content</Badge>
                          <span className="text-base leading-relaxed">{app.content}</span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="shrink-0">Platforms</Badge>
                          <span className="text-base leading-relaxed">{app.platforms}</span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="shrink-0">Cost</Badge>
                          <span className="text-base leading-relaxed">{app.free}</span>
                        </div>
                      </div>

                      <div className="pt-2 mt-auto">
                        <Button
                          size="lg"
                          className="w-full gap-2 text-base min-h-14"
                          onClick={() => pickApp(app.id)}
                        >
                          Walk me through {app.name.split(' ')[0]}
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* "Not sure what your library offers?" */}
          <section className="container py-10 md:py-14">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">
                Not sure what your library offers?
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Not every library has every app. Three reliable ways to check:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" /> Library website
                  </h3>
                  <p className="text-base leading-relaxed">
                    Go to your library&apos;s homepage and look for &quot;Digital Resources&quot;,
                    &quot;eLibrary&quot;, &quot;Research&quot;, or &quot;Online Services&quot;. Every app your
                    library offers should be listed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-primary" /> Call the library
                  </h3>
                  <p className="text-base leading-relaxed">
                    Find the main phone number on your library website. Ask: &quot;What digital apps do you
                    offer with my card?&quot; Librarians answer this question every day and love it.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-primary" /> Ask in person
                  </h3>
                  <p className="text-base leading-relaxed">
                    Walk into any branch during regular hours. Ask the librarian at the front desk. They
                    can print a one-page guide for you on the spot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Local library treasures */}
          <section className="border-t border-border bg-muted/20">
            <div className="container py-10 md:py-14">
              <div className="flex items-center gap-3 mb-3">
                <Library className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Local library treasures (beyond apps)
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Your library is more than digital downloads. These in-person services surprise most patrons.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TREASURES.map((t) => (
                  <Card key={t.title}>
                    <CardContent className="p-5 flex gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 self-start">
                        <t.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{t.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{t.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Tipping the balance */}
          <section className="container py-10 md:py-14">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-7 h-7 text-rose-600" />
              <h2 className="text-2xl md:text-3xl font-semibold">
                Tipping the balance — get what you want
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Long hold times? Book not in the catalog? Can&apos;t get to the library? Three underused
              options most patrons never hear about.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TIPS.map((t) => (
                <Card key={t.title}>
                  <CardContent className="p-6 flex gap-4">
                    <div className="p-2.5 rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 shrink-0 self-start">
                      <t.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-2">{t.title}</h3>
                      <p className="text-base leading-relaxed">{t.body}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="border-t border-border bg-muted/20">
            <div className="container py-10 md:py-14">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-7 h-7 text-amber-700 dark:text-amber-400" />
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Common issues (and easy fixes)
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                When something feels off, start here. Most problems fix themselves within two minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TROUBLESHOOTING.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <AlertTriangle
                          className="w-5 h-5 text-amber-700 dark:text-amber-400"
                          aria-hidden="true"
                        />
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="container py-10 md:py-14">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {FAQ.map((item) => (
                <Card key={item.q}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Keep exploring</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                More senior-friendly tools that pair well with your library card.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'Free Resource Hub',
                    desc: 'Discover free tech programs for seniors nationwide.',
                    href: '/tools/free-resource-hub',
                    icon: Sparkles,
                  },
                  {
                    title: 'Streaming Service Picker',
                    desc: 'Compare streaming options so you only pay for what you watch.',
                    href: '/tools/streaming-service-picker',
                    icon: Tv,
                  },
                  {
                    title: 'Low-Vision Tech Hub',
                    desc: 'Bigger fonts, better contrast, audio books, and voice control.',
                    href: '/tools/low-vision-tech-hub',
                    icon: BookOpen,
                  },
                  {
                    title: 'Entertainment guides',
                    desc: 'Plain-language guides on streaming, TVs, and home audio.',
                    href: '/guides?category=entertainment',
                    icon: Film,
                  },
                ].map((r) => (
                  <Card key={r.href} className="hover:border-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                        <r.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground mb-3">{r.desc}</p>
                      <Link
                        to={r.href}
                        className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
                      >
                        Open
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  /* ── Wizard view ──────────────────────────────────────────── */
  return (
    <>
      <SEOHead
        title={`${wizard.shortName} setup — Library Tech Helper`}
        description={`Step-by-step walkthrough to set up ${wizard.name} with your library card. Designed for seniors and first-time users.`}
        path="/tools/library-tech-helper"
      />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-teal-950/30 dark:via-cyan-950/20 dark:to-emerald-950/20">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <wizard.icon className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg font-medium">
                  Setting up · {wizard.name}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2 min-h-10">
                <RotateCcw className="w-4 h-4" />
                Pick a different app
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isDone ? 'All done' : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {wizard.estTime}
              </span>
            </div>
            <Progress value={isDone ? 100 : progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isDone ? (
            <>
              <DoneScreen
                wizard={wizard}
                completedCount={completed.size}
                totalSteps={totalSteps}
                onRestart={restart}
              />
              {wizard.deepDive && <DeepDiveView deepDive={wizard.deepDive} />}
            </>
          ) : current ? (
            <article className="space-y-6">
              {/* Step header */}
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {wizard.shortName}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
              </header>

              {/* Screenshot placeholder */}
              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground">Visual coming soon</div>
                <div className="text-base md:text-lg font-medium">{current.screenshot}</div>
              </div>

              {/* Instruction */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">What to do</h2>
                  <p className="text-lg leading-relaxed">{current.instruction}</p>
                </CardContent>
              </Card>

              {/* Stumble */}
              {current.stumble && (
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <Lightbulb
                      className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">
                        Quick Tip
                      </h3>
                      <p className="text-base leading-relaxed">{current.stumble}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Nav */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 text-base min-h-14"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base min-h-14">
                  {stepIndex === totalSteps - 1
                    ? 'Finish'
                    : completed.has(stepIndex)
                      ? 'Done — next step'
                      : 'Next step'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Step overview */}
              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {wizard.steps.map((s, i) => {
                    const isStepDone = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setStepIndex(i);
                          if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                          active
                            ? 'bg-primary text-primary-foreground border-primary'
                            : isStepDone
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
                        ].join(' ')}
                      >
                        {isStepDone && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setStepIndex(totalSteps);
                      if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={[
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                      isDone
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    All done
                  </button>
                </div>
              </div>

              {/* Support link for this app */}
              <Card className="mt-6 bg-muted/30">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-primary" />
                    Official help for {wizard.shortName}
                  </h3>
                  {(() => {
                    const app = APPS.find((a) => a.id === wizard.id);
                    if (!app) return null;
                    return (
                      <a
                        href={app.support.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline font-medium inline-flex items-center gap-1 text-base"
                      >
                        {app.support.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    );
                  })()}
                </CardContent>
              </Card>
            </article>
          ) : null}
        </section>
      </main>
    </>
  );
}

/* ── Deep dive view (shown after wizard completion) ──────────── */

function DeepDiveView({ deepDive }: { deepDive: DeepDive }) {
  return (
    <section className="mt-10 space-y-5">
      <div className="flex items-center gap-3">
        <Download className="w-7 h-7 text-primary" />
        <h2 className="text-2xl md:text-3xl font-semibold">{deepDive.title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {deepDive.sections.map((s) => (
          <Card key={s.heading}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg md:text-xl mb-2">{s.heading}</h3>
              <p className="text-base md:text-lg leading-relaxed">{s.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
