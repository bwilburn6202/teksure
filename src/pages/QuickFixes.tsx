import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

interface QuickFix {
  emoji: string;
  problem: string;
  category: string;
  steps: string[];
  relatedSlug?: string;
}

const quickFixes: QuickFix[] = [
  // Computer
  {
    emoji: '🐢', problem: 'My computer is running slow', category: 'Computer',
    steps: ['Restart your computer', 'Open Task Manager (Ctrl+Shift+Esc) and close resource-heavy programs', 'Run "Disk Cleanup" from Start menu', 'Check for Windows Updates and install them', 'Disable unnecessary startup programs in Task Manager → Startup tab'],
    relatedSlug: 'restart-pc-windows',
  },
  {
    emoji: '🔴', problem: "My computer won't turn on", category: 'Computer',
    steps: ['Check that the power cable is securely plugged in', 'Hold the power button for 10 seconds, then try again', 'Try a different power outlet', 'Reseat the power cable at both ends', 'If laptop: remove battery and plug in directly'],
    relatedSlug: 'turn-pc-on-and-off',
  },
  {
    emoji: '🖱️', problem: 'My screen is frozen', category: 'Computer',
    steps: ['Wait 2 minutes — it may unfreeze on its own', 'Press Ctrl+Alt+Delete and open Task Manager', 'End any programs marked "Not Responding"', 'If nothing works, hold the power button for 10 seconds to force restart'],
  },
  {
    emoji: '⌨️', problem: "My keyboard isn't working", category: 'Computer',
    steps: ['Unplug the keyboard and plug it back in', 'Try a different USB port', 'Restart your computer', 'Check Device Manager for driver issues', 'Test the keyboard on another computer'],
  },
  {
    emoji: '🖨️', problem: "I can't print", category: 'Computer',
    steps: ['Check the printer is on and has paper', 'Check the cable or Wi-Fi connection to the printer', 'Set it as Default Printer in Settings → Printers', 'Clear the print queue (right-click printer → See what\'s printing → Cancel All)', 'Restart the Print Spooler service'],
  },
  {
    emoji: '🔇', problem: 'No sound on my computer', category: 'Computer',
    steps: ['Check volume isn\'t muted (look for speaker icon in taskbar)', 'Right-click speaker icon → Open Sound Settings', 'Check the correct output device is selected', 'Unplug and replug headphones/speakers', 'Update the audio driver via Device Manager'],
  },
  {
    emoji: '📄', problem: "I can't open a file", category: 'Computer',
    steps: ['Check the file extension (e.g., .pdf, .docx, .zip)', 'Download the right program for that file type', 'Right-click → Open With → Choose another app', 'Try a free universal viewer', 'Ask the sender to resend in a common format'],
  },
  {
    emoji: '📷', problem: "My webcam isn't working", category: 'Computer',
    steps: ['Check if another app is using the camera', 'Go to Privacy Settings → Camera and toggle it on', 'Unplug and replug USB webcam', 'Update the webcam driver', 'Restart your computer'],
  },
  // Wi-Fi / Network
  {
    emoji: '📶', problem: 'WiFi keeps disconnecting', category: 'Wi-Fi',
    steps: ['Restart your router (unplug for 30 seconds)', 'Forget the network and reconnect with password', 'Update your network driver in Device Manager', 'Change the router Wi-Fi channel in router settings', 'Move closer to the router'],
    relatedSlug: 'connect-wifi-windows',
  },
  {
    emoji: '🚫', problem: "I can't connect to Wi-Fi", category: 'Wi-Fi',
    steps: ['Make sure Wi-Fi is turned on (check toggle in Settings)', 'Restart your router and device', 'Forget the network and reconnect with the correct password', 'Run the built-in Network Troubleshooter', 'Check if other devices can connect (to rule out router vs. device issue)'],
  },
  {
    emoji: '🐌', problem: 'My internet is really slow', category: 'Wi-Fi',
    steps: ['Run a speed test at fast.com', 'Restart your router and device', 'Move closer to the router or use an ethernet cable', 'Check if others are using heavy bandwidth (streaming, downloads)', 'Contact your ISP if the problem persists'],
  },
  {
    emoji: '🌐', problem: 'Wi-Fi connected but no internet', category: 'Wi-Fi',
    steps: ['Restart your router and device', 'Check if your ISP is having an outage', 'Open Command Prompt and run: ipconfig /release then ipconfig /renew', 'Run: ipconfig /flushdns', 'Check router status lights for errors'],
  },
  // Phone
  {
    emoji: '🔋', problem: 'My phone battery drains fast', category: 'Phone',
    steps: ['Turn off Bluetooth and Location when not needed', 'Close background apps', 'Enable Battery Saver / Low Power mode', 'Check battery usage in Settings to find power-hungry apps', 'Reduce screen brightness'],
  },
  {
    emoji: '📱', problem: 'My phone is running slow', category: 'Phone',
    steps: ['Restart your phone', 'Clear app caches in Settings → Apps', 'Uninstall apps you don\'t use', 'Free up storage space', 'Check for and install software updates'],
    relatedSlug: 'manage-storage-windows',
  },
  {
    emoji: '🔌', problem: "My phone won't charge", category: 'Phone',
    steps: ['Try a different cable and charger', 'Clean the charging port gently with a dry toothpick', 'Restart the phone', 'Try wireless charging if your phone supports it', 'Check the port for physical damage'],
  },
  // Security
  {
    emoji: '🦠', problem: 'I think I have a virus', category: 'Security',
    steps: ['Disconnect from the internet immediately', 'Don\'t enter any passwords', 'Run a full scan with Windows Defender or Malwarebytes', 'Remove any detected threats', 'Change passwords for important accounts after cleaning'],
    relatedSlug: 'use-windows-security-antivirus',
  },
  {
    emoji: '🎣', problem: 'I got a suspicious email', category: 'Security',
    steps: ['Don\'t click any links or download attachments', 'Check the sender\'s actual email address (not just display name)', 'Don\'t reply with personal information', 'Report it as phishing in your email client', 'Delete the email'],
    relatedSlug: 'identify-phishing-emails',
  },
  {
    emoji: '🔓', problem: 'My account was hacked', category: 'Security',
    steps: ['Change your password immediately from a different device', 'Enable two-factor authentication', 'Check for unfamiliar logins in account security settings', 'Notify your contacts not to click links from your account', 'Contact the platform\'s support team'],
    relatedSlug: 'setup-two-factor-any-account',
  },
  {
    emoji: '🚨', problem: 'I see pop-up virus warnings', category: 'Security',
    steps: ['Do NOT call any phone numbers shown — they are scams', 'Do NOT download anything from the pop-up', 'Close the browser tab with Ctrl+W', 'If it won\'t close, use Task Manager (Ctrl+Shift+Esc) to force close the browser', 'These are almost always scams — real antivirus doesn\'t show pop-ups like this'],
    relatedSlug: 'use-windows-security-antivirus',
  },
];

const categories = ['All', 'Computer', 'Wi-Fi', 'Phone', 'Security'];

const QuickFixes = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const toggleCard = (problem: string) => {
    setOpenCards(prev => {
      const next = new Set(prev);
      if (next.has(problem)) next.delete(problem);
      else next.add(problem);
      return next;
    });
  };

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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: quickFixes.map(f => ({
      '@type': 'Question',
      name: f.problem,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.steps.join('. '),
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Quick Tech Fixes — Instant Solutions | TekSure"
        description="Instant solutions to the most common tech problems. Click to reveal step-by-step fixes for slow computers, Wi-Fi issues, and more."
        path="/quick-fixes"
        jsonLd={faqJsonLd}
      />
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
            <p className="text-sm opacity-60 mb-8">Click a card to reveal the fix — no ads, no fluff.</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder='Describe your problem... (e.g. "no sound", "slow")'
                className="pl-10 bg-card text-foreground h-12 text-base rounded-xl"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category filter tabs */}
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

      {/* Accordion cards */}
      <section className="container py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-medium mb-2">No fixes found</p>
            <p className="text-muted-foreground">Try a different search or category.</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.map((fix, i) => {
              const isOpen = openCards.has(fix.problem);
              return (
                <motion.div
                  key={fix.problem}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.2) }}
                  viewport={{ once: true }}
                >
                  <Card className={`transition-shadow ${isOpen ? 'shadow-md ring-1 ring-secondary/20' : 'hover:shadow-sm'}`}>
                    {/* Header — always visible */}
                    <button
                      onClick={() => toggleCard(fix.problem)}
                      className="w-full text-left"
                    >
                      <CardContent className="py-4 flex items-center gap-3">
                        <span className="text-2xl shrink-0">{fix.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base">{fix.problem}</h3>
                        </div>
                        <Badge variant="outline" className="text-xs shrink-0 hidden sm:inline-flex">{fix.category}</Badge>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </CardContent>
                    </button>

                    {/* Expandable steps */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-0 border-t border-border">
                            <ol className="space-y-3 mt-4">
                              {fix.steps.map((step, j) => (
                                <li key={j} className="flex items-start gap-3">
                                  <span className="shrink-0 w-7 h-7 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold mt-0.5">
                                    {j + 1}
                                  </span>
                                  <span className="text-sm text-muted-foreground leading-relaxed pt-1">{step}</span>
                                </li>
                              ))}
                            </ol>

                            {fix.relatedSlug && (
                              <div className="mt-4 pt-3 border-t border-border">
                                <Link
                                  to={`/guides/${fix.relatedSlug}`}
                                  className="text-sm font-medium text-secondary hover:underline inline-flex items-center gap-1"
                                >
                                  Full step-by-step guide with screenshots <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
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
