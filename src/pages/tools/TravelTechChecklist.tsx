import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Plane, ChevronRight, Printer, AlertTriangle, type LucideIcon,
  Smartphone, Wifi, CreditCard, MapPin, ShieldCheck, Camera,
} from 'lucide-react';

type TripType = 'domestic' | 'international';

interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  link?: { label: string; href: string };
  internationalOnly?: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  items: ChecklistItem[];
}

const SECTIONS: Section[] = [
  {
    id: 'before',
    title: '1 to 2 weeks before',
    icon: Smartphone,
    items: [
      {
        id: 'b1',
        title: 'Add an international plan to your phone (international trips only)',
        detail: 'Verizon TravelPass and AT&T International Day Pass are $10/day, only billed on days you actually use them. T-Mobile already includes basic international roaming on most plans. Call *611 a week before to confirm yours is active.',
        internationalOnly: true,
      },
      {
        id: 'b2',
        title: 'Tell your bank and credit-card companies your travel dates',
        detail: 'Most banks let you do this in the app: card → "Travel notice". Otherwise the fraud team may freeze your card the first time you use it abroad. Skip this for domestic trips — it usually is not needed.',
      },
      {
        id: 'b3',
        title: 'Back up your phone',
        detail: 'iPhone: Settings → your name → iCloud → iCloud Backup → Back Up Now. Android: Settings → Google → Backup → Back up now. If your phone is lost or stolen, this is what saves your photos and contacts.',
        link: { label: 'Backup Wizard', href: '/tools/backup-wizard' },
      },
      {
        id: 'b4',
        title: 'Save offline maps for where you are going',
        detail: 'Google Maps: search the city, tap the name → Download. The map works fully offline — directions, search, transit. iPhone Maps does the same on iOS 17+.',
      },
      {
        id: 'b5',
        title: 'Store boarding passes, hotel info, and IDs in your phone wallet',
        detail: 'iPhone: tap "Add to Apple Wallet" on every email confirmation. Android: same with Google Wallet. Photograph your passport and credit cards (front and back) and store the photos in a private Notes folder so you have copies if anything is stolen.',
      },
    ],
  },
  {
    id: 'phone-prep',
    title: 'Phone settings to flip',
    icon: Wifi,
    items: [
      {
        id: 'p1',
        title: 'Turn on Find My / Find My Device before you leave',
        detail: 'iPhone: Settings → your name → Find My → Find My iPhone → ON. Android: Settings → Security → Find My Device → ON. Confirms you can locate, ring, or wipe the phone if it is lost or stolen.',
      },
      {
        id: 'p2',
        title: 'Set Wi-Fi to "ask before joining"',
        detail: 'iPhone: Settings → Wi-Fi → Auto-Join Hotspot → Never. Android: Settings → Network → Wi-Fi → Wi-Fi preferences → "Connect to public networks" → OFF. Stops your phone from connecting to "Free_Airport_Wifi" lookalikes that scammers run.',
      },
      {
        id: 'p3',
        title: 'Turn on Lockdown Mode (iPhone, optional)',
        detail: 'Settings → Privacy & Security → Lockdown Mode → Turn On. Locks down iMessage, blocks unknown FaceTime calls, and disables a lot of attack paths. Slightly less convenient — but a fair tradeoff if you are travelling somewhere high-risk.',
        internationalOnly: true,
      },
      {
        id: 'p4',
        title: 'Disable AirDrop / Quick Share for "Everyone"',
        detail: 'AirDrop: Settings → General → AirDrop → "Contacts Only" or "Receiving Off". Android Quick Share: Settings → Connected devices → Quick Share → "Contacts only". Strangers can no longer ping random photos to your screen on the bus.',
      },
    ],
  },
  {
    id: 'wifi-on-trip',
    title: 'Wi-Fi and money on the trip',
    icon: CreditCard,
    items: [
      {
        id: 'w1',
        title: 'Use cellular for banking, never hotel or airport Wi-Fi',
        detail: 'Public Wi-Fi can be safe — but for anything involving your bank, brokerage, or password manager, switch to your cell connection. The handful of cents you spend in roaming is worth far more than your bank login.',
      },
      {
        id: 'w2',
        title: 'Check the Wi-Fi name with the front desk or barista before joining',
        detail: 'Scammers run hotspots called "Hilton-Guest" or "Starbucks_Free_2" right next to the real one. Two minutes asking the front desk saves you a lot of trouble.',
      },
      {
        id: 'w3',
        title: 'Use a credit card, not debit',
        detail: 'A debit card pulls money straight from your account when stolen — recovery can take days. A credit card has a $50 fraud cap and the bank fights it for you. If you only have debit, ask your bank to cap daily spending while you travel.',
      },
      {
        id: 'w4',
        title: 'Tap or insert — do not swipe',
        detail: 'Skimmer devices target the magnetic stripe on the back of your card. Tap-to-pay (Apple Pay, Google Pay, contactless cards) is the safest option in any country.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Day-to-day safety',
    icon: ShieldCheck,
    items: [
      {
        id: 's1',
        title: 'Share your trip in Find My / Google Maps',
        detail: 'iPhone: Find My → People → Share My Location with a family member, set to "indefinitely". Google Maps: tap your photo → Location sharing → pick a contact and a duration. They can see where you are if anything goes wrong.',
      },
      {
        id: 's2',
        title: 'Watch for scams that target tourists',
        detail: '"Spilled" gelato, "found" gold ring, "police" asking to check your wallet, taxi drivers who say the meter is broken. If something feels off, walk into a cafe or hotel lobby and ask staff for help.',
        link: { label: 'Scam Message Decoder', href: '/tools/scam-message-decoder' },
      },
      {
        id: 's3',
        title: 'Carry the embassy phone number (international only)',
        detail: 'Save the US embassy number for the country in your phone before you leave — the State Department lists every embassy at travel.state.gov. They help with lost passports, medical issues, and emergencies.',
        internationalOnly: true,
        link: { label: 'travel.state.gov', href: 'https://travel.state.gov/content/travel/en/international-travel.html' },
      },
      {
        id: 's4',
        title: 'Keep one credit card in a different bag',
        detail: 'If your wallet is stolen, the second card in your hotel safe (or a money belt) gets you home. Same idea for a backup ID — a photocopy of your passport in a separate place.',
      },
    ],
  },
  {
    id: 'photos',
    title: 'Photos and memories',
    icon: Camera,
    items: [
      {
        id: 'm1',
        title: 'Make sure photos back up to the cloud automatically',
        detail: 'iPhone: iCloud Photos → ON. Android: Google Photos → Settings → Backup → ON. If your phone is lost, your photos are still safe on the cloud.',
      },
      {
        id: 'm2',
        title: 'Set the photo location and time once',
        detail: 'iPhone: Settings → Privacy & Security → Location Services → Camera → "While Using". Now every photo records where you took it — the trip retells itself on the timeline.',
      },
      {
        id: 'm3',
        title: 'Share a trip album with the family',
        detail: 'Open Photos → "+" → Shared Album. Invite the family. Anyone you invite gets new photos as you take them — no big email at the end of the trip.',
      },
    ],
  },
  {
    id: 'after',
    title: 'When you get home',
    icon: MapPin,
    items: [
      {
        id: 'a1',
        title: 'Turn off the international plan if you added one',
        detail: 'Most carriers auto-bill the daily fee even after you return if the line still has the plan attached. Call *611 (or check the carrier app) to remove it.',
        internationalOnly: true,
      },
      {
        id: 'a2',
        title: 'Review your bank and card statements within a week',
        detail: 'Travel is the most common time for card fraud to start. Pull each card\'s statement and look for charges you do not recognize. Banks have stronger fraud-protection rules if you flag something within 60 days.',
      },
      {
        id: 'a3',
        title: 'Change passwords on anything you logged into from a hotel computer',
        detail: 'Hotel business-center computers can have keyloggers. Anything you used there — webmail, airline accounts — should get a new password from a trusted device.',
        link: { label: 'Password Health Check', href: '/tools/password-health' },
      },
    ],
  },
];

export default function TravelTechChecklist() {
  const [trip, setTrip] = useState<TripType>('international');
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredSections = SECTIONS.map(s => ({
    ...s,
    items: s.items.filter(it => trip === 'international' || !it.internationalOnly),
  }));

  const totalItems = filteredSections.reduce((s, x) => s + x.items.length, 0);

  const printIt = () => window.print();

  return (
    <>
      <SEOHead
        title="Travel Tech Checklist"
        description="A free, plain-English checklist to set up your phone, wallet, and accounts before a trip — international roaming, public Wi-Fi safety, and scam-aware travel tips."
        path="/tools/travel-tech-checklist"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <Plane className="h-8 w-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Travel Tech Checklist</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Set up your phone, money, and photos before you go. Travel scam-aware. About 20 minutes the week before you leave.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Travel Tech Checklist' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Trip type</p>
                <div className="flex gap-2">
                  {(['international', 'domestic'] as TripType[]).map(t => (
                    <Button key={t} size="sm" variant={trip === t ? 'default' : 'outline'} onClick={() => setTrip(t)}>
                      {t === 'international' ? 'International' : 'Domestic (US)'}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm text-muted-foreground">{done.size} of {totalItems} done</p>
                <Button onClick={printIt} variant="outline" size="sm" className="gap-2">
                  <Printer className="h-4 w-4" /> Print
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skip-ahead nav */}
          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skip ahead</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {filteredSections.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {filteredSections.map(section => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="mb-8 scroll-mt-24">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="space-y-3">
                      {section.items.map(item => (
                        <label
                          key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                          }`}
                        >
                          <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                          <div className="flex-1">
                            <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                            {item.link && (
                              item.link.href.startsWith('/') ? (
                                <Link to={item.link.href}
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                  {item.link.label} <ChevronRight className="h-3 w-3" />
                                </Link>
                              ) : (
                                <a href={item.link.href} target="_blank" rel="noreferrer"
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                  {item.link.label} <ChevronRight className="h-3 w-3" />
                                </a>
                              )
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">A note on "tech support" scams while travelling</p>
                <p className="text-muted-foreground">
                  If your phone gets a pop-up saying "your iPhone is infected — call this number" while abroad, it is a scam. Apple, Google, and Microsoft never display these. Close the browser, restart the phone, and ignore the number.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Travelling = more scam attempts. Check before you reply.</p>
              </Link>
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make sure your phone is fully backed up.</p>
              </Link>
              <Link to="/tools/password-health" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Health Check</p>
                <p className="text-xs text-muted-foreground mt-0.5">Strong passphrase before you log in from anywhere new.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Print version */}
        <div className="hidden print:block px-8 py-6 text-sm">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">Travel Tech Checklist</h1>
            <p className="text-xs text-gray-600 mt-1">{trip === 'international' ? 'International trip' : 'Domestic (US) trip'} — TekSure.com</p>
          </header>
          {filteredSections.map(s => (
            <section key={s.id} className="mb-4 break-inside-avoid">
              <h2 className="font-bold uppercase tracking-wider text-xs mb-2">{s.title}</h2>
              <ul className="space-y-1">
                {s.items.map(item => (
                  <li key={item.id} className="leading-snug">
                    <span className="font-mono mr-1">☐</span>
                    <strong>{item.title}.</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <footer className="mt-6 pt-3 border-t border-gray-300 text-xs text-gray-600">More free travel tools at TekSure.com.</footer>
        </div>
      </main>

      <Footer />
    </>
  );
}
