import { useState } from 'react';
import {
  ExternalLink,
  Search,
  Sparkles,
  Users,
  ThumbsUp,
  FileText,
  Palette,
  Shield,
  Video,
  Code,
  Globe,
  Wrench,
  GraduationCap,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// ── Types ──────────────────────────────────────────────────────────────────────

type Category =
  | 'All'
  | 'Office & Productivity'
  | 'Creative'
  | 'Security'
  | 'Video & Audio'
  | 'Developer'
  | 'Web-Based';

type Platform = 'Windows' | 'Mac' | 'Linux' | 'Web';

interface Program {
  name: string;
  url: string;
  platforms: Platform[];
  description: string;
  replaces: string;
  categories: Category[];
}

// ── Data ───────────────────────────────────────────────────────────────────────

const programs: Program[] = [
  // OFFICE & PRODUCTIVITY
  {
    name: 'LibreOffice',
    url: 'https://www.libreoffice.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A full, free office suite with Writer (documents), Calc (spreadsheets), and Impress (presentations). Opens and saves Microsoft Office files.',
    replaces: 'Microsoft Office (Word, Excel, PowerPoint)',
    categories: ['Office & Productivity'],
  },
  {
    name: 'Google Docs, Sheets & Slides',
    url: 'https://docs.google.com',
    platforms: ['Web'],
    description:
      'A free online office suite that runs in your web browser. Real-time collaboration with other people and automatic saving to Google Drive.',
    replaces: 'Microsoft Office, Apple iWork',
    categories: ['Office & Productivity', 'Web-Based'],
  },
  {
    name: 'OnlyOffice',
    url: 'https://www.onlyoffice.com',
    platforms: ['Windows', 'Mac', 'Linux', 'Web'],
    description:
      'An office suite with strong Microsoft Office compatibility. Works as a desktop app or in your browser with optional cloud storage.',
    replaces: 'Microsoft 365',
    categories: ['Office & Productivity', 'Web-Based'],
  },
  {
    name: 'Apache OpenOffice',
    url: 'https://www.openoffice.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A long-standing free office suite with word processing, spreadsheets, presentations, and databases. Fully open-source.',
    replaces: 'Microsoft Office',
    categories: ['Office & Productivity'],
  },
  {
    name: 'Zoho Workplace',
    url: 'https://www.zoho.com/workplace/',
    platforms: ['Web'],
    description:
      'A free tier for personal use with mail, writer, sheet, show, and team chat. Web-based with mobile apps.',
    replaces: 'Microsoft 365, Google Workspace',
    categories: ['Office & Productivity', 'Web-Based'],
  },
  {
    name: 'Notion',
    url: 'https://www.notion.so',
    platforms: ['Windows', 'Mac', 'Web'],
    description:
      'A flexible note-taking and productivity app that combines documents, wikis, databases, and task lists. Generous free plan for personal use.',
    replaces: 'Evernote, OneNote, Trello',
    categories: ['Office & Productivity', 'Web-Based'],
  },
  {
    name: 'Obsidian',
    url: 'https://obsidian.md',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A powerful note-taking app that saves your notes as plain text files on your own computer. Free for personal use.',
    replaces: 'Evernote, Roam Research',
    categories: ['Office & Productivity'],
  },
  {
    name: 'Joplin',
    url: 'https://joplinapp.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A free, open-source note-taking and to-do app. Supports Markdown, syncs across devices, and keeps your notes encrypted.',
    replaces: 'Evernote',
    categories: ['Office & Productivity'],
  },

  // CREATIVE
  {
    name: 'GIMP',
    url: 'https://www.gimp.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A professional-grade photo editor with layers, masks, filters, and advanced retouching. Edits the same file formats as Photoshop.',
    replaces: 'Adobe Photoshop',
    categories: ['Creative'],
  },
  {
    name: 'Krita',
    url: 'https://krita.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'Digital painting software designed for illustrators and comic artists. Huge brush library, pressure-sensitive tablet support, and animation tools.',
    replaces: 'Corel Painter, Clip Studio Paint',
    categories: ['Creative'],
  },
  {
    name: 'Inkscape',
    url: 'https://inkscape.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A professional vector graphics editor for logos, icons, diagrams, and illustrations. Works with the same SVG files designers use everywhere.',
    replaces: 'Adobe Illustrator',
    categories: ['Creative'],
  },
  {
    name: 'Blender',
    url: 'https://www.blender.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A full 3D creation suite for modeling, animation, rendering, and video editing. Used in real movies and games — completely free.',
    replaces: 'Autodesk Maya, Cinema 4D',
    categories: ['Creative'],
  },
  {
    name: 'Darktable',
    url: 'https://www.darktable.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A non-destructive photo editor and RAW developer for photographers. Manages your whole photo library and edits in high quality.',
    replaces: 'Adobe Lightroom',
    categories: ['Creative'],
  },
  {
    name: 'Canva',
    url: 'https://www.canva.com',
    platforms: ['Web'],
    description:
      'A browser-based design tool with thousands of free templates for social posts, flyers, presentations, and more. Free plan covers most everyday needs.',
    replaces: 'Adobe Express, paid design tools',
    categories: ['Creative', 'Web-Based'],
  },
  {
    name: 'Paint.NET',
    url: 'https://www.getpaint.net',
    platforms: ['Windows'],
    description:
      'A simple, fast photo editor for Windows with layers, effects, and unlimited undo. Sits between MS Paint and Photoshop.',
    replaces: 'Adobe Photoshop Elements',
    categories: ['Creative'],
  },

  // SECURITY
  {
    name: 'Bitwarden',
    url: 'https://bitwarden.com',
    platforms: ['Windows', 'Mac', 'Linux', 'Web'],
    description:
      'A secure password manager that works on every device. Free plan includes unlimited passwords and syncing across all your devices.',
    replaces: '1Password, LastPass, Dashlane',
    categories: ['Security', 'Web-Based'],
  },
  {
    name: 'KeePass',
    url: 'https://keepass.info',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'An offline password manager that stores your passwords in an encrypted file on your own computer. No cloud required.',
    replaces: '1Password, LastPass',
    categories: ['Security'],
  },
  {
    name: 'Proton Mail',
    url: 'https://proton.me',
    platforms: ['Web'],
    description:
      'End-to-end encrypted email from Switzerland. Free plan includes 1 GB storage and no ads. Mobile apps available.',
    replaces: 'Gmail, Outlook (for privacy)',
    categories: ['Security', 'Web-Based'],
  },
  {
    name: 'Signal',
    url: 'https://signal.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A free, encrypted messaging app for text, voice, and video calls. The gold standard for private messaging — recommended by security experts.',
    replaces: 'WhatsApp, iMessage (for privacy)',
    categories: ['Security'],
  },
  {
    name: 'Windows Defender',
    url: 'https://www.microsoft.com/en-us/windows/comprehensive-security',
    platforms: ['Windows'],
    description:
      'The antivirus built into every modern copy of Windows. Real-time protection, firewall, and web filtering — already installed, just keep it on.',
    replaces: 'Norton, McAfee, paid antivirus',
    categories: ['Security'],
  },
  {
    name: 'Malwarebytes Free',
    url: 'https://www.malwarebytes.com',
    platforms: ['Windows', 'Mac'],
    description:
      'A free on-demand scanner that finds and removes malware, adware, and unwanted programs other tools miss. Good as a second opinion.',
    replaces: 'Paid malware removal tools',
    categories: ['Security'],
  },
  {
    name: 'Tor Browser',
    url: 'https://www.torproject.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A browser that routes your traffic through multiple servers to protect your anonymity. Used by journalists, activists, and anyone needing privacy.',
    replaces: 'Paid anonymity services',
    categories: ['Security'],
  },
  {
    name: 'Proton VPN Free',
    url: 'https://proton.me/vpn',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'One of the only free VPNs with unlimited data and no ads. Servers in three countries on the free plan, with strong privacy protections.',
    replaces: 'NordVPN, ExpressVPN (free tier)',
    categories: ['Security'],
  },

  // VIDEO & AUDIO
  {
    name: 'VLC Media Player',
    url: 'https://www.videolan.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'Plays virtually any video or audio file, including DVDs, Blu-rays, and network streams. No codec packs needed — it just works.',
    replaces: 'Windows Media Player, QuickTime',
    categories: ['Video & Audio'],
  },
  {
    name: 'OBS Studio',
    url: 'https://obsproject.com',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'Professional screen recording and live streaming software used by the biggest streamers on Twitch and YouTube. Free forever.',
    replaces: 'Camtasia, Streamlabs Prime',
    categories: ['Video & Audio'],
  },
  {
    name: 'DaVinci Resolve',
    url: 'https://www.blackmagicdesign.com/products/davinciresolve',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A Hollywood-grade video editor used on real blockbuster films. Color grading, audio post, and visual effects all in one app.',
    replaces: 'Adobe Premiere Pro, Final Cut Pro',
    categories: ['Video & Audio', 'Creative'],
  },
  {
    name: 'Audacity',
    url: 'https://www.audacityteam.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A multi-track audio editor and recorder for podcasts, music, and voiceovers. Simple to start with but powerful enough for pro work.',
    replaces: 'Adobe Audition',
    categories: ['Video & Audio'],
  },
  {
    name: 'HandBrake',
    url: 'https://handbrake.fr',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A free video converter for resizing, compressing, and converting videos between formats. Great for shrinking large video files.',
    replaces: 'Paid video converters',
    categories: ['Video & Audio'],
  },
  {
    name: 'Kdenlive',
    url: 'https://kdenlive.org',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A powerful non-linear video editor with multi-track editing, transitions, and effects. A good fit for YouTube creators on any budget.',
    replaces: 'Adobe Premiere Pro',
    categories: ['Video & Audio'],
  },

  // WEB BROWSERS (Web-Based category)
  {
    name: 'Firefox',
    url: 'https://www.firefox.com',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A fast, privacy-focused web browser made by Mozilla, a nonprofit. Built-in tracking protection and thousands of extensions.',
    replaces: 'Chrome, Edge',
    categories: ['Web-Based', 'Security'],
  },
  {
    name: 'Brave',
    url: 'https://brave.com',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A Chrome-based browser with a built-in ad blocker and privacy features turned on by default. Loads pages faster by blocking trackers.',
    replaces: 'Chrome',
    categories: ['Web-Based', 'Security'],
  },
  {
    name: 'LibreWolf',
    url: 'https://librewolf.net',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'A hardened version of Firefox with maximum privacy settings out of the box. For people who want Firefox with stronger defaults.',
    replaces: 'Chrome, Firefox (for privacy)',
    categories: ['Web-Based', 'Security'],
  },

  // UTILITIES (we'll spread these across categories)
  {
    name: '7-Zip',
    url: 'https://www.7-zip.org',
    platforms: ['Windows'],
    description:
      'A free file archiver that opens and creates ZIP, RAR, 7Z, and dozens of other compressed file formats. A must-have Windows tool.',
    replaces: 'WinRAR, WinZip',
    categories: ['Office & Productivity'],
  },
  {
    name: 'f.lux',
    url: 'https://justgetflux.com',
    platforms: ['Windows', 'Mac', 'Linux'],
    description:
      'Warms your screen color in the evening to match the light around you, reducing eye strain and making it easier to sleep.',
    replaces: 'Paid blue-light tools',
    categories: ['Office & Productivity'],
  },
  {
    name: 'Everything',
    url: 'https://www.voidtools.com',
    platforms: ['Windows'],
    description:
      'A super-fast file search tool for Windows that indexes your entire drive in seconds. Finds any file as you type.',
    replaces: 'Windows Search',
    categories: ['Office & Productivity'],
  },
  {
    name: 'Rectangle',
    url: 'https://rectangleapp.com',
    platforms: ['Mac'],
    description:
      'Free window management for macOS. Snap windows to halves, quarters, and thirds of your screen with keyboard shortcuts.',
    replaces: 'Magnet, Moom',
    categories: ['Office & Productivity'],
  },
  {
    name: 'Microsoft PowerToys',
    url: 'https://learn.microsoft.com/en-us/windows/powertoys/',
    platforms: ['Windows'],
    description:
      'A free suite of power-user utilities from Microsoft — window snapping, color picker, file renamer, image resizer, and more.',
    replaces: 'Dozens of paid Windows utilities',
    categories: ['Office & Productivity', 'Developer'],
  },
  {
    name: 'Ditto',
    url: 'https://ditto-cp.sourceforge.io',
    platforms: ['Windows'],
    description:
      'A clipboard manager for Windows that remembers everything you copy. Search your clipboard history and paste older items anytime.',
    replaces: 'Paid clipboard managers',
    categories: ['Office & Productivity'],
  },

  // EDUCATION & REFERENCE (Web-Based)
  {
    name: 'Khan Academy',
    url: 'https://www.khanacademy.org',
    platforms: ['Web'],
    description:
      'Free high-quality video courses on math, science, history, economics, and more — from kindergarten through college level. A nonprofit.',
    replaces: 'Paid tutoring, online courses',
    categories: ['Web-Based'],
  },
  {
    name: 'Anki',
    url: 'https://apps.ankiweb.net',
    platforms: ['Windows', 'Mac', 'Linux', 'Web'],
    description:
      'A flashcard app that uses spaced repetition — the best-proven method for memorizing anything. Free on most platforms.',
    replaces: 'Quizlet Premium',
    categories: ['Web-Based'],
  },
  {
    name: 'Duolingo',
    url: 'https://www.duolingo.com',
    platforms: ['Web'],
    description:
      'Free language learning in short daily lessons covering 40+ languages. Mobile apps and a free tier with ads.',
    replaces: 'Rosetta Stone, Babbel',
    categories: ['Web-Based'],
  },
  {
    name: 'Wikipedia',
    url: 'https://www.wikipedia.org',
    platforms: ['Web'],
    description:
      'The largest free encyclopedia ever built — 6 million+ articles in English alone. Written and maintained by volunteers worldwide.',
    replaces: 'Paid encyclopedias',
    categories: ['Web-Based'],
  },
];

const categories: Category[] = [
  'All',
  'Office & Productivity',
  'Creative',
  'Security',
  'Video & Audio',
  'Developer',
  'Web-Based',
];

const categoryIcons: Record<Category, typeof FileText> = {
  All: Sparkles,
  'Office & Productivity': FileText,
  Creative: Palette,
  Security: Shield,
  'Video & Audio': Video,
  Developer: Code,
  'Web-Based': Globe,
};

const platformColors: Record<Platform, string> = {
  Windows: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300',
  Mac: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300',
  Linux: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300',
  Web: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300',
};

// ── Component ──────────────────────────────────────────────────────────────────

const FreeSoftware = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');

  const filteredPrograms = programs.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.categories.includes(activeCategory);
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.replaces.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Software Directory — Free Alternatives to Paid Apps | TekSure"
        description="40+ trusted free programs for Windows, Mac, Linux, and the web. Free alternatives to Microsoft Office, Photoshop, antivirus, video editors, and more."
      />
      <Navbar />

      <main id="main-content" className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Free Software Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Great Software That Costs Nothing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            You don't have to pay for powerful software. Here are 40+ trusted free programs for
            Windows, Mac, Linux, and the web — all tested and recommended.
          </p>
        </section>

        {/* Search */}
        <section className="mx-auto max-w-2xl mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, feature, or what it replaces (e.g. Photoshop)"
              className="pl-10 h-12 text-base"
              aria-label="Search free software"
            />
          </div>
        </section>

        {/* Filter bar */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              const isActive = activeCategory === cat;
              return (
                <Button
                  key={cat}
                  variant={isActive ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className="gap-1.5"
                >
                  <Icon className="h-4 w-4" />
                  {cat}
                </Button>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Showing <strong>{filteredPrograms.length}</strong>{' '}
            {filteredPrograms.length === 1 ? 'program' : 'programs'}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>
        </section>

        {/* Cards grid */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredPrograms.map((p) => (
            <Card
              key={p.name}
              className="flex flex-col h-full border-2 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold leading-tight">{p.name}</CardTitle>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.platforms.map((plat) => (
                    <Badge
                      key={plat}
                      variant="outline"
                      className={`text-xs ${platformColors[plat]}`}
                    >
                      {plat}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="text-xs text-muted-foreground mb-4 pb-4 border-b">
                  <span className="font-medium text-foreground">Replaces:</span> {p.replaces}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full mt-auto">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5"
                  >
                    Visit official site
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12 mb-16">
            <p className="text-muted-foreground">
              No programs match your search. Try a different term or category.
            </p>
          </div>
        )}

        {/* Why use free software */}
        <section className="mx-auto max-w-5xl rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why use free software?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Free software isn't just cheaper — for most people, it's genuinely better than the
              paid options.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <Wrench className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Costs nothing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No monthly subscriptions, no upfront purchase, no trial countdown. These programs
                  are free today and stay free forever.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Community-supported</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built and maintained by thousands of volunteers and nonprofits. Bugs get fixed,
                  features get added, and your data is not the product.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Often better than paid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free alternatives like VLC, Firefox, and Blender are widely considered best in
                  class — used by professionals around the world every day.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related resources */}
        <section className="mx-auto max-w-3xl text-center mt-16">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Need help installing these?</h2>
          <p className="text-muted-foreground mb-6">
            Our step-by-step guides walk you through downloading, installing, and getting started
            with free software — in plain language.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="/guides">Browse guides</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/get-help">Get personal help</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeSoftware;
