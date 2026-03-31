import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Lightbulb, Camera, KeyRound, ShieldAlert, Trash2, FolderOpen,
  Shield, Video, BatteryCharging, RefreshCw, Lock, Globe, MailX, Star, PhoneOff, Smartphone, ShieldCheck, AlertTriangle,
} from 'lucide-react';

interface Tip {
  title: string;
  summary: string;
  category: string;
  icon: React.ElementType;
  full?: string;
}

const featuredTip: Tip & { full: string } = {
  title: 'Use Bookmarks to Avoid Mistyped Web Addresses',
  summary: 'Save the websites you visit regularly as bookmarks in your browser — this prevents typos in the address bar that could lead you to fake or dangerous lookalike sites.',  full: 'Scammers often create websites with addresses very similar to popular sites — for example, "amaz0n.com" instead of "amazon.com". If you type a web address by hand, it\'s easy to make a small mistake and end up on a fraudulent site without realising. The safest solution is to bookmark your important websites (like your bank, email, and shopping sites) so you can access them with a single click. In most browsers, you can press Ctrl+D (or Cmd+D on Mac) to bookmark the page you\'re currently on. You can also organise your bookmarks into folders like "Banking", "Shopping", and "Email" to keep them tidy. Once bookmarked, always use the bookmark to visit the site rather than typing the address manually.',
  category: 'Safety',
  icon: Star,
};

const pastTips: Tip[] = [
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
              One practical tip every week to help you stay safe, organised, and confident with technology.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-20">
          {/* Featured Tip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Past Tips Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Past Tips</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastTips.map((tip, idx) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
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
                </motion.div>
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