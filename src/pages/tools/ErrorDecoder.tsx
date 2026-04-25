import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertTriangle,
  ShieldAlert,
  Info,
  CheckCircle2,
  Search,
  ExternalLink,
  Lightbulb,
  MessageCircleQuestion,
} from 'lucide-react';

type Severity = 'minor' | 'warning' | 'scam' | 'info';

interface ErrorMatcher {
  id: string;
  title: string;
  keywords: string[];
  severity: Severity;
  meaning: string;
  whatToDo: string[];
  whenToWorry: string;
  relatedGuide?: { label: string; href: string };
}

const errorMatchers: ErrorMatcher[] = [
  {
    id: 'connection-not-private',
    title: 'Connection Not Private (SSL Warning)',
    keywords: [
      'connection is not private',
      'your connection is not private',
      'net::err_cert',
      'ssl certificate',
      'not secure',
    ],
    severity: 'warning',
    meaning:
      'Your browser is telling you that the website you are trying to visit has a problem with its security certificate. This certificate is what lets your computer know the website is really who it claims to be. It could be nothing (an expired certificate the site forgot to renew) or it could be a sign that someone is trying to intercept the connection.',
    whatToDo: [
      'Double-check the address in the address bar for typos.',
      'Close the tab and try again from a trusted link or bookmark.',
      'If you are on public WiFi (coffee shop, airport), disconnect and try on a different network.',
      'If you trust the site and recognize the name, you can sometimes click "Advanced" and proceed — but never enter a password or payment info on a site showing this warning.',
    ],
    whenToWorry: 'Worry if the site is a bank, email, shopping site, or anywhere you log in. For a blog or news site, it is often just an expired certificate on the site owner\'s end.',
    relatedGuide: { label: 'How to tell if a website is safe', href: '/guides' },
  },
  {
    id: 'page-not-found',
    title: '404 — Page Not Found',
    keywords: ['404', 'page not found', 'not found'],
    severity: 'minor',
    meaning:
      'This means the web address you tried to visit does not exist on that website. Either the page was removed, the link you clicked was broken, or there is a small typo in the URL.',
    whatToDo: [
      'Check the address bar for a typo (missing letters, wrong punctuation).',
      'Go to the main page of the site and use its search to find what you wanted.',
      'If you got here from a link in an email, the email may be old or out of date.',
      'Try the site\'s home page and start fresh.',
    ],
    whenToWorry: 'Almost never. This is one of the most harmless errors on the web.',
  },
  {
    id: 'disk-not-readable',
    title: 'The Disk You Inserted Was Not Readable',
    keywords: [
      'disk you inserted was not readable',
      'disk not readable',
      'not readable by this computer',
    ],
    severity: 'warning',
    meaning:
      'Your Mac cannot read the external drive, USB stick, or SD card you just connected. This usually means the drive is formatted for a different system (like Windows) or it has become corrupted.',
    whatToDo: [
      'Click "Ignore" if prompted — do NOT click "Initialize" unless you are sure you want to erase the drive.',
      'Try plugging the drive into a different USB port or a different computer.',
      'If the drive works on a Windows computer, it is likely formatted as NTFS. You can still read files using an app like "Mounty for NTFS".',
      'If no computer can read it, the drive may be failing. Stop using it and try data recovery software like Disk Drill.',
    ],
    whenToWorry: 'Worry if this drive has important files and no computer can read it — that is a sign of hardware failure.',
    relatedGuide: { label: 'Back up files before it is too late', href: '/tools/backup-wizard' },
  },
  {
    id: 'storage-full',
    title: 'Storage Full / Not Enough Space',
    keywords: [
      'not enough storage',
      'storage full',
      'disk full',
      'out of space',
      'storage almost full',
      'your startup disk is almost full',
    ],
    severity: 'warning',
    meaning:
      'Your device has run out of room to save more files, photos, or apps. This slows things down and prevents updates from installing.',
    whatToDo: [
      'Delete photos and videos you no longer need (these take the most space).',
      'Empty the trash / recycle bin — files there still count against your space.',
      'Uninstall apps you do not use.',
      'Move big files to an external drive or to cloud storage.',
      'Restart the device after clearing space.',
    ],
    whenToWorry: 'Not urgent, but do not ignore it — your device may fail to back up or update until you free space.',
    relatedGuide: { label: 'Free up space on your device', href: '/tools/computer-cleanup-wizard' },
  },
  {
    id: 'no-internet',
    title: 'No Internet Connection',
    keywords: ['no internet connection', 'offline', 'you are offline', 'no connection', 'check your connection'],
    severity: 'minor',
    meaning:
      'Your device is not connected to the internet. Either your WiFi is off, the router has a problem, or your internet service is down.',
    whatToDo: [
      'Check that WiFi is turned on in your device\'s settings.',
      'Turn WiFi off and back on again.',
      'Unplug your router, wait 30 seconds, then plug it back in.',
      'Try connecting a different device to see if the problem is only on this one.',
      'If nothing works, call your internet provider — there may be an outage.',
    ],
    whenToWorry: 'Not an emergency. Most internet problems fix themselves with a router restart.',
    relatedGuide: { label: 'Fix your WiFi when it stops working', href: '/guides' },
  },
  {
    id: 'windows-cannot-access',
    title: 'Windows Cannot Access',
    keywords: ['windows cannot access', 'access denied', 'you do not have permission'],
    severity: 'warning',
    meaning:
      'Windows is blocking you from opening a file, folder, or network location because it does not think you have permission. This can happen with files from another computer, from an external drive, or on a shared network.',
    whatToDo: [
      'Right-click the file or folder and choose "Properties" → "Security" to check permissions.',
      'Make sure you are signed in with an administrator account.',
      'If it is a network drive, reconnect to it or ask the network owner to re-share it.',
      'If the file was downloaded from the internet, right-click → Properties → check "Unblock".',
    ],
    whenToWorry: 'Not usually a security concern — it is a permissions issue, not a virus.',
  },
  {
    id: 'app-cant-open',
    title: 'This App Can\'t Open on This PC',
    keywords: ['this app can\'t open on this pc', "this app can't run on your pc", 'not compatible with'],
    severity: 'minor',
    meaning:
      'The program you are trying to install or open does not match your version of Windows. This is common if you downloaded a 64-bit app for a 32-bit computer, or if the app was made for an older Windows version.',
    whatToDo: [
      'Check the app\'s download page for a version that matches your Windows (10, 11, 32-bit, or 64-bit).',
      'In Settings → System → About, look at "System type" to see if you have 32-bit or 64-bit Windows.',
      'If the app is very old, try right-clicking the installer and choosing "Troubleshoot compatibility".',
      'Download the latest version from the official website — not a third-party download site.',
    ],
    whenToWorry: 'Only worry if you downloaded the app from an unfamiliar website — some fake apps pretend to be popular software.',
  },
  {
    id: 'mac-virus-popup',
    title: 'Your Mac Has a Virus (Popup)',
    keywords: ['your mac has a virus', 'your mac is infected', 'mac virus detected', 'macos is infected'],
    severity: 'scam',
    meaning:
      'This is almost always a scam popup in your web browser — not a real message from your Mac. Real macOS virus warnings do not appear in browser pop-ups and never ask you to call a number or download software.',
    whatToDo: [
      'Do NOT click any buttons in the popup. Do NOT call any phone number shown.',
      'Close the browser tab. If it will not close, force-quit the browser (Cmd+Option+Esc).',
      'When you reopen the browser, hold Shift so it does not reopen the same tab.',
      'Clear your browser history and cache.',
      'If you are still worried, run the free Malwarebytes for Mac to scan.',
    ],
    whenToWorry: 'Do not panic. Macs can get malware, but this specific popup style is fake 99% of the time.',
    relatedGuide: { label: 'Spot and remove a scam popup', href: '/scam-defense' },
  },
  {
    id: 'defender-popup',
    title: 'Microsoft Defender Detected (Popup)',
    keywords: ['microsoft defender detected', 'windows defender detected a threat', 'your computer is infected'],
    severity: 'scam',
    meaning:
      'If this message appeared inside your web browser (with a flashing page, alarm sound, or a "call this number" button), it is a scam. Real Windows Defender warnings appear in a small system notification and never include phone numbers or download links.',
    whatToDo: [
      'Do NOT call the number. Do NOT let anyone remote into your computer.',
      'Close the browser tab. If the tab will not close, press Ctrl+Alt+Delete → Task Manager → end the browser.',
      'Open Windows Security (Start menu → search "Windows Security") to run a real scan.',
      'If you let a scammer into your computer already, disconnect from the internet and call your bank.',
    ],
    whenToWorry: 'Worry if you already called the number or let someone remote in. Otherwise, just close the tab.',
    relatedGuide: { label: 'What to do after a scam call', href: '/scam-defense' },
  },
  {
    id: 'call-this-number',
    title: 'Call This Number Immediately',
    keywords: [
      'call this number immediately',
      'call support now',
      'call microsoft now',
      'call apple support now',
      'call this toll free',
    ],
    severity: 'scam',
    meaning:
      'This is a scam, plain and simple. No legitimate company (Microsoft, Apple, Google, your bank) will ever put a pop-up on your screen telling you to call a phone number. Scammers use fear to make you act fast.',
    whatToDo: [
      'Do not call. Close the popup or the browser tab.',
      'If you cannot close it, restart the computer.',
      'If you already called, hang up now. Do not give them access to your computer.',
      'If they got access, disconnect from the internet, run a malware scan, and change your passwords from a different device.',
    ],
    whenToWorry: 'Call your bank right away if you already gave the scammer money, card info, or remote access to your computer.',
    relatedGuide: { label: 'Recover after a tech support scam', href: '/scam-defense' },
  },
  {
    id: 'unusual-activity',
    title: 'The System Has Detected Unusual Activity',
    keywords: [
      'unusual activity',
      'suspicious activity detected',
      'system has detected',
      'your computer has been locked',
    ],
    severity: 'scam',
    meaning:
      'This wording almost always comes from scam pop-ups trying to scare you into calling a fake support number. It is not a real operating system message.',
    whatToDo: [
      'Close the tab or force-quit the browser.',
      'Do not call any number on the screen.',
      'Do not download anything the popup suggests.',
      'Clear your browser history after closing.',
    ],
    whenToWorry: 'Only worry if you already called the number or installed what they told you to install.',
    relatedGuide: { label: 'Learn to spot tech support scams', href: '/scam-defense' },
  },
  {
    id: 'icloud-full',
    title: 'iCloud Storage Is Full',
    keywords: ['icloud storage is full', 'icloud storage full', 'not enough icloud storage'],
    severity: 'info',
    meaning:
      'This is a real Apple message. Your iCloud account has run out of space, so your photos, messages, and device backups cannot sync anymore. The free iCloud plan is only 5 GB, which fills up fast.',
    whatToDo: [
      'On iPhone: Settings → [your name] → iCloud → Manage Account Storage.',
      'Delete old device backups you no longer need.',
      'Turn off iCloud backup for apps you do not care about (like games).',
      'Consider upgrading to iCloud+ at $0.99/month for 50 GB — usually worth it.',
    ],
    whenToWorry: 'Important if you rely on iCloud to back up photos — you could lose new photos if your phone is ever lost or broken.',
    relatedGuide: { label: 'Clean up iCloud storage', href: '/guides' },
  },
  {
    id: 'google-storage-full',
    title: 'Google Account Storage Is Full',
    keywords: ['google account storage', 'google drive full', 'google storage full', 'gmail storage full'],
    severity: 'info',
    meaning:
      'This is a real Google message. Your 15 GB of free Google storage (shared between Gmail, Google Drive, and Google Photos) is full or almost full. New emails and backups will stop working until you free space.',
    whatToDo: [
      'Go to one.google.com/storage to see what is using your space.',
      'Delete old emails with big attachments in Gmail (search "has:attachment larger:10MB").',
      'Empty the Trash in Gmail, Drive, and Photos.',
      'Consider Google One — the 100 GB plan is about $2/month.',
    ],
    whenToWorry: 'Important — once full, your Gmail will stop receiving new messages.',
    relatedGuide: { label: 'Clean up Gmail and Google Drive', href: '/tools/email-declutter' },
  },
  {
    id: 'low-battery',
    title: 'Low Battery',
    keywords: ['low battery', 'battery low', 'charge your'],
    severity: 'minor',
    meaning: 'Your device is running out of battery power and needs to be plugged in soon.',
    whatToDo: [
      'Plug the device into a power source.',
      'If the battery dies very quickly, it may be time for a battery replacement.',
      'Turn on Low Power Mode (iPhone) or Battery Saver (Android/Windows) to stretch the last 10-20%.',
    ],
    whenToWorry: 'Never.',
  },
  {
    id: 'sim-not-detected',
    title: 'SIM Not Detected',
    keywords: ['sim not detected', 'no sim card', 'sim card not found', 'invalid sim'],
    severity: 'warning',
    meaning:
      'Your phone cannot find the SIM card (the small chip that identifies you to your carrier). Without it, you cannot make calls or use mobile data.',
    whatToDo: [
      'Restart your phone — this fixes it most of the time.',
      'Turn Airplane Mode on for 10 seconds, then off.',
      'If it still does not work, carefully take out the SIM tray, wipe the card with a soft cloth, and reinsert it.',
      'If it still shows no SIM, call your carrier — they can issue a replacement for free.',
    ],
    whenToWorry: 'Worry if you have a newer phone with an eSIM — the problem may be with your account, not the card.',
  },
  {
    id: 'app-store-cant-connect',
    title: 'Cannot Connect to the App Store',
    keywords: ['cannot connect to the app store', 'app store is unavailable', "can't connect to app store"],
    severity: 'minor',
    meaning:
      'Your iPhone or iPad cannot reach Apple\'s App Store servers. This is usually a temporary network or Apple-side issue.',
    whatToDo: [
      'Check that your WiFi or cellular data is working (try opening a website).',
      'Go to Settings → [your name] and sign out of your Apple ID, then sign back in.',
      'Check Apple\'s system status page at apple.com/support/systemstatus for App Store outages.',
      'Restart the device.',
    ],
    whenToWorry: 'Not a concern — this is usually a temporary glitch.',
  },
  {
    id: 'play-services',
    title: 'Google Play Services Error',
    keywords: ['google play services', 'play services has stopped', 'play services keeps stopping'],
    severity: 'minor',
    meaning:
      'Google Play Services is the background app that keeps other Google apps (Gmail, Maps, Chrome) working. When it has an error, multiple apps can misbehave.',
    whatToDo: [
      'Restart your Android phone first — fixes it most of the time.',
      'Go to Settings → Apps → Google Play Services → Storage → Clear Cache (not Clear Data).',
      'Make sure your phone has pending updates installed.',
      'If it keeps happening, remove and re-add your Google account.',
    ],
    whenToWorry: 'Only worry if multiple apps keep crashing — that may mean your Android needs a full reset.',
  },
  {
    id: 'bluetooth-not-found',
    title: 'Bluetooth Device Not Found / Not Paired',
    keywords: ['bluetooth not found', 'device not paired', 'pairing failed', 'bluetooth device not connected'],
    severity: 'minor',
    meaning:
      'Your phone, tablet, or computer cannot find the Bluetooth device you want to connect to (headphones, speaker, keyboard, or similar).',
    whatToDo: [
      'Put the Bluetooth device in pairing mode — usually by holding a button until a light flashes.',
      'Turn Bluetooth off and back on on your phone or computer.',
      'If the device was previously paired, "forget" it in Bluetooth settings and try pairing again.',
      'Keep the two devices within 3 feet of each other during pairing.',
    ],
    whenToWorry: 'Not a real concern — Bluetooth pairing often takes two or three tries.',
    relatedGuide: { label: 'Fix Bluetooth pairing problems', href: '/tools/bluetooth-troubleshooter' },
  },
  {
    id: 'printer-offline',
    title: 'Printer Offline',
    keywords: ['printer offline', 'printer is offline', 'printer not responding'],
    severity: 'minor',
    meaning:
      'Your computer thinks the printer is unavailable — either because the printer is off, not connected to WiFi, or because of a software hiccup.',
    whatToDo: [
      'Make sure the printer is turned on and has paper and ink.',
      'Check that the printer is connected to the same WiFi network as your computer.',
      'Turn the printer off, wait 20 seconds, and turn it back on.',
      'Remove the printer from your computer\'s printer list and add it again.',
    ],
    whenToWorry: 'Not urgent — printers going offline is one of the most common tech problems.',
  },
  {
    id: 'email-cant-send',
    title: 'Email Could Not Be Sent',
    keywords: ['email could not be sent', 'message not sent', 'unable to send', 'mail delivery failed'],
    severity: 'minor',
    meaning:
      'The email you tried to send did not make it out. This is usually because of a bad internet connection, a typo in the recipient\'s email address, or a temporary problem with your email provider.',
    whatToDo: [
      'Check the recipient\'s email address for typos.',
      'Check your internet connection.',
      'Look in your outbox or drafts — the message may still be there waiting to send.',
      'Try again in a few minutes.',
    ],
    whenToWorry: 'If every email you send bounces back, your email account may be suspended — contact your provider.',
  },
  {
    id: 'out-of-memory',
    title: 'Out of Memory / Memory Error',
    keywords: ['out of memory', 'memory error', 'your system has run out of application memory'],
    severity: 'warning',
    meaning:
      'Your computer does not have enough temporary memory (RAM) to keep all your open apps running. This is different from storage — it is about how much your computer can handle at once.',
    whatToDo: [
      'Close any apps and browser tabs you are not actively using.',
      'Restart the computer — this clears memory.',
      'If it happens often, your computer may need a RAM upgrade or replacement.',
      'On Mac, open Activity Monitor to see which app is using the most memory.',
    ],
    whenToWorry: 'If this happens daily, your computer is probably underpowered for what you are doing.',
  },
  {
    id: 'permission-denied',
    title: 'Permission Denied',
    keywords: ['permission denied', 'access is denied', 'you don\'t have permission'],
    severity: 'minor',
    meaning:
      'An app is trying to do something but your device has not been given the green light — for example, access your photos, microphone, or location.',
    whatToDo: [
      'On iPhone: Settings → Privacy & Security → pick the permission (Photos, Camera, etc.) → turn it on for the app.',
      'On Android: Settings → Apps → the app → Permissions → allow what it needs.',
      'On Mac: System Settings → Privacy & Security → find the category and approve the app.',
      'On Windows: Settings → Privacy & Security → pick the category and toggle the app on.',
    ],
    whenToWorry: 'Be careful about what you approve — do not give microphone or location access to apps that should not need it.',
    relatedGuide: { label: 'Review app permissions', href: '/tools/app-permissions' },
  },
  {
    id: 'unexpected-error',
    title: 'Unexpected Error / Something Went Wrong',
    keywords: ['unexpected error', 'something went wrong', 'an error occurred', 'oops'],
    severity: 'minor',
    meaning:
      'This is the most generic error in tech. It means the app or website ran into a problem and does not know how to describe it.',
    whatToDo: [
      'Refresh the page or reopen the app.',
      'Restart your device — this fixes about half of these errors.',
      'Make sure the app is up to date.',
      'If it keeps happening, search the exact error message in Google to find specific fixes.',
    ],
    whenToWorry: 'Only worry if it happens over and over for the same task — that points to a real bug.',
  },
  {
    id: 'dns-error',
    title: 'DNS Error / ERR_NAME_NOT_RESOLVED',
    keywords: ['dns error', 'err_name_not_resolved', 'dns_probe', 'server dns address'],
    severity: 'minor',
    meaning:
      'Your computer is connected to the internet but cannot translate the website name (like google.com) into the number address that computers actually use. This usually means your router or internet provider has a hiccup.',
    whatToDo: [
      'Restart your router (unplug for 30 seconds).',
      'Try a different website to see if the problem is just with one site.',
      'Change your DNS to Google\'s (8.8.8.8) or Cloudflare\'s (1.1.1.1) in your WiFi settings.',
      'Restart your computer.',
    ],
    whenToWorry: 'Not usually a security issue — just a network problem.',
  },
  {
    id: 'certificate-expired',
    title: 'Certificate Expired',
    keywords: ['certificate expired', 'ssl certificate has expired', 'net::err_cert_date_invalid'],
    severity: 'warning',
    meaning:
      'The website\'s security certificate ran out of date. The site owner forgot to renew it. The connection may still be safe, but browsers warn you because they cannot verify the site is who it claims to be.',
    whatToDo: [
      'Make sure your computer\'s clock is set correctly (wrong date can trigger this).',
      'Try loading the site in a different browser.',
      'Avoid entering any login or payment info on a site with an expired certificate.',
      'Contact the site owner if it is a site you trust.',
    ],
    whenToWorry: 'Worry if it is a bank, email, or shopping site. For small sites, it is usually just a renewal they missed.',
  },
  {
    id: 'site-cant-be-reached',
    title: 'This Site Can\'t Be Reached',
    keywords: ['this site can\'t be reached', 'site can not be reached', 'took too long to respond', 'err_connection'],
    severity: 'minor',
    meaning:
      'Your browser tried to load the site but nothing came back. Either the site is down, the address is wrong, or your internet has a problem.',
    whatToDo: [
      'Check the address for typos.',
      'Try loading a different website to see if your internet works at all.',
      'Try the site in a different browser or on a phone using cellular data.',
      'Use downforeveryoneorjustme.com to check if the site is down for everyone.',
    ],
    whenToWorry: 'Not usually — most of the time the site itself is having problems.',
  },
  {
    id: 'service-unavailable',
    title: 'Service Unavailable / 503 Error',
    keywords: ['service unavailable', '503', 'server is temporarily unable'],
    severity: 'info',
    meaning:
      'The website\'s server is overloaded or being updated. This is not your fault — you cannot fix it on your end.',
    whatToDo: [
      'Wait a few minutes and refresh.',
      'Check the company\'s social media for outage announcements.',
      'Try again later.',
    ],
    whenToWorry: 'Never — 503 means the site itself is having a bad day, not you.',
  },
  {
    id: 'scan-to-unlock',
    title: 'Scan QR Code to Unlock (Popup)',
    keywords: ['scan to unlock', 'scan this qr code', 'scan with your phone to verify'],
    severity: 'scam',
    meaning:
      'Popups or messages telling you to scan a QR code to "unlock" your account or verify your identity are almost always scams. The QR code opens a malicious site on your phone — a device that may not have the same protections as your computer.',
    whatToDo: [
      'Do not scan the code.',
      'Close the page or app.',
      'If the message claimed to be from a company you do business with, go to their official website or app directly.',
    ],
    whenToWorry: 'Only worry if you already scanned the code and entered login info on the site it opened.',
    relatedGuide: { label: 'Avoid QR code scams', href: '/scam-defense' },
  },
];

const severityConfig: Record<
  Severity,
  { label: string; badgeClass: string; Icon: typeof AlertTriangle }
> = {
  minor: {
    label: 'Minor issue',
    badgeClass:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900',
    Icon: CheckCircle2,
  },
  warning: {
    label: 'Worth attention',
    badgeClass:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-900',
    Icon: AlertTriangle,
  },
  scam: {
    label: 'Possible scam — be careful',
    badgeClass:
      'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900',
    Icon: ShieldAlert,
  },
  info: {
    label: 'Informational',
    badgeClass:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900',
    Icon: Info,
  },
};

const exampleErrors = [
  'Your connection is not private',
  '404 Page Not Found',
  'iCloud storage is full',
  'Printer offline',
  'The system has detected unusual activity. Call 1-800-XXX-XXXX now.',
  'This site can\'t be reached',
  'Google Play Services has stopped',
  'Bluetooth device not paired',
];

export default function ErrorDecoder() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ErrorMatcher | null>(null);
  const [submittedText, setSubmittedText] = useState('');
  const [noMatch, setNoMatch] = useState(false);

  const decode = (text: string) => {
    const query = text.trim().toLowerCase();
    if (!query) return;
    setSubmittedText(text.trim());
    const match = errorMatchers.find((err) =>
      err.keywords.some((kw) => query.includes(kw.toLowerCase()))
    );
    if (match) {
      setResult(match);
      setNoMatch(false);
    } else {
      setResult(null);
      setNoMatch(true);
    }
  };

  const handleExample = (ex: string) => {
    setInput(ex);
    decode(ex);
  };

  const handleSubmit = () => decode(input);

  const reset = () => {
    setInput('');
    setResult(null);
    setSubmittedText('');
    setNoMatch(false);
  };

  return (
    <>
      <SEOHead
        title="What's This Error? — Plain English Error Message Decoder | TekSure"
        description="Paste a confusing tech error message and get a plain-English explanation of what it means, what to do about it, and whether it's a sign of a scam."
        path="/tools/error-decoder"
      />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <MessageCircleQuestion className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What's This Error?
            </h1>
            <p className="text-muted-foreground text-lg">
              Paste a confusing tech error message below and we'll translate it into plain English — what it means, what to do, and whether you need to worry.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-5xl">
          {/* Input area */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Paste your error message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Example: Your connection is not private. Attackers might be trying to steal your information..."
                className="min-h-[140px] text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Error message text"
              />
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleSubmit} disabled={!input.trim()} size="lg">
                  <Search className="h-4 w-4 mr-2" />
                  Decode
                </Button>
                {(result || noMatch) && (
                  <Button variant="outline" onClick={reset} size="lg">
                    Clear
                  </Button>
                )}
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Or try an example:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleErrors.map((ex) => (
                    <button
                      key={ex}
                      onClick={() => handleExample(ex)}
                      className="text-xs px-3 py-2 rounded-full border border-border hover:border-foreground/30 bg-background text-foreground/80 transition-colors"
                    >
                      {ex.length > 40 ? ex.slice(0, 40) + '…' : ex}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Result */}
          {result && (
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left: original error */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground uppercase tracking-wide">
                    Your error message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm whitespace-pre-wrap font-mono bg-background p-4 rounded-lg border">
                    {submittedText}
                  </pre>
                </CardContent>
              </Card>

              {/* Right: decoded */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      {(() => {
                        const { Icon } = severityConfig[result.severity];
                        return <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />;
                      })()}
                      <Badge
                        variant="outline"
                        className={severityConfig[result.severity].badgeClass}
                      >
                        {severityConfig[result.severity].label}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2">{result.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                      What it means
                    </h3>
                    <p className="text-sm leading-relaxed">{result.meaning}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                      What to do
                    </h3>
                    <ol className="space-y-2 text-sm">
                      {result.whatToDo.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="font-semibold text-foreground/60 min-w-[1.25rem]">
                            {i + 1}.
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/40 border">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" aria-hidden="true" />
                      When to worry
                    </h3>
                    <p className="text-sm leading-relaxed">{result.whenToWorry}</p>
                  </div>

                  {result.relatedGuide && (
                    <Link
                      to={result.relatedGuide.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {result.relatedGuide.label}
                    </Link>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* No match */}
          {noMatch && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">We don't recognize this error yet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We couldn't match this message to one in our library. Try these next steps:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <Search className="h-4 w-4 mt-0.5 text-foreground/60" />
                    <span>
                      Search the exact error message on{' '}
                      <Link to="/search" className="text-primary hover:underline">
                        TekSure
                      </Link>{' '}
                      — we might have a full guide for it.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircleQuestion className="h-4 w-4 mt-0.5 text-foreground/60" />
                    <span>
                      Paste it into{' '}
                      <Link to="/tekbrain" className="text-primary hover:underline">
                        TekBrain
                      </Link>{' '}
                      — our AI assistant can help with unusual errors.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ExternalLink className="h-4 w-4 mt-0.5 text-foreground/60" />
                    <span>
                      Search the exact error text in Google with your device name added. Most errors have been seen by thousands of people before you.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-foreground/60" />
                    <span>Try a restart first — it fixes more than half of all device errors.</span>
                  </li>
                </ul>
                <div className="pt-2 p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                  <p className="text-sm text-red-800 dark:text-red-300">
                    <ShieldAlert className="h-4 w-4 inline-block mr-1" />
                    If the message tells you to call a number, scan a QR code, or pay with gift cards — it's a scam. Close it.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {!result && !noMatch && (
            <Card className="bg-muted/30 border-dashed">
              <CardContent className="py-10 text-center">
                <MessageCircleQuestion className="h-10 w-10 mx-auto text-muted-foreground/60 mb-3" />
                <p className="text-muted-foreground">
                  Paste an error message above, or click an example, to get started.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  );
}
