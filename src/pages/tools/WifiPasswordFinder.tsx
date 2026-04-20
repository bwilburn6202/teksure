import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Router, Smartphone, Monitor, Key, AlertTriangle, ArrowRight, ExternalLink, Lock } from 'lucide-react';

interface Guide {
  id: string;
  name: string;
  icon: typeof Wifi;
  tagline: string;
  steps: string[];
  note?: string;
}

const GUIDES: Guide[] = [
  {
    id: 'iphone',
    name: 'iPhone / iPad (iOS 16 or newer)',
    icon: Smartphone,
    tagline: 'Find the password for a Wi-Fi network your iPhone has already connected to.',
    steps: [
      'Open the Settings app.',
      'Tap "Wi-Fi" at the top.',
      'Tap the blue "i" circle next to the network name you want.',
      'Tap the row labeled "Password" — it shows dots.',
      'Use Face ID, Touch ID, or your passcode when prompted.',
      'The password appears in plain text. Tap and hold to copy it.',
    ],
    note: 'Requires iOS 16 or newer. On older iPhones, you can\'t view passwords directly — you\'ll need to check the router label or your home internet account.',
  },
  {
    id: 'android',
    name: 'Android Phone (Android 10 or newer)',
    icon: Smartphone,
    tagline: 'View or share the password for a network you\'ve already joined.',
    steps: [
      'Open Settings → Network & Internet → Internet (or Wi-Fi).',
      'Tap the network name you\'re currently connected to, or the gear icon next to it.',
      'Tap "Share" — you\'ll see a QR code.',
      'The password is shown in plain text below the QR code.',
      'Unlock your phone with PIN, fingerprint, or face unlock when prompted.',
    ],
    note: 'Menu names vary slightly — Samsung, Google Pixel, and OnePlus all use "Share" or "QR Code" under the network\'s settings.',
  },
  {
    id: 'mac',
    name: 'Mac (macOS Ventura or newer)',
    icon: Monitor,
    tagline: 'Look up a saved Wi-Fi password using Mac settings.',
    steps: [
      'Click the Apple menu → System Settings.',
      'Click "Wi-Fi" in the sidebar.',
      'Scroll down and click "Advanced…".',
      'Find the network in the list and click the three dots next to it.',
      'Click "Copy Password". You\'ll be asked to enter your Mac login password.',
      'Paste the password (Cmd+V) anywhere to see it.',
    ],
    note: 'On older macOS versions, open Keychain Access → Passwords → double-click the network name → check "Show password".',
  },
  {
    id: 'windows',
    name: 'Windows 10 / 11 PC',
    icon: Monitor,
    tagline: 'View a saved Wi-Fi password from Windows network settings.',
    steps: [
      'Right-click the Wi-Fi icon in the bottom-right corner → "Network and Internet settings".',
      'Scroll to "Advanced network settings" → click it.',
      'Click "More network adapter options".',
      'Right-click your Wi-Fi connection → "Status".',
      'Click "Wireless Properties" → go to the "Security" tab.',
      'Check "Show characters" to reveal the password.',
    ],
    note: 'You may need to be logged in as an administrator. This only works for networks this PC has already joined.',
  },
  {
    id: 'router',
    name: 'Check the Router Label',
    icon: Router,
    tagline: 'The original Wi-Fi password is usually printed on the router itself.',
    steps: [
      'Find your router — the box with blinking lights, usually near the TV or a cable outlet.',
      'Look at the back, bottom, or side of the router.',
      'Look for a label with "SSID" (network name) and "Password", "Key", or "Wi-Fi Password".',
      'If you\'ve never changed the password, this is it.',
    ],
    note: 'If the password was changed (by you, a family member, or your ISP technician), the label will be wrong. See "Log into the Router" below.',
  },
  {
    id: 'router-login',
    name: 'Log Into Your Router',
    icon: Key,
    tagline: 'View or reset the Wi-Fi password from your router\'s admin page.',
    steps: [
      'Connect your phone or computer to the network (any way you can — wired cable counts).',
      'Open a web browser and type 192.168.1.1 or 192.168.0.1 into the address bar.',
      'Enter the admin username and password — usually printed on the router label.',
      'Look for "Wireless", "Wi-Fi", or "Wireless Security" in the menu.',
      'You\'ll see the current password (sometimes labeled "Pre-Shared Key" or "Network Key").',
      'You can also change it here — make sure to update it on all your devices afterward.',
    ],
    note: 'Admin password is NOT the Wi-Fi password. It\'s a separate password for the router settings — usually "admin" or printed on the router.',
  },
  {
    id: 'isp',
    name: 'Call Your Internet Provider',
    icon: Wifi,
    tagline: 'Last resort — your ISP can reset the password for you.',
    steps: [
      'Call Comcast/Xfinity, Spectrum, Verizon, AT&T, or whoever provides your internet.',
      'Have your account number ready (check a recent bill or your online account).',
      'Ask them to reset your Wi-Fi password or walk you through finding it.',
      'Most providers can do this remotely in under 5 minutes.',
      'Common numbers: Comcast 1-800-934-6489 • Spectrum 1-833-267-6094 • AT&T 1-800-288-2020 • Verizon 1-800-837-4966.',
    ],
    note: 'You\'ll need to reconnect all your devices with the new password after a reset.',
  },
];

export default function WifiPasswordFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = GUIDES.find((g) => g.id === selectedId);

  return (
    <>
      <SEOHead
        title="Wi-Fi Password Finder — Recover Your Network Password"
        description="Step-by-step guides to find or recover your Wi-Fi password on iPhone, Android, Mac, Windows, or directly from your router. No downloads required."
        path="/tools/wifi-password-finder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Home Network</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Wi-Fi Password Finder</h1>
            <p className="text-muted-foreground max-w-2xl">
              Lost your Wi-Fi password? No problem. Pick the device you're on and follow the steps to find or recover it. No apps to download — everything uses features already on your device.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <Card className="mb-8 border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">Only recover passwords for networks you own</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This tool helps you find passwords for your own home Wi-Fi or networks you have permission to access. Accessing someone else's network without permission is illegal in most places.
                </p>
              </div>
            </CardContent>
          </Card>

          {!selected ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">Where do you want to look?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GUIDES.map((g) => {
                  const Icon = g.icon;
                  return (
                    <Card
                      key={g.id}
                      className="cursor-pointer hover:border-primary transition-colors"
                      onClick={() => setSelectedId(g.id)}
                    >
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{g.name}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{g.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedId(null)} className="mb-6">
                ← Back to all methods
              </Button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                <p className="text-muted-foreground">{selected.tagline}</p>
              </div>

              <Card className="mb-6">
                <CardContent className="p-5">
                  <ol className="space-y-3">
                    {selected.steps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center text-sm">
                          {i + 1}
                        </span>
                        <span className="pt-0.5 leading-relaxed text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {selected.note && (
                <Card className="bg-muted/50 border-border">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Lock className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.note}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </section>

        <section className="border-t border-border bg-muted/30">
          <div className="container py-10">
            <h3 className="text-lg font-semibold mb-4">After you find your password</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">Make it a strong password</h4>
                  <p className="text-xs text-muted-foreground mb-3">A good Wi-Fi password is 12+ characters with a mix of letters and numbers.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/guides/create-strong-password">Read guide <ExternalLink className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">Check who's on your Wi-Fi</h4>
                  <p className="text-xs text-muted-foreground mb-3">See every device connected to your home network right now.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/tools/home-network-map">Home Network Map <ArrowRight className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">Save it in a password manager</h4>
                  <p className="text-xs text-muted-foreground mb-3">Never forget your Wi-Fi password again — store it with Bitwarden or 1Password.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/guides/password-managers-explained">Learn how <ArrowRight className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
