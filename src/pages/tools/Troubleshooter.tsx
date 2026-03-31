import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, RotateCcw, CheckCircle, Wifi, Gauge, Printer,
  KeyRound, Smartphone, ShieldAlert, ArrowRight, ExternalLink, HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Progress } from '@/components/ui/progress';

/* ── Decision tree types ─────────────────────────── */

type NodeType = 'question' | 'result';

interface QuestionNode {
  id: string;
  type: 'question';
  text: string;
  subtext?: string;
  yes: string;
  no: string;
}

interface ResultNode {
  id: string;
  type: 'result';
  title: string;
  description: string;
  steps: string[];
  guideSlug?: string;
  guideLabel?: string;
  severity: 'easy' | 'medium' | 'call-tech';
}

type TreeNode = QuestionNode | ResultNode;

/* ── Troubleshooter trees ────────────────────────── */

const trees: Record<string, { label: string; icon: typeof Wifi; color: string; intro: string; startId: string; nodes: Record<string, TreeNode> }> = {
  wifi: {
    label: 'WiFi / Internet',
    icon: Wifi,
    color: 'text-blue-500',
    intro: 'Let\'s figure out why your internet isn\'t working.',
    startId: 'q1',
    nodes: {
      q1: { id: 'q1', type: 'question', text: 'Is the WiFi icon visible in your taskbar or menu bar?', subtext: 'Look for the fan-shaped signal icon in the bottom-right (Windows) or top-right (Mac).', yes: 'q2', no: 'r_no_icon' },
      q2: { id: 'q2', type: 'question', text: 'Can you open any website at all — even partially?', subtext: 'Try going to google.com. Does anything load, even slowly?', yes: 'q3', no: 'r_restart_router' },
      q3: { id: 'q3', type: 'question', text: 'Is the problem on all your devices, or just one?', subtext: 'Try another phone or computer on the same WiFi.', yes: 'r_isp_issue', no: 'r_browser_fix' },
      r_no_icon: { id: 'r_no_icon', type: 'result', severity: 'easy', title: 'WiFi is turned off', description: 'Your device isn\'t connected to any WiFi network.', steps: ['Press the WiFi button on your keyboard (often F2 or has a WiFi symbol)', 'On Windows: click the network icon in the bottom-right, then click the WiFi button', 'On Mac: click the WiFi symbol in the top menu bar and toggle it on', 'Once WiFi is on, select your network name and enter your password'], guideSlug: 'connect-wifi-windows', guideLabel: 'WiFi Connection Guide' },
      r_restart_router: { id: 'r_restart_router', type: 'result', severity: 'easy', title: 'Restart your router', description: 'Your device can see WiFi but can\'t reach the internet. Restarting the router fixes this 80% of the time.', steps: ['Find your router (the box with blinking lights)', 'Unplug the power cable from the back', 'Wait a full 60 seconds — count out loud if you need to', 'Plug it back in and wait 2–3 minutes for it to fully restart', 'Try loading a website again'], guideSlug: 'connect-wifi-windows', guideLabel: 'WiFi Connection Guide' },
      r_isp_issue: { id: 'r_isp_issue', type: 'result', severity: 'call-tech', title: 'Your internet provider may be down', description: 'The problem affects all your devices, which means it\'s likely coming from your internet provider (ISP) or your router.', steps: ['Restart your router: unplug it for 60 seconds, then plug it back in', 'Check your provider\'s website on your phone\'s mobile data for any outage notices', 'Search "[your provider name] outage" on Google to see if others are affected', 'If the outage persists more than 1 hour, call your provider\'s support number'] },
      r_browser_fix: { id: 'r_browser_fix', type: 'result', severity: 'easy', title: 'Browser or device glitch', description: 'The internet works on other devices, so the issue is with this specific device or browser.', steps: ['Close the browser completely and reopen it', 'Try a different browser (Chrome, Firefox, Edge, or Safari)', 'Restart your device — this clears most temporary glitches', 'If still not working: forget the WiFi network and reconnect with your password'], guideSlug: 'connect-wifi-windows', guideLabel: 'WiFi Connection Guide' },
    },
  },

  slow: {
    label: 'Slow Computer',
    icon: Gauge,
    color: 'text-amber-500',
    intro: 'Let\'s speed your computer back up.',
    startId: 'q1',
    nodes: {
      q1: { id: 'q1', type: 'question', text: 'When did you last restart your computer?', subtext: 'A "restart" is different from closing the lid — it fully shuts down and starts fresh.', yes: 'q2', no: 'r_restart' },
      q2: { id: 'q2', type: 'question', text: 'Is the computer making loud fan noise, or does it feel hot to touch?', subtext: 'Overheating causes computers to slow down on purpose to protect themselves.', yes: 'r_overheating', no: 'q3' },
      q3: { id: 'q3', type: 'question', text: 'Do you have lots of browser tabs or programs open?', subtext: 'Every open tab or program uses memory. More than 10 tabs = likely slowdown.', yes: 'r_too_many_apps', no: 'r_cleanup' },
      r_restart: { id: 'r_restart', type: 'result', severity: 'easy', title: 'Restart your computer — it\'s the #1 fix', description: 'Not restarting recently is the most common cause of slowdowns. A restart clears the memory and fixes hidden processes.', steps: ['Save any open files first', 'Click Start (Windows) or the Apple logo (Mac)', 'Choose "Restart" — not Shutdown or Sleep', 'Wait for it to fully restart (2–5 minutes)', 'You should notice a significant speed improvement'], guideSlug: 'restart-pc-windows', guideLabel: 'How to Restart Guide' },
      r_overheating: { id: 'r_overheating', type: 'result', severity: 'medium', title: 'Your computer is overheating', description: 'Heat is the enemy of performance. The computer slows itself down to avoid damage.', steps: ['Move the laptop to a hard, flat surface — never use on a bed or pillow', 'Make sure all vents (usually on the sides or bottom) are not blocked', 'Shut down the computer and let it cool for 15 minutes', 'Use a can of compressed air to blow dust from the vents', 'Consider a laptop cooling pad if this happens regularly'] },
      r_too_many_apps: { id: 'r_too_many_apps', type: 'result', severity: 'easy', title: 'Close unnecessary tabs and programs', description: 'Your computer is running out of memory. Closing what you don\'t need will speed things up immediately.', steps: ['Close browser tabs you\'re not actively using — bookmark them first if needed', 'Right-click on programs in the taskbar and close the ones you\'re done with', 'On Windows: press Ctrl+Shift+Esc to see what\'s using the most memory', 'After closing things, give it 30 seconds to recover speed'], guideSlug: 'restart-pc-windows', guideLabel: 'Speed Up Your Computer' },
      r_cleanup: { id: 'r_cleanup', type: 'result', severity: 'medium', title: 'Run a cleanup', description: 'The slowdown may be caused by too many startup programs or a full hard drive.', steps: ['On Windows: search for "Disk Cleanup" in the Start menu and run it', 'Check how much storage you have left — if under 10% free, delete old files', 'On Windows: search "Startup apps" and disable programs you don\'t need', 'Run Windows Update to make sure you\'re not missing performance patches', 'If none of these help, consider contacting a technician'] },
    },
  },

  printer: {
    label: 'Printer Won\'t Print',
    icon: Printer,
    color: 'text-purple-500',
    intro: 'Let\'s get your printer working again.',
    startId: 'q1',
    nodes: {
      q1: { id: 'q1', type: 'question', text: 'Is the printer turned on and showing lights?', subtext: 'Check for any light on the printer — even a standby light means it has power.', yes: 'q2', no: 'r_power' },
      q2: { id: 'q2', type: 'question', text: 'Are there any error lights or messages on the printer?', subtext: 'Orange or red lights often mean a paper jam, low ink, or open cover.', yes: 'r_error_light', no: 'q3' },
      q3: { id: 'q3', type: 'question', text: 'Does the printer appear in your computer\'s printer list?', subtext: 'On Windows: search for "Printers & scanners". On Mac: System Settings > Printers.', yes: 'r_default_printer', no: 'r_not_found' },
      r_power: { id: 'r_power', type: 'result', severity: 'easy', title: 'Check the printer\'s power', description: 'The printer appears to have no power.', steps: ['Make sure the power cable is firmly plugged into the printer and the wall socket', 'Try a different power socket if available', 'Press the power button on the printer and wait 30 seconds for it to start up', 'Make sure the printer is not connected to a power strip that\'s switched off'], guideSlug: 'fix-printer-windows', guideLabel: 'Fix Printer Guide' },
      r_error_light: { id: 'r_error_light', type: 'result', severity: 'easy', title: 'Check for paper jam or low ink', description: 'Error lights usually mean something physical needs attention.', steps: ['Open the printer cover and check for any stuck paper — pull gently in the direction of paper travel', 'Check ink or toner levels — there\'s usually a menu button on the printer', 'Make sure the paper tray is loaded correctly and not overfilled', 'Close all covers firmly — a slightly open cover stops printing', 'Turn the printer off, wait 10 seconds, and turn it back on'], guideSlug: 'fix-printer-windows', guideLabel: 'Fix Printer Guide' },
      r_default_printer: { id: 'r_default_printer', type: 'result', severity: 'easy', title: 'Set it as the default printer', description: 'Your printer is connected but not selected as the main printer.', steps: ['On Windows: search "Printers & scanners", click your printer, choose "Set as default"', 'Also check for a print queue: right-click the printer and choose "See what\'s printing"', 'Cancel any stuck jobs in the queue, then try printing again', 'Restart both your computer and the printer to clear any stuck jobs'], guideSlug: 'fix-printer-windows', guideLabel: 'Fix Printer Guide' },
      r_not_found: { id: 'r_not_found', type: 'result', severity: 'medium', title: 'Re-add the printer to your computer', description: 'Your computer can\'t see the printer. You may need to reconnect it.', steps: ['Make sure the printer cable is firmly connected, or that it\'s on the same WiFi network', 'On Windows: go to "Printers & scanners" > "Add a printer or scanner"', 'Follow the on-screen instructions to install the printer', 'If not found automatically, visit the printer brand\'s website to download the driver', 'Call TekSure if you need hands-on help with driver installation'] },
    },
  },

  password: {
    label: 'Password / Login',
    icon: KeyRound,
    color: 'text-green-500',
    intro: 'Let\'s get you back into your account.',
    startId: 'q1',
    nodes: {
      q1: { id: 'q1', type: 'question', text: 'Have you forgotten the password completely?', subtext: 'Even partially — can you remember the beginning of it?', yes: 'q2', no: 'q3' },
      q2: { id: 'q2', type: 'question', text: 'Do you have access to the email address linked to that account?', subtext: 'You\'ll need to receive a password reset email.', yes: 'r_reset_email', no: 'r_no_email_access' },
      q3: { id: 'q3', type: 'question', text: 'Is Caps Lock turned on?', subtext: 'Look for a Caps Lock key light on your keyboard — accidentally turned on is a very common cause.', yes: 'r_caps_lock', no: 'r_try_typing' },
      r_reset_email: { id: 'r_reset_email', type: 'result', severity: 'easy', title: 'Use the "Forgot Password" link', description: 'You can reset your password using your email address.', steps: ['Click "Forgot password?" on the login page', 'Enter the email address you used to sign up', 'Check your inbox for a reset email (also check Spam/Junk)', 'Click the link in the email — it usually expires in 15–30 minutes', 'Choose a new password that\'s at least 12 characters long'], guideSlug: 'manage-passwords-windows', guideLabel: 'Password Management Guide' },
      r_no_email_access: { id: 'r_no_email_access', type: 'result', severity: 'call-tech', title: 'Contact the service\'s support team', description: 'Without access to the linked email, account recovery requires help from the service directly.', steps: ['Go to the service\'s website and find their Help or Support section', 'Look for "Account Recovery" or "I can\'t access my email"', 'Have your name, date of birth, and any past passwords ready to verify your identity', 'If it\'s a Google or Apple account, they have detailed account recovery forms online'] },
      r_caps_lock: { id: 'r_caps_lock', type: 'result', severity: 'easy', title: 'Turn off Caps Lock and try again', description: 'Passwords are case-sensitive — "MyPassword" and "mypassword" are different.', steps: ['Press the Caps Lock key once to turn it off (the light on the key should go off)', 'Try typing your password again', 'If you\'re still unsure, click the "show password" eye icon to see what you\'re typing', 'If still wrong, use "Forgot Password" to reset it safely'], guideSlug: 'manage-passwords-windows', guideLabel: 'Password Management Guide' },
      r_try_typing: { id: 'r_try_typing', type: 'result', severity: 'easy', title: 'Try these login tips', description: 'The password is being rejected for a common reason.', steps: ['Open Notepad and type your password there so you can see it clearly', 'Copy and paste it into the password field', 'Make sure there are no extra spaces at the start or end', 'Try a different browser — sometimes browser autofill enters the wrong password', 'If still rejected, use "Forgot Password" to create a fresh one'], guideSlug: 'manage-passwords-windows', guideLabel: 'Password Management Guide' },
    },
  },

  phone: {
    label: 'Phone Problems',
    icon: Smartphone,
    color: 'text-rose-500',
    intro: 'Let\'s troubleshoot your phone issue.',
    startId: 'q1',
    nodes: {
      q1: { id: 'q1', type: 'question', text: 'Is the phone crashing, freezing, or unusually slow?', yes: 'q2', no: 'q3' },
      q2: { id: 'q2', type: 'question', text: 'Is the storage nearly full? (Check Settings > Storage)', subtext: 'Phones with less than 10% free storage slow down significantly.', yes: 'r_storage', no: 'r_restart_phone' },
      q3: { id: 'q3', type: 'question', text: 'Is the battery draining unusually fast?', yes: 'r_battery', no: 'r_updates' },
      r_restart_phone: { id: 'r_restart_phone', type: 'result', severity: 'easy', title: 'Force restart your phone', description: 'A full restart clears memory and fixes most performance issues.', steps: ['Hold the power button until "Power off" appears, then tap it', 'Wait 30 seconds with it fully off', 'Press the power button to turn it back on', 'If the phone is completely frozen: iPhone 8+: press Volume Up, Volume Down, then hold Side button. Android: hold Power + Volume Down for 10 seconds'], guideSlug: 'manage-storage-windows', guideLabel: 'Phone Performance Guide' },
      r_storage: { id: 'r_storage', type: 'result', severity: 'easy', title: 'Free up your phone\'s storage', description: 'A full storage is the #1 cause of slow phones. Clearing space will help immediately.', steps: ['Go to Settings > Storage to see what\'s taking the most space', 'Delete apps you haven\'t used in the past month', 'Back up photos to Google Photos or iCloud, then delete them from the phone', 'Clear app cache: Settings > Apps > select an app > Storage > Clear Cache', 'Empty your "Recently Deleted" photo album — those still take up space'], guideSlug: 'manage-storage-windows', guideLabel: 'Free Up Phone Storage' },
      r_battery: { id: 'r_battery', type: 'result', severity: 'medium', title: 'Improve battery life', description: 'Several settings can silently drain your battery faster than expected.', steps: ['Turn down screen brightness — it\'s the biggest battery drain', 'Check which apps use the most battery: Settings > Battery', 'Turn off Location Services for apps that don\'t need it', 'Enable Low Power Mode (iPhone) or Battery Saver (Android) when below 30%', 'If battery health is below 80%, consider a battery replacement'] },
      r_updates: { id: 'r_updates', type: 'result', severity: 'easy', title: 'Check for updates', description: 'Outdated software causes many phone problems — updates include bug fixes.', steps: ['iPhone: Settings > General > Software Update', 'Android: Settings > System > Software Update (location varies by brand)', 'Also update all your apps: App Store or Google Play > Updates', 'Restart the phone after any updates complete', 'If problems continue after updating, try a full restart'], guideSlug: 'manage-storage-windows', guideLabel: 'Phone Help Guide' },
    },
  },

  security: {
    label: 'Virus / Security',
    icon: ShieldAlert,
    color: 'text-destructive',
    intro: 'Let\'s check if your device is safe.',
    startId: 'q1',
    nodes: {
      q1: { id: 'q1', type: 'question', text: 'Are you seeing unexpected pop-ups or strange messages?', subtext: 'Pop-ups that say "Your computer is infected! Call now!" are almost always scams.', yes: 'r_popup_scam', no: 'q2' },
      q2: { id: 'q2', type: 'question', text: 'Did you recently click a suspicious link or download an unexpected file?', subtext: 'Even from someone you know — their account may have been compromised.', yes: 'r_suspicious_click', no: 'q3' },
      q3: { id: 'q3', type: 'question', text: 'Has anyone contacted you asking for remote access to your computer?', subtext: '"Tech support" companies that call you unexpectedly are almost always scammers.', yes: 'r_tech_support_scam', no: 'r_general_security' },
      r_popup_scam: { id: 'r_popup_scam', type: 'result', severity: 'medium', title: 'This is almost certainly a scam pop-up', description: 'Legitimate companies never show urgent pop-ups asking you to call a number.', steps: ['Do NOT call any phone number shown in the pop-up', 'Close the browser tab or window — press Alt+F4 on Windows or Cmd+W on Mac', 'If you can\'t close it, press Ctrl+Alt+Delete (Windows) and end the browser task', 'Run a scan with Windows Defender: search "Windows Security" in Start menu', 'Change your passwords if you\'ve entered any on the suspicious site'], guideSlug: 'safety-scam-alerts', guideLabel: 'Scam Alert Guide' },
      r_suspicious_click: { id: 'r_suspicious_click', type: 'result', severity: 'call-tech', title: 'Act quickly to protect yourself', description: 'Clicking a suspicious link can lead to malware or stolen information.', steps: ['Disconnect from the internet temporarily (turn off WiFi) to stop any data transmission', 'Do NOT enter any passwords or personal information until the device is scanned', 'Run Windows Defender Full Scan: search "Windows Security" > Virus & threat protection', 'Change passwords for your important accounts from a DIFFERENT device first', 'Contact TekSure if you need help — act within the first few hours'] },
      r_tech_support_scam: { id: 'r_tech_support_scam', type: 'result', severity: 'call-tech', title: 'This sounds like a tech support scam', description: 'Microsoft, Apple, and legitimate companies never call you unsolicited to fix a problem.', steps: ['Hang up or end the call immediately — do not give them remote access', 'If you already gave them access: disconnect from the internet NOW', 'Run a full security scan with Windows Defender', 'Change your passwords immediately, especially for banking and email', 'Call your bank if you gave any financial information'] },
      r_general_security: { id: 'r_general_security', type: 'result', severity: 'easy', title: 'Your device looks safe — here\'s how to keep it that way', description: 'No immediate threats detected. These steps will keep you protected.', steps: ['Make sure Windows Update is up to date — updates patch security holes', 'Run a quick scan in Windows Defender once a month', 'Use a different password for every important account', 'Enable two-factor authentication on your email and banking accounts', 'Never click links in emails asking you to "verify your account" — go to the website directly'], guideSlug: 'safety-scam-alerts', guideLabel: 'Online Safety Guide' },
    },
  },
};

/* ── Severity config ─────────────────────────────── */

const severityConfig = {
  easy: { label: 'Easy Fix', badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', icon: '✅' },
  medium: { label: 'Moderate', badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300', icon: '🔧' },
  'call-tech': { label: 'Get Help', badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', icon: '📞' },
};

/* ── Main component ─────────────────────────────── */

export default function Troubleshooter() {
  const [category, setCategory] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [currentId, setCurrentId] = useState<string>('');

  const tree = category ? trees[category] : null;
  const currentNode = tree ? tree.nodes[currentId] : null;

  const totalSteps = tree ? Object.values(tree.nodes).filter(n => n.type === 'question').length : 0;
  const questionsDone = history.filter(id => tree?.nodes[id]?.type === 'question').length;
  const progress = totalSteps > 0 ? Math.round((questionsDone / totalSteps) * 100) : 0;

  const startTree = (key: string) => {
    setCategory(key);
    setCurrentId(trees[key].startId);
    setHistory([]);
  };

  const answer = (nextId: string) => {
    setHistory(h => [...h, currentId]);
    setCurrentId(nextId);
  };

  const goBack = () => {
    if (history.length === 0) {
      setCategory(null);
      return;
    }
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setCurrentId(prev);
  };

  const reset = () => {
    setCategory(null);
    setHistory([]);
    setCurrentId('');
  };

  return (
    <>
      <SEOHead
        title="Interactive Troubleshooter — Fix Tech Problems Step-by-Step | TekSure"
        description="Answer a few yes/no questions and we'll guide you to the exact fix for your tech problem. Works for WiFi, slow computers, printers, passwords, phones, and more."
        path="/tools/troubleshooter"
      />
      <Navbar />
      <main className="container max-w-2xl py-12 min-h-[70vh]">

        {/* Header */}
        <div className="flex items-start gap-3 mb-8">
          <HelpCircle className="h-8 w-8 text-primary shrink-0 mt-0.5" />
          <div>
            <h1 className="text-3xl font-bold">Interactive Troubleshooter</h1>
            <p className="text-muted-foreground mt-1">Answer a few yes/no questions — we'll find the exact fix.</p>
          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* Category selection */}
          {!category && (
            <motion.div key="categories" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <p className="text-base font-medium mb-5 text-muted-foreground">What type of problem are you having?</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(trees).map(([key, t]) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => startTree(key)}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all text-left group"
                    >
                      <div className="h-11 w-11 rounded-xl bg-muted flex items-center justify-center shrink-0">
                        <Icon className={`h-5 w-5 ${t.color}`} />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">{t.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border text-sm text-muted-foreground flex items-start gap-3">
                <ShieldAlert className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>This tool helps you fix problems yourself. For complex or urgent issues, <Link to="/get-help" className="text-primary hover:underline font-medium">get help from a real technician →</Link></span>
              </div>
            </motion.div>
          )}

          {/* Question */}
          {category && currentNode?.type === 'question' && (
            <motion.div key={`q-${currentId}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>

              <div className="flex items-center gap-3 mb-6">
                {tree && (
                  <Badge className="text-xs" variant="outline">
                    {React.createElement(tree.icon, { className: `h-3 w-3 inline mr-1 ${tree.color}` })}
                    {tree.label}
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">{questionsDone + 1} of ~{totalSteps} questions</span>
              </div>

              <Progress value={progress} className="h-1.5 mb-8" />

              <Card className="mb-6">
                <CardContent className="py-8">
                  <p className="text-xl font-semibold text-center mb-2">{currentNode.text}</p>
                  {currentNode.subtext && (
                    <p className="text-sm text-muted-foreground text-center mt-2 max-w-md mx-auto">{currentNode.subtext}</p>
                  )}
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  size="lg"
                  className="h-14 text-base gap-2"
                  onClick={() => answer((currentNode as QuestionNode).yes)}
                >
                  ✅ Yes
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 text-base gap-2"
                  onClick={() => answer((currentNode as QuestionNode).no)}
                >
                  ❌ No
                </Button>
              </div>

              <Button variant="ghost" size="sm" onClick={goBack} className="gap-2 text-muted-foreground">
                ← {history.length === 0 ? 'Change category' : 'Go back'}
              </Button>
            </motion.div>
          )}

          {/* Result */}
          {category && currentNode?.type === 'result' && (
            <motion.div key={`r-${currentId}`} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
              {(() => {
                const result = currentNode as ResultNode;
                const sev = severityConfig[result.severity];
                return (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{sev.icon}</span>
                      <Badge className={`text-sm px-3 py-1 ${sev.badge}`}>{sev.label}</Badge>
                    </div>

                    <Card className="mb-6 border-primary/30">
                      <CardContent className="py-7">
                        <h2 className="text-xl font-bold mb-2">{result.title}</h2>
                        <p className="text-muted-foreground mb-6">{result.description}</p>

                        <div className="space-y-3">
                          {result.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {i + 1}
                              </div>
                              <p className="text-sm leading-relaxed">{step}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      {result.guideSlug && (
                        <Button asChild className="gap-2 flex-1">
                          <Link to={`/guides/${result.guideSlug}`}>
                            <ArrowRight className="h-4 w-4" />
                            {result.guideLabel || 'Read Full Guide'}
                          </Link>
                        </Button>
                      )}
                      {result.severity === 'call-tech' && (
                        <Button asChild variant="outline" className="gap-2 flex-1">
                          <Link to="/get-help">
                            <ExternalLink className="h-4 w-4" />
                            Get Expert Help
                          </Link>
                        </Button>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" onClick={goBack} className="gap-2 text-muted-foreground">
                        ← Back
                      </Button>
                      <Button variant="ghost" size="sm" onClick={reset} className="gap-2 text-muted-foreground">
                        <RotateCcw className="h-3.5 w-3.5" /> Start over
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

// React import needed for createElement
import React from 'react';
