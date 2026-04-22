import { useState } from 'react';
import { ShieldCheck, ChevronRight, ExternalLink, RotateCcw, Search, Clock, Wrench, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ───────────────────────────────── */
type Brand = 'apple' | 'samsung' | 'google' | 'dell' | 'hp' | 'lenovo' | 'microsoft' | 'other';
type DeviceType = 'phone' | 'tablet' | 'laptop' | 'desktop' | 'printer' | 'tv';

interface WarrantyInfo {
  standardPeriod: string;
  extendedOption?: string;
  howToCheck: string;
  checkUrl: string;
  checkUrlLabel: string;
  serialTip: string;
  repairUrl?: string;
  repairUrlLabel?: string;
  supportPhone?: string;
  importantNotes: string[];
}

/* ── Warranty data ───────────────────────── */
const warrantyData: Partial<Record<Brand, Partial<Record<DeviceType, WarrantyInfo>>>> = {
  apple: {
    phone: {
      standardPeriod: '1 year (Apple Limited Warranty)',
      extendedOption: 'AppleCare+ extends to 2–3 years and covers accidental damage',
      howToCheck: "Go to checkcoverage.apple.com and enter your iPhone's serial number. Find the serial number in Settings → General → About → Serial Number.",
      checkUrl: 'https://checkcoverage.apple.com',
      checkUrlLabel: 'Check Apple Coverage',
      serialTip: "On your iPhone: Settings → General → About → Serial Number. You can also find it on the original box.",
      repairUrl: 'https://locate.apple.com',
      repairUrlLabel: 'Find an Apple Store or Authorised Repairer',
      supportPhone: '0800 107 6285 (UK)',
      importantNotes: [
        'AppleCare+ must be purchased within 60 days of buying your device',
        'Water damage voids the standard warranty (AppleCare+ covers one incident)',
        'If bought from Apple, they can check your warranty status in any Apple Store with your device',
      ],
    },
    tablet: {
      standardPeriod: '1 year (Apple Limited Warranty)',
      extendedOption: 'AppleCare+ for iPad extends to 2 years',
      howToCheck: "Go to checkcoverage.apple.com and enter your iPad's serial number. Find it in Settings → General → About.",
      checkUrl: 'https://checkcoverage.apple.com',
      checkUrlLabel: 'Check Apple Coverage',
      serialTip: "Settings → General → About → Serial Number. Also printed on the back of older iPads.",
      repairUrl: 'https://locate.apple.com',
      repairUrlLabel: 'Find an Apple Store',
      supportPhone: '0800 107 6285 (UK)',
      importantNotes: [
        'AppleCare+ covers accidental damage with a small excess fee',
        'Screen cracks are NOT covered under the standard warranty — only manufacturing defects are',
      ],
    },
    laptop: {
      standardPeriod: '1 year (Apple Limited Warranty)',
      extendedOption: 'AppleCare+ for Mac extends to 3 years',
      howToCheck: "Go to checkcoverage.apple.com and enter your Mac's serial number. Find it in  → About This Mac → Serial Number.",
      checkUrl: 'https://checkcoverage.apple.com',
      checkUrlLabel: 'Check Apple Coverage',
      serialTip: "Click the Apple logo (top-left) → About This Mac → look for Serial Number. Also printed on the bottom of the laptop.",
      repairUrl: 'https://locate.apple.com',
      repairUrlLabel: 'Find an Apple Store or Authorised Repairer',
      supportPhone: '0800 107 6285 (UK)',
      importantNotes: [
        'Battery degradation under 80% capacity is covered under warranty within the warranty period',
        'AppleCare+ for Mac covers accidental damage including drops and spills',
      ],
    },
    desktop: {
      standardPeriod: '1 year (Apple Limited Warranty)',
      extendedOption: 'AppleCare+ for Mac extends to 3 years',
      howToCheck: "Click the Apple logo → About This Mac → Serial Number, then enter it at checkcoverage.apple.com.",
      checkUrl: 'https://checkcoverage.apple.com',
      checkUrlLabel: 'Check Apple Coverage',
      serialTip: "Apple logo (top-left) → About This Mac → Serial Number. Also on a label on the back of iMac.",
      repairUrl: 'https://locate.apple.com',
      repairUrlLabel: 'Find an Apple Store',
      supportPhone: '0800 107 6285 (UK)',
      importantNotes: [],
    },
  },
  samsung: {
    phone: {
      standardPeriod: '2 years in the UK / EU (1 year in US)',
      extendedOption: 'Samsung Care+ adds accidental damage cover',
      howToCheck: "Visit samsung.com/uk/support/warranty and enter your IMEI or serial number. Find IMEI in Settings → About Phone → Status → IMEI.",
      checkUrl: 'https://www.samsung.com/uk/support/warranty/',
      checkUrlLabel: 'Check Samsung Warranty',
      serialTip: "Settings → About Phone → Status Information → IMEI. Or dial *#06# on your phone to see the IMEI.",
      repairUrl: 'https://www.samsung.com/uk/support/service-center/',
      repairUrlLabel: 'Find a Samsung Service Center',
      supportPhone: '0330 726 7864 (UK)',
      importantNotes: [
        'Under UK law, you have up to 6 years to claim for faulty goods (2 years statutory warranty)',
        'Screen cracks and physical damage void the manufacturer warranty',
        'Samsung authorised service centers maintain your warranty; third-party repairs may not',
      ],
    },
    tablet: {
      standardPeriod: '2 years in the UK / EU',
      extendedOption: 'Samsung Care+ available at point of sale',
      howToCheck: "Visit samsung.com/uk/support/warranty with your serial number. Find it in Settings → About Tablet → Status.",
      checkUrl: 'https://www.samsung.com/uk/support/warranty/',
      checkUrlLabel: 'Check Samsung Warranty',
      serialTip: "Settings → About Tablet → Serial Number.",
      repairUrl: 'https://www.samsung.com/uk/support/service-center/',
      repairUrlLabel: 'Find a Samsung Service Center',
      supportPhone: '0330 726 7864 (UK)',
      importantNotes: ['UK consumer law gives you 6 years to claim for manufacturing defects'],
    },
    laptop: {
      standardPeriod: '1 year standard (Galaxy Book laptops)',
      extendedOption: 'Samsung Care+ available at purchase',
      howToCheck: "Visit samsung.com/uk/support/warranty with your serial number. Find it on a label on the bottom of the laptop.",
      checkUrl: 'https://www.samsung.com/uk/support/warranty/',
      checkUrlLabel: 'Check Samsung Warranty',
      serialTip: "On a sticker on the bottom of the laptop, or Settings → About → Device Specifications.",
      repairUrl: 'https://www.samsung.com/uk/support/service-center/',
      repairUrlLabel: 'Find a Samsung Service Center',
      supportPhone: '0330 726 7864 (UK)',
      importantNotes: [],
    },
    tv: {
      standardPeriod: '1 year parts and labour (most models)',
      extendedOption: 'Extended cover available from retailers at purchase',
      howToCheck: "Call Samsung support or visit their website with your serial number from the back panel of the TV.",
      checkUrl: 'https://www.samsung.com/uk/support/',
      checkUrlLabel: 'Samsung TV Support',
      serialTip: "On a label on the back of the TV, or Menu → Support → Contact Samsung → Model and Serial.",
      supportPhone: '0330 726 7864 (UK)',
      importantNotes: ['Screen burn-in and physical damage are not covered under standard warranty'],
    },
  },
  microsoft: {
    laptop: {
      standardPeriod: '1 year hardware warranty (Surface devices)',
      extendedOption: 'Microsoft Complete extends to 4 years and adds accidental damage cover',
      howToCheck: "Visit account.microsoft.com/devices and sign in to see your registered Surface devices and warranty status.",
      checkUrl: 'https://account.microsoft.com/devices',
      checkUrlLabel: 'Check Surface Warranty',
      serialTip: "On a label on the bottom of the Surface, or Settings → System → About → look for Serial Number.",
      repairUrl: 'https://support.microsoft.com/en-gb/surface',
      repairUrlLabel: 'Surface Support & Repair',
      supportPhone: '0344 800 2400 (UK)',
      importantNotes: [
        'Microsoft Complete must be purchased within 45 days of buying your Surface',
        'Surface devices can be sent by post for repair — Microsoft provides prepaid shipping',
      ],
    },
  },
  dell: {
    laptop: {
      standardPeriod: '1 year Next Business Day on-site service (most consumer models)',
      extendedOption: 'Dell Premium Support extends to 4 years with 24/7 phone support',
      howToCheck: "Go to dell.com/support and enter your Service Tag (a 7-character code on a sticker on the bottom of the laptop).",
      checkUrl: 'https://www.dell.com/support',
      checkUrlLabel: 'Check Dell Warranty',
      serialTip: "On a sticker on the bottom of the laptop labelled 'Service Tag'. It's 7 characters (letters and numbers).",
      repairUrl: 'https://www.dell.com/en-uk/dt/services/support-services/index.htm',
      repairUrlLabel: 'Dell Support Services',
      supportPhone: '0844 444 3456 (UK)',
      importantNotes: [
        'Dell warranties are transferable — if you bought the laptop secondhand, you still get the remaining warranty',
        'On-site next-business-day service means a technician comes to you',
      ],
    },
    desktop: {
      standardPeriod: '1 year on-site service',
      extendedOption: 'Dell Premium Support available',
      howToCheck: "Enter your Service Tag at dell.com/support. Find it on a sticker on the side or back of your PC.",
      checkUrl: 'https://www.dell.com/support',
      checkUrlLabel: 'Check Dell Warranty',
      serialTip: "On a sticker on the side or back panel. Labelled 'Service Tag'.",
      supportPhone: '0844 444 3456 (UK)',
      importantNotes: [],
    },
  },
  hp: {
    laptop: {
      standardPeriod: '1 year limited warranty',
      extendedOption: 'HP Care Pack extends up to 3 years with on-site or mail-in repair',
      howToCheck: "Go to support.hp.com and enter your serial number. Find it on a sticker on the bottom or in Settings → About.",
      checkUrl: 'https://support.hp.com/gb-en/checkwarranty',
      checkUrlLabel: 'Check HP Warranty',
      serialTip: "On a sticker on the bottom of the laptop. Also in: Settings → System → About → look for Serial Number, or HP Support Assistant app.",
      repairUrl: 'https://support.hp.com/gb-en/repair',
      repairUrlLabel: 'HP Repair Options',
      supportPhone: '0207 660 0596 (UK)',
      importantNotes: [
        'HP Care Pack can sometimes be added after purchase — check within 30 days',
        'HP offers both mail-in and in-home repair options depending on your warranty level',
      ],
    },
    printer: {
      standardPeriod: '1 year limited warranty',
      extendedOption: 'HP+/Instant Ink subscription may include support',
      howToCheck: "Enter your printer serial number at support.hp.com. Find it on a label on the back or bottom of the printer.",
      checkUrl: 'https://support.hp.com/gb-en/checkwarranty',
      checkUrlLabel: 'Check HP Printer Warranty',
      serialTip: "On a label on the back or bottom of the printer. Or print a Configuration Page from the printer menu.",
      supportPhone: '0207 660 0596 (UK)',
      importantNotes: ['Ink and toner cartridges are consumables — not covered under warranty'],
    },
  },
  lenovo: {
    laptop: {
      standardPeriod: '1 year depot (mail-in) warranty',
      extendedOption: 'Lenovo Premium Care extends to 3 years with on-site repair',
      howToCheck: "Go to support.lenovo.com and enter your serial number. Find it on a sticker on the bottom of the laptop.",
      checkUrl: 'https://support.lenovo.com/gb/en/warrantyLookup',
      checkUrlLabel: 'Check Lenovo Warranty',
      serialTip: "On a sticker on the bottom. Also in: Settings → System → About → Serial Number, or press Fn+F10 at startup on some models.",
      repairUrl: 'https://support.lenovo.com/gb/en/repair',
      repairUrlLabel: 'Lenovo Repair & Support',
      supportPhone: '0371 075 8000 (UK)',
      importantNotes: [
        "Lenovo's 'Depot' warranty means you mail in the device — 'On-site' means a technician comes to you",
        'Lenovo warranties can be upgraded up to 5 years from purchase',
      ],
    },
  },
  google: {
    phone: {
      standardPeriod: '1 year limited hardware warranty',
      extendedOption: 'Preferred Care (US) — not widely available in UK',
      howToCheck: "Go to store.google.com/gb/account and check your order, or contact Google Support with your IMEI number.",
      checkUrl: 'https://support.google.com/pixelphone',
      checkUrlLabel: 'Google Pixel Support',
      serialTip: "Settings → About Phone → IMEI / Serial Number. Or on the SIM tray of your phone.",
      supportPhone: 'Via Google Support chat',
      importantNotes: [
        "Google mainly offers chat-based support — phone support is limited",
        "Pixel phones sold through networks (EE, Vodafone, etc.) may have their own support process",
      ],
    },
  },
  other: {
    phone: {
      standardPeriod: 'Typically 1–2 years depending on brand and country',
      extendedOption: 'Check with the retailer at purchase for extended cover options',
      howToCheck: "Find your device's serial number or IMEI (dial *#06# on most phones) and visit the manufacturer's website support section.",
      checkUrl: 'https://www.which.co.uk/consumer-rights/advice/what-to-do-if-your-phone-is-faulty',
      checkUrlLabel: 'UK Consumer Rights Guide',
      serialTip: "Dial *#06# on most Android phones to see your IMEI. Or go to Settings → About Phone → Status.",
      importantNotes: [
        'Under UK consumer law (Consumer Rights Act 2015), you have up to 6 years to claim for a fault that was present at purchase',
        "In the first 6 months, the seller must prove the fault wasn't there at purchase — after that, you must prove it was",
        "Always try the retailer first — they are legally responsible for faulty goods, not the manufacturer",
      ],
    },
    laptop: {
      standardPeriod: 'Typically 1 year manufacturer warranty',
      extendedOption: 'Often available from retailer at purchase',
      howToCheck: 'Find the manufacturer website and search for "warranty check" — you will usually need the serial number from the bottom of the device.',
      checkUrl: 'https://www.which.co.uk/consumer-rights/advice/what-to-do-if-your-laptop-is-faulty',
      checkUrlLabel: 'UK Consumer Rights Guide',
      serialTip: "Usually on a sticker on the bottom of the laptop. Also in Windows Settings → System → About.",
      importantNotes: [
        'Under UK law you have 6 years to claim for manufacturing defects',
        'The retailer is your first point of contact for faulty goods — not always the manufacturer',
      ],
    },
  },
};

const brands: { id: Brand; label: string; emoji: string }[] = [
  { id: 'apple', label: 'Apple', emoji: '' },
  { id: 'samsung', label: 'Samsung', emoji: '' },
  { id: 'microsoft', label: 'Microsoft (Surface)', emoji: '' },
  { id: 'dell', label: 'Dell', emoji: '' },
  { id: 'hp', label: 'HP', emoji: '' },
  { id: 'lenovo', label: 'Lenovo', emoji: '' },
  { id: 'google', label: 'Google (Pixel)', emoji: '' },
  { id: 'other', label: 'Other brand', emoji: '' },
];

const deviceTypes: { id: DeviceType; label: string; emoji: string }[] = [
  { id: 'phone', label: 'Phone / Smartphone', emoji: '' },
  { id: 'tablet', label: 'Tablet', emoji: '' },
  { id: 'laptop', label: 'Laptop', emoji: '' },
  { id: 'desktop', label: 'Desktop PC', emoji: '' },
  { id: 'printer', label: 'Printer', emoji: '' },
  { id: 'tv', label: 'Smart TV', emoji: '' },
];

const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
};

export default function WarrantyChecker() {
  const [step, setStep] = useState(0);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  const info = brand && deviceType ? warrantyData[brand]?.[deviceType] : null;
  const noData = brand && deviceType && !info;

  function reset() { setStep(0); setBrand(null); setDeviceType(null); }

  return (
    <>
      <SEOHead
        title="Warranty & Repair Finder | TekSure"
        description="Find out if your device is still under warranty and where to get it repaired."
        path="/tools/warranty-checker"
      />
      <Navbar />
      <main className="container py-12 min-h-[80vh] max-w-2xl mx-auto">

        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Warranty &amp; Repair Finder</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Find out how long your device warranty lasts, how to check if it's still active, and where to get it repaired.
        </p>

        <>

          {/* Step 0 — Brand */}
          {step === 0 && (
            <div key="brand" {...slide}>
              <h2 className="text-xl font-semibold mb-4">Who made your device?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {brands.map(b => (
                  <button
                    key={b.id}
                    onClick={() => { setBrand(b.id); setStep(1); }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border bg-card text-center transition-all hover:border-primary/60 hover:bg-primary/5"
                  >
                    <span className="text-3xl">{b.emoji}</span>
                    <span className="font-medium text-sm">{b.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — Device type */}
          {step === 1 && (
            <div key="device" {...slide}>
              <h2 className="text-xl font-semibold mb-4">What type of device is it?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {deviceTypes.map(d => (
                  <button
                    key={d.id}
                    onClick={() => { setDeviceType(d.id); setStep(2); }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border bg-card text-center transition-all hover:border-primary/60 hover:bg-primary/5"
                  >
                    <span className="text-3xl">{d.emoji}</span>
                    <span className="font-medium text-sm">{d.label}</span>
                  </button>
                ))}
              </div>
              <Button variant="ghost" className="mt-4" onClick={() => setStep(0)}>← Back</Button>
            </div>
          )}

          {/* Step 2 — Results */}
          {step === 2 && (
            <div key="results" {...slide}>
              {noData ? (
                <div className="text-center py-12">
                  <p className="text-5xl mb-4"></p>
                  <h2 className="text-xl font-semibold mb-2">No specific data for this combination</h2>
                  <p className="text-muted-foreground mb-6">
                    We don't have specific warranty information for {brands.find(b => b.id === brand)?.label} {deviceTypes.find(d => d.id === deviceType)?.label.toLowerCase()} devices yet. Your best bet is to contact the manufacturer directly or check their website.
                  </p>
                  <Button variant="outline" onClick={reset}>Try another device</Button>
                </div>
              ) : info ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{brands.find(b => b.id === brand)?.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{brands.find(b => b.id === brand)?.label} {deviceTypes.find(d => d.id === deviceType)?.label}</h2>
                      <p className="text-muted-foreground text-sm">Warranty &amp; repair information</p>
                    </div>
                  </div>

                  <div className="grid gap-4 mb-6">
                    {/* Warranty period */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">Standard warranty period</p>
                            <p className="text-sm text-muted-foreground">{info.standardPeriod}</p>
                            {info.extendedOption && (
                              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                                <strong>Extended option:</strong> {info.extendedOption}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* How to check */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Search className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold mb-2">How to check your warranty</p>
                            <p className="text-sm text-muted-foreground mb-3">{info.howToCheck}</p>
                            <div className="rounded-lg bg-muted/60 p-3 mb-3">
                              <p className="text-xs font-semibold text-muted-foreground mb-1"> Where to find your serial number:</p>
                              <p className="text-sm">{info.serialTip}</p>
                            </div>
                            <Button asChild size="sm">
                              <a href={info.checkUrl} target="_blank" rel="noreferrer">
                                {info.checkUrlLabel} <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Repair options */}
                    {(info.repairUrl || info.supportPhone) && (
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Wrench className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <div>
                              <p className="font-semibold mb-2">Get it repaired</p>
                              <div className="flex flex-wrap gap-2">
                                {info.repairUrl && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={info.repairUrl} target="_blank" rel="noreferrer">
                                      {info.repairUrlLabel} <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>
                                  </Button>
                                )}
                                {info.supportPhone && (
                                  <div className="flex items-center gap-2 text-sm">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span>{info.supportPhone}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Important notes */}
                    {info.importantNotes.length > 0 && (
                      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
                        <CardContent className="p-4">
                          <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2"> Important to know</p>
                          <ul className="space-y-1">
                            {info.importantNotes.map((note, i) => (
                              <li key={i} className="text-sm text-amber-700/90 dark:text-amber-300/90 flex items-start gap-2">
                                <span className="mt-1 shrink-0">•</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* UK Consumer rights reminder */}
                  <Card className="mb-6 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
                    <CardContent className="p-4">
                      <p className="font-semibold text-blue-700 dark:text-blue-400 mb-1"> UK Consumer Rights</p>
                      <p className="text-sm text-blue-700/90 dark:text-blue-300/90">
                        Under the Consumer Rights Act 2015, goods must be of satisfactory quality and last a reasonable time. You may be entitled to a repair, replacement, or refund for up to 6 years — even after the manufacturer warranty expires. Always contact the <strong>retailer</strong> (shop you bought it from) first, not just the manufacturer.
                      </p>
                    </CardContent>
                  </Card>

                  <Button variant="outline" onClick={reset} className="gap-2">
                    <RotateCcw className="h-4 w-4" /> Check another device
                  </Button>
                </div>
              ) : null}
            </div>
          )}

        </>
      </main>
      <Footer />
    </>
  );
}
