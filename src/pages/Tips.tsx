import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Lightbulb, Camera, KeyRound, ShieldAlert, Trash2, FolderOpen,
  Shield, Video, BatteryCharging, RefreshCw, Lock, Globe, MailX, Star, PhoneOff, Smartphone, ShieldCheck,
} from 'lucide-react';

interface Tip {
  title: string;
  summary: string;
  category: string;
  icon: React.ElementType;
  full?: string;
}

const featuredTip: Tip & { full: string } = {
  title: 'Check If Your Email Was in a Data Breach',
  summary: 'Visit haveibeenpwned.com to find out if your email address has appeared in any known data breaches. If it has, change your password for those affected accounts right away.',
  full: 'Head to haveibeenpwned.com — a free, trusted tool run by a well-known security researcher — and type in your email address. It checks your address against billions of leaked records from thousands of known data breaches. If your email shows up, don\'t panic: simply change the password for any affected accounts and make sure you\'re not reusing that password elsewhere. It takes less than a minute to check, and it\'s one of the most useful security checks you can do right now.',
  category: 'Security',
  icon: ShieldCheck,
};

const pastTips: Tip[] = [
  {
    title: 'Review Your App Permissions',
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
  {
    title: 'Spot Phishing Emails',
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
    title: 'Organise Your Downloads Folder',
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
  {
    title: 'Video Calling Tips',
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
  {
    title: 'Avoid Fake Websites',
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
];

const categoryColors: Record<string, string> = {
  Security: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Safety: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  Maintenance: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  Productivity: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
  Communication: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
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
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">Weekly Tech Tips</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          One practical tip every week to help you stay safe, organised, and confident with technology.
        </p>

        {/* Featured Tip */}
        <Card className="mb-12 border-secondary/40 bg-secondary/5">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary/10 p-3">
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <Badge className="mb-2 text-xs font-normal bg-secondary/20 text-secondary-foreground">Tip of the Week</Badge>
                  <CardTitle className="text-xl">{featuredTip.title}</CardTitle>
                </div>
              </div>
              <Badge className={`shrink-0 text-xs font-normal ${categoryColors[featuredTip.category] || ''}`}>
                {featuredTip.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{featuredTip.full}</p>
          </CardContent>
        </Card>

        {/* Past Tips Grid */}
        <h2 className="text-xl font-semibold mb-6">Past Tips</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastTips.map((tip) => (
            <Card key={tip.title} className="h-full transition-all hover:shadow-lg hover:border-secondary/50 group">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <tip.icon className="h-8 w-8 text-secondary mb-2 transition-transform group-hover:scale-110" />
                  <Badge className={`shrink-0 text-xs font-normal ${categoryColors[tip.category] || ''}`}>
                    {tip.category}
                  </Badge>
                </div>
                <CardTitle className="text-base">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.summary}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="container pb-16 max-w-4xl">
          <NewsletterSignup className="mt-10" />
        </div>
      </main>
      <Footer />
    </>
  );
}
