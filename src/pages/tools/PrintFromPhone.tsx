import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Printer, AlertTriangle } from 'lucide-react';

type Tab = 'home' | 'away' | 'photo';

interface AppGuide {
  name: string;
  setup: string[];
  pro: { title: string; detail: string }[];
}

const HOME_GUIDES: Record<'airprint' | 'mopria', AppGuide> = {
  airprint: {
    name: 'AirPrint (built into iPhone and iPad)',
    setup: [
      'Plug in your printer and turn it on. Most printers from the last ten years support AirPrint — look on the box or the manufacturer site for the AirPrint logo.',
      'Connect the printer to your home Wi-Fi. The printer screen will walk you through picking your network and entering the password.',
      'Make sure your iPhone is on the same Wi-Fi network as the printer.',
      'Open what you want to print (Safari page, Mail message, Photo). Tap the Share icon — the box with the up arrow.',
      'Scroll down and tap Print. Pick your printer from the list, choose how many copies, then tap Print in the top corner.',
    ],
    pro: [
      { title: 'No app or driver needed', detail: 'AirPrint is built in. If the printer supports it, your iPhone finds it on the network with no setup beyond Wi-Fi.' },
      { title: 'Print only the page you need', detail: 'On the print screen, tap the page range. Useful for long emails or PDFs where you only want page 2 of 8.' },
      { title: 'Print double-sided to save paper', detail: 'If your printer supports it, toggle Double-sided on the print screen. Cuts paper use in half.' },
      { title: 'Printer not showing up?', detail: 'Restart the printer, then restart your iPhone Wi-Fi (Settings → Wi-Fi → off, on). Most "missing printer" problems are solved by both being on the same network.' },
    ],
  },
  mopria: {
    name: 'Mopria Print Service (built into Android)',
    setup: [
      'On most Android phones (Samsung, Pixel, Motorola), Mopria Print Service is already installed. If not, install "Mopria Print Service" from the Google Play Store — it is free.',
      'Connect your printer to your home Wi-Fi using the printer screen.',
      'Make sure your Android phone is on the same Wi-Fi network.',
      'Open what you want to print. Tap the three-dot menu (or Share icon) → Print.',
      'Tap "Select a printer" at the top → pick your printer from the list. Adjust copies and pages, then tap the round print button.',
    ],
    pro: [
      { title: 'Works with most major brands', detail: 'HP, Brother, Canon, Epson, Lexmark, and Samsung printers all support Mopria. Look for the Mopria logo on the box if you are buying a new one.' },
      { title: 'Brand apps are optional', detail: 'HP Smart, Canon PRINT, and Epson iPrint exist, but Mopria handles the basics. Only install the brand app if you need ink ordering or scanning features.' },
      { title: 'Save as PDF instead', detail: 'On the printer dropdown, pick "Save as PDF". Saves the page to your phone storage so you can email it instead of printing.' },
      { title: 'Printer offline message?', detail: 'Open the Mopria app → tap your printer → "Test connection". If it fails, the printer dropped off Wi-Fi. Power-cycle the printer.' },
    ],
  },
};

const AWAY_OPTIONS = [
  {
    name: 'Local public library',
    detail: 'Most US public libraries let you print from your phone for free or for a few cents per page. Look on the library website for "mobile printing" or "wireless printing". Common services they use are PrinterOn or Pharos. You email or upload the file, then pick it up at the library print station with your library card.',
  },
  {
    name: 'FedEx Office mobile printing',
    detail: 'Install the FedEx Office app, or go to fedex.com/printonline. Upload your file, pick a FedEx Office store near you, pay online, and pick up — usually within an hour. Good for documents you need notarized, bound, or printed on heavier paper.',
  },
  {
    name: 'The UPS Store mobile printing',
    detail: 'Email your file to the store directly (find the store email at theupsstore.com store locator), or use their print services portal. Pricing varies by store. Good fallback if FedEx Office is not nearby.',
  },
  {
    name: 'Staples and Office Depot',
    detail: 'Both have online print upload at staples.com/print and officedepot.com/printservices. Upload, choose a store, pick up. Same-day service is usually available.',
  },
  {
    name: 'Hotel business center (when traveling)',
    detail: 'Most hotel front desks will print a boarding pass or one-page document for free if you email it to them. Larger hotels have a business center where you can sign in and print yourself.',
  },
];

const PHOTO_OPTIONS = [
  {
    name: 'Walgreens Photo (often same-day)',
    detail: 'Install the Walgreens app or go to walgreens.com/photo. Pick prints, upload from your phone gallery, choose a store, pay, and pick up — often within an hour. 4x6 prints are a few cents each. Walgreens runs frequent sales — watch for 50% off prints around holidays.',
  },
  {
    name: 'CVS Photo (similar to Walgreens)',
    detail: 'CVS app or cvs.com/photo. Same idea — upload, pick a store, pick up. Pricing is comparable to Walgreens. Useful when one chain is closer than the other.',
  },
  {
    name: 'Costco Photo Center',
    detail: 'For Costco members. costco.com/photo-center. Lower per-print pricing than the drugstores, especially for larger sizes (8x10, 11x14). Turnaround is one to three days.',
  },
  {
    name: 'Walmart Photo',
    detail: 'walmart.com/photo or the Walmart app. Often the cheapest per-print price. One-hour pickup at most stores. Good for bulk orders like family reunion photos.',
  },
  {
    name: 'Shutterfly (mailed to you)',
    detail: 'Install Shutterfly. No store pickup — they mail prints, photo books, calendars, and canvas prints to your house. Best for gifts and photo books, not quick prints. Watch for free-print promotions in your email.',
  },
  {
    name: 'Mpix (higher quality, mailed)',
    detail: 'mpix.com or the Mpix app. Higher print quality than the drugstore chains — better for framed prints and gifts. More expensive, mailed to you, two to four day turnaround.',
  },
];

export default function PrintFromPhone() {
  const [tab, setTab] = useState<Tab>('home');
  const [homeApp, setHomeApp] = useState<'airprint' | 'mopria'>('airprint');
  const homeGuide = HOME_GUIDES[homeApp];

  return (
    <>
      <SEOHead
        title="Print from Your Phone"
        description="Print from your iPhone or Android — AirPrint, Mopria, library printing, FedEx Office, UPS Store, and photo prints at Walgreens, CVS, and Costco."
        path="/tools/print-from-phone"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Printer className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Print from Your Phone</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Print at home, at the library, or pick up photo prints at the drugstore — all from your phone.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Print from Your Phone' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Where are you printing?</p>
              <div className="grid sm:grid-cols-3 gap-2">
                {([
                  { id: 'home' as Tab, label: 'At home' },
                  { id: 'away' as Tab, label: 'Somewhere else' },
                  { id: 'photo' as Tab, label: 'Photo prints' },
                ]).map(o => (
                  <button
                    key={o.id}
                    onClick={() => setTab(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      tab === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {tab === 'home' && (
            <>
              <Card className="border-border shadow-sm mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-3">Pick your phone</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {([
                      { id: 'airprint' as const, label: 'iPhone / iPad (AirPrint)' },
                      { id: 'mopria' as const, label: 'Android (Mopria)' },
                    ]).map(o => (
                      <button
                        key={o.id}
                        onClick={() => setHomeApp(o.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          homeApp === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <p className="font-medium text-sm">{o.label}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-2">{homeGuide.name}</Badge>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2">Setup</p>
                  <ol className="space-y-2 mb-4">
                    {homeGuide.setup.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Four tricks worth knowing</p>
                  <div className="space-y-2">
                    {homeGuide.pro.map((t, i) => (
                      <div key={i} className="p-3 rounded-lg border border-border">
                        <p className="font-medium text-sm">{t.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 mb-6">
                <CardContent className="p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Heads-up about HP Instant Ink</p>
                      <p className="text-xs text-muted-foreground mb-2">
                        HP sells a monthly subscription called Instant Ink. The printer counts your printed pages and HP mails you ink before you run out. The price looks low, but read the terms carefully:
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                        <li>Pages are counted whether you print one line or a full color photo. Both count the same.</li>
                        <li>Unused pages roll over only up to a small monthly cap. Most go to waste if you do not print much.</li>
                        <li>The printer phones home to HP. If you cancel the subscription, the cartridges they sent stop working — even if there is ink left.</li>
                        <li>Cancel by going to instantink.hpconnected.com → Account → Cancel. HP makes you click through several pages.</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">
                        It can be a fair deal for high-volume printers. For someone who prints a few pages a week, buying a generic ink cartridge is usually cheaper.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {tab === 'away' && (
            <>
              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-sm mb-3">
                    No printer at home, or your printer is broken? Plenty of places will print from your phone — most of them within the hour. Pick the one closest to you.
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Places to print without a home printer</p>
                  <div className="space-y-3">
                    {AWAY_OPTIONS.map((o, i) => (
                      <div key={i} className="p-3 rounded-lg border border-border">
                        <p className="font-medium text-sm">{o.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{o.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Tip for boarding passes and tickets</p>
                  <p className="text-xs text-muted-foreground">
                    Most airlines accept the boarding pass right on your phone screen — no printing needed. Add it to Apple Wallet (iPhone) or Google Wallet (Android) so it shows up at the airport even without cell service. Same goes for concert and sports tickets.
                  </p>
                </CardContent>
              </Card>
            </>
          )}

          {tab === 'photo' && (
            <>
              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-sm mb-3">
                    Phone photos look great on the screen, but printed photos still mean something — for the fridge, the photo album, or a frame for your grandkids. Most stores let you order from the app and pick up the same day.
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Where to print phone photos</p>
                  <div className="space-y-3">
                    {PHOTO_OPTIONS.map((o, i) => (
                      <div key={i} className="p-3 rounded-lg border border-border">
                        <p className="font-medium text-sm">{o.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{o.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-muted/30 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Photo print sizing — quick guide</p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                    <li><strong>4x6:</strong> standard photo, fits most albums and fridge magnets.</li>
                    <li><strong>5x7:</strong> good for desk frames.</li>
                    <li><strong>8x10:</strong> wall frames, gifts.</li>
                    <li><strong>Square (4x4 or 5x5):</strong> Instagram-style. Some stores offer this, some do not.</li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn paper into a PDF using your phone camera.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Organize and back up photos before printing.</p>
              </Link>
              <Link to="/tools/printer-troubleshooter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Printer Troubleshooter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Fix offline, jam, and ink errors at home.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
