import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Lightbulb, Camera, KeyRound, ShieldAlert, Trash2, FolderOpen,
  Shield, Video, BatteryCharging, RefreshCw, Lock, Globe, MailX, Star, PhoneOff, Smartphone, ShieldCheck, AlertTriangle,
  Users, Download, Phone, BellOff,
} from 'lucide-react';

interface Tip {
  title: string;
  summary: string;
  category: string;
  icon: React.ElementType;
  full?: string;
}

const featuredTip: Tip & { full: string } = {
  title: 'Use "Do Not Disturb" Mode to Stop Unwanted Interruptions',
  summary: 'Your phone has a built-in "Do Not Disturb" mode that silences calls, texts, and notifications — perfect for bedtime, doctor visits, or when scam calls won\'t stop.',
  full: 'Every iPhone and Android phone has a "Do Not Disturb" (DND) feature that silences incoming calls, texts, and app notifications so you are not interrupted. On iPhone, open Settings, tap Focus, then tap Do Not Disturb and turn it on — you can also swipe down from the top-right corner and tap the crescent moon icon for quick access. On Android, swipe down from the top of your screen and tap the "Do Not Disturb" tile. The best part is you can allow calls from specific people (like family members) to still come through while blocking everyone else. On iPhone, tap "Allowed Notifications" inside your DND settings and choose "Favorites" or specific contacts. On Android, tap "People" in DND settings and add your important contacts. Many people set DND on a schedule — for example, automatically turning on at 10 PM and off at 7 AM — so you never have to remember to enable it yourself.',
  category: 'Productivity',
  icon: BellOff,
};

const pastTips: Tip[] = [
  {
    title: 'Use Bookmarks to Avoid Mistyped Web Addresses',
    summary: 'Save the websites you visit regularly as bookmarks in your browser — this prevents typos in the address bar that could lead you to fake or dangerous lookalike sites.',
    category: 'Safety',
    icon: Star,
  },
  {
    title: 'Recognise Fake Pop-Up Virus Warnings',
    summary: 'If a website shows a scary pop-up saying your computer is infected, don\'t click anything — it\'s almost certainly a scam designed to trick you into installing malware or calling a fake support number.',
    category: 'Safety',
    icon: AlertTriangle,
  },
  {
    title: 'Check If Your Email Was in a Data Breach',
    summary: 'Visit haveibeenpwned.com to find out if your email address has appeared in any known data breaches. If it has, change your password for those affected accounts right away.',
    category: 'Security',
    icon: ShieldCheck,
  },
  {    title: 'Review Your App Permissions',
    summary: 'Check which apps on your phone can access your camera, microphone, and location. Revoking permissions you don\'t need is one of the easiest ways to protect your privacy.',
    category: 'Safety',
    icon: Smartphone,
  },
  {
    title: 'Hang Up on Tech Support Scammers',
    summary: 'Genuine companies like Microsoft or Apple will never call you out of the blue to say your computer has a virus. If you get this call — hang up.',
    category: 'Safety',
    icon: PhoneOff,
  },
  {
    title: 'Back Up Your Photos Before It\'s Too Late',
    summary: 'Set up automatic cloud backups using Google Photos, iCloud, or OneDrive — it takes 5 minutes and keeps your memories safe forever.',
    category: 'Security',
    icon: Camera,
  },
  {
    title: 'Create Strong Passwords',
    summary: 'Use a mix of letters, numbers, and symbols — and never reuse the same password across different sites.',
    category: 'Safety',
    icon: KeyRound,
  },
  {    title: 'Spot Phishing Emails',
    summary: 'Look for spelling mistakes, urgent language, and suspicious sender addresses. When in doubt, don\'t click.',
    category: 'Safety',
    icon: ShieldAlert,
  },
  {
    title: 'Clear Your Browser Cache',
    summary: 'Clearing cached data fixes many website issues and frees up storage. Do it monthly for best results.',
    category: 'Maintenance',
    icon: Trash2,
  },
  {
    title: 'Organize Your Downloads Folder',
    summary: 'Sort files into folders and delete what you don\'t need. A tidy downloads folder makes everything easier to find.',
    category: 'Productivity',
    icon: FolderOpen,
  },
  {
    title: 'Free Antivirus Options',
    summary: 'Windows Defender is built-in and excellent. On Mac, keep your system updated — it has strong built-in protection.',
    category: 'Safety',
    icon: Shield,
  },
  {    title: 'Video Calling Tips',
    summary: 'Use headphones for better audio, position your camera at eye level, and make sure you\'re well-lit from the front.',
    category: 'Communication',
    icon: Video,
  },
  {
    title: 'Save Battery Life',
    summary: 'Lower your screen brightness, close unused apps, and turn off Bluetooth and location services when not needed.',
    category: 'Maintenance',
    icon: BatteryCharging,
  },
  {
    title: 'Keep Your Apps Updated',
    summary: 'Updates fix bugs and security holes. Turn on automatic updates so you never miss an important patch.',
    category: 'Security',
    icon: RefreshCw,
  },
  {
    title: 'Use Two-Factor Authentication',
    summary: 'Add an extra layer of security to your accounts. Even if someone steals your password, they can\'t get in without the second step.',
    category: 'Safety',
    icon: Lock,
  },
  {    title: 'Avoid Fake Websites',
    summary: 'Check for HTTPS, look at the domain carefully, and don\'t trust sites with lots of pop-ups or too-good-to-be-true deals.',
    category: 'Safety',
    icon: Globe,
  },
  {
    title: 'Clean Up Old Emails',
    summary: 'Unsubscribe from newsletters you don\'t read and delete old messages to keep your inbox fast and manageable.',
    category: 'Productivity',
    icon: MailX,
  },
  {
    title: 'Set Up a Family Safety Word',
    summary: 'Choose a secret word with your family that only you know. If someone calls claiming to be a relative in trouble (even if it sounds exactly like them — AI can clone voices now), ask for the safety word. No word? Hang up and call them directly.',
    category: 'Safety',
    icon: Users,
  },
  {
    title: 'Turn On Automatic Updates',
    summary: 'The single most important thing you can do for security. On iPhone: Settings > General > Software Update > Automatic Updates. On Android: Settings > System > Software Update > Auto-download. On Windows: Settings > Windows Update > turn on automatic updates. Updates fix security holes that hackers exploit.',
    category: 'Security',
    icon: Download,
  },
  {
    title: 'Call Senior Planet\'s Free Tech Helpline',
    summary: 'Need help from a real person? Call 888-713-3495 (Monday through Saturday). Senior Planet, an AARP affiliate, offers free tech support in English, Spanish, and Mandarin. You can even book a free one-on-one Zoom session with a volunteer.',
    category: 'Communication',
    icon: Phone,
  },
];

const categoryColors: Record<string, string> = {
  Security: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Safety: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Maintenance: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Productivity: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Communication: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
};
export default function Tips() {
  return (
    <>
      <SEOHead
        title="Weekly Tech Tips | TekSure"
        description="Simple, practical tech tips updated weekly — from backing up photos to spotting scams."
        path="/tips"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Weekly Tech Tips</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              One practical tip every week to help you stay safe, organized, and confident with technology.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-20">
          {/* Featured Tip */}
          <div
            className="mb-20"
          >            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl shrink-0">⭐</div>
                    <div className="flex-1">
                      <Badge className="mb-3 text-xs font-medium bg-primary/10 text-primary border-0">Tip of the Week</Badge>
                      <CardTitle className="text-2xl">{featuredTip.title}</CardTitle>
                    </div>
                  </div>
                  <Badge className={`shrink-0 text-xs font-medium border-0 ${categoryColors[featuredTip.category] || ''}`}>
                    {featuredTip.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-muted-foreground leading-relaxed text-base">{featuredTip.full}</p>
              </CardContent>
            </Card>
          </div>

          {/* Past Tips Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Past Tips</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastTips.map((tip, idx) => (
                <div
                  key={tip.title}
                >
                  <Card className="h-full rounded-2xl border border-border bg-card hover:border-border/60 transition-all group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <tip.icon className="h-6 w-6 text-primary shrink-0" />
                        <Badge className={`shrink-0 text-xs font-medium border-0 ${categoryColors[tip.category] || ''}`}>
                          {tip.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{tip.summary}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <NewsletterSignup className="mt-20" />
        </div>
      </main>
      <Footer />
    </>
  );
}