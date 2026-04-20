import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface ErrorEntry {
  error: string;
  explanation: string;
  fixes: [string, string, string];
}

const errors: ErrorEntry[] = [
  {
    error: 'Your connection is not private',
    explanation: 'Your browser thinks the website\'s security certificate is invalid or expired, so it can\'t guarantee your data is safe.',
    fixes: [
      'Check the date and time on your device — if they\'re wrong, certificates won\'t validate.',
      'Try opening the page in a private/incognito window to bypass cached certificate data.',
      'If it\'s a trusted site, click "Advanced" then "Proceed" — but never enter passwords on a site with this warning.',
    ],
  },
  {
    error: '404 Not Found',
    explanation: 'The page you\'re trying to visit doesn\'t exist at that address — it may have been moved, deleted, or you typed the URL wrong.',
    fixes: [
      'Double-check the web address for typos.',
      'Go to the website\'s homepage and navigate from there.',
      'Search for the page title on Google — the page may have moved to a new URL.',
    ],
  },
  {
    error: 'Windows cannot find',
    explanation: 'Windows is trying to open a file or program that has been moved, renamed, or deleted from your computer.',
    fixes: [
      'Search for the file or program name using the Start menu search bar.',
      'If it\'s a shortcut, right-click it, select Properties, and check the target path.',
      'Reinstall the program if it was recently uninstalled or updated.',
    ],
  },
  {
    error: 'Not enough storage',
    explanation: 'Your device has run out of space to save new files, install apps, or run updates.',
    fixes: [
      'Delete old photos, videos, and downloads you no longer need.',
      'Clear your browser cache and temporary files (Settings → Storage).',
      'Move large files to an external drive or cloud storage like Google Drive or OneDrive.',
    ],
  },
  {
    error: 'WiFi connected but no internet',
    explanation: 'Your device has connected to the WiFi router, but the router itself can\'t reach the internet.',
    fixes: [
      'Restart your router — unplug it for 30 seconds, then plug it back in.',
      'Try forgetting the WiFi network on your device and reconnecting.',
      'Check if other devices can connect — if none can, contact your internet provider.',
    ],
  },
  {
    error: 'Blue screen BSOD',
    explanation: 'Windows encountered a critical error it couldn\'t recover from, so it shut down to protect your system. This is often caused by hardware or driver issues.',
    fixes: [
      'Restart your computer — many blue screens are one-off glitches.',
      'Note the error code on screen and search for it online for specific guidance.',
      'Update your drivers (especially graphics) and run Windows Update.',
    ],
  },
  {
    error: 'App keeps crashing',
    explanation: 'The application is encountering an error that forces it to close. This can be caused by bugs, low memory, or corrupted data.',
    fixes: [
      'Force-close the app completely and reopen it.',
      'Check for app updates in your app store — the bug may already be fixed.',
      'Uninstall and reinstall the app (your account data is usually saved in the cloud).',
    ],
  },
  {
    error: 'No sound',
    explanation: 'Your device isn\'t producing audio — this could be a volume setting, output device, or driver issue.',
    fixes: [
      'Check the volume isn\'t muted — click the speaker icon in your taskbar/menu bar.',
      'Make sure the correct output device is selected (e.g. speakers vs headphones).',
      'Restart your device — this often resets audio drivers that have stopped responding.',
    ],
  },
  {
    error: 'Printer not found',
    explanation: 'Your computer can\'t communicate with the printer — it may be off, disconnected, or not set up.',
    fixes: [
      'Check the printer is turned on and connected to the same WiFi network as your computer.',
      'Go to Settings → Printers & Scanners and try adding the printer again.',
      'Restart both the printer and your computer, then try printing again.',
    ],
  },
  {
    error: 'Update failed',
    explanation: 'A software or system update couldn\'t install properly — this can be caused by low storage, a poor connection, or conflicting software.',
    fixes: [
      'Free up at least 5–10 GB of storage space and try the update again.',
      'Connect to a stable WiFi network (don\'t use mobile data for large updates).',
      'Restart your device and try the update again — temporary glitches often clear on reboot.',
    ],
  },
  {
    error: 'Access denied',
    explanation: 'You don\'t have permission to open this file, folder, or setting. This is a security feature to protect important data.',
    fixes: [
      'Right-click the file → Properties → Security tab → check your user has permission.',
      'Try running the program as Administrator (right-click → Run as administrator).',
      'If it\'s a work computer, contact your IT department — they may need to grant access.',
    ],
  },
  {
    error: 'DLL file missing',
    explanation: 'A program is looking for a shared system file (DLL) that has been deleted, moved, or corrupted.',
    fixes: [
      'Reinstall the program that\'s showing the error — it will replace the missing file.',
      'Run the System File Checker: open Command Prompt as admin and type "sfc /scannow".',
      'Never download individual DLL files from the internet — they can contain malware.',
    ],
  },
  {
    error: 'DNS server not responding',
    explanation: 'Your device can\'t translate website names into addresses. This is like not being able to look up a phone number in a directory.',
    fixes: [
      'Restart your router and wait 2 minutes before reconnecting.',
      'Change your DNS server to Google (8.8.8.8) or Cloudflare (1.1.1.1) in network settings.',
      'Flush your DNS cache: open Command Prompt and type "ipconfig /flushdns".',
    ],
  },
  {
    error: 'Certificate error',
    explanation: 'The website\'s security certificate is expired, mismatched, or untrusted — your browser is warning you the connection may not be secure.',
    fixes: [
      'Check your device\'s date and time are correct — wrong settings cause certificate failures.',
      'Clear your browser cache and cookies, then reload the page.',
      'If this is a well-known site, try a different browser — it may be a browser-specific issue.',
    ],
  },
  {
    error: 'Page unresponsive',
    explanation: 'A web page has stopped responding, usually because it\'s running heavy scripts or your device is low on memory.',
    fixes: [
      'Click "Wait" to give it more time, or "Kill page" to close it and reload.',
      'Close other tabs and programs to free up memory.',
      'Clear your browser cache and disable unnecessary extensions.',
    ],
  },
  {
    error: 'Low battery warning',
    explanation: 'Your device\'s battery is running low and will shut down soon if not charged.',
    fixes: [
      'Plug in your charger immediately to prevent data loss.',
      'Enable battery saver / low power mode to extend remaining time.',
      'Close unnecessary apps and reduce screen brightness to conserve power.',
    ],
  },
  {
    error: 'Overheating',
    explanation: 'Your device is getting too hot, which can cause slowdowns, shutdowns, or long-term damage.',
    fixes: [
      'Close intensive apps and let your device rest for 10–15 minutes.',
      'Make sure vents aren\'t blocked — don\'t use laptops on soft surfaces like beds or cushions.',
      'If it happens regularly, clean dust from vents or have the device inspected.',
    ],
  },
  {
    error: 'Corrupted file',
    explanation: 'A file has been damaged and can\'t be opened properly. This can happen due to incomplete downloads, power cuts, or disk errors.',
    fixes: [
      'Try downloading or transferring the file again from the original source.',
      'Check your recycle bin / trash for an older version of the file.',
      'Use a file repair tool or ask the sender to resend the file.',
    ],
  },
  {
    error: 'Bluetooth not connecting',
    explanation: 'Your device can\'t pair with or find a Bluetooth accessory — this is usually a pairing or range issue.',
    fixes: [
      'Turn Bluetooth off and on again on both devices.',
      'Remove/forget the device from your Bluetooth settings and pair it fresh.',
      'Make sure the accessory is in pairing mode and within 10 metres of your device.',
    ],
  },
  {
    error: 'Screen flickering',
    explanation: 'Your screen is flashing or blinking — this is typically caused by a display driver issue, incompatible app, or hardware fault.',
    fixes: [
      'Update your display/graphics drivers via Device Manager or System Preferences.',
      'Check if a recently installed app is causing the issue — uninstall it to test.',
      'Adjust your screen refresh rate: Settings → Display → Advanced display settings.',
    ],
  },
];

export default function ErrorDecoder() {
  const [query, setQuery] = useState('');

  const filtered = errors.filter(
    (e) =>
      e.error.toLowerCase().includes(query.toLowerCase()) ||
      e.explanation.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Error Message Decoder | TekSure"
        description="Paste any error message and get a plain-English explanation plus 3 practical fixes."
        path="/tools/error-decoder"
      />
      <Navbar />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2 border-b border-border pb-6">
          <AlertCircle className="h-8 w-8 text-destructive" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Error Message Decoder</h1>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Search for any error message below and get a simple explanation of what went wrong — plus 3 things you can try to fix it.
        </p>

        <div className="relative max-w-xl mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Type an error message, e.g. 'no sound' or '404'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No matching errors found. Try different keywords.
          </p>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((entry) => (
            <Card key={entry.error} className="rounded-2xl border border-border bg-card overflow-hidden">
              <CardHeader className="pb-2 border-b border-border">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                    {entry.error}
                  </CardTitle>
                  <Badge variant="outline" className="shrink-0 text-xs">Error</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="flex gap-2">
                  <Info className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{entry.explanation}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    How to Fix It
                  </h3>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {entry.fixes.map((fix, i) => (
                      <li key={i} className="text-sm text-muted-foreground">{fix}</li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
