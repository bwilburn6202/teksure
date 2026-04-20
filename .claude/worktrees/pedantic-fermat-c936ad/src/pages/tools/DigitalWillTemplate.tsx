import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, User, Users, Mail, Key, Cloud, Share2, Wallet,
  Tv, Smartphone, Image as ImageIcon, Globe, Shield, Printer,
  AlertTriangle, ExternalLink, CheckCircle2, ArrowRight, Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ─────────────────────────────────────────── */

interface PersonalInfo {
  fullName: string;
  dob: string;
  ssnLast4: string;
  address: string;
}

interface Executor {
  name: string;
  relationship: string;
  phone: string;
  email: string;
}

interface DigitalAssets {
  emailAccounts: string;
  passwordManager: string;
  passwordManagerNotes: string;
  cloudStorage: string;
  socialMedia: string;
  financialAccounts: string;
  subscriptions: string;
  devices: string;
  photoLocations: string;
  onlineBusinesses: string;
  emailSignatures: string;
  domainNames: string;
}

interface PlatformInstructions {
  appleLegacy: string;
  googleInactive: string;
  facebookChoice: string;
  instagramChoice: string;
  linkedinChoice: string;
}

interface PasswordAccess {
  location: string;
  accessMethod: string;
  emergencyContact: string;
}

interface FinalWishes {
  photos: string;
  emailArchive: string;
  socialMedia: string;
  gaming: string;
  crypto: string;
}

const platformLinks: { id: keyof PlatformInstructions; title: string; description: string; url: string }[] = [
  {
    id: 'appleLegacy',
    title: 'Apple Legacy Contact',
    description: 'Lets a trusted person access your Apple ID data after your passing.',
    url: 'https://support.apple.com/en-us/HT212360',
  },
  {
    id: 'googleInactive',
    title: 'Google Inactive Account Manager',
    description: 'Decides what happens to your Google data if your account is inactive.',
    url: 'https://myaccount.google.com/inactive',
  },
  {
    id: 'facebookChoice',
    title: 'Facebook Memorialization',
    description: 'Choose a legacy contact or request an account be deleted after death.',
    url: 'https://www.facebook.com/help/1568013990080948',
  },
  {
    id: 'instagramChoice',
    title: 'Instagram Memorialization',
    description: 'Family can request memorialization or removal of an account.',
    url: 'https://help.instagram.com/264154560391256',
  },
  {
    id: 'linkedinChoice',
    title: 'LinkedIn Account Closure',
    description: 'Family can request a deceased member account be closed or memorialized.',
    url: 'https://www.linkedin.com/help/linkedin/answer/a1336707',
  },
];

const emptyPersonal: PersonalInfo = { fullName: '', dob: '', ssnLast4: '', address: '' };
const emptyExecutor: Executor = { name: '', relationship: '', phone: '', email: '' };
const emptyAssets: DigitalAssets = {
  emailAccounts: '', passwordManager: '', passwordManagerNotes: '', cloudStorage: '',
  socialMedia: '', financialAccounts: '', subscriptions: '', devices: '',
  photoLocations: '', onlineBusinesses: '', emailSignatures: '', domainNames: '',
};
const emptyPlatforms: PlatformInstructions = {
  appleLegacy: '', googleInactive: '', facebookChoice: '',
  instagramChoice: '', linkedinChoice: '',
};
const emptyPassword: PasswordAccess = { location: '', accessMethod: '', emergencyContact: '' };
const emptyWishes: FinalWishes = {
  photos: '', emailArchive: '', socialMedia: '', gaming: '', crypto: '',
};

/* ── Page ──────────────────────────────────────────── */

export default function DigitalWillTemplate() {
  const [personal, setPersonal] = useState<PersonalInfo>(emptyPersonal);
  const [executor, setExecutor] = useState<Executor>(emptyExecutor);
  const [backupExecutor, setBackupExecutor] = useState<Executor>(emptyExecutor);
  const [assets, setAssets] = useState<DigitalAssets>(emptyAssets);
  const [platforms, setPlatforms] = useState<PlatformInstructions>(emptyPlatforms);
  const [password, setPassword] = useState<PasswordAccess>(emptyPassword);
  const [wishes, setWishes] = useState<FinalWishes>(emptyWishes);
  const [generated, setGenerated] = useState(false);

  const todayLong = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  function handlePrint() {
    window.print();
  }

  function scrollToDocument() {
    setGenerated(true);
    setTimeout(() => {
      const el = document.getElementById('generated-will');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Will Template — Create a Free Digital Estate Plan | TekSure"
        description="Build a printable digital will to help your loved ones manage your email, social media, passwords, photos, and online accounts. Free template from TekSure."
        path="/tools/digital-will-template"
      />
      <Navbar />

      {/* Hero */}
      <section className="print:hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            <Shield className="h-3 w-3 mr-1" /> Free Template
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protect Your Digital Life For Your Loved Ones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Fill out this form to create a printable digital will. It helps the person you trust find and
            manage your online accounts, photos, and subscriptions after you are gone.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline">Takes about 20 minutes</Badge>
            <Badge variant="outline">Nothing saved online</Badge>
            <Badge variant="outline">Printable format</Badge>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="print:hidden py-6">
        <div className="container max-w-5xl mx-auto px-4">
          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <CardContent className="p-5 flex gap-3 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <strong>This is not a substitute for a legal will drafted by an attorney.</strong> It is a
                supplement to help your executor manage your digital accounts. For legal estate planning,
                consult a licensed attorney in your state.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form */}
      <section className="print:hidden pb-16">
        <div className="container max-w-5xl mx-auto px-4 space-y-8">

          {/* 1. Personal Information */}
          <SectionCard icon={<User className="h-5 w-5" />} number={1} title="Personal Information">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full legal name">
                <Input value={personal.fullName} onChange={(e) => setPersonal({ ...personal, fullName: e.target.value })} placeholder="Jane Margaret Doe" />
              </Field>
              <Field label="Date of birth">
                <Input type="date" value={personal.dob} onChange={(e) => setPersonal({ ...personal, dob: e.target.value })} />
              </Field>
              <Field label="Last 4 of SSN (optional)">
                <Input value={personal.ssnLast4} onChange={(e) => setPersonal({ ...personal, ssnLast4: e.target.value.replace(/\D/g, '').slice(0, 4) })} placeholder="1234" maxLength={4} />
              </Field>
              <Field label="Primary address">
                <Input value={personal.address} onChange={(e) => setPersonal({ ...personal, address: e.target.value })} placeholder="123 Main St, Springfield, IL 62704" />
              </Field>
            </div>
          </SectionCard>

          {/* 2. Executor */}
          <SectionCard icon={<Users className="h-5 w-5" />} number={2} title="Executor Information" subtitle="The trusted person who will handle your digital accounts.">
            <h3 className="font-semibold mb-3">Primary Executor</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Field label="Name"><Input value={executor.name} onChange={(e) => setExecutor({ ...executor, name: e.target.value })} /></Field>
              <Field label="Relationship"><Input value={executor.relationship} onChange={(e) => setExecutor({ ...executor, relationship: e.target.value })} placeholder="Daughter, son, spouse, friend" /></Field>
              <Field label="Phone"><Input type="tel" value={executor.phone} onChange={(e) => setExecutor({ ...executor, phone: e.target.value })} /></Field>
              <Field label="Email"><Input type="email" value={executor.email} onChange={(e) => setExecutor({ ...executor, email: e.target.value })} /></Field>
            </div>
            <h3 className="font-semibold mb-3">Backup Executor</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name"><Input value={backupExecutor.name} onChange={(e) => setBackupExecutor({ ...backupExecutor, name: e.target.value })} /></Field>
              <Field label="Relationship"><Input value={backupExecutor.relationship} onChange={(e) => setBackupExecutor({ ...backupExecutor, relationship: e.target.value })} /></Field>
              <Field label="Phone"><Input type="tel" value={backupExecutor.phone} onChange={(e) => setBackupExecutor({ ...backupExecutor, phone: e.target.value })} /></Field>
              <Field label="Email"><Input type="email" value={backupExecutor.email} onChange={(e) => setBackupExecutor({ ...backupExecutor, email: e.target.value })} /></Field>
            </div>
          </SectionCard>

          {/* 3. Digital Assets */}
          <SectionCard icon={<FileText className="h-5 w-5" />} number={3} title="Digital Assets Inventory" subtitle="List accounts so your executor knows what to find. Never include passwords here.">
            <div className="space-y-5">
              <AssetField icon={<Mail className="h-4 w-4" />} label="Email accounts (provider and username only — no passwords)" rows={3}
                value={assets.emailAccounts} onChange={(v) => setAssets({ ...assets, emailAccounts: v })}
                placeholder="Gmail: jane.doe@gmail.com&#10;Yahoo: janedoe1956@yahoo.com" />
              <AssetField icon={<Lock className="h-4 w-4" />} label="Password manager (which one, and notes for the executor)" rows={2}
                value={assets.passwordManager} onChange={(v) => setAssets({ ...assets, passwordManager: v })}
                placeholder="1Password. Master password is in safe deposit box at First National Bank." />
              <AssetField icon={<Cloud className="h-4 w-4" />} label="Cloud storage (Google Drive, iCloud, Dropbox, OneDrive)" rows={2}
                value={assets.cloudStorage} onChange={(v) => setAssets({ ...assets, cloudStorage: v })}
                placeholder="iCloud: jane.doe@icloud.com&#10;Dropbox: janedoe@gmail.com" />
              <AssetField icon={<Share2 className="h-4 w-4" />} label="Social media accounts (Facebook, Instagram, LinkedIn, X/Twitter)" rows={3}
                value={assets.socialMedia} onChange={(v) => setAssets({ ...assets, socialMedia: v })}
                placeholder="Facebook: facebook.com/jane.doe.1956&#10;Instagram: @janedoe_gardens" />
              <AssetField icon={<Wallet className="h-4 w-4" />} label="Financial accounts (bank, investment, crypto — list the institutions, not login info)" rows={3}
                value={assets.financialAccounts} onChange={(v) => setAssets({ ...assets, financialAccounts: v })}
                placeholder="Checking: Chase Bank&#10;Investments: Fidelity&#10;Crypto: Coinbase" />
              <AssetField icon={<Tv className="h-4 w-4" />} label="Subscription services to cancel (Netflix, Hulu, gym apps, etc.)" rows={2}
                value={assets.subscriptions} onChange={(v) => setAssets({ ...assets, subscriptions: v })}
                placeholder="Netflix, Hulu, Amazon Prime, New York Times, Peloton app" />
              <AssetField icon={<Smartphone className="h-4 w-4" />} label="Devices (phones, laptops, tablets — with model and serial if known)" rows={2}
                value={assets.devices} onChange={(v) => setAssets({ ...assets, devices: v })}
                placeholder="iPhone 15 Pro (serial in box), MacBook Air 2023, iPad 10th gen" />
              <AssetField icon={<ImageIcon className="h-4 w-4" />} label="Digital photo locations" rows={2}
                value={assets.photoLocations} onChange={(v) => setAssets({ ...assets, photoLocations: v })}
                placeholder="iCloud Photos, external hard drive in office desk drawer, Google Photos" />
              <AssetField icon={<Globe className="h-4 w-4" />} label="Online businesses or websites you own" rows={2}
                value={assets.onlineBusinesses} onChange={(v) => setAssets({ ...assets, onlineBusinesses: v })}
                placeholder="Etsy shop: JaneDoeKnits&#10;Personal blog: janesgarden.blog" />
              <AssetField icon={<Mail className="h-4 w-4" />} label="Email signatures or auto-replies to update" rows={2}
                value={assets.emailSignatures} onChange={(v) => setAssets({ ...assets, emailSignatures: v })}
                placeholder="Work email needs out-of-office disabled; volunteer board email signature updated" />
              <AssetField icon={<Globe className="h-4 w-4" />} label="Domain names owned" rows={2}
                value={assets.domainNames} onChange={(v) => setAssets({ ...assets, domainNames: v })}
                placeholder="janesgarden.blog — registered with GoDaddy, auto-renews yearly" />
            </div>
          </SectionCard>

          {/* 4. Platform Instructions */}
          <SectionCard icon={<ExternalLink className="h-5 w-5" />} number={4} title="Platform Instructions" subtitle="Set these up now — each platform has its own legacy tool. Then note your choices below.">
            <div className="space-y-4">
              {platformLinks.map((p) => (
                <div key={p.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                       className="text-sm text-indigo-600 hover:underline shrink-0 inline-flex items-center gap-1">
                      Set up <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <Input placeholder="Your choice — e.g. 'Legacy contact: Mary Doe', or 'Request deletion'"
                         value={platforms[p.id]}
                         onChange={(e) => setPlatforms({ ...platforms, [p.id]: e.target.value })} />
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 5. Password Access */}
          <SectionCard icon={<Key className="h-5 w-5" />} number={5} title="Password Access Plan" subtitle="Never write passwords in this document. Instead, explain where they live and how to access them.">
            <div className="space-y-4">
              <Field label="Where are the passwords stored?">
                <Textarea rows={2} value={password.location} onChange={(e) => setPassword({ ...password, location: e.target.value })}
                  placeholder="In the 1Password app on my iPhone and Mac. A sealed letter with the master password is in our home safe in the bedroom closet." />
              </Field>
              <Field label="How can your executor access them?">
                <Textarea rows={3} value={password.accessMethod} onChange={(e) => setPassword({ ...password, accessMethod: e.target.value })}
                  placeholder="1) Open home safe (combination is with our attorney John Smith). 2) Find sealed envelope labeled 'Digital Will Passwords'. 3) Use master password to open 1Password." />
              </Field>
              <Field label="Emergency contact set up inside the password manager">
                <Input value={password.emergencyContact} onChange={(e) => setPassword({ ...password, emergencyContact: e.target.value })}
                  placeholder="1Password emergency kit shared with Mary Doe (executor)" />
              </Field>
              <div className="flex gap-3 items-start p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900">
                <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0" />
                <p className="text-sm"><strong>Do not write actual passwords in this will.</strong> A printed will can be copied, lost, or seen by people it was not meant for. Point your executor to where the passwords live instead.</p>
              </div>
            </div>
          </SectionCard>

          {/* 6. Final Wishes */}
          <SectionCard icon={<CheckCircle2 className="h-5 w-5" />} number={6} title="Final Wishes for Digital Content">
            <div className="space-y-4">
              <Field label="What should happen to your photos?">
                <Textarea rows={2} value={wishes.photos} onChange={(e) => setWishes({ ...wishes, photos: e.target.value })}
                  placeholder="Share the iCloud Photos library with my children. Preserve the external backup drive for grandchildren." />
              </Field>
              <Field label="What should happen to your email archive?">
                <Textarea rows={2} value={wishes.emailArchive} onChange={(e) => setWishes({ ...wishes, emailArchive: e.target.value })}
                  placeholder="Export and save emails from the past 10 years to external drive, then close Gmail account after 90 days." />
              </Field>
              <Field label="What should happen to your social media?">
                <Textarea rows={2} value={wishes.socialMedia} onChange={(e) => setWishes({ ...wishes, socialMedia: e.target.value })}
                  placeholder="Memorialize Facebook. Delete Instagram and Twitter/X. Keep LinkedIn active for 30 days for colleagues to see the notice, then close." />
              </Field>
              <Field label="Online gaming or entertainment accounts">
                <Textarea rows={2} value={wishes.gaming} onChange={(e) => setWishes({ ...wishes, gaming: e.target.value })}
                  placeholder="Cancel Xbox Live. Donate Steam library to nephew if possible per Valve policy." />
              </Field>
              <Field label="Cryptocurrency (if applicable)">
                <Textarea rows={2} value={wishes.crypto} onChange={(e) => setWishes({ ...wishes, crypto: e.target.value })}
                  placeholder="Coinbase account holdings should be transferred to estate. Seed phrase for Ledger hardware wallet is in safe deposit box." />
              </Field>
            </div>
          </SectionCard>

          {/* Generate */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-4">
            <Button size="lg" onClick={scrollToDocument} className="bg-indigo-600 hover:bg-indigo-700">
              <FileText className="h-4 w-4 mr-2" /> Generate Printable Document
            </Button>
            {generated && (
              <Button size="lg" variant="outline" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" /> Print or Save as PDF
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Generated Document */}
      {generated && (
        <section id="generated-will" className="bg-white dark:bg-slate-950 py-10 print:py-0 print:bg-white">
          <div className="container max-w-3xl mx-auto px-6 print:px-0 print:max-w-full">
            <div className="prose dark:prose-invert max-w-none print:text-black">
              <h1 className="text-3xl font-bold border-b pb-3 mb-6">
                Digital Will & Asset Memorandum
              </h1>
              <p className="text-sm text-muted-foreground mb-6 print:text-black">
                For: <strong>{personal.fullName || '[Your name]'}</strong> · Prepared on {todayLong}
              </p>

              <DocSection title="1. Personal Information">
                <DocRow label="Full legal name" value={personal.fullName} />
                <DocRow label="Date of birth" value={personal.dob} />
                {personal.ssnLast4 && <DocRow label="Last 4 of SSN" value={personal.ssnLast4} />}
                <DocRow label="Primary address" value={personal.address} />
              </DocSection>

              <DocSection title="2. Executor">
                <h3 className="font-semibold mt-3 mb-1">Primary Executor</h3>
                <DocRow label="Name" value={executor.name} />
                <DocRow label="Relationship" value={executor.relationship} />
                <DocRow label="Phone" value={executor.phone} />
                <DocRow label="Email" value={executor.email} />
                <h3 className="font-semibold mt-4 mb-1">Backup Executor</h3>
                <DocRow label="Name" value={backupExecutor.name} />
                <DocRow label="Relationship" value={backupExecutor.relationship} />
                <DocRow label="Phone" value={backupExecutor.phone} />
                <DocRow label="Email" value={backupExecutor.email} />
              </DocSection>

              <DocSection title="3. Digital Assets Inventory">
                <DocRow label="Email accounts" value={assets.emailAccounts} multiline />
                <DocRow label="Password manager" value={assets.passwordManager} multiline />
                <DocRow label="Cloud storage" value={assets.cloudStorage} multiline />
                <DocRow label="Social media" value={assets.socialMedia} multiline />
                <DocRow label="Financial accounts" value={assets.financialAccounts} multiline />
                <DocRow label="Subscriptions to cancel" value={assets.subscriptions} multiline />
                <DocRow label="Devices" value={assets.devices} multiline />
                <DocRow label="Photo locations" value={assets.photoLocations} multiline />
                <DocRow label="Online businesses" value={assets.onlineBusinesses} multiline />
                <DocRow label="Email signatures to update" value={assets.emailSignatures} multiline />
                <DocRow label="Domain names" value={assets.domainNames} multiline />
              </DocSection>

              <DocSection title="4. Platform Instructions">
                {platformLinks.map((p) => (
                  <DocRow key={p.id} label={p.title} value={platforms[p.id]} />
                ))}
              </DocSection>

              <DocSection title="5. Password Access Plan">
                <DocRow label="Where passwords live" value={password.location} multiline />
                <DocRow label="How to access" value={password.accessMethod} multiline />
                <DocRow label="Emergency contact" value={password.emergencyContact} />
                <p className="text-xs italic mt-2 print:text-black">No passwords are recorded in this document. See access plan above.</p>
              </DocSection>

              <DocSection title="6. Final Wishes for Digital Content">
                <DocRow label="Photos" value={wishes.photos} multiline />
                <DocRow label="Email archive" value={wishes.emailArchive} multiline />
                <DocRow label="Social media" value={wishes.socialMedia} multiline />
                <DocRow label="Gaming" value={wishes.gaming} multiline />
                <DocRow label="Cryptocurrency" value={wishes.crypto} multiline />
              </DocSection>

              <div className="mt-10 border-t pt-6 text-sm print:text-black">
                <p className="italic mb-6">
                  This digital memorandum is a supplement to my legal will. It does not replace
                  legally binding estate documents.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-10">
                  <div>
                    <div className="border-b border-black h-10" />
                    <p className="mt-1 text-xs">Signature</p>
                  </div>
                  <div>
                    <div className="border-b border-black h-10" />
                    <p className="mt-1 text-xs">Date</p>
                  </div>
                  <div>
                    <div className="border-b border-black h-10" />
                    <p className="mt-1 text-xs">Witness signature</p>
                  </div>
                  <div>
                    <div className="border-b border-black h-10" />
                    <p className="mt-1 text-xs">Date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="print:hidden bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Related tools and guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/tools/account-recovery"
                  className="border rounded-lg p-5 hover:shadow-md transition group flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Account Recovery Tool</h3>
                <p className="text-sm text-muted-foreground">Plan ahead so you never get locked out.</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/tools/backup-wizard"
                  className="border rounded-lg p-5 hover:shadow-md transition group flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Backup Wizard</h3>
                <p className="text-sm text-muted-foreground">Protect photos and documents before anything happens.</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ── Helpers ───────────────────────────────────────── */

function SectionCard({
  icon, number, title, subtitle, children,
}: { icon: React.ReactNode; number: number; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 shrink-0">
            {icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground">STEP {number}</p>
            <h2 className="text-xl font-bold leading-tight">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
    </div>
  );
}

function AssetField({
  icon, label, value, onChange, placeholder, rows = 2,
}: { icon: React.ReactNode; label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        {label}
      </Label>
      <Textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold border-b pb-1 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function DocRow({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className="py-1.5">
      <p className="text-sm font-semibold print:text-black">{label}</p>
      {multiline ? (
        <p className="text-sm whitespace-pre-line print:text-black">{value || '—'}</p>
      ) : (
        <p className="text-sm print:text-black">{value || '—'}</p>
      )}
    </div>
  );
}
