import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

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
    emoji: '', problem: 'My computer is running slow', category: 'Computer',
    steps: ['Restart your computer', 'Open Task Manager (Ctrl+Shift+Esc) and close resource-heavy programs', 'Run "Disk Cleanup" from Start menu', 'Check for Windows Updates and install them', 'Disable unnecessary startup programs in Task Manager → Startup tab'],
    relatedSlug: 'restart-pc-windows',
  },
  {
    emoji: '', problem: "My computer won't turn on", category: 'Computer',
    steps: ['Check that the power cable is securely plugged in', 'Hold the power button for 10 seconds, then try again', 'Try a different power outlet', 'Reseat the power cable at both ends', 'If laptop: remove battery and plug in directly'],
    relatedSlug: 'turn-pc-on-and-off',
  },
  {
    emoji: '', problem: 'My screen is frozen', category: 'Computer',
    steps: ['Wait 2 minutes — it may unfreeze on its own', 'Press Ctrl+Alt+Delete and open Task Manager', 'End any programs marked "Not Responding"', 'If nothing works, hold the power button for 10 seconds to force restart'],
  },
  {
    emoji: '⌨', problem: "My keyboard isn't working", category: 'Computer',
    steps: ['Unplug the keyboard and plug it back in', 'Try a different USB port', 'Restart your computer', 'Check Device Manager for driver issues', 'Test the keyboard on another computer'],
  },
  {
    emoji: '', problem: "I can't print", category: 'Computer',
    steps: ['Check the printer is on and has paper', 'Check the cable or Wi-Fi connection to the printer', 'Set it as Default Printer in Settings → Printers', 'Clear the print queue (right-click printer → See what\'s printing → Cancel All)', 'Restart the Print Spooler service'],
  },
  {
    emoji: '', problem: 'No sound on my computer', category: 'Computer',
    steps: ['Check volume isn\'t muted (look for speaker icon in taskbar)', 'Right-click speaker icon → Open Sound Settings', 'Check the correct output device is selected', 'Unplug and replug headphones/speakers', 'Update the audio driver via Device Manager'],
  },
  {
    emoji: '', problem: "I can't open a file", category: 'Computer',
    steps: ['Check the file extension (e.g., .pdf, .docx, .zip)', 'Download the right program for that file type', 'Right-click → Open With → Choose another app', 'Try a free universal viewer', 'Ask the sender to resend in a common format'],
  },
  {
    emoji: '', problem: "My webcam isn't working", category: 'Computer',
    steps: ['Check if another app is using the camera', 'Go to Privacy Settings → Camera and toggle it on', 'Unplug and replug USB webcam', 'Update the webcam driver', 'Restart your computer'],
  },
  // Wi-Fi / Network
  {
    emoji: '', problem: 'WiFi keeps disconnecting', category: 'Wi-Fi',
    steps: ['Restart your router (unplug for 30 seconds)', 'Forget the network and reconnect with password', 'Update your network driver in Device Manager', 'Change the router Wi-Fi channel in router settings', 'Move closer to the router'],
    relatedSlug: 'connect-wifi-windows',
  },
  {
    emoji: '', problem: "I can't connect to Wi-Fi", category: 'Wi-Fi',
    steps: ['Make sure Wi-Fi is turned on (check toggle in Settings)', 'Restart your router and device', 'Forget the network and reconnect with the correct password', 'Run the built-in Network Troubleshooter', 'Check if other devices can connect (to rule out router vs. device issue)'],
  },
  {
    emoji: '', problem: 'My internet is really slow', category: 'Wi-Fi',
    steps: ['Run a speed test at fast.com', 'Restart your router and device', 'Move closer to the router or use an ethernet cable', 'Check if others are using heavy bandwidth (streaming, downloads)', 'Contact your ISP if the problem persists'],
  },
  {
    emoji: '', problem: 'Wi-Fi connected but no internet', category: 'Wi-Fi',
    steps: ['Restart your router and device', 'Check if your ISP is having an outage', 'Open Command Prompt and run: ipconfig /release then ipconfig /renew', 'Run: ipconfig /flushdns', 'Check router status lights for errors'],
  },
  // Phone
  {
    emoji: '', problem: 'My phone battery drains fast', category: 'Phone',
    steps: ['Turn off Bluetooth and Location when not needed', 'Close background apps', 'Enable Battery Saver / Low Power mode', 'Check battery usage in Settings to find power-hungry apps', 'Reduce screen brightness'],
  },
  {
    emoji: '', problem: 'My phone is running slow', category: 'Phone',
    steps: ['Restart your phone', 'Clear app caches in Settings → Apps', 'Uninstall apps you don\'t use', 'Free up storage space', 'Check for and install software updates'],
    relatedSlug: 'manage-storage-windows',
  },
  {
    emoji: '', problem: "My phone won't charge", category: 'Phone',
    steps: ['Try a different cable and charger', 'Clean the charging port gently with a dry toothpick', 'Restart the phone', 'Try wireless charging if your phone supports it', 'Check the port for physical damage'],
  },
  // Security
  {
    emoji: '', problem: 'I think I have a virus', category: 'Security',
    steps: ['Disconnect from the internet immediately', 'Don\'t enter any passwords', 'Run a full scan with Windows Defender or Malwarebytes', 'Remove any detected threats', 'Change passwords for important accounts after cleaning'],
    relatedSlug: 'use-windows-security-antivirus',
  },
  {
    emoji: '', problem: 'I got a suspicious email', category: 'Security',
    steps: ['Don\'t click any links or download attachments', 'Check the sender\'s actual email address (not just display name)', 'Don\'t reply with personal information', 'Report it as phishing in your email client', 'Delete the email'],
    relatedSlug: 'identify-phishing-emails',
  },
  {
    emoji: '', problem: 'My account was hacked', category: 'Security',
    steps: ['Change your password immediately from a different device', 'Enable two-factor authentication', 'Check for unfamiliar logins in account security settings', 'Notify your contacts not to click links from your account', 'Contact the platform\'s support team'],
    relatedSlug: 'setup-two-factor-any-account',
  },
  {
    emoji: '', problem: 'I see pop-up virus warnings', category: 'Security',
    steps: ['Do NOT call any phone numbers shown — they are scams', 'Do NOT download anything from the pop-up', 'Close the browser tab with Ctrl+W', 'If it won\'t close, use Task Manager (Ctrl+Shift+Esc) to force close the browser', 'These are almost always scams — real antivirus doesn\'t show pop-ups like this'],
    relatedSlug: 'use-windows-security-antivirus',
  },
  // ── Email ──
  {
    emoji: '', problem: "I can't send emails", category: 'Email',
    steps: ['Check your internet connection is working', 'Make sure you\'re not over your mailbox storage limit', 'Try sending to a different address to see if it\'s one recipient or all', 'Log out of your email and log back in', 'If using Outlook or Apple Mail, check the outbox for stuck messages'],
  },
  {
    emoji: '', problem: "I'm not receiving emails", category: 'Email',
    steps: ['Check your Spam or Junk folder — it may have been filtered there', 'Make sure your inbox isn\'t full (you\'ll see a storage warning)', 'Ask the sender to try resending', 'Check your email filters/rules haven\'t accidentally redirected messages', 'Try accessing your email from a browser (e.g. mail.google.com) to rule out an app issue'],
  },
  {
    emoji: '', problem: 'My inbox is overflowing with spam', category: 'Email',
    steps: ['Select all spam messages and click "Mark as spam" or "Junk"', 'Use the Unsubscribe link at the bottom of marketing emails', 'In Gmail, search for the sender and create a filter to auto-delete', 'Never reply to spam — it confirms your address is active', 'Consider our Email Declutter guide for a full inbox clean-up'],
  },
  {
    emoji: '', problem: "I forgot my email password", category: 'Email',
    steps: ['Go to the email provider\'s login page and click "Forgot password"', 'Check your recovery phone number or backup email is still accessible', 'Follow the reset link sent to your phone or backup email', 'Choose a new strong password (12+ characters, mix of letters and numbers)', 'Consider a password manager so this doesn\'t happen again'],
  },
  // ── Printer ──
  {
    emoji: '', problem: 'Printer shows as offline', category: 'Printer',
    steps: ['Turn the printer off, wait 30 seconds, then back on', 'On Windows: Go to Devices and Printers → right-click your printer → See what\'s printing → Printer menu → Uncheck "Use Printer Offline"', 'Restart your computer', 'Check the USB or WiFi connection between computer and printer', 'Delete and re-add the printer in your computer\'s settings'],
  },
  {
    emoji: '', problem: 'Print quality is poor or streaky', category: 'Printer',
    steps: ['Open the printer software and run a "clean print head" or "nozzle check"', 'Print a test page to see the pattern of missing ink', 'Check ink or toner levels — a low cartridge causes streaks', 'If you have an inkjet, let it run the automatic cleaning cycle (2-3 times)', 'If cleaning doesn\'t help, the cartridge may need replacing'],
  },
  // ── TV & Streaming ──
  {
    emoji: '', problem: 'My smart TV won\'t connect to the internet', category: 'TV & Streaming',
    steps: ['Go to your TV\'s Settings → Network and try reconnecting to WiFi', 'Move your router closer to the TV or use a wired ethernet cable', 'Restart both the TV and your router (unplug both for 30 seconds)', 'Check if other devices on the same WiFi work fine', 'Update your TV\'s software in Settings → System → Software Update'],
  },
  {
    emoji: '', problem: 'Netflix / iPlayer keeps buffering', category: 'TV & Streaming',
    steps: ['Check your internet speed — streaming HD needs at least 5Mbps', 'Move closer to your WiFi router or use an ethernet cable', 'Reduce the video quality in the streaming app\'s settings', 'Close other apps or devices using the same internet connection', 'Restart the streaming app and your device'],
  },
  {
    emoji: '', problem: 'No sound on my TV', category: 'TV & Streaming',
    steps: ['Check the TV remote\'s volume isn\'t muted (look for a crossed-out speaker icon)', 'If using a soundbar or external speakers, check their power and connection', 'Go to TV Settings → Sound → check output is set to TV speakers (not HDMI/optical)', 'Try a different HDMI port if watching via a streaming stick or console', 'Restart the TV completely by unplugging it for 30 seconds'],
  },
  // ── Tablet & iPad ──
  {
    emoji: '', problem: 'My iPad or tablet is very slow', category: 'Tablet',
    steps: ['Restart the tablet by holding the power button and selecting Restart', 'Close all open apps (swipe up from the bottom and flick them away)', 'Free up storage: go to Settings → General → Storage and delete unused apps', 'Check for a software update in Settings → General → Software Update', 'If very old, the battery may be degraded — an Apple Store can test it'],
  },
  {
    emoji: '', problem: 'My tablet\'s touchscreen isn\'t responding', category: 'Tablet',
    steps: ['Clean the screen with a dry microfibre cloth — moisture or smudges affect touch', 'Remove any screen protector to test if it\'s causing the issue', 'Restart the tablet completely', 'Try with clean, dry fingertips (nail tips and gloves often don\'t register)', 'If a specific area always fails, the screen hardware may need repair'],
  },
  // ── Phone ──
  {
    emoji: '', problem: "My phone won't make or receive calls", category: 'Phone',
    steps: ['Toggle Aeroplane Mode on for 10 seconds, then off — this refreshes the network', 'Restart your phone', 'Check there\'s a signal — try moving to a different location', 'Make sure you haven\'t accidentally blocked the number you\'re trying to call', 'Call your network provider to check there\'s no problem with your account'],
  },
  {
    emoji: '', problem: "I can't hear the person I'm calling", category: 'Phone',
    steps: ['Check the volume is turned up using the side buttons during a call', 'Make sure nothing is covering the speaker (usually at the bottom of the phone)', 'Try putting the call on speaker to test if the earpiece is the problem', 'Clean the earpiece grill gently with a dry toothbrush', 'Test with headphones — if they work, the phone\'s earpiece may need repair'],
  },
  {
    emoji: '', problem: "My phone has no mobile data", category: 'Phone',
    steps: ['Toggle Aeroplane Mode on and off to refresh your connection', 'Check mobile data is turned on: Settings → Mobile Data (iPhone) or Settings → Network (Android)', 'Make sure you haven\'t used your monthly data allowance', 'Restart your phone', 'If still not working, try removing and reinserting your SIM card (with phone off)'],
  },
  // ── Computer ──
  {
    emoji: '', problem: 'My laptop screen is flickering', category: 'Computer',
    steps: ['Update your graphics/display driver via Device Manager (Windows) or Software Update (Mac)', 'Try connecting an external monitor to see if it\'s the screen or the graphics card', 'Check the display cable isn\'t loose (if it\'s a desktop with a separate monitor)', 'Disable and re-enable the display adapter in Device Manager', 'If flickering started after a Windows update, try rolling back the update'],
  },
  {
    emoji: '', problem: 'My laptop is overheating', category: 'Computer',
    steps: ['Make sure vents aren\'t blocked — always use on a hard flat surface, not a bed/pillow', 'Use compressed air to blow dust out of vents (do this every 6-12 months)', 'Check Task Manager for apps using high CPU continuously', 'Update your laptop\'s drivers and BIOS via the manufacturer\'s website', 'Consider a laptop cooling pad — they cost around $15 and really help'],
  },
  {
    emoji: '', problem: "My computer screen has gone black", category: 'Computer',
    steps: ['Press any key or move the mouse — it may have just gone to sleep', 'Check the monitor is turned on and the brightness isn\'t turned all the way down', 'Try pressing Windows + P to toggle display mode (Windows)', 'Check all cables between the computer and monitor are firmly connected', 'Restart the computer by holding the power button for 10 seconds'],
  },
  // ── Passwords ──
  {
    emoji: '', problem: "I've forgotten my password", category: 'Passwords',
    steps: ['Look for a "Forgot password?" link on the login page', 'Check your password manager — you may have saved it there', 'Try common passwords you use (but stop after a few to avoid lockouts)', 'Use the account recovery option — you\'ll need access to your email or phone', 'If it\'s a computer login, contact TekSure — there are recovery options we can walk you through'],
  },
  {
    emoji: '', problem: 'My account is locked out', category: 'Passwords',
    steps: ['Wait 15-30 minutes — many accounts unlock automatically after failed attempts', 'Use the "Forgot password" / account recovery option to reset', 'Check you\'re using the right email address associated with the account', 'Make sure CAPS LOCK isn\'t on when typing your password', 'Contact the account provider\'s support if recovery options don\'t work'],
  },
];

const categories = ['All', 'Computer', 'Wi-Fi', 'Phone', 'Security', 'Email', 'Printer', 'TV & Streaming', 'Tablet', 'Passwords'];

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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Quick Tech Fixes — Instant Solutions | TekSure"
        description="Instant solutions to the most common tech problems. Click to reveal step-by-step fixes for slow computers, Wi-Fi issues, and more."
        path="/quick-fixes"
        jsonLd={faqJsonLd}
      />
      <Navbar />

      <div className="max-w-4xl mx-auto pt-4 px-4">
        <PageBreadcrumb segments={[{ label: 'Quick Fixes' }]} />
      </div>

      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto py-16 md:py-20 px-4">
          <div
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Quick Fixes
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Instant solutions to the most common tech problems.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                placeholder='Find your problem... (e.g. "no sound", "slow")'
                className="pl-11 h-12 text-base bg-card rounded-2xl border-border shadow-sm focus:border-primary/40 focus:shadow-md focus:shadow-primary/[0.06] transition-all"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category filter tabs */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  category === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:border-border hover:bg-muted/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion cards */}
      <section className="py-16 md:py-20 px-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4"></p>
            <p className="text-lg font-medium mb-2">No fixes found</p>
            <p className="text-muted-foreground">Try a different search or category.</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.map((fix, i) => {
              const isOpen = openCards.has(fix.problem);
              return (
                <div
                  key={fix.problem}
                >
                  <button
                    onClick={() => toggleCard(fix.problem)}
                    className="w-full text-left rounded-2xl border border-border bg-card hover:border-border/80 transition-all"
                  >
                    <CardContent className="py-4 flex items-center gap-3 px-5">
                      <span className="text-2xl shrink-0">{fix.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm md:text-base text-foreground">{fix.problem}</h3>
                      </div>
                      <Badge variant="outline" className="text-xs shrink-0 hidden sm:inline-flex rounded-full">{fix.category}</Badge>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </CardContent>
                  </button>

                  {/* Expandable steps */}
                  <>
                    {isOpen && (
                      <div
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-3 border-t border-border rounded-b-2xl bg-card">
                          <ol className="space-y-3 mt-2">
                            {fix.steps.map((step, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                                  {j + 1}
                                </span>
                                <span className="text-sm text-muted-foreground leading-relaxed pt-0.5">{step}</span>
                              </li>
                            ))}
                          </ol>

                          {fix.relatedSlug && (
                            <div className="mt-4 pt-3 border-t border-border">
                              <Link
                                to={`/guides/${fix.relatedSlug}`}
                                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                              >
                                Full guide with screenshots <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-primary/10 bg-primary/[0.04] p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Didn't find your fix?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our verified technicians can diagnose and solve any tech issue remotely or in person.
            </p>
            <Button asChild size="lg" className="rounded-xl shadow-sm shadow-primary/20">
              <Link to="/get-help">Get Expert Help <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuickFixes;
