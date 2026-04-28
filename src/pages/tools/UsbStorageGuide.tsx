import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HardDrive, Cloud, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface StorageOption {
  id: string;
  name: string;
  cost: string;
  capacity: string;
  ease: string;
  whenToUse: string[];
  recommend: { name: string; price: string; link: string };
  iconColor: string;
}

const STORAGE_TYPES: StorageOption[] = [
  {
    id: 'usb-flash',
    name: 'USB flash drive',
    cost: '$10 to $30',
    capacity: '32 GB to 256 GB',
    ease: 'Plug it in, drag files over. About as plain as it gets.',
    whenToUse: [
      'Sending tax records to your accountant',
      'Bringing photos to a print shop',
      'Moving one or two files between two computers',
      'Storing important documents in a drawer',
    ],
    recommend: {
      name: 'SanDisk Ultra Fit (32GB to 256GB)',
      price: '$12 to $40',
      link: 'https://www.amazon.com/dp/B07857Y17V',
    },
    iconColor: 'text-blue-600 bg-blue-500/10',
  },
  {
    id: 'sd-card',
    name: 'SD card (or microSD)',
    cost: '$15 to $50',
    capacity: '64 GB to 512 GB',
    ease: 'Slides into a camera, dashcam, or some Android phones. Needs an adapter for most laptops.',
    whenToUse: [
      'Backing up phone photos on an Android with an SD slot',
      'Storing footage from a dashcam',
      'Adding more storage to a Nintendo Switch',
      'Camera memory for trips',
    ],
    recommend: {
      name: 'SanDisk Extreme Pro 128GB',
      price: '$25 to $35',
      link: 'https://www.amazon.com/dp/B09X7BYSFG',
    },
    iconColor: 'text-purple-600 bg-purple-500/10',
  },
  {
    id: 'external-hdd',
    name: 'External hard drive (HDD)',
    cost: '$50 to $100',
    capacity: '1 TB to 5 TB',
    ease: 'Plug into your computer with a USB cable. Bigger and slower than an SSD, but a lot of space for the money.',
    whenToUse: [
      'Backing up an entire computer (Time Machine on Mac, File History on Windows)',
      'Archiving years of family photos',
      'Storing old home movies and tax returns',
      'Keeping a copy of everything in case the computer dies',
    ],
    recommend: {
      name: 'WD Easystore 2TB',
      price: '$70 to $90',
      link: 'https://www.bestbuy.com/site/searchpage.jsp?st=wd+easystore+2tb',
    },
    iconColor: 'text-amber-600 bg-amber-500/10',
  },
  {
    id: 'external-ssd',
    name: 'External SSD',
    cost: '$80 to $200',
    capacity: '500 GB to 2 TB',
    ease: 'Same plug-and-go as an HDD, but much faster and no moving parts. Drops do not break it as readily.',
    whenToUse: [
      'Working with video files',
      'Fast computer backups',
      'Carrying a working drive in a bag day to day',
      'Photographers who need fast transfer speeds',
    ],
    recommend: {
      name: 'SanDisk Extreme Portable 1TB',
      price: '$100 to $130',
      link: 'https://www.amazon.com/dp/B08GTYFC37',
    },
    iconColor: 'text-emerald-600 bg-emerald-500/10',
  },
  {
    id: 'cloud',
    name: 'Cloud (iCloud, Google Drive, OneDrive)',
    cost: '$2 to $10 a month',
    capacity: '50 GB to 2 TB',
    ease: 'Once it is set up, it backs things up on its own. No cable, no drive to lose.',
    whenToUse: [
      'Phone photos that back up while you sleep',
      'Documents you want to share with family',
      'Ongoing protection — not a one-time backup',
      'Reaching files from any device with your password',
    ],
    recommend: {
      name: 'iCloud (iPhone), Google One (Android), OneDrive (Windows)',
      price: '$3 a month for 200 GB',
      link: 'https://www.apple.com/icloud/',
    },
    iconColor: 'text-sky-600 bg-sky-500/10',
  },
];

interface Scenario {
  id: string;
  question: string;
  pick: string;
  why: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'phone-swap',
    question: 'Backing up phone photos before getting a new phone',
    pick: 'Cloud first, then a USB or SD card as a second copy',
    why: 'iCloud or Google Photos moves the pictures over for you when you sign in on the new phone. Save a second copy to a USB drive or SD card so you have one offline too.',
  },
  {
    id: 'tax-accountant',
    question: 'Sending tax records to an accountant',
    pick: 'USB flash drive',
    why: 'A small SanDisk Ultra Fit holds many years of tax PDFs and slips into an envelope. Put a label on it. Most accountants prefer a drive over emailing sensitive files.',
  },
  {
    id: 'archive-docs',
    question: 'Archiving old documents and family papers',
    pick: 'External hard drive plus cloud',
    why: 'A 2TB WD Easystore costs about $80 and holds decades of scans. Pair it with a cloud account so a fire or a flood does not take everything.',
  },
  {
    id: 'big-files',
    question: 'Moving big files (videos, photo libraries) between devices',
    pick: 'External SSD',
    why: 'A SanDisk Extreme Portable copies a full photo library in minutes, not hours. The speed makes a real difference once files are bigger than a few gigabytes.',
  },
  {
    id: 'ongoing-backup',
    question: 'Ongoing backup so I do not have to think about it',
    pick: 'Cloud',
    why: 'iCloud, Google One, or OneDrive runs in the background. $3 a month for 200 GB covers a phone and a laptop for most people.',
  },
];

export default function UsbStorageGuide() {
  const [openType, setOpenType] = useState<string | null>(null);

  return (
    <>
      <SEOHead
        title="External Storage Guide"
        description="USB drives, SD cards, external hard drives, SSDs, and cloud storage compared in plain English. Pick the right one for backups, taxes, photos, and big files."
        path="/tools/usb-storage-guide"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-50 via-background to-blue-50 dark:from-slate-950/40 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <HardDrive className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">External Storage Guide</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              USB drives, SD cards, hard drives, SSDs, and the cloud — what each one is for, and which to buy.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'External Storage Guide' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">The short version</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>For one envelope of tax files: a USB flash drive.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>For a full computer backup: an external hard drive.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>For working with video or fast transfers: an external SSD.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>For phone photos and ongoing backup: cloud storage.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>SD cards mostly live inside cameras, dashcams, and the Switch.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">Watch out for fake drives on Amazon</p>
                  <p className="text-sm text-amber-900/90 dark:text-amber-100/90">
                    Many cheap "1TB" or "2TB" USB drives sold by no-name sellers are counterfeit — they show the wrong size to your computer and lose your files. For storage, buy only from sellers marked "Sold by Amazon," or shop at Best Buy or Costco. SanDisk, Samsung, and Western Digital are the safe brand names.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm font-semibold mb-3">The five types, side by side</p>
          <div className="space-y-3 mb-8">
            {STORAGE_TYPES.map((type) => {
              const isOpen = openType === type.id;
              const Icon = type.id === 'cloud' ? Cloud : HardDrive;
              return (
                <Card key={type.id} className="border-border">
                  <CardContent className="p-5">
                    <button
                      onClick={() => setOpenType(isOpen ? null : type.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${type.iconColor}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-base">{type.name}</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{type.cost}</Badge>
                            <Badge variant="outline" className="text-xs">{type.capacity}</Badge>
                          </div>
                        </div>
                        <ChevronRight className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                      </div>
                      <p className="text-sm text-muted-foreground">{type.ease}</p>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-border space-y-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Best for</p>
                          <ul className="space-y-1.5">
                            {type.whenToUse.map((use, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <span className="text-primary shrink-0">•</span>
                                <span>{use}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">We recommend</p>
                          <p className="text-sm font-medium">{type.recommend.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Around {type.recommend.price}</p>
                          <a
                            href={type.recommend.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                          >
                            See it <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p className="text-sm font-semibold mb-3">When to pick what</p>
          <div className="space-y-3 mb-8">
            {SCENARIOS.map((s) => (
              <Card key={s.id} className="border-border">
                <CardContent className="p-5">
                  <p className="font-semibold text-sm mb-1">{s.question}</p>
                  <Badge variant="outline" className="mb-2">{s.pick}</Badge>
                  <p className="text-sm text-muted-foreground">{s.why}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Quick Tip: the 3-2-1 rule</p>
              <p className="text-sm text-muted-foreground mb-2">
                For anything you cannot afford to lose (photos, tax records, family videos), keep:
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong>3 copies</strong> of the file</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>On <strong>2 different kinds of storage</strong> (your computer plus an external drive, for example)</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong>1 copy off-site</strong> (cloud, or a drive at a relative's house)</span></li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                A burglary, a fire, or a hard-drive failure cannot wipe out all three at once.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A few buying notes</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Modern computers use USB-C ports. If your laptop is from 2020 or newer, look for a drive with a USB-C end (or a small adapter).</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>iPhones and most Android phones do not have a USB-A port. To plug in a flash drive, you need one with a Lightning, USB-C, or micro-USB end.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>For a Mac, set the drive to "ExFAT" format if you also want to use it on a Windows computer. Most drives come this way out of the box.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Hard drives last 3 to 5 years on average. Plan to replace yours, and do not store the only copy of anything important on a drive that is older than that.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="outline" size="sm" onClick={() => setOpenType(null)}>
              Collapse all
            </Button>
            <Button variant="outline" size="sm" onClick={() => setOpenType('usb-flash')}>
              Open USB section
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Step-by-step plan to back up your phone and computer.</p>
              </Link>
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Sort, save, and share photos without losing any.</p>
              </Link>
              <Link to="/tools/storage-cleanup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Storage Cleanup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free up space on a phone or laptop that is full.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
