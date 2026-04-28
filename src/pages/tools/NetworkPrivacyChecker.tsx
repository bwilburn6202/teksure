import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Wifi, ChevronRight, AlertTriangle } from 'lucide-react';

interface AuditItem {
  id: string;
  title: string;
  detail: string;
  why: string;
}

const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'np-1',
    title: 'Sign in to your router admin page',
    detail: 'Open a browser and type 192.168.1.1 or 192.168.0.1 in the address bar. The login is on a sticker on the router. If your router has an app (Eero, Google Home, ASUS Router), open that instead.',
    why: 'Every step below happens inside this admin page or app. If you have never logged in, that is the first warning sign.',
  },
  {
    id: 'np-2',
    title: 'Change the router admin password from the default',
    detail: 'In the router admin page, find Administration or System Settings → change the admin password to something only you know. This is the password that gets you INTO the router, not the Wi-Fi password.',
    why: 'Default admin passwords are public knowledge. Anyone within Wi-Fi range who guesses your default can reconfigure your whole network.',
  },
  {
    id: 'np-3',
    title: 'Look at the connected devices list',
    detail: 'In your router app or admin page, find Connected Devices, Device List, or Network Map. Every phone, laptop, TV, doorbell, and printer that has ever connected will be listed.',
    why: 'You cannot kick off intruders if you do not know who is on the network.',
  },
  {
    id: 'np-4',
    title: 'Remove or block any device you do not recognize',
    detail: 'Click each device name. If it is not yours, family, or a known smart home gadget, hit Block or Remove. Old printers, neighbors who once had your password, and forgotten guest devices belong off your network.',
    why: 'A stranger on your Wi-Fi can see what websites you visit and try to break into other devices on the same network.',
  },
  {
    id: 'np-5',
    title: 'Set Wi-Fi security to WPA3 (or WPA2 if WPA3 is missing)',
    detail: 'Wireless → Security → set encryption to WPA3-Personal. If your router only offers WPA2, pick WPA2-Personal (AES). Never use WEP or "Open" — those are not secure.',
    why: 'WPA3 is the current standard. WEP and Open networks let anyone nearby read your traffic with free software.',
  },
  {
    id: 'np-6',
    title: 'Use a strong Wi-Fi password — at least 14 characters',
    detail: 'Wireless → Security → change the Wi-Fi password to a long passphrase like FourPurpleClouds-Yawn-87. Write it down, save it in your password manager, and update every device with the new password.',
    why: 'A long passphrase is the single thing that actually keeps neighbors and drive-by attackers out. Hide-SSID does not — see warning below.',
  },
  {
    id: 'np-7',
    title: 'Update the router firmware',
    detail: 'Administration → Firmware Update → check for updates and apply. Many newer routers update on their own; older ones do not. Reboot when the update finishes.',
    why: 'Routers receive security patches the same way phones do. An out-of-date router has known holes that scanners on the internet probe automatically.',
  },
  {
    id: 'np-8',
    title: 'Turn off WPS (Wi-Fi Protected Setup)',
    detail: 'Wireless → WPS → OFF. WPS is the one-button pairing feature with an 8-digit PIN.',
    why: 'WPS PINs can be cracked in hours with free tools. Turning it off costs you nothing — you can still type the password normally.',
  },
  {
    id: 'np-9',
    title: 'Turn off Remote Management',
    detail: 'Administration → Remote Management or Remote Access → OFF unless you genuinely need to log into your router from outside the house.',
    why: 'Remote management open to the internet is one of the top ways routers get taken over.',
  },
  {
    id: 'np-10',
    title: 'Set up a separate Guest Wi-Fi for visitors and smart devices',
    detail: 'Wireless → Guest Network → ON. Give it its own name and password. Put visitors, doorbells, smart bulbs, and the TV on Guest. Keep your computer and phone on the main network.',
    why: 'If a smart bulb gets hacked or a guest device is infected, the trouble stays on Guest and cannot reach your laptop or files.',
  },
];

export default function NetworkPrivacyChecker() {
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEOHead
        title="Home Network Privacy Checker"
        description="Audit your home Wi-Fi in 15 minutes. See who is connected, kick off old devices, change router defaults, turn on WPA3, and update firmware."
        path="/tools/network-privacy-checker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-cyan-50 via-background to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <Wifi className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Home Network Privacy Checker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A 15-minute audit of your home Wi-Fi. See who is connected, lock the router, and patch the holes most people leave open.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Network Privacy Checker' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">"Hide my SSID" is mostly theater</p>
                  <p className="text-xs text-muted-foreground">
                    Hiding your network name (SSID) does not actually hide it. Any free app on a phone can list hidden networks within seconds. All hiding does is make your own devices slower to reconnect and more likely to leak the network name elsewhere. Skip the hide-SSID checkbox. A long, strong Wi-Fi password is what truly keeps people out — not invisibility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {AUDIT_ITEMS.length} done</p>

          <div className="space-y-3 mb-6">
            {AUDIT_ITEMS.map(item => (
              <Card key={item.id} className={`border-border ${done.has(item.id) ? 'bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                <CardContent className="p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                      <p className="text-xs italic text-muted-foreground mt-1"><strong>Why:</strong> {item.why}</p>
                    </div>
                  </label>
                </CardContent>
              </Card>
            ))}
          </div>

          {done.size === AUDIT_ITEMS.length && (
            <Card className="border-green-300 bg-green-50 dark:bg-green-950/20 mb-6">
              <CardContent className="p-5 text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 border-green-300">All done</Badge>
                <p className="font-semibold">Your home network is locked down.</p>
                <p className="text-sm text-muted-foreground mt-1">Set a calendar reminder to repeat this audit every six months.</p>
              </CardContent>
            </Card>
          )}

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A twice-a-year habit</p>
              <p className="text-xs text-muted-foreground">
                Devices come and go. Old phones, ex-roommates, retired smart plugs — they pile up on your network until you check. Run this audit twice a year. It takes 15 minutes and shuts the door on people who should not still have access.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/router-upgrade-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Router Upgrade Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Time for new hardware? Find out.</p>
              </Link>
              <Link to="/tools/guest-wifi-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Guest Wi-Fi Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">A safe lane for visitors.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Bank from a network you trust.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write the new admin password and Wi-Fi password on a sticky note inside a kitchen drawer. Paper at home is safer than a default password printed on a sticker stuck to the router.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
