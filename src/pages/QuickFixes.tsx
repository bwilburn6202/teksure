import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Zap, ArrowRight, Monitor, Wifi, Printer, Lock, Smartphone, Volume2, FileQuestion, Camera, AlertTriangle, Mail, ShieldAlert, Bug } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface QuickFix {
  emoji: string;
  problem: string;
  category: string;
  steps: string[];
  relatedSlug?: string;
}

const quickFixes: QuickFix[] = [
  {
    emoji: '🔴', problem: "Computer Won't Turn On", category: 'Computer',
    steps: ['Check the power cable is plugged in', 'Press and hold the power button for 10 seconds (force restart)', 'Try a different outlet', 'If laptop, try removing battery and plugging in directly', 'Check for power indicator lights'],
    relatedSlug: 'turn-pc-on-and-off',
  },
  {
    emoji: '🐢', problem: 'Everything is Running Slow', category: 'Computer',
    steps: ['Restart your computer', 'Close unused programs in Task Manager (Ctrl+Shift+Esc)', 'Run "Disk Cleanup" in Start', 'Check for Windows Updates', 'Disable startup programs'],
    relatedSlug: 'restart-pc-windows',
  },
  {
    emoji: '📶', problem: 'WiFi Connected but No Internet', category: 'Network',
    steps: ['Restart your router (unplug 30 seconds)', 'Forget and reconnect to the network', 'Move closer to router', 'Update your network drivers', 'Change router channel in settings'],
    relatedSlug: 'connect-wifi-windows',
  },
  {
    emoji: '🐌', problem: 'Internet is Really Slow', category: 'Network',
    steps: ['Run a speed test at fast.com', 'Restart your router and device', 'Move closer to router or use ethernet', 'Check if others are using bandwidth', 'Contact your ISP if problem persists'],
  },
  {
    emoji: '🚫', problem: 'Connected but No Internet', category: 'Network',
    steps: ['Unplug and replug the router', 'Check if the ISP is down', 'Release/renew IP (ipconfig /release then /renew)', 'Flush DNS (ipconfig /flushdns)', 'Check router lights'],
  },
  {
    emoji: '🖨️', problem: "Printer Won't Print", category: 'Printer',
    steps: ['Check if another app is using the printer and it has paper', 'Check cable or Wi-Fi connection', 'Set it as Default Printer in Settings', 'Clear the print queue', 'Restart your computer and the Printer Spooler service'],
  },
  {
    emoji: '🔑', problem: 'Forgot My Password', category: 'Account',
    steps: ['Use the "Forgot Password" option on the lock screen', 'For Android: use Find My Device to unlock', 'For iPhone: connect to iTunes and restore', 'For websites: use the web address to visit the site directly', 'Contact your carrier as last resort'],
  },
  {
    emoji: '📱', problem: 'Phone Storage Full', category: 'Phone',
    steps: ['Delete unused apps in Settings > Storage', 'Clear app cache in Settings > Apps', 'Move photos to cloud (Google Photos or iCloud)', 'Uninstall apps you don\'t use', 'Free up space by offloading unused apps'],
    relatedSlug: 'manage-storage-windows',
  },
  {
    emoji: '🔋', problem: "Phone Won't Charge", category: 'Phone',
    steps: ['Try a different cable and charger', 'Clean the charging port with a dry toothpick', 'Restart the phone', 'Try wireless charging if supported', 'Check for damage on the port'],
  },
  {
    emoji: '🦠', problem: 'I Think I Have a Virus', category: 'Security',
    steps: ['Disconnect from the internet', 'Don\'t enter any passwords', 'Run a full scan with Windows Defender or Malwarebytes', 'Remove any detected threats', 'Change passwords for important accounts after cleaning'],
    relatedSlug: 'use-windows-security-antivirus',
  },
  {
    emoji: '🎣', problem: 'I Got a Suspicious Email', category: 'Security',
    steps: ['Don\'t click any links or download attachments', 'Check the sender\'s actual email address', 'Don\'t reply with personal info', 'Report it as phishing in your email client', 'Delete it'],
    relatedSlug: 'identify-phishing-emails',
  },
  {
    emoji: '🔓', problem: 'My Account Was Hacked', category: 'Security',
    steps: ['Change your password immediately from a different device', 'Enable two-factor authentication', 'Check for unfamiliar logins in account settings', 'Notify your contacts not to click messages from you', 'Contact the platform\'s support team'],
    relatedSlug: 'setup-two-factor-any-account',
  },
  {
    emoji: '🚨', problem: 'Scary Virus Pop-Up Appeared', category: 'Security',
    steps: ['Do NOT call any phone numbers shown', 'Do NOT download anything', 'Close the browser tab (Ctrl+W)', 'If it won\'t close, use Task Manager to end the browser', 'These are almost always scams — real antivirus doesn\'t work this way'],
    relatedSlug: 'use-windows-security-antivirus',
  },
  {
    emoji: '🔇', problem: 'No Sound on My Computer', category: 'Computer',
    steps: ['Check volume isn\'t muted (look for speaker icon in taskbar)', 'Right-click speaker icon > Open Sound Settings', 'Check the correct output device is selected', 'Unplug and replug headphones/speakers', 'Update audio driver'],
  },
  {
    emoji: '📄', problem: "Can't Open a File", category: 'Computer',
    steps: ['Check what file type it is (the extension)', 'Download the right program for that file type', 'Right-click > Open With > Choose another app', 'Try downloading a free universal viewer', 'Ask the sender to resend in a common format'],
  },
  {
    emoji: '📷', problem: 'Webcam Not Working', category: 'Computer',
    steps: ['Check if another app is using the webcam', 'Check Privacy Settings > Camera — toggle on', 'Unplug and replug if USB webcam', 'Update the webcam driver', 'Restart your computer'],
  },
  {
    emoji: '⌨️', problem: 'Keyboard Not Working', category: 'Computer',
    steps: ['Unplug and replug the keyboard', 'Try a different USB port', 'Restart your computer', 'Check Device Manager for driver issues', 'Try the keyboard on another computer to test'],
  },
  {
    emoji: '🖱️', problem: 'Screen is Frozen', category: 'Computer',
    steps: ['Wait 2 minutes — it may unfreeze', 'Press Ctrl+Alt+Delete and click Task Manager', 'End any "Not Responding" programs', 'If nothing works, hold power button 10 seconds', 'Check for overheating if it happens often'],
  },
];

const categories = ['All', 'Computer', 'Network', 'Phone', 'Printer', 'Security', 'Account'];

const QuickFixes = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    let results = quickFixes;
    if (category !== 'All') {
      results = results.filter(f => f.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(f =>
        f.problem.toLowerCase().includes(q) ||
        f.steps.some(s => s.toLowerCase().includes(q))
      );
    }
    return results;
  }, [search, category]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-sm mb-6">
              <Zap className="h-4 w-4 text-secondary" />
              <span>{quickFixes.length} instant solutions</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              ⚡ Quick Fixes
            </h1>
            <p className="text-lg opacity-80 mb-2">
              Instant solutions to the most common tech problems.
            </p>
            <p className="text-sm opacity-60 mb-8">Click only to reveal the full solution → no ads, no fluff.</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder='Describe your problem... (e.g. "no sound")'
                className="pl-10 bg-card text-foreground h-12 text-base rounded-xl"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="container py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick fix cards */}
      <section className="container py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-medium mb-2">No fixes found</p>
            <p className="text-muted-foreground">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {filtered.map((fix, i) => (
              <motion.div
                key={fix.problem}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="py-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl shrink-0">{fix.emoji}</span>
                      <div>
                        <h3 className="font-bold text-base">{fix.problem}</h3>
                        <Badge variant="outline" className="text-xs mt-1">{fix.category}</Badge>
                      </div>
                    </div>

                    <ol className="space-y-2 mb-4">
                      {fix.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold mt-0.5">
                            {j + 1}
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>

                    {fix.relatedSlug && (
                      <Link
                        to={`/guides/${fix.relatedSlug}`}
                        className="text-xs font-medium text-secondary hover:underline inline-flex items-center gap-1"
                      >
                        Full step-by-step guide <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="hero-gradient text-primary-foreground overflow-hidden">
            <CardContent className="py-10 text-center">
              <h2 className="text-2xl font-bold mb-2">Didn't find your fix?</h2>
              <p className="opacity-90 mb-6 max-w-md mx-auto">
                Our verified technicians can diagnose and solve any tech issue — remotely or in person.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/signup">Get Expert Help from a TekSure Tech <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default QuickFixes;
